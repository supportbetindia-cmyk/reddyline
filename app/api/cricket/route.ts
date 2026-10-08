import { NextResponse } from "next/server";
import { MOCK_MATCHES, type MockMatch } from "../../data/mockMatches";

export const dynamic = "force-static";

type CricApiScore = { r: number; w: number; o: number; inning?: string };
type CricApiTeamInfo = { name?: string; shortname?: string; img?: string };
type CricApiMatch = {
  id: string;
  name: string;
  matchType?: string;
  status?: string;
  venue?: string;
  date?: string;
  matchEnded?: boolean;
  teams?: string[];
  teamInfo?: CricApiTeamInfo[];
  score?: CricApiScore[];
};

let cachedData: MockMatch[] | null = null;
let lastFetched = 0;
const CACHE_DURATION_MS = 90000;

function mapCricApiMatch(match: CricApiMatch): MockMatch {
  const teams = match.teamInfo || [
    { name: match.teams?.[0] || "Team A", shortname: (match.teams?.[0] || "TMA").substring(0, 3).toUpperCase(), img: "" },
    { name: match.teams?.[1] || "Team B", shortname: (match.teams?.[1] || "TMB").substring(0, 3).toUpperCase(), img: "" }
  ];

  const score1 = match.score?.[0];
  const score2 = match.score?.[1];

  return {
    id: match.id,
    name: match.name,
    matchType: match.matchType?.toUpperCase() || "T20",
    status: match.status || "Match in Progress",
    venue: match.venue || "Stadium",
    date: match.date || "",
    live: !match.matchEnded,
    teams: [
      {
        name: teams[0]?.name || "Team 1",
        short: teams[0]?.shortname || "T1",
        logo: teams[0]?.img || "",
        score: score1 ? `${score1.r}/${score1.w}` : "",
        overs: score1 ? score1.o : 0,
      },
      {
        name: teams[1]?.name || "Team 2",
        short: teams[1]?.shortname || "T2",
        logo: teams[1]?.img || "",
        score: score2 ? `${score2.r}/${score2.w}` : "",
        overs: score2 ? score2.o : 0,
      }
    ],
    odds: { team1: 1.95, team2: 1.85 },
  };
}

export async function GET() {
  // Static export build: no live server, serve simulated data.
  if (process.env.STATIC_EXPORT === "true") {
    return NextResponse.json({ success: true, simulated: true, matches: MOCK_MATCHES });
  }

  const apiKey = process.env.CRICKET_API_KEY;

  // If api key is not set, return simulated match data
  if (!apiKey || apiKey === "YOUR_API_KEY" || apiKey.trim() === "") {
    return NextResponse.json({
      success: true,
      simulated: true,
      matches: MOCK_MATCHES,
      message: "Showing simulated data. Set CRICKET_API_KEY in environment variables to fetch live API data."
    });
  }

  // Handle in-memory caching to save daily quota
  const now = Date.now();
  if (cachedData && (now - lastFetched < CACHE_DURATION_MS)) {
    return NextResponse.json({
      success: true,
      simulated: false,
      cached: true,
      matches: cachedData
    });
  }

  try {
    const res = await fetch(`https://api.cricapi.com/v1/currentMatches?apikey=${apiKey}&offset=0`, {
      next: { revalidate: 60 } // Next.js cache layer too
    });

    if (!res.ok) {
      throw new Error(`Cricket API returned status: ${res.status}`);
    }

    const json = await res.json();

    if (json.status !== "success" || !json.data) {
      throw new Error(json.reason || "Invalid status returned by CricAPI");
    }

    // Process matches
    const rawMatches = json.data || [];

    // Take up to 5 current matches to not overwhelm the widget
    const processedMatches = rawMatches.slice(0, 5).map((match: CricApiMatch) => {
      const mapped = mapCricApiMatch(match);

      // Calculate realistic betting odds based on scores
      if (mapped.live) {
        // Simple heuristic odds calculation
        const team1Runs = parseInt(mapped.teams[0].score.split("/")[0]) || 0;
        const team2Runs = parseInt(mapped.teams[1].score.split("/")[0]) || 0;
        const diff = team1Runs - team2Runs;
        if (diff > 20) {
          mapped.odds.team1 = 1.45;
          mapped.odds.team2 = 2.65;
        } else if (diff < -20) {
          mapped.odds.team1 = 2.65;
          mapped.odds.team2 = 1.45;
        } else {
          mapped.odds.team1 = 1.88;
          mapped.odds.team2 = 1.92;
        }
      }
      return mapped;
    });

    cachedData = processedMatches.length > 0 ? processedMatches : MOCK_MATCHES;
    lastFetched = now;

    return NextResponse.json({
      success: true,
      simulated: processedMatches.length === 0,
      matches: cachedData
    });
  } catch (error: unknown) {
    console.error("Error fetching live cricket matches:", error);

    // Fallback to mock matches in case of API failure, indicating error status
    return NextResponse.json({
      success: true,
      simulated: true,
      error: error instanceof Error ? error.message : "Failed to fetch live scores",
      matches: MOCK_MATCHES,
      message: "Failed to fetch real-time data; fell back to simulated matches."
    });
  }
}

// Shared mock cricket data — used by the /api/cricket route AND as a client-side
// fallback so the Live Cricket Widget shows content even when no API/server is
// available (e.g. static export on shared hosting).

export type MockMatch = {
  id: string;
  name: string;
  matchType: string;
  status: string;
  venue: string;
  date: string;
  live: boolean;
  teams: { name: string; short: string; logo: string; score: string; overs: number }[];
  odds: { team1: number; team2: number };
};

export const MOCK_MATCHES: MockMatch[] = [
  {
    id: "mock-match-1",
    name: "Mumbai Indians vs Chennai Super Kings",
    matchType: "IPL 2026",
    status: "MI needs 32 runs in 18 balls",
    venue: "Wankhede Stadium, Mumbai",
    date: "2026-06-12",
    live: true,
    teams: [
      {
        name: "Mumbai Indians",
        short: "MI",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/c/cd/Mumbai_Indians_Logo.svg/150px-Mumbai_Indians_Logo.svg.png",
        score: "145/6",
        overs: 17.0,
      },
      {
        name: "Chennai Super Kings",
        short: "CSK",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2b/Chennai_Super_Kings_Logo.svg/150px-Chennai_Super_Kings_Logo.svg.png",
        score: "176/4",
        overs: 20.0,
      },
    ],
    odds: { team1: 2.34, team2: 1.58 },
  },
  {
    id: "mock-match-2",
    name: "India vs Australia",
    matchType: "T20 INTERNATIONAL",
    status: "Australia chose to bat first",
    venue: "Melbourne Cricket Ground, Melbourne",
    date: "2026-06-12",
    live: true,
    teams: [
      {
        name: "India",
        short: "IND",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/BCCI_logo.svg/150px-BCCI_logo.svg.png",
        score: "0/0",
        overs: 0.0,
      },
      {
        name: "Australia",
        short: "AUS",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Cricket_Australia_logo.svg/150px-Cricket_Australia_logo.svg.png",
        score: "48/1",
        overs: 5.2,
      },
    ],
    odds: { team1: 1.72, team2: 2.1 },
  },
  {
    id: "mock-match-3",
    name: "England vs Pakistan",
    matchType: "ODI SERIES",
    status: "England won by 5 wickets",
    venue: "Lord's, London",
    date: "2026-06-11",
    live: false,
    teams: [
      {
        name: "England",
        short: "ENG",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e9/England_Cricket_team_logo.svg/150px-England_Cricket_team_logo.svg.png",
        score: "246/5",
        overs: 44.2,
      },
      {
        name: "Pakistan",
        short: "PAK",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b2/Pakistan_Cricket_Board_Logo.svg/150px-Pakistan_Cricket_Board_Logo.svg.png",
        score: "242/10",
        overs: 48.5,
      },
    ],
    odds: { team1: 1.0, team2: 12.0 },
  },
];

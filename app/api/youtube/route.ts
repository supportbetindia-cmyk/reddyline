import { NextResponse } from "next/server";
import { MOCK_VIDEOS, type YouTubeVideo } from "../../data/mockVideos";

// Static export pre-renders this to its simulated payload; on a Node server it
// behaves as ISR (the live fetch below carries its own revalidate window).
export const dynamic = "force-static";

const DEFAULT_LIMIT = 12;

// Global cache variables
let cachedVideos: YouTubeVideo[] | null = null;
let lastFetched = 0;
const CACHE_DURATION_MS = 3600000; // 1 hour caching to protect Youtube API quota (10,000 units/day)

// Always fetch the maximum so the cached list can satisfy any `limit`,
// regardless of which request happened to populate the cache.
const MAX_RESULTS = 25;

type YouTubeSearchItem = {
  id: { videoId: string };
  snippet: {
    title?: string;
    thumbnails?: { medium?: { url?: string }; high?: { url?: string } };
    channelTitle?: string;
    publishedAt?: string;
    liveBroadcastContent?: string;
  };
};

// Resolved channel id, cached for the lifetime of the server process so the
// @handle lookup only costs one API call.
let resolvedChannelId: string | null = null;

/**
 * Returns the channel id to restrict results to, or null for a global search.
 * YOUTUBE_CHANNEL accepts either a raw channel id ("UC...") or a handle
 * ("@SomeChannel"), which is resolved via the channels endpoint.
 */
async function getChannelId(apiKey: string): Promise<string | null> {
  const configured = process.env.YOUTUBE_CHANNEL?.trim();
  if (!configured) return null;
  if (configured.startsWith("UC")) return configured;
  if (resolvedChannelId) return resolvedChannelId;

  const handle = configured.startsWith("@") ? configured : `@${configured}`;
  const res = await fetch(
    `https://www.googleapis.com/youtube/v3/channels?part=id&forHandle=${encodeURIComponent(handle)}&key=${apiKey}`,
    { next: { revalidate: 86400 } }
  );
  if (!res.ok) {
    throw new Error(`Channel lookup for ${handle} returned status ${res.status}`);
  }
  const data = await res.json();
  const id = data.items?.[0]?.id;
  if (!id) {
    throw new Error(`No YouTube channel found for handle ${handle}`);
  }
  resolvedChannelId = id;
  return id;
}

export async function GET() {
  // Static export build: no live server, serve simulated data.
  if (process.env.STATIC_EXPORT === "true") {
    return NextResponse.json({ success: true, simulated: true, videos: MOCK_VIDEOS.slice(0, DEFAULT_LIMIT) });
  }

  const limit = DEFAULT_LIMIT;
  const apiKey = process.env.YOUTUBE_API_KEY;

  // If no API key configured, return mock data
  if (!apiKey || apiKey === "YOUR_YOUTUBE_API_KEY" || apiKey.trim() === "") {
    return NextResponse.json({
      success: true,
      simulated: true,
      videos: MOCK_VIDEOS.slice(0, limit),
      message: "Showing fallback data. Set YOUTUBE_API_KEY in environment variables to fetch live YouTube feeds.",
    });
  }

 
  const now = Date.now();
  if (cachedVideos && now - lastFetched < CACHE_DURATION_MS) {
    return NextResponse.json({
      success: true,
      simulated: false,
      cached: true,
      videos: cachedVideos.slice(0, limit),
    });
  }

  try {
    const params = new URLSearchParams({
      part: "snippet",
      type: "video",
      key: apiKey,
      maxResults: String(MAX_RESULTS),
      order: "date",
    });

    // When a channel is configured, list its latest uploads; otherwise fall
    // back to a global search optimized for live matches and highlights.
    const channelId = await getChannelId(apiKey);
    if (channelId) {
      params.set("channelId", channelId);
    } else {
      params.set("q", "cricket match highlights live");
    }

    const url = `https://www.googleapis.com/youtube/v3/search?${params}`;

    const res = await fetch(url, {
      next: { revalidate: 1800 } // Next.js level fetch cache (30 minutes)
    });

    if (!res.ok) {
      throw new Error(`YouTube API returned status ${res.status}`);
    }

    const data = await res.json();

    if (!data.items || data.items.length === 0) {
      throw new Error("No video items returned by YouTube API");
    }

    const processedVideos: YouTubeVideo[] = data.items.map((item: YouTubeSearchItem) => {
      // Decode HTML entities commonly returned in YouTube titles
      let title = item.snippet.title || "Cricket Video";
      title = title
        .replace(/&amp;/g, "&")
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'");

      return {
        id: item.id.videoId,
        title,
        thumbnail: item.snippet.thumbnails?.medium?.url || item.snippet.thumbnails?.high?.url || "",
        channelTitle: item.snippet.channelTitle || "YouTube Creator",
        publishedAt: item.snippet.publishedAt || "",
        live: item.snippet.liveBroadcastContent === "live"
      };
    });

    cachedVideos = processedVideos;
    lastFetched = now;

    return NextResponse.json({
      success: true,
      simulated: false,
      videos: processedVideos.slice(0, limit),
    });
  } catch (error: unknown) {
    console.error("Error fetching YouTube videos:", error);
    const message = error instanceof Error ? error.message : "Failed to fetch YouTube feeds";

    // Serve mock matches as a robust fallback
    return NextResponse.json({
      success: true,
      simulated: true,
      error: message,
      videos: MOCK_VIDEOS.slice(0, limit),
      message: "Fell back to mock cricket videos due to API connection error.",
    });
  }
}

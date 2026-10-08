// Shared mock YouTube data — used by the /api/youtube route AND as a client-side
// fallback so the highlights feed shows content even when no API/server is
// available (e.g. static export on shared hosting).

export type YouTubeVideo = {
  id: string;
  title: string;
  thumbnail: string;
  channelTitle: string;
  publishedAt: string;
  live: boolean;
};

export const MOCK_VIDEOS: YouTubeVideo[] = [
  {
    id: "INDAUSLiveT20",
    title: "IND vs AUS T20 – Live Match Centre & Ball-by-Ball",
    thumbnail: "https://img.youtube.com/vi/8kZg_ALxFx0/hqdefault.jpg",
    channelTitle: "Cricket Live Stream",
    publishedAt: new Date().toISOString(),
    live: true,
  },
  {
    id: "MIvCSK2026",
    title: "IPL 2026: MI vs CSK – Full Match Highlights",
    thumbnail: "https://img.youtube.com/vi/JGwWNGJdvx8/hqdefault.jpg",
    channelTitle: "IPL Official",
    publishedAt: new Date(Date.now() - 86400000).toISOString(),
    live: false,
  },
  {
    id: "ENGPAKHighlights",
    title: "ENG vs PAK – 2nd ODI Best Moments & Highlights",
    thumbnail: "https://img.youtube.com/vi/fLexgOxsZu0/hqdefault.jpg",
    channelTitle: "Cricket Highlights HD",
    publishedAt: new Date(Date.now() - 172800000).toISOString(),
    live: false,
  },
  {
    id: "cricket_best_catches",
    title: "Top 10 Cricket Catches of the Season",
    thumbnail: "https://img.youtube.com/vi/OPf0YbXqDm0/hqdefault.jpg",
    channelTitle: "Cricket Vault",
    publishedAt: new Date(Date.now() - 259200000).toISOString(),
    live: false,
  },
  {
    id: "mock-t20-world-cup",
    title: "T20 World Cup – Super Over Thriller Highlights",
    thumbnail: "https://img.youtube.com/vi/kJQP7kiw5Fk/hqdefault.jpg",
    channelTitle: "ICC Cricket",
    publishedAt: new Date(Date.now() - 345600000).toISOString(),
    live: false,
  },
  {
    id: "mock-ipl-final",
    title: "IPL Final – Last Over Finish | Extended Highlights",
    thumbnail: "https://img.youtube.com/vi/60ItHLz5WEA/hqdefault.jpg",
    channelTitle: "Star Sports",
    publishedAt: new Date(Date.now() - 432000000).toISOString(),
    live: false,
  },
];

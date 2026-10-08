"use client";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  AlertTriangle,
  Film,
  Play,
  Radio,
  RefreshCw,
  Sparkles,
  Tv,
  X,
  Clock,
  Zap,
} from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";
import { MOCK_VIDEOS } from "../data/mockVideos";

interface Video {
  id: string;
  title: string;
  thumbnail: string;
  channelTitle: string;
  publishedAt: string;
  live: boolean;
}

type FilterTab = "all" | "live" | "highlights";

const MOCK_VIDEO_IDS = new Set([
  "INDAUSLiveT20",
  "MIvCSK2026",
  "ENGPAKHighlights",
  "cricket_best_catches",
  "mock-t20-world-cup",
  "mock-ipl-final",
]);

function youtubeIdFromThumbnail(thumbnail: string) {
  const match = thumbnail.match(/\/vi\/([^/]+)\//);
  return match?.[1] ?? null;
}

function isMockVideo(video: Video, simulated: boolean) {
  return (
    simulated ||
    video.id.startsWith("mock") ||
    MOCK_VIDEO_IDS.has(video.id) ||
    !/^[a-zA-Z0-9_-]{11}$/.test(video.id)
  );
}

function getEmbedUrl(video: Video, simulated: boolean) {
  if (isMockVideo(video, simulated)) {
    const fromThumb = youtubeIdFromThumbnail(video.thumbnail);
    if (fromThumb) {
      return `https://www.youtube.com/embed/${fromThumb}?autoplay=1`;
    }
    return "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1";
  }

  return `https://www.youtube.com/embed/${video.id}?autoplay=1`;
}

function formatPublishedDate(iso: string) {
  if (!iso) return "";
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return "";
  return date.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function VideoCard({
  video,
  index,
  featured,
  onPlay,
  onFeature,
  size = "default",
}: {
  video: Video;
  index: number;
  featured: boolean;
  onPlay: () => void;
  onFeature: () => void;
  size?: "default" | "large" | "compact";
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      onClick={onPlay}
      className={clsx(
        "group relative cursor-pointer overflow-hidden rounded-2xl",
        size === "large" && "lg:row-span-2",
        featured && "ring-1 ring-[#F6C453]/40"
      )}
    >
      {/* Gradient border glow */}
      <div
        className={clsx(
          "absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10",
          "bg-gradient-to-br from-[#D4AF37] via-[#F6C453] to-transparent"
        )}
      />

      <div
        className={clsx(
          "relative h-full overflow-hidden rounded-2xl border bg-[#0a1220]/80 backdrop-blur-xl transition-all duration-500",
          featured
            ? "border-[#F6C453]/30 shadow-[0_0_40px_rgba(246, 196, 83,0.15)]"
            : "border-white/[0.06] group-hover:border-[#F6C453]/25 group-hover:shadow-[0_20px_60px_rgba(0,0,0,0.45)]"
        )}
      >
        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-[#F6C453]/0 group-hover:border-[#F6C453]/40 transition-colors rounded-tl-2xl z-10 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-[#F6C453]/0 group-hover:border-[#F6C453]/40 transition-colors rounded-br-2xl z-10 pointer-events-none" />

        <div
          className={clsx(
            "relative overflow-hidden bg-black",
            size === "large" ? "aspect-[16/10] lg:aspect-auto lg:h-[58%]" : "aspect-video"
          )}
        >
          <img
            src={video.thumbnail}
            alt={video.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1220] via-[#0a1220]/20 to-transparent" />
          <div className="absolute inset-0 bg-[#D4AF37]/0 group-hover:bg-[#D4AF37]/10 transition-colors duration-500" />

          {/* Scan line overlay */}
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-overlay"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.5) 2px, rgba(255,255,255,0.5) 4px)",
            }}
          />

          {video.live ? (
            <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-red-600/90 backdrop-blur-sm text-white text-[10px] font-black uppercase tracking-[0.15em] px-2.5 py-1 rounded-md shadow-[0_0_20px_rgba(220,38,38,0.5)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
              </span>
              Live
            </div>
          ) : (
            <div className="absolute top-3 left-3 text-[9px] font-bold uppercase tracking-[0.2em] text-white/70 bg-black/50 backdrop-blur-sm px-2 py-0.5 rounded border border-white/10">
              Highlights
            </div>
          )}

          {featured && (
            <div className="absolute top-3 right-3 flex items-center gap-1 text-[9px] font-bold uppercase tracking-wider text-[#F6C453] bg-[#F6C453]/10 backdrop-blur-sm border border-[#F6C453]/30 px-2 py-0.5 rounded">
              <Sparkles className="w-3 h-3" />
              Featured
            </div>
          )}

          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#F6C453] flex items-center justify-center shadow-[0_0_40px_rgba(246, 196, 83,0.6)] scale-75 group-hover:scale-100 transition-transform duration-300">
              <Play className="w-6 h-6 text-white fill-white ml-0.5" />
            </div>
          </div>
        </div>

        <div className={clsx("p-4", size === "large" && "lg:p-5")}>
          <h3
            className={clsx(
              "text-white font-syne font-bold leading-snug line-clamp-2 group-hover:text-[#F6C453] transition-colors",
              size === "large" ? "text-base lg:text-lg" : "text-[13px]"
            )}
          >
            {video.title}
          </h3>
          <div className="flex items-center justify-between mt-2.5 gap-2">
            <span className="text-[11px] text-muted truncate">{video.channelTitle}</span>
            {video.publishedAt && (
              <span className="flex items-center gap-1 text-[10px] text-muted/80 shrink-0">
                <Clock className="w-3 h-3" />
                {formatPublishedDate(video.publishedAt)}
              </span>
            )}
          </div>
          {!featured && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onFeature();
              }}
              className="mt-3 text-[10px] font-bold uppercase tracking-[0.15em] text-[#F6C453]/70 hover:text-[#F6C453] transition-colors cursor-pointer opacity-0 group-hover:opacity-100"
            >
              Pin to spotlight →
            </button>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function HighlightsPage() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [simulated, setSimulated] = useState(false);
  const [activeFilter, setActiveFilter] = useState<FilterTab>("all");
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [featuredVideo, setFeaturedVideo] = useState<Video | null>(null);

  // State updates only happen after the awaited fetch, so this is safe to
  // call from an effect; retryFetch adds the spinner for manual retries.
  const fetchVideos = useCallback(async () => {
    try {
      const res = await fetch("/api/youtube?limit=25");
      if (!res.ok) {
        throw new Error(`Failed to fetch videos (${res.status})`);
      }

      const data = await res.json();
      if (!data.success || !data.videos) {
        throw new Error(data.error || "Unable to load highlights");
      }

      setVideos(data.videos);
      setSimulated(!!data.simulated);
      setError(null);
      setFeaturedVideo((prev) => {
        if (prev && data.videos.some((v: Video) => v.id === prev.id)) {
          return prev;
        }
        return data.videos[0] ?? null;
      });
    } catch (err: unknown) {
      // No reachable API (e.g. static export) — fall back to bundled highlights
      // so the feed still renders instead of showing an error screen.
      console.error(err);
      setVideos(MOCK_VIDEOS);
      setSimulated(true);
      setError(null);
      setFeaturedVideo((prev) => prev ?? MOCK_VIDEOS[0] ?? null);
    } finally {
      setLoading(false);
    }
  }, []);

  const retryFetch = useCallback(() => {
    setLoading(true);
    setError(null);
    void fetchVideos();
  }, [fetchVideos]);

  useEffect(() => {
    // Initial data load: state updates happen only after the awaited fetch
    // resolves, so this cannot cascade synchronous renders.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchVideos();
  }, [fetchVideos]);

  const filteredVideos = useMemo(() => {
    if (activeFilter === "live") return videos.filter((v) => v.live);
    if (activeFilter === "highlights") return videos.filter((v) => !v.live);
    return videos;
  }, [videos, activeFilter]);

  const upNextVideos = useMemo(() => {
    if (!featuredVideo) return filteredVideos.slice(0, 5);
    return filteredVideos.filter((v) => v.id !== featuredVideo.id).slice(0, 5);
  }, [filteredVideos, featuredVideo]);

  const gridVideos = useMemo(() => {
    if (!featuredVideo) return filteredVideos;
    return filteredVideos.filter((v) => v.id !== featuredVideo.id);
  }, [filteredVideos, featuredVideo]);

  const liveCount = videos.filter((v) => v.live).length;

  const filterTabs: { id: FilterTab; label: string; count: number; icon: React.ReactNode }[] = [
    { id: "all", label: "All Streams", count: videos.length, icon: <Film className="w-3.5 h-3.5" /> },
    { id: "live", label: "Live Now", count: liveCount, icon: <Radio className="w-3.5 h-3.5" /> },
    { id: "highlights", label: "Highlights", count: videos.length - liveCount, icon: <Zap className="w-3.5 h-3.5" /> },
  ];

  return (
    <>
      <ScrollReveal />

      <div className="relative min-h-screen bg-[#030914] overflow-hidden">
        {/* Ambient background */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage: "radial-gradient(ellipse 90% 70% at 50% 0%, black 10%, transparent 75%)",
            WebkitMaskImage: "radial-gradient(ellipse 90% 70% at 50% 0%, black 10%, transparent 75%)",
          }}
        />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[radial-gradient(ellipse,rgba(246, 196, 83,0.12)_0%,transparent_65%)] pointer-events-none" />
        <div className="absolute bottom-1/3 -left-32 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(0,120,229,0.08)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-[520px] pointer-events-none overflow-hidden">
          <Image
            src="/reddy-sports-v2.png"
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-top opacity-35"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#030914]/20 via-[#030914]/75 to-[#030914]" />
        </div>

        {/* Hero */}
        <section className="relative z-10 pt-[calc(var(--navbar-offset)+2rem)] pb-6 px-[5%]">
          <div className="max-w-[1400px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-10"
            >
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-5 rounded-full border border-[#F6C453]/30 bg-[#F6C453]/10 backdrop-blur-md shadow-[0_0_24px_rgba(246, 196, 83,0.2)]">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F6C453] opacity-60" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F6C453]" />
                  </span>
                  <span className="text-[10px] font-bold text-[#F6C453] uppercase tracking-[0.25em] font-syne">
                    Broadcast Hub
                  </span>
                </div>

                <h1 className="font-bebas text-[clamp(52px,8vw,96px)] tracking-[2px] leading-[0.9] text-white mb-4">
                  MATCH
                  <br />
                  <span className="bg-gradient-to-r from-[#D4AF37] via-[#F6C453] to-[#FFF2C6] bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(246, 196, 83,0.3)]">
                    HIGHLIGHTS
                  </span>
                </h1>
                <p className="text-muted text-[15px] md:text-[17px] leading-relaxed font-light max-w-lg">
                  Cinematic replays, live streams, and the biggest cricket moments — curated and refreshed from YouTube.
                </p>
              </div>

              {!loading && videos.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="flex flex-wrap gap-3"
                >
                  {[
                    { label: "Total", value: videos.length, color: "from-[#D4AF37]/20 to-[#F6C453]/5", border: "border-[#F6C453]/20" },
                    { label: "Live", value: liveCount, color: "from-red-600/20 to-red-600/5", border: "border-red-500/20", pulse: liveCount > 0 },
                    ...(simulated ? [{ label: "Mode", value: "Demo", color: "from-amber-500/20 to-amber-500/5", border: "border-amber-500/20" }] : []),
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className={clsx(
                        "relative px-5 py-3 rounded-xl border backdrop-blur-md bg-gradient-to-br",
                        stat.color,
                        stat.border
                      )}
                    >
                      {stat.pulse && (
                        <span className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                      )}
                      <div className="text-[10px] uppercase tracking-[0.2em] text-muted font-syne font-semibold">
                        {stat.label}
                      </div>
                      <div className="text-2xl font-bebas text-white tracking-wider mt-0.5">
                        {stat.value}
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}
            </motion.div>

            {/* Spotlight player + Up Next */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6">
              <div className="lg:col-span-8 reveal">
                {loading ? (
                  <div className="aspect-[16/9] rounded-2xl border border-white/10 bg-[#0a1220]/60 backdrop-blur flex flex-col items-center justify-center gap-4">
                    <div className="w-12 h-12 border-[3px] border-[#F6C453]/20 border-t-[#F6C453] rounded-full animate-spin" />
                    <p className="text-muted text-sm font-syne tracking-wider uppercase text-[11px]">
                      Syncing broadcast feed...
                    </p>
                  </div>
                ) : featuredVideo ? (
                  <div
                    className="group relative aspect-[16/9] rounded-2xl overflow-hidden cursor-pointer"
                    onClick={() => setSelectedVideo(featuredVideo)}
                  >
                    <div className="absolute -inset-1 bg-gradient-to-br from-[#D4AF37] via-[#F6C453] to-transparent rounded-2xl opacity-60 blur-sm group-hover:opacity-90 transition-opacity" />
                    <div className="relative h-full rounded-2xl overflow-hidden border border-white/10 bg-black">
                      <img
                        src={featuredVideo.thumbnail}
                        alt={featuredVideo.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#030914] via-[#030914]/30 to-[#030914]/10" />
                      <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/20 via-transparent to-transparent opacity-60" />

                      {featuredVideo.live && (
                        <div className="absolute top-5 left-5 flex items-center gap-2 bg-red-600/90 backdrop-blur-md text-white text-[11px] font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-lg shadow-[0_0_30px_rgba(220,38,38,0.4)]">
                          <Radio className="w-3.5 h-3.5" />
                          Live Broadcast
                        </div>
                      )}

                      <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                        <div className="flex items-end justify-between gap-4">
                          <div className="min-w-0">
                            <div className="flex items-center gap-2 mb-2">
                              <Tv className="w-4 h-4 text-[#F6C453]" />
                              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#F6C453] font-syne">
                                Now in Spotlight
                              </span>
                            </div>
                            <h2 className="text-white font-syne font-bold text-xl md:text-3xl leading-tight line-clamp-2 mb-2 drop-shadow-lg">
                              {featuredVideo.title}
                            </h2>
                            <p className="text-muted text-sm">{featuredVideo.channelTitle}</p>
                          </div>

                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedVideo(featuredVideo);
                            }}
                            className="shrink-0 w-16 h-16 md:w-[72px] md:h-[72px] rounded-full bg-gradient-to-br from-[#D4AF37] to-[#F6C453] flex items-center justify-center shadow-[0_0_50px_rgba(246, 196, 83,0.5)] hover:scale-105 transition-transform cursor-pointer"
                            aria-label="Play spotlight video"
                          >
                            <Play className="w-8 h-8 text-white fill-white ml-1" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="aspect-[16/9] rounded-2xl border border-white/10 bg-[#0a1220]/60 flex items-center justify-center">
                    <p className="text-muted">No broadcast available.</p>
                  </div>
                )}
              </div>

              {/* Up Next sidebar */}
              <div className="lg:col-span-4 reveal">
                <div className="h-full rounded-2xl border border-white/[0.06] bg-[#0a1220]/60 backdrop-blur-xl overflow-hidden flex flex-col">
                  <div className="px-5 py-4 border-b border-white/[0.06] flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white font-syne">
                      Up Next
                    </span>
                    <button
                      onClick={retryFetch}
                      disabled={loading}
                      className="p-2 rounded-lg border border-white/10 bg-white/5 text-muted hover:text-white hover:border-[#F6C453]/30 transition-all cursor-pointer disabled:opacity-40"
                      aria-label="Refresh feed"
                    >
                      <RefreshCw className={clsx("w-3.5 h-3.5", loading && "animate-spin")} />
                    </button>
                  </div>

                  <div className="flex-1 overflow-y-auto p-3 space-y-2 max-h-[320px] lg:max-h-none scrollbar-thin">
                    {loading ? (
                      Array.from({ length: 4 }).map((_, i) => (
                        <div key={i} className="flex gap-3 p-2 animate-pulse">
                          <div className="w-24 h-14 rounded-lg bg-white/5 shrink-0" />
                          <div className="flex-1 space-y-2 py-1">
                            <div className="h-3 bg-white/5 rounded w-full" />
                            <div className="h-2 bg-white/5 rounded w-2/3" />
                          </div>
                        </div>
                      ))
                    ) : upNextVideos.length === 0 ? (
                      <p className="text-muted text-xs text-center py-8">Queue empty</p>
                    ) : (
                      upNextVideos.map((video, i) => (
                        <button
                          key={video.id}
                          onClick={() => setSelectedVideo(video)}
                          className="w-full flex gap-3 p-2 rounded-xl hover:bg-white/[0.04] border border-transparent hover:border-[#F6C453]/20 transition-all cursor-pointer text-left group"
                        >
                          <div className="relative w-24 h-14 rounded-lg overflow-hidden shrink-0 bg-black">
                            <img src={video.thumbnail} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                            <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
                              <Play className="w-4 h-4 text-white fill-white" />
                            </div>
                            <span className="absolute bottom-1 left-1 text-[8px] font-black text-white/80 bg-black/60 px-1 rounded">
                              {String(i + 1).padStart(2, "0")}
                            </span>
                          </div>
                          <div className="min-w-0 flex-1 py-0.5">
                            <p className="text-white text-[11px] font-semibold line-clamp-2 leading-snug group-hover:text-[#F6C453] transition-colors">
                              {video.title}
                            </p>
                            <p className="text-muted text-[10px] mt-1 truncate">{video.channelTitle}</p>
                          </div>
                        </button>
                      ))
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Marquee ticker */}
        {!loading && videos.length > 0 && (
          <div className="relative z-10 border-y border-white/[0.04] bg-[#0a1220]/40 backdrop-blur-sm overflow-hidden py-3 mb-10">
            <div className="flex animate-[marquee_40s_linear_infinite] whitespace-nowrap">
              {[...videos, ...videos].map((v, i) => (
                <span key={`${v.id}-${i}`} className="inline-flex items-center gap-3 mx-8 text-[12px] text-muted/80 font-syne">
                  {v.live && <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />}
                  <span className={v.live ? "text-red-400/90" : ""}>{v.live ? "LIVE" : "REC"}</span>
                  <span className="text-white/60">{v.title}</span>
                  <span className="text-[#F6C453]/40">◆</span>
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Video archive */}
        <section className="relative z-10 pb-28 px-[5%]">
          <div className="max-w-[1400px] mx-auto">
            <div className="reveal flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
              <div>
                <div className="section-tag">
                  <span className="w-8 h-px bg-[#F6C453]" />
                  The Archive
                </div>
                <h2 className="section-title">
                  Browse <span className="text-[#F6C453]">All Replays</span>
                </h2>
              </div>

              <div className="flex gap-1.5 p-1.5 rounded-xl border border-white/[0.06] bg-[#0a1220]/60 backdrop-blur-md">
                {filterTabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveFilter(tab.id)}
                    className={clsx(
                      "relative flex items-center gap-2 px-4 py-2.5 rounded-lg text-[11px] font-bold uppercase tracking-[0.12em] font-syne transition-all cursor-pointer",
                      activeFilter === tab.id
                        ? "text-white"
                        : "text-muted hover:text-white/80"
                    )}
                  >
                    {activeFilter === tab.id && (
                      <motion.div
                        layoutId="filter-pill"
                        className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] to-[#F6C453] rounded-lg shadow-[0_0_20px_rgba(246, 196, 83,0.3)]"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10 flex items-center gap-2">
                      {tab.icon}
                      {tab.label}
                      <span className="opacity-60">({tab.count})</span>
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {loading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="rounded-2xl border border-white/5 overflow-hidden animate-pulse">
                    <div className="aspect-video bg-white/[0.03]" />
                    <div className="p-4 space-y-3 bg-[#0a1220]/40">
                      <div className="h-4 bg-white/5 rounded w-4/5" />
                      <div className="h-3 bg-white/5 rounded w-1/2" />
                    </div>
                  </div>
                ))}
              </div>
            ) : error && videos.length === 0 ? (
              <div className="reveal flex flex-col items-center justify-center py-24 text-center rounded-2xl border border-white/[0.06] bg-[#0a1220]/40">
                <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-5">
                  <AlertTriangle className="w-8 h-8 text-amber-400" />
                </div>
                <h3 className="text-white font-syne font-bold text-xl mb-2">Signal Lost</h3>
                <p className="text-muted max-w-md mb-6 text-sm">{error}</p>
                <button onClick={retryFetch} className="btn btn-gold">
                  Reconnect Feed
                </button>
              </div>
            ) : gridVideos.length === 0 && !featuredVideo ? (
              <div className="reveal text-center py-24 text-muted rounded-2xl border border-white/[0.06] bg-[#0a1220]/40">
                No {activeFilter === "live" ? "live streams" : activeFilter === "highlights" ? "highlights" : "videos"} in the archive.
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-fr">
                {gridVideos.map((video, index) => (
                  <VideoCard
                    key={video.id}
                    video={video}
                    index={index}
                    featured={featuredVideo?.id === video.id}
                    size={index === 0 ? "large" : "default"}
                    onPlay={() => setSelectedVideo(video)}
                    onFeature={() => setFeaturedVideo(video)}
                  />
                ))}
              </div>
            )}

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="reveal mt-20 relative rounded-2xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/20 via-[#F6C453]/10 to-transparent" />
              <div className="absolute inset-0 border border-[#F6C453]/20 rounded-2xl" />
              <div className="relative px-8 py-12 md:py-14 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#F6C453] mb-2 font-syne">
                    Turn highlights into action
                  </p>
                  <h3 className="font-bebas text-4xl md:text-5xl text-white tracking-wide">
                    BET ON THE NEXT BIG MOMENT
                  </h3>
                </div>
                <div className="flex gap-4 flex-wrap justify-center">
                  <Link href="/cricket" className="btn btn-gold btn-large">
                    Cricket Betting
                  </Link>
                  <Link href="/games" className="btn btn-ghost btn-large">
                    Explore Games
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      {/* Video modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-xl z-[1000] flex items-center justify-center p-4"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.88, y: 32, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.88, y: 32, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 28 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl"
            >
              <div className="absolute -inset-1 bg-gradient-to-br from-[#D4AF37] via-[#F6C453] to-transparent rounded-2xl opacity-50 blur-md" />
              <div className="relative bg-[#09101e] border border-[#F6C453]/30 rounded-2xl overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.9)]">
                <div className="flex justify-between items-start gap-4 p-5 border-b border-white/[0.06] bg-[#0a1220]/80">
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 mb-1.5">
                      {selectedVideo.live && (
                        <span className="flex items-center gap-1 text-[9px] font-black uppercase tracking-[0.2em] text-red-400 bg-red-500/10 border border-red-500/20 px-2 py-0.5 rounded">
                          <Radio className="w-3 h-3" /> Live
                        </span>
                      )}
                      <span className="text-[10px] text-[#F6C453] uppercase tracking-[0.2em] font-syne font-bold">
                        Now Playing
                      </span>
                    </div>
                    <h3 className="text-white font-syne font-bold text-base md:text-lg line-clamp-2">
                      {selectedVideo.title}
                    </h3>
                  </div>
                  <button
                    onClick={() => setSelectedVideo(null)}
                    className="shrink-0 w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-muted hover:text-white transition-colors cursor-pointer"
                    aria-label="Close player"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="relative aspect-video bg-black">
                  <iframe
                    src={getEmbedUrl(selectedVideo, simulated)}
                    title={selectedVideo.title}
                    className="absolute inset-0 w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>

                <div className="p-5 border-t border-white/[0.06] bg-[#0a1220]/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-sm">
                  <span className="text-muted">
                    Channel{" "}
                    <strong className="text-white font-syne">{selectedVideo.channelTitle}</strong>
                  </span>
                  {!simulated && !isMockVideo(selectedVideo, simulated) && (
                      <a
                        href={`https://www.youtube.com/watch?v=${selectedVideo.id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[#F6C453] hover:text-white font-bold text-[12px] uppercase tracking-wider font-syne transition-colors"
                      >
                        Open on YouTube →
                      </a>
                    )}
                  {simulated && youtubeIdFromThumbnail(selectedVideo.thumbnail) && (
                      <a
                        href={`https://www.youtube.com/watch?v=${youtubeIdFromThumbnail(selectedVideo.thumbnail)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[#F6C453] hover:text-white font-bold text-[12px] uppercase tracking-wider font-syne transition-colors"
                      >
                        Open on YouTube →
                      </a>
                    )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </>
  );
}

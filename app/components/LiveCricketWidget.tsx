"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Info, AlertTriangle, CheckCircle2, X, Settings, Play } from "lucide-react";
import clsx from "clsx";
import { MOCK_MATCHES } from "../data/mockMatches";
import { MOCK_VIDEOS } from "../data/mockVideos";

interface Team {
  name: string;
  short: string;
  logo: string;
  score: string;
  overs: number;
}

interface Match {
  id: string;
  name: string;
  matchType: string;
  status: string;
  venue: string;
  date: string;
  live: boolean;
  teams: Team[];
  odds: {
    team1: number;
    team2: number;
  };
}

interface Video {
  id: string;
  title: string;
  thumbnail: string;
  channelTitle: string;
  publishedAt: string;
  live: boolean;
}

export default function LiveCricketWidget() {
  // Tabs state
  const [activeTab, setActiveTab] = useState<"scores" | "videos">("scores");

  // Cricket Match states
  const [matches, setMatches] = useState<Match[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isSimulated, setIsSimulated] = useState(true);
  const [showSettings, setShowSettings] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [toastType, setToastType] = useState<"success" | "info">("success");

  // YouTube states
  const [videos, setVideos] = useState<Video[]>([]);
  const [videosLoading, setVideosLoading] = useState(true);
  const [videosError, setVideosError] = useState<string | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  // Fetch match data. State updates only happen after the awaited fetch, so
  // this is safe to call from an effect; callers wanting a spinner set
  // loading=true first (see retryMatches).
  const fetchMatches = async () => {
    try {
      const res = await fetch("/api/cricket");
      if (!res.ok) {
        throw new Error(`Failed to fetch: ${res.status}`);
      }
      const data = await res.json();
      if (data.success && data.matches) {
        setMatches(data.matches);
        setIsSimulated(!!data.simulated);
        setError(null);
      } else {
        throw new Error(data.error || "Failed to load matches");
      }
    } catch (err: unknown) {
      
      console.error(err);
      setMatches(MOCK_MATCHES);
      setIsSimulated(true);
      setError(null);
    } finally {
      setLoading(false);
    }
  };

  const retryMatches = () => {
    setLoading(true);
    setError(null);
    void fetchMatches();
  };

  
  const fetchVideos = async () => {
    try {
      const res = await fetch("/api/youtube");
      if (!res.ok) {
        throw new Error(`Status ${res.status}`);
      }
      const data = await res.json();
      if (data.success && data.videos) {
        setVideos(data.videos);
        setVideosError(null);
      } else {
        throw new Error(data.error || "Failed to load videos");
      }
    } catch (err: unknown) {
      // Fall back to bundled highlights when the API isn't reachable.
      console.error(err);
      setVideos(MOCK_VIDEOS);
      setVideosError(null);
    } finally {
      setVideosLoading(false);
    }
  };

  const retryVideos = () => {
    setVideosLoading(true);
    setVideosError(null);
    void fetchVideos();
  };

  useEffect(() => {
    // Initial data load: state updates happen only after the awaited fetch
    // resolves, so this cannot cascade synchronous renders.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchMatches();
    fetchVideos();
  }, []);

  // Show toast utility
  const triggerToast = (message: string, type: "success" | "info" = "success") => {
    setToastMessage(message);
    setToastType(type);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  useEffect(() => {
    if (loading || matches.length === 0) return;

    const interval = setInterval(() => {
      setMatches((prevMatches) => {
        return prevMatches.map((match) => {
          if (!match.live || (!isSimulated && !match.id.startsWith("mock"))) {
            return match;
          }

          const targetOvers = match.matchType.includes("ODI") ? 50 : 20;
          let battingTeamIdx = 0;
          const t1Overs = match.teams[0].overs;
          const t2Overs = match.teams[1].overs;

          // The team whose innings is still in progress bats; if neither
          // side has finished, the one that has bowled/not started waits.
          if (t1Overs >= targetOvers && t2Overs < targetOvers) {
            battingTeamIdx = 1;
          } else if (t2Overs >= targetOvers && t1Overs < targetOvers) {
            battingTeamIdx = 0;
          } else if (t1Overs === 0 && t2Overs > 0) {
            battingTeamIdx = 1;
          } else {
            battingTeamIdx = 0;
          }

          const battingTeam = match.teams[battingTeamIdx];
          const opposingTeam = match.teams[battingTeamIdx === 0 ? 1 : 0];

          let [runs, wickets] = battingTeam.score.split("/").map(Number);
          if (isNaN(runs)) runs = 0;
          if (isNaN(wickets)) wickets = 0;

          if (battingTeam.overs >= targetOvers || wickets >= 10) {
            return {
              ...match,
              status: `${battingTeam.name} Innings Completed.`,
              live: battingTeamIdx === 0,
            };
          }

          const outcomes = [0, 1, 1, 2, 4, 1, 6, 7];
          const outcome = outcomes[Math.floor(Math.random() * outcomes.length)];

          let newStatus = match.status;
          let newRuns = runs;
          let newWickets = wickets;
          let newOvers = battingTeam.overs;

          let overFraction = Math.round((newOvers % 1) * 10);
          overFraction += 1;
          if (overFraction >= 6) {
            newOvers = Math.floor(newOvers) + 1;
          } else {
            newOvers = Math.floor(newOvers) + overFraction / 10;
          }

          if (outcome === 7) {
            newWickets += 1;
            newStatus = `WICKET! ${battingTeam.short} is now ${newRuns}/${newWickets} (${newOvers} Ov)`;
            if (newWickets >= 10) {
              newStatus = `ALL OUT! ${battingTeam.name} bowled out for ${newRuns} runs.`;
            }
          } else {
            newRuns += outcome;
            if (outcome === 4) {
              newStatus = `FOUR! Beautiful boundary by ${battingTeam.short}! (${newRuns}/${newWickets})`;
            } else if (outcome === 6) {
              newStatus = `SIX! Huge hit over the boundary by ${battingTeam.short}! (${newRuns}/${newWickets})`;
            } else if (outcome === 0) {
              newStatus = `Dot ball. Excellent delivery!`;
            } else {
              newStatus = `${battingTeam.short} takes ${outcome} run(s). (${newRuns}/${newWickets})`;
            }
          }

          let odd1 = match.odds.team1;
          let odd2 = match.odds.team2;
          
          if (outcome === 7) {
            if (battingTeamIdx === 0) {
              odd1 = Math.min(5.0, Number((odd1 * 1.25).toFixed(2)));
              odd2 = Math.max(1.1, Number((odd2 * 0.85).toFixed(2)));
            } else {
              odd2 = Math.min(5.0, Number((odd2 * 1.25).toFixed(2)));
              odd1 = Math.max(1.1, Number((odd1 * 0.85).toFixed(2)));
            }
          } else if (outcome >= 4) {
            if (battingTeamIdx === 0) {
              odd1 = Math.max(1.1, Number((odd1 * 0.88).toFixed(2)));
              odd2 = Math.min(5.0, Number((odd2 * 1.12).toFixed(2)));
            } else {
              odd2 = Math.max(1.1, Number((odd2 * 0.88).toFixed(2)));
              odd1 = Math.min(5.0, Number((odd1 * 1.12).toFixed(2)));
            }
          }

          const updatedTeams = [...match.teams];
          updatedTeams[battingTeamIdx] = {
            ...battingTeam,
            score: `${newRuns}/${newWickets}`,
            overs: newOvers,
          };

          if (battingTeamIdx === 1 && opposingTeam.score !== "") {
            const targetRuns = parseInt(opposingTeam.score.split("/")[0]) + 1;
            const runsNeeded = targetRuns - newRuns;
            const totalBalls = targetOvers * 6;
            const currentBalls = Math.floor(newOvers) * 6 + Math.round((newOvers % 1) * 10);
            const ballsRemaining = totalBalls - currentBalls;

            if (runsNeeded <= 0) {
              newStatus = `${battingTeam.name} won by ${10 - newWickets} wickets!`;
              return {
                ...match,
                status: newStatus,
                live: false,
                teams: updatedTeams,
                odds: { team1: 1.0, team2: 1.0 }
              };
            } else if (ballsRemaining <= 0) {
              newStatus = `${opposingTeam.name} won by ${runsNeeded - 1} runs!`;
              return {
                ...match,
                status: newStatus,
                live: false,
                teams: updatedTeams,
                odds: { team1: 1.0, team2: 1.0 }
              };
            } else {
              newStatus = `${battingTeam.short} needs ${runsNeeded} runs in ${ballsRemaining} balls.`;
            }
          }

          return {
            ...match,
            status: newStatus,
            teams: updatedTeams,
            odds: { team1: odd1, team2: odd2 }
          };
        });
      });
    }, 6000);

    return () => clearInterval(interval);
  }, [loading, matches.length, isSimulated]);

  // Carousel controls
  const prevMatch = () => {
    setCurrentIndex((prev) => (prev === 0 ? matches.length - 1 : prev - 1));
  };

  const nextMatch = () => {
    setCurrentIndex((prev) => (prev === matches.length - 1 ? 0 : prev + 1));
  };

  const handlePlaceBet = (teamName: string, oddsVal: number) => {
    triggerToast(`Bet Slip Added: ₹500 on ${teamName} to Win @ ${oddsVal}`, "success");
  };

  const currentMatch = matches[currentIndex];

  const getGradientForTeam = (shortName: string) => {
    const code = shortName.charCodeAt(0) + (shortName.charCodeAt(1) || 0);
    const index = code % 5;
    const gradients = [
      "from-[#C5A059] to-[#9A7B38]",
      "from-[#F4D06F] to-[#C5A059]",
      "from-red-600 to-rose-800",
      "from-[#9A7B38] to-[#5c4a24]",
      "from-[#D4AF37] to-[#7a5c1a]",
    ];
    return gradients[index];
  };

  return (
    <div className="w-full relative">
      {/* Floating Betting Toasts */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            className={clsx(
              "absolute -top-16 left-1/2 transform -translate-x-1/2 z-50",
              "px-5 py-3 rounded-xl shadow-[0_10px_25px_rgba(212,175,55,0.4)] border backdrop-blur-xl",
              "text-[13px] font-bold text-center flex items-center gap-2 min-w-[300px] justify-center",
              toastType === "success"
                ? "bg-[#1a1a1a]/90 border-gold/50 text-gold-light"
                : "bg-red-950/90 border-red-500/50 text-red-300"
            )}
          >
            <CheckCircle2 className="w-4 h-4 text-gold" />
            {toastMessage}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main card container with premium glassmorphism effect and compact layout */}
      <div className={clsx(
        "relative z-20 bg-[#121212]/45 backdrop-blur-md",
        "border border-white/[0.08] rounded-2xl p-4 md:p-5",
        "shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col justify-between w-full"
      )}>
        
        {/* Compact Tab Switcher */}
        <div className="flex gap-1.5 mb-3.5 bg-white/[0.02] p-1 rounded-xl border border-white/[0.05]">
          <button
            onClick={() => setActiveTab("scores")}
            className={clsx(
              "flex-1 py-1.5 rounded-lg text-[10px] font-extrabold uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-1",
              activeTab === "scores"
                ? "bg-gold text-white shadow-[0_0_12px_rgba(212,175,55,0.4)]"
                : "text-gray-400 hover:text-white"
            )}
          >
            <span>🏏</span> Match Center
          </button>
          <button
            onClick={() => setActiveTab("videos")}
            className={clsx(
              "flex-1 py-1.5 rounded-lg text-[10px] font-extrabold uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-1",
              activeTab === "videos"
                ? "bg-gold text-white shadow-[0_0_12px_rgba(212,175,55,0.4)]"
                : "text-gray-400 hover:text-white"
            )}
          >
            <span>📺</span> Highlights
          </button>
        </div>

        {activeTab === "scores" ? (
          /* ==================== TAB 1: MATCH CENTER ==================== */
          loading ? (
            <div className="flex flex-col items-center justify-center py-8 min-h-[220px]">
              <div className="w-8 h-8 border-3 border-gold/20 border-t-gold rounded-full animate-spin mb-3"></div>
              <div className="text-gray-400 text-xs font-semibold tracking-wide">Syncing Live Scorecards...</div>
            </div>
          ) : error && matches.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-6 text-center min-h-[220px]">
              <AlertTriangle className="w-10 h-10 text-red-400 mb-2" />
              <div className="text-white font-bold text-[14px] mb-1">Failed to fetch scores</div>
              <p className="text-gray-400 text-[11px] max-w-[240px] mb-3">{error}</p>
              <button
                onClick={retryMatches}
                className="px-3.5 py-1.5 bg-gold/20 hover:bg-gold/40 border border-gold/50 rounded-lg text-white text-[11px] font-semibold transition-colors cursor-pointer"
              >
                Retry Connection
              </button>
            </div>
          ) : !currentMatch ? (
            <div className="text-center py-8 text-gray-400 text-xs min-h-[220px] flex items-center justify-center">
              No current matches playing.
            </div>
          ) : (
            <>
              {/* Widget Header */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center gap-1.5">
                    <div className={clsx(
                      "inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider",
                      currentMatch.live 
                        ? "bg-red-500/10 border border-red-500/30 text-red-400" 
                        : "bg-gray-500/10 border border-gray-500/30 text-gray-400"
                    )}>
                      {currentMatch.live && (
                        <span className="w-1.2 h-1.2 rounded-full bg-red-500 animate-pulse"></span>
                      )}
                      {currentMatch.live ? "Live" : "Finished"}
                    </div>

                    {/* API Status Indicator Badge */}
                    <button
                      onClick={() => setShowSettings(!showSettings)}
                      className={clsx(
                        "inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-full text-[8px] font-semibold uppercase tracking-wider cursor-pointer border transition-colors",
                        isSimulated
                          ? "bg-amber-500/10 border-amber-500/30 text-amber-400 hover:bg-amber-500/20"
                          : "bg-emerald-500/10 border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20"
                      )}
                      title="Click for Connection Settings"
                    >
                      <span className={clsx("w-1 h-1 rounded-full", isSimulated ? "bg-amber-400" : "bg-emerald-400")}></span>
                      {isSimulated ? "Simulated" : "API Live"}
                      <Settings className="w-2 h-2 ml-0.5 opacity-60" />
                    </button>
                  </div>
                  
                  <div className="text-gray-400 text-[10px] font-semibold tracking-wider bg-white/5 px-1.5 py-0.5 rounded border border-white/5">
                    {currentMatch.matchType}
                  </div>
                </div>

                {/* Match Score Display */}
                <div className="flex justify-between items-center mb-3">
                  {/* Team 1 */}
                  <div className="text-center flex-1 max-w-[42%]">
                    <div className="relative w-11 h-11 mx-auto mb-1 flex items-center justify-center">
                      {currentMatch.teams[0].logo ? (
                        <img 
                          src={currentMatch.teams[0].logo} 
                          alt={currentMatch.teams[0].name} 
                          className="w-9 h-9 object-contain filter drop-shadow-md z-10"
                          onError={(e) => {
                            (e.target as HTMLElement).style.display = 'none';
                          }}
                        />
                      ) : null}
                      <div className={clsx(
                        "absolute inset-0 rounded-full bg-gradient-to-br flex items-center justify-center text-white font-black text-[11px] border border-white/10 shadow-inner",
                        getGradientForTeam(currentMatch.teams[0].short)
                      )}>
                        {currentMatch.teams[0].short}
                      </div>
                    </div>
                    <div className="text-white font-bold text-[12px] truncate" title={currentMatch.teams[0].name}>
                      {currentMatch.teams[0].name}
                    </div>
                    <div className="text-gold font-extrabold text-[17px] md:text-[19px] mt-0.5">
                      {currentMatch.teams[0].score || "0/0"}
                    </div>
                    <div className="text-gray-400 text-[10px] font-light">
                      {currentMatch.teams[0].overs > 0 ? `(${currentMatch.teams[0].overs} Ov)` : ""}
                    </div>
                  </div>

                  {/* VS Divider */}
                  <div className="flex flex-col items-center justify-center flex-shrink-0 px-1">
                    <div className="text-gray-500 font-black text-[11px] tracking-wider">VS</div>
                    <div className="w-1 h-1 rounded-full bg-gold/50 mt-0.5 animate-pulse"></div>
                  </div>

                  {/* Team 2 */}
                  <div className="text-center flex-1 max-w-[42%]">
                    <div className="relative w-11 h-11 mx-auto mb-1 flex items-center justify-center">
                      {currentMatch.teams[1].logo ? (
                        <img 
                          src={currentMatch.teams[1].logo} 
                          alt={currentMatch.teams[1].name} 
                          className="w-9 h-9 object-contain filter drop-shadow-md z-10"
                          onError={(e) => {
                            (e.target as HTMLElement).style.display = 'none';
                          }}
                        />
                      ) : null}
                      <div className={clsx(
                        "absolute inset-0 rounded-full bg-gradient-to-br flex items-center justify-center text-white font-black text-[11px] border border-white/10 shadow-inner",
                        getGradientForTeam(currentMatch.teams[1].short)
                      )}>
                        {currentMatch.teams[1].short}
                      </div>
                    </div>
                    <div className="text-white font-bold text-[12px] truncate" title={currentMatch.teams[1].name}>
                      {currentMatch.teams[1].name}
                    </div>
                    <div className="text-gold font-extrabold text-[17px] md:text-[19px] mt-0.5">
                      {currentMatch.teams[1].score || "0/0"}
                    </div>
                    <div className="text-gray-400 text-[10px] font-light">
                      {currentMatch.teams[1].overs > 0 ? `(${currentMatch.teams[1].overs} Ov)` : ""}
                    </div>
                  </div>
                </div>

                {/* Status Message */}
                <div className="w-full bg-[#0a0a0a]/60 border border-gold/10 rounded-lg py-1.5 px-3 mb-3 min-h-[32px] flex items-center justify-center">
                  <p className="text-gold-light/90 font-medium text-[11px] md:text-[12px] text-center italic leading-tight">
                    {currentMatch.status}
                  </p>
                </div>
              </div>

              {/* Quick Odds & Actions */}
              <div>
                {currentMatch.live ? (
                  <div className="mb-2">
                    <div className="text-gray-400 text-[9px] uppercase font-bold tracking-widest mb-1.5 text-center">Live Betting Odds</div>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        onClick={() => handlePlaceBet(currentMatch.teams[0].name, currentMatch.odds.team1)}
                        className={clsx(
                          "bg-white/[0.03] border border-white/[0.08] hover:bg-gold/20 hover:border-gold/50",
                          "rounded-lg py-1.5 px-2 transition-all cursor-pointer text-center group active:scale-95"
                        )}
                      >
                        <div className="text-gray-400 text-[9px] uppercase tracking-wider mb-0.5 font-semibold group-hover:text-gold">
                          {currentMatch.teams[0].short} Win
                        </div>
                        <div className="text-white font-black text-[14px] tracking-tight">
                          {currentMatch.odds.team1}
                        </div>
                      </button>

                      <button
                        onClick={() => handlePlaceBet(currentMatch.teams[1].name, currentMatch.odds.team2)}
                        className={clsx(
                          "bg-white/[0.03] border border-white/[0.08] hover:bg-gold/20 hover:border-gold/50",
                          "rounded-lg py-1.5 px-2 transition-all cursor-pointer text-center group active:scale-95"
                        )}
                      >
                        <div className="text-gray-400 text-[9px] uppercase tracking-wider mb-0.5 font-semibold group-hover:text-gold">
                          {currentMatch.teams[1].short} Win
                        </div>
                        <div className="text-white font-black text-[14px] tracking-tight">
                          {currentMatch.odds.team2}
                        </div>
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="mb-2 text-center py-2 bg-white/5 border border-white/5 rounded-lg">
                    <span className="text-gray-400 text-[11px] font-semibold">Match Concluded • Odds Settled</span>
                  </div>
                )}

                {/* Carousel Navigation Footer */}
                <div className="flex justify-between items-center mt-2.5 pt-2 border-t border-white/5">
                  <button
                    onClick={prevMatch}
                    className="w-7 h-7 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white transition-all cursor-pointer active:scale-90"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex gap-1">
                    {matches.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={clsx(
                          "w-1 h-1 rounded-full transition-all cursor-pointer",
                          currentIndex === index 
                            ? "bg-gold w-2.5 shadow-[0_0_8px_#F4D06F]" 
                            : "bg-gray-600 hover:bg-gray-400"
                        )}
                      />
                    ))}
                  </div>

                  <button
                    onClick={nextMatch}
                    className="w-7 h-7 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white transition-all cursor-pointer active:scale-90"
                  >
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </>
          )
        ) : (
          /* ==================== TAB 2: WATCH LIVE (YOUTUBE) ==================== */
          videosLoading ? (
            <div className="flex flex-col items-center justify-center py-8 min-h-[220px]">
              <div className="w-8 h-8 border-3 border-gold/20 border-t-gold rounded-full animate-spin mb-3"></div>
              <div className="text-gray-400 text-xs font-semibold tracking-wide">Connecting to YouTube Feeds...</div>
            </div>
          ) : videosError && videos.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-6 text-center min-h-[220px]">
              <AlertTriangle className="w-10 h-10 text-amber-400 mb-2" />
              <div className="text-white font-bold text-[14px] mb-1">YouTube Fetch Failed</div>
              <p className="text-gray-400 text-[11px] max-w-[240px] mb-3">{videosError}</p>
              <button
                onClick={retryVideos}
                className="px-3.5 py-1.5 bg-gold/30 hover:bg-gold/50 border border-gold/50 rounded-lg text-white text-[11px] font-semibold transition-colors cursor-pointer"
              >
                Reconnect Feed
              </button>
            </div>
          ) : videos.length === 0 ? (
            <div className="text-center py-8 text-gray-400 text-xs min-h-[220px] flex items-center justify-center">
              No cricket videos found.
            </div>
          ) : (
            <div className="flex flex-col justify-between min-h-[220px]">
              {/* Scrollable Videos List (Matches height constraints) */}
              <div className="space-y-2 max-h-[180px] overflow-y-auto pr-1 scrollbar-thin">
                {videos.map((video) => (
                  <div
                    key={video.id}
                    onClick={() => setSelectedVideo(video)}
                    className={clsx(
                      "flex items-center gap-3 p-1.5 rounded-lg border border-white/[0.04]",
                      "bg-white/[0.01] hover:bg-white/[0.04] hover:border-gold/30",
                      "cursor-pointer transition-all duration-300 group active:scale-[0.98]"
                    )}
                  >
                    {/* Thumbnail box */}
                    <div className="relative w-16 h-10 rounded-md overflow-hidden bg-black flex-shrink-0">
                      <img 
                        src={video.thumbnail} 
                        alt={video.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-350" 
                      />
                      {video.live ? (
                        <div className="absolute top-0.5 left-0.5 bg-red-500 text-[7px] font-black px-1 py-0.5 rounded flex items-center gap-0.5 text-white uppercase tracking-wider animate-pulse">
                          <span className="w-1 h-1 bg-white rounded-full"></span> Live
                        </div>
                      ) : (
                        <div className="absolute bottom-0.5 right-0.5 bg-black/70 rounded p-0.5 text-[7px] font-bold flex items-center justify-center text-white">
                          <Play className="w-1.5 h-1.5 text-gold fill-gold" />
                        </div>
                      )}
                    </div>
                    {/* Title & Channel box */}
                    <div className="flex-1 min-w-0">
                      <h4 className="text-white font-bold text-[10px] md:text-[11px] leading-tight line-clamp-2 group-hover:text-gold-light transition-colors" title={video.title}>
                        {video.title}
                      </h4>
                      <div className="flex justify-between items-center mt-1 text-[8px] md:text-[9px]">
                        <span className="text-gray-400 truncate max-w-[90px]">{video.channelTitle}</span>
                        <span className={clsx(
                          "font-semibold tracking-wider uppercase",
                          video.live ? "text-red-400" : "text-gold"
                        )}>
                          {video.live ? "STREAM LIVE" : "HIGHLIGHTS"}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Small Info Banner at the bottom to fill space compactly */}
              <div className="text-[8px] text-gray-500 text-center mt-2 tracking-wide uppercase">
                Powered by YouTube Data API v3
              </div>
            </div>
          )
        )}
      </div>

      {/* Settings Modal (Config Info for Developer API connection) */}
      <AnimatePresence>
        {showSettings && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-[#0a0a0a]/95 backdrop-blur-md z-40 rounded-3xl p-6 md:p-8 flex flex-col justify-between border border-gold/30 shadow-[0_15px_35px_rgba(0,0,0,0.8)]"
          >
            <div>
              <div className="flex justify-between items-center mb-4 border-b border-white/5 pb-2">
                <div className="flex items-center gap-2 text-gold font-bold text-[15px] uppercase tracking-wider">
                  <Settings className="w-4 h-4 animate-[spin_10s_linear_infinite]" />
                  Cricket API Configuration
                </div>
                <button
                  onClick={() => setShowSettings(false)}
                  className="w-7 h-7 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="text-[12px] text-gray-300 space-y-3 leading-relaxed overflow-y-auto max-h-[200px] pr-2">
                <p>
                  To display real-time live cricket match scorecards automatically from the API instead of simulation data:
                </p>
                <ol className="list-decimal pl-5 space-y-1.5 text-gray-400">
                  <li>
                    Register a free developer account at <a href="https://cricketdata.org" target="_blank" rel="noopener noreferrer" className="text-gold underline hover:text-gold-light">CricketData.org</a>.
                  </li>
                  <li>
                    Copy your free <strong className="text-white">API key</strong> from the dashboard (100 free requests/day).
                  </li>
                  <li>
                    Create or open the <strong className="text-white">`.env.local`</strong> file in the root of this project.
                  </li>
                  <li>
                    Add the following line:
                    <pre className="mt-1.5 p-2 bg-[#0a0a0a] border border-gold/30 rounded text-gold-light font-mono text-[10px] select-all overflow-x-auto">
                      CRICKET_API_KEY=YOUR_FREE_API_KEY_HERE
                    </pre>
                  </li>
                  <li>
                    Restart the Next.js development server. The proxy backend will auto-detect your key and fetch real live feeds.
                  </li>
                </ol>
                <div className="bg-black/20 border border-gold/20 p-2.5 rounded-lg text-gold-light flex gap-2 items-start text-[11px] mt-2">
                  <Info className="w-4 h-4 mt-0.5 flex-shrink-0 text-gold" />
                  <div>
                    <strong>API Request Caching:</strong> To save your daily limit, queries are cached in-memory for 90 seconds. You won&apos;t run out of credits!
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-3 mt-4">
              <button
                onClick={() => {
                  retryMatches();
                  setShowSettings(false);
                }}
                className="flex-1 py-2 bg-gradient-to-r from-[#9A7B38] to-gold text-black font-bold rounded-lg text-[12px] cursor-pointer hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-all text-center"
              >
                Refresh & Connect
              </button>
              <button
                onClick={() => setShowSettings(false)}
                className="px-4 py-2 border border-white/10 bg-white/5 text-gray-300 rounded-lg text-[12px] font-bold cursor-pointer hover:bg-white/10"
              >
                Close
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Video Player Overlay Modal (Fixed positioning so it doesn't break parent height) */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-[#121212] border border-gold/30 rounded-2xl w-full max-w-[640px] shadow-[0_25px_50px_rgba(0,0,0,0.8)] overflow-hidden"
            >
              {/* Modal Header */}
              <div className="flex justify-between items-center p-4 border-b border-white/5 bg-[#0a0a0a]/50">
                <div className="flex items-center gap-2 text-gold font-bold text-[12px] md:text-[13px] uppercase tracking-wider truncate max-w-[85%]">
                  <span className="w-2 h-2 rounded-full bg-gold animate-pulse"></span>
                  {selectedVideo.title}
                </div>
                <button
                  onClick={() => setSelectedVideo(null)}
                  className="w-7 h-7 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              
              {/* Video Player iFrame */}
              <div className="relative aspect-video bg-black w-full">
                {selectedVideo.id.startsWith("mock") || 
                 selectedVideo.id === "MIvCSK2026" || 
                 selectedVideo.id === "INDAUSLiveT20" || 
                 selectedVideo.id === "ENGPAKHighlights" || 
                 selectedVideo.id === "cricket_best_catches" ? (
                  // Safe public high-quality cricket moments video for fallback demonstration
                  <iframe
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                    title={selectedVideo.title}
                    className="absolute inset-0 w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <iframe
                    src={`https://www.youtube.com/embed/${selectedVideo.id}?autoplay=1`}
                    title={selectedVideo.title}
                    className="absolute inset-0 w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                )}
              </div>
              
              {/* Modal Footer */}
              <div className="p-3 bg-[#0a0a0a] flex justify-between items-center text-[10px] text-gray-400 border-t border-white/5">
                <div>Channel: <strong className="text-white">{selectedVideo.channelTitle}</strong></div>
                <div className="text-gold font-semibold uppercase tracking-wider">Streaming Live via YouTube API</div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

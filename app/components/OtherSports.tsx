"use client";

import { useState } from "react";

const chips = ["All", "🏏 Cricket", "⚽ Football", "🎾 Tennis", "🏀 Basketball", "🏇 Horse Racing", "🎮 Esports"];

const events = [
  { icon: "🏏", match: "Mumbai Indians vs Chennai Super Kings", meta: { live: true, detail: "Live • Over 14.3", league: "IPL 2025" }, odds: [{ label: "MI", val: "2.15" }, { label: "Draw", val: "—" }, { label: "CSK", val: "1.78" }] },
  { icon: "⚽", match: "Manchester City vs Real Madrid", meta: { live: true, detail: "Live • 62'", league: "Champions League" }, odds: [{ label: "City", val: "1.95" }, { label: "Draw", val: "3.40" }, { label: "Real", val: "2.85" }] },
  { icon: "🎾", match: "Carlos Alcaraz vs Jannik Sinner", meta: { live: false, detail: "Today • 18:00 IST", league: "Wimbledon 2025" }, odds: [{ label: "Alcaraz", val: "1.62" }, { label: "Sinner", val: "2.20" }] },
  { icon: "🏏", match: "India vs Australia — 1st T20I", meta: { live: false, detail: "Tomorrow • 19:30 IST", league: "International T20" }, odds: [{ label: "India", val: "1.55" }, { label: "Aus", val: "2.45" }] },
  { icon: "🏀", match: "Golden State Warriors vs Boston Celtics", meta: { live: false, detail: "Jun 10 • 06:30 IST", league: "NBA Finals 2025" }, odds: [{ label: "GSW", val: "2.10" }, { label: "BOS", val: "1.75" }] },
];

export default function OtherSports() {
  const [activeChip, setActiveChip] = useState("All");

  return (
    <section id="sports" className="py-20 px-[5%] bg-bg2">
      {/* Header */}
      <div className="flex flex-col items-start gap-6 mb-[60px] sm:flex-row sm:items-end sm:justify-between flex-wrap reveal">
        <div>
          <div className="section-tag">Sports Betting</div>
          <h2 className="section-title">Bet on <span className="text-gold">Every Sport</span></h2>
        </div>
        <a href="#" className="btn btn-ghost self-center sm:self-auto">View All Events</a>
      </div>

      {/* Chips */}
      <div className="flex gap-2.5 flex-wrap mb-12 reveal">
        {chips.map((chip) => (
          <button
            key={chip}
            onClick={() => setActiveChip(chip)}
            className={`px-5 py-2 rounded-full text-[13px] font-medium cursor-pointer transition-all border ${
              activeChip === chip
                ? "bg-[#D4AF37] text-white border-[#D4AF37] font-bold"
                : "bg-transparent text-muted border-border hover:text-white hover:border-[rgba(255,255,255,0.2)]"
            }`}
          >
            {chip}
          </button>
        ))}
      </div>

      {/* Sports List */}
      <div className="flex flex-col gap-[2px] rounded-xl overflow-hidden border border-border reveal">
        {events.map((event, i) => (
          <div key={i} className="flex items-center p-5 px-6 bg-card gap-5 cursor-pointer hover:bg-card2 transition-colors flex-wrap">
            <div className="text-[22px] w-7">{event.icon}</div>
            <div className="flex-1 min-w-[200px]">
              <div className="text-[15px] font-medium text-white mb-0.5">{event.match}</div>
              <div className="text-[12px] text-muted flex gap-3">
                {event.meta.live ? (
                  <span className="text-green flex items-center gap-1"><span className="live-dot" />  {event.meta.detail}</span>
                ) : (
                  <span>{event.meta.detail}</span>
                )}
                <span>{event.meta.league}</span>
              </div>
            </div>
            <div className="flex gap-2">
              {event.odds.map((odd) => (
                <div
                  key={odd.label}
                  className="px-4 py-2 bg-bg3 border border-border rounded-md font-syne text-[13px] font-semibold text-text cursor-pointer hover:bg-[rgba(0,120,229,0.1)] hover:border-[rgba(0,120,229,0.4)] hover:text-[#D4AF37] transition-all min-w-[60px] text-center"
                >
                  <span className="block text-[10px] text-muted font-normal uppercase tracking-[0.5px] mb-0.5">{odd.label}</span>
                  {odd.val}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

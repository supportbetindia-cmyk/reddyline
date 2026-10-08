"use client";

import React, { useState } from "react";
import Link from "next/link";

interface Game {
  id: string;
  title: string;
  category: "sports" | "crash" | "cards";
  categoryLabel: string;
  description: string;
  icon: React.ReactNode;
  badge: "LIVE" | "NEW" | "HOT" | "POPULAR";
  badgeColor: string;
  rtp: string;
  players: string;
  path: string;
}

export default function Games() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { id: "all", name: "All Games" },
    { id: "sports", name: "Sports" },
    { id: "crash", name: "Crash" },
    { id: "cards", name: "Cards & Casino" },
  ];

  const gamesList: Game[] = [
    {
      id: "badminton",
      title: "Badminton Blitz",
      category: "sports",
      categoryLabel: "Sports Arcade",
      description: "Fast-paced physics-based badminton. Serve, smash, and conquer the court to win.",
      badge: "LIVE",
      badgeColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
      rtp: "98.5%",
      players: "1,248",
      path: "/badminton",
      icon: (
        <svg className="h-8 w-8 text-accent-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <circle cx="9" cy="9" r="6" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 13.5L20 20M15 15l2-2" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l6 6M12 6l-6 6M9 4.5v9M4.5 9h9" />
        </svg>
      ),
    },
    {
      id: "aviator",
      title: "Crash Aviator",
      category: "crash",
      categoryLabel: "Multiplier Crash",
      description: "Watch the rocket fly and cash out before the inevitable crash to multiply your stake.",
      badge: "HOT",
      badgeColor: "bg-rose-500/20 text-rose-400 border-rose-500/30",
      rtp: "97.0%",
      players: "4,912",
      path: "/apps",
      icon: (
        <svg className="h-8 w-8 text-accent-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L6 12zm0 0h7.5" />
        </svg>
      ),
    },
    {
      id: "mines",
      title: "Minesweeper Cyber",
      category: "crash",
      categoryLabel: "Mines Arcade",
      description: "Uncover tiles on the grid. Reveal high-value crystals while dodging hidden cyber mines.",
      badge: "NEW",
      badgeColor: "bg-accent-cyan/20 text-accent-cyan border-accent-cyan/30",
      rtp: "99.0%",
      players: "840",
      path: "/apps",
      icon: (
        <svg className="h-8 w-8 text-accent-indigo" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
        </svg>
      ),
    },
    {
      id: "roulette",
      title: "Crypto Roulette",
      category: "cards",
      categoryLabel: "Classic Casino",
      description: "Predict where the cyber wheel will land. Featuring custom betting multipliers and clean graphics.",
      badge: "POPULAR",
      badgeColor: "bg-purple-500/20 text-purple-400 border-purple-500/30",
      rtp: "97.3%",
      players: "2,105",
      path: "/apps",
      icon: (
        <svg className="h-8 w-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07L19.07 4.93" />
        </svg>
      ),
    },
  ];

  const filteredGames =
    selectedCategory === "all"
      ? gamesList
      : gamesList.filter((game) => game.category === selectedCategory);

  return (
    <section id="games-section" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full scroll-mt-24">
      {/* Decorative Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[500px] w-[500px] rounded-full bg-accent-indigo/5 blur-[120px]" />

      {/* Header */}
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
          Explore Ecosystem <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan to-accent-indigo">Games</span>
        </h2>
        <p className="max-w-2xl mx-auto text-sm sm:text-base text-white/60">
          Discover lightning-fast web games engineered with transparent mathematics and premium animations.
        </p>

        {/* Categories Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                selectedCategory === category.id
                  ? "bg-gradient-to-r from-accent-cyan to-accent-indigo text-white shadow-lg shadow-accent-cyan/15 scale-105"
                  : "bg-white/5 border border-white/5 text-white/70 hover:bg-white/10 hover:text-white hover:scale-102"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredGames.map((game) => (
          <div
            key={game.id}
            className="glass-panel-interactive rounded-3xl p-6 flex flex-col justify-between relative overflow-hidden"
          >
            {/* Status Badge */}
            <div className="absolute top-4 right-4">
              <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-widest border ${game.badgeColor}`}>
                {game.badge}
              </span>
            </div>

            {/* Icon & Title */}
            <div>
              <div className="h-14 w-14 rounded-2xl bg-[#0c233c] border border-white/5 flex items-center justify-center mb-5 shadow-inner">
                {game.icon}
              </div>

              <div className="text-[10px] font-bold text-accent-cyan uppercase tracking-widest mb-1.5">
                {game.categoryLabel}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{game.title}</h3>
              <p className="text-xs text-white/60 leading-relaxed mb-6">
                {game.description}
              </p>
            </div>

            {/* Stats Row & Play Button */}
            <div className="border-t border-white/5 pt-4 mt-auto">
              <div className="flex items-center justify-between text-xxs text-white/40 mb-4 font-semibold uppercase tracking-wider">
                <span>RTP: <span className="text-emerald-400 font-bold">{game.rtp}</span></span>
                <span>Active: <span className="text-accent-cyan font-bold">{game.players}</span></span>
              </div>

              <Link
                href={game.path}
                className="w-full flex items-center justify-center gap-1.5 rounded-2xl bg-white/5 border border-white/10 py-3 text-xs font-bold text-white transition-all duration-300 hover:bg-white hover:text-[#041220] hover:scale-[1.02] active:scale-95"
              >
                Play Now
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

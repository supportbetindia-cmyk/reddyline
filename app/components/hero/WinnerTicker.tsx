"use client";

import React from "react";
import { motion } from "framer-motion";
import { Trophy, Star, TrendingUp, ShieldCheck } from "lucide-react";

interface WinnerItem {
  id: string;
  name: string;
  amount: string;
  game: string;
  time: string;
}

const LIVE_WINNERS: WinnerItem[] = [
  { id: "1", name: "Rahul K.", amount: "₹125,000", game: "Aviator", time: "Just now" },
  { id: "2", name: "Vikas P.", amount: "₹250,000", game: "IPL Cricket Live", time: "1m ago" },
  { id: "3", name: "Ananya R.", amount: "₹85,000", game: "Lightning Roulette", time: "2m ago" },
  { id: "4", name: "Amit S.", amount: "₹180,000", game: "Teen Patti 3D", time: "3m ago" },
  { id: "5", name: "Priya M.", amount: "₹310,000", game: "Andar Bahar", time: "4m ago" },
  { id: "6", name: "Karan T.", amount: "₹95,400", game: "Dragon Tiger", time: "5m ago" },
];

export const WinnerTicker: React.FC = () => {
  return (
    <div className="winner-ticker relative z-20 w-full bg-[#050505]/85 border-t border-white/10 backdrop-blur-md py-3 overflow-hidden">
      <div className="container mx-auto px-4 flex items-center justify-between gap-4">
        
        {/* Left Badge: BIG WINNER */}
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-[#E41E26]/20 to-[#F6C453]/20 border border-[#F6C453]/40 text-[#F6C453] text-xs font-black uppercase tracking-wider shrink-0 z-10 shadow-[0_0_15px_rgba(246,196,83,0.2)]">
          <Trophy className="w-3.5 h-3.5 text-[#F6C453] shrink-0" />
          <span>🏆 BIG WINNER</span>
        </div>

        {/* Center Marquee ticker */}
        <div className="flex-1 overflow-hidden relative">
          <div className="absolute left-0 top-0 bottom-0 w-10 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />

          <motion.div
            className="flex items-center gap-8 whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...LIVE_WINNERS, ...LIVE_WINNERS].map((w, idx) => (
              <div
                key={`${w.id}-${idx}`}
                className="inline-flex items-center gap-2 text-xs font-mono"
              >
                <span className="text-white font-bold">{w.name}</span>
                <span className="text-gray-400 font-normal">won</span>
                <span className="text-emerald-400 font-extrabold flex items-center gap-0.5">
                  <TrendingUp className="w-3 h-3" />
                  {w.amount}
                </span>
                <span className="text-gray-400 text-[11px]">on {w.game}</span>
                <span className="text-[#F6C453]/30 mx-2">•</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right Badge: TRUSTED BY 10M+ PLAYERS */}
        <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-gray-300 text-xs font-bold shrink-0 z-10">
          <div className="flex items-center text-[#F6C453]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3 h-3 fill-current text-[#F6C453]" />
            ))}
          </div>
          <span className="text-white font-extrabold">Trusted by 10M+ Players</span>
        </div>

      </div>
    </div>
  );
};

export default WinnerTicker;

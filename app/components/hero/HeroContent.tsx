"use client";

import React from "react";
import HeroButtons from "./HeroButtons";
import { Flame } from "lucide-react";

const stats = [
  { value: "₹500Cr+", label: "Paid Out" },
  { value: "10M+", label: "Players" },
  { value: "2,000+", label: "Games" },
  { value: "2 Min", label: "UPI Payout" },
];

export const HeroContent: React.FC = () => {
  return (
    <div className="hero-content flex flex-col justify-center text-left">
      {/* Tagline pill */}
      <div className="hero-tagline inline-flex items-center gap-2 px-4 py-1.5 mb-6 w-fit rounded-full border border-[#F6C453]/30 bg-gradient-to-r from-[#F6C453]/15 via-[#E41E26]/10 to-transparent shadow-[0_0_20px_rgba(246,196,83,0.12)]">
        <span className="flex h-2 w-2 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E41E26] opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E41E26]" />
        </span>
        <Flame className="w-3.5 h-3.5 text-[#F6C453]" />
        <span className="text-[#F6C453] text-[11px] sm:text-xs uppercase tracking-[2.5px] font-extrabold">
          India&apos;s Premier Betting Exchange
        </span>
      </div>

      {/* Massive heading */}
      <h1 className="hero-heading font-bebas font-[900] text-[52px] sm:text-[76px] lg:text-[88px] xl:text-[98px] leading-[0.86] uppercase tracking-[1px] text-white mb-6 select-none">
        <span className="block text-white drop-shadow-[0_4px_25px_rgba(0,0,0,0.9)]">More Games.</span>
        <span className="block bg-clip-text text-transparent bg-gradient-to-r from-white via-[#F6C453] to-[#D4AF37] drop-shadow-[0_4px_30px_rgba(246,196,83,0.3)]">
          Bigger Wins.
        </span>
      </h1>

      {/* Paragraph */}
      <p className="hero-paragraph text-gray-300 text-base sm:text-[18px] leading-relaxed mb-8 max-w-xl font-normal">
        India&apos;s most elite sportsbook and live casino. Instant 2-minute UPI
        payouts, official live cricket exchanges, and 2,000+ premium games — 24/7.
      </p>

      {/* CTAs */}
      <HeroButtons />

      {/* Premium stats bar */}
      <div className="hero-stats pt-7 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-5 max-w-xl">
        {stats.map((s) => (
          <div key={s.label} className="hero-stat flex flex-col">
            <span className="font-bebas text-3xl sm:text-4xl leading-none bg-clip-text text-transparent bg-gradient-to-b from-[#FFF2C6] via-[#F6C453] to-[#D4AF37]">
              {s.value}
            </span>
            <span className="mt-1.5 text-[10px] sm:text-[11px] uppercase tracking-[1.5px] text-gray-400 font-semibold">
              {s.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroContent;

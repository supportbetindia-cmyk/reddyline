"use client";

import React from "react";
import { ShieldCheck, Headphones, Zap } from "lucide-react";

export const HeroFeatures: React.FC = () => {
  const features = [
    {
      icon: <ShieldCheck className="w-4.5 h-4.5 text-[#F6C453]" />,
      title: "100% Secure",
      subtitle: "Licensed & Encrypted",
    },
    {
      icon: <Headphones className="w-4.5 h-4.5 text-[#F6C453]" />,
      title: "24/7 Support",
      subtitle: "Dedicated WhatsApp",
    },
    {
      icon: <Zap className="w-4.5 h-4.5 text-[#F6C453]" />,
      title: "Fast Payout",
      subtitle: "2-Min Instant UPI",
    },
  ];

  return (
    <div className="hero-features pt-6 border-t border-white/10 grid grid-cols-3 gap-2.5 sm:gap-4 max-w-xl">
      {features.map((item, index) => (
        <div
          key={index}
          className="group flex items-center gap-2.5 p-2.5 sm:p-3 rounded-xl bg-white/[0.03] border border-[#F6C453]/15 hover:border-[#F6C453]/40 backdrop-blur-sm transition-all duration-300 hover:bg-[#F6C453]/[0.06] hover:-translate-y-0.5"
        >
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#F6C453]/10 border border-[#F6C453]/25 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
            {item.icon}
          </div>
          <div className="min-w-0">
            <div className="text-white font-bold text-xs sm:text-sm tracking-wide truncate">
              {item.title}
            </div>
            <div className="text-gray-400 text-[10px] sm:text-[11px] font-medium truncate">
              {item.subtitle}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroFeatures;

"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Gamepad2, Zap } from "lucide-react";

export const HeroButtons: React.FC = () => {
  return (
    <div className="hero-buttons flex flex-wrap items-center gap-4 sm:gap-5 mb-8 sm:mb-10">
      {/* JOIN NOW - Primary Red Gradient CTA */}
      <a
        href="https://www.reddyline.co/"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative inline-flex items-center justify-center text-decoration-none"
      >
        <motion.div
          whileHover={{ scale: 1.04, y: -3 }}
          whileTap={{ scale: 0.96 }}
          className="relative z-10 flex items-center justify-center gap-3 px-8 py-4 sm:px-9 sm:py-4.5 rounded-full bg-gradient-to-r from-[#E41E26] via-[#DC2626] to-[#B91C1C] text-white font-extrabold text-sm sm:text-base tracking-wider uppercase shadow-[0_10px_35px_rgba(228,30,38,0.45)] hover:shadow-[0_15px_45px_rgba(228,30,38,0.65)] transition-all duration-300 border border-white/20 overflow-hidden"
        >
          {/* Subtle Shimmer Ray */}
          <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-out pointer-events-none" />
          
          <Zap className="w-5 h-5 fill-current text-white animate-pulse" />
          <span>JOIN NOW</span>
          <ArrowRight className="w-5 h-5 text-white transition-transform duration-300 group-hover:translate-x-1.5" />
        </motion.div>
      </a>

      {/* EXPLORE GAMES - Glassmorphic Gold Border CTA */}
      <a
        href="https://www.reddyline.co/"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative inline-flex items-center justify-center text-decoration-none"
      >
        <motion.div
          whileHover={{ scale: 1.04, y: -3 }}
          whileTap={{ scale: 0.96 }}
          className="relative z-10 flex items-center justify-center gap-2.5 px-7 py-4 sm:px-8 sm:py-4.5 rounded-full bg-white/[0.03] backdrop-blur-md border-2 border-[#F6C453] text-[#F6C453] hover:text-black font-extrabold text-sm sm:text-base tracking-wider uppercase hover:bg-[#F6C453] shadow-[0_0_20px_rgba(246,196,83,0.15)] hover:shadow-[0_10px_30px_rgba(246,196,83,0.4)] transition-all duration-300"
        >
          <Gamepad2 className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" />
          <span>EXPLORE GAMES</span>
        </motion.div>
      </a>
    </div>
  );
};

export default HeroButtons;

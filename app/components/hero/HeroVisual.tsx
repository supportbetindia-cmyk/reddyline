"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export const HeroVisual: React.FC = () => {
  return (
    <div className="hero-visual-wrapper relative w-full flex items-center justify-center select-none">
      
      {/* Background Gold Ambient Glow */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.4, 0.65, 0.4],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] sm:w-[650px] h-[450px] sm:h-[650px] rounded-full blur-[110px] pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(circle, rgba(246, 196, 83, 0.35) 0%, rgba(228, 30, 38, 0.15) 50%, transparent 75%)",
        }}
      />

      {/* Main 3D Artwork Container */}
      <motion.div
        animate={{
          y: [-8, 8, -8],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative z-10 w-full max-w-[680px] lg:max-w-none aspect-[16/10] rounded-2xl overflow-hidden p-1 bg-gradient-to-b from-[#F6C453]/40 via-white/10 to-[#F6C453]/20 shadow-[0_20px_60px_rgba(0,0,0,0.95),0_0_35px_rgba(246,196,83,0.25)] border border-[#F6C453]/30 group hover:shadow-[0_25px_80px_rgba(246,196,83,0.4)] transition-all duration-500"
      >
        <div className="relative w-full h-full rounded-[14px] overflow-hidden bg-[#0A0A0A]">
          <Image
            src="/hero_banner.jpg"
            alt="Reddy Line Gaming & Sportsbook"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 55vw"
            className="object-cover object-right sm:object-center transform group-hover:scale-105 transition-transform duration-700 filter brightness-105 contrast-105"
          />

          {/* Subtle Outer Glow & Reflection Lines */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/80 via-transparent to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/60 via-transparent to-transparent pointer-events-none lg:hidden" />
        </div>
      </motion.div>

    </div>
  );
};

export default HeroVisual;

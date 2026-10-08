"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export const HeroBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none ">
      {/* Base Black Background */}
      

      {/* Main Full-Bleed Hero Banner Image Background */}
      <div className="absolute  w-full h-full">
        <Image
          src="/hero_banner.jpg"
          alt="Reddy Line Sportsbook & Casino Background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-right sm:object-center"
        />
      </div>

      {/* Dark Gradient Vignettes for Text Contrast & Seamless Edges */}
      {/* Left side dark fade for left text content legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/85 via-45% to-transparent z-[1]" />
      
      {/* Bottom dark fade for smooth transition into next section */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 via-20% to-transparent z-[1]" />

      {/* Top dark fade for navbar contrast */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#050505]/90 to-transparent z-[1]" />

      {/* Dynamic Gold Glow Ambient Pulse */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 right-[10%] -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[130px] pointer-events-none z-[2]"
        style={{
          background:
            "radial-gradient(circle, rgba(246, 196, 83, 0.3) 0%, rgba(228, 30, 38, 0.1) 50%, transparent 75%)",
        }}
      />

      {/* Floating Animated Gold Particles */}
     
    </div>
  );
};

export default HeroBackground;

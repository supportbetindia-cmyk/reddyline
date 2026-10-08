"use client";

import { motion } from "framer-motion";

import React, { useState, useEffect } from "react";

const items = [
  "🏏 IPL Betting",
  "🎰 200+ Casino Games",
  "💰 Instant Withdrawals",
  "🏆 Daily Tournaments",
  "📱 Mobile App Available",
  "🔒 100% Secure Platform",
  "🎁 Welcome Bonus ₹25,000",
  "⚡ Fast Deposits",
];

export default function Marquee() {
  const [duration, setDuration] = useState(20);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setDuration(8); // Snappy speed on mobile
      } else {
        setDuration(10); // Default speed on desktop
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="border-t border-b border-border bg-bg2 overflow-hidden py-3.5 relative z-[2]">
      <motion.div
        key={duration}
        animate={{ x: "-50%" }}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex gap-0 whitespace-nowrap w-max"
      >
        {[...items, ...items].map((item, i) => (
          <motion.div
            key={i}
            className="inline-flex items-center gap-2.5 px-10 text-[13px] font-medium text-muted uppercase tracking-[1px] border-r border-border shrink-0"
          >
            {item}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setShow(false), 200);
          return 100;
        }
        const increment = Math.floor(Math.random() * 8) + 5;
        return Math.min(prev + increment, 100);
      });
    }, 50);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            scale: 1.05,
            transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] } 
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0A0E17]"
        >
          {/* Dot grid pattern */}
          <div className="absolute inset-0 bg-dots opacity-30" />

          {/* Radial Glow */}
          <div className="absolute w-[350px] h-[350px] bg-[#10B981]/10 blur-[120px] rounded-full" />
          
          <div className="relative flex flex-col items-center gap-6">
            {/* Spinning Rings */}
            <div className="relative w-32 h-32 flex items-center justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
                className="absolute inset-0 rounded-full border-t-2 border-r-2 border-[#10B981] border-b-transparent border-l-transparent shadow-[0_0_20px_rgba(16,185,129,0.3)]"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 1.8, ease: "linear" }}
                className="absolute inset-2 rounded-full border-b-2 border-l-2 border-[#34D399] border-t-transparent border-r-transparent shadow-[0_0_20px_rgba(52,211,153,0.3)]"
              />
              
              {/* Central Logo */}
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="w-24 h-16 relative z-10 flex items-center justify-center"
              >
                <Image
                  src="/logo.png"
                  alt="Reddy Line"
                  width={96}
                  height={48}
                  className="w-20 h-12 object-contain filter drop-shadow-[0_0_16px_rgba(16,185,129,0.6)]"
                />
              </motion.div>
            </div>

            {/* Brand Title */}
            <div className="text-center">
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="font-display text-3xl tracking-[4px] text-white font-bold"
              >
                REDDY LINE
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-[10px] uppercase tracking-[3px] text-[#10B981] font-bold mt-1.5"
              >
                SINCE 2010
              </motion.p>
            </div>

            {/* Progress Bar */}
            <div className="flex flex-col items-center gap-2.5 w-48 mt-2">
              <div className="h-[2px] w-full bg-white/5 rounded-full overflow-hidden relative">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#059669] to-[#34D399] shadow-[0_0_10px_rgba(16,185,129,0.6)]"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <span className="font-mono text-[12px] text-[#10B981] font-bold">
                {progress}%
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

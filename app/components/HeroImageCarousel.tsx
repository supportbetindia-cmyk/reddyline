"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

const HERO_IMAGES = [
  { src: "/cricket-gold-v2.png", alt: "Reddy Line online cricket experience" },
  { src: "/reddy-casino-v2.png", alt: "Reddy Line live casino games" },
  { src: "/football-gold-v2.png", alt: "Reddy Line football experience" },
  { src: "/horse-racing-gold-v2.png", alt: "Reddy Line horse racing platform" },
];

const ROTATE_MS = 6000;

export default function HeroImageCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % HERO_IMAGES.length);
    }, ROTATE_MS);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full">
      <div
        className={clsx(
          "absolute -inset-3 rounded-2xl blur-2xl opacity-35 pointer-events-none",
          "bg-gradient-to-br from-cyan-500/30 via-blue-600/20 to-transparent"
        )}
        aria-hidden
      />

      <div
        className={clsx(
          "relative aspect-[4/5] w-full max-h-[360px] overflow-hidden rounded-xl",
          "border border-white/10",
          "shadow-[0_0_40px_rgba(6,182,212,0.2)]"
        )}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={HERO_IMAGES[index].src}
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.55, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={HERO_IMAGES[index].src}
              alt={HERO_IMAGES[index].alt}
              fill
              sizes="(max-width: 1024px) 90vw, 420px"
              className="object-fit"
              priority={index === 0}
            />
          </motion.div>
        </AnimatePresence>

        <div
          className="absolute inset-0 bg-gradient-to-t from-[#030914]/60 via-transparent to-transparent pointer-events-none"
          aria-hidden
        />
      </div>

      <div className="mt-3 flex justify-center gap-1.5">
        {HERO_IMAGES.map((img, i) => (
          <button
            key={img.src}
            type="button"
            aria-label={`Show image ${i + 1}`}
            onClick={() => setIndex(i)}
            className={clsx(
              "h-1.5 rounded-full transition-all duration-300",
              i === index ? "w-6 bg-cyan-400" : "w-1.5 bg-white/25 hover:bg-white/40"
            )}
          />
        ))}
      </div>
    </div>
  );
}

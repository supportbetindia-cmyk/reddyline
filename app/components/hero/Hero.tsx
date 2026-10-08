"use client";

import React, { useEffect, useRef } from "react";
import clsx from "clsx";
import gsap from "gsap";
import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import WinnerTicker from "./WinnerTicker";

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // GSAP Page Load Timeline
  useEffect(() => {
    if (typeof window === "undefined" || !containerRef.current) return;

    const ctx = gsap.context(() => {
      // Entry Animation Timeline
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-tagline", {
        y: -20,
        opacity: 0,
        duration: 0.6,
        delay: 0.2,
      })
        .from(
          ".hero-heading span",
          {
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.15,
          },
          "-=0.4"
        )
        .from(
          ".hero-paragraph",
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
          },
          "-=0.5"
        )
        .from(
          ".hero-buttons",
          {
            y: 30,
            opacity: 0,
            duration: 0.6,
          },
          "-=0.4"
        )
        .from(
          ".hero-features",
          {
            y: 20,
            opacity: 0,
            duration: 0.5,
          },
          "-=0.3"
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className={clsx(
        "relative",
        "min-h-screen",
        "w-full",
        "overflow-hidden",
        "flex",
        "flex-col",
        "justify-between",
        "bg-[#050505]",
        "pt-[calc(var(--navbar-offset)+1rem)]"
      )}
    >
      {/* Full-bleed Artwork Background Image & Vignette Overlays */}
      <HeroBackground />

      {/* Main Hero Content Layout */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex-1 flex items-center py-8 sm:py-12">
        <div className="w-full max-w-3xl lg:max-w-4xl">
          <HeroContent />
        </div>
      </div>

      {/* Bottom Sticky Marquee Ticker */}
      <WinnerTicker />
    </section>
  );
};

export default Hero;

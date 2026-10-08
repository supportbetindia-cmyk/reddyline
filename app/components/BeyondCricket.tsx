"use client";

import clsx from "clsx";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

const sports = [
  { icon: "/football-gold-v2.png", name: "Football", href:"/soccer" },
  { icon: "/tennis-gold-v2.png", name: "Tennis", href:"/tennis" },
  { icon: "/reddy-sports-v2.png", name: "Basketball",href:"/casino" },
  { icon: "/reddy-sports-v2.png", name: "Esports",href:"/casino" },
  { icon: "/horse-racing-gold-v2.png", name: "Horse Racing",href:"/horse-racing" },
  { icon: "/reddy-sports-v2.png", name: "International Sports Tournaments",href:"/" },
];

export default function BeyondCricket() {
  const containerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }

    const ctx = gsap.context(() => {
      // Header reveal
      gsap.fromTo(
        ".reveal-beyond-header",
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".reveal-beyond-header",
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      // Sports available text reveal
      gsap.fromTo(
        ".reveal-beyond-subheader",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".reveal-beyond-subheader",
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      // Sports grid items stagger pop-in
      gsap.fromTo(
        ".reveal-beyond-card",
        { opacity: 0, y: 40, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          stagger: 0.08,
          ease: "back.out(1.4)",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className={clsx('py-[50px]', 'px-[5%]', 'bg-bg3', 'relative', 'overflow-hidden')}>
      <div className={clsx('absolute', 'top-[-10%]', 'right-[-5%]', 'w-[500px]', 'h-[500px]', 'bg-[radial-gradient(circle,rgba(229,193,88,0.06)_0%,transparent_70%)]', 'pointer-events-none')} />

      <div className={clsx('max-w-[1200px]', 'mx-auto')}>
        {/* Header */}
        <div className={clsx('text-left', 'sm:text-center', 'mb-14', 'reveal-beyond-header')}>
          <div className={clsx('section-tag', 'justify-center')}>Beyond Cricket</div>
          <h2 className="section-title">
            Entertainment Beyond<br />Cricket and <span className="text-gold">Casino Games</span>
          </h2>
          <p className={clsx('text-[16px]', 'text-muted', 'leading-[1.8]', 'max-w-[700px]', 'mx-auto', 'font-light')}>
            Reddy Line is more than just a casino gaming and cricket betting platform. Users can also enjoy multiple sports events and live entertainment categories from one place.
          </p>
        </div>

        {/* Sports Grid */}
        <h3 className={clsx('font-syne', 'font-bold', 'text-[18px]', 'text-white', 'text-left', 'sm:text-center', 'mb-8', 'reveal-beyond-subheader')}>
          Sports available on the platform include:
        </h3>

        <div ref={gridRef} className={clsx('grid', 'grid-cols-2', 'md:grid-cols-3', 'lg:grid-cols-6', 'gap-4', 'mb-12')}>
          {sports.map((sport) => (
            <Link
              href={sport.href} 
              key={sport.name}
              className={clsx(
                'relative', 'aspect-[3/4]', 'rounded-xl', 'overflow-hidden',
                'border', 'border-border', 'cursor-pointer', 'group', 'reveal-beyond-card',
                'hover:border-[#E5C158]/50', 'hover:-translate-y-1.5', 'shadow-md', 'transition-all', 'duration-300'
              )}
            >
              <Image
                src={sport.icon}
                alt={sport.name}
                fill
                sizes="(max-width: 768px) 50vw, 200px"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div
                className={clsx(
                  'absolute', 'inset-0', 'flex', 'items-center', 'justify-center', 'p-3',
                  'bg-black/65', 'opacity-0', 'group-hover:opacity-100',
                  'transition-opacity', 'duration-300'
                )}
              >
                <span className={clsx('text-[13px]', 'text-white', 'font-medium', 'leading-tight', 'text-center')}>
                  {sport.name}
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom Text */}
        <p className={clsx('text-[14px]', 'text-muted', 'leading-[1.8]', 'text-left', 'sm:text-center', 'max-w-[700px]', 'mx-auto', 'font-light', 'reveal-beyond-header')}>
          This variety helps users enjoy a complete digital entertainment experience with more gaming opportunities and betting markets.
        </p>
      </div>
    </section>
  );
}

"use client";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import React, { useCallback, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronLeft, ChevronRight } from "lucide-react";

const games = [
  { name: "Play Now",href:"https://www.reddyline.co/", tag: "Slot Game", emoji: "💰", image: "/money_heist.png", badge: "hot" },
  { name: "Play Now",href:"https://www.reddyline.co/", tag: "Adventure Slot", emoji: "🎰", image: "/casino-roulette-card-gold-v2.png", badge: null },
  { name: "Play Now",href:"https://www.reddyline.co/", tag: "Crash Game", emoji: "✈️", image: "/aviator.jpg", badge: "new" },
  { name: "Play Now",href:"https://www.reddyline.co/", tag: "Indian Favourite", emoji: "🃏", image: "/teen_pati.png", badge: "hot" },
  { name: "Play Now",href:"https://www.reddyline.co/", tag: "Live Casino", emoji: "🪩", image: "/disco_club.png", badge: "new" },
  { name: "Play Now",href:"https://www.reddyline.co/", tag: "Instant Win", emoji: "🎲", image: "/naughty_button.png", badge: null },
  { name: "Play Now",href:"https://www.reddyline.co/", tag: "Crash Game", emoji: "🐔", image: "/chiken_road.jpeg", badge: "new" },
  { name: "Play Now",href:"https://www.reddyline.co/", tag: "Slot Game", emoji: "💕", image: "/campus_crush.jpeg", badge: null },
  { name: "Play Now",href:"https://www.reddyline.co/", tag: "Sports Slot", emoji: "🏎️", image: "/f1.png", badge: "hot" },
  { name: "Play Now",href:"https://www.reddyline.co/", tag: "Crash Game", emoji: "📈", image: "/casino-rocket-card-gold-v2.png", badge: null },
];

export default function CasinoGames() {
  const containerRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = useCallback(() => {
    const el = carouselRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 4);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 4);
  }, []);

  const scrollCarousel = useCallback((direction: "left" | "right") => {
    const el = carouselRef.current;
    if (!el) return;
    const firstCard = el.querySelector<HTMLElement>("[data-casino-card]");
    const gap = 12;
    const step = firstCard ? firstCard.offsetWidth + gap : el.clientWidth * 0.5;
    el.scrollBy({ left: direction === "left" ? -step * 2 : step * 2, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;
    updateScrollState();
    el.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);
    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [updateScrollState]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }

    const ctx = gsap.context(() => {
      // Header reveal
      gsap.fromTo(
        ".reveal-header",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".reveal-header",
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      // Grid items reveal: pop out sequentially with a small spring bounce
      gsap.fromTo(
        ".reveal-card",
        { opacity: 0, y: 50, scale: 0.9, rotateX: 12 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotateX: 0,
          duration: 0.8,
          stagger: 0.08,
          ease: "back.out(1.5)",
          scrollTrigger: {
            trigger: carouselRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      // Rotate decorative roulette wheel on scroll (clockwise down, anticlockwise up)
      gsap.to(".rotate-roulette", {
        rotation: 360,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5, // Smooth lag response
        },
      });

      // Animate Aviator plane on scroll (moves down/right on scroll down, returns on scroll up)
      gsap.fromTo(".scroll-aviator-plane", 
        { y: -50, x: -50, rotation: 125 },
        {
          y: 550,
          x: 120,
          rotation: 135,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
            end: "bottom 25%",
            scrub: 1.2, // Smooth follow lag
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // 3D Tilt Hover Effects
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    // Tilt calculations (max 12 degrees rotation)
    const tiltX = (y / (rect.height / 2)) * -12;
    const tiltY = (x / (rect.width / 2)) * 12;

    gsap.to(card, {
      rotateX: tiltX,
      rotateY: tiltY,
      transformPerspective: 600,
      scale: 1.04,
      boxShadow: "0 18px 40px rgba(16, 185, 129, 0.3)",
      borderColor: "rgba(52, 211, 153, 0.5)",
      duration: 0.35,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    const card = e.currentTarget;
    gsap.to(card, {
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
      borderColor: "rgba(148, 163, 184, 0.12)",
      duration: 0.5,
      ease: "power2.out",
    });
  };

  return (
    <section ref={containerRef} id="games" className={clsx('py-[50px]', 'px-[5%]', 'bg-bg2', 'relative', 'overflow-hidden')}>
      {/* Decorative Scroll-Linked Aviator Plane */}
      <div 
        className={clsx(
          'absolute', 'left-[-80px]', 'top-[15%]', 'w-16', 'h-16', 
          'pointer-events-none', 'hidden', 'xl:block', 
          'scroll-aviator-plane', 'z-10'
        )}
      >
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-[#E8303A] fill-current drop-shadow-[0_0_8px_rgba(232,48,58,0.7)]" style={{ transform: "rotate(135deg)" }}>
          <path d="M21 16V14L13 9V3.5C13 2.67 12.33 2 11.5 2C10.67 2 10 2.67 10 3.5V9L2 14V16L10 13.5V19L8 20.5V22L11.5 21L15 22V20.5L13 19V13.5L21 16Z" />
        </svg>
      </div>
      {/* Decorative Rotating Roulette Wheel */}
      <div 
        className={clsx(
          'absolute', 'right-[-60px]', 'top-[5%]', 'w-[400px]', 'h-[400px]', 
          'opacity-25', 'pointer-events-none', 'hidden', 'xl:block', 
          'rotate-roulette', 'text-accent'
        )}
      >
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full stroke-current filter drop-shadow-[0_0_12px_rgba(16,185,129,0.3)]">
          {/* Outer Rim */}
          <circle cx="50" cy="50" r="48" strokeWidth="1.5" />
          <circle cx="50" cy="50" r="45" strokeWidth="0.5" strokeDasharray="3 1" />
          
          {/* Slots & Numbers Rim */}
          <circle cx="50" cy="50" r="40" strokeWidth="5" strokeDasharray="2 3" opacity="0.4" />
          <circle cx="50" cy="50" r="37" strokeWidth="0.5" />
          
          {/* Inner Wheel spokes */}
          {Array.from({ length: 16 }).map((_, i) => {
            const angle = (i * 360) / 16;
            return (
              <line
                key={i}
                x1="50"
                y1="50"
                x2={50 + 37 * Math.cos((angle * Math.PI) / 180)}
                y2={50 + 37 * Math.sin((angle * Math.PI) / 180)}
                strokeWidth="0.5"
                opacity="0.3"
              />
            );
          })}
          
          {/* Center Hub */}
          <circle cx="50" cy="50" r="12" strokeWidth="1" />
          <circle cx="50" cy="50" r="8" fill="currentColor" opacity="0.1" />
          <circle cx="50" cy="50" r="4" fill="currentColor" />
          <path d="M50 38 L50 62 M38 50 L62 50" strokeWidth="1" />
        </svg>
      </div>

      {/* Header */}
      <div className={clsx('flex', 'justify-between', 'items-end', 'mb-[60px]', 'gap-6', 'flex-wrap', 'reveal-header')}>
        <div>
          <div className="section-tag">Casino Games</div>
          <h2 className="section-title">Best Casino Games Online <span className="text-gold">For</span><br />Indian Players</h2>
        </div>
        <div>
          <p className="section-desc">
            Reddy Line provides access to some of the best casino games online with smooth gameplay, high-quality graphics, and real-time gaming experiences. We focus on creating a premium casino environment where users can enjoy exciting games anytime and anywhere.
          </p>
        </div>
      </div>

      {/* Games Carousel */}
      <div className={clsx("relative", "group/carousel")}>
        <button
          type="button"
          onClick={() => scrollCarousel("left")}
          disabled={!canScrollLeft}
          aria-label="Previous games"
          className={clsx(
            "absolute",
            "left-0",
            "top-[42%]",
            "-translate-y-1/2",
            "z-20",
            "w-9",
            "h-9",
            "sm:w-10",
            "sm:h-10",
            "rounded-full",
            "border",
            "border-white/15",
            "bg-bg/90",
            "text-white",
            "flex",
            "items-center",
            "justify-center",
            "shadow-lg",
            "transition-all",
            "duration-200",
            "-translate-x-1/2",
            "disabled:opacity-30",
            "disabled:pointer-events-none",
            "hover:bg-gold",
            "hover:border-gold",
            "hover:scale-105"
          )}
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          type="button"
          onClick={() => scrollCarousel("right")}
          disabled={!canScrollRight}
          aria-label="Next games"
          className={clsx(
            "absolute",
            "right-0",
            "top-[42%]",
            "-translate-y-1/2",
            "z-20",
            "w-9",
            "h-9",
            "sm:w-10",
            "sm:h-10",
            "rounded-full",
            "border",
            "border-white/15",
            "bg-bg/90",
            "text-white",
            "flex",
            "items-center",
            "justify-center",
            "shadow-lg",
            "transition-all",
            "duration-200",
            "translate-x-1/2",
            "disabled:opacity-30",
            "disabled:pointer-events-none",
            "hover:bg-gold",
            "hover:border-gold",
            "hover:scale-105"
          )}
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        <div
          ref={carouselRef}
          className={clsx(
            "flex",
            "gap-3",
            "overflow-x-auto",
            "scroll-smooth",
            "snap-x",
            "snap-mandatory",
            "pb-2",
            "[scrollbar-width:none]",
            "[&::-webkit-scrollbar]:hidden",
            "px-1"
          )}
          style={{ transformStyle: "preserve-3d" }}
        >
          {games.map((game) => (
            <Link
              href={game.href}
              key={game.image}
              target="_blank"
              rel="noopener noreferrer"
              data-casino-card
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className={clsx(
                "relative",
                "rounded-lg",
                "overflow-hidden",
                "aspect-[4/5]",
                "shrink-0",
                "snap-start",
                "w-[calc((100%-0.75rem)/2)]",
                "sm:w-[calc((100%-1.5rem)/3)]",
                "lg:w-[calc((100%-1.25rem*5)/6)]",
                "cursor-pointer",
                "group",
                "reveal-card",
                "border",
                "border-border",
                "shadow-md",
                "transition-colors",
                "duration-300"
              )}
              style={{ transformStyle: "preserve-3d", transform: "translateZ(0)" }}
            >
            {/* Background Image */}
            <div className={clsx('absolute', 'inset-0', 'transition-transform', 'duration-500', 'group-hover:scale-[1.05]')}>
              <Image
                src={game.image}
                alt={game.name}
                fill
                className="object-fit"
              />
            </div>
            
            {/* Badge */}
            {game.badge === "hot" && (
              <div className={clsx('absolute', 'top-2', 'right-2', 'bg-red', 'text-white', 'text-[8px]', 'font-bold', 'uppercase', 'tracking-[1px]', 'px-1.5', 'py-0.5', 'rounded', 'z-20')}>Hot</div>
            )}
            {game.badge === "new" && (
              <div className={clsx('absolute', 'top-2', 'right-2', 'bg-green', 'text-[#041208]', 'text-[8px]', 'font-bold', 'uppercase', 'tracking-[1px]', 'px-1.5', 'py-0.5', 'rounded', 'z-20')}>New</div>
            )}
            
            {/* Hover name overlay */}
            <div
              className={clsx(
                'absolute', 'inset-0', 'flex', 'items-center', 'justify-center', 'p-3',
                'bg-black/65', 'opacity-0', 'group-hover:opacity-100',
                'transition-opacity', 'duration-300', 'z-10'
              )}
              style={{ transform: "translateZ(30px)" }}
            >
              <span className={clsx('font-syne', 'font-bold', 'text-[12px]', 'sm:text-[13px]', 'text-white', 'text-center', 'leading-tight')}>
                {game.name}
              </span>
            </div>
            </Link>
          ))}
        </div>
      </div>

      <div className={clsx('flex', 'justify-center', 'mt-8')}>
        <Link href="/casino" className={clsx('btn', 'btn-gold', 'inline-flex')}>View All Games</Link>
      </div>

      <p className={clsx('text-left', 'sm:text-center', 'mt-10', 'text-[13px]', 'text-muted', 'max-w-[800px]', 'mx-auto', 'leading-relaxed')}>
        Our platform regularly updates gaming categories to keep the experience fresh, engaging, and entertaining for players worldwide.
        Whether users prefer classic table games, strategic card games, or fast-paced modern casino experiences, Reddy Line offers something for everyone. The platform is optimized for smooth gameplay so users can enjoy casino games online without lag or interruptions.
        As a growing casino game India platform, we focus on providing better gaming quality, faster performance, and a user-friendly environment that helps players enjoy every moment.
      </p>
    </section>
  );
}

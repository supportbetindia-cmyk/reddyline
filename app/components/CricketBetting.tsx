"use client";

import clsx from "clsx";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import LiveCricketWidget from "./LiveCricketWidget";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const cricketFeatures = [
  { emoji: "🏆", title: "IPL Cricket Betting", desc: "Live odds, ball-by-ball markets", status: "LIVE ▸", statusColor: "text-green" },
  { emoji: "🌍", title: "International Matches", desc: "T20, ODI, Test cricket", status: "Coming Up ▸", statusColor: "text-muted" },
  { emoji: "⚡", title: "Instant Cricket ID", desc: "Fast account setup, secure access", status: "Get ID ▸", statusColor: "text-gold" },
];

export default function CricketBetting() {
  const containerRef = useRef<HTMLDivElement>(null);
  const matchCardRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }

    const ctx = gsap.context(() => {
      // Live Match Card Entrance (slide in from left)
      gsap.fromTo(
        matchCardRef.current,
        { opacity: 0, x: -70, rotateY: 10 },
        {
          opacity: 1,
          x: 0,
          rotateY: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: matchCardRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      // Info Section Entrance (slide in from right)
      gsap.fromTo(
        infoRef.current,
        { opacity: 0, x: 70 },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: infoRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      // Feature items stagger
      gsap.fromTo(
        ".reveal-feature-item",
        { opacity: 0, x: 30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: infoRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );

      // IPL Section Header
      gsap.fromTo(
        ".reveal-ipl-header",
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".reveal-ipl-header",
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      // IPL Grid items stagger pop-in
      gsap.fromTo(
        ".reveal-ipl-grid-item",
        { opacity: 0, scale: 0.9, y: 20 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.08,
          ease: "back.out(1.5)",
          scrollTrigger: {
            trigger: ".reveal-ipl-grid-item",
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      // Bottom cards stagger
      gsap.fromTo(
        ".reveal-ipl-card",
        { opacity: 0, y: 45 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".reveal-ipl-card",
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // 3D Tilt for Live Match Card
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    const tiltX = (y / (rect.height / 2)) * -8;
    const tiltY = (x / (rect.width / 2)) * 8;

    gsap.to(card, {
      rotateX: tiltX,
      rotateY: tiltY,
      transformPerspective: 800,
      scale: 1.02,
      boxShadow: "0 20px 40px rgba(229, 193, 88, 0.25)",
      borderColor: "rgba(245, 215, 127, 0.4)",
      duration: 0.4,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    gsap.to(card, {
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      boxShadow: "none",
      borderColor: "rgba(229, 193, 88, 0.18)",
      duration: 0.6,
      ease: "power2.out",
    });
  };

  return (
    <section ref={containerRef} id="cricket" className={clsx('py-[50px]', 'px-[5%]', 'bg-bg', 'overflow-hidden')}>
      <div className={clsx('grid', 'grid-cols-1', 'lg:grid-cols-2', 'gap-20', 'items-center')} style={{ transformStyle: "preserve-3d" }}>
        {/* Left: Live Match Card */}
        <LiveCricketWidget/>

        {/* Right: Cricket Info */}
        <div ref={infoRef}>
          <div className="section-tag">Cricket Betting</div>
          <h2 className="section-title">India&apos;s Most<br />Trusted <span className="text-gold">Cricket ID</span><br />Provider</h2>
          <p className={clsx('section-desc', 'mt-5', 'mb-9')}>Cricket is one of the biggest sports in India and millions of users search daily for trusted online cricket ID services. Reddy Line provides a secure and smooth cricket betting experience with fast access to live sports markets and IPL betting features.</p>

          {/* Feature Cards */}
          <div className={clsx('flex', 'flex-col', 'gap-3.5', 'mb-9')}>
            {cricketFeatures.map((f) => (
              <div 
                key={f.title} 
                className={clsx(
                  'flex', 'items-center', 'gap-3.5', 'p-4', 'bg-card', 'rounded-[10px]', 
                  'border', 'border-border', 'reveal-feature-item', 'hover:border-gold/50', 
                  'hover:bg-card2', 'transition-all', 'duration-300', 'cursor-pointer'
                )}
              >
                <span className="text-[22px]">{f.emoji}</span>
                <div className="flex-1">
                  <div className={clsx('text-[14px]', 'font-semibold', 'text-white', 'mb-0.5')}>{f.title}</div>
                  <div className={clsx('text-[12px]', 'text-muted')}>{f.desc}</div>
                </div>
                <div className={`text-[12px] font-semibold ${f.statusColor}`}>{f.status}</div>
              </div>
            ))}
          </div>

          <div className={clsx('flex', 'justify-center', 'lg:justify-start')}>
            <a href="https://wa.link/1xplayindia" className={clsx('btn', 'btn-gold', 'btn-large')}>Get Cricket ID Now</a>
          </div>
        </div>
      </div>

      {/* IPL Cricket Betting Experience Section */}
      <div className={clsx('mt-20', 'max-w-[1200px]', 'mx-auto')}>
        {/* Section Header */}
        <div className={clsx('text-left', 'sm:text-center', 'mb-12', 'reveal-ipl-header')}>
          <div className={clsx('section-tag', 'justify-center')}>IPL Betting</div>
          <h2 className="section-title">
            Best IPL Cricket <span className="text-gold">Betting Experience</span>
          </h2>
          <p className={clsx('text-[16px]', 'text-muted', 'leading-[1.8]', 'max-w-[720px]', 'mx-auto', 'font-light')}>
            IPL is one of the most exciting cricket tournaments in the world and Reddy Line brings users closer to every match through real time IPL betting features and live sports entertainment.
          </p>
        </div>

        {/* IPL Features Grid */}
        <div className={clsx('grid', 'grid-cols-2', 'md:grid-cols-3', 'gap-3', 'mb-12')}>
          {[
            { icon: '📊', label: 'Live score updates' },
            { icon: '⚡', label: 'Fast betting markets' },
            { icon: '📡', label: 'Real time match tracking' },
            { icon: '📱', label: 'Mobile optimized betting' },
            { icon: '🎫', label: 'Instant cricket ID access' },
            { icon: '🚀', label: 'Smooth gaming performance' },
          ].map((item) => (
            <div
              key={item.label}
              className={clsx(
                'flex', 'items-center', 'gap-3', 'p-4',
                'bg-card', 'border', 'border-border', 'rounded-xl',
                'hover:border-[#E5C158]/50', 'transition-all',
                'group', 'reveal-ipl-grid-item', 'cursor-pointer', 'hover:bg-card2'
              )}
            >
              <span className={clsx('text-[20px]', 'group-hover:scale-110', 'transition-transform')}>{item.icon}</span>
              <span className={clsx('text-[14px]', 'text-white', 'font-medium')}>{item.label}</span>
            </div>
          ))}
        </div>

        {/* Content Cards */}
        <div className={clsx('grid', 'grid-cols-1', 'md:grid-cols-3', 'gap-5', 'mb-10')}>
          {/* User Experience */}
          <div className={clsx('bg-card/60', 'backdrop-blur-sm', 'border', 'border-border', 'rounded-2xl', 'p-6', 'hover:border-[#E5C158]/50', 'transition-all', 'reveal-ipl-card', 'cursor-pointer', 'hover:bg-card2')}>
            <div className={clsx('w-10', 'h-10', 'rounded-lg', 'bg-[#E5C158]/10', 'border', 'border-[#E5C158]/25', 'flex', 'items-center', 'justify-center', 'text-[18px]', 'mb-4')}>🎯</div>
            <h4 className={clsx('font-syne', 'font-bold', 'text-white', 'text-[15px]', 'mb-2')}>User Experience</h4>
            <p className={clsx('text-[13px]', 'text-muted', 'leading-[1.7]')}>
              The platform handles live sports traffic efficiently which helps users enjoy uninterrupted betting experiences during important IPL matches.
            </p>
          </div>

          {/* Security */}
          <div className={clsx('bg-card/60', 'backdrop-blur-sm', 'border', 'border-border', 'rounded-2xl', 'p-6', 'hover:border-[#E5C158]/50', 'transition-all', 'reveal-ipl-card', 'cursor-pointer', 'hover:bg-card2')}>
            <div className={clsx('w-10', 'h-10', 'rounded-lg', 'bg-[#E5C158]/10', 'border', 'border-[#E5C158]/25', 'flex', 'items-center', 'justify-center', 'text-[18px]', 'mb-4')}>🔒</div>
            <h4 className={clsx('font-syne', 'font-bold', 'text-white', 'text-[15px]', 'mb-2')}>Security</h4>
            <p className={clsx('text-[13px]', 'text-muted', 'leading-[1.7]')}>
              Cricket fans looking for the best cricket betting ID experience often choose Reddy Line because of its easy interface, secure systems and responsive sports betting environment.
            </p>
          </div>

          {/* Platform Reliability */}
          <div className={clsx('bg-card/60', 'backdrop-blur-sm', 'border', 'border-border', 'rounded-2xl', 'p-6', 'hover:border-[#E5C158]/50', 'transition-all', 'reveal-ipl-card', 'cursor-pointer', 'hover:bg-card2')}>
            <div className={clsx('w-10', 'h-10', 'rounded-lg', 'bg-[#E5C158]/10', 'border', 'border-[#E5C158]/25', 'flex', 'items-center', 'justify-center', 'text-[18px]', 'mb-4')}>⚙️</div>
            <h4 className={clsx('font-syne', 'font-bold', 'text-white', 'text-[15px]', 'mb-2')}>Platform Reliability</h4>
            <p className={clsx('text-[13px]', 'text-muted', 'leading-[1.7]')}>
              During IPL season users can enjoy live score updates, fast betting markets, real time match tracking, and mobile optimized betting with instant cricket ID access.
            </p>
          </div>
        </div>

        {/* Bottom Description */}
        <p className={clsx('text-[14px]', 'text-muted', 'leading-[1.8]', 'text-left', 'sm:text-center', 'max-w-[800px]', 'mx-auto', 'font-light')}>
          Our goal is to provide a premium IPL betting experience where users can enjoy every moment of live cricket action with speed and convenience. We focus on user experience, security and platform reliability to deliver the best cricket betting platform in India.
        </p>
      </div>
    </section>
  );
}

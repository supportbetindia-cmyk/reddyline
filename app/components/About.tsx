"use client";

import clsx from "clsx";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const secureStatRef = useRef<HTMLDivElement>(null);
  const supportStatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }

    // GSAP Context ensures clean disposal of tweens/scrolltriggers on component unmount
    const ctx = gsap.context(() => {
      // Left Side: Slide in from left + Fade in
      gsap.fromTo(
        leftRef.current,
        { opacity: 0, x: -60 },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: leftRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      // Right Side: Slide in from right + Fade in
      gsap.fromTo(
        rightRef.current,
        { opacity: 0, x: 60 },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: rightRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      // Stat Count Up: Secure Systems (0 -> 100)
      const secureObj = { val: 0 };
      gsap.to(secureObj, {
        val: 100,
        duration: 2.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: leftRef.current,
          start: "top 80%",
        },
        onUpdate: () => {
          if (secureStatRef.current) {
            secureStatRef.current.innerText = `${Math.floor(secureObj.val)}%`;
          }
        },
      });

      // Stat Count Up: Reliable Support (0 -> 24)
      const supportObj = { val: 0 };
      gsap.to(supportObj, {
        val: 24,
        duration: 1.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: leftRef.current,
          start: "top 80%",
        },
        onUpdate: () => {
          if (supportStatRef.current) {
            supportStatRef.current.innerText = `${Math.floor(supportObj.val)}/7`;
          }
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className={clsx('py-[50px]', 'px-[5%]', 'bg-bg2', 'relative', 'overflow-hidden')}>
      {/* Decorative Glow */}
      <div className={clsx('absolute', 'top-1/2', 'left-[-10%]', 'w-[400px]', 'h-[400px]', 'bg-[#E5C158]/15', 'blur-[120px]', 'rounded-full', 'pointer-events-none')} />
      <div className={clsx('absolute', 'bottom-[-10%]', 'right-[-5%]', 'w-[500px]', 'h-[500px]', 'bg-[#D4AF37]/10', 'blur-[150px]', 'rounded-full', 'pointer-events-none')} />

      <div className={clsx('max-w-[1440px]', 'mx-auto', 'relative', 'z-10')}>
        <div className={clsx('grid', 'grid-cols-1', 'lg:grid-cols-12', 'gap-12', 'items-center')}>
          
          {/* Left Side: Brand Visual & Stats */}
          <div ref={leftRef} className={clsx('lg:col-span-5', 'space-y-8')}>
            <div>
              <div className="section-tag"> About</div>
              <h2 className={clsx('section-title', 'flex','items-center','gap-2.5')} >
                <span style={{ background: 'linear-gradient(90deg, #D4AF37, #E5C158)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                    <Image src="/logo.png" alt="Reddy Line" width={220} height={70} className="h-16 w-auto object-contain drop-shadow-[0_2px_12px_rgba(212,175,55,0.3)]" />
                </span>
              </h2>
            </div>
            
            <p className={clsx('text-[16px]', 'text-muted', 'leading-[1.8]', 'font-light', 'max-w-md')}>
              Reddy Line was created to redefine the online gaming experience for users who want more than ordinary gaming platforms. We understand that today’s players expect fast performance easy navigation secure systems and exciting entertainment options. That is why every feature on Reddy Line is designed with users in mind.
            </p>

            {/* Quick Stats Grid */}
            <div className={clsx('grid', 'grid-cols-2', 'gap-4', 'pt-4')}>
              <div className={clsx('bg-card', 'p-5', 'rounded-xl', 'border', 'border-border', 'hover:border-[#D4AF37]/30', 'transition-all', 'group')}>
                <div ref={secureStatRef} className={clsx('text-[28px]', 'font-bebas', 'text-white', 'group-hover:scale-105', 'transition-transform', 'origin-left')}>0%</div>
                <div className={clsx('text-[12px]', 'text-muted', 'uppercase', 'tracking-wider', 'font-semibold')}>Secure Systems</div>
              </div>
              <div className={clsx('bg-card', 'p-5', 'rounded-xl', 'border', 'border-border', 'hover:border-[#D4AF37]/30', 'transition-all', 'group')}>
                <div ref={supportStatRef} className={clsx('text-[28px]', 'font-bebas', 'text-white', 'group-hover:scale-105', 'transition-transform', 'origin-left')}>0/7</div>
                <div className={clsx('text-[12px]', 'text-muted', 'uppercase', 'tracking-wider', 'font-semibold')}>Reliable Support</div>
              </div>
            </div>
          </div>

          {/* Right Side: Key Pillars / Text Content */}
          <div ref={rightRef} className={clsx('lg:col-span-7', 'space-y-6')}>
            <div className={clsx('bg-card/40', 'backdrop-blur-md', 'border', 'border-border', 'p-8', 'md:p-10', 'rounded-2xl', 'space-y-6', 'hover:border-[#D4AF37]/20', 'transition-all', 'shadow-xl')}>
              
              <div className={clsx('flex', 'gap-4', 'items-start')}>
                <div className={clsx('w-8', 'h-8', 'rounded-lg', 'bg-[#D4AF37]/10', 'border', 'border-[#D4AF37]/20', 'flex', 'items-center', 'justify-center', 'text-[#D4AF37]', 'shrink-0', 'mt-1')}>
                  🌐
                </div>
                <div>
                  <h4 className={clsx('font-syne', 'font-bold', 'text-white', 'text-[16px]', 'mb-1.5')}>User-Centric Performance</h4>
                  <p className={clsx('text-[14px]','text-muted', 'leading-[1.7]')}>
                    From beginners to experienced players everyone can easily explore games sports markets and betting services through a clean responsive and mobile friendly interface. Our platform combines modern technology with a smooth user experience to provide entertainment that feels fast secure and enjoyable.
                  </p>
                </div>
              </div>

              <div className={clsx('w-full', 'h-[1px]', 'bg-border')} />

              <div className={clsx('flex', 'gap-4', 'items-start')}>
                <div className={clsx('w-8', 'h-8', 'rounded-lg', 'bg-[#D4AF37]/10', 'border', 'border-[#D4AF37]/20', 'flex', 'items-center', 'justify-center', 'text-[#D4AF37]', 'shrink-0', 'mt-1')}>
                  📈
                </div>
                <div>
                  <h4 className={clsx('font-syne', 'font-bold', 'text-white', 'text-[16px]', 'mb-1.5')}>Continuous Innovation</h4>
                  <p className={clsx('text-[14px]','leading-[1.7]')} style={{ background: 'linear-gradient(90deg, #D4AF37, #F6C453)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                    At Reddy Line we continuously improve our systems gaming options and mobile performance to stay ahead in the online gaming industry. We focus on building trust providing reliable support and delivering premium entertainment experiences for global users.
                  </p>
                </div>
              </div>

              <div className={clsx('w-full', 'h-[1px]', 'bg-border')} />

              {/* Highlight Card for the last paragraph */}
              <div className={clsx('bg-[#D4AF37]/5', 'border', 'border-[#D4AF37]/20', 'p-5', 'rounded-xl', 'flex', 'gap-4', 'items-start')}>
                <div className={clsx('text-[20px]', 'shrink-0')}>🎮</div>
                <p className={clsx('text-[14px]', 'font-medium', 'text-muted', 'leading-[1.6]')} >
                  The platform is designed for users who enjoy online casino gaming cricket betting live sports action and modern digital entertainment from one place.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

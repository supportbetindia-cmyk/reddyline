"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Global smooth (inertia) scrolling via Lenis.
 *
 * Lenis drives the *native* scroll position, so window scroll APIs and
 * framer-motion's `useScroll` (the page progress bars) keep working.
 * In-page anchor links (href="#id") are routed through Lenis so they
 * animate smoothly too, accounting for the fixed navbar.
 */
export default function SmoothScroll() {
  useEffect(() => {
    // Respect users who prefer reduced motion — don't hijack their scroll.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    let rafId = requestAnimationFrame(function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    });

    const onAnchorClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement)?.closest<HTMLAnchorElement>(
        'a[href^="#"]'
      );
      const href = anchor?.getAttribute("href");
      if (!href || href === "#") return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        lenis.scrollTo(target as HTMLElement, { offset: -90 });
      }
    };
    document.addEventListener("click", onAnchorClick);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("click", onAnchorClick);
      lenis.destroy();
    };
  }, []);

  return null;
}

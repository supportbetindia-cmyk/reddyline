"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";

export function HomeMotion() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const revealItems = document.querySelectorAll<HTMLElement>("[data-home-reveal]");

    if (reduceMotion) {
      revealItems.forEach((item) => item.classList.add("home-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("home-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -8% 0px" },
    );

    revealItems.forEach((item) => observer.observe(item));

    const tiltItems = document.querySelectorAll<HTMLElement>("[data-home-tilt]");
    const cleanups: Array<() => void> = [];

    tiltItems.forEach((item) => {
      const onMove = (event: PointerEvent) => {
        const bounds = item.getBoundingClientRect();
        const x = (event.clientX - bounds.left) / bounds.width - 0.5;
        const y = (event.clientY - bounds.top) / bounds.height - 0.5;
        item.style.setProperty("--tilt-x", `${-y * 8}deg`);
        item.style.setProperty("--tilt-y", `${x * 10}deg`);
        item.style.setProperty("--glow-x", `${(x + 0.5) * 100}%`);
        item.style.setProperty("--glow-y", `${(y + 0.5) * 100}%`);
      };
      const onLeave = () => {
        item.style.setProperty("--tilt-x", "0deg");
        item.style.setProperty("--tilt-y", "0deg");
      };
      item.addEventListener("pointermove", onMove);
      item.addEventListener("pointerleave", onLeave);
      cleanups.push(() => {
        item.removeEventListener("pointermove", onMove);
        item.removeEventListener("pointerleave", onLeave);
      });
    });

    return () => {
      observer.disconnect();
      cleanups.forEach((cleanup) => cleanup());
    };
  }, []);

  return null;
}

export function AnimatedHeading({
  lines,
  highlight,
}: {
  lines: string[];
  highlight?: string;
}) {
  return (
    <motion.h2
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-12% 0px" }}
      variants={{ visible: { transition: { staggerChildren: 0.055 } } }}
    >
      {lines.map((line) => (
        <span className="motion-line" key={line}>
          {line.split(" ").map((word, index) => (
            <motion.span
              className={word === highlight ? "motion-word motion-word-gold" : "motion-word"}
              key={`${word}-${index}`}
              variants={{
                hidden: { y: "115%", rotateX: -55, opacity: 0 },
                visible: { y: "0%", rotateX: 0, opacity: 1, transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] } },
              }}
            >
              {word}&nbsp;
            </motion.span>
          ))}
        </span>
      ))}
    </motion.h2>
  );
}

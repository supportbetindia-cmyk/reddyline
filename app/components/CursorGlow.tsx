"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function CursorGlow() {
  const [isDesktop, setIsDesktop] = useState(false);
  const springX = useSpring(0, { stiffness: 120, damping: 25 });
  const springY = useSpring(0, { stiffness: 120, damping: 25 });

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px) and (pointer: fine)");
    setIsDesktop(mq.matches);

    const onChange = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    const onMove = (e: MouseEvent) => {
      springX.set(e.clientX);
      springY.set(e.clientY);
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [isDesktop, springX, springY]);

  if (!isDesktop) return null;

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[9990] w-[400px] h-[400px] rounded-full mix-blend-screen"
      style={{
        x: springX,
        y: springY,
        translateX: "-50%",
        translateY: "-50%",
        background:
          "radial-gradient(circle, rgba(16,185,129,0.08) 0%, rgba(16,185,129,0.03) 35%, transparent 70%)",
      }}
    />
  );
}

"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { SportImageCard } from "./SportImageCard";

export const SPORT_PAGE_ACCENT = "#F6C453";

export function EyebrowHead({ num, eyebrow, title }: { num: string; eyebrow: string; title: string }) {
  return (
    <>
      <div className="mb-2 flex items-center gap-4">
        <span className="font-bebas text-[40px] leading-none tracking-wider text-white">{num}</span>
        <span className="h-[2px] w-10 rounded-full bg-[#F6C453]" />
        <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#F6C453] font-syne">
          {eyebrow}
        </span>
      </div>
      <h2 className="section-title">{title}</h2>
    </>
  );
}

export function WideBlock({
  num,
  eyebrow,
  title,
  id,
  children,
}: {
  num: string;
  eyebrow: string;
  title: string;
  id?: string;
  children: React.ReactNode;
}) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 1, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="mx-auto max-w-[1180px] scroll-mt-24"
    >
      <EyebrowHead num={num} eyebrow={eyebrow} title={title} />
      <div className="mt-6 text-[15px] leading-[1.85] font-light text-muted">{children}</div>
    </motion.section>
  );
}

/** Same header layout as cricket — used where pages previously had narrow Block sections. */
export function EditorialBlock({
  num,
  eyebrow,
  title,
  id,
  children,
}: {
  num: string;
  eyebrow: string;
  title: string;
  id?: string;
  children: React.ReactNode;
}) {
  return (
    <WideBlock num={num} eyebrow={eyebrow} title={title} id={id}>
      {children}
    </WideBlock>
  );
}

/** Two-column text + SportImageCard layout used on sport game pages. */
export function SplitMedia({
  num,
  eyebrow,
  title,
  image,
  alt,
  reverse,
  id,
  imageClassName,
  sizes,
  overlay,
  children,
}: {
  num: string;
  eyebrow: string;
  title: string;
  image: string;
  alt: string;
  reverse?: boolean;
  id?: string;
  imageClassName?: string;
  sizes?: string;
  overlay?: ReactNode;
  children: ReactNode;
}) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="mx-auto max-w-[1180px] scroll-mt-24"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        <div className={reverse ? "lg:order-2" : ""}>
          <EyebrowHead num={num} eyebrow={eyebrow} title={title} />
          <div className="mt-5 flex flex-col gap-4 text-[15px] leading-[1.8] font-light text-muted">{children}</div>
        </div>
        <SportImageCard
          src={image}
          alt={alt}
          reverse={reverse}
          imageClassName={imageClassName}
          sizes={sizes}
          overlay={overlay}
        />
      </div>
    </motion.section>
  );
}

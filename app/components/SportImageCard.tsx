import clsx from "clsx";
import Image from "next/image";
import type { ReactNode } from "react";

type SportImageCardProps = {
  src: string;
  alt: string;
  reverse?: boolean;
  className?: string;
  imageClassName?: string;
  sizes?: string;
  overlay?: ReactNode;
  /** Controls the card's size/aspect. Defaults to a fixed 300px height; pass
   *  e.g. "aspect-[16/9]" to make the card match a 16:9 image exactly. */
  frameClassName?: string;
};

export function SportImageCard({
  src,
  alt,
  reverse = false,
  className,
  imageClassName = "object-fit",
  sizes = "(max-width:1024px) 100vw, 60vw",
  overlay,
  frameClassName = "h-[200px] md:h-[260px] lg:h-[300px]",
}: SportImageCardProps) {
  return (
    <div
      className={clsx(
        "relative w-full rounded-3xl overflow-hidden border border-white/10 bg-white/[0.02] shadow-lg group",
        "transition-all duration-300",
        "hover:border-gold/70 hover:shadow-[0_0_28px_rgba(212,175,55,0.35)]",
        frameClassName,
        reverse && "lg:order-1",
        className
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        className={clsx(
          "transition-transform duration-500",
          imageClassName
        )}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#05080B] via-transparent to-transparent" />
      {overlay}
    </div>
  );
}

import Image from "next/image";
import type { ReactNode } from "react";

type SportHeroProps = {
  src: string;
  mobileSrc?: string;
  alt: string;
  children: ReactNode;
  /** Tailwind object-position for desktop background */
  desktopPosition?: string;
};

const pageX = "px-[5%]";

/** Desktop: background image + text overlay. Mobile: text only (no hero image). */
export function SportHero({
  src,
  mobileSrc,
  alt,
  children,
  desktopPosition = "object-right",
}: SportHeroProps) {
  return (
    <section
      className="relative z-10 overflow-hidden w-screen max-w-[100vw] ml-[calc(50%-50vw)] bg-[#05080B] pt-[calc(var(--navbar-offset)+2rem)] pb-8 md:pb-14 md:min-h-[520px] lg:min-h-[560px]"
    >
      {/* Desktop background only */}
      <div
        className={`absolute top-(--navbar-offset) bottom-0 left-0 right-0 pointer-events-none hidden md:block ${pageX}`}
        aria-hidden
      >
        <div className="relative h-full w-full overflow-hidden bg-[#05080B]">
          <Image
            src={src}
            alt={alt}
            fill
            sizes="90vw"
            className={`object-contain ${desktopPosition}`}
            priority
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-[#05080B] from-0% via-[#05080B]/92 via-[45%] to-transparent to-[62%]"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-[#05080B] via-transparent to-[#05080B]/25"
          />
        </div>
      </div>

      <div className={`relative z-10 ${pageX} md:min-h-[480px] flex items-center`}>
        <div className="w-full md:w-1/2 sport-hero-copy flex flex-col justify-center py-2 md:py-10 md:pr-6">
          {children}
          <div className="relative mt-7 aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 bg-bg2 shadow-[0_20px_55px_-28px_rgba(212,175,55,0.55)] md:hidden">
            <Image
              src={mobileSrc ?? src}
              alt={alt}
              fill
              sizes="90vw"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#05080B]/65 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}

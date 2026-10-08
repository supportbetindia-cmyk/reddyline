"use client";

import clsx from "clsx";
import Link from "next/link";
import ScrollReveal from "../components/ScrollReveal";
import GamesFaq from "../components/GamesFaq";
import { SportImageCard } from "../components/SportImageCard";
import { PageArtwork } from "../components/PageArtwork";

const games = [
  {
    name: "Cricket",
    image: "/cricket-gold-v2.png",
    desc: "India's best cricket betting platform with IPL live betting, ball-by-ball markets and instant cricket ID.",
    href: "/cricket",
    available: true,
  },
  {
    name: "Casino",
    image: "/reddy-casino-v2.png",
    desc: "Premium casino games including slots, roulette, blackjack, and live dealer experiences.",
    href: "/casino",
    available: true,
  },
   {
    name: "Soccer",
    image: "/football-gold-v2.png",
    desc: "Bet on football matches worldwide with live scores, multiple markets and smooth mobile experience.",
    href: "/soccer",
    available: true,
  },
   {
    name: "Tennis",
    image: "/tennis-gold-v2.png",
    desc: "Follow Grand Slam tournaments and live tennis matches with real time betting markets.",
    href: "/tennis",
    available: true,
  },
    {
    name: "Horse Racing",
    image: "/horse-racing-gold-v2.png",
    desc: "Experience the thrill of horse racing betting with live race tracking and fast odds updates.",
    href: "/horse-racing",
    available: true,
  },
  {
    name: "Badminton",
    image: "/badminton-gold-v2.png",
    desc: "Fast paced live badminton betting with real time odds and international tournament coverage.",
    href: "/badminton",
    available: true,
  },
 

  
  
];

export default function GamesPage() {
  return (
    <>
      <ScrollReveal />

      {/* Hero */}
      <section className={clsx('pt-[100px]', 'pb-[40px]', 'px-[5%]', 'bg-bg', 'relative', 'overflow-hidden')}>
        <div className={clsx('absolute', 'top-1/2', 'left-1/2', '-translate-x-1/2', '-translate-y-1/2', 'w-[800px]', 'h-[600px]', 'bg-[radial-gradient(ellipse,rgba(0,120,229,0.06)_0%,transparent_70%)]', 'pointer-events-none')} />

        <div className={clsx('max-w-[900px]', 'mx-auto', 'text-left', 'sm:text-center', 'relative', 'z-10', 'reveal')}>
          <div className={clsx('section-tag', 'justify-center')}> 🎮 Games Hub</div>
          <h1 className={clsx('font-bebas', 'text-[clamp(44px,6vw,80px)]', 'tracking-[1px]', 'leading-[1.05]', 'text-white', 'mb-6')}>
            Explore Popular  <span className="text-gold">Games</span>
          </h1>
          <p className={clsx('text-[17px]', 'text-muted', 'leading-[1.8]', 'font-light', 'max-w-[600px]', 'mx-auto')}>
           Explore sports betting markets and casino games, all in one place with live action, smooth performance, and mobile-friendly access.

          </p>
        </div>
        <PageArtwork
          src="/reddy-casino-v2.png"
          alt="Premium casino games at Reddy Line"
          label="Sports and casino games in one place"
        />
      </section>

      {/* Games Grid */}
      <section className={clsx('py-[40px]', 'px-[5%]', 'bg-bg2')}>
        <div className={clsx('max-w-[1200px]', 'mx-auto')}>
          <div className={clsx('grid', 'grid-cols-1', 'sm:grid-cols-2', 'lg:grid-cols-3', 'gap-6')}>
            {games.map((game) => (
              <Link
                key={game.name}
                href={game.available ? game.href : "#"}
                className={clsx('block', 'no-underline', 'reveal', !game.available && 'opacity-60 pointer-events-none')}
              >
                <SportImageCard
                  src={game.image}
                  alt={game.name}
                  frameClassName="aspect-[16/9]"
                  imageClassName="object-cover"
                  sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                  className="transition-colors duration-300 hover:border-[rgba(0,120,229,0.45)]"
                  overlay={
                    <>
                      <div className={clsx('absolute', 'top-4', 'right-4', 'text-[10px]', 'font-bold', 'uppercase', 'tracking-[1px]', 'px-3', 'py-1', 'rounded-full', 'border', game.available ? 'bg-[rgba(0,120,229,0.15)] text-[#D4AF37] border-[rgba(0,120,229,0.3)]' : 'bg-muted/20 text-muted border-border')}>
                        {game.available ? 'Live' : 'Coming Soon'}
                      </div>
                      <div className="absolute inset-x-0 bottom-0 p-5 flex items-center justify-between gap-3">
                        <h3 className="font-syne font-bold text-white text-[18px]">{game.name}</h3>
                        {game.available && (
                          <span className="text-[13px] font-semibold text-[#D4AF37] whitespace-nowrap">Explore →</span>
                        )}
                      </div>
                    </>
                  }
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <GamesFaq />
    </>
  );
}

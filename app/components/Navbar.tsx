"use client";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { GiShuttlecock, GiTennisBall, GiCricketBat } from "react-icons/gi";
import { FaFutbol, FaHorse, FaDice } from "react-icons/fa";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "APPS", href: "/apps" },
  { name: "ABOUT", href: "/about" },
  { name: "GAMES", href: "/games" },
  { name: "Support", href: "/support" },
  { name: "Contact", href: "/contact" },
];

const gameItems = [
  { name: "Cricket", href: "/cricket", icon: GiCricketBat, color: "#F59E0B", desc: "Live Betting Available" },
  { name: "Casino", href: "/casino", icon: FaDice, color: "#EF4444", desc: "Live Betting Available" },
  { name: "Badminton", href: "/badminton", icon: GiShuttlecock, color: "#06B6D4", desc: "Live Betting Available" },
  { name: "Soccer", href: "/soccer", icon: FaFutbol, color: "#10B981", desc: "Live Betting Available" },
  { name: "Horse Racing", href: "/horse-racing", icon: FaHorse, color: "#F59E0B", desc: "Live Betting Available" },
  { name: "Tennis", href: "/tennis", icon: GiTennisBall, color: "#A3E635", desc: "Live Betting Available" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileGamesOpen, setIsMobileGamesOpen] = useState(false);

  return (
    <nav 
      className={clsx('fixed', 'top-0', 'left-0', 'right-0', 'z-[999]', 'border-b', 'border-border-soft', 'flex', 'flex-col')}
      style={{
        paddingTop: "env(safe-area-inset-top, 0px)"
      }}
    >
      {/* Opaque Deep Black Background */}
      <div 
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(9, 9, 9, 0.95)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          zIndex: -1
        }}
      />
      <div className={clsx('grid', 'grid-cols-[1fr_auto]',  'lg:grid-cols-[180px_1fr_280px]', 'items-center', 'h-[70px]', 'px-[5%]')}>
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image 
              src="/logo.png" 
              alt="Reddy Line" 
              width={180} 
              height={50} 
              className="h-10 xl:h-12 w-auto object-contain drop-shadow-[0_2px_16px_rgba(212,175,55,0.25)] transition-transform hover:scale-[1.02]" 
              priority
            />
          </Link>
        </div>
  
        {/* Desktop Nav Links */}
        <ul className={clsx('hidden', 'w-full', 'lg:flex', 'gap-4', 'xl:gap-8', 'list-none', 'h-full', 'items-center', 'justify-center', 'm-0', 'p-0')}>
          {navLinks.map((link) => {
            if (link.name === "GAMES") {
              return (
                <li key={link.name} className={clsx('relative', 'group', 'h-full', 'flex', 'items-center')}>
                  <div className={clsx('flex', 'items-center', 'gap-1.5', 'cursor-pointer', 'font-syne', 'text-[11px]', 'xl:text-[13px]', 'font-semibold', 'uppercase', 'tracking-[0.5px]', 'xl:tracking-[1.2px]', 'text-white/80', 'group-hover:text-gold-light', 'transition-colors', 'h-full', 'py-4')}>
                    <Link href="/games" className={clsx('no-underline', 'text-inherit')}>
                      GAMES
                    </Link>
                    <svg className={clsx('w-3.5', 'h-3.5', 'transition-transform', 'duration-300', 'group-hover:rotate-180')} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  
                  {/* Dropdown Menu */}
                  <div className={clsx(
                    'absolute', 'top-[70px]', 'left-1/2', '-translate-x-1/2', 
                    'w-[300px]', 'bg-[#121212]', 
                    'border', 'border-border', 'rounded-2xl', 'p-4', 
                    'shadow-[0_25px_60px_rgba(0,0,0,0.9)]', 
                    'opacity-0', 'invisible', 'group-hover:opacity-100', 'group-hover:visible', 
                    'translate-y-2', 'group-hover:translate-y-0',
                    'transition-all', 'duration-300', 'z-[9999]'
                  )}>
                    {/* Triangle Arrow */}
                    <div className={clsx('absolute', 'top-[-6px]', 'left-1/2', '-translate-x-1/2', 'w-3', 'h-3', 'bg-[#121212]', 'border-t', 'border-l', 'border-border', 'rotate-45')} />

                    <div className={clsx('flex', 'flex-col', 'gap-1', 'relative', 'z-10')}>
                      {gameItems.map((game) => (
                        <Link
                          key={game.name}
                          href={game.href}
                          className={clsx(
                            'flex', 'items-center', 'gap-3.5', 'p-3', 'rounded-xl', 
                            'hover:bg-[#1c1c1c]', 'transition-all', 'duration-200', 'no-underline', 'group/item',
                            'border-l-2', 'border-transparent', 'hover:border-gold'
                          )}
                        >
                          <span className={clsx('text-2xl', 'transition-transform', 'duration-250', 'group-hover/item:scale-110', 'flex', 'items-center', 'justify-center')} style={{ color: game.color }}>
                            <game.icon />
                          </span>
                          <div className={clsx('flex', 'flex-col')}>
                            <span className={clsx('font-syne', 'text-[13px]', 'font-bold', 'text-white', 'group-hover/item:text-gold-light', 'transition-colors')}>
                              {game.name}
                            </span>
                            <span className={clsx('text-[9px]', 'uppercase', 'tracking-[0.5px]', game.desc !== 'Coming Soon' ? 'text-gold font-semibold' : 'text-muted')}>
                              {game.desc}
                            </span>
                          </div>
                        </Link>
                      ))}
                      <div className={clsx('h-[1px]', 'bg-border-soft', 'my-1.5')} />
                      <Link
                        href="/games"
                        className={clsx('text-center', 'font-syne', 'text-[11px]', 'font-bold', 'text-gold-light', 'hover:underline', 'py-1.5', 'transition-colors')}
                      >
                        View All Games Hub
                      </Link>
                    </div>
                  </div>
                </li>
              );
            }

            return (
              <li key={link.name} className={clsx('h-full', 'flex', 'items-center')}>
                <Link
                  href={link.href}
                  className={clsx('font-syne', 'text-[11px]', 'xl:text-[13px]', 'font-semibold', 'uppercase', 'tracking-[0.5px]', 'xl:tracking-[1.2px]', 'text-white/80', 'no-underline', 'hover:text-gold-light', 'transition-colors')}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Right CTA / Mobile Toggle */}
        <div className={clsx('flex', 'items-center','justify-end')}>
          {/* Desktop CTA */}
          <div className={clsx('hidden', 'lg:flex', 'gap-2', 'xl:gap-3', 'items-center')}>
            <Link href="https://www.reddyline.co/" target="_blank" rel="noopener noreferrer" className={clsx('btn', 'btn-ghost', 'px-3', 'py-2', 'xl:px-5', 'xl:py-2.5', 'text-[11px]', 'xl:text-[13px]')}>Register</Link>
            <Link href="https://www.reddyline.co/" target="_blank" rel="noopener noreferrer" className={clsx('btn', 'btn-gold', 'px-3', 'py-2', 'xl:px-5', 'xl:py-2.5', 'text-[11px]', 'xl:text-[13px]')}>Download</Link>
          </div>
          
          {/* Mobile Toggle */}
          <button
            className={clsx('lg:hidden', 'text-white', 'text-2xl', 'bg-transparent', 'border-none', 'cursor-pointer')}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div 
          className={clsx('absolute', 'left-0', 'right-0', 'border-b', 'border-border-soft', 'p-6', 'lg:hidden', 'flex', 'flex-col', 'gap-4')}
          style={{
            top: "100%",
            backgroundColor: "rgba(9, 9, 9, 0.98)",
          }}
        >
          {navLinks.map((link) => {
            if (link.name === "GAMES") {
              return (
                <div key={link.name} className={clsx('flex', 'flex-col')}>
                  <div 
                    className={clsx('flex', 'items-center', 'justify-between', 'py-2', 'cursor-pointer')} 
                    onClick={() => setIsMobileGamesOpen(!isMobileGamesOpen)}
                  >
                    <span className={clsx('font-syne', 'text-[14px]', 'font-semibold', 'uppercase', 'tracking-[1px]', 'text-white/80', 'hover:text-white')}>
                      GAMES
                    </span>
                    <svg className={clsx('w-4', 'h-4', 'text-muted', 'transition-transform', 'duration-300', isMobileGamesOpen && 'rotate-180')} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  
                  {/* Mobile Dropdown */}
                  <div className={clsx(
                    'overflow-hidden', 'transition-all', 'duration-300', 
                    isMobileGamesOpen ? 'max-h-[350px] opacity-100 mt-2 pl-4 border-l-2 border-gold/40' : 'max-h-0 opacity-0'
                  )}>
                    <div className={clsx('flex', 'flex-col', 'gap-3', 'py-1')}>
                      {gameItems.map((game) => (
                        <Link
                          key={game.name}
                          href={game.href}
                          onClick={() => setIsOpen(false)}
                          className={clsx('flex', 'items-center', 'gap-3.5', 'no-underline', 'py-1.5')}
                        >
                          <span className="text-2xl flex items-center justify-center" style={{ color: game.color }}>
                            <game.icon />
                          </span>
                          <div className={clsx('flex', 'flex-col')}>
                            <span className={clsx('font-syne', 'text-[13px]', 'font-bold', 'text-white')}>{game.name}</span>
                            <span className={clsx('text-[9px] uppercase tracking-[0.5px]', game.desc !== 'Coming Soon' ? 'text-gold font-semibold' : 'text-muted')}>{game.desc}</span>
                          </div>
                        </Link>
                      ))}
                      <div className={clsx('h-[1px]', 'bg-white/5', 'my-1')} />
                      <Link
                        href="/games"
                        onClick={() => setIsOpen(false)}
                        className={clsx('font-syne', 'text-[12px]', 'font-bold', 'text-gold-light', 'no-underline', 'py-1')}
                      >
                        View All Games Hub →
                      </Link>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={clsx('font-syne', 'text-[14px]', 'font-semibold', 'uppercase', 'tracking-[1px]', 'text-white/80', 'no-underline', 'hover:text-white', 'py-2')}
              >
                {link.name}
              </Link>
            );
          })}
          <div className={clsx('flex', 'gap-3', 'mt-4')}>
            <a href="https://www.reddyline.co/" target="_blank" rel="noopener noreferrer" className={clsx('btn', 'btn-ghost', 'flex-1', 'justify-center')}>Register</a>
            <a href="https://www.reddyline.co/" target="_blank" rel="noopener noreferrer" className={clsx('btn', 'btn-gold', 'flex-1', 'justify-center')}>Download</a>
          </div>
        </div>
      )}
    </nav>
  );
}


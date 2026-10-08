"use client";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaPinterestP } from "react-icons/fa6";

const platformLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Games", href: "/games" },
  { name: "Highlights", href: "/highlights" },
  { name: "Blog", href: "/blog" },
  { name: "App", href: "/apps" },
 
];
const supportLinks = [
   { name: "Contact", href: "/contact" }, 
   { name: "Support Centre", href: "/support" },
  { name: "Rules", href: "/rules" },
  { name: "Deposit & Withdrawal", href: "/deposit-and-withdrawal" },
  
];
const legalLinks = [
   { name: "Privacy-policy", href: "/privacy-policy" },
  { name: "Terms & Conditions", href: "/terms-and-conditions" },
   { name: "Responsible Gaming", href: "/responsible-gambling" },
];
const Partner = [
  { name: "Affiliates", href: "/affiliate" },
  { name: "Partner", href: "/partner" },
];
// Official brand logos (full colour) as inline SVGs
const InstagramLogo = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
    <defs>
      <linearGradient id="ig-grad" x1="0" y1="1" x2="1" y2="0">
        <stop offset="0" stopColor="#feda75" />
        <stop offset=".25" stopColor="#fa7e1e" />
        <stop offset=".5" stopColor="#d62976" />
        <stop offset=".75" stopColor="#962fbf" />
        <stop offset="1" stopColor="#4f5bd5" />
      </linearGradient>
    </defs>
    <path fill="url(#ig-grad)" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

const YouTubeLogo = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
    <path fill="#FF0000" d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z" />
    <path fill="#fff" d="M9.545 15.568V8.432L15.818 12z" />
  </svg>
);

const FacebookLogo = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
    <path fill="#1877F2" d="M24 12c0-6.627-5.373-12-12-12S0 5.373 0 12c0 5.99 4.388 10.954 10.125 11.854V15.47H7.078V12h3.047V9.356c0-3.007 1.792-4.668 4.533-4.668 1.312 0 2.686.234 2.686.234v2.953H15.83c-1.491 0-1.956.925-1.956 1.874V12h3.328l-.532 3.47h-2.796v8.385C19.612 22.954 24 17.99 24 12z" />
    <path fill="#fff" d="M16.671 15.47L17.203 12h-3.328V9.749c0-.949.465-1.874 1.956-1.874h1.513V4.922s-1.374-.234-2.686-.234c-2.741 0-4.533 1.661-4.533 4.668V12H7.078v3.47h3.047v8.385a12.13 12.13 0 003.75 0V15.47h2.796z" />
  </svg>
);

// TODO: replace the "#" placeholders with Reddy Line's real profile URLs
const socialLinks = [
  { name: "Instagram", href: "https://www.instagram.com/1xplay_pro", logo: <InstagramLogo /> },
  { name: "GitHub", href: "https://github.com/1xplayofficiall-cmyk", logo: <FaGithub size={19} color="#ffffff" /> },
  { name: "Facebook", href: "https://www.facebook.com/profile.php?id=61582750799605 ", logo: <FacebookLogo /> },
  { name: "Pinterest", href: "https://in.pinterest.com/1xplayofficial/", logo: <FaPinterestP size={19} color="#E60023" /> },
];

export default function Footer() {
  return (
    <footer className={clsx('bg-[#0A0E17]', 'border-t', 'border-[rgba(148,163,184,0.08)]', 'pt-10', 'md:pt-20', 'pb-8', 'md:pb-10', 'px-[5%]', 'relative', 'overflow-hidden')}>
      {/* Dot grid texture */}
      <div className="absolute inset-0 bg-dots opacity-20 pointer-events-none" />

      {/* Top accent line */}
      <div className="absolute top-0 left-[10%] right-[10%] h-[1px] bg-[linear-gradient(90deg,transparent,rgba(16,185,129,0.4),transparent)]" />

      {/* Top Grid */}
      <div className={clsx('grid', 'grid-cols-12', 'gap-x-4', 'gap-y-7', 'md:gap-0', 'mb-8', 'md:mb-[60px]', 'relative', 'z-10')}>
        {/* Brand */}
        <div className={clsx('col-span-12', 'md:col-span-4', 'md:pr-3')}>
          <div className={clsx('mb-4')}>
            <Link href="/" className="inline-block">
              <Image src="/logo.png" alt="Reddy Line" height={55} width={190} className="h-12 w-auto object-contain drop-shadow-[0_2px_16px_rgba(16,185,129,0.25)]" />
            </Link>
          </div>
          <p className={clsx('text-[14px]', 'text-muted', 'leading-[1.7]', 'max-w-[280px]', 'mb-4', 'md:mb-6')}>
            Reddy Line is a premier gaming and entertainment platform offering online sports experiences, live casino games, and mobile-friendly access since 2010.
          </p>
          <div className={clsx('flex', 'gap-2.5')}>
            {socialLinks.map(({ name, href, logo }) => (
              <a
                key={name}
                href={href}
                aria-label={name}
                title={name}
                target="_blank"
                rel="noopener noreferrer"
                className={clsx('w-9', 'h-9', 'rounded-xl', 'border', 'border-[rgba(148,163,184,0.12)]', 'bg-[#1A2332]', 'flex', 'items-center', 'justify-center', 'transition-all', 'duration-300', 'cursor-pointer', 'hover:-translate-y-1', 'hover:border-accent/50', 'hover:shadow-[0_0_18px_rgba(16,185,129,0.2)]')}
              >
                {logo}
              </a>
            ))}
          </div>
        </div>

        {/* Platform */}
        <div className={clsx('col-span-6', 'md:col-span-2', 'md:border-l', 'md:border-[rgba(16,185,129,0.12)]', 'md:px-3')}>
          <div className={clsx('font-syne', 'text-[14px]', 'font-bold', 'uppercase', 'tracking-[1px]', 'text-white', 'mb-3', 'md:mb-5')}>Platform</div>
          <ul className={clsx('flex', 'flex-col', 'gap-2.5', 'list-none')}>
            {platformLinks.map((link) => (
              <li key={link.name}><Link href={link.href} className={clsx('text-[14px]', 'text-muted', 'no-underline', 'hover:text-accent-light', 'transition-colors')}>{link.name}</Link></li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div className={clsx('col-span-6', 'md:col-span-2', 'md:border-l', 'md:border-[rgba(16,185,129,0.12)]', 'md:px-3')}>
          <div className={clsx('font-syne', 'text-[14px]', 'font-bold', 'uppercase', 'tracking-[1px]', 'text-white', 'mb-3', 'md:mb-5')}>Support</div>
          <ul className={clsx('flex', 'flex-col', 'gap-2.5', 'list-none')}>
            {supportLinks.map((link) => (
              <li key={link.name}><Link href={link.href} className={clsx('text-[14px]', 'text-muted', 'no-underline', 'hover:text-accent-light', 'transition-colors')}>{link.name}</Link></li>
            ))}
          </ul>
        </div>

        {/* Legal */}
        <div className={clsx('col-span-6', 'md:col-span-2', 'md:border-l', 'md:border-[rgba(16,185,129,0.12)]', 'md:px-3')}>
          <div className={clsx('font-syne', 'text-[14px]', 'font-bold', 'uppercase', 'tracking-[1px]', 'text-white', 'mb-3', 'md:mb-5')}>Legal</div>
          <ul className={clsx('flex', 'flex-col', 'gap-2.5', 'list-none')}>
            {legalLinks.map((link) => (
              <li key={link.name}><Link href={link.href} className={clsx('text-[14px]', 'text-muted', 'no-underline', 'hover:text-accent-light', 'transition-colors')}>{link.name}</Link></li>
            ))}
          </ul>
        </div>

        {/* Partner */}
        <div className={clsx('col-span-6', 'md:col-span-2', 'md:border-l', 'md:border-[rgba(16,185,129,0.12)]', 'md:pl-3')}>
          <div className={clsx('font-syne', 'text-[14px]', 'font-bold', 'uppercase', 'tracking-[1px]', 'text-white', 'mb-3', 'md:mb-5')}>Partner</div>
          <ul className={clsx('flex', 'flex-col', 'gap-2.5', 'list-none')}>
            {Partner.map((link) => (
              <li key={link.name}><Link href={link.href} className={clsx('text-[14px]', 'text-muted', 'no-underline', 'hover:text-accent-light', 'transition-colors')}>{link.name}</Link></li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className={clsx('relative', 'z-10', 'border-t', 'border-[rgba(148,163,184,0.08)]', 'pt-6', 'md:pt-8', 'flex', 'justify-between', 'items-center', 'flex-wrap', 'gap-4')}>
        {/* Gradient accent on top border */}
        <div className="absolute top-0 left-[20%] right-[20%] h-[1px] bg-[linear-gradient(90deg,transparent,rgba(16,185,129,0.3),transparent)]" />
        <div className={clsx('text-[13px]', 'text-muted')}>© 2026 Reddy Line. All rights reserved. Play responsibly.</div>
        <div className={clsx('flex', 'gap-6', 'items-center')}>
          <div className={clsx('bg-[#1A2332]', 'border', 'border-[rgba(148,163,184,0.12)]', 'rounded-lg', 'px-3', 'py-1.5', 'font-display', 'text-[18px]', 'text-muted', 'tracking-[1px]', 'font-bold')}>
            18+
          </div>
        </div>
      </div>
    </footer>
  );
}

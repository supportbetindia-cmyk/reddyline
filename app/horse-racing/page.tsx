"use client";

import Link from "next/link";
import HorseRacingFaq from "../components/HorseRacingFaq";
import { motion, useScroll } from "framer-motion";
import {
  FaHorse,
  FaBolt,
  FaCheck,
  FaArrowRight,
  FaLock,
  FaExclamationTriangle,
} from "react-icons/fa";
import ScrollReveal from "../components/ScrollReveal";
import { EditorialBlock, WideBlock, SplitMedia } from "../components/SportPageBlocks";
import { SportHero } from "../components/SportHeroMedia";

const ACCENT = "#F6C453";

const whyPopular = [
  "Races are fast and exciting",
  "Live betting creates more entertainment",
  "Multiple betting options are available",
  "International racing events attract huge audiences",
  "Every race offers new opportunities",
  "Fast pace and unpredictability",
];

const liveFeatures = [
  "Real time horse racing odds",
  "Fast live betting markets",
  "Mobile friendly race betting",
  "Smooth betting interface",
  "Quick access to live races",
  "Easy market navigation",
];

const bettingMarkets = [
  { title: "Race Winner", desc: "Predict which horse will win the race." },
  { title: "Place Betting", desc: "Bet on a horse to finish within selected top positions." },
  { title: "Each Way Betting", desc: "Combine win and place betting into one selection." },
  { title: "Forecast Betting", desc: "Predict the first and second place horses in the correct order." },
  { title: "Tricast Betting", desc: "Choose the top three race finishers in exact order." },
  { title: "Live Betting Markets", desc: "Place bets during live horse racing events with updated odds." },
];

const tournaments = [
  "International horse racing championships",
  "Premium racing tournaments",
  "Global horse racing events",
  "Live race meetings",
  "Seasonal racing competitions",
];

const mobileFeatures = [
  "Follow live horse races",
  "Place bets quickly",
  "Access live odds",
  "Manage betting activity easily",
  "Enjoy smooth mobile performance",
];

const securityFeatures = [
  "Secure account protection",
  "Safe payment systems",
  "Encrypted transactions",
  "Reliable betting systems",
  "Protected user information",
];

const benefits = [
  "Live horse racing betting",
  "Real time odds updates",
  "Fast market access",
  "Mobile optimized betting platform",
  "Secure betting systems",
  "Easy to use interface",
  "International race coverage",
  "Reliable customer support",
];

const steps = [
  { step: "01", title: "Create an Account", desc: "Register your account through the Reddy Line platform." },
  { step: "02", title: "Deposit Funds", desc: "Use the secure payment system to add funds to your account." },
  { step: "03", title: "Choose a Race", desc: "Explore upcoming and live horse racing events." },
  { step: "04", title: "Place Your Bet", desc: "Select your preferred betting market and enjoy the race." },
];

const whyUsersEnjoy = [
  "Races are quick and entertaining",
  "Live betting increases excitement",
  "Multiple race markets are available",
  "International events create nonstop action",
  "Real time odds improve engagement",
];

const responsibleTips = [
  "Set personal betting limits",
  "Manage spending responsibly",
  "Avoid emotional betting decisions",
  "Take regular breaks when needed",
];

export default function HorseRacing() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#05080B] text-white">
      <ScrollReveal />

      {/* Scroll progress */}
      <div className="fixed top-(--navbar-offset) left-0 right-0 h-[2px] z-[998] bg-white/[0.04]">
        <motion.div
          className="h-full w-full origin-left bg-gradient-to-r from-[#D4AF37] to-[#F6C453] shadow-[0_0_12px_rgba(246, 196, 83,0.6)]"
          style={{ scaleX: scrollYProgress }}
        />
      </div>

      {/* ── Hero ── */}
      <SportHero src="/horse-racing-gold-v2.png" mobileSrc="/horse-mobile-gold-v2.png" alt="Horse Racing Betting at Reddy Line" desktopPosition="object-right">
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 bg-[#F6C453]/10 border border-[#F6C453]/20 rounded-full px-4 py-1.5 w-max mb-6"
              >
                <span className="w-2 h-2 rounded-full bg-[#F6C453] animate-pulse" />
                <span className="sport-hero-eyebrow font-semibold text-[#F6C453] uppercase tracking-[2px] font-syne">
                  Horse Racing
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="md:w-3xl w-2xl"
              >
                <span>Horse Racing Betting at{" "}</span>
                <span className="bg-gradient-to-r from-[#D4AF37] via-[#F6C453]  to-[#7fd5ff] bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(246, 196, 83,0.15)]">
                  Reddy Line
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className=""
              >
                Welcome to the exciting world of horse racing betting at Reddy Line where speed, strategy, and real-time sports action come together on one modern betting platform.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex gap-4 flex-wrap max-sm:justify-center"
              >
                <a href="https://www.1xplay.games" className="btn btn-gold btn-large gap-2">
                  <span>Explore Markets</span> <FaArrowRight size={12} />
                </a>
                <Link href="/games" className="btn btn-ghost btn-large">
                  <span>How to Start</span>
                </Link>
              </motion.div>
      </SportHero>

      {/* ── Editorial flow ── */}
      <div className="relative z-10 px-[5%] py-[70px] md:py-[100px] space-y-[72px] md:space-y-[110px]">
        {/* 01 — Intro */}
        <EditorialBlock num="01" eyebrow="The Sport of Kings" title="Horse Racing Betting at Reddy Line">
          <p>
            Horse racing remains one of the most popular sports betting categories worldwide because of its fast races, thrilling finishes, and exciting betting opportunities. At Reddy Line, users can enjoy live horse racing betting, smooth mobile access, and real-time odds updates for major racing events and international tournaments.
          </p>
          <p>
            Whether you are an experienced racing fan or a beginner exploring online horse racing betting, Reddy Line provides a secure, easy to use, and user-friendly platform designed for modern sports enthusiasts.
          </p>
        </EditorialBlock>

        {/* 02 — Why popular */}
        <WideBlock num="02" eyebrow="Thrilling Action" title="Why Horse Racing Betting Is So Popular">
          <p className="max-w-2xl">
            Horse racing has been one of the biggest betting sports for many years because every race brings excitement, competition, and unpredictable results.
          </p>
          <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {whyPopular.map((label) => (
              <div
                key={label}
                className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3.5 transition hover:border-[#F6C453]/25"
              >
                <FaBolt className="shrink-0 text-[#F6C453]" size={15} />
                <span className="text-[14px] text-white/85">{label}</span>
              </div>
            ))}
          </div>
          <p className="mt-7 max-w-2xl text-white/60">
            The speed and unpredictability of horse racing make it one of the most engaging online sports betting experiences.
          </p>
        </WideBlock>

        {/* 03 — Live betting (split with horse-racing-live.png) */}
        <SplitMedia num="03" eyebrow="Live Race Tracking" title="Live Horse Racing Betting Experience" image="/horse-live-gold-v2.png" alt="Live Horse Racing Betting at Reddy Line">
          <p>
            At Reddy Line, users can enjoy live horse racing betting with real-time race updates and continuously changing odds.
          </p>
          <p>
            The platform is designed to provide fast betting access during live races so users can place bets smoothly without delays. Live horse racing betting helps users feel more connected to the race while enjoying real-time sports action.
          </p>
          <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#F6C453] font-syne pt-1">
            Live Betting Features
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {liveFeatures.map((f) => (
              <div key={f} className="flex items-center gap-2.5 rounded-lg border border-white/[0.06] bg-white/[0.02] px-3.5 py-2.5 text-[13px] text-white/85">
                <FaCheck className="shrink-0 text-[#F6C453]" size={12} />
                {f}
              </div>
            ))}
          </div>
        </SplitMedia>

        {/* 04 — Markets bento */}
        <WideBlock num="04" eyebrow="Betting Markets" title="Popular Horse Racing Betting Markets" id="markets">
          <p className="max-w-2xl">
            Reddy Line offers multiple horse racing betting options designed for both beginners and experienced sports bettors.
          </p>
          <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {bettingMarkets.map((m, i) => (
              <motion.div
                key={m.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.05 }}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-gradient-to-b from-white/[0.03] to-transparent p-5 transition-all hover:border-[#F6C453]/35"
              >
                <div className="absolute -top-10 -right-10 h-28 w-28 rounded-full bg-[radial-gradient(circle,rgba(246, 196, 83,0.12)_0%,transparent_70%)] opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="relative z-10">
                  <span className="mb-3 inline-flex w-fit items-center rounded-md bg-[#F6C453]/10 px-2 py-1 text-[9px] font-bold uppercase tracking-wider text-[#F6C453] font-syne">
                    Market
                  </span>
                  <h4 className="font-syne text-[15px] font-bold text-white">{m.title}</h4>
                  <p className="mt-1.5 text-[12.5px] leading-[1.6] text-muted">{m.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <p className="mt-7 max-w-2xl text-white/60">
            Our goal is to provide users with a complete horse racing betting experience through flexible markets and real-time race coverage.
          </p>
        </WideBlock>

        {/* 05 — Tournaments chip cloud */}
        <WideBlock num="05" eyebrow="Global Events" title="International Horse Racing Events & Meets">
          <p className="max-w-2xl">
            At Reddy Line, users can follow and enjoy betting on major horse racing events and global racing tournaments.
          </p>
          <p className="mt-5 text-[12px] font-bold uppercase tracking-[0.2em] text-[#F6C453] font-syne">
            Popular Competitions Include
          </p>
          <div className="mt-4 flex flex-wrap gap-2.5">
            {tournaments.map((t) => (
              <span
                key={t}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2.5 text-[13px] font-medium text-white/85 transition-all hover:border-[#F6C453]/40 hover:bg-[#F6C453]/[0.06] hover:text-white"
              >
                <FaHorse className="text-[#F6C453]" size={12} />
                {t}
              </span>
            ))}
          </div>
          <p className="mt-7 max-w-2xl text-white/60">
            Horse racing fans can enjoy nonstop sports entertainment through exciting races from different regions around the world.
          </p>
        </WideBlock>

        {/* 06 — Mobile (split reverse with horse-racing-mobile.png) */}
        <SplitMedia num="06" eyebrow="Mobile Optimization" title="Smooth Mobile Horse Racing Experience" image="/horse-mobile-gold-v2.png" alt="Mobile Horse Racing Betting at Reddy Line" reverse>
          <p>
            Modern users prefer mobile sports betting because it provides instant access to live races anytime and anywhere. Reddy Line is fully optimized for mobile devices for convenience and speed.
          </p>
          <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#F6C453] font-syne pt-1">
            Users can:
          </p>
          <div className="flex flex-col gap-2.5">
            {mobileFeatures.map((f) => (
              <div key={f} className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3 text-[14px] text-white/85">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F6C453]/15 text-[#F6C453]">
                  <FaCheck size={11} />
                </span>
                {f}
              </div>
            ))}
          </div>
          <p className="text-white/60">
            The mobile platform is designed for speed, convenience, and uninterrupted sports betting entertainment.
          </p>
        </SplitMedia>

        {/* 07 — Security */}
        <WideBlock num="07" eyebrow="Security" title="Safe and Secure Horse Racing Betting">
          <p className="max-w-2xl">
            At Reddy Line, user security remains a top priority. We use advanced technology, secure systems, and modern protection tools to help maintain safe betting experiences.
          </p>
          <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {securityFeatures.map((label) => (
              <div
                key={label}
                className="flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.02] px-4 py-3.5 transition-all hover:border-[#F6C453]/30 hover:bg-[#F6C453]/[0.04]"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-[#F6C453]/12 text-[#F6C453]">
                  <FaLock size={12} />
                </span>
                <span className="text-[13.5px] text-white/85">{label}</span>
              </div>
            ))}
          </div>
          <p className="mt-7 max-w-2xl text-white/60">
            We continuously improve platform performance and security to provide users with a trusted online betting environment, focusing on secure account protection, safe payment systems, and encrypted transactions.
          </p>
        </WideBlock>

        {/* 08 — Why choose (two columns) */}
        <WideBlock num="08" eyebrow="Platform Value" title="Why Choose Reddy Line for Horse Racing">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
            <div className="space-y-5">
              <p>
                Reddy Line focuses on delivering a smooth, fast, and user-friendly sports betting experience for horse racing fans worldwide.
              </p>
              <p>
                Our platform is designed to help users enjoy sports betting with better performance, smoother navigation, and direct access to live odds.
              </p>
              <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#F6C453] font-syne">
                Why Users Enjoy Horse Racing:
              </p>
              <div className="flex flex-col gap-3">
                {whyUsersEnjoy.map((label) => (
                  <div key={label} className="flex items-center gap-3">
                    <FaBolt className="shrink-0 text-[#F6C453]" size={13} />
                    <span className="text-[13.5px] text-white/85 font-light">{label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="mb-5 text-[12px] font-bold uppercase tracking-[0.2em] text-[#F6C453] font-syne">
                Benefits of Soccer Betting at Reddy Line
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {benefits.map((b) => (
                  <div
                    key={b}
                    className="flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.02] px-4 py-3.5 transition-all hover:border-[#F6C453]/30 hover:bg-[#F6C453]/[0.04]"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-[#F6C453]/12 text-[#F6C453]">
                      <FaCheck size={11} />
                    </span>
                    <span className="text-[13px] text-white/85">{b}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </WideBlock>

        {/* 09 — How to start (keeps image.png) */}
        <WideBlock num="09" eyebrow="Get Started" title="Easy to Start Racing Betting" id="how-to-start">
          <p className="max-w-2xl">Getting started with horse racing betting at Reddy Line is quick and beginner-friendly.</p>
          <div className="relative py-8 mt-2">
            <div className="absolute top-[48px] left-[10%] right-[10%] h-[2px] bg-white/[0.07] z-0 hidden md:block" />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 relative z-10">
              {steps.map((item) => (
                <div key={item.step} className="flex flex-col items-center md:items-start text-center md:text-left group">
                  <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/10 group-hover:border-[#F6C453]/30 flex items-center justify-center font-bebas text-[22px] text-[#F6C453] mb-5 shadow-lg transition-all duration-300 relative">
                    {item.step}
                    <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#F6C453]/40 animate-ping" />
                  </div>
                  <h4 className="font-syne font-bold text-white text-[15px] mb-2">{item.title}</h4>
                  <p className="text-muted text-[12.5px] leading-[1.6] font-light max-w-[240px] mx-auto md:mx-0">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <p className="max-w-2xl text-white/60">
            The platform is designed to make horse racing betting simple, accessible, and enjoyable for all users.
          </p>
        </WideBlock>

        {/* 10 — Responsible */}
        <section className="mx-auto max-w-[1000px]">
          <div className="rounded-3xl border border-[#F6C453]/20 bg-[#F6C453]/[0.04] p-6 md:p-10 flex flex-col md:flex-row gap-6 items-start relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-[radial-gradient(circle,rgba(246, 196, 83,0.06)_0%,transparent_70%)] pointer-events-none" />
            <div className="w-12 h-12 rounded-2xl bg-[#F6C453]/10 border border-[#F6C453]/25 flex items-center justify-center text-[#F6C453] shrink-0 shadow-lg">
              <FaExclamationTriangle size={20} />
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="font-syne font-bold text-white text-[17px] uppercase tracking-wider">Responsible Sports Betting</h3>
              <p className="text-muted text-[14.5px] leading-[1.7] font-light">
                At Reddy Line, we encourage responsible gambling and recommend users enjoy horse racing betting as a form of entertainment only.
              </p>
              <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#F6C453] font-syne">We recommend users:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[13px] text-muted font-light">
                {responsibleTips.map((tip) => (
                  <div key={tip} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F6C453] shrink-0" />
                    <span>{tip}</span>
                  </div>
                ))}
              </div>
              <p className="text-muted text-[14.5px] leading-[1.7] font-light">
                Responsible betting helps maintain a safe and enjoyable sports entertainment experience.
              </p>
            </div>
          </div>
        </section>
      </div>

      <HorseRacingFaq />

      {/* ── Final CTA ── */}
      <section className="relative z-10 px-[5%] pb-28">
        <div className="mx-auto max-w-[1180px] relative overflow-hidden rounded-[28px] border border-[#F6C453]/25 bg-gradient-to-br from-[#070C13] via-[#05080B] to-[#070C13] p-10 md:p-16 text-left sm:text-center">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse,rgba(246, 196, 83,0.08)_0%,transparent_70%)] pointer-events-none" />
          <div className="relative z-10 max-w-[800px] mx-auto">
            <span className="section-tag justify-center mb-5">Enjoy Horse Racing</span>
            <h2 className="section-title">
              Join the Horse Racing Betting Experience at{" "}
              <span className="bg-gradient-to-r from-[#D4AF37] via-[#F6C453] to-[#7fd5ff] bg-clip-text text-transparent">
                Reddy Line
              </span>
            </h2>
            <div className="mt-6 space-y-4 text-[15px] leading-[1.8] font-light text-muted">
              <p>
                Reddy Line continues growing as a trusted destination for sports fans looking for fast, secure, and exciting horse racing betting experiences.
              </p>
              <p>
                From live horse racing odds and real-time betting markets to smooth mobile access and secure systems, Reddy Line provides everything needed for premium online sports betting.
              </p>
              <p>
                If you are looking for a modern horse racing betting platform with fast performance, secure transactions, and exciting race coverage, Reddy Line is the perfect place to enjoy online horse racing betting anytime, anywhere.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a href="https://www.1xplay.games" className="btn btn-gold btn-large">
                Start Betting Now <FaArrowRight className="w-3.5 h-3.5" />
              </a>
              <Link href="/games" className="btn btn-ghost btn-large">
                All Games Hub
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


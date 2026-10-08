"use client";

import Link from "next/link";
import SoccerFaq from "../components/SoccerFaq";
import { motion, useScroll } from "framer-motion";
import {
  FaFutbol,
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

const whyChooseReddyLine = [
  { label: "Live soccer betting with real time odds", desc: "Follow the game and place bets as action happens." },
  { label: "Fast and smooth betting interface", desc: "Place bets instantly with zero lag or delay." },
  { label: "Mobile friendly football betting experience", desc: "Fully optimized for smartphones and tablets." },
  { label: "Secure sports betting platform", desc: "Advanced systems protecting account and data." },
  { label: "Easy navigation for beginners", desc: "Simple layout makes placing bets simple and fast." },
  { label: "Wide range of football betting markets", desc: "Choose from match winner, goals, corners and more." },
  { label: "International league and tournament coverage", desc: "Bet on UEFA Champions League, Premier League and more." },
  { label: "Quick access to live matches", desc: "Instantly browse ongoing soccer matches worldwide." },
];

const whyPopular = [
  "Matches are exciting and unpredictable",
  "Live betting adds more entertainment",
  "Multiple betting options are available",
  "International tournaments attract huge audiences",
  "Every goal changes the game instantly",
  "Interactive experience for football lovers",
];

const liveFeatures = [
  "Real time score updates",
  "Fast changing live odds",
  "Instant market access",
  "Live football match coverage",
  "Smooth mobile betting",
  "Quick betting experience",
];

const bettingMarkets = [
  { title: "Match Winner", desc: "Predict which team will win the football match." },
  { title: "Both Teams to Score", desc: "Bet on whether both teams will score during the game." },
  { title: "Total Goals", desc: "Predict total match goals with over and under betting markets." },
  { title: "Correct Score", desc: "Choose the exact final score of the football match." },
  { title: "First Goal Scorer", desc: "Predict the player who will score the first goal of the game." },
  { title: "Handicap Betting", desc: "Bet with adjusted score advantages for selected teams." },
  { title: "Corner Betting", desc: "Place bets on total corners and team corner performance." },
  { title: "Live Betting Markets", desc: "Enjoy fast betting opportunities during live football matches." },
];

const tournaments = [
  "UEFA Champions League", "English Premier League", "La Liga", "Serie A",
  "Bundesliga", "FIFA World Cup", "UEFA Euro Championship",
  "Copa America", "International Football Matches", "Club Football Competitions",
];

const mobileFeatures = [
  "Place bets quickly on the go",
  "Follow live football matches anywhere",
  "Check betting history instantly",
  "Access live odds in real-time",
  "Manage accounts and transactions easily",
];

const securityFeatures = [
  "Secure account protection",
  "Safe payment systems",
  "Encrypted user data",
  "Reliable platform performance",
  "Protected transactions",
];

const steps = [
  { step: "01", title: "Create an Account", desc: "Register your account through the Reddy Line platform." },
  { step: "02", title: "Deposit Funds", desc: "Use the secure payment system to add funds to your account." },
  { step: "03", title: "Choose a Match", desc: "Browse upcoming football matches and live events." },
  { step: "04", title: "Place Your Bet", desc: "Select your preferred football betting market and enjoy the game." },
];

const responsibleTips = [
  "Set personal betting limits",
  "Avoid emotional betting decisions",
  "Manage gaming budgets responsibly",
  "Take regular breaks when needed",
];

export default function SoccerBetting() {
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
      <SportHero src="/football-gold-v2.png" mobileSrc="/football-mobile-gold-v2.png" alt="Soccer Betting at Reddy Line" desktopPosition="object-right">
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 bg-[#F6C453]/10 border border-[#F6C453]/20 rounded-full px-4 py-1.5 w-max mb-6"
              >
                <span className="w-2 h-2 rounded-full bg-[#F6C453] animate-pulse" />
                <span className="sport-hero-eyebrow font-semibold text-[#F6C453] uppercase tracking-[2px] font-syne">
                  Soccer Betting
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className=""
              >
                Soccer Betting at{" "}
                <span className="bg-gradient-to-r from-[#D4AF37] via-[#F6C453] to-[#7fd5ff] bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(246, 196, 83,0.15)]">
                  Reddy Line
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className=""
              >
                Experience fast, exciting, and smooth soccer betting at Reddy Line. From international football tournaments to live league matches, Reddy Line gives football fans a complete online betting experience with real-time odds, live match updates, and easy-to-use betting markets.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex gap-4 flex-wrap max-sm:justify-center"
              >
                <a href="https://www.1xplay.games/sports/soccer/1" className="btn btn-gold btn-large gap-2">
                  <span>Explore Markets</span> <FaArrowRight size={12} />
                </a>
                <a href="#how-to-start" className="btn btn-ghost btn-large">
                  <span>How to Start</span>
                </a>
              </motion.div>
      </SportHero>

      {/* ── Editorial flow ── */}
      <div className="relative z-10 px-[5%] py-[70px] md:py-[100px] space-y-[72px] md:space-y-[110px]">
        {/* 01 — Intro */}
        <EditorialBlock num="01" eyebrow="The World's Game" title="Football Betting at Reddy Line">
          <p>
            Football is one of the most popular sports in the world and millions of fans enjoy online soccer betting every day. At Reddy Line users can follow top football leagues, place live bets, and enjoy nonstop sports action on a secure and mobile-friendly platform.
          </p>
          <p>
            Welcome to the world of soccer betting at Reddy Line where football fans can enjoy live match action, exciting betting markets, and a smooth online sports betting experience on one trusted platform.
          </p>
          <p>
            Whether you enjoy Premier League matches, Champions League nights, or international football tournaments, Reddy Line brings all the excitement together in one place.
          </p>
        </EditorialBlock>

        {/* 02 — Why choose */}
        <WideBlock num="02" eyebrow="Premium Platform" title="Why Football Fans Choose Reddy Line">
          <p className="max-w-2xl">
            Reddy Line is designed for modern football fans who want a fast, reliable, and user-friendly betting platform.
          </p>
          <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {whyChooseReddyLine.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 4) * 0.05 }}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-gradient-to-b from-white/[0.03] to-transparent p-6 transition-all hover:border-[#F6C453]/30"
              >
                <div className="absolute -top-10 -right-10 h-28 w-28 rounded-full bg-[radial-gradient(circle,rgba(246, 196, 83,0.12)_0%,transparent_70%)] opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="relative z-10">
                  <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#F6C453]/12 border border-[#F6C453]/20 text-[#F6C453] transition-transform group-hover:scale-110">
                    <FaFutbol size={16} />
                  </span>
                  <h4 className="font-syne text-[15px] font-bold text-white leading-snug">{item.label}</h4>
                  <p className="mt-2 text-[12.5px] leading-[1.6] text-muted">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <p className="mt-8 max-w-2xl text-white/60">
            Our platform helps users enjoy football betting without complicated systems or slow performance. We prioritize speed, reliability, and security to make your experience unmatched.
          </p>
        </WideBlock>

        {/* 03 — Why popular */}
        <WideBlock num="03" eyebrow="Global Phenomenon" title="Why Soccer Betting Is So Popular">
          <p className="max-w-2xl">
            Football betting continues growing rapidly because soccer delivers nonstop excitement, competitive matches, and global fan engagement.
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
            Every match creates new betting opportunities from goals and corners to match winners and live score predictions, creating a more interactive sports experience for football lovers around the world.
          </p>
        </WideBlock>

        {/* 04 — Live betting (split with soccer_1.png) */}
        <SplitMedia num="04" eyebrow="Live Betting" title="Live Soccer Betting Experience" image="/football-live-gold-v2.png" alt="Live Soccer Betting at Reddy Line">
          <p>
            Live football betting is one of the biggest attractions for sports fans today. At Reddy Line, users can place bets while the match is happening and enjoy real-time match excitement.
          </p>
          <p>
            As the game changes, the betting odds update instantly, which creates more opportunities during the match. Follow matches live while placing bets instantly through our smooth and responsive interface.
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
          <p className="text-white/60">
            Live football betting helps users enjoy a more interactive sports experience by reacting to match events as they happen.
          </p>
        </SplitMedia>

        {/* 05 — Markets bento */}
        <WideBlock num="05" eyebrow="Betting Markets" title="Popular Soccer Betting Markets" id="markets">
          <p className="max-w-2xl">
            Reddy Line offers multiple football betting options designed for both beginners and experienced sports bettors.
          </p>
          <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {bettingMarkets.map((m, i) => (
              <motion.div
                key={m.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 4) * 0.05 }}
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
            Our betting markets are designed to provide more excitement, flexibility, and entertainment for football fans worldwide.
          </p>
        </WideBlock>

        {/* 06 — Tournaments chip cloud */}
        <WideBlock num="06" eyebrow="Tournaments" title="Top Football Leagues and Tournaments Available">
          <p className="max-w-2xl">
            At Reddy Line, users can explore betting markets for some of the biggest football leagues, competitions, and international tournaments from around the world.
          </p>
          <p className="mt-5 text-[12px] font-bold uppercase tracking-[0.2em] text-[#F6C453] font-syne">
            Popular Competitions
          </p>
          <div className="mt-4 flex flex-wrap gap-2.5">
            {tournaments.map((t) => (
              <span
                key={t}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2.5 text-[13px] font-medium text-white/85 transition-all hover:border-[#F6C453]/40 hover:bg-[#F6C453]/[0.06] hover:text-white"
              >
                <FaFutbol className="text-[#F6C453]" size={11} />
                {t}
              </span>
            ))}
          </div>
          <p className="mt-7 max-w-2xl text-white/60">
            Football fans can support their favorite clubs, players, and national teams while enjoying exciting online betting opportunities throughout the year.
          </p>
        </WideBlock>

        {/* 07 — Mobile (split with soccer-mobile.png, reversed) */}
        <SplitMedia num="07" eyebrow="Mobile Optimization" title="Mobile Friendly Soccer Betting Experience" image="/football-mobile-gold-v2.png" alt="Mobile Soccer Betting at Reddy Line" reverse>
          <p>
            Most football fans now prefer mobile sports betting because it allows instant access to matches and betting markets anytime, anywhere. Reddy Line is fully optimized for mobile devices so you never miss a match moment.
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
            The platform is built for smooth mobile performance with fast loading pages and easy navigation across smartphones and tablets.
          </p>
        </SplitMedia>

        {/* 08 — Security */}
        <WideBlock num="08" eyebrow="Security" title="Safe and Secure Football Betting">
          <p className="max-w-2xl">
            Security and reliability are important for every sports betting platform. At Reddy Line, we use modern systems and advanced technology to help protect user accounts, transactions, and betting activity.
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
            We continuously improve platform security to provide users with a trusted online football betting experience, focusing on safe payment systems, encrypted user data, and reliable platform performance.
          </p>
        </WideBlock>

        {/* 09 — How to start (keeps image.png) */}
        <WideBlock num="09" eyebrow="Get Started" title="Easy to Start Football Betting" id="how-to-start">
          <p className="max-w-2xl">Getting started with soccer betting at Reddy Line is simple, even for beginners.</p>
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
            Our goal is to make football betting simple, fast, and enjoyable for every user.
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
              <h3 className="font-syne font-bold text-white text-[17px] uppercase tracking-wider">Responsible Football Betting</h3>
              <p className="text-muted text-[14.5px] leading-[1.7] font-light">
                At Reddy Line, we encourage users to enjoy football betting responsibly. Sports betting should always remain entertainment, and users should never bet beyond their financial limits.
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
                Responsible gambling helps maintain a safe, healthy, and enjoyable sports entertainment experience.
              </p>
            </div>
          </div>
        </section>
      </div>

      <SoccerFaq />

      {/* ── Final CTA ── */}
      <section className="relative z-10 px-[5%] pb-28">
        <div className="mx-auto max-w-[1180px] relative overflow-hidden rounded-[28px] border border-[#F6C453]/25 bg-gradient-to-br from-[#070C13] via-[#05080B] to-[#070C13] p-10 md:p-16 text-left sm:text-center">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse,rgba(246, 196, 83,0.08)_0%,transparent_70%)] pointer-events-none" />
          <div className="relative z-10 max-w-[800px] mx-auto">
            <span className="section-tag justify-center mb-5">Enjoy the Best Experience</span>
            <h2 className="section-title">
              Start Soccer Betting Today at{" "}
              <span className="bg-gradient-to-r from-[#D4AF37] via-[#F6C453] to-[#7fd5ff] bg-clip-text text-transparent">
                Reddy Line
              </span>
            </h2>
            <div className="mt-6 space-y-4 text-[15px] leading-[1.8] font-light text-muted">
              <p>
                Reddy Line continues growing as a trusted destination for football fans who want fast, secure, and exciting online soccer betting.
              </p>
              <p>
                From live football betting and international tournaments to smooth mobile access and real-time odds, Reddy Line provides everything needed for a premium sports betting experience.
              </p>
              <p>
                If you are looking for a user-friendly football betting platform with exciting markets, secure systems, and smooth performance, Reddy Line is the perfect place to enjoy online soccer betting anytime, anywhere.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a href="https://www.1xplay.games" className="btn btn-gold btn-large">
                Join &amp; Bet Now <FaArrowRight className="w-3.5 h-3.5" />
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

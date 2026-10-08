"use client";

import clsx from "clsx";
import Link from "next/link";
import CricketFaq from "../components/CricketFaq";
import { useState } from "react";
import { motion, useScroll } from "framer-motion";
import {
  FaTrophy,
  FaBolt,
  FaTv,
  FaMobileAlt,
  FaShieldAlt,
  FaRegFileAlt,
  FaGlobe,
  FaCheck,
  FaExclamationTriangle,
  FaArrowRight,
  FaIdCard,
} from "react-icons/fa";
import ScrollReveal from "../components/ScrollReveal";
import { SportHero } from "../components/SportHeroMedia";
import { SportImageCard } from "../components/SportImageCard";

const ACCENT = "#F6C453";

const liveScores = [
  { match: "IND vs AUS", score: "IND 342/5 (50) & 120/2 *", status: "Live - Day 4" },
  { match: "ENG vs NZ", score: "ENG 188/3 (20) | NZ 185/8 (20)", status: "Completed" },
  { match: "IPL: MI vs CSK", score: "CSK 201/4 (20) | MI 198/6 (20)", status: "Completed" },
  { match: "PAK vs SA", score: "SA 212/6 (38.2) | PAK", status: "Live" },
];

const whyChoose = [
  { title: "Live Cricket Betting", desc: "Bet with real-time odds on all live wickets, boundaries, and sessions.", icon: FaTv },
  { title: "Easy Cricket ID Access", desc: "Get instant access to your online betting cricket account securely.", icon: FaIdCard },
  { title: "Mobile-Friendly Platform", desc: "Optimized website and fast app experience for betting on the go.", icon: FaMobileAlt },
  { title: "Fast Secure Transactions", desc: "Enjoy rapid deposits and withdrawals protected by SSL encryption.", icon: FaShieldAlt },
  { title: "User-Friendly Dashboard", desc: "Explore markets, place bets and track scores on a clean, modern interface.", icon: FaRegFileAlt },
  { title: "Multiple Betting Markets", desc: "Access comprehensive match winner, toss, bowler and session markets.", icon: FaTrophy },
];

const markets = [
  { id: "market-1", title: "Match Winner", desc: "Predict which team will win the match.", selectionA: "IND: 1.85", selectionB: "AUS: 2.10", category: "main" },
  { id: "market-2", title: "Toss Winner", desc: "Bet on the team expected to win the toss.", selectionA: "MI: 1.90", selectionB: "CSK: 1.90", category: "main" },
  { id: "market-3", title: "Top Batsman", desc: "Predict the player who will score the most runs.", selectionA: "Batsman A: 3.20", selectionB: "Batsman B: 4.50", category: "specials" },
  { id: "market-4", title: "Top Bowler", desc: "Choose the bowler expected to take the most wickets.", selectionA: "Bowler A: 2.80", selectionB: "Bowler B: 3.40", category: "specials" },
  { id: "market-5", title: "Total Runs (Innings)", desc: "Bet on the total runs scored during an innings or match.", selectionA: "Over 310.5: 1.83", selectionB: "Under 310.5: 1.92", category: "main" },
  { id: "market-6", title: "Most Fours", desc: "Predict which team or player will hit the most boundaries.", selectionA: "Team A: 1.72", selectionB: "Team B: 2.15", category: "main" },
  { id: "market-7", title: "Most Sixes", desc: "Bet on the team or player expected to score the most sixes.", selectionA: "Team A: 1.65", selectionB: "Team B: 2.25", category: "main" },
  { id: "market-8", title: "Session Betting", desc: "Enjoy betting opportunities during specific phases of the match.", selectionA: "Session A: 2.05", selectionB: "Session B: 1.80", category: "specials" },
  { id: "market-9", title: "Live Betting Markets", desc: "Place bets during live matches with continuously updated odds.", selectionA: "Live A: 1.95", selectionB: "Live B: 1.85", category: "main" },
];

const tournaments = [
  { name: "Indian Premier League (IPL)", tag: "Domestic T20" },
  { name: "ICC Cricket World Cup", tag: "International ODI" },
  { name: "ICC T20 World Cup", tag: "International T20" },
  { name: "ICC Champions Trophy", tag: "International ODI" },
  { name: "Asia Cup Tournament", tag: "Continental T20/ODI" },
  { name: "International Test Series", tag: "Test Cricket" },
  { name: "ODI / T20 Series", tag: "Bilateral Series" },
  { name: "Domestic Cricket Leagues", tag: "State & Regional" },
];

const onboarding = [
  { step: "01", title: "Register Your Account", desc: "Create your player account through our easy registration process." },
  { step: "02", title: "Access Cricket Markets", desc: "Browse upcoming and live cricket matches on the exchange dashboard." },
  { step: "03", title: "Select Your Option", desc: "Choose from a variety of live betting markets available on the platform." },
  { step: "04", title: "Enjoy the Match", desc: "Follow the live match action and enjoy a smooth, secure experience." },
];

export default function CricketPage() {
  const [activeMarketTab, setActiveMarketTab] = useState("all");
  const [selectedOdd, setSelectedOdd] = useState<string | null>(null);
  const { scrollYProgress } = useScroll();

  return (
    <div className="relative min-h-screen overflow-hidden  text-white">
      <ScrollReveal />

      {/* Scroll progress */}
      <div className="fixed top-(--navbar-offset) left-0 right-0 h-[2px] z-[998] bg-white/[0.04]">
        <motion.div
          className="h-full w-full origin-left bg-gradient-to-r from-[#D4AF37] to-[#F6C453] shadow-[0_0_12px_rgba(246, 196, 83,0.6)]"
          style={{ scaleX: scrollYProgress }}
        />
      </div>

      {/* ── Hero ── */}
      <SportHero src="/cricket-gold-v2.png" mobileSrc="/cricket-mobile-gold-v2.png" alt="Cricket Betting at Reddy Line" desktopPosition="object-right">
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 bg-[#F6C453]/10 border border-[#F6C453]/20 rounded-full px-4  w-max mb-6"
              >
                <span className="w-2 h-2 rounded-full bg-[#F6C453] animate-pulse" />
                <span className="sport-hero-eyebrow font-semibold text-[#F6C453] uppercase tracking-[2px] font-syne">
                  No. 1 Cricket Exchange
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className=""
              >
                Experience the Excitement of{" "}
                <span className="bg-gradient-to-r from-[#D4AF37] via-[#F6C453] to-[#7fd5ff] bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(246, 196, 83,0.15)]">
                  Online Cricket Betting
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className=""
              >
                Cricket is more than just a sport—it is an emotion. From thrilling T20 matches to legendary Test matches, Reddy Line delivers live match updates, real-time odds, and secure ID services on a premium, next-generation exchange.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex gap-4 flex-wrap max-sm:justify-center"
              >
                <a href="https://www.1xplay.games/" className="btn btn-gold btn-large gap-2">
                  <span>Place Bets Now</span> <FaArrowRight size={12} />
                </a>
                <a href="https://wa.link/1xplayindia" className="btn btn-ghost btn-large">
                  <span>Get Cricket ID</span>
                </a>
              </motion.div>
      </SportHero>

      {/* Stat ribbon */}
    

      {/* ── Editorial flow ── */}
      <div className="relative z-10 px-[5%] py-[60px] md:py-[100px] space-y-[72px] md:space-y-[90px]">
        {/* 01 — Intro + Exchange Highlights */}
        <WideBlock num="01" eyebrow="Premier Sports Portal" title="Online Cricket Betting Built for the Ultimate Fan">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-5">
              <p>
                Cricket is more than just a sport. It is an emotion followed by millions of fans across the world. From thrilling T20 matches and intense ODI battles to legendary Test matches, cricket delivers excitement like no other game.
              </p>
              <p>
                At Reddy Line, cricket fans can enjoy a premium online cricket betting experience with live match updates, real-time odds, exciting betting markets, and a smooth mobile-friendly platform. Whether you are following international tournaments, domestic leagues, or major cricket events, Reddy Line brings all the action together in one place.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col gap-4 bg-white/[0.02] border border-white/[0.08] p-6 rounded-2xl">
              <span className="text-[12px] uppercase text-muted tracking-wider">Exchange Highlights</span>
              {[
                { icon: FaBolt, k: "Fast Odds", v: "Sub-Second Updates" },
                { icon: FaShieldAlt, k: "Verification", v: "100% Secure IDs" },
                { icon: FaGlobe, k: "Coverage", v: "All Global Tournaments" },
              ].map((h, idx) => {
                const Icon = h.icon;
                return (
                  <div key={h.k} className={clsx("flex items-center gap-4 py-2", idx < 2 && "border-b border-white/[0.06]")}>
                    <div className="w-10 h-10 rounded-lg bg-[#F6C453]/10 flex items-center justify-center text-[#F6C453] shrink-0">
                      <Icon size={18} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[11px] text-muted uppercase">{h.k}</span>
                      <span className="text-white font-syne font-bold text-[14px]">{h.v}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </WideBlock>

        {/* 02 — Why choose (bento) */}
        <WideBlock num="02" eyebrow="Why Choose Us" title="What Makes Reddy Line Difference?">
          <p className="max-w-2xl">
            At Reddy Line, we focus on providing a seamless user experience combined with exciting betting opportunities that modern cricket fans demand.
          </p>
          <div className="mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyChoose.map((card, i) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (i % 3) * 0.05 }}
                  className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-gradient-to-b from-white/[0.03] to-transparent p-6 transition-all hover:border-[#F6C453]/30 hover:-translate-y-1"
                >
                  <div className="absolute -top-10 -right-10 h-28 w-28 rounded-full bg-[radial-gradient(circle,rgba(246, 196, 83,0.12)_0%,transparent_70%)] opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-[#F6C453]/10 flex items-center justify-center text-[#F6C453] border border-[#F6C453]/20 mb-5">
                      <Icon size={20} />
                    </div>
                    <h3 className="font-syne font-bold text-white text-[17px] mb-3 group-hover:text-[#F6C453] transition-colors">{card.title}</h3>
                    <p className="text-muted text-[13.5px] leading-[1.7] font-light">{card.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
          <div className="mt-7 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5 text-center">
            <p className="text-muted text-[14px] font-light">
              ✔ Coverage of major cricket tournaments &nbsp;&bull;&nbsp; ✔ Quick account registration &nbsp;&bull;&nbsp; ✔ Dedicated customer support 24/7
            </p>
          </div>
        </WideBlock>

        {/* 03 — Live betting (split, cricket-live.png) */}
        <section className="mx-auto max-w-[1180px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div>
              <EyebrowHead num="03" eyebrow="In-Play Action" title="Live Cricket Betting At Reddy Line" />
              <div className="mt-5 space-y-5 text-[15px] leading-[1.8] font-light text-muted">
                <p>
                  Live cricket betting is one of the most popular features among cricket fans. Instead of placing bets before the match begins, users can participate while the action unfolds on the field.
                </p>
                <p>
                  As wickets fall, partnerships build, and match momentum changes, betting odds update in real time, creating a more engaging experience.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {["Real-time match action", "Dynamic betting markets", "Instant odds updates", "More betting opportunities"].map((item) => (
                    <div key={item} className="flex items-center gap-2.5 text-[13px] text-white/85">
                      <FaCheck className="text-[#F6C453] shrink-0" size={13} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <SportImageCard
              src="/cricket-live-gold-v2.png"
              alt="Live Wicket Smash Graphic"
              sizes="(max-width:1024px) 100vw, 50vw"
              overlay={
                <div className="absolute bottom-4 left-4 bg-red-600 text-white text-[10px] font-bold uppercase tracking-[1px] px-3 py-1 rounded-full flex items-center gap-1.5 border border-red-500/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" /> Active Live Bets
                </div>
              }
            />
          </div>
        </section>

        {/* 04 — Online Cricket ID (split reverse, cricket-mobile.png) */}
        <section id="get-id" className="mx-auto max-w-[1180px] scroll-mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div className="lg:order-2">
              <EyebrowHead num="04" eyebrow="Access Exchange" title="Online Cricket ID At Reddy Line" />
              <div className="mt-5 space-y-5 text-[15px] leading-[1.8] font-light text-muted">
                <p>
                  Many users search for a reliable online cricket ID provider before they start betting on cricket matches. At Reddy Line, users can access a smooth and secure platform designed for cricket enthusiasts looking for easy account access and a premium betting experience.
                </p>
                <p>
                  Whether you are interested in live cricket betting or pre-match betting, Reddy Line helps you get started quickly.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {["Quick registration", "Secure account details", "Easy platform layout", "Smooth mobile ID"].map((item) => (
                    <div key={item} className="flex items-center gap-2.5 text-[13px] text-white/85">
                      <FaCheck className="text-[#F6C453] shrink-0" size={13} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
           <SportImageCard
              src="/cricket-mobile-gold-v2.png"
              alt="Futuristic Mobile Betting"
              reverse
              sizes="(max-width:1024px) 100vw, 50vw"
              overlay={
                <div className="absolute bottom-4 left-4 bg-[#D4AF37] text-white text-[10px] font-bold uppercase tracking-[1px] px-3 py-1 rounded-full flex items-center gap-1.5 border border-[#D4AF37]/30">
                  <FaMobileAlt size={11} /> 100% Mobile Optimized
                </div>
              }
            />
          </div>
        </section>

        {/* 05 — Interactive sportsbook */}
        <section id="sportsbook" className="mx-auto max-w-[1180px] scroll-mt-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <EyebrowHead num="05" eyebrow="Mock Sportsbook" title="Live Cricket Betting Markets" />
              <p className="text-muted text-[14.5px] font-light max-w-[550px] mt-3">
                Cricket offers numerous betting opportunities throughout a match. Explore our variety of live betting markets.
              </p>
            </div>
            <div className="flex gap-2 bg-[#09101e] border border-white/10 p-1.5 rounded-xl text-xs font-semibold text-muted w-max">
              {["all", "main", "specials"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveMarketTab(tab)}
                  className={clsx(
                    "px-4 py-2 rounded-lg transition-all uppercase tracking-wider cursor-pointer",
                    activeMarketTab === tab ? "bg-white/[0.06] text-[#F6C453] shadow-sm font-bold" : "hover:text-white"
                  )}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {markets
              .filter((item) => activeMarketTab === "all" || item.category === activeMarketTab)
              .map((market) => (
                <div
                  key={market.id}
                  className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6 flex flex-col justify-between transition-all duration-300 hover:border-[#F6C453]/20"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-syne font-bold text-white text-[15.5px] uppercase tracking-wider">{market.title}</h3>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F6C453] animate-pulse" />
                    </div>
                    <p className="text-muted text-[12.5px] leading-[1.6] mb-6 font-light">{market.desc}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-3.5">
                    <button
                      onClick={() => setSelectedOdd(market.id + "-a")}
                      className={clsx(
                        "py-2 px-3 rounded-xl border font-syne text-[12.5px] font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer",
                        selectedOdd === market.id + "-a"
                          ? "bg-[#F6C453] text-white border-[#F6C453] shadow-md shadow-[#F6C453]/20 scale-95"
                          : "bg-[#05080B] border-white/10 text-muted hover:border-[#F6C453]/35 hover:text-[#F6C453]"
                      )}
                    >
                      {market.selectionA}
                    </button>
                    <button
                      onClick={() => setSelectedOdd(market.id + "-b")}
                      className={clsx(
                        "py-2 px-3 rounded-xl border font-syne text-[12.5px] font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer",
                        selectedOdd === market.id + "-b"
                          ? "bg-[#F6C453] text-white border-[#F6C453] shadow-md shadow-[#F6C453]/20 scale-95"
                          : "bg-[#05080B] border-white/10 text-muted hover:border-[#F6C453]/35 hover:text-[#F6C453]"
                      )}
                    >
                      {market.selectionB}
                    </button>
                  </div>
                </div>
              ))}
          </div>

          <p className="text-left sm:text-center text-muted text-[13px] font-light mt-10 max-w-[600px] mx-auto">
            Odds represent a simulated preview. Users can enjoy cricket betting from multiple angles while following the game closely.
          </p>
        </section>

        {/* 06 — Tournaments */}
        <WideBlock num="06" eyebrow="Elite Competitions" title="Follow the Biggest Cricket Tournaments">
          <p className="max-w-2xl">
            Cricket fans love major tournaments because they bring together the world&apos;s best teams. Reddy Line provides active sports betting markets on all major events.
          </p>
          <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {tournaments.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.05 }}
                className="group flex items-center justify-between rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5 transition-colors hover:border-[#F6C453]/25"
              >
                <div className="flex flex-col gap-1.5">
                  <span className="text-[#F6C453] text-[9px] uppercase font-bold tracking-[1.5px] bg-[#F6C453]/5 border border-[#F6C453]/15 px-2 py-0.5 rounded-full w-max">
                    {t.tag}
                  </span>
                  <h4 className="font-syne font-bold text-white text-[14.5px] group-hover:text-[#F6C453] transition-colors">{t.name}</h4>
                </div>
                <FaTrophy className="text-muted group-hover:text-[#F6C453] transition-colors shrink-0 ml-4" size={16} />
              </motion.div>
            ))}
          </div>
        </WideBlock>

        {/* 07 — IPL special */}
        <WideBlock num="07" eyebrow="Season Special" title="IPL Betting at Reddy Line Exchange">
          <div className="relative overflow-hidden rounded-2xl border border-[#F6C453]/20 bg-gradient-to-br from-[#070C13] to-[#F6C453]/[0.05] p-8 md:p-10">
            <div className="absolute top-0 right-0 w-[180px] h-[180px] bg-[radial-gradient(circle,rgba(246, 196, 83,0.06)_0%,transparent_70%)] pointer-events-none" />
            <div className="relative z-10 max-w-[650px]">
              <p className="text-muted text-[15px] leading-[1.8] font-light mb-8">
                The Indian Premier League is one of the most followed cricket tournaments in the world. Every season, millions of fans search for IPL betting opportunities and online cricket IDs.
              </p>
              <h4 className="font-syne text-[14px] font-bold text-white uppercase tracking-wider mb-4">At Reddy Line, IPL Fans Can Enjoy:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {["Live IPL betting", "Match winner markets", "Toss betting", "Player performance", "Live odds updates", "Mobile betting app"].map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F6C453] shrink-0 shadow-[0_0_8px_rgba(246, 196, 83,0.6)]" />
                    <span className="text-white text-[13.5px] font-medium font-syne">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </WideBlock>

        {/* 08 — Get started timeline */}
        <WideBlock num="08" eyebrow="Quick Onboarding" title="Easy to Get Started">
          <p className="max-w-2xl">
            Starting your online cricket betting journey at Reddy Line is simple. Follow these 4 easy steps to unlock non-stop action.
          </p>
          <div className="relative py-8 mt-2">
            {/* <div className="absolute top-[48px] left-[10%] right-[10%] h-[2px] bg-white/[0.07] z-0 hidden md:block" /> */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 relative z-10">
              {onboarding.map((item) => (
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
        </WideBlock>

        {/* 09 — Responsible */}
        <section className="mx-auto max-w-[1000px]">
          <div className="rounded-3xl border border-[#F6C453]/20 bg-[#F6C453]/[0.04] p-6 md:p-10 flex flex-col md:flex-row gap-6 items-start relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-[radial-gradient(circle,rgba(246, 196, 83,0.06)_0%,transparent_70%)] pointer-events-none" />
            <div className="w-12 h-12 rounded-2xl bg-[#F6C453]/10 border border-[#F6C453]/25 flex items-center justify-center text-[#F6C453] shrink-0 shadow-lg">
              <FaExclamationTriangle size={20} />
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="font-syne font-bold text-white text-[17px] uppercase tracking-wider">Responsible Cricket Betting</h3>
              <p className="text-muted text-[14.5px] leading-[1.7] font-light">
                At Reddy Line, we encourage responsible betting practices. Cricket betting should always be treated as entertainment. Play within your financial limits.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[13px] text-muted font-light mt-2">
                {["Set personal betting limits", "Manage spending responsibly", "Avoid emotional betting", "Take breaks when necessary"].map((tip) => (
                  <div key={tip} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F6C453] shrink-0" />
                    <span>{tip}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      <CricketFaq />

      {/* ── Final CTA ── */}
      <section className="relative z-10 px-[5%] pb-15">
        <div className="mx-auto max-w-[1180px] relative overflow-hidden rounded-[28px] border border-[#F6C453]/25 bg-gradient-to-br from-[#070C13] via-[#05080B] to-[#070C13] p-10 md:p-16 text-left sm:text-center">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse,rgba(246, 196, 83,0.08)_0%,transparent_70%)] pointer-events-none" />
          <div className="relative z-10 max-w-[800px] mx-auto">
            <span className="section-tag justify-center mb-4">Ready to Play?</span>
            <h2 className="section-title">
              Join the Cricket Action <br />At{" "}
              <span className="bg-gradient-to-r from-[#D4AF37] via-[#F6C453] to-[#7fd5ff] bg-clip-text text-transparent">Reddy Line Exchange</span>
            </h2>
            <p className="text-muted text-[16px] md:text-[18px] leading-[1.8] font-light max-w-[620px] mx-auto mb-10">
              Cricket continues to unite fans through unforgettable moments. We bring you closer to the action with live betting, online cricket IDs, and quick withdrawals.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://www.1xplay.games/" className="btn btn-gold btn-large">
                Register &amp; Join Now
              </a>
              <Link href="/games" className="btn btn-ghost btn-large">
                Explore Games Hub
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ─────────── Reusable blocks ─────────── */

function EyebrowHead({ num, eyebrow, title }: { num: string; eyebrow: string; title: string }) {
  return (
    <>
      <div className="mb-2 flex items-center gap-4">
        <span className="font-bebas text-[40px] leading-none tracking-wider text-white">
          {num}
        </span>
        <span className="h-[2px] w-10 rounded-full" style={{ background: ACCENT }} />
        <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#F6C453] font-syne">{eyebrow}</span>
      </div>
      <h2 className="section-title">{title}</h2>
    </>
  );
}

function WideBlock({
  num,
  eyebrow,
  title,
  children,
}: {
  num: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <motion.section
      initial={{ opacity: 1, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="mx-auto max-w-[1180px]"
    >
      <EyebrowHead num={num} eyebrow={eyebrow} title={title} />
      <div className="mt-6 text-[15px] leading-[1.85] font-light text-muted">{children}</div>
    </motion.section>
  );
}

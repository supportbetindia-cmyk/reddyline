"use client";

import clsx from "clsx";
import Link from "next/link";
import CasinoFaq from "../components/CasinoFaq";
import { useState } from "react";
import { motion, useScroll } from "framer-motion";
import {
  FaShieldAlt,
  FaMobileAlt,
  FaCheck,
  FaExclamationTriangle,
  FaArrowRight,
  FaCoins,
  FaAward,
  FaUserShield,
  FaBolt,
} from "react-icons/fa";
import ScrollReveal from "../components/ScrollReveal";
import { SportHero } from "../components/SportHeroMedia";
import { EyebrowHead, WideBlock, SplitMedia } from "../components/SportPageBlocks";
import CasinoGamesMarquee, { type CasinoGameCard } from "../components/CasinoGamesMarquee";

const ACCENT = "#F6C453";

const liveWinners = [
  { player: "Player ***348", amount: "₹45,200", game: "Aviator" },
  { player: "Player ***910", amount: "₹18,500", game: "Teen Patti" },
  { player: "Player ***042", amount: "₹1,20,000", game: "Blackjack" },
  { player: "Player ***563", amount: "₹8,000", game: "Slots" },
  { player: "Player ***122", amount: "₹64,300", game: "Roulette" },
  { player: "Player ***715", amount: "₹32,000", game: "Dragon Tiger" },
];


const games: CasinoGameCard[] = [
  { name: "Play Now", href: "https://www.1xplay.games/", image: "/money_heist.png", badge: "hot" },
  { name: "Play Now", href: "https://www.1xplay.games/", image: "/casino-roulette-card-gold-v2.png", badge: null },
  { name: "Play Now", href: "https://www.1xplay.games/", image: "/aviator.jpg", badge: "new" },
  { name: "Play Now", href: "https://www.1xplay.games/", image: "/teen_pati.png", badge: "hot" },
  { name: "Play Now", href: "https://www.1xplay.games/", image: "/disco_club.png", badge: "new" },
  { name: "Play Now", href: "https://www.1xplay.games/", image: "/naughty_button.png", badge: null },
  { name: "Play Now", href: "https://www.1xplay.games/", image: "/chiken_road.jpeg", badge: "new" },
  { name: "Play Now", href: "https://www.1xplay.games/", image: "/campus_crush.jpeg", badge: null },
  { name: "Play Now", href: "https://www.1xplay.games/", image: "/f1.png", badge: "hot" },
  { name: "Play Now", href: "https://www.1xplay.games/", image: "/casino-rocket-card-gold-v2.png", badge: null },
  { name: "Play Now", href: "https://www.1xplay.games/", image: "/casino_game1.png", badge: null },
  { name: "Play Now", href: "https://www.1xplay.games/", image: "/casino_game2.png", badge: null },
  { name: "Play Now", href: "https://www.1xplay.games/", image: "/casino_game3.png", badge: null },
  { name: "Play Now", href: "https://www.1xplay.games/", image: "/casino_game4.png", badge: null },
  { name: "Play Now", href: "https://www.1xplay.games/", image: "/casino_game5.png", badge: null },
  { name: "Play Now", href: "https://www.1xplay.games/", image: "/casino_game6.png", badge: null },
  { name: "Play Now", href: "https://www.1xplay.games/", image: "/casino-slot-card-gold-v2.png", badge: null },
  { name: "Play Now", href: "https://www.1xplay.games/", image: "/casino_game8.png", badge: null },
  { name: "Play Now", href: "https://www.1xplay.games/", image: "/casino_game9.png", badge: null },
];

const gameTabs = [
  { id: "aviator", label: "Aviator (Crash Game)", emoji: "✈️" },
  { id: "blackjack", label: "Blackjack (Card Classic)", emoji: "🃏" },
  { id: "roulette", label: "Roulette (Spin Wheel)", emoji: "🎡" },
  { id: "baccarat", label: "Baccarat (Elegant Play)", emoji: "💎" },
  { id: "teenpatti", label: "Teen Patti (Indian Poker)", emoji: "👑" },
  { id: "dragontiger", label: "Dragon Tiger (Quick Draw)", emoji: "🐯" },
];

export default function CasinoPage() {
  const [selectedGameInfo, setSelectedGameInfo] = useState<string | null>("aviator");
  const { scrollYProgress } = useScroll();

  // Slots Simulator State
  const symbols = ["🍒", "🍋", "💎", "7️⃣", "⭐", "🔔"];
  const [reels, setReels] = useState(["7️⃣", "7️⃣", "7️⃣"]);
  const [spinning, setSpinning] = useState(false);
  const [coins, setCoins] = useState(500);
  const [slotMessage, setSlotMessage] = useState("Spin the reels to win virtual coins!");
  const [spinClass, setSpinClass] = useState([false, false, false]);

  const spin = () => {
    if (spinning || coins < 50) return;
    setSpinning(true);
    setCoins((prev) => prev - 50);
    setSlotMessage("Spinning the reels... 🎰");

    let ticks = 0;
    const interval = setInterval(() => {
      setReels([
        symbols[Math.floor(Math.random() * symbols.length)],
        symbols[Math.floor(Math.random() * symbols.length)],
        symbols[Math.floor(Math.random() * symbols.length)],
      ]);
      setSpinClass([true, true, true]);
      ticks++;

      if (ticks > 15) {
        clearInterval(interval);
        setSpinClass([false, false, false]);

        const finalReels = [
          symbols[Math.floor(Math.random() * symbols.length)],
          symbols[Math.floor(Math.random() * symbols.length)],
          symbols[Math.floor(Math.random() * symbols.length)],
        ];
        setReels(finalReels);

        let win = 0;
        let msg = "";

        if (finalReels[0] === finalReels[1] && finalReels[1] === finalReels[2]) {
          if (finalReels[0] === "7️⃣") {
            win = 1000;
            msg = "JACKPOT! Triple 7s! +1,000 Coins! 🎉🎰";
          } else if (finalReels[0] === "💎") {
            win = 750;
            msg = "DIAMOND SHINE! Triple Diamonds! +750 Coins! 💎✨";
          } else {
            win = 400;
            msg = `TRIPLE COMBINATION! Three ${finalReels[0]}s! +400 Coins! 🌟`;
          }
        } else if (
          finalReels[0] === finalReels[1] ||
          finalReels[1] === finalReels[2] ||
          finalReels[0] === finalReels[2]
        ) {
          win = 80;
          msg = "Double Match! +80 Coins! 👍";
        } else {
          msg = "No match. Better luck next spin!";
        }

        setCoins((prev) => prev + win);
        setSlotMessage(msg);
        setSpinning(false);
      }
    }, 100);
  };

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
      <SportHero src="/reddy-casino-v2.png" mobileSrc="/casino-mobile-gold-v2.png" alt="Casino Gaming at Reddy Line" desktopPosition="object-right">
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 bg-[#F6C453]/10 border border-[#F6C453]/20 rounded-full px-4 py-1.5 w-max mb-6"
              >
                <span className="w-2 h-2 rounded-full bg-[#F6C453] animate-pulse" />
                <span className="sport-hero-eyebrow font-semibold text-[#F6C453] uppercase tracking-[2px] font-syne">
                  Premium Gaming Exchange
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className=""
              >
                Experience the Ultimate{" "}
                <span className="bg-gradient-to-r from-[#D4AF37] via-[#F6C453] to-[#7fd5ff] bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(246, 196, 83,0.15)]">
                  Online Casino
                </span>
                   Entertainment
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className=""
              >
                Welcome to Reddy Line Casino, where excitement, entertainment, and premium gaming experiences come together on one modern platform. From classic table cards to live dealer action, enjoy a secure, fast, and responsive vegas-style environment built for today&apos;s players.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex gap-4 flex-wrap max-sm:justify-center"
              >
                <a href="https://www.1xplay.games/games/live-casino" className="btn btn-gold btn-large gap-2">
                  <span>Explore Games</span> <FaArrowRight size={12} />
                </a>
                <a href="https://wa.link/1xplayindia" className="btn btn-ghost btn-large">
                  <span>Play Mock Slots</span>
                </a>
              </motion.div>
      </SportHero>

    

      {/* ── Editorial flow ── */}
      <div className="relative z-10 px-[5%] py-[70px] md:py-[100px] space-y-[72px] md:space-y-[110px]">
        {/* 01 — Intro */}
        <WideBlock num="01" eyebrow="Modern Casino Destination" title="Online Casino Gaming Built for Non-Stop Thrills">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-5">
              <p>
                Online casino gaming has become one of the fastest-growing forms of digital entertainment, and Reddy Line is proud to provide a platform that combines innovation, security, and excitement. Every game is designed to deliver non-stop entertainment and immersive gameplay.
              </p>
              <p>
                At Reddy Line, our goal is simple — to create a premium online casino destination where players can enjoy world-class entertainment anytime and anywhere. Whether you are exploring online casino games for the first time or you are an experienced player looking for high-quality gaming action, Reddy Line offers everything you need for a smooth and enjoyable experience.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col gap-4 bg-white/[0.02] border border-white/[0.08] p-6 rounded-2xl">
              <span className="text-[12px] uppercase text-muted tracking-wider">Why Choose Reddy Line Casino</span>
              {[
                { icon: FaBolt, k: "Performance", v: "Fast Loading Games" },
                { icon: FaUserShield, k: "Security", v: "Protected Environment" },
                { icon: FaCoins, k: "Payments", v: "Quick Withdrawals" },
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

        {/* 02 — What makes special */}
        <WideBlock num="02" eyebrow="Premium Standouts" title="What Makes Reddy Line Casino Special?">
          <p className="max-w-2xl">
            We focus on creating an experience that is enjoyable, reliable, and easy to access for every player. Here are the core highlights of our casino product.
          </p>
          <div className="mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: "Massive Game Collection", desc: "Access a wide variety of card tables, slots, and interactive gaming rooms." },
              { title: "Modern & Easy Platform", desc: "A clean, dark interface built to let you navigate seamlessly on any device." },
              { title: "Smooth Cross-Device Play", desc: "Optimized layouts that scale from heavy desktop monitors to light smartphone displays." },
              { title: "Fast Loading Games", desc: "Engineered on next-gen infrastructure to render games instantly without lag." },
              { title: "Live Casino Dealer Rooms", desc: "Experience real croupiers, physical cards, and live roulette feeds in real-time." },
              { title: "Secure Transactions", desc: "Rest easy with rapid deposit settlements and highly protected withdrawal pipelines." },
            ].map((card, i) => (
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
                    <FaAward size={20} />
                  </div>
                  <h3 className="font-syne font-bold text-white text-[17px] mb-3 group-hover:text-[#F6C453] transition-colors">{card.title}</h3>
                  <p className="text-muted text-[13.5px] leading-[1.7] font-light">{card.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-7 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5 text-center">
            <p className="text-muted text-[14px] font-light">
              ✔ Dedicated customer support &nbsp;&bull;&nbsp; ✔ Mobile-friendly access &nbsp;&bull;&nbsp; ✔ Exciting new gaming experiences updated weekly
            </p>
          </div>
        </WideBlock>

        {/* 03 — Discover games (interactive selector) */}
        <section id="portfolio" className="mx-auto max-w-[1180px] scroll-mt-24">
          <EyebrowHead num="03" eyebrow="Game Lobby" title="Discover a World of Casino Games" />
          <p className="mt-3 text-muted text-[15px] font-light max-w-2xl">
            Every player has unique preferences. Our platform offers a wide selection of classic favorites and interactive modern releases.
          </p>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            {/* Selector menu */}
            <div className="lg:col-span-5 flex flex-col gap-3">
              <span className="text-[11px] uppercase tracking-[1.5px] font-bold text-muted mb-2 font-syne">Select a Game Category</span>
              {gameTabs.map((g) => (
                <button
                  key={g.id}
                  onClick={() => setSelectedGameInfo(g.id)}
                  className={clsx(
                    "flex items-center justify-between p-4 rounded-xl border text-left transition-all duration-300 font-syne font-bold text-[14px] cursor-pointer",
                    selectedGameInfo === g.id
                      ? "bg-[#F6C453]/10 border-[#F6C453] text-white shadow-lg"
                      : "bg-white/[0.02] border-white/10 text-muted hover:border-white/20 hover:text-white"
                  )}
                >
                  <span className="flex items-center gap-3">
                    <span className="text-xl">{g.emoji}</span>
                    <span>{g.label}</span>
                  </span>
                  <span className={clsx("w-2 h-2 rounded-full", selectedGameInfo === g.id ? "bg-[#F6C453] animate-pulse" : "bg-white/10")} />
                </button>
              ))}
            </div>

            {/* Details panel */}
            <div className="lg:col-span-7 bg-white/[0.02] border border-white/10 p-8 rounded-3xl flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-[radial-gradient(circle,rgba(246, 196, 83,0.05)_0%,transparent_70%)] pointer-events-none" />
              <div>
                <div className="flex items-center justify-between border-b border-white/[0.08] pb-5 mb-6">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">
                      {selectedGameInfo === "aviator" && "✈️"}
                      {selectedGameInfo === "blackjack" && "🃏"}
                      {selectedGameInfo === "roulette" && "🎡"}
                      {selectedGameInfo === "baccarat" && "💎"}
                      {selectedGameInfo === "teenpatti" && "👑"}
                      {selectedGameInfo === "dragontiger" && "🐯"}
                    </span>
                    <h3 className="font-syne font-bold text-white text-[20px]">
                      {selectedGameInfo === "aviator" && "Aviator"}
                      {selectedGameInfo === "blackjack" && "Blackjack"}
                      {selectedGameInfo === "roulette" && "Roulette"}
                      {selectedGameInfo === "baccarat" && "Baccarat"}
                      {selectedGameInfo === "teenpatti" && "Teen Patti"}
                      {selectedGameInfo === "dragontiger" && "Dragon Tiger"}
                    </h3>
                  </div>
                  <span className="bg-[#F6C453]/10 border border-[#F6C453]/30 text-[#F6C453] text-[10px] font-bold uppercase tracking-[1px] px-3 py-1 rounded-full">
                    Live Room Available
                  </span>
                </div>

                <div className="text-muted text-[15px] leading-[1.8] font-light space-y-4">
                  {selectedGameInfo === "aviator" && (
                    <>
                      <p>
                        Aviator has quickly become one of the most popular online casino games because of its unique gameplay style and exciting user experience.
                      </p>
                      <p>
                        Unlike classic table games, players watch a virtual plane climb and must cash out their multiplier before the plane flies away. Simple, fast-paced, and highly interactive.
                      </p>
                    </>
                  )}
                  {selectedGameInfo === "blackjack" && (
                    <>
                      <p>
                        Blackjack remains one of the most popular casino card games in the world. Its simple gameplay and strategic decision-making make it a favorite among players.
                      </p>
                      <p>
                        Aim to get your hand&apos;s total closer to 21 than the dealer without going over. Engage with live dealers for real card shuffles and real-time interaction.
                      </p>
                    </>
                  )}
                  {selectedGameInfo === "roulette" && (
                    <>
                      <p>
                        Few casino games create excitement like Roulette. Every spin offers anticipation, entertainment, and the possibility of exciting outcomes.
                      </p>
                      <p>
                        Choose your bets on individual numbers, color pockets, or odd/even fields, and watch the physical wheel spin via our high-definition real-time video feed.
                      </p>
                    </>
                  )}
                  {selectedGameInfo === "baccarat" && (
                    <>
                      <p>
                        Known for its elegant gameplay and straightforward rules, Baccarat continues to attract players looking for fast and enjoyable casino action.
                      </p>
                      <p>
                        Bet on either the Player&apos;s hand, the Banker&apos;s hand, or a Tie. Simple calculation, rapid rounds, and low house edges make it a premium favorite.
                      </p>
                    </>
                  )}
                  {selectedGameInfo === "teenpatti" && (
                    <>
                      <p>
                        Teen Patti is one of the most recognized card games among casino enthusiasts. Its exciting gameplay and competitive nature make it a favorite choice for many players.
                      </p>
                      <p>
                        Play this beloved Indian classic online with real professional dealers, competitive tables, and beautiful UI overlays showing the rank of hands.
                      </p>
                    </>
                  )}
                  {selectedGameInfo === "dragontiger" && (
                    <>
                      <p>
                        Dragon Tiger offers quick gameplay and simple rules, making it an excellent option for players who enjoy fast-paced entertainment.
                      </p>
                      <p>
                        A super-fast two-card game where you predict which position—Dragon or Tiger—will draw the card with the higher value. Rounds settle in seconds!
                      </p>
                    </>
                  )}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-[12px] text-muted font-light">
                  Join Reddy Line to play this game in high definition with live dealers.
                </span>
                <Link href="/" className="btn btn-gold w-full sm:w-auto shrink-0">
                  Play Live Game
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 04 — Slot machine mini-game */}
        <section id="slots-game" className="mx-auto max-w-[1180px] scroll-mt-24">
          <div className="text-left sm:text-center max-w-[650px] mx-auto mb-10">
            <div className="flex items-center justify-center gap-4 mb-3">
              <span className="font-bebas text-[40px] leading-none tracking-wider text-white">04</span>
              <span className="h-[2px] w-10 rounded-full bg-[#F6C453]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#F6C453] font-syne">Slot Simulator</span>
            </div>
            <h2 className="section-title">
              Interactive <span className="text-[#F6C453]">Slot Machine</span>
            </h2>
            <p className="text-muted text-[14.5px] mt-2 font-light">
              Test your luck with our custom virtual slot game! Spend mock coins, spin the reels, and try to hit matching combinations.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-6 md:p-10 flex flex-col lg:flex-row gap-10 items-center justify-between shadow-2xl">
            <div className="absolute top-0 left-0 right-0 h-[6px] bg-gradient-to-r from-[#D4AF37] to-[#F6C453]" />

            {/* Slot Display */}
            <div className="flex flex-col items-center gap-6 w-full lg:w-1/2">
              <div className="bg-[#09101e] border-4 border-[#F6C453]/40 p-6 rounded-2xl w-full max-w-[380px] shadow-[0_0_30px_rgba(246, 196, 83,0.15)] flex flex-col gap-4 relative">
                <div className="grid grid-cols-3 gap-3">
                  {reels.map((symbol, idx) => (
                    <div
                      key={idx}
                      className={clsx(
                        "h-24 bg-white/[0.03] border border-white/5 rounded-xl flex items-center justify-center text-5xl shadow-inner select-none transition-all",
                        spinClass[idx] && "animate-bounce"
                      )}
                    >
                      {symbol}
                    </div>
                  ))}
                </div>
                <div className="flex justify-between items-center bg-black/40 border border-white/5 px-4 py-2.5 rounded-lg text-xs font-syne">
                  <div className="flex items-center gap-1.5 text-muted">
                    <FaCoins className="text-[#F6C453]" />
                    <span>Coins:</span>
                    <span className="text-white font-bold">{coins}</span>
                  </div>
                  <span className="text-[10px] text-[#F6C453] font-bold uppercase tracking-[1px]">Cost: 50 / Spin</span>
                </div>
              </div>

              <button
                onClick={spin}
                disabled={spinning || coins < 50}
                className={clsx(
                  "w-full max-w-[380px] font-syne font-bold text-sm uppercase tracking-wider py-4 rounded-xl shadow-lg transition-all border",
                  spinning
                    ? "bg-white/5 border-white/10 text-muted cursor-not-allowed"
                    : coins < 50
                    ? "bg-red-600/10 border-red-600/20 text-red-600 cursor-not-allowed"
                    : "bg-gradient-to-r from-[#D4AF37] to-[#F6C453] border-transparent text-white hover:shadow-[#F6C453]/20 hover:scale-105 cursor-pointer active:scale-95"
                )}
              >
                {spinning ? "Spinning..." : coins < 50 ? "Out of Coins" : "Spin Reels 🎰"}
              </button>
            </div>

            {/* Payout / Status */}
            <div className="flex flex-col justify-between w-full lg:w-1/2 min-h-[220px]">
              <div>
                <h3 className="font-syne font-bold text-white text-[18px] mb-4">Payout Table</h3>
                <div className="space-y-2.5 text-xs text-muted font-light mb-6">
                  <div className="flex items-center justify-between border-b border-white/5 pb-1.5">
                    <span className="flex items-center gap-1.5 font-medium text-white">7️⃣ + 7️⃣ + 7️⃣</span>
                    <span className="text-[#F6C453] font-bold">1,000 Coins Jackpot</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-white/5 pb-1.5">
                    <span className="flex items-center gap-1.5 font-medium text-white">💎 + 💎 + 💎</span>
                    <span className="text-[#F6C453] font-bold">750 Coins Payout</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-white/5 pb-1.5">
                    <span className="flex items-center gap-1.5 font-medium text-white">Three Matching Symbols</span>
                    <span className="text-[#F6C453] font-bold">400 Coins Payout</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-white/5 pb-1.5">
                    <span className="flex items-center gap-1.5 font-medium text-white">Two Matching Symbols</span>
                    <span className="text-[#F6C453] font-bold">80 Coins Payout</span>
                  </div>
                </div>
              </div>
              <div className="bg-[#09101e] border border-white/5 p-4 rounded-xl flex items-center gap-3">
                <span className="text-2xl animate-pulse">📢</span>
                <p className="text-white text-[13px] font-syne font-medium leading-relaxed">{slotMessage}</p>
              </div>
            </div>
          </div>
        </section>

        {/* 05 — Mobile */}
        <SplitMedia
          num="05"
          eyebrow="On-The-Go Play"
          title="Play Anytime with Mobile Casino Gaming"
          image="/casino-mobile-gold-v2.png"
          alt="Mobile Casino Gaming at Reddy Line"
          sizes="(max-width:1024px) 100vw, 50vw"
          imageClassName="object-fit object-top"
          overlay={
            <div className="absolute bottom-4 left-4 bg-[#D4AF37] text-white text-[10px] font-bold uppercase tracking-[1px] px-3 py-1 rounded-full flex items-center gap-1.5 border border-[#D4AF37]/30">
              <FaMobileAlt size={11} /> 100% Mobile Friendly
            </div>
          }
        >
          <p>
            Today&apos;s players want flexibility, and Reddy Line is designed to deliver exactly that. Our platform is fully optimized for smartphones, tablets, laptops, and desktop devices, allowing players to enjoy their favorite casino games whenever and wherever they want.
          </p>
          <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#F6C453] font-syne">
            Benefits of Mobile Play
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Instant access to casino games",
              "Smooth performance across devices",
              "Fast navigation and gameplay",
              "No complicated setup process",
              "Convenient gaming from anywhere",
            ].map((benefit) => (
              <div key={benefit} className="flex items-center gap-2.5 text-[13px] text-white/85 font-medium">
                <FaCheck className="text-[#F6C453] shrink-0" size={13} />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </SplitMedia>

        {/* 06 — Safe & secure */}
        <WideBlock num="06" eyebrow="Safe & Protected" title="A Safe and Secure Gaming Environment">
          <p className="max-w-2xl">
            At Reddy Line, user security remains one of our highest priorities. We use advanced security systems and modern technologies to safeguard your gaming journey.
          </p>
          <div className="mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Secure Account Protection", desc: "Two-factor authorization guards and verified logging protocols ensure unauthorized actors stay out." },
              { title: "Advanced Encryption Tech", desc: "Robust SSL encryption methods encrypt data packets traveling between your client and our database." },
              { title: "Safe Payment Processing", desc: "Reliable payout processors handle instant cashouts and deposits using compliant standards." },
              { title: "Protected User Data", desc: "Privacy regulations dictate that all customer profile metrics remain entirely sealed from external marketing groups." },
              { title: "Reliable Platform Infrastructure", desc: "Cloud networks and high-availability servers prevent outage issues and session disconnects." },
              { title: "Continuous Security Monitoring", desc: "Dedicated operations centers inspect network patterns round-the-clock for threat vectors." },
            ].map((s) => (
              <div key={s.title} className="group rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6 transition-colors hover:border-[#F6C453]/25">
                <div className="w-10 h-10 rounded-lg bg-[#F6C453]/10 flex items-center justify-center text-[#F6C453] mb-5 border border-[#F6C453]/20 transition-all">
                  <FaShieldAlt size={16} />
                </div>
                <h4 className="font-syne font-bold text-white text-[15px] mb-2">{s.title}</h4>
                <p className="text-muted text-[13px] leading-[1.6] font-light">{s.desc}</p>
              </div>
            ))}
          </div>
        </WideBlock>

        {/* 07 — Getting started timeline */}
        <WideBlock num="07" eyebrow="Simple Steps" title="Getting Started is Easy">
          <p className="max-w-2xl">
            Registration and accessing the lobby is straightforward. Follow these steps to begin your casino gaming journey.
          </p>
          <div className="relative py-8 mt-2">
            <div className="absolute top-[48px] left-[10%] right-[10%] h-[2px] bg-white/[0.07] z-0 hidden md:block" />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 relative z-10">
              {[
                { step: "01", title: "Create Your Account", desc: "Register quickly and gain access to the complete casino platform." },
                { step: "02", title: "Explore Available Games", desc: "Browse through a wide variety of casino games and discover your favorites." },
                { step: "03", title: "Choose Your Entertainment", desc: "Select the games you enjoy most and begin your gaming journey." },
                { step: "04", title: "Enjoy the Experience", desc: "Experience smooth gameplay, modern features, and exciting entertainment." },
              ].map((item) => (
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

        {/* 08 — Why grows */}
        <WideBlock num="08" eyebrow="Market Insights" title="Why Online Casino Gaming Continues to Grow">
          <div className="relative overflow-hidden rounded-2xl border border-[#F6C453]/20 bg-gradient-to-br from-[#070C13] to-[#F6C453]/[0.05] p-8 md:p-10">
            <div className="absolute top-0 right-0 w-[180px] h-[180px] bg-[radial-gradient(circle,rgba(246, 196, 83,0.06)_0%,transparent_70%)] pointer-events-none" />
            <div className="relative z-10 max-w-[750px]">
              <p className="text-muted text-[15px] leading-[1.8] font-light mb-8">
                The online casino industry continues expanding because players want entertainment that is convenient, engaging, and accessible. Millions of users choose online casino platforms because they offer 24/7 accessibility, mobile convenience, interactive live gaming, and modern gaming technology.
              </p>
              <h4 className="font-syne text-[14px] font-bold text-white uppercase tracking-wider mb-4">Core Drivers:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "24/7 Accessibility from anywhere",
                  "Enormous variety of gaming options",
                  "Convenient mobile accessibility",
                  "Interactive live dealer rooms",
                  "Modern reliable gaming tech",
                  "Continuous entertainment releases",
                ].map((f) => (
                  <div key={f} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F6C453] shrink-0 shadow-[0_0_8px_rgba(246, 196, 83,0.6)]" />
                    <span className="text-white text-[13.5px] font-medium font-syne">{f}</span>
                  </div>
                ))}
              </div>
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
              <h3 className="font-syne font-bold text-white text-[17px] uppercase tracking-wider">Responsible Gaming</h3>
              <p className="text-muted text-[14.5px] leading-[1.7] font-light">
                While online casino games are designed for entertainment, responsible gaming remains important. We encourage all users to practice safety.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[13px] text-muted font-light mt-2">
                {["Play within your personal limits", "Manage your gaming time responsibly", "Treat gaming as entertainment", "Avoid chasing losses"].map((tip) => (
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

      <CasinoFaq />

      {/* ── Final CTA ── */}
      <section className="relative z-10 px-[5%] pb-28">
        <div className="mx-auto max-w-[1180px] relative overflow-hidden rounded-[28px] border border-[#F6C453]/25 bg-gradient-to-br from-[#070C13] via-[#05080B] to-[#070C13] p-10 md:p-16 text-left sm:text-center">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse,rgba(246, 196, 83,0.08)_0%,transparent_70%)] pointer-events-none" />
          <div className="relative z-10 max-w-[800px] mx-auto">
            <span className="section-tag justify-center mb-4">Join the Action</span>
            <h2 className="section-title">
              Join the Excitement at <br />
              <span className="bg-gradient-to-r from-[#D4AF37] via-[#F6C453] to-[#7fd5ff] bg-clip-text text-transparent">Reddy Line Casino</span>
            </h2>
            <p className="text-muted text-[16px] md:text-[18px] leading-[1.8] font-light max-w-[620px] mx-auto mb-10">
              Create your account today and discover a world of premium online casino entertainment built for today&apos;s players. Enjoy quick setups, secure payouts, and smooth play.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/" className="btn btn-gold btn-large">
                Create Your Account
              </Link>
              <Link href="/games" className="btn btn-ghost btn-large">
                Back to Games Hub
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

"use client";

import Link from "next/link";
import BadmintonFaq from "../components/BadmintonFaq";
import { motion, useScroll } from "framer-motion";
import {
  FaTrophy,
  FaBolt,
  FaTv,
  FaMobileAlt,
  FaSyncAlt,
  FaGlobe,
  FaCheck,
  FaArrowRight,
  FaLock,
  FaExclamationTriangle,
} from "react-icons/fa";
import ScrollReveal from "../components/ScrollReveal";
import { EditorialBlock, WideBlock, SplitMedia } from "../components/SportPageBlocks";
import { SportHero } from "../components/SportHeroMedia";

const ACCENT = "#F6C453";

export default function BadmintonPage() {
  const { scrollYProgress } = useScroll();

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top, behavior: "smooth" });
    }
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
      <SportHero src="/badminton-gold-v2.png" mobileSrc="/badminton-mobile-gold-v2.png" alt="Badminton Betting at Reddy Line" desktopPosition="object-right">
          <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 bg-[#F6C453]/10 border border-[#F6C453]/20 rounded-full px-4 py-1.5 w-max mb-6"
              >
                <span className="w-2 h-2 rounded-full bg-[#F6C453] animate-pulse" />
                <span className="sport-hero-eyebrow font-semibold text-[#F6C453] uppercase tracking-[2px] font-syne">
                  Badminton Betting
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className=""
              >
                Badminton Betting at{" "}
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
                Experience fast-paced action, live match excitement, and seamless betting
                markets on the most secure sports portal in India.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex gap-4 flex-wrap max-sm:justify-center"
              >
                <a href="https://www.reddyline.co/" className="btn btn-gold btn-large gap-2">
                  <span>Explore Markets</span> <FaArrowRight size={12} />
                </a>
                <Link href='/blog' className="btn btn-ghost btn-large">
                  <span>How to Start</span>
                </Link>
              </motion.div>
      </SportHero>

      {/* ── Editorial flow ── */}
      <div className="relative z-10 px-[5%] py-[70px] md:py-[100px] space-y-[72px] md:space-y-[110px]">
        {/* 01 — Welcome */}
        <EditorialBlock num="01" eyebrow="Badminton Betting" title="Badminton Betting at Reddy Line">
          <p>
            Welcome to the exciting world of badminton betting at Reddy Line where users can enjoy fast paced sports action live match excitement and smooth online betting experiences on one trusted platform.
          </p>
          <p>
            Badminton has become one of the fastest growing sports in online betting because of its speed competitive gameplay and thrilling match moments. From international tournaments to major badminton championships millions of sports fans now follow live badminton matches and explore online betting opportunities every day.
          </p>
          <p>
            At Reddy Line users can enjoy a premium badminton betting experience with real time match updates live betting markets smooth mobile access and secure betting systems designed for modern sports enthusiasts.
          </p>
          <Callout>
            Whether you are following international badminton stars major tournaments or live match action Reddy Line provides everything needed for a smooth and engaging badminton betting experience.
          </Callout>
        </EditorialBlock>

        {/* 02 — Why growing */}
        <WideBlock num="02" eyebrow="The Rise" title="Why Badminton Betting Is Growing Fast">
          <p className="max-w-2xl">Badminton betting has gained huge popularity in recent years because the sport offers:</p>
          <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              { text: "Fast match pace", icon: FaBolt },
              { text: "Quick point scoring", icon: FaBolt },
              { text: "Live betting excitement", icon: FaTv },
              { text: "Competitive international tournaments", icon: FaTrophy },
              { text: "Frequent momentum changes", icon: FaSyncAlt },
              { text: "Strong global fan following", icon: FaGlobe },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.text}
                  className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3.5 transition hover:border-[#F6C453]/25"
                >
                  <Icon className="shrink-0 text-[#F6C453]" size={15} />
                  <span className="text-[14px] text-white/85">{item.text}</span>
                </div>
              );
            })}
          </div>
          <div className="mt-7 max-w-2xl space-y-5 text-[15px] leading-[1.85] font-light text-muted">
            <p>
              Unlike many sports badminton matches move quickly which creates more opportunities for live betting and real time predictions.
            </p>
            <p>
              Sports fans enjoy badminton betting because every set and point can change the direction of the match within seconds making the experience more engaging and entertaining.
            </p>
          </div>
        </WideBlock>

        {/* 03 — Live experience */}
        <SplitMedia num="03" eyebrow="In-Play" title="Live Badminton Betting Experience" image="/badminton-live-gold-v2.png" alt="Live Badminton Betting at Reddy Line">
          <p>
            At Reddy Line users can enjoy live badminton betting with real time odds and fast market updates during ongoing matches.
          </p>
          <p>
            The platform is optimized for live sports action which allows users to place bets quickly while following match progress without delays.
          </p>
          <FeatureCard
            icon={FaTv}
            title="Live Betting Features"
            items={[
              "Real time betting markets",
              "Fast odds updates",
              "Smooth live interface",
              "Mobile friendly betting experience",
              "Secure betting environment",
              "Easy market navigation",
            ]}
          />
          <p>
            Live badminton betting creates a more interactive sports experience because users can react to match situations instantly.
          </p>
        </SplitMedia>

        {/* 04 — Markets bento */}
        <WideBlock num="04" eyebrow="Markets" title="Popular Badminton Betting Markets" id="markets">
          <p className="max-w-2xl">
            Reddy Line provides multiple badminton betting options designed for both beginners and experienced sports bettors.
          </p>
          <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {[
              { title: "Match Winner", desc: "Predict which player or team will win the match." },
              { title: "Set Betting", desc: "Bet on the exact set result during the match." },
              { title: "Total Points", desc: "Predict whether the total points scored will be over or under a selected number." },
              { title: "Handicap Betting", desc: "Choose players with adjusted point advantages or disadvantages." },
              { title: "Live Betting Markets", desc: "Place bets during live matches with continuously updated odds." },
              { title: "Tournament Betting", desc: "Bet on players or teams expected to win major badminton tournaments." },
            ].map((m, i) => (
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
            Our goal is to provide users with a complete badminton betting experience through multiple sports markets and real time match access.
          </p>
        </WideBlock>

        {/* 05 — Tournaments chip cloud */}
        <WideBlock num="05" eyebrow="Calendar" title="Major Badminton Tournaments Available">
          <p className="max-w-2xl">
            At Reddy Line users can follow and bet on some of the biggest badminton tournaments and international competitions.
          </p>
          <p className="mt-5 text-[12px] font-bold uppercase tracking-[0.2em] text-[#F6C453] font-syne">
            Popular Events Include
          </p>
          <div className="mt-4 flex flex-wrap gap-2.5">
            {[
              "BWF World Championships",
              "Thomas Cup",
              "Uber Cup",
              "Sudirman Cup",
              "All England Open",
              "Indonesia Open",
              "Malaysia Open",
              "Olympic Badminton Events",
              "International Super Series Tournaments",
            ].map((t) => (
              <span
                key={t}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2.5 text-[13px] font-medium text-white/85 transition-all hover:border-[#F6C453]/40 hover:bg-[#F6C453]/[0.06] hover:text-white"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#F6C453] shadow-[0_0_8px_rgba(246, 196, 83,0.6)]" />
                {t}
              </span>
            ))}
          </div>
          <p className="mt-7 max-w-2xl text-white/60">
            Badminton fans can enjoy live sports entertainment throughout the year with access to multiple international competitions and top ranked players.
          </p>
        </WideBlock>

        {/* 06 — Mobile */}
        <SplitMedia num="06" eyebrow="On the Go" title="Smooth Mobile Betting Experience" image="/badminton-mobile-gold-v2.png" alt="Mobile Badminton Betting at Reddy Line" reverse>
          <p>
            Modern users prefer mobile sports betting because it offers flexibility and instant access to live events. That is why Reddy Line is fully optimized for smartphones tablets and mobile devices.
          </p>
          <FeatureCard
            icon={FaMobileAlt}
            title="Users can:"
            items={[
              "Access live badminton betting anywhere",
              "Monitor match scores in real time",
              "Place bets quickly",
              "Manage betting activity easily",
              "Enjoy smooth mobile performance",
            ]}
          />
          <p>The mobile platform is designed for fast navigation and uninterrupted sports entertainment.</p>
        </SplitMedia>

        {/* 07 — Security */}
        <EditorialBlock num="07" eyebrow="Trust" title="Secure Online Sports Betting Platform">
          <p>
            Security remains one of the biggest priorities at Reddy Line. Our platform uses advanced technology and secure systems to help protect user accounts transactions and betting activity.
          </p>
          <FeatureCard
            icon={FaLock}
            accent="#F6C453"
            title="Users can enjoy badminton betting with confidence because we focus on:"
            items={[
              "Secure account systems",
              "Protected transactions",
              "Reliable platform performance",
              "Safe betting environment",
              "User account protection",
            ]}
          />
          <p>
            We continuously improve platform security and performance to maintain user trust and better sports betting experiences.
          </p>
        </EditorialBlock>

        {/* 08 — Why choose */}
        <WideBlock num="08" eyebrow="Why Reddy Line" title="Why Choose Reddy Line for Badminton Betting">
          <p className="max-w-2xl">
            There are many online sports betting platforms available but Reddy Line focuses on delivering a better user experience with smooth performance fast access and secure betting systems.
          </p>
          <p className="mt-7 text-[12px] font-bold uppercase tracking-[0.2em] text-[#F6C453] font-syne">
            Benefits of Betting on Badminton at Reddy Line
          </p>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              "Live badminton betting",
              "Fast betting markets",
              "Smooth mobile experience",
              "Secure betting platform",
              "Real time odds updates",
              "Easy to use interface",
              "International tournament coverage",
              "Reliable support system",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.02] px-4 py-3.5 transition-all hover:border-[#F6C453]/30 hover:bg-[#F6C453]/[0.04]"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-[#F6C453]/12 text-[#F6C453]">
                  <FaCheck size={11} />
                </span>
                <span className="text-[13.5px] text-white/85">{item}</span>
              </div>
            ))}
          </div>
          <p className="mt-7 max-w-2xl text-white/60">
            Our platform is designed for sports fans who want a fast responsive and engaging badminton betting experience.
          </p>
        </WideBlock>

        {/* 09 — How to start */}
        <WideBlock num="09" eyebrow="Get Started" title="Easy to Start Betting" id="how-to-start">
          <p className="max-w-2xl">Getting started with badminton betting at Reddy Line is simple.</p>
          <div className="relative py-8 mt-2">
            <div className="absolute top-[48px] left-[10%] right-[10%] h-[2px] bg-white/[0.07] z-0 hidden md:block" />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 relative z-10">
              {[
                { step: "01", title: "Create an Account", desc: "Register your account through the Reddy Line platform." },
                { step: "02", title: "Add Funds", desc: "Use the secure deposit system to fund your account." },
                { step: "03", title: "Choose a Match", desc: "Explore live and upcoming badminton events." },
                { step: "04", title: "Place Your Bet", desc: "Select your preferred betting market and enjoy the match." },
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
          <p className="max-w-2xl text-white/60">
            The platform is designed to make sports betting easy accessible and enjoyable for all users.
          </p>
        </WideBlock>

        <section className="mx-auto max-w-[1000px]">
          <div className="rounded-3xl border border-[#F6C453]/20 bg-[#F6C453]/[0.04] p-6 md:p-10 flex flex-col md:flex-row gap-6 items-start relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-[radial-gradient(circle,rgba(246, 196, 83,0.06)_0%,transparent_70%)] pointer-events-none" />
            <div className="w-12 h-12 rounded-2xl bg-[#F6C453]/10 border border-[#F6C453]/25 flex items-center justify-center text-[#F6C453] shrink-0 shadow-lg">
              <FaExclamationTriangle size={20} />
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="font-syne font-bold text-white text-[17px] uppercase tracking-wider">Responsible Sports Betting</h3>
              <p className="text-muted text-[14.5px] leading-[1.7] font-light">
                At Reddy Line we encourage users to enjoy sports betting responsibly. Betting should always remain a form of entertainment and users should play within their financial limits.
              </p>
              <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#F6C453] font-syne">We recommend:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[13px] text-muted font-light">
                {[
                  "Setting personal betting limits",
                  "Managing spending responsibly",
                  "Avoiding emotional betting decisions",
                  "Taking breaks when necessary",
                ].map((tip) => (
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

      <BadmintonFaq />

      {/* ── Final CTA (section 11) ── */}
      <section id="join-experience" className="relative z-10 px-[5%] pb-28 scroll-mt-24">
        <div className="mx-auto max-w-[1180px] relative overflow-hidden rounded-[28px] border border-[#F6C453]/25 bg-gradient-to-br from-[#070C13] via-[#05080B] to-[#070C13] p-10 md:p-16 text-left sm:text-center">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse,rgba(246, 196, 83,0.08)_0%,transparent_70%)] pointer-events-none" />
          <div className="relative z-10 max-w-[800px] mx-auto">
            <span className="section-tag mb-5">Join the Experience</span>
            <h2 className="section-title">
              Join the Badminton Betting Experience at{" "}
              <span className="bg-gradient-to-r from-[#D4AF37] via-[#F6C453] to-[#7fd5ff] bg-clip-text text-transparent">
                Reddy Line
              </span>
            </h2>
            <div className="mt-6 space-y-4 text-[15px] leading-[1.8] font-light text-muted">
              <p>
                Badminton continues growing as one of the most exciting sports for online betting and Reddy Line is committed to providing a premium betting experience for sports fans worldwide.
              </p>
              <p>
                From live badminton betting and real time odds to international tournament coverage and smooth mobile access Reddy Line delivers everything needed for modern online sports entertainment.
              </p>
              <p className="text-white font-normal bg-[#F6C453]/[0.07] border-l-2 border-[#F6C453] p-4 rounded-r-lg">
                If you are looking for a secure fast and user friendly badminton betting platform Reddy Line is the perfect place to enjoy live sports action and exciting betting experiences anytime anywhere.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4 max-sm:justify-center">
              <a href="https://www.reddyline.co/" className="btn btn-gold btn-large">
                Register &amp; Join Now <FaArrowRight className="w-3.5 h-3.5" />
              </a>
              <Link href="/games" className="btn btn-ghost btn-large">
                Explore Game Hub
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ─────────── Reusable blocks ─────────── */

function FeatureCard({
  icon: Icon,
  title,
  items,
  accent = ACCENT,
}: {
  icon: React.ElementType;
  title: string;
  items: string[];
  accent?: string;
}) {
  return (
    <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6">
      <div className="mb-4 flex items-center gap-3">
        <span
          className="flex h-9 w-9 items-center justify-center rounded-lg"
          style={{ backgroundColor: `${accent}1A`, color: accent }}
        >
          <Icon size={16} />
        </span>
        <p className="font-syne text-[14px] font-bold text-white">{title}</p>
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 list-none p-0 m-0">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-[14px] text-white/85">
            <FaCheck className="mt-0.5 shrink-0" size={13} style={{ color: accent }} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Callout({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-white font-normal bg-[#F6C453]/[0.07] border-l-2 border-[#F6C453] p-4 rounded-r-lg">
      {children}
    </p>
  );
}

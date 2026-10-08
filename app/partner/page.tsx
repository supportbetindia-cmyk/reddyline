"use client";

import clsx from "clsx";
import { motion } from "framer-motion";
import {
  Percent,
  TrendingUp,
  BarChart2,
  DollarSign,
  Smartphone,
  Headphones,
  Link2,
  Megaphone,
  UserPlus,
  ArrowRight,
  ShieldCheck,
  CheckCircle,
  Zap,
  Compass,
} from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";
import { PageArtwork } from "../components/PageArtwork";

export default function PartnerPage() {
  const benefits = [
    {
      icon: Percent,
      title: "Up to 30% Commission",
      desc: "Earn up to 30% revenue share from players referred to our platform.",
    },
    {
      icon: DollarSign,
      title: "Fast & Secure Payouts",
      desc: "Get your earnings quickly and safely through reliable payment channels.",
    },
    {
      icon: BarChart2,
      title: "Easy Dashboard",
      desc: "Analyze and manage your marketing campaigns in one place.",
    },
    {
      icon: Zap,
      title: "Real-Time Tracking",
      desc: "Monitor clicks, registrations, active players, and commissions instantly.",
    },
    {
      icon: Headphones,
      title: "Dedicated Support",
      desc: "Direct support from our affiliate managers to help grow your income.",
    },
    {
      icon: TrendingUp,
      title: "High Conversion",
      desc: "Premium casino and cricket products make converting traffic effortless.",
    },
    {
      icon: Smartphone,
      title: "Mobile Optimization",
      desc: "Fully optimized dashboards and links designed for Android & iOS users.",
    },
    {
      icon: Compass,
      title: "Long-Term Growth",
      desc: "Create stable, recurring income through player lifetime value.",
    },
  ];

  const categories = [
    {
      title: "Casino Games Online",
      emoji: "🎰",
      desc: "Promote popular, high-retention casino games including:",
      items: [
        "Blackjack & Roulette",
        "Baccarat & Teen Patti",
        "Dragon Tiger",
        "Aviator (Crash Game)",
        "Slot & Live Casino Games"
      ]
    },
    {
      title: "Cricket & IPL Betting",
      emoji: "🏏",
      desc: "Target the biggest sports audience searching for:",
      items: [
        "Online Cricket ID Services",
        "Cricket Betting IDs",
        "IPL Betting Platforms",
        "Live Ball-by-Ball Betting",
        "Competitive Sports Odds"
      ]
    }
  ];

  const steps = [
    {
      step: "Step 1",
      icon: UserPlus,
      title: "Register as a Partner",
      desc: "Submit your details and create your official Reddy Line partner account in minutes.",
    },
    {
      step: "Step 2",
      icon: Link2,
      title: "Get Referral Link",
      desc: "Generate your unique tracking link and access premium promotional creatives.",
    },
    {
      step: "Step 3",
      icon: Megaphone,
      title: "Promote Reddy Line",
      desc: "Share links on Telegram, Instagram, YouTube, Facebook, blogs, or WhatsApp groups.",
    },
    {
      step: "Step 4",
      icon: Percent,
      title: "Start Earning",
      desc: "Unlock up to 30% revenue share based on the activity of referred players.",
    },
  ];

  const sellingPoints = [
    "Fast Website & App Performance",
    "Smooth Mobile Gaming Experience",
    "Trusted Cricket Betting ID Services",
    "Premium Online Casino Games",
    "Clean, Simple User Interface",
    "Secure Gaming Environment",
    "Live Sports Betting Options",
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-bg text-white">
      <ScrollReveal />

      {/* Background Glows */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-10 right-10 h-80 w-80 rounded-full bg-gold-glow blur-[120px]" />
        <div className="absolute left-10 bottom-10 h-96 w-96 rounded-full bg-[rgba(246, 196, 83,0.08)] blur-[140px]" />
      </div>

      {/* HERO SECTION */}
      <section className="relative z-10 px-[5%] pt-[130px] pb-16">
        <div className="mx-auto max-w-5xl text-left sm:text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className={clsx('section-tag', 'justify-center', 'mb-6')}
          >
            Affiliate Partnership
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-bebas text-[clamp(40px,7vw,85px)] tracking-[1px] leading-[1.05] text-white"
          >
            Become a <span className="text-gold">Reddy Line Partner</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-6 max-w-3xl text-[15px] md:text-[16px] leading-relaxed text-muted font-light"
          >
            Grow with Reddy Line and earn up to 30% commission by joining our official partner program. If you have traffic, an audience, gaming communities, social media pages, or marketing experience, this is your opportunity to build long-term earnings with one of the fastest-growing online gaming platforms.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="mx-auto mt-10 max-w-xl rounded-2xl border border-border bg-card p-6 md:p-8 shadow-[0_15px_40px_rgba(0,0,0,0.4)]"
          >
            <div className="text-gold text-[12px] font-bold uppercase tracking-wider mb-2">Revenue Share</div>
            <h3 className="font-bebas text-[clamp(28px,4vw,40px)] text-white leading-none">
              Earn Up to 30% Commission
            </h3>
            <p className="mt-4 text-[14px] text-muted font-light leading-relaxed">
              With the Reddy Line Partner Program, you can earn up to 30% revenue share from the players you refer to our platform. The more active users you bring, the more earning potential you unlock. Our system is simple, transparent, and designed for long-term growth.
            </p>
          </motion.div>
        </div>
        <PageArtwork
          src="/about-mission-gold-v2.png"
          alt="Reddy Line partner operations workspace"
          label="Build a long-term partnership with Reddy Line"
        />
      </section>

      {/* WHY JOIN */}
      <section className="relative z-10 px-[5%] py-16 border-t border-border bg-bg2">
        <div className="mx-auto max-w-6xl">
          <div className="text-left sm:text-center mb-12">
            <span className="section-tag justify-center">Benefits</span>
            <h2 className="section-title">
              Why Join the Partner Program
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-muted text-[14px] font-light">
              At Reddy Line, we focus on creating a smooth experience not only for players but also for our partners.
            </p>
          </div>

          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b, idx) => (
              <div
                key={idx}
                className="group rounded-2xl border border-border bg-card p-6 hover:border-gold/30 transition-all duration-300 reveal"
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gold/10 text-gold group-hover:scale-110 transition-transform">
                  <b.icon className="h-5 w-5" />
                </div>
                <h3 className="font-syne text-[15px] font-bold text-white mb-2 group-hover:text-gold transition-colors">
                  {b.title}
                </h3>
                <p className="text-[13px] text-muted font-light leading-relaxed">
                  {b.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="relative z-10 px-[5%] py-16 bg-bg">
        <div className="mx-auto max-w-5xl">
          <div className="text-left sm:text-center mb-12">
            <span className="section-tag justify-center">Products</span>
            <h2 className="section-title">
              Promote Popular Gaming Categories
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-muted text-[14px] font-light">
              Reddy Line offers some of the most popular gaming and betting categories in the market, maximizing your conversion opportunities.
            </p>
          </div>

          <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
            {categories.map((cat, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-border bg-card p-6 md:p-8 hover:border-gold/20 transition-all duration-300 reveal"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl">{cat.emoji}</span>
                  <h3 className="font-bebas text-[28px] text-white leading-none">
                    {cat.title}
                  </h3>
                </div>
                <p className="text-[14px] text-muted font-light leading-relaxed mb-4">
                  {cat.desc}
                </p>
                <ul className="grid gap-2.5 grid-cols-1 sm:grid-cols-2">
                  {cat.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-[13px] text-gray-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW TO START */}
      <section className="relative z-10 px-[5%] py-16 border-t border-border bg-bg2">
        <div className="mx-auto max-w-5xl">
          <div className="text-left sm:text-center mb-12">
            <span className="section-tag justify-center">Process</span>
            <h2 className="section-title">
              Simple Process to Start
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-muted text-[14px] font-light">
              Start earning in four simple steps. Setup takes less than five minutes.
            </p>
          </div>

          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 relative">
            {steps.map((s, idx) => (
              <div
                key={idx}
                className="relative rounded-2xl border border-border bg-card p-6 flex flex-col justify-between reveal"
              >
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-[11px] font-bold text-gold uppercase tracking-wider">{s.step}</span>
                    <s.icon className="h-5 w-5 text-muted/65" />
                  </div>
                  <h3 className="font-syne text-[15px] font-bold text-white mb-2">
                    {s.title}
                  </h3>
                  <p className="text-[13px] text-muted font-light leading-relaxed">
                    {s.desc}
                  </p>
                </div>
                {idx < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 -translate-y-1/2 z-20 bg-card border border-border p-1 rounded-full text-gold">
                    <ArrowRight className="h-4 w-4" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY EASY TO PROMOTE */}
      <section className="relative z-10 px-[5%] py-16 bg-bg">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-12 grid-cols-1 lg:grid-cols-12 items-center">
            
            {/* Left: Content */}
            <div className="lg:col-span-6 reveal">
              <span className="section-tag">High Conversions</span>
              <h2 className="section-title">
                Why Reddy Line is <br />Easy to <span className="text-gold">Promote</span>
              </h2>
              <p className="text-[14px] text-muted leading-[1.8] font-light mb-6">
                Reddy Line is designed with a modern interface, smooth mobile layout, and fast gaming performance which helps users stay active. Better retention translates directly to stronger commission payouts.
              </p>
              <div className="grid gap-3 grid-cols-1 sm:grid-cols-2">
                {sellingPoints.map((point, idx) => (
                  <div key={idx} className="flex items-center gap-2.5">
                    <CheckCircle className="h-4 w-4 text-gold shrink-0" />
                    <span className="text-[13px] text-white font-light">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Dashboard Preview Card */}
            <div className="lg:col-span-6 reveal">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
                <div className="flex justify-between items-center mb-6 border-b border-border pb-3">
                  <div className="text-[13px] font-bold text-white font-syne uppercase tracking-wider">Partner Dashboard</div>
                  <span className="text-[10px] text-green font-bold bg-green/10 px-2.5 py-0.5 rounded-full uppercase tracking-wider">Real-Time</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-bg/40 p-4 rounded-xl border border-border/50">
                    <div className="text-[10px] text-muted uppercase tracking-wider font-semibold">Clicks</div>
                    <div className="text-[22px] md:text-[24px] font-bebas text-white mt-1">4,821</div>
                  </div>
                  <div className="bg-bg/40 p-4 rounded-xl border border-border/50">
                    <div className="text-[10px] text-muted uppercase tracking-wider font-semibold">Registrations</div>
                    <div className="text-[22px] md:text-[24px] font-bebas text-white mt-1">1,248</div>
                  </div>
                  <div className="bg-bg/40 p-4 rounded-xl border border-border/50">
                    <div className="text-[10px] text-muted uppercase tracking-wider font-semibold">Active Users</div>
                    <div className="text-[22px] md:text-[24px] font-bebas text-white mt-1">682</div>
                  </div>
                  <div className="bg-bg/40 p-4 rounded-xl border border-border/50">
                    <div className="text-[10px] text-muted uppercase tracking-wider font-semibold">Commission (30%)</div>
                    <div className="text-[22px] md:text-[24px] font-bebas text-gold mt-1">₹1,44,750</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SUPPORT & STABILITY */}
      <section className="relative z-10 px-[5%] py-16 border-t border-border bg-bg2">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-2xl border border-[#D4AF37]/20 bg-[#D4AF37]/5 p-8 reveal">
            <h3 className="font-bebas text-[28px] text-white tracking-wider mb-4">
              Real-Time Tracking & Support
            </h3>
            <p className="text-[14px] text-muted font-light leading-relaxed mb-6">
              Our partner dashboard offers absolute transparency. Monitor commissions, clicks, registrations, and active users live. Our dedicated manager support team is always available to help you configure tracking links and access banners or marketing assets.
            </p>
            <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
              {[
                "Instant tracking updates",
                "Detailed commission reports",
                "Custom campaign parameters",
                "Promotional material access",
                "Direct Telegram Support",
                "Payment status alerts"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5">
                  <ShieldCheck className="h-4 w-4 text-gold shrink-0" />
                  <span className="text-[13px] text-white font-light">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative z-10 px-[5%] py-20 text-center bg-bg">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse,rgba(0,120,229,0.06)_0%,transparent_70%)] pointer-events-none" />

        <div className="relative z-10 max-w-[700px] mx-auto reveal">
          <span className="section-tag justify-center">Join Today</span>
          <h2 className="section-title">
            Build Long-Term Income
          </h2>
          <p className="text-[15px] text-muted leading-[1.8] font-light mb-8">
            The online gaming industry continues growing. Join the Reddy Line Partner Program today, start promoting your unique link, and earn up to 30% commission!
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="#" className="btn btn-gold btn-large">
              Register as Partner <ArrowRight className="ml-1 h-4 w-4 inline" />
            </a>
            <a href="/contact" className="btn btn-ghost btn-large">
              Contact Partner Manager
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

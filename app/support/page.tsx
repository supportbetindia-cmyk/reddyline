"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Headphones,
  Mail,
  MessageCircle,
  Send,
  Globe,
  Clock,
  Sparkles,
  ChevronRight,
  UserCog,
  Wallet,
  ArrowDownToLine,
  ArrowUpFromLine,
  Trophy,
  Dice5,
  ShieldCheck,
  ScrollText,
  LifeBuoy,
} from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";
import FaqSection from "../components/FaqSection";
import { supportFaqs } from "../seo";
import { PageArtwork } from "../components/PageArtwork";

const helpTopics = [
  {
    icon: UserCog,
    title: "Account & Login",
    desc: "Sign-in issues, registration, and account recovery.",
    href: "/contact-us",
  },
  {
    icon: Trophy,
    title: "Online Cricket ID",
    desc: "Get, recover, or manage your Cricket ID.",
    href: "/cricket",
  },
  {
    icon: ArrowDownToLine,
    title: "Deposits",
    desc: "Add funds securely with UPI and bank transfer.",
    href: "/deposit",
  },
  {
    icon: ArrowUpFromLine,
    title: "Withdrawals",
    desc: "Cash out your winnings quickly and safely.",
    href: "/withdrawal",
  },
  {
    icon: Wallet,
    title: "Payment Guide",
    desc: "How deposits and withdrawals work end to end.",
    href: "/deposit-and-withdrawal",
  },
  {
    icon: Dice5,
    title: "Casino & Games",
    desc: "Help with live casino, Aviator, and slots.",
    href: "/casino",
  },
  {
    icon: ScrollText,
    title: "Betting Rules",
    desc: "Market settlement and fair-play standards.",
    href: "/rules",
  },
  {
    icon: ShieldCheck,
    title: "Responsible Gaming",
    desc: "Set limits and play safely with controls.",
    href: "/responsible-gambling",
  },
];

const channels = [
  {
    icon: MessageCircle,
    title: "Live Chat",
    value: "Available in-platform",
    sub: "Instant agent connection",
    href: "#contact",
  },
  {
    icon: Mail,
    title: "Email Support",
    value: "support@1xplay.com",
    sub: "Replies within a few hours",
    href: "mailto:support@1xplay.com",
  },
  {
    icon: Send,
    title: "Telegram & WhatsApp",
    value: "Fast secure messaging",
    sub: "Worldwide coverage",
    href: "#contact",
  },
  {
    icon: Globe,
    title: "Global Assistance",
    value: "Multilingual help",
    sub: "Across regions & time zones",
    href: "#contact",
  },
];

export default function SupportPage() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#030914] text-white">
      <ScrollReveal />

      {/* Scroll progress */}
      <div className="fixed top-[70px] left-0 right-0 h-[2px] z-[998] bg-white/[0.04]">
        <motion.div
          className="h-full bg-gradient-to-r from-[#D4AF37] to-[#F6C453] shadow-[0_0_12px_rgba(246, 196, 83,0.6)]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Ambient background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 10%, transparent 70%)",
            WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 10%, transparent 70%)",
          }}
        />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[820px] h-[460px] bg-[radial-gradient(ellipse,rgba(246, 196, 83,0.12)_0%,transparent_65%)]" />
        <div className="absolute right-[6%] bottom-[12%] w-[420px] h-[420px] rounded-full bg-[rgba(0,120,229,0.08)] blur-[150px]" />
      </div>

      {/* ─────────── Hero ─────────── */}
      <section className="relative z-10 px-[5%] pt-[110px] pb-14">
        <div className="mx-auto max-w-[1400px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative rounded-3xl overflow-hidden border border-white/10 bg-[#060d18]/60 backdrop-blur-xl min-h-[400px] md:min-h-[440px] flex items-end"
          >
            {/* Decorative layers */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/[0.10] via-transparent to-[#F6C453]/[0.06]" />
            <div
              className="absolute inset-0 opacity-[0.4] pointer-events-none"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(246, 196, 83,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(246, 196, 83,0.08) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
                maskImage: "radial-gradient(circle at 75% 30%, black, transparent 70%)",
                WebkitMaskImage: "radial-gradient(circle at 75% 30%, black, transparent 70%)",
              }}
            />
            <div className="absolute top-[18%] right-[16%] w-52 h-52 bg-[#F6C453]/20 rounded-full blur-[90px] pointer-events-none animate-pulse" />

            <div className="relative z-10 w-full p-7 md:p-10 lg:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
                {/* Left: copy */}
                <div className="lg:col-span-7">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-5 rounded-full border border-[#F6C453]/40 bg-[#F6C453]/15 backdrop-blur-md shadow-[0_0_24px_rgba(246, 196, 83,0.2)]"
                  >
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full rounded-full bg-[#1EBF6A] opacity-75 animate-ping" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-[#1EBF6A]" />
                    </span>
                    <span className="text-[10px] font-bold text-[#F6C453] uppercase tracking-[0.25em] font-syne">
                      24/7 Help Centre
                    </span>
                  </motion.div>

                  <motion.h1
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="font-bebas text-[clamp(48px,8vw,92px)] tracking-[2px] leading-[0.9] text-white mb-4 drop-shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
                  >
                    HOW CAN WE
                    <br />
                    <span className="bg-gradient-to-r from-[#D4AF37] via-[#F6C453] to-[#FFF2C6] bg-clip-text text-transparent">
                      HELP YOU?
                    </span>
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-white/70 text-[15px] md:text-[17px] leading-relaxed font-light max-w-xl mb-6"
                  >
                    Browse popular help topics or reach our support team directly. From
                    account access and Cricket ID to deposits, withdrawals, and live
                    betting — we&apos;re here around the clock.
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="flex flex-wrap gap-2"
                  >
                    {[
                      { label: "Browse topics", href: "#topics" },
                      { label: "Live chat", href: "#contact" },
                      { label: "Email us", href: "mailto:support@1xplay.com" },
                    ].map((pill) => (
                      <a
                        key={pill.label}
                        href={pill.href}
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-white/15 bg-white/5 backdrop-blur-md text-[11px] font-bold uppercase tracking-wider text-white/80 hover:text-white hover:border-[#F6C453]/50 hover:bg-[#F6C453]/10 transition-all font-syne"
                      >
                        {pill.label}
                        <ChevronRight className="w-3 h-3 opacity-60" />
                      </a>
                    ))}
                  </motion.div>
                </div>

                {/* Right: help desk glass panel */}
                <motion.div
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.45 }}
                  className="lg:col-span-5"
                >
                  <div className="rounded-2xl border border-white/10 bg-[#0a1220]/70 backdrop-blur-xl p-5 md:p-6 shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
                    <div className="flex items-center gap-3 mb-5 pb-4 border-b border-white/[0.06]">
                      <div className="w-10 h-10 rounded-xl bg-[#F6C453]/15 border border-[#F6C453]/25 flex items-center justify-center">
                        <Headphones className="w-5 h-5 text-[#F6C453]" />
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.2em] text-muted font-syne font-semibold">
                          Support Desk
                        </p>
                        <p className="text-white font-syne font-bold text-sm">
                          Reddy Line Help Centre
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-3 mb-5">
                      {[
                        { label: "Avg Reply", value: "<5m", icon: Clock },
                        { label: "Channels", value: "4", icon: MessageCircle },
                        { label: "Uptime", value: "24/7", icon: Sparkles },
                      ].map((stat) => (
                        <div
                          key={stat.label}
                          className="relative rounded-xl border border-white/[0.06] bg-[#030914]/50 p-3 text-center overflow-hidden group"
                        >
                          <div className="absolute inset-0 bg-gradient-to-b from-[#F6C453]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                          <stat.icon className="w-3.5 h-3.5 text-[#F6C453] mx-auto mb-1.5 relative z-10" />
                          <div className="text-[8px] uppercase tracking-[0.15em] text-muted font-syne relative z-10">
                            {stat.label}
                          </div>
                          <div className="text-xl font-bebas text-white tracking-wider relative z-10">
                            {stat.value}
                          </div>
                        </div>
                      ))}
                    </div>

                    <Link
                      href="/contact-us"
                      className="flex items-center justify-between gap-3 rounded-xl border border-[#F6C453]/25 bg-[#F6C453]/10 px-4 py-3 transition-all hover:bg-[#F6C453]/15 hover:border-[#F6C453]/40 group"
                    >
                      <span className="text-sm font-syne font-semibold text-white">
                        Open a support ticket
                      </span>
                      <ChevronRight className="w-4 h-4 text-[#F6C453] transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
          <PageArtwork
            src="/about-mission-gold-v2.png"
            alt="Reddy Line support team monitoring player services"
            label="24/7 help across accounts, payments, and play"
          />
        </div>
      </section>

      {/* ─────────── Help Topics ─────────── */}
      <section id="topics" className="relative z-10 px-[5%] pb-16 scroll-mt-24">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-10 text-left sm:text-center">
            <span className="section-tag justify-center mb-4">Popular Topics</span>
            <h2 className="section-title">
              Find Answers{" "}
              <span className="bg-gradient-to-r from-[#D4AF37] to-[#F6C453] bg-clip-text text-transparent">
                Fast
              </span>
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {helpTopics.map((topic, i) => (
              <motion.div
                key={topic.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 4) * 0.07 }}
                whileHover={{ y: -6 }}
              >
                <Link
                  href={topic.href}
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.07] bg-[#0a1220]/60 backdrop-blur-xl p-6 transition-colors hover:border-[#F6C453]/35"
                >
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-[radial-gradient(circle,rgba(246, 196, 83,0.10)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="mb-4 w-12 h-12 rounded-xl bg-[#F6C453]/12 border border-[#F6C453]/20 flex items-center justify-center transition-transform group-hover:scale-110">
                    <topic.icon className="w-5 h-5 text-[#F6C453]" />
                  </div>
                  <h3 className="mb-1.5 font-syne text-[13px] font-bold text-white uppercase tracking-[0.5px]">
                    {topic.title}
                  </h3>
                  <p className="text-[13px] text-muted font-light leading-relaxed">{topic.desc}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-[#F6C453] font-syne">
                    Get help
                    <ChevronRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── Contact Channels ─────────── */}
      <section id="contact" className="relative z-10 px-[5%] pb-16 scroll-mt-24">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-10 text-left sm:text-center">
            <span className="section-tag justify-center mb-4">Reach Us</span>
            <h2 className="section-title">
              Talk to a Real{" "}
              <span className="bg-gradient-to-r from-[#D4AF37] to-[#F6C453] bg-clip-text text-transparent">
                Agent
              </span>
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {channels.map((c, i) => (
              <motion.a
                key={c.title}
                href={c.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-[#0a1220]/60 backdrop-blur-xl p-6 transition-colors hover:border-[#F6C453]/35"
              >
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-[radial-gradient(circle,rgba(246, 196, 83,0.10)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="mb-4 w-12 h-12 rounded-xl bg-[#F6C453]/12 border border-[#F6C453]/20 flex items-center justify-center transition-transform group-hover:scale-110">
                  <c.icon className="w-5 h-5 text-[#F6C453]" />
                </div>
                <h3 className="mb-1 font-syne text-[13px] font-bold text-white uppercase tracking-[0.5px]">
                  {c.title}
                </h3>
                <p className="text-sm text-white/90 font-medium break-words">{c.value}</p>
                <p className="mt-1 text-[12px] text-muted font-light">{c.sub}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── FAQ ─────────── */}
      <FaqSection faqs={supportFaqs} />

      {/* ─────────── CTA ─────────── */}
      <section className="relative z-10 px-[5%] pb-28 pt-4 scroll-mt-24">
        <div className="mx-auto max-w-5xl relative overflow-hidden rounded-3xl border border-white/10 bg-[#0a1220]/70 backdrop-blur-xl p-10 md:p-14 text-left sm:text-center">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[640px] h-[320px] bg-[radial-gradient(ellipse,rgba(246, 196, 83,0.10)_0%,transparent_70%)] pointer-events-none" />
          <div className="relative z-10">
            <div className="mx-auto mb-5 w-14 h-14 rounded-2xl bg-[#F6C453]/15 border border-[#F6C453]/25 flex items-center justify-center">
              <LifeBuoy className="w-7 h-7 text-[#F6C453]" />
            </div>
            <h2 className="section-title">Still Need Help?</h2>
            <p className="mx-auto mb-8 max-w-2xl text-[14px] md:text-[15px] text-muted font-light leading-relaxed">
              Can&apos;t find what you&apos;re looking for? Send us a message and our
              support team will get back to you as quickly as possible — day or night.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact-us"
                className="btn btn-gold px-8 py-4 font-syne text-[13px] uppercase font-bold"
              >
                <MessageCircle className="w-4 h-4" /> Contact Support
              </Link>
              <a
                href="mailto:support@1xplay.com"
                className="btn btn-ghost px-8 py-4 font-syne text-[13px] uppercase font-bold"
              >
                <Mail className="w-4 h-4" /> Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

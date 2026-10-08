"use client";

import clsx from "clsx";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Heart,
  ShieldAlert,
  Activity,
  Smile,
  CheckCircle,
  UserX,
  PhoneCall,
  Lock,
} from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";
import { PageArtwork } from "../components/PageArtwork";

export default function ResponsibleGamblingPage() {
  const tips = [
    "Gamble only for entertainment purposes",
    "Never bet more than you can afford to lose",
    "Do not gamble under stress or emotional pressure",
    "Avoid trying to recover losses through additional betting",
    "Keep track of your time and spending carefully",
    "Balance gaming with other activities and responsibilities",
  ];

  const warnings = [
    "Spending more money or time than planned",
    "Gambling to recover losses (chasing losses)",
    "Borrowing money or selling assets to fund gambling",
    "Neglecting personal, family, or professional responsibilities",
    "Feeling stressed, anxious, or frustrated due to gaming",
    "Losing control over the ability to stop playing",
  ];

  const corePillars = [
    {
      icon: Smile,
      title: "Play for Entertainment",
      desc: "Gaming and betting should never be considered a way to solve financial problems or generate guaranteed income. Users should only play for entertainment purposes and should always use funds they can afford to lose.",
    },
    {
      icon: UserX,
      title: "Underage Gambling Policy",
      desc: "Reddy Line strictly prohibits underage gambling. Users must meet the legal age requirement according to their local laws and regulations before creating an account or using our services. We reserve the right to request verification and suspend accounts.",
    },
    {
      icon: Activity,
      title: "Self Control & Management",
      desc: "We encourage users to maintain control over their gaming activity. Players who feel they need a break from gambling may choose to limit their activity, manage deposits carefully, set personal limits, or temporarily stop using the platform.",
    },
    {
      icon: Lock,
      title: "Security & User Protection",
      desc: "We use secure systems and modern technologies to provide a safe gaming environment. We continuously monitor platform activity to support fair gaming practices and improve user protection, with our support team available to assist.",
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-bg text-white">
      <ScrollReveal />

      {/* Background Glows */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-10 left-10 h-80 w-80 rounded-full bg-gold-glow blur-[120px]" />
        <div className="absolute right-10 bottom-10 h-96 w-96 rounded-full bg-[rgba(246, 196, 83,0.08)] blur-[140px]" />
      </div>

      {/* HERO SECTION */}
      <section className="relative z-10 px-6 pt-36 pb-16">
        <div className="mx-auto max-w-5xl text-left sm:text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={clsx('section-tag', 'justify-center', 'mb-6')}
          >
            Player Safety First
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-bebas text-[clamp(44px,7vw,85px)] tracking-[1px] leading-[1.05] text-white"
          >
            Responsible <span className="text-gold">Gambling</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-6 max-w-3xl text-[16px] leading-relaxed text-muted font-light"
          >
         Learn how to enjoy online gaming responsibly, manage your activity, and access support when needed.

          </motion.p>
        </div>
        <PageArtwork
          src="/about-mission-gold-v2.png"
          alt="Responsible gaming monitoring and player protection"
          label="Tools and support for safer play"
        />
      </section>

      {/* CORE PILLARS */}
      <section className="relative z-10 px-6 py-12 border-t border-border bg-bg2">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {corePillars.map((p, idx) => (
              <div
                key={idx}
                className="group rounded-2xl border border-border bg-card p-6 hover:border-gold/30 transition-all duration-300 reveal"
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gold/10 text-gold group-hover:scale-110 transition-transform">
                  <p.icon className="h-5 w-5" />
                </div>
                <h3 className="font-syne text-[15px] font-bold text-white mb-3 group-hover:text-gold transition-colors">
                  {p.title}
                </h3>
                <p className="text-[13px] text-muted font-light leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WARNING SIGNS & TIPS */}
      <section className="relative z-10 px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-10 md:grid-cols-2">
            
            {/* Warning Signs */}
            <div className="bg-card border border-border rounded-2xl p-8 reveal">
              <div className="flex items-center gap-3 mb-6">
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-red/10 text-red">
                  <ShieldAlert className="h-5 w-5" />
                </div>
                <h3 className="font-syne text-[18px] font-bold text-white">
                  Signs of Problem Gambling
                </h3>
              </div>
              <p className="text-[14px] text-muted font-light leading-relaxed mb-6">
                While most users enjoy gaming responsibly, some individuals may develop unhealthy gambling habits. It is important to recognize warning signs early. Look out for:
              </p>
              <ul className="space-y-3">
                {warnings.map((w, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-[13px] text-muted font-light leading-relaxed">
                    <span className="h-1.5 w-1.5 rounded-full bg-red mt-2 shrink-0" />
                    <span>{w}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 p-4 rounded-xl bg-red/5 border border-red/10 text-[13px] text-muted leading-relaxed font-light">
                <span className="text-red font-semibold">Important:</span> If you feel gambling is negatively affecting your life, we strongly recommend taking a break and seeking professional support immediately.
              </div>
            </div>

            {/* Practical Tips */}
            <div className="bg-card border border-border rounded-2xl p-8 reveal">
              <div className="flex items-center gap-3 mb-6">
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gold/10 text-gold">
                  <Heart className="h-5 w-5" />
                </div>
                <h3 className="font-syne text-[18px] font-bold text-white">
                  Tips for Responsible Gambling
                </h3>
              </div>
              <p className="text-[14px] text-muted font-light leading-relaxed mb-6">
                To maintain a safe, healthy, and enjoyable online gaming and betting experience, we recommend following these simple guidelines:
              </p>
              <ul className="space-y-3.5">
                {tips.map((t, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-[13px] text-white font-light leading-relaxed">
                    <CheckCircle className="h-4.5 w-4.5 text-gold shrink-0 mt-0.5" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* SECURITY & HELP */}
      <section className="relative z-10 px-6 py-16 border-t border-border bg-bg2">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-12 md:grid-cols-12 items-center">
            {/* Left: Content */}
            <div className="md:col-span-7 reveal">
              <span className="section-tag">Player Assistance</span>
              <h2 className="section-title">
                Support & <span className="text-gold">Assistance</span>
              </h2>
              <p className="text-[14px] text-muted leading-[1.8] font-light mb-6">
                If you believe gambling is becoming a problem for you or someone you know, we encourage seeking professional advice and support. Taking action early can help maintain a healthy relationship with online gaming.
              </p>
              <p className="text-[14px] text-muted leading-[1.8] font-light mb-6">
                At Reddy Line, we are committed to promoting responsible gaming awareness, maintaining user protection, and encouraging balanced, controlled play at all times.
              </p>
            </div>

            {/* Right: Support Card */}
            <div className="md:col-span-5 reveal">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
                <div className="flex items-center gap-2 mb-4 text-gold">
                  <PhoneCall className="h-5 w-5" />
                  <span className="text-[12px] uppercase font-bold tracking-wider font-syne">Professional Help</span>
                </div>
                <h4 className="text-[15px] font-bold text-white mb-3">Independent Counseling</h4>
                <p className="text-[12px] text-muted leading-relaxed font-light mb-4">
                  For free, confidential assistance and counseling regarding gambling behavior, we advise contacting global support networks:
                </p>
                <div className="space-y-3.5">
                  <div className="border-t border-border pt-3">
                    <div className="text-[12px] font-bold text-white">Gamblers Anonymous</div>
                    <div className="text-[11px] text-muted mt-0.5">Support groups and counseling services globally.</div>
                  </div>
                  <div className="border-t border-border pt-3">
                    <div className="text-[12px] font-bold text-white">Gambling Therapy Helpline</div>
                    <div className="text-[11px] text-muted mt-0.5">Free online support, resources, and advice.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMMITMENT FOOTER */}
      <section className="relative z-10 px-6 py-20 text-center relative overflow-hidden bg-bg">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse,rgba(0,120,229,0.06)_0%,transparent_70%)] pointer-events-none" />

        <div className="relative z-10 max-w-[750px] mx-auto reveal">
          <span className="section-tag justify-center">Our Commitment</span>
          <h2 className="section-title">
            Commitment to <span className="text-gold">Responsible Gaming</span>
          </h2>
          <p className="text-[15px] text-muted leading-[1.8] font-light mb-8">
            Reddy Line continues working to improve player protection, responsible gaming awareness, and platform security. Our mission is to provide a trusted entertainment environment where users can enjoy gaming responsibly and safely. By using Reddy Line, users agree to gamble responsibly and use the platform in a balanced, controlled manner.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/contact" className="btn btn-gold btn-large">
              Need Assistance?

            </Link>

          </div>
        </div>
      </section>
    </div>
  );
}

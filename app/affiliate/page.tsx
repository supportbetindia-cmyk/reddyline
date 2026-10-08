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
} from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";
import { PageArtwork } from "../components/PageArtwork";

export default function AffiliatePage() {
  const benefits = [
    {
      icon: Percent,
      title: "3% Commission",
      desc: "Earn a solid 3% commission on every deposit made by your referred users.",
    },
    {
      icon: Percent, // Simple placeholder for Zap
      title: "Simple & Transparent",
      desc: "No hidden rules. A direct, understandable commission system built on performance.",
    },
    {
      icon: BarChart2,
      title: "Real-Time Tracking",
      desc: "Monitor user registrations, deposits, and commission earnings live on your dashboard.",
    },
    {
      icon: DollarSign,
      title: "Fast & Secure Payouts",
      desc: "Enjoy regular, prompt payments processed directly to your preferred account.",
    },
    {
      icon: Smartphone,
      title: "Mobile Friendly",
      desc: "Access reports and manage campaigns on the go with a fully responsive partner panel.",
    },
    {
      icon: Headphones,
      title: "Dedicated Support",
      desc: "Get individual support for setup, tracking, marketing materials, and optimization.",
    },
    {
      icon: Link2,
      title: "Easy Referral Process",
      desc: "Get your link, share it on any platform, and let the system track your referrals.",
    },
    {
      icon: TrendingUp,
      title: "Long-Term Earnings",
      desc: "Build passive income through consistent deposit activity of your active users.",
    },
  ];

  const steps = [
    {
      step: "Step 1",
      icon: UserPlus,
      title: "Register as an Affiliate",
      desc: "Create your affiliate account through the Reddy Line partner system in just a few minutes.",
    },
    {
      step: "Step 2",
      icon: Link2,
      title: "Get Your Referral Link",
      desc: "Receive your unique referral link and instant affiliate panel credentials.",
    },
    {
      step: "Step 3",
      icon: Megaphone,
      title: "Promote Reddy Line",
      desc: "Share your link on websites, blogs, Telegram, WhatsApp, YouTube, Instagram, or social media.",
    },
    {
      step: "Step 4",
      icon: Percent,
      title: "Start Earning",
      desc: "Earn 3% commission every single time your referred users make a successful deposit.",
    },
  ];

  const metrics = [
    "User Registrations",
    "Deposits",
    "Earnings",
    "Referral Activity",
    "Performance Reports",
  ];

  const valueProps = [
    {
      title: "Trusted Platform",
      desc: "We continuously improve platform performance, user experience, and support systems to maintain strong user engagement.",
    },
    {
      title: "Simple Commission Structure",
      desc: "Our affiliate model is easy to understand, with direct earnings based on referred user deposits.",
    },
    {
      title: "Fast and Secure Payments",
      desc: "We focus on smooth payout processing and reliable payment systems for affiliate partners.",
    },
    {
      title: "Long Term Growth",
      desc: "The affiliate program is designed for continuous earning opportunities through active user engagement.",
    },
  ];

  const targetAudience = [
    "Digital Marketers",
    "Website Owners",
    "Bloggers",
    "Influencers",
    "Social Media Creators",
    "SEO Marketers",
    "Online Communities",
    "Traffic Managers",
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
      <section className="relative z-10 px-6 pt-36 pb-16">
        <div className="mx-auto max-w-5xl text-left sm:text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={clsx('section-tag', 'justify-center', 'mb-6')}
          >
            Partnership Opportunity
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-bebas text-[clamp(44px,7vw,85px)] tracking-[1px] leading-[1.05] text-white"
          >
            Reddy Line <span className="text-gold">Affiliate Program</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-6 max-w-3xl text-[16px] leading-relaxed text-muted font-light"
          >
            Welcome to the Reddy Line Affiliate Program — a simple and rewarding partnership opportunity designed for marketers, influencers, website owners, and digital creators who want to earn with a growing online platform.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="mx-auto mt-10 max-w-xl rounded-2xl border border-border bg-card p-6 md:p-8 shadow-[0_15px_40px_rgba(0,0,0,0.4)]"
          >
            <div className="text-gold text-[12px] font-bold uppercase tracking-wider mb-2">Commission Offer</div>
            <h3 className="font-bebas text-[clamp(28px,4vw,40px)] text-white leading-none">
              Earn 3% Commission <br />on Every Deposit
            </h3>
            <p className="mt-4 text-[14px] text-muted font-light leading-relaxed">
              With the Reddy Line Affiliate Program, partners can earn 3% commission on every successful deposit made by referred users. The more active users you bring to the platform, the higher your earning potential becomes.
            </p>
          </motion.div>
        </div>
        <PageArtwork
          src="/about-mission-gold-v2.png"
          alt="Reddy Line partnership performance workspace"
          label="Grow with the Reddy Line affiliate network"
        />
      </section>

      {/* PROGRAM BENEFITS */}
      <section className="relative z-10 px-6 py-12 border-t border-border bg-bg2">
        <div className="mx-auto max-w-6xl">
          <div className="text-left sm:text-center mb-16">
            <span className="section-tag justify-center">Benefits</span>
            <h2 className="section-title">
              Affiliate Program Benefits
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-muted text-[14px] font-light">
              Reddy Line focuses on making the affiliate experience smooth, profitable, and easy to manage.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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

      {/* HOW IT WORKS */}
      <section className="relative z-10 px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="text-left sm:text-center mb-16">
            <span className="section-tag justify-center">Onboarding</span>
            <h2 className="section-title">
              How the Program Works
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-muted text-[14px] font-light">
              Joining the affiliate program is quick and simple. Start in four easy steps.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-4 relative">
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
                  <div className="hidden md:block absolute top-1/2 -right-3 -translate-y-1/2 z-20 bg-card border border-border p-1 rounded-full text-gold">
                    <ArrowRight className="h-4 w-4" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRACKING & REPORTING */}
      <section className="relative z-10 px-6 py-16 border-t border-b border-border bg-bg2">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-12 md:grid-cols-12 items-center">
            {/* Left: Content */}
            <div className="md:col-span-6 reveal">
              <span className="section-tag">Analytics</span>
              <h2 className="section-title">
                Easy Tracking <br />and <span className="text-gold">Reporting</span>
              </h2>
              <p className="text-[14px] text-muted leading-[1.8] font-light mb-6">
                The Reddy Line affiliate dashboard helps partners monitor their performance in real time. Our reporting system is designed to provide complete transparency and help affiliates manage their campaigns more effectively.
              </p>
              <div className="flex flex-wrap gap-2.5">
                {metrics.map((m, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border bg-card text-[12px] text-white font-medium"
                  >
                    <CheckCircle className="h-3.5 w-3.5 text-gold" />
                    {m}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: Mock Panel Card */}
            <div className="md:col-span-6 reveal">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
                <div className="flex justify-between items-center mb-6 border-b border-border pb-3">
                  <div className="text-[13px] font-bold text-white font-syne uppercase tracking-wider">Affiliate Dashboard</div>
                  <span className="text-[10px] text-green font-bold bg-green/10 px-2 py-0.5 rounded-full uppercase tracking-wider">Live tracking</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-bg/40 p-4 rounded-xl border border-border/50">
                    <div className="text-[11px] text-muted uppercase tracking-wider font-semibold">Total Referrals</div>
                    <div className="text-[24px] font-bebas text-white mt-1">1,248</div>
                  </div>
                  <div className="bg-bg/40 p-4 rounded-xl border border-border/50">
                    <div className="text-[11px] text-muted uppercase tracking-wider font-semibold">Depositors</div>
                    <div className="text-[24px] font-bebas text-white mt-1">682</div>
                  </div>
                  <div className="bg-bg/40 p-4 rounded-xl border border-border/50">
                    <div className="text-[11px] text-muted uppercase tracking-wider font-semibold">Total Deposits</div>
                    <div className="text-[24px] font-bebas text-white mt-1">₹4,82,500</div>
                  </div>
                  <div className="bg-bg/40 p-4 rounded-xl border border-border/50">
                    <div className="text-[11px] text-muted uppercase tracking-wider font-semibold">Commission (3%)</div>
                    <div className="text-[24px] font-bebas text-gold mt-1">₹14,475</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE REDDY LINE & SUPPORT */}
      <section className="relative z-10 px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="text-left sm:text-center mb-16">
            <span className="section-tag justify-center">Value Proposition</span>
            <h2 className="section-title">
              Why Choose Reddy Line Affiliate Program
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-muted text-[14px] font-light">
              Reddy Line focuses on providing a reliable, secure, and modern affiliate experience for all partners.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {valueProps.map((vp, idx) => (
              <div key={idx} className="bg-card border border-border rounded-2xl p-8 reveal">
                <h3 className="font-syne text-[16px] font-bold text-white mb-3">
                  {vp.title}
                </h3>
                <p className="text-[14px] text-muted font-light leading-relaxed">
                  {vp.desc}
                </p>
              </div>
            ))}
          </div>

          {/* DEDICATED SUPPORT BLOCK */}
          <div className="mt-12 bg-card border border-border rounded-2xl p-8 reveal relative overflow-hidden group hover:border-gold/30 transition-all duration-300">
            <div className="absolute -bottom-10 -right-10 w-[200px] h-[200px] bg-[radial-gradient(circle,rgba(0,120,229,0.06)_0%,transparent_70%)] pointer-events-none" />
            <h3 className="font-bebas text-[28px] text-white tracking-wider mb-4">
              Dedicated Affiliate Support
            </h3>
            <p className="text-[14px] text-muted font-light leading-relaxed mb-6">
              Our affiliate support team works closely with partners to help improve performance, resolve issues, and maximize earning opportunities. We are available to assist you with:
            </p>
            <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
              {[
                "Account Setup & Configuration",
                "Referral Tracking Queries",
                "Technical Support Integration",
                "Promotional Banners & Guidance",
                "Custom Campaign Tracking",
                "General Affiliate Assistance",
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

      {/* WHO CAN JOIN */}
      <section className="relative z-10 px-6 py-16 border-t border-border bg-bg2">
        <div className="mx-auto max-w-5xl text-left sm:text-center">
          <span className="section-tag justify-center">Target Partners</span>
          <h2 className="section-title">
            Who Can Join
          </h2>
          <p className="mx-auto max-w-2xl text-[14px] text-muted font-light leading-relaxed mb-10">
            Anyone with digital traffic or an active audience can apply to become a Reddy Line affiliate partner. The program is perfectly suitable for:
          </p>

          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {targetAudience.map((audience, idx) => (
              <span
                key={idx}
                className="px-5 py-3 rounded-xl border border-border bg-card text-[14px] text-white font-medium hover:border-gold/40 hover:bg-card/85 transition-all cursor-default"
              >
                {audience}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative z-10 px-6 py-20 text-center relative overflow-hidden bg-bg">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse,rgba(0,120,229,0.06)_0%,transparent_70%)] pointer-events-none" />

        <div className="relative z-10 max-w-[700px] mx-auto reveal">
          <span className="section-tag justify-center">Get Started</span>
          <h2 className="section-title">
            Start Earning with <span className="text-gold">Reddy Line</span>
          </h2>
          <p className="text-[15px] text-muted leading-[1.8] font-light mb-8">
            If you are looking for a simple affiliate program with transparent earnings and long term potential, the Reddy Line Affiliate Program is the perfect opportunity. Join today to earn 3% commission on every deposit!
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="#" className="btn btn-gold btn-large">
              Register as Partner <ArrowRight className="ml-1 h-4 w-4 inline" />
            </a>
            <a href="/contact" className="btn btn-ghost btn-large">
              Contact Affiliate Manager
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

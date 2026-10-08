"use client";

import clsx from "clsx";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  ChevronRight,
  FileText,
  Gavel,
  Scale,
  Search,
  Shield,
  X,
} from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";
import {
  basicTerms,
  cricketRules,
  getSectionRuleCount,
  sectionsMeta,
  sportRules,
  totalRuleCount,
} from "./rules-data";

function extractRuleNumber(text: string) {
  const match = text.match(/^([\d.]+)/);
  return match?.[1] ?? "";
}

function extractRuleBody(text: string) {
  const colonIdx = text.indexOf(":");
  if (colonIdx === -1) return text;
  return text.slice(colonIdx + 1).trim();
}

function extractRuleLabel(text: string) {
  const colonIdx = text.indexOf(":");
  if (colonIdx === -1) return text.slice(0, 60);
  return text.slice(0, colonIdx).trim();
}

export default function SportsRulesPage() {
  const [activeSection, setActiveSection] = useState("basic-terms");
  const [searchQuery, setSearchQuery] = useState("");
  const [scrollProgress, setScrollProgress] = useState(0);

  const normalizedQuery = searchQuery.trim().toLowerCase();

  const filteredSectionIds = useMemo(() => {
    if (!normalizedQuery) return null;

    return sectionsMeta
      .filter((sec) => {
        if (sec.id === "basic-terms") {
          return basicTerms.some(
            (t) =>
              t.title.toLowerCase().includes(normalizedQuery) ||
              t.desc.toLowerCase().includes(normalizedQuery)
          );
        }
        if (sec.id === "cricket") {
          return cricketRules.some(
            (r) =>
              r.title.toLowerCase().includes(normalizedQuery) ||
              r.desc.toLowerCase().includes(normalizedQuery)
          );
        }
        const sport = sportRules[sec.id];
        return sport?.rules.some((r) => r.toLowerCase().includes(normalizedQuery));
      })
      .map((s) => s.id);
  }, [normalizedQuery]);

  const visibleSections = useMemo(() => {
    if (!filteredSectionIds) return sectionsMeta;
    return sectionsMeta.filter((s) => filteredSectionIds.includes(s.id));
  }, [filteredSectionIds]);

  const filterBasicTerms = useCallback(
    (terms: typeof basicTerms) => {
      if (!normalizedQuery) return terms;
      return terms.filter(
        (t) =>
          t.title.toLowerCase().includes(normalizedQuery) ||
          t.desc.toLowerCase().includes(normalizedQuery)
      );
    },
    [normalizedQuery]
  );

  const filterStringRules = useCallback(
    (rules: string[]) => {
      if (!normalizedQuery) return rules;
      return rules.filter((r) => r.toLowerCase().includes(normalizedQuery));
    },
    [normalizedQuery]
  );

  const filterStructuredRules = useCallback(
    (rules: typeof cricketRules) => {
      if (!normalizedQuery) return rules;
      return rules.filter(
        (r) =>
          r.title.toLowerCase().includes(normalizedQuery) ||
          r.desc.toLowerCase().includes(normalizedQuery)
      );
    },
    [normalizedQuery]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-15% 0px -60% 0px", threshold: 0.05 }
    );

    sectionsMeta.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [visibleSections]);

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

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 96;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
      setActiveSection(id);
    }
  };

  return (
    <>
      <ScrollReveal />

      {/* Scroll progress */}
      <div className="fixed top-[70px] left-0 right-0 h-[2px] z-[998] bg-white/[0.04]">
        <motion.div
          className="h-full bg-gradient-to-r from-[#D4AF37] to-[#F6C453] shadow-[0_0_12px_rgba(246, 196, 83,0.6)]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="relative min-h-screen bg-[#030914] overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 15%, transparent 70%)",
            WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 15%, transparent 70%)",
          }}
        />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-[radial-gradient(ellipse,rgba(246, 196, 83,0.1)_0%,transparent_65%)] pointer-events-none" />

        {/* Hero */}
        <section className="relative z-10 pt-[90px] pb-0 px-[5%]">
          <div className="max-w-[1400px] mx-auto">
            {/* Cinematic hero banner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative rounded-3xl overflow-hidden mb-10 min-h-[420px] md:min-h-[480px] flex items-end"
            >
              {/* Background image */}
              <img
                src="/reddy-sports-v2.png"
                alt=""
                aria-hidden
                className="absolute inset-0 w-full h-full object-cover object-center scale-105"
              />

              {/* Overlays */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#030914] via-[#030914]/85 to-[#030914]/30" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030914] via-transparent to-[#030914]/40" />
              <div className="absolute inset-0 bg-[#D4AF37]/[0.07] mix-blend-screen" />

              {/* Grid texture */}
              <div
                className="absolute inset-0 opacity-30 pointer-events-none"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(246, 196, 83,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(246, 196, 83,0.08) 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />

              {/* Floating accent orb */}
              <div className="absolute top-1/4 right-[15%] w-48 h-48 bg-[#F6C453]/20 rounded-full blur-[80px] pointer-events-none animate-pulse" />

              {/* Hero content */}
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
                      <Scale className="w-3.5 h-3.5 text-[#F6C453]" />
                      <span className="text-[10px] font-bold text-[#F6C453] uppercase tracking-[0.25em] font-syne">
                        Official Sportsbook
                      </span>
                    </motion.div>

                    <motion.h1
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="font-bebas text-[clamp(52px,9vw,100px)] tracking-[3px] leading-[0.88] text-white mb-4 drop-shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
                    >
                      SPORTS
                      <br />
                      BETTING{" "}
                      <span className="bg-gradient-to-r from-[#D4AF37] via-[#F6C453] to-[#FFF2C6] bg-clip-text text-transparent">
                        RULES
                      </span>
                    </motion.h1>

                    <motion.p
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="text-white/70 text-[15px] md:text-[17px] leading-relaxed font-light max-w-lg mb-6"
                    >
                      Transparent settlement policies for every sport — from cricket and soccer to tennis and beyond. Know exactly how your wagers are settled.
                    </motion.p>

                    {/* Quick jump pills */}
                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="flex flex-wrap gap-2"
                    >
                      {[
                        { id: "basic-terms", label: "Basic Terms" },
                        { id: "cricket", label: "Cricket" },
                        { id: "soccer", label: "Soccer" },
                        { id: "tennis", label: "Tennis" },
                      ].map((pill) => (
                        <button
                          key={pill.id}
                          onClick={() => handleScrollTo(pill.id)}
                          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-white/15 bg-white/5 backdrop-blur-md text-[11px] font-bold uppercase tracking-wider text-white/80 hover:text-white hover:border-[#F6C453]/50 hover:bg-[#F6C453]/10 transition-all cursor-pointer font-syne"
                        >
                          {pill.label}
                          <ChevronRight className="w-3 h-3 opacity-60" />
                        </button>
                      ))}
                    </motion.div>
                  </div>

                  {/* Right: stats glass panel */}
                  <motion.div
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.45 }}
                    className="lg:col-span-5"
                  >
                    <div className="rounded-2xl border border-white/10 bg-[#0a1220]/70 backdrop-blur-xl p-5 md:p-6 shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
                      <div className="flex items-center gap-3 mb-5 pb-4 border-b border-white/[0.06]">
                        <div className="w-10 h-10 rounded-xl bg-[#F6C453]/15 border border-[#F6C453]/25 flex items-center justify-center">
                          <Gavel className="w-5 h-5 text-[#F6C453]" />
                        </div>
                        <div>
                          <p className="text-[10px] uppercase tracking-[0.2em] text-muted font-syne font-semibold">
                            Rule Handbook
                          </p>
                          <p className="text-white font-syne font-bold text-sm">Reddy Line Sportsbook</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-3 mb-5">
                        {[
                          { label: "Sports", value: "18+", icon: Shield },
                          { label: "Sections", value: sectionsMeta.length, icon: BookOpen },
                          { label: "Rules", value: totalRuleCount, icon: FileText },
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

                      {/* Search inside hero panel */}
                      <div className="relative">
                        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted pointer-events-none" />
                        <input
                          type="text"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          placeholder="Search all rules..."
                          className="w-full pl-10 pr-10 py-3 rounded-xl border border-white/[0.08] bg-[#030914]/60 text-white text-sm placeholder:text-muted/50 focus:outline-none focus:border-[#F6C453]/40 focus:shadow-[0_0_20px_rgba(246, 196, 83,0.1)] transition-all"
                        />
                        {searchQuery && (
                          <button
                            onClick={() => setSearchQuery("")}
                            className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 rounded-md text-muted hover:text-white cursor-pointer"
                            aria-label="Clear search"
                          >
                            <X className="w-3.5 h-3.5" />
                          </button>
                        )}
                      </div>

                      {normalizedQuery && (
                        <p className="mt-2 text-[11px] text-[#F6C453] font-semibold">
                          {visibleSections.length} section{visibleSections.length !== 1 ? "s" : ""} matched
                        </p>
                      )}
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Bottom edge fade into page */}
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#030914] to-transparent pointer-events-none" />
            </motion.div>
          </div>
        </section>

        {/* Mobile category chips */}
        <div className="lg:hidden sticky top-[72px] z-[50] px-[5%] py-3 bg-[#030914]/90 backdrop-blur-xl border-b border-white/[0.04]">
          <div className="flex gap-2 overflow-x-auto scrollbar-none pb-1">
            {visibleSections.map((sec) => {
              const Icon = sec.icon;
              const isActive = activeSection === sec.id;
              return (
                <button
                  key={sec.id}
                  onClick={() => handleScrollTo(sec.id)}
                  className={clsx(
                    "shrink-0 flex items-center gap-1.5 px-3 py-2 rounded-full text-[11px] font-bold uppercase tracking-wider font-syne transition-all cursor-pointer border",
                    isActive
                      ? "bg-[#F6C453] border-[#F6C453] text-white"
                      : "bg-white/5 border-white/10 text-muted"
                  )}
                >
                  <Icon className="w-3 h-3" />
                  {sec.navTitle.replace(/^\d+\.\s*/, "").replace(/^\d+\.\d+\s*/, "")}
                </button>
              );
            })}
          </div>
        </div>

        {/* Main content */}
        <section className="relative z-10 pb-28 px-[5%]">
          <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Sidebar */}
            <aside className="hidden lg:block lg:col-span-4 sticky top-[100px] max-h-[calc(100vh-120px)]">
              <div className="rounded-2xl border border-white/[0.06] bg-[#0a1220]/60 backdrop-blur-xl overflow-hidden flex flex-col max-h-[calc(100vh-120px)]">
                <div className="px-5 py-4 border-b border-white/[0.06]">
                  <h4 className="font-syne text-[11px] font-bold text-white uppercase tracking-[0.2em]">
                    Rule Index
                  </h4>
                  <p className="text-[11px] text-muted mt-1">Jump to any sport or section</p>
                </div>

                <nav className="flex-1 overflow-y-auto p-3 space-y-1 scrollbar-thin">
                  {visibleSections.map((sec) => {
                    const Icon = sec.icon;
                    const isActive = activeSection === sec.id;
                    const count = getSectionRuleCount(sec.id);

                    return (
                      <button
                        key={sec.id}
                        onClick={() => handleScrollTo(sec.id)}
                        className={clsx(
                          "relative w-full flex items-center gap-3 text-left py-2.5 px-3 rounded-xl transition-all cursor-pointer group",
                          isActive ? "text-white" : "text-muted hover:text-white/90"
                        )}
                      >
                        {isActive && (
                          <motion.div
                            layoutId="rules-nav-pill"
                            className="absolute inset-0 rounded-xl border border-[#F6C453]/30 bg-gradient-to-r from-[#D4AF37]/15 to-[#F6C453]/10"
                            transition={{ type: "spring", stiffness: 400, damping: 32 }}
                          />
                        )}
                        <span
                          className="relative z-10 w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border border-white/[0.06]"
                          style={{ color: sec.accent, backgroundColor: `${sec.accent}15` }}
                        >
                          <Icon className="w-3.5 h-3.5" />
                        </span>
                        <span className="relative z-10 flex-1 min-w-0">
                          <span className="block text-[12px] font-semibold truncate">{sec.navTitle}</span>
                          <span className="block text-[10px] text-muted/70 mt-0.5">{count} rules</span>
                        </span>
                        <ChevronRight
                          className={clsx(
                            "relative z-10 w-3.5 h-3.5 shrink-0 transition-transform",
                            isActive ? "text-[#F6C453] translate-x-0.5" : "opacity-0 group-hover:opacity-50"
                          )}
                        />
                      </button>
                    );
                  })}
                </nav>
              </div>
            </aside>

            {/* Content */}
            <div className="lg:col-span-8 flex flex-col gap-8">
              {visibleSections.length === 0 ? (
                <div className="rounded-2xl border border-white/[0.06] bg-[#0a1220]/40 p-16 text-center">
                  <Search className="w-10 h-10 text-muted mx-auto mb-4 opacity-40" />
                  <h3 className="text-white font-syne font-bold text-lg mb-2">No rules found</h3>
                  <p className="text-muted text-sm">Try a different search term or clear the filter.</p>
                </div>
              ) : (
                visibleSections.map((sec) => {
                  const Icon = sec.icon;

                  if (sec.id === "basic-terms") {
                    const terms = filterBasicTerms(basicTerms);
                    if (terms.length === 0) return null;

                    return (
                      <article
                        key={sec.id}
                        id={sec.id}
                        className="reveal relative rounded-2xl overflow-hidden scroll-mt-28"
                      >
                        <div className="absolute -inset-px bg-gradient-to-br from-[#F6C453]/40 via-[#D4AF37]/20 to-transparent rounded-2xl opacity-50" />
                        <div className="relative rounded-2xl border border-white/[0.06] bg-[#0a1220]/70 backdrop-blur-xl p-7 md:p-9">
                          <SectionHeader
                            icon={Icon}
                            accent={sec.accent}
                            title="1. Basic Terms"
                            subtitle="Core definitions for every wager on Reddy Line"
                            count={terms.length}
                          />
                          <div className="grid gap-3">
                            {terms.map((term, i) => (
                              <div
                                key={term.title}
                                className="group relative rounded-xl border border-white/[0.05] bg-[#030914]/50 p-5 hover:border-[#F6C453]/20 transition-colors"
                              >
                                <div className="flex items-start gap-4">
                                  <span className="shrink-0 w-8 h-8 rounded-lg bg-[#F6C453]/10 border border-[#F6C453]/20 flex items-center justify-center text-[11px] font-black text-[#F6C453] font-syne">
                                    {String(i + 1).padStart(2, "0")}
                                  </span>
                                  <div>
                                    <h4 className="text-white font-syne font-bold text-[14px] mb-1.5">
                                      {term.title}
                                    </h4>
                                    <p className="text-muted text-[13px] leading-[1.75] font-light">{term.desc}</p>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </article>
                    );
                  }

                  if (sec.id === "cricket") {
                    const rules = filterStructuredRules(cricketRules);
                    if (rules.length === 0) return null;

                    return (
                      <article
                        key={sec.id}
                        id={sec.id}
                        className="reveal relative rounded-2xl overflow-hidden scroll-mt-28"
                      >
                        <div
                          className="absolute -inset-px rounded-2xl opacity-60"
                          style={{ background: `linear-gradient(135deg, ${sec.accent}55, transparent 60%)` }}
                        />
                        <div className="relative rounded-2xl border border-white/[0.06] bg-[#0a1220]/70 backdrop-blur-xl p-7 md:p-9">
                          <SectionHeader
                            icon={Icon}
                            accent={sec.accent}
                            title="2.18 Cricket Betting Rules"
                            subtitle="IPL, international, Test & limited-overs settlement"
                            count={rules.length}
                            featured
                          />
                          <div className="grid gap-3">
                            {rules.map((rule) => (
                              <StructuredRuleCard key={rule.title} rule={rule} accent={sec.accent} />
                            ))}
                          </div>
                        </div>
                      </article>
                    );
                  }

                  const sport = sportRules[sec.id];
                  if (!sport) return null;
                  const rules = filterStringRules(sport.rules);
                  if (rules.length === 0) return null;

                  return (
                    <article
                      key={sec.id}
                      id={sec.id}
                      className="reveal relative rounded-2xl overflow-hidden scroll-mt-28"
                    >
                      <div
                        className="absolute -inset-px rounded-2xl opacity-40"
                        style={{ background: `linear-gradient(135deg, ${sec.accent}44, transparent 55%)` }}
                      />
                      <div className="relative rounded-2xl border border-white/[0.06] bg-[#0a1220]/70 backdrop-blur-xl p-7 md:p-9">
                        <SectionHeader
                          icon={Icon}
                          accent={sec.accent}
                          title={sport.title}
                          subtitle={`${rules.length} settlement policies`}
                          count={rules.length}
                        />
                        <div className="grid gap-2.5">
                          {rules.map((rule, i) => (
                            <StringRuleCard
                              key={`${sec.id}-${i}`}
                              rule={rule}
                              index={i + 1}
                              accent={sec.accent}
                            />
                          ))}
                        </div>
                      </div>
                    </article>
                  );
                })
              )}

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="reveal relative rounded-2xl overflow-hidden mt-4"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/15 via-[#F6C453]/10 to-transparent" />
                <div className="relative border border-[#F6C453]/20 rounded-2xl px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#F6C453] mb-2 font-syne">
                      Need clarification?
                    </p>
                    <h3 className="font-bebas text-3xl md:text-4xl text-white tracking-wide">
                      WE&apos;RE HERE TO HELP
                    </h3>
                  </div>
                  <div className="flex gap-3 flex-wrap justify-center">
                    <Link href="/contact-us" className="btn btn-gold">
                      Contact Support
                    </Link>
                    <Link href="/responsible-gambling" className="btn btn-ghost">
                      Responsible Gaming
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

function SectionHeader({
  icon: Icon,
  accent,
  title,
  subtitle,
  count,
  featured,
}: {
  icon: React.ElementType;
  accent: string;
  title: string;
  subtitle: string;
  count: number;
  featured?: boolean;
}) {
  return (
    <div className="flex items-start justify-between gap-4 mb-7 pb-6 border-b border-white/[0.06]">
      <div className="flex items-start gap-4">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border"
          style={{ color: accent, backgroundColor: `${accent}18`, borderColor: `${accent}33` }}
        >
          <Icon className="w-5 h-5" />
        </div>
        <div>
          <div className="flex items-center gap-2 flex-wrap mb-1">
            <h2 className="font-bebas text-[28px] md:text-[34px] text-white tracking-[1px] leading-none">
              {title}
            </h2>
            {featured && (
              <span className="text-[9px] font-black uppercase tracking-[0.2em] px-2 py-0.5 rounded bg-[#F5A623]/15 text-[#F5A623] border border-[#F5A623]/25">
                Popular
              </span>
            )}
          </div>
          <p className="text-muted text-[13px]">{subtitle}</p>
        </div>
      </div>
      <span
        className="shrink-0 text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg border font-syne"
        style={{ color: accent, borderColor: `${accent}33`, backgroundColor: `${accent}10` }}
      >
        {count} rules
      </span>
    </div>
  );
}

function StringRuleCard({
  rule,
  index,
  accent,
}: {
  rule: string;
  index: number;
  accent: string;
}) {
  const number = extractRuleNumber(rule);
  const label = extractRuleLabel(rule);
  const body = extractRuleBody(rule);

  return (
    <div className="group flex gap-3.5 rounded-xl border border-white/[0.05] bg-[#030914]/40 p-4 hover:border-white/[0.1] transition-all">
      <span
        className="shrink-0 w-7 h-7 rounded-md flex items-center justify-center text-[10px] font-black font-syne mt-0.5"
        style={{ color: accent, backgroundColor: `${accent}15` }}
      >
        {number.split(".").pop() ?? index}
      </span>
      <div className="min-w-0">
        <p className="text-[12px] font-bold text-white/90 font-syne mb-1 leading-snug">
          {label}
        </p>
        <p className="text-[13px] text-muted leading-[1.7] font-light whitespace-pre-line">{body}</p>
      </div>
    </div>
  );
}

function StructuredRuleCard({
  rule,
  accent,
}: {
  rule: { title: string; desc: string };
  accent: string;
}) {
  return (
    <div className="group rounded-xl border border-white/[0.05] bg-[#030914]/40 p-5 hover:border-[#F5A623]/20 transition-colors">
      <div className="flex items-start gap-3">
        <span
          className="shrink-0 w-2 h-2 rounded-full mt-2"
          style={{ backgroundColor: accent, boxShadow: `0 0 8px ${accent}` }}
        />
        <div>
          <h4 className="text-white font-syne font-bold text-[14px] mb-2">{rule.title}</h4>
          <p className="text-muted text-[13px] leading-[1.75] font-light">{rule.desc}</p>
        </div>
      </div>
    </div>
  );
}

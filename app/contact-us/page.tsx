"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MessageCircle,
  Send,
  Headphones,
  ShieldCheck,
  Globe,
  MessageSquare,
  Clock,
  CheckCircle2,
  Loader2,
  AlertCircle,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";
import ContactUsFaq from "../components/ContactUsFaq";
import { submitContactForm, validateContactForm } from "../../lib/contactForm";
import { PageArtwork } from "../components/PageArtwork";

const supportCategories = [
  "Account & Login",
  "Cricket ID Assistance",
  "Casino Games Support",
  "Sports Betting Help",
  "Deposit & Withdrawal",
  "Bonus & Promotions",
  "Technical Support",
  "Other",
];

const channels = [
  {
    icon: Mail,
    title: "Email Support",
    value: "support@1xplay.com",
    sub: "Replies within a few hours",
    href: "mailto:support@1xplay.com",
  },
  {
    icon: MessageSquare,
    title: "Business Inquiries",
    value: "business@1xplay.com",
    sub: "Partnerships & affiliates",
    href: "mailto:business@1xplay.com",
  },
  {
    icon: MessageCircle,
    title: "Live Chat",
    value: "Available in-platform",
    sub: "Instant agent connection",
    href: "#live-chat",
  },
  {
    icon: Send,
    title: "Telegram & WhatsApp",
    value: "Fast secure messaging",
    sub: "Worldwide coverage",
    href: "#messaging",
  },
];

const trustItems = [
  {
    icon: ShieldCheck,
    title: "Secure Assistance",
    desc: "Verified, encrypted support channels protecting every conversation.",
  },
  {
    icon: Headphones,
    title: "24/7 Availability",
    desc: "Real agents on standby around the clock, every day of the year.",
  },
  {
    icon: Globe,
    title: "Global Coverage",
    desc: "Multilingual help for players across regions and time zones.",
  },
];

type FormState = {
  name: string;
  email: string;
  category: string;
  message: string;
  botcheck: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const emptyForm: FormState = { name: "", email: "", category: "", message: "", botcheck: "" };

export default function ContactUsPage() {
  const [form, setForm] = useState<FormState>(emptyForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [submitError, setSubmitError] = useState("");
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

  const messageCount = form.message.length;
  const isReady = useMemo(
    () => form.name.trim() && form.email.trim() && form.message.trim(),
    [form]
  );

  const update = (key: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const validate = (): boolean => {
    const next = validateContactForm(form) as FormErrors;
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "submitting") return;
    if (!validate()) return;

    setStatus("submitting");
    setSubmitError("");

    const result = await submitContactForm({
      name: form.name,
      email: form.email,
      category: form.category,
      message: form.message,
      botcheck: form.botcheck,
    });

    if (result.ok) {
      setStatus("success");
      setForm(emptyForm);
      return;
    }

    setSubmitError(result.error);
    setStatus("error");
  };

  const inputBase =
    "w-full rounded-xl border bg-[#030914]/60 px-4 py-3.5 text-sm text-white placeholder:text-muted/40 outline-none transition-all focus:shadow-[0_0_22px_rgba(246, 196, 83,0.12)]";

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
                      24/7 Customer Support

                    </span>
                  </motion.div>

                  <motion.h1
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="font-bebas text-[clamp(48px,8vw,92px)] tracking-[2px] leading-[0.9] text-white mb-4 drop-shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
                  >
                    WE&apos;RE HERE
                    <br />
                    TO{" "}
                    <span className="bg-gradient-to-r from-[#D4AF37] via-[#F6C453] to-[#FFF2C6] bg-clip-text text-transparent">
                      HELP
                    </span>
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-white/70 text-[15px] md:text-[17px] leading-relaxed font-light max-w-xl mb-6"
                  >
                  Need help with your account, cricket ID, deposits, withdrawals, or live betting? Our support team is available 24/7 to assist you.


                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="flex flex-wrap gap-2"
                  >
                    {[
                      { label: "Send a message", href: "#contact-form" },
                      { label: "Live chat", href: "#live-chat" },
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

                {/* Right: live support glass panel */}
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

                    <a
                      href="#contact-form"
                      className="flex items-center justify-between gap-3 rounded-xl border border-[#F6C453]/25 bg-[#F6C453]/10 px-4 py-3 transition-all hover:bg-[#F6C453]/15 hover:border-[#F6C453]/40 group"
                    >
                      <span className="text-sm font-syne font-semibold text-white">
                        Open a support ticket
                      </span>
                      <ChevronRight className="w-4 h-4 text-[#F6C453] transition-transform group-hover:translate-x-0.5" />
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
          <PageArtwork
            src="/about-mission-gold-v2.png"
            alt="Reddy Line customer support operations"
            label="Talk to the Reddy Line support team"
          />
        </div>
      </section>

      {/* ─────────── Channels ─────────── */}
      <section className="relative z-10 px-[5%] pb-16">
        <div className="mx-auto max-w-[1400px] grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
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
      </section>

      {/* ─────────── Form + Services ─────────── */}
      <section id="contact-form" className="relative z-10 px-[5%] pb-20 scroll-mt-24">
        <div className="mx-auto max-w-[1400px] grid gap-8 lg:grid-cols-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 relative overflow-hidden rounded-2xl border border-white/10 bg-[#0a1220]/70 backdrop-blur-xl p-7 md:p-9"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-[radial-gradient(circle,rgba(246, 196, 83,0.06)_0%,transparent_70%)] pointer-events-none" />

            <div className="relative z-10">
              <h2 className="section-title">
                Send Us a Message
              </h2>
              <p className="mt-2 mb-7 text-[14px] text-muted font-light leading-relaxed">
                Share a few details and our team will get back to you as quickly as possible.
              </p>

              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="rounded-2xl border border-[#1EBF6A]/30 bg-[#1EBF6A]/10 p-8 text-center"
                >
                  <div className="mx-auto mb-4 w-14 h-14 rounded-full bg-[#1EBF6A]/15 border border-[#1EBF6A]/30 flex items-center justify-center">
                    <CheckCircle2 className="w-7 h-7 text-[#1EBF6A]" />
                  </div>
                  <h3 className="font-syne text-lg font-bold text-white mb-2">
                    Message sent
                  </h3>
                  <p className="text-sm text-muted font-light max-w-sm mx-auto mb-6">
                    Thanks for reaching out — our support team will reply to your email shortly.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="btn btn-ghost px-6 py-2.5 text-[12px] uppercase font-bold font-syne"
                  >
                    Send another
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <input
                    type="text"
                    name="botcheck"
                    value={form.botcheck}
                    onChange={(e) => update("botcheck", e.target.value)}
                    tabIndex={-1}
                    autoComplete="off"
                    className="hidden"
                    aria-hidden
                  />
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-[11px] font-bold uppercase tracking-wider text-muted font-syne">
                        Full Name
                      </label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={(e) => update("name", e.target.value)}
                        placeholder="John Doe"
                        className={`${inputBase} ${
                          errors.name
                            ? "border-[#E8303A]/60 focus:border-[#E8303A]"
                            : "border-white/[0.08] focus:border-[#F6C453]/45"
                        }`}
                      />
                      {errors.name && (
                        <p className="mt-1.5 flex items-center gap-1 text-[12px] text-[#E8303A]">
                          <AlertCircle className="w-3 h-3" /> {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="mb-2 block text-[11px] font-bold uppercase tracking-wider text-muted font-syne">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => update("email", e.target.value)}
                        placeholder="you@email.com"
                        className={`${inputBase} ${
                          errors.email
                            ? "border-[#E8303A]/60 focus:border-[#E8303A]"
                            : "border-white/[0.08] focus:border-[#F6C453]/45"
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1.5 flex items-center gap-1 text-[12px] text-[#E8303A]">
                          <AlertCircle className="w-3 h-3" /> {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-[11px] font-bold uppercase tracking-wider text-muted font-syne">
                      Topic
                    </label>
                    <select
                      value={form.category}
                      onChange={(e) => update("category", e.target.value)}
                      className={`${inputBase} border-white/[0.08] focus:border-[#F6C453]/45 cursor-pointer ${
                        form.category ? "text-white" : "text-muted/40"
                      }`}
                    >
                      <option value="" className="bg-[#0a1220]">
                        Select a topic (optional)
                      </option>
                      {supportCategories.map((cat) => (
                        <option key={cat} value={cat} className="bg-[#0a1220] text-white">
                          {cat}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <div className="mb-2 flex items-center justify-between">
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-muted font-syne">
                        Message
                      </label>
                      <span
                        className={`text-[11px] font-medium ${
                          messageCount > 1000 ? "text-[#E8303A]" : "text-muted/60"
                        }`}
                      >
                        {messageCount}/1000
                      </span>
                    </div>
                    <textarea
                      rows={6}
                      maxLength={1000}
                      value={form.message}
                      onChange={(e) => update("message", e.target.value)}
                      placeholder="How can we help you today?"
                      className={`${inputBase} resize-none ${
                        errors.message
                          ? "border-[#E8303A]/60 focus:border-[#E8303A]"
                          : "border-white/[0.08] focus:border-[#F6C453]/45"
                      }`}
                    />
                    {errors.message && (
                      <p className="mt-1.5 flex items-center gap-1 text-[12px] text-[#E8303A]">
                        <AlertCircle className="w-3 h-3" /> {errors.message}
                      </p>
                    )}
                  </div>

                  {status === "error" && (
                    <p className="flex items-center gap-2 rounded-xl border border-[#E8303A]/30 bg-[#E8303A]/10 px-4 py-3 text-[13px] text-[#E8303A]">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      {submitError || "Something went wrong sending your message. Please try again."}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "submitting" || !isReady}
                    className="btn btn-gold w-full justify-center py-4 font-syne text-[14px] uppercase font-bold disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === "submitting" ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" /> Sending…
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" /> Send Message
                      </>
                    )}
                  </button>

                  <p className="text-center text-[11px] text-muted/60 font-light">
                    We typically reply within a few hours. Your details stay private.
                  </p>
                </form>
              )}
            </div>
          </motion.div>

          {/* Side column */}
          <div className="lg:col-span-5 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0a1220]/70 backdrop-blur-xl p-7 md:p-8"
            >
              <h2 className="mb-5 font-bebas text-[30px] tracking-[1px] text-white">
                What We Help With
              </h2>
              <div className="grid gap-2.5 sm:grid-cols-2">
                {supportCategories.map((service) => (
                  <div
                    key={service}
                    className="flex items-center gap-2.5 rounded-xl border border-white/[0.06] bg-[#030914]/50 px-3.5 py-3 text-[13px] text-white/85 font-medium transition hover:border-[#F6C453]/25 hover:text-white"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F6C453] shrink-0 shadow-[0_0_8px_rgba(246, 196, 83,0.6)]" />
                    {service}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              id="live-chat"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-2xl border border-[#F6C453]/20 bg-gradient-to-br from-[#0a1220]/80 to-[#D4AF37]/[0.08] backdrop-blur-xl p-7 md:p-8 scroll-mt-24"
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[220px] bg-[radial-gradient(ellipse,rgba(246, 196, 83,0.10)_0%,transparent_70%)] pointer-events-none" />
              <div className="relative z-10">
                <div className="mb-4 w-12 h-12 rounded-xl bg-[#F6C453]/15 border border-[#F6C453]/25 flex items-center justify-center">
                  <Globe className="w-5 h-5 text-[#F6C453]" />
                </div>
                <h2 className="mb-3 font-bebas text-[28px] tracking-[1px] text-white">
                  24/7 Global Assistance
                </h2>
                <p className="text-[14px] leading-relaxed text-muted font-light">
                  Our team works continuously to support players across regions and
                  time zones. Reliable, responsive, and always one tap away whenever
                  you need a hand.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─────────── Trust ─────────── */}
      <section className="relative z-10 px-[5%] pb-24">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-12 text-left sm:text-center">
            <span className="section-tag justify-center mb-4">Why Reach Out</span>
            <h2 className="section-title">
              Support You Can{" "}
              <span className="bg-gradient-to-r from-[#D4AF37] to-[#F6C453] bg-clip-text text-transparent">
                Trust
              </span>
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {trustItems.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-[#0a1220]/60 backdrop-blur-xl p-8 transition-colors hover:border-[#F6C453]/30"
              >
                <div className="absolute -top-12 -right-12 w-40 h-40 bg-[radial-gradient(circle,rgba(246, 196, 83,0.08)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="mb-5 w-12 h-12 rounded-xl bg-[#F6C453]/12 border border-[#F6C453]/20 flex items-center justify-center transition-transform group-hover:scale-110">
                  <item.icon className="w-5 h-5 text-[#F6C453]" />
                </div>
                <h3 className="mb-3 font-syne text-[15px] font-bold text-white uppercase tracking-[0.5px]">
                  {item.title}
                </h3>
                <p className="text-sm text-muted font-light leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ContactUsFaq />

      {/* ─────────── CTA ─────────── */}
      <section id="messaging" className="relative z-10 px-[5%] pb-28 scroll-mt-24">
        <div className="mx-auto max-w-5xl relative overflow-hidden rounded-3xl border border-white/10 bg-[#0a1220]/70 backdrop-blur-xl p-10 md:p-14 text-left sm:text-center">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[640px] h-[320px] bg-[radial-gradient(ellipse,rgba(246, 196, 83,0.10)_0%,transparent_70%)] pointer-events-none" />
          <div className="relative z-10">
            <h2 className="section-title">
              Need More Help?

            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-[14px] md:text-[15px] text-muted font-light leading-relaxed">
              Start a live chat for instant answers, or drop us an email and we&apos;ll
              take care of the rest. The Reddy Line team is ready whenever you are.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#contact-form"
                className="btn btn-gold px-8 py-4 font-syne text-[13px] uppercase font-bold"
              >
                <MessageCircle className="w-4 h-4" /> Start Live Chat
              </a>
              <a
                href="mailto:support@1xplay.com"
                className="btn btn-ghost px-8 py-4 font-syne text-[13px] uppercase font-bold"
              >
                <Mail className="w-4 h-4" /> Email Support
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

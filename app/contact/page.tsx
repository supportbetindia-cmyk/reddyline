"use client";

import { useState } from "react";
import { submitContactForm } from "../../lib/contactForm";
import { PageArtwork } from "../components/PageArtwork";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "support",
    message: "",
    botcheck: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const result = await submitContactForm({
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
      botcheck: formData.botcheck,
    });

    setLoading(false);

    if (result.ok) {
      setSuccess(true);
      setFormData({
        name: "",
        email: "",
        subject: "support",
        message: "",
        botcheck: "",
      });
      setTimeout(() => setSuccess(false), 5000);
      return;
    }

    setError(result.error);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="mx-auto w-full max-w-7xl px-4 pb-16 pt-[calc(var(--navbar-offset)+2rem)] sm:px-6 lg:px-8 lg:pb-24 lg:pt-[calc(var(--navbar-offset)+3rem)]">
      {/* Title */}
      <div className="text-left sm:text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
         Contact Reddy Line

        </h1> 
        <p className="mt-4 text-base text-white/50">
         Need help with your account, platform access, payments, or general inquiries? Contact the Reddy Line team and we&apos;ll respond as quickly as possible.

        </p>
      </div>

      <PageArtwork
        src="/about-mission-gold-v2.png"
        alt="Reddy Line customer support workspace"
        label="Contact our support team"
        className="max-w-6xl"
      />

      <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start max-w-6xl mx-auto">
        
        {/* Contact Form: 7 cols */}
        <div className="lg:col-span-7 glass-panel rounded-3xl p-6 sm:p-10 border border-white/10 relative">
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              name="botcheck"
              value={formData.botcheck}
              onChange={handleInputChange}
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
              aria-hidden
            />
            {/* Row: Name and Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-xs font-semibold text-white/60 uppercase tracking-wider mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-accent-cyan transition-colors"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-semibold text-white/60 uppercase tracking-wider mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="name@example.com"
                  className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-accent-cyan transition-colors"
                />
              </div>
            </div>

            {/* Subject Dropdown */}
            <div>
              <label htmlFor="subject" className="block text-xs font-semibold text-white/60 uppercase tracking-wider mb-2">
               Reason for Contact
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-accent-cyan transition-colors appearance-none [&>option]:bg-[#041220] [&>option]:text-white"
              >
                <option value="support">Account Support</option>
                <option value="app-submission">Payments </option>
                <option value="feedback">Platform Assistance</option>
                <option value="other">General Inquiry</option>
                <option value="other">Partnerships</option>
                <option value="other">Technical Support</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Message Area */}
            <div>
              <label htmlFor="message" className="block text-xs font-semibold text-white/60 uppercase tracking-wider mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Describe your inquiry..."
                className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-accent-cyan transition-colors resize-none"
              />
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent-cyan to-accent-indigo px-6 py-4 text-sm font-bold text-black shadow-lg hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all hover:scale-[1.01] active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-black border-t-transparent" />
                    Transmitting packet...
                  </>
                ) : (
                  "Submit Form"
                )}
              </button>
            </div>

            {error && (
              <div className="mt-4 rounded-xl bg-red-500/10 border border-red-500/20 p-4 text-center">
                <p className="text-sm font-medium text-red-400">{error}</p>
              </div>
            )}

            {success && (
              <div className="mt-4 rounded-xl bg-accent-cyan/10 border border-accent-cyan/20 p-4 text-center">
                <p className="text-sm font-bold text-accent-cyan neon-text-cyan animate-pulse">
                  Transmission Success! We have received your query.
                </p>
              </div>
            )}

          </form>
        </div>

        {/* Sidebar Info: 5 cols */}
        <div className="lg:col-span-5 space-y-6">
          <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/10">
            <h3 className="text-lg font-bold text-white mb-6">Contact Channels</h3>
            
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-4">
                <span className="text-accent-cyan text-lg">✉</span>
                <div>
                  <div className="font-bold text-white">Direct Email</div>
                  <div className="text-white/50 mt-1">support@1xplay.io</div>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-4 border-t border-white/5">
                <span className="text-accent-indigo text-lg">💬</span>
                <div>
                  <div className="font-bold text-white">Discord Guild</div>
                  <div className="text-white/50 mt-1">discord.gg/Reddy Line</div>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-4 border-t border-white/5">
                <span className="text-accent-purple text-lg">📍</span>
                <div>
                  <div className="font-bold text-white">Support Availability</div>
                  <div className="text-white/50 mt-1">24/7 Assistance</div>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 bg-gradient-to-br from-accent-cyan/5 to-transparent">
            <h3 className="text-sm font-bold text-accent-cyan mb-2">Response Time</h3>
            <p className="text-xs text-white/50 leading-relaxed">
              Our support cycles target responding to query requests within 24 hours. Most inquiries receive a response within 24 hours. Support requests are handled as quickly as possible by our team.


            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

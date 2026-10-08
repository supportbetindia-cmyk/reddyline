"use client";

import { useState } from "react";
import { PageArtwork } from "../components/PageArtwork";

export default function Deposit() {
  const [amount, setAmount] = useState("");
  const [method, setMethod] = useState("upi");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleDeposit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!amount) return;
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setAmount("");
      setTimeout(() => setSuccess(false), 5000);
    }, 2000);
  };

  const methods = [
    { id: "upi", name: "Instant UPI", logo: "⚡" },
    { id: "crypto", name: "USDT / Crypto", logo: "🪙" },
    { id: "cards", name: "Credit / Debit Cards", logo: "💳" },
  ];

  return (
    <div className="mx-auto w-full max-w-7xl px-4 pb-16 pt-[calc(var(--navbar-offset)+2rem)] sm:px-6 lg:px-8 lg:pb-24 lg:pt-[calc(var(--navbar-offset)+3rem)]">
      <div className="text-left sm:text-center max-w-3xl mx-auto mb-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          Secure <span className="bg-gradient-to-r from-accent-cyan to-accent-indigo bg-clip-text text-transparent">Deposits</span>
        </h1>
        <p className="mt-4 text-base text-white/50">
          Instantly fund your play sandbox wallet using modern encrypted transfer protocols.
        </p>
      </div>

      <PageArtwork
        src="/reddy-app-v2.png"
        alt="Secure Reddy Line mobile deposit experience"
        label="Secure mobile deposits"
        className="max-w-3xl"
        imageClassName="object-cover object-right"
      />

      <div className="mt-10 max-w-md mx-auto glass-panel rounded-3xl p-5 sm:p-10 border border-white/10 relative">
        <div className="absolute -right-24 -top-24 h-48 w-48 rounded-full bg-accent-cyan/10 blur-2xl pointer-events-none" />

        <form onSubmit={handleDeposit} className="space-y-6">
          {/* Method Selection */}
          <div>
            <label className="block text-xs font-semibold text-white/60 uppercase tracking-wider mb-3">
              Payment Gateway
            </label>
            <div className="grid grid-cols-1 gap-3">
              {methods.map((m) => (
                <button
                  type="button"
                  key={m.id}
                  onClick={() => setMethod(m.id)}
                  className={`flex items-center gap-4 p-4 rounded-xl border text-left transition-all ${
                    method === m.id
                      ? "bg-white/5 border-accent-cyan shadow-[0_0_15px_rgba(0,240,255,0.15)]"
                      : "bg-white/[0.01] border-white/5 hover:bg-white/5"
                  }`}
                >
                  <span className="text-2xl">{m.logo}</span>
                  <span className="text-sm font-bold text-white">{m.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Amount input */}
          <div>
            <label htmlFor="amount" className="block text-xs font-semibold text-white/60 uppercase tracking-wider mb-2">
              Deposit Amount (INR)
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 font-bold text-sm">₹</span>
              <input
                type="number"
                id="amount"
                required
                min={100}
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="0.00"
                className="w-full rounded-xl bg-white/5 border border-white/10 pl-8 pr-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-accent-cyan transition-colors"
              />
            </div>
            <span className="text-[10px] text-white/30 mt-1 block">Minimum deposit is ₹100</span>
          </div>

          {/* Action Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent-cyan to-accent-indigo px-6 py-4 text-sm font-bold text-black shadow-lg hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all active:scale-95 disabled:opacity-50"
          >
            {loading ? (
              <>
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-black border-t-transparent" />
                Connecting payment gateway...
              </>
            ) : (
              "Confirm Deposit"
            )}
          </button>

          {success && (
            <div className="rounded-xl bg-accent-cyan/15 border border-accent-cyan/25 p-4 text-center">
              <p className="text-sm font-bold text-accent-cyan neon-text-cyan animate-pulse">
                Deposit Completed! Wallet updated successfully.
              </p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

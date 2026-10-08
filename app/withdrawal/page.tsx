"use client";

import { useState } from "react";
import { PageArtwork } from "../components/PageArtwork";

export default function Withdrawal() {
  const [amount, setAmount] = useState("");
  const [bankDetails, setBankDetails] = useState({ account: "", ifsc: "", upi: "" });
  const [payoutType, setPayoutType] = useState("upi");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleWithdrawal = (e: React.FormEvent) => {
    e.preventDefault();
    if (!amount) return;
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setAmount("");
      setBankDetails({ account: "", ifsc: "", upi: "" });
      setTimeout(() => setSuccess(false), 5000);
    }, 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBankDetails((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="mx-auto w-full max-w-7xl px-4 pb-16 pt-[calc(var(--navbar-offset)+2rem)] sm:px-6 lg:px-8 lg:pb-24 lg:pt-[calc(var(--navbar-offset)+3rem)]">
      <div className="text-left sm:text-center max-w-3xl mx-auto mb-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          Secure <span className="bg-gradient-to-r from-accent-purple to-accent-indigo bg-clip-text text-transparent">Withdrawals</span>
        </h1>
        <p className="mt-4 text-base text-white/50">
          Request quick payout transfers from your active sandbox gaming balances.
        </p>
      </div>

      <PageArtwork
        src="/reddy-app-v2.png"
        alt="Secure Reddy Line mobile withdrawal experience"
        label="Fast and secure withdrawals"
        className="max-w-3xl"
        imageClassName="object-cover object-right"
      />

      <div className="mt-10 max-w-md mx-auto glass-panel rounded-3xl p-5 sm:p-10 border border-white/10 relative">
        <div className="absolute -left-24 -bottom-24 h-48 w-48 rounded-full bg-accent-purple/10 blur-2xl pointer-events-none" />

        {/* Balance Display */}
        <div className="bg-white/5 rounded-2xl p-4 border border-white/5 text-center mb-6">
          <span className="text-xs text-white/40 uppercase font-semibold">Available Play Balance</span>
          <div className="text-2xl font-black text-white mt-1">₹4,250.00</div>
        </div>

        <form onSubmit={handleWithdrawal} className="space-y-6">
          {/* Tabs: UPI vs Bank */}
          <div className="grid grid-cols-2 gap-2 p-1 rounded-xl bg-white/5">
            <button
              type="button"
              onClick={() => setPayoutType("upi")}
              className={`py-2 rounded-lg text-xs font-bold transition-all ${
                payoutType === "upi" ? "bg-white/10 text-white" : "text-white/40 hover:text-white"
              }`}
            >
              UPI Handle
            </button>
            <button
              type="button"
              onClick={() => setPayoutType("bank")}
              className={`py-2 rounded-lg text-xs font-bold transition-all ${
                payoutType === "bank" ? "bg-white/10 text-white" : "text-white/40 hover:text-white"
              }`}
            >
              Bank Transfer
            </button>
          </div>

          {/* Amount input */}
          <div>
            <label htmlFor="amount" className="block text-xs font-semibold text-white/60 uppercase tracking-wider mb-2">
              Withdrawal Amount (INR)
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 font-bold text-sm">₹</span>
              <input
                type="number"
                id="amount"
                required
                max={4250}
                min={200}
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="0.00"
                className="w-full rounded-xl bg-white/5 border border-white/10 pl-8 pr-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-accent-cyan transition-colors"
              />
            </div>
            <span className="text-[10px] text-white/30 mt-1 block">Limit per transaction: ₹200 - ₹50,000</span>
          </div>

          {/* Condition-based Inputs */}
          {payoutType === "upi" ? (
            <div>
              <label htmlFor="upi" className="block text-xs font-semibold text-white/60 uppercase tracking-wider mb-2">
                UPI ID (Virtual Payment Address)
              </label>
              <input
                type="text"
                id="upi"
                name="upi"
                required
                value={bankDetails.upi}
                onChange={handleInputChange}
                placeholder="username@bank"
                className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-accent-cyan transition-colors"
              />
            </div>
          ) : (
            <div className="space-y-4">
              <div>
                <label htmlFor="account" className="block text-xs font-semibold text-white/60 uppercase tracking-wider mb-2">
                  Bank Account Number
                </label>
                <input
                  type="text"
                  id="account"
                  name="account"
                  required
                  value={bankDetails.account}
                  onChange={handleInputChange}
                  placeholder="0000 0000 0000 00"
                  className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-accent-cyan transition-colors"
                />
              </div>
              <div>
                <label htmlFor="ifsc" className="block text-xs font-semibold text-white/60 uppercase tracking-wider mb-2">
                  IFSC Routing Code
                </label>
                <input
                  type="text"
                  id="ifsc"
                  name="ifsc"
                  required
                  value={bankDetails.ifsc}
                  onChange={handleInputChange}
                  placeholder="ABCD0123456"
                  className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-accent-cyan transition-colors"
                />
              </div>
            </div>
          )}

          {/* Action Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent-purple to-accent-indigo px-6 py-4 text-sm font-bold text-white shadow-lg hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all active:scale-95 disabled:opacity-50"
          >
            {loading ? (
              <>
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                Initiating security clearance...
              </>
            ) : (
              "Confirm Cashout"
            )}
          </button>

          {success && (
            <div className="rounded-xl bg-accent-purple/15 border border-accent-purple/25 p-4 text-center">
              <p className="text-sm font-bold text-accent-purple neon-text-purple animate-pulse">
                Clearance Approved! Payout will reflect shortly.
              </p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

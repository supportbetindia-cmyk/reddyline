"use client";

import React from "react";

export default function Security() {
  return (
    <section className="py-24 bg-surface-container-lowest relative z-10 reveal">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div className="space-y-6">
            <h2 className="font-sans text-[28px] md:text-[32px] font-[800] leading-[1.2] text-on-surface text-glow">
              Safe and Secure Online Gambling Casino
            </h2>
            <p className="font-sans text-[16px] font-normal leading-[1.6] text-on-surface-variant">
              Security is extremely important in online gaming and Reddy Line focuses on creating a safe environment where users can enjoy gaming with confidence. The platform uses advanced technology and secure systems to help protect all user activities.
            </p>
            <p className="font-sans text-[15px] font-normal leading-[1.6] text-on-surface-variant/80">
              Players can access sports betting, casino games, and online entertainment while enjoying smooth and secure platform performance. We continuously improve security standards and technical systems to maintain trust, reliability, and better user satisfaction.
            </p>
          </div>

          {/* Right: Security Feature Cards */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: "person", label: "User Accounts", desc: "Protected with advanced security" },
              { icon: "fingerprint", label: "Personal Details", desc: "Encrypted and private" },
              { icon: "account_balance", label: "Transactions", desc: "Secure payment processing" },
              { icon: "sports_esports", label: "Gaming Activities", desc: "Fair and monitored" },
            ].map((item) => (
              <div
                key={item.label}
                className="glass-panel p-6 rounded-2xl border border-outline-variant/20 text-center group hover:border-primary/40 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary-container/20 rounded-xl flex items-center justify-center mx-auto mb-4 text-primary group-hover:bg-primary-container group-hover:text-white transition-all">
                  <span className="material-symbols-outlined text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    {item.icon}
                  </span>
                </div>
                <h4 className="font-sans text-[16px] font-bold text-on-surface mb-1">
                  {item.label}
                </h4>
                <p className="font-sans text-[12px] text-on-surface-variant">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

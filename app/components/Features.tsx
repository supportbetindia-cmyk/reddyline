"use client";

import clsx from "clsx";

const features = [
  { icon: "⚡", title: "Lightning Fast Platform", desc: "Optimized for speed so every bet lands at the right moment. Zero lag during live matches." },
  { icon: "🔒", title: "Secure & Trusted", desc: "Advanced encryption protects every account, transaction and personal detail. Play with confidence." },
  { icon: "📱", title: "Mobile First Design", desc: "Smooth gaming from any device. The Reddy Line app brings the full experience to your pocket." },
  { icon: "💳", title: "Instant Withdrawals", desc: "Cash out your winnings fast. Multiple payment options including UPI, cards and wallets." },
  { icon: "🏆", title: "200+ Games", desc: "From Teen Patti and Andar Bahar to live roulette, blackjack, and Aviator crash game." },
  { icon: "🎧", title: "24/7 Support", desc: "Our support team is always available for quick help with any issue, any time of day." },
];

export default function Features() {
  return (
    <section className={clsx("py-[50px]", "px-[5%]", "bg-bg3", "relative", "overflow-hidden")}>
      <div
        className={clsx(
          "absolute",
          "top-[-20%]",
          "left-[-10%]",
          "w-[500px]",
          "h-[500px]",
          "bg-[radial-gradient(circle,rgba(16,185,129,0.08)_0%,transparent_70%)]",
          "pointer-events-none"
        )}
      />
      <div
        className={clsx(
          "absolute",
          "bottom-[-15%]",
          "right-[-5%]",
          "w-[400px]",
          "h-[400px]",
          "bg-[radial-gradient(circle,rgba(5,150,105,0.06)_0%,transparent_70%)]",
          "pointer-events-none"
        )}
      />

      <div className={clsx("relative", "z-[1]")}>
        <div className={clsx("flex", "justify-between", "items-end", "mb-12", "lg:mb-[60px]", "gap-6", "flex-wrap", "reveal")}>
          <div>
            <div className="section-tag">Why Reddy Line</div>
            <h2 className="section-title">
              Everything You<br /><span className="text-accent">Need to Win</span>
            </h2>
          </div>
          <p className="section-desc">
            Strong customer support is an important part of the Reddy Line experience. Our support team
            works continuously to help users with gaming assistance, cricket ID services, technical
            support, and account guidance.
          </p>
        </div>

        <div className={clsx("grid", "grid-cols-2", "lg:grid-cols-3", "gap-3", "sm:gap-4", "lg:gap-5")}>
          {features.map((f) => (
            <div
              key={f.title}
              className={clsx(
                "group",
                "reveal",
                "card-glass",
                "p-5",
                "sm:p-6",
                "lg:p-8",
                "cursor-pointer"
              )}
            >
              <div className={clsx("relative", "z-[1]")}>
                <div
                  className={clsx(
                    "w-11",
                    "h-11",
                    "sm:w-[52px]",
                    "sm:h-[52px]",
                    "rounded-xl",
                    "bg-[#10B981]/10",
                    "border",
                    "border-[#10B981]/20",
                    "flex",
                    "items-center",
                    "justify-center",
                    "text-[20px]",
                    "sm:text-[24px]",
                    "mb-4",
                    "sm:mb-5",
                    "group-hover:scale-110",
                    "group-hover:border-[#10B981]/50",
                    "group-hover:bg-[#10B981]/15",
                    "transition-all",
                    "duration-300"
                  )}
                >
                  {f.icon}
                </div>
                <div
                  className={clsx(
                    "font-syne",
                    "font-bold",
                    "text-[14px]",
                    "sm:text-[16px]",
                    "lg:text-[17px]",
                    "text-white",
                    "group-hover:text-[#34D399]",
                    "transition-colors",
                    "mb-2",
                    "sm:mb-2.5",
                    "leading-snug"
                  )}
                >
                  {f.title}
                </div>
                <p className={clsx("text-[12px]", "sm:text-[13px]", "lg:text-[14px]", "text-muted", "leading-[1.65]")}>
                  {f.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import clsx from "clsx";
import { Check, X } from "lucide-react";

const comparisonRows = [
  {
    feature: "Registration Options",
    oneXPlay: "Self Registration & WhatsApp ID Creation",
    other: "Limited Registration Options",
  },
  {
    feature: "Welcome Bonus",
    oneXPlay: "8% First Deposit Bonus",
    other: "Lower or No Welcome Bonus",
  },
  {
    feature: "Deposit Bonus",
    oneXPlay: "3% Bonus on Every Deposit",
    other: "Limited or No Regular Bonus",
  },
  {
    feature: "Weekly Lossback",
    oneXPlay: "2% Lossback Every Week",
    other: "Usually Not Available",
  },
  {
    feature: "Minimum Deposit",
    oneXPlay: "₹200 Only",
    other: "₹500 - ₹1000+",
  },
  {
    feature: "Minimum Withdrawal",
    oneXPlay: "₹200 Only",
    other: "Higher Withdrawal Limits",
  },
  {
    feature: "Withdrawal Speed",
    oneXPlay: "5-15 Minutes",
    other: "Can Take Hours or Days",
  },
  {
    feature: "Payment Methods",
    oneXPlay: "UPI, Bank Transfer & Wallet",
    other: "Limited Payment Options",
  },
  {
    feature: "Call Support",
    oneXPlay: "Direct Call Support Available",
    other: "Mostly Chat/Email Support",
  },
  {
    feature: "WhatsApp Support",
    oneXPlay: "Instant Assistance",
    other: "Slow Response Time",
  },
  {
    feature: "Registration Process",
    oneXPlay: "Quick & Simple",
    other: "Lengthy Verification Process",
  },
  {
    feature: "Referral Program",
    oneXPlay: "Earn from Referrals",
    other: "Limited Benefits",
  },
  {
    feature: "Mobile Friendly",
    oneXPlay: "Fully Optimized for Mobile",
    other: "Average Experience",
  },
  {
    feature: "Security",
    oneXPlay: "Safe & Secure Transactions",
    other: "Varies by Platform",
  },
  {
    feature: "Customer Support",
    oneXPlay: "Dedicated Support Team",
    other: "Limited Availability",
  },
  {
    feature: "User Experience",
    oneXPlay: "Easy & Beginner Friendly",
    other: "Complex Navigation",
  },
];

export default function WhyBetter() {
  return (
    <section className={clsx("py-[50px]", "px-[5%]", "bg-bg2", "relative", "overflow-hidden")}>
      <div
        className={clsx(
          "absolute",
          "top-0",
          "right-[-10%]",
          "w-[500px]",
          "h-[500px]",
          "bg-[radial-gradient(circle,rgba(229,193,88,0.08)_0%,transparent_70%)]",
          "pointer-events-none"
        )}
      />
      <div
        className={clsx(
          "absolute",
          "bottom-[-10%]",
          "left-[-5%]",
          "w-[400px]",
          "h-[400px]",
          "bg-[radial-gradient(circle,rgba(197,160,89,0.05)_0%,transparent_70%)]",
          "pointer-events-none"
        )}
      />

      <div className={clsx("max-w-[1100px]", "mx-auto", "relative", "z-[1]")}>
        <div className={clsx("text-left", "sm:text-center", "mb-12", "reveal")}>
          <div className={clsx("section-tag", "justify-center")}>Why Choose Us</div>
          <h2 className="section-title">
            Why Choose <span className="text-gold">Reddy Line</span>?
          </h2>
          <p
            className={clsx(
              "text-[16px]",
              "text-muted",
              "leading-[1.8]",
              "max-w-[720px]",
              "mx-auto",
              "font-light"
            )}
          >
            Many online gaming websites suffer from slow loading, poor mobile optimization, and
            complicated interfaces. See how Reddy Line compares to other platforms.
          </p>
        </div>

        <div
          className={clsx(
            "reveal",
            "rounded-2xl",
            "border",
            "border-[#E5C158]/20",
            "bg-gradient-to-b",
            "from-[#141720]",
            "to-[#0D0F14]",
            "shadow-[0_24px_64px_rgba(0,0,0,0.45)]",
            "overflow-hidden"
          )}
        >
          {/* Mobile: stacked cards (no horizontal scroll) */}
          <div className={clsx("md:hidden", "p-3", "sm:p-4", "flex", "flex-col", "gap-3")}>
            {comparisonRows.map((row) => (
              <div
                key={row.feature}
                className={clsx(
                  "rounded-xl",
                  "border",
                  "border-[#E5C158]/20",
                  "bg-[#0D0F14]",
                  "overflow-hidden"
                )}
              >
                <div
                  className={clsx(
                    "px-3.5",
                    "py-3",
                    "border-b",
                    "border-[#E5C158]/20",
                    "bg-gradient-to-br",
                    "from-[#E5C158]/20",
                    "to-[#C5A059]/10"
                  )}
                >
                  <span
                    className={clsx(
                      "text-[13px]",
                      "text-gold",
                      "font-bold",
                      "font-syne",
                      "leading-snug",
                      "block",
                      "pl-2.5",
                      "border-l-2",
                      "border-gold"
                    )}
                  >
                    {row.feature}
                  </span>
                </div>

                <div
                  className={clsx(
                    "px-3.5",
                    "py-3",
                    "border-b",
                    "border-white/[0.06]",
                    "bg-[#E5C158]/5"
                  )}
                >
                  <div className={clsx("flex", "items-center", "gap-1.5", "mb-1.5")}>
                    <span
                      className={clsx(
                        "text-[10px]",
                        "uppercase",
                        "tracking-[0.1em]",
                        "font-bold",
                        "text-white",
                        "font-syne"
                      )}
                    >
                      Reddy Line
                    </span>
                    <span
                      className={clsx(
                        "inline-flex",
                        "items-center",
                        "justify-center",
                        "w-4",
                        "h-4",
                        "rounded-full",
                        "bg-green/20",
                        "text-green"
                      )}
                    >
                      <Check className="w-2.5 h-2.5" strokeWidth={3} />
                    </span>
                  </div>
                  <div className={clsx("flex", "items-start", "gap-2")}>
                    <Check className={clsx("w-3.5", "h-3.5", "text-green", "shrink-0", "mt-0.5")} strokeWidth={2.5} />
                    <p className={clsx("text-[12px]", "leading-relaxed", "text-text")}>{row.oneXPlay}</p>
                  </div>
                </div>

                <div className={clsx("px-3.5", "py-3")}>
                  <div className={clsx("flex", "items-center", "gap-1.5", "mb-1.5")}>
                    <span
                      className={clsx(
                        "text-[10px]",
                        "uppercase",
                        "tracking-[0.1em]",
                        "font-bold",
                        "text-muted",
                        "font-syne"
                      )}
                    >
                      Other Platforms
                    </span>
                    <span
                      className={clsx(
                        "inline-flex",
                        "items-center",
                        "justify-center",
                        "w-4",
                        "h-4",
                        "rounded-full",
                        "bg-red/15",
                        "text-red"
                      )}
                    >
                      <X className="w-2.5 h-2.5" strokeWidth={3} />
                    </span>
                  </div>
                  <div className={clsx("flex", "items-start", "gap-2")}>
                    <X className={clsx("w-3.5", "h-3.5", "text-red/70", "shrink-0", "mt-0.5")} strokeWidth={2.5} />
                    <p className={clsx("text-[12px]", "leading-relaxed", "text-muted")}>{row.other}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop: full table */}
          <div className={clsx("hidden", "md:block")}>
            <table className={clsx("w-full", "border-collapse")}>
              <thead>
                <tr className={clsx("border-b", "border-white/[0.08]", "bg-[#0a0f18]")}>
                  <th
                    className={clsx(
                      "px-4",
                      "sm:px-6",
                      "py-4",
                      "sm:py-5",
                      "text-left",
                      "w-[28%]",
                      "border-r",
                      "border-[#E5C158]/20",
                      "bg-gradient-to-br",
                      "from-[#E5C158]/20",
                      "to-[#C5A059]/10"
                    )}
                  >
                    <span
                      className={clsx(
                        "font-syne",
                        "font-bold",
                        "text-[14px]",
                        "sm:text-[16px]",
                        "text-white",
                        "uppercase",
                        "tracking-[0.08em]"
                      )}
                    >
                      Features
                    </span>
                  </th>
                  <th
                    className={clsx(
                      "px-4",
                      "sm:px-6",
                      "py-4",
                      "sm:py-5",
                      "text-left",
                      "w-[36%]",
                      "border-l",
                      "border-white/[0.06]"
                    )}
                  >
                    <div className={clsx("flex", "items-center", "gap-2")}>
                      <span
                        className={clsx(
                          "font-syne",
                          "font-bold",
                          "text-[15px]",
                          "sm:text-[16px]",
                          "text-white"
                        )}
                      >
                        Reddy Line
                      </span>
                      <span
                        className={clsx(
                          "inline-flex",
                          "items-center",
                          "justify-center",
                          "w-5",
                          "h-5",
                          "rounded-full",
                          "bg-green/20",
                          "text-green"
                        )}
                      >
                        <Check className="w-3 h-3" strokeWidth={3} />
                      </span>
                    </div>
                  </th>
                  <th
                    className={clsx(
                      "px-4",
                      "sm:px-6",
                      "py-4",
                      "sm:py-5",
                      "text-left",
                      "w-[36%]",
                      "border-l",
                      "border-white/[0.06]"
                    )}
                  >
                    <div className={clsx("flex", "items-center", "gap-2")}>
                      <span
                        className={clsx(
                          "font-syne",
                          "font-bold",
                          "text-[14px]",
                          "sm:text-[15px]",
                          "text-muted"
                        )}
                      >
                        Other Platforms
                      </span>
                      <span
                        className={clsx(
                          "inline-flex",
                          "items-center",
                          "justify-center",
                          "w-5",
                          "h-5",
                          "rounded-full",
                          "bg-red/15",
                          "text-red"
                        )}
                      >
                        <X className="w-3 h-3" strokeWidth={3} />
                      </span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr
                    key={row.feature}
                    className={clsx(
                      "group",
                      "border-b",
                      "border-white/[0.05]",
                      "last:border-b-0",
                      "transition-colors",
                      "duration-200",
                      "hover:bg-white/[0.02]"
                    )}
                  >
                    <td
                      className={clsx(
                        "px-4",
                        "sm:px-6",
                        "py-3.5",
                        "sm:py-4",
                        "align-top",
                        "border-r",
                        "border-[rgba(0,120,229,0.2)]",
                        "bg-[rgba(0,120,229,0.08)]",
                        "group-hover:bg-[rgba(0,120,229,0.14)]",
                        "transition-colors",
                        "duration-200"
                      )}
                    >
                      <span
                        className={clsx(
                          "text-[13px]",
                          "sm:text-[15px]",
                          "text-gold",
                          "font-bold",
                          "font-syne",
                          "leading-snug",
                          "block",
                          "pl-3",
                          "border-l-2",
                          "border-gold"
                        )}
                      >
                        {row.feature}
                      </span>
                    </td>
                    <td
                      className={clsx(
                        "px-4",
                        "sm:px-6",
                        "py-3.5",
                        "sm:py-4",
                        "align-top",
                        "border-l",
                        "border-white/[0.05]",
                        "group-hover:bg-white/[0.02]",
                        "transition-colors",
                        "duration-200"
                      )}
                    >
                      <div className={clsx("flex", "items-start", "gap-2.5")}>
                        <Check
                          className={clsx("w-4", "h-4", "text-green", "shrink-0", "mt-0.5")}
                          strokeWidth={2.5}
                        />
                        <span className={clsx("text-[13px]", "sm:text-[14px]", "text-text", "leading-relaxed")}>
                          {row.oneXPlay}
                        </span>
                      </div>
                    </td>
                    <td
                      className={clsx(
                        "px-4",
                        "sm:px-6",
                        "py-3.5",
                        "sm:py-4",
                        "align-top",
                        "border-l",
                        "border-white/[0.05]"
                      )}
                    >
                      <div className={clsx("flex", "items-start", "gap-2.5")}>
                        <X
                          className={clsx("w-4", "h-4", "text-red/70", "shrink-0", "mt-0.5")}
                          strokeWidth={2.5}
                        />
                        <span className={clsx("text-[13px]", "sm:text-[14px]", "text-muted", "leading-relaxed")}>
                          {row.other}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <p
          className={clsx(
            "text-[14px]",
            "text-muted",
            "leading-[1.8]",
            "text-left",
            "sm:text-center",
            "mt-10",
            "max-w-[800px]",
            "mx-auto",
            "font-light",
            "reveal"
          )}
        >
          These features help Reddy Line stand out as one of the growing names among the best online
          casinos in India.
        </p>
      </div>
    </section>
  );
}

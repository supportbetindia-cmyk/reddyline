"use client";

import clsx from "clsx";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

type FaqItem = {
  question: string;
  answer: string;
};

type FaqSectionProps = {
  faqs: readonly FaqItem[];
  className?: string;
};

export default function FaqSection({ faqs, className }: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className={clsx("py-[50px]", "px-[5%]", "relative", "overflow-hidden", className)}>
      <div
        className={clsx(
          "absolute",
          "top-1/2",
          "left-1/2",
          "-translate-x-1/2",
          "-translate-y-1/2",
          "w-[700px]",
          "h-[700px]",
          "bg-[radial-gradient(circle,rgba(229,193,88,0.06)_0%,transparent_70%)]",
          "pointer-events-none"
        )}
      />

      <div className={clsx("max-w-[900px]", "mx-auto", "relative", "z-10")}>
        <div className={clsx("section-tag", "mb-8")}>FAQs</div>
        <div className={clsx("space-y-3")}>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className={clsx(
                  "rounded-2xl",
                  "border",
                  "border-border",
                  "bg-card/70",
                  "overflow-hidden",
                  "transition-all",
                  "duration-300",
                  isOpen ? "border-[#E5C158]/50 shadow-[0_0_20px_rgba(229,193,88,0.12)]" : "hover:border-[#E5C158]/30"
                )}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className={clsx(
                    "w-full",
                    "flex",
                    "items-center",
                    "justify-between",
                    "gap-4",
                    "px-5",
                    "py-4",
                    "text-left",
                    "cursor-pointer"
                  )}
                  aria-expanded={isOpen}
                >
                  <span className={clsx("text-[15px]", "font-semibold", isOpen ? "text-[#F5D77F]" : "text-white", "transition-colors")}>{faq.question}</span>
                  <ChevronDown
                    className={clsx(
                      "shrink-0",
                      isOpen ? "text-gold rotate-180" : "text-muted",
                      "transition-transform",
                      "duration-300"
                    )}
                    size={18}
                  />
                </button>
                <div
                  className={clsx(
                    "grid",
                    "transition-[grid-template-rows]",
                    "duration-300",
                    "ease-out",
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  )}
                >
                  <div className="overflow-hidden">
                    <p className={clsx("px-5", "pb-4", "text-[14px]", "text-muted", "leading-[1.8]", "font-light")}>
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

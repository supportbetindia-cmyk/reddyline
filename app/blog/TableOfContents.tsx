"use client";

import { useState } from "react";
import { ChevronDown, List } from "lucide-react";

export type TocItem = { id: string; text: string; level: number };

export default function TableOfContents({ items }: { items: TocItem[] }) {
  const [open, setOpen] = useState(true);
  if (items.length === 0) return null;

  let h2Count = 0;

  return (
    <div className="rounded-2xl border border-white/10 bg-[#0a1220]/60 mb-10">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between px-5 py-4 text-left"
        aria-expanded={open}
      >
        <span className="flex items-center gap-2 font-syne font-bold text-white text-[13px] uppercase tracking-[0.1em]">
          <List className="w-4 h-4 text-[#F6C453]" /> Table of Contents
        </span>
        <ChevronDown className={`w-5 h-5 text-muted transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <ul className="px-5 pb-5 pt-4 border-t border-white/[0.06] flex flex-col gap-2.5">
          {items.map((it) => {
            if (it.level === 2) h2Count += 1;
            return (
              <li key={it.id} className={it.level === 3 ? "ml-5" : ""}>
                <a
                  href={`#${it.id}`}
                  className="group flex items-baseline gap-2 text-[13.5px] leading-snug text-muted hover:text-[#F6C453] transition-colors"
                >
                  <span className="text-[#F6C453]/70 font-semibold tabular-nums shrink-0">
                    {it.level === 2 ? `${h2Count}.` : "–"}
                  </span>
                  <span className="group-hover:underline underline-offset-2">{it.text}</span>
                </a>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

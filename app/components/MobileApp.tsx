"use client";
import clsx from "clsx";
import { FaAndroid, FaApple } from "react-icons/fa";
import { IosDownloadButton } from "./IosInstallPrompt";

const appFeatures = [
  { icon: "⚡", title: "Fast Loading Speed", desc: "Optimized for smooth performance on all Android and iOS devices." },
  { icon: "🔔", title: "Real-Time Notifications", desc: "Live score alerts, bet updates and bonus offers delivered instantly." },
  { icon: "🔒", title: "Biometric Login", desc: "Secure access with fingerprint and face ID for quick entry." },
];

export default function MobileApp() {
  return (
    <section id="app" className={clsx('py-[50px]', 'px-[5%]', 'bg-bg', 'overflow-hidden')}>
      <div className={clsx('grid', 'grid-cols-1', 'lg:grid-cols-2', 'gap-20', 'items-center')}>
        {/* Left: Text */}
        <div className="reveal">
          <div className="section-tag">Mobile App</div>
          <h2 className="section-title">Play Anywhere with the Reddy Line <span className="text-gold"> Mobile App</span></h2>
          <p className={clsx('section-desc', 'mt-5')}>The Reddy Line app brings smooth casino gaming, live cricket betting and fast sports action to any smartphone.</p>

          {/* Feature Rows */}
          <div className={clsx('flex', 'flex-col', 'gap-6', 'mt-10')}>
            {appFeatures.map((f) => (
              <div key={f.title} className={clsx('flex', 'gap-4', 'items-start')}>
                <div className={clsx('w-11', 'h-11', 'rounded-[10px]', 'bg-card', 'border', 'border-border', 'flex', 'items-center', 'justify-center', 'text-[20px]', 'shrink-0')}>
                  {f.icon}
                </div>
                <div>
                  <div className={clsx('font-syne', 'font-semibold', 'text-[15px]', 'text-white', 'mb-1')}>{f.title}</div>
                  <div className={clsx('text-[13px]', 'text-muted', 'leading-[1.6]')}>{f.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <div className={clsx("flex", "gap-3", "mt-10", "flex-wrap", "justify-center", "items-center")}>
            <IosDownloadButton className={clsx("btn", "btn-gold", "btn-large")}>
              <span className={clsx("inline-flex", "flex-row", "items-end", "gap-2", "whitespace-nowrap", "leading-none")}>
                <FaApple size={15} className="shrink-0 -translate-y-[2px]" aria-hidden />
                <span>Download</span>
              </span>
            </IosDownloadButton>
            <a href="#" className={clsx("btn", "btn-ghost", "btn-large")}>
              <span className={clsx("inline-flex", "flex-row", "items-end", "gap-2", "whitespace-nowrap", "leading-none")}>
                <FaAndroid size={15} className="shrink-0" aria-hidden />
                <span>Download</span>
              </span>
            </a>
          </div>
        </div>

        {/* Right: Phone Mockup with iPhone Frame Overlay */}
        <div className={clsx('reveal', 'flex', 'justify-center')}>
          <div className={clsx('max-w-[310px]', 'w-full', 'aspect-[434/917]', 'relative')}>
            {/* Screen Content Wrapper (Aligned perfectly inside bezel window of iPhone Frame) */}
            <div className={clsx('absolute', 'top-[1%]', 'bottom-[1%]', 'left-[2.3%]', 'right-[2.3%]', 'rounded-[38px]', 'bg-[#080A0E]', 'overflow-hidden', 'p-5', 'pt-8', 'z-10', 'flex', 'flex-col', 'justify-between')}>
              
              {/* Dynamic Island Spacer */}
              <div className={clsx('h-[25px]', 'w-full')} />

              {/* Phone Header */}
              <div className={clsx('flex', 'justify-between', 'items-center', 'mb-4', 'mt-2')}>
                <div className={clsx('font-bebas', 'text-[22px]', 'tracking-[1px]', 'text-white')}>1x<span className="text-gold">Play</span></div>
                <div className={clsx('flex', 'gap-1.5')}>
                  <div className={clsx('w-1.5', 'h-1.5', 'rounded-full', 'bg-gold')} />
                  <div className={clsx('w-1.5', 'h-1.5', 'rounded-full', 'bg-border')} />
                  <div className={clsx('w-1.5', 'h-1.5', 'rounded-full', 'bg-border')} />
                </div>
              </div>

              {/* Balance Card */}
              <div className={clsx('bg-[linear-gradient(135deg,rgba(229,193,88,0.12),rgba(197,160,89,0.03))]', 'border', 'border-[#E5C158]/30', 'rounded-2xl', 'p-4', 'mb-4')}>
                <div className={clsx('text-[11px]', 'text-muted', 'mb-1')}>Your Balance</div>
                <div className={clsx('font-bebas', 'text-[34px]', 'text-gold', 'tracking-[1px]')}>₹12,450</div>
                <div className={clsx('flex', 'gap-2', 'mt-3')}>
                  <a href="#" className={clsx('btn', 'btn-gold')} style={{ fontSize: 10, padding: '6px 12px' }}>+ Deposit</a>
                  <a href="#" className={clsx('btn', 'btn-ghost')} style={{ fontSize: 10, padding: '6px 12px' }}>Withdraw</a>
                </div>
              </div>

              {/* Quick Play */}
              <div>
                <div className={clsx('text-[10px]', 'text-muted', 'uppercase', 'tracking-[1px]', 'mb-2')}>Quick Play</div>
                <div className={clsx('grid', 'grid-cols-3', 'gap-2', 'mb-4')}>
                  {[
                    { emoji: "🎲", label: "Roulette" },
                    { emoji: "🏏", label: "Cricket" },
                    { emoji: "✈️", label: "Aviator" },
                  ].map((g) => (
                    <div key={g.label} className={clsx('rounded-[10px]', 'aspect-square', 'flex', 'flex-col', 'items-center', 'justify-center', 'text-[20px]', 'border', 'border-border', 'bg-card', 'cursor-pointer', 'hover:border-[#E5C158]/40', 'transition-all')}>
                      {g.emoji}
                      <div className={clsx('text-[8px]', 'text-muted', 'uppercase', 'tracking-[0.5px]', 'mt-1')}>{g.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Live Now */}
              <div>
                <div className={clsx('text-[10px]', 'text-muted', 'uppercase', 'tracking-[1px]', 'mb-2')}>Live Now</div>
                <div className={clsx('bg-card', 'border', 'border-border', 'rounded-xl', 'p-3', 'flex', 'justify-between', 'items-center', 'text-[12px]', 'mb-2')}>
                  <div className={clsx('flex', 'flex-col', 'gap-0.5')}>
                    <div className={clsx('text-text', 'font-medium', 'text-[11px]')}>MI vs CSK</div>
                    <div className={clsx('text-[9px]', 'text-green', 'mt-0.5', 'flex', 'items-center')}><span className="live-dot" style={{ width: 5, height: 5 }} /> Live • Ov 14</div>
                  </div>
                  <div className={clsx('font-bebas', 'text-[16px]', 'text-gold')}>2.15</div>
                </div>
              </div>
              
              {/* Home Indicator bar spacer */}
              <div className={clsx('h-[10px]', 'w-full')} />
            </div>

            {/* iPhone bezel with gold metallic highlight */}
            <div className={clsx('absolute', 'inset-0', 'pointer-events-none', 'z-20', 'rounded-[46px]', 'border-[8px]', 'border-[#C5A059]/40', 'shadow-[inset_0_0_3px_rgba(229,193,88,0.2),0_0_30px_rgba(229,193,88,0.25)]')} />
          </div>
        </div>
      </div>
    </section>
  );
}

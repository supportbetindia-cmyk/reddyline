"use client";

import clsx from "clsx";

const protectedItems = [
  { icon: "👤", label: "User accounts" },
  { icon: "🛡️", label: "Personal details" },
  { icon: "💳", label: "Transactions" },
  { icon: "🎮", label: "Gaming activities" },
];

export default function SafeSecure() {
  return (
    <section className={clsx('py-[50px]', 'px-[5%]', 'bg-bg', 'relative', 'overflow-hidden')}>
      {/* Decorative Glow */}
      <div className={clsx('absolute', 'bottom-0', 'left-[-5%]', 'w-[400px]', 'h-[400px]', 'bg-[radial-gradient(circle,rgba(229,193,88,0.06)_0%,transparent_70%)]', 'pointer-events-none')} />

      <div className={clsx('max-w-[1200px]', 'mx-auto')}>
        <div className={clsx('grid', 'grid-cols-1', 'lg:grid-cols-2', 'gap-16', 'items-center')}>
          {/* Left: Content */}
          <div className="reveal">
            <div className="section-tag">Security First</div>
            <h2 className="section-title">
              Safe and Secure<br />Online Gambling <span className="text-gold">Casino</span>
            </h2>
            <p className={clsx('text-[16px]', 'text-muted', 'leading-[1.8]', 'font-light', 'mb-8')}>
              Security is extremely important in online gaming and Reddy Line focuses on creating a safe environment where users can enjoy gaming with confidence.
            </p>
            <p className={clsx('text-[14px]', 'text-muted', 'leading-[1.8]', 'font-light')}>
              The platform uses advanced technology and secure systems to help protect:
            </p>
          </div>

          {/* Right: Protection Grid */}
          <div className="reveal">
            <div className={clsx('grid', 'grid-cols-2', 'gap-4')}>
              {protectedItems.map((item) => (
                <div
                  key={item.label}
                  className={clsx(
                    'card-luxury', 'p-6',
                    'flex', 'flex-col', 'items-center', 'text-center', 'gap-3',
                    'group', 'cursor-pointer'
                  )}
                >
                  <div className={clsx(
                    'w-14', 'h-14', 'rounded-xl',
                    'bg-[#E5C158]/10', 'border', 'border-[#E5C158]/30',
                    'flex', 'items-center', 'justify-center', 'text-[24px]',
                    'group-hover:scale-110', 'group-hover:bg-[#E5C158]/20', 'transition-all'
                  )}>
                    {item.icon}
                  </div>
                  <span className={clsx('text-[15px]', 'text-white', 'font-semibold', 'group-hover:text-[#F5D77F]', 'transition-colors')}>{item.label}</span>
                </div>
              ))}
            </div>

            {/* Bottom Text */}
            <p className={clsx('text-[14px]', 'text-muted', 'leading-[1.8]', 'mt-8', 'font-light')}>
              Players can access sports betting casino games and online entertainment while enjoying smooth and secure platform performance.
            </p>
            <p className={clsx('text-[13px]', 'text-muted', 'leading-[1.7]', 'mt-4', 'font-light')}>
              We continuously improve security standards and technical systems to maintain trust reliability and better user satisfaction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

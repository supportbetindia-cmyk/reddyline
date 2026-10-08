"use client";

import clsx from "clsx";

const playerLikes = [
  "Fast and smooth gaming performance",
  "Easy to use mobile interface",
  "Trusted cricket betting ID services",
  "High quality casino games online",
  "Quick access to IPL betting markets",
  "Secure transactions and account safety",
  "Responsive customer support",
  "Wide variety of sports and casino games",
];

export default function TrustedByPlayers() {
  return (
    <section className={clsx('py-[50px]', 'px-[5%]', 'bg-bg2', 'relative', 'overflow-hidden')}>
      <div className={clsx('absolute', 'top-0', 'left-[-10%]', 'w-[400px]', 'h-[400px]', 'bg-[radial-gradient(circle,rgba(229,193,88,0.06)_0%,transparent_70%)]', 'pointer-events-none')} />

      <div className={clsx('max-w-[1200px]', 'mx-auto')}>
        <div className={clsx('grid', 'grid-cols-1', 'lg:grid-cols-2', 'gap-16', 'items-start')}>
          {/* Left: Trusted Content */}
          <div className="reveal">
            <div className="section-tag">Trusted Platform</div>
            <h2 className="section-title">
              Trusted by Players<br />Across <span className="text-gold">India</span> and<br />Global Markets
            </h2>
            <p className={clsx('text-[15px]', 'text-muted', 'leading-[1.8]', 'font-light', 'mb-5')}>
              Reddy Line continues building a strong reputation among users who enjoy online casino gaming cricket betting and live sports entertainment. Thousands of players choose our platform because of its smooth performance secure systems and user friendly gaming experience.
            </p>
            <p className={clsx('text-[14px]', 'text-muted', 'leading-[1.8]', 'font-light', 'mb-5')}>
              Users appreciate Reddy Line for its fast loading interface easy cricket ID access responsive mobile app and wide collection of casino games online. Many players also prefer the platform during IPL season because of the smooth live betting experience and quick sports market updates.
            </p>
            <p className={clsx('text-[14px]', 'text-muted', 'leading-[1.8]', 'font-light')}>
              Our growing gaming community reflects the trust and satisfaction of users who continue returning to Reddy Line for premium entertainment and reliable gaming services.
            </p>
          </div>

          {/* Right: What Players Like */}
          <div className="reveal">
            <h3 className={clsx('font-syne', 'font-bold', 'text-[18px]', 'text-white', 'mb-6')}>
              What Players Like About Reddy Line
            </h3>
            <div className={clsx('flex', 'flex-col', 'gap-3')}>
              {playerLikes.map((item) => (
                <div
                  key={item}
                  className={clsx(
                    'flex', 'items-center', 'gap-3', 'p-4',
                    'bg-card', 'border', 'border-border', 'rounded-xl',
                    'hover:border-[#E5C158]/50', 'transition-all', 'group', 'cursor-pointer'
                  )}
                >
                  <div className={clsx(
                    'w-6', 'h-6', 'rounded-full', 'shrink-0',
                    'bg-[#E5C158]/15', 'border', 'border-[#E5C158]/30', 'flex', 'items-center', 'justify-center'
                  )}>
                    <span className={clsx('text-[#E5C158]', 'text-[12px]', 'font-bold')}>✓</span>
                  </div>
                  <span className={clsx('text-[14px]', 'text-white', 'font-medium', 'group-hover:text-[#F5D77F]', 'transition-colors')}>{item}</span>
                </div>
              ))}
            </div>

            {/* Bottom Line */}
            <p className={clsx('text-[13px]', 'text-muted', 'leading-[1.7]', 'mt-6', 'font-light')}>
              Players searching for the best online casinos in India often choose Reddy Line because the platform combines entertainment speed convenience and security in one place.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

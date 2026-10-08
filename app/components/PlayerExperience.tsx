"use client";

import clsx from "clsx";

const reviewCategories = [
  {
    icon: "🏏",
    title: "Smooth and Fast Betting Platform",
    desc: "Many cricket users appreciate how quickly they can access live betting markets and place bets during IPL and international matches. The fast interface and responsive system help create a better sports betting experience.",
  },
  {
    icon: "🎰",
    title: "High Quality Casino Games",
    desc: "Casino players enjoy the wide collection of live casino games slot games and table games available on the platform. Smooth gameplay and mobile optimization help improve the overall gaming experience.",
  },
  {
    icon: "📱",
    title: "Easy to Use App and Website",
    desc: "Users often mention the clean interface and simple navigation of the Reddy Line App and website. Beginners can easily explore casino games cricket ID services and sports betting options without confusion.",
  },
  {
    icon: "🎧",
    title: "Reliable Support Experience",
    desc: "Players also value the professional support system provided by Reddy Line. Fast response times and user focused assistance help improve trust and long term user satisfaction.",
  },
];

export default function PlayerExperience() {
  return (
    <section className={clsx('py-[50px]', 'px-[5%]', 'bg-bg3', 'relative', 'overflow-hidden')}>
      <div className={clsx('absolute', 'bottom-[-10%]', 'right-[-5%]', 'w-[500px]', 'h-[500px]', 'bg-[radial-gradient(circle,rgba(229,193,88,0.06)_0%,transparent_70%)]', 'pointer-events-none')} />

      <div className={clsx('max-w-[1200px]', 'mx-auto')}>
        {/* Header */}
        <div className={clsx('text-left', 'sm:text-center', 'mb-14', 'reveal')}>
          <div className={clsx('section-tag', 'justify-center')}>Player Reviews</div>
          <h2 className="section-title">
            Player Reviews and<br /><span className="text-gold">Gaming Experience</span>
          </h2>
        </div>

        {/* Review Cards - 2x2 Grid */}
        <div className={clsx('grid', 'grid-cols-1', 'md:grid-cols-2', 'gap-6')}>
          {reviewCategories.map((review) => (
            <div
              key={review.title}
              className={clsx(
                'card-luxury',
                'p-8',
                'group', 'reveal', 'cursor-pointer'
              )}
            >
              <div className={clsx('flex', 'items-start', 'gap-4')}>
                <div className={clsx(
                  'w-12', 'h-12', 'rounded-xl', 'shrink-0',
                  'bg-[#E5C158]/10', 'border', 'border-[#E5C158]/30',
                  'flex', 'items-center', 'justify-center', 'text-[22px]',
                  'group-hover:scale-110', 'group-hover:bg-[#E5C158]/20', 'transition-all'
                )}>
                  {review.icon}
                </div>
                <div>
                  <h4 className={clsx('font-syne', 'font-bold', 'text-white', 'text-[16px]', 'mb-2.5', 'group-hover:text-[#F5D77F]', 'transition-colors')}>{review.title}</h4>
                  <p className={clsx('text-[14px]', 'text-muted', 'leading-[1.7]')}>{review.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

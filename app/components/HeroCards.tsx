'use client'
import clsx from "clsx"
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const MotionLink = motion.create(Link);

const HeroCards = () => {
  return (
    <div className={clsx('relative', 'overflow-hidden', 'px-[5%]', 'pb-14', 'flex', 'flex-col', 'z-10')}>
      
      {/* 4 Feature Quick Cards */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1,
              delayChildren: 0.2
            }
          }
        }}
        className={clsx('grid', 'grid-cols-1', 'sm:grid-cols-2', 'lg:grid-cols-4', 'gap-4.5', 'w-full', 'mb-10')}
      >
        {[
          { label: "Casino Games", emoji: "🎰", desc: "Slots, Roulette & Live Dealers", badge: "HOT", href: "/casino" },
          { label: "Cricket Betting", emoji: "🏏", desc: "Live Match Odds & IPL Special", badge: "LIVE 24/7", href: "/cricket" },
          { label: "Sports Betting", emoji: "⚽", desc: "Football, Tennis & Esports", badge: "TOP ODDS", href: "/soccer" },
          { label: "Fast Withdrawals", emoji: "⚡", desc: "Instant UPI & Bank Transfer", badge: "2 MIN PAYOUT", href: "/withdrawal" }
        ].map((item) => (
          <MotionLink
            href={item.href}
            key={item.label}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
            }}
            whileHover={{ y: -6, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={clsx(
              'flex', 'items-center', 'justify-between', 'p-5',
              'card-glass',
              'border', 'border-border',
              'hover:border-border-bright',
              'hover:shadow-[0_12px_30px_rgba(212,175,55,0.15)]',
              'text-left',
              'group', 'cursor-pointer', 'relative', 'overflow-hidden'
            )}
          >
            {/* Corner Badge */}
            <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-full bg-gold/10 border border-border text-[9px] font-bold text-gold-light font-mono">
              {item.badge}
            </div>

            <div className="flex items-center gap-4">
              <div className={clsx(
                'w-12', 'h-12', 'rounded-xl', 'shrink-0',
                'bg-gold/[0.08]', 'border', 'border-border',
                'group-hover:bg-gold/[0.18]', 'group-hover:border-border-bright',
                'flex', 'items-center', 'justify-center',
                'text-2xl', 'transition-all', 'duration-300'
              )}>
                {item.emoji}
              </div>
              <div>
                <h3 className={clsx('text-white', 'font-bold', 'text-[15px]', 'group-hover:text-gold-light', 'transition-colors', 'flex', 'items-center', 'gap-1.5')}>
                  {item.label}
                </h3>
                <p className={clsx('text-muted', 'text-[11px]', 'mt-0.5', 'font-light')}>
                  {item.desc}
                </p>
              </div>
            </div>

            <ArrowRight className="w-4 h-4 text-muted group-hover:text-gold group-hover:translate-x-1 transition-all shrink-0 ml-2" />
          </MotionLink>
        ))}
      </motion.div>

      {/* SEO & Intro Paragraph Container */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className={clsx('w-full', 'p-6', 'sm:p-7', 'rounded-2xl', 'bg-[#141414]/80', 'border-l-4', 'border-l-gold', 'border', 'border-border-soft', 'backdrop-blur-md')}
      >
        <div className="flex items-center gap-2 mb-3 text-gold text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-4 h-4" />
          <span>India&apos;s Preferred Online Gambling & Sports Exchange</span>
        </div>
        <p className={clsx('text-[13px]', 'md:text-[14px]', 'text-muted', 'font-light', 'leading-relaxed')}>
          As the online gaming industry continues growing, millions of users are searching for a platform that offers everything in one place. Players want online casino games, trusted cricket betting ID services, fast withdrawals, live gaming experiences, and smooth mobile access. Reddy Line is designed to fulfill all these expectations through a modern platform focused on speed, convenience, security, and user satisfaction.
        </p>
        <p className={clsx('text-[13px]', 'md:text-[14px]', 'text-muted', 'font-light', 'leading-relaxed', 'mt-3')}>
          Whether you are searching for the best online casinos in India, a reliable cricket ID provider, exciting casino game experiences, or a powerful sports exchange, Reddy Line gives you access to everything through one easy-to-use website and mobile app.
        </p>
      </motion.div>

    </div>
  )
}

export default HeroCards


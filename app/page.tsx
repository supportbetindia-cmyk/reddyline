import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CircleDot,
  Clock3,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Star,
  Trophy,
  Zap,
} from "lucide-react";
import PageJsonLd from "./components/PageJsonLd";
import { AnimatedHeading, HomeMotion } from "./components/HomeMotion";
import styles from "./page.module.css";

const liveEvents = [
  { sport: "Cricket", league: "Indian Premier League", time: "14.2 OV", home: "Mumbai", away: "Chennai", score: "128/3", odds: ["1.72", "2.18", "3.40"] },
  { sport: "Football", league: "International Club", time: "64′", home: "Madrid", away: "Manchester", score: "2 — 1", odds: ["1.54", "3.80", "5.20"] },
  { sport: "Tennis", league: "ATP Masters", time: "SET 2", home: "A. Kumar", away: "R. Singh", score: "4 — 3", odds: ["1.88", "—", "1.94"] },
];

const sports = [
  { name: "Cricket", count: "62 live", href: "/cricket", image: "/cricket-gold-v2.png" },
  { name: "Football", count: "41 live", href: "/soccer", image: "/football-gold-v2.png" },
  { name: "Tennis", count: "18 live", href: "/tennis", image: "/tennis-gold-v2.png" },
  { name: "Horse racing", count: "Next in 04:12", href: "/horse-racing", image: "/horse-racing-gold-v2.png" },
];

const faqs = [
  ["What games and sports are available?", "Follow live cricket, football, tennis, badminton and horse racing, then switch to live casino, slots and quick games from the same platform."],
  ["Does Reddy Line work on mobile?", "Yes. Every screen is optimized for mobile, and the dedicated app gives you faster access to live events and account updates."],
  ["How do deposits and withdrawals work?", "Choose a supported payment method from your account. The platform shows the relevant processing information before you confirm."],
  ["How does Reddy Line support responsible play?", "Reddy Line is for adults aged 18+ and provides clear responsible gaming information, limits and support resources."],
];

export default function Home() {
  return (
    <>
      <PageJsonLd path="/" />
      <HomeMotion />
      <div className={styles.page}>
        <section className={styles.hero}>
          <Image src="/reddy-hero-v2.png" alt="" fill priority sizes="100vw" className={styles.heroImage} />
          <div className={styles.heroOverlay} />
          <div className={styles.heroGlow} />

          <div className={styles.heroInner}>
            <div className={styles.heroCopy} data-home-reveal>
              <div className={styles.liveLabel}><span /> India’s live gaming arena</div>
              <h1>Every second<br /><em>changes the game.</em></h1>
              <p>Live cricket exchanges, 2,000+ premium casino games and instant 2-minute UPI payouts — move between sports and casino without ever breaking the action.</p>
              <div className={styles.heroActions}>
                <a href="https://www.reddyline.co/" target="_blank" rel="noreferrer" className={styles.primaryCta}>Play now <ArrowRight size={17} /></a>
                <Link href="/games" className={styles.ghostCta}>Explore games</Link>
              </div>
              <div className={styles.heroStats}>
                <div><strong>₹500Cr+</strong><span>Paid out</span></div>
                <div><strong>10M+</strong><span>Players</span></div>
                <div><strong>2,000+</strong><span>Games</span></div>
                <div><strong>2 min</strong><span>UPI payout</span></div>
              </div>
            </div>
          </div>

          <div className={styles.scrollCue}><span>Scroll to explore</span><i /></div>
        </section>

        <div className={styles.ticker}>
          <div>
            {[...Array(2)].flatMap((_, loop) => [
              <span key={`a-${loop}`}><CircleDot /> 62 cricket events live</span>,
              <span key={`b-${loop}`}><Trophy /> IPL match centre open</span>,
              <span key={`c-${loop}`}><Clock3 /> Horse race starts in 04:12</span>,
              <span key={`d-${loop}`}><Sparkles /> 400+ casino games</span>,
            ])}
          </div>
        </div>

        <main className={styles.content}>
          <section className={styles.liveSection} data-home-reveal>
            <div className={styles.sectionTitle}>
              <div><span className={styles.kicker}>Live match centre</span><AnimatedHeading lines={["The action,", "as it happens."]} highlight="action," /></div>
              <Link href="/highlights">All live events <ArrowRight size={16} /></Link>
            </div>
            <div className={styles.eventGrid}>
              {liveEvents.map((event) => (
                <article key={event.home} className={styles.eventCard} data-home-reveal data-home-tilt>
                  <div className={styles.eventTop}><span><i /> {event.sport}</span><small>{event.time}</small></div>
                  <p>{event.league}</p>
                  <div className={styles.eventTeams}>
                    <div><strong>{event.home}</strong><strong>{event.away}</strong></div>
                    <b>{event.score}</b>
                  </div>
                  <div className={styles.miniOdds}>
                    {event.odds.map((odd, index) => <button key={odd + index}><span>{["1", "X", "2"][index]}</span><strong>{odd}</strong></button>)}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className={styles.sportsSection} data-home-reveal>
            <div className={styles.sectionTitle}>
              <div><span className={styles.kicker}>Choose your sport</span><AnimatedHeading lines={["One arena.", "Every rivalry."]} highlight="rivalry." /></div>
              <Link href="/games">View all sports <ArrowRight size={16} /></Link>
            </div>
            <div className={styles.sportGrid}>
              {sports.map((sport, index) => (
                <Link href={sport.href} className={`${styles.sportCard} ${index === 0 ? styles.sportFeatured : ""}`} key={sport.name} data-home-tilt>
                  <Image src={sport.image} alt="" fill sizes={index === 0 ? "(max-width: 760px) 100vw, 50vw" : "(max-width: 760px) 100vw, 25vw"} />
                  <div className={styles.sportShade} />
                  <span>{sport.count}</span>
                  <div><h3>{sport.name}</h3><ArrowRight /></div>
                </Link>
              ))}
            </div>
          </section>

          <section className={styles.casinoSection} data-home-reveal>
            <Image src="/reddy-casino-v2.png" alt="Black and gold live casino table" fill sizes="100vw" />
            <div className={styles.casinoShade} />
            <div className={styles.casinoCopy}>
              <span className={styles.kicker}>After dark</span>
              <AnimatedHeading lines={["Live tables.", "Real atmosphere."]} highlight="atmosphere." />
              <p>Step onto a cinematic casino floor with live roulette, blackjack, Teen Patti and instant games available around the clock.</p>
              <Link href="/casino" className={styles.primaryCta}>Enter casino <ArrowRight size={17} /></Link>
            </div>
            <div className={styles.casinoWheel} aria-hidden="true"><div><span>R</span></div></div>
          </section>

          <section className={styles.benefits} data-home-reveal>
            {[
              { icon: Zap, value: "< 2 sec", title: "Fast by design", text: "Quick loading and seamless movement between markets." },
              { icon: ShieldCheck, value: "24 / 7", title: "Protected play", text: "Secure account access and responsible gaming support." },
              { icon: Smartphone, value: "100%", title: "Made for mobile", text: "A complete experience on every modern screen." },
              { icon: BadgeCheck, value: "Since ’10", title: "Player focused", text: "Built around clarity, reliability and helpful service." },
            ].map(({ icon: Icon, value, title, text }) => (
              <article key={title} data-home-tilt>
                <div><Icon /><strong>{value}</strong></div>
                <h3>{title}</h3><p>{text}</p>
              </article>
            ))}
          </section>

          <section className={styles.appSection} data-home-reveal>
            <div className={styles.appCopy}>
              <span className={styles.kicker}>Reddy Line mobile</span>
              <AnimatedHeading lines={["The match never", "leaves your hand."]} highlight="hand." />
              <p>Get live scores, quick markets, casino access and account updates in one fast mobile experience.</p>
              <div className={styles.appPoints}>
                <span><BadgeCheck /> Real-time score alerts</span>
                <span><BadgeCheck /> Secure biometric access</span>
                <span><BadgeCheck /> Optimized for every network</span>
              </div>
              <a href="https://www.reddyline.co/" target="_blank" rel="noreferrer" className={styles.primaryCta}>Get the app <ArrowRight size={17} /></a>
            </div>
            <div className={styles.appVisual} data-home-tilt>
              <Image src="/reddy-app-v2.png" alt="Reddy Line mobile sports platform" fill sizes="(max-width: 800px) 100vw, 50vw" />
              <div className={styles.appFloat}><Zap /><span><strong>Live in a tap</strong><small>Fast on every device</small></span></div>
            </div>
          </section>

          <section className={styles.proofSection} data-home-reveal>
            <div className={styles.sectionTitle}>
              <div><span className={styles.kicker}>Player confidence</span><AnimatedHeading lines={["Built for the", "big moments."]} highlight="big" /></div>
              <div className={styles.rating}><strong>4.9</strong><span>{Array.from({ length: 5 }).map((_, i) => <Star key={i} fill="currentColor" />)}<small>Player rating</small></span></div>
            </div>
            <div className={styles.quoteGrid}>
              {[
                ["The live cricket centre is clear and incredibly quick. I can follow everything without the screen feeling crowded.", "Rohit K.", "Mumbai"],
                ["The casino and sports sections finally feel like one premium product. Mobile performance has been excellent.", "Priya S.", "Delhi"],
                ["Support was quick, and the payment flow was easy to understand. It feels reliable from start to finish.", "Amit D.", "Bengaluru"],
              ].map(([quote, name, city]) => (
                <blockquote key={name} data-home-tilt><Star fill="currentColor" /><p>“{quote}”</p><footer><strong>{name}</strong><span>{city}, India</span></footer></blockquote>
              ))}
            </div>
          </section>

          <section className={styles.faqSection} data-home-reveal>
            <div className={styles.faqIntro}><span className={styles.kicker}>Need to know</span><AnimatedHeading lines={["Straight answers.", "No extra noise."]} highlight="answers." /><p>Everything you need before joining the action.</p></div>
            <div className={styles.faqList}>
              {faqs.map(([question, answer], index) => (
                <details key={question} open={index === 0}><summary>{question}<span>+</span></summary><p>{answer}</p></details>
              ))}
            </div>
          </section>

          <section className={styles.finalCta} data-home-reveal>
            <div className={styles.ctaGlow} />
            <span className={styles.kicker}>Your next move</span>
            <AnimatedHeading lines={["The arena is live.", "Step into it."]} highlight="live." />
            <p>Sports, casino and every big moment—ready when you are.</p>
            <a href="https://www.reddyline.co/" target="_blank" rel="noreferrer" className={styles.primaryCta}>Create account <ArrowRight size={17} /></a>
            <small>18+ • Play responsibly</small>
          </section>
        </main>
      </div>
    </>
  );
}

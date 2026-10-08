"use client";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "./Apps.module.css";
import { 
  FaAndroid, 
  FaApple, 
  FaMobileAlt, 
  FaGamepad, 
  FaLock, 
  FaHandshake, 
  FaChartLine, 
  FaPalette, 
  FaGlobe, 
  FaSignal, 
  FaShieldAlt, 
  FaCheck, 
  FaCrown,
  FaPlane,
  FaDice,
  FaTrophy,
  FaFutbol,
  FaCoins,
  FaLifeRing
} from "react-icons/fa";
import { IoFlash } from "react-icons/io5";
import { GiCricketBat, GiTennisBall } from "react-icons/gi";
import { IosDownloadButton } from "../components/IosInstallPrompt";
import AppsFaq from "../components/AppsFaq";
import ScrollReveal from "../components/ScrollReveal";

type MockTab = "home" | "casino" | "sports" | "security";
 
export default function Apps() {
  const [activeTab, setActiveTab] = useState<MockTab>("home");
 
  const benefits = [
    { icon: <FaMobileAlt />, title: "Mobile-first interface", desc: "Clean navigation and simple layouts designed for touch. No pinching to zoom or hunting for buttons." },
    { icon: <IoFlash />, title: "Fast startup speeds", desc: "Lightweight build gets you in quickly. No extended splash screens or slow asset loads." },
    { icon: <FaCoins />, title: "Smooth casino gaming", desc: "Play Poker, Slots, Teen Patti, and Aviator without freezes or dropped connections." },
    { icon: <GiCricketBat />, title: "Instant cricket ID access", desc: "Create, access, and fund your cricket ID in seconds. No desktop required." },
    { icon: <FaTrophy />, title: "Live sports betting", desc: "Real-time updates and active wagering on major global events as they happen." },
    { icon: <FaGamepad />, title: "Optimized gameplay controls", desc: "Graphics and input controls scale cleanly to any screen size, on any smartphone." },
    { icon: <FaLock />, title: "Proper account security", desc: "Two-layer encryption, biometric logins, and secure server infrastructure." },
    { icon: <FaHandshake />, title: "All Android and iOS models", desc: "Tested and optimized for both platforms, including older hardware." },
    { icon: <FaChartLine />, title: "Live scores and odds", desc: "Instant updates on scores, cashout values, and shifting odds without a page refresh." },
  ];
 
  return (
    <div className={styles.page}>
      <ScrollReveal />

      {/* â”€â”€ HERO â”€â”€ */}
      <section className={styles.hero}>
        <div className={styles.heroLeft}>
          <div className={styles.tag}>Reddy Line Mobile App
</div>
          <h1 className={styles.heroTitle}>
            Download the <span className={styles.gold}>Reddy Line App</span> for Casino Games and Live Sports
          </h1>
          <p className={styles.heroDesc}>
          The Reddy Line App gives users access to casino games, live sports, cricket IDs, and mobile gaming features from one easy-to-use platform.

          </p>
          <p className={styles.heroSub}>
            Clean interface, fast loads, and a layout that just makes sense. Whether you&apos;re on the bus or watching the match from your couch, you&apos;re two taps away from the action.
          </p>
          <div className={styles.downloadBadges}>
            <a href="#" className={styles.badge}>
              <FaAndroid className={styles.badgeIcon} />
              <div>
                <span className={styles.badgeSub}>Download for</span>
                <span className={styles.badgeName}>Android APK</span>
              </div>
            </a>
            <IosDownloadButton className={styles.badge}>
              <FaApple className={styles.badgeIcon} />
              <div>
                <span className={styles.badgeSub}>Available on</span>
                <span className={styles.badgeName}>iOS App Store</span>
              </div>
            </IosDownloadButton>
          </div>
        </div>
 
        {/* Phone Mockup */}
        <div className={styles.phoneWrap}>
          <div className={styles.phoneOuter}>
            <div className={styles.phoneNotch}>
              <div className={styles.notchSensor} />
              <div className={styles.notchCamera} />
            </div>
            <div className={styles.phoneScreen}>
 
              {/* HOME TAB */}
              {activeTab === "home" && (
                <div className={styles.phoneImageWrapper}>
                  <Image src="/app-screen-gold-v2.png" alt="Reddy Line Home Screen" width={434} height={917} className={styles.phoneImage} />
                </div>
              )}
 
              {/* CASINO TAB */}
              {activeTab === "casino" && (
                  <div className={styles.phoneImageWrapper}>
                  <Image src="/app-casino-gold-v2.png" alt="Reddy Line Casino Screen" width={434} height={917} className={styles.phoneImage} />
                </div>
              )}
 
              {/* SPORTS TAB */}
              {activeTab === "sports" && (
                <div className={clsx(styles.tabContent, styles.sportsScreen)}>
                  <div className={styles.sportsHeader}>
                    <div className={styles.sportsTitle}><GiCricketBat className="inline mr-1 text-[20px] align-middle" /> Sports <span>Bet</span></div>
                    <span className={styles.liveOddsLabel}>Live Odds</span>
                  </div>
                  <div className={styles.scoreboard}>
                    <div className={styles.sbTop}>
                      <span className={styles.sbFormat}>T20 International</span>
                      <span className={styles.sbOver}>Over 18.2</span>
                    </div>
                    <div className={styles.sbTeam}><span className={styles.sbTeamName}>IND</span><span className={styles.sbScoreGold}>186/4</span></div>
                    <div className={styles.sbTeam}><span className={styles.sbTeamName}>PAK</span><span className={styles.sbScoreMuted}>Yet to bat</span></div>
                    <div className={styles.sbDivider} />
                    <div className={styles.sbOdds}>
                      <div className={styles.sbOdd}><div className={styles.sbOddLabel}>India</div><div className={styles.sbOddVal}>1.65</div></div>
                      <div className={styles.sbOdd}><div className={styles.sbOddLabel}>Pakistan</div><div className={clsx(styles.sbOddVal, styles.muted)}>2.25</div></div>
                    </div>
                  </div>
                  <div className={styles.sportsCats}>
                    {[
                      { icon: <FaFutbol className="mr-1 inline align-middle text-[11px]" />, name: "Football" }, 
                      { icon: <GiTennisBall className="mr-1 inline align-middle text-[11px]" />, name: "Tennis" }, 
                      { icon: <FaGamepad className="mr-1 inline align-middle text-[11px]" />, name: "Esports" }
                    ].map((s) => (
                      <div key={s.name} className={styles.sportsCat}>
                        {s.icon} {s.name}
                      </div>
                    ))}
                  </div>
                </div>
              )}
 
              {/* SECURITY TAB */}
              {activeTab === "security" && (
                <div className={clsx(styles.tabContent, styles.secScreen)}>
                  <div className={styles.secShield}><FaShieldAlt className="text-[40px] text-gold" /></div>
                  <div>
                    <div className={styles.secTitle}>Secure Platform</div>
                    <div className={styles.secStatus}>SSL Active & Certified</div>
                  </div>
                  <div className={styles.secItems}>
                    {[
                      { title: "Accounts protected", desc: "Biometric login & 2FA enabled" },
                      { title: "Personal details safe", desc: "GDPR privacy rules compliant" },
                      { title: "Transactions encrypted", desc: "Secure digital banking checkout" },
                    ].map((s, i) => (
                      <div key={i} className={styles.secItem}>
                        <div className={styles.secItemTitle}><FaCheck className={styles.secCheck} /> {s.title}</div>
                        <div className={styles.secItemDesc}>{s.desc}</div>
                      </div>
                    ))}
                  </div>
                  <div className={styles.secFooter}>Improvements deployed continuously.</div>
                </div>
              )}
 
            </div>
          </div>
 
          {/* Tab Switcher */}
          <div className={styles.tabSwitcher}>
            {(["home", "casino", "sports", "security"] as MockTab[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={clsx(styles.tabBtn, activeTab === tab && styles.tabBtnActive)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </section>
 
      {/* â”€â”€ HIGHLIGHTS â”€â”€ */}
      <section className={styles.highlights}>
        <div className={styles.highlightsInner}>
          <div className={styles.highlightsHeader}>
            <div>
              <span className={styles.eyebrow}>Designed for convenience</span>
              <h2 className={styles.sectionTitle}>Built for real<br />mobile players</h2>
            </div>
            <p className={styles.sectionDesc}>Fast loads, clean navigation, and a layout that doesn&apos;t get in the way. Access everything from one place â€” no desktop required.</p>
          </div>
          <div className={styles.highlightsGrid}>
            <div className={clsx(styles.hlCard, styles.hlFeatured)}>
              <div className={styles.hlIcon}><FaPalette /></div>
              <h3 className={styles.hlTitle}>Interface that actually makes sense</h3>
              <p className={styles.hlDesc}>No cluttered menus or buried features. The home screen gets you to your wallet, live matches, or casino in under two taps. Built for people who&apos;d rather play than navigate.</p>
              <span className={styles.hlStat}>2M+</span>
              <div className={styles.hlStatLabel}>Active players worldwide</div>
            </div>
            <div className={styles.hlCard}>
              <div className={styles.hlIcon}><IoFlash /></div>
              <h3 className={styles.hlTitle}>Loads fast, stays fast</h3>
              <p className={styles.hlDesc}>Lightweight architecture means no lag when odds are shifting in real time.</p>
            </div>
            <div className={styles.hlCard}>
              <div className={styles.hlIcon}><FaGlobe /></div>
              <h3 className={styles.hlTitle}>Works on any Android or iPhone</h3>
              <p className={styles.hlDesc}>Tested across hundreds of device types. No model exclusions.</p>
            </div>
            <div className={styles.hlCard}>
              <div className={styles.hlIcon}><FaSignal /></div>
              <h3 className={styles.hlTitle}>Play anywhere</h3>
              <p className={styles.hlDesc}>Commuting, traveling, or watching from your couch â€” your account follows you.</p>
            </div>
          </div>
        </div>
      </section>
 
      {/* â”€â”€ CASINO DEEP DIVE â”€â”€ */}
      <section className={styles.casinoSection}>
        <div className={styles.casinoPhoneWrap}>
          <div className={styles.casinoPhoneOuter}>
            <div className={styles.casinoPhoneNotch} />
            <div className={styles.casinoPhoneScreen}>
              
             <div className={styles.phoneImageWrapper}>
                  <Image src="/app-live-gold-v2.png" alt="Reddy Line Live Match Screen" width={434} height={917} className={styles.phoneImage} />
                </div>
            
            </div>
          </div>
        </div>
 
        <div className={styles.casinoText}>
          <span className={styles.eyebrow}>Casino on the go</span>
          <h2 className={styles.sectionTitle}>All your favourite<br />casino games</h2>
          <p className={styles.sectionDesc}>Slots, live tables, crash games â€” all optimized for touchscreen. No compromises on graphics or control responsiveness when you&apos;re playing on mobile.</p>
          <div className={styles.gameList}>
            {[
              { name: "Poker & Blackjack", label: "Classic card logic" },
              { name: "Teen Patti", label: "Regional favourite" },
              { name: "Andar Bahar", label: "High-speed bet action" },
              { name: "Aviator & Slots", label: "Instant multiplier reels" },
            ].map((g, i) => (
              <div key={i} className={styles.gameItem}>
                <div className={styles.gameItemName}>{g.name}</div>
                <div className={styles.gameItemLabel}>{g.label}</div>
              </div>
            ))}
          </div>
          <p className={styles.casinoBodyText}>Browse categories, launch a game, and pick up mid-session without losing progress. The interface stays out of the way so the game can do its thing.</p>
        </div>
      </section>
 
      {/* â”€â”€ CRICKET SECTION â”€â”€ */}
      <section className={styles.cricketSection}>
        <div className={styles.cricketInner}>
          <div className={styles.cricketText}>
            <span className={styles.eyebrow}>Cricket ID & Sportsbook</span>
            <h2 className={styles.sectionTitle}>Bet on cricket<br />the right way</h2>
            <p className={styles.sectionDesc}>Live match data, shifting odds, and a cricket ID system that takes seconds to set up. Everything cricket fans need, in one place.</p>
            <div className={styles.featureList}>
              {[
                { icon: <GiCricketBat />, title: "Your own Cricket ID", desc: "Set up and fund a customized cricket ID for global betting exchanges, instantly from the app." },
                { icon: <FaMobileAlt />, title: "Live odds, fast bets", desc: "Place bets while the match is live. Odds update in real time, and the interface doesn't lag when it matters." },
                { icon: <FaFutbol />, title: "Football, tennis, and more", desc: "Beyond cricket â€” explore Premier League, Grand Slams, NBA, and esports markets all in the same app." },
              ].map((f, i) => (
                <div key={i} className={styles.featureItem}>
                  <div className={styles.featureIcon}>{f.icon}</div>
                  <div>
                    <div className={styles.featureTitle}>{f.title}</div>
                    <div className={styles.featureDesc}>{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
  
          <div className={styles.cricketPhoneWrap}>
            <div className={styles.cricketPhoneOuter}>
              <div className={styles.cricketPhoneNotch} />
              <div className={styles.cricketPhoneScreen}>
                <div className={styles.cktHeader}>
                  <div className={styles.cktTitle}><GiCricketBat className="inline mr-1 text-[16px] align-middle" /> Cricket Live</div>
                  <div className={styles.cktLive}>LIVE</div>
                </div>
                <div className={styles.cktMatch}>
                  <div className={styles.cktFormat}>IPL League Match</div>
                  <div className={styles.cktTeam}><span className={styles.cktTeamName}>Royal Challengers</span><span className={styles.cktScoreGold}>142/3</span></div>
                  <div className={styles.cktTeam}><span className={styles.cktTeamName}>Delhi Capitals</span><span className={styles.cktScoreMuted}>Innings start</span></div>
                  <div className={styles.cktRrr}>Req. Run Rate: 7.15</div>
                </div>
                <div className={styles.cktOdds}>
                  <div className={styles.cktOddLabel}>Active Odds Exchange</div>
                  <div className={styles.cktOddRow}><span className={styles.cktOddTeam}>RCB Win</span><span className={styles.cktOddVal}>1.85</span></div>
                  <div className={styles.cktOddRow}><span className={styles.cktOddTeam}>DC Win</span><span className={clsx(styles.cktOddVal, styles.muted)}>2.10</span></div>
                </div>
                <div className={styles.cktBetBtn}>PLACE QUICK BET</div>
              </div>
            </div>
          </div>
        </div>
      </section>
 
      {/* â”€â”€ WHY SECTION â”€â”€ */}
      <section className={styles.whySection}>
        <div className={styles.whyHeader}>
          <h2 className={styles.sectionTitle}>Why Players Prefer the Reddy Line App</h2>
          <p className={styles.sectionDesc}>A secure, reliable layout built for how people actually play  on the go, on their phone, in the moment.</p>
        </div>
        <div className={styles.whyGrid}>
          {benefits.map((b, i) => (
            <div key={i} className={styles.whyCard}>
              <div className={styles.whyCardIcon}>{b.icon}</div>
              <div className={styles.whyCardTitle}>{b.title}</div>
              <div className={styles.whyCardDesc}>{b.desc}</div>
            </div>
          ))}
        </div>
      </section>
 
      {/* â”€â”€ INSTALL SECTION â”€â”€ */}
      <section className={styles.installSection}>
        <div className={styles.installInner}>
          <div className={styles.installHeader}>
            <div className={styles.tag}>Setup guide</div>
            <h2 className={styles.sectionTitle}>Get the app installed<br />in under two minutes</h2>
            <p className={styles.sectionDesc}>Follow these steps to set up Reddy Line on your smartphone.</p>
          </div>
          <div className={styles.installGrid}>
            <div className={styles.installCard}>
              <h3 className={styles.installCardTitle}><FaAndroid className="inline mr-1 text-[20px] align-middle" /> Android</h3>
              <ol className={styles.installSteps}>
                {[
                  <span key={1}>Tap <strong>Download APK</strong> to save the setup file to your phone.</span>,
                  <span key={2}>Go to Settings and enable <strong>Install from unknown sources</strong>.</span>,
                  <span key={3}>Open the downloaded APK file and tap <strong>Install</strong>.</span>,
                  <span key={4}>Launch the app and sign in to start playing.</span>,
                ].map((step, i) => (
                  <li key={i} className={styles.installStep}>
                    <span className={styles.stepNum}>{i + 1}</span>
                    <span className={styles.stepText}>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
            <div className={styles.installCard}>
              <h3 className={styles.installCardTitle}><FaApple className="inline mr-1 text-[20px] align-middle" /> iOS</h3>
              <ol className={styles.installSteps}>
                {[
                  <span key={1}>Open the Reddy Line portal in <strong>Safari</strong> on your iPhone.</span>,
                  <span key={2}>Tap the <strong>Share button</strong> at the bottom of the browser toolbar.</span>,
                  <span key={3}>Select <strong>Add to Home Screen</strong> from the menu.</span>,
                  <span key={4}>Open the shortcut like any app, log in, and you&apos;re in.</span>,
                ].map((step, i) => (
                  <li key={i} className={styles.installStep}>
                    <span className={styles.stepNum}>{i + 1}</span>
                    <span className={styles.stepText}>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <AppsFaq />

      {/* â”€â”€ CTA â”€â”€ */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaGlow} />
        <div className={styles.ctaInner}>
          <span className={styles.ctaTag}>Unleash the action</span>
          <h2 className={styles.ctaTitle}>Start Playing with the Reddy Line Mobile App
</h2>
          <p className={styles.ctaDesc}>Download the Reddy Line App to get a smooth, secure gaming environment wherever you are. Cricket IDs, slots, live betting, instant withdrawals  all in one place.</p>
          <div className={styles.ctaBtns}>
            <a href="#" className={styles.btnGold}><FaMobileAlt className="mr-1.5 inline align-middle text-[14px]" /> Download APK</a>
            <Link href="/games" className={styles.btnOutline}>Browse Games</Link>
          </div>
        </div>
      </section>
 
    </div>
  );
}

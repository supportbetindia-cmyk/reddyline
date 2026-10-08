"use client";

import clsx from "clsx";
import Link from "next/link";
import { useState, useEffect } from "react";
import { 
  FaRegFileAlt,
  FaUserCheck,
  FaUserShield,
  FaLock,
  FaCreditCard,
  FaDice,
  FaGift,
  FaHeart,
  FaBalanceScale,
  FaShieldAlt,
  FaBan,
  FaExclamationTriangle,
  FaEdit,
  FaEnvelope,
  FaCheckCircle,
  FaTimesCircle
} from "react-icons/fa";
import ScrollReveal from "../components/ScrollReveal";
import { PageArtwork } from "../components/PageArtwork";

const sections = [
    { id: "welcome", title: "Introduction", icon: FaRegFileAlt },
    { id: "acceptance", title: "Acceptance of Terms", icon: FaUserCheck },
    { id: "eligibility", title: "Eligibility", icon: FaUserShield },
    { id: "account-rules", title: "Account Rules", icon: FaLock },
    { id: "deposits-withdrawals", title: "Deposits & Withdrawals", icon: FaCreditCard },
    { id: "gaming-rules", title: "Betting & Gaming Rules", icon: FaDice },
    { id: "bonuses-promotions", title: "Bonuses & Promotions", icon: FaGift },
    { id: "responsible-gambling", title: "Responsible Gambling", icon: FaHeart },
    { id: "intellectual-property", title: "Intellectual Property", icon: FaBalanceScale },
    { id: "privacy-protection", title: "Privacy & Data Protection", icon: FaShieldAlt },
    { id: "suspension-closure", title: "Account Suspension", icon: FaBan },
    { id: "liability", title: "Limitation of Liability", icon: FaExclamationTriangle },
    { id: "changes-terms", title: "Changes to Terms", icon: FaEdit },
    { id: "contact-support", title: "Contact Support", icon: FaEnvelope },
];

export default function TermsAndRulesPage() {
  const [activeSection, setActiveSection] = useState("welcome");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -55% 0px", threshold: 0.1 }
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((section) => {
        const el = document.getElementById(section.id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 100; // Offset for fixed header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setActiveSection(id);
    }
  };

  return (
    <>
      <ScrollReveal />

      {/* ===== HERO SECTION ===== */}
      <section className={clsx('relative', 'pt-[150px]', 'pb-[80px]', 'px-[5%]', 'bg-bg', 'overflow-hidden')}>
        <div className={clsx('absolute', 'top-1/2', 'left-1/2', '-translate-x-1/2', '-translate-y-1/2', 'w-[800px]', 'h-[600px]', 'bg-[radial-gradient(ellipse,rgba(0,120,229,0.06)_0%,transparent_70%)]', 'pointer-events-none')} />

        <div className={clsx('max-w-[1200px]', 'mx-auto', 'relative', 'z-10', 'text-left', 'sm:text-center', 'reveal')}>
          <div className={clsx('section-tag', 'justify-center')}>Platform Guidelines</div>
          <h1 className={clsx('font-bebas', 'text-[clamp(44px,7vw,90px)]', 'tracking-[1px]', 'leading-[1.05]', 'text-white', 'mb-4')}>
            Terms & <span className="text-gold">Conditions
</span>
          </h1>
          <p className={clsx('text-[16px]', 'text-muted', 'leading-[1.8]', 'font-light', 'max-w-[650px]', 'mx-auto')}>
           These Terms & Conditions govern your use of the Reddy Line platform, including account registration, deposits, withdrawals, betting activities, promotions, and platform services.

          </p>
        </div>
        <PageArtwork
          src="/reddy-sports-v2.png"
          alt="Reddy Line sports platform covered by clear rules"
          label="Clear platform guidelines for every game"
        />
      </section>

      {/* ===== MAIN CONTENT ===== */}
      <section className={clsx('pb-[120px]', 'px-[5%]', 'bg-bg')}>
        <div className={clsx('max-w-[1200px]', 'mx-auto')}>
          <div className={clsx('grid', 'grid-cols-1', 'lg:grid-cols-12', 'gap-12', 'items-start')}>
            
            {/* Left Sticky Sidebar (Desktop only) */}
            <aside className={clsx('hidden', 'lg:block', 'lg:col-span-4', 'sticky', 'top-[100px]', 'max-h-[calc(100vh-140px)]', 'overflow-y-auto', 'bg-bg2', 'border', 'border-border', 'rounded-2xl', 'p-6', 'custom-scrollbar')}>
              <h4 className={clsx('font-syne', 'text-[14px]', 'font-bold', 'text-white', 'uppercase', 'tracking-[1px]', 'mb-5', 'border-b', 'border-border', 'pb-3')}>
                Table of Contents
              </h4>
              <nav className={clsx('flex', 'flex-col', 'gap-2')}>
                {sections.map((sec) => {
                  const Icon = sec.icon;
                  const isActive = activeSection === sec.id;
                  return (
                    <button
                      key={sec.id}
                      onClick={() => handleScrollTo(sec.id)}
                      className={clsx(
                        'flex', 'items-center', 'gap-3', 'text-left', 'py-3', 'px-4', 'rounded-xl',
                        'transition-all', 'duration-250', 'text-[13px]', 'font-medium',
                        isActive 
                          ? 'bg-gold/10 text-gold border-l-2 border-gold font-semibold' 
                          : 'text-muted hover:text-white hover:bg-white/[0.02] border-l-2 border-transparent'
                      )}
                    >
                      <Icon className={clsx('text-[16px]', isActive ? 'text-gold' : 'text-muted')} />
                      <span>{sec.title}</span>
                    </button>
                  );
                })}
              </nav>
            </aside>

            {/* Right Content */}
            <div className={clsx('lg:col-span-8', 'flex', 'flex-col', 'gap-8')}>
              
              {/* Section 1: Terms and Rules (Welcome) */}
              <article id="welcome" className={clsx('bg-card', 'border', 'border-border', 'rounded-2xl', 'p-8', 'md:p-10', 'reveal', 'relative', 'overflow-hidden')}>
                <div className={clsx('absolute', 'top-0', 'right-0', 'w-[150px]', 'h-[150px]', 'bg-[radial-gradient(circle,rgba(0,120,229,0.03)_0%,transparent_70%)]', 'pointer-events-none')} />
                
                <div className={clsx('flex', 'items-center', 'gap-3.5', 'mb-6')}>
                  <div className={clsx('w-10', 'h-10', 'rounded-lg', 'bg-gold/10', 'flex', 'items-center', 'justify-center', 'text-gold')}>
                    <FaRegFileAlt size={18} />
                  </div>
                  <h2 className={clsx('font-bebas', 'text-[32px]', 'text-white', 'tracking-[1px]')}>
                   Introduction
                  </h2>
                </div>

                <div className={clsx('flex', 'flex-col', 'gap-6', 'text-[15px]', 'text-muted', 'leading-[1.8]', 'font-light')}>
                  <p>
                    Welcome to Reddy Line. By accessing and using our platform you agree to follow the terms conditions and rules described on this page. These Terms and Rules are designed to maintain a secure fair and transparent environment for all users using Reddy Line services.
                  </p>
                  <p className={clsx('bg-gold/5', 'border-l-2', 'border-gold', 'p-4', 'rounded-r-lg', 'text-white', 'font-normal')}>
                    Users are advised to read these terms carefully before creating an account using the platform or participating in gaming and betting activities.
                  </p>
                </div>
              </article>

              {/* Section 2: Acceptance of Terms */}
              <article id="acceptance" className={clsx('bg-card', 'border', 'border-border', 'rounded-2xl', 'p-8', 'md:p-10', 'reveal', 'relative', 'overflow-hidden')}>
                <div className={clsx('absolute', 'top-0', 'right-0', 'w-[150px]', 'h-[150px]', 'bg-[radial-gradient(circle,rgba(0,120,229,0.03)_0%,transparent_70%)]', 'pointer-events-none')} />

                <div className={clsx('flex', 'items-center', 'gap-3.5', 'mb-6')}>
                  <div className={clsx('w-10', 'h-10', 'rounded-lg', 'bg-gold/10', 'flex', 'items-center', 'justify-center', 'text-gold')}>
                    <FaUserCheck size={18} />
                  </div>
                  <h2 className={clsx('font-bebas', 'text-[32px]', 'text-white', 'tracking-[1px]')}>
                    Acceptance of Terms
                  </h2>
                </div>

                <div className={clsx('text-[15px]', 'text-muted', 'leading-[1.8]', 'font-light', 'flex', 'flex-col', 'gap-6')}>
                  <p>
                    By registering on Reddy Line users confirm that they:
                  </p>
                  
                  <div className={clsx('bg-bg/40', 'border', 'border-border', 'rounded-xl', 'p-6')}>
                    <ul className={clsx('flex', 'flex-col', 'gap-3.5', 'list-none', 'p-0', 'm-0')}>
                      {[
                        "Accept all platform terms and conditions",
                        "Agree to follow applicable laws and regulations",
                        "Understand the risks associated with online gaming and betting",
                        "Agree to use the platform responsibly"
                      ].map((item) => (
                        <li key={item} className={clsx('flex', 'items-start', 'gap-3', 'text-[14px]')}>
                          <FaCheckCircle className={clsx('text-gold', 'mt-1', 'flex-shrink-0')} size={14} />
                          <span className="text-muted">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p>
                    If a user does not agree with these terms they should discontinue using the platform immediately.
                  </p>
                </div>
              </article>

              {/* Section 3: Eligibility */}
              <article id="eligibility" className={clsx('bg-card', 'border', 'border-border', 'rounded-2xl', 'p-8', 'md:p-10', 'reveal', 'relative', 'overflow-hidden')}>
                <div className={clsx('absolute', 'top-0', 'right-0', 'w-[150px]', 'h-[150px]', 'bg-[radial-gradient(circle,rgba(0,120,229,0.03)_0%,transparent_70%)]', 'pointer-events-none')} />

                <div className={clsx('flex', 'items-center', 'gap-3.5', 'mb-6')}>
                  <div className={clsx('w-10', 'h-10', 'rounded-lg', 'bg-gold/10', 'flex', 'items-center', 'justify-center', 'text-gold')}>
                    <FaUserShield size={18} />
                  </div>
                  <h2 className={clsx('font-bebas', 'text-[32px]', 'text-white', 'tracking-[1px]')}>
                    Eligibility
                  </h2>
                </div>

                <div className={clsx('text-[15px]', 'text-muted', 'leading-[1.8]', 'font-light', 'flex', 'flex-col', 'gap-6')}>
                  <p>
                    Users must meet the legal age requirement according to their local laws before accessing Reddy Line services.
                  </p>

                  <div className={clsx('bg-bg/40', 'border', 'border-border', 'rounded-xl', 'p-6')}>
                    <p className={clsx('text-white', 'font-medium', 'mb-4', 'text-[14px]')}>By creating an account users confirm that:</p>
                    <ul className={clsx('flex', 'flex-col', 'gap-3.5', 'list-none', 'p-0', 'm-0')}>
                      {[
                        "They are legally allowed to use online gaming services",
                        "All information provided during registration is accurate",
                        "They are using the platform for personal entertainment purposes only"
                      ].map((item) => (
                        <li key={item} className={clsx('flex', 'items-start', 'gap-3', 'text-[14px]')}>
                          <FaCheckCircle className={clsx('text-gold', 'mt-1', 'flex-shrink-0')} size={14} />
                          <span className="text-muted">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p>
                    Reddy Line reserves the right to request identity verification and suspend accounts if false information is detected.
                  </p>
                </div>
              </article>

              {/* Section 4: Account Rules */}
              <article id="account-rules" className={clsx('bg-card', 'border', 'border-border', 'rounded-2xl', 'p-8', 'md:p-10', 'reveal', 'relative', 'overflow-hidden')}>
                <div className={clsx('absolute', 'top-0', 'right-0', 'w-[150px]', 'h-[150px]', 'bg-[radial-gradient(circle,rgba(232,48,58,0.03)_0%,transparent_70%)]', 'pointer-events-none')} />

                <div className={clsx('flex', 'items-center', 'gap-3.5', 'mb-6')}>
                  <div className={clsx('w-10', 'h-10', 'rounded-lg', 'bg-red/10', 'flex', 'items-center', 'justify-center', 'text-red')}>
                    <FaLock size={18} />
                  </div>
                  <h2 className={clsx('font-bebas', 'text-[32px]', 'text-white', 'tracking-[1px]')}>
                    Account Rules
                  </h2>
                </div>

                <div className={clsx('text-[15px]', 'text-muted', 'leading-[1.8]', 'font-light', 'flex', 'flex-col', 'gap-6')}>
                  <p>
                    Users are responsible for maintaining the security of their account information login credentials and passwords.
                  </p>

                  <div className={clsx('bg-bg/40', 'border', 'border-border', 'rounded-xl', 'p-6')}>
                    <p className={clsx('text-white', 'font-medium', 'mb-4', 'text-[14px]')}>Users Must Not:</p>
                    <ul className={clsx('flex', 'flex-col', 'gap-3.5', 'list-none', 'p-0', 'm-0')}>
                      {[
                        "Share account access with others",
                        "Create multiple accounts for unfair advantage",
                        "Use false or misleading personal information",
                        "Attempt unauthorized access to other accounts",
                        "Use automated systems bots or fraudulent activity"
                      ].map((item) => (
                        <li key={item} className={clsx('flex', 'items-start', 'gap-3', 'text-[14px]')}>
                          <FaTimesCircle className={clsx('text-red', 'mt-1', 'flex-shrink-0')} size={14} />
                          <span className="text-muted">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p>
                    Any violation may result in account suspension limitation or permanent closure.
                  </p>
                </div>
              </article>

              {/* Section 5: Deposits and Withdrawals */}
              <article id="deposits-withdrawals" className={clsx('bg-card', 'border', 'border-border', 'rounded-2xl', 'p-8', 'md:p-10', 'reveal', 'relative', 'overflow-hidden')}>
                <div className={clsx('absolute', 'top-0', 'right-0', 'w-[150px]', 'h-[150px]', 'bg-[radial-gradient(circle,rgba(0,120,229,0.03)_0%,transparent_70%)]', 'pointer-events-none')} />

                <div className={clsx('flex', 'items-center', 'gap-3.5', 'mb-6')}>
                  <div className={clsx('w-10', 'h-10', 'rounded-lg', 'bg-gold/10', 'flex', 'items-center', 'justify-center', 'text-gold')}>
                    <FaCreditCard size={18} />
                  </div>
                  <h2 className={clsx('font-bebas', 'text-[32px]', 'text-white', 'tracking-[1px]')}>
                    Deposits and Withdrawals
                  </h2>
                </div>

                <div className={clsx('text-[15px]', 'text-muted', 'leading-[1.8]', 'font-light', 'flex', 'flex-col', 'gap-6')}>
                  <p>
                    Reddy Line provides secure payment systems for deposits and withdrawals.
                  </p>

                  <div className={clsx('bg-bg/40', 'border', 'border-border', 'rounded-xl', 'p-6')}>
                    <p className={clsx('text-white', 'font-medium', 'mb-4', 'text-[14px]')}>Important Conditions</p>
                    <ul className={clsx('flex', 'flex-col', 'gap-3.5', 'list-none', 'p-0', 'm-0')}>
                      {[
                        "Users must use payment methods registered in their own name",
                        "Verification may be required before withdrawals are processed",
                        "Processing times may vary depending on payment methods",
                        "Suspicious or fraudulent transactions may be investigated"
                      ].map((item) => (
                        <li key={item} className={clsx('flex', 'items-start', 'gap-3', 'text-[14px]')}>
                          <FaCheckCircle className={clsx('text-gold', 'mt-1', 'flex-shrink-0')} size={14} />
                          <span className="text-muted">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p>
                    Reddy Line reserves the right to limit refuse or cancel transactions that violate platform rules or legal requirements.
                  </p>
                </div>
              </article>

              {/* Section 6: Betting and Gaming Rules */}
              <article id="gaming-rules" className={clsx('bg-card', 'border', 'border-border', 'rounded-2xl', 'p-8', 'md:p-10', 'reveal', 'relative', 'overflow-hidden')}>
                <div className={clsx('absolute', 'top-0', 'right-0', 'w-[150px]', 'h-[150px]', 'bg-[radial-gradient(circle,rgba(0,120,229,0.03)_0%,transparent_70%)]', 'pointer-events-none')} />

                <div className={clsx('flex', 'items-center', 'gap-3.5', 'mb-6')}>
                  <div className={clsx('w-10', 'h-10', 'rounded-lg', 'bg-gold/10', 'flex', 'items-center', 'justify-center', 'text-gold')}>
                    <FaDice size={18} />
                  </div>
                  <h2 className={clsx('font-bebas', 'text-[32px]', 'text-white', 'tracking-[1px]')}>
                    Betting and Gaming Rules
                  </h2>
                </div>

                <div className={clsx('text-[15px]', 'text-muted', 'leading-[1.8]', 'font-light', 'flex', 'flex-col', 'gap-6')}>
                  <p>
                    All gaming betting and sportsbook activities are settled according to official platform rules and market conditions.
                  </p>

                  <div className={clsx('bg-bg/40', 'border', 'border-border', 'rounded-xl', 'p-6')}>
                    <p className={clsx('text-white', 'font-medium', 'mb-4', 'text-[14px]')}>General Betting Conditions</p>
                    <ul className={clsx('flex', 'flex-col', 'gap-3.5', 'list-none', 'p-0', 'm-0')}>
                      {[
                        "All bets are considered final once accepted",
                        "Incorrect odds technical errors or display mistakes may result in canceled bets",
                        "Official event results determine settlement outcomes",
                        "Reddy Line reserves the right to void bets affected by technical issues or suspicious activity"
                      ].map((item) => (
                        <li key={item} className={clsx('flex', 'items-start', 'gap-3', 'text-[14px]')}>
                          <FaCheckCircle className={clsx('text-gold', 'mt-1', 'flex-shrink-0')} size={14} />
                          <span className="text-muted">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p>
                    Specific sports and betting market rules are available in the Sports Rules section of the platform.
                  </p>
                </div>
              </article>

              {/* Section 7: Bonuses and Promotions */}
              <article id="bonuses-promotions" className={clsx('bg-card', 'border', 'border-border', 'rounded-2xl', 'p-8', 'md:p-10', 'reveal', 'relative', 'overflow-hidden')}>
                <div className={clsx('absolute', 'top-0', 'right-0', 'w-[150px]', 'h-[150px]', 'bg-[radial-gradient(circle,rgba(0,120,229,0.03)_0%,transparent_70%)]', 'pointer-events-none')} />

                <div className={clsx('flex', 'items-center', 'gap-3.5', 'mb-6')}>
                  <div className={clsx('w-10', 'h-10', 'rounded-lg', 'bg-gold/10', 'flex', 'items-center', 'justify-center', 'text-gold')}>
                    <FaGift size={18} />
                  </div>
                  <h2 className={clsx('font-bebas', 'text-[32px]', 'text-white', 'tracking-[1px]')}>
                    Bonuses and Promotions
                  </h2>
                </div>

                <div className={clsx('text-[15px]', 'text-muted', 'leading-[1.8]', 'font-light', 'flex', 'flex-col', 'gap-6')}>
                  <p>
                    Promotions bonuses and special offers may be available to eligible users according to campaign conditions.
                  </p>

                  <div className={clsx('bg-bg/40', 'border', 'border-border', 'rounded-xl', 'p-6')}>
                    <p className={clsx('text-white', 'font-medium', 'mb-4', 'text-[14px]')}>Bonus Rules</p>
                    <ul className={clsx('flex', 'flex-col', 'gap-3.5', 'list-none', 'p-0', 'm-0')}>
                      {[
                        "Bonus offers may include wagering requirements",
                        "Abuse of promotional systems is strictly prohibited",
                        "Multiple account usage for bonus abuse may result in account closure",
                        "Reddy Line reserves the right to modify or cancel promotions at any time"
                      ].map((item) => (
                        <li key={item} className={clsx('flex', 'items-start', 'gap-3', 'text-[14px]')}>
                          <FaCheckCircle className={clsx('text-gold', 'mt-1', 'flex-shrink-0')} size={14} />
                          <span className="text-muted">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p>
                    Users should review individual promotion terms before participation.
                  </p>
                </div>
              </article>

              {/* Section 8: Responsible Gambling */}
              <article id="responsible-gambling" className={clsx('bg-card', 'border', 'border-border', 'rounded-2xl', 'p-8', 'md:p-10', 'reveal', 'relative', 'overflow-hidden')}>
                <div className={clsx('absolute', 'top-0', 'right-0', 'w-[150px]', 'h-[150px]', 'bg-[radial-gradient(circle,rgba(30,191,106,0.03)_0%,transparent_70%)]', 'pointer-events-none')} />

                <div className={clsx('flex', 'items-center', 'gap-3.5', 'mb-6')}>
                  <div className={clsx('w-10', 'h-10', 'rounded-lg', 'bg-green/10', 'flex', 'items-center', 'justify-center', 'text-green')}>
                    <FaHeart size={18} />
                  </div>
                  <h2 className={clsx('font-bebas', 'text-[32px]', 'text-white', 'tracking-[1px]')}>
                    Responsible Gambling
                  </h2>
                </div>

                <div className={clsx('text-[15px]', 'text-muted', 'leading-[1.8]', 'font-light', 'flex', 'flex-col', 'gap-6')}>
                  <p>
                    Reddy Line promotes responsible gaming and encourages users to gamble for entertainment purposes only.
                  </p>

                  <div className={clsx('bg-bg/40', 'border', 'border-border', 'rounded-xl', 'p-6')}>
                    <p className={clsx('text-white', 'font-medium', 'mb-4', 'text-[14px]')}>Users are encouraged to:</p>
                    <ul className={clsx('flex', 'flex-col', 'gap-3.5', 'list-none', 'p-0', 'm-0')}>
                      {[
                        "Set personal spending limits",
                        "Avoid chasing losses",
                        "Manage gaming time responsibly",
                        "Take breaks when necessary"
                      ].map((item) => (
                        <li key={item} className={clsx('flex', 'items-start', 'gap-3', 'text-[14px]')}>
                          <FaCheckCircle className={clsx('text-green', 'mt-1', 'flex-shrink-0')} size={14} />
                          <span className="text-muted">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p>
                    If users believe gambling is negatively affecting their life they are encouraged to seek professional support.
                  </p>
                </div>
              </article>

              {/* Section 9: Intellectual Property */}
              <article id="intellectual-property" className={clsx('bg-card', 'border', 'border-border', 'rounded-2xl', 'p-8', 'md:p-10', 'reveal', 'relative', 'overflow-hidden')}>
                <div className={clsx('absolute', 'top-0', 'right-0', 'w-[150px]', 'h-[150px]', 'bg-[radial-gradient(circle,rgba(0,120,229,0.03)_0%,transparent_70%)]', 'pointer-events-none')} />

                <div className={clsx('flex', 'items-center', 'gap-3.5', 'mb-6')}>
                  <div className={clsx('w-10', 'h-10', 'rounded-lg', 'bg-gold/10', 'flex', 'items-center', 'justify-center', 'text-gold')}>
                    <FaBalanceScale size={18} />
                  </div>
                  <h2 className={clsx('font-bebas', 'text-[32px]', 'text-white', 'tracking-[1px]')}>
                    Intellectual Property
                  </h2>
                </div>

                <div className={clsx('text-[15px]', 'text-muted', 'leading-[1.8]', 'font-light', 'flex', 'flex-col', 'gap-5')}>
                  <p>
                    All platform content including logos graphics text software and branding belongs to Reddy Line and may not be copied reproduced or distributed without official permission.
                  </p>
                  <div className={clsx('bg-gold/5', 'border-l-2', 'border-gold', 'p-4', 'rounded-r-lg', 'text-white', 'font-normal')}>
                    Unauthorized use of platform materials may result in legal action.
                  </div>
                </div>
              </article>

              {/* Section 10: Privacy and Data Protection */}
              <article id="privacy-protection" className={clsx('bg-card', 'border', 'border-border', 'rounded-2xl', 'p-8', 'md:p-10', 'reveal', 'relative', 'overflow-hidden')}>
                <div className={clsx('absolute', 'top-0', 'right-0', 'w-[150px]', 'h-[150px]', 'bg-[radial-gradient(circle,rgba(0,120,229,0.03)_0%,transparent_70%)]', 'pointer-events-none')} />

                <div className={clsx('flex', 'items-center', 'gap-3.5', 'mb-6')}>
                  <div className={clsx('w-10', 'h-10', 'rounded-lg', 'bg-gold/10', 'flex', 'items-center', 'justify-center', 'text-gold')}>
                    <FaShieldAlt size={18} />
                  </div>
                  <h2 className={clsx('font-bebas', 'text-[32px]', 'text-white', 'tracking-[1px]')}>
                    Privacy and Data Protection
                  </h2>
                </div>

                <div className={clsx('text-[15px]', 'text-muted', 'leading-[1.8]', 'font-light', 'flex', 'flex-col', 'gap-5')}>
                  <p>
                    Reddy Line values user privacy and uses modern security systems to protect personal information and account activity.
                  </p>
                  <p>
                    By using the platform users agree to the collection and processing of information according to the official Privacy Policy.
                  </p>
                </div>
              </article>

              {/* Section 11: Account Suspension and Closure */}
              <article id="suspension-closure" className={clsx('bg-card', 'border', 'border-border', 'rounded-2xl', 'p-8', 'md:p-10', 'reveal', 'relative', 'overflow-hidden')}>
                <div className={clsx('absolute', 'top-0', 'right-0', 'w-[150px]', 'h-[150px]', 'bg-[radial-gradient(circle,rgba(232,48,58,0.03)_0%,transparent_70%)]', 'pointer-events-none')} />

                <div className={clsx('flex', 'items-center', 'gap-3.5', 'mb-6')}>
                  <div className={clsx('w-10', 'h-10', 'rounded-lg', 'bg-red/10', 'flex', 'items-center', 'justify-center', 'text-red')}>
                    <FaBan size={18} />
                  </div>
                  <h2 className={clsx('font-bebas', 'text-[32px]', 'text-white', 'tracking-[1px]')}>
                    Account Suspension and Closure
                  </h2>
                </div>

                <div className={clsx('text-[15px]', 'text-muted', 'leading-[1.8]', 'font-light', 'flex', 'flex-col', 'gap-6')}>
                  <p>
                    Reddy Line reserves the right to suspend restrict or permanently close user accounts for reasons including:
                  </p>

                  <div className={clsx('bg-bg/40', 'border', 'border-border', 'rounded-xl', 'p-6')}>
                    <ul className={clsx('flex', 'flex-col', 'gap-3.5', 'list-none', 'p-0', 'm-0')}>
                      {[
                        "Violation of platform terms",
                        "Fraudulent activity",
                        "Suspicious betting behavior",
                        "False account information",
                        "Bonus abuse",
                        "Illegal activities"
                      ].map((item) => (
                        <li key={item} className={clsx('flex', 'items-start', 'gap-3', 'text-[14px]')}>
                          <span className={clsx('w-2', 'h-2', 'rounded-full', 'bg-red', 'mt-2', 'flex-shrink-0')} />
                          <span className="text-muted">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p>
                    The platform may also limit access to services during security investigations or technical maintenance.
                  </p>
                </div>
              </article>

              {/* Section 12: Limitation of Liability */}
              <article id="liability" className={clsx('bg-card', 'border', 'border-border', 'rounded-2xl', 'p-8', 'md:p-10', 'reveal', 'relative', 'overflow-hidden')}>
                <div className={clsx('absolute', 'top-0', 'right-0', 'w-[150px]', 'h-[150px]', 'bg-[radial-gradient(circle,rgba(232,48,58,0.03)_0%,transparent_70%)]', 'pointer-events-none')} />

                <div className={clsx('flex', 'items-center', 'gap-3.5', 'mb-6')}>
                  <div className={clsx('w-10', 'h-10', 'rounded-lg', 'bg-red/10', 'flex', 'items-center', 'justify-center', 'text-red')}>
                    <FaExclamationTriangle size={18} />
                  </div>
                  <h2 className={clsx('font-bebas', 'text-[32px]', 'text-white', 'tracking-[1px]')}>
                    Limitation of Liability
                  </h2>
                </div>

                <div className={clsx('text-[15px]', 'text-muted', 'leading-[1.8]', 'font-light', 'flex', 'flex-col', 'gap-6')}>
                  <p>
                    Reddy Line is not responsible for losses caused by:
                  </p>

                  <div className={clsx('bg-bg/40', 'border', 'border-border', 'rounded-xl', 'p-6')}>
                    <ul className={clsx('flex', 'flex-col', 'gap-3.5', 'list-none', 'p-0', 'm-0')}>
                      {[
                        "Internet interruptions",
                        "Device failures",
                        "Unauthorized account access caused by user negligence",
                        "Technical issues outside platform control",
                        "External service provider interruptions"
                      ].map((item) => (
                        <li key={item} className={clsx('flex', 'items-start', 'gap-3', 'text-[14px]')}>
                          <span className={clsx('w-2', 'h-2', 'rounded-full', 'bg-red', 'mt-2', 'flex-shrink-0')} />
                          <span className="text-muted">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p>
                    Users are responsible for maintaining the security of their own devices and account credentials.
                  </p>
                </div>
              </article>

              {/* Section 13: Changes to Terms and Rules */}
              <article id="changes-terms" className={clsx('bg-card', 'border', 'border-border', 'rounded-2xl', 'p-8', 'md:p-10', 'reveal', 'relative', 'overflow-hidden')}>
                <div className={clsx('absolute', 'top-0', 'right-0', 'w-[150px]', 'h-[150px]', 'bg-[radial-gradient(circle,rgba(0,120,229,0.03)_0%,transparent_70%)]', 'pointer-events-none')} />

                <div className={clsx('flex', 'items-center', 'gap-3.5', 'mb-6')}>
                  <div className={clsx('w-10', 'h-10', 'rounded-lg', 'bg-gold/10', 'flex', 'items-center', 'justify-center', 'text-gold')}>
                    <FaEdit size={18} />
                  </div>
                  <h2 className={clsx('font-bebas', 'text-[32px]', 'text-white', 'tracking-[1px]')}>
                    Changes to Terms and Rules
                  </h2>
                </div>

                <div className={clsx('text-[15px]', 'text-muted', 'leading-[1.8]', 'font-light', 'flex', 'flex-col', 'gap-5')}>
                  <p>
                    Reddy Line reserves the right to update modify or change these Terms and Rules at any time without prior notice.
                  </p>
                  <p>
                    Users are encouraged to review this page regularly to stay informed about the latest platform conditions and policies.
                  </p>
                </div>
              </article>

              {/* Section 14: Contact Support */}
              <article id="contact-support" className={clsx('bg-card', 'border', 'border-border', 'rounded-2xl', 'p-8', 'md:p-10', 'reveal', 'relative', 'overflow-hidden')}>
                <div className={clsx('absolute', 'top-1/2', 'left-1/2', '-translate-x-1/2', '-translate-y-1/2', 'w-[400px]', 'h-[400px]', 'bg-[radial-gradient(ellipse,rgba(0,120,229,0.04)_0%,transparent_70%)]', 'pointer-events-none')} />

                <div className={clsx('flex', 'items-center', 'gap-3.5', 'mb-6')}>
                  <div className={clsx('w-10', 'h-10', 'rounded-lg', 'bg-gold/10', 'flex', 'items-center', 'justify-center', 'text-gold')}>
                    <FaEnvelope size={18} />
                  </div>
                  <h2 className={clsx('font-bebas', 'text-[32px]', 'text-white', 'tracking-[1px]')}>
                    Contact Support
                  </h2>
                </div>

                <div className={clsx('text-[15px]', 'text-muted', 'leading-[1.8]', 'font-light', 'flex', 'flex-col', 'gap-6', 'relative', 'z-10')}>
                  <p>
                    If you have any questions regarding these Terms and Rules users may contact the Reddy Line support team through the official support channels available on the platform
                  </p>
                  
                  <div className={clsx('flex', 'flex-wrap', 'gap-4', 'mt-2')}>
                    <Link href="/contact" className={clsx('btn', 'btn-gold')}>
                      <FaEnvelope /> Contact Support
                    </Link>
                    <Link href="/" className={clsx('btn', 'btn-ghost')}>
                      Back to Home
                    </Link>
                  </div>
                </div>
              </article>

            </div>

          </div>
        </div>
      </section>
    </>
  );
}

"use client";

import clsx from "clsx";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  FaShieldAlt,
  FaArrowCircleDown, 
  FaArrowCircleUp, 
  FaUserCheck, 
  FaExclamationCircle, 
  FaLock, 
  FaMobileAlt, 
  FaWallet, 
  FaHeadset, 
  FaCheckCircle,
  FaShieldVirus
} from "react-icons/fa";
import ScrollReveal from "../components/ScrollReveal";
import { PageArtwork } from "../components/PageArtwork";

const sections = [
  { id: "welcome", title: "Deposit & Withdrawal", icon: FaWallet },
  { id: "secure-system", title: "Secure Payment System", icon: FaShieldAlt },
  { id: "deposit-process", title: "Easy Deposit Process", icon: FaArrowCircleDown },
  { id: "withdrawal-service", title: "Fast Withdrawal Service", icon: FaArrowCircleUp },
  { id: "verification", title: "Account Verification", icon: FaUserCheck },
  { id: "rules-conditions", title: "Payment Rules", icon: FaExclamationCircle },
  { id: "transaction-security", title: "Transaction Security", icon: FaLock },
  { id: "mobile-experience", title: "Mobile Experience", icon: FaMobileAlt },
  { id: "responsible-management", title: "Financial Management", icon: FaWallet },
  { id: "payment-support", title: "Payment Support", icon: FaHeadset },
  { id: "conclusion", title: "Reliable Experience", icon: FaShieldVirus },
];

export default function DepositAndWithdrawalPage() {
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
          <div className={clsx('section-tag', 'justify-center')}>Transactions Info</div>
          <h1 className={clsx('font-bebas', 'text-[clamp(44px,7vw,90px)]', 'tracking-[1px]', 'leading-[1.05]', 'text-white', 'mb-4')}>
            Deposit & <span className="text-gold">Withdrawal</span>
          </h1>
          <p className={clsx('text-[16px]', 'text-muted', 'leading-[1.8]', 'font-light', 'max-w-[650px]', 'mx-auto')}>
            Learn how to add funds, request withdrawals, complete account verification, and manage transactions securely on Reddy Line.
          </p>
        </div>
        <PageArtwork
          src="/reddy-app-v2.png"
          alt="Secure mobile account for deposits and withdrawals"
          label="Fast, secure account transactions"
          imageClassName="object-cover object-right"
        />
      </section>

      {/* ===== MAIN CONTENT ===== */}
      <section className={clsx('pb-[120px]', 'px-[5%]', 'bg-bg')}>
        <div className={clsx('max-w-[1200px]', 'mx-auto')}>
          <div className={clsx('grid', 'grid-cols-1', 'lg:grid-cols-12', 'gap-12', 'items-start')}>
            
            {/* Left Sticky Sidebar (Desktop only) */}
            <aside className={clsx('hidden', 'lg:block', 'lg:col-span-4', 'sticky', 'top-[100px]', 'max-h-[calc(100vh-140px)]', 'overflow-y-auto', 'bg-bg2', 'border', 'border-border', 'rounded-2xl', 'p-6', 'custom-scrollbar')}>
              <h4 className={clsx('font-syne', 'text-[14px]', 'font-bold', 'text-white', 'uppercase', 'tracking-[1px]', 'mb-5', 'border-b', 'border-border', 'pb-3')}>
                Payments Guide
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
              
              {/* Section 1: Introduction (Welcome) */}
              <article id="welcome" className={clsx('bg-card', 'border', 'border-border', 'rounded-2xl', 'p-8', 'md:p-10', 'reveal', 'relative', 'overflow-hidden')}>
                <div className={clsx('absolute', 'top-0', 'right-0', 'w-[150px]', 'h-[150px]', 'bg-[radial-gradient(circle,rgba(0,120,229,0.03)_0%,transparent_70%)]', 'pointer-events-none')} />
                
                <div className={clsx('flex', 'items-center', 'gap-3.5', 'mb-6')}>
                  <div className={clsx('w-10', 'h-10', 'rounded-lg', 'bg-gold/10', 'flex', 'items-center', 'justify-center', 'text-gold')}>
                    <FaWallet size={18} />
                  </div>
                  <h2 className={clsx('font-bebas', 'text-[32px]', 'text-white', 'tracking-[1px]')}>
                    Deposit and Withdrawal
                  </h2>
                </div>

                <div className={clsx('flex', 'flex-col', 'gap-6', 'text-[15px]', 'text-muted', 'leading-[1.8]', 'font-light')}>
                  <p>
                    At Reddy Line we focus on providing fast secure and smooth deposit and withdrawal services for all users. Our payment system is designed to make transactions simple reliable and convenient so players can enjoy uninterrupted gaming and betting experiences.
                  </p>
                  <p className={clsx('bg-gold/5', 'border-l-2', 'border-gold', 'p-4', 'rounded-r-lg', 'text-white', 'font-normal')}>
                    We continuously improve our payment process to provide faster transactions secure account protection and easy access to funds for users across different regions.
                  </p>
                </div>
              </article>

              {/* Section 2: Secure Payment System */}
              <article id="secure-system" className={clsx('bg-card', 'border', 'border-border', 'rounded-2xl', 'p-8', 'md:p-10', 'reveal', 'relative', 'overflow-hidden')}>
                <div className={clsx('absolute', 'top-0', 'right-0', 'w-[150px]', 'h-[150px]', 'bg-[radial-gradient(circle,rgba(30,191,106,0.03)_0%,transparent_70%)]', 'pointer-events-none')} />

                <div className={clsx('flex', 'items-center', 'gap-3.5', 'mb-6')}>
                  <div className={clsx('w-10', 'h-10', 'rounded-lg', 'bg-green/10', 'flex', 'items-center', 'justify-center', 'text-green')}>
                    <FaShieldAlt size={18} />
                  </div>
                  <h2 className={clsx('font-bebas', 'text-[32px]', 'text-white', 'tracking-[1px]')}>
                    Secure Payment System
                  </h2>
                </div>

                <div className={clsx('text-[15px]', 'text-muted', 'leading-[1.8]', 'font-light', 'flex', 'flex-col', 'gap-5')}>
                  <p>
                    Security is one of the most important parts of online transactions. Reddy Line uses advanced security systems encryption technologies and secure payment methods to help protect user transactions and account information.
                  </p>
                  <p>
                    All deposits and withdrawals are processed through secure channels to maintain user safety and transaction reliability.
                  </p>
                </div>
              </article>

              {/* Section 3: Easy Deposit Process */}
              <article id="deposit-process" className={clsx('bg-card', 'border', 'border-border', 'rounded-2xl', 'p-8', 'md:p-10', 'reveal', 'relative', 'overflow-hidden')}>
                <div className={clsx('absolute', 'top-0', 'right-0', 'w-[150px]', 'h-[150px]', 'bg-[radial-gradient(circle,rgba(0,120,229,0.03)_0%,transparent_70%)]', 'pointer-events-none')} />

                <div className={clsx('flex', 'items-center', 'gap-3.5', 'mb-6')}>
                  <div className={clsx('w-10', 'h-10', 'rounded-lg', 'bg-gold/10', 'flex', 'items-center', 'justify-center', 'text-gold')}>
                    <FaArrowCircleDown size={18} />
                  </div>
                  <h2 className={clsx('font-bebas', 'text-[32px]', 'text-white', 'tracking-[1px]')}>
                    Easy Deposit Process
                  </h2>
                </div>

                <div className={clsx('text-[15px]', 'text-muted', 'leading-[1.8]', 'font-light', 'flex', 'flex-col', 'gap-6')}>
                  <p>
                    Depositing funds on Reddy Line is quick and user friendly. Users can add funds to their accounts through supported payment methods available on the platform.
                  </p>

                  <div className={clsx('bg-bg/40', 'border', 'border-border', 'rounded-xl', 'p-6')}>
                    <p className={clsx('text-white', 'font-medium', 'mb-4', 'text-[14px]')}>Deposit Benefits</p>
                    <ul className={clsx('grid', 'grid-cols-1', 'sm:grid-cols-2', 'gap-3.5', 'list-none', 'p-0', 'm-0')}>
                      {[
                        "Fast processing system",
                        "Secure transactions",
                        "Easy payment interface",
                        "Multiple payment options",
                        "Smooth account funding process",
                        "Mobile friendly payment access"
                      ].map((item) => (
                        <li key={item} className={clsx('flex', 'items-start', 'gap-3', 'text-[14px]')}>
                          <FaCheckCircle className={clsx('text-gold', 'mt-1', 'flex-shrink-0')} size={14} />
                          <span className="text-muted">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p>
                    Our goal is to help users start gaming and betting without unnecessary delays or complicated procedures.
                  </p>
                </div>
              </article>

              {/* Section 4: Fast Withdrawal Service */}
              <article id="withdrawal-service" className={clsx('bg-card', 'border', 'border-border', 'rounded-2xl', 'p-8', 'md:p-10', 'reveal', 'relative', 'overflow-hidden')}>
                <div className={clsx('absolute', 'top-0', 'right-0', 'w-[150px]', 'h-[150px]', 'bg-[radial-gradient(circle,rgba(0,120,229,0.03)_0%,transparent_70%)]', 'pointer-events-none')} />

                <div className={clsx('flex', 'items-center', 'gap-3.5', 'mb-6')}>
                  <div className={clsx('w-10', 'h-10', 'rounded-lg', 'bg-gold/10', 'flex', 'items-center', 'justify-center', 'text-gold')}>
                    <FaArrowCircleUp size={18} />
                  </div>
                  <h2 className={clsx('font-bebas', 'text-[32px]', 'text-white', 'tracking-[1px]')}>
                    Fast Withdrawal Service
                  </h2>
                </div>

                <div className={clsx('text-[15px]', 'text-muted', 'leading-[1.8]', 'font-light', 'flex', 'flex-col', 'gap-6')}>
                  <p>
                    Reddy Line focuses on providing smooth and timely withdrawal processing for users. Withdrawal requests are reviewed and processed according to platform security policies and verification requirements.
                  </p>

                  <div className={clsx('bg-bg/40', 'border', 'border-border', 'rounded-xl', 'p-6')}>
                    <p className={clsx('text-white', 'font-medium', 'mb-4', 'text-[14px]')}>Withdrawal Features</p>
                    <ul className={clsx('grid', 'grid-cols-1', 'sm:grid-cols-2', 'gap-3.5', 'list-none', 'p-0', 'm-0')}>
                      {[
                        "Secure withdrawal system",
                        "Fast processing support",
                        "Reliable transaction management",
                        "User account protection",
                        "Transparent payment handling"
                      ].map((item) => (
                        <li key={item} className={clsx('flex', 'items-start', 'gap-3', 'text-[14px]')}>
                          <FaCheckCircle className={clsx('text-gold', 'mt-1', 'flex-shrink-0')} size={14} />
                          <span className="text-muted">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p>
                    Processing times may vary depending on payment methods verification checks and transaction activity.
                  </p>
                </div>
              </article>

              {/* Section 5: Account Verification */}
              <article id="verification" className={clsx('bg-card', 'border', 'border-border', 'rounded-2xl', 'p-8', 'md:p-10', 'reveal', 'relative', 'overflow-hidden')}>
                <div className={clsx('absolute', 'top-0', 'right-0', 'w-[150px]', 'h-[150px]', 'bg-[radial-gradient(circle,rgba(0,120,229,0.03)_0%,transparent_70%)]', 'pointer-events-none')} />

                <div className={clsx('flex', 'items-center', 'gap-3.5', 'mb-6')}>
                  <div className={clsx('w-10', 'h-10', 'rounded-lg', 'bg-gold/10', 'flex', 'items-center', 'justify-center', 'text-gold')}>
                    <FaUserCheck size={18} />
                  </div>
                  <h2 className={clsx('font-bebas', 'text-[32px]', 'text-white', 'tracking-[1px]')}>
                    Account Verification
                  </h2>
                </div>

                <div className={clsx('text-[15px]', 'text-muted', 'leading-[1.8]', 'font-light', 'flex', 'flex-col', 'gap-6')}>
                  <p>
                    For security and compliance purposes Reddy Line may request account verification before processing certain withdrawals or account activities.
                  </p>

                  <div className={clsx('bg-bg/40', 'border', 'border-border', 'rounded-xl', 'p-6')}>
                    <p className={clsx('text-white', 'font-medium', 'mb-4', 'text-[14px]')}>Verification may include:</p>
                    <ul className={clsx('flex', 'flex-col', 'gap-3.5', 'list-none', 'p-0', 'm-0')}>
                      {[
                        "Identity confirmation",
                        "Payment method verification",
                        "Account ownership confirmation"
                      ].map((item) => (
                        <li key={item} className={clsx('flex', 'items-start', 'gap-3', 'text-[14px]')}>
                          <FaCheckCircle className={clsx('text-gold', 'mt-1', 'flex-shrink-0')} size={14} />
                          <span className="text-muted">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p>
                    This process helps protect users from fraud unauthorized access and suspicious activity.
                  </p>
                </div>
              </article>

              {/* Section 6: Payment Rules and Conditions */}
              <article id="rules-conditions" className={clsx('bg-card', 'border', 'border-border', 'rounded-2xl', 'p-8', 'md:p-10', 'reveal', 'relative', 'overflow-hidden')}>
                <div className={clsx('absolute', 'top-0', 'right-0', 'w-[150px]', 'h-[150px]', 'bg-[radial-gradient(circle,rgba(232,48,58,0.03)_0%,transparent_70%)]', 'pointer-events-none')} />

                <div className={clsx('flex', 'items-center', 'gap-3.5', 'mb-6')}>
                  <div className={clsx('w-10', 'h-10', 'rounded-lg', 'bg-red/10', 'flex', 'items-center', 'justify-center', 'text-red')}>
                    <FaExclamationCircle size={18} />
                  </div>
                  <h2 className={clsx('font-bebas', 'text-[32px]', 'text-white', 'tracking-[1px]')}>
                    Payment Rules and Conditions
                  </h2>
                </div>

                <div className={clsx('text-[15px]', 'text-muted', 'leading-[1.8]', 'font-light', 'flex', 'flex-col', 'gap-6')}>
                  <p>
                    Users must follow platform payment policies while using deposit and withdrawal services.
                  </p>

                  <div className={clsx('bg-bg/40', 'border', 'border-border', 'rounded-xl', 'p-6')}>
                    <p className={clsx('text-white', 'font-medium', 'mb-4', 'text-[14px]')}>Important Conditions</p>
                    <ul className={clsx('flex', 'flex-col', 'gap-3.5', 'list-none', 'p-0', 'm-0')}>
                      {[
                        "Users must use payment methods registered in their own name",
                        "Fraudulent or suspicious transactions are strictly prohibited",
                        "Incorrect payment information may delay processing",
                        "Multiple account misuse may result in restrictions",
                        "Verification may be required before withdrawals are approved"
                      ].map((item) => (
                        <li key={item} className={clsx('flex', 'items-start', 'gap-3', 'text-[14px]')}>
                          <FaCheckCircle className={clsx('text-gold', 'mt-1', 'flex-shrink-0')} size={14} />
                          <span className="text-muted">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p>
                    Reddy Line reserves the right to refuse suspend or investigate transactions that violate platform rules or security standards.
                  </p>
                </div>
              </article>

              {/* Section 7: Transaction Security */}
              <article id="transaction-security" className={clsx('bg-card', 'border', 'border-border', 'rounded-2xl', 'p-8', 'md:p-10', 'reveal', 'relative', 'overflow-hidden')}>
                <div className={clsx('absolute', 'top-0', 'right-0', 'w-[150px]', 'h-[150px]', 'bg-[radial-gradient(circle,rgba(30,191,106,0.03)_0%,transparent_70%)]', 'pointer-events-none')} />

                <div className={clsx('flex', 'items-center', 'gap-3.5', 'mb-6')}>
                  <div className={clsx('w-10', 'h-10', 'rounded-lg', 'bg-green/10', 'flex', 'items-center', 'justify-center', 'text-green')}>
                    <FaLock size={18} />
                  </div>
                  <h2 className={clsx('font-bebas', 'text-[32px]', 'text-white', 'tracking-[1px]')}>
                    Transaction Security
                  </h2>
                </div>

                <div className={clsx('text-[15px]', 'text-muted', 'leading-[1.8]', 'font-light', 'flex', 'flex-col', 'gap-6')}>
                  <p>
                    Our payment system is monitored continuously to help maintain safe and reliable financial activity across the platform.
                  </p>

                  <div className={clsx('bg-bg/40', 'border', 'border-border', 'rounded-xl', 'p-6')}>
                    <p className={clsx('text-white', 'font-medium', 'mb-4', 'text-[14px]')}>We use modern protection systems to help prevent:</p>
                    <ul className={clsx('grid', 'grid-cols-1', 'sm:grid-cols-2', 'gap-3.5', 'list-none', 'p-0', 'm-0')}>
                      {[
                        "Unauthorized transactions",
                        "Fraudulent activity",
                        "Payment misuse",
                        "Account security risks"
                      ].map((item) => (
                        <li key={item} className={clsx('flex', 'items-start', 'gap-3', 'text-[14px]')}>
                          <FaCheckCircle className={clsx('text-green', 'mt-1', 'flex-shrink-0')} size={14} />
                          <span className="text-muted">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p>
                    Users are also encouraged to protect their login credentials and account information to maintain account safety.
                  </p>
                </div>
              </article>

              {/* Section 8: Mobile Friendly Payment Experience */}
              <article id="mobile-experience" className={clsx('bg-card', 'border', 'border-border', 'rounded-2xl', 'p-8', 'md:p-10', 'reveal', 'relative', 'overflow-hidden')}>
                <div className={clsx('absolute', 'top-0', 'right-0', 'w-[150px]', 'h-[150px]', 'bg-[radial-gradient(circle,rgba(0,120,229,0.03)_0%,transparent_70%)]', 'pointer-events-none')} />

                <div className={clsx('flex', 'items-center', 'gap-3.5', 'mb-6')}>
                  <div className={clsx('w-10', 'h-10', 'rounded-lg', 'bg-gold/10', 'flex', 'items-center', 'justify-center', 'text-gold')}>
                    <FaMobileAlt size={18} />
                  </div>
                  <h2 className={clsx('font-bebas', 'text-[32px]', 'text-white', 'tracking-[1px]')}>
                    Mobile Friendly Payment Experience
                  </h2>
                </div>

                <div className={clsx('text-[15px]', 'text-muted', 'leading-[1.8]', 'font-light', 'flex', 'flex-col', 'gap-5')}>
                  <p>
                    The Reddy Line platform is fully optimized for mobile devices which allows users to manage deposits and withdrawals directly from smartphones and tablets.
                  </p>
                  <p>
                    Whether users are adding funds checking transaction history or requesting withdrawals the payment process remains smooth and accessible across all devices.
                  </p>
                </div>
              </article>

              {/* Section 9: Responsible Financial Management */}
              <article id="responsible-management" className={clsx('bg-card', 'border', 'border-border', 'rounded-2xl', 'p-8', 'md:p-10', 'reveal', 'relative', 'overflow-hidden')}>
                <div className={clsx('absolute', 'top-0', 'right-0', 'w-[150px]', 'h-[150px]', 'bg-[radial-gradient(circle,rgba(30,191,106,0.03)_0%,transparent_70%)]', 'pointer-events-none')} />

                <div className={clsx('flex', 'items-center', 'gap-3.5', 'mb-6')}>
                  <div className={clsx('w-10', 'h-10', 'rounded-lg', 'bg-green/10', 'flex', 'items-center', 'justify-center', 'text-green')}>
                    <FaWallet size={18} />
                  </div>
                  <h2 className={clsx('font-bebas', 'text-[32px]', 'text-white', 'tracking-[1px]')}>
                    Responsible Financial Management
                  </h2>
                </div>

                <div className={clsx('text-[15px]', 'text-muted', 'leading-[1.8]', 'font-light', 'flex', 'flex-col', 'gap-6')}>
                  <p>
                    Reddy Line encourages users to manage gaming budgets responsibly and maintain control over their spending activity.
                  </p>

                  <div className={clsx('bg-bg/40', 'border', 'border-border', 'rounded-xl', 'p-6')}>
                    <p className={clsx('text-white', 'font-medium', 'mb-4', 'text-[14px]')}>We recommend users:</p>
                    <ul className={clsx('flex', 'flex-col', 'gap-3.5', 'list-none', 'p-0', 'm-0')}>
                      {[
                        "Deposit within personal financial limits",
                        "Monitor transaction activity regularly",
                        "Use gaming services for entertainment purposes only",
                        "Avoid excessive gambling behavior"
                      ].map((item) => (
                        <li key={item} className={clsx('flex', 'items-start', 'gap-3', 'text-[14px]')}>
                          <FaCheckCircle className={clsx('text-green', 'mt-1', 'flex-shrink-0')} size={14} />
                          <span className="text-muted">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p>
                    Responsible financial management helps create a safer and more balanced gaming experience.
                  </p>
                </div>
              </article>

              {/* Section 10: Dedicated Payment Support */}
              <article id="payment-support" className={clsx('bg-card', 'border', 'border-border', 'rounded-2xl', 'p-8', 'md:p-10', 'reveal', 'relative', 'overflow-hidden')}>
                <div className={clsx('absolute', 'top-0', 'right-0', 'w-[150px]', 'h-[150px]', 'bg-[radial-gradient(circle,rgba(0,120,229,0.03)_0%,transparent_70%)]', 'pointer-events-none')} />

                <div className={clsx('flex', 'items-center', 'gap-3.5', 'mb-6')}>
                  <div className={clsx('w-10', 'h-10', 'rounded-lg', 'bg-gold/10', 'flex', 'items-center', 'justify-center', 'text-gold')}>
                    <FaHeadset size={18} />
                  </div>
                  <h2 className={clsx('font-bebas', 'text-[32px]', 'text-white', 'tracking-[1px]')}>
                    Dedicated Payment Support
                  </h2>
                </div>

                <div className={clsx('text-[15px]', 'text-muted', 'leading-[1.8]', 'font-light', 'flex', 'flex-col', 'gap-6')}>
                  <p>
                    Our support team is available to assist users with payment related questions including:
                  </p>

                  <div className={clsx('bg-bg/40', 'border', 'border-border', 'rounded-xl', 'p-6')}>
                    <ul className={clsx('grid', 'grid-cols-1', 'sm:grid-cols-2', 'gap-3.5', 'list-none', 'p-0', 'm-0')}>
                      {[
                        "Deposit assistance",
                        "Withdrawal support",
                        "Transaction status",
                        "Verification guidance",
                        "Account related payment issues"
                      ].map((item) => (
                        <li key={item} className={clsx('flex', 'items-start', 'gap-3', 'text-[14px]')}>
                          <FaCheckCircle className={clsx('text-gold', 'mt-1', 'flex-shrink-0')} size={14} />
                          <span className="text-muted">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p>
                    We focus on providing fast communication and reliable support to help users resolve issues efficiently.
                  </p>
                </div>
              </article>

              {/* Section 11: Reliable Payment Experience */}
              <article id="conclusion" className={clsx('bg-card', 'border', 'border-border', 'rounded-2xl', 'p-8', 'md:p-10', 'reveal', 'relative', 'overflow-hidden')}>
                <div className={clsx('absolute', 'top-1/2', 'left-1/2', '-translate-x-1/2', '-translate-y-1/2', 'w-[400px]', 'h-[400px]', 'bg-[radial-gradient(ellipse,rgba(0,120,229,0.04)_0%,transparent_70%)]', 'pointer-events-none')} />

                <div className={clsx('flex', 'items-center', 'gap-3.5', 'mb-6')}>
                  <div className={clsx('w-10', 'h-10', 'rounded-lg', 'bg-gold/10', 'flex', 'items-center', 'justify-center', 'text-gold')}>
                    <FaShieldVirus size={18} />
                  </div>
                  <h2 className={clsx('font-bebas', 'text-[32px]', 'text-white', 'tracking-[1px]')}>
                    Reliable Payment Experience at Reddy Line
                  </h2>
                </div>

                <div className={clsx('text-[15px]', 'text-muted', 'leading-[1.8]', 'font-light', 'flex', 'flex-col', 'gap-6', 'relative', 'z-10')}>
                  <p>
                    At Reddy Line we continue improving our deposit and withdrawal systems to provide users with a fast secure and hassle free payment experience.
                  </p>
                  <p className={clsx('bg-gold/5', 'border-l-2', 'border-gold', 'p-4', 'rounded-r-lg', 'text-white', 'font-normal')}>
                    Our mission is to maintain a trusted environment where users can enjoy smooth financial transactions secure account management and uninterrupted entertainment through one reliable platform.
                  </p>
                  
                  <div className={clsx('flex', 'flex-wrap', 'gap-4', 'mt-4')}>
                    <Link href="/deposit" className={clsx('btn', 'btn-gold')}>
                      Go to Deposits
                    </Link>
                    <Link href="/withdrawal" className={clsx('btn', 'btn-ghost')}>
                      Go to Cashouts
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

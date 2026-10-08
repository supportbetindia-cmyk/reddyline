"use client";

import clsx from "clsx";
import Link from "next/link";
import { useState, useEffect } from "react";
import { 
  FaShieldAlt, 
  FaLock, 
  FaUserShield, 
  FaRegFileAlt, 
  FaCookieBite, 
  FaHandshake, 
  FaEdit, 
  FaEnvelope,
  FaCheckCircle, 
  FaUserCheck, 
  FaBullhorn 
} from "react-icons/fa";
import ScrollReveal from "../components/ScrollReveal";
import { PageArtwork } from "../components/PageArtwork";

const sections = [
  { id: "main-conditions", title: "Main Conditions", icon: FaRegFileAlt },
  { id: "info-collect", title: "Information We Collect", icon: FaUserCheck },
  { id: "why-collect", title: "Why We Collect Information", icon: FaLock },
  { id: "marketing", title: "Marketing & Communication", icon: FaBullhorn },
  { id: "data-security", title: "Data Security", icon: FaShieldAlt },
  { id: "cookies", title: "Cookies & Tracking", icon: FaCookieBite },
  { id: "third-party", title: "Third Party Services", icon: FaHandshake },
  { id: "user-rights", title: "User Rights", icon: FaUserShield },
  { id: "policy-updates", title: "Policy Updates", icon: FaEdit },
  { id: "contact-us", title: "Contact Us", icon: FaEnvelope },
];

export default function PrivacyPolicyPage() {
  const [activeSection, setActiveSection] = useState("main-conditions");

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
          <div className={clsx('section-tag', 'justify-center')}>Legal & Privacy</div>
          <h1 className={clsx('font-bebas', 'text-[clamp(44px,7vw,90px)]', 'tracking-[1px]', 'leading-[1.05]', 'text-white', 'mb-4')}>
            Privacy <span className="text-gold">Policy</span>
          </h1>
          <p className={clsx('text-[16px]', 'text-muted', 'leading-[1.8]', 'font-light', 'max-w-[650px]', 'mx-auto')}>
           Learn how Reddy Line collects, uses, protects, and manages user information across the platform.

          </p>
        </div>
        <PageArtwork
          src="/about-mission-gold-v2.png"
          alt="Secure Reddy Line data operations"
          label="Privacy and data protection"
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
              
              {/* Section 1: Main Conditions */}
              <article id="main-conditions" className={clsx('bg-card', 'border', 'border-border', 'rounded-2xl', 'p-8', 'md:p-10', 'reveal', 'relative', 'overflow-hidden')}>
                <div className={clsx('absolute', 'top-0', 'right-0', 'w-[150px]', 'h-[150px]', 'bg-[radial-gradient(circle,rgba(0,120,229,0.03)_0%,transparent_70%)]', 'pointer-events-none')} />
                
                <div className={clsx('flex', 'items-center', 'gap-3.5', 'mb-6')}>
                  <div className={clsx('w-10', 'h-10', 'rounded-lg', 'bg-gold/10', 'flex', 'items-center', 'justify-center', 'text-gold')}>
                    <FaRegFileAlt size={18} />
                  </div>
                  <h2 className={clsx('font-bebas', 'text-[32px]', 'text-white', 'tracking-[1px]')}>
                    Main Conditions
                  </h2>
                </div>

                <div className={clsx('flex', 'flex-col', 'gap-6', 'text-[15px]', 'text-muted', 'leading-[1.8]', 'font-light')}>
                  <p>
                    At Reddy Line we highly value the privacy and security of our users. We are committed to protecting all personal information shared on our platform and maintaining a safe environment for online gaming sports betting and casino entertainment.
                  </p>
                  <p>
                    All user information is stored securely using advanced encryption systems password protected databases and modern firewall protection technologies. We also support secure SSL protocols to provide an extra layer of protection for all transactions and account activities carried out on the platform.
                  </p>
                  <p className={clsx('bg-gold/5', 'border-l-2', 'border-gold', 'p-4', 'rounded-r-lg', 'text-white', 'font-normal')}>
                    By using Reddy Line users agree to the collection processing and use of personal information according to this Privacy Policy.
                  </p>
                </div>
              </article>

              {/* Section 2: Information We Collect */}
              <article id="info-collect" className={clsx('bg-card', 'border', 'border-border', 'rounded-2xl', 'p-8', 'md:p-10', 'reveal', 'relative', 'overflow-hidden')}>
                <div className={clsx('absolute', 'top-0', 'right-0', 'w-[150px]', 'h-[150px]', 'bg-[radial-gradient(circle,rgba(0,120,229,0.03)_0%,transparent_70%)]', 'pointer-events-none')} />

                <div className={clsx('flex', 'items-center', 'gap-3.5', 'mb-6')}>
                  <div className={clsx('w-10', 'h-10', 'rounded-lg', 'bg-gold/10', 'flex', 'items-center', 'justify-center', 'text-gold')}>
                    <FaUserCheck size={18} />
                  </div>
                  <h2 className={clsx('font-bebas', 'text-[32px]', 'text-white', 'tracking-[1px]')}>
                    Information We Collect
                  </h2>
                </div>

                <div className={clsx('text-[15px]', 'text-muted', 'leading-[1.8]', 'font-light', 'flex', 'flex-col', 'gap-6')}>
                  <p>
                    Reddy Line may collect personal and technical information from users for the purpose of providing secure and improved services.
                  </p>
                  
                  <div className={clsx('bg-bg/40', 'border', 'border-border', 'rounded-xl', 'p-6')}>
                    <p className={clsx('text-white', 'font-medium', 'mb-4', 'text-[14px]')}>The information collected may include:</p>
                    <ul className={clsx('grid', 'grid-cols-1', 'md:grid-cols-2', 'gap-3.5', 'list-none', 'p-0', 'm-0')}>
                      {[
                        "Name and account details",
                        "Contact information",
                        "Transaction details",
                        "Device and browser information",
                        "IP address and login activity",
                        "Gaming and betting activity",
                        "Customer support communication"
                      ].map((item) => (
                        <li key={item} className={clsx('flex', 'items-start', 'gap-3', 'text-[14px]')}>
                          <FaCheckCircle className={clsx('text-gold', 'mt-1', 'flex-shrink-0')} size={14} />
                          <span className="text-muted">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p>
                    This information helps us improve user experience platform performance and account security.
                  </p>
                </div>
              </article>

              {/* Section 3: Why We Collect User Information */}
              <article id="why-collect" className={clsx('bg-card', 'border', 'border-border', 'rounded-2xl', 'p-8', 'md:p-10', 'reveal', 'relative', 'overflow-hidden')}>
                <div className={clsx('absolute', 'top-0', 'right-0', 'w-[150px]', 'h-[150px]', 'bg-[radial-gradient(circle,rgba(0,120,229,0.03)_0%,transparent_70%)]', 'pointer-events-none')} />

                <div className={clsx('flex', 'items-center', 'gap-3.5', 'mb-6')}>
                  <div className={clsx('w-10', 'h-10', 'rounded-lg', 'bg-gold/10', 'flex', 'items-center', 'justify-center', 'text-gold')}>
                    <FaLock size={18} />
                  </div>
                  <h2 className={clsx('font-bebas', 'text-[32px]', 'text-white', 'tracking-[1px]')}>
                    Why We Collect User Information
                  </h2>
                </div>

                <div className={clsx('text-[15px]', 'text-muted', 'leading-[1.8]', 'font-light', 'flex', 'flex-col', 'gap-5')}>
                  <p>
                    We collect personal information for the following important reasons:
                  </p>

                  <div className={clsx('flex', 'flex-col', 'gap-3.5')}>
                    {[
                      "To provide access to our gaming and betting services",
                      "To verify and secure user accounts",
                      "To improve platform functionality and user experience",
                      "To offer promotions bonuses and new opportunities where appropriate",
                      "To comply with legal regulatory and licensing requirements",
                      "To prevent fraud suspicious activity and unauthorized access",
                      "To maintain platform security and responsible gaming standards",
                      "To analyze statistics and improve our products services and mobile applications"
                    ].map((reason, idx) => (
                      <div key={idx} className={clsx('flex', 'items-start', 'gap-3.5', 'p-3', 'bg-bg2', 'border', 'border-border', 'rounded-lg')}>
                        <div className={clsx('text-[12px]', 'font-bold', 'text-gold', 'bg-gold/10', 'w-6', 'h-6', 'rounded-md', 'flex', 'items-center', 'justify-center', 'flex-shrink-0')}>
                          {idx + 1}
                        </div>
                        <span className={clsx('text-[14px]', 'text-text')}>{reason}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </article>

              {/* Section 4: Marketing and Promotional Communication */}
              <article id="marketing" className={clsx('bg-card', 'border', 'border-border', 'rounded-2xl', 'p-8', 'md:p-10', 'reveal', 'relative', 'overflow-hidden')}>
                <div className={clsx('absolute', 'top-0', 'right-0', 'w-[150px]', 'h-[150px]', 'bg-[radial-gradient(circle,rgba(0,120,229,0.03)_0%,transparent_70%)]', 'pointer-events-none')} />

                <div className={clsx('flex', 'items-center', 'gap-3.5', 'mb-6')}>
                  <div className={clsx('w-10', 'h-10', 'rounded-lg', 'bg-gold/10', 'flex', 'items-center', 'justify-center', 'text-gold')}>
                    <FaBullhorn size={18} />
                  </div>
                  <h2 className={clsx('font-bebas', 'text-[32px]', 'text-white', 'tracking-[1px]')}>
                    Marketing and Promotional Communication
                  </h2>
                </div>

                <div className={clsx('text-[15px]', 'text-muted', 'leading-[1.8]', 'font-light', 'flex', 'flex-col', 'gap-5')}>
                  <p>
                    Reddy Line may occasionally use user information to share updates promotions bonus offers and information related to our products and services.
                  </p>
                  <p>
                    By accepting this Privacy Policy users agree that Reddy Line may contact them for marketing and promotional purposes where legally permitted.
                  </p>
                  <div className={clsx('p-4', 'bg-white/[0.02]', 'border', 'border-border', 'rounded-xl', 'text-[14px]', 'text-text')}>
                    Users always have the right to opt out of receiving promotional or marketing communication at any time by contacting our support team or adjusting their account settings.
                  </div>
                </div>
              </article>

              {/* Section 5: Data Security */}
              <article id="data-security" className={clsx('bg-card', 'border', 'border-border', 'rounded-2xl', 'p-8', 'md:p-10', 'reveal', 'relative', 'overflow-hidden')}>
                <div className={clsx('absolute', 'top-0', 'right-0', 'w-[150px]', 'h-[150px]', 'bg-[radial-gradient(circle,rgba(30,191,106,0.04)_0%,transparent_70%)]', 'pointer-events-none')} />

                <div className={clsx('flex', 'items-center', 'gap-3.5', 'mb-6')}>
                  <div className={clsx('w-10', 'h-10', 'rounded-lg', 'bg-green/10', 'flex', 'items-center', 'justify-center', 'text-green')}>
                    <FaShieldAlt size={18} />
                  </div>
                  <h2 className={clsx('font-bebas', 'text-[32px]', 'text-white', 'tracking-[1px]')}>
                    Data Security
                  </h2>
                </div>

                <div className={clsx('text-[15px]', 'text-muted', 'leading-[1.8]', 'font-light', 'flex', 'flex-col', 'gap-6')}>
                  <p>
                    Protecting user data is one of the highest priorities at Reddy Line. We use advanced security systems encryption technologies secure servers and monitoring tools to help prevent:
                  </p>

                  <div className={clsx('grid', 'grid-cols-1', 'sm:grid-cols-2', 'gap-3')}>
                    {[
                      "Unauthorized account access",
                      "Data misuse",
                      "Information leaks",
                      "Fraudulent activity",
                      "Security breaches"
                    ].map((item, idx) => (
                      <div key={idx} className={clsx('flex', 'items-center', 'gap-3', 'py-2.5', 'px-4', 'bg-bg2/60', 'border', 'border-border', 'rounded-lg')}>
                        <span className={clsx('w-2', 'h-2', 'rounded-full', 'bg-red', 'flex-shrink-0')} />
                        <span className={clsx('text-[14px]', 'text-text')}>{item}</span>
                      </div>
                    ))}
                  </div>

                  <p className={clsx('border-t', 'border-border', 'pt-5', 'mt-2')}>
                    While we continuously improve our security systems users are also encouraged to protect their account information passwords and login credentials.
                  </p>
                </div>
              </article>

              {/* Section 6: Cookies and Tracking Technologies */}
              <article id="cookies" className={clsx('bg-card', 'border', 'border-border', 'rounded-2xl', 'p-8', 'md:p-10', 'reveal', 'relative', 'overflow-hidden')}>
                <div className={clsx('absolute', 'top-0', 'right-0', 'w-[150px]', 'h-[150px]', 'bg-[radial-gradient(circle,rgba(0,120,229,0.03)_0%,transparent_70%)]', 'pointer-events-none')} />

                <div className={clsx('flex', 'items-center', 'gap-3.5', 'mb-6')}>
                  <div className={clsx('w-10', 'h-10', 'rounded-lg', 'bg-gold/10', 'flex', 'items-center', 'justify-center', 'text-gold')}>
                    <FaCookieBite size={18} />
                  </div>
                  <h2 className={clsx('font-bebas', 'text-[32px]', 'text-white', 'tracking-[1px]')}>
                    Cookies and Tracking Technologies
                  </h2>
                </div>

                <div className={clsx('text-[15px]', 'text-muted', 'leading-[1.8]', 'font-light', 'flex', 'flex-col', 'gap-6')}>
                  <p>
                    Reddy Line may use cookies and similar technologies to improve website performance personalize user experience and analyze traffic activity.
                  </p>

                  <div className={clsx('bg-bg/40', 'border', 'border-border', 'rounded-xl', 'p-6')}>
                    <p className={clsx('text-white', 'font-medium', 'mb-4', 'text-[14px]')}>Cookies help us:</p>
                    <ul className={clsx('grid', 'grid-cols-1', 'sm:grid-cols-2', 'gap-3.5', 'list-none', 'p-0', 'm-0')}>
                      {[
                        "Improve website functionality",
                        "Save user preferences",
                        "Monitor platform performance",
                        "Enhance security systems",
                        "Deliver better gaming experiences"
                      ].map((item) => (
                        <li key={item} className={clsx('flex', 'items-start', 'gap-3', 'text-[14px]')}>
                          <FaCheckCircle className={clsx('text-gold', 'mt-1', 'flex-shrink-0')} size={14} />
                          <span className="text-muted">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p>
                    Users may disable cookies through browser settings although some platform features may not function properly afterward.
                  </p>
                </div>
              </article>

              {/* Section 7: Third Party Services */}
              <article id="third-party" className={clsx('bg-card', 'border', 'border-border', 'rounded-2xl', 'p-8', 'md:p-10', 'reveal', 'relative', 'overflow-hidden')}>
                <div className={clsx('absolute', 'top-0', 'right-0', 'w-[150px]', 'h-[150px]', 'bg-[radial-gradient(circle,rgba(0,120,229,0.03)_0%,transparent_70%)]', 'pointer-events-none')} />

                <div className={clsx('flex', 'items-center', 'gap-3.5', 'mb-6')}>
                  <div className={clsx('w-10', 'h-10', 'rounded-lg', 'bg-gold/10', 'flex', 'items-center', 'justify-center', 'text-gold')}>
                    <FaHandshake size={18} />
                  </div>
                  <h2 className={clsx('font-bebas', 'text-[32px]', 'text-white', 'tracking-[1px]')}>
                    Third Party Services
                  </h2>
                </div>

                <div className={clsx('text-[15px]', 'text-muted', 'leading-[1.8]', 'font-light', 'flex', 'flex-col', 'gap-5')}>
                  <p>
                    In certain cases Reddy Line may work with trusted third party providers for payment processing analytics customer support and security services.
                  </p>
                  <p>
                    These providers only receive limited information necessary to perform their services and are required to maintain confidentiality and data protection standards.
                  </p>
                  <div className={clsx('bg-gold/5', 'border-l-2', 'border-gold', 'p-4', 'rounded-r-lg', 'text-white', 'font-normal')}>
                    Reddy Line does not sell user personal information to third parties.
                  </div>
                </div>
              </article>

              {/* Section 8: User Rights */}
              <article id="user-rights" className={clsx('bg-card', 'border', 'border-border', 'rounded-2xl', 'p-8', 'md:p-10', 'reveal', 'relative', 'overflow-hidden')}>
                <div className={clsx('absolute', 'top-0', 'right-0', 'w-[150px]', 'h-[150px]', 'bg-[radial-gradient(circle,rgba(0,120,229,0.03)_0%,transparent_70%)]', 'pointer-events-none')} />

                <div className={clsx('flex', 'items-center', 'gap-3.5', 'mb-6')}>
                  <div className={clsx('w-10', 'h-10', 'rounded-lg', 'bg-gold/10', 'flex', 'items-center', 'justify-center', 'text-gold')}>
                    <FaUserShield size={18} />
                  </div>
                  <h2 className={clsx('font-bebas', 'text-[32px]', 'text-white', 'tracking-[1px]')}>
                    User Rights
                  </h2>
                </div>

                <div className={clsx('text-[15px]', 'text-muted', 'leading-[1.8]', 'font-light', 'flex', 'flex-col', 'gap-6')}>
                  <p>
                    Users have the right to:
                  </p>

                  <div className={clsx('grid', 'grid-cols-1', 'sm:grid-cols-2', 'gap-4')}>
                    {[
                      "Access their personal information",
                      "Request corrections to inaccurate data",
                      "Request account closure where applicable",
                      "Opt out of marketing communication",
                      "Contact support regarding privacy concerns"
                    ].map((right, idx) => (
                      <div key={idx} className={clsx('flex', 'items-start', 'gap-3', 'p-4', 'bg-bg2', 'border', 'border-border', 'rounded-xl')}>
                        <FaCheckCircle className={clsx('text-gold', 'mt-1', 'flex-shrink-0')} size={14} />
                        <span className={clsx('text-[14px]', 'text-text')}>{right}</span>
                      </div>
                    ))}
                  </div>

                  <p className={clsx('border-t', 'border-border', 'pt-5', 'mt-2')}>
                    We work continuously to ensure transparency and responsible handling of user data.
                  </p>
                </div>
              </article>

              {/* Section 9: Policy Updates */}
              <article id="policy-updates" className={clsx('bg-card', 'border', 'border-border', 'rounded-2xl', 'p-8', 'md:p-10', 'reveal', 'relative', 'overflow-hidden')}>
                <div className={clsx('absolute', 'top-0', 'right-0', 'w-[150px]', 'h-[150px]', 'bg-[radial-gradient(circle,rgba(0,120,229,0.03)_0%,transparent_70%)]', 'pointer-events-none')} />

                <div className={clsx('flex', 'items-center', 'gap-3.5', 'mb-6')}>
                  <div className={clsx('w-10', 'h-10', 'rounded-lg', 'bg-gold/10', 'flex', 'items-center', 'justify-center', 'text-gold')}>
                    <FaEdit size={18} />
                  </div>
                  <h2 className={clsx('font-bebas', 'text-[32px]', 'text-white', 'tracking-[1px]')}>
                    Policy Updates
                  </h2>
                </div>

                <div className={clsx('text-[15px]', 'text-muted', 'leading-[1.8]', 'font-light', 'flex', 'flex-col', 'gap-5')}>
                  <p>
                    Reddy Line reserves the right to modify update or change this Privacy Policy at any time in order to improve services comply with regulations or enhance platform security.
                  </p>
                  <p>
                    Users are encouraged to review this page regularly for the latest updates and policy information.
                  </p>
                </div>
              </article>

              {/* Section 10: Contact Us */}
              <article id="contact-us" className={clsx('bg-card', 'border', 'border-border', 'rounded-2xl', 'p-8', 'md:p-10', 'reveal', 'relative', 'overflow-hidden')}>
                <div className={clsx('absolute', 'top-1/2', 'left-1/2', '-translate-x-1/2', '-translate-y-1/2', 'w-[400px]', 'h-[400px]', 'bg-[radial-gradient(ellipse,rgba(0,120,229,0.04)_0%,transparent_70%)]', 'pointer-events-none')} />

                <div className={clsx('flex', 'items-center', 'gap-3.5', 'mb-6')}>
                  <div className={clsx('w-10', 'h-10', 'rounded-lg', 'bg-gold/10', 'flex', 'items-center', 'justify-center', 'text-gold')}>
                    <FaEnvelope size={18} />
                  </div>
                  <h2 className={clsx('font-bebas', 'text-[32px]', 'text-white', 'tracking-[1px]')}>
                    Contact Us
                  </h2>
                </div>

                <div className={clsx('text-[15px]', 'text-muted', 'leading-[1.8]', 'font-light', 'flex', 'flex-col', 'gap-6', 'relative', 'z-10')}>
                  <p>
                    If you have any questions regarding this Privacy Policy data security or account protection you may contact the Reddy Line support team through the available support channels on our platform.
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

"use client";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "../components/ScrollReveal";
import AboutFaq from "../components/AboutFaq";

export default function AboutPage() {
  return (
    <>
      <ScrollReveal />

      {/* ===== HERO SECTION ===== */}
      <section className={clsx('relative', 'pt-[calc(var(--navbar-offset)+4rem)]', 'pb-[100px]', 'px-[5%]', 'bg-bg', 'overflow-hidden', 'min-h-[420px]', 'md:min-h-[600px]')}>
      <div
    className="absolute inset-0">
      
  <Image
      src="/about-gold-v2.png"
      alt=""
      fill
      priority
      className="object-cover opacity-50"
    />    

      </div> 

  {/* Optional dark overlay */}
  {/* <div className="absolute inset-0 -z-10 bg-[#05080B]/40" /> */}

        <div className={clsx('absolute', 'top-1/2', 'left-1/2', '-translate-x-1/2', '-translate-y-1/2', 'w-[800px]', 'h-[600px]', 'bg-[radial-gradient(ellipse,rgba(0,120,229,0.08)_0%,transparent_70%)]', 'pointer-events-none')} />

        <div className={clsx('max-w-[1200px]', 'mx-auto', 'relative', 'z-10', 'text-left', 'reveal')}>
          <h1 className={clsx('font-bebas', 'text-[clamp(44px,7vw,90px)]', 'tracking-[1px]', 'leading-[1.05]', 'text-white', 'mb-6')}>
            About <span className="text-gold">Reddy Line</span>
          </h1>
          <p className={clsx('text-[18px]', 'text-muted', 'leading-[1.8]', 'font-light', 'max-w-[750px]', 'mb-10')}>
           Welcome to Reddy Line — an all-in-one gaming platform where casino games, cricket betting, and live entertainment come together to create a fast, secure, and seamless experience.

          </p>
          <div className={clsx('flex', 'gap-4', 'justify-start', 'flex-wrap')}>
            <Link href="/games" className={clsx('btn', 'btn-gold', 'btn-large')}>Explore Our Games</Link>
            <Link href="/contact" className={clsx('btn', 'btn-ghost', 'btn-large')}>Contact Support</Link>
          </div>
        </div>
      </section>

      {/* ===== INTRO SECTION ===== */}
      <section className={clsx('py-[40px]', 'px-[5%]', 'bg-bg2', 'border-t', 'border-b', 'border-border')}>
        <div className={clsx('max-w-[1000px]', 'mx-auto', 'text-left', 'reveal')}>
          <p className={clsx('text-[16px]', 'text-muted', 'leading-[1.9]', 'font-light', 'mb-6')}>
            At Reddy Line, we focus on creating a trusted gaming environment where users from different parts of the world can enjoy online games, sports entertainment, live experiences, and rewarding opportunities anytime they want.
          </p>
          <p className={clsx('text-[16px]', 'text-muted', 'leading-[1.9]', 'font-light', 'mb-6')}>
            The online gaming world is changing fast and players now expect more than just a simple platform. They want speed, security, easy navigation, fair gameplay, and real entertainment. That is exactly what Reddy Line delivers.
          </p>
          <p className={clsx('text-[16px]', 'text-muted', 'leading-[1.9]', 'font-light')}>
            Our platform is designed for modern users who enjoy immersive gaming experiences on desktop, mobile, and tablet devices without complications or delays. We combine advanced technology with user friendly features to create a platform that feels smooth, simple, and enjoyable for everyone.
          </p>
        </div>
      </section>

      {/* ===== MISSION SECTION ===== */}
      <section className={clsx('py-[50px]', 'px-[5%]', 'bg-bg')}>
        <div className={clsx('max-w-[1200px]', 'mx-auto')}>
          <div className={clsx('grid', 'grid-cols-1', 'lg:grid-cols-12', 'gap-16', 'items-center')}>
            {/* Left: Content */}
            <div className={clsx('lg:col-span-7', 'reveal')}>
              <div className="section-tag">Our Mission</div>
              <h2 className="section-title">
                Making Gaming <span className="text-gold">Accessible & Exciting</span>
              </h2>
              <p className={clsx('text-[15px]', 'text-muted', 'leading-[1.8]', 'font-light', 'mb-5')}>
                Our mission is simple. We want to make online gaming more exciting, more accessible, and more rewarding for players around the world. At Reddy Line, we believe entertainment should be easy to access and enjoyable without unnecessary barriers.
              </p>
              <p className={clsx('text-[15px]', 'text-muted', 'leading-[1.8]', 'font-light', 'mb-5')}>
                We work continuously to improve our platform and deliver better experiences through innovation, modern technology, and customer-focused services. Every feature on Reddy Line is developed with users in mind.
              </p>
              <p className={clsx('text-[15px]', 'text-muted', 'leading-[1.8]', 'font-light')}>
                From easy account access to secure transactions and fast-loading games, we focus on making every interaction smooth and reliable. Our goal is not only to become a leading online gaming platform but also to build long-term trust with players globally. We aim to create a space where entertainment and reliability work together perfectly.
              </p>
            </div>

            {/* Right: Platform preview */}
            <div className={clsx('lg:col-span-5', 'reveal', 'relative', 'rounded-2xl', 'overflow-hidden', 'border', 'border-border', 'bg-bg2', 'shadow-[0_20px_40px_rgba(0,0,0,0.5)]')}>
              <Image
                src="/about-mission-gold-v2.png"
                alt="Reddy Line Live Platform Welcome"
                width={1280}
                height={1080}
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="w-full h-auto block"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== GLOBAL & SECURITY ===== */}
      <section className={clsx('py-[50px]', 'px-[5%]', 'bg-bg2', 'border-t', 'border-b', 'border-border')}>
        <div className={clsx('max-w-[1200px]', 'mx-auto')}>
          <div className={clsx('grid', 'grid-cols-1', 'lg:grid-cols-2', 'gap-12')}>
            {/* Global Experience */}
            <div className={clsx('bg-card', 'border', 'border-border', 'rounded-2xl', 'p-8', 'md:p-12', 'reveal', 'relative', 'overflow-hidden', 'group')}>
              <div className={clsx('absolute', '-bottom-10', '-right-10', 'w-[200px]', 'h-[200px]', 'bg-[radial-gradient(circle,rgba(0,120,229,0.08)_0%,transparent_70%)]', 'pointer-events-none')} />
              <div className="section-tag">Audience</div>
              <h3 className={clsx('font-bebas', 'text-[32px]', 'text-white', 'tracking-[1px]', 'mb-4')}>
                A Global <span className="text-gold">Gaming Experience</span>
              </h3>
              <p className={clsx('text-[14px]', 'text-muted', 'leading-[1.8]', 'font-light', 'mb-6')}>
                Reddy Line is built for users across different countries and regions. Our platform supports a global audience by offering a seamless experience that works smoothly across multiple devices and internet speeds.
              </p>
              <p className={clsx('text-[14px]', 'text-muted', 'leading-[1.8]', 'font-light')}>
                We understand that online users expect instant access and uninterrupted entertainment, which is why we optimize our services for performance and accessibility. We stand out by focusing on quality, performance, and user satisfaction, constantly monitoring industry trends to keep our platform modern and engaging.
              </p>
            </div>

            {/* Safe & Secure */}
            <div className={clsx('bg-card', 'border', 'border-border', 'rounded-2xl', 'p-8', 'md:p-12', 'reveal', 'relative', 'overflow-hidden', 'group')}>
              <div className={clsx('absolute', '-bottom-10', '-right-10', 'w-[200px]', 'h-[200px]', 'bg-[radial-gradient(circle,rgba(30,191,106,0.06)_0%,transparent_70%)]', 'pointer-events-none')} />
              <div className="section-tag">Security</div>
              <h3 className={clsx('font-bebas', 'text-[32px]', 'text-white', 'tracking-[1px]', 'mb-4')}>
                Safe & Secure <span className="text-gold">Platform</span>
              </h3>
              <p className={clsx('text-[14px]', 'text-muted', 'leading-[1.8]', 'font-light', 'mb-6')}>
                Security is one of the most important parts of any online platform and Reddy Line takes this responsibility seriously. We use advanced security systems and modern technologies to help protect user information and transactions.
              </p>
              <p className={clsx('text-[14px]', 'text-muted', 'leading-[1.8]', 'font-light')}>
                Online users today care deeply about privacy and account safety. That is why Reddy Line focuses on secure systems, transparent operations, and reliable support. Trust plays a major role in our operations, and we believe trust is earned through consistency, transparency, and quality service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ENTERTAINMENT & REAL GAME Collages ===== */}
      <section className={clsx('py-[50px]', 'px-[5%]', 'bg-bg')}>
        <div className={clsx('max-w-[1200px]', 'mx-auto')}>
          <div className={clsx('grid', 'grid-cols-1', 'lg:grid-cols-12', 'gap-16', 'items-center')}>
            {/* Left: Casino & games preview */}
            <div className={clsx('lg:col-span-5', 'reveal', 'relative', 'rounded-2xl', 'overflow-hidden', 'border', 'border-border', 'bg-bg2', 'shadow-[0_20px_40px_rgba(0,0,0,0.5)]')}>
              <Image
                src="/reddy-casino-v2.png"
                alt="Reddy Line Live Casino & Cricket ID Services"
                width={1280}
                height={1080}
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="w-full h-auto block"
              />
              <div className={clsx('absolute', 'bottom-4', 'left-4', 'right-4', 'bg-bg/90', 'backdrop-blur-md', 'border', 'border-white/10', 'p-4', 'rounded-xl')}>
                <div className={clsx('text-[12px]', 'font-bold', 'text-white', 'uppercase', 'tracking-[1px]', 'mb-1')}>Live Games Section</div>
                <div className={clsx('text-[11px]', 'text-muted', 'leading-relaxed')}>Genuine platform view of live croupier tables, roulette, blackjack and popular slots.</div>
              </div>
            </div>

            {/* Right: Content */}
            <div className={clsx('lg:col-span-7', 'reveal')}>
              <div className="section-tag">Entertainment</div>
              <h2 className="section-title">
                Wide Range of <span className="text-gold">Entertainment Options</span>
              </h2>
              <p className={clsx('text-[15px]', 'text-muted', 'leading-[1.8]', 'font-light', 'mb-5')}>
                At Reddy Line, entertainment is at the center of everything we do. Our platform offers a dynamic environment filled with engaging gaming experiences, interactive features, and modern digital entertainment options.
              </p>
              <p className={clsx('text-[15px]', 'text-muted', 'leading-[1.8]', 'font-light', 'mb-5')}>
                We understand that every player has different interests and preferences. Some users enjoy fast-paced action while others prefer strategic gameplay or live interactive experiences. Our platform supports a wide variety of choices.
              </p>
              <p className={clsx('text-[15px]', 'text-muted', 'leading-[1.8]', 'font-light')}>
                Explore casino games, cricket ID, and popular online entertainment. Users can enjoy poker, roulette, blackjack, baccarat, teen patti, andar bahar, aviator, dragon tiger, and slots. Cricket lovers can access smooth and reliable cricket ID services with real-time match updates and live action.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MOBILE FRIENDLY SECTION ===== */}
      <section className={clsx('py-[50px]', 'px-[5%]', 'bg-bg2', 'overflow-hidden')}>
        <div className={clsx('max-w-[1200px]', 'mx-auto')}>
          <div className={clsx('grid', 'grid-cols-1', 'lg:grid-cols-12', 'gap-16', 'items-center')}>
            {/* Left: Content */}
            <div className={clsx('lg:col-span-7', 'reveal')}>
              <div className="section-tag">Responsive design</div>
              <h2 className="section-title">
                Mobile Friendly <span className="text-gold">Experience</span>
              </h2>
              <p className={clsx('text-[15px]', 'text-muted', 'leading-[1.8]', 'font-light', 'mb-6')}>
                Modern users expect flexibility and convenience. That is why Reddy Line is fully optimized for mobile devices. Players can access the platform from smartphones, tablets, and desktops without losing performance or functionality.
              </p>
              <p className={clsx('text-[14px]', 'text-muted', 'leading-[1.8]', 'font-light', 'mb-6')}>
                Our responsive design ensures smooth navigation, fast loading speed, and easy gameplay across all screen sizes. Whether users are at home, traveling, or relaxing, they can enjoy uninterrupted entertainment.
              </p>
              <p className={clsx('text-[14px]', 'text-muted', 'leading-[1.8]', 'font-light')}>
                Mobile accessibility is essential in the online gaming world, and we continue to invest in technologies that improve speed, usability, and performance across all devices.
              </p>
            </div>

            {/* Right: Mobile preview */}
            <div className={clsx('lg:col-span-5', 'reveal', 'relative', 'rounded-2xl', 'overflow-hidden', 'border', 'border-border', 'bg-bg2')}>
              <Image
                src="/reddy-app-v2.png"
                alt="Mobile Friendly Gaming Platform Preview"
                width={1280}
                height={1080}
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="w-full h-auto block"
              />
              <div className={clsx('absolute', 'inset-0', 'bg-gradient-to-t', 'from-[#080A0E]/50', 'via-transparent', 'to-transparent', 'pointer-events-none')} />
            </div>
          </div>
        </div>
      </section>

      {/* ===== SUPPORT & GROWTH ===== */}
      <section className={clsx('py-[50px]', 'px-[5%]', 'bg-bg')}>
        <div className={clsx('max-w-[1200px]', 'mx-auto')}>
          <div className={clsx('grid', 'grid-cols-1', 'lg:grid-cols-2', 'gap-12')}>
            {/* Customer Support */}
            <div className={clsx('bg-card', 'border', 'border-border', 'rounded-2xl', 'p-8', 'md:p-12', 'reveal', 'group')}>
              <div className="section-tag">Help Desk</div>
              <h3 className={clsx('font-bebas', 'text-[32px]', 'text-white', 'tracking-[4px]', 'mb-4')}>
                Customer Support <span className="text-gold">That Cares</span>
              </h3>
              <p className={clsx('text-[14px]', 'text-muted', 'leading-[1.8]', 'font-light', 'mb-6')}>
                A strong support system is important for any online platform and Reddy Line is committed to helping users whenever they need assistance. Our customer support team focuses on providing quick, helpful, and professional service for users around the world.
              </p>
              <p className={clsx('text-[14px]', 'text-muted', 'leading-[1.8]', 'font-light')}>
                We understand that players value clear communication and fast problem solving. From account related questions to technical guidance, our team works hard to deliver smooth solutions and positive experiences, building long-term trust.
              </p>
            </div>

            {/* Innovation & Growth */}
            <div className={clsx('bg-card', 'border', 'border-border', 'rounded-2xl', 'p-8', 'md:p-12', 'reveal', 'group')}>
              <div className="section-tag">Vision</div>
              <h3 className={clsx('font-bebas', 'text-[32px]', 'text-white', 'tracking-[1px]', 'mb-4')}>
                Innovation & <span className="text-gold">Future Growth</span>
              </h3>
              <p className={clsx('text-[14px]', 'text-muted', 'leading-[1.8]', 'font-light', 'mb-6')}>
                The digital entertainment industry continues to evolve and Reddy Line is committed to growing with it. We regularly upgrade our platform, introduce new technologies, and improve user experiences to stay ahead in the competitive market.
              </p>
              <p className={clsx('text-[14px]', 'text-muted', 'leading-[1.8]', 'font-light')}>
                Innovation drives our vision for the future. We explore modern trends, user preferences, and industry developments to create a platform that remains exciting and relevant, adapting to deliver faster services and improved security.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE REDDY LINE ===== */}
      <section className={clsx('py-[50px]', 'px-[5%]', 'bg-bg2', 'border-t', 'border-b', 'border-border')}>
        <div className={clsx('max-w-[900px]', 'mx-auto', 'text-left', 'reveal')}>
          <div className="section-tag">Value Proposition</div>
          <h2 className="section-title">
            Why Players Choose <span className="text-gold">Reddy Line</span>
          </h2>
          <p className={clsx('text-[15px]', 'text-muted', 'leading-[1.8]', 'font-light', 'mb-5')}>
            Players choose Reddy Line because we focus on what truly matters. We provide a smooth user experience, strong platform performance, engaging entertainment, secure systems, and reliable support. Every part of our platform is built to make online entertainment more enjoyable and accessible.  Our growing global community reflects the trust and satisfaction of users who continue choosing Reddy Line for their digital entertainment needs. We are proud to serve players from different regions and backgrounds while maintaining high standards of quality and performance.
          </p>
          {/* <p className={clsx('text-[15px]', 'text-muted', 'leading-[1.8]', 'font-light')}>
            Our growing global community reflects the trust and satisfaction of users who continue choosing Reddy Line for their digital entertainment needs. We are proud to serve players from different regions and backgrounds while maintaining high standards of quality and performance.
          </p> */}
        </div>
      </section>

      <AboutFaq />

      {/* ===== FINAL CTA ===== */}
      <section className={clsx('py-[60px]', 'px-[5%]', 'bg-bg', 'text-left', 'relative', 'overflow-hidden')}>
        <div className={clsx('absolute', 'top-1/2', 'left-1/2', '-translate-x-1/2', '-translate-y-1/2', 'w-[800px]', 'h-[400px]', 'bg-[radial-gradient(ellipse,rgba(0,120,229,0.06)_0%,transparent_70%)]', 'pointer-events-none')} />

        <div className={clsx('relative', 'z-10', 'max-w-[750px]', 'mx-auto', 'reveal')}>
          <div className="section-tag">Join Us</div>
          <h2 className="section-title">
            Join the Future of <br />Online Entertainment at <span className="text-gold">Reddy Line</span>
          </h2>
          <p className={clsx('text-[15px]', 'text-muted', 'leading-[1.8]', 'font-light', 'mb-8')}>
            Reddy Line continues moving forward with a clear vision to become one of the most trusted and recognized online gaming platforms globally. We are dedicated to providing modern entertainment experiences supported by technology, performance, and customer satisfaction.
          </p>
          <div className={clsx('flex', 'gap-4', 'justify-start', 'flex-wrap')}>
            <Link href="/" className={clsx('btn', 'btn-gold', 'btn-large')}>Join & Register Now</Link>
            <Link href="/games" className={clsx('btn', 'btn-ghost', 'btn-large')}>Explore Game Hub</Link>
          </div>
        </div>
      </section>
    </>
  );
}

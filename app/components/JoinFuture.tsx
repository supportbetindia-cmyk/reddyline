"use client";

import clsx from "clsx";
import Link from "next/link";


export default function JoinFuture() {
  return (
    <section className={clsx('py-[60px]', 'px-[5%]', 'bg-bg', 'relative', 'overflow-hidden')}>
      {/* Decorative Glows */}
      <div className={clsx('absolute', 'top-1/2', 'left-1/2', '-translate-x-1/2', '-translate-y-1/2', 'w-[900px]', 'h-[500px]', 'bg-[radial-gradient(ellipse,rgba(229,193,88,0.12)_0%,transparent_70%)]', 'pointer-events-none')} />

      <div className={clsx('max-w-[1000px]', 'mx-auto', 'relative', 'z-10')}>
        {/* Growing Section */}
        <div className={clsx('text-left', 'sm:text-center', 'mb-16', 'reveal')}>
          <div className={clsx('section-tag', 'justify-center')}>Our Growth</div>
          <h2 className="section-title">
            Growing as One of the<br />Best Online <span className="text-gold">Casinos in India</span>
          </h2>
          <p className={clsx('text-[16px]', 'text-muted', 'leading-[1.8]', 'max-w-[750px]', 'mx-auto', 'font-light', 'mb-5')}>
            The online gaming industry is highly competitive but Reddy Line continues growing because of its focus on quality user experience and platform performance.
          </p>
          <p className={clsx('text-[14px]', 'text-muted', 'leading-[1.8]', 'max-w-[750px]', 'mx-auto', 'font-light')}>
            From casino game India searches to users looking for the best cricket betting ID services Reddy Line is becoming a preferred destination for players who want secure smooth and exciting online entertainment.
          </p>
          <p className={clsx('text-[14px]', 'text-muted', 'leading-[1.8]', 'max-w-[750px]', 'mx-auto', 'font-light', 'mt-4')}>
            Our mission is to continue improving the platform introducing better gaming features and delivering world class entertainment experiences for players across India and global markets.
          </p>
        </div>

        {/* Divider */}
        <div className={clsx('w-32', 'h-[2px]', 'bg-[linear-gradient(90deg,transparent,#E5C158,transparent)]', 'mx-auto', 'mb-16', 'reveal')} />

        {/* Join CTA Section */}
        <div className={clsx('text-left', 'sm:text-center', 'reveal')}>
          <h2 className="section-title">
            Join the Future of<br />Online Gaming with <span className="text-gold">Reddy Line</span>
          </h2>
          <p className={clsx('text-[15px]', 'text-muted', 'leading-[1.8]', 'max-w-[750px]', 'mx-auto', 'font-light', 'mb-5')}>
            Reddy Line continues growing as a trusted destination for users searching for casino game India platforms online cricket ID services and premium sports betting experiences.
          </p>
          <p className={clsx('text-[14px]', 'text-muted', 'leading-[1.8]', 'max-w-[750px]', 'mx-auto', 'font-light', 'mb-5')}>
            From best casino games and IPL cricket betting to mobile gaming and live casino entertainment our platform is built to provide speed quality security and excitement for modern players.
          </p>
          <p className={clsx('text-[14px]', 'text-muted', 'leading-[1.8]', 'max-w-[750px]', 'mx-auto', 'font-light', 'mb-10')}>
            If you are searching for the best online casinos in India trusted cricket betting ID services secure online gambling casino experiences or exciting casino games online Reddy Line is designed to deliver everything in one place.
          </p>

          {/* CTA Box */}
          <div className={clsx(
            'card-luxury',
            'p-10', 'max-w-[700px]', 'mx-auto', 'border-[#E5C158]/30', 'shadow-[0_0_35px_rgba(229,193,88,0.15)]'
          )}>
            <p className={clsx('text-[16px]', 'text-white', 'font-medium', 'leading-[1.7]', 'mb-8')}>
              Join Reddy Line today and experience a modern online gaming platform created for users who expect better performance better entertainment and a smoother gaming experience every day.
            </p>
            <div className={clsx('flex', 'gap-4', 'justify-center', 'flex-wrap')}>
              <a href="https://wa.link/1xplayindia" className={clsx('btn', 'btn-gold', 'btn-large')}>Join Reddy Line Now</a>
              <Link href="/casino" className={clsx('btn', 'btn-ghost', 'btn-large')}>Explore Games</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

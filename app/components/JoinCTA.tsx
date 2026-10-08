"use client";

export default function JoinCTA() {
  return (
    <section className="py-[50px] px-[5%] bg-bg text-left sm:text-center relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse,rgba(229,193,88,0.15)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-[1]">
        <div className="section-tag justify-center">Join Now</div>
        <h2 className="section-title">
          Ready to <span className="text-gold">Win Big</span>?
        </h2>
        <p className="section-desc mx-auto text-center mb-0">
          Join thousands of players already winning on India&apos;s best gaming platform. Start playing today.
        </p>

        <div className="flex gap-4 justify-center flex-wrap mt-10">
          <a href="https://www.1xplay.xyz/games" className="btn btn-gold btn-large">Start Playing Now</a>
          <a href="https://www.1xplay.xyz/games/live-casino" className="btn btn-ghost btn-large">Explore Casino</a>
        </div>
      </div>
    </section>
  );
}

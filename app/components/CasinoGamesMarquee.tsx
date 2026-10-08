import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

export type CasinoGameCard = {
  name: string;
  href: string;
  image: string;
  badge: "hot" | "new" | null;
};

type CasinoGamesMarqueeProps = {
  games: CasinoGameCard[];
  /** Optional override — defaults to first half of `games` */
  rowA?: CasinoGameCard[];
  /** Optional override — defaults to second half of `games` */
  rowB?: CasinoGameCard[];
};

function GameCard({ game }: { game: CasinoGameCard }) {
  return (
    <Link
      href={game.href}
      target="_blank"
      rel="noopener noreferrer"
      className={clsx(
        "relative shrink-0 rounded-lg overflow-hidden aspect-[4/5]",
        "w-[130px] sm:w-[150px] md:w-[170px] lg:w-[190px]",
        "border border-border shadow-md group cursor-pointer",
        "transition-colors duration-300 hover:border-[rgba(0,120,229,0.45)]"
      )}
    >
      <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-[1.05]">
        <Image src={game.image} alt={game.name} fill sizes="190px" className="object-fit" />
      </div>

      {game.badge === "hot" && (
        <div className="absolute top-2 right-2 bg-red text-white text-[8px] font-bold uppercase tracking-[1px] px-1.5 py-0.5 rounded z-20">
          Hot
        </div>
      )}
      {game.badge === "new" && (
        <div className="absolute top-2 right-2 bg-green text-[#041208] text-[8px] font-bold uppercase tracking-[1px] px-1.5 py-0.5 rounded z-20">
          New
        </div>
      )}

      <div
        className={clsx(
          "absolute inset-0 flex items-center justify-center p-3",
          "bg-black/65 opacity-0 group-hover:opacity-100",
          "transition-opacity duration-300 z-10"
        )}
      >
        <span className="font-syne font-bold text-[12px] sm:text-[13px] text-white text-center leading-tight">
          {game.name}
        </span>
      </div>
    </Link>
  );
}

function MarqueeRow({
  games,
  direction,
  duration = "42s",
}: {
  games: CasinoGameCard[];
  direction: "left" | "right";
  duration?: string;
}) {
  const track = [...games, ...games];

  return (
    <div
      className="overflow-hidden"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 4%, black 96%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 4%, black 96%, transparent)",
      }}
    >
      <div
        className="flex w-max gap-3 py-0.5 hover:[animation-play-state:paused]"
        style={{
          animation: `${direction === "left" ? "marquee" : "marquee-reverse"} ${duration} linear infinite`,
        }}
      >
        {track.map((game, i) => (
          <GameCard key={`${game.image}-${i}`} game={game} />
        ))}
      </div>
    </div>
  );
}

/** Two auto-scrolling rows: top R→L, bottom L→R. Each row shows a different set of games. */
export default function CasinoGamesMarquee({ games, rowA, rowB }: CasinoGamesMarqueeProps) {
  const mid = Math.ceil(games.length / 2);
  const topRow = rowA ?? games.slice(0, mid);
  const bottomRow = rowB ?? games.slice(mid);

  return (
    <section className="relative z-10 pb-10 md:pb-14">
      <div
        className={clsx(
          "w-screen max-w-[100vw] ml-[calc(50%-50vw)]",
          "space-y-3 md:space-y-4"
        )}
      >
        <MarqueeRow games={topRow} direction="left" duration="38s" />
        <MarqueeRow games={bottomRow} direction="right" duration="44s" />
      </div>
    </section>
  );
}

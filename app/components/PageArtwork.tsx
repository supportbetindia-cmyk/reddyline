import Image from "next/image";

type PageArtworkProps = {
  src: string;
  alt: string;
  label: string;
  className?: string;
  imageClassName?: string;
};

export function PageArtwork({
  src,
  alt,
  label,
  className = "",
  imageClassName = "object-cover",
}: PageArtworkProps) {
  return (
    <figure
      className={`group relative mx-auto mt-8 aspect-[16/9] w-full max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-bg2 shadow-[0_22px_70px_-32px_rgba(212,175,55,0.55)] sm:mt-10 sm:aspect-[21/8] ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 640px) 90vw, (max-width: 1200px) 86vw, 1000px"
        className={`${imageClassName} transition-transform duration-700 group-hover:scale-[1.02]`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-black/10" />
      <figcaption className="absolute inset-x-0 bottom-0 px-4 pb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-gold-light sm:px-6 sm:pb-5 sm:text-[11px]">
        {label}
      </figcaption>
    </figure>
  );
}

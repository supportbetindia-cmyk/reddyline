"use client";

import clsx from "clsx";
import Link from "next/link";
import { useMemo, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter, useSearchParams } from "next/navigation";
import { ArrowRight, Clock, Sparkles, Tag } from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";
import { getUniqueCategories, type BlogPost } from "../lib/wordpress";

export default function BlogView({
  posts,
  usingFallback,
}: {
  posts: BlogPost[];
  usingFallback: boolean;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = useMemo(() => ["All", ...getUniqueCategories(posts)], [posts]);

  useEffect(() => {
    const fromUrl = searchParams.get("category");
    if (fromUrl) {
      const match = categories.find((c) => c.toLowerCase() === fromUrl.toLowerCase());
      setActiveCategory(match ?? fromUrl);
    } else {
      setActiveCategory("All");
    }
  }, [searchParams, categories]);

  const selectCategory = (cat: string) => {
    setActiveCategory(cat);
    const href = cat === "All" ? "/blog" : `/blog?category=${encodeURIComponent(cat)}`;
    router.push(href, { scroll: false });
  };

  const filteredPosts = useMemo(() => {
    if (activeCategory === "All") return posts;
    return posts.filter((p) => p.category.toLowerCase() === activeCategory.toLowerCase());
  }, [posts, activeCategory]);

  return (
    <>
      <ScrollReveal />

      <div className="relative min-h-screen bg-[#030914] overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 15%, transparent 70%)",
            WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 15%, transparent 70%)",
          }}
        />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-[radial-gradient(ellipse,rgba(246, 196, 83,0.1)_0%,transparent_65%)] pointer-events-none" />

        {/* Hero */}
        <section className="relative z-10 pt-[120px] pb-10 px-[5%]">
          <div className="max-w-[1400px] mx-auto text-left sm:text-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="font-bebas text-[clamp(52px,8vw,96px)] tracking-[2px] leading-[0.9] text-white mb-4">
                1x
                <span className="bg-gradient-to-r from-[#D4AF37] via-[#F6C453] to-[#FFF2C6] bg-clip-text leading-0 tracking-normal text-transparent">
                  play
                </span>{" "}
                <span>Blog</span>
              </h1>
              <p className="text-muted text-[15px] md:text-[17px] leading-relaxed font-light max-w-2xl mx-auto mb-8">
               Learn betting strategies, cricket guides, casino tips, and platform updates designed to help players make informed decisions and enjoy a better gaming experience.

              </p>

              {/* "Coming soon" banner only shows while WordPress isn't connected yet */}
              {usingFallback && (
                <div className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl border border-amber-500/25 bg-amber-500/10 backdrop-blur-md">
                  <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                  <p className="text-[13px] text-amber-200/90 font-syne">
                    <span className="font-bold text-amber-300">Coming Soon</span>
                    {" — "}
                    We&apos;re preparing fresh content. Check back shortly!
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        </section>

        {/* Category filter */}
        <section className="relative z-10 px-[5%] pb-8">
          <div className="max-w-[1400px] mx-auto flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => selectCategory(cat)}
                className={clsx(
                  "px-4 py-2 rounded-full text-[11px] font-bold uppercase tracking-wider font-syne border transition-colors cursor-pointer",
                  activeCategory === cat
                    ? "bg-[#F6C453] border-[#F6C453] text-white"
                    : "bg-white/5 border-white/10 text-muted hover:border-[#F6C453]/40 hover:text-white"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* Post grid */}
        <section className="relative z-10 px-[5%] pb-28">
          <div className="max-w-[1400px] mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-8 h-px bg-[#F6C453]" />
              <h3 className="font-bebas text-3xl text-white tracking-[1px]">
                {usingFallback ? "Upcoming" : "Latest"}{" "}
                <span className="text-[#F6C453]">Articles</span>
                {activeCategory !== "All" && (
                  <span className="text-muted text-lg font-syne font-semibold normal-case tracking-normal">
                    {" "}
                    · {activeCategory}
                  </span>
                )}
              </h3>
            </div>

            {filteredPosts.length === 0 ? (
              <div className="rounded-2xl border border-white/[0.08] bg-[#0a1220]/60 px-6 py-14 text-center">
                <p className="text-muted text-[15px] font-light">
                  No articles in <span className="text-white font-medium">{activeCategory}</span> yet.
                </p>
                <button
                  type="button"
                  onClick={() => selectCategory("All")}
                  className="mt-4 text-[13px] font-semibold text-[#F6C453] hover:text-white transition-colors"
                >
                  View all articles
                </button>
              </div>
            ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.07 }}
                  className="group relative rounded-2xl overflow-hidden"
                >
                  <div
                    className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: `linear-gradient(135deg, ${post.accent}55, transparent 60%)` }}
                  />
                  <CardShell slug={usingFallback ? undefined : post.slug}>
                    {/* Thumbnail */}
                    {post.imageUrl ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <div className="w-full relative overflow-hidden bg-[#030914]/60 border-b border-white/[0.06]">
                        <img
                          src={post.imageUrl}
                          alt={post.imageAlt || post.title}
                          className="w-full h-auto object-contain block transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    ) : (
                      <div className="w-full aspect-[16/9] bg-[#030914]/60 flex items-center justify-center border-b border-white/[0.06]">
                        <Tag className="w-6 h-6 text-white/15" />
                      </div>
                    )}

                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center gap-2 mb-3">
                        <span
                          className="text-[9px] font-black uppercase tracking-[0.15em] px-2 py-0.5 rounded border font-syne"
                          style={{
                            color: post.accent,
                            borderColor: `${post.accent}33`,
                            backgroundColor: `${post.accent}12`,
                          }}
                        >
                          {post.category}
                        </span>
                        {usingFallback && (
                          <span className="text-[9px] font-bold uppercase tracking-wider text-amber-400/80">
                            Soon
                          </span>
                        )}
                      </div>

                      <h4 className="text-white font-syne font-bold text-[15px] leading-snug line-clamp-2 mb-2 group-hover:text-[#F6C453] transition-colors">
                        {post.title}
                      </h4>
                      <p className="text-muted text-[13px] leading-relaxed line-clamp-3 flex-1 mb-5">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between pt-4 border-t border-white/[0.06] mt-auto">
                        <span className="text-[11px] text-muted/70 flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.date}
                        </span>
                        {usingFallback ? (
                          <span className="text-[11px] font-bold uppercase tracking-wider text-muted/40 cursor-not-allowed">
                            Read Soon
                          </span>
                        ) : (
                          <span className="text-[11px] font-bold uppercase tracking-wider text-[#F6C453] flex items-center gap-1">
                            Read <ArrowRight className="w-3 h-3" />
                          </span>
                        )}
                      </div>
                    </div>
                  </CardShell>
                </motion.article>
              ))}
            </div>
            )}

            {/* Bottom CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-16 relative rounded-2xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/15 via-[#F6C453]/10 to-transparent" />
              <div className="relative border border-[#F6C453]/20 rounded-2xl px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#F6C453] mb-2 font-syne">
                    Meanwhile
                  </p>
                  <h3 className="font-bebas text-3xl md:text-4xl text-white tracking-wide">
                    EXPLORE THE PLATFORM
                  </h3>
                  <p className="text-muted text-sm mt-2">Explore our latest guides, strategies, and platform updates while discovering new ways to enjoy sports betting and casino entertainment.
</p>
                </div>
                <div className="flex gap-3 flex-wrap justify-center">
                  <Link href="/cricket" className="btn btn-gold inline-flex items-center gap-2">
                    Cricket Betting <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link href="/games" className="btn btn-ghost">
                    View Games
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}

// Wraps a grid card in a link when a slug is available, otherwise a plain div.
function CardShell({ slug, children }: { slug?: string; children: React.ReactNode }) {
  const className =
    "relative h-full flex flex-col rounded-2xl border border-white/[0.06] bg-[#0a1220]/70 backdrop-blur-xl overflow-hidden group";
  return slug ? (
    <Link href={`/blog/${slug}`} className={className}>
      {children}
    </Link>
  ) : (
    <div className={className}>{children}</div>
  );
}

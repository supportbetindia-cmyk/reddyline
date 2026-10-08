import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, ArrowRight, Calendar, Clock, ChevronRight, Tag } from "lucide-react";
import { getPost, getPosts, getAllSlugs, getUniqueCategories, blogCategoryHref, getCategoryImage, getPostDisplayImage, type BlogPost } from "../../lib/wordpress";
import TableOfContents, { type TocItem } from "../TableOfContents";
import ShareButtons from "../ShareButtons";

export const revalidate = 300;

export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return { title: "Article Not Found | Reddy Line Blog" };

  return {
    title: `${post.title} | Reddy Line Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      images: post.imageUrl ? [{ url: post.imageUrl }] : undefined,
    },
  };
}

// Inject ids into the article's h2/h3 headings and collect them for the Table of Contents.
function buildToc(html: string): { html: string; toc: TocItem[] } {
  const toc: TocItem[] = [];
  const used = new Set<string>();
  const withIds = html.replace(
    /<h([23])([^>]*)>([\s\S]*?)<\/h\1>/gi,
    (full, lvl: string, attrs: string, inner: string) => {
      const text = inner.replace(/<[^>]*>/g, "").replace(/&amp;/g, "&").trim();
      if (!text) return full;
      const existing = attrs.match(/id=["']([^"']+)["']/);
      let id = existing?.[1];
      if (!id) {
        const base = text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "") || "section";
        id = base;
        let n = 2;
        while (used.has(id)) id = `${base}-${n++}`;
      }
      used.add(id);
      toc.push({ id, text, level: Number(lvl) });
      const openTag = existing ? `<h${lvl}${attrs}>` : `<h${lvl}${attrs} id="${id}">`;
      return `${openTag}${inner}</h${lvl}>`;
    }
  );
  return { html: withIds, toc };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  const { html, toc } = buildToc(post.content ?? "");
  const { posts } = await getPosts();
  const blogCategories = ["All", ...getUniqueCategories(posts)];
  const postCategory = post.category?.toLowerCase() ?? "";
  const relatedSameCategory = posts.filter(
    (p) => p.slug !== slug && p.category.toLowerCase() === postCategory
  );
  const relatedOther = posts.filter(
    (p) => p.slug !== slug && p.category.toLowerCase() !== postCategory
  );
  const related = [...relatedSameCategory, ...relatedOther].slice(0, 6);
  const activeCategory = postCategory;
  const heroImage = getPostDisplayImage(post);

  return (
    <div className="relative min-h-screen bg-[#030914] overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-[radial-gradient(ellipse,rgba(246, 196, 83,0.1)_0%,transparent_65%)] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-[1200px] px-[5%] pt-[calc(var(--navbar-offset)+2.5rem)] pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_240px] gap-10 lg:gap-14 items-start">
          <article className="min-w-0">
            {/* Breadcrumb */}
            <nav className="flex items-center flex-wrap gap-1.5 text-[12px] text-muted/70 mb-8">
              <Link href="/" className="hover:text-[#F6C453] transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3" />
              <Link href="/blog" className="hover:text-[#F6C453] transition-colors">Blog</Link>
              <ChevronRight className="w-3 h-3" />
              <Link
                href={post.category ? blogCategoryHref(post.category) : "/blog"}
                className="hover:text-[#F6C453] transition-colors"
                style={{ color: post.accent }}
              >
                {post.category}
              </Link>
            </nav>

            {/* Header — left aligned */}
            <header className="text-left">
              <h1 className="font-bebas text-[clamp(32px,5.5vw,58px)] leading-[1.04] tracking-[0.5px] text-white mb-5">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] text-muted/80 mb-6">
                {post.date && (
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" /> {post.date}
                  </span>
                )}
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" /> {post.readTime}
                </span>
              </div>

              <ShareButtons title={post.title} />
            </header>

            {/* Featured image — same pattern as /blog cards: full width, natural height, no crop */}
            <div className="relative mt-10 w-full overflow-hidden rounded-2xl border border-white/[0.06] bg-[#030914]/60">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={heroImage}
                alt={post.imageAlt || post.title}
                width={post.imageWidth}
                height={post.imageHeight}
                className="w-full h-auto block"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030914]/90 via-[#030914]/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
                <span
                  className="text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full border font-syne backdrop-blur-md bg-[#030914]/60"
                  style={{
                    color: post.accent,
                    borderColor: `${post.accent}44`,
                  }}
                >
                  {post.category}
                </span>
              </div>
            </div>

            {/* Table of Contents */}
            <div className="mt-10">
              <TableOfContents items={toc} />
            </div>

            {/* Article body */}
            <div className="wp-content" dangerouslySetInnerHTML={{ __html: html }} />

            {/* Back link */}
            <div className="mt-10">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-[13px] font-semibold text-muted hover:text-[#F6C453] transition-colors"
              >
                <ArrowLeft className="w-4 h-4" /> Back to all articles
              </Link>
            </div>
          </article>

          {/* Categories sidebar */}
          <aside className="lg:sticky lg:top-[110px] lg:self-start space-y-5">
            <div className="relative h-36 rounded-2xl overflow-hidden border border-white/[0.08]">
              <ArticleImage
                src={heroImage}
                alt={post.title}
                className="object-cover"
                fill
                sizes="240px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030914] via-[#030914]/30 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3">
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#F6C453] font-syne mb-1">
                  Featured
                </p>
                <p className="text-white text-[13px] font-semibold font-syne leading-snug line-clamp-2">
                  {post.title}
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-white/[0.08] bg-[#0a1220]/60 p-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#F6C453] mb-4 font-syne">
                Categories
              </p>
              <ul className="flex flex-col gap-2 list-none m-0 p-0">
                {blogCategories.map((cat) => {
                  const isActive =
                    cat === "All"
                      ? false
                      : activeCategory === cat.toLowerCase();
                  const thumb =
                    cat === "All" ? "/reddy-sports-v2.png" : getCategoryImage(cat);
                  return (
                    <li key={cat}>
                      <Link
                        href={blogCategoryHref(cat)}
                        className={`flex items-center gap-3 rounded-xl border px-3 py-2.5 text-[14px] font-semibold font-syne transition-all ${
                          isActive
                            ? "border-[#F6C453]/40 bg-[#F6C453]/15 text-white"
                            : "border-white/[0.06] bg-white/[0.02] text-muted hover:border-[#F6C453]/30 hover:text-white hover:bg-[#F6C453]/10"
                        }`}
                      >
                        <span className="relative h-9 w-9 shrink-0 rounded-lg overflow-hidden border border-white/10 bg-[#030914]">
                          {thumb ? (
                            <Image
                              src={thumb}
                              alt={cat}
                              width={36}
                              height={36}
                              className="h-full w-full object-cover"
                            />
                          ) : (
                            <span className="flex h-full w-full items-center justify-center text-[#F6C453]">
                              <Tag className="w-4 h-4" />
                            </span>
                          )}
                        </span>
                        <span className="flex-1">{cat}</span>
                        <ChevronRight className="w-4 h-4 shrink-0 opacity-60" />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </aside>
        </div>
      </div>

      {/* Related posts */}
      {related.length > 0 && (
        <section className="relative z-10 mx-auto max-w-[1140px] px-[5%] pb-24">
          <div className="flex items-center gap-3 mb-8">
            <span className="w-8 h-px bg-[#F6C453]" />
            <h2 className="font-bebas text-3xl text-white tracking-[1px]">
              Related <span className="text-[#F6C453]">Articles</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {related.map((p) => (
              <RelatedCard key={p.id} post={p} />
            ))}
          </div>
        </section>
      )}

      {/* CTA banner */}
      <section className="relative z-10 mx-auto max-w-[1140px] px-[5%] pb-28">
        <div className="relative overflow-hidden rounded-3xl border border-[#F6C453]/25 p-8 md:p-12 text-center min-h-[220px] flex items-center justify-center">
          <Image
            src="/reddy-casino-v2.png"
            alt=""
            fill
            className="object-cover object-center opacity-25"
            sizes="(max-width: 1140px) 100vw, 1140px"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/40 via-[#030914]/85 to-[#030914]/95" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-[radial-gradient(ellipse,rgba(246, 196, 83,0.15)_0%,transparent_70%)] pointer-events-none" />
          <div className="relative z-10">
            <h2 className="font-bebas text-[clamp(30px,4.5vw,52px)] tracking-[1px] text-white mb-3">
              Ready to Play?
            </h2>
            <p className="text-muted text-[15px] max-w-xl mx-auto mb-7">
              Join Reddy Line for live cricket betting, casino games, and instant withdrawals.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/cricket" className="btn btn-gold btn-large inline-flex items-center gap-2">
                Start Playing <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/games" className="btn btn-ghost btn-large">
                Explore Games
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ArticleImage({
  src,
  alt,
  className,
  fill,
  sizes,
  priority,
}: {
  src: string;
  alt: string;
  className?: string;
  fill?: boolean;
  sizes?: string;
  priority?: boolean;
}) {
  if (src.startsWith("/")) {
    return (
      <Image
        src={src}
        alt={alt}
        fill={fill}
        sizes={sizes}
        priority={priority}
        className={className}
      />
    );
  }
  // eslint-disable-next-line @next/next/no-img-element
  return (
    <img
      src={src}
      alt={alt}
      className={fill ? `absolute inset-0 h-full w-full ${className ?? ""}` : className}
    />
  );
}

function RelatedCard({ post }: { post: BlogPost }) {
  const imageSrc = getPostDisplayImage(post);

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col rounded-2xl overflow-hidden border border-white/[0.06] bg-[#0a1220]/60 hover:border-[#F6C453]/30 transition-colors"
    >
      <div className="relative w-full overflow-hidden bg-[#030914]/60 border-b border-white/[0.06]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imageSrc}
          alt={post.imageAlt || post.title}
          className="w-full h-auto object-contain block transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1220]/80 via-transparent to-transparent" />
      </div>
      <div className="p-5">
        <div className="flex items-center gap-2 text-[11px] text-muted/70 mb-2">
          <span style={{ color: post.accent }} className="font-bold uppercase tracking-wider">
            {post.category}
          </span>
          {post.date && (
            <>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <span>{post.date}</span>
            </>
          )}
        </div>
        <h3 className="text-white font-syne font-bold text-[15px] leading-snug line-clamp-2 group-hover:text-[#F6C453] transition-colors">
          {post.title}
        </h3>
      </div>
    </Link>
  );
}

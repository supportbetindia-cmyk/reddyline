

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content?: string; 
  date: string; 
  readTime: string;
  category: string;
  accent: string;
  imageUrl?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
  author?: string;
  authorAvatar?: string;
  authorBio?: string;
  featured?: boolean;
};


const FALLBACK_POSTS: BlogPost[] = [
  {
    id: "ipl-2026-guide",
    slug: "ipl-2026-guide",
    title: "IPL 2026 Betting Guide: Markets, Odds & Smart Strategies",
    excerpt:
      "Everything you need to know before placing your first IPL wager — from match winner markets to live in-play betting and how odds shift ball by ball.",
    date: "Coming Soon",
    readTime: "8 min read",
    category: "Cricket",
    accent: "#F5A623",
    featured: true,
  },
  {
    id: "cricket-id-explained",
    slug: "cricket-id-explained",
    title: "How to Get & Use Your Reddy Line Cricket ID in 2026",
    excerpt:
      "A step-by-step walkthrough for creating your cricket betting ID, funding your account, and accessing live exchange markets on mobile.",
    date: "Coming Soon",
    readTime: "5 min read",
    category: "Platform",
    accent: "#F6C453",
  },
  {
    id: "live-betting-basics",
    slug: "live-betting-basics",
    title: "Live Betting Basics: Reading Odds During a Match",
    excerpt:
      "Learn how live odds work, when to cash out, and how to spot value in fast-moving cricket and football markets.",
    date: "Coming Soon",
    readTime: "6 min read",
    category: "Betting Tips",
    accent: "#1EBF6A",
  },
  {
    id: "teen-patti-strategies",
    slug: "teen-patti-strategies",
    title: "Teen Patti & Live Casino: A Beginner's Playbook",
    excerpt:
      "New to live casino? We break down popular Indian card games, table etiquette, and bankroll tips for a smoother first session.",
    date: "Coming Soon",
    readTime: "7 min read",
    category: "Casino",
    accent: "#E8303A",
  },
  {
    id: "responsible-gaming",
    slug: "responsible-gaming",
    title: "Responsible Gaming: Setting Limits That Actually Work",
    excerpt:
      "Practical advice on deposit limits, session timers, and knowing when to step away — because smart play beats chasing losses every time.",
    date: "Coming Soon",
    readTime: "4 min read",
    category: "Betting Tips",
    accent: "#F6C453",
  },
  {
    id: "deposit-withdrawal-guide",
    slug: "deposit-withdrawal-guide",
    title: "Deposits & Withdrawals: UPI, Bank Transfer & Payout Times",
    excerpt:
      "How funding and cashouts work on Reddy Line, what to expect during verification, and tips for faster withdrawal processing.",
    date: "Coming Soon",
    readTime: "5 min read",
    category: "Platform",
    accent: "#D4AF37",
  },
];


const REVALIDATE_SECONDS = 300;
const ACCENTS = ["#F6C453", "#F5A623", "#1EBF6A", "#E8303A", "#D4AF37"];


type WPMedia = {
  source_url?: string;
  alt_text?: string;
  media_details?: { width?: number; height?: number };
};
type WPTerm = { name?: string; taxonomy?: string };
type WPPost = {
  id: number;
  slug: string;
  date: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  _embedded?: {
    "wp:featuredmedia"?: WPMedia[];
    "wp:term"?: WPTerm[][];
    author?: { name?: string; description?: string; avatar_urls?: Record<string, string> }[];
  };
};

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------
function getBaseUrl(): string | null {
  const raw = process.env.WORDPRESS_API_URL?.trim();
  if (!raw) return null;
  return raw.replace(/\/+$/, "");
}

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, "");
}

function decodeEntities(input: string): string {
  return input
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)))
    .replace(/&#x([0-9a-fA-F]+);/g, (_, n) => String.fromCharCode(parseInt(n, 16)))
    .replace(/&nbsp;/g, " ")
    .replace(/&hellip;/g, "…")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#0?39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&amp;/g, "&")
    .trim();
}

function formatDate(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "";
  return d.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
}

function readingTime(html: string): string {
  const words = stripHtml(html).split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.round(words / 200))} min read`;
}

function pickAccent(key: string): string {
  let h = 0;
  for (let i = 0; i < key.length; i++) h = (h * 31 + key.charCodeAt(i)) >>> 0;
  return ACCENTS[h % ACCENTS.length];
}

function mapPost(wp: WPPost, withContent: boolean): BlogPost {
  const media = wp._embedded?.["wp:featuredmedia"]?.[0];
  const category =
    wp._embedded?.["wp:term"]?.flat().find((t) => t?.taxonomy === "category")?.name ?? "Blog";
  const excerpt = decodeEntities(stripHtml(wp.excerpt?.rendered ?? "")).replace(/\[(…|\.\.\.)\]$/, "").trim();

  return {
    id: String(wp.id),
    slug: wp.slug,
    title: decodeEntities(stripHtml(wp.title?.rendered ?? "")),
    excerpt,
    content: withContent ? wp.content?.rendered ?? "" : undefined,
    date: formatDate(wp.date),
    readTime: readingTime(wp.content?.rendered ?? wp.excerpt?.rendered ?? ""),
    category,
    accent: pickAccent(category),
    imageUrl: media?.source_url,
    imageAlt: media?.alt_text,
    imageWidth: media?.media_details?.width,
    imageHeight: media?.media_details?.height,
    author: wp._embedded?.author?.[0]?.name,
    authorAvatar: wp._embedded?.author?.[0]?.avatar_urls?.["96"],
    authorBio: wp._embedded?.author?.[0]?.description
      ? decodeEntities(stripHtml(wp._embedded.author[0].description!))
      : undefined,
  };
}

export function getUniqueCategories(posts: BlogPost[]): string[] {
  return [...new Set(posts.map((p) => p.category).filter(Boolean))].sort((a, b) =>
    a.localeCompare(b)
  );
}

export function blogCategoryHref(category: string): string {
  if (!category || category === "All") return "/blog";
  return `/blog?category=${encodeURIComponent(category)}`;
}

/** Local thumbnails for blog category filters and fallbacks */
export const BLOG_CATEGORY_IMAGES: Record<string, string> = {
  cricket: "/cricket-gold-v2.png",
  casino: "/reddy-casino-v2.png",
  tennis: "/tennis-gold-v2.png",
  badminton: "/badminton-gold-v2.png",
  soccer: "/football-gold-v2.png",
  football: "/football-gold-v2.png",
  platform: "/logo.png",
  "betting tips": "/reddy-sports-v2.png",
};

export function getCategoryImage(category?: string): string | undefined {
  if (!category) return undefined;
  return BLOG_CATEGORY_IMAGES[category.toLowerCase()];
}

export function getPostDisplayImage(post: BlogPost): string {
  if (post.imageUrl) return post.imageUrl;
  const categoryImage = getCategoryImage(post.category);
  if (categoryImage) return categoryImage;
  return "/reddy-sports-v2.png";
}

export async function getPosts(limit = 12): Promise<{ posts: BlogPost[]; usingFallback: boolean }> {
  const base = getBaseUrl();
  if (!base) return { posts: FALLBACK_POSTS, usingFallback: true };

  try {
    const res = await fetch(
      `${base}/wp-json/wp/v2/posts?_embed&per_page=${limit}`,
      { next: { revalidate: REVALIDATE_SECONDS } }
    );
    if (!res.ok) throw new Error(`WordPress posts request returned ${res.status}`);

    const data: WPPost[] = await res.json();
    if (!Array.isArray(data) || data.length === 0) {
      return { posts: FALLBACK_POSTS, usingFallback: true };
    }

    const posts = data.map((p) => mapPost(p, false));
    if (posts[0]) posts[0].featured = true; 
    return { posts, usingFallback: false };
  } catch (error) {
    console.error("Failed to fetch WordPress posts, using fallback:", error);
    return { posts: FALLBACK_POSTS, usingFallback: true };
  }
}


export async function getPost(slug: string): Promise<BlogPost | null> {
  const base = getBaseUrl();
  if (!base) {
    const fallback = FALLBACK_POSTS.find((p) => p.slug === slug);
    return fallback ? { ...fallback, content: `<p>${fallback.excerpt}</p>` } : null;
  }

  try {
    const res = await fetch(
      `${base}/wp-json/wp/v2/posts?slug=${encodeURIComponent(slug)}&_embed`,
      { next: { revalidate: REVALIDATE_SECONDS } }
    );
    if (!res.ok) throw new Error(`WordPress post request returned ${res.status}`);

    const data: WPPost[] = await res.json();
    const wp = Array.isArray(data) ? data[0] : undefined;
    return wp ? mapPost(wp, true) : null;
  } catch (error) {
    console.error(`Failed to fetch WordPress post "${slug}":`, error);
    return null;
  }
}


export async function getAllSlugs(): Promise<string[]> {
  const base = getBaseUrl();
  if (!base) return FALLBACK_POSTS.map((p) => p.slug);

  try {
    const res = await fetch(
      `${base}/wp-json/wp/v2/posts?per_page=100&_fields=slug`,
      { next: { revalidate: REVALIDATE_SECONDS } }
    );
    if (!res.ok) throw new Error(`WordPress slugs request returned ${res.status}`);

    const data: { slug: string }[] = await res.json();
    const slugs = Array.isArray(data) ? data.map((p) => p.slug).filter(Boolean) : [];
    return slugs.length > 0 ? slugs : FALLBACK_POSTS.map((p) => p.slug);
  } catch (error) {
    console.error("Failed to fetch WordPress slugs, using fallback:", error);
    return FALLBACK_POSTS.map((p) => p.slug);
  }
}



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


const POSTS: BlogPost[] = [
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

// Blog posts are bundled with the site. `usingFallback` keeps BlogView's
// "upcoming articles" presentation for these preview posts.
export async function getPosts(): Promise<{ posts: BlogPost[]; usingFallback: boolean }> {
  return { posts: POSTS, usingFallback: true };
}

export async function getPost(slug: string): Promise<BlogPost | null> {
  const post = POSTS.find((p) => p.slug === slug);
  return post ? { ...post, content: `<p>${post.excerpt}</p>` } : null;
}

export async function getAllSlugs(): Promise<string[]> {
  return POSTS.map((p) => p.slug);
}

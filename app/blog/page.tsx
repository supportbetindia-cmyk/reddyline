import BlogView from "./BlogView";
import { getPosts } from "../lib/wordpress";
import { Suspense } from "react";

// ISR on a Node server; baked at build time for static export.
export const revalidate = 300;

export default async function BlogPage() {
  const { posts, usingFallback } = await getPosts();
  return (
    <Suspense fallback={null}>
      <BlogView posts={posts} usingFallback={usingFallback} />
    </Suspense>
  );
}

import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Reddy Line — Online Casino & Cricket Betting in India",
    short_name: "Reddy Line",
    description:
      "Play online casino games, cricket betting, live sports, and mobile gaming at Reddy Line.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#0B0C10",
    theme_color: "#E5C158",
    orientation: "portrait-primary",
    categories: ["games", "entertainment", "sports"],
    icons: [
      { src: "/logo.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/logo.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/logo.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
      { src: "/logo.webp", sizes: "any", type: "image/webp" },
    ],
  };
}

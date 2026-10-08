import type { NextConfig } from "next";

// Set STATIC_EXPORT=true to produce a fully static site in `out/` for shared
// hosting (e.g. Hostinger File Manager). The live API routes are pre-rendered
// to their simulated data, images are served unoptimized, and routes are
// emitted as folders (trailingSlash) so Apache serves them without rewrites.
const isStaticExport = process.env.STATIC_EXPORT === "true";

const nextConfig: NextConfig = {
  ...(isStaticExport
    ? {
        output: "export",
        trailingSlash: true,
        images: { unoptimized: true },
        experimental: {
          workerThreads: false,
          cpus: 1,
        },
      }
    : {
        async redirects() {
          return [
            {
              source: "/:path*",
              has: [{ type: "host", value: "1xplay.pro" }],
              destination: "https://www.1xplay.pro/:path*",
              permanent: true,
            },
            {
              source: "/:path*",
              has: [{ type: "host", value: "reddyline.co" }],
              destination: "https://www.reddyline.co/:path*",
              permanent: true,
            },
            {
              source: "/:path*",
              has: [{ type: "host", value: "reddyline.com" }],
              destination: "https://www.reddyline.com/:path*",
              permanent: true,
            },
            {
              source: "/:path*",
              has: [{ type: "host", value: "readyline.com" }],
              destination: "https://www.readyline.com/:path*",
              permanent: true,
            },
            {
              source: "/affilate",
              destination: "/affiliate",
              permanent: true,
            },
          ];
        },
        images: {
          remotePatterns: [
            { protocol: "https", hostname: "lh3.googleusercontent.com" },
            { protocol: "https", hostname: "contribution.usercontent.google.com" },
            { protocol: "https", hostname: "img.youtube.com" },
            { protocol: "https", hostname: "i.ytimg.com" },
            { protocol: "https", hostname: "floralwhite-salamander-958022.hostingersite.com" },
          ],
        },
      }),
};  

export default nextConfig;

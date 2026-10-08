import type { Metadata, Viewport } from "next";
import { Manrope, Oswald } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";
import SmoothScroll from "./components/SmoothScroll";
import GlobalJsonLd from "./components/GlobalJsonLd";
import GoogleAnalytics from "./components/GoogleAnalytics";
import CursorGlow from "./components/CursorGlow";
import { rootMetadata } from "./seo";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = rootMetadata;

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#07080A",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${oswald.variable} ${manrope.variable}`}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-screen flex flex-col">
        <GoogleAnalytics />
        <GlobalJsonLd />
        <SmoothScroll />
        <Navbar />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

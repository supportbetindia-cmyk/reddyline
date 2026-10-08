"use client";

import { useEffect, useState } from "react";
import { Link2, Check } from "lucide-react";
import { FaXTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa6";

export default function ShareButtons({ title }: { title: string }) {
  const [url, setUrl] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => setUrl(window.location.href), []);

  const enc = encodeURIComponent;
  const open = (href: string) =>
    window.open(href, "_blank", "noopener,noreferrer,width=620,height=560");

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      /* clipboard unavailable */
    }
  };

  const btn =
    "w-9 h-9 rounded-lg border border-border bg-card text-muted flex items-center justify-center hover:text-white hover:border-[#F6C453]/50 transition-colors";

  return (
    <div className="flex items-center gap-2">
      <span className="text-[12px] text-muted/70 mr-1 font-syne uppercase tracking-wider">Share</span>
      <button
        type="button"
        aria-label="Share on Facebook"
        className={btn}
        onClick={() => open(`https://www.facebook.com/sharer/sharer.php?u=${enc(url)}`)}
      >
        <FaFacebookF className="w-[15px] h-[15px]" />
      </button>
      <button
        type="button"
        aria-label="Share on X"
        className={btn}
        onClick={() => open(`https://twitter.com/intent/tweet?url=${enc(url)}&text=${enc(title)}`)}
      >
        <FaXTwitter className="w-[15px] h-[15px]" />
      </button>
      <button
        type="button"
        aria-label="Share on LinkedIn"
        className={btn}
        onClick={() => open(`https://www.linkedin.com/sharing/share-offsite/?url=${enc(url)}`)}
      >
        <FaLinkedinIn className="w-4 h-4" />
      </button>
      <button type="button" aria-label="Copy link" className={btn} onClick={copy}>
        {copied ? <Check className="w-4 h-4 text-green" /> : <Link2 className="w-4 h-4" />}
      </button>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";

type Heading = { id: string; text: string };

function ShareIcon({ path }: { path: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden>
      <path d={path} />
    </svg>
  );
}

export default function ArticleSidebar({
  headings,
  title,
}: {
  headings: Heading[];
  title: string;
}) {
  const [activeId, setActiveId] = useState<string | null>(headings[0]?.id ?? null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-120px 0px -70% 0px", threshold: 0 }
    );

    headings.forEach((h) => {
      const el = document.getElementById(h.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  async function handleShare(platform: "x" | "whatsapp" | "copy") {
    const url = typeof window !== "undefined" ? window.location.href : "";
    if (platform === "copy") {
      try {
        await navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 1800);
      } catch {
        // clipboard unavailable, ignore
      }
      return;
    }
    const text = encodeURIComponent(title);
    const encodedUrl = encodeURIComponent(url);
    const shareUrl =
      platform === "x"
        ? `https://twitter.com/intent/tweet?text=${text}&url=${encodedUrl}`
        : `https://wa.me/?text=${text}%20${encodedUrl}`;
    window.open(shareUrl, "_blank", "noopener,noreferrer");
  }

  return (
    <div className="sticky top-24 space-y-6">
      {headings.length > 0 && (
        <nav aria-label="Table of contents">
          <p className="text-xs font-semibold uppercase tracking-wide text-cyan-300">
            In this guide
          </p>
          <ol className="mt-3 space-y-1 border-l border-white/10">
            {headings.map((heading) => {
              const isActive = activeId === heading.id;
              return (
                <li key={heading.id}>
                  <a
                    href={`#${heading.id}`}
                    className={`block border-l-2 py-1.5 pl-4 text-sm transition ${
                      isActive
                        ? "border-cyan-400 font-medium text-cyan-300"
                        : "border-transparent text-slate-400 hover:border-white/20 hover:text-slate-200"
                    }`}
                  >
                    {heading.text}
                  </a>
                </li>
              );
            })}
          </ol>
        </nav>
      )}

      <div className="border-t border-white/10 pt-5">
        <p className="text-xs font-semibold uppercase tracking-wide text-cyan-300">
          Share this guide
        </p>
        <div className="mt-3 flex items-center gap-2">
          <button
            onClick={() => handleShare("whatsapp")}
            aria-label="Share on WhatsApp"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition hover:border-cyan-400/30 hover:text-cyan-300"
          >
            <ShareIcon path="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.29-1.39a9.9 9.9 0 0 0 4.75 1.21h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2zm5.8 14.14c-.24.68-1.4 1.3-1.93 1.38-.5.08-1.12.11-1.8-.11-.42-.13-.95-.31-1.64-.6-2.88-1.25-4.76-4.14-4.9-4.33-.14-.19-1.17-1.56-1.17-2.98s.73-2.11 1-2.4c.26-.29.57-.36.76-.36s.38 0 .55.01c.18.01.41-.07.64.49.24.58.81 2 .88 2.14.07.14.12.31.02.5-.1.19-.15.31-.29.48-.15.17-.31.38-.44.51-.15.15-.3.31-.13.6.17.29.76 1.25 1.63 2.02 1.12 1 2.07 1.31 2.36 1.46.29.14.46.12.63-.07.17-.19.72-.83.91-1.11.19-.29.38-.24.64-.14.26.1 1.66.78 1.94.93.29.14.48.21.55.33.07.12.07.7-.17 1.38z" />
          </button>
          <button
            onClick={() => handleShare("x")}
            aria-label="Share on X"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition hover:border-cyan-400/30 hover:text-cyan-300"
          >
            <ShareIcon path="M18.9 2H22l-7.6 8.7L23.3 22h-7l-5.5-7.2L4.5 22H1.3l8.1-9.3L1 2h7.2l5 6.6zm-1.2 18h1.7L6.4 3.9H4.6z" />
          </button>
          <button
            onClick={() => handleShare("copy")}
            aria-label="Copy link"
            className="flex h-9 items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 text-xs font-medium text-slate-300 transition hover:border-cyan-400/30 hover:text-cyan-300"
          >
            <ShareIcon path="M3.9 12a4.1 4.1 0 0 1 4.1-4.1h3v1.7h-3a2.4 2.4 0 1 0 0 4.8h3V16h-3A4.1 4.1 0 0 1 3.9 12zm7-1h2.2v2H10.9zm3.1-3.1h3a4.1 4.1 0 1 1 0 8.2h-3v-1.7h3a2.4 2.4 0 1 0 0-4.8h-3z" />
            {copied ? "Copied" : "Copy link"}
          </button>
        </div>
      </div>

      <a
        href="https://wa.me/447362244111"
        target="_blank"
        rel="noopener noreferrer"
        className="glass block rounded-2xl p-5 transition hover:border-cyan-400/30"
      >
        <p className="text-sm font-semibold text-white">Still have questions?</p>
        <p className="mt-1.5 text-sm leading-relaxed text-slate-400">
          Message us on WhatsApp and we&apos;ll help you set things up.
        </p>
        <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-cyan-300">
          Chat with us →
        </span>
      </a>
    </div>
  );
}

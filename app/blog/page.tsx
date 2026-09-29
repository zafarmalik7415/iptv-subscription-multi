import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { getCountries, getPostBySlug, getPosts } from "@/lib/content";
import { getReadingTime } from "@/lib/blogUtils";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Guides, comparisons and answers about IPTV: how it works, how to set it up, and what to know before you buy a subscription.",
  alternates: { canonical: "/blog/" },
};

const categoryColors: Record<string, string> = {
  setup: "bg-cyan-500",
  guides: "bg-indigo-500",
  devices: "bg-emerald-500",
};

function formatDate(value: string | null) {
  if (!value) return "";
  return new Date(value).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function initials(name?: string | null) {
  if (!name) return "IP";
  const parts = name.trim().split(/\s+/);
  return ((parts[0]?.[0] ?? "") + (parts[1]?.[0] ?? "")).toUpperCase();
}

function CoverImage({ src, alt }: { src: string; alt: string }) {
  // eslint-disable-next-line @next/next/no-img-element
  return (
    <img
      src={src}
      alt={alt}
      className="h-full w-full object-cover transition group-hover:scale-105"
    />
  );
}

function BookmarkIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
      <path
        d="M6 4.5A1.5 1.5 0 0 1 7.5 3h9A1.5 1.5 0 0 1 18 4.5V21l-6-3.6L6 21z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default async function BlogPage() {
  const [posts, countries] = await Promise.all([getPosts(), getCountries()]);

  const readingTimes = await Promise.all(
    posts.map(async (post) => {
      const full = await getPostBySlug(post.slug);
      return [post.slug, full ? getReadingTime(full.body) : null] as const;
    })
  );
  const readingTimeBySlug = Object.fromEntries(readingTimes);

  return (
    <>
      <Header countries={countries} />
      <main className="flex-1">
        <section className="relative overflow-hidden px-6 pt-16 pb-12 sm:pt-24">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.15),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(129,140,248,0.18),transparent_40%)]"
          />
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-[family-name:var(--font-poppins)] text-4xl font-extrabold text-white sm:text-5xl">
              Guides For Getting The Most Out Of{" "}
              <span className="text-gradient">IPTV</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-300">
              Plain-English answers on setup, legality and the apps worth
              using, written to actually help, not to pad out a word count.
            </p>
          </div>
        </section>

        {posts.length === 0 ? (
          <p className="mx-auto mt-16 max-w-xl px-6 text-center text-slate-400">
            No posts published yet. Check back soon.
          </p>
        ) : (
          <div className="mx-auto max-w-6xl px-6 pb-24">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => {
                const categorySlug = post.categories[0]?.slug ?? "";
                const badgeColor = categoryColors[categorySlug] ?? "bg-slate-500";

                return (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}/`}
                    className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition hover:-translate-y-1 hover:border-cyan-400/30"
                  >
                    {post.mainImageUrl && (
                      <span className="relative block aspect-[16/9] overflow-hidden">
                        <CoverImage src={post.mainImageUrl} alt={post.title} />
                        {post.categories[0] && (
                          <span
                            className={`absolute left-3 top-3 rounded-full ${badgeColor} px-3 py-1 text-xs font-semibold text-white shadow-lg`}
                          >
                            {post.categories[0].title}
                          </span>
                        )}
                      </span>
                    )}

                    <span className="flex flex-1 flex-col p-6">
                      <span className="text-xs text-slate-500">
                        {[
                          formatDate(post.publishedAt),
                          readingTimeBySlug[post.slug]
                            ? `${readingTimeBySlug[post.slug]} min read`
                            : null,
                        ]
                          .filter(Boolean)
                          .join(" · ")}
                      </span>

                      <span className="mt-2 block font-[family-name:var(--font-poppins)] text-lg font-bold leading-snug text-white">
                        {post.title}
                      </span>

                      {post.excerpt && (
                        <span className="mt-2 block flex-1 text-sm leading-relaxed text-slate-400">
                          {post.excerpt}
                        </span>
                      )}

                      <span className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
                        <span className="flex items-center gap-2">
                          <span className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-indigo-500 text-[11px] font-semibold text-white">
                            {initials(post.author?.name)}
                          </span>
                          <span className="text-sm text-slate-300">
                            {post.author?.name ?? "IPTV Pro"}
                          </span>
                        </span>
                        <span className="text-slate-500 transition group-hover:text-cyan-300">
                          <BookmarkIcon />
                        </span>
                      </span>
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </main>
      <Footer countries={countries} />
      <WhatsAppButton />
    </>
  );
}

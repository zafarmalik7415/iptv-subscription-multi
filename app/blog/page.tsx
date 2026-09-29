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

function formatDate(value: string | null) {
  if (!value) return "";
  return new Date(value).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function CoverImage({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={src} alt={alt} className={className} />;
}

export default async function BlogPage() {
  const [posts, countries] = await Promise.all([getPosts(), getCountries()]);
  const [featured, ...rest] = posts;

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
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-cyan-300">
              <span className="h-2 w-2 rounded-full bg-cyan-400" />
              The blog
            </p>
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
            {featured && (
              <Link
                href={`/blog/${featured.slug}/`}
                className="glass group grid gap-0 overflow-hidden rounded-3xl transition hover:border-cyan-400/30 md:grid-cols-2"
              >
                {featured.mainImageUrl && (
                  <span className="block aspect-[16/9] overflow-hidden md:aspect-auto">
                    <CoverImage
                      src={featured.mainImageUrl}
                      alt={featured.title}
                      className="h-full w-full object-cover transition group-hover:scale-105"
                    />
                  </span>
                )}
                <span className="flex flex-col justify-center p-8 sm:p-10">
                  <span className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wide text-cyan-300">
                    <span className="rounded-full bg-cyan-400/10 px-2.5 py-1">
                      Latest
                    </span>
                    {featured.categories[0]?.title}
                  </span>
                  <span className="mt-3 block font-[family-name:var(--font-poppins)] text-2xl font-bold leading-snug text-white sm:text-3xl">
                    {featured.title}
                  </span>
                  {featured.excerpt && (
                    <span className="mt-3 block text-base leading-relaxed text-slate-400">
                      {featured.excerpt}
                    </span>
                  )}
                  <span className="mt-5 block text-xs text-slate-500">
                    {[
                      featured.author?.name,
                      formatDate(featured.publishedAt),
                      readingTimeBySlug[featured.slug]
                        ? `${readingTimeBySlug[featured.slug]} min read`
                        : null,
                    ]
                      .filter(Boolean)
                      .join(" · ")}
                  </span>
                </span>
              </Link>
            )}

            {rest.length > 0 && (
              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {rest.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}/`}
                    className="glass group flex flex-col overflow-hidden rounded-2xl transition hover:border-cyan-400/30"
                  >
                    {post.mainImageUrl && (
                      <span className="block aspect-[16/9] overflow-hidden">
                        <CoverImage
                          src={post.mainImageUrl}
                          alt={post.title}
                          className="h-full w-full object-cover transition group-hover:scale-105"
                        />
                      </span>
                    )}
                    <span className="flex flex-1 flex-col p-6">
                      {post.categories[0] && (
                        <span className="text-xs font-semibold uppercase tracking-wide text-cyan-300">
                          {post.categories[0].title}
                        </span>
                      )}
                      <span className="mt-2 block text-lg font-semibold leading-snug text-white">
                        {post.title}
                      </span>
                      {post.excerpt && (
                        <span className="mt-2 block flex-1 text-sm leading-relaxed text-slate-400">
                          {post.excerpt}
                        </span>
                      )}
                      <span className="mt-4 block text-xs text-slate-500">
                        {[
                          formatDate(post.publishedAt),
                          readingTimeBySlug[post.slug]
                            ? `${readingTimeBySlug[post.slug]} min read`
                            : null,
                        ]
                          .filter(Boolean)
                          .join(" · ")}
                      </span>
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        )}
      </main>
      <Footer countries={countries} />
      <WhatsAppButton />
    </>
  );
}

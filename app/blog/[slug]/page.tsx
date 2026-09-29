import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PortableText from "@/components/PortableText";
import BlogFaq from "@/components/BlogFaq";
import ReadingProgress from "@/components/ReadingProgress";
import ArticleSidebar from "@/components/ArticleSidebar";
import BackToTop from "@/components/BackToTop";
import { getCountries, getPostBySlug, getPostSlugs, getPosts } from "@/lib/content";
import { getHeadings, getReadingTime } from "@/lib/blogUtils";
import { siteUrl } from "@/lib/site";

export async function generateStaticParams() {
  const slugs = await getPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};

  const title = post.seoTitle || post.title;
  const description = post.seoDescription || post.excerpt || undefined;

  return {
    title,
    description,
    alternates: { canonical: `/blog/${post.slug}/` },
    openGraph: {
      type: "article",
      title: `${title} | IPTV Pro`,
      description,
      images: post.mainImageUrl ? [{ url: post.mainImageUrl }] : undefined,
    },
  };
}

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
  fill,
}: {
  src: string;
  alt: string;
  fill?: boolean;
}) {
  // eslint-disable-next-line @next/next/no-img-element
  return (
    <img
      src={src}
      alt={alt}
      className={fill ? "absolute inset-0 h-full w-full object-cover" : "h-auto w-full"}
    />
  );
}

function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden>
      <path
        d="M7 3v3M17 3v3M4 9h16M5 6h14a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden>
      <circle cx="12" cy="12" r="8.25" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M12 7.5V12l3 2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [post, countries, allPosts] = await Promise.all([
    getPostBySlug(slug),
    getCountries(),
    getPosts(),
  ]);

  if (!post) {
    notFound();
  }

  const headings = getHeadings(post.body);
  const readingTime = getReadingTime(post.body);
  const faqs = post.faqs ?? [];
  const related = allPosts.filter((p) => p.slug !== post.slug).slice(0, 2);
  const articleId = "article-content";

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt || undefined,
    image: post.mainImageUrl
      ? `${siteUrl}${post.mainImageUrl.startsWith("/") ? "" : "/"}${post.mainImageUrl}`
      : undefined,
    datePublished: post.publishedAt || undefined,
    author: post.author?.name
      ? { "@type": "Organization", name: post.author.name }
      : undefined,
    mainEntityOfPage: `${siteUrl}/blog/${post.slug}/`,
  };

  const faqJsonLd =
    faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: { "@type": "Answer", text: faq.answer },
          })),
        }
      : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
      <ReadingProgress targetId={articleId} />
      <Header countries={countries} />
      <main className="flex-1">
        <section className="relative overflow-hidden px-6 pt-16 pb-10 sm:pt-20">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_0%,rgba(34,211,238,0.14),transparent_40%),radial-gradient(circle_at_80%_10%,rgba(129,140,248,0.14),transparent_40%)]"
          />
          <div className="mx-auto max-w-6xl">
            <Link
              href="/blog/"
              className="text-sm font-medium text-cyan-300 transition hover:text-cyan-200"
            >
              ← Back to blog
            </Link>

            <div className="glow mt-6 grid overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] lg:grid-cols-2">
              <div className="flex flex-col justify-center p-8 sm:p-10">
                <div className="flex flex-wrap items-center gap-2">
                  {post.categories.map((category) => (
                    <span
                      key={category.slug}
                      className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-cyan-300"
                    >
                      {category.title}
                    </span>
                  ))}
                </div>

                <h1 className="mt-4 font-[family-name:var(--font-poppins)] text-3xl font-extrabold leading-tight text-white sm:text-4xl">
                  {post.title}
                </h1>

                {post.excerpt && (
                  <p className="mt-4 text-base leading-relaxed text-slate-400">
                    {post.excerpt}
                  </p>
                )}

                <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-400">
                  {post.author?.name && (
                    <span className="flex items-center gap-2">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-indigo-500 text-[10px] font-semibold text-white">
                        {post.author.name
                          .split(" ")
                          .slice(0, 2)
                          .map((w) => w[0])
                          .join("")
                          .toUpperCase()}
                      </span>
                      {post.author.name}
                    </span>
                  )}
                  {post.publishedAt && (
                    <span className="flex items-center gap-1.5">
                      <CalendarIcon />
                      {formatDate(post.publishedAt)}
                    </span>
                  )}
                  <span className="flex items-center gap-1.5">
                    <ClockIcon />
                    {readingTime} min read
                  </span>
                </div>
              </div>

              {post.mainImageUrl && (
                <div className="relative min-h-[260px] lg:min-h-0">
                  <CoverImage src={post.mainImageUrl} alt={post.title} fill />
                </div>
              )}
            </div>
          </div>
        </section>

        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-12 lg:grid-cols-[1fr_260px]">
          <div className="min-w-0">
            {headings.length > 0 && (
              <nav
                className="glass mb-10 rounded-2xl p-6 lg:hidden"
                aria-label="Table of contents"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-cyan-300">
                  In this guide
                </p>
                <ol className="mt-3 space-y-2">
                  {headings.map((heading) => (
                    <li key={heading.id}>
                      <a
                        href={`#${heading.id}`}
                        className="text-sm text-slate-300 transition hover:text-cyan-300"
                      >
                        {heading.text}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            )}

            {post.keyTakeaway && (
              <div className="glow mb-10 rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-cyan-500/10 via-indigo-500/5 to-transparent p-6">
                <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-cyan-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                  Key takeaway
                </p>
                <p className="mt-2 text-base leading-relaxed text-slate-200">
                  {post.keyTakeaway}
                </p>
              </div>
            )}

            <article id={articleId}>
              <PortableText value={post.body} />
            </article>

            {faqs.length > 0 && (
              <section className="mt-16">
                <h2 className="font-[family-name:var(--font-poppins)] text-2xl font-bold text-white sm:text-3xl">
                  Frequently Asked Questions
                </h2>
                <BlogFaq faqs={faqs} />
              </section>
            )}

            {related.length > 0 && (
              <section className="mt-16 border-t border-white/10 pt-10">
                <h2 className="font-[family-name:var(--font-poppins)] text-xl font-bold text-white">
                  Related guides
                </h2>
                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  {related.map((p) => (
                    <Link
                      key={p.slug}
                      href={`/blog/${p.slug}/`}
                      className="glass rounded-2xl p-5 transition hover:border-cyan-400/30"
                    >
                      <span className="block text-sm font-semibold leading-snug text-white">
                        {p.title}
                      </span>
                      {p.excerpt && (
                        <span className="mt-2 block text-sm leading-relaxed text-slate-400">
                          {p.excerpt}
                        </span>
                      )}
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </div>

          <aside className="hidden lg:block">
            <ArticleSidebar headings={headings} title={post.title} />
          </aside>
        </div>
      </main>
      <Footer countries={countries} />
      <WhatsAppButton />
      <BackToTop />
    </>
  );
}

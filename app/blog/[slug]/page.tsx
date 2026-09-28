import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PortableText from "@/components/PortableText";
import { getCountries, getPostBySlug, getPostSlugs } from "@/lib/content";

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
    alternates: { canonical: `/blog/${post.slug}` },
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

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [post, countries] = await Promise.all([
    getPostBySlug(slug),
    getCountries(),
  ]);

  if (!post) {
    notFound();
  }

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt || undefined,
    image: post.mainImageUrl || undefined,
    datePublished: post.publishedAt || undefined,
    author: post.author?.name
      ? { "@type": "Person", name: post.author.name }
      : undefined,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <Header countries={countries} />
      <main className="flex-1 px-6 py-20">
        <article className="mx-auto max-w-3xl">
          <Link
            href="/blog"
            className="text-sm font-medium text-cyan-300 transition hover:text-cyan-200"
          >
            ← Back to blog
          </Link>

          <div className="mt-6 flex flex-wrap gap-2">
            {post.categories.map((category) => (
              <span
                key={category.slug}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-cyan-300"
              >
                {category.title}
              </span>
            ))}
          </div>

          <h1 className="mt-4 font-[family-name:var(--font-poppins)] text-4xl font-extrabold leading-tight text-white sm:text-5xl">
            {post.title}
          </h1>

          <p className="mt-4 text-sm text-slate-500">
            {[post.author?.name, formatDate(post.publishedAt)]
              .filter(Boolean)
              .join(" · ")}
          </p>

          {post.mainImageUrl && (
            <div className="mt-8 overflow-hidden rounded-3xl border border-white/10">
              <Image
                src={post.mainImageUrl}
                alt={post.title}
                width={1200}
                height={675}
                priority
                className="h-auto w-full"
              />
            </div>
          )}

          <div className="mt-8">
            <PortableText value={post.body} />
          </div>
        </article>
      </main>
      <Footer countries={countries} />
      <WhatsAppButton />
    </>
  );
}

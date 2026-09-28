import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { getCountries, getPosts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Guides, comparisons and news about IPTV: how to set it up, pick a plan, fix buffering and get the most out of your subscription.",
  alternates: { canonical: "/blog" },
};

function formatDate(value: string | null) {
  if (!value) return "";
  return new Date(value).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPage() {
  const [posts, countries] = await Promise.all([getPosts(), getCountries()]);

  return (
    <>
      <Header countries={countries} />
      <main className="flex-1 px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-[family-name:var(--font-poppins)] text-4xl font-extrabold text-white sm:text-5xl">
            The <span className="text-gradient">IPTV Pro</span> Blog
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-slate-300">
            Setup guides, device comparisons and tips to get a smooth stream on
            every screen.
          </p>
        </div>

        {posts.length === 0 ? (
          <p className="mx-auto mt-16 max-w-xl text-center text-slate-400">
            No posts published yet. Check back soon.
          </p>
        ) : (
          <div className="mx-auto mt-16 grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="glass group flex flex-col overflow-hidden rounded-2xl transition hover:border-cyan-400/30"
              >
                {post.mainImageUrl && (
                  <span className="block aspect-[16/9] overflow-hidden">
                    <Image
                      src={post.mainImageUrl}
                      alt={post.title}
                      width={640}
                      height={360}
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
                    {[post.author?.name, formatDate(post.publishedAt)]
                      .filter(Boolean)
                      .join(" · ")}
                  </span>
                </span>
              </Link>
            ))}
          </div>
        )}
      </main>
      <Footer countries={countries} />
      <WhatsAppButton />
    </>
  );
}

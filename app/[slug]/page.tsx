import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CountryPageContent from "@/components/CountryPageContent";
import { getCountries, getCountryBySlug, getPostSlugs } from "@/lib/content";

export async function generateStaticParams() {
  const countries = await getCountries();
  return countries.map((country) => ({ slug: country.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const country = await getCountryBySlug(slug);
  if (!country) return {};

  const title = `IPTV Subscription in ${country.name}`;
  const description = `Get your IPTV subscription in ${country.name}. Thousands of live channels, series and movies in HD, Full HD and 4K, with instant activation and 24/7 support.`;

  return {
    title,
    description,
    alternates: {
      canonical: `/${country.slug}`,
    },
    openGraph: {
      title: `${title} | IPTV Pro`,
      description,
    },
  };
}

export default async function CountryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // `/blog` and other reserved routes are handled by their own segments; guard
  // anyway in case a post slug ever collides with this catch-all.
  const reserved = new Set(await getPostSlugs());
  if (reserved.has(slug)) notFound();

  const [country, countries] = await Promise.all([
    getCountryBySlug(slug),
    getCountries(),
  ]);

  if (!country) {
    notFound();
  }

  return (
    <>
      <Header countries={countries} />
      <CountryPageContent country={country} countries={countries} />
      <Footer countries={countries} />
      <WhatsAppButton />
    </>
  );
}

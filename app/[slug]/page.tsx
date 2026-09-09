import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CountryPageContent from "@/components/CountryPageContent";
import { countries, getCountry } from "@/lib/countries";

export function generateStaticParams() {
  return countries.map((country) => ({ slug: country.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const country = getCountry(slug);
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
  const country = getCountry(slug);

  if (!country) {
    notFound();
  }

  return (
    <>
      <Header />
      <CountryPageContent country={country} />
      <Footer />
      <WhatsAppButton />
    </>
  );
}

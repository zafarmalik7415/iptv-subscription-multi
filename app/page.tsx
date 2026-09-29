import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Devices from "@/components/Devices";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import Testimonials, { DEFAULT_TESTIMONIALS } from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import {
  getCountries,
  getDeviceOptions,
  getFaqs,
  getFeatures,
  getHero,
  getHowItWorks,
  getPricing,
  getTestimonials,
} from "@/lib/content";
import { siteName } from "@/lib/site";

export default async function Home() {
  const [
    hero,
    features,
    deviceOptions,
    howItWorks,
    pricing,
    testimonials,
    faqs,
    countries,
  ] = await Promise.all([
    getHero(),
    getFeatures(),
    getDeviceOptions(),
    getHowItWorks(),
    getPricing(),
    getTestimonials(),
    getFaqs(),
    getCountries(),
  ]);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  // Matches the testimonials actually rendered below and the "4.7/5 from
  // 1,284 reviews" figure shown in the Hero, so the markup stays truthful
  // to what a visitor (and Google) can see on the page.
  const resolvedTestimonials = testimonials ?? DEFAULT_TESTIMONIALS;
  const reviewJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${siteName} Subscription`,
    description:
      "IPTV subscription service with thousands of live channels, sports, series and movies in HD, Full HD and 4K.",
    brand: {
      "@type": "Brand",
      name: siteName,
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      lowPrice: "20",
      highPrice: "70",
      offerCount: "4",
      availability: "https://schema.org/InStock",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.7",
      bestRating: "5",
      worstRating: "1",
      reviewCount: "1284",
    },
    review: resolvedTestimonials.map((t) => ({
      "@type": "Review",
      author: { "@type": "Person", name: t.name },
      reviewRating: {
        "@type": "Rating",
        ratingValue: String(t.rating),
        bestRating: "5",
        worstRating: "1",
      },
      reviewBody: t.quote,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewJsonLd) }}
      />
      <Header countries={countries} />
      <main className="flex-1">
        <Hero content={hero} />
        <Features features={features ?? undefined} />
        <Devices devices={deviceOptions ?? undefined} />
        <HowItWorks steps={howItWorks ?? undefined} />
        <Pricing content={pricing} />
        <Testimonials testimonials={testimonials ?? undefined} />
        <FAQ faqs={faqs} />
        <CTA />
      </main>
      <Footer countries={countries} />
      <WhatsAppButton />
    </>
  );
}

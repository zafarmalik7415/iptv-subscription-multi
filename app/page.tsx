import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Devices from "@/components/Devices";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
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

import Link from "next/link";
import Pricing from "@/components/Pricing";
import Devices from "@/components/Devices";
import CountryFlag from "@/components/CountryFlag";
import { countries as staticCountries } from "@/lib/countries";
import type { Country } from "@/lib/sanity/types";

const whatsappNumber = "447362244111";

const features = [
  {
    icon: "🌐",
    title: "Optimized Servers",
    description:
      "Infrastructure and network routing built to deliver the lowest possible latency in your region.",
  },
  {
    icon: "🎬",
    title: "Local & International Content",
    description:
      "International channels, series and movies alongside a selection curated for your area.",
  },
  {
    icon: "🕒",
    title: "Support In Your Time Zone",
    description:
      "Our team is available on WhatsApp and live chat 24/7, no matter your time zone.",
  },
  {
    icon: "🔒",
    title: "Secure Payment, No Contract",
    description:
      "Subscribe, switch or cancel your plan whenever you want, with no long-term commitment.",
  },
];

function faqsFor(country: Country) {
  return [
    {
      question: `Does the IPTV subscription work well in ${country.name}?`,
      answer: `Yes. Our service works across ${country.name}, including cities like ${country.cities}, with servers optimized to deliver stable playback in HD, Full HD and 4K.`,
    },
    {
      question: `Do I need a VPN to use the service in ${country.name}?`,
      answer:
        "Not in most cases. Our platform is built to work directly with your regular internet connection.",
    },
    {
      question: "How many devices can I connect at once?",
      answer:
        "It depends on your plan: from 1 simultaneous connection on the monthly plan up to 4 on the annual plan.",
    },
    {
      question: "Can I try the service before committing to a longer plan?",
      answer:
        "Yes, message us on WhatsApp and we'll walk you through activating your subscription and watching channels within minutes.",
    },
  ];
}

export default function CountryPageContent({
  country,
  countries = staticCountries,
}: {
  country: Country;
  countries?: Country[];
}) {
  const otherCountries = countries.filter((c) => c.slug !== country.slug);
  const faqs = faqsFor(country);

  return (
    <main className="flex-1">
      <section className="relative overflow-hidden px-6 pt-16 pb-16 sm:pt-24">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.15),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(129,140,248,0.18),transparent_40%),radial-gradient(circle_at_50%_100%,rgba(244,114,182,0.12),transparent_40%)]"
        />
        <div aria-hidden className="bg-grid pointer-events-none absolute inset-0 -z-10" />
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-cyan-300">
            <CountryFlag code={country.code} className="h-3.5 w-5" />
            Available in {country.name}
          </p>
          <h1 className="font-[family-name:var(--font-poppins)] text-4xl font-extrabold leading-[1.15] text-white sm:text-5xl">
            IPTV Subscription In{" "}
            <span className="text-gradient">{country.name}</span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-slate-300">
            Premium live streaming for {country.demonym} customers in{" "}
            {country.cities} and across the rest of the country. Thousands of
            channels, series and movies in HD, Full HD and 4K, with instant
            activation and 24/7 support.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="#plans"
              className="btn-primary glow rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500 px-8 py-4 text-center text-base font-semibold text-white transition hover:opacity-90"
            >
              View Available Plans
            </a>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                `Hi, I'd like information about the IPTV subscription in ${country.name}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/15 bg-white/5 px-8 py-4 text-center text-base font-semibold text-white transition hover:bg-white/10"
            >
              Ask On WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-[family-name:var(--font-poppins)] text-3xl font-bold text-white sm:text-4xl">
              Why Choose Our IPTV Subscription In{" "}
              <span className="text-gradient">{country.name}</span>?
            </h2>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.title} className="glass rounded-2xl p-6">
                <span className="text-3xl">{feature.icon}</span>
                <h3 className="mt-4 text-lg font-semibold leading-snug text-white">
                  {feature.title}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-slate-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Pricing />
      <Devices />

      <section className="px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <h2 className="font-[family-name:var(--font-poppins)] text-3xl font-bold text-white sm:text-4xl">
              Frequently Asked Questions — {country.name}
            </h2>
          </div>

          <div className="mt-12 space-y-4">
            {faqs.map((faq) => (
              <div key={faq.question} className="glass rounded-2xl p-6">
                <h3 className="text-base font-semibold leading-snug text-white">{faq.question}</h3>
                <p className="mt-2 text-base leading-relaxed text-slate-400">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-16">
        <div className="glow relative mx-auto max-w-4xl overflow-hidden rounded-3xl bg-gradient-to-br from-cyan-500/20 via-indigo-500/20 to-pink-500/20 p-10 text-center sm:p-14">
          <h2 className="font-[family-name:var(--font-poppins)] text-2xl font-bold text-white sm:text-3xl">
            Start Watching IPTV In {country.name} Today
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-slate-300">
            Instant activation, no contract, and 24/7 support. Message us on
            WhatsApp and we&apos;ll help you pick the plan that fits you best.
          </p>
          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-8 inline-block rounded-full bg-white px-8 py-4 text-base font-semibold text-[#0b0f19] transition hover:opacity-90"
          >
            Subscribe Via WhatsApp
          </a>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center font-[family-name:var(--font-poppins)] text-2xl font-bold text-white">
            Also Available In Other Countries
          </h2>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {otherCountries.map((c) => (
              <Link
                key={c.slug}
                href={`/${c.slug}`}
                className="glass flex items-start gap-3 rounded-xl px-4 py-3 transition hover:border-cyan-400/30"
              >
                <CountryFlag code={c.code} className="mt-0.5 h-4 w-6 flex-none" />
                <span>
                  <span className="block text-xs font-semibold text-slate-200">
                    {c.name}
                  </span>
                  <span className="mt-0.5 block text-xs leading-relaxed text-slate-500">
                    {c.description}
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

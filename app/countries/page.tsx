import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CountryFlag from "@/components/CountryFlag";
import { getCountries } from "@/lib/content";

export const metadata: Metadata = {
  title: "IPTV Subscription Available Worldwide",
  description:
    "Find an IPTV subscription for the USA, Canada, the UK and more. Premium live channels, series and movies in HD, Full HD and 4K everywhere we operate.",
  alternates: {
    canonical: "/countries/",
  },
};

export default async function CountriesPage() {
  const countries = await getCountries();
  const regions = Array.from(new Set(countries.map((c) => c.region)));

  return (
    <>
      <Header countries={countries} />
      <main className="flex-1 px-6 py-24">
        <div className="mx-auto max-w-5xl text-center">
          <h1 className="font-[family-name:var(--font-poppins)] text-4xl font-extrabold text-white sm:text-5xl">
            Our IPTV Subscription, Available{" "}
            <span className="text-gradient">Around The World</span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-slate-300">
            Pick your country to see plans, compatible devices and FAQs
            tailored to your region.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-6xl space-y-12">
          {regions.map((region) => (
            <div key={region}>
              <h2 className="font-[family-name:var(--font-poppins)] text-xl font-bold text-white">
                {region}
              </h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {countries
                  .filter((c) => c.region === region)
                  .map((country) => (
                    <Link
                      key={country.slug}
                      href={`/${country.slug}/`}
                      className="glass flex items-start gap-4 rounded-2xl px-5 py-4 transition hover:border-cyan-400/30"
                    >
                      <CountryFlag code={country.code} className="mt-0.5 h-6 w-9 flex-none" />
                      <span>
                        <span className="block text-sm font-semibold text-white">
                          {country.name}
                        </span>
                        <span className="mt-1 block text-xs leading-relaxed text-slate-400">
                          {country.description}
                        </span>
                      </span>
                    </Link>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer countries={countries} />
      <WhatsAppButton />
    </>
  );
}

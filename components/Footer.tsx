import Link from "next/link";
import CountryFlag from "@/components/CountryFlag";
import Logo from "@/components/Logo";
import PaymentIcons from "@/components/PaymentIcons";
import { countries as staticCountries } from "@/lib/countries";
import { siteName } from "@/lib/site";
import type { Country } from "@/lib/sanity/types";

const [brandLead, ...brandRest] = siteName.split(" ");
const brandAccent = brandRest.join(" ");

const columns = [
  {
    title: "Service",
    links: [
      { label: "Channels", href: "/#channels" },
      { label: "Installation Guide", href: "/installation-guide" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms & Conditions", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Cookie Policy", href: "/cookies" },
    ],
  },
];

export default function Footer({
  countries = staticCountries,
}: {
  countries?: Country[];
}) {
  const featuredCountries = countries.slice(0, 4);

  return (
    <footer className="border-t border-white/5 px-6 py-16">
      <div className="mx-auto grid max-w-7xl gap-12 sm:grid-cols-2 lg:grid-cols-5">
        <div>
          <Link href="/" className="flex items-center gap-2">
            <Logo />
            <span className="font-[family-name:var(--font-poppins)] text-lg font-semibold text-white">
              {brandLead} <span className="text-gradient">{brandAccent}</span>
            </span>
          </Link>
          <p className="mt-4 text-sm text-slate-400">
            We&apos;ve been delivering IPTV streaming to customers worldwide
            since 2021. Friendly support, no bots.
          </p>
          <div className="mt-4">
            <PaymentIcons />
          </div>
        </div>

        {columns.map((column) => (
          <div key={column.title}>
            <h3 className="text-sm font-semibold text-white">{column.title}</h3>
            <ul className="mt-4 space-y-3">
              {column.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 transition hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h3 className="text-sm font-semibold text-white">Countries</h3>
          <ul className="mt-4 space-y-3">
            {featuredCountries.map((country) => (
              <li key={country.slug}>
                <Link
                  href={`/${country.slug}`}
                  className="flex items-center gap-2 text-sm text-slate-400 transition hover:text-white"
                >
                  <CountryFlag code={country.code} className="h-3 w-[18px] flex-none" />
                  {country.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/countries"
                className="text-sm font-medium text-cyan-300 transition hover:text-cyan-200"
              >
                View all countries →
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-400">
            <li>
              <a href="https://wa.me/447362244111" className="hover:text-white">
                WhatsApp: +44 7362 244111
              </a>
            </li>
            <li>Support available 24/7, every day of the year</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 text-center text-xs text-slate-500 sm:flex-row sm:text-left">
        <p>
          © {new Date().getFullYear()} {siteName}. All rights reserved.
        </p>
        <p>
          You are responsible for the content you stream. See our{" "}
          <a href="/terms" className="underline hover:text-slate-300">
            terms of use
          </a>
          .
        </p>
      </div>
    </footer>
  );
}

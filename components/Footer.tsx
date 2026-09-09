import Link from "next/link";
import CountryFlag from "@/components/CountryFlag";
import { countries } from "@/lib/countries";

const columns = [
  {
    title: "Service",
    links: [
      { label: "Channels", href: "/#channels" },
      { label: "Devices", href: "/#devices" },
      { label: "Installation Guide", href: "/installation-guide" },
      { label: "Plans & Pricing", href: "/#plans" },
      { label: "FAQ", href: "/#faq" },
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

const paymentMethods = ["Visa", "Mastercard", "PayPal", "Bitcoin"];
const featuredCountries = countries.slice(0, 4);

export default function Footer() {
  return (
    <footer className="border-t border-white/5 px-6 py-16">
      <div className="mx-auto grid max-w-7xl gap-12 sm:grid-cols-2 lg:grid-cols-5">
        <div>
          <Link href="/" className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 via-indigo-500 to-pink-500 font-[family-name:var(--font-poppins)] text-lg font-bold text-white">
              TV
            </span>
            <span className="font-[family-name:var(--font-poppins)] text-lg font-semibold text-white">
              IPTV<span className="text-gradient">Pro</span>
            </span>
          </Link>
          <p className="mt-4 text-sm text-slate-400">
            We&apos;ve been delivering IPTV streaming to customers worldwide
            since 2021. Friendly support, no bots.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {paymentMethods.map((method) => (
              <span
                key={method}
                className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-400"
              >
                {method}
              </span>
            ))}
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
              <a href="mailto:support@iptvpro-subscription.com" className="hover:text-white">
                support@iptvpro-subscription.com
              </a>
            </li>
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
          © {new Date().getFullYear()} IPTV Pro. All rights reserved.
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

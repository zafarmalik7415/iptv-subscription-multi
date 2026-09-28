"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import CountryFlag from "@/components/CountryFlag";
import Logo from "@/components/Logo";
import { countries as staticCountries } from "@/lib/countries";
import { siteName } from "@/lib/site";
import type { Country } from "@/lib/sanity/types";

const [brandLead, ...brandRest] = siteName.split(" ");
const brandAccent = brandRest.join(" ");

const links = [
  { href: "/#channels", label: "Channels" },
  { href: "/installation-guide", label: "Installation Guide" },
  { href: "/blog", label: "Blog" },
];

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`}
      aria-hidden
    >
      <path d="m5 7.5 5 5 5-5" />
    </svg>
  );
}

function CountriesMenu({
  countries,
  onNavigate,
  className = "",
}: {
  countries: Country[];
  onNavigate?: () => void;
  className?: string;
}) {
  return (
    <div className={`grid grid-cols-2 gap-1.5 sm:grid-cols-3 ${className}`}>
      {countries.map((country) => (
        <Link
          key={country.slug}
          href={`/${country.slug}`}
          onClick={onNavigate}
          className="flex items-center gap-2 rounded-lg px-2.5 py-2 text-sm text-slate-300 transition hover:bg-white/5 hover:text-white"
        >
          <CountryFlag code={country.code} className="h-3.5 w-5 flex-none" />
          <span className="truncate">{country.name}</span>
        </Link>
      ))}
    </div>
  );
}

export default function Header({
  countries = staticCountries,
}: {
  countries?: Country[];
}) {
  const [open, setOpen] = useState(false);
  const [countriesOpen, setCountriesOpen] = useState(false);
  const [mobileCountriesOpen, setMobileCountriesOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setCountriesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#0b0f19]/80 backdrop-blur-lg">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <Logo />
          <span className="font-[family-name:var(--font-poppins)] text-lg font-semibold text-white">
            {brandLead} <span className="text-gradient">{brandAccent}</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {links.slice(0, 1).map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-slate-300 transition hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}

          <li
            ref={dropdownRef}
            className="relative"
            onMouseEnter={() => setCountriesOpen(true)}
            onMouseLeave={() => setCountriesOpen(false)}
          >
            <div className="flex items-center gap-1">
              <Link
                href="/countries"
                className="text-sm font-medium text-slate-300 transition hover:text-white"
              >
                Countries
              </Link>
              <button
                onClick={() => setCountriesOpen((v) => !v)}
                aria-expanded={countriesOpen}
                aria-label="Toggle countries menu"
                className="text-slate-300 transition hover:text-white"
              >
                <ChevronIcon open={countriesOpen} />
              </button>
            </div>

            {countriesOpen && (
              <div className="absolute left-1/2 top-full z-50 w-[420px] -translate-x-1/2 pt-3">
                <div className="glow rounded-2xl border border-white/10 bg-[#0b0f19] p-4">
                  <CountriesMenu
                    countries={countries}
                    onNavigate={() => setCountriesOpen(false)}
                  />
                  <Link
                    href="/countries"
                    onClick={() => setCountriesOpen(false)}
                    className="mt-3 block rounded-lg border-t border-white/5 px-2.5 pt-3 text-sm font-semibold text-cyan-300 transition hover:text-cyan-200"
                  >
                    View all countries →
                  </Link>
                </div>
              </div>
            )}
          </li>

          {links.slice(1).map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-slate-300 transition hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="/#plans"
          className="btn-primary hidden rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition hover:opacity-90 md:inline-block"
        >
          Free Trial
        </a>

        <button
          aria-label="Open menu"
          aria-expanded={open}
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`h-0.5 w-6 bg-white transition ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-6 bg-white transition ${open ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-6 bg-white transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </nav>

      {open && (
        <div className="max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-white/5 bg-[#0b0f19] px-6 pb-6 md:hidden">
          <ul className="flex flex-col gap-4 pt-4">
            {links.slice(0, 1).map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block text-sm font-medium text-slate-300 hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}

            <li>
              <div className="flex w-full items-center justify-between">
                <Link
                  href="/countries"
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium text-slate-300 hover:text-white"
                >
                  Countries
                </Link>
                <button
                  onClick={() => setMobileCountriesOpen((v) => !v)}
                  aria-expanded={mobileCountriesOpen}
                  aria-label="Toggle countries menu"
                  className="p-1 text-slate-300 hover:text-white"
                >
                  <ChevronIcon open={mobileCountriesOpen} />
                </button>
              </div>
              {mobileCountriesOpen && (
                <div className="mt-3">
                  <CountriesMenu countries={countries} onNavigate={() => setOpen(false)} />
                  <Link
                    href="/countries"
                    onClick={() => setOpen(false)}
                    className="mt-2 block px-2.5 text-sm font-semibold text-cyan-300"
                  >
                    View all countries →
                  </Link>
                </div>
              )}
            </li>

            {links.slice(1).map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block text-sm font-medium text-slate-300 hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/#plans"
                onClick={() => setOpen(false)}
                className="mt-2 block rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500 px-5 py-2.5 text-center text-sm font-semibold text-white"
              >
                Free Trial
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

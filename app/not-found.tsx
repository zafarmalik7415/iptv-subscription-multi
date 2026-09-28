import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { getCountries } from "@/lib/content";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: true },
};

export default async function NotFound() {
  const countries = await getCountries();

  return (
    <>
      <Header countries={countries} />
      <main className="flex flex-1 items-center justify-center px-6 py-24">
        <div className="mx-auto max-w-xl text-center">
          <p className="font-[family-name:var(--font-poppins)] text-gradient text-7xl font-extrabold">
            404
          </p>
          <h1 className="mt-4 font-[family-name:var(--font-poppins)] text-3xl font-bold text-white sm:text-4xl">
            Page Not Found
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-slate-400">
            The page you&apos;re looking for doesn&apos;t exist or may have
            moved. Let&apos;s get you back on track.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/"
              className="btn-primary glow rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500 px-8 py-4 text-center text-base font-semibold text-white transition hover:opacity-90"
            >
              Back To Home
            </Link>
            <Link
              href="/countries/"
              className="rounded-full border border-white/15 bg-white/5 px-8 py-4 text-center text-base font-semibold text-white transition hover:bg-white/10"
            >
              Browse Countries
            </Link>
          </div>
        </div>
      </main>
      <Footer countries={countries} />
      <WhatsAppButton />
    </>
  );
}

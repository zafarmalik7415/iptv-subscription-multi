import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { getCountries } from "@/lib/content";
import { siteName, supportEmail } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: `How ${siteName} uses cookies and similar technologies.`,
  alternates: { canonical: "/cookies/" },
};

const sections = [
  {
    title: "1. What are cookies",
    body: "Cookies are small text files stored on your device by your browser. Similar technologies, like local storage, work the same way and are covered by this policy too.",
  },
  {
    title: "2. How we use them",
    body: "We use cookies and local storage for essential site functionality (like remembering your session) and to understand how visitors use the site, so we can improve it.",
  },
  {
    title: "3. Types of cookies we use",
    body: "Essential cookies are required for the site to function. Analytics cookies help us understand aggregate usage patterns. We do not use cookies to sell your data to third parties.",
  },
  {
    title: "4. Managing cookies",
    body: "Most browsers let you block or delete cookies through their settings. Blocking essential cookies may affect how parts of the site work.",
  },
  {
    title: "5. Contact",
    body: `Questions about this policy? Email us at ${supportEmail}.`,
  },
];

export default async function CookiesPage() {
  const countries = await getCountries();

  return (
    <>
      <Header countries={countries} />
      <main className="flex-1 px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-[family-name:var(--font-poppins)] text-4xl font-extrabold text-white sm:text-5xl">
            Cookie Policy
          </h1>
          <p className="mt-4 text-sm text-slate-500">Last updated: September 2026</p>

          <div className="mt-12 space-y-8">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="text-lg font-semibold text-white">{section.title}</h2>
                <p className="mt-2 text-base leading-relaxed text-slate-400">
                  {section.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer countries={countries} />
      <WhatsAppButton />
    </>
  );
}

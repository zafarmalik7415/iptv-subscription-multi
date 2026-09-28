import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { getCountries } from "@/lib/content";
import { siteName, supportEmail } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: `The terms and conditions for using the ${siteName} IPTV subscription service.`,
  alternates: { canonical: "/terms" },
};

const sections = [
  {
    title: "1. The service",
    body: `${siteName} provides a subscription-based IPTV streaming service, giving you access to live channels and on-demand content on the devices listed on our installation guide. Access is granted for the duration of the plan you purchase and is for personal, non-commercial use only.`,
  },
  {
    title: "2. Your account & credentials",
    body: "After purchase you'll receive login credentials (or an M3U link) by email or WhatsApp. Keep these private — sharing your credentials outside your own household may result in suspension without refund. You're responsible for all activity under your account.",
  },
  {
    title: "3. Payment, plans & renewals",
    body: "Plans are billed once per term (1, 3, 6 or 12 months) with no automatic recurring charge unless you explicitly opt into renewal. Prices are shown at checkout and may change for future terms; your current term is unaffected by price changes.",
  },
  {
    title: "4. Cancellations & refunds",
    body: "There is no long-term contract — you can choose not to renew at any time. Because activation is instant and credentials are delivered digitally, purchases are generally non-refundable once access has been granted, except where the service was not delivered or is materially faulty. Contact support and we'll do our best to make it right.",
  },
  {
    title: "5. Acceptable use",
    body: "You agree not to resell, redistribute, or use automated tools to access the service, and not to use it in any way that infringes the rights of others or breaches applicable law in your country.",
  },
  {
    title: "6. Service availability",
    body: "We work to keep the service fast and stable, but streaming quality depends on your own internet connection and device. Occasional maintenance, channel changes or third-party outages may briefly affect availability; we are not liable for interruptions outside our reasonable control.",
  },
  {
    title: "7. Your responsibility",
    body: "You are responsible for ensuring your use of the service complies with the laws of the country you access it from, including local broadcasting and copyright regulations.",
  },
  {
    title: "8. Changes to these terms",
    body: "We may update these terms from time to time. Continued use of the service after a change means you accept the updated terms.",
  },
  {
    title: "9. Contact",
    body: `Questions about these terms? Email us at ${supportEmail} or message us on WhatsApp.`,
  },
];

export default async function TermsPage() {
  const countries = await getCountries();

  return (
    <>
      <Header countries={countries} />
      <main className="flex-1 px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-[family-name:var(--font-poppins)] text-4xl font-extrabold text-white sm:text-5xl">
            Terms &amp; Conditions
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

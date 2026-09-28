import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { getCountries } from "@/lib/content";
import { siteName, supportEmail } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${siteName} collects, uses and protects your information.`,
  alternates: { canonical: "/privacy/" },
};

const sections = [
  {
    title: "1. Information we collect",
    body: "When you contact us or subscribe, we collect the details you provide directly — such as your name, email address and WhatsApp number — plus basic technical information (like device type and IP address) needed to deliver and troubleshoot the service.",
  },
  {
    title: "2. How we use your information",
    body: "We use your information to set up and manage your subscription, provide customer support, send service-related messages (activation details, renewal reminders), and improve the reliability of the service.",
  },
  {
    title: "3. Payment information",
    body: "Payments are processed by third-party payment providers. We do not store your full card details on our own servers.",
  },
  {
    title: "4. Sharing your information",
    body: "We do not sell your personal information. We only share it with service providers who help us run the business (such as payment processors and messaging platforms like WhatsApp) or where required by law.",
  },
  {
    title: "5. Cookies",
    body: "Our website may use cookies and similar local storage to remember your preferences and understand how the site is used. See our Cookie Policy for details.",
  },
  {
    title: "6. Data retention",
    body: "We keep your information for as long as your account is active and for a reasonable period afterwards, to meet legal, accounting or support obligations.",
  },
  {
    title: "7. Your rights",
    body: "You can ask us to access, correct or delete the personal information we hold about you at any time by contacting support.",
  },
  {
    title: "8. Contact",
    body: `Questions about this policy? Email us at ${supportEmail}.`,
  },
];

export default async function PrivacyPage() {
  const countries = await getCountries();

  return (
    <>
      <Header countries={countries} />
      <main className="flex-1 px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-[family-name:var(--font-poppins)] text-4xl font-extrabold text-white sm:text-5xl">
            Privacy Policy
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

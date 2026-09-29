import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import InstallationSteps from "@/components/InstallationSteps";
import {
  getCountries,
  getDeviceGuides,
  getInstallationPrerequisites,
  getInstallationTips,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "IPTV Installation Guide: Set Up In 6 Minutes",
  description:
    "Install your IPTV subscription on Amazon Firestick, Android TV, iPhone, Samsung, LG and more. Follow our simple guide and start watching in under 6 minutes.",
  alternates: {
    canonical: "/installation-guide/",
  },
};

export default async function InstallationGuidePage() {
  const [countries, deviceGuides, prerequisites, tips] = await Promise.all([
    getCountries(),
    getDeviceGuides(),
    getInstallationPrerequisites(),
    getInstallationTips(),
  ]);

  return (
    <>
      <Header countries={countries} />
      <main className="flex-1">
        <section className="relative overflow-hidden px-6 pt-16 pb-12 sm:pt-24">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.15),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(129,140,248,0.18),transparent_40%)]"
          />
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-cyan-300">
              <span className="h-2 w-2 rounded-full bg-cyan-400" />
              Setup guide
            </p>
            <h1 className="font-[family-name:var(--font-poppins)] text-4xl font-extrabold leading-tight text-white sm:text-5xl">
              Get Your{" "}
              <span className="text-gradient">IPTV Subscription</span> Running In Minutes
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-300">
              Choose your device below and follow the steps. Most setups take
              under 6 minutes.
            </p>
          </div>
        </section>

        <section className="px-6 py-12">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-center font-[family-name:var(--font-poppins)] text-2xl font-bold text-white">
              Before You Start
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {prerequisites.map((item) => (
                <div key={item.title} className="glass rounded-2xl p-6">
                  <span className="text-3xl">{item.icon}</span>
                  <h3 className="mt-4 text-lg font-semibold leading-snug text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-slate-400">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-12">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-center font-[family-name:var(--font-poppins)] text-2xl font-bold text-white">
              Choose Your Device
            </h2>
            <div className="mt-10">
              <InstallationSteps devices={deviceGuides} />
            </div>
          </div>
        </section>

        <section className="px-6 py-12">
          <div className="mx-auto max-w-4xl">
            <div className="glass rounded-3xl p-8">
              <h2 className="font-[family-name:var(--font-poppins)] text-xl font-bold text-white">
                Tips & Troubleshooting
              </h2>
              <ul className="mt-6 space-y-4">
                {tips.map((tip) => (
                  <li key={tip} className="flex items-start gap-3 text-base leading-relaxed text-slate-300">
                    <span className="mt-0.5 text-cyan-400">✓</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="px-6 pb-24">
          <div className="glow relative mx-auto max-w-4xl overflow-hidden rounded-3xl bg-gradient-to-br from-cyan-500/20 via-indigo-500/20 to-pink-500/20 p-10 text-center sm:p-14">
            <h2 className="font-[family-name:var(--font-poppins)] text-2xl font-bold text-white sm:text-3xl">
              Still Not Working?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-slate-300">
              Tell us the device you&apos;re using and where you got stuck.
              We set up IPTV every day and will get you watching, usually
              within a few minutes on live chat.
            </p>
            <a
              href="https://wa.me/447362244111"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block rounded-full bg-white px-8 py-4 text-base font-semibold text-[#0b0f19] transition hover:opacity-90"
            >
              Message Us On WhatsApp
            </a>
          </div>
        </section>
      </main>
      <Footer countries={countries} />
      <WhatsAppButton />
    </>
  );
}

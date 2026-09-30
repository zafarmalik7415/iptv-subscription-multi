import Image from "next/image";
import heroSmartTv from "@/public/hero-smart-tv.webp";
import type { HeroContent } from "@/lib/sanity/types";

const DEFAULT: HeroContent = {
  badge: "Stop Paying For Channels You Never Watch",
  titleLead: "Your",
  titleAccent: "IPTV Subscription",
  titleTail: ", Without The Buffering Or The Bill",
  paragraph:
    "Cable locks you into a contract and a bill that keeps climbing. Cheap IPTV alternatives freeze the moment the game gets good. We fixed both: thousands of live channels, sports, series and movies in HD, Full HD and 4K, on any device, for a fraction of your old cable bill, with no contract and a free trial before you pay anything.",
  primaryCta: { label: "Start Free Trial", href: "#plans" },
  secondaryCta: { label: "View Compatible Devices", href: "#devices" },
  stats: [
    { value: "+18,500", label: "live channels" },
    { value: "+47,000", label: "series & movies" },
    { value: "99.7%", label: "uptime" },
    { value: "24/7", label: "support" },
  ],
  imageUrl: null,
};

export default function Hero({ content }: { content?: HeroContent | null }) {
  const c = content ?? DEFAULT;
  const heroImage = c.imageUrl ?? heroSmartTv;

  return (
    <section className="relative overflow-hidden px-6 pt-16 pb-24 sm:pt-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.15),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(129,140,248,0.18),transparent_40%),radial-gradient(circle_at_50%_100%,rgba(244,114,182,0.12),transparent_40%)]"
      />
      <div aria-hidden className="bg-grid pointer-events-none absolute inset-0 -z-10" />

      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        <div>
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-cyan-300">
            <span className="h-2 w-2 rounded-full bg-cyan-400" />
            {c.badge}
          </p>

          <h1 className="font-[family-name:var(--font-poppins)] text-4xl font-extrabold leading-[1.1] text-white sm:text-5xl lg:text-6xl">
            {c.titleLead}{" "}
            <span className="text-gradient">{c.titleAccent}</span>
            {c.titleTail}
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
            {c.paragraph}
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href={c.primaryCta.href}
              className="btn-primary glow rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500 px-8 py-4 text-center text-base font-semibold text-white transition hover:opacity-90"
            >
              {c.primaryCta.label}
            </a>
            <a
              href={c.secondaryCta.href}
              className="rounded-full border border-white/15 bg-white/5 px-8 py-4 text-center text-base font-semibold text-white transition hover:bg-white/10"
            >
              {c.secondaryCta.label}
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#0b0f19] bg-amber-500 text-xs font-semibold text-white">
                  CM
                </span>
                <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#0b0f19] bg-emerald-500 text-xs font-semibold text-white">
                  LR
                </span>
                <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#0b0f19] bg-indigo-500 text-xs font-semibold text-white">
                  JP
                </span>
              </div>
              <span>
                <span className="font-semibold text-white">4.7/5</span> from{" "}
                <span className="font-semibold text-white">1,284</span> reviews
              </span>
            </div>
          </div>

          <dl className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {c.stats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-[family-name:var(--font-poppins)] text-2xl font-bold text-white">
                  {stat.value}
                </dd>
                <dd className="text-sm text-slate-400">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-2xl animate-float">
          <Image
            src={heroImage}
            alt="IPTV subscription interface on a Smart TV with live channels"
            width={1342}
            height={1047}
            priority
            fetchPriority="high"
            quality={65}
            placeholder={c.imageUrl ? "empty" : "blur"}
            sizes="(min-width: 1024px) 42rem, 90vw"
            className="h-auto w-full drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}

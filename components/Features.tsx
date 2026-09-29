import type { Feature } from "@/lib/sanity/types";

const DEFAULT_FEATURES: Feature[] = [
  {
    title: "More Than 18,500 Channels",
    description:
      "National and international channels, sports, movies, kids and documentaries, all in one place.",
    icon: "📡",
  },
  {
    title: "HD, Full HD And 4K Quality",
    description:
      "Stable, smooth streaming thanks to our optimized servers.",
    icon: "🖥️",
  },
  {
    title: "Live Sports",
    description:
      "Follow your favorite competitions live from any device, without missing a minute.",
    icon: "⚽",
  },
  {
    title: "On-Demand VOD Library",
    description:
      "Thousands of series and movies available instantly, updated every week.",
    icon: "🎬",
  },
  {
    title: "Instant Activation",
    description:
      "Get your credentials within minutes of purchase and start watching right away.",
    icon: "⚡",
  },
  {
    title: "24/7 Support",
    description:
      "Our technical team helps you by chat or WhatsApp, any day of the year.",
    icon: "💬",
  },
];

export default function Features({
  features = DEFAULT_FEATURES,
}: {
  features?: Feature[];
}) {
  return (
    <section id="channels" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-[family-name:var(--font-poppins)] text-3xl font-bold text-white sm:text-4xl">
            Everything You Need In Your{" "}
            <span className="text-gradient">IPTV Subscription</span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-400">
            One of the best IPTV subscriptions on the market, built for
            reliability and real value.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="glass rounded-2xl p-6 transition hover:-translate-y-1 hover:border-cyan-400/30"
            >
              <span className="text-3xl">{feature.icon}</span>
              <h3 className="mt-4 text-lg font-semibold leading-snug text-white">
                {feature.title}
              </h3>
              <p className="mt-2 text-base leading-relaxed text-slate-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

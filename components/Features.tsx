import type { Feature } from "@/lib/sanity/types";

const DEFAULT_FEATURES: Feature[] = [
  {
    title: "Never Run Out Of Something To Watch",
    description:
      "Over 18,500 live channels plus sports, movies, kids and documentaries, so you're not paying for three different apps just to cover everyone in the house.",
    icon: "📡",
  },
  {
    title: "No More Buffering Mid-Game",
    description:
      "Optimized, anti-freeze servers keep playback smooth in HD, Full HD and 4K, even during peak hours when cheaper services usually start falling apart.",
    icon: "🖥️",
  },
  {
    title: "Every Game, No Blackouts",
    description:
      "Follow your leagues and matches live from any device, without extra pay-per-view fees or a channel that's suddenly unavailable where you live.",
    icon: "⚽",
  },
  {
    title: "Skip The Extra Streaming Bills",
    description:
      "Thousands of series and movies included in the same subscription, updated weekly, so you're not juggling separate logins and charges for shows you watch occasionally.",
    icon: "🎬",
  },
  {
    title: "Watching Tonight, Not Next Week",
    description:
      "No technician visit and no multi-day install window. Get your login details within minutes of paying and start watching the same day.",
    icon: "⚡",
  },
  {
    title: "A Real Person When Something Breaks",
    description:
      "If a channel drops or a device won't connect, message us on WhatsApp any time and get an actual answer, not a bot or a ticket that sits for days.",
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
            Built to fix the exact things that make people quit cable and
            cheap IPTV alike: high bills, buffering and support that never
            answers.
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

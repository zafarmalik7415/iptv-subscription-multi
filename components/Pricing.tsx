const commonFeatures = [
  "+18,500 channels",
  "4K Ultra HD",
  "Anti-freeze technology",
  "All devices",
  "EPG guide included",
  "24/7 support",
];

const plans = [
  {
    name: "1 Month",
    price: "€20",
    period: "/month",
    highlighted: false,
  },
  {
    name: "3 Months",
    price: "€35",
    period: "/3 months",
    highlighted: false,
  },
  {
    name: "6 Months",
    price: "€55",
    period: "/6 months",
    highlighted: true,
  },
  {
    name: "12 Months",
    price: "€70",
    period: "/12 months",
    highlighted: false,
  },
];

const whatsappNumber = "447362244111";

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.29-1.39a9.9 9.9 0 0 0 4.75 1.21h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2zm5.8 14.14c-.24.68-1.4 1.3-1.93 1.38-.5.08-1.12.11-1.8-.11-.42-.13-.95-.31-1.64-.6-2.88-1.25-4.76-4.14-4.9-4.33-.14-.19-1.17-1.56-1.17-2.98s.73-2.11 1-2.4c.26-.29.57-.36.76-.36s.38 0 .55.01c.18.01.41-.07.64.49.24.58.81 2 .88 2.14.07.14.12.31.02.5-.1.19-.15.31-.29.48-.15.17-.31.38-.44.51-.15.15-.3.31-.13.6.17.29.76 1.25 1.63 2.02 1.12 1 2.07 1.31 2.36 1.46.29.14.46.12.63-.07.17-.19.72-.83.91-1.11.19-.29.38-.24.64-.14.26.1 1.66.78 1.94.93.29.14.48.21.55.33.07.12.07.7-.17 1.38z" />
    </svg>
  );
}

export default function Pricing() {
  return (
    <section id="plans" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-[family-name:var(--font-poppins)] text-3xl font-bold text-white sm:text-4xl">
            IPTV Subscription Plans For Every Need
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-400">
            Pay once per term. No contract and no hidden fees. Every plan
            includes +18,500 channels, every device and 24/7 support.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-3xl p-7 ${
                plan.highlighted
                  ? "glow border-2 border-cyan-400/40 bg-gradient-to-b from-white/[0.08] to-white/[0.02]"
                  : "glass"
              }`}
            >
              {plan.highlighted && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500 px-4 py-1 text-xs font-bold text-white">
                  Most popular
                </span>
              )}

              <h3 className="text-lg font-semibold text-white">{plan.name}</h3>

              <div className="mt-4 flex items-end gap-1">
                <span className="font-[family-name:var(--font-poppins)] text-4xl font-extrabold text-white">
                  {plan.price}
                </span>
                <span className="pb-1 text-sm text-slate-400">{plan.period}</span>
              </div>

              <ul className="mt-6 flex-1 space-y-3">
                {commonFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-slate-300">
                    <span className="mt-0.5 text-cyan-400">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                  `Hi, I'd like to subscribe to the ${plan.name} plan (${plan.price}${plan.period})`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-8 flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500 px-6 py-3 text-center text-sm font-semibold text-white transition hover:opacity-90"
              >
                <WhatsAppIcon />
                Buy via WhatsApp
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

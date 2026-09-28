import type { HowItWorksStep } from "@/lib/sanity/types";

const DEFAULT_STEPS: HowItWorksStep[] = [
  {
    number: "1",
    title: "Choose Your Plan",
    description:
      "Pick the 1, 3, 6 or 12 month plan that fits you. You can switch durations later if you want to try another one.",
  },
  {
    number: "2",
    title: "Make Your Payment",
    description:
      "Pay securely by card, PayPal or bank transfer. You'll get confirmation by email instantly.",
  },
  {
    number: "3",
    title: "Get Your Login Details",
    description:
      "Within minutes we send you a username, password and installation guide for your Smart TV, phone or Fire Stick.",
  },
  {
    number: "4",
    title: "Start Watching",
    description:
      "Install the app or M3U list on your device and access every channel. If you have questions, message us on WhatsApp.",
  },
];

export default function HowItWorks({
  steps = DEFAULT_STEPS,
}: {
  steps?: HowItWorksStep[];
}) {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-[family-name:var(--font-poppins)] text-3xl font-bold text-white sm:text-4xl">
            How To Get Your Subscription
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-400">
            No complicated sign-ups. You&apos;ll be watching your favorite
            channels in under 10 minutes.
          </p>
        </div>

        <div className="relative mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div
            aria-hidden
            className="absolute top-6 left-0 hidden h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent lg:block"
          />
          {steps.map((step) => (
            <div key={step.number} className="relative">
              <span className="font-[family-name:var(--font-poppins)] flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-[#0b0f19] text-lg font-bold text-cyan-300">
                {step.number}
              </span>
              <h3 className="mt-4 text-lg font-semibold leading-snug text-white">
                {step.title}
              </h3>
              <p className="mt-2 text-base leading-relaxed text-slate-400">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

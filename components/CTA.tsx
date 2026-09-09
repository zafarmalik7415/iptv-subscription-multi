export default function CTA() {
  return (
    <section className="px-6 pb-24">
      <div className="glow relative mx-auto max-w-5xl overflow-hidden rounded-3xl bg-gradient-to-br from-cyan-500/20 via-indigo-500/20 to-pink-500/20 p-10 text-center sm:p-16">
        <h2 className="font-[family-name:var(--font-poppins)] text-3xl font-bold text-white sm:text-4xl">
          Start Enjoying Your IPTV Subscription Today
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-slate-300">
          Instant activation, no contract, and 24/7 support. Join thousands
          of happy customers worldwide.
        </p>
        <a
          href="#plans"
          className="btn-primary mt-8 inline-block rounded-full bg-white px-8 py-4 text-base font-semibold text-[#0b0f19] transition hover:opacity-90"
        >
          View Plans And Pricing
        </a>
      </div>
    </section>
  );
}

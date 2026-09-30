export default function CTA() {
  return (
    <section className="px-6 pb-24">
      <div className="glow relative mx-auto max-w-5xl overflow-hidden rounded-3xl bg-gradient-to-br from-cyan-500/20 via-indigo-500/20 to-pink-500/20 p-10 text-center sm:p-16">
        <h2 className="font-[family-name:var(--font-poppins)] text-3xl font-bold text-white sm:text-4xl">
          Still Paying For Cable You Barely Watch?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-slate-300">
          Switch today and keep every channel, sport and movie you actually
          care about, for a fraction of the price. No contract, a free trial
          before you pay, and support that actually answers.
        </p>
        <a
          href="#plans"
          className="btn-primary mt-8 inline-block rounded-full bg-white px-8 py-4 text-base font-semibold text-[#0b0f19] transition hover:opacity-90"
        >
          Get Your Free Trial
        </a>
      </div>
    </section>
  );
}

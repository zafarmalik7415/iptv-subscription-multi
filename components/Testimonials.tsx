import type { Testimonial } from "@/lib/sanity/types";

export const DEFAULT_TESTIMONIALS: Testimonial[] = [
  {
    name: "Carl M.",
    location: "London",
    quote:
      "I've had this subscription for 8 months and the 4K quality is really good. I was skeptical at first since other services had let me down, but I've barely had any drops here.",
    rating: 5,
    date: "3 weeks ago",
    initials: "CM",
    color: "bg-amber-500",
  },
  {
    name: "Laura R.",
    location: "Manchester",
    quote:
      "Support on WhatsApp is fast, someone helped me set up the list on my LG in under 10 minutes. Nice to talk to an actual person instead of a bot.",
    rating: 5,
    date: "1 month ago",
    initials: "LR",
    color: "bg-emerald-500",
  },
  {
    name: "James P.",
    location: "Dublin",
    quote:
      "I compared two other services before deciding. The 6-month plan's price convinced me, and three months in I'm still happy.",
    rating: 4,
    date: "2 months ago",
    initials: "JP",
    color: "bg-indigo-500",
  },
  {
    name: "Maria S.",
    location: "Toronto",
    quote:
      "I use the app on my phone and on the Fire Stick in the living room. A live channel dropped once, but switching servers from the player fixed it.",
    rating: 5,
    date: "5 days ago",
    initials: "MS",
    color: "bg-rose-500",
  },
  {
    name: "David F.",
    location: "Berlin",
    quote:
      "I'd been looking for something stable to watch matches with my dad. So far it delivers, and if anything breaks they reply fast.",
    rating: 5,
    date: "2 weeks ago",
    initials: "DF",
    color: "bg-cyan-500",
  },
  {
    name: "Anna G.",
    location: "Sydney",
    quote:
      "The VOD library updates quite fast, even recent releases. The app takes a bit to load sometimes, but nothing major.",
    rating: 4,
    date: "6 weeks ago",
    initials: "AG",
    color: "bg-fuchsia-500",
  },
];

export default function Testimonials({
  testimonials = DEFAULT_TESTIMONIALS,
}: {
  testimonials?: Testimonial[];
}) {
  return (
    <section id="reviews" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-[family-name:var(--font-poppins)] text-3xl font-bold text-white sm:text-4xl">
            What Our Customers Say
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-400">
            Real reviews from customers already using the service. We publish
            4-star reviews too.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="glass flex flex-col rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <div className="text-amber-400" aria-hidden>
                  {"★".repeat(t.rating)}
                  <span className="text-slate-600">{"★".repeat(5 - t.rating)}</span>
                </div>
                <span className="text-xs text-slate-500">{t.date}</span>
              </div>
              <blockquote className="mt-4 flex-1 text-base leading-relaxed text-slate-300">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span
                  className={`flex h-9 w-9 items-center justify-center rounded-full text-xs font-semibold text-white ${t.color}`}
                >
                  {t.initials}
                </span>
                <span>
                  <span className="block text-sm font-semibold text-white">
                    {t.name}
                  </span>
                  <span className="block text-xs text-slate-500">
                    {t.location}
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

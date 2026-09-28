import { defineField, defineType } from "sanity";

const COLORS = [
  "bg-amber-500",
  "bg-emerald-500",
  "bg-indigo-500",
  "bg-rose-500",
  "bg-cyan-500",
  "bg-fuchsia-500",
];

export default defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "location", title: "Location", type: "string" }),
    defineField({ name: "quote", title: "Quote", type: "text", rows: 4, validation: (r) => r.required() }),
    defineField({
      name: "rating",
      title: "Rating (1–5)",
      type: "number",
      initialValue: 5,
      validation: (r) => r.min(1).max(5).integer(),
    }),
    defineField({
      name: "date",
      title: "Relative date text",
      type: "string",
      description: 'e.g. "3 weeks ago"',
    }),
    defineField({
      name: "initials",
      title: "Avatar initials",
      type: "string",
      description: 'e.g. "CM"',
    }),
    defineField({
      name: "color",
      title: "Avatar colour",
      type: "string",
      options: { list: COLORS.map((value) => ({ title: value.replace("bg-", ""), value })) },
      initialValue: "bg-indigo-500",
    }),
    defineField({ name: "order", title: "Order", type: "number" }),
  ],
  orderings: [
    { title: "Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] },
  ],
  preview: { select: { title: "name", subtitle: "location" } },
});

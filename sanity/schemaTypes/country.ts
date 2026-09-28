import { defineField, defineType } from "sanity";

const REGIONS = [
  "Middle East & North Africa",
  "Americas",
  "Europe",
  "Oceania",
];

export default defineType({
  name: "country",
  title: "Country",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      description: 'URL path, e.g. "iptv-subscription-spain".',
      options: { source: "name" },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "demonym",
      title: "Demonym",
      type: "string",
      description: 'e.g. "Spanish"',
    }),
    defineField({
      name: "code",
      title: "ISO country code",
      type: "string",
      description: "Two letters, used for the flag icon. e.g. ES",
      validation: (r) => r.uppercase().length(2),
    }),
    defineField({
      name: "cities",
      title: "Cities phrase",
      type: "string",
      description: 'e.g. "Madrid, Barcelona and Valencia"',
    }),
    defineField({ name: "description", title: "Short description", type: "text", rows: 2 }),
    defineField({
      name: "region",
      title: "Region",
      type: "string",
      options: { list: REGIONS },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "order",
      title: "Order",
      type: "number",
      description: "Lower numbers show first within a region.",
    }),
  ],
  orderings: [
    { title: "Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] },
    { title: "Name", name: "nameAsc", by: [{ field: "name", direction: "asc" }] },
  ],
  preview: { select: { title: "name", subtitle: "region" } },
});

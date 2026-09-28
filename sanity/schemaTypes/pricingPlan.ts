import { defineField, defineType } from "sanity";

export default defineType({
  name: "pricingPlan",
  title: "Pricing plan",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "price",
      title: "Price",
      type: "string",
      description: 'Include the currency symbol, e.g. "$55"',
    }),
    defineField({
      name: "period",
      title: "Period",
      type: "string",
      description: 'e.g. "/6 months"',
    }),
    defineField({
      name: "highlighted",
      title: 'Highlight as "Most popular"',
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "order",
      title: "Order",
      type: "number",
      description: "Lower numbers show first.",
    }),
  ],
  orderings: [
    { title: "Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] },
  ],
  preview: {
    select: { title: "name", price: "price", period: "period" },
    prepare: ({ title, price, period }) => ({
      title,
      subtitle: [price, period].filter(Boolean).join(" "),
    }),
  },
});

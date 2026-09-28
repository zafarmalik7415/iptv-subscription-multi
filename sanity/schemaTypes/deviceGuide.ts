import { defineField, defineType } from "sanity";

export default defineType({
  name: "deviceGuide",
  title: "Device guide",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Device name", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "key",
      title: "Key",
      type: "slug",
      description: "Stable id used in the UI, e.g. firestick, android-tv.",
      options: { source: "name" },
      validation: (r) => r.required(),
    }),
    defineField({ name: "icon", title: "Icon (emoji)", type: "string" }),
    defineField({
      name: "steps",
      title: "Steps",
      type: "array",
      of: [{ type: "text", rows: 2 }],
      validation: (r) => r.min(1),
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
  preview: { select: { title: "name", subtitle: "icon" } },
});

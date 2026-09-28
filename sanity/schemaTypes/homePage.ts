import { defineField, defineType } from "sanity";

const ctaField = (name: string, title: string) =>
  defineField({
    name,
    title,
    type: "object",
    fields: [
      { name: "label", title: "Label", type: "string" },
      {
        name: "href",
        title: "Link",
        type: "string",
        description: 'e.g. "#plans", "/installation-guide"',
      },
    ],
  });

export default defineType({
  name: "homePage",
  title: "Home page",
  type: "document",
  groups: [
    { name: "hero", title: "Hero" },
    { name: "pricing", title: "Pricing section" },
    { name: "howItWorks", title: "How it works" },
    { name: "devices", title: "Devices strip" },
  ],
  fields: [
    /* ---------------------------------------------------------------- hero */
    defineField({
      name: "hero",
      title: "Hero",
      type: "object",
      group: "hero",
      fields: [
        { name: "badge", title: "Badge text", type: "string" },
        { name: "titleLead", title: "Title — lead", type: "string" },
        {
          name: "titleAccent",
          title: "Title — accent (coloured)",
          type: "string",
        },
        { name: "titleTail", title: "Title — tail", type: "string" },
        { name: "paragraph", title: "Paragraph", type: "text", rows: 4 },
        ctaField("primaryCta", "Primary button"),
        ctaField("secondaryCta", "Secondary button"),
        {
          name: "stats",
          title: "Stats",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                { name: "value", title: "Value", type: "string" },
                { name: "label", title: "Label", type: "string" },
              ],
              preview: {
                select: { title: "value", subtitle: "label" },
              },
            },
          ],
        },
        {
          name: "image",
          title: "Hero image",
          type: "image",
          options: { hotspot: true },
        },
      ],
    }),
    /* ------------------------------------------------------------- pricing */
    defineField({
      name: "pricing",
      title: "Pricing section",
      type: "object",
      group: "pricing",
      description:
        "Section heading and the shared feature list. The plans themselves live in Pricing plans.",
      fields: [
        { name: "heading", title: "Heading", type: "string" },
        { name: "subheading", title: "Subheading", type: "text", rows: 3 },
        {
          name: "commonFeatures",
          title: "Features shown on every plan",
          type: "array",
          of: [{ type: "string" }],
        },
      ],
    }),
    /* -------------------------------------------------------- how it works */
    defineField({
      name: "howItWorks",
      title: "How it works steps",
      type: "array",
      group: "howItWorks",
      of: [
        {
          type: "object",
          fields: [
            { name: "number", title: "Number", type: "string" },
            { name: "title", title: "Title", type: "string" },
            { name: "description", title: "Description", type: "text", rows: 3 },
          ],
          preview: { select: { title: "title", subtitle: "number" } },
        },
      ],
    }),
    /* ------------------------------------------------------------- devices */
    defineField({
      name: "devices",
      title: "Devices strip",
      type: "array",
      group: "devices",
      of: [
        {
          type: "object",
          fields: [
            { name: "name", title: "Name", type: "string" },
            { name: "icon", title: "Icon (emoji)", type: "string" },
          ],
          preview: { select: { title: "name", subtitle: "icon" } },
        },
      ],
    }),
  ],
  preview: { prepare: () => ({ title: "Home page" }) },
});

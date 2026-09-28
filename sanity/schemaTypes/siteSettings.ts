import { defineField, defineType } from "sanity";

export default defineType({
  name: "siteSettings",
  title: "Site settings",
  type: "document",
  fields: [
    defineField({ name: "siteName", title: "Site name", type: "string" }),
    defineField({
      name: "brandName",
      title: "Brand name (logo text)",
      type: "string",
      description: 'e.g. "IPTV"',
    }),
    defineField({
      name: "brandAccent",
      title: "Brand accent (coloured logo text)",
      type: "string",
      description: 'e.g. "Pro"',
    }),
    defineField({
      name: "whatsappNumber",
      title: "WhatsApp number",
      type: "string",
      description: "Digits only, with country code. e.g. 447362244111",
    }),
    defineField({ name: "supportEmail", title: "Support email", type: "string" }),
    defineField({
      name: "reviewRating",
      title: "Review rating text",
      type: "string",
      description: 'e.g. "4.7/5"',
    }),
    defineField({
      name: "reviewCount",
      title: "Review count text",
      type: "string",
      description: 'e.g. "1,284"',
    }),
    defineField({
      name: "footerTagline",
      title: "Footer tagline",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "paymentMethods",
      title: "Payment methods",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    }),
  ],
  preview: { prepare: () => ({ title: "Site settings" }) },
});

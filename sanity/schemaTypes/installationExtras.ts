import { defineField, defineType } from "sanity";

export default defineType({
  name: "installationExtras",
  title: "Installation extras",
  type: "document",
  description: '"Before you start" cards and the tips list on the installation guide page.',
  fields: [
    defineField({
      name: "prerequisites",
      title: "Before you start",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", title: "Title", type: "string" },
            { name: "description", title: "Description", type: "text", rows: 3 },
            { name: "icon", title: "Icon (emoji)", type: "string" },
          ],
          preview: { select: { title: "title", subtitle: "icon" } },
        },
      ],
    }),
    defineField({
      name: "tips",
      title: "Tips & troubleshooting",
      type: "array",
      of: [{ type: "text", rows: 2 }],
    }),
  ],
  preview: { prepare: () => ({ title: "Installation extras" }) },
});

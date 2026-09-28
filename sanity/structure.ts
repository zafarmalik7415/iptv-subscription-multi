import type { StructureResolver } from "sanity/structure";

/** Singletons (one document each) plus normal collections. */
export const deskStructure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Site settings")
        .id("siteSettings")
        .child(
          S.document().schemaType("siteSettings").documentId("siteSettings"),
        ),
      S.listItem()
        .title("Home page")
        .id("homePage")
        .child(S.document().schemaType("homePage").documentId("homePage")),
      S.listItem()
        .title("Installation extras")
        .id("installationExtras")
        .child(
          S.document()
            .schemaType("installationExtras")
            .documentId("installationExtras"),
        ),
      S.divider(),
      S.documentTypeListItem("feature").title("Features"),
      S.documentTypeListItem("pricingPlan").title("Pricing plans"),
      S.documentTypeListItem("testimonial").title("Testimonials"),
      S.documentTypeListItem("faq").title("FAQs"),
      S.documentTypeListItem("deviceGuide").title("Device guides"),
      S.documentTypeListItem("country").title("Countries"),
      S.divider(),
      S.documentTypeListItem("post").title("Blog posts"),
      S.documentTypeListItem("author").title("Authors"),
      S.documentTypeListItem("category").title("Categories"),
    ]);

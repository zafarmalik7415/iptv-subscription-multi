/**
 * GROQ queries. Each projection is shaped to match a type in `./types` so the
 * result can be swapped in for the matching static fallback with no mapping.
 */

const ctaFields = `{ "label": coalesce(label, ""), "href": coalesce(href, "#") }`;

export const siteSettingsQuery = `*[_type == "siteSettings"][0]{
  "siteName": coalesce(siteName, ""),
  "brandName": coalesce(brandName, ""),
  "brandAccent": coalesce(brandAccent, ""),
  "whatsappNumber": coalesce(whatsappNumber, ""),
  "supportEmail": coalesce(supportEmail, ""),
  "reviewRating": coalesce(reviewRating, ""),
  "reviewCount": coalesce(reviewCount, ""),
  "footerTagline": coalesce(footerTagline, ""),
  "paymentMethods": coalesce(paymentMethods, [])
}`;

export const heroQuery = `*[_type == "homePage"][0].hero{
  "badge": coalesce(badge, ""),
  "titleLead": coalesce(titleLead, ""),
  "titleAccent": coalesce(titleAccent, ""),
  "titleTail": coalesce(titleTail, ""),
  "paragraph": coalesce(paragraph, ""),
  "primaryCta": primaryCta ${ctaFields},
  "secondaryCta": secondaryCta ${ctaFields},
  "stats": coalesce(stats[]{ "value": coalesce(value, ""), "label": coalesce(label, "") }, []),
  "imageUrl": image.asset->url
}`;

export const featuresQuery = `*[_type == "feature"] | order(order asc){
  "title": coalesce(title, ""),
  "description": coalesce(description, ""),
  "icon": coalesce(icon, "")
}`;

export const pricingQuery = `*[_type == "homePage"][0].pricing{
  "heading": coalesce(heading, ""),
  "subheading": coalesce(subheading, ""),
  "commonFeatures": coalesce(commonFeatures, []),
  "plans": *[_type == "pricingPlan"] | order(order asc){
    "name": coalesce(name, ""),
    "price": coalesce(price, ""),
    "period": coalesce(period, ""),
    "highlighted": coalesce(highlighted, false)
  }
}`;

export const testimonialsQuery = `*[_type == "testimonial"] | order(order asc){
  "name": coalesce(name, ""),
  "location": coalesce(location, ""),
  "quote": coalesce(quote, ""),
  "rating": coalesce(rating, 5),
  "date": coalesce(date, ""),
  "initials": coalesce(initials, ""),
  "color": coalesce(color, "bg-indigo-500")
}`;

export const faqsQuery = `*[_type == "faq"] | order(order asc){
  "question": coalesce(question, ""),
  "answer": coalesce(answer, "")
}`;

export const howItWorksQuery = `*[_type == "homePage"][0].howItWorks[]{
  "number": coalesce(number, ""),
  "title": coalesce(title, ""),
  "description": coalesce(description, "")
}`;

export const deviceOptionsQuery = `*[_type == "homePage"][0].devices[]{
  "name": coalesce(name, ""),
  "icon": coalesce(icon, "")
}`;

export const deviceGuidesQuery = `*[_type == "deviceGuide"] | order(order asc){
  "id": coalesce(key.current, _id),
  "name": coalesce(name, ""),
  "icon": coalesce(icon, ""),
  "steps": coalesce(steps, [])
}`;

export const installationPrerequisitesQuery = `*[_type == "installationExtras"][0].prerequisites[]{
  "title": coalesce(title, ""),
  "description": coalesce(description, ""),
  "icon": coalesce(icon, "")
}`;

export const installationTipsQuery = `*[_type == "installationExtras"][0].tips`;

const countryFields = `{
  "slug": slug.current,
  "name": coalesce(name, ""),
  "demonym": coalesce(demonym, ""),
  "code": coalesce(code, ""),
  "cities": coalesce(cities, ""),
  "description": coalesce(description, ""),
  "region": coalesce(region, "Europe")
}`;

export const countriesQuery = `*[_type == "country" && defined(slug.current)] | order(order asc, name asc) ${countryFields}`;

export const countryBySlugQuery = `*[_type == "country" && slug.current == $slug][0] ${countryFields}`;

const postSummaryFields = `{
  "title": coalesce(title, ""),
  "slug": slug.current,
  "excerpt": coalesce(excerpt, ""),
  "publishedAt": publishedAt,
  "mainImageUrl": mainImage.asset->url,
  "author": author->{ "name": coalesce(name, ""), "imageUrl": image.asset->url },
  "categories": coalesce(categories[]->{ "title": coalesce(title, ""), "slug": slug.current }, [])
}`;

export const postsQuery = `*[_type == "post" && defined(slug.current)] | order(publishedAt desc) ${postSummaryFields}`;

export const postSlugsQuery = `*[_type == "post" && defined(slug.current)].slug.current`;

export const postBySlugQuery = `*[_type == "post" && slug.current == $slug][0]{
  ...${postSummaryFields},
  "body": coalesce(body, []),
  "seoTitle": seo.title,
  "seoDescription": seo.description,
  faqs,
  keyTakeaway
}`;

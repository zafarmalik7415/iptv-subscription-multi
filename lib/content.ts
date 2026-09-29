/**
 * Content access layer. Every helper tries Sanity first and falls back to the
 * static data in `lib/*.ts` (or `null`, letting the component use its own
 * built-in defaults). The rest of the app imports from here, never from
 * `lib/sanity/*` directly.
 */

import {
  getStaticPostBySlug,
  getStaticPosts,
  getStaticPostSlugs,
} from "@/lib/blog";
import { countries as staticCountries } from "@/lib/countries";
import { faqs as staticFaqs } from "@/lib/faqs";
import {
  devices as staticDeviceGuides,
  prerequisites as staticPrerequisites,
  tips as staticTips,
} from "@/lib/installationGuide";
import { sanityFetch } from "@/lib/sanity/fetch";
import {
  countriesQuery,
  countryBySlugQuery,
  deviceGuidesQuery,
  faqsQuery,
  featuresQuery,
  heroQuery,
  howItWorksQuery,
  deviceOptionsQuery,
  installationPrerequisitesQuery,
  installationTipsQuery,
  postBySlugQuery,
  postSlugsQuery,
  postsQuery,
  pricingQuery,
  siteSettingsQuery,
  testimonialsQuery,
} from "@/lib/sanity/queries";
import type {
  BlogPost,
  BlogPostSummary,
  Country,
  DeviceGuide,
  DeviceOption,
  Faq,
  Feature,
  HeroContent,
  HowItWorksStep,
  InstallationExtra,
  PricingContent,
  SiteSettings,
  Testimonial,
} from "@/lib/sanity/types";

const nonEmpty = <T>(value: T[] | null | undefined): value is T[] =>
  Array.isArray(value) && value.length > 0;

/* ---------------------------------------------------------------- home page */

export async function getSiteSettings(): Promise<SiteSettings | null> {
  return sanityFetch<SiteSettings>(siteSettingsQuery, { tags: ["siteSettings"] });
}

export async function getHero(): Promise<HeroContent | null> {
  const hero = await sanityFetch<HeroContent>(heroQuery, { tags: ["homePage"] });
  return hero?.titleAccent || hero?.paragraph ? hero : null;
}

export async function getFeatures(): Promise<Feature[] | null> {
  const data = await sanityFetch<Feature[]>(featuresQuery, { tags: ["feature"] });
  return nonEmpty(data) ? data : null;
}

export async function getPricing(): Promise<PricingContent | null> {
  const data = await sanityFetch<PricingContent>(pricingQuery, {
    tags: ["homePage", "pricingPlan"],
  });
  return data && nonEmpty(data.plans) ? data : null;
}

export async function getTestimonials(): Promise<Testimonial[] | null> {
  const data = await sanityFetch<Testimonial[]>(testimonialsQuery, {
    tags: ["testimonial"],
  });
  return nonEmpty(data) ? data : null;
}

export async function getHowItWorks(): Promise<HowItWorksStep[] | null> {
  const data = await sanityFetch<HowItWorksStep[]>(howItWorksQuery, {
    tags: ["homePage"],
  });
  return nonEmpty(data) ? data : null;
}

export async function getDeviceOptions(): Promise<DeviceOption[] | null> {
  const data = await sanityFetch<DeviceOption[]>(deviceOptionsQuery, {
    tags: ["homePage"],
  });
  return nonEmpty(data) ? data : null;
}

/* ---------------------------------------------------------------------- faqs */

export async function getFaqs(): Promise<Faq[]> {
  const data = await sanityFetch<Faq[]>(faqsQuery, { tags: ["faq"] });
  return nonEmpty(data) ? data : staticFaqs;
}

/* -------------------------------------------------------- installation guide */

export async function getDeviceGuides(): Promise<DeviceGuide[]> {
  const data = await sanityFetch<DeviceGuide[]>(deviceGuidesQuery, {
    tags: ["deviceGuide"],
  });
  return nonEmpty(data) ? data : staticDeviceGuides;
}

export async function getInstallationPrerequisites(): Promise<InstallationExtra[]> {
  const data = await sanityFetch<InstallationExtra[]>(
    installationPrerequisitesQuery,
    { tags: ["installationExtras"] },
  );
  return nonEmpty(data) ? data : staticPrerequisites;
}

export async function getInstallationTips(): Promise<string[]> {
  const data = await sanityFetch<string[]>(installationTipsQuery, {
    tags: ["installationExtras"],
  });
  return nonEmpty(data) ? data : staticTips;
}

/* ------------------------------------------------------------------ countries */

export async function getCountries(): Promise<Country[]> {
  const data = await sanityFetch<Country[]>(countriesQuery, { tags: ["country"] });
  return nonEmpty(data) ? data : staticCountries;
}

export async function getCountryBySlug(slug: string): Promise<Country | undefined> {
  const data = await sanityFetch<Country | null>(countryBySlugQuery, {
    params: { slug },
    tags: ["country"],
  });
  if (data?.slug) return data;
  return staticCountries.find((country) => country.slug === slug);
}

/* ----------------------------------------------------------------------- blog */

export async function getPosts(): Promise<BlogPostSummary[]> {
  const data = await sanityFetch<BlogPostSummary[]>(postsQuery, { tags: ["post"] });
  return nonEmpty(data) ? data : getStaticPosts();
}

export async function getPostSlugs(): Promise<string[]> {
  const data = await sanityFetch<string[]>(postSlugsQuery, { tags: ["post"] });
  return nonEmpty(data) ? data : getStaticPostSlugs();
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const data = await sanityFetch<BlogPost>(postBySlugQuery, {
    params: { slug },
    tags: ["post"],
  });
  return data ?? getStaticPostBySlug(slug);
}

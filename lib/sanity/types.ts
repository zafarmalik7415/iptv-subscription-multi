import type { PortableTextBlock } from "@portabletext/types";

export type CtaLink = { label: string; href: string };
export type Stat = { value: string; label: string };

export type SiteSettings = {
  siteName: string;
  brandName: string;
  brandAccent: string;
  whatsappNumber: string;
  supportEmail: string;
  reviewRating: string;
  reviewCount: string;
  footerTagline: string;
  paymentMethods: string[];
};

export type HeroContent = {
  badge: string;
  titleLead: string;
  titleAccent: string;
  titleTail: string;
  paragraph: string;
  primaryCta: CtaLink;
  secondaryCta: CtaLink;
  stats: Stat[];
  imageUrl: string | null;
};

export type Feature = {
  title: string;
  description: string;
  icon: string;
};

export type SectionIntro = {
  heading: string;
  subheading: string;
};

export type PricingPlan = {
  name: string;
  price: string;
  period: string;
  highlighted: boolean;
};

export type PricingContent = SectionIntro & {
  commonFeatures: string[];
  plans: PricingPlan[];
};

export type Testimonial = {
  name: string;
  location: string;
  quote: string;
  rating: number;
  date: string;
  initials: string;
  color: string;
};

export type Faq = {
  question: string;
  answer: string;
};

export type HowItWorksStep = {
  number: string;
  title: string;
  description: string;
};

export type DeviceOption = {
  name: string;
  icon: string;
};

export type DeviceGuide = {
  id: string;
  name: string;
  icon: string;
  steps: string[];
};

export type InstallationExtra = {
  title: string;
  description: string;
  icon: string;
};

export type CountryRegion =
  | "Middle East & North Africa"
  | "Africa"
  | "Americas"
  | "Europe"
  | "Oceania";

export type CountryHighlight = { title: string; description: string };
export type CountryFaq = { question: string; answer: string };

export type Country = {
  slug: string;
  name: string;
  demonym: string;
  code: string;
  cities: string;
  description: string;
  region: CountryRegion;
  localAngle?: string;
  highlights?: CountryHighlight[];
  localFaq?: CountryFaq;
};

export type BlogAuthor = {
  name: string;
  imageUrl: string | null;
};

export type BlogCategory = {
  title: string;
  slug: string;
};

export type BlogPostSummary = {
  title: string;
  slug: string;
  excerpt: string;
  publishedAt: string | null;
  mainImageUrl: string | null;
  author: BlogAuthor | null;
  categories: BlogCategory[];
};

export type BlogPost = BlogPostSummary & {
  body: PortableTextBlock[];
  seoTitle: string | null;
  seoDescription: string | null;
  faqs?: Faq[];
  keyTakeaway?: string;
};

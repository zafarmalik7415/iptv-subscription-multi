import blockContent from "./blockContent";
import siteSettings from "./siteSettings";
import homePage from "./homePage";
import feature from "./feature";
import pricingPlan from "./pricingPlan";
import testimonial from "./testimonial";
import faq from "./faq";
import deviceGuide from "./deviceGuide";
import installationExtras from "./installationExtras";
import country from "./country";
import post from "./post";
import author from "./author";
import category from "./category";

export const schemaTypes = [
  // objects
  blockContent,
  // singletons
  siteSettings,
  homePage,
  installationExtras,
  // collections
  feature,
  pricingPlan,
  testimonial,
  faq,
  deviceGuide,
  country,
  // blog
  post,
  author,
  category,
];

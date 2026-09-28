export type Country = {
  slug: string;
  name: string;
  demonym: string;
  code: string;
  cities: string;
  description: string;
  region: "Middle East & North Africa" | "Americas" | "Europe" | "Oceania";
};

export const countries: Country[] = [
  {
    slug: "iptv-subscription-iraq",
    name: "Iraq",
    demonym: "Iraqi",
    code: "IQ",
    cities: "Baghdad, Basra and Erbil",
    description: "Live channels, sports and VOD streaming for viewers in Baghdad, Basra and beyond.",
    region: "Middle East & North Africa",
  },
  {
    slug: "iptv-subscription-saudi-arabia",
    name: "Saudi Arabia",
    demonym: "Saudi",
    code: "SA",
    cities: "Riyadh, Jeddah and Mecca",
    description: "Premium IPTV streaming with fast servers for Riyadh, Jeddah and all of Saudi Arabia.",
    region: "Middle East & North Africa",
  },
  {
    slug: "iptv-subscription-uae",
    name: "United Arab Emirates",
    demonym: "Emirati",
    code: "AE",
    cities: "Dubai and Abu Dhabi",
    description: "High-speed 4K streaming for Dubai, Abu Dhabi and the rest of the UAE.",
    region: "Middle East & North Africa",
  },
  {
    slug: "iptv-subscription-kuwait",
    name: "Kuwait",
    demonym: "Kuwaiti",
    code: "KW",
    cities: "Kuwait City",
    description: "Reliable live TV and VOD streaming across Kuwait.",
    region: "Middle East & North Africa",
  },
  {
    slug: "iptv-subscription-qatar",
    name: "Qatar",
    demonym: "Qatari",
    code: "QA",
    cities: "Doha",
    description: "4K IPTV streaming optimized for Doha and Qatar.",
    region: "Middle East & North Africa",
  },
  {
    slug: "iptv-subscription-egypt",
    name: "Egypt",
    demonym: "Egyptian",
    code: "EG",
    cities: "Cairo and Alexandria",
    description: "Thousands of channels and movies streaming smoothly across Egypt.",
    region: "Middle East & North Africa",
  },
  {
    slug: "iptv-subscription-morocco",
    name: "Morocco",
    demonym: "Moroccan",
    code: "MA",
    cities: "Casablanca and Rabat",
    description: "Live sports, series and channels for viewers across Morocco.",
    region: "Middle East & North Africa",
  },
  {
    slug: "iptv-subscription-bahrain",
    name: "Bahrain",
    demonym: "Bahraini",
    code: "BH",
    cities: "Manama",
    description: "Fast, stable IPTV streaming for Manama and Bahrain.",
    region: "Middle East & North Africa",
  },
  {
    slug: "iptv-subscription-usa",
    name: "United States",
    demonym: "American",
    code: "US",
    cities: "New York, Los Angeles and Miami",
    description: "Premium live TV and VOD streaming for viewers across the United States.",
    region: "Americas",
  },
  {
    slug: "iptv-subscription-canada",
    name: "Canada",
    demonym: "Canadian",
    code: "CA",
    cities: "Toronto and Vancouver",
    description: "High-quality streaming with low latency for Toronto, Vancouver and all of Canada.",
    region: "Americas",
  },
  {
    slug: "iptv-subscription-uk",
    name: "United Kingdom",
    demonym: "British",
    code: "GB",
    cities: "London and Manchester",
    description: "Live channels and sports streaming built for the UK.",
    region: "Europe",
  },
  {
    slug: "iptv-subscription-germany",
    name: "Germany",
    demonym: "German",
    code: "DE",
    cities: "Berlin and Munich",
    description: "Stable 4K streaming for Berlin, Munich and the rest of Germany.",
    region: "Europe",
  },
  {
    slug: "iptv-subscription-france",
    name: "France",
    demonym: "French",
    code: "FR",
    cities: "Paris and Marseille",
    description: "Live TV and VOD streaming optimized for Paris, Marseille and France.",
    region: "Europe",
  },
  {
    slug: "iptv-subscription-spain",
    name: "Spain",
    demonym: "Spanish",
    code: "ES",
    cities: "Madrid, Barcelona and Valencia",
    description: "Premium streaming for Madrid, Barcelona, Valencia and all of Spain.",
    region: "Europe",
  },
  {
    slug: "iptv-subscription-italy",
    name: "Italy",
    demonym: "Italian",
    code: "IT",
    cities: "Rome and Milan",
    description: "Live channels and movies streaming smoothly across Italy.",
    region: "Europe",
  },
  {
    slug: "iptv-subscription-australia",
    name: "Australia",
    demonym: "Australian",
    code: "AU",
    cities: "Sydney and Melbourne",
    description: "Fast, reliable IPTV streaming for Sydney, Melbourne and Australia.",
    region: "Oceania",
  },
];

export function getCountry(slug: string) {
  return countries.find((c) => c.slug === slug);
}

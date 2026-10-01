export type CountryHighlight = { title: string; description: string };
export type CountryFaq = { question: string; answer: string };

export type Country = {
  slug: string;
  name: string;
  demonym: string;
  code: string;
  cities: string;
  description: string;
  region: "Middle East & North Africa" | "Africa" | "Americas" | "Europe" | "Oceania";
  /** One or two sentences of context genuinely specific to this country, not reused elsewhere. */
  localAngle: string;
  /** Two country-specific "why choose us" cards, shown alongside the generic ones. */
  highlights: [CountryHighlight, CountryHighlight];
  /** One FAQ specific to this country, shown alongside the shared FAQ set. */
  localFaq: CountryFaq;
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
    localAngle:
      "Many households in Iraq want Arabic and Kurdish channels alongside international sport and entertainment on the same subscription, without juggling separate apps.",
    highlights: [
      {
        title: "Arabic & Kurdish Channels",
        description: "A mixed lineup of Arabic, Kurdish and international channels on one login, no separate apps needed.",
      },
      {
        title: "Built For Iraqi Connections",
        description: "Servers and routing tuned to stay stable on the connection speeds common across Iraq.",
      },
    ],
    localFaq: {
      question: "Can I get Arabic and Kurdish channels on the same plan?",
      answer:
        "Yes, your channel list includes Arabic, Kurdish and international channels together, so you don't need separate subscriptions for each.",
    },
  },
  {
    slug: "iptv-subscription-saudi-arabia",
    name: "Saudi Arabia",
    demonym: "Saudi",
    code: "SA",
    cities: "Riyadh, Jeddah and Mecca",
    description: "Premium IPTV streaming with fast servers for Riyadh, Jeddah and all of Saudi Arabia.",
    region: "Middle East & North Africa",
    localAngle:
      "Saudi Arabia has one of the largest expat communities in the Gulf, so alongside Arabic channels we include a wide mix of South Asian, Filipino and Western options.",
    highlights: [
      {
        title: "Channels For Every Household",
        description: "Arabic programming alongside South Asian, Filipino and Western channels, common in Saudi households with mixed nationalities.",
      },
      {
        title: "Steady During Peak Viewing",
        description: "Extra server capacity for high-demand periods like Ramadan and major sporting events.",
      },
    ],
    localFaq: {
      question: "Do you offer channels in Hindi, Urdu or Tagalog as well as Arabic?",
      answer:
        "Yes, most plans include a mix of Arabic, South Asian and Filipino channels alongside the international lineup.",
    },
  },
  {
    slug: "iptv-subscription-uae",
    name: "United Arab Emirates",
    demonym: "Emirati",
    code: "AE",
    cities: "Dubai and Abu Dhabi",
    description: "High-speed 4K streaming for Dubai, Abu Dhabi and the rest of the UAE.",
    region: "Middle East & North Africa",
    localAngle:
      "Most of the UAE's population is made up of expats, so we focus on broad language coverage rather than one region's channels, from Arabic and Hindi to Tagalog and English.",
    highlights: [
      {
        title: "Built For A Multicultural Audience",
        description: "Channels spanning Arabic, Hindi, Urdu, Tagalog and English in one subscription, reflecting Dubai and Abu Dhabi's mix of residents.",
      },
      {
        title: "Low Latency In The Gulf",
        description: "Servers positioned to keep buffering low for viewers across the UAE.",
      },
    ],
    localFaq: {
      question: "I'm not Emirati, will there be channels in my language?",
      answer:
        "Very likely. Because the UAE has such a diverse population, our channel list covers a wide range of languages beyond Arabic, including Hindi, Urdu, Tagalog and English.",
    },
  },
  {
    slug: "iptv-subscription-kuwait",
    name: "Kuwait",
    demonym: "Kuwaiti",
    code: "KW",
    cities: "Kuwait City",
    description: "Reliable live TV and VOD streaming across Kuwait.",
    region: "Middle East & North Africa",
    localAngle:
      "Household TV habits in Kuwait tend to mix Arabic news and drama with international sport and Western series, and that's exactly how we've built the channel list.",
    highlights: [
      {
        title: "Arabic Drama & News, Plus International TV",
        description: "Local Arabic programming sits alongside international sport and entertainment in the same subscription.",
      },
      {
        title: "Consistent Connection In Kuwait",
        description: "Optimized routing to keep the stream steady across Kuwait City and the surrounding areas.",
      },
    ],
    localFaq: {
      question: "Will this work on the TV boxes commonly used in Kuwait?",
      answer:
        "Yes, it works on standard Android boxes, Smart TVs and mobile apps used across Kuwait, no special hardware required.",
    },
  },
  {
    slug: "iptv-subscription-qatar",
    name: "Qatar",
    demonym: "Qatari",
    code: "QA",
    cities: "Doha",
    description: "4K IPTV streaming optimized for Doha and Qatar.",
    region: "Middle East & North Africa",
    localAngle:
      "Doha's mix of long-term residents and international visitors means demand spikes around major events, so our servers are built with that extra capacity in mind.",
    highlights: [
      {
        title: "Ready For Peak Viewing Events",
        description: "Extra server capacity for the periods when major events bring a surge in viewers across Qatar.",
      },
      {
        title: "Arabic & International, One Subscription",
        description: "Arabic-language channels alongside international sport, news and entertainment.",
      },
    ],
    localFaq: {
      question: "Can the service handle viewer surges during major events?",
      answer:
        "Yes, our servers are provisioned with extra headroom specifically for high-demand periods like major sporting and cultural events.",
    },
  },
  {
    slug: "iptv-subscription-egypt",
    name: "Egypt",
    demonym: "Egyptian",
    code: "EG",
    cities: "Cairo and Alexandria",
    description: "Thousands of channels and movies streaming smoothly across Egypt.",
    region: "Middle East & North Africa",
    localAngle:
      "Egypt's large audience for Arabic drama, film and news is matched with a full international channel list, so you're not choosing between local and global content.",
    highlights: [
      {
        title: "Strong Arabic Entertainment Lineup",
        description: "A deep catalog of Arabic drama, film and news alongside international channels.",
      },
      {
        title: "Built For Egypt's Connection Speeds",
        description: "Servers tuned to stream reliably on the internet speeds typical across Cairo and Alexandria.",
      },
    ],
    localFaq: {
      question: "Does the service include Arabic drama and film channels?",
      answer:
        "Yes, a wide range of Arabic drama, film and entertainment channels are included alongside the international lineup.",
    },
  },
  {
    slug: "iptv-subscription-morocco",
    name: "Morocco",
    demonym: "Moroccan",
    code: "MA",
    cities: "Casablanca and Rabat",
    description: "Live sports, series and channels for viewers across Morocco.",
    region: "Middle East & North Africa",
    localAngle:
      "Morocco's bilingual viewing habits, Arabic and French side by side, shape our channel list, which covers both alongside international options.",
    highlights: [
      {
        title: "Arabic & French Channels Together",
        description: "A channel list that reflects Morocco's bilingual viewing habits, Arabic and French side by side.",
      },
      {
        title: "Reliable Across Morocco",
        description: "Servers optimized to keep playback smooth from Casablanca to Rabat and beyond.",
      },
    ],
    localFaq: {
      question: "Are French-language channels included alongside Arabic ones?",
      answer:
        "Yes, French channels are included alongside Arabic and international options, matching how most households in Morocco actually watch TV.",
    },
  },
  {
    slug: "iptv-subscription-bahrain",
    name: "Bahrain",
    demonym: "Bahraini",
    code: "BH",
    cities: "Manama",
    description: "Fast, stable IPTV streaming for Manama and Bahrain.",
    region: "Middle East & North Africa",
    localAngle:
      "Bahrain's small size and high expat share mean word travels fast when a service is unreliable, so we keep servers close to the Gulf and monitor them daily.",
    highlights: [
      {
        title: "Gulf-Based Server Routing",
        description: "Servers positioned to serve the Gulf region with minimal delay for viewers in Bahrain.",
      },
      {
        title: "Arabic & International Mix",
        description: "Arabic programming alongside a full international channel list.",
      },
    ],
    localFaq: {
      question: "Is the service reliable for a smaller market like Bahrain?",
      answer:
        "Yes, Bahrain is served from the same regional infrastructure as our larger Gulf markets, so reliability doesn't drop for a smaller country.",
    },
  },
  {
    slug: "iptv-subscription-usa",
    name: "United States",
    demonym: "American",
    code: "US",
    cities: "New York, Los Angeles and Miami",
    description: "Premium IPTV subscription with live TV and VOD streaming for viewers across the USA.",
    region: "Americas",
    localAngle:
      "Most of our US customers are switching away from an expensive cable bundle, so we focus on giving you the channels you actually watch without the multi-year contract.",
    highlights: [
      {
        title: "Built For Cord Cutters",
        description: "A channel list designed for households leaving expensive cable bundles behind, with no long contract.",
      },
      {
        title: "Nationwide Server Coverage",
        description: "Servers positioned to serve viewers reliably from coast to coast.",
      },
    ],
    localFaq: {
      question: "I currently have cable, how hard is it to switch?",
      answer:
        "Setup usually takes a few minutes once you have your login details. Most customers keep their existing internet connection and simply add a player app to their TV or streaming box.",
    },
  },
  {
    slug: "iptv-subscription-canada",
    name: "Canada",
    demonym: "Canadian",
    code: "CA",
    cities: "Toronto and Vancouver",
    description: "High-quality IPTV subscription with low latency streaming for Toronto, Vancouver and all of Canada.",
    region: "Americas",
    localAngle:
      "From English and French-language channels to a wide range of international options, our Canadian customers often mix all three on one subscription.",
    highlights: [
      {
        title: "English, French & International",
        description: "A channel list covering English and French-language TV alongside a wide range of international options.",
      },
      {
        title: "Low Latency Across Canada",
        description: "Servers chosen to keep streams steady whether you're in Toronto, Vancouver or further out.",
      },
    ],
    localFaq: {
      question: "Do you offer French-language channels for Quebec?",
      answer: "Yes, French-language channels are included alongside English and international options.",
    },
  },
  {
    slug: "iptv-subscription-uk",
    name: "United Kingdom",
    demonym: "British",
    code: "GB",
    cities: "London and Manchester",
    description: "Live channels and sports streaming built for the UK.",
    region: "Europe",
    localAngle:
      "UK viewers often want British entertainment channels alongside international sport and drama, and we've built the lineup around exactly that combination.",
    highlights: [
      {
        title: "British Favorites Plus International TV",
        description: "UK entertainment channels alongside a broad international lineup, all on one subscription.",
      },
      {
        title: "Optimized For UK Broadband",
        description: "Servers tuned for the connection speeds typical across UK broadband providers.",
      },
    ],
    localFaq: {
      question: "Will this replace my existing pay-TV subscription?",
      answer:
        "Many UK customers use it exactly that way, alongside or instead of a traditional pay-TV package. There's no dish, no engineer visit and no long contract.",
    },
  },
  {
    slug: "iptv-subscription-germany",
    name: "Germany",
    demonym: "German",
    code: "DE",
    cities: "Berlin and Munich",
    description: "Stable 4K streaming for Berlin, Munich and the rest of Germany.",
    region: "Europe",
    localAngle:
      "German households typically want a clean mix of German-language channels and international content, without the regional restrictions some individual broadcaster apps apply.",
    highlights: [
      {
        title: "German & International Channels",
        description: "German-language TV alongside a full international lineup, in one subscription.",
      },
      {
        title: "Fast, Stable Servers In Europe",
        description: "European server routing built to keep latency low across Germany.",
      },
    ],
    localFaq: {
      question: "Are German-language channels included as standard?",
      answer: "Yes, German-language channels are included in every plan alongside the international lineup.",
    },
  },
  {
    slug: "iptv-subscription-france",
    name: "France",
    demonym: "French",
    code: "FR",
    cities: "Paris and Marseille",
    description: "Live TV and VOD streaming optimized for Paris, Marseille and France.",
    region: "Europe",
    localAngle:
      "French viewers get a full lineup of French-language channels alongside international options, all through the same login on every device.",
    highlights: [
      {
        title: "French & International Channels",
        description: "French-language TV alongside a broad international lineup, all on one login.",
      },
      {
        title: "Built For French Broadband Speeds",
        description: "Servers tuned for the connection speeds typical across France.",
      },
    ],
    localFaq: {
      question: "Are French channels included by default, or is that a separate add-on?",
      answer: "French-language channels are included as standard in every plan, not a paid add-on.",
    },
  },
  {
    slug: "iptv-subscription-spain",
    name: "Spain",
    demonym: "Spanish",
    code: "ES",
    cities: "Madrid, Barcelona and Valencia",
    description: "Premium streaming for Madrid, Barcelona, Valencia and all of Spain.",
    region: "Europe",
    localAngle:
      "Spanish households typically mix Spanish-language channels with international sport and entertainment, and that's the exact combination our lineup is built around.",
    highlights: [
      {
        title: "Spanish & International Channels",
        description: "Spanish-language TV alongside international sport and entertainment on one subscription.",
      },
      {
        title: "Fast Servers Across Spain",
        description: "Routing tuned to keep playback smooth from Madrid to Barcelona and Valencia.",
      },
    ],
    localFaq: {
      question: "Are Spanish-language channels included as standard?",
      answer: "Yes, Spanish-language channels are included in every plan alongside the international lineup.",
    },
  },
  {
    slug: "iptv-subscription-italy",
    name: "Italy",
    demonym: "Italian",
    code: "IT",
    cities: "Rome and Milan",
    description: "Live channels and movies streaming smoothly across Italy.",
    region: "Europe",
    localAngle:
      "Italian viewers often want Italian-language channels without giving up international sport and entertainment, so we keep both in the same subscription.",
    highlights: [
      {
        title: "Italian & International Channels",
        description: "Italian-language TV alongside international sport and entertainment.",
      },
      {
        title: "Stable Streaming Across Italy",
        description: "Servers tuned to keep playback smooth from Rome to Milan.",
      },
    ],
    localFaq: {
      question: "Are Italian channels included, or only international ones?",
      answer: "Italian-language channels are included as standard, alongside the full international lineup.",
    },
  },
  {
    slug: "iptv-subscription-cyprus",
    name: "Cyprus",
    demonym: "Cypriot",
    code: "CY",
    cities: "Nicosia, Limassol and Larnaca",
    description: "Stable IPTV streaming with fast servers for Nicosia, Limassol and all of Cyprus.",
    region: "Europe",
    localAngle:
      "Cyprus has one of the largest British expat and retiree communities in Europe, so alongside Greek-language channels we make sure UK entertainment and sport are well covered too.",
    highlights: [
      {
        title: "Popular With The British Community",
        description: "A strong lineup of UK entertainment and sport channels, built for Cyprus's large British expat and retiree population.",
      },
      {
        title: "Greek & International Channels",
        description: "Greek-language channels alongside UK and international options, all on one subscription.",
      },
    ],
    localFaq: {
      question: "I'm a British expat in Cyprus, will I get UK channels?",
      answer:
        "Yes, UK entertainment and sport channels are included alongside Greek and international options, which is exactly why so many British residents in Cyprus use the service.",
    },
  },
  {
    slug: "iptv-subscription-australia",
    name: "Australia",
    demonym: "Australian",
    code: "AU",
    cities: "Sydney and Melbourne",
    description: "Fast, reliable IPTV streaming for Sydney, Melbourne and Australia.",
    region: "Oceania",
    localAngle:
      "Being so far from where most servers are based has historically made streaming in Australia hit or miss, which is why Australian customers are routed through nearby infrastructure instead.",
    highlights: [
      {
        title: "Routed For Australian Distances",
        description: "Nearby server routing instead of relying on distant infrastructure, which keeps buffering down across Australia.",
      },
      {
        title: "Time Zone Friendly Support",
        description: "Support that doesn't assume you're awake during European or US hours.",
      },
    ],
    localFaq: {
      question: "Does the distance from international servers cause buffering in Australia?",
      answer:
        "We route Australian customers through infrastructure chosen to minimize that distance, which is the main reason some other IPTV services struggle here.",
    },
  },
  {
    slug: "iptv-subscription-serbia",
    name: "Serbia",
    demonym: "Serbian",
    code: "RS",
    cities: "Belgrade and Novi Sad",
    description: "Fast, reliable IPTV streaming for Belgrade, Novi Sad and all of Serbia.",
    region: "Europe",
    localAngle:
      "Serbian households often split their viewing between Serbian-language news and drama and the international sport everyone's discussing the next day, so we keep both on the same subscription instead of making you choose.",
    highlights: [
      {
        title: "Serbian & Regional Balkan Channels",
        description: "Serbian-language news and drama alongside regional Balkan channels, all on one login.",
      },
      {
        title: "Built For Football-Mad Households",
        description: "International sport coverage alongside local channels, so you're never choosing between the match and the news.",
      },
    ],
    localFaq: {
      question: "Are Serbian-language channels included, or only international ones?",
      answer:
        "Serbian-language channels are included as standard, alongside regional Balkan and international options.",
    },
  },
  {
    slug: "iptv-subscription-senegal",
    name: "Senegal",
    demonym: "Senegalese",
    code: "SN",
    cities: "Dakar and Thiès",
    description: "Reliable live TV and VOD streaming across Dakar, Thiès and Senegal.",
    region: "Africa",
    localAngle:
      "Senegalese viewers often want French-language channels alongside West African and international content, and with so many families split between Senegal and the diaspora in France, we built the lineup around that exact mix.",
    highlights: [
      {
        title: "French & West African Channels",
        description: "French-language channels alongside West African and international programming, on one subscription.",
      },
      {
        title: "Built For Senegal's Connections",
        description: "Servers and routing tuned to stay stable on typical mobile and home internet speeds across Senegal.",
      },
    ],
    localFaq: {
      question: "Are French-language channels included for Senegal?",
      answer:
        "Yes, French-language channels are included as standard alongside West African and international options.",
    },
  },
  {
    slug: "iptv-subscription-tunisia",
    name: "Tunisia",
    demonym: "Tunisian",
    code: "TN",
    cities: "Tunis and Sfax",
    description: "Live channels, sports and VOD streaming for Tunis, Sfax and all of Tunisia.",
    region: "Middle East & North Africa",
    localAngle:
      "Tunisian households tend to mix Arabic and French channels day to day, much like neighboring Morocco and Algeria, so our lineup covers both alongside international sport and entertainment.",
    highlights: [
      {
        title: "Arabic & French Channels Together",
        description: "A channel list built around Tunisia's bilingual viewing habits, Arabic and French side by side.",
      },
      {
        title: "Reliable Across Tunisia",
        description: "Servers optimized to keep playback smooth from Tunis to Sfax and beyond.",
      },
    ],
    localFaq: {
      question: "Are French-language channels included alongside Arabic ones?",
      answer:
        "Yes, French channels are included alongside Arabic and international options, matching how most households in Tunisia actually watch TV.",
    },
  },
  {
    slug: "iptv-subscription-albania",
    name: "Albania",
    demonym: "Albanian",
    code: "AL",
    cities: "Tirana and Durrës",
    description: "Stable IPTV streaming with fast servers for Tirana, Durrës and all of Albania.",
    region: "Europe",
    localAngle:
      "Albania has one of the largest diasporas relative to its population in Europe, so alongside Albanian-language channels we make sure Italian and other European content families keep up with abroad is covered too.",
    highlights: [
      {
        title: "Albanian & European Channels",
        description: "Albanian-language news and entertainment alongside Italian and wider European options, all on one subscription.",
      },
      {
        title: "Built For Albania's Diaspora Families",
        description: "A channel mix that reflects how many Albanian households stay connected with relatives and content across Europe.",
      },
    ],
    localFaq: {
      question: "Can I get Albanian channels alongside Italian or other European ones?",
      answer:
        "Yes, Albanian-language channels are included alongside Italian and other European options, which is exactly why so many households with family abroad use the service.",
    },
  },
  {
    slug: "iptv-subscription-algeria",
    name: "Algeria",
    demonym: "Algerian",
    code: "DZ",
    cities: "Algiers and Oran",
    description: "Premium IPTV streaming with fast servers for Algiers, Oran and all of Algeria.",
    region: "Middle East & North Africa",
    localAngle:
      "Algerian households typically mix Arabic and French channels, and with such a large Algerian community living in France, keeping both covered on one subscription matters more here than in most markets.",
    highlights: [
      {
        title: "Arabic & French Channels Together",
        description: "Arabic programming alongside French-language channels, reflecting how most households in Algeria actually watch TV.",
      },
      {
        title: "Reliable Across Algeria",
        description: "Servers tuned to stream smoothly from Algiers to Oran and beyond.",
      },
    ],
    localFaq: {
      question: "Are French channels included for Algeria, or just Arabic ones?",
      answer:
        "Both. French-language channels are included as standard alongside Arabic and international options.",
    },
  },
  {
    slug: "iptv-subscription-finland",
    name: "Finland",
    demonym: "Finnish",
    code: "FI",
    cities: "Helsinki and Tampere",
    description: "Fast, stable IPTV streaming for Helsinki, Tampere and all of Finland.",
    region: "Europe",
    localAngle:
      "Finnish viewers lean heavily on streaming through the long winter months, so stable playback during peak evening hours matters more here than almost anywhere else we operate.",
    highlights: [
      {
        title: "Built For Peak Winter Viewing",
        description: "Extra server headroom for the evening hours when Finnish households stream the most, especially during winter.",
      },
      {
        title: "Nordic & International Channels",
        description: "A channel list that pairs Nordic programming with a full international lineup.",
      },
    ],
    localFaq: {
      question: "Does the service stay stable during busy winter evenings?",
      answer:
        "Yes, we keep extra server capacity in place specifically for the peak evening hours when Finnish households are streaming the most.",
    },
  },
  {
    slug: "iptv-subscription-netherlands",
    name: "Netherlands",
    demonym: "Dutch",
    code: "NL",
    cities: "Amsterdam and Rotterdam",
    description: "Live channels and movies streaming smoothly across Amsterdam, Rotterdam and the Netherlands.",
    region: "Europe",
    localAngle:
      "Amsterdam and Rotterdam both have large international populations alongside Dutch locals, so we pair Dutch-language channels with a broad English and international lineup rather than assuming everyone watches the same thing.",
    highlights: [
      {
        title: "Dutch & International Channels",
        description: "Dutch-language TV alongside a broad English and international lineup, built for the Netherlands' mix of locals and expats.",
      },
      {
        title: "Fast Servers Across The Netherlands",
        description: "Routing tuned to keep playback smooth from Amsterdam to Rotterdam and beyond.",
      },
    ],
    localFaq: {
      question: "Are Dutch-language channels included, or mostly international ones?",
      answer:
        "Dutch-language channels are included as standard, alongside a full English and international lineup for the Netherlands' many expats.",
    },
  },
];

export function getCountry(slug: string) {
  return countries.find((c) => c.slug === slug);
}

const shortNames: Record<string, string> = {
  "iptv-subscription-uk": "the UK",
  "iptv-subscription-usa": "the USA",
  "iptv-subscription-uae": "the UAE",
  "iptv-subscription-netherlands": "the Netherlands",
};

/** Search-friendly place name for titles and headings, e.g. "the UK" instead of "United Kingdom". */
export function getCountryPlaceName(country: { slug: string; name: string }) {
  return shortNames[country.slug] ?? country.name;
}

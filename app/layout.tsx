import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import { siteName, siteUrl } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "IPTV Subscription Service | Free Trial & 4K Channels",
    template: "%s | IPTV Pro",
  },
  description:
    "Buy an IPTV subscription with a free trial and instant activation. Stream 18,500+ live channels, sports, series and movies in HD, Full HD and 4K on any device, from $20 a month.",
  keywords: [
    "iptv subscription",
    "iptv subscription service",
    "iptv subscriptions",
    "buy iptv subscription",
    "iptv free trial",
    "iptv subscription usa",
    "iptv subscription canada",
    "iptv subscription uk",
    "iptv with subscription",
    "best iptv subscription",
  ],
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName,
    title: "IPTV Subscription Service | Free Trial & 4K Channels",
    description:
      "Stream 18,500+ live channels, sports, series and movies in HD, Full HD and 4K on any device. Start with a free trial.",
    images: [
      {
        url: "/hero-smart-tv.webp",
        width: 1342,
        height: 1047,
        alt: siteName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IPTV Subscription Service | Free Trial & 4K Channels",
    description:
      "Stream 18,500+ live channels, sports, series and movies in HD, Full HD and 4K. Start with a free trial.",
    images: ["/hero-smart-tv.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    google: "o5TaI28AlJEVxYySR_7MSUrmrDD7xRDRaOU00J8klas",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b0f19",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteName,
  url: siteUrl,
  description:
    "IPTV subscription service with thousands of live channels, sports, series and movies in HD, Full HD and 4K.",
  sameAs: [],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} h-full scroll-smooth antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#0b0f19] text-slate-100 font-[family-name:var(--font-inter)]">
        {children}
      </body>
    </html>
  );
}

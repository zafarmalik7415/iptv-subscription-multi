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
    default: "IPTV Subscription | Thousands Of Channels In HD, Full HD & 4K",
    template: "%s | IPTV Pro",
  },
  description:
    "Get your IPTV subscription from $20/month. Over 18,500 live channels, sports, series and movies in HD, Full HD and 4K. Works on Smart TV, Fire Stick, mobile and PC. Free trial available.",
  keywords: [
    "IPTV subscription",
    "buy IPTV",
    "IPTV premium",
    "IPTV list",
    "IPTV 4K",
    "best IPTV",
    "live IPTV channels",
    "IPTV Smart TV",
    "IPTV no buffering",
    "IPTV service",
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
    title: "IPTV Subscription | Thousands Of Channels In HD, Full HD & 4K",
    description:
      "Over 18,500 live channels, series and movies. Works on every device. Free trial available.",
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
    title: "IPTV Subscription | Thousands Of Channels In HD, Full HD & 4K",
    description:
      "Over 18,500 live channels, series and movies. Free trial available.",
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

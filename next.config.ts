import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  trailingSlash: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cdn.sanity.io" },
    ],
  },
  async redirects() {
    return [
      {
        source: "/iptv-subscription-united-kingdom",
        destination: "/iptv-subscription-uk/",
        permanent: true,
      },
      {
        source: "/iptv-subscription-united-kingdom/",
        destination: "/iptv-subscription-uk/",
        permanent: true,
      },
      {
        source: "/iptv-subscription-united-states",
        destination: "/iptv-subscription-usa/",
        permanent: true,
      },
      {
        source: "/iptv-subscription-united-states/",
        destination: "/iptv-subscription-usa/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

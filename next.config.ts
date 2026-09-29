import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  trailingSlash: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cdn.sanity.io" },
    ],
    qualities: [65, 75],
  },
};

export default nextConfig;

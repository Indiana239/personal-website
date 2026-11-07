import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export keeps hosting simple and inexpensive on Cloudflare Pages.
  // Switch this off only if the site later needs request-time server features.
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

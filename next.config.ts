import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // GitHub Pages hosts static files, so Next.js creates a deployable `out` folder.
  output: "export",
  trailingSlash: true,
};

export default nextConfig;

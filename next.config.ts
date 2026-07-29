import type { NextConfig } from "next";

// A project site is published at /Grok-Based_OS/, while local development remains at /.
const repositoryPath = process.env.GITHUB_ACTIONS ? "/Grok-Based_OS" : "";

const nextConfig: NextConfig = {
  // GitHub Pages hosts static files, so Next.js creates a deployable `out` folder.
  output: "export",
  trailingSlash: true,
  basePath: repositoryPath,
  assetPrefix: repositoryPath || undefined,
};

export default nextConfig;

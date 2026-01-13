import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Disable TypeScript build errors
  typescript: {
    ignoreBuildErrors: true,
  },
  // Disable ESLint during build
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Any other Next.js config options can go here
};

export default nextConfig;

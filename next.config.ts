import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/pyun-project',
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
};

export default nextConfig;

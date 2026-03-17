import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/john-portfolio",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

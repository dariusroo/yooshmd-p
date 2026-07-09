import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/yooshmd-p",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

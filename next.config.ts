import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    loader: "custom",
    loaderFile: "./app/lib/image-loader.ts",
    deviceSizes: [320, 480, 640, 750, 828, 1080, 1200, 1600, 1920],
    imageSizes: [160, 240],
    qualities: [85],
  },
};

export default nextConfig;

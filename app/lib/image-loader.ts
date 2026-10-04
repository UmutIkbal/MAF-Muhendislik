"use client";

import type { ImageLoaderProps } from "next/image";
import imageManifest from "./image-manifest.json";

const images: Record<string, { width: number; hash: string }> = imageManifest;
const widths = [160, 240, 320, 480, 640, 750, 828, 1080, 1200, 1600, 1920];

export default function imageLoader({ src, width }: ImageLoaderProps): string {
  const image = images[src];
  if (!image) throw new Error(`Missing responsive image: ${src}. Run npm run images:responsive.`);
  const selectedWidth = Math.min(widths.find((size) => size >= width) ?? 1920, image.width);
  const name = src.slice(src.lastIndexOf("/") + 1).replace(/\.webp$/, "");
  return `/responsive-images/${name}-${image.hash}-${selectedWidth}.webp`;
}

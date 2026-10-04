import fs from "node:fs/promises";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

// Keep the existing brand symbol readable on light browser/search backgrounds.
const source = fileURLToPath(new URL("../public/maf-favicon.png", import.meta.url));
const background = "#4f6b43"; // Matches the site's .maf-symbol brand green.
const symbol = await sharp(source).trim().png().toBuffer();
async function renderIcon(size) {
  const padding = Math.max(1, Math.round(size / 16));
  return sharp(symbol)
    .resize(size - padding * 2, size - padding * 2, { fit: "contain", background })
    .flatten({ background })
    .extend({ top: padding, bottom: padding, left: padding, right: padding, background })
    .png()
    .toBuffer();
}
const sizes = [16, 32, 48, 96];
const images = await Promise.all(sizes.map(renderIcon));
const header = Buffer.alloc(6 + images.length * 16);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(images.length, 4);
let offset = header.length;
images.forEach((image, index) => {
  const entry = 6 + index * 16;
  header[entry] = sizes[index];
  header[entry + 1] = sizes[index];
  header.writeUInt16LE(1, entry + 4);
  header.writeUInt16LE(32, entry + 6);
  header.writeUInt32LE(image.length, entry + 8);
  header.writeUInt32LE(offset, entry + 12);
  offset += image.length;
});
await fs.writeFile(new URL("../public/favicon.ico", import.meta.url), Buffer.concat([header, ...images]));
await fs.writeFile(new URL("../public/apple-touch-icon.png", import.meta.url), await renderIcon(180));
console.log("Brand favicon generated (16/32/48/96px ICO and 180px Apple icon).");

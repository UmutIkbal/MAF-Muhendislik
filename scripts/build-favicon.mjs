import fs from "node:fs/promises";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

// Use the existing square brand icon; ICO entries contain PNG images.
const source = fileURLToPath(new URL("../public/maf-favicon.png", import.meta.url));
const sizes = [16, 32, 48, 96];
const images = await Promise.all(sizes.map((size) => sharp(source).resize(size, size).png().toBuffer()));
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
await sharp(source).resize(180, 180).png().toFile(fileURLToPath(new URL("../public/apple-touch-icon.png", import.meta.url)));
console.log("Brand favicon generated (16/32/48/96px ICO and 180px Apple icon).");

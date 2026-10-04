import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createHash } from "node:crypto";
import sharp from "sharp";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const widths = [160, 240, 320, 480, 640, 750, 828, 1080, 1200, 1600, 1920];
const quality = 85;

async function main() {
  const sources = new Set();
  async function scan(directory) {
    for (const entry of await fs.readdir(directory, { withFileTypes: true })) {
      const file = path.join(directory, entry.name);
      if (entry.isDirectory()) await scan(file);
      else if (/\.(tsx?|jsx?)$/.test(entry.name)) {
        const code = await fs.readFile(file, "utf8");
        for (const match of code.matchAll(/["'](\/(?:images\/projects\/[^"']+|stokfotro)\.webp)["']/g)) sources.add(match[1]);
      }
    }
  }
  await scan(path.join(root, "app"));
  const outputDirectory = path.join(root, "public/responsive-images");
  await fs.mkdir(outputDirectory, { recursive: true });
  const manifest = {};
  for (const src of [...sources].sort()) {
    // Resize the original when available, avoiding a second compression of the existing WebP.
    let input = path.join(root, "public", src);
    for (const extension of [".jpg", ".jpeg", ".png"]) {
      const original = input.replace(/\.webp$/, extension);
      try { await fs.access(original); input = original; break; } catch { /* Try the next original format. */ }
    }
    const bytes = await fs.readFile(input);
    const metadata = await sharp(bytes).rotate().metadata();
    const nativeWidth = metadata.autoOrient?.width ?? metadata.width;
    if (!nativeWidth) throw new Error(`Missing image dimensions: ${src}`);
    const hash = createHash("sha256").update(bytes).update(`webp-${quality}-v1`).digest("hex").slice(0, 12);
    const variants = [...new Set(widths.map((width) => Math.min(width, nativeWidth)))];
    manifest[src] = { width: nativeWidth, hash };
    for (const width of variants) {
      const name = `${path.basename(src, ".webp")}-${hash}-${width}.webp`;
      const destination = path.join(outputDirectory, name);
      try { await fs.access(destination); } catch {
        await sharp(bytes).rotate().resize({ width, withoutEnlargement: true }).webp({ quality }).toFile(destination);
      }
    }
  }
  await fs.writeFile(path.join(root, "app/lib/image-manifest.json"), JSON.stringify(manifest, null, 2) + "\n");
  console.log(`Responsive variants ready for ${sources.size} images (WebP quality ${quality}, no upscaling).`);
}

main().catch((error) => { console.error(error); process.exitCode = 1; });

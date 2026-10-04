import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));

async function main() {
  const directory = path.join(scriptDirectory, "../public/images/projects");
  const files = (await fs.readdir(directory)).filter((file) => /\.(jpg|jpeg|png)$/i.test(file));
  const inputs = [path.join(scriptDirectory, "../public/stokfotro.jpg"), ...files.map((file) => path.join(directory, file))];
  let before = 0;
  let after = 0;
  for (const input of inputs) {
    const output = input.replace(/\.(jpg|jpeg|png)$/i, ".webp");
    before += (await fs.stat(input)).size;
    await sharp(input).rotate().resize({ width: 1920, withoutEnlargement: true }).webp({ quality: 82 }).toFile(output);
    after += (await fs.stat(output)).size;
  }
  console.log(`${inputs.length} images: ${(before / 1024 / 1024).toFixed(2)} MB -> ${(after / 1024 / 1024).toFixed(2)} MB`);
}

main().catch((error) => { console.error(error); process.exitCode = 1; });

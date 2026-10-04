import fs from "node:fs/promises";
import path from "node:path";
import assert from "node:assert/strict";

let count = 0;
async function verify(directory) {
  for (const entry of await fs.readdir(directory, { withFileTypes: true })) {
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) await verify(file);
    else if (entry.name.endsWith(".html")) {
      const html = await fs.readFile(file, "utf8");
      for (const match of html.matchAll(/<img\b[^>]*>/g)) {
        const tag = match[0];
        assert(tag.includes('sizes="'), `${file}: missing sizes`);
        assert(tag.includes('srcSet="') || tag.includes('srcset="'), `${file}: missing srcset`);
        for (const image of tag.matchAll(/\/responsive-images\/[^\s",]+\.webp/g)) await fs.access(path.join("out", image[0]));
        count++;
      }
    }
  }
}
await verify("out");
const html = await fs.readFile("out/index.html", "utf8");
const hero = [...html.matchAll(/<img\b[^>]*>/g)].find((match) => match[0].includes("hero-background-image"))?.[0];
assert(hero?.includes('fetchPriority="high"') && hero.includes('loading="eager"'), "Hero priority changed");
const preload = [...html.matchAll(/<link\b[^>]*>/g)].filter((match) => match[0].includes('as="image"') && match[0].includes("stokfotro"));
assert.equal(preload.length, 1, "Expected one hero preload");
assert(preload[0][0].includes("imageSrcSet="), "Hero preload must use responsive candidates");
console.log(`${count} exported image elements verified: sizes, srcset, existing assets, eager hero and one responsive preload.`);
const manifest = JSON.parse(await fs.readFile("app/lib/image-manifest.json", "utf8"));
let before = 0, after = 0;
for (const name of ["konut-1", "yenileme-1", "ic-mekan-1"]) {
  const src = `/images/projects/${name}.webp`;
  const image = manifest[src];
  const original = (await fs.stat("public" + src)).size;
  const resized = (await fs.stat(`public/responsive-images/${name}-${image.hash}-640.webp`)).size;
  before += original; after += resized;
  console.log(`${name}: ${(original / 1024).toFixed(1)} KiB -> ${(resized / 1024).toFixed(1)} KiB at 640px`);
}
console.log(`Three card images: ${(before / 1024).toFixed(1)} KiB -> ${(after / 1024).toFixed(1)} KiB (640px example; actual browser choice depends on viewport/DPR).`);

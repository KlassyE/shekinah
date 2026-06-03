// Converts new gallery uploads (_*.JPG, _*.HEIC) into optimized WebP files
// in the same gallery folder. Skips files that already have a webp sibling.
import { readdir, stat, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { join, extname, basename } from 'node:path';
import sharp from 'sharp';
import heicConvert from 'heic-convert';
import { readFile } from 'node:fs/promises';

const GALLERY_DIR = join(process.cwd(), 'public', 'site-assets', 'uploads', 'gallery', '2');
const MAX_WIDTH = 1800;
const QUALITY = 78;

function outName(file) {
  // strip leading underscore + extension, force .webp
  const stem = basename(file, extname(file)).replace(/^_+/, '');
  return stem + '.webp';
}

async function convertJpeg(inputPath, outputPath) {
  await sharp(inputPath)
    .rotate()
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .webp({ quality: QUALITY })
    .toFile(outputPath);
}

async function convertHeic(inputPath, outputPath) {
  const inputBuffer = await readFile(inputPath);
  const jpegBuffer = await heicConvert({ buffer: inputBuffer, format: 'JPEG', quality: 0.95 });
  await sharp(Buffer.from(jpegBuffer))
    .rotate()
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .webp({ quality: QUALITY })
    .toFile(outputPath);
}

async function main() {
  const entries = await readdir(GALLERY_DIR);
  const targets = entries.filter((f) => /^_.*\.(JPG|JPEG|HEIC)$/i.test(f));
  console.log(`Found ${targets.length} candidate files.`);

  const results = [];
  for (const file of targets) {
    const inputPath = join(GALLERY_DIR, file);
    const outFile = outName(file);
    const outputPath = join(GALLERY_DIR, outFile);

    if (existsSync(outputPath)) {
      console.log(`skip (exists): ${outFile}`);
      results.push(outFile);
      continue;
    }
    try {
      const isHeic = /\.heic$/i.test(file);
      if (isHeic) {
        await convertHeic(inputPath, outputPath);
      } else {
        await convertJpeg(inputPath, outputPath);
      }
      const s = await stat(outputPath);
      console.log(`ok   : ${outFile}  (${(s.size / 1024).toFixed(0)} KB)`);
      results.push(outFile);
    } catch (err) {
      console.warn(`fail : ${file} -> ${outFile}: ${err.message}`);
    }
  }

  results.sort();
  const manifest = results.map((f) => `/site-assets/uploads/gallery/2/${f}`);
  await writeFile(join(process.cwd(), 'scripts', 'gallery-manifest.json'), JSON.stringify(manifest, null, 2));
  console.log(`Wrote scripts/gallery-manifest.json with ${manifest.length} entries.`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

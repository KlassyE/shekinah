// Rotate specific sideways webp files in the gallery folder by -90° (counter-clockwise)
// so subjects face upright. Overwrites the original files.
import { readFile, writeFile, rename } from 'node:fs/promises';
import { join } from 'node:path';
import sharp from 'sharp';

const DIR = join(process.cwd(), 'public', 'site-assets', 'uploads', 'gallery', '2');

// Each entry: [filename, rotation in degrees clockwise]
const TARGETS = [
  ['IMGL7816.webp', 270],
  ['IMGL8299.webp', 270],
  ['IMGL8326.webp', 270],
  ['IMGL8334.webp', 270]
];

for (const [file, deg] of TARGETS) {
  const path = join(DIR, file);
  const tmp = path + '.tmp.webp';
  const input = await readFile(path);
  await sharp(input).rotate(deg).webp({ quality: 80 }).toFile(tmp);
  await rename(tmp, path);
  console.log(`rotated ${deg}° -> ${file}`);
}

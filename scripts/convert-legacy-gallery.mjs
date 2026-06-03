import { join, basename, extname } from 'node:path';
import sharp from 'sharp';

const GALLERY_DIR = join(process.cwd(), 'public', 'site-assets', 'uploads', 'gallery', '2');
const FILES = [
  '1748116405-WhatsApp-Image-2023-07-27-at-12.33.49-AM.jpeg',
  '1748182768-pregraduation.jpg',
  '1748182852-General_certificate.jpg',
  '1748182903-Group_pic.jpg',
  '1749018370-Advanced.html.jpg',
  '1753079958-IMG-20250716-WA0048.jpg'
];

for (const file of FILES) {
  const stem = basename(file, extname(file));
  const input = join(GALLERY_DIR, file);
  const output = join(GALLERY_DIR, `${stem}.webp`);
  await sharp(input)
    .rotate()
    .resize({ width: 1800, withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(output);
  console.log(`${file} -> ${stem}.webp`);
}
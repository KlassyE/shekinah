import { mkdir, writeFile } from 'node:fs/promises';

const BASE = 'https://shekinah.ac.ug';
const EXTRA = [
  '/assets/images/welcome-image.jpg',
  '/assets/images/parent-partnership.jpg',
  '/assets/images/hero.jpg',
  '/assets/images/hero-bg.jpg',
  '/assets/images/about.jpg',
  '/assets/images/logo.png',
  '/assets/images/logo-shekinah.png',
  '/assets/images/logo-shekinah-icon.png',
  '/uploads/gallery/2/1748182852-General%20certificate.jpg',
  '/uploads/gallery/2/1748182903-Group%20pic.jpg',
  '/uploads/gallery/2/1748184022-IMG-20240608-WA0010.jpg'
];

const OUT = new URL('../public/site-assets/', import.meta.url);
await mkdir(OUT, { recursive: true });

for (const p of EXTRA) {
  try {
    const r = await fetch(BASE + p);
    if (!r.ok) { console.log('skip', p, r.status); continue; }
    const buf = Buffer.from(await r.arrayBuffer());
    const safe = decodeURIComponent(p.replace(/^\//, '')).replace(/[^a-zA-Z0-9._/-]/g, '_');
    const out = new URL(safe, OUT);
    await mkdir(new URL('./', out), { recursive: true });
    await writeFile(out, buf);
    console.log('saved', safe, buf.length);
  } catch (e) {
    console.warn('err', p, e.message);
  }
}

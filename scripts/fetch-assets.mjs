import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, join, extname, basename } from 'node:path';

const BASE = 'https://shekinah.ac.ug';
const PAGES = ['/', '/about-shekinah', '/why-choose-us', '/gallery', '/contact', '/academics', '/parents'];
const OUT = new URL('../public/site-assets/', import.meta.url);

const seen = new Set();
const queue = [];

function abs(u) {
  if (!u) return null;
  if (u.startsWith('data:')) return null;
  if (u.startsWith('//')) return 'https:' + u;
  if (u.startsWith('http')) return u;
  if (u.startsWith('/')) return BASE + u;
  return null;
}

function extract(html) {
  const urls = new Set();
  const patterns = [
    /<img[^>]+src=["']([^"']+)["']/gi,
    /<source[^>]+srcset=["']([^"']+)["']/gi,
    /<link[^>]+rel=["'](?:icon|shortcut icon|apple-touch-icon)["'][^>]+href=["']([^"']+)["']/gi,
    /<link[^>]+href=["']([^"']+)["'][^>]+rel=["'](?:icon|shortcut icon|apple-touch-icon)["']/gi,
    /background(?:-image)?\s*:\s*url\(["']?([^"')]+)["']?\)/gi,
    /data-(?:src|bg|background)=["']([^"']+)["']/gi
  ];
  for (const p of patterns) {
    let m;
    while ((m = p.exec(html))) {
      const raw = m[1];
      raw.split(',').forEach((part) => {
        const u = abs(part.trim().split(' ')[0]);
        if (u && /\.(?:png|jpe?g|webp|svg|gif|ico|avif)(\?|$)/i.test(u)) urls.add(u);
      });
    }
  }
  return [...urls];
}

async function fetchText(url) {
  const r = await fetch(url, { headers: { 'user-agent': 'Mozilla/5.0' } });
  if (!r.ok) throw new Error(url + ' ' + r.status);
  return r.text();
}

async function download(url) {
  const r = await fetch(url, { headers: { 'user-agent': 'Mozilla/5.0' } });
  if (!r.ok) {
    console.warn('skip', url, r.status);
    return;
  }
  const buf = Buffer.from(await r.arrayBuffer());
  const u = new URL(url);
  const pathname = u.pathname.replace(/^\//, '');
  let safe = pathname.replace(/[^a-zA-Z0-9._/-]/g, '_');
  const out = new URL(safe, OUT);
  await mkdir(dirname(out.pathname.slice(1)), { recursive: true }).catch(() => {});
  await mkdir(new URL('./', out), { recursive: true });
  await writeFile(out, buf);
  console.log('saved', safe, '(' + buf.length + ')');
}

await mkdir(OUT, { recursive: true });

const allImages = new Set();
for (const path of PAGES) {
  try {
    const html = await fetchText(BASE + path);
    extract(html).forEach((u) => allImages.add(u));
    console.log('page ok', path, 'images so far', allImages.size);
  } catch (e) {
    console.warn('page fail', path, e.message);
  }
}

console.log('Total unique images:', allImages.size);
for (const u of allImages) {
  try {
    await download(u);
  } catch (e) {
    console.warn('dl fail', u, e.message);
  }
}

console.log('Done.');

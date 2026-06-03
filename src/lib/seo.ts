import { useEffect } from 'react';

type Meta = {
  title: string;
  description?: string;
  path?: string;
  image?: string;
};

const SITE_NAME = 'Shekinah Christian International School';
const SITE_URL = 'https://shekinah-cis.vercel.app';
const DEFAULT_IMAGE = '/site-assets/uploads/gallery/2/IMG_3116.webp';

function setMeta(name: string, content: string, attr: 'name' | 'property' = 'name') {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

export function useDocumentMeta({ title, description, path, image }: Meta) {
  useEffect(() => {
    const fullTitle = title === SITE_NAME ? title : `${title} | ${SITE_NAME}`;
    document.title = fullTitle;

    const desc = description ||
      'Christ-centered education in Kampala, Uganda. ACE curriculum from Pre-School to Grade 12 at Shekinah Christian International School, Komamboga.';
    const url = SITE_URL + (path || (typeof window !== 'undefined' ? window.location.pathname : '/'));
    const img = (image || DEFAULT_IMAGE).startsWith('http') ? (image || DEFAULT_IMAGE) : SITE_URL + (image || DEFAULT_IMAGE);

    setMeta('description', desc);
    setMeta('og:title', fullTitle, 'property');
    setMeta('og:description', desc, 'property');
    setMeta('og:type', 'website', 'property');
    setMeta('og:url', url, 'property');
    setMeta('og:image', img, 'property');
    setMeta('og:site_name', SITE_NAME, 'property');
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', fullTitle);
    setMeta('twitter:description', desc);
    setMeta('twitter:image', img);
    setLink('canonical', url);
  }, [title, description, path, image]);
}

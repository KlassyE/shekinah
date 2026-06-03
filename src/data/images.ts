export const LOGO = '/site-assets/assets/images/logo-shekinah-transparent.png';
export const FAVICON = '/site-assets/assets/images/favicon.ico';

const NEW = (name: string) => `/site-assets/uploads/gallery/2/${name}`;
const POSTER = (id: string) => `/site-assets/vi/${id}/hqdefault.jpg`;
const POSTER_MAX = (id: string) => `/site-assets/vi/${id}/maxresdefault.jpg`;

// New WebP uploads take priority. Legacy JPGs kept at the end as a safety net.
export const GALLERY = [
  { src: NEW('IMGL8128.webp'), caption: 'Campus Life' },
  { src: NEW('IMGL8974.webp'), caption: 'Classroom Excellence' },
  { src: NEW('IMGL8299.webp'), caption: 'Student Activities' },
  { src: NEW('IMGL8334.webp'), caption: 'Awards & Recognition' },
  { src: NEW('IMGL8885.webp'), caption: 'Sports & Play' },
  { src: NEW('IMGL7772.webp'), caption: 'Learning in Action' },
  { src: NEW('IMGL8980.webp'), caption: 'Friendships' },
  { src: NEW('IMGL7816.webp'), caption: 'Christ-Centered Community' },
  { src: NEW('IMGL8326.webp'), caption: 'Discovery & Growth' },
  { src: NEW('IMG_3110.webp'), caption: 'Achievements' },
  { src: NEW('IMG_3113.webp'), caption: 'Celebrations' },
  { src: NEW('IMG_3116.webp'), caption: 'Together as One' },
  { src: NEW('IMG_3119.webp'), caption: 'Pre-Graduation' },
  { src: NEW('IMG_3120.webp'), caption: 'Graduation Day' },
  { src: NEW('IMG_3122.webp'), caption: 'Honoring Excellence' },
  { src: NEW('IMG_3126.webp'), caption: 'Class Memories' },
  { src: NEW('IMG_3127.webp'), caption: 'Spirit of Shekinah' },
  { src: NEW('IMG_3129.webp'), caption: 'Joyful Moments' },
  { src: NEW('IMG_3131.webp'), caption: 'Bright Futures' },
  { src: NEW('IMG_3144.webp'), caption: 'School Events' },
  { src: NEW('IMG_3146.webp'), caption: 'Memories that Last' },
  { src: NEW('1748116405-WhatsApp-Image-2023-07-27-at-12.33.49-AM.webp'), caption: 'Sports & Teamwork' },
  { src: NEW('1748182768-pregraduation.webp'), caption: 'Pre-Graduation Memories' },
  { src: NEW('1748182852-General_certificate.webp'), caption: 'Certificate Awards' },
  { src: NEW('1748182903-Group_pic.webp'), caption: 'School Community' },
  { src: NEW('1749018370-Advanced.html.webp'), caption: 'Graduation Achievement' },
  { src: NEW('1753079958-IMG-20250716-WA0048.webp'), caption: 'Practical Skills' }
];

// Strong landscape shots for the homepage hero carousel.
export const HERO_IMAGES = [
  NEW('IMG_3116.webp'),
  NEW('IMG_3122.webp'),
  NEW('IMG_3129.webp'),
  NEW('IMGL8128.webp')
];

export const HOME_IMAGES = {
  welcome: NEW('IMG_3120.webp'),
  directors: NEW('IMG_3131.webp'),
  activities: NEW('1753079958-IMG-20250716-WA0048.webp'),
  parentPartnership: NEW('1748182903-Group_pic.webp')
};

export type Video = { id: string; title: string; poster: string };

export const VIDEOS: Video[] = [
  { id: 'jqfTrmywZ2I', title: 'Parent Staff Monthly Prayer Meeting', poster: POSTER('jqfTrmywZ2I') },
  { id: 'Eb5XzJvdFzM', title: 'Parent Staff Monthly Prayer Meeting', poster: POSTER('Eb5XzJvdFzM') },
  { id: 'LrK3xWh2_rg', title: 'I Love You Daddy! — Presentation by Shekinah CIS Students', poster: POSTER('LrK3xWh2_rg') },
  { id: 'T1nkPa8V1Fs', title: "The Father's Heart — Shekinah Fathers Coffee Breakfast", poster: POSTER('T1nkPa8V1Fs') },
  { id: '9vqRgkXgUTA', title: 'Shekinah Christian International School Event', poster: POSTER_MAX('9vqRgkXgUTA') },
  { id: 'FEAC9n2e6xY', title: 'Shekinah Christian International School', poster: POSTER('FEAC9n2e6xY') },
  { id: 'ogW5o6tsZQk', title: 'Leadership Impact Training', poster: POSTER('ogW5o6tsZQk') },
  { id: '4ATu7GeI3zE', title: "Divine Purpose Junior School — Students' Conference", poster: POSTER('4ATu7GeI3zE') },
  { id: 'j9Er82DucfU', title: "Divine Purpose Junior School — Students' Conference", poster: POSTER('j9Er82DucfU') },
  { id: 'e2jzM-PM6kg', title: "Divine Purpose Junior School — Students' Conference 2023", poster: POSTER('e2jzM-PM6kg') }
];

export type NewsItem = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  image?: string;
};

export const NEWS: NewsItem[] = [
  {
    slug: 'opening-of-term-1-2026',
    title: 'Opening of Term 1, 2026 — 10th Feb 2026',
    date: 'Jan 19, 2026',
    excerpt: 'Term 1 of the 2026 academic year officially opens on 10th February. Find reporting details, fees schedule and orientation timetable inside.',
    image: '/site-assets/uploads/gallery/2/IMG_3116.webp'
  },
  {
    slug: 'application-for-admissions',
    title: 'Applications Open for All Classes',
    date: 'Jan 18, 2026',
    excerpt: 'Admissions are open from Pre-School through Grade 12. Reserve a place for your child through our online enquiry or visit the campus.',
    image: '/site-assets/uploads/gallery/2/1748182852-General_certificate.webp'
  },
  {
    slug: 'beginning-academic-year-2026',
    title: 'Beginning the Academic Year 2026',
    date: 'Jan 18, 2026',
    excerpt: 'A fresh year, fresh goals. Read the Director\'s welcome message and theme for 2026.',
    image: '/site-assets/uploads/gallery/2/IMGL8974.webp'
  },
  {
    slug: 'student-educational-tour-to-kasese',
    title: 'Student Educational Tour to Kasese',
    date: 'Sep 11, 2025',
    excerpt: 'A memorable learning experience as Shekinah students explored Kasese — geography, history, culture and faith in one trip.',
    image: '/site-assets/uploads/gallery/2/1753079958-IMG-20250716-WA0048.webp'
  },
  {
    slug: 'abc-class-2025-graduation',
    title: 'Our ABC Class — 2025 Graduation',
    date: 'Jul 22, 2025',
    excerpt: 'Progress is communication, and our ABC class spoke loudly today — moving up confidently into Grade 1. Congratulations!',
    image: '/site-assets/uploads/gallery/2/1748182768-pregraduation.webp'
  }
];

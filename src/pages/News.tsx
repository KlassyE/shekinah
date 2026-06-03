import { PageHero } from '../components/PageHero';
import { NEWS } from '../data/news';
import { GALLERY } from '../data/images';
import { useDocumentMeta } from '../lib/seo';

export function News() {
  useDocumentMeta({
    title: 'News & Events — Shekinah Christian International School',
    description: 'Announcements, stories and upcoming events from Shekinah Christian International School in Kampala, Uganda.',
    path: '/news'
  });
  return (
    <>
      <PageHero
        eyebrow="News & Events"
        title={<>What's <span className="grad">happening</span> at Shekinah</>}
        subtitle="Announcements, stories and updates from our community."
        image={GALLERY[6].src}
        compact
      />

      <section className="section">
        <div className="container news-list">
          {NEWS.map((n) => (
            <article className="news-row" key={n.slug}>
              {n.image && (
                <div className="news-row-thumb" style={{ backgroundImage: `url(${n.image})` }} />
              )}
              <div className="news-row-body">
                <span className="news-date">{n.date}</span>
                <h2>{n.title}</h2>
                <p>{n.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

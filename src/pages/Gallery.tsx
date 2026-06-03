import { useState } from 'react';
import { PageHero } from '../components/PageHero';
import { GALLERY, VIDEOS } from '../data/images';
import { useDocumentMeta } from '../lib/seo';

export function Gallery() {
  useDocumentMeta({
    title: 'Gallery — Photos & Videos from Shekinah CIS',
    description: 'Photos and videos from life at Shekinah Christian International School — classes, ceremonies, sports, music, drama and educational tours.',
    path: '/gallery'
  });
  const [active, setActive] = useState<number | null>(null);
  const [video, setVideo] = useState<string | null>(null);
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title={<>Moments of <span className="grad">growth</span> and achievement</>}
        subtitle="A glimpse into life at Shekinah — events, classes, performances and ceremonies."
        image={GALLERY[2].src}
        compact
      />

      <section className="section">
        <div className="container">
          <div className="gallery-grid">
            {GALLERY.map((g, i) => (
              <button
                className="gallery-grid-tile"
                key={g.src}
                onClick={() => setActive(i)}
                aria-label={`Open image ${i + 1}`}
              >
                <img src={g.src} alt="" loading="lazy" />
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <header className="section-head">
            <span className="eyebrow">Watch</span>
            <h2>Videos from Shekinah</h2>
            <p>Highlights, ceremonies and stories from our school community.</p>
          </header>
          <div className="video-grid">
            {VIDEOS.map((v) => (
              <button
                className="video-tile"
                key={v.id}
                onClick={() => setVideo(v.id)}
                aria-label={`Play video: ${v.title}`}
              >
                <img src={v.poster} alt="" loading="lazy" />
                <span className="play-btn" aria-hidden>▶</span>
                <span className="video-title">{v.title}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {active !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" onClick={() => setActive(null)}>
          <button className="lightbox-close" aria-label="Close">×</button>
          <img src={GALLERY[active]!.src} alt="" />
        </div>
      )}

      {video && (
        <div className="lightbox lightbox-video" role="dialog" aria-modal="true" onClick={() => setVideo(null)}>
          <button className="lightbox-close" aria-label="Close" onClick={() => setVideo(null)}>×</button>
          <div className="video-frame" onClick={(e) => e.stopPropagation()}>
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${video}?autoplay=1&rel=0`}
              title="Shekinah video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
}

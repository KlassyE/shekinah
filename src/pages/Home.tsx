import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { GALLERY, HERO_IMAGES, HOME_IMAGES } from '../data/images';
import { NEWS } from '../data/news';
import { Stat } from '../components/Stat';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { useDocumentMeta } from '../lib/seo';

export function Home() {
  useDocumentMeta({
    title: 'Shekinah Christian International School — Kampala, Uganda',
    description: 'Christ-centered Christian international school in Kampala, Uganda. ACE curriculum from Pre-School to Grade 12 in Komamboga — enroll today.',
    path: '/'
  });
  const [slide, setSlide] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setSlide((s) => (s + 1) % HERO_IMAGES.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-slides">
          {HERO_IMAGES.map((src, i) => (
            <div
              key={src}
              className={'hero-slide' + (i === slide ? ' active' : '')}
              aria-hidden={i !== slide}
            >
              <img src={src} alt="" loading={i === 0 ? 'eager' : 'lazy'} />
            </div>
          ))}
          <div className="hero-overlay" aria-hidden />
        </div>
        <div className="hero-content">
          <span className="badge-pill">Christ-Centered Education</span>
          <h1>
            Christian Education for a <span className="grad">Brighter Future</span>
          </h1>
          <p className="lead">
            Shekinah Christian International School provides holistic education that fosters
            wisdom, responsibility, and a strong moral foundation — from Pre-School to Grade 12.
          </p>
          <div className="hero-actions">
            <Link to="/apply" className="btn btn-primary">Apply Now</Link>
            <Link to="/about" className="btn btn-ghost">Learn More</Link>
          </div>
          <div className="hero-dots" role="tablist">
            {HERO_IMAGES.map((_, i) => (
              <button
                key={i}
                aria-label={`Slide ${i + 1}`}
                className={i === slide ? 'on' : ''}
                onClick={() => setSlide(i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* WELCOME */}
      <section className="section welcome">
        <div className="container two-col">
          <div>
            <p className="eyebrow">Welcome</p>
            <h2>Welcome to Shekinah Christian International School</h2>
            <p className="quote">"Set Apart for Christ"</p>
            <p>
              At Shekinah we believe every child is a gift from God with unique potential. From
              their very first steps in learning to confident graduation in Grade 12, we nurture
              children in a Christ-centered, caring, and academically excellent environment.
            </p>
            <p>
              We don't just educate minds — we shape character, faith, and purpose through daily
              devotions, prayer, biblical principles, and moral instruction.
            </p>
            <Link to="/about" className="btn btn-outline">More About Us</Link>
          </div>
          <div className="image-card tilt">
            <img src={HOME_IMAGES.welcome} alt="Shekinah school family" loading="lazy" />
            <div className="image-card-tag">15+ Years of Excellence</div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="section stats-band">
        <div className="container stats">
          <Stat end={500} label="Students" />
          <Stat end={35} label="Teachers" />
          <Stat end={12} label="Grade Levels" />
          <Stat end={15} label="Years Excellence" />
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="section">
        <div className="container">
          <header className="section-head">
            <p className="eyebrow">Academics</p>
            <h2>Academic Excellence from Pre-School to Grade 12</h2>
            <p className="lead">A complete learning journey under one roof.</p>
          </header>
          <div className="program-grid">
            {[
              {
                title: 'Pre-School',
                tag: 'Ages 3–5',
                text: 'A loving, playful, and secure foundation. Play-based learning, early literacy & numeracy in a nurturing environment.',
                points: ['Play-based learning', 'Early literacy & numeracy', 'Safe & nurturing environment']
              },
              {
                title: 'Lower & Upper Primary',
                tag: 'Grade 1–7',
                text: 'Strong literacy, numeracy, and life-skills foundation built on the ACE curriculum and Christian values.',
                points: ['ACE curriculum', 'Strong core subjects', 'Character development']
              },
              {
                title: 'Secondary School',
                tag: 'Grade 8–12',
                text: 'Academic rigor, critical thinking, and leadership preparation for university and beyond.',
                points: ['Advanced curriculum', 'Leadership training', 'College preparation']
              }
            ].map((p) => (
              <article key={p.title} className="program-card">
                <div className="program-tag">{p.tag}</div>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
                <ul>
                  {p.points.map((pt) => <li key={pt}>{pt}</li>)}
                </ul>
                <Link to="/academics" className="link-arrow">Explore Program →</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* HOLISTIC */}
      <section className="section section-tinted">
        <div className="container two-col reverse">
          <div className="image-stack">
            <img src={HOME_IMAGES.directors} alt="Shekinah learners growing beyond the classroom" loading="lazy" className="directors-photo" />
            <img src={HOME_IMAGES.activities} alt="Students learning practical skills" loading="lazy" className="stack-2" />
          </div>
          <div>
            <p className="eyebrow">Beyond the Classroom</p>
            <h2>Holistic Child Development</h2>
            <p>Education goes beyond the classroom at Shekinah. We nurture every aspect of growth:</p>
            <div className="feature-grid">
              {[
                { icon: '✓', title: 'Character & Leadership', text: 'Moral courage, responsibility, and servant leadership.' },
                { icon: '♪', title: 'Creative Arts', text: 'Music, drama, and artistic expression.' },
                { icon: '⚽', title: 'Sports & PE', text: 'Health, teamwork and discipline.' },
                { icon: '✎', title: 'Life Skills', text: 'Practical skills for real-world success.' }
              ].map((f) => (
                <div key={f.title} className="feature">
                  <span className="feature-icon">{f.icon}</span>
                  <div>
                    <strong>{f.title}</strong>
                    <p>{f.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PARENT PARTNERSHIP */}
      <section className="section">
        <div className="container two-col">
          <div>
            <p className="eyebrow">Together We Succeed</p>
            <h2>Partnering with Parents</h2>
            <p>
              Education works best when parents and the school walk together. Open communication,
              transparency, and shared values nurture confident, successful learners.
            </p>
            <ul className="check-list">
              <li>Regular parent-teacher meetings</li>
              <li>Transparent communication channels</li>
              <li>Shared Christian values</li>
              <li>Active parent involvement</li>
            </ul>
            <Link to="/why-choose-us" className="btn btn-outline">Why Families Choose Shekinah</Link>
          </div>
          <div className="image-card">
            <img src={HOME_IMAGES.parentPartnership} alt="Parents and learners in the Shekinah school community" loading="lazy" />
          </div>
        </div>
      </section>

      {/* NEWS */}
      <section className="section section-dark">
        <div className="container">
          <header className="section-head light">
            <p className="eyebrow">News</p>
            <h2>Latest News & Updates</h2>
            <p className="lead">Stay informed about what's happening at Shekinah.</p>
          </header>
          <div className="news-grid">
            {NEWS.slice(0, 3).map((n) => (
              <article className="news-card" key={n.slug}>
                {n.image && <div className="news-thumb" style={{ backgroundImage: `url(${n.image})` }} />}
                <div className="news-body">
                  <span className="news-date">{n.date}</span>
                  <h3>{n.title}</h3>
                  <p>{n.excerpt}</p>
                  <Link to="/news" className="link-arrow light">Read More →</Link>
                </div>
              </article>
            ))}
          </div>
          <div className="center mt">
            <Link to="/news" className="btn btn-primary">View All News</Link>
          </div>
        </div>
      </section>

      {/* GALLERY STRIP */}
      <section className="section">
        <div className="container">
          <header className="section-head">
            <p className="eyebrow">Gallery</p>
            <h2>Gallery Highlights</h2>
            <p className="lead">Capturing moments of growth and achievement.</p>
          </header>
          <div className="gallery-strip">
            {GALLERY.slice(0, 6).map((g) => (
              <Link key={g.src} to="/gallery" className="gallery-tile" aria-label="View gallery">
                <img src={g.src} alt="" loading="lazy" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-band">
        <div className="container cta-inner">
          <h2>Ready to Join Our School Family?</h2>
          <p>Give your child a strong academic foundation rooted in Christian values.</p>
          <div className="cta-actions">
            <Link to="/apply" className="btn btn-primary">Enroll Your Child Today</Link>
            <Link to="/contact" className="btn btn-ghost-light">Contact Us</Link>
          </div>
        </div>
      </section>
      <WhatsAppButton />
    </>
  );
}

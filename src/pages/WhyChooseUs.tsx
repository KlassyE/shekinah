import { PageHero } from '../components/PageHero';
import { GALLERY } from '../data/images';
import { Link } from 'react-router-dom';
import { useDocumentMeta } from '../lib/seo';

const REASONS = [
  { icon: '✝', title: 'Christ-Centered', text: 'Daily devotions and biblical values shape every classroom and interaction.' },
  { icon: '🎓', title: 'Academic Excellence', text: 'ACE curriculum with consistent strong results from Pre-School to Grade 12.' },
  { icon: '👨‍🏫', title: 'Caring Teachers', text: 'Passionate, qualified teachers who know every learner by name.' },
  { icon: '🛡️', title: 'Safe Environment', text: 'A secure, nurturing campus where children thrive without fear.' },
  { icon: '🤝', title: 'Parent Partnership', text: 'Open communication and shared values between home and school.' },
  { icon: '🌱', title: 'Holistic Growth', text: 'Academics, character, faith, arts, sports and life skills together.' }
];

const TESTIMONIALS = [
  {
    quote: 'Shekinah has been more than a school for our family — it is a community that loves and raises our children with us.',
    name: 'Mrs. N. Auma',
    role: 'Parent, Grade 4'
  },
  {
    quote: 'The teachers genuinely care. My son grew in confidence, faith and academics within a single year.',
    name: 'Mr. P. Mukasa',
    role: 'Parent, Grade 7'
  },
  {
    quote: 'Daily devotions and mentoring kept me grounded. I left Shekinah ready for university and life.',
    name: 'Joanita K.',
    role: 'Alumna'
  }
];

export function WhyChooseUs() {
  useDocumentMeta({
    title: 'Why Choose Us — Best Christian School in Kampala',
    description: 'Six reasons families choose Shekinah CIS: Christ-centered teaching, academic excellence, caring teachers, safe campus, parent partnership and holistic growth.',
    path: '/why-choose-us'
  });
  return (
    <>
      <PageHero
        eyebrow="Why Choose Shekinah"
        title={<>Six reasons families <span className="grad">love</span> Shekinah</>}
        subtitle="An education that develops the heart, head and hands of every child."
        image={GALLERY[8].src}
      />

      <section className="section">
        <div className="container reason-grid">
          {REASONS.map((r) => (
            <div key={r.title} className="reason-card">
              <span className="reason-icon">{r.icon}</span>
              <h3>{r.title}</h3>
              <p>{r.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section section-tinted">
        <div className="container">
          <header className="section-head">
            <p className="eyebrow">Testimonials</p>
            <h2>What our families say</h2>
          </header>
          <div className="testimonial-grid">
            {TESTIMONIALS.map((t) => (
              <figure className="testimonial" key={t.name}>
                <blockquote>"{t.quote}"</blockquote>
                <figcaption>
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container cta-inner">
          <h2>Become part of the Shekinah family</h2>
          <Link to="/apply" className="btn btn-primary">Start Your Application</Link>
        </div>
      </section>
    </>
  );
}

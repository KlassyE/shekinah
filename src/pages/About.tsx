import { Link } from 'react-router-dom';
import { PageHero } from '../components/PageHero';
import { GALLERY } from '../data/images';
import { useDocumentMeta } from '../lib/seo';

export function About() {
  useDocumentMeta({
    title: 'About Us — Christian School in Kampala',
    description: 'Learn the story of Shekinah Christian International School — a Christ-centered Christian school in Komamboga, Kampala raising God-fearing, capable leaders since 2010.',
    path: '/about'
  });
  return (
    <>
      <PageHero
        eyebrow="About Shekinah"
        title={<>Set Apart for <span className="grad">Christ</span></>}
        subtitle="A Christ-centered school nurturing wisdom, character, and purpose since 2010."
        image={GALLERY[3].src}
      />

      <section className="section">
        <div className="container two-col">
          <div>
            <p className="eyebrow">Our Story</p>
            <h2>A community built on faith and excellence</h2>
            <p>
              Shekinah Christian International School (SCIS) was founded with a simple conviction —
              that every child is a gift from God, and that learning is most powerful when guided
              by faith, love and high academic standards.
            </p>
            <p>
              For over 15 years, we have walked alongside families in the Komamboga community,
              raising up confident learners who graduate with both strong academics and Christ-like
              character.
            </p>
          </div>
          <div className="image-card">
            <img src={GALLERY[0].src} alt="Campus life" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="section section-tinted">
        <div className="container mvv-grid">
          {[
            { tag: 'Mission', text: 'To provide holistic, Christ-centered education that develops the heart, head and hands of every learner.' },
            { tag: 'Vision', text: 'To raise God-fearing, capable, and visionary leaders who transform their communities.' },
            { tag: 'Core Values', text: 'Faith • Integrity • Excellence • Respect • Service' }
          ].map((m) => (
            <div className="mvv-card" key={m.tag}>
              <span className="mvv-tag">{m.tag}</span>
              <p>{m.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container two-col reverse">
          <div className="image-card">
            <img src={GALLERY[4].src} alt="School anthem" loading="lazy" />
          </div>
          <div>
            <p className="eyebrow">Christian Foundation</p>
            <h2>Faith woven into every day</h2>
            <p>
              Daily devotions, prayer, biblical instruction and moral mentoring shape our school
              rhythm. Parents can be confident their children learn in a safe environment grounded
              in faith, love and integrity.
            </p>
            <Link to="/why-choose-us" className="btn btn-outline">See Why Parents Choose Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}

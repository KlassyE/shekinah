import { Link } from 'react-router-dom';
import { PageHero } from '../components/PageHero';
import { GALLERY } from '../data/images';
import { useDocumentMeta } from '../lib/seo';

const LEVELS = [
  {
    title: 'Pre-School',
    age: 'Ages 3 – 5',
    blurb: 'A loving, playful and secure foundation. Our early learners build curiosity, confidence and language through play-based learning.',
    subjects: ['Phonics & early reading', 'Numbers & counting', 'Bible stories', 'Music & movement', 'Creative art']
  },
  {
    title: 'Lower Primary',
    age: 'Grade 1 – 3',
    blurb: 'Strong literacy and numeracy on the ACE curriculum, blended with biblical character formation.',
    subjects: ['English & literacy', 'Mathematics', 'Bible studies', 'Social studies', 'Science', 'Computer basics']
  },
  {
    title: 'Upper Primary',
    age: 'Grade 4 – 7',
    blurb: 'Deeper academics, independent learning skills, and leadership preparation.',
    subjects: ['Advanced math', 'English & writing', 'Science & lab work', 'Social studies', 'ICT', 'Life skills']
  },
  {
    title: 'Secondary',
    age: 'Grade 8 – 12',
    blurb: 'Rigorous academics, critical thinking, and college preparation in a Christ-centered environment.',
    subjects: ['Mathematics', 'Sciences', 'Humanities', 'Languages', 'ICT', 'Vocational electives']
  }
];

export function Academics() {
  useDocumentMeta({
    title: 'Academics — Pre-School to Grade 12 ACE Curriculum',
    description: 'Shekinah CIS academics: Pre-School, Lower & Upper Primary and Secondary on the ACE curriculum with Christian values, co-curricular activities and life skills.',
    path: '/academics'
  });
  return (
    <>
      <PageHero
        eyebrow="Academics"
        title={<>A complete journey, <span className="grad">Pre-School to Grade 12</span></>}
        subtitle="ACE curriculum, dedicated teachers and a Christian framework that nurtures excellence at every stage."
        image={GALLERY[5].src}
      />

      <section className="section">
        <div className="container level-grid">
          {LEVELS.map((l) => (
            <article className="level-card" key={l.title}>
              <header>
                <span className="level-age">{l.age}</span>
                <h2>{l.title}</h2>
              </header>
              <p>{l.blurb}</p>
              <ul>
                {l.subjects.map((s) => <li key={s}>{s}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-tinted">
        <div className="container">
          <header className="section-head">
            <p className="eyebrow">Beyond the Classroom</p>
            <h2>Co-curricular & Skills</h2>
            <p className="lead">Music, sports, leadership and practical skills round out the Shekinah experience.</p>
          </header>
          <div className="feature-grid wide">
            {[
              { icon: '🎵', title: 'Music, Dance & Drama', text: 'Choir, instruments, performances, and confidence on stage.' },
              { icon: '⚽', title: 'Sports & Athletics', text: 'Football, netball, athletics and inter-school competitions.' },
              { icon: '👞', title: 'Leather Design', text: 'Hands-on workshops producing shoes, bags and belts.' },
              { icon: '🧪', title: 'Science Club', text: 'Experiments, projects and STEM exploration.' },
              { icon: '📖', title: 'Bible Quiz', text: 'Scripture study, memory and inter-class quizzes.' },
              { icon: '🌍', title: 'Educational Tours', text: 'Trips like Kasese and Parliament visits to learn beyond walls.' }
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
      </section>

      <section className="cta-band">
        <div className="container cta-inner">
          <h2>Discover your child's potential at Shekinah</h2>
          <Link to="/apply" className="btn btn-primary">Apply Now</Link>
        </div>
      </section>
    </>
  );
}

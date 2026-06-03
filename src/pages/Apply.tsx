import { FormEvent, useState } from 'react';
import { PageHero } from '../components/PageHero';
import { GALLERY } from '../data/images';
import { buildWhatsAppLink, sendFormToEmail } from '../lib/contact';
import { useDocumentMeta } from '../lib/seo';

const LEVELS = ['Pre-School', 'Grade 1–3', 'Grade 4–7', 'Grade 8–12'];

const empty = {
  parent: '',
  relation: '',
  email: '',
  phone: '',
  childName: '',
  age: '',
  level: '',
  notes: ''
};

export function Apply() {
  useDocumentMeta({
    title: 'Apply / Admissions — Shekinah Christian International School',
    description: 'Apply to Shekinah CIS Kampala. Open admissions from Pre-School to Grade 12 on the ACE curriculum. Submit an enquiry and our team will respond in 1–2 days.',
    path: '/apply'
  });
  const [status, setStatus] = useState<{ kind: 'idle' | 'sending' | 'ok' | 'err'; msg?: string }>({ kind: 'idle' });
  const [form, setForm] = useState(empty);

  const update = (k: keyof typeof empty) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus({ kind: 'sending' });
    const res = await sendFormToEmail(
      {
        'Parent/Guardian': form.parent,
        Relationship: form.relation,
        Email: form.email,
        Phone: form.phone,
        'Child Name': form.childName,
        'Child Age': form.age,
        'Applying For': form.level,
        Notes: form.notes
      },
      `Admissions enquiry — ${form.childName || form.parent || 'New applicant'}`
    );
    setStatus({ kind: res.ok ? 'ok' : 'err', msg: res.message });
  }

  const waLink = buildWhatsAppLink(
    `Hello Shekinah Admissions,\n\nParent: ${form.parent}\nPhone: ${form.phone}\nEmail: ${form.email}\nChild: ${form.childName} (age ${form.age})\nApplying for: ${form.level}\n\nNotes: ${form.notes || '(none)'}`
  );

  return (
    <>
      <PageHero
        eyebrow="Admissions"
        title={<>Apply to <span className="grad">Shekinah</span></>}
        subtitle="Start the journey today. Complete the form and our admissions team will reach out within 1–2 business days."
        image={GALLERY[1].src}
        compact
      />

      <section className="section">
        <div className="container apply-grid">
          <aside className="apply-side">
            <h3>What to expect</h3>
            <ol className="steps">
              <li><strong>Submit enquiry</strong><span>Fill the short form on this page.</span></li>
              <li><strong>Admissions call</strong><span>We confirm details and required documents.</span></li>
              <li><strong>Visit / assessment</strong><span>Tour the campus and meet the team.</span></li>
              <li><strong>Offer & enrollment</strong><span>Secure a place and receive your welcome pack.</span></li>
            </ol>
            <div className="info-card">
              <h4>Need help?</h4>
              <p>Talk to admissions directly:</p>
              <a href="tel:+2567037530793" className="btn btn-outline">+256 703 753 0793</a>
              <a href={buildWhatsAppLink('Hello, I would like to apply to Shekinah CIS.')}
                 target="_blank" rel="noopener noreferrer"
                 className="btn btn-primary mt-sm">
                WhatsApp Admissions
              </a>
            </div>
          </aside>

          <form className="contact-form" onSubmit={onSubmit}>
            <h2>Admissions Enquiry</h2>
            <div className="row">
              <label>
                <span>Parent / Guardian Name</span>
                <input required type="text" autoComplete="name" value={form.parent} onChange={update('parent')} />
              </label>
              <label>
                <span>Relationship to Child</span>
                <input type="text" placeholder="e.g. Mother" value={form.relation} onChange={update('relation')} />
              </label>
            </div>
            <div className="row">
              <label>
                <span>Email</span>
                <input required type="email" autoComplete="email" value={form.email} onChange={update('email')} />
              </label>
              <label>
                <span>Phone</span>
                <input required type="tel" autoComplete="tel" value={form.phone} onChange={update('phone')} />
              </label>
            </div>
            <label>
              <span>Child's Full Name</span>
              <input required type="text" value={form.childName} onChange={update('childName')} />
            </label>
            <div className="row">
              <label>
                <span>Child's Age</span>
                <input required type="number" min={2} max={20} value={form.age} onChange={update('age')} />
              </label>
              <label>
                <span>Applying for</span>
                <select required value={form.level} onChange={update('level')}>
                  <option value="" disabled>Select level</option>
                  {LEVELS.map((l) => <option key={l} value={l}>{l}</option>)}
                </select>
              </label>
            </div>
            <label>
              <span>Anything else we should know?</span>
              <textarea rows={4} value={form.notes} onChange={update('notes')} />
            </label>
            <div className="form-actions">
              <button type="submit" className="btn btn-primary" disabled={status.kind === 'sending'}>
                {status.kind === 'sending' ? 'Sending…' : 'Submit Application'}
              </button>
              <a className="btn btn-outline" href={waLink} target="_blank" rel="noopener noreferrer">
                Send via WhatsApp
              </a>
            </div>
            {status.kind === 'ok' && <p className="form-ok">{status.msg}</p>}
            {status.kind === 'err' && <p className="form-err">{status.msg}</p>}
          </form>
        </div>
      </section>
    </>
  );
}

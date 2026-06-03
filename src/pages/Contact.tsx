import { FormEvent, useState } from 'react';
import { PageHero } from '../components/PageHero';
import { GALLERY } from '../data/images';
import { buildWhatsAppLink, sendFormToEmail } from '../lib/contact';
import { useDocumentMeta } from '../lib/seo';

export function Contact() {
  useDocumentMeta({
    title: 'Contact Us — Shekinah Christian International School',
    description: 'Visit, call or message Shekinah CIS in Komamboga, Kampala. Phone, WhatsApp, email and Google Maps location for our Christian school.',
    path: '/contact'
  });
  const [status, setStatus] = useState<{ kind: 'idle' | 'sending' | 'ok' | 'err'; msg?: string }>({ kind: 'idle' });
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });

  const update = (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus({ kind: 'sending' });
    const res = await sendFormToEmail(
      {
        Name: form.name,
        Email: form.email,
        Phone: form.phone,
        Subject: form.subject || 'Website enquiry',
        Message: form.message
      },
      `Website enquiry — ${form.name || 'Visitor'}`
    );
    setStatus({ kind: res.ok ? 'ok' : 'err', msg: res.message });
  }

  const waLink = buildWhatsAppLink(
    `Hello Shekinah CIS,\n\nName: ${form.name || '(your name)'}\nEmail: ${form.email}\nPhone: ${form.phone}\n\n${form.message || 'I would like to enquire about...'}`
  );

  return (
    <>
      <PageHero
        eyebrow="Get in Touch"
        title={<>We'd love to <span className="grad">hear</span> from you</>}
        subtitle="Reach out for admissions, visits or general inquiries."
        image={GALLERY[7].src}
        compact
      />

      <section className="section">
        <div className="container contact-grid">
          <div className="contact-info">
            <div className="info-card">
              <h3>📍 Location</h3>
              <p>6 Miles off Gayaza Road, Komamboga, Kawempe Division, Kampala, Uganda</p>
              <p className="muted">Mon–Fri: 8:00 AM – 5:00 PM</p>
            </div>
            <div className="info-card">
              <h3>📞 Phone & WhatsApp</h3>
              <ul>
                <li><a href="tel:+256776824339">Director: +256 776 824 339</a></li>
                <li><a href="tel:+256760077780">Admin: +256 760 077 780</a></li>
                <li><a href="tel:+2567037530793">Admissions: +256 703 753 0793</a></li>
              </ul>
              <a href={buildWhatsAppLink('Hello Shekinah CIS, I would like to enquire.')}
                 target="_blank" rel="noopener noreferrer"
                 className="btn btn-outline mt-sm">
                Message on WhatsApp
              </a>
            </div>
            <div className="info-card">
              <h3>✉ Email</h3>
              <p><a href="mailto:principal.shekinahcis@gmail.com">principal.shekinahcis@gmail.com</a></p>
            </div>
          </div>

          <form className="contact-form" onSubmit={onSubmit}>
            <h2>Send us a message</h2>
            <label>
              <span>Full Name</span>
              <input required type="text" name="name" autoComplete="name" value={form.name} onChange={update('name')} />
            </label>
            <div className="row">
              <label>
                <span>Email</span>
                <input required type="email" name="email" autoComplete="email" value={form.email} onChange={update('email')} />
              </label>
              <label>
                <span>Phone</span>
                <input type="tel" name="phone" autoComplete="tel" value={form.phone} onChange={update('phone')} />
              </label>
            </div>
            <label>
              <span>Subject</span>
              <input type="text" name="subject" value={form.subject} onChange={update('subject')} />
            </label>
            <label>
              <span>Message</span>
              <textarea required name="message" rows={5} value={form.message} onChange={update('message')} />
            </label>
            <div className="form-actions">
              <button className="btn btn-primary" type="submit" disabled={status.kind === 'sending'}>
                {status.kind === 'sending' ? 'Sending…' : 'Send Email'}
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

      <section className="map-wrap" aria-label="Campus location map">
        <iframe
          title="Shekinah Christian International School location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.723712790723!2d32.58152207437777!3d0.39457069960156865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177db08ac3bbb49d%3A0xc66e67f6bbb0efb0!2sShekinah%20Christian%20International%20School!5e0!3m2!1sen!2sug!4v1780149608590!5m2!1sen!2sug"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </>
  );
}

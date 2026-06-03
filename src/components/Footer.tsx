import { Link } from 'react-router-dom';
import { LOGO } from '../data/images';
import { buildWhatsAppLink } from '../lib/contact';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <div className="footer-brand">
            <img src={LOGO} alt="Shekinah" />
            <strong>Shekinah CIS</strong>
          </div>
          <p className="muted">
            A school that teaches the heart, head and hands of the learner — set apart for Christ.
          </p>
        </div>

        <div>
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/why-choose-us">Why Choose Us</Link></li>
            <li><Link to="/academics">Academics</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/news">News & Updates</Link></li>
          </ul>
        </div>

        <div>
          <h4>Contact</h4>
          <ul className="contact-list">
            <li>📍 6 Miles off Gayaza Road, Komamboga, Kawempe Division, Kampala</li>
            <li>🕒 Mon–Fri: 8:00 AM – 5:00 PM</li>
            <li><a href="tel:+256776824339">Director: +256 776 824 339</a></li>
            <li><a href="tel:+256760077780">Admin: +256 760 077 780</a></li>
            <li><a href="tel:+2567037530793">Admissions: +256 703 753 0793</a></li>
            <li><a href="mailto:principal.shekinahcis@gmail.com">principal.shekinahcis@gmail.com</a></li>
          </ul>
        </div>

        <div>
          <h4>Visit Us</h4>
          <p className="muted">
            Come tour the campus and meet our staff. We'd love to show you around.
          </p>
          <Link to="/apply" className="btn btn-light">Enroll Your Child</Link>
        </div>
      </div>

      <div className="footer-whatsapp-row">
        <a
          className="footer-whatsapp"
          href={buildWhatsAppLink('Hello Shekinah CIS, I would like to enquire.')}
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg viewBox="0 0 32 32" width="20" height="20" aria-hidden focusable="false">
            <path fill="currentColor" d="M16.03 3C9.4 3 4 8.39 4 15.02c0 2.65.86 5.1 2.32 7.1L4 29l7.06-2.27a12.02 12.02 0 0 0 4.97 1.07c6.63 0 12.03-5.39 12.03-12.02C28.06 8.4 22.66 3 16.03 3Zm5.31 14.35c-.29-.15-1.73-.85-2-.95-.27-.1-.46-.15-.66.15-.2.29-.76.95-.94 1.14-.17.2-.35.22-.64.07-.29-.15-1.23-.45-2.34-1.45a8.7 8.7 0 0 1-1.61-2c-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.2-.29.3-.49.1-.2.05-.37-.02-.51-.07-.15-.66-1.6-.91-2.19-.24-.57-.49-.49-.66-.5h-.56c-.2 0-.51.07-.78.37-.27.29-1.02 1-1.02 2.44 0 1.44 1.05 2.83 1.2 3.02.15.2 2.07 3.16 5 4.43.7.3 1.24.48 1.67.62.7.22 1.34.19 1.84.12.56-.08 1.73-.71 1.97-1.4.24-.69.24-1.28.17-1.4-.07-.12-.27-.2-.56-.34Z" />
          </svg>
          Chat with us on WhatsApp
        </a>
      </div>

      <div className="footer-bottom">
        <span>© {year} Shekinah Christian International School. All rights reserved.</span>
        <span className="footer-links">
          <Link to="/contact">Contact</Link>
          <Link to="/apply">Admissions</Link>
        </span>
      </div>
    </footer>
  );
}

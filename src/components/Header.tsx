import { NavLink, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { LOGO } from '../data/images';

const NAV = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/why-choose-us', label: 'Why Choose Us' },
  { to: '/academics', label: 'Academics' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/news', label: 'News' },
  { to: '/contact', label: 'Contact' }
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <div className="topstrip">
        <span>📍 6 Miles off Gayaza Road, Komamboga, Kampala</span>
        <span className="sep" />
        <span>📞 +256 760 077 780</span>
        <span className="sep" />
        <span>✉ principal.shekinahcis@gmail.com</span>
      </div>
      <header className={'site-header' + (scrolled ? ' is-scrolled' : '')}>
        <Link to="/" className="logo-link" onClick={() => setOpen(false)}>
          <img src={LOGO} alt="Shekinah Christian International School" />
          <span className="logo-text">
            <strong>Shekinah</strong>
            <small>Christian International School</small>
          </span>
        </Link>
        <button
          className={'menu-btn' + (open ? ' is-open' : '')}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span /><span /><span />
        </button>
        <nav className={'main-nav' + (open ? ' is-open' : '')}>
          {NAV.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              end={n.to === '/'}
              className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}
              onClick={() => setOpen(false)}
            >
              {n.label}
            </NavLink>
          ))}
          <Link to="/apply" className="nav-cta" onClick={() => setOpen(false)}>
            Apply Now
          </Link>
        </nav>
      </header>
    </>
  );
}

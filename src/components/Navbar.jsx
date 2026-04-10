// src/components/Navbar.jsx
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'À propos', href: '#apropos' },
  { label: 'Services', href: '#services' },
  { label: 'Compétences', href: '#competences' },
  { label: 'Réalisations', href: '#projets' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      background: scrolled ? 'rgba(8,15,26,0.97)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(26,111,196,0.2)' : 'none',
      transition: 'all 0.35s ease',
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 24px',
        height: scrolled ? '68px' : '80px',
        transition: 'height 0.35s ease',
        boxSizing: 'border-box',
      }}>

        {/* Logo */}
        <a href="#accueil" style={{
          display: 'flex',
          alignItems: 'center',
          height: '100%',
          flexShrink: 0,
        }}>
          <img
            src="/images/ecis.png"
            alt="ECIS Services"
            style={{
              height: scrolled ? '38px' : '48px',
              width: 'auto',
              objectFit: 'contain',
              display: 'block',
              transition: 'height 0.35s ease',
            }}
          />
        </a>

        {/* Desktop Nav */}
        <ul style={{
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
          height: '100%',
          margin: 0,
          padding: 0,
          listStyle: 'none',
        }} className="desktop-nav">
          {navLinks.map(link => (
            <li key={link.href} style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
              <a href={link.href} style={{
                color: 'rgba(255,255,255,0.75)',
                padding: '8px 14px',
                borderRadius: '6px',
                fontFamily: 'Barlow Condensed, sans-serif',
                fontWeight: 600,
                fontSize: '14px',
                letterSpacing: '0.5px',
                textTransform: 'uppercase',
                transition: 'all 0.2s',
                display: 'flex',
                alignItems: 'center',
                height: 'fit-content',
                lineHeight: 1,
              }}
                onMouseEnter={e => { e.target.style.color = '#fff'; e.target.style.background = 'rgba(26,111,196,0.2)'; }}
                onMouseLeave={e => { e.target.style.color = 'rgba(255,255,255,0.75)'; e.target.style.background = 'transparent'; }}
              >{link.label}</a>
            </li>
          ))}
          <li style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
            <a href="#contact" className="btn-primary" style={{
              marginLeft: '8px',
              padding: '10px 24px',
              fontSize: '13px',
              display: 'flex',
              alignItems: 'center',
              lineHeight: 1,
            }}>
              Contactez-nous
            </a>
          </li>
        </ul>

        {/* Mobile Toggle */}
        <button onClick={() => setOpen(!open)} style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          color: '#fff',
          display: 'none',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '4px',
          height: '100%',
        }} className="mobile-toggle">
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div style={{
          background: 'rgba(8,15,26,0.99)',
          borderTop: '1px solid rgba(26,111,196,0.2)',
          padding: '16px 24px 24px',
        }}>
          {navLinks.map(link => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)} style={{
              display: 'flex',
              alignItems: 'center',
              color: 'rgba(255,255,255,0.8)',
              padding: '12px 0',
              fontFamily: 'Barlow Condensed, sans-serif',
              fontWeight: 600,
              fontSize: '16px',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              borderBottom: '1px solid rgba(255,255,255,0.07)',
            }}>{link.label}</a>
          ))}
          <a href="#contact" className="btn-primary" onClick={() => setOpen(false)}
            style={{ marginTop: '16px', display: 'flex', width: '100%', justifyContent: 'center' }}>
            Contactez-nous
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
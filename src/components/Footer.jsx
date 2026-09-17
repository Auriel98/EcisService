// src/components/Footer.jsx

const services = [
  'Instrumentation & Automatismes',
  'Électricité Industrielle',
  'Chaudronnerie & Tuyauterie',
  'Maintenance Industrielle',
  'Assistance Technique',
];

const quicklinks = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'À propos', href: '#apropos' },
  { label: 'Services', href: '#services' },
  { label: 'Compétences', href: '#competences' },
  { label: 'Réalisations', href: '#projets' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer style={{ background: '#080f1a', borderTop: '1px solid rgba(26,111,196,0.2)' }}>

      {/* CTA banner */}
      <div style={{ background: 'linear-gradient(135deg, #1a6fc4, #0d3f78)', padding: '48px 24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}>
          <div>
            <h3 style={{ fontWeight: 800, fontSize: '1.8rem', color: '#fff', marginBottom: '6px' }}>
              Prêt à démarrer votre projet ?
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '15px' }}>
              Contactez-nous pour un devis gratuit et personnalisé.
            </p>
          </div>
          <a href="#contact" style={{
            padding: '14px 32px', background: '#fff', color: '#1a6fc4',
            borderRadius: '8px', fontWeight: 800, fontSize: '15px',
            textDecoration: 'none', textTransform: 'uppercase',
          }}>
            Demander un devis →
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '64px 24px 40px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '40px',
          marginBottom: '48px',
        }}>

          {/* Brand */}
          <div>
            <div style={{ fontWeight: 800, fontSize: '18px', color: '#fff', marginBottom: '8px' }}>
              E.C.I.S <span style={{ color: '#2589e8' }}>Services</span>
            </div>
            <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.4)', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '16px' }}>
              Étude · Conseils · Industriels
            </div>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '13px', lineHeight: 1.75 }}>
              Société spécialisée en instrumentation, automatismes, électricité industrielle, chaudronnerie et tuyauterie au Gabon.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 style={{ color: '#fff', fontSize: '13px', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px' }}>
              Navigation
            </h4>
            {quicklinks.map(l => (
              <a key={l.label} href={l.href} style={{
                display: 'block', color: 'rgba(255,255,255,0.5)',
                fontSize: '14px', marginBottom: '10px', textDecoration: 'none',
              }}>
                › {l.label}
              </a>
            ))}
          </div>

          {/* Services */}
          <div>
            <h4 style={{ color: '#fff', fontSize: '13px', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px' }}>
              Services
            </h4>
            {services.map(s => (
              <a key={s} href="#services" style={{
                display: 'block', color: 'rgba(255,255,255,0.5)',
                fontSize: '13px', marginBottom: '10px', textDecoration: 'none', lineHeight: 1.4,
              }}>
                › {s}
              </a>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ color: '#fff', fontSize: '13px', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px' }}>
              Informations
            </h4>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '13px', lineHeight: 1.8 }}>
              Cité Shell<br />
              Port-Gentil, Gabon — BP 931<br /><br />
              Lun–Ven : 09h–17h<br />
              Sam : 10h–16h<br /><br />
              ecis23gabon@gmail.com<br />
              +241 65 685 283<br />
              +241 77 322 900
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: '28px',
          display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px',
        }}>
          <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '13px' }}>
            © {new Date().getFullYear()} E.C.I.S Services — Tous droits réservés.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '13px' }}>
            Port-Gentil, Gabon
          </p>
        </div>
      </div>
    </footer>
  );
}
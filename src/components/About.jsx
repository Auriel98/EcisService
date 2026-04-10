// src/components/About.jsx
import { CheckCircle, ArrowRight, Shield, Target, TrendingUp } from 'lucide-react';

const values = [
  { icon: Shield, title: 'Fiabilité', desc: 'Interventions sécurisées respectant les standards les plus stricts.' },
  { icon: Target, title: 'Précision', desc: 'Solutions techniques adaptées à chaque environnement industriel.' },
  { icon: TrendingUp, title: 'Innovation', desc: 'Technologies avancées pour optimiser vos performances.' },
];

const points = [
  'Maintenance, travaux neufs et assistance technique',
  'Secteurs : énergie, infrastructure, pétrole & gaz',
  'Savoir-faire reconnu auprès des grandes entreprises',
  'Interventions sur site et accompagnement complet',
];

export default function About() {
  return (
    <section id="apropos" className="section" style={{ background: '#fff' }}>
      <div className="container">
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: '80px', alignItems: 'center',
        }} className="about-grid">

          {/* Left visual */}
          <div style={{ position: 'relative' }}>
            <div style={{
              background: `linear-gradient(135deg, #0d1b2e, #132240)`,
              borderRadius: '20px', padding: '48px',
              position: 'relative', overflow: 'hidden',
            }}>
              {/* pattern */}
              <div style={{
                position: 'absolute', inset: 0,
                backgroundImage: 'linear-gradient(rgba(26,111,196,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(26,111,196,0.08) 1px, transparent 1px)',
                backgroundSize: '30px 30px',
              }} />
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{
                  fontFamily: 'Barlow Condensed, sans-serif',
                  fontSize: '13px', fontWeight: 700, letterSpacing: '3px',
                  color: '#2589e8', textTransform: 'uppercase', marginBottom: '20px',
                }}>Notre engagement</div>
                <h3 style={{
                  fontFamily: 'Barlow Condensed, sans-serif',
                  fontSize: '2.2rem', fontWeight: 800, color: '#fff',
                  lineHeight: 1.2, marginBottom: '32px',
                }}>Offrir des services de haute qualité</h3>

                {values.map(({ icon: Icon, title, desc }) => (
                  <div key={title} style={{
                    display: 'flex', gap: '16px', marginBottom: '24px',
                    padding: '16px', borderRadius: '10px',
                    background: 'rgba(26,111,196,0.12)',
                    border: '1px solid rgba(26,111,196,0.2)',
                  }}>
                    <div style={{
                      width: '40px', height: '40px', borderRadius: '8px',
                      background: 'rgba(26,111,196,0.25)', flexShrink: 0,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <Icon size={18} color="#2589e8" />
                    </div>
                    <div>
                      <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700, fontSize: '16px', color: '#fff', marginBottom: '4px' }}>{title}</div>
                      <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.5 }}>{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating badge */}
            <div style={{
              position: 'absolute', bottom: '-20px', right: '-20px',
              background: '#1a6fc4', borderRadius: '12px', padding: '20px 24px',
              boxShadow: '0 8px 32px rgba(26,111,196,0.4)',
              textAlign: 'center',
            }}>
              <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800, fontSize: '2rem', color: '#fff' }}>10+</div>
              <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.75)', letterSpacing: '0.5px' }}>ans d'expertise</div>
            </div>
          </div>

          {/* Right text */}
          <div>
            <span className="section-label">Qui sommes-nous</span>
            <h2 className="section-title">Étude Conseil Industriel Services</h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '24px' }}>
              Société de services et de conseil en instrumentation, contrôle commande et automatisation industrielle. Forts de notre savoir-faire, nous intervenons auprès des grandes entreprises du secteur industriel pour offrir des solutions technologiques adaptées et innovantes.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '32px' }}>
              Nous sommes spécialisés dans la maintenance, les travaux neufs, et l'assistance technique dans des secteurs stratégiques tels que l'énergie, l'infrastructure et le pétrole.
            </p>

            <ul style={{ marginBottom: '36px' }}>
              {points.map(pt => (
                <li key={pt} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', marginBottom: '12px' }}>
                  <CheckCircle size={18} color="#1a6fc4" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ color: 'var(--text-secondary)', fontSize: '15px' }}>{pt}</span>
                </li>
              ))}
            </ul>

            <a href="#services" className="btn-primary">
              Nos services <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}
// src/components/Technologies.jsx
import { Cpu, Settings, Shield } from 'lucide-react';

const brands = [
  { name: 'EMERSON', image: '/images/emerson.png' },
  { name: 'Honeywell', image: '/images/honeywell.png' },
  { name: 'ABB', image: '/images/abb.png' },
  { name: 'SIEMENS', image: '/images/siemens.png' },
  { name: 'Schneider Electric', image: '/images/schneider_electric.png' },
  { name: 'Scully', image: '/images/scully.png' },
  { name: 'Triconex', image: '/images/triconex.jpg' },
  { name: 'Rockwell Automation', image: '/images/rockwell_automation.png' },
];

const features = [
  { icon: Cpu, title: 'Technologies de Pointe', desc: 'Nous utilisons les équipements les plus fiables du marché industriel mondial.' },
  { icon: Settings, title: 'Expertise Multi-Marques', desc: 'Maîtrise complète des systèmes des principaux fabricants industriels.' },
  { icon: Shield, title: 'Qualité & Sécurité', desc: 'Normes rigoureuses à chaque étape pour garantir la sûreté de vos installations.' },
];

export default function Technologies() {
  return (
    <section style={{
      background: '#fff',
      padding: '96px 0',
      position: 'relative',
      overflow: 'hidden',
    }}>

      {/* Décoration douce en arrière-plan */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '4px',
        background: 'linear-gradient(90deg, #1a6fc4, #2589e8, #e8a820)',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <span style={{
            fontFamily: 'Barlow Condensed, sans-serif', fontSize: '12px',
            fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', color: '#2589e8',
            marginBottom: '12px', display: 'block',
          }}>Partenaires Technologiques</span>
          <h2 style={{
            fontFamily: 'Barlow Condensed, sans-serif', fontSize: 'clamp(2rem, 4vw, 2.8rem)',
            fontWeight: 800, color: 'var(--navy)', marginBottom: '16px',
          }}>Technologies de Pointe</h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto', lineHeight: 1.7 }}>
            Chez E.C.I.S Services, nous utilisons des technologies avancées pour garantir la qualité et la sécurité de vos projets industriels.
          </p>
        </div>

        {/* Feature cards */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '24px', marginBottom: '64px',
        }} className="tech-features">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} style={{
              background: '#f8fafc',
              border: '1px solid rgba(13,27,46,0.08)',
              borderRadius: '14px', padding: '28px', textAlign: 'center',
              borderTop: '3px solid #1a6fc4',
              transition: 'box-shadow 0.2s, transform 0.2s',
            }}
              onMouseEnter={e => {
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(26,111,196,0.12)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'none';
              }}
            >
              <div style={{
                width: '52px', height: '52px', borderRadius: '12px',
                background: 'rgba(26,111,196,0.08)', margin: '0 auto 16px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <Icon size={24} color="#1a6fc4" />
              </div>
              <h4 style={{
                fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700,
                fontSize: '1.15rem', color: 'var(--navy)', marginBottom: '8px',
              }}>{title}</h4>
              <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{desc}</p>
            </div>
          ))}
        </div>

        {/* Brand logos strip */}
        <div style={{
          background: '#f8fafc',
          border: '1px solid rgba(13,27,46,0.08)',
          borderRadius: '14px', padding: '32px 40px',
        }}>
          <p style={{
            textAlign: 'center', fontSize: '12px', letterSpacing: '2px',
            textTransform: 'uppercase', color: 'rgba(13,27,46,0.4)',
            marginBottom: '28px', fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 600,
          }}>Nos marques partenaires</p>

          <div style={{
            display: 'flex', flexWrap: 'wrap',
            justifyContent: 'center', gap: '16px',
          }}>
            {brands.map(({ name, image }) => (
              <div key={name} style={{
                padding: '14px 24px',
                background: '#fff',
                border: '1px solid rgba(13,27,46,0.08)',
                borderRadius: '10px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                width: '150px', height: '72px',
                transition: 'all 0.2s',
                cursor: 'default',
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(26,111,196,0.4)';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(13,27,46,0.1)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(13,27,46,0.08)';
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <img
                  src={image}
                  alt={name}
                  style={{
                    maxWidth: '100%',
                    maxHeight: '44px',
                    objectFit: 'contain',
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .tech-features { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
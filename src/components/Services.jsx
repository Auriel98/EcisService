// src/components/Services.jsx
import { ArrowRight, ChevronLeft, ChevronRight as ChevronRightIcon } from 'lucide-react';
import { useState } from 'react';

const EtalonnageCard = ({ color }) => {
  const images = [
    '/images/vanne.jpeg',
    '/images/convertisseur.jpeg',
    '/images/etalonnage.jpeg',
  ];
  const [current, setCurrent] = useState(0);

  const prev = (e) => {
    e.stopPropagation();
    setCurrent(i => (i - 1 + images.length) % images.length);
  };
  const next = (e) => {
    e.stopPropagation();
    setCurrent(i => (i + 1) % images.length);
  };

  return (
    <div style={{ position: 'relative', height: '280px', overflow: 'hidden' }}>
      <img
        src={images[current]}
        alt="Étalonnage & Calibrage"
        style={{
          width: '100%', height: '100%',
          objectFit: 'cover', display: 'block',
          transition: 'opacity 0.4s ease',
        }}
      />
      <button onClick={prev} style={{
        position: 'absolute', left: '8px', top: '50%', transform: 'translateY(-50%)',
        background: 'rgba(0,0,0,0.45)', border: 'none', borderRadius: '50%',
        width: '28px', height: '28px', cursor: 'pointer',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: '#fff',
      }}>
        <ChevronLeft size={16} />
      </button>
      <button onClick={next} style={{
        position: 'absolute', right: '8px', top: '50%', transform: 'translateY(-50%)',
        background: 'rgba(0,0,0,0.45)', border: 'none', borderRadius: '50%',
        width: '28px', height: '28px', cursor: 'pointer',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: '#fff',
      }}>
        <ChevronRightIcon size={16} />
      </button>
      <div style={{
        position: 'absolute', bottom: '10px', left: '50%', transform: 'translateX(-50%)',
        display: 'flex', gap: '6px',
      }}>
        {images.map((_, i) => (
          <div key={i} onClick={(e) => { e.stopPropagation(); setCurrent(i); }} style={{
            width: i === current ? '18px' : '6px', height: '6px',
            borderRadius: '3px', background: i === current ? '#fff' : 'rgba(255,255,255,0.5)',
            cursor: 'pointer', transition: 'all 0.3s',
          }} />
        ))}
      </div>
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        height: '4px', background: color,
      }} />
    </div>
  );
};

const services = [
  {
    image: '/images/automatisme.webp',
    title: 'Instrumentation & Automatismes',
    desc: "Nos experts assurent la maintenance, la programmation et l'optimisation des systèmes de contrôle pour garantir la performance de vos installations.",
    points: [
      'Maintenance préventive et curative',
      "Programmation et configuration d'automates",
      "Détection et extinction automatique d'incendies",
      "Contrôle d'accès et télésurveillance",
      "Conception et câblage d'armoires électriques",
      'Optimisation des boucles de régulation',
    ],
    color: '#1a6fc4',
  },
  {
    image: '/images/elec.jpeg',
    title: 'Électricité Industrielle',
    desc: 'Nous concevons, installons et entretenons vos infrastructures électriques industrielles avec le plus haut niveau de sécurité et de fiabilité.',
    points: [
      'Conception et maintenance des schémas électriques',
      'Maintenance des sous-stations et groupes électrogènes',
      'Câblage des armoires et automates',
      'Réparations haute tension',
    ],
    color: '#e8a820',
  },
  {
    image: '/images/tuyauterie.jpeg',
    title: 'Chaudronnerie & Tuyauterie',
    desc: 'Nous supervisons et réalisons des projets de chaudronnerie et tuyauterie, assurant la qualité des travaux de conception et de maintenance.',
    points: [
      'Supervision et réalisation de travaux',
      'Mise à jour des P&ID/PCF',
      'Assistance technique et supervision de chantiers',
    ],
    color: '#2589e8',
  },
  {
    isCarousel: true,
    title: 'Étalonnage & Calibrage',
    desc: "Nous assurons le reconditionnement, l'étalonnage et le calibrage de vos équipements pneumatiques et convertisseurs pour garantir leur fiabilité et leur conformité aux normes industrielles.",
    points: [
      'Reconditionnement vanne pneumatique',
      'Étalonnage convertisseur de vitesse',
      'Étalonnage et calibrage vanne pneumatique',
      "Certificat d'étalonnage fourni",
    ],
    color: '#1a6fc4',
  },
];

export default function Services() {
  return (
    <section id="services" className="section" style={{ background: 'var(--gray-light)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <span className="section-label">Nos offres</span>
          <h2 className="section-title">Services Industriels</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Des solutions techniques complètes et innovantes pour accompagner vos projets industriels de la conception à la réalisation.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '28px',
        }} className="services-grid">
          {services.map(({ image, title, desc, points, color, isCarousel }) => (
            <div key={title} style={{
              background: '#fff',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 2px 16px rgba(13,27,46,0.07)',
              border: '1px solid rgba(13,27,46,0.06)',
              transition: 'transform 0.3s, box-shadow 0.3s',
              cursor: 'default',
            }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 16px 48px rgba(13,27,46,0.14)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = '0 2px 16px rgba(13,27,46,0.07)';
              }}
            >
              {isCarousel ? (
                <EtalonnageCard color={color} />
              ) : (
                <div style={{ position: 'relative', height: '280px', overflow: 'hidden' }}>
                  <img
                    src={image}
                    alt={title}
                    style={{
                      width: '100%', height: '100%',
                      objectFit: 'cover', display: 'block',
                      transition: 'transform 0.4s ease',
                    }}
                    onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                  />
                  <div style={{
                    position: 'absolute', bottom: 0, left: 0, right: 0,
                    height: '4px', background: color,
                  }} />
                </div>
              )}

              <div style={{ padding: '28px' }}>
                <h3 style={{
                  fontFamily: 'Barlow Condensed, sans-serif',
                  fontSize: '1.3rem', fontWeight: 800, color: 'var(--navy)',
                  marginBottom: '12px', lineHeight: 1.2,
                }}>{title}</h3>

                <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: 1.7, marginBottom: '20px' }}>
                  {desc}
                </p>

                <div style={{ borderTop: '1px solid rgba(13,27,46,0.07)', paddingTop: '16px' }}>
                  {points.map(pt => (
                    <div key={pt} style={{
                      display: 'flex', gap: '10px', alignItems: 'flex-start',
                      marginBottom: '8px',
                    }}>
                      <div style={{
                        width: '5px', height: '5px', borderRadius: '50%',
                        background: color, flexShrink: 0, marginTop: '7px',
                      }} />
                      <span style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>{pt}</span>
                    </div>
                  ))}
                </div>

                <a href="#contact" style={{
                  display: 'inline-flex', alignItems: 'center', gap: '6px',
                  marginTop: '20px', color: color,
                  fontFamily: 'Barlow Condensed, sans-serif',
                  fontWeight: 700, fontSize: '13px', letterSpacing: '0.5px',
                  textTransform: 'uppercase', textDecoration: 'none',
                  transition: 'gap 0.2s',
                }}
                  onMouseEnter={e => e.currentTarget.style.gap = '10px'}
                  onMouseLeave={e => e.currentTarget.style.gap = '6px'}
                >
                  En savoir plus <ArrowRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .services-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
// src/components/Competences.jsx
import { Activity, Zap, Wrench, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const tabs = [
  {
    id: 'instrumentation',
    icon: Activity,
    title: 'Instrumentation & Automatismes',
    color: '#1a6fc4',
    desc: 'Nos experts en instrumentation et automatismes assurent la maintenance, la programmation et l\'optimisation des systèmes de contrôle.',
    items: [
      'Maintenance préventive et curative',
      'Programmation et configuration de systèmes et automates',
      'Détection et extinction automatique des incendies',
      'Contrôle d\'accès et télésurveillance',
      'Conception et câblage d\'armoires électriques',
      'Optimisation et numérisation des boucles de régulation',
    ],
  },
  {
    id: 'electricite',
    icon: Zap,
    title: 'Électricité Industrielle',
    color: '#e8a820',
    desc: 'Nous concevons, installons et entretenons vos infrastructures électriques industrielles avec fiabilité et sécurité.',
    items: [
      'Conception et maintenance des schémas électriques',
      'Maintenance des sous-stations électriques et groupes électrogènes',
      'Câblage des armoires et automates',
      'Réparations haute tension : raccordement et têtes de câbles',
    ],
  },
  {
    id: 'chaudronnerie',
    icon: Wrench,
    title: 'Chaudronnerie & Tuyauterie',
    color: '#2589e8',
    desc: 'Nous supervisons et réalisons des projets de chaudronnerie et tuyauterie, assurant la qualité des travaux de conception et de maintenance.',
    items: [
      'Supervision et réalisation de travaux en chaudronnerie et tuyauterie',
      'Mise à jour des P&ID/PCF',
      'Assistance technique et supervision de chantiers',
    ],
  },
];

export default function Competences() {
  const [active, setActive] = useState('instrumentation');
  const current = tabs.find(t => t.id === active);

  return (
    <section id="competences" className="section" style={{ background: '#fff' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <span className="section-label">Domaines de compétence</span>
          <h2 className="section-title">Des compétences éprouvées</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Nous maîtrisons l'ensemble des domaines clés de l'instrumentation, de l'automatisation et de l'électricité industrielle.
          </p>
        </div>

        {/* Tab buttons */}
        <div style={{
          display: 'flex', gap: '12px', marginBottom: '40px', flexWrap: 'wrap',
        }}>
          {tabs.map(tab => {
            const Icon = tab.icon;
            const isActive = active === tab.id;
            return (
              <button key={tab.id} onClick={() => setActive(tab.id)} style={{
                display: 'flex', alignItems: 'center', gap: '10px',
                padding: '12px 24px', borderRadius: '10px', cursor: 'pointer',
                border: isActive ? `2px solid ${tab.color}` : '2px solid rgba(13,27,46,0.1)',
                background: isActive ? `${tab.color}12` : 'transparent',
                transition: 'all 0.25s',
                fontFamily: 'Barlow Condensed, sans-serif',
                fontWeight: 700, fontSize: '15px',
                color: isActive ? tab.color : 'var(--gray-dark)',
                letterSpacing: '0.3px',
              }}>
                <Icon size={18} color={isActive ? tab.color : 'var(--gray-dark)'} />
                {tab.title}
              </button>
            );
          })}
        </div>

        {/* Content */}
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: '48px', alignItems: 'center',
          background: 'var(--gray-light)', borderRadius: '20px',
          padding: '48px',
        }} className="comp-grid">
          <div>
            <div style={{
              width: '60px', height: '60px', borderRadius: '14px',
              background: `${current.color}15`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              marginBottom: '20px',
            }}>
              <current.icon size={28} color={current.color} />
            </div>
            <h3 style={{
              fontFamily: 'Barlow Condensed, sans-serif',
              fontSize: '1.8rem', fontWeight: 800,
              color: 'var(--navy)', marginBottom: '16px',
            }}>{current.title}</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '28px' }}>
              {current.desc}
            </p>
            <a href="#contact" className="btn-primary" style={{ background: current.color }}>
              Demander un devis
            </a>
          </div>

          <div>
            {current.items.map(item => (
              <div key={item} style={{
                display: 'flex', gap: '12px', alignItems: 'flex-start',
                padding: '14px 0',
                borderBottom: '1px solid rgba(13,27,46,0.08)',
              }}>
                <ChevronRight size={18} color={current.color} style={{ flexShrink: 0, marginTop: '1px' }} />
                <span style={{ color: 'var(--text-secondary)', fontSize: '15px', lineHeight: 1.5 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .comp-grid { grid-template-columns: 1fr !important; padding: 28px !important; }
        }
      `}</style>
    </section>
  );
}
// src/components/Competences.jsx
import { Activity, Zap, Wrench, ChevronRight, SlidersHorizontal } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const AUTOPLAY_DURATION = 5000;

const tabs = [
  {
    id: 'instrumentation',
    icon: Activity,
    title: 'Instrumentation & Automatismes',
    shortTitle: 'Instrumentation',
    subtitle: '& Automatismes',
    color: '#1a6fc4',
    desc: "Nos experts en instrumentation et automatismes assurent la maintenance, la programmation et l'optimisation des systèmes de contrôle.",
    items: [
      'Maintenance préventive et curative',
      "Programmation et configuration de systèmes et automates",
      "Détection et extinction automatique des incendies",
      "Contrôle d'accès et télésurveillance",
      "Conception et câblage d'armoires électriques",
      'Optimisation et numérisation des boucles de régulation',
    ],
  },
  {
    id: 'electricite',
    icon: Zap,
    title: 'Électricité Industrielle',
    shortTitle: 'Électricité',
    subtitle: 'Industrielle',
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
    shortTitle: 'Chaudronnerie',
    subtitle: '& Tuyauterie',
    color: '#2589e8',
    desc: 'Nous supervisons et réalisons des projets de chaudronnerie et tuyauterie, assurant la qualité des travaux de conception et de maintenance.',
    items: [
      'Supervision et réalisation de travaux en chaudronnerie et tuyauterie',
      'Mise à jour des P&ID/PCF',
      'Assistance technique et supervision de chantiers',
    ],
  },
  {
    id: 'etalonnage',
    icon: SlidersHorizontal,
    title: 'Étalonnage & Calibrage',
    shortTitle: 'Étalonnage',
    subtitle: '& Calibrage',
    color: '#1a6fc4',
    desc: "Nous assurons le reconditionnement, l'étalonnage et le calibrage de vos équipements pneumatiques et convertisseurs pour garantir leur fiabilité et leur conformité aux normes industrielles.",
    items: [
      'Reconditionnement vanne pneumatique : démontage, remplacement des pièces usées et remontage selon les normes constructeur',
      "Tests de performance et d'étanchéité après reconditionnement",
      'Étalonnage convertisseur de vitesse : vérification, ajustement des paramètres et calibrage selon les normes en vigueur',
      'Contrôle de la linéarité, de la précision et rapport de conformité',
      'Étalonnage et calibrage vanne pneumatique : calibrage de la course, du débit et des signaux de commande',
      "Tests d'étanchéité, de pression et certificat d'étalonnage fourni",
    ],
  },
];

export default function Competences() {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef(null);
  const progressRef = useRef(null);
  const startTimeRef = useRef(null);

  const current = tabs[active];

  const goTo = (index) => {
    setActive(index);
    setProgress(0);
    startTimeRef.current = Date.now();
  };

  useEffect(() => {
    if (paused) return;

    startTimeRef.current = Date.now();

    progressRef.current = setInterval(() => {
      const elapsed = Date.now() - startTimeRef.current;
      const pct = Math.min((elapsed / AUTOPLAY_DURATION) * 100, 100);
      setProgress(pct);
    }, 30);

    intervalRef.current = setTimeout(() => {
      setActive(i => (i + 1) % tabs.length);
      setProgress(0);
      startTimeRef.current = Date.now();
    }, AUTOPLAY_DURATION);

    return () => {
      clearInterval(progressRef.current);
      clearTimeout(intervalRef.current);
    };
  }, [active, paused]);

  return (
    <section
      id="competences"
      className="section"
      style={{ background: '#fff' }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => { setPaused(false); startTimeRef.current = Date.now(); }}
    >
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <span className="section-label">Domaines de compétence</span>
          <h2 className="section-title">Des compétences éprouvées</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Nous maîtrisons l'ensemble des domaines clés de l'instrumentation, de l'automatisation et de l'électricité industrielle.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: '24px', alignItems: 'start' }} className="comp-grid">

          {/* Sidebar tabs */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {tabs.map((tab, i) => {
              const Icon = tab.icon;
              const isActive = active === i;
              return (
                <button
                  key={tab.id}
                  onClick={() => goTo(i)}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '14px',
                    padding: '14px 16px',
                    borderRadius: '12px',
                    border: isActive ? `2px solid ${tab.color}` : '1px solid rgba(13,27,46,0.08)',
                    background: isActive ? `${tab.color}08` : '#fff',
                    cursor: 'pointer',
                    textAlign: 'left',
                    transition: 'all 0.25s',
                    position: 'relative',
                    overflow: 'hidden',
                    width: '100%',
                  }}
                >
                  {/* Barre de progression en bas */}
                  {isActive && (
                    <div style={{
                      position: 'absolute', bottom: 0, left: 0,
                      height: '3px', background: tab.color,
                      width: `${progress}%`,
                      transition: 'width 0.03s linear',
                      borderRadius: '0 2px 0 0',
                    }} />
                  )}

                  <div style={{
                    width: '36px', height: '36px', borderRadius: '8px', flexShrink: 0,
                    background: isActive ? `${tab.color}18` : 'rgba(13,27,46,0.05)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    transition: 'background 0.25s',
                  }}>
                    <Icon size={18} color={isActive ? tab.color : '#888'} />
                  </div>

                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p style={{
                      margin: 0, fontFamily: 'Barlow Condensed, sans-serif',
                      fontWeight: 700, fontSize: '14px', lineHeight: 1.2,
                      color: isActive ? tab.color : 'var(--navy)',
                      transition: 'color 0.25s',
                    }}>
                      {tab.shortTitle}
                    </p>
                    <p style={{
                      margin: 0, fontSize: '12px',
                      color: isActive ? tab.color : 'var(--text-secondary)',
                      opacity: isActive ? 0.75 : 1,
                    }}>
                      {tab.subtitle}
                    </p>
                  </div>

                  {isActive && (
                    <div style={{
                      width: '7px', height: '7px', borderRadius: '50%',
                      background: tab.color, flexShrink: 0,
                    }} />
                  )}
                </button>
              );
            })}

            <p style={{
              fontSize: '11px', color: 'var(--text-secondary)', textAlign: 'center',
              margin: '6px 0 0', letterSpacing: '0.3px', opacity: 0.7,
            }}>
              Défilement auto · Cliquez pour explorer
            </p>
          </div>

          {/* Contenu */}
          <div style={{
            background: 'var(--gray-light)', borderRadius: '20px',
            padding: '40px', transition: 'all 0.3s',
          }}>
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
              color: 'var(--navy)', marginBottom: '12px',
            }}>
              {current.title}
            </h3>

            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '28px' }}>
              {current.desc}
            </p>

            <div style={{ marginBottom: '28px' }}>
              {current.items.map(item => (
                <div key={item} style={{
                  display: 'flex', gap: '12px', alignItems: 'flex-start',
                  padding: '12px 0',
                  borderBottom: '1px solid rgba(13,27,46,0.07)',
                }}>
                  <ChevronRight size={18} color={current.color} style={{ flexShrink: 0, marginTop: '1px' }} />
                  <span style={{ color: 'var(--text-secondary)', fontSize: '15px', lineHeight: 1.5 }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <a href="#contact" className="btn-primary" style={{ background: current.color }}>
              Demander un devis
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .comp-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
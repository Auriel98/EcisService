// src/components/Competences.jsx
import { Activity, Zap, Wrench, SlidersHorizontal, ChevronDown, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const tabs = [
  {
    id: 'instrumentation',
    icon: Activity,
    title: 'Instrumentation & Automatismes',
    color: '#1a6fc4',
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
    color: '#e8a820',
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
    color: '#1a6fc4',
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
  const [openId, setOpenId] = useState('instrumentation');

  const toggle = (id) => setOpenId(prev => (prev === id ? null : id));

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

        <div style={{
          border: '1px solid rgba(13,27,46,0.09)',
          borderRadius: '20px',
          overflow: 'hidden',
          boxShadow: '0 2px 16px rgba(13,27,46,0.06)',
        }}>
          {tabs.map((tab, index) => {
            const Icon = tab.icon;
            const isOpen = openId === tab.id;
            const isLast = index === tabs.length - 1;

            return (
              <div
                key={tab.id}
                style={{
                  borderBottom: isLast ? 'none' : '1px solid rgba(13,27,46,0.08)',
                  background: isOpen ? `${tab.color}05` : '#fff',
                  transition: 'background 0.25s',
                }}
              >
                {/* Header */}
                <button
                  onClick={() => toggle(tab.id)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '18px',
                    padding: '22px 28px',
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                  }}
                >
                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '11px',
                    flexShrink: 0,
                    background: isOpen ? `${tab.color}18` : 'rgba(13,27,46,0.05)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <Icon size={20} color={isOpen ? tab.color : '#888'} />
                  </div>

                  <div style={{ flex: 1 }}>
                    <p style={{
                      margin: 0,
                      fontWeight: 800,
                      fontSize: '1.15rem',
                      color: isOpen ? tab.color : 'var(--navy)',
                    }}>
                      {tab.title}
                    </p>
                    <p style={{
                      margin: '3px 0 0',
                      fontSize: '12px',
                      color: isOpen ? `${tab.color}99` : 'var(--text-secondary)',
                    }}>
                      {tab.items.length} prestation{tab.items.length > 1 ? 's' : ''} · {isOpen ? 'Cliquez pour réduire' : 'Cliquez pour voir'}
                    </p>
                  </div>

                  <ChevronDown
                    size={18}
                    style={{
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: '0.3s',
                    }}
                  />
                </button>

                {/* Contenu */}
                <div style={{
                  maxHeight: isOpen ? '600px' : '0',
                  overflow: 'hidden',
                  transition: 'max-height 0.4s ease',
                }}>
                  <div
                    className="accord-items"
                    style={{
                      padding: '0 28px 28px',
                      display: 'grid',
                      gridTemplateColumns: 'repeat(2, 1fr)',
                      gap: '4px 32px',
                    }}
                  >
                    {tab.items.map((item, i) => (
                      <div key={i} style={{
                        display: 'flex',
                        gap: '10px',
                        padding: '10px 0',
                        borderBottom: '1px solid rgba(13,27,46,0.06)',
                      }}>
                        <div style={{
                          width: '5px',
                          height: '5px',
                          borderRadius: '50%',
                          background: tab.color,
                          marginTop: '7px',
                        }} />
                        <span style={{ fontSize: '13px' }}>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* ✅ BOUTON CORRIGÉ */}
                  <div style={{ padding: '0 28px 28px' }}>
                    <a
                      href="#contact"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        padding: '10px 20px',
                        borderRadius: '8px',
                        background: tab.color,
                        color: '#fff',
                        fontWeight: 700,
                        fontSize: '13px',
                        textTransform: 'uppercase',
                        textDecoration: 'none',
                      }}
                    >
                      Demander un devis <ArrowRight size={14} />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .accord-items {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
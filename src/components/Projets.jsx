// src/components/Projets.jsx
import { Building2, MapPin, ArrowUpRight, CheckCircle2 } from 'lucide-react';

const projets = [
  {
    client: 'ASSALA Energy',
    sector: 'Pétrole & Gaz',
    location: 'Gabon',
    description: "Maintenance et optimisation des systèmes d'instrumentation et de contrôle commande pour les installations de production pétrolière. Programmation d'automates et mise à jour des boucles de régulation.",
    services: ['Instrumentation', 'Automatismes', 'Maintenance'],
    color: '#1a6fc4',
    letter: 'A',
    logo: '/images/assala_gabon.png',
  },
  {
    client: 'SOGARA',
    sector: 'Raffinage & Énergie',
    location: 'Port-Gentil, Gabon',
    description: "Travaux d'électricité industrielle et d'instrumentation pour la Société Gabonaise de Raffinage. Maintenance des sous-stations électriques et câblage d'armoires de contrôle.",
    services: ['Électricité Industrielle', 'Instrumentation', 'Chaudronnerie'],
    color: '#e8a820',
    letter: 'S',
    logo: '/images/sogara.png',
  },
  {
    client: 'PERENCO',
    sector: 'Production Pétrolière',
    location: 'Gabon',
    description: "Assistance technique et supervision de chantiers pour PERENCO. Mise à jour des P&ID/PCF, travaux de tuyauterie et maintenance des systèmes de sécurité et de détection incendie.",
    services: ['Tuyauterie', 'P&ID', 'Sécurité'],
    color: '#2589e8',
    letter: 'P',
    logo: '/images/perenco.png',
  },
  {
    client: 'Total Energies EP Gabon',
    sector: 'Pétrole & Gaz',
    location: 'Gabon',
    prestations: [
      'Installation du chromatographe',
      'Revamping centrale de détection incendie (MER)',
      'Installation des gyrophares',
      'Raccordement gyrophare SDC AGM (AIGUI)',
      'Installation des gyrophares avertisseurs POG-OM-AGM',
      "Installation de l'analyseur de gaz ABB sur PG2-CE WARTSILA",
      'Installation de deux passerelles réseau sur le MAT',
    ],
    services: ['Instrumentation', 'Détection Incendie', 'Analyse de Gaz', 'Réseau'],
    color: '#e63b2e',
    letter: 'T',
    logo: '/images/total_energies.png',
  },
];

export default function Projets() {
  return (
    <section id="projets" className="section" style={{ background: 'var(--gray-light)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <span className="section-label">Projets réalisés</span>
          <h2 className="section-title">Nos Réalisations</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Nous concevons des solutions d'instrumentation et de systèmes de contrôle, créant des projets innovants alliant performance technique et expertise industrielle.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '28px',
          }}
          className="projets-grid"
        >
          {projets.map(({ client, sector, location, description, prestations, services, color, letter, logo }) => (
            <div
              key={client}
              style={{
                background: '#fff',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 2px 16px rgba(13,27,46,0.07)',
                border: '1px solid rgba(13,27,46,0.06)',
                transition: 'transform 0.3s, box-shadow 0.3s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 16px 48px rgba(13,27,46,0.14)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = '0 2px 16px rgba(13,27,46,0.07)';
              }}
            >
              {/* Card header */}
              <div
                style={{
                  background: `linear-gradient(135deg, ${color}22, ${color}08)`,
                  borderBottom: `3px solid ${color}`,
                  padding: '28px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                }}
              >
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      width: '80px',
                      height: '44px',
                      marginBottom: '12px',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <img
                      src={logo}
                      alt={`Logo ${client}`}
                      style={{
                        maxWidth: '100%',
                        maxHeight: '100%',
                        objectFit: 'contain',
                        objectPosition: 'left center',
                      }}
                      onError={e => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div
                      style={{
                        display: 'none',
                        width: '52px',
                        height: '52px',
                        borderRadius: '12px',
                        background: color,
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontFamily: 'Barlow Condensed, sans-serif',
                        fontWeight: 800,
                        fontSize: '22px',
                        color: '#fff',
                      }}
                    >
                      {letter}
                    </div>
                  </div>

                  <h3
                    style={{
                      fontFamily: 'Barlow Condensed, sans-serif',
                      fontWeight: 800,
                      fontSize: '1.4rem',
                      color: 'var(--navy)',
                    }}
                  >
                    {client}
                  </h3>
                  <div style={{ display: 'flex', gap: '16px', marginTop: '6px' }}>
                    <span
                      style={{
                        fontSize: '12px',
                        color: 'var(--text-secondary)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                      }}
                    >
                      <Building2 size={12} />
                      {sector}
                    </span>
                    <span
                      style={{
                        fontSize: '12px',
                        color: 'var(--text-secondary)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                      }}
                    >
                      <MapPin size={12} />
                      {location}
                    </span>
                  </div>
                </div>

                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    background: `${color}15`,
                    border: `1px solid ${color}30`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginLeft: '12px',
                  }}
                >
                  <ArrowUpRight size={18} color={color} />
                </div>
              </div>

              {/* Card body */}
              <div style={{ padding: '24px 28px' }}>
                {prestations ? (
                  <ul style={{ margin: '0 0 20px 0', padding: 0, listStyle: 'none' }}>
                    {prestations.map((p, i) => (
                      <li
                        key={i}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '8px',
                          fontSize: '13px',
                          color: 'var(--text-secondary)',
                          lineHeight: 1.5,
                          marginBottom: '6px',
                        }}
                      >
                        <CheckCircle2
                          size={14}
                          color={color}
                          style={{ marginTop: '2px', flexShrink: 0 }}
                        />
                        {p}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p
                    style={{
                      color: 'var(--text-secondary)',
                      fontSize: '14px',
                      lineHeight: 1.7,
                      marginBottom: '20px',
                    }}
                  >
                    {description}
                  </p>
                )}

                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {services.map(s => (
                    <span
                      key={s}
                      style={{
                        padding: '4px 12px',
                        borderRadius: '100px',
                        background: `${color}12`,
                        border: `1px solid ${color}25`,
                        fontSize: '12px',
                        fontWeight: 600,
                        color: color,
                        fontFamily: 'Barlow Condensed, sans-serif',
                        letterSpacing: '0.3px',
                      }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .projets-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
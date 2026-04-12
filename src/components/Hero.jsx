// src/components/Hero.jsx
import { ArrowRight, Award, Users, Briefcase, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';

const stats = [
  { icon: Award, value: '10+', label: "Années d'expérience" },
  { icon: Briefcase, value: '50+', label: 'Projets réalisés' },
  { icon: Users, value: '3', label: 'Secteurs stratégiques' },
];

const bgImages = [
  '/images/automatisme.webp',
  '/images/elec.jpeg',
  '/images/tuyauterie.jpeg',
  '/images/vanne.jpeg',
  '/images/convertisseur.jpeg',
  '/images/etalonnage.jpeg',
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrent(i => (i + 1) % bgImages.length);
        setFade(true);
      }, 600);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="accueil" style={{
      minHeight: '100vh',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden',
    }}>

      {/* Background images with crossfade */}
      {bgImages.map((src, i) => (
        <div key={src} style={{
          position: 'absolute', inset: 0,
          backgroundImage: `url('${src}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: i === current ? (fade ? 1 : 0) : 0,
          transition: 'opacity 0.8s ease-in-out',
          zIndex: 0,
        }} />
      ))}

      {/* Overlay */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: 'linear-gradient(135deg, rgba(8,15,26,0.88) 0%, rgba(13,27,46,0.80) 40%, rgba(19,34,64,0.70) 70%, rgba(13,27,46,0.80) 100%)',
      }} />

      {/* Grid pattern */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 2,
        backgroundImage: `linear-gradient(rgba(26,111,196,0.06) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(26,111,196,0.06) 1px, transparent 1px)`,
        backgroundSize: '60px 60px',
      }} />

      {/* Glow orbs */}
      <div style={{
        position: 'absolute', top: '15%', right: '10%', zIndex: 2,
        width: '500px', height: '500px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(26,111,196,0.18) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '10%', left: '-5%', zIndex: 2,
        width: '400px', height: '400px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(26,111,196,0.1) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Dots navigation */}
      <div style={{
        position: 'absolute', bottom: '70px', right: '32px', zIndex: 10,
        display: 'flex', flexDirection: 'column', gap: '8px',
      }}>
        {bgImages.map((_, i) => (
          <div
            key={i}
            onClick={() => { setFade(false); setTimeout(() => { setCurrent(i); setFade(true); }, 300); }}
            style={{
              width: i === current ? '4px' : '4px',
              height: i === current ? '24px' : '8px',
              borderRadius: '2px',
              background: i === current ? '#2589e8' : 'rgba(255,255,255,0.3)',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
          />
        ))}
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 3, padding: '120px 24px 80px' }}>
        <div style={{ maxWidth: '760px' }}>
          {/* Badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: 'rgba(26,111,196,0.15)', border: '1px solid rgba(26,111,196,0.35)',
            borderRadius: '100px', padding: '6px 16px', marginBottom: '28px',
          }}>
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#2589e8', animation: 'pulse 2s infinite' }} />
            <span style={{ color: '#7db8f0', fontSize: '13px', fontWeight: 500, letterSpacing: '0.5px' }}>
              Expertise locale reconnue — Port-Gentil, Gabon
            </span>
          </div>

          <h1 style={{
            fontFamily: 'Barlow Condensed, sans-serif',
            fontSize: 'clamp(2.8rem, 6vw, 5rem)',
            fontWeight: 800,
            color: '#fff',
            lineHeight: 1.08,
            marginBottom: '24px',
          }}>
            Solutions Techniques<br />
            <span style={{
              background: 'linear-gradient(90deg, #2589e8, #7db8f0)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>Industrielles</span>{' '}
            <span style={{ color: 'rgba(255,255,255,0.9)' }}>Sur Mesure</span>
          </h1>

          <p style={{
            fontSize: '1.1rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.75,
            marginBottom: '40px', maxWidth: '580px', fontWeight: 400,
          }}>
            Spécialisés en instrumentation, automatismes, électricité industrielle, chaudronnerie et tuyauterie — nous accompagnons vos projets de la conception à la réalisation.
          </p>

          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '72px' }}>
            <a href="#services" className="btn-primary" style={{ fontSize: '14px' }}>
              Nos services <ArrowRight size={16} />
            </a>
            <a href="#contact" className="btn-outline">
              Nous contacter
            </a>
          </div>

          {/* Stats */}
          <div style={{
            display: 'flex', gap: '40px', flexWrap: 'wrap',
            paddingTop: '40px', borderTop: '1px solid rgba(255,255,255,0.1)',
          }}>
            {stats.map(({ icon: Icon, value, label }) => (
              <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{
                  width: '44px', height: '44px', borderRadius: '10px',
                  background: 'rgba(26,111,196,0.2)', border: '1px solid rgba(26,111,196,0.3)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Icon size={20} color="#2589e8" />
                </div>
                <div>
                  <div style={{
                    fontFamily: 'Barlow Condensed, sans-serif',
                    fontSize: '26px', fontWeight: 800, color: '#fff', lineHeight: 1,
                  }}>{value}</div>
                  <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', marginTop: '2px' }}>{label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a href="#apropos" style={{
        position: 'absolute', bottom: '32px', left: '50%', transform: 'translateX(-50%)',
        color: 'rgba(255,255,255,0.4)', display: 'flex', flexDirection: 'column',
        alignItems: 'center', gap: '4px', fontSize: '10px', letterSpacing: '2px',
        textTransform: 'uppercase', textDecoration: 'none', zIndex: 10,
      }}>
        <span>Défiler</span>
        <ChevronDown size={18} style={{ animation: 'bounce 2s infinite' }} />
      </a>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(5px); }
        }
      `}</style>
    </section>
  );
}
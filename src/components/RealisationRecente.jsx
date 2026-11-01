// src/components/RealisationRecente.jsx
import { useState, useEffect } from 'react';
import { Clock, MapPin, X, ChevronLeft, ChevronRight, ZoomIn, ImageOff } from 'lucide-react';

const SCOPE =
  'Revamping asservissement de la pomperie incendie de la centrale thermique de Port-Gentil';

const ACCENT = '#e63b2e';

const images = [
  { src: '/images/real1.jpg', alt: 'Revamping pomperie incendie - photo 1' },
  { src: '/images/real2.jpg', alt: 'Revamping pomperie incendie - photo 2' },
  { src: '/images/real3.jpg', alt: 'Revamping pomperie incendie - photo 3' },
  { src: '/images/real4.jpg', alt: 'Revamping pomperie incendie - photo 4' },
];

export default function RealisationRecente() {
  // index de l'image ouverte dans la lightbox (null = fermée)
  const [current, setCurrent] = useState(null);
  // liste des images qui n'ont pas pu charger (le bloc reste visible quand même)
  const [failed, setFailed] = useState({});

  const total = images.length;
  const close = () => setCurrent(null);
  const next = () => setCurrent(i => (i === null ? i : (i + 1) % total));
  const prev = () => setCurrent(i => (i === null ? i : (i - 1 + total) % total));

  // Clavier + blocage du scroll quand la lightbox est ouverte
  useEffect(() => {
    if (current === null) return undefined;

    const onKey = e => {
      if (e.key === 'Escape') setCurrent(null);
      if (e.key === 'ArrowRight') setCurrent(i => (i === null ? i : (i + 1) % total));
      if (e.key === 'ArrowLeft') setCurrent(i => (i === null ? i : (i - 1 + total) % total));
    };

    window.addEventListener('keydown', onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [current, total]);

  return (
    <div
      id="activite-recente"
      style={{
        marginTop: '72px',
        background: '#fff',
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: '0 2px 16px rgba(13,27,46,0.07)',
        border: '1px solid rgba(13,27,46,0.06)',
      }}
    >
      {/* En-tête */}
      <div
        style={{
          background: `linear-gradient(135deg, ${ACCENT}22, ${ACCENT}08)`,
          borderBottom: `3px solid ${ACCENT}`,
          padding: '28px',
        }}
      >
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            padding: '4px 12px',
            borderRadius: '100px',
            background: ACCENT,
            color: '#fff',
            fontSize: '12px',
            fontWeight: 700,
            fontFamily: 'Barlow Condensed, sans-serif',
            letterSpacing: '0.8px',
            textTransform: 'uppercase',
            marginBottom: '14px',
          }}
        >
          <Clock size={12} />
          Activité récente
        </span>

        <h3
          style={{
            fontFamily: 'Barlow Condensed, sans-serif',
            fontWeight: 800,
            fontSize: '1.5rem',
            color: 'var(--navy)',
            lineHeight: 1.25,
            margin: 0,
          }}
        >
          {SCOPE}
        </h3>

        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
            marginTop: '10px',
            fontSize: '12px',
            color: 'var(--text-secondary)',
          }}
        >
          <MapPin size={12} />
          Port-Gentil, Gabon
        </span>
      </div>

      {/* Galerie */}
      <div style={{ padding: '24px 28px 28px' }}>
        <div
          className="realisation-recente-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '16px',
          }}
        >
          {images.map((img, i) => (
            <button
              key={img.src}
              type="button"
              onClick={() => !failed[img.src] && setCurrent(i)}
              aria-label={`Agrandir ${img.alt}`}
              className="realisation-recente-item"
              style={{
                position: 'relative',
                display: 'block',
                width: '100%',
                padding: 0,
                border: '1px solid rgba(13,27,46,0.08)',
                borderRadius: '12px',
                overflow: 'hidden',
                cursor: failed[img.src] ? 'default' : 'zoom-in',
                background: '#eef1f5',
                aspectRatio: '4 / 3',
              }}
            >
              {failed[img.src] ? (
                <span
                  style={{
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    color: 'var(--text-secondary)',
                    fontSize: '12px',
                    padding: '8px',
                    textAlign: 'center',
                  }}
                >
                  <ImageOff size={22} />
                  {img.src.replace('/images/', '')} introuvable
                </span>
              ) : (
                <>
                  <img
                    src={img.src}
                    alt={img.alt}
                    onError={() => setFailed(f => ({ ...f, [img.src]: true }))}
                    style={{
                      position: 'absolute',
                      inset: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                      transition: 'transform 0.4s',
                    }}
                  />
                  <span
                    className="realisation-recente-zoom"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'rgba(13,27,46,0.45)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      opacity: 0,
                      transition: 'opacity 0.3s',
                    }}
                  >
                    <ZoomIn size={28} color="#fff" />
                  </span>
                </>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {current !== null && images[current] && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={close}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 1000,
            background: 'rgba(8,16,28,0.92)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
          }}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Fermer"
            style={lightboxBtn({ top: '20px', right: '20px' })}
          >
            <X size={22} color="#fff" />
          </button>

          <button
            type="button"
            onClick={e => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Image précédente"
            style={lightboxBtn({ left: '20px', top: '50%', transform: 'translateY(-50%)' })}
          >
            <ChevronLeft size={26} color="#fff" />
          </button>

          <button
            type="button"
            onClick={e => {
              e.stopPropagation();
              next();
            }}
            aria-label="Image suivante"
            style={lightboxBtn({ right: '20px', top: '50%', transform: 'translateY(-50%)' })}
          >
            <ChevronRight size={26} color="#fff" />
          </button>

          <figure
            onClick={e => e.stopPropagation()}
            style={{ margin: 0, maxWidth: '1000px', width: '100%', textAlign: 'center' }}
          >
            <img
              src={images[current].src}
              alt={images[current].alt}
              style={{
                maxWidth: '100%',
                maxHeight: '78vh',
                borderRadius: '12px',
                objectFit: 'contain',
              }}
            />
            <figcaption
              style={{
                color: 'rgba(255,255,255,0.85)',
                fontSize: '14px',
                marginTop: '14px',
              }}
            >
              {SCOPE} — {current + 1} / {total}
            </figcaption>
          </figure>
        </div>
      )}

      <style>{`
        .realisation-recente-item:hover img { transform: scale(1.06); }
        .realisation-recente-item:hover .realisation-recente-zoom { opacity: 1; }
        @media (max-width: 900px) {
          .realisation-recente-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .realisation-recente-grid { gap: 10px !important; }
        }
      `}</style>
    </div>
  );
}

function lightboxBtn(position) {
  return {
    position: 'absolute',
    width: '44px',
    height: '44px',
    borderRadius: '50%',
    border: '1px solid rgba(255,255,255,0.25)',
    background: 'rgba(255,255,255,0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    ...position,
  };
}
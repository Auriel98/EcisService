// src/components/Contact.jsx
import { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  ExternalLink,
  Navigation,
} from 'lucide-react';
import emailjs from '@emailjs/browser';

// ============================================================
// EMAILJS
// ============================================================
const EMAILJS_SERVICE_ID = 'service_hac9ucv';
const EMAILJS_TEMPLATE_ID = 'template_7ns51oc';
const EMAILJS_PUBLIC_KEY = 'nf-SuQ4_H8NmaK-kc';

// ============================================================
// GOOGLE MAPS — LOCALISATION E.C.I.S SERVICES
// ============================================================

const GOOGLE_MAPS_EMBED =
  'https://www.google.com/maps?q=-0.730544,8.784587&z=17&output=embed';

// Nouvelle fiche / localisation Google Maps
const GOOGLE_MAPS_LINK =
  'https://maps.app.goo.gl/fqKsWPT4acn8oJNx6';

// Lien pour calculer un itinéraire vers E.C.I.S
const GOOGLE_MAPS_DIRECTIONS =
  'https://www.google.com/maps/dir/?api=1&destination=-0.730544,8.784587';

// Coordonnées
const ECIS_COORDINATES = '-0.730544, 8.784587';


// ============================================================
// INFORMATIONS
// ============================================================

const infos = [
  {
    icon: MapPin,
    title: 'Notre adresse',
    lines: [
      'E.C.I.S Services',
      'Port-Gentil, Gabon',
      'Coordonnées : -0.730544, 8.784587',
    ],
    color: '#1a6fc4',
  },

  {
    icon: Clock,
    title: 'Horaires',
    lines: [
      'Lun – Ven : 09h – 17h',
      'Samedi : 10h – 16h',
      'Dimanche : Fermé',
    ],
    color: '#e8a820',
  },

  {
    icon: Mail,
    title: 'Email',
    lines: [
      'ecis23gabon@gmail.com',
    ],
    color: '#2589e8',
  },

  {
    icon: Phone,
    title: 'Téléphone',
    lines: [
      '+241 65 685 283',
      '+241 77 322 900',
    ],
    color: '#1a6fc4',
  },
];


// ============================================================
// COMPOSANT
// ============================================================

export default function Contact() {

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');


  // ==========================================================
  // FORMULAIRE
  // ==========================================================

  const handle = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };


  const submit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError('');

    const templateParams = {
      from_name: form.name,
      from_email: form.email,
      from_phone: form.phone || 'Non renseigné',
      subject: form.subject,
      message: form.message,
      to_email: 'ecis23gabon@gmail.com',
    };

    try {

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      setSent(true);

    } catch (err) {

      console.error('EmailJS error:', err);

      setError(
        "Une erreur s'est produite. Veuillez réessayer ou nous contacter directement."
      );

    } finally {

      setLoading(false);

    }
  };


  // ==========================================================
  // STYLE DES INPUTS
  // ==========================================================

  const inputStyle = {
    width: '100%',
    padding: '13px 16px',
    border: '1.5px solid rgba(13,27,46,0.15)',
    borderRadius: '8px',
    fontSize: '15px',
    fontFamily: 'Barlow, sans-serif',
    color: 'var(--navy)',
    background: '#fff',
    outline: 'none',
    transition: 'border-color 0.2s',
    boxSizing: 'border-box',
  };


  // ==========================================================
  // RENDER
  // ==========================================================

  return (

    <section
      id="contact"
      className="section"
      style={{
        background: 'var(--gray-light)',
      }}
    >

      <div className="container">


        {/* ====================================================
            HEADER
        ==================================================== */}

        <div
          style={{
            textAlign: 'center',
            marginBottom: '64px',
          }}
        >

          <span className="section-label">
            Contactez-nous
          </span>

          <h2 className="section-title">
            Rendez-nous visite
          </h2>

          <p
            className="section-subtitle"
            style={{
              margin: '0 auto',
            }}
          >
            Pour toute assistance ou information supplémentaire,
            n'hésitez pas à nous rendre visite ou à nous contacter
            directement.
          </p>

        </div>



        {/* ====================================================
            INFORMATIONS
        ==================================================== */}

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '16px',
            marginBottom: '48px',
          }}
          className="info-grid"
        >

          {infos.map(
            ({
              icon: Icon,
              title,
              lines,
              color,
            }) => (

              <div
                key={title}
                style={{
                  background: '#fff',
                  borderRadius: '12px',
                  padding: '24px',
                  boxShadow:
                    '0 2px 12px rgba(13,27,46,0.06)',
                  borderTop:
                    `3px solid ${color}`,
                }}
              >

                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '10px',
                    background: `${color}12`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '14px',
                  }}
                >

                  <Icon
                    size={20}
                    color={color}
                  />

                </div>


                <div
                  style={{
                    fontFamily:
                      'Barlow Condensed, sans-serif',
                    fontWeight: 700,
                    fontSize: '14px',
                    color: 'var(--navy)',
                    marginBottom: '8px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                  }}
                >
                  {title}
                </div>


                {lines.map((line) => (

                  <div
                    key={line}
                    style={{
                      fontSize: '13px',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.6,
                    }}
                  >
                    {line}
                  </div>

                ))}

              </div>

            )
          )}

        </div>



        {/* ====================================================
            CARTE + FORMULAIRE
        ==================================================== */}

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '32px',
          }}
          className="contact-grid"
        >


          {/* ==================================================
              CARTE
          ================================================== */}

          <div
            className="map-container"
            style={{
              position: 'relative',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: 'var(--shadow)',
              minHeight: '520px',
              background: '#e9eef3',
            }}
          >


            {/* =================================================
                GOOGLE MAPS
            ================================================= */}

            <iframe
              title="E.C.I.S Services — Port-Gentil"
              src={GOOGLE_MAPS_EMBED}
              width="100%"
              height="100%"
              style={{
                border: 0,
                minHeight: '520px',
                display: 'block',
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />


            {/* =================================================
                CARTE INFO E.C.I.S
            ================================================= */}

            <div
              className="map-business-card"
              style={{
                position: 'absolute',
                top: '18px',
                left: '18px',
                width: '280px',
                maxWidth: 'calc(100% - 36px)',
                background: 'rgba(255,255,255,0.97)',
                borderRadius: '14px',
                padding: '16px',
                boxShadow:
                  '0 5px 25px rgba(0,0,0,0.18)',
                zIndex: 10,
                boxSizing: 'border-box',
              }}
            >

              {/* Logo + nom */}

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '14px',
                }}
              >

                <div
                  style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '10px',
                    background: '#fff',
                    border: '1px solid rgba(13,27,46,0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                    flexShrink: 0,
                  }}
                >

                  <img
                    src="/images/ecis.png"
                    alt="E.C.I.S Services"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                      padding: '5px',
                      boxSizing: 'border-box',
                    }}
                  />

                </div>


                <div>

                  <div
                    style={{
                      fontFamily:
                        'Barlow Condensed, sans-serif',
                      fontWeight: 800,
                      fontSize: '19px',
                      color: 'var(--navy)',
                      lineHeight: 1.1,
                    }}
                  >
                    E.C.I.S Services
                  </div>

                  <div
                    style={{
                      fontSize: '12px',
                      color: 'var(--text-secondary)',
                      marginTop: '4px',
                    }}
                  >
                    Port-Gentil, Gabon
                  </div>

                </div>

              </div>


              {/* Adresse */}

              <div
                style={{
                  display: 'flex',
                  gap: '8px',
                  alignItems: 'flex-start',
                  marginBottom: '12px',
                }}
              >

                <MapPin
                  size={17}
                  color="#1a6fc4"
                  style={{
                    marginTop: '2px',
                    flexShrink: 0,
                  }}
                />

                <div
                  style={{
                    fontSize: '13px',
                    lineHeight: 1.5,
                    color: 'var(--text-secondary)',
                  }}
                >
                  Nouvelle localisation
                  <br />
                  <span
                    style={{
                      fontSize: '11px',
                      opacity: 0.8,
                    }}
                  >
                    Cité Shell
                   
                  </span>
                </div>

              </div>


              {/* Boutons */}

              <div
                style={{
                  display: 'flex',
                  gap: '8px',
                }}
                className="map-buttons"
              >

                {/* Google Maps */}

                <a
                  href={GOOGLE_MAPS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    flex: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                    padding: '10px 8px',
                    borderRadius: '8px',
                    background: '#1a6fc4',
                    color: '#fff',
                    textDecoration: 'none',
                    fontSize: '12px',
                    fontWeight: 600,
                    transition: 'all 0.2s',
                  }}
                >

                  <ExternalLink size={14} />

                  Google Maps

                </a>


                {/* Itinéraire */}

                <a
                  href={GOOGLE_MAPS_DIRECTIONS}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    flex: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                    padding: '10px 8px',
                    borderRadius: '8px',
                    background: '#f1f5f9',
                    color: 'var(--navy)',
                    textDecoration: 'none',
                    fontSize: '12px',
                    fontWeight: 600,
                    border: '1px solid rgba(13,27,46,0.10)',
                    transition: 'all 0.2s',
                  }}
                >

                  <Navigation size={14} />

                  Itinéraire

                </a>

              </div>

            </div>



            {/* =================================================
                INDICATION EN BAS
            ================================================= */}

            <div
              style={{
                position: 'absolute',
                bottom: '14px',
                left: '50%',
                transform: 'translateX(-50%)',
                background: 'rgba(255,255,255,0.95)',
                padding: '9px 14px',
                borderRadius: '8px',
                boxShadow:
                  '0 3px 12px rgba(0,0,0,0.15)',
                fontSize: '12px',
                color: 'var(--navy)',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                zIndex: 5,
                whiteSpace: 'nowrap',
              }}
              className="map-hint"
            >

              <MapPin
                size={14}
                color="#1a6fc4"
              />

              Cliquez sur « Itinéraire » pour nous rejoindre

            </div>

          </div>



          {/* ==================================================
              FORMULAIRE
          ================================================== */}

          <div
            style={{
              background: '#fff',
              borderRadius: '16px',
              padding: '40px',
              boxShadow: 'var(--shadow)',
            }}
          >

            {sent ? (

              <div
                style={{
                  textAlign: 'center',
                  padding: '40px 0',
                }}
              >

                <CheckCircle
                  size={56}
                  color="#1a6fc4"
                  style={{
                    margin: '0 auto 16px',
                  }}
                />


                <h3
                  style={{
                    fontFamily:
                      'Barlow Condensed, sans-serif',
                    fontWeight: 800,
                    fontSize: '1.8rem',
                    color: 'var(--navy)',
                    marginBottom: '10px',
                  }}
                >
                  Message envoyé !
                </h3>


                <p
                  style={{
                    color: 'var(--text-secondary)',
                  }}
                >
                  Nous vous répondrons dans les plus
                  brefs délais.
                </p>


                <button
                  onClick={() => {

                    setSent(false);

                    setForm({
                      name: '',
                      email: '',
                      phone: '',
                      subject: '',
                      message: '',
                    });

                  }}
                  className="btn-primary"
                  style={{
                    marginTop: '24px',
                  }}
                >
                  Nouveau message
                </button>

              </div>

            ) : (

              <>

                <h3
                  style={{
                    fontFamily:
                      'Barlow Condensed, sans-serif',
                    fontWeight: 800,
                    fontSize: '1.6rem',
                    color: 'var(--navy)',
                    marginBottom: '24px',
                  }}
                >
                  Envoyez-nous un message
                </h3>


                {/* ERREUR */}

                {error && (

                  <div
                    style={{
                      background: '#fff0f0',
                      border: '1px solid #ffcccc',
                      borderRadius: '8px',
                      padding: '12px 16px',
                      marginBottom: '20px',
                      color: '#c0392b',
                      fontSize: '14px',
                    }}
                  >
                    {error}
                  </div>

                )}


                <form onSubmit={submit}>


                  {/* =================================================
                      NOM + EMAIL
                  ================================================= */}

                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gap: '16px',
                      marginBottom: '16px',
                    }}
                  >

                    <div>

                      <label
                        style={{
                          fontSize: '13px',
                          fontWeight: 600,
                          color: 'var(--navy)',
                          marginBottom: '6px',
                          display: 'block',
                        }}
                      >
                        Nom complet *
                      </label>


                      <input
                        name="name"
                        value={form.name}
                        onChange={handle}
                        required
                        placeholder="Votre nom"
                        style={inputStyle}
                        onFocus={(e) =>
                          (e.target.style.borderColor =
                            '#1a6fc4')
                        }
                        onBlur={(e) =>
                          (e.target.style.borderColor =
                            'rgba(13,27,46,0.15)')
                        }
                      />

                    </div>


                    <div>

                      <label
                        style={{
                          fontSize: '13px',
                          fontWeight: 600,
                          color: 'var(--navy)',
                          marginBottom: '6px',
                          display: 'block',
                        }}
                      >
                        Email *
                      </label>


                      <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handle}
                        required
                        placeholder="votre@email.com"
                        style={inputStyle}
                        onFocus={(e) =>
                          (e.target.style.borderColor =
                            '#1a6fc4')
                        }
                        onBlur={(e) =>
                          (e.target.style.borderColor =
                            'rgba(13,27,46,0.15)')
                        }
                      />

                    </div>

                  </div>



                  {/* =================================================
                      TELEPHONE + SUJET
                  ================================================= */}

                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gap: '16px',
                      marginBottom: '16px',
                    }}
                  >

                    <div>

                      <label
                        style={{
                          fontSize: '13px',
                          fontWeight: 600,
                          color: 'var(--navy)',
                          marginBottom: '6px',
                          display: 'block',
                        }}
                      >
                        Téléphone
                      </label>


                      <input
                        name="phone"
                        value={form.phone}
                        onChange={handle}
                        placeholder="+241 XX XXX XXX"
                        style={inputStyle}
                        onFocus={(e) =>
                          (e.target.style.borderColor =
                            '#1a6fc4')
                        }
                        onBlur={(e) =>
                          (e.target.style.borderColor =
                            'rgba(13,27,46,0.15)')
                        }
                      />

                    </div>


                    <div>

                      <label
                        style={{
                          fontSize: '13px',
                          fontWeight: 600,
                          color: 'var(--navy)',
                          marginBottom: '6px',
                          display: 'block',
                        }}
                      >
                        Sujet *
                      </label>


                      <select
                        name="subject"
                        value={form.subject}
                        onChange={handle}
                        required
                        style={{
                          ...inputStyle,
                        }}
                      >

                        <option value="">
                          Sélectionner...
                        </option>

                        <option>
                          Instrumentation & Automatismes
                        </option>

                        <option>
                          Électricité Industrielle
                        </option>

                        <option>
                          Chaudronnerie & Tuyauterie
                        </option>

                        <option>
                          Devis / Projet
                        </option>

                        <option>
                          Autre
                        </option>

                      </select>

                    </div>

                  </div>



                  {/* =================================================
                      MESSAGE
                  ================================================= */}

                  <div
                    style={{
                      marginBottom: '24px',
                    }}
                  >

                    <label
                      style={{
                        fontSize: '13px',
                        fontWeight: 600,
                        color: 'var(--navy)',
                        marginBottom: '6px',
                        display: 'block',
                      }}
                    >
                      Message *
                    </label>


                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handle}
                      required
                      rows={5}
                      placeholder="Décrivez votre projet ou votre demande..."
                      style={{
                        ...inputStyle,
                        resize: 'vertical',
                        lineHeight: 1.6,
                      }}
                      onFocus={(e) =>
                        (e.target.style.borderColor =
                          '#1a6fc4')
                      }
                      onBlur={(e) =>
                        (e.target.style.borderColor =
                          'rgba(13,27,46,0.15)')
                      }
                    />

                  </div>



                  {/* =================================================
                      BOUTON ENVOYER
                  ================================================= */}

                  <button
                    type="submit"
                    className="btn-primary"
                    style={{
                      width: '100%',
                      justifyContent: 'center',
                      gap: '8px',
                      opacity: loading ? 0.7 : 1,
                    }}
                    disabled={loading}
                  >

                    {loading ? (

                      'Envoi en cours...'

                    ) : (

                      <>
                        Envoyer le message
                        <Send size={16} />
                      </>

                    )}

                  </button>

                </form>

              </>

            )}

          </div>

        </div>

      </div>



      {/* ========================================================
          RESPONSIVE
      ======================================================== */}

      <style>{`

        @media (max-width: 900px) {

          .info-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }

          .contact-grid {
            grid-template-columns: 1fr !important;
          }

        }


        @media (max-width: 600px) {

          .map-business-card {
            width: 260px !important;
            top: 12px !important;
            left: 12px !important;
          }

          .map-hint {
            display: none !important;
          }

        }


        @media (max-width: 480px) {

          .info-grid {
            grid-template-columns: 1fr !important;
          }

          .map-business-card {
            width: calc(100% - 24px) !important;
            max-width: none !important;
          }

          .map-buttons {
            flex-direction: column !important;
          }

          .map-buttons a {
            width: 100%;
          }

          .contact-grid {
            gap: 20px !important;
          }

        }

      `}</style>

    </section>
  );
}
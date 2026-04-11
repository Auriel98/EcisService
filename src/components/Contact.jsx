// src/components/Contact.jsx
import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

// ⬇️ Remplace ces 3 valeurs par les tiennes sur emailjs.com
const EMAILJS_SERVICE_ID  = 'service_hac9ucv';
const EMAILJS_TEMPLATE_ID = 'template_7ns51oc';
const EMAILJS_PUBLIC_KEY  = 'nf-SuQ4_H8NmaK-kc';

// Google Maps embed — pointe exactement sur "Essongué Rico", Port-Gentil
const GOOGLE_MAPS_EMBED =
  'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d498.6884453164797!2d8.7851236!3d-0.7151134!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a83b7c75e4d5a87%3A0xae8f72abfee082a7!2sEssongu%C3%A9%20rico!5e0!3m2!1sfr!2sga!4v1727613918419!5m2!1sfr!2sga';

const infos = [
  {
    icon: MapPin,
    title: 'Notre adresse',
    lines: ['Centre Commercial Essongué Rigo', 'Port-Gentil, Gabon — BP 931'],
    color: '#1a6fc4',
  },
  {
    icon: Clock,
    title: 'Horaires',
    lines: ['Lun – Ven : 09h – 17h', 'Samedi : 10h – 16h', 'Dimanche : Fermé'],
    color: '#e8a820',
  },
  {
    icon: Mail,
    title: 'Email',
    lines: ['ecis23gabon@gmail.com'],
    color: '#2589e8',
  },
  {
    icon: Phone,
    title: 'Téléphone',
    lines: ['+241 77 669 292', '+241 65 039 980'],
    color: '#1a6fc4',
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handle = e => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async e => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const templateParams = {
      from_name:    form.name,
      from_email:   form.email,
      from_phone:   form.phone || 'Non renseigné',
      subject:      form.subject,
      message:      form.message,
      to_email:     'ecis23gabon@gmail.com',
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
      setError("Une erreur s'est produite. Veuillez réessayer ou nous contacter directement.");
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = {
    width: '100%', padding: '13px 16px',
    border: '1.5px solid rgba(13,27,46,0.15)',
    borderRadius: '8px', fontSize: '15px',
    fontFamily: 'Barlow, sans-serif',
    color: 'var(--navy)', background: '#fff',
    outline: 'none', transition: 'border-color 0.2s',
    boxSizing: 'border-box',
  };

  return (
    <section id="contact" className="section" style={{ background: 'var(--gray-light)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <span className="section-label">Contactez-nous</span>
          <h2 className="section-title">Rendez-nous visite</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Pour toute assistance ou information supplémentaire, n'hésitez pas à nous rendre visite ou à nous contacter directement.
          </p>
        </div>

        {/* Info cards */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '16px', marginBottom: '48px',
        }} className="info-grid">
          {infos.map(({ icon: Icon, title, lines, color }) => (
            <div key={title} style={{
              background: '#fff', borderRadius: '12px', padding: '24px',
              boxShadow: '0 2px 12px rgba(13,27,46,0.06)',
              borderTop: `3px solid ${color}`,
            }}>
              <div style={{
                width: '44px', height: '44px', borderRadius: '10px',
                background: `${color}12`, display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '14px',
              }}>
                <Icon size={20} color={color} />
              </div>
              <div style={{
                fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700,
                fontSize: '14px', color: 'var(--navy)', marginBottom: '8px',
                textTransform: 'uppercase', letterSpacing: '0.5px',
              }}>{title}</div>
              {lines.map(l => (
                <div key={l} style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{l}</div>
              ))}
            </div>
          ))}
        </div>

        {/* Map + Form */}
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: '32px',
        }} className="contact-grid">

          {/* ✅ Google Maps — même embed que l'ancien site, pointe sur Essongué Rico */}
          <div style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: 'var(--shadow)', minHeight: '420px' }}>
            <iframe
              title="E.C.I.S Services — Essongué Rico, Port-Gentil"
              src={GOOGLE_MAPS_EMBED}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '420px', display: 'block' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Form */}
          <div style={{
            background: '#fff', borderRadius: '16px', padding: '40px',
            boxShadow: 'var(--shadow)',
          }}>
            {sent ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <CheckCircle size={56} color="#1a6fc4" style={{ margin: '0 auto 16px' }} />
                <h3 style={{
                  fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
                  fontSize: '1.8rem', color: 'var(--navy)', marginBottom: '10px',
                }}>Message envoyé !</h3>
                <p style={{ color: 'var(--text-secondary)' }}>Nous vous répondrons dans les plus brefs délais.</p>
                <button onClick={() => { setSent(false); setForm({ name: '', email: '', phone: '', subject: '', message: '' }); }}
                  className="btn-primary" style={{ marginTop: '24px' }}>
                  Nouveau message
                </button>
              </div>
            ) : (
              <>
                <h3 style={{
                  fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
                  fontSize: '1.6rem', color: 'var(--navy)', marginBottom: '24px',
                }}>Envoyez-nous un message</h3>

                {error && (
                  <div style={{
                    background: '#fff0f0', border: '1px solid #ffcccc', borderRadius: '8px',
                    padding: '12px 16px', marginBottom: '20px',
                    color: '#c0392b', fontSize: '14px',
                  }}>
                    {error}
                  </div>
                )}

                <form onSubmit={submit}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                    <div>
                      <label style={{ fontSize: '13px', fontWeight: 600, color: 'var(--navy)', marginBottom: '6px', display: 'block' }}>Nom complet *</label>
                      <input name="name" value={form.name} onChange={handle} required
                        placeholder="Votre nom" style={inputStyle}
                        onFocus={e => e.target.style.borderColor = '#1a6fc4'}
                        onBlur={e => e.target.style.borderColor = 'rgba(13,27,46,0.15)'}
                      />
                    </div>
                    <div>
                      <label style={{ fontSize: '13px', fontWeight: 600, color: 'var(--navy)', marginBottom: '6px', display: 'block' }}>Email *</label>
                      <input name="email" type="email" value={form.email} onChange={handle} required
                        placeholder="votre@email.com" style={inputStyle}
                        onFocus={e => e.target.style.borderColor = '#1a6fc4'}
                        onBlur={e => e.target.style.borderColor = 'rgba(13,27,46,0.15)'}
                      />
                    </div>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                    <div>
                      <label style={{ fontSize: '13px', fontWeight: 600, color: 'var(--navy)', marginBottom: '6px', display: 'block' }}>Téléphone</label>
                      <input name="phone" value={form.phone} onChange={handle}
                        placeholder="+241 XX XXX XXX" style={inputStyle}
                        onFocus={e => e.target.style.borderColor = '#1a6fc4'}
                        onBlur={e => e.target.style.borderColor = 'rgba(13,27,46,0.15)'}
                      />
                    </div>
                    <div>
                      <label style={{ fontSize: '13px', fontWeight: 600, color: 'var(--navy)', marginBottom: '6px', display: 'block' }}>Sujet *</label>
                      <select name="subject" value={form.subject} onChange={handle} required style={{ ...inputStyle }}>
                        <option value="">Sélectionner...</option>
                        <option>Instrumentation & Automatismes</option>
                        <option>Électricité Industrielle</option>
                        <option>Chaudronnerie & Tuyauterie</option>
                        <option>Devis / Projet</option>
                        <option>Autre</option>
                      </select>
                    </div>
                  </div>
                  <div style={{ marginBottom: '24px' }}>
                    <label style={{ fontSize: '13px', fontWeight: 600, color: 'var(--navy)', marginBottom: '6px', display: 'block' }}>Message *</label>
                    <textarea name="message" value={form.message} onChange={handle} required rows={5}
                      placeholder="Décrivez votre projet ou votre demande..."
                      style={{ ...inputStyle, resize: 'vertical', lineHeight: 1.6 }}
                      onFocus={e => e.target.style.borderColor = '#1a6fc4'}
                      onBlur={e => e.target.style.borderColor = 'rgba(13,27,46,0.15)'}
                    />
                  </div>
                  <button type="submit" className="btn-primary"
                    style={{ width: '100%', justifyContent: 'center', gap: '8px', opacity: loading ? 0.7 : 1 }}
                    disabled={loading}>
                    {loading ? 'Envoi en cours...' : (<>Envoyer le message <Send size={16} /></>)}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .info-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .contact-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 480px) {
          .info-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
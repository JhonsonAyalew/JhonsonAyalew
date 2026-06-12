import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Github, Linkedin, Globe, MapPin, Zap, ArrowRight,
  Database, Code2, Cpu, Users
} from 'lucide-react';
import { pageTransition, fadeInUp, staggerContainer, cardItem } from '../utils/animationVariants.js';

const ROLES = [
  'Data Engineer',
  'Python Automator',
  'Web Scraping Expert',
  'AI Data Labeler',
  'Full-Stack Builder',
];

const STATS = [
  { num: '6+', label: 'Live Projects', icon: Zap, color: 'var(--primary-teal)' },
  { num: '3yr', label: 'Experience',   icon: Code2, color: 'var(--primary-emerald)' },
  { num: '10+', label: 'Tech Stack',   icon: Cpu, color: '#3b82f6' },
  { num: '★4.9', label: 'Upwork',      icon: Users, color: '#f59e0b' },
];

const SOCIAL = [
  { label: 'GitHub',   url: 'https://github.com/JhonsonAyalew',                          Icon: Github },
  { label: 'LinkedIn', url: 'https://linkedin.com/in/jhonson-ayalew-a3738138b',           Icon: Linkedin },
  { label: 'Portfolio',url: 'https://portfolio-chi-seven-11.vercel.app',                  Icon: Globe },
];

const TECH_PILLS = ['Python', 'React', 'Node.js', 'Playwright', 'pandas', 'PostgreSQL', 'AI Labeling', 'ETL'];

export default function HeroSection({ onSuggest }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [phase, setPhase] = useState('typing'); // 'typing' | 'waiting' | 'erasing'

  // Typewriter effect
  useEffect(() => {
    const target = ROLES[roleIndex];
    let timeout;
    if (phase === 'typing') {
      if (displayed.length < target.length) {
        timeout = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 68);
      } else {
        timeout = setTimeout(() => setPhase('waiting'), 1800);
      }
    } else if (phase === 'waiting') {
      timeout = setTimeout(() => setPhase('erasing'), 400);
    } else if (phase === 'erasing') {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(d => d.slice(0, -1)), 36);
      } else {
        setRoleIndex(i => (i + 1) % ROLES.length);
        setPhase('typing');
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, phase, roleIndex]);

  return (
    <motion.div
      variants={pageTransition} initial="hidden" animate="visible" exit="exit"
      style={{
        width: '100%', height: '100%',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '0 5%', position: 'relative', overflow: 'hidden',
      }}
    >
      {/* Decorative grid lines */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0,
        backgroundImage: 'linear-gradient(rgba(45,212,191,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(45,212,191,0.03) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />

      {/* Radial glow */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '700px', height: '500px',
        background: 'radial-gradient(ellipse at center, rgba(45,212,191,0.07) 0%, transparent 68%)',
        pointerEvents: 'none', zIndex: 0,
      }} />

      <div style={{ width: '100%', maxWidth: '1020px', position: 'relative', zIndex: 1 }}>

        {/* ── TOP ROW: location + status ── */}
        <motion.div
          variants={fadeInUp} initial="hidden" animate="visible"
          style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '28px', flexWrap: 'wrap' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <MapPin size={11} color="var(--primary-teal)" strokeWidth={2} />
            <span style={{ fontFamily: 'Inter', fontSize: '0.62rem', color: 'var(--text-muted)', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
              Addis Ababa, Ethiopia
            </span>
          </div>
          <div style={{ width: '1px', height: '12px', background: 'var(--border-subtle)' }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--primary-teal)', boxShadow: '0 0 8px var(--primary-teal)', animation: 'statusBlink 2s ease-in-out infinite' }} />
            <span style={{ fontFamily: 'Inter', fontSize: '0.62rem', color: 'var(--primary-teal)', letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: '500' }}>
              Available for hire
            </span>
          </div>
        </motion.div>

        {/* ── MAIN TWO-COLUMN LAYOUT ── */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '48px', alignItems: 'center' }} className="hero-main-grid">

          {/* LEFT COLUMN */}
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">

            {/* Name */}
            <motion.div variants={fadeInUp} style={{ marginBottom: '16px' }}>
              <div style={{
                fontFamily: 'Outfit', fontWeight: '800',
                fontSize: 'clamp(3.2rem, 9vw, 6.4rem)',
                lineHeight: '0.9', letterSpacing: '-0.03em',
                color: 'var(--text-light)',
                position: 'relative',
              }}>
                <span style={{ display: 'block' }} className="glitch-container" data-text="JHONSON">JHONSON</span>
                <span className="gradient-text" style={{ display: 'block' }}>AYALEW</span>
              </div>
            </motion.div>

            {/* Typewriter role */}
            <motion.div variants={fadeInUp} style={{ marginBottom: '20px', minHeight: '34px', display: 'flex', alignItems: 'center' }}>
              <div style={{
                fontFamily: 'Space Mono', fontSize: 'clamp(0.9rem, 2.2vw, 1.15rem)',
                color: 'var(--primary-teal)', letterSpacing: '0.02em', display: 'flex', alignItems: 'center', gap: '2px',
              }}>
                <span style={{ color: 'var(--primary-emerald)', marginRight: '6px', opacity: 0.7 }}>&gt;</span>
                {displayed}
                <span className="typing-cursor" />
              </div>
            </motion.div>

            {/* Bio */}
            <motion.p variants={fadeInUp} style={{
              fontFamily: 'Inter', fontSize: '0.88rem',
              color: 'var(--text-muted)', marginBottom: '26px',
              lineHeight: '1.85', maxWidth: '460px',
            }}>
              CS graduate building production-grade automation pipelines, data systems, and web products — shipping for global clients from Addis Ababa via Upwork and direct contracts.
            </motion.p>

            {/* CTA buttons */}
            <motion.div variants={fadeInUp} style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '28px' }}>
              <button
                className="btn-teal"
                onClick={() => onSuggest('Show me your projects')}
                data-cursor
                style={{ padding: '12px 28px', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '8px' }}
              >
                View Projects
                <ArrowRight size={14} strokeWidth={2.5} />
              </button>
              <button
                onClick={() => onSuggest('How can I hire Jhonson?')}
                data-cursor
                style={{
                  padding: '12px 24px', background: 'transparent',
                  border: '1px solid var(--border-subtle)', borderRadius: '30px',
                  color: 'var(--text-muted)', fontFamily: 'Inter',
                  fontSize: '0.8rem', fontWeight: '500',
                  cursor: 'none', transition: 'all 0.3s',
                  display: 'flex', alignItems: 'center', gap: '8px',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--primary-teal)'; e.currentTarget.style.color = 'var(--text-light)'; e.currentTarget.style.boxShadow = '0 0 24px rgba(45,212,191,0.1)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-subtle)'; e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                Hire Me
              </button>
            </motion.div>

            {/* Tech stack pills */}
            <motion.div variants={fadeInUp} style={{ display: 'flex', flexWrap: 'wrap', gap: '7px', marginBottom: '26px' }}>
              {TECH_PILLS.map((t, i) => (
                <span key={t} style={{
                  padding: '4px 12px', borderRadius: '20px',
                  background: i === 0 ? 'rgba(45,212,191,0.12)' : 'rgba(45,212,191,0.05)',
                  border: `1px solid ${i === 0 ? 'rgba(45,212,191,0.4)' : 'rgba(45,212,191,0.13)'}`,
                  fontSize: '0.6rem', letterSpacing: '0.06em',
                  color: i === 0 ? 'var(--primary-teal)' : 'var(--text-muted)',
                  fontFamily: 'Inter', fontWeight: '500',
                  transition: 'all 0.25s',
                }}>{t}</span>
              ))}
            </motion.div>

            {/* Social links */}
            <motion.div variants={fadeInUp} style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
              {SOCIAL.map(({ label, url, Icon }) => (
                <a key={label} href={url} target="_blank" rel="noreferrer" data-cursor
                  title={label}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '6px',
                    fontSize: '0.68rem', letterSpacing: '0.08em',
                    color: 'var(--text-muted)', textDecoration: 'none',
                    textTransform: 'uppercase', transition: 'all 0.25s',
                    borderBottom: '1px solid transparent', paddingBottom: '1px',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.color = 'var(--primary-teal)'; e.currentTarget.style.borderBottomColor = 'var(--primary-emerald)'; }}
                  onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.borderBottomColor = 'transparent'; }}
                >
                  <Icon size={13} strokeWidth={1.75} />
                  {label}
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN — stat cards */}
          <motion.div
            variants={staggerContainer} initial="hidden" animate="visible"
            style={{ display: 'flex', flexDirection: 'column', gap: '10px', minWidth: '150px' }}
            className="hero-stat-col"
          >
            {STATS.map(({ num, label, icon: Icon, color }) => (
              <motion.div
                key={label}
                variants={cardItem}
                className="glass-card teal-glow-border"
                style={{ padding: '18px 22px', borderRadius: '16px', textAlign: 'right', position: 'relative', overflow: 'hidden' }}
                whileHover={{ y: -4, x: -2, transition: { duration: 0.18 } }}
              >
                {/* Icon top-left */}
                <div style={{
                  position: 'absolute', top: '14px', left: '14px',
                  width: '26px', height: '26px', borderRadius: '8px',
                  background: `${color}18`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Icon size={13} color={color} strokeWidth={2} />
                </div>

                <div style={{
                  fontFamily: 'Outfit', fontWeight: '800',
                  fontSize: '2rem', lineHeight: '1',
                  color: color, letterSpacing: '-0.02em',
                }}>
                  {num}
                </div>
                <div style={{
                  fontSize: '0.5rem', letterSpacing: '0.2em',
                  textTransform: 'uppercase', color: 'var(--text-muted)',
                  marginTop: '4px', fontFamily: 'Inter', fontWeight: '500',
                }}>
                  {label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ── BOTTOM BAR — coordinates + prompt ── */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }}
          style={{
            marginTop: '32px', paddingTop: '18px',
            borderTop: '1px solid var(--border-subtle)',
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            flexWrap: 'wrap', gap: '8px',
          }}
        >
          <span style={{ fontFamily: 'Space Mono', fontSize: '0.55rem', color: 'var(--text-muted)', letterSpacing: '0.16em' }}>
            ETH · 9.0320°N 38.7469°E · ADDIS ABABA
          </span>
          <span style={{ fontFamily: 'Inter', fontSize: '0.6rem', color: 'var(--text-muted)', letterSpacing: '0.14em', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Database size={11} color="var(--primary-teal)" strokeWidth={2} />
            ASK THE AI ANYTHING BELOW
          </span>
        </motion.div>
      </div>

      <style>{`
        @media(max-width:760px){
          .hero-main-grid{ grid-template-columns:1fr !important; gap:24px !important; }
          .hero-stat-col{ flex-direction:row !important; flex-wrap:wrap !important; gap:8px !important; }
          .hero-stat-col > div{ flex:1; min-width:120px; text-align:left !important; }
          .hero-stat-col > div > div:last-child { text-align:left !important; }
        }
      `}</style>
    </motion.div>
  );
}

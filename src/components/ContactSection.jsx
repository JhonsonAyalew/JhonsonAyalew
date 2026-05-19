import { useState } from 'react';
import { motion } from 'framer-motion';
import { pageTransition, staggerContainer, fadeInUp, cardItem } from '../utils/animationVariants.js';

const CONTACT_LINKS = [
  { label:'Email', value:'jhonsonayalew21@gmail.com', icon:'✉', href:'mailto:jhonsonayalew21@gmail.com' },
  { label:'GitHub', value:'github.com/JhonsonAyalew', icon:'⬡', href:'https://github.com/JhonsonAyalew' },
  { label:'LinkedIn', value:'in/jhonson-ayalew-a3738138b', icon:'◆', href:'https://linkedin.com/in/jhonson-ayalew-a3738138b' },
  { label:'Portfolio', value:'portfolio-chi-seven-11.vercel.app', icon:'▷', href:'https://portfolio-chi-seven-11.vercel.app' },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({ name:'', email:'', message:'' });
  const [sent, setSent] = useState(false);

  const handleSubmit = () => {
    if (formData.name && formData.email && formData.message) {
      setSent(true);
      setTimeout(() => setSent(false), 3000);
      setFormData({ name:'', email:'', message:'' });
    }
  };

  return (
    <motion.div variants={pageTransition} initial="hidden" animate="visible" exit="exit"
      style={{ width:'100%', height:'100%', display:'flex', alignItems:'center', justifyContent:'center', padding:'0 24px' }}>
      <div style={{ width:'100%', maxWidth:'900px' }}>
        <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="section-label" style={{ marginBottom:'10px' }}>Contact</motion.div>
        <motion.h2 variants={fadeInUp} initial="hidden" animate="visible" transition={{ delay:0.1 }}
          style={{ fontFamily:'Bebas Neue', fontSize:'clamp(1.8rem,4vw,3rem)', color:'var(--text-primary)', marginBottom:'22px', lineHeight:1 }}>
          Let's <span style={{color:'var(--red-vivid)'}}>Connect</span>
        </motion.h2>

        <div className="contact-grid">
          {/* Left */}
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            <p style={{ marginBottom:'18px', fontSize:'0.58rem', color:'var(--text-muted)', fontFamily:'Space Mono', letterSpacing:'0.04em', lineHeight:'1.8' }}>
              Available for freelance contracts, remote roles, data engineering projects, and interesting collaborations. Response within 24 hours.
            </p>
            <div style={{ display:'flex', flexDirection:'column', gap:'7px' }}>
              {CONTACT_LINKS.map(link => (
                <motion.a key={link.label} href={link.href} target="_blank" rel="noreferrer"
                  variants={cardItem} className="glass-card red-glow-border" data-cursor
                  style={{ padding:'14px 18px', display:'flex', alignItems:'center', gap:'12px', textDecoration:'none', color:'inherit', cursor:'none' }}>
                  <div style={{ width:'30px', height:'30px', background:'rgba(139,26,26,0.14)', border:'1px solid rgba(139,26,26,0.28)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'0.85rem', color:'var(--red-vivid)', flexShrink:0 }}>{link.icon}</div>
                  <div>
                    <div style={{ fontSize:'0.46rem', letterSpacing:'0.14em', color:'var(--text-muted)', marginBottom:'2px' }}>{link.label.toUpperCase()}</div>
                    <div style={{ fontSize:'0.6rem', color:'var(--text-secondary)', fontFamily:'Space Mono' }}>{link.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>
            <motion.div variants={fadeInUp} style={{ marginTop:'14px', padding:'11px 14px', background:'rgba(139,26,26,0.06)', border:'1px solid rgba(139,26,26,0.2)', display:'flex', alignItems:'center', gap:'10px' }}>
              <div style={{ width:'7px', height:'7px', borderRadius:'50%', background:'var(--red-vivid)', boxShadow:'0 0 8px var(--red-vivid)', animation:'statusBlink 2s ease-in-out infinite' }} />
              <span style={{ fontSize:'0.55rem', letterSpacing:'0.1em', color:'var(--text-secondary)', fontFamily:'Space Mono' }}>
                AVAILABLE — UPWORK + DIRECT HIRE
              </span>
            </motion.div>
          </motion.div>
          {/* Right: Form */}
          <motion.div variants={fadeInUp} initial="hidden" animate="visible" transition={{ delay:0.2 }}>
            <div className="glass-card" style={{ padding:'24px' }}>
              <div style={{ marginBottom:'20px', fontSize:'0.52rem', letterSpacing:'0.22em', color:'var(--text-muted)' }}>SEND A MESSAGE</div>
              <div style={{ display:'flex', flexDirection:'column', gap:'18px' }}>
                {[
                  { key:'name', label:'YOUR NAME', placeholder:'How should I call you?' },
                  { key:'email', label:'EMAIL', placeholder:'your@email.com' },
                ].map(f => (
                  <div key={f.key}>
                    <label style={{ display:'block', fontSize:'0.46rem', letterSpacing:'0.14em', color:'var(--text-muted)', marginBottom:'6px' }}>{f.label}</label>
                    <input className="contact-input" placeholder={f.placeholder} value={formData[f.key]}
                      onChange={e=>setFormData(d=>({...d,[f.key]:e.target.value}))} data-cursor />
                  </div>
                ))}
                <div>
                  <label style={{ display:'block', fontSize:'0.46rem', letterSpacing:'0.14em', color:'var(--text-muted)', marginBottom:'6px' }}>MESSAGE</label>
                  <textarea className="contact-input" placeholder="Tell me about your project..." rows={3}
                    value={formData.message} onChange={e=>setFormData(d=>({...d,message:e.target.value}))}
                    style={{ resize:'none' }} data-cursor />
                </div>
                <button className="btn-red" onClick={handleSubmit} data-cursor style={{ width:'100%' }}>
                  {sent ? '✓ MESSAGE SENT' : 'SEND MESSAGE →'}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

import { useState } from 'react';
import { motion } from 'framer-motion';
import { pageTransition, staggerContainer, fadeInUp, cardItem } from '../utils/animationVariants.js';

const CONTACT_LINKS = [
  { label:'Email', value:'jhonsonayalew21@gmail.com', icon:'✉', href:'mailto:jhonsonayalew21@gmail.com' },
  { label:'GitHub', value:'github.com/JhonsonAyalew', icon:'⬡', href:'https://github.com/JhonsonAyalew' },
  { label:'LinkedIn', value:'in/jhonson-ayalew-a3738138b', icon:'◆', href:'https://linkedin.com/in/jhonson-ayalew-a3738138b' }
  
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
      style={{ width:'100%', height:'100%', display:'flex', alignItems:'center', justifyContent:'center', padding:'0 16px' }}>
      <div style={{ width:'100%', maxWidth:'900px' }}>

        <motion.div variants={fadeInUp} initial="hidden" animate="visible" style={{ display:'flex', alignItems:'center', gap:'10px', marginBottom:'12px' }}>
          <div style={{ fontSize:'0.42rem', color:'var(--cyan-dim)', letterSpacing:'0.3em', fontFamily:'Orbitron', border:'1px solid rgba(0,180,255,0.2)', padding:'4px 10px', background:'rgba(0,180,255,0.04)' }}>
            CHANNEL: OPEN / SECURE COMM
          </div>
        </motion.div>

        <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="section-label" style={{ marginBottom:'10px' }}>Contact</motion.div>
        <motion.h2 variants={fadeInUp} initial="hidden" animate="visible" transition={{ delay:0.1 }}
          style={{ fontFamily:'Orbitron', fontWeight:'900', fontSize:'clamp(1.6rem,4vw,2.8rem)', color:'var(--text-primary)', marginBottom:'20px', lineHeight:1 }}>
          Let's <span style={{color:'var(--cyan)', textShadow:'0 0 20px rgba(0,212,255,0.4)'}}>Connect</span>
        </motion.h2>

        <div className="contact-grid">
          {/* Left */}
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            <p style={{ marginBottom:'16px', fontSize:'0.58rem', color:'var(--text-muted)', fontFamily:'Share Tech Mono', letterSpacing:'0.04em', lineHeight:'1.9', borderLeft:'2px solid rgba(0,180,255,0.15)', paddingLeft:'12px' }}>
              Available for freelance contracts, remote roles, data engineering projects, and interesting collaborations. Response within 24 hours.
            </p>
            <div style={{ display:'flex', flexDirection:'column', gap:'6px' }}>
              {CONTACT_LINKS.map(link => (
                <motion.a key={link.label} href={link.href} target="_blank" rel="noreferrer"
                  variants={cardItem} className="glass-card cyan-border" data-cursor
                  style={{ padding:'12px 16px', display:'flex', alignItems:'center', gap:'12px', textDecoration:'none', color:'inherit', cursor:'none' }}>
                  <div style={{ width:'28px', height:'28px', background:'rgba(0,180,255,0.07)', border:'1px solid rgba(0,180,255,0.2)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'0.85rem', color:'var(--cyan)', flexShrink:0 }}>{link.icon}</div>
                  <div>
                    <div style={{ fontSize:'0.44rem', letterSpacing:'0.16em', color:'var(--cyan-dim)', marginBottom:'2px', fontFamily:'Orbitron' }}>{link.label.toUpperCase()}</div>
                    <div style={{ fontSize:'0.58rem', color:'var(--text-secondary)', fontFamily:'Share Tech Mono' }}>{link.value}</div>
                  </div>
                  <div style={{ marginLeft:'auto', fontSize:'0.6rem', color:'var(--text-dim)', fontFamily:'Share Tech Mono' }}>↗</div>
                </motion.a>
              ))}
            </div>
            <motion.div variants={fadeInUp} style={{ marginTop:'12px', padding:'10px 14px', background:'rgba(0,255,204,0.04)', border:'1px solid rgba(0,255,204,0.15)', display:'flex', alignItems:'center', gap:'10px' }}>
              <div className="status-dot" />
              <span style={{ fontSize:'0.52rem', letterSpacing:'0.1em', color:'var(--teal)', fontFamily:'Orbitron' }}>
                AVAILABLE — UPWORK + DIRECT HIRE
              </span>
            </motion.div>
          </motion.div>

          {/* Right: Form */}
          <motion.div variants={fadeInUp} initial="hidden" animate="visible" transition={{ delay:0.2 }}>
            <div className="glass-card tactical-frame" style={{ padding:'22px' }}>
              <div style={{ marginBottom:'18px', fontSize:'0.5rem', letterSpacing:'0.24em', color:'var(--cyan-dim)', fontFamily:'Orbitron' }}>SEND TRANSMISSION</div>
              <div style={{ display:'flex', flexDirection:'column', gap:'16px' }}>
                {[
                  { key:'name', label:'CALLSIGN', placeholder:'How should I call you?' },
                  { key:'email', label:'FREQ / EMAIL', placeholder:'your@email.com' },
                ].map(f => (
                  <div key={f.key}>
                    <label style={{ display:'block', fontSize:'0.44rem', letterSpacing:'0.16em', color:'var(--text-muted)', marginBottom:'6px', fontFamily:'Orbitron' }}>{f.label}</label>
                    <input className="contact-input" placeholder={f.placeholder} value={formData[f.key]}
                      onChange={e=>setFormData(d=>({...d,[f.key]:e.target.value}))} data-cursor />
                  </div>
                ))}
                <div>
                  <label style={{ display:'block', fontSize:'0.44rem', letterSpacing:'0.16em', color:'var(--text-muted)', marginBottom:'6px', fontFamily:'Orbitron' }}>MESSAGE</label>
                  <textarea className="contact-input" placeholder="Describe your mission..." rows={3}
                    value={formData.message} onChange={e=>setFormData(d=>({...d,message:e.target.value}))}
                    style={{ resize:'none' }} data-cursor />
                </div>
                <button className="btn-primary" onClick={handleSubmit} data-cursor style={{ width:'100%', justifyContent:'center', display:'flex', alignItems:'center', gap:'8px' }}>
                  {sent ? '✓ TRANSMITTED' : 'TRANSMIT →'}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

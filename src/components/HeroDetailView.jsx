import { motion } from 'framer-motion';
import { slideLeft, slideRight, pageTransition } from '../utils/animationVariants.js';
import TypingText from './TypingText.jsx';

const HERO_DETAILS = {
  stats: { title:'6+ Projects / 3yr / 10+ Tech', content:"These are real deployed projects — a live business website (concreterent.com), active Upwork pipelines scraping Forbes and CNBC, open-source automation systems on GitHub, and a decentralized chat app. 3 years of shipping real things." },
  tagline: { title:'Data & Automation Engineer', content:"My core identity: Python-first engineer who builds data pipelines, automation systems, and web products. Data & Automation means I take messy raw data from the web, transform it, and deliver clean structured outputs." },
  intro: { title:'Who is Jhonson Ayalew?', content:"CS graduate from Addis Ababa, Ethiopia building production-grade automation and web systems for global clients. Active on Upwork, partnered with Hurunguu, and building open-source Python tools on GitHub." },
};

export default function HeroDetailView({ detailType = 'intro', aiContent, onBack }) {
  const detail = HERO_DETAILS[detailType] || HERO_DETAILS.intro;
  return (
    <motion.div variants={pageTransition} initial="hidden" animate="visible" exit="exit"
      style={{ width:'100%', height:'100%', display:'flex', alignItems:'center', justifyContent:'center', padding:'0 5%' }}>
      <div className="detail-grid section-pad" style={{ maxWidth:'1000px' }}>
        <motion.div variants={slideLeft}>
          <div className="section-label" style={{ marginBottom:'18px' }}>Hero Detail</div>
          <h1 style={{ fontFamily:'Outfit', fontWeight:'800', fontSize:'clamp(1.6rem,3.5vw,2.6rem)', lineHeight:'1.1', color:'var(--text-light)', marginBottom:'18px' }}>{detail.title}</h1>
          <div className="glass-card" style={{ padding:'24px', borderRadius:'14px' }}>
            <p style={{ fontFamily:'Inter', fontStyle:'italic', fontSize:'1rem', color:'var(--text-secondary)', lineHeight:'1.7' }}>{detail.content}</p>
          </div>
          <button onClick={onBack} data-cursor
            style={{ marginTop:'16px', background:'none', border:'1px solid var(--border-subtle)', borderRadius:'30px', color:'var(--text-muted)', fontFamily:'Inter', fontSize:'0.7rem', letterSpacing:'0.1em', padding:'8px 18px', cursor:'none', transition:'all 0.25s' }}
            onMouseEnter={e=>{e.target.style.borderColor='var(--primary-teal)';e.target.style.color='var(--text-secondary)'}}
            onMouseLeave={e=>{e.target.style.borderColor='var(--border-subtle)';e.target.style.color='var(--text-muted)'}}
          >← Back to Hero</button>
        </motion.div>

        <motion.div variants={slideRight}>
          <div className="glass-card" style={{ padding:'26px', maxHeight:'360px', overflowY:'auto', borderRadius:'14px' }}>
            <div style={{ marginBottom:'14px', display:'flex', alignItems:'center', gap:'10px' }}>
              <div style={{ width:'30px', height:'30px', borderRadius:'8px', background:'linear-gradient(135deg,var(--primary-teal),var(--primary-emerald))', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'0.65rem', fontWeight:'700', color:'var(--bg-deep)' }}>AI</div>
              <span style={{ fontSize:'0.55rem', letterSpacing:'0.18em', color:'var(--text-muted)', textTransform:'uppercase' }}>Jhonson AI — Detail</span>
            </div>
            {aiContent ? (
              <div style={{ fontFamily:'Inter', fontSize:'0.78rem', lineHeight:'1.9', color:'var(--text-secondary)' }}>
                <TypingText text={aiContent} speed={14} />
              </div>
            ) : (
              <div style={{ display:'flex', gap:'6px', padding:'8px 0' }}>
                {[0,200,400].map(d=>(
                  <div key={d} style={{ width:'6px', height:'6px', background:'var(--primary-teal)', borderRadius:'50%', animation:`typeBounce 1.2s infinite ${d}ms` }} />
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

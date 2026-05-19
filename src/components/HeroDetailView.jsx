import { motion } from 'framer-motion';
import { slideLeft, slideRight, pageTransition } from '../utils/animationVariants.js';
import TypingText from './TypingText.jsx';

const HERO_DETAILS = {
  stats: { title:'6+ Projects / 3yr / 10+ Tech', content:"These are real deployed projects — a live business website (concreterent.com), active Upwork pipelines scraping Forbes and CNBC, open-source automation systems on GitHub, and a decentralized chat app. 3 years of shipping real things." },
  tagline: { title:'Data & Automation Engineer', content:"My core identity: Python-first engineer who builds data pipelines, automation systems, and web products. Data & Automation means I take messy raw data from the web, transform it, and deliver clean structured outputs. AI Data Labeling means I create the training datasets that power modern AI systems." },
  intro: { title:'Who is Jhonson Ayalew?', content:"CS graduate from Addis Ababa, Ethiopia building production-grade automation and web systems for global clients. Active on Upwork, partnered with Hurunguu, and building open-source Python tools on GitHub. My stack: Python for data/automation, React+Node for web products, and deep expertise in AI data labeling." },
};

export default function HeroDetailView({ detailType = 'intro', aiContent, onBack }) {
  const detail = HERO_DETAILS[detailType] || HERO_DETAILS.intro;
  return (
    <motion.div variants={pageTransition} initial="hidden" animate="visible" exit="exit"
      style={{ width:'100%', height:'100%', display:'flex', alignItems:'center', justifyContent:'center', padding:'0 24px' }}>
      <div className="detail-grid section-pad" style={{ maxWidth:'980px' }}>
        <motion.div variants={slideLeft}>
          <div className="section-label" style={{ marginBottom:'16px', fontSize:'0.52rem' }}>HERO DETAIL</div>
          <h1 style={{ fontFamily:'Bebas Neue', fontSize:'clamp(1.6rem,3.5vw,2.8rem)', lineHeight:1, color:'var(--text-primary)', marginBottom:'16px' }}>{detail.title}</h1>
          <div className="glass-card" style={{ padding:'22px' }}>
            <p style={{ fontFamily:'Crimson Pro', fontStyle:'italic', fontSize:'0.98rem', color:'var(--text-secondary)', lineHeight:'1.7' }}>{detail.content}</p>
          </div>
          <button onClick={onBack} data-cursor
            style={{ marginTop:'16px', background:'none', border:'1px solid var(--border-subtle)', color:'var(--text-muted)', fontFamily:'Space Mono', fontSize:'0.52rem', letterSpacing:'0.14em', padding:'8px 16px', cursor:'none', transition:'all 0.25s' }}
            onMouseEnter={e=>{e.target.style.borderColor='var(--red-ember)';e.target.style.color='var(--text-secondary)'}}
            onMouseLeave={e=>{e.target.style.borderColor='var(--border-subtle)';e.target.style.color='var(--text-muted)'}}
          >← BACK TO HERO</button>
        </motion.div>
        <motion.div variants={slideRight}>
          <div className="glass-card" style={{ padding:'26px', maxHeight:'360px', overflowY:'auto' }}>
            <div style={{ marginBottom:'14px', display:'flex', alignItems:'center', gap:'10px' }}>
              <div style={{ width:'28px', height:'28px', background:'radial-gradient(circle,var(--red-ember),var(--burgundy))', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'0.8rem' }}>◈</div>
              <span style={{ fontSize:'0.52rem', letterSpacing:'0.2em', color:'var(--text-muted)' }}>JHONSON AI — DETAIL</span>
            </div>
            {aiContent ? (
              <div style={{ fontFamily:'Space Mono', fontSize:'0.66rem', lineHeight:'1.9', color:'var(--text-secondary)' }}>
                <TypingText text={aiContent} speed={14} />
              </div>
            ) : (
              <div style={{ display:'flex', gap:'5px', padding:'8px 0' }}>
                {[0,200,400].map(d=>(
                  <div key={d} style={{ width:'5px', height:'5px', background:'var(--red-ember)', borderRadius:'50%', animation:`typeBounce 1.2s infinite ${d}ms` }} />
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

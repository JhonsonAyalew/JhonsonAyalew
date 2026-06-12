import { motion, AnimatePresence } from 'framer-motion';
import { slideLeft, slideRight, pageTransition } from '../utils/animationVariants.js';
import { ABOUT_DETAILS } from '../data/knowledgeBase.js';
import TypingText from './TypingText.jsx';

export default function AboutDetailView({ detailType = 'location', aiContent, onBack }) {
  const detail = ABOUT_DETAILS[detailType] || ABOUT_DETAILS.location;
  return (
    <motion.div variants={pageTransition} initial="hidden" animate="visible" exit="exit"
      style={{ width:'100%', height:'100%', display:'flex', alignItems:'center', justifyContent:'center', padding:'0 5%' }}>
      <div className="detail-grid section-pad" style={{ maxWidth:'1000px' }}>
        <AnimatePresence mode="wait">
          <motion.div key={detailType} variants={slideLeft} initial="hidden" animate="visible" exit="exit">
            <div className="section-label" style={{ marginBottom:'18px' }}>About — Detail</div>
            <div className="glass-card" style={{ padding:'28px', marginBottom:'14px', borderRadius:'14px' }}>
              <div style={{ fontSize:'0.5rem', letterSpacing:'0.22em', color:'var(--primary-teal)', marginBottom:'10px', textTransform:'uppercase' }}>{detail.title}</div>
              <h2 style={{ fontFamily:'Outfit', fontWeight:'800', fontSize:'clamp(1.6rem,3.5vw,2.4rem)', color:'var(--text-light)', marginBottom:'16px', lineHeight:'1.1' }}>
                {detail.title}
              </h2>
              <p style={{ fontFamily:'Inter', fontStyle:'italic', fontSize:'1rem', color:'var(--text-secondary)', lineHeight:'1.7' }}>
                {detail.content}
              </p>
            </div>
            <button onClick={onBack} data-cursor
              style={{ background:'none', border:'1px solid var(--border-subtle)', borderRadius:'30px', color:'var(--text-muted)', fontFamily:'Inter', fontSize:'0.7rem', letterSpacing:'0.1em', padding:'8px 18px', cursor:'none', transition:'all 0.25s' }}
              onMouseEnter={e=>{e.target.style.borderColor='var(--primary-teal)';e.target.style.color='var(--text-secondary)'}}
              onMouseLeave={e=>{e.target.style.borderColor='var(--border-subtle)';e.target.style.color='var(--text-muted)'}}
            >← Back to About</button>
          </motion.div>
        </AnimatePresence>

        <motion.div variants={slideRight}>
          <div className="glass-card" style={{ padding:'26px', maxHeight:'360px', overflowY:'auto', borderRadius:'14px' }}>
            <div style={{ marginBottom:'14px', display:'flex', alignItems:'center', gap:'10px' }}>
              <div style={{ width:'30px', height:'30px', borderRadius:'8px', background:'linear-gradient(135deg,var(--primary-teal),var(--primary-emerald))', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'0.65rem', fontWeight:'700', color:'var(--bg-deep)' }}>AI</div>
              <span style={{ fontSize:'0.55rem', letterSpacing:'0.18em', color:'var(--text-muted)', textTransform:'uppercase' }}>Jhonson AI — {detail.title}</span>
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

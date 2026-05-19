import { motion, AnimatePresence } from 'framer-motion';
import { slideLeft, slideRight, pageTransition } from '../utils/animationVariants.js';
import { ABOUT_DETAILS } from '../data/knowledgeBase.js';
import TypingText from './TypingText.jsx';

export default function AboutDetailView({ detailType = 'location', aiContent, onBack }) {
  const detail = ABOUT_DETAILS[detailType] || ABOUT_DETAILS.location;
  return (
    <motion.div variants={pageTransition} initial="hidden" animate="visible" exit="exit"
      style={{ width:'100%', height:'100%', display:'flex', alignItems:'center', justifyContent:'center', padding:'0 24px' }}>
      <div className="detail-grid section-pad" style={{ maxWidth:'980px' }}>
        {/* Left */}
        <AnimatePresence mode="wait">
          <motion.div key={detailType} variants={slideLeft} initial="hidden" animate="visible" exit="exit">
            <div className="section-label" style={{ marginBottom:'16px', fontSize:'0.52rem' }}>ABOUT — DETAIL</div>
            <div className="glass-card" style={{ padding:'28px', marginBottom:'12px' }}>
              <div style={{ fontSize:'0.46rem', letterSpacing:'0.24em', color:'var(--red-vivid)', marginBottom:'10px' }}>
                {detail.title.toUpperCase()}
              </div>
              <h2 style={{ fontFamily:'Bebas Neue', fontSize:'clamp(1.6rem,3.5vw,2.5rem)', color:'var(--text-primary)', marginBottom:'16px', lineHeight:'1' }}>
                {detail.title}
              </h2>
              <p style={{ fontFamily:'Crimson Pro', fontStyle:'italic', fontSize:'0.98rem', color:'var(--text-secondary)', lineHeight:'1.7' }}>
                {detail.content}
              </p>
            </div>
            <button onClick={onBack} data-cursor
              style={{ background:'none', border:'1px solid var(--border-subtle)', color:'var(--text-muted)', fontFamily:'Space Mono', fontSize:'0.52rem', letterSpacing:'0.14em', padding:'8px 16px', cursor:'none', transition:'all 0.25s' }}
              onMouseEnter={e=>{e.target.style.borderColor='var(--red-ember)';e.target.style.color='var(--text-secondary)'}}
              onMouseLeave={e=>{e.target.style.borderColor='var(--border-subtle)';e.target.style.color='var(--text-muted)'}}
            >← BACK TO ABOUT</button>
          </motion.div>
        </AnimatePresence>
        {/* Right */}
        <motion.div variants={slideRight}>
          <div className="glass-card" style={{ padding:'26px', maxHeight:'360px', overflowY:'auto' }}>
            <div style={{ marginBottom:'14px', display:'flex', alignItems:'center', gap:'10px' }}>
              <div style={{ width:'28px', height:'28px', background:'radial-gradient(circle,var(--red-ember),var(--burgundy))', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'0.8rem' }}>◈</div>
              <span style={{ fontSize:'0.52rem', letterSpacing:'0.2em', color:'var(--text-muted)' }}>JHONSON AI — {detail.title.toUpperCase()}</span>
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

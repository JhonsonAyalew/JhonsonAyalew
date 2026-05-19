import { motion, AnimatePresence } from 'framer-motion';
import { pageTransition, slideLeft, slideRight } from '../utils/animationVariants.js';
import { SKILLS, PROJECTS } from '../data/knowledgeBase.js';
import TypingText from './TypingText.jsx';

export default function SkillDetailView({ skillId, aiContent, onBack }) {
  const skill = SKILLS.find(s => s.id === skillId) || SKILLS[0];
  const relatedProjects = PROJECTS.filter(p => skill.relatedProjects?.includes(p.id));
  return (
    <motion.div variants={pageTransition} initial="hidden" animate="visible" exit="exit"
      style={{ width:'100%', height:'100%', display:'flex', alignItems:'center', justifyContent:'center', padding:'0 24px' }}>
      <div className="detail-grid section-pad" style={{ maxWidth:'980px' }}>
        {/* Left */}
        <AnimatePresence mode="wait">
          <motion.div key={skill.id} variants={slideLeft} initial="hidden" animate="visible" exit="exit">
            <div className="section-label" style={{ marginBottom:'14px', fontSize:'0.52rem' }}>SKILL DETAIL</div>
            <div className="glass-card" style={{ padding:'26px', marginBottom:'8px' }}>
              <div style={{ display:'flex', alignItems:'center', gap:'10px', marginBottom:'14px' }}>
                <div style={{ width:'8px', height:'8px', borderRadius:'50%', background:'var(--red-vivid)', boxShadow:'0 0 12px var(--red-vivid)' }} />
                <h2 style={{ fontFamily:'Bebas Neue', fontSize:'1.9rem', color:'var(--text-primary)', letterSpacing:'0.04em' }}>{skill.name}</h2>
              </div>
              <div style={{ fontSize:'0.46rem', letterSpacing:'0.2em', color:'var(--text-muted)', marginBottom:'14px' }}>{skill.category.toUpperCase()}</div>
              <div style={{ display:'flex', alignItems:'center', gap:'14px', marginBottom:'14px' }}>
                <div style={{ position:'relative', width:'64px', height:'64px', flexShrink:0 }}>
                  <svg width="64" height="64" viewBox="0 0 64 64">
                    <circle cx="32" cy="32" r="26" fill="none" stroke="var(--black-elevated)" strokeWidth="4" />
                    <motion.circle cx="32" cy="32" r="26" fill="none" stroke="var(--red-vivid)" strokeWidth="4" strokeLinecap="round"
                      strokeDasharray={`${2*Math.PI*26}`}
                      initial={{ strokeDashoffset: 2*Math.PI*26 }}
                      animate={{ strokeDashoffset: 2*Math.PI*26*(1-skill.level/100) }}
                      transition={{ duration:1.2, ease:[0.4,0,0.2,1] }}
                      style={{ transform:'rotate(-90deg)', transformOrigin:'50% 50%', filter:'drop-shadow(0 0 5px var(--red-vivid))' }}
                    />
                  </svg>
                  <div style={{ position:'absolute', inset:0, display:'flex', alignItems:'center', justifyContent:'center', fontFamily:'Bebas Neue', fontSize:'1rem', color:'var(--text-primary)' }}>
                    {skill.level}%
                  </div>
                </div>
                <p style={{ fontFamily:'Space Mono', fontSize:'0.58rem', color:'var(--text-secondary)', lineHeight:'1.7' }}>{skill.desc}</p>
              </div>
            </div>
            {relatedProjects.length > 0 && (
              <div className="glass-card" style={{ padding:'14px', marginBottom:'8px' }}>
                <div style={{ fontSize:'0.46rem', letterSpacing:'0.2em', color:'var(--text-muted)', marginBottom:'7px' }}>USED IN</div>
                {relatedProjects.map(p => (
                  <div key={p.id} style={{ display:'flex', alignItems:'center', gap:'8px', padding:'5px 0', borderBottom:'1px solid var(--border-subtle)', fontSize:'0.58rem', color:'var(--text-secondary)' }}>
                    <span>{p.icon}</span>{p.title}
                  </div>
                ))}
              </div>
            )}
            <button onClick={onBack} data-cursor
              style={{ background:'none', border:'1px solid var(--border-subtle)', color:'var(--text-muted)', fontFamily:'Space Mono', fontSize:'0.52rem', letterSpacing:'0.14em', padding:'8px 16px', cursor:'none', transition:'all 0.25s' }}
              onMouseEnter={e=>{e.target.style.borderColor='var(--red-ember)';e.target.style.color='var(--text-secondary)'}}
              onMouseLeave={e=>{e.target.style.borderColor='var(--border-subtle)';e.target.style.color='var(--text-muted)'}}
            >← ALL SKILLS</button>
          </motion.div>
        </AnimatePresence>
        {/* Right */}
        <motion.div variants={slideRight}>
          <div className="glass-card" style={{ padding:'26px', maxHeight:'460px', overflowY:'auto' }}>
            <div style={{ marginBottom:'14px', display:'flex', alignItems:'center', gap:'10px' }}>
              <div style={{ width:'28px', height:'28px', background:'radial-gradient(circle,var(--red-ember),var(--burgundy))', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'0.8rem' }}>◈</div>
              <span style={{ fontSize:'0.52rem', letterSpacing:'0.2em', color:'var(--text-muted)' }}>JHONSON AI — {skill.name.toUpperCase()}</span>
            </div>
            {aiContent ? (
              <div style={{ fontFamily:'Space Mono', fontSize:'0.66rem', lineHeight:'1.9', color:'var(--text-secondary)' }}>
                <TypingText text={aiContent} speed={14} />
              </div>
            ) : (
              <div style={{ display:'flex', gap:'5px' }}>
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

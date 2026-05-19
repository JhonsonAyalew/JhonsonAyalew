import { motion, AnimatePresence } from 'framer-motion';
import { pageTransition, slideLeft, slideRight } from '../utils/animationVariants.js';
import { PROJECTS } from '../data/knowledgeBase.js';
import ProjectCard from './ProjectCard.jsx';
import TypingText from './TypingText.jsx';

export default function ProjectDetailView({ projectId, aiContent, onBack }) {
  const project = PROJECTS.find(p => p.id === projectId) || PROJECTS[0];
  return (
    <motion.div variants={pageTransition} initial="hidden" animate="visible" exit="exit"
      style={{ width:'100%', height:'100%', display:'flex', alignItems:'center', justifyContent:'center', padding:'0 24px' }}>
      <div className="detail-grid section-pad" style={{ maxWidth:'980px' }}>
        {/* Left */}
        <AnimatePresence mode="wait">
          <motion.div key={project.id} variants={slideLeft} initial="hidden" animate="visible" exit="exit">
            <div className="section-label" style={{ marginBottom:'14px', fontSize:'0.52rem' }}>PROJECT DETAIL</div>
            <ProjectCard project={project} onClick={()=>{}} selected />
            <div className="glass-card" style={{ padding:'14px', marginTop:'8px' }}>
              <div style={{ fontSize:'0.46rem', letterSpacing:'0.2em', color:'var(--text-muted)', marginBottom:'8px' }}>TECH STACK</div>
              <div style={{ display:'flex', flexWrap:'wrap', gap:'5px' }}>
                {project.details.tech.map(t => (
                  <span key={t} style={{ padding:'3px 9px', background:'rgba(139,26,26,0.08)', border:'1px solid rgba(139,26,26,0.2)', fontSize:'0.52rem', color:'var(--red-vivid)', letterSpacing:'0.04em' }}>{t}</span>
                ))}
              </div>
            </div>
            <button onClick={onBack} data-cursor
              style={{ marginTop:'10px', background:'none', border:'1px solid var(--border-subtle)', color:'var(--text-muted)', fontFamily:'Space Mono', fontSize:'0.52rem', letterSpacing:'0.14em', padding:'8px 16px', cursor:'none', transition:'all 0.25s' }}
              onMouseEnter={e=>{e.target.style.borderColor='var(--red-ember)';e.target.style.color='var(--text-secondary)'}}
              onMouseLeave={e=>{e.target.style.borderColor='var(--border-subtle)';e.target.style.color='var(--text-muted)'}}
            >← ALL PROJECTS</button>
          </motion.div>
        </AnimatePresence>
        {/* Right */}
        <motion.div variants={slideRight}>
          <div className="glass-card" style={{ padding:'26px', maxHeight:'460px', overflowY:'auto' }}>
            <div style={{ marginBottom:'14px', display:'flex', alignItems:'center', gap:'10px' }}>
              <div style={{ width:'28px', height:'28px', background:'radial-gradient(circle,var(--red-ember),var(--burgundy))', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'0.8rem' }}>◈</div>
              <span style={{ fontSize:'0.52rem', letterSpacing:'0.2em', color:'var(--text-muted)' }}>JHONSON AI — {project.title.toUpperCase()}</span>
            </div>
            {aiContent ? (
              <div style={{ fontFamily:'Space Mono', fontSize:'0.66rem', lineHeight:'1.9', color:'var(--text-secondary)' }}>
                <TypingText text={aiContent} speed={14} />
              </div>
            ) : (
              <div>
                <div style={{ display:'flex', gap:'5px', marginBottom:'18px' }}>
                  {[0,200,400].map(d=>(
                    <div key={d} style={{ width:'5px', height:'5px', background:'var(--red-ember)', borderRadius:'50%', animation:`typeBounce 1.2s infinite ${d}ms` }} />
                  ))}
                </div>
                <div style={{ fontSize:'0.46rem', letterSpacing:'0.2em', color:'var(--text-muted)', marginBottom:'8px' }}>KEY HIGHLIGHTS</div>
                {project.details.highlights.map((h, i) => (
                  <div key={i} style={{ display:'flex', alignItems:'flex-start', gap:'8px', padding:'7px 0', borderBottom:'1px solid var(--border-subtle)', fontSize:'0.62rem', color:'var(--text-secondary)' }}>
                    <span style={{ color:'var(--red-vivid)', flexShrink:0 }}>→</span>{h}
                  </div>
                ))}
              </div>
            )}
            {aiContent && (
              <div style={{ marginTop:'18px', paddingTop:'14px', borderTop:'1px solid var(--border-subtle)' }}>
                <div style={{ fontSize:'0.46rem', letterSpacing:'0.2em', color:'var(--text-muted)', marginBottom:'6px' }}>HIGHLIGHTS</div>
                {project.details.highlights.map((h, i) => (
                  <div key={i} style={{ display:'flex', alignItems:'flex-start', gap:'8px', padding:'5px 0', fontSize:'0.58rem', color:'var(--text-muted)' }}>
                    <span style={{ color:'var(--red-ember)', flexShrink:0 }}>→</span>{h}
                  </div>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

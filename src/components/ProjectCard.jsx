import { motion } from 'framer-motion';
import { cardItem } from '../utils/animationVariants.js';

export default function ProjectCard({ project, onClick, compact = false }) {
  return (
    <motion.div
      variants={cardItem}
      onClick={() => onClick(project)}
      className="glass-card red-glow-border"
      data-cursor
      style={{ padding: compact ? '16px' : '22px', cursor:'none', position:'relative', overflow:'hidden' }}
      whileHover={{ y:-3, transition:{ duration:0.2 } }}
    >
      <div style={{
        position:'absolute', top:0, left:0, right:0, height:'2px',
        background:`linear-gradient(90deg,transparent,${project.color},transparent)`,
        opacity:0.9,
      }} />

      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:'10px' }}>
        <div style={{ display:'flex', alignItems:'center', gap:'10px' }}>
          <span style={{ fontSize: compact ? '1.1rem' : '1.4rem' }}>{project.icon}</span>
          <div>
            <div style={{
              fontFamily:'Bebas Neue',
              fontSize: compact ? '0.95rem' : '1.1rem',
              letterSpacing:'0.04em', color:'var(--text-primary)', lineHeight:'1.1',
            }}>{project.title}</div>
            {project.details?.status && (
              <div style={{ fontSize:'0.46rem', color:'var(--red-vivid)', letterSpacing:'0.12em', marginTop:'2px' }}>
                {project.details.status}
              </div>
            )}
          </div>
        </div>
        <div style={{ fontFamily:'Bebas Neue', fontSize:'1.4rem', color:'rgba(139,26,26,0.2)', lineHeight:1 }}>
          {String(project.id).padStart(2,'0')}
        </div>
      </div>

      {!compact && (
        <p style={{ fontSize:'0.58rem', color:'var(--text-muted)', lineHeight:'1.7', marginBottom:'12px', fontFamily:'Space Mono' }}>
          {project.shortDesc}
        </p>
      )}

      <div style={{ display:'flex', flexWrap:'wrap', gap:'5px' }}>
        {project.tags.slice(0, compact ? 2 : project.tags.length).map(tag => (
          <span key={tag} style={{
            padding:'3px 8px',
            background:'rgba(139,26,26,0.1)', border:'1px solid rgba(139,26,26,0.2)',
            fontSize:'0.46rem', letterSpacing:'0.08em', color:'var(--text-muted)',
          }}>{tag}</span>
        ))}
        {project.github && (
          <a href={project.github} target="_blank" rel="noreferrer"
            onClick={e=>e.stopPropagation()} data-cursor
            style={{
              marginLeft:'auto', padding:'3px 8px',
              border:'1px solid rgba(139,26,26,0.25)',
              fontSize:'0.46rem', color:'var(--red-vivid)',
              textDecoration:'none', letterSpacing:'0.08em',
              transition:'all 0.2s',
            }}
            onMouseEnter={e=>e.currentTarget.style.background='rgba(139,26,26,0.15)'}
            onMouseLeave={e=>e.currentTarget.style.background='transparent'}
          >GH ↗</a>
        )}
      </div>
    </motion.div>
  );
}

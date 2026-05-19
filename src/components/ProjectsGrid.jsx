import { motion } from 'framer-motion';
import { pageTransition, staggerContainer, fadeInUp } from '../utils/animationVariants.js';
import { PROJECTS } from '../data/knowledgeBase.js';
import ProjectCard from './ProjectCard.jsx';

export default function ProjectsGrid({ onSelectProject }) {
  return (
    <motion.div
      variants={pageTransition} initial="hidden" animate="visible" exit="exit"
      style={{ width:'100%', height:'100%', display:'flex', alignItems:'center', justifyContent:'center', padding:'0 24px', overflowY:'auto' }}
    >
      <div style={{ width:'100%', maxWidth:'980px' }}>
        <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="section-label" style={{ marginBottom:'10px' }}>
          Projects
        </motion.div>
        <motion.h2
          variants={fadeInUp} initial="hidden" animate="visible" transition={{ delay:0.1 }}
          style={{ fontFamily:'Bebas Neue', fontSize:'clamp(1.8rem,4vw,3rem)', color:'var(--text-primary)', marginBottom:'22px', lineHeight:1 }}
        >
          What I've <span style={{color:'var(--red-vivid)'}}>Built</span>
        </motion.h2>

        <motion.div variants={staggerContainer} initial="hidden" animate="visible">
          {/* Featured row */}
          <div style={{ marginBottom:'10px' }}>
            <ProjectCard project={PROJECTS[0]} onClick={onSelectProject} />
          </div>
          {/* Grid */}
          <div className="projects-grid-layout">
            {PROJECTS.slice(1).map(project => (
              <ProjectCard key={project.id} project={project} onClick={onSelectProject} />
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

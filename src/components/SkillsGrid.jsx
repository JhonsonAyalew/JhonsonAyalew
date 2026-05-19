import { motion } from 'framer-motion';
import { pageTransition, staggerContainer, fadeInUp } from '../utils/animationVariants.js';
import { SKILLS } from '../data/knowledgeBase.js';
import SkillCard from './SkillCard.jsx';

const CATEGORIES = ['Languages','Data & Automation','AI','Frontend','Backend','Security','Design'];

export default function SkillsGrid({ onSelectSkill }) {
  const grouped = CATEGORIES.reduce((acc, cat) => {
    const skills = SKILLS.filter(s => s.category === cat);
    if (skills.length) acc[cat] = skills;
    return acc;
  }, {});

  return (
    <motion.div
      variants={pageTransition} initial="hidden" animate="visible" exit="exit"
      style={{ width:'100%', height:'100%', display:'flex', alignItems:'center', justifyContent:'center', padding:'0 24px', overflowY:'auto' }}
    >
      <div style={{ width:'100%', maxWidth:'980px' }}>
        <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="section-label" style={{ marginBottom:'10px' }}>Skills</motion.div>
        <motion.h2
          variants={fadeInUp} initial="hidden" animate="visible" transition={{ delay:0.1 }}
          style={{ fontFamily:'Bebas Neue', fontSize:'clamp(1.8rem,4vw,3rem)', color:'var(--text-primary)', marginBottom:'22px', lineHeight:1 }}
        >
          Tech <span style={{color:'var(--red-vivid)'}}>Arsenal</span>
        </motion.h2>
        <motion.div variants={staggerContainer} initial="hidden" animate="visible">
          {Object.entries(grouped).map(([category, skills]) => (
            <motion.div key={category} style={{ marginBottom:'18px' }}>
              <div style={{
                fontSize:'0.48rem', letterSpacing:'0.24em', color:'var(--text-muted)',
                textTransform:'uppercase', marginBottom:'8px',
                borderLeft:'2px solid var(--red-ember)', paddingLeft:'10px',
              }}>{category}</div>
              <div className="skills-grid-layout">
                {skills.map(skill => (
                  <SkillCard key={skill.id} skill={skill} onClick={onSelectSkill} />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

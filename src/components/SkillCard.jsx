import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { cardItem } from '../utils/animationVariants.js';

export default function SkillCard({ skill, onClick, compact = false }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      variants={cardItem}
      onClick={() => onClick(skill)}
      className="glass-card red-glow-border"
      data-cursor
      style={{ padding: compact ? '14px 16px' : '18px 20px', cursor: 'none' }}
      whileHover={{ y: -2 }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{
            width: '6px', height: '6px', borderRadius: '50%',
            background: 'var(--red-vivid)',
            boxShadow: '0 0 8px var(--red-vivid)',
          }} />
          <span style={{
            fontFamily: 'Space Mono',
            fontSize: compact ? '0.65rem' : '0.72rem',
            color: 'var(--text-primary)',
            letterSpacing: '0.04em',
          }}>
            {skill.name}
          </span>
        </div>
        <span style={{
          fontFamily: 'Bebas Neue',
          fontSize: '1rem',
          color: 'var(--red-vivid)',
        }}>
          {skill.level}%
        </span>
      </div>

      {!compact && (
        <div style={{
          fontSize: '0.55rem', color: 'var(--text-muted)',
          marginBottom: '10px', letterSpacing: '0.1em',
          textTransform: 'uppercase',
        }}>
          {skill.category}
        </div>
      )}

      <div className="proficiency-bar">
        <motion.div
          className="proficiency-bar-fill"
          initial={{ width: 0 }}
          animate={{ width: inView ? `${skill.level}%` : 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
        />
      </div>
    </motion.div>
  );
}

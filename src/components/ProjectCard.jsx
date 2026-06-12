import { motion } from 'framer-motion';
import { cardItem } from '../utils/animationVariants.js';
import {
  Zap, GraduationCap, Search, Lock, Building2, Bot,
  ExternalLink, Github, ArrowUpRight
} from 'lucide-react';

const PROJECT_ICONS = {
  1: Zap,
  2: GraduationCap,
  3: Search,
  4: Lock,
  5: Building2,
  6: Bot,
};

export default function ProjectCard({ project, onClick, compact = false }) {
  const IconComponent = PROJECT_ICONS[project.id] || Zap;

  return (
    <motion.div
      variants={cardItem}
      onClick={() => onClick(project)}
      className="glass-card teal-glow-border"
      data-cursor
      style={{
        padding: compact ? '16px' : '22px 24px',
        cursor: 'none',
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '16px',
      }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
    >
      {/* Top gradient bar */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
        background: `linear-gradient(90deg, transparent, ${project.color || 'var(--primary-teal)'}, transparent)`,
        opacity: 0.85,
      }} />

      {/* Corner number watermark */}
      <div style={{
        position: 'absolute', top: '14px', right: '16px',
        fontFamily: 'Outfit', fontWeight: '800',
        fontSize: compact ? '1.4rem' : '1.8rem',
        color: 'rgba(45,212,191,0.07)',
        lineHeight: 1, userSelect: 'none',
        letterSpacing: '-0.04em',
      }}>
        {String(project.id).padStart(2, '0')}
      </div>

      {/* Icon + title row */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: compact ? '8px' : '12px' }}>
        <div style={{
          width: compact ? '36px' : '44px',
          height: compact ? '36px' : '44px',
          background: 'rgba(45,212,191,0.08)',
          border: '1px solid rgba(45,212,191,0.2)',
          borderRadius: '12px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0,
          transition: 'all 0.25s',
        }}>
          <IconComponent
            size={compact ? 16 : 20}
            color="var(--primary-teal)"
            strokeWidth={1.75}
          />
        </div>
        <div>
          <div style={{
            fontFamily: 'Outfit', fontWeight: '700',
            fontSize: compact ? '0.88rem' : '1rem',
            letterSpacing: '0.01em',
            color: 'var(--text-light)',
            lineHeight: '1.15',
          }}>
            {project.title}
          </div>
          {project.details?.status && (
            <div style={{
              fontSize: '0.5rem', color: 'var(--primary-teal)',
              letterSpacing: '0.12em', marginTop: '2px', textTransform: 'uppercase',
              fontFamily: 'Inter', fontWeight: '500',
            }}>
              {project.details.status}
            </div>
          )}
        </div>
      </div>

      {/* Description */}
      {!compact && (
        <p style={{
          fontSize: '0.72rem', color: 'var(--text-muted)',
          lineHeight: '1.75', marginBottom: '14px',
          fontFamily: 'Inter', paddingRight: '24px',
        }}>
          {project.shortDesc}
        </p>
      )}

      {/* Tags + GitHub link */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', alignItems: 'center' }}>
        {project.tags.slice(0, compact ? 2 : project.tags.length).map(tag => (
          <span key={tag} style={{
            padding: '3px 10px', borderRadius: '20px',
            background: 'rgba(45,212,191,0.07)',
            border: '1px solid rgba(45,212,191,0.16)',
            fontSize: '0.55rem', letterSpacing: '0.06em',
            color: 'var(--text-muted)', fontFamily: 'Inter',
          }}>{tag}</span>
        ))}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            onClick={e => e.stopPropagation()}
            data-cursor
            title="View on GitHub"
            style={{
              marginLeft: 'auto', padding: '4px 10px',
              display: 'flex', alignItems: 'center', gap: '4px',
              borderRadius: '20px',
              border: '1px solid rgba(45,212,191,0.28)',
              color: 'var(--primary-teal)', textDecoration: 'none',
              fontSize: '0.55rem', letterSpacing: '0.06em',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(45,212,191,0.12)'; e.currentTarget.style.borderColor = 'var(--primary-teal)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(45,212,191,0.28)'; }}
          >
            <Github size={10} strokeWidth={2} />
            <span>GH</span>
            <ArrowUpRight size={9} strokeWidth={2} />
          </a>
        )}
      </div>
    </motion.div>
  );
}

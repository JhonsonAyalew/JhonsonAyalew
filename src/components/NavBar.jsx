import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_ITEMS = [
  { label: 'Home', mode: 'HERO' },
  { label: 'About', mode: 'ABOUT' },
  { label: 'Projects', mode: 'PROJECTS_GRID' },
  { label: 'Skills', mode: 'SKILLS_GRID' },
  { label: 'Contact', mode: 'CONTACT' },
];

export default function NavBar({ currentMode, onNavigate }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (item) =>
    currentMode === item.mode ||
    (item.mode === 'PROJECTS_GRID' && currentMode === 'PROJECT_DETAIL') ||
    (item.mode === 'SKILLS_GRID' && currentMode === 'SKILL_DETAIL') ||
    (item.mode === 'ABOUT' && currentMode === 'ABOUT_DETAIL') ||
    (item.mode === 'HERO' && currentMode === 'HERO_DETAIL');

  const handleNav = (mode) => {
    onNavigate(mode);
    setMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.4 }}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
          padding: '0 24px', height: '56px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          borderBottom: '1px solid var(--border-subtle)',
          background: 'rgba(10,8,8,0.92)',
          backdropFilter: 'blur(20px)',
        }}
      >
        {/* Logo */}
        <button
          onClick={() => handleNav('HERO')}
          style={{ background:'none', border:'none', cursor:'none', display:'flex', alignItems:'center', gap:'10px' }}
          data-cursor
        >
          <div style={{
            width:'32px', height:'32px',
            background:'radial-gradient(circle,var(--red-ember),var(--burgundy))',
            display:'flex', alignItems:'center', justifyContent:'center',
            fontSize:'1rem', boxShadow:'0 0 18px rgba(139,26,26,0.5)',
          }}>◈</div>
          <span style={{ fontFamily:'Bebas Neue', fontSize:'1.1rem', letterSpacing:'0.08em', color:'var(--text-primary)' }}>JA</span>
        </button>

        {/* Desktop nav */}
        <div style={{ display:'flex', gap:'28px', alignItems:'center' }} className="desktop-nav">
          {NAV_ITEMS.map(item => (
            <button
              key={item.mode}
              onClick={() => handleNav(item.mode)}
              style={{
                background:'none', border:'none',
                color: isActive(item) ? 'var(--red-vivid)' : 'var(--text-muted)',
                fontFamily:'Space Mono', fontSize:'0.58rem',
                letterSpacing:'0.18em', textTransform:'uppercase',
                cursor:'none', transition:'color 0.25s', position:'relative', padding:'4px 0',
              }}
              data-cursor
            >
              {item.label}
              {isActive(item) && (
                <motion.div layoutId="nav-ul" style={{
                  position:'absolute', bottom:'-2px', left:0, right:0,
                  height:'1px', background:'var(--red-vivid)',
                  boxShadow:'0 0 8px var(--red-vivid)',
                }} />
              )}
            </button>
          ))}
        </div>

        {/* Status */}
        <div style={{ display:'flex', alignItems:'center', gap:'8px', fontSize:'0.52rem', color:'var(--text-muted)', letterSpacing:'0.15em' }}>
          <div style={{ width:'6px', height:'6px', borderRadius:'50%', background:'var(--red-vivid)', boxShadow:'0 0 8px var(--red-vivid)', animation:'statusBlink 2s ease-in-out infinite' }} />
          <span className="available-label">AVAILABLE</span>
          {/* Hamburger (mobile) */}
          <button
            onClick={() => setMenuOpen(v => !v)}
            style={{ background:'none', border:'none', color:'var(--text-muted)', cursor:'none', marginLeft:'8px', fontSize:'1rem', lineHeight:1, padding:'4px' }}
            className="hamburger-btn"
            data-cursor
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity:0, y:-10 }}
            animate={{ opacity:1, y:0 }}
            exit={{ opacity:0, y:-10 }}
            style={{
              position:'fixed', top:'56px', left:0, right:0, zIndex:99,
              background:'rgba(10,8,8,0.97)',
              backdropFilter:'blur(20px)',
              borderBottom:'1px solid var(--border-subtle)',
              padding:'16px 24px',
              display:'flex', flexDirection:'column', gap:'4px',
            }}
          >
            {NAV_ITEMS.map(item => (
              <button
                key={item.mode}
                onClick={() => handleNav(item.mode)}
                style={{
                  background:'none', border:'none',
                  color: isActive(item) ? 'var(--red-vivid)' : 'var(--text-secondary)',
                  fontFamily:'Space Mono', fontSize:'0.7rem',
                  letterSpacing:'0.18em', textTransform:'uppercase',
                  cursor:'pointer', textAlign:'left',
                  padding:'12px 0',
                  borderBottom:'1px solid var(--border-subtle)',
                  transition:'color 0.2s',
                }}
              >
                {isActive(item) ? '→ ' : '  '}{item.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media(min-width:601px){ .hamburger-btn{display:none!important} }
        @media(max-width:600px){ .desktop-nav{display:none!important} .available-label{display:none} }
      `}</style>
    </>
  );
}

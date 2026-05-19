import { motion } from 'framer-motion';
import { pageTransition, fadeInUp, staggerContainer, cardItem } from '../utils/animationVariants.js';

const STATS = [
  { num: '6+', label: 'Live Projects' },
  { num: '3yr', label: 'Experience' },
  { num: '10+', label: 'Tech Stack' },
  { num: '★', label: 'Upwork' },
];

export default function HeroSection({ onSuggest }) {
  return (
    <motion.div
      variants={pageTransition}
      initial="hidden" animate="visible" exit="exit"
      style={{ width:'100%', height:'100%', display:'flex', alignItems:'center', justifyContent:'center', padding:'0 24px', position:'relative' }}
      className="scan-lines"
    >
      <div className="ambient-glow" style={{ width:'500px', height:'500px', top:'50%', left:'50%', transform:'translate(-50%,-50%)' }} />

      <div className="hero-grid section-pad" style={{ maxWidth:'980px' }}>
        {/* Left */}
        <motion.div variants={staggerContainer} initial="hidden" animate="visible">
          <motion.div variants={fadeInUp} className="section-label" style={{ marginBottom:'18px' }}>
            Data & Automation Engineer
          </motion.div>

          <motion.h1 variants={fadeInUp} style={{
            fontFamily:'Bebas Neue',
            fontSize:'clamp(3rem,9vw,7rem)',
            lineHeight:'0.92', letterSpacing:'0.01em',
            marginBottom:'20px', position:'relative', zIndex:2,
          }}>
            <span className="glitch-container" data-text="JHONSON" style={{ display:'block', color:'var(--text-primary)' }}>JHONSON</span>
            <span style={{ display:'block', color:'var(--red-vivid)' }}>AYALEW</span>
          </motion.h1>

          <motion.p variants={fadeInUp} style={{
            fontFamily:'Crimson Pro', fontStyle:'italic', fontWeight:300,
            fontSize:'clamp(0.95rem,2.2vw,1.2rem)',
            color:'var(--text-secondary)', marginBottom:'16px', lineHeight:'1.6',
          }}>
            Python · React · Node.js · AI Data Labeling
          </motion.p>

          <motion.p variants={fadeInUp} style={{
            fontFamily:'Space Mono', fontSize:'0.62rem',
            color:'var(--text-muted)', marginBottom:'28px', lineHeight:'1.8',
            maxWidth:'420px',
          }}>
            Building automation systems, data pipelines, and web products from Addis Ababa, Ethiopia — for clients worldwide.
          </motion.p>

          <motion.div variants={fadeInUp} style={{ display:'flex', gap:'10px', flexWrap:'wrap' }}>
            <button className="btn-red" onClick={() => onSuggest('Show me your projects')} data-cursor>
              View Projects →
            </button>
            <button
              onClick={() => onSuggest('How can I hire Jhonson?')}
              data-cursor
              style={{
                padding:'11px 22px', background:'transparent',
                border:'1px solid var(--border-subtle)',
                color:'var(--text-muted)', fontFamily:'Space Mono',
                fontSize:'0.62rem', letterSpacing:'0.12em', textTransform:'uppercase',
                cursor:'none', transition:'all 0.3s',
              }}
              onMouseEnter={e=>{e.target.style.borderColor='var(--red-ember)';e.target.style.color='var(--text-primary)'}}
              onMouseLeave={e=>{e.target.style.borderColor='var(--border-subtle)';e.target.style.color='var(--text-muted)'}}
            >
              Hire Me
            </button>
          </motion.div>

          {/* Links row */}
          <motion.div variants={fadeInUp} style={{ marginTop:'24px', display:'flex', gap:'16px', flexWrap:'wrap' }}>
            {[
              { label:'GitHub', url:'https://github.com/JhonsonAyalew' },
              { label:'LinkedIn', url:'https://linkedin.com/in/jhonson-ayalew-a3738138b' },
              { label:'Portfolio', url:'https://portfolio-chi-seven-11.vercel.app' },
            ].map(l => (
              <a key={l.label} href={l.url} target="_blank" rel="noreferrer" data-cursor
                style={{
                  fontSize:'0.52rem', letterSpacing:'0.14em', color:'var(--text-muted)',
                  textDecoration:'none', textTransform:'uppercase',
                  borderBottom:'1px solid transparent', transition:'all 0.25s',
                }}
                onMouseEnter={e=>{e.target.style.color='var(--red-vivid)';e.target.style.borderBottomColor='var(--red-ember)'}}
                onMouseLeave={e=>{e.target.style.color='var(--text-muted)';e.target.style.borderBottomColor='transparent'}}
              >
                {l.label} ↗
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right: Stats */}
        <motion.div
          variants={staggerContainer} initial="hidden" animate="visible"
          style={{ display:'flex', flexDirection:'column', gap:'3px' }}
          className="hero-stats"
        >
          {STATS.map((stat, i) => (
            <motion.div key={stat.label} variants={cardItem} className="glass-card"
              style={{ padding:'18px 24px', textAlign:'right', minWidth:'130px' }}>
              <div className="stat-number" style={{ color: i===0 ? 'var(--red-vivid)' : 'var(--text-primary)' }}>
                {stat.num}
              </div>
              <div className="stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.4}}
        style={{ position:'absolute', bottom:'24px', left:'24px', fontFamily:'Space Mono', fontSize:'0.48rem', color:'var(--text-muted)', letterSpacing:'0.15em' }}>
        ETH / 9°N 38°E / ADDIS ABABA
      </motion.div>
      <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.6}}
        style={{ position:'absolute', bottom:'24px', right:'24px', fontFamily:'Space Mono', fontSize:'0.48rem', color:'var(--text-muted)', letterSpacing:'0.15em' }}>
        ↓ ASK ANYTHING BELOW
      </motion.div>

      <style>{`
        @media(max-width:900px){
          .hero-stats{flex-direction:row!important;flex-wrap:wrap;gap:6px!important;justify-content:flex-start}
          .hero-stats > div{min-width:auto!important;flex:1;text-align:left!important}
        }
      `}</style>
    </motion.div>
  );
}

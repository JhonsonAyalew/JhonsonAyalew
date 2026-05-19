import { PROJECTS, SKILLS } from '../data/knowledgeBase.js';

export function parseIntent(message) {
  const msg = message.toLowerCase().trim();

  // CONTACT
  if (/\b(contact|hire|email|work with|reach out|available|linkedin|upwork|direct|freelance)\b/.test(msg)) {
    return { mode:'CONTACT', payload:{} };
  }

  // SKILLS — specific first
  for (const skill of SKILLS) {
    if (msg.includes(skill.name.toLowerCase()) || msg.includes(skill.id.replace('-',' '))) {
      if (/\b(tell|explain|about|how|use|know|experience|detail|your)\b/.test(msg)) {
        return { mode:'SKILL_DETAIL', payload:{ skillId:skill.id } };
      }
    }
  }
  // Skill keywords
  const skillKeywords = {
    'python':['python','pandas','numpy'],
    'automation':['automation','pipeline','etl','automat'],
    'scraping':['scrap','crawl','beautifulsoup','playwright','scraper'],
    'react':['react','jsx','frontend','component'],
    'nodejs':['node','express','backend'],
    'data-engineering':['data engineer','ingestion','database','sql','postgres'],
    'ai-integration':['gpt','openai','llm','ai integrat','language model'],
    'ai-labeling':['label','annotation','rlhf','labeling','annotate'],
    'security':['secur','hack','encrypt','pentest'],
    'javascript':['javascript','js ','typescript'],
    'ui-ux':['design','ui','ux','figma'],
    'mongodb':['mongo','database','sql','postgresql'],
  };
  for (const [id, kws] of Object.entries(skillKeywords)) {
    if (kws.some(k => msg.includes(k))) {
      return { mode:'SKILL_DETAIL', payload:{ skillId:id } };
    }
  }

  // SKILLS GRID
  if (/\b(skills?|tech stack|technologies|expertise|capabilities|what can you do)\b/.test(msg)) {
    return { mode:'SKILLS_GRID', payload:{} };
  }

  // PROJECT — specific project names
  const projectKeywords = {
    1:['sales automation','sales system','sales pipeline','python project'],
    2:['university','smart university','student','course management'],
    3:['scrape','scraper','transform notify','scape','forbes','cnbc','news scrap','pr vibe','etl pipeline'],
    4:['moresh','decentralized chat','p2p chat','chat app','encrypted chat'],
    5:['concreterent','concrete','hurunguu','business website','rental'],
    6:['upwork','pr vibe','news scrap','cpa','american data','freelance'],
  };
  for (const [idStr, keywords] of Object.entries(projectKeywords)) {
    if (keywords.some(k => msg.includes(k))) {
      return { mode:'PROJECT_DETAIL', payload:{ projectId:parseInt(idStr) } };
    }
  }

  // PROJECTS GRID
  if (/\b(projects?|portfolio|work|built|created|made|show me|what have you)\b/.test(msg)) {
    return { mode:'PROJECTS_GRID', payload:{} };
  }

  // ABOUT DETAIL
  const aboutKeywords = {
    location:['where','based','ethiopia','addis','location','city','country','remote'],
    education:['education','degree','university','cs','graduate','study','school','academic'],
    experience:['experience','years','3 year','background','history','career','how long'],
    upwork:['upwork','freelance','freelancer','online work','client'],
    hurunguu:['hurunguu','partner','partnership','concreterent','company'],
    aiLabeling:['ai label','labeling','annotation','rlhf','training data','data label'],
  };
  if (/\b(about|who are you|tell me about yourself|background|describe yourself)\b/.test(msg)) {
    for (const [type, keywords] of Object.entries(aboutKeywords)) {
      if (keywords.some(k => msg.includes(k))) return { mode:'ABOUT_DETAIL', payload:{ detailType:type } };
    }
    return { mode:'ABOUT', payload:{} };
  }
  for (const [type, keywords] of Object.entries(aboutKeywords)) {
    if (keywords.some(k => msg.includes(k))) return { mode:'ABOUT_DETAIL', payload:{ detailType:type } };
  }

  // HERO DETAIL
  const heroDetailKeywords = {
    stats:['stats','statistics','numbers','6 project','year experience','years of experience','how many'],
    tagline:['tagline','data engineer','automation architect','what do you do','your title'],
    intro:['more about','introduce','who is jhonson','tell me more','overview'],
  };
  for (const [type, keywords] of Object.entries(heroDetailKeywords)) {
    if (keywords.some(k => msg.includes(k))) return { mode:'HERO_DETAIL', payload:{ detailType:type } };
  }

  // HERO
  if (/\b(home|start|hero|welcome|main)\b/.test(msg) || msg==='back') {
    return { mode:'HERO', payload:{} };
  }

  return { mode:null, payload:{} };
}

export const PROJECTS = [
  {
    id: 1,
    title: 'Sales Automation System',
    shortDesc: 'Python-powered end-to-end sales pipeline automation',
    tags: ['Python', 'Automation', 'CRM', 'Data'],
    featured: true,
    color: '#c42020',
    icon: '⚡',
    github: 'https://github.com/JhonsonAyalew/python-projects/tree/main/sales-automation-system',
    details: {
      description: 'A comprehensive sales automation system built in Python that streamlines the entire sales pipeline — from lead capture and data enrichment to follow-up scheduling and reporting. Reduced manual sales ops time by over 70%.',
      tech: ['Python', 'pandas', 'SQLite', 'smtplib', 'schedule', 'openpyxl'],
      highlights: ['Lead capture & enrichment', 'Automated follow-up scheduling', 'Pipeline stage tracking', 'Email sequence automation', 'Sales reporting & dashboards', 'CRM data sync'],
      status: 'Open Source — GitHub',
      year: '2024',
    }
  },
  {
    id: 2,
    title: 'Smart University System',
    shortDesc: 'Full-stack university management & intelligence platform',
    tags: ['Python', 'Flask', 'AI', 'Education'],
    featured: false,
    color: '#8b1a1a',
    icon: '🎓',
    github: 'https://github.com/JhonsonAyalew/python-projects/tree/main/smart-university-system',
    details: {
      description: 'A smart university management system with AI-assisted features for student tracking, course management, grade analytics, and intelligent scheduling. Built to serve real institutions in Ethiopia.',
      tech: ['Python', 'Flask', 'SQLAlchemy', 'React', 'Chart.js', 'SQLite'],
      highlights: ['Student record management', 'AI-driven grade analytics', 'Course & schedule management', 'Attendance tracking system', 'Performance reporting', 'Admin dashboard'],
      status: 'Open Source — GitHub',
      year: '2024',
    }
  },
  {
    id: 3,
    title: 'Scrape–Transform–Notify',
    shortDesc: 'Multi-source web scraper with transformation & alerts pipeline',
    tags: ['Python', 'Scraping', 'ETL', 'Automation'],
    featured: false,
    color: '#6b1515',
    icon: '🔍',
    github: 'https://github.com/JhonsonAyalew/automation-tools/tree/main/scape-transform-notify',
    details: {
      description: 'Production ETL pipeline that scrapes top-tier news sites (Forbes, CNBC, and 10+ others), transforms and enriches the data, then dispatches smart notifications. Also handles CPA individual lists and American business data ingestion.',
      tech: ['Python', 'BeautifulSoup', 'Playwright', 'pandas', 'PostgreSQL', 'Telegram API'],
      highlights: ['Forbes, CNBC + 10 premium sources', 'CPA individual data ingestion', 'Smart transformation layer', 'Deduplication & enrichment', 'Multi-channel notifications', 'Scheduled pipeline runs'],
      status: 'Production — Active',
      year: '2024',
    }
  },
  {
    id: 4,
    title: 'Moresh — Decentralized Chat',
    shortDesc: 'P2P encrypted chat app built with React + Node.js backend',
    tags: ['React', 'Node.js', 'P2P', 'Security'],
    featured: false,
    color: '#4a0f0f',
    icon: '🔐',
    github: 'https://github.com/JhonsonAyalew/backend-node-react/tree/main/Downloads/my-moresh-app/Moresh',
    details: {
      description: 'Moresh is a decentralized, privacy-first chat application. Built with React frontend and Node.js backend with peer-to-peer architecture, no central servers, and end-to-end encryption for all communications.',
      tech: ['React', 'Node.js', 'Express', 'WebSocket', 'Encryption', 'P2P'],
      highlights: ['No central server infrastructure', 'End-to-end encrypted messages', 'Real-time P2P messaging', 'React UI + Node backend', 'Zero metadata logging', 'Privacy-first architecture'],
      status: 'Active Development',
      year: '2024',
    }
  },
  {
    id: 5,
    title: 'concreterent.com',
    shortDesc: 'Full-stack business website for concrete equipment rental',
    tags: ['React', 'Node.js', 'Web', 'Business'],
    featured: false,
    color: '#8b1a1a',
    icon: '🏗',
    github: null,
    details: {
      description: 'Built and deployed concreterent.com — a full business website for a concrete equipment rental company, built in partnership with Hurunguu (hurunguu.com). Handles product listings, rental inquiries, and customer management.',
      tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS', 'Vercel'],
      highlights: ['Live production website', 'Equipment catalog & listings', 'Rental inquiry system', 'Partner project with Hurunguu', 'Mobile-first responsive design', 'SEO optimized'],
      status: 'Live — concreterent.com',
      year: '2024',
    }
  },
  {
    id: 6,
    title: 'Upwork: PR Vibe Scraper',
    shortDesc: 'Top-tier news scraping & PR data pipeline on Upwork',
    tags: ['Python', 'Scraping', 'Upwork', 'Data'],
    featured: false,
    color: '#6b1515',
    icon: '📰',
    github: null,
    details: {
      description: 'Freelance data engineering work on Upwork: scraping and aggregating PR intelligence from Forbes, CNBC, and 10+ premium news sources. Delivers enriched, structured data feeds to clients needing competitive media intelligence.',
      tech: ['Python', 'Playwright', 'BeautifulSoup', 'pandas', 'PostgreSQL', 'REST APIs'],
      highlights: ['Forbes, CNBC, 10+ premium sources', 'Structured data output pipelines', 'Client data delivery automation', 'American CPA individual lists', 'News trend aggregation', 'Upwork Top-Rated work'],
      status: 'Freelance — Upwork',
      year: '2024',
    }
  },
];

export const SKILLS = [
  { id: 'python', name: 'Python', category: 'Languages', level: 93, desc: 'Primary language — automation pipelines, web scraping, data engineering, backend APIs, and AI integration.', relatedProjects: [1, 2, 3] },
  { id: 'automation', name: 'Automation & ETL', category: 'Data & Automation', level: 91, desc: 'End-to-end pipeline design: scrape, transform, load, notify. Production systems running 24/7 on real data.', relatedProjects: [1, 3, 6] },
  { id: 'scraping', name: 'Web Scraping', category: 'Data & Automation', level: 90, desc: 'Playwright, BeautifulSoup, Selenium — handles JS-heavy sites, anti-bot bypasses, and structured data extraction at scale.', relatedProjects: [3, 6] },
  { id: 'react', name: 'React', category: 'Frontend', level: 87, desc: 'Advanced React with hooks, context, Framer Motion, performance optimization and production-grade component architecture.', relatedProjects: [4, 5] },
  { id: 'nodejs', name: 'Node.js', category: 'Backend', level: 80, desc: 'REST APIs, WebSockets, Express, authentication, database integration, and real-time backends.', relatedProjects: [4, 5] },
  { id: 'data-engineering', name: 'Data Engineering', category: 'Data & Automation', level: 85, desc: 'Data ingestion, cleaning, transformation, and delivery pipelines. PostgreSQL, SQLite, pandas, Excel automation.', relatedProjects: [1, 3] },
  { id: 'ai-integration', name: 'AI Integration', category: 'AI', level: 83, desc: 'LLM API integration (GPT-4, Claude), AI-assisted data labeling, prompt engineering for production systems.', relatedProjects: [2] },
  { id: 'ai-labeling', name: 'AI Data Labeling', category: 'AI', level: 88, desc: 'Expert AI data labeling and annotation — annotation quality, RLHF datasets, fine-tuning data pipelines.', relatedProjects: [2] },
  { id: 'javascript', name: 'JavaScript', category: 'Languages', level: 82, desc: 'Modern ES2024, async patterns, DOM manipulation, browser APIs, and full-stack JS.', relatedProjects: [4, 5] },
  { id: 'security', name: 'Ethical Hacking', category: 'Security', level: 80, desc: 'Penetration testing, network security, cryptography, and security-first system architecture.', relatedProjects: [4] },
  { id: 'ui-ux', name: 'UI/UX Design', category: 'Design', level: 82, desc: 'Figma, design systems, motion design, and pixel-perfect frontend implementation.', relatedProjects: [5] },
  { id: 'mongodb', name: 'MongoDB & SQL', category: 'Backend', level: 76, desc: 'MongoDB, PostgreSQL, SQLite — schema design, query optimization, and data modeling.', relatedProjects: [1, 2, 5] },
];

export const ABOUT_DETAILS = {
  location: {
    title: 'Addis Ababa, Ethiopia',
    content: "Based in Addis Ababa, Ethiopia — operating fully globally. I work with clients across the US, Europe, and beyond with zero timezone friction. Ethiopia's tech scene is growing fast and I'm proud to represent it at a world-class level. Fully remote-ready, async-first, and available on Upwork for international contracts."
  },
  education: {
    title: 'Computer Science',
    content: "CS graduate with a strong foundation in algorithms, data structures, software engineering, and systems design. My academic background gave me the theoretical depth that powers my practical engineering. I complement formal education with continuous self-learning — staying sharp on AI, automation, and modern web technologies."
  },
  experience: {
    title: '3+ Years Production',
    content: "3+ years building real production systems — not tutorials. From Python automation tools published on GitHub, to a live business website (concreterent.com), to active Upwork freelancing scraping Forbes and CNBC. Every year I've pushed into harder problems: web → data engineering → AI systems → decentralized protocols."
  },
  upwork: {
    title: 'Upwork Freelancer',
    content: "Active on Upwork as a Data & Automation Engineer. My specialty: scraping and ingesting data from premium news sources like Forbes and CNBC, working with American CPA individual lists, and building automated data pipelines for clients. I deliver structured, clean, production-ready data."
  },
  hurunguu: {
    title: 'Partner — Hurunguu',
    content: "I work in partnership with Hurunguu (hurunguu.com) — a tech company based in Ethiopia. Together we built and deployed concreterent.com for a concrete equipment rental business. I handle the technical side: architecture, development, deployment, and maintenance."
  },
  aiLabeling: {
    title: 'AI Data Labeling',
    content: "Expert in AI data labeling — one of my core service offerings on Upwork and for direct clients. I work on annotation projects for RLHF datasets, fine-tuning data pipelines, and classification labeling. Quality-obsessed, with deep understanding of what makes good training data for modern LLMs."
  }
};

export const KNOWLEDGE_BASE = `You are "Jhonson AI" — the digital representative of Jhonson Ayalew. Speak in first person as Jhonson's authentic voice. Be concise (2-4 sentences), confident, and technically precise.

JHONSON AYALEW — REAL PROFILE:
- Data & Automation Engineer | AI Data Labeling | Python • React • Node.js
- Based in Addis Ababa, Ethiopia — works globally, fully remote
- Computer Science graduate
- 3+ years production experience
- Email: jhonsonayalew21@gmail.com
- GitHub: github.com/JhonsonAyalew
- LinkedIn: linkedin.com/in/jhonson-ayalew-a3738138b
- Portfolio: portfolio-chi-seven-11.vercel.app
- Active on Upwork

REAL PROJECTS:
1. Sales Automation System (Python) — open source on GitHub, automates entire sales pipeline
2. Smart University System (Python/Flask/React) — AI-assisted university management for Ethiopian institutions
3. Scrape-Transform-Notify (Python) — production ETL scraping Forbes, CNBC, 10+ premium sites + CPA data ingestion
4. Moresh — Decentralized Chat (React/Node.js) — P2P encrypted messaging app, open source
5. concreterent.com — Live business website built with partner company Hurunguu (hurunguu.com)
6. Upwork PR Vibe Scraper — Freelance data pipeline, top-tier news sources + American CPA lists

REAL SKILLS: Python 93%, AI Data Labeling 88%, Automation/ETL 91%, Web Scraping 90%, React 87%, Data Engineering 85%, AI Integration 83%, JavaScript 82%, Node.js 80%, UI/UX 82%, Ethical Hacking 80%, MongoDB/SQL 76%.

RULES:
- Keep answers 2-4 sentences unless asked for more.
- First person always ("I built...", "My work...").
- Be confident and direct.
- Contact: jhonsonayalew21@gmail.com
- Never make up projects not listed above.`;

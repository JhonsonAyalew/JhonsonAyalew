import { useState, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import CustomCursor from './components/CustomCursor.jsx';
import NavBar from './components/NavBar.jsx';
import AIChatInterface from './components/AIChatInterface.jsx';
import HeroSection from './components/HeroSection.jsx';
import HeroDetailView from './components/HeroDetailView.jsx';
import AboutSection from './components/AboutSection.jsx';
import AboutDetailView from './components/AboutDetailView.jsx';
import ProjectsGrid from './components/ProjectsGrid.jsx';
import ProjectDetailView from './components/ProjectDetailView.jsx';
import SkillsGrid from './components/SkillsGrid.jsx';
import SkillDetailView from './components/SkillDetailView.jsx';
import ContactSection from './components/ContactSection.jsx';
import { parseIntent } from './utils/intentParser.js';
import { useGroqAI } from './hooks/useGroqAI.js';
import { usePortfolioState } from './hooks/usePortfolioState.js';
import { PROJECTS, SKILLS } from './data/knowledgeBase.js';

const CHAT_BOTTOM_OFFSET = 62;

export default function App() {
  const { mode, payload, navigate, goBack } = usePortfolioState();
  const { getResponse, isLoading } = useGroqAI();
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: "I'm Jhonson AI — ask me anything about my projects, skills, or background. Or just explore using the suggestions below.",
      isNew: false,
    },
  ]);
  const [detailContent, setDetailContent] = useState(null);

  const addMessage = (role, content, isNew = false) => {
    setMessages(prev => [...prev, { role, content, isNew }]);
  };

  const handleSendMessage = useCallback(async (userMessage) => {
    addMessage('user', userMessage);
    setDetailContent(null);

    const intent = parseIntent(userMessage);

    let contextHint = '';
    if (intent.mode === 'PROJECT_DETAIL' && intent.payload.projectId) {
      const p = PROJECTS.find(pr => pr.id === intent.payload.projectId);
      contextHint = p ? `User is asking about the ${p.title} project specifically.` : '';
    } else if (intent.mode === 'SKILL_DETAIL' && intent.payload.skillId) {
      const s = SKILLS.find(sk => sk.id === intent.payload.skillId);
      contextHint = s ? `User is asking about ${s.name} skill specifically.` : '';
    } else if (intent.mode === 'ABOUT_DETAIL') {
      contextHint = `User is asking about: ${intent.payload.detailType}`;
    } else if (intent.mode === 'HERO_DETAIL') {
      contextHint = `User is asking about hero details: ${intent.payload.detailType}`;
    }

    try {
      const reply = await getResponse(userMessage, messages, contextHint);
      addMessage('assistant', reply, true);
      setDetailContent(reply);

      if (intent.mode) {
        navigate(intent.mode, intent.payload);
      }
    } catch {
      addMessage('assistant', "I'm having trouble connecting right now. Please try again in a moment.", true);
    }
  }, [messages, getResponse, navigate]);

  const handleNavNavigate = (targetMode) => {
    navigate(targetMode, {});
    setDetailContent(null);
  };

  const handleSuggest = (text) => { handleSendMessage(text); };

  const handleSelectProject = (project) => {
    navigate('PROJECT_DETAIL', { projectId: project.id });
    setDetailContent(null);
    handleSendMessage(`Tell me about the ${project.title} project`);
  };

  const handleSelectSkill = (skill) => {
    navigate('SKILL_DETAIL', { skillId: skill.id });
    setDetailContent(null);
    handleSendMessage(`Tell me about your ${skill.name} skills`);
  };

  return (
    <div style={{ minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>
      <CustomCursor />

      {/* Ambient orb background */}
      <div className="ambient-bg">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
      </div>

      <NavBar currentMode={mode} onNavigate={handleNavNavigate} />

      {/* Main content area */}
      <div style={{
        position: 'fixed',
        top: '60px',
        left: 0, right: 0,
        bottom: `${CHAT_BOTTOM_OFFSET}px`,
        zIndex: 10,
        overflowY: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <AnimatePresence mode="wait">
          {mode === 'HERO' && <HeroSection key="hero" onSuggest={handleSuggest} />}
          {mode === 'HERO_DETAIL' && (
            <HeroDetailView
              key={`hero-detail-${payload.detailType}`}
              detailType={payload.detailType || 'intro'}
              aiContent={detailContent}
              onBack={() => navigate('HERO', {})}
            />
          )}
          {mode === 'ABOUT' && <AboutSection key="about" aiContent={detailContent} />}
          {mode === 'ABOUT_DETAIL' && (
            <AboutDetailView
              key={`about-detail-${payload.detailType}`}
              detailType={payload.detailType || 'location'}
              aiContent={detailContent}
              onBack={() => navigate('ABOUT', {})}
            />
          )}
          {mode === 'PROJECTS_GRID' && <ProjectsGrid key="projects" onSelectProject={handleSelectProject} />}
          {mode === 'PROJECT_DETAIL' && (
            <ProjectDetailView
              key={`project-${payload.projectId}`}
              projectId={payload.projectId || 1}
              aiContent={detailContent}
              onBack={() => navigate('PROJECTS_GRID', {})}
            />
          )}
          {mode === 'SKILLS_GRID' && <SkillsGrid key="skills" onSelectSkill={handleSelectSkill} />}
          {mode === 'SKILL_DETAIL' && (
            <SkillDetailView
              key={`skill-${payload.skillId}`}
              skillId={payload.skillId || 'python'}
              aiContent={detailContent}
              onBack={() => navigate('SKILLS_GRID', {})}
            />
          )}
          {mode === 'CONTACT' && <ContactSection key="contact" />}
        </AnimatePresence>
      </div>

      {/* Persistent AI Chat */}
      <AIChatInterface
        onSendMessage={handleSendMessage}
        isLoading={isLoading}
        messages={messages}
      />
    </div>
  );
}

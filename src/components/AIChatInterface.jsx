import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, ChevronUp, ChevronDown, Sparkles } from 'lucide-react';
import TypingText from './TypingText.jsx';

const SUGGESTIONS = [
  'Show me your projects',
  'What are your skills?',
  'Tell me about yourself',
  'How can I hire you?',
  'Tell me about the scraper',
  'What do you do on Upwork?',
];

export default function AIChatInterface({ onSendMessage, isLoading, messages }) {
  const [input, setInput] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const inputRef = useRef(null);
  const historyRef = useRef(null);
  const containerRef = useRef(null);

  // Scroll history to bottom on new messages
  useEffect(() => {
    if (historyRef.current) historyRef.current.scrollTop = historyRef.current.scrollHeight;
  }, [messages]);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const openChat = useCallback(() => {
    setIsOpen(true);
    setTimeout(() => inputRef.current?.focus(), 100);
  }, []);

  const handleSend = () => {
    if (!input.trim() || isLoading) return;
    const msg = input.trim();
    setInput('');
    setShowSuggestions(false);
    onSendMessage(msg);
    setIsOpen(true);
  };

  const handleKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSend(); }
  };

  const handleSuggest = (text) => {
    setShowSuggestions(false);
    onSendMessage(text);
    setInput('');
    setIsOpen(true);
  };

  const recentMessages = messages.slice(-5);
  const lastAssistantMsg = messages.filter(m => m.role === 'assistant').slice(-1)[0];

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        bottom: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: 'min(720px, 94vw)',
        zIndex: 200,
      }}
    >
      {/* ── EXPANDED STATE ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="chat-expanded"
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.22, ease: [0.4, 0, 0.2, 1] }}
            style={{
              background: 'rgba(8, 20, 34, 0.97)',
              backdropFilter: 'blur(28px)',
              border: '1px solid var(--border-subtle)',
              borderBottom: 'none',
              borderRadius: '18px 18px 0 0',
              boxShadow: '0 -12px 50px rgba(45,212,191,0.1), 0 -4px 20px rgba(0,0,0,0.4)',
              overflow: 'hidden',
            }}
          >
            {/* Top glow line */}
            <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, var(--primary-teal), var(--primary-emerald), transparent)' }} />

            {/* Header bar */}
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              padding: '10px 18px',
              borderBottom: '1px solid var(--border-subtle)',
              background: 'rgba(26,44,62,0.3)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{
                  width: '26px', height: '26px', borderRadius: '8px',
                  background: 'linear-gradient(135deg, var(--primary-teal), var(--primary-emerald))',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: isLoading ? '0 0 16px rgba(45,212,191,0.7)' : '0 0 8px rgba(45,212,191,0.3)',
                  transition: 'box-shadow 0.3s',
                  animation: isLoading ? 'aiPulse 1.5s ease-in-out infinite' : 'none',
                }}>
                  <Sparkles size={13} color="var(--bg-deep)" strokeWidth={2.5} />
                </div>
                <span style={{ fontFamily: 'Outfit', fontWeight: '700', fontSize: '0.75rem', color: 'var(--text-light)', letterSpacing: '0.04em' }}>
                  Jhonson AI
                </span>
                <span style={{ fontSize: '0.55rem', color: 'var(--text-muted)', letterSpacing: '0.12em' }}>
                  {isLoading ? '— thinking...' : '— online'}
                </span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                data-cursor
                style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'none', padding: '4px', transition: 'color 0.2s', display: 'flex', alignItems: 'center' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--primary-teal)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
              >
                <ChevronDown size={16} />
              </button>
            </div>

            {/* Message history */}
            <div
              ref={historyRef}
              style={{
                height: '200px',
                overflowY: 'auto',
                padding: '14px 18px',
                display: 'flex', flexDirection: 'column', gap: '10px',
              }}
            >
              {recentMessages.map((msg, i) => (
                <div key={i} style={{
                  display: 'flex', gap: '8px', alignItems: 'flex-start',
                  justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start',
                }}>
                  {msg.role === 'assistant' && (
                    <div style={{
                      width: '22px', height: '22px', flexShrink: 0, borderRadius: '7px',
                      background: 'linear-gradient(135deg, var(--primary-teal), var(--primary-emerald))',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      marginTop: '2px',
                    }}>
                      <Sparkles size={11} color="var(--bg-deep)" strokeWidth={2.5} />
                    </div>
                  )}
                  <div style={{
                    maxWidth: '78%', padding: '8px 14px',
                    background: msg.role === 'user'
                      ? 'linear-gradient(135deg, rgba(45,212,191,0.15), rgba(16,185,129,0.1))'
                      : 'rgba(26,44,62,0.7)',
                    border: `1px solid ${msg.role === 'user' ? 'rgba(45,212,191,0.3)' : 'var(--border-subtle)'}`,
                    borderLeft: msg.role === 'assistant' ? '2px solid var(--primary-teal)' : undefined,
                    borderRadius: msg.role === 'user' ? '14px 14px 3px 14px' : '3px 14px 14px 14px',
                    fontSize: '0.72rem',
                    color: msg.role === 'user' ? 'var(--text-light)' : 'var(--text-secondary)',
                    lineHeight: '1.75', fontFamily: 'Inter',
                  }}>
                    {msg.role === 'assistant' && i === recentMessages.length - 1 && msg.isNew
                      ? <TypingText text={msg.content} speed={14} />
                      : msg.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  <div style={{
                    width: '22px', height: '22px', borderRadius: '7px',
                    background: 'linear-gradient(135deg, var(--primary-teal), var(--primary-emerald))',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    animation: 'aiPulse 1.5s ease-in-out infinite',
                  }}>
                    <Sparkles size={11} color="var(--bg-deep)" strokeWidth={2.5} />
                  </div>
                  <div style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
                    {[0, 150, 300].map(d => (
                      <div key={d} style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--primary-teal)', animation: `typeBounce 1.2s infinite ${d}ms` }} />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Suggestions (only before first user message) */}
            <AnimatePresence>
              {showSuggestions && messages.length <= 1 && (
                <motion.div
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  style={{ padding: '0 18px 10px', display: 'flex', flexWrap: 'wrap', gap: '6px' }}
                >
                  {SUGGESTIONS.map(s => (
                    <button key={s} onClick={() => handleSuggest(s)} data-cursor
                      style={{
                        padding: '4px 12px', background: 'rgba(45,212,191,0.06)',
                        border: '1px solid rgba(45,212,191,0.2)', borderRadius: '20px',
                        color: 'var(--text-muted)', fontFamily: 'Inter', fontSize: '0.62rem',
                        cursor: 'none', transition: 'all 0.2s', whiteSpace: 'nowrap',
                      }}
                      onMouseEnter={e => { e.target.style.borderColor = 'var(--primary-teal)'; e.target.style.color = 'var(--text-light)'; e.target.style.background = 'rgba(45,212,191,0.12)'; }}
                      onMouseLeave={e => { e.target.style.borderColor = 'rgba(45,212,191,0.2)'; e.target.style.color = 'var(--text-muted)'; e.target.style.background = 'rgba(45,212,191,0.06)'; }}
                    >{s}</button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Input row */}
            <div style={{
              display: 'flex', alignItems: 'center', gap: '8px',
              padding: '10px 18px 16px',
              borderTop: '1px solid var(--border-subtle)',
              background: 'rgba(10,25,40,0.5)',
            }}>
              <input
                ref={inputRef}
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={handleKey}
                placeholder="Ask anything about Jhonson..."
                disabled={isLoading}
                data-cursor
                style={{
                  flex: 1, padding: '10px 16px',
                  background: 'rgba(26,44,62,0.6)',
                  border: '1px solid var(--border-subtle)', borderRadius: '10px',
                  color: 'var(--text-light)', fontFamily: 'Inter', fontSize: '0.78rem',
                  outline: 'none', transition: 'border-color 0.3s, box-shadow 0.3s', minWidth: 0,
                }}
                onFocus={e => { e.target.style.borderColor = 'var(--primary-teal)'; e.target.style.boxShadow = '0 0 16px rgba(45,212,191,0.12)'; }}
                onBlur={e => { e.target.style.borderColor = 'var(--border-subtle)'; e.target.style.boxShadow = 'none'; }}
              />
              <button
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="btn-teal"
                data-cursor
                style={{
                  padding: '10px 16px', flexShrink: 0,
                  opacity: (isLoading || !input.trim()) ? 0.45 : 1,
                  display: 'flex', alignItems: 'center', gap: '6px',
                  fontSize: '0.72rem',
                }}
              >
                <Send size={13} strokeWidth={2.5} />
                {isLoading ? '...' : 'Send'}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── COLLAPSED STATE (one line pill) ── */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            key="chat-collapsed"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.18 }}
            onClick={openChat}
            data-cursor
            style={{
              display: 'flex', alignItems: 'center', gap: '10px',
              padding: '10px 18px 14px',
              background: 'rgba(8,20,34,0.95)',
              backdropFilter: 'blur(24px)',
              borderTop: '1px solid var(--border-subtle)',
              borderLeft: '1px solid var(--border-subtle)',
              borderRight: '1px solid var(--border-subtle)',
              borderBottom: 'none',
              borderRadius: '16px 16px 0 0',
              cursor: 'none',
              boxShadow: '0 -6px 30px rgba(45,212,191,0.07)',
              transition: 'box-shadow 0.3s',
            }}
            onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 -6px 30px rgba(45,212,191,0.18)'; }}
            onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 -6px 30px rgba(45,212,191,0.07)'; }}
          >
            {/* Top glow */}
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, transparent, var(--primary-teal), transparent)', borderRadius: '16px 16px 0 0' }} />

            {/* AI badge */}
            <div style={{
              width: '30px', height: '30px', flexShrink: 0, borderRadius: '9px',
              background: 'linear-gradient(135deg, var(--primary-teal), var(--primary-emerald))',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 0 10px rgba(45,212,191,0.3)',
            }}>
              <Sparkles size={14} color="var(--bg-deep)" strokeWidth={2.5} />
            </div>

            {/* Preview text */}
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '1px' }}>
                <span style={{ fontFamily: 'Outfit', fontWeight: '700', fontSize: '0.72rem', color: 'var(--primary-teal)' }}>
                  Jhonson AI
                </span>
                <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--primary-teal)', boxShadow: '0 0 6px var(--primary-teal)', animation: 'statusBlink 2s ease-in-out infinite' }} />
              </div>
              <div style={{
                fontSize: '0.65rem', color: 'var(--text-muted)', fontFamily: 'Inter',
                overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
              }}>
                {lastAssistantMsg
                  ? lastAssistantMsg.content.slice(0, 70) + (lastAssistantMsg.content.length > 70 ? '...' : '')
                  : 'Ask me anything about projects, skills, or background →'}
              </div>
            </div>

            {/* Expand arrow */}
            <ChevronUp size={16} color="var(--text-muted)" style={{ flexShrink: 0 }} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

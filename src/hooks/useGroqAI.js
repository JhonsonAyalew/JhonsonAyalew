import { useState, useCallback } from 'react';
import { GROQ_API_KEY, GROQ_MODEL, GROQ_URL } from '../config/groq.js';
import { KNOWLEDGE_BASE } from '../data/knowledgeBase.js';

export function useGroqAI() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getResponse = useCallback(async (userMessage, conversationHistory = [], contextHint = '') => {
    setIsLoading(true);
    setError(null);

    const systemPrompt = KNOWLEDGE_BASE + (contextHint ? `\n\nCurrent context: ${contextHint}` : '');

    const messages = [
      ...conversationHistory.slice(-6).map(m => ({
        role: m.role,
        content: m.content,
      })),
      { role: 'user', content: userMessage },
    ];

    try {
      const response = await fetch(GROQ_URL, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${GROQ_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: GROQ_MODEL,
          messages: [
            { role: 'system', content: systemPrompt },
            ...messages,
          ],
          max_tokens: 300,
          temperature: 0.7,
        }),
      });

      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.error?.message || `HTTP ${response.status}`);
      }

      const data = await response.json();
      const reply = data.choices[0].message.content;
      setIsLoading(false);
      return reply;
    } catch (err) {
      setIsLoading(false);
      setError(err.message);
      throw err;
    }
  }, []);

  return { getResponse, isLoading, error };
}

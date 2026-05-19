import { useState, useCallback } from 'react';

export function usePortfolioState() {
  const [mode, setMode] = useState('HERO');
  const [payload, setPayload] = useState({});
  const [history, setHistory] = useState([]);

  const navigate = useCallback((newMode, newPayload = {}) => {
    if (newMode && newMode !== mode) {
      setHistory(prev => [...prev.slice(-5), { mode, payload }]);
      setMode(newMode);
      setPayload(newPayload);
    } else if (newMode === mode && JSON.stringify(newPayload) !== JSON.stringify(payload)) {
      setPayload(newPayload);
    }
  }, [mode, payload]);

  const goBack = useCallback(() => {
    if (history.length > 0) {
      const prev = history[history.length - 1];
      setHistory(h => h.slice(0, -1));
      setMode(prev.mode);
      setPayload(prev.payload);
    } else {
      setMode('HERO');
      setPayload({});
    }
  }, [history]);

  return { mode, payload, navigate, goBack, history };
}

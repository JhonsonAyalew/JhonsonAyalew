import { useState, useEffect, useRef } from 'react';

export default function TypingText({ text, speed = 18, onDone, className = '' }) {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);
  const indexRef = useRef(0);
  const timerRef = useRef(null);

  useEffect(() => {
    setDisplayed('');
    setDone(false);
    indexRef.current = 0;

    if (!text) return;

    const tick = () => {
      if (indexRef.current < text.length) {
        setDisplayed(text.slice(0, indexRef.current + 1));
        indexRef.current++;
        timerRef.current = setTimeout(tick, speed);
      } else {
        setDone(true);
        onDone?.();
      }
    };

    timerRef.current = setTimeout(tick, speed);
    return () => clearTimeout(timerRef.current);
  }, [text, speed]);

  return (
    <span className={className}>
      {displayed}
      {!done && <span className="typing-cursor" />}
    </span>
  );
}

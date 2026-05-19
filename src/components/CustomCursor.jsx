import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const rafRef = useRef(null);

  useEffect(() => {
    const onMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.left = e.clientX + 'px';
        dotRef.current.style.top = e.clientY + 'px';
      }
    };

    const animate = () => {
      ringPos.current.x += (mouseRef.current.x - ringPos.current.x) * 0.12;
      ringPos.current.y += (mouseRef.current.y - ringPos.current.y) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.left = ringPos.current.x + 'px';
        ringRef.current.style.top = ringPos.current.y + 'px';
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    const onEnter = () => setIsHovering(true);
    const onLeave = () => setIsHovering(false);

    document.addEventListener('mousemove', onMove);
    rafRef.current = requestAnimationFrame(animate);

    const interactables = document.querySelectorAll('button, a, input, textarea, [data-cursor]');
    interactables.forEach(el => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    const observer = new MutationObserver(() => {
      document.querySelectorAll('button, a, input, textarea, [data-cursor]').forEach(el => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
        el.addEventListener('mouseenter', onEnter);
        el.addEventListener('mouseleave', onLeave);
      });
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafRef.current);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        style={{
          width: '8px', height: '8px',
          background: 'var(--red-vivid)',
          borderRadius: '50%',
          position: 'fixed', top: 0, left: 0,
          pointerEvents: 'none', zIndex: 9999,
          transform: 'translate(-50%, -50%)',
          boxShadow: '0 0 12px var(--red-vivid), 0 0 24px rgba(196, 32, 32, 0.5)',
          transition: 'transform 0.1s ease',
        }}
      />
      <div
        ref={ringRef}
        style={{
          width: isHovering ? '60px' : '40px',
          height: isHovering ? '60px' : '40px',
          border: `1px solid ${isHovering ? 'var(--red-bright)' : 'rgba(196, 32, 32, 0.6)'}`,
          borderRadius: '50%',
          position: 'fixed', top: 0, left: 0,
          pointerEvents: 'none', zIndex: 9998,
          transform: 'translate(-50%, -50%)',
          background: isHovering ? 'rgba(196, 32, 32, 0.06)' : 'transparent',
          transition: 'width 0.2s, height 0.2s, border-color 0.2s, background 0.2s',
        }}
      />
    </>
  );
}

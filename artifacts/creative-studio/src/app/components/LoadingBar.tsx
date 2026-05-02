import { useEffect, useRef, useState } from 'react';

interface LoadingBarProps {
  loading: boolean;
}

export function LoadingBar({ loading }: LoadingBarProps) {
  const [visible, setVisible] = useState(false);
  const [width, setWidth] = useState(0);
  const [fading, setFading] = useState(false);
  const t1 = useRef<ReturnType<typeof setTimeout> | null>(null);
  const t2 = useRef<ReturnType<typeof setTimeout> | null>(null);
  const t3 = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!loading) return;
    // Clear any previous timers
    [t1, t2, t3].forEach(t => { if (t.current) clearTimeout(t.current); });
    setFading(false);
    setWidth(0);
    setVisible(true);

    // Quickly jump to 20%, then ease to 85%
    requestAnimationFrame(() => {
      setWidth(20);
      t1.current = setTimeout(() => setWidth(85), 80);
    });

    // Complete and fade out
    t2.current = setTimeout(() => {
      setWidth(100);
      t3.current = setTimeout(() => {
        setFading(true);
        setTimeout(() => { setVisible(false); setWidth(0); setFading(false); }, 320);
      }, 220);
    }, 520);

    return () => { [t1, t2, t3].forEach(t => { if (t.current) clearTimeout(t.current); }); };
  }, [loading]);

  if (!visible) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0, right: 0,
      zIndex: 9999,
      height: '2.5px',
      background: 'rgba(120,80,255,0.12)',
    }}>
      <div style={{
        height: '100%',
        width: `${width}%`,
        background: 'linear-gradient(90deg, #7c3aed, #a78bfa, #8b5cf6)',
        boxShadow: '0 0 14px rgba(139,92,246,0.9), 0 0 30px rgba(124,58,237,0.5)',
        borderRadius: '0 2px 2px 0',
        transition: fading
          ? 'opacity 0.3s ease'
          : width === 0
            ? 'none'
            : 'width 0.5s cubic-bezier(0.1, 0.6, 0.3, 1)',
        opacity: fading ? 0 : 1,
      }} />
      {/* Leading glow dot */}
      <div style={{
        position: 'absolute',
        right: `${100 - width}%`,
        top: '-3px',
        width: '8px',
        height: '8px',
        borderRadius: '50%',
        background: '#a78bfa',
        boxShadow: '0 0 10px 3px rgba(167,139,250,0.8)',
        transform: 'translateX(50%)',
        opacity: fading ? 0 : 1,
        transition: fading ? 'opacity 0.3s' : 'none',
      }} />
    </div>
  );
}

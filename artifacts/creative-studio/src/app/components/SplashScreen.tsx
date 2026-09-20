import { useEffect, useRef, useState } from 'react';
import { AnimatedBackground } from './AnimatedBackground';

interface SplashScreenProps {
  onEnter: () => void;
}

export function SplashScreen({ onEnter }: SplashScreenProps) {
  const [phase, setPhase] = useState<'logo' | 'tagline' | 'cta' | 'exiting'>('logo');
  const [progress, setProgress] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    // Sequence: logo → tagline → cta
    timerRef.current = setTimeout(() => setPhase('tagline'), 900);
    const t2 = setTimeout(() => setPhase('cta'), 1900);
    // Progress bar filling up
    const startTime = Date.now();
    const duration = 5200;
    const tick = () => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min((elapsed / duration) * 100, 100);
      setProgress(pct);
      if (pct < 100) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
    const autoEnter = setTimeout(() => handleEnter(), duration + 200);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      clearTimeout(t2);
      clearTimeout(autoEnter);
    };
  }, []);

  const handleEnter = () => {
    setPhase('exiting');
    setTimeout(onEnter, 700);
  };

  return (
    <div
      style={{
        position: 'fixed', inset: 0, zIndex: 1000,
        background: '#090909',
        transition: phase === 'exiting' ? 'opacity 0.7s ease, transform 0.7s ease' : 'none',
        opacity: phase === 'exiting' ? 0 : 1,
        transform: phase === 'exiting' ? 'scale(1.06)' : 'scale(1)',
        overflow: 'hidden',
      }}
    >
      {/* Full-screen animated word-fall */}
      <AnimatedBackground />

      {/* Cinematic dark overlay */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 2,
        background: 'radial-gradient(ellipse at center, rgba(9,9,9,0.2) 0%, rgba(9,9,9,0.72) 70%, rgba(9,9,9,0.95) 100%)',
        pointerEvents: 'none',
      }} />

      {/* Letterbox bars */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '70px', background: '#090909', zIndex: 3, transition: 'height 1s ease' }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '70px', background: '#090909', zIndex: 3, transition: 'height 1s ease' }} />

      {/* Center content */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 10,
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        gap: '1.5rem',
      }}>
        {/* Logo */}
        <div style={{
          opacity: phase === 'logo' || phase === 'tagline' || phase === 'cta' || phase === 'exiting' ? 1 : 0,
          transform: phase === 'logo' ? 'scale(0.8) translateY(10px)' : 'scale(1) translateY(0)',
          transition: 'opacity 0.7s ease, transform 0.7s cubic-bezier(0.16,1,0.3,1)',
          textAlign: 'center',
        }}>
          {/* Glow ring */}
          <div style={{
            width: '80px', height: '80px', borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(139,92,246,0.35) 0%, transparent 70%)',
            margin: '0 auto 1.25rem',
            animation: 'splashGlow 2.5s ease-in-out infinite',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            border: '1px solid rgba(139,92,246,0.25)',
            boxShadow: '0 0 40px rgba(139,92,246,0.3), 0 0 80px rgba(139,92,246,0.12)',
          }}>
            <span style={{ fontSize: '1.75rem', color: '#fff', fontWeight: 700, letterSpacing: '-0.04em' }}>O</span>
          </div>

          <h1 style={{
            fontSize: 'clamp(3rem, 8vw, 6rem)',
            fontWeight: 700, letterSpacing: '-0.05em',
            color: '#fff', margin: 0, lineHeight: 1,
            textShadow: '0 0 60px rgba(139,92,246,0.5)',
          }}>
            OrdStudio
          </h1>
        </div>

        {/* Tagline */}
        <div style={{
          opacity: phase === 'tagline' || phase === 'cta' || phase === 'exiting' ? 1 : 0,
          transform: phase === 'tagline' || phase === 'cta' || phase === 'exiting' ? 'translateY(0)' : 'translateY(14px)',
          transition: 'opacity 0.6s ease 0.1s, transform 0.6s cubic-bezier(0.16,1,0.3,1) 0.1s',
          textAlign: 'center',
        }}>
          <p style={{
            fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
            color: 'rgba(255,255,255,0.38)',
            letterSpacing: '0.18em', textTransform: 'uppercase',
            fontWeight: 300, margin: 0,
          }}>
            Creative Studio
          </p>
          <p style={{
            fontSize: 'clamp(0.75rem, 1.5vw, 0.875rem)',
            color: 'rgba(255,255,255,0.22)',
            letterSpacing: '0.08em', margin: '0.5rem 0 0',
            fontWeight: 300,
          }}>
            Design · Generate · Publish
          </p>
        </div>

        {/* Enter button */}
        <div style={{
          opacity: phase === 'cta' || phase === 'exiting' ? 1 : 0,
          transform: phase === 'cta' || phase === 'exiting' ? 'translateY(0)' : 'translateY(16px)',
          transition: 'opacity 0.6s ease 0.1s, transform 0.6s cubic-bezier(0.16,1,0.3,1) 0.1s',
          marginTop: '1rem',
        }}>
          <button
            onClick={handleEnter}
            style={{
              padding: '0.75rem 2.5rem',
              background: '#8b5cf6',
              color: '#fff', border: 'none', borderRadius: '50px',
              fontSize: '0.85rem', fontWeight: 500,
              cursor: 'pointer', fontFamily: 'inherit',
              letterSpacing: '0.06em', textTransform: 'uppercase',
              transition: 'all 0.2s',
              boxShadow: '0 0 30px rgba(139,92,246,0.5)',
              animation: 'splashButtonPulse 2s ease-in-out infinite',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#7c3aed'; e.currentTarget.style.boxShadow = '0 0 50px rgba(139,92,246,0.7)'; e.currentTarget.style.transform = 'scale(1.05)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = '#8b5cf6'; e.currentTarget.style.boxShadow = '0 0 30px rgba(139,92,246,0.5)'; e.currentTarget.style.transform = 'scale(1)'; }}
          >
            Enter Studio
          </button>
          <p style={{ textAlign: 'center', marginTop: '0.875rem', fontSize: '0.7rem', color: 'rgba(255,255,255,0.18)', letterSpacing: '0.06em' }}>
            or wait to continue
          </p>
        </div>
      </div>

      {/* Progress bar at bottom */}
      <div style={{
        position: 'absolute', bottom: '70px', left: 0, right: 0, height: '2px',
        background: 'rgba(255,255,255,0.05)', zIndex: 10,
      }}>
        <div style={{
          height: '100%', width: `${progress}%`,
          background: 'linear-gradient(90deg, rgba(139,92,246,0.6), rgba(139,92,246,1))',
          boxShadow: '0 0 10px rgba(139,92,246,0.6)',
          transition: 'width 0.1s linear',
        }} />
      </div>

      <style>{`
        @keyframes splashGlow {
          0%, 100% { box-shadow: 0 0 40px rgba(139,92,246,0.3), 0 0 80px rgba(139,92,246,0.12); }
          50%       { box-shadow: 0 0 60px rgba(139,92,246,0.55), 0 0 120px rgba(139,92,246,0.25); }
        }
        @keyframes splashButtonPulse {
          0%, 100% { box-shadow: 0 0 30px rgba(139,92,246,0.5); }
          50%       { box-shadow: 0 0 50px rgba(139,92,246,0.75), 0 0 80px rgba(139,92,246,0.3); }
        }
      `}</style>
    </div>
  );
}

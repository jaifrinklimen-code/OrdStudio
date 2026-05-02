import { useEffect, useRef } from 'react';
import { AnimatedHeading } from './AnimatedHeading';
import { FadeIn } from './FadeIn';
import { AnimatedBackground } from './AnimatedBackground';

interface HeroProps {
  onNavigate: (tab: string) => void;
}

export function Hero({ onNavigate }: HeroProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!contentRef.current) return;
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      const rotX = (y - 0.5) * -4;
      const rotY = (x - 0.5) * 6;
      const tx = (x - 0.5) * -10;
      const ty = (y - 0.5) * -6;
      contentRef.current.style.transform =
        `perspective(1200px) rotateX(${rotX}deg) rotateY(${rotY}deg) translate(${tx}px,${ty}px)`;
    };
    const handleMouseLeave = () => {
      if (!contentRef.current) return;
      contentRef.current.style.transform =
        'perspective(1200px) rotateX(0deg) rotateY(0deg) translate(0px,0px)';
    };
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    return () => { window.removeEventListener('mousemove', handleMouseMove); window.removeEventListener('mouseleave', handleMouseLeave); };
  }, []);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden', background: '#090909' }}>
      <AnimatedBackground />

      {/* Overlay gradient to lift text readability */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: 'linear-gradient(to top, rgba(9,9,9,0.95) 0%, rgba(9,9,9,0.4) 50%, transparent 100%)',
        pointerEvents: 'none',
      }} />

      {/* 3D parallax content */}
      <div
        ref={contentRef}
        style={{
          position: 'absolute', bottom: '3.5rem', left: '3.5rem', right: '3.5rem',
          zIndex: 20, transition: 'transform 0.1s ease-out',
          transformStyle: 'preserve-3d', willChange: 'transform',
        }}
      >
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', alignItems: 'flex-end', gap: '3rem' }}>
          {/* Left: headline */}
          <div style={{ transform: 'translateZ(30px)' }}>
            <AnimatedHeading
              text={"Shaping tomorrow\nwith vision and action."}
              className="text-5xl md:text-6xl lg:text-7xl font-normal text-white"
              initialDelay={200}
              charDelay={26}
            />
            <FadeIn delay={820} duration={900}>
              <p style={{
                color: 'rgba(255,255,255,0.42)', marginTop: '1rem', marginBottom: '1.75rem',
                fontSize: '0.975rem', maxWidth: '420px', fontWeight: 300, lineHeight: 1.7,
                transform: 'translateZ(16px)',
              }}>
                We back visionaries and craft ventures that define what comes next.
              </p>
              <div style={{ display: 'flex', gap: '0.75rem', transform: 'translateZ(20px)' }}>
                <button
                  onClick={() => onNavigate('assistant')}
                  style={{
                    background: '#8b5cf6', color: '#fff',
                    padding: '0.7rem 1.75rem', borderRadius: '8px',
                    fontWeight: 500, fontSize: '0.85rem', border: 'none',
                    cursor: 'pointer', fontFamily: 'inherit', transition: 'all 0.18s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = '#7c3aed'; e.currentTarget.style.boxShadow = '0 0 28px rgba(139,92,246,0.5)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = '#8b5cf6'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                  Start a Chat
                </button>
                <button
                  onClick={() => onNavigate('design')}
                  style={{
                    background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.75)',
                    padding: '0.7rem 1.75rem', borderRadius: '8px',
                    fontWeight: 500, fontSize: '0.85rem',
                    border: '1px solid rgba(255,255,255,0.10)',
                    cursor: 'pointer', fontFamily: 'inherit', transition: 'all 0.18s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.10)'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.color = 'rgba(255,255,255,0.75)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                  Explore Studio
                </button>
              </div>
            </FadeIn>
          </div>

          {/* Right: mini stat card */}
          <FadeIn delay={1300} duration={900}>
            <div style={{
              transform: 'translateZ(45px)',
              background: 'rgba(17,17,17,0.85)', backdropFilter: 'blur(16px)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '14px', padding: '1.25rem 1.5rem', minWidth: '180px',
            }}>
              <p style={{ color: 'rgba(255,255,255,0.32)', fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Studio</p>
              {[
                { label: 'Design', hint: 'Templates' },
                { label: 'Create', hint: 'AI writing' },
                { label: 'Search', hint: 'Instant find' },
              ].map((item) => (
                <div key={item.label} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem', marginBottom: '0.5rem' }}>
                  <span style={{ fontSize: '0.82rem', color: '#fff', fontWeight: 500 }}>{item.label}</span>
                  <span style={{ fontSize: '0.72rem', color: 'rgba(139,92,246,0.7)' }}>{item.hint}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}

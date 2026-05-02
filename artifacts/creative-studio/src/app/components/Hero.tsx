import { useEffect, useRef } from 'react';
import { AnimatedHeading } from './AnimatedHeading';
import { FadeIn } from './FadeIn';
import { AnimatedBackground } from './AnimatedBackground';

interface HeroProps {
  onNavigate: (tab: string) => void;
}

export function Hero({ onNavigate }: HeroProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const lastMouse = useRef({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      lastMouse.current = { x, y };
      if (contentRef.current) {
        const rotX = (y - 0.5) * -5;
        const rotY = (x - 0.5) * 7;
        const tx = (x - 0.5) * -12;
        const ty = (y - 0.5) * -8;
        contentRef.current.style.transform =
          `perspective(1200px) rotateX(${rotX}deg) rotateY(${rotY}deg) translate(${tx}px, ${ty}px)`;
      }
    };

    const handleMouseLeave = () => {
      if (contentRef.current) {
        contentRef.current.style.transform =
          'perspective(1200px) rotateX(0deg) rotateY(0deg) translate(0px, 0px)';
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div style={{
      position: 'relative',
      width: '100%',
      height: '100%',
      overflow: 'hidden',
      backgroundColor: '#07071a',
    }}>
      <AnimatedBackground />

      {/* Hero content — 3D parallax layer */}
      <div
        ref={contentRef}
        style={{
          position: 'absolute',
          bottom: '3.5rem',
          left: '4rem',
          right: '4rem',
          zIndex: 20,
          transition: 'transform 0.12s ease-out',
          transformStyle: 'preserve-3d',
          willChange: 'transform',
        }}
      >
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          alignItems: 'flex-end',
          gap: '2rem',
        }}>
          {/* Left */}
          <div style={{ transform: 'translateZ(40px)' }}>
            <AnimatedHeading
              text={"Shaping tomorrow\nwith vision and action."}
              className="text-5xl md:text-6xl lg:text-7xl font-normal text-white"
              initialDelay={200}
              charDelay={28}
            />

            <FadeIn delay={850} duration={1000}>
              <p style={{
                color: 'rgba(210,200,255,0.75)',
                margin: '1rem 0 1.5rem',
                fontSize: '1rem',
                maxWidth: '440px',
                fontWeight: 300,
                lineHeight: 1.65,
                transform: 'translateZ(20px)',
              }}>
                We back visionaries and craft ventures that define what comes next.
              </p>
            </FadeIn>

            <FadeIn delay={1250} duration={1000}>
              <div style={{ display: 'flex', gap: '0.875rem', flexWrap: 'wrap', transform: 'translateZ(30px)' }}>
                <button
                  onClick={() => onNavigate('assistant')}
                  style={{
                    background: '#fff', color: '#000',
                    padding: '0.75rem 2rem', borderRadius: '0.5rem',
                    fontWeight: 500, fontSize: '0.875rem', border: 'none',
                    cursor: 'pointer', fontFamily: 'inherit',
                    transition: 'all 0.2s',
                    boxShadow: '0 4px 20px rgba(255,255,255,0.15)',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = '#e5e7eb'; e.currentTarget.style.transform = 'translateY(-2px) scale(1.03)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(255,255,255,0.2)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.transform = 'translateY(0) scale(1)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(255,255,255,0.15)'; }}
                >
                  Start a Chat
                </button>
                <button
                  onClick={() => onNavigate('design')}
                  className="liquid-glass"
                  style={{
                    color: '#fff', padding: '0.75rem 2rem', borderRadius: '0.5rem',
                    fontWeight: 500, fontSize: '0.875rem',
                    border: '1px solid rgba(180,140,255,0.3)',
                    cursor: 'pointer', fontFamily: 'inherit', background: 'transparent',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px) scale(1.03)'; e.currentTarget.style.borderColor = 'rgba(180,140,255,0.6)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0) scale(1)'; e.currentTarget.style.borderColor = 'rgba(180,140,255,0.3)'; }}
                >
                  Explore Now
                </button>
              </div>
            </FadeIn>
          </div>

          {/* Right */}
          <FadeIn delay={1450} duration={1000}>
            <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end', transform: 'translateZ(50px)' }}>
              <div
                className="liquid-glass"
                style={{
                  border: '1px solid rgba(180,140,255,0.25)',
                  padding: '0.875rem 1.5rem',
                  borderRadius: '0.875rem',
                  boxShadow: '0 0 40px rgba(120,60,255,0.18)',
                }}
              >
                <p style={{ color: '#fff', fontSize: '1.25rem', fontWeight: 300, letterSpacing: '-0.01em' }}>
                  Design. Create. Innovate.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}

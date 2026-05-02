import { AnimatedHeading } from './AnimatedHeading';
import { FadeIn } from './FadeIn';
import { AnimatedBackground } from './AnimatedBackground';

interface HeroProps {
  onNavigate: (tab: string) => void;
}

export function Hero({ onNavigate }: HeroProps) {
  return (
    <div style={{
      position: 'relative',
      width: '100%',
      height: '100%',
      overflow: 'hidden',
      backgroundColor: '#000',
    }}>
      {/* Canvas particle animation background */}
      <AnimatedBackground />

      {/* Hero content anchored to bottom */}
      <div style={{
        position: 'absolute',
        bottom: '3.5rem',
        left: '4rem',
        right: '4rem',
        zIndex: 20,
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          alignItems: 'flex-end',
          gap: '2rem',
        }}>
          {/* Left: heading + subtext + buttons */}
          <div>
            <AnimatedHeading
              text={"Shaping tomorrow\nwith vision and action."}
              className="text-5xl md:text-6xl lg:text-7xl font-normal text-white"
              initialDelay={200}
              charDelay={28}
            />

            <FadeIn delay={850} duration={1000}>
              <p style={{
                color: '#d1d5db',
                margin: '1rem 0 1.5rem',
                fontSize: '1rem',
                maxWidth: '440px',
                fontWeight: 300,
                lineHeight: 1.65,
              }}>
                We back visionaries and craft ventures that define what comes next.
              </p>
            </FadeIn>

            <FadeIn delay={1250} duration={1000}>
              <div style={{ display: 'flex', gap: '0.875rem', flexWrap: 'wrap' }}>
                <button
                  onClick={() => onNavigate('assistant')}
                  style={{
                    background: '#fff',
                    color: '#000',
                    padding: '0.75rem 2rem',
                    borderRadius: '0.5rem',
                    fontWeight: 500,
                    fontSize: '0.875rem',
                    border: 'none',
                    cursor: 'pointer',
                    fontFamily: 'inherit',
                    transition: 'background 0.2s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.background = '#e5e7eb')}
                  onMouseLeave={e => (e.currentTarget.style.background = '#fff')}
                >
                  Start a Chat
                </button>
                <button
                  onClick={() => onNavigate('design')}
                  className="liquid-glass"
                  style={{
                    color: '#fff',
                    padding: '0.75rem 2rem',
                    borderRadius: '0.5rem',
                    fontWeight: 500,
                    fontSize: '0.875rem',
                    border: '1px solid rgba(255,255,255,0.2)',
                    cursor: 'pointer',
                    fontFamily: 'inherit',
                    background: 'transparent',
                  }}
                >
                  Explore Now
                </button>
              </div>
            </FadeIn>
          </div>

          {/* Right: tag line */}
          <FadeIn delay={1450} duration={1000}>
            <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
              <div
                className="liquid-glass"
                style={{
                  border: '1px solid rgba(255,255,255,0.2)',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '0.75rem',
                }}
              >
                <p style={{ color: '#fff', fontSize: '1.25rem', fontWeight: 300 }}>
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

import { useState } from 'react';
import { Search, ArrowRight, Clock, TrendingUp } from 'lucide-react';
import { FadeIn } from './FadeIn';

const popular = ['Instagram post templates', 'Business card design', 'Essay on AI', 'YouTube thumbnail', 'Presentation slides', 'Custom stickers'];
const recent  = ['Social media templates', 'AI content generator', 'Poster design'];

const results = [
  { type: 'Template', name: 'Instagram Post — Modern',  cat: 'Design Studio' },
  { type: 'Feature',  name: 'AI Content Generator',     cat: 'Tools'         },
  { type: 'Template', name: 'LinkedIn Banner',           cat: 'Design Studio' },
  { type: 'Guide',    name: 'Creating custom stickers',  cat: 'Help'          },
  { type: 'Template', name: 'Presentation Slide',        cat: 'Design Studio' },
];

export function SmartSearch() {
  const [query, setQuery] = useState('');
  const hits = query.trim() ? results : [];

  const sectionLabel: React.CSSProperties = {
    fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.28)',
  };

  return (
    <div style={{ minHeight: '100vh', background: '#090909', paddingTop: '5.5rem', paddingBottom: '4rem' }} className="px-10 lg:px-16">
      <FadeIn delay={80} duration={500}>
        <div style={{ marginBottom: '2.25rem' }}>
          <p style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(139,92,246,0.65)', marginBottom: '0.35rem' }}>Tools</p>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 500, letterSpacing: '-0.035em', color: '#fff', margin: 0 }}>Smart Search</h2>
          <p style={{ color: 'rgba(255,255,255,0.32)', marginTop: '0.5rem', fontSize: '0.875rem' }}>Find anything, instantly.</p>
        </div>
      </FadeIn>

      <FadeIn delay={160} duration={500}>
        <div style={{ maxWidth: '600px', position: 'relative', marginBottom: '2.5rem' }}>
          <Search size={15} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'rgba(255,255,255,0.25)', pointerEvents: 'none' }} />
          <input
            type="text" value={query} onChange={e => setQuery(e.target.value)}
            placeholder="Search templates, tools, or content…"
            className="input-field"
            style={{
              paddingLeft: '2.75rem', paddingTop: '0.8rem', paddingBottom: '0.8rem',
              fontSize: '0.9rem', borderRadius: '10px',
              boxShadow: query ? '0 0 0 1px rgba(139,92,246,0.3), 0 0 24px rgba(139,92,246,0.12)' : 'none',
              transition: 'all 0.2s',
            }}
          />
        </div>
      </FadeIn>

      {!hits.length ? (
        <FadeIn delay={240} duration={500}>
          <div style={{ maxWidth: '600px', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {/* Popular */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                <TrendingUp size={12} color="rgba(139,92,246,0.6)" />
                <p style={sectionLabel}>Popular</p>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {popular.map(s => (
                  <button key={s} onClick={() => setQuery(s)} style={{
                    padding: '0.4rem 0.875rem',
                    background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)',
                    color: 'rgba(255,255,255,0.5)', borderRadius: '20px',
                    fontSize: '0.8rem', cursor: 'pointer', fontFamily: 'inherit', transition: 'all 0.15s',
                  }}
                    onMouseEnter={e => { e.currentTarget.style.background = 'rgba(139,92,246,0.10)'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = 'rgba(139,92,246,0.3)'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; e.currentTarget.style.color = 'rgba(255,255,255,0.5)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'; }}
                  >{s}</button>
                ))}
              </div>
            </div>

            {/* Recent */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                <Clock size={12} color="rgba(139,92,246,0.6)" />
                <p style={sectionLabel}>Recent</p>
              </div>
              <div style={{ background: '#111', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '10px', overflow: 'hidden' }}>
                {recent.map((s, i) => (
                  <button key={s} onClick={() => setQuery(s)} style={{
                    width: '100%', textAlign: 'left', padding: '0.85rem 1.1rem',
                    borderBottom: i < recent.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                    color: 'rgba(255,255,255,0.5)', background: 'none', cursor: 'pointer', fontFamily: 'inherit',
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    fontSize: '0.85rem', transition: 'all 0.15s',
                  }}
                    onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; e.currentTarget.style.color = '#fff'; (e.currentTarget.querySelector('svg') as SVGElement | null)!.style.opacity = '1'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'none'; e.currentTarget.style.color = 'rgba(255,255,255,0.5)'; (e.currentTarget.querySelector('svg') as SVGElement | null)!.style.opacity = '0'; }}
                  >
                    <span>{s}</span>
                    <ArrowRight size={13} style={{ opacity: 0, transition: 'opacity 0.15s', color: 'rgba(139,92,246,0.7)' }} />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      ) : (
        <FadeIn delay={0} duration={280}>
          <div style={{ maxWidth: '600px' }}>
            <p style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.25)', marginBottom: '0.875rem' }}>{hits.length} results for "{query}"</p>
            <div style={{ background: '#111', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '10px', overflow: 'hidden' }}>
              {hits.map((r, i) => (
                <div key={i} style={{
                  padding: '0.9rem 1.1rem',
                  borderBottom: i < hits.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                  cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  transition: 'background 0.15s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(139,92,246,0.05)'; (e.currentTarget.querySelector('.row-arrow') as HTMLElement | null)!.style.opacity = '1'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; (e.currentTarget.querySelector('.row-arrow') as HTMLElement | null)!.style.opacity = '0'; }}
                >
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.2rem' }}>
                      <span style={{
                        fontSize: '0.67rem', padding: '0.15rem 0.45rem',
                        background: 'rgba(139,92,246,0.12)', color: 'rgba(139,92,246,0.8)',
                        border: '1px solid rgba(139,92,246,0.22)', borderRadius: '4px', fontWeight: 500,
                      }}>{r.type}</span>
                      <span style={{ fontSize: '0.875rem', color: '#fff', fontWeight: 500 }}>{r.name}</span>
                    </div>
                    <p style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.25)' }}>{r.cat}</p>
                  </div>
                  <ArrowRight className="row-arrow" size={13} style={{ color: 'rgba(139,92,246,0.6)', opacity: 0, transition: 'opacity 0.15s', flexShrink: 0 }} />
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      )}
    </div>
  );
}

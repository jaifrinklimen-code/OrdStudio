import { useState } from 'react';
import { Download, Share2, Image, Type, Sparkles, ArrowLeft } from 'lucide-react';
import { FadeIn } from './FadeIn';
import { TiltCard } from './TiltCard';

const templates = [
  { id: 1, name: 'Instagram Post',     category: 'Social',       size: '1080×1080', icon: '◈', premium: false },
  { id: 2, name: 'LinkedIn Banner',    category: 'Social',       size: '1584×396',  icon: '▣', premium: true  },
  { id: 3, name: 'Presentation Slide', category: 'Presentation', size: '1920×1080', icon: '◉', premium: false },
  { id: 4, name: 'YouTube Thumbnail',  category: 'Social',       size: '1280×720',  icon: '⬡', premium: false },
  { id: 5, name: 'Poster A4',          category: 'Print',        size: '2480×3508', icon: '▤', premium: true  },
  { id: 6, name: 'Twitter Header',     category: 'Social',       size: '1500×500',  icon: '◎', premium: false },
  { id: 7, name: 'Story Template',     category: 'Social',       size: '1080×1920', icon: '✦', premium: true  },
  { id: 8, name: 'Business Card',      category: 'Print',        size: '1050×600',  icon: '◆', premium: false },
];
const cats = ['All', 'Social', 'Presentation', 'Print'];

const card: React.CSSProperties = {
  background: '#111', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '10px', overflow: 'hidden',
};

export function DesignStudio() {
  const [selected, setSelected] = useState<number | null>(null);
  const [filter, setFilter] = useState('All');

  const filtered = filter === 'All' ? templates : templates.filter(t => t.category === filter);

  return (
    <div style={{ minHeight: '100vh', background: '#090909', paddingTop: '5.5rem', paddingBottom: '4rem' }} className="px-10 lg:px-16">
      <FadeIn delay={80} duration={500}>
        <div style={{ marginBottom: '2.25rem' }}>
          <p style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(139,92,246,0.65)', marginBottom: '0.35rem' }}>Tools</p>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 500, letterSpacing: '-0.035em', color: '#fff', margin: 0 }}>Design Studio</h2>
          <p style={{ color: 'rgba(255,255,255,0.32)', marginTop: '0.5rem', fontSize: '0.875rem' }}>Professional templates for every format.</p>
        </div>
      </FadeIn>

      {!selected ? (
        <FadeIn delay={160} duration={500}>
          {/* Filter */}
          <div style={{ display: 'flex', gap: '0.375rem', marginBottom: '1.75rem', flexWrap: 'wrap' }}>
            {cats.map(c => (
              <button key={c} onClick={() => setFilter(c)} style={{
                padding: '0.4rem 1rem', borderRadius: '6px', fontSize: '0.78rem',
                fontWeight: filter === c ? 500 : 400, cursor: 'pointer', fontFamily: 'inherit', transition: 'all 0.15s',
                background: filter === c ? 'rgba(139,92,246,0.15)' : 'transparent',
                border: `1px solid ${filter === c ? 'rgba(139,92,246,0.35)' : 'rgba(255,255,255,0.07)'}`,
                color: filter === c ? '#fff' : 'rgba(255,255,255,0.4)',
              }}>
                {c}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {filtered.map((t, i) => (
              <div key={t.id} className="card-up" style={{ animationDelay: `${i * 45}ms` }}>
                <TiltCard style={card} onClick={() => setSelected(t.id)} intensity={10}>
                  {/* Preview area */}
                  <div style={{
                    height: '140px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: 'rgba(139,92,246,0.06)',
                    borderBottom: '1px solid rgba(255,255,255,0.05)',
                    position: 'relative',
                  }}>
                    <span style={{ fontSize: '2.5rem', color: 'rgba(139,92,246,0.25)', transform: 'translateZ(16px)', display: 'block' }}>{t.icon}</span>
                    {t.premium && (
                      <div style={{
                        position: 'absolute', top: '0.625rem', right: '0.625rem',
                        background: 'rgba(139,92,246,0.20)', border: '1px solid rgba(139,92,246,0.35)',
                        color: 'rgba(139,92,246,0.9)', padding: '0.15rem 0.45rem',
                        borderRadius: '4px', fontSize: '0.62rem', fontWeight: 600, transform: 'translateZ(24px)',
                        display: 'flex', alignItems: 'center', gap: '0.2rem',
                      }}>
                        <Sparkles size={8} />PRO
                      </div>
                    )}
                  </div>
                  {/* Info */}
                  <div style={{ padding: '0.75rem 0.875rem', transform: 'translateZ(8px)' }}>
                    <p style={{ fontWeight: 500, color: '#fff', fontSize: '0.82rem' }}>{t.name}</p>
                    <p style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.28)', marginTop: '0.2rem' }}>{t.size} · {t.category}</p>
                  </div>
                </TiltCard>
              </div>
            ))}
          </div>
        </FadeIn>
      ) : (
        <FadeIn delay={0} duration={380}>
          <div style={{ background: '#111', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '12px', overflow: 'hidden' }}>
            {/* Toolbar */}
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              padding: '0.875rem 1.25rem', borderBottom: '1px solid rgba(255,255,255,0.06)',
              background: 'rgba(255,255,255,0.02)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
                <button onClick={() => setSelected(null)} style={{
                  display: 'flex', alignItems: 'center', gap: '0.35rem',
                  color: 'rgba(255,255,255,0.35)', fontSize: '0.8rem',
                  background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit', transition: 'color 0.15s',
                }}
                  onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                  onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.35)'}
                >
                  <ArrowLeft size={14} />Back
                </button>
                <div style={{ width: '1px', height: '16px', background: 'rgba(255,255,255,0.08)' }} />
                <span style={{ color: '#fff', fontWeight: 500, fontSize: '0.82rem' }}>
                  {templates.find(t => t.id === selected)?.name}
                </span>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                {[<Image size={15} />, <Type size={15} />, <Share2 size={15} />].map((icon, i) => (
                  <button key={i} style={{
                    padding: '0.45rem', color: 'rgba(255,255,255,0.35)', cursor: 'pointer',
                    background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '6px',
                    transition: 'all 0.15s', display: 'flex', alignItems: 'center',
                  }}
                    onMouseEnter={e => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; }}
                    onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.35)'; e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; }}
                  >{icon}</button>
                ))}
                <button style={{
                  padding: '0.45rem 1rem', background: '#8b5cf6',
                  color: '#fff', border: 'none', borderRadius: '6px',
                  fontSize: '0.78rem', fontWeight: 500, cursor: 'pointer', fontFamily: 'inherit',
                  display: 'flex', alignItems: 'center', gap: '0.35rem', transition: 'all 0.15s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.background = '#7c3aed'; e.currentTarget.style.boxShadow = '0 0 16px rgba(139,92,246,0.4)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = '#8b5cf6'; e.currentTarget.style.boxShadow = 'none'; }}
                >
                  <Download size={13} />Download
                </button>
              </div>
            </div>

            {/* Canvas */}
            <div style={{ padding: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '540px', background: '#0d0d0d' }}>
              <TiltCard intensity={5} style={{ width: '100%', maxWidth: '42rem' }}>
                <div style={{
                  width: '100%', aspectRatio: '16/9', borderRadius: '10px',
                  background: 'rgba(139,92,246,0.06)',
                  border: '1px solid rgba(139,92,246,0.15)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <div style={{ textAlign: 'center', color: 'rgba(139,92,246,0.25)', transform: 'translateZ(16px)' }}>
                    <div style={{ fontSize: '3rem', marginBottom: '0.75rem' }}>
                      {templates.find(t => t.id === selected)?.icon}
                    </div>
                    <p style={{ fontSize: '0.8rem', fontWeight: 300, letterSpacing: '0.05em', color: 'rgba(255,255,255,0.15)' }}>Your canvas awaits</p>
                  </div>
                </div>
              </TiltCard>
            </div>
          </div>
        </FadeIn>
      )}
    </div>
  );
}

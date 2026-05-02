import { useState } from 'react';
import { Sparkles, Download } from 'lucide-react';
import { FadeIn } from './FadeIn';
import { TiltCard } from './TiltCard';

const styles = ['Minimal', 'Abstract', 'Expressive'];

const stickers = [
  { id: 1, icon: '◈' }, { id: 2, icon: '✦' },
  { id: 3, icon: '◉' }, { id: 4, icon: '◎' },
  { id: 5, icon: '⬡' }, { id: 6, icon: '◆' },
];

const card: React.CSSProperties = {
  background: '#111', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '12px',
};

export function StickerLab() {
  const [prompt, setPrompt] = useState('');
  const [style, setStyle] = useState('Minimal');
  const [generating, setGenerating] = useState(false);

  const handleGenerate = () => {
    if (!prompt.trim()) return;
    setGenerating(true);
    setTimeout(() => setGenerating(false), 1800);
  };

  return (
    <div style={{ minHeight: '100vh', background: '#090909', paddingTop: '5.5rem', paddingBottom: '4rem' }} className="px-10 lg:px-16">
      <FadeIn delay={80} duration={500}>
        <div style={{ marginBottom: '2.25rem' }}>
          <p style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(139,92,246,0.65)', marginBottom: '0.35rem' }}>Tools</p>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 500, letterSpacing: '-0.035em', color: '#fff', margin: 0 }}>Sticker Lab</h2>
          <p style={{ color: 'rgba(255,255,255,0.32)', marginTop: '0.5rem', fontSize: '0.875rem' }}>AI-generated stickers, your style.</p>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Controls */}
        <FadeIn delay={160} duration={500}>
          <div style={{ ...card, padding: '1.25rem', position: 'sticky', top: '5.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <p style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.28)' }}>Create</p>

            <div>
              <label style={{ display: 'block', fontSize: '0.72rem', color: 'rgba(255,255,255,0.35)', marginBottom: '0.4rem' }}>Describe your sticker</label>
              <textarea value={prompt} onChange={e => setPrompt(e.target.value)}
                placeholder="e.g., Minimalist geometric mark with bold contrast"
                rows={4} className="input-field"
                style={{ resize: 'none', padding: '0.7rem 1rem' }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.72rem', color: 'rgba(255,255,255,0.35)', marginBottom: '0.5rem' }}>Style</label>
              <div style={{ display: 'flex', gap: '0.375rem' }}>
                {styles.map(s => (
                  <button key={s} onClick={() => setStyle(s)} style={{
                    flex: 1, padding: '0.45rem', borderRadius: '6px',
                    fontSize: '0.75rem', fontWeight: style === s ? 500 : 400,
                    cursor: 'pointer', fontFamily: 'inherit', transition: 'all 0.15s',
                    background: style === s ? 'rgba(139,92,246,0.15)' : 'transparent',
                    border: `1px solid ${style === s ? 'rgba(139,92,246,0.35)' : 'rgba(255,255,255,0.07)'}`,
                    color: style === s ? '#fff' : 'rgba(255,255,255,0.4)',
                  }}>{s}</button>
                ))}
              </div>
            </div>

            <button onClick={handleGenerate} disabled={generating || !prompt.trim()}
              className={!generating && prompt.trim() ? 'glow-pulse' : ''}
              style={{
                padding: '0.7rem', fontFamily: 'inherit', fontWeight: 500,
                fontSize: '0.875rem', border: 'none', borderRadius: '8px', cursor: !generating && prompt.trim() ? 'pointer' : 'not-allowed',
                background: !generating && prompt.trim() ? '#8b5cf6' : 'rgba(139,92,246,0.15)',
                color: !generating && prompt.trim() ? '#fff' : 'rgba(255,255,255,0.25)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                transition: 'all 0.15s',
              }}>
              {generating
                ? <><div style={{ width: '0.85rem', height: '0.85rem', border: '2px solid rgba(255,255,255,0.2)', borderTop: '2px solid #fff', borderRadius: '50%' }} className="animate-spin" />Generating...</>
                : <><Sparkles size={13} />Generate</>}
            </button>

            <p style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.2)', lineHeight: 1.5 }}>
              Be specific for better results. Style affects shape, weight, and detail.
            </p>
          </div>
        </FadeIn>

        {/* Gallery */}
        <FadeIn delay={240} duration={500} className="lg:col-span-2">
          <div style={card} className="p-5">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
              <p style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.28)' }}>Gallery</p>
              <button style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.28)', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit', transition: 'color 0.15s' }}
                onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.28)'}
              >Download All</button>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {stickers.map((s, i) => (
                <div key={s.id} className="card-up" style={{ animationDelay: `${i * 60}ms` }}>
                  <TiltCard intensity={14} style={{ borderRadius: '10px', overflow: 'hidden' }}>
                    <div className="group" style={{
                      aspectRatio: '1', display: 'flex', alignItems: 'center', justifyContent: 'center',
                      background: 'rgba(139,92,246,0.06)', border: '1px solid rgba(139,92,246,0.10)',
                      cursor: 'pointer', position: 'relative', borderRadius: '10px',
                      transition: 'background 0.18s, border-color 0.18s',
                    }}
                      onMouseEnter={e => { e.currentTarget.style.background = 'rgba(139,92,246,0.10)'; e.currentTarget.style.borderColor = 'rgba(139,92,246,0.22)'; const btn = e.currentTarget.querySelector('.dl-btn') as HTMLElement; if (btn) btn.style.opacity = '1'; }}
                      onMouseLeave={e => { e.currentTarget.style.background = 'rgba(139,92,246,0.06)'; e.currentTarget.style.borderColor = 'rgba(139,92,246,0.10)'; const btn = e.currentTarget.querySelector('.dl-btn') as HTMLElement; if (btn) btn.style.opacity = '0'; }}
                    >
                      <span style={{ fontSize: '2.6rem', color: 'rgba(139,92,246,0.35)', display: 'block', transform: 'translateZ(20px)', transition: 'color 0.18s' }}>{s.icon}</span>
                      <button className="dl-btn" style={{
                        position: 'absolute', bottom: '0.5rem', right: '0.5rem',
                        padding: '0.3rem', background: 'rgba(9,9,9,0.9)', backdropFilter: 'blur(8px)',
                        border: '1px solid rgba(139,92,246,0.25)', borderRadius: '5px',
                        cursor: 'pointer', opacity: 0, transition: 'opacity 0.18s', transform: 'translateZ(28px)',
                      }}>
                        <Download size={11} color="rgba(139,92,246,0.8)" />
                      </button>
                    </div>
                  </TiltCard>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}

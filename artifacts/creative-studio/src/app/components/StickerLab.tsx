import { useState } from 'react';
import { Sparkles, Download } from 'lucide-react';
import { FadeIn } from './FadeIn';

const categories = [
  { id: 'minimal',    name: 'Minimal'    },
  { id: 'abstract',   name: 'Abstract'   },
  { id: 'expressive', name: 'Expressive' },
];

const sampleStickers = [
  { id: 1, emoji: '◈', bg: 'from-violet-600 via-purple-600 to-indigo-700'  },
  { id: 2, emoji: '✦', bg: 'from-blue-600 via-indigo-600 to-violet-700'    },
  { id: 3, emoji: '◉', bg: 'from-fuchsia-600 via-pink-600 to-rose-700'     },
  { id: 4, emoji: '◎', bg: 'from-indigo-600 via-blue-600 to-cyan-700'      },
  { id: 5, emoji: '⬡', bg: 'from-emerald-600 via-teal-600 to-indigo-700'   },
  { id: 6, emoji: '⬢', bg: 'from-amber-600 via-orange-600 to-rose-700'     },
];

const cardStyle: React.CSSProperties = {
  background: 'rgba(14, 11, 42, 0.85)',
  border: '1px solid rgba(120, 80, 255, 0.18)',
  borderRadius: '0.875rem',
  backdropFilter: 'blur(8px)',
};

export function StickerLab() {
  const [prompt, setPrompt] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('minimal');
  const [isGenerating, setIsGenerating] = useState(false);
  const [stickers] = useState(sampleStickers);

  const handleGenerate = () => {
    if (!prompt.trim()) return;
    setIsGenerating(true);
    setTimeout(() => setIsGenerating(false), 2000);
  };

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #07071a 0%, #0d0a2e 40%, #080e24 100%)', paddingTop: '6rem', paddingBottom: '4rem', position: 'relative' }} className="px-6 md:px-12 lg:px-16">
      {/* Ambient glows */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden', zIndex: 0 }}>
        <div style={{ position: 'absolute', top: '5%', right: '10%', width: '36%', height: '50%', background: 'radial-gradient(ellipse, rgba(200,60,200,0.09) 0%, transparent 70%)', filter: 'blur(50px)' }} />
        <div style={{ position: 'absolute', bottom: '10%', left: '5%', width: '32%', height: '40%', background: 'radial-gradient(ellipse, rgba(60,100,255,0.09) 0%, transparent 70%)', filter: 'blur(50px)' }} />
      </div>

      <div style={{ position: 'relative', zIndex: 1 }}>
        <FadeIn delay={100} duration={600}>
          <div className="mb-10">
            <p style={{ fontSize: '0.7rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(160,130,255,0.7)', marginBottom: '0.5rem' }}>Tools</p>
            <h2 style={{ fontSize: 'clamp(2rem,5vw,3rem)', fontWeight: 300, letterSpacing: '-0.03em', background: 'linear-gradient(135deg, #fff 30%, #c4a8ff 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Sticker Lab
            </h2>
            <p style={{ color: 'rgba(200,185,255,0.55)', marginTop: '0.75rem', fontSize: '0.95rem' }}>AI-generated stickers, your style.</p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Controls */}
          <FadeIn delay={200} duration={600}>
            <div style={{ ...cardStyle, padding: '1.25rem', position: 'sticky', top: '6rem' }} className="space-y-5">
              <p style={{ fontSize: '0.68rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(160,130,255,0.6)' }}>Create</p>

              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', color: 'rgba(180,165,255,0.6)', marginBottom: '0.4rem' }}>Describe your sticker</label>
                <textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="e.g., Minimalist geometric mark with bold contrast"
                  rows={4}
                  style={{
                    width: '100%',
                    background: 'rgba(8,6,24,0.8)',
                    border: '1px solid rgba(120,80,255,0.2)',
                    color: '#fff',
                    padding: '0.75rem 1rem',
                    borderRadius: '0.625rem',
                    fontSize: '0.875rem',
                    outline: 'none',
                    fontFamily: 'inherit',
                    resize: 'none',
                    transition: 'border-color 0.2s',
                  }}
                  className="focus:border-purple-400/50 placeholder:text-purple-300/20"
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', color: 'rgba(180,165,255,0.6)', marginBottom: '0.5rem' }}>Style</label>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      style={{
                        flex: 1, padding: '0.5rem',
                        borderRadius: '0.5rem',
                        fontSize: '0.75rem', fontWeight: 500,
                        cursor: 'pointer', fontFamily: 'inherit',
                        transition: 'all 0.2s',
                        background: selectedCategory === cat.id ? 'linear-gradient(135deg, #7c3aed, #4f46e5)' : 'rgba(10,8,30,0.7)',
                        border: selectedCategory === cat.id ? 'none' : '1px solid rgba(120,80,255,0.18)',
                        color: selectedCategory === cat.id ? '#fff' : 'rgba(180,165,255,0.55)',
                        boxShadow: selectedCategory === cat.id ? '0 0 16px rgba(124,58,237,0.3)' : 'none',
                      }}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={handleGenerate}
                disabled={isGenerating || !prompt.trim()}
                style={{
                  width: '100%', padding: '0.75rem',
                  background: isGenerating || !prompt.trim() ? 'rgba(100,70,200,0.2)' : 'linear-gradient(135deg, #7c3aed, #4f46e5)',
                  color: '#fff', border: 'none', borderRadius: '0.625rem',
                  fontSize: '0.875rem', fontWeight: 500,
                  cursor: isGenerating || !prompt.trim() ? 'not-allowed' : 'pointer',
                  fontFamily: 'inherit',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                  boxShadow: isGenerating || !prompt.trim() ? 'none' : '0 0 24px rgba(124,58,237,0.4)',
                  transition: 'all 0.2s',
                }}
              >
                {isGenerating ? (
                  <><div style={{ width: '0.9rem', height: '0.9rem', border: '2px solid rgba(255,255,255,0.3)', borderTop: '2px solid #fff', borderRadius: '50%' }} className="animate-spin" />Generating...</>
                ) : (
                  <><Sparkles size={14} />Generate</>
                )}
              </button>

              <p style={{ fontSize: '0.72rem', color: 'rgba(140,110,200,0.45)' }}>
                Be specific with your description for better results.
              </p>
            </div>
          </FadeIn>

          {/* Gallery */}
          <FadeIn delay={300} duration={600} className="lg:col-span-2">
            <div style={cardStyle} className="p-5">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                <p style={{ fontSize: '0.68rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(160,130,255,0.6)' }}>Gallery</p>
                <button style={{ fontSize: '0.75rem', color: 'rgba(160,130,255,0.5)', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit', transition: 'color 0.2s' }} className="hover:text-white">
                  Download All
                </button>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {stickers.map((sticker, i) => (
                  <FadeIn key={sticker.id} delay={300 + i * 80} duration={500}>
                    <div
                      style={{ borderRadius: '0.875rem', border: '1px solid rgba(120,80,255,0.1)', cursor: 'pointer', position: 'relative', overflow: 'hidden', transition: 'all 0.3s' }}
                      className={`aspect-square bg-gradient-to-br ${sticker.bg} flex items-center justify-center group hover:border-purple-400/40 hover:shadow-[0_0_30px_rgba(120,60,255,0.25)]`}
                    >
                      <span style={{ fontSize: '2.5rem', color: 'rgba(255,255,255,0.45)', transition: 'all 0.2s', fontWeight: 300 }} className="group-hover:text-white/70 group-hover:scale-110">
                        {sticker.emoji}
                      </span>
                      <button
                        style={{
                          position: 'absolute', bottom: '0.5rem', right: '0.5rem',
                          padding: '0.35rem',
                          background: 'rgba(14,11,42,0.8)', backdropFilter: 'blur(8px)',
                          border: '1px solid rgba(120,80,255,0.3)',
                          borderRadius: '0.45rem', cursor: 'pointer',
                          opacity: 0, transition: 'opacity 0.2s',
                        }}
                        className="group-hover:opacity-100"
                      >
                        <Download size={12} color="rgba(200,185,255,0.9)" />
                      </button>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}

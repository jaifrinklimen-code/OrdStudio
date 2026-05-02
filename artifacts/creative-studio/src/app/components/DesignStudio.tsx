import { useState } from 'react';
import { Download, Share2, Image, Type, Sparkles, ArrowLeft } from 'lucide-react';
import { FadeIn } from './FadeIn';
import { TiltCard } from './TiltCard';

const templates = [
  { id: 1, name: 'Instagram Post',     category: 'Social Media',  size: '1080×1080', color: 'from-violet-700 via-purple-700 to-indigo-800',  premium: false },
  { id: 2, name: 'LinkedIn Banner',    category: 'Social Media',  size: '1584×396',  color: 'from-blue-700 via-indigo-700 to-violet-800',    premium: true  },
  { id: 3, name: 'Presentation Slide', category: 'Presentation',  size: '1920×1080', color: 'from-indigo-700 via-blue-700 to-cyan-700',      premium: false },
  { id: 4, name: 'YouTube Thumbnail',  category: 'Social Media',  size: '1280×720',  color: 'from-rose-700 via-pink-700 to-purple-700',      premium: false },
  { id: 5, name: 'Poster A4',          category: 'Print',         size: '2480×3508', color: 'from-emerald-700 via-teal-700 to-indigo-700',   premium: true  },
  { id: 6, name: 'Twitter Header',     category: 'Social Media',  size: '1500×500',  color: 'from-sky-700 via-blue-700 to-violet-700',       premium: false },
  { id: 7, name: 'Story Template',     category: 'Social Media',  size: '1080×1920', color: 'from-fuchsia-700 via-violet-700 to-purple-800', premium: true  },
  { id: 8, name: 'Business Card',      category: 'Print',         size: '1050×600',  color: 'from-amber-700 via-orange-700 to-rose-700',     premium: false },
];

const pageStyle: React.CSSProperties = {
  minHeight: '100vh',
  background: 'linear-gradient(135deg, #07071a 0%, #0d0a2e 40%, #080e24 100%)',
  paddingTop: '6rem',
  paddingBottom: '4rem',
  position: 'relative',
};

const cardBase: React.CSSProperties = {
  background: 'rgba(14, 11, 42, 0.85)',
  border: '1px solid rgba(120, 80, 255, 0.18)',
  borderRadius: '0.875rem',
  backdropFilter: 'blur(8px)',
  overflow: 'hidden',
};

export function DesignStudio() {
  const [selectedTemplate, setSelectedTemplate] = useState<number | null>(null);
  const [filter, setFilter] = useState('all');

  const categories = ['all', 'Social Media', 'Presentation', 'Print'];
  const filteredTemplates = filter === 'all' ? templates : templates.filter(t => t.category === filter);

  return (
    <div style={pageStyle} className="px-6 md:px-12 lg:px-16">
      {/* Ambient glow */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden', zIndex: 0 }}>
        <div style={{ position: 'absolute', top: '10%', left: '5%', width: '35%', height: '45%', background: 'radial-gradient(ellipse, rgba(120,60,255,0.12) 0%, transparent 70%)', filter: 'blur(40px)' }} />
        <div style={{ position: 'absolute', top: '30%', right: '5%', width: '30%', height: '40%', background: 'radial-gradient(ellipse, rgba(60,100,255,0.10) 0%, transparent 70%)', filter: 'blur(40px)' }} />
      </div>

      <div style={{ position: 'relative', zIndex: 1 }}>
        <FadeIn delay={100} duration={600}>
          <div className="mb-10">
            <p style={{ fontSize: '0.7rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(160,130,255,0.7)', marginBottom: '0.5rem' }}>Tools</p>
            <h2 style={{ fontSize: 'clamp(2rem,5vw,3rem)', fontWeight: 300, letterSpacing: '-0.03em', background: 'linear-gradient(135deg, #fff 30%, #c4a8ff 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Design Studio
            </h2>
            <p style={{ color: 'rgba(200,185,255,0.55)', marginTop: '0.75rem', fontSize: '0.95rem' }}>Professional templates for every format.</p>
          </div>
        </FadeIn>

        {!selectedTemplate ? (
          <FadeIn delay={200} duration={700}>
            {/* Filter tabs */}
            <div className="flex gap-3 mb-8 flex-wrap">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  style={filter === cat ? {
                    background: 'linear-gradient(135deg, #7c3aed, #4f46e5)',
                    color: '#fff', border: 'none',
                    padding: '0.45rem 1.1rem', borderRadius: '0.5rem',
                    fontSize: '0.82rem', fontWeight: 500, cursor: 'pointer',
                    fontFamily: 'inherit', boxShadow: '0 0 20px rgba(124,58,237,0.4)',
                  } : {
                    background: 'rgba(14, 11, 42, 0.7)', color: 'rgba(200,185,255,0.55)',
                    border: '1px solid rgba(120,80,255,0.2)',
                    padding: '0.45rem 1.1rem', borderRadius: '0.5rem',
                    fontSize: '0.82rem', fontWeight: 400, cursor: 'pointer', fontFamily: 'inherit',
                  }}
                >
                  {cat === 'all' ? 'All' : cat}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredTemplates.map((template, i) => (
                <div
                  key={template.id}
                  className="card-3d-enter"
                  style={{ animationDelay: `${i * 55}ms` }}
                >
                  <TiltCard
                    style={cardBase}
                    onClick={() => setSelectedTemplate(template.id)}
                    intensity={12}
                  >
                    <div className={`bg-gradient-to-br ${template.color} h-44 flex items-center justify-center relative`}
                      style={{ transformStyle: 'preserve-3d' }}>
                      <div style={{ fontSize: '3.2rem', color: 'rgba(255,255,255,0.22)', transform: 'translateZ(20px)', transition: 'transform 0.2s' }}>▣</div>
                      {template.premium && (
                        <div style={{
                          position: 'absolute', top: '0.75rem', right: '0.75rem',
                          background: 'rgba(0,0,0,0.45)', backdropFilter: 'blur(8px)',
                          border: '1px solid rgba(255,255,255,0.2)', color: '#fff',
                          padding: '0.2rem 0.55rem', borderRadius: '0.4rem',
                          fontSize: '0.7rem', fontWeight: 600,
                          display: 'flex', alignItems: 'center', gap: '0.25rem',
                          transform: 'translateZ(30px)',
                        }}>
                          <Sparkles size={9} /> PRO
                        </div>
                      )}
                    </div>
                    <div style={{ padding: '1rem', background: 'rgba(10, 8, 32, 0.6)', transform: 'translateZ(10px)' }}>
                      <h3 style={{ fontWeight: 500, color: '#fff', fontSize: '0.85rem' }}>{template.name}</h3>
                      <p style={{ fontSize: '0.72rem', color: 'rgba(160,140,220,0.6)', marginTop: '0.25rem' }}>{template.size}px</p>
                      <div style={{ marginTop: '0.4rem', fontSize: '0.7rem', color: 'rgba(140,120,200,0.45)' }}>{template.category}</div>
                    </div>
                  </TiltCard>
                </div>
              ))}
            </div>
          </FadeIn>
        ) : (
          <FadeIn delay={0} duration={400}>
            <div style={{ ...cardBase }}>
              <div style={{ borderBottom: '1px solid rgba(120,80,255,0.15)', padding: '1rem 1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'rgba(10,8,30,0.6)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <button
                    onClick={() => setSelectedTemplate(null)}
                    style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'rgba(180,160,255,0.6)', fontSize: '0.85rem', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}
                  >
                    <ArrowLeft size={15} /> Back
                  </button>
                  <span style={{ color: '#fff', fontWeight: 500, fontSize: '0.85rem' }}>
                    {templates.find(t => t.id === selectedTemplate)?.name}
                  </span>
                </div>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  {[<Image size={17} />, <Type size={17} />, <Share2 size={17} />].map((icon, i) => (
                    <button key={i} style={{ padding: '0.45rem', color: 'rgba(180,160,255,0.5)', background: 'rgba(14,11,42,0.7)', border: '1px solid rgba(120,80,255,0.18)', borderRadius: '0.5rem', cursor: 'pointer' }}>
                      {icon}
                    </button>
                  ))}
                  <button style={{ padding: '0.45rem 1rem', background: 'linear-gradient(135deg, #7c3aed, #4f46e5)', color: '#fff', border: 'none', borderRadius: '0.5rem', fontSize: '0.8rem', fontWeight: 500, cursor: 'pointer', fontFamily: 'inherit', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <Download size={15} /> Download
                  </button>
                </div>
              </div>
              <div style={{ padding: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '560px', background: 'rgba(8,6,24,0.7)' }}>
                <TiltCard intensity={6} style={{ width: '100%', maxWidth: '42rem' }}>
                  <div className={`bg-gradient-to-br ${templates.find(t => t.id === selectedTemplate)?.color} w-full aspect-video rounded-xl border border-white/10 flex items-center justify-center`}>
                    <div style={{ textAlign: 'center', color: 'rgba(255,255,255,0.55)', transform: 'translateZ(20px)' }}>
                      <div style={{ fontSize: '4rem', marginBottom: '1rem', fontWeight: 300 }}>▣</div>
                      <p style={{ fontSize: '0.85rem', fontWeight: 300, letterSpacing: '0.05em' }}>Your canvas awaits</p>
                    </div>
                  </div>
                </TiltCard>
              </div>
            </div>
          </FadeIn>
        )}
      </div>
    </div>
  );
}

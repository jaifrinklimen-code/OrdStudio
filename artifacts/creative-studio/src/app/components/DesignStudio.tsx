import { useState } from 'react';
import { Download, Share2, Image, Type, Sparkles, ArrowLeft } from 'lucide-react';
import { FadeIn } from './FadeIn';

const templates = [
  { id: 1, name: 'Instagram Post', category: 'Social Media', size: '1080×1080', color: 'from-zinc-800 to-zinc-700', premium: false },
  { id: 2, name: 'LinkedIn Banner', category: 'Social Media', size: '1584×396', color: 'from-zinc-900 to-zinc-700', premium: true },
  { id: 3, name: 'Presentation Slide', category: 'Presentation', size: '1920×1080', color: 'from-neutral-900 to-neutral-700', premium: false },
  { id: 4, name: 'YouTube Thumbnail', category: 'Social Media', size: '1280×720', color: 'from-stone-900 to-stone-700', premium: false },
  { id: 5, name: 'Poster A4', category: 'Print', size: '2480×3508', color: 'from-zinc-800 to-zinc-600', premium: true },
  { id: 6, name: 'Twitter Header', category: 'Social Media', size: '1500×500', color: 'from-neutral-800 to-neutral-600', premium: false },
  { id: 7, name: 'Story Template', category: 'Social Media', size: '1080×1920', color: 'from-stone-800 to-stone-600', premium: true },
  { id: 8, name: 'Business Card', category: 'Print', size: '1050×600', color: 'from-zinc-900 to-zinc-700', premium: false },
];

export function DesignStudio() {
  const [selectedTemplate, setSelectedTemplate] = useState<number | null>(null);
  const [filter, setFilter] = useState('all');

  const categories = ['all', 'Social Media', 'Presentation', 'Print'];
  const filteredTemplates = filter === 'all' ? templates : templates.filter(t => t.category === filter);

  return (
    <div className="min-h-screen bg-black pt-24 pb-16 px-6 md:px-12 lg:px-16">
      <FadeIn delay={100} duration={600}>
        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">Tools</p>
          <h2 className="text-4xl md:text-5xl font-light text-white" style={{ letterSpacing: '-0.03em' }}>
            Design Studio
          </h2>
          <p className="text-gray-400 mt-3 text-base">Professional templates for every format.</p>
        </div>
      </FadeIn>

      {!selectedTemplate ? (
        <FadeIn delay={200} duration={700}>
          <div className="flex gap-3 mb-8 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  filter === cat
                    ? 'bg-white text-black'
                    : 'liquid-glass border border-white/10 text-gray-400 hover:text-white'
                }`}
              >
                {cat === 'all' ? 'All' : cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredTemplates.map((template, i) => (
              <FadeIn key={template.id} delay={200 + i * 60} duration={500}>
                <div
                  onClick={() => setSelectedTemplate(template.id)}
                  className="group cursor-pointer border border-white/10 rounded-xl overflow-hidden hover:border-white/30 transition-all duration-300"
                >
                  <div className={`bg-gradient-to-br ${template.color} h-44 flex items-center justify-center relative`}>
                    <div className="text-5xl opacity-20 group-hover:opacity-30 transition-opacity">▣</div>
                    {template.premium && (
                      <div className="absolute top-3 right-3 liquid-glass border border-white/20 text-white px-2 py-1 rounded-md text-xs font-medium flex items-center gap-1">
                        <Sparkles size={10} />
                        PRO
                      </div>
                    )}
                  </div>
                  <div className="p-4 bg-zinc-950">
                    <h3 className="font-medium text-white text-sm">{template.name}</h3>
                    <p className="text-xs text-gray-500 mt-1">{template.size}px</p>
                    <div className="mt-2 text-xs text-gray-600">{template.category}</div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </FadeIn>
      ) : (
        <FadeIn delay={0} duration={400}>
          <div className="border border-white/10 rounded-2xl overflow-hidden">
            <div className="border-b border-white/10 p-4 flex items-center justify-between bg-zinc-950">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setSelectedTemplate(null)}
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
                >
                  <ArrowLeft size={16} />
                  Back
                </button>
                <span className="text-white font-medium text-sm">
                  {templates.find(t => t.id === selectedTemplate)?.name}
                </span>
              </div>
              <div className="flex gap-2">
                <button className="p-2 text-gray-400 hover:text-white transition-colors border border-white/10 rounded-lg">
                  <Image size={18} />
                </button>
                <button className="p-2 text-gray-400 hover:text-white transition-colors border border-white/10 rounded-lg">
                  <Type size={18} />
                </button>
                <button className="p-2 text-gray-400 hover:text-white transition-colors border border-white/10 rounded-lg">
                  <Share2 size={18} />
                </button>
                <button className="px-4 py-2 bg-white text-black rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors flex items-center gap-2">
                  <Download size={16} />
                  Download
                </button>
              </div>
            </div>
            <div className="p-12 flex items-center justify-center min-h-[560px] bg-zinc-950">
              <div className={`bg-gradient-to-br ${templates.find(t => t.id === selectedTemplate)?.color} w-full max-w-2xl aspect-video rounded-xl border border-white/10 flex items-center justify-center`}>
                <div className="text-center text-white/60">
                  <div className="text-6xl mb-4 font-light">▣</div>
                  <p className="text-sm font-light tracking-wide">Your canvas awaits</p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      )}
    </div>
  );
}

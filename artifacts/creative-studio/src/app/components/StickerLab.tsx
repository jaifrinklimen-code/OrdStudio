import { useState } from 'react';
import { Sparkles, Download } from 'lucide-react';
import { FadeIn } from './FadeIn';

const categories = [
  { id: 'minimal', name: 'Minimal' },
  { id: 'abstract', name: 'Abstract' },
  { id: 'expressive', name: 'Expressive' },
];

const sampleStickers = [
  { id: 1, emoji: '◈', bg: 'from-zinc-800 to-zinc-700' },
  { id: 2, emoji: '✦', bg: 'from-stone-800 to-stone-700' },
  { id: 3, emoji: '◉', bg: 'from-neutral-800 to-neutral-700' },
  { id: 4, emoji: '◎', bg: 'from-zinc-900 to-zinc-700' },
  { id: 5, emoji: '⬡', bg: 'from-stone-900 to-stone-700' },
  { id: 6, emoji: '⬢', bg: 'from-neutral-900 to-neutral-700' },
];

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
    <div className="min-h-screen bg-black pt-24 pb-16 px-6 md:px-12 lg:px-16">
      <FadeIn delay={100} duration={600}>
        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">Tools</p>
          <h2 className="text-4xl md:text-5xl font-light text-white" style={{ letterSpacing: '-0.03em' }}>
            Sticker Lab
          </h2>
          <p className="text-gray-400 mt-3 text-base">AI-generated stickers, your style.</p>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <FadeIn delay={200} duration={600}>
          <div className="border border-white/10 rounded-xl p-5 bg-zinc-950 space-y-5 sticky top-24">
            <p className="text-xs uppercase tracking-widest text-gray-500">Create</p>

            <div>
              <label className="block text-xs text-gray-400 mb-1.5">Describe your sticker</label>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="e.g., Minimalist geometric mark with bold contrast"
                rows={4}
                className="w-full bg-black border border-white/10 text-white placeholder-gray-600 px-4 py-3 rounded-lg text-sm focus:outline-none focus:border-white/30 transition-colors resize-none"
              />
            </div>

            <div>
              <label className="block text-xs text-gray-400 mb-2">Style</label>
              <div className="flex gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`flex-1 py-2 rounded-lg text-xs font-medium transition-all duration-200 ${
                      selectedCategory === cat.id
                        ? 'bg-white text-black'
                        : 'border border-white/10 text-gray-400 hover:text-white'
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={handleGenerate}
              disabled={isGenerating || !prompt.trim()}
              className="w-full py-3 bg-white text-black rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors disabled:opacity-40 flex items-center justify-center gap-2"
            >
              {isGenerating ? (
                <><div className="w-3.5 h-3.5 border-2 border-black border-t-transparent rounded-full animate-spin" />Generating...</>
              ) : (
                <><Sparkles size={14} />Generate</>
              )}
            </button>

            <p className="text-xs text-gray-600">
              Be specific with your description for better results.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={300} duration={600} className="lg:col-span-2">
          <div className="border border-white/10 rounded-xl p-5 bg-zinc-950">
            <div className="flex items-center justify-between mb-5">
              <p className="text-xs uppercase tracking-widest text-gray-500">Gallery</p>
              <button className="text-xs text-gray-500 hover:text-white transition-colors">
                Download All
              </button>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {stickers.map((sticker, i) => (
                <FadeIn key={sticker.id} delay={300 + i * 80} duration={500}>
                  <div className={`aspect-square bg-gradient-to-br ${sticker.bg} rounded-xl flex items-center justify-center relative group cursor-pointer border border-white/5 hover:border-white/20 transition-all duration-300`}>
                    <span className="text-4xl text-white/40 group-hover:text-white/60 transition-colors font-light">
                      {sticker.emoji}
                    </span>
                    <button className="absolute bottom-2 right-2 p-1.5 liquid-glass rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                      <Download size={13} className="text-white" />
                    </button>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}

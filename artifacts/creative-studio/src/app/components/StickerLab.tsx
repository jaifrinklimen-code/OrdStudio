import { useState } from 'react';
import { Sparkles, Download, Smile, Briefcase, Heart } from 'lucide-react';

const categories = [
  { id: 'emoji', name: 'Emojis', icon: Smile },
  { id: 'business', name: 'Business', icon: Briefcase },
  { id: 'aesthetic', name: 'Aesthetic', icon: Heart },
];

const sampleStickers = [
  { id: 1, emoji: '😊', category: 'emoji' },
  { id: 2, emoji: '🚀', category: 'business' },
  { id: 3, emoji: '✨', category: 'aesthetic' },
  { id: 4, emoji: '💼', category: 'business' },
  { id: 5, emoji: '🎨', category: 'aesthetic' },
  { id: 6, emoji: '😎', category: 'emoji' },
];

export function StickerLab() {
  const [prompt, setPrompt] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('emoji');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedStickers] = useState(sampleStickers);

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <div className="flex-1 overflow-auto relative z-10">
      <div className="max-w-6xl mx-auto p-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Sticker Lab</h2>
          <p className="text-gray-600 mt-2">Create custom stickers with AI magic</p>
        </div>

        <div className="grid grid-cols-3 gap-6 mb-8">
          <div className="col-span-1">
            <div className="backdrop-blur-xl bg-white/70 rounded-2xl p-6 border border-gray-200/50 shadow-xl sticky top-8">
              <h3 className="font-bold text-gray-900 mb-4">Create Sticker</h3>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Describe your sticker
                </label>
                <textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="e.g., A cute cat wearing sunglasses"
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 backdrop-blur-lg bg-white/70 text-gray-900 placeholder-gray-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600 resize-none"
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                <div className="space-y-2">
                  {categories.map((cat) => {
                    const Icon = cat.icon;
                    return (
                      <button
                        key={cat.id}
                        onClick={() => setSelectedCategory(cat.id)}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                          selectedCategory === cat.id
                            ? 'bg-purple-50 border-2 border-purple-600 text-purple-700 shadow-lg'
                            : 'border-2 border-gray-200 hover:border-gray-300 text-gray-700 hover:bg-white/90'
                        }`}
                      >
                        <Icon size={20} />
                        <span className="font-medium">{cat.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <button
                onClick={handleGenerate}
                disabled={isGenerating}
                className="w-full px-4 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-medium hover:shadow-xl hover:scale-105 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {isGenerating ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Sparkles size={18} />
                    Generate Sticker
                  </>
                )}
              </button>

              <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-xl">
                <p className="text-sm text-blue-800">
                  Tip: Be specific with your description for best results!
                </p>
              </div>
            </div>
          </div>

          <div className="col-span-2">
            <div className="backdrop-blur-xl bg-white/70 rounded-2xl p-6 border border-gray-200/50 shadow-xl">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-gray-900">Your Stickers</h3>
                <button className="text-purple-600 hover:text-purple-700 font-medium">
                  Download All
                </button>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {generatedStickers.map((sticker) => (
                  <div
                    key={sticker.id}
                    className="aspect-square bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl flex items-center justify-center relative group hover:shadow-2xl hover:scale-105 transition-all cursor-pointer"
                  >
                    <div className="text-7xl">{sticker.emoji}</div>
                    <button className="absolute bottom-3 right-3 p-2 bg-white rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-gray-50">
                      <Download size={18} className="text-gray-700" />
                    </button>
                  </div>
                ))}
              </div>

              {generatedStickers.length === 0 && (
                <div className="text-center py-16 text-gray-400">
                  <div className="text-6xl mb-4">🎨</div>
                  <p>Your generated stickers will appear here</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

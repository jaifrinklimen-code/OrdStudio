import { useState } from 'react';
import { Download, Share2, Image, Type, Sparkles } from 'lucide-react';

const templates = [
  { id: 1, name: 'Instagram Post', category: 'Social Media', size: '1080x1080', color: 'bg-gradient-to-br from-purple-400 to-pink-400', premium: false },
  { id: 2, name: 'LinkedIn Banner', category: 'Social Media', size: '1584x396', color: 'bg-gradient-to-br from-blue-400 to-cyan-400', premium: true },
  { id: 3, name: 'Presentation Slide', category: 'Presentation', size: '1920x1080', color: 'bg-gradient-to-br from-orange-400 to-red-400', premium: false },
  { id: 4, name: 'YouTube Thumbnail', category: 'Social Media', size: '1280x720', color: 'bg-gradient-to-br from-green-400 to-emerald-400', premium: false },
  { id: 5, name: 'Poster A4', category: 'Print', size: '2480x3508', color: 'bg-gradient-to-br from-violet-400 to-purple-400', premium: true },
  { id: 6, name: 'Twitter Header', category: 'Social Media', size: '1500x500', color: 'bg-gradient-to-br from-sky-400 to-blue-400', premium: false },
  { id: 7, name: 'Story Template', category: 'Social Media', size: '1080x1920', color: 'bg-gradient-to-br from-pink-400 to-rose-400', premium: true },
  { id: 8, name: 'Business Card', category: 'Print', size: '1050x600', color: 'bg-gradient-to-br from-amber-400 to-yellow-400', premium: false },
];

export function DesignStudio() {
  const [selectedTemplate, setSelectedTemplate] = useState<number | null>(null);
  const [filter, setFilter] = useState('all');

  const categories = ['all', 'Social Media', 'Presentation', 'Print'];
  const filteredTemplates = filter === 'all'
    ? templates
    : templates.filter(t => t.category === filter);

  return (
    <div className="flex-1 overflow-auto relative z-10">
      <div className="max-w-7xl mx-auto p-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Design Studio</h2>
          <p className="text-gray-600 mt-2">Create stunning designs with our professional templates</p>
        </div>

        {!selectedTemplate ? (
          <>
            <div className="flex gap-3 mb-6">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-4 py-2 rounded-xl font-medium transition-all ${
                    filter === cat
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                      : 'backdrop-blur-lg bg-white/70 text-gray-700 border border-gray-200/50 hover:bg-white/90'
                  }`}
                >
                  {cat === 'all' ? 'All Templates' : cat}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-4 gap-6">
              {filteredTemplates.map((template) => (
                <div
                  key={template.id}
                  onClick={() => setSelectedTemplate(template.id)}
                  className="backdrop-blur-xl bg-white/70 rounded-2xl overflow-hidden border border-gray-200/50 shadow-xl hover:shadow-2xl hover:bg-white/90 transition-all cursor-pointer transform hover:-translate-y-2 hover:scale-105"
                >
                  <div className={`${template.color} h-48 flex items-center justify-center relative`}>
                    <div className="text-white text-6xl opacity-50">📄</div>
                    {template.premium && (
                      <div className="absolute top-2 right-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-2 py-1 rounded-lg text-xs font-bold flex items-center gap-1">
                        <Sparkles size={12} />
                        PRO
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-gray-900">{template.name}</h3>
                    <p className="text-sm text-gray-600 mt-1">{template.size}px</p>
                    <div className="mt-2 text-xs text-purple-600 font-medium">{template.category}</div>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="backdrop-blur-xl bg-white/70 rounded-2xl shadow-2xl border border-gray-200/50">
            <div className="border-b border-gray-200/50 p-4 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setSelectedTemplate(null)}
                  className="px-4 py-2 bg-white/70 backdrop-blur-lg text-gray-700 rounded-xl hover:bg-white/90 transition-colors border border-gray-200/50"
                >
                  ← Back to Templates
                </button>
                <h3 className="font-bold text-gray-900">
                  {templates.find(t => t.id === selectedTemplate)?.name}
                </h3>
              </div>
              <div className="flex gap-2">
                <button className="p-2 hover:bg-white/50 backdrop-blur-lg rounded-xl transition-colors text-gray-700 border border-gray-200/50" title="Add Image">
                  <Image size={20} />
                </button>
                <button className="p-2 hover:bg-white/50 backdrop-blur-lg rounded-xl transition-colors text-gray-700 border border-gray-200/50" title="Add Text">
                  <Type size={20} />
                </button>
                <button className="p-2 hover:bg-white/50 backdrop-blur-lg rounded-xl transition-colors text-gray-700 border border-gray-200/50" title="Share">
                  <Share2 size={20} />
                </button>
                <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl hover:shadow-xl hover:scale-105 transition-all flex items-center gap-2">
                  <Download size={18} />
                  Download
                </button>
              </div>
            </div>
            <div className="p-8 flex items-center justify-center min-h-[600px]">
              <div className={`${templates.find(t => t.id === selectedTemplate)?.color} w-full max-w-2xl aspect-square rounded-2xl shadow-2xl flex items-center justify-center`}>
                <div className="text-center text-white">
                  <div className="text-8xl mb-4">✨</div>
                  <h3 className="text-3xl font-bold mb-2 drop-shadow-lg">Your Design Here</h3>
                  <p className="text-lg opacity-90">Drag and drop elements to customize</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

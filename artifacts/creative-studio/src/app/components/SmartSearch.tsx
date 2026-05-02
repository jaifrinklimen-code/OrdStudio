import { useState } from 'react';
import { Search, ArrowRight } from 'lucide-react';
import { FadeIn } from './FadeIn';

const suggestions = [
  'Instagram post templates',
  'Business card design',
  'Essay on AI',
  'YouTube thumbnail',
  'Presentation slides',
  'Custom stickers',
];

const recentSearches = [
  'Social media templates',
  'AI content generator',
  'Poster design',
];

const searchResults = [
  { type: 'Template', name: 'Instagram Post — Modern', category: 'Design Studio' },
  { type: 'Feature', name: 'AI Content Generator', category: 'Tools' },
  { type: 'Template', name: 'LinkedIn Banner', category: 'Design Studio' },
  { type: 'Guide', name: 'Creating custom stickers', category: 'Help' },
  { type: 'Template', name: 'Presentation Slide', category: 'Design Studio' },
];

export function SmartSearch() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<typeof searchResults>([]);

  const handleSearch = (q: string) => {
    setQuery(q);
    setResults(q.trim() ? searchResults : []);
  };

  return (
    <div className="min-h-screen bg-black pt-24 pb-16 px-6 md:px-12 lg:px-16">
      <FadeIn delay={100} duration={600}>
        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">Tools</p>
          <h2 className="text-4xl md:text-5xl font-light text-white" style={{ letterSpacing: '-0.03em' }}>
            Smart Search
          </h2>
          <p className="text-gray-400 mt-3 text-base">Find anything, instantly.</p>
        </div>
      </FadeIn>

      <FadeIn delay={200} duration={600} className="max-w-2xl">
        <div className="relative mb-8">
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-600" size={18} />
          <input
            type="text"
            value={query}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Search templates, tools, or content..."
            className="w-full bg-zinc-900 border border-white/10 text-white placeholder-gray-600 pl-12 pr-5 py-4 rounded-xl text-base focus:outline-none focus:border-white/30 transition-colors"
          />
        </div>
      </FadeIn>

      {!results.length ? (
        <FadeIn delay={300} duration={600} className="max-w-2xl space-y-6">
          <div>
            <p className="text-xs uppercase tracking-widest text-gray-600 mb-3">Popular</p>
            <div className="flex flex-wrap gap-2">
              {suggestions.map((s) => (
                <button
                  key={s}
                  onClick={() => handleSearch(s)}
                  className="px-4 py-2 bg-zinc-900 border border-white/10 text-gray-400 hover:text-white rounded-lg text-sm transition-colors duration-200"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-gray-600 mb-3">Recent</p>
            <div className="space-y-1">
              {recentSearches.map((s) => (
                <button
                  key={s}
                  onClick={() => handleSearch(s)}
                  className="w-full text-left px-4 py-3 text-gray-400 hover:text-white rounded-xl transition-colors duration-200 flex items-center justify-between group"
                >
                  <span className="text-sm">{s}</span>
                  <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              ))}
            </div>
          </div>
        </FadeIn>
      ) : (
        <FadeIn delay={0} duration={300} className="max-w-2xl">
          <p className="text-xs text-gray-600 mb-4">{results.length} results for "{query}"</p>
          <div className="border border-white/10 rounded-xl overflow-hidden bg-zinc-950">
            {results.map((result, i) => (
              <div
                key={i}
                className="px-6 py-4 border-b border-white/10 last:border-0 hover:bg-white/5 transition-colors cursor-pointer flex items-center justify-between group"
              >
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-xs px-2 py-0.5 bg-white/10 text-gray-400 rounded-md">
                      {result.type}
                    </span>
                    <span className="text-sm text-white font-medium">{result.name}</span>
                  </div>
                  <p className="text-xs text-gray-600">{result.category}</p>
                </div>
                <ArrowRight size={14} className="text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </FadeIn>
      )}
    </div>
  );
}

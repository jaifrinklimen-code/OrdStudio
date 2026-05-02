import { useState } from 'react';
import { Search, TrendingUp, Clock } from 'lucide-react';

const suggestions = [
  'Instagram post templates',
  'Create business card',
  'Generate essay about AI',
  'YouTube thumbnail maker',
  'Presentation slides',
  'Custom stickers',
];

const recentSearches = [
  'Social media templates',
  'AI content generator',
  'Poster design',
];

const searchResults = [
  { type: 'Template', name: 'Instagram Post - Modern', category: 'Design Studio' },
  { type: 'Feature', name: 'AI Content Generator', category: 'Tools' },
  { type: 'Template', name: 'LinkedIn Banner', category: 'Design Studio' },
  { type: 'Guide', name: 'How to create stickers', category: 'Help' },
  { type: 'Template', name: 'Presentation Slide', category: 'Design Studio' },
];

export function SmartSearch() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<typeof searchResults>([]);

  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery);
    if (searchQuery.trim()) {
      setResults(searchResults);
    } else {
      setResults([]);
    }
  };

  return (
    <div className="flex-1 overflow-auto relative z-10">
      <div className="max-w-5xl mx-auto p-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Smart Search</h2>
          <p className="text-gray-600 mt-2">Find templates, features, and content instantly</p>
        </div>

        <div className="backdrop-blur-xl bg-white/70 rounded-2xl p-6 border border-gray-200/50 shadow-xl mb-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              value={query}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="Search for templates, features, or content..."
              className="w-full pl-12 pr-4 py-4 border-2 border-gray-300 backdrop-blur-lg bg-white/70 text-gray-900 placeholder-gray-500 rounded-xl focus:outline-none focus:border-purple-600 text-lg"
            />
          </div>
        </div>

        {!results.length ? (
          <div className="space-y-6">
            <div className="backdrop-blur-xl bg-white/70 rounded-2xl p-6 border border-gray-200/50 shadow-xl">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp size={20} className="text-purple-600" />
                <h3 className="font-bold text-gray-900">Popular Searches</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {suggestions.map((suggestion) => (
                  <button
                    key={suggestion}
                    onClick={() => handleSearch(suggestion)}
                    className="px-4 py-2 bg-purple-50 text-purple-700 rounded-xl hover:bg-purple-100 transition-all hover:scale-105"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>

            <div className="backdrop-blur-xl bg-white/70 rounded-2xl p-6 border border-gray-200/50 shadow-xl">
              <div className="flex items-center gap-2 mb-4">
                <Clock size={20} className="text-gray-600" />
                <h3 className="font-bold text-gray-900">Recent Searches</h3>
              </div>
              <div className="space-y-2">
                {recentSearches.map((search) => (
                  <button
                    key={search}
                    onClick={() => handleSearch(search)}
                    className="w-full text-left px-4 py-3 hover:bg-white/50 backdrop-blur-lg rounded-xl transition-all text-gray-700 border border-transparent hover:border-gray-200"
                  >
                    {search}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="backdrop-blur-xl bg-white/70 rounded-2xl border border-gray-200/50 shadow-xl">
            <div className="p-4 border-b border-gray-200/50">
              <p className="text-gray-600">Found {results.length} results for "{query}"</p>
            </div>
            <div className="divide-y divide-gray-200">
              {results.map((result, index) => (
                <div
                  key={index}
                  className="p-6 hover:bg-white/50 transition-colors cursor-pointer"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded-lg">
                          {result.type}
                        </span>
                        <h3 className="font-bold text-gray-900">{result.name}</h3>
                      </div>
                      <p className="text-sm text-gray-600">{result.category}</p>
                    </div>
                    <button className="text-purple-600 hover:text-purple-700 font-medium">
                      View →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

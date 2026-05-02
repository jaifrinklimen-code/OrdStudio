import { useState } from 'react';
import { Search, ArrowRight, Clock, TrendingUp } from 'lucide-react';
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
  { type: 'Template', name: 'Instagram Post — Modern',  category: 'Design Studio', color: 'rgba(124,58,237,0.15)',  dot: '#7c3aed' },
  { type: 'Feature',  name: 'AI Content Generator',     category: 'Tools',         color: 'rgba(79,70,229,0.15)',   dot: '#4f46e5' },
  { type: 'Template', name: 'LinkedIn Banner',           category: 'Design Studio', color: 'rgba(37,99,235,0.15)',   dot: '#2563eb' },
  { type: 'Guide',    name: 'Creating custom stickers',  category: 'Help',          color: 'rgba(16,185,129,0.15)', dot: '#10b981' },
  { type: 'Template', name: 'Presentation Slide',        category: 'Design Studio', color: 'rgba(124,58,237,0.15)', dot: '#7c3aed' },
];

export function SmartSearch() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<typeof searchResults>([]);

  const handleSearch = (q: string) => {
    setQuery(q);
    setResults(q.trim() ? searchResults : []);
  };

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #07071a 0%, #0d0a2e 40%, #080e24 100%)', paddingTop: '6rem', paddingBottom: '4rem', position: 'relative' }} className="px-6 md:px-12 lg:px-16">
      {/* Ambient glows */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden', zIndex: 0 }}>
        <div style={{ position: 'absolute', top: '10%', left: '50%', transform: 'translateX(-50%)', width: '60%', height: '50%', background: 'radial-gradient(ellipse, rgba(100,50,220,0.10) 0%, transparent 70%)', filter: 'blur(60px)' }} />
      </div>

      <div style={{ position: 'relative', zIndex: 1 }}>
        <FadeIn delay={100} duration={600}>
          <div className="mb-10">
            <p style={{ fontSize: '0.7rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(160,130,255,0.7)', marginBottom: '0.5rem' }}>Tools</p>
            <h2 style={{ fontSize: 'clamp(2rem,5vw,3rem)', fontWeight: 300, letterSpacing: '-0.03em', background: 'linear-gradient(135deg, #fff 30%, #c4a8ff 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Smart Search
            </h2>
            <p style={{ color: 'rgba(200,185,255,0.55)', marginTop: '0.75rem', fontSize: '0.95rem' }}>Find anything, instantly.</p>
          </div>
        </FadeIn>

        {/* Search input */}
        <FadeIn delay={200} duration={600} className="max-w-2xl">
          <div style={{ position: 'relative', marginBottom: '2rem' }}>
            <Search style={{ position: 'absolute', left: '1.1rem', top: '50%', transform: 'translateY(-50%)', color: 'rgba(160,130,255,0.5)' }} size={17} />
            <input
              type="text"
              value={query}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="Search templates, tools, or content..."
              style={{
                width: '100%',
                background: 'rgba(14, 11, 42, 0.9)',
                border: '1px solid rgba(120,80,255,0.25)',
                color: '#fff',
                paddingLeft: '2.8rem', paddingRight: '1.25rem', paddingTop: '0.875rem', paddingBottom: '0.875rem',
                borderRadius: '0.875rem',
                fontSize: '0.95rem',
                outline: 'none',
                fontFamily: 'inherit',
                backdropFilter: 'blur(8px)',
                boxShadow: query ? '0 0 30px rgba(120,60,255,0.15)' : 'none',
                transition: 'all 0.2s',
              }}
              className="focus:border-purple-400/50 placeholder:text-purple-300/20"
            />
          </div>
        </FadeIn>

        {!results.length ? (
          <FadeIn delay={300} duration={600} className="max-w-2xl space-y-8">
            {/* Popular */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.875rem' }}>
                <TrendingUp size={13} style={{ color: 'rgba(160,130,255,0.6)' }} />
                <p style={{ fontSize: '0.68rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(160,130,255,0.6)' }}>Popular</p>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {suggestions.map((s) => (
                  <button
                    key={s}
                    onClick={() => handleSearch(s)}
                    style={{
                      padding: '0.45rem 1rem',
                      background: 'rgba(14,11,42,0.8)',
                      border: '1px solid rgba(120,80,255,0.18)',
                      color: 'rgba(200,185,255,0.65)',
                      borderRadius: '2rem',
                      fontSize: '0.82rem',
                      cursor: 'pointer',
                      fontFamily: 'inherit',
                      transition: 'all 0.2s',
                    }}
                    className="hover:border-purple-400/40 hover:text-white"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Recent */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.875rem' }}>
                <Clock size={13} style={{ color: 'rgba(160,130,255,0.6)' }} />
                <p style={{ fontSize: '0.68rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(160,130,255,0.6)' }}>Recent</p>
              </div>
              <div style={{ background: 'rgba(14,11,42,0.7)', border: '1px solid rgba(120,80,255,0.15)', borderRadius: '0.875rem', overflow: 'hidden' }}>
                {recentSearches.map((s, i) => (
                  <button
                    key={s}
                    onClick={() => handleSearch(s)}
                    style={{
                      width: '100%', textAlign: 'left',
                      padding: '0.875rem 1.25rem',
                      borderBottom: i < recentSearches.length - 1 ? '1px solid rgba(120,80,255,0.1)' : 'none',
                      color: 'rgba(200,185,255,0.65)',
                      background: 'none', cursor: 'pointer', fontFamily: 'inherit',
                      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                      fontSize: '0.875rem', transition: 'all 0.2s',
                    }}
                    className="hover:bg-purple-500/5 hover:text-white group"
                  >
                    <span>{s}</span>
                    <ArrowRight size={13} style={{ opacity: 0, transition: 'opacity 0.2s' }} className="group-hover:opacity-100" />
                  </button>
                ))}
              </div>
            </div>
          </FadeIn>
        ) : (
          <FadeIn delay={0} duration={300} className="max-w-2xl">
            <p style={{ fontSize: '0.75rem', color: 'rgba(160,130,255,0.5)', marginBottom: '1rem' }}>{results.length} results for "{query}"</p>
            <div style={{ background: 'rgba(14,11,42,0.85)', border: '1px solid rgba(120,80,255,0.18)', borderRadius: '0.875rem', overflow: 'hidden', backdropFilter: 'blur(8px)' }}>
              {results.map((result, i) => (
                <div
                  key={i}
                  style={{
                    padding: '1rem 1.25rem',
                    borderBottom: i < results.length - 1 ? '1px solid rgba(120,80,255,0.1)' : 'none',
                    cursor: 'pointer',
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    transition: 'all 0.2s',
                  }}
                  className="hover:bg-purple-500/5 group"
                >
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', marginBottom: '0.25rem' }}>
                      <span style={{ fontSize: '0.7rem', padding: '0.15rem 0.5rem', background: result.color, color: result.dot, border: `1px solid ${result.dot}33`, borderRadius: '0.3rem', fontWeight: 500 }}>
                        {result.type}
                      </span>
                      <span style={{ fontSize: '0.875rem', color: '#fff', fontWeight: 500 }}>{result.name}</span>
                    </div>
                    <p style={{ fontSize: '0.72rem', color: 'rgba(160,130,255,0.45)' }}>{result.category}</p>
                  </div>
                  <ArrowRight size={13} style={{ color: 'rgba(160,130,255,0.5)', opacity: 0 }} className="group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
          </FadeIn>
        )}
      </div>
    </div>
  );
}

import { useState, useEffect, useRef } from 'react';
import { secureFetch } from '../../lib/secureFetch';
import {
  Search, ArrowRight, Clock, TrendingUp, Filter, Sparkles, Command,
  BookOpen, ToggleLeft, Heart, Zap, FileText, LayoutTemplate, Grid,
  Globe, ExternalLink, HelpCircle
} from 'lucide-react';
import { FadeIn } from './FadeIn';
import { loadAllCanonicalTemplates } from '../lib/templateRegistry';

const popular = [
  { text: 'Instagram post templates', cat: 'Social' },
  { text: 'Pitch deck presentation', cat: 'Design' },
  { text: 'AI generated articles', cat: 'Content' },
  { text: 'YouTube gaming thumbnail', cat: 'Social' },
  { text: 'Vector stickers & decals', cat: 'Sticker' },
];

const recent = [
  'OrdStudio branding presentation',
  'Marketing flyer guidelines',
  'cyberpunk sticker pack v1',
];

const results = [
  { id: 1, type: 'Template', name: 'Instagram Post — Neon Cyber', cat: 'Social', size: '1080×1080', gradient: 'linear-gradient(135deg, #f093fb, #f5576c)', rating: '4.9' },
  { id: 2, type: 'Feature', name: 'AI Copywriting Assistant', cat: 'Content', size: 'Smart Engine', icon: Sparkles, color: '#8b5cf6' },
  { id: 3, type: 'Template', name: 'Premium Pitch Deck Slide', cat: 'Design', size: '1920×1080', gradient: 'linear-gradient(135deg, #0ea5e9, #2563eb)', rating: '4.8' },
  { id: 4, type: 'Guide', name: 'Designing Custom Vector Stickers', cat: 'Help', size: 'Doc', icon: BookOpen, color: '#10b981' },
  { id: 5, type: 'Template', name: 'Product Showcase Banner', cat: 'Marketing', size: '1200×630', gradient: 'linear-gradient(135deg, #a855f7, #ec4899)', rating: '4.7' },
  { id: 6, type: 'Feature', name: 'Sticker Studio Creator', cat: 'Stickers', size: 'Vector Engine', icon: ToggleLeft, color: '#f59e0b' },
];

export function SmartSearch({ onNavigate, onOpenTemplate, query: queryProp, setQuery: setQueryProp }: {
  onNavigate?: (tab: string) => void;
  onOpenTemplate?: (design: any) => void;
  query?: string;
  setQuery?: (q: string) => void;
}) {
  const [localQuery, setLocalQuery] = useState('');
  const query = queryProp !== undefined ? queryProp : localQuery;
  const setQuery = setQueryProp !== undefined ? setQueryProp : setLocalQuery;

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [searchFilter, setSearchFilter] = useState('All');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Focus input on Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Debounced backend search
  useEffect(() => {
    const trimmedQuery = query.trim();
    if (!trimmedQuery) {
      setSearchResults([]);
      setLoading(false);
      setError(null);
      return;
    }

    setLoading(true);
    setError(null);

    const delayDebounce = setTimeout(() => {
      secureFetch(`/api/search?q=${encodeURIComponent(trimmedQuery)}&filter=${encodeURIComponent(searchFilter)}`)
        .then((r) => {
          if (!r.ok) throw new Error("Search request failed");
          return r.json();
        })
        .then((data) => {
          // Map features and guides icon components based on static references
          const processed = data.map((item: any) => {
            if (item.type === 'Feature') {
              let iconComp = Sparkles;
              if (item.name.includes("Sticker")) iconComp = ToggleLeft;
              if (item.name.includes("Photo")) iconComp = Grid;
              return { ...item, icon: iconComp };
            }
            if (item.type === 'Guide') {
              return { ...item, icon: BookOpen };
            }
            return item;
          });
          setSearchResults(processed);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Search failed:", err);
          setError(err.message || "Failed to retrieve search results.");
          setLoading(false);
        });
    }, 300);

    return () => clearTimeout(delayDebounce);
  }, [query, searchFilter]);

  const getRelatedSuggestions = (q: string) => {
    const qLower = q.toLowerCase();
    const suggestions = [];
    
    if (qLower.includes('invite') || qLower.includes('wedding') || qLower.includes('party') || qLower.includes('rsvp') || qLower.includes('card') || qLower.includes('event')) {
      suggestions.push({ text: 'Aarthi & Rohit Wedding Card', type: 'Template' });
      suggestions.push({ text: 'Birthday Card', type: 'Template' });
      suggestions.push({ text: 'Party Invite', type: 'Template' });
      suggestions.push({ text: 'RSVP Card', type: 'Template' });
    }
    if (qLower.includes('resume') || qLower.includes('cv') || qLower.includes('job') || qLower.includes('hire') || qLower.includes('portfolio') || qLower.includes('work')) {
      suggestions.push({ text: 'Modern Resume', type: 'Template' });
      suggestions.push({ text: 'Creative Portfolio', type: 'Template' });
      suggestions.push({ text: 'Professional Resume', type: 'Template' });
    }
    if (qLower.includes('slide') || qLower.includes('pitch') || qLower.includes('deck') || qLower.includes('present') || qLower.includes('webinar')) {
      suggestions.push({ text: 'Pitch Deck', type: 'Template' });
      suggestions.push({ text: 'Keynote Deck', type: 'Template' });
      suggestions.push({ text: 'Data Dashboard', type: 'Template' });
    }
    if (qLower.includes('instagram') || qLower.includes('social') || qLower.includes('post') || qLower.includes('facebook') || qLower.includes('linkedin') || qLower.includes('youtube') || qLower.includes('banner')) {
      suggestions.push({ text: 'Instagram Reel Cover', type: 'Template' });
      suggestions.push({ text: 'Facebook Post', type: 'Template' });
      suggestions.push({ text: 'LinkedIn Banner', type: 'Template' });
      suggestions.push({ text: 'YouTube Thumbnail', type: 'Template' });
    }
    if (qLower.includes('sticker') || qLower.includes('vector') || qLower.includes('decal') || qLower.includes('logo') || qLower.includes('cyberpunk')) {
      suggestions.push({ text: 'Sticker Studio Creator', type: 'Feature' });
      suggestions.push({ text: 'Designing Custom Vector Stickers', type: 'Guide' });
      suggestions.push({ text: 'Cyberpunk Skull', type: 'Sticker' });
      suggestions.push({ text: 'Vector Diamond', type: 'Sticker' });
    }

    if (suggestions.length === 0) {
      suggestions.push({ text: 'Instagram Reel Cover', type: 'Template' });
      suggestions.push({ text: 'Pitch Deck', type: 'Template' });
      suggestions.push({ text: 'Modern Resume', type: 'Template' });
      suggestions.push({ text: 'Sticker Studio Creator', type: 'Feature' });
    }

    return suggestions.slice(0, 4);
  };

  const hits = query.trim() ? searchResults : [];

  const handleResultClick = async (item: any) => {
    if (item.type === 'Template') {
      const match = item.id.match(/template-(\d+)/);
      if (match) {
        const templateId = parseInt(match[1]);
        const allT = await loadAllCanonicalTemplates();
        const fullT = allT.find((t: any) => t.id === templateId) as any;
        if (fullT && onOpenTemplate) {
          const cloneId = 'design_' + Date.now();
          onOpenTemplate({
            id: cloneId,
            originalTemplateId: fullT.id,
            sourceTemplateId: fullT.id,
            name: fullT.name ? (fullT.name.startsWith('My ') ? `${fullT.name} (Copy)` : `My ${fullT.name}`) : 'Untitled Design',
            category: fullT.category || 'Presentation',
            type: fullT.category || 'Presentation',
            size: fullT.size || `${fullT.canvasWidth || 1920}×${fullT.canvasHeight || 1080}`,
            canvasWidth: fullT.canvasWidth || (fullT.category === 'Presentation' ? 1920 : 1200),
            canvasHeight: fullT.canvasHeight || (fullT.category === 'Presentation' ? 1080 : 1697),
            gradient: fullT.gradient || '#0b131e',
            elements: JSON.parse(JSON.stringify(fullT.elements || [])),
            slides: JSON.parse(JSON.stringify(fullT.slides || [])),
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            isSavedProject: false
          });
        }
      }
    }
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Page Title */}
      <FadeIn delay={60} duration={500}>
        <div style={{ marginBottom: '1.5rem' }}>
          <p className="text-[10px] uppercase tracking-wider text-purple-400 font-semibold mb-1">Command Hub</p>
          <h2 className="text-2xl font-bold tracking-tight text-white mb-1">Smart Search</h2>
          <p className="text-xs text-white/40">Query across templates, modules, guidelines, and creators.</p>
        </div>
      </FadeIn>

      {/* Main Search Panel */}
      <FadeIn delay={120} duration={500}>
        <div className="glass p-6 flex flex-col gap-5">
          {/* Search bar input */}
          <div className="relative">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 pointer-events-none" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder={isMobile ? "Search templates, guides..." : "Search templates, modules, help guides... (Press Ctrl + K)"}
              className="w-full bg-white/[0.04] border border-white/[0.08] hover:border-white/[0.12] focus:border-purple-500/50 rounded-xl py-3.5 pl-12 pr-20 text-sm text-white focus:outline-none transition-all focus:shadow-[0_0_16px_rgba(139,92,246,0.1)]"
            />
            {query ? (
              <button
                onClick={() => {
                  setQuery('');
                  inputRef.current?.focus();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-white/50 hover:text-white transition-all bg-white/[0.06] border border-white/[0.08] hover:bg-white/[0.1] px-2.5 py-1 rounded cursor-pointer font-medium"
              >
                Cancel
              </button>
            ) : (
              <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-1 bg-white/[0.06] border border-white/[0.08] px-2 py-1 rounded text-[10px] text-white/45">
                <Command size={10} />
                <span>K</span>
              </div>
            )}
          </div>

          {/* Search Content */}
          {!query.trim() ? (
            <div className="py-16 text-center flex flex-col items-center justify-center gap-3">
              <div className="text-3xl text-white/30 animate-pulse">⌨️</div>
              <span className="text-xs font-semibold text-white/40">Start typing to search</span>
              <span className="text-[10px] text-white/25 max-w-[280px]">Find design templates, stickers, guides, and creator projects inside the website.</span>
            </div>
          ) : (
            <div className="flex flex-col gap-3 pt-2">
              {loading ? (
                <div className="py-12 flex flex-col items-center justify-center gap-3">
                  <div className="w-8 h-8 border-2 border-purple-500/20 border-t-purple-500 rounded-full animate-spin" />
                  <span className="text-[11px] text-white/40">Querying database...</span>
                </div>
              ) : error ? (
                <div className="py-12 text-center flex flex-col items-center justify-center gap-2">
                  <div className="text-rose-400 text-sm font-semibold">Search Failed</div>
                  <span className="text-[10px] text-white/35 max-w-[240px]">{error}</span>
                </div>
              ) : hits.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {hits.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => handleResultClick(item)}
                      className={`group flex items-center justify-between p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05] transition-all duration-300 ${
                        item.type === 'Template'
                          ? 'cursor-pointer hover:border-purple-500/35 hover:bg-purple-500/[0.03] active:scale-[0.98]'
                          : 'cursor-default'
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        {/* Visual Thumbnail */}
                        {item.type === 'Template' || item.type === 'Project' || item.type === 'Sticker' ? (
                          <div className="w-12 h-10 rounded-lg flex-shrink-0 flex items-center justify-center relative text-white" style={{ background: item.gradient }}>
                            {item.symbol && <span className="text-sm">{item.symbol}</span>}
                          </div>
                        ) : (
                          <div
                            className="w-12 h-10 rounded-lg flex-shrink-0 flex items-center justify-center"
                            style={{ background: `${item.color}15`, color: item.color }}
                          >
                            {item.icon && <item.icon size={16} />}
                          </div>
                        )}

                        <div className="min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="text-[9px] bg-purple-500/10 border border-purple-500/20 text-purple-300 px-1.5 py-0.5 rounded font-semibold">
                              {item.type}
                            </span>
                            <span className="text-xs font-semibold text-white truncate block">{item.name}</span>
                          </div>
                          <div className="flex gap-2 text-[10px] text-white/35 mt-1">
                            <span>{item.cat}</span>
                            <span>·</span>
                            <span>{item.size}</span>
                          </div>
                        </div>
                      </div>

                      {/* Hover action arrow */}
                      <button className="opacity-0 group-hover:opacity-100 p-2 bg-purple-500 text-white rounded-lg transition-all hover:scale-105 duration-200 cursor-pointer">
                        <ArrowRight size={12} />
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="py-12 text-center flex flex-col items-center justify-center gap-4 max-w-md mx-auto">
                  <div className="text-3xl animate-bounce">🔍</div>
                  <h4 className="text-sm font-semibold text-white">Not found inside the website</h4>
                  <p className="text-xs text-white/40 leading-relaxed">
                    We couldn't find "<strong className="text-purple-300">{query}</strong>" in our local template library. You can try finding or creating it on these design resources:
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-3 w-full mt-2 justify-center">
                    <a
                      href={`https://www.google.com/search?q=${encodeURIComponent(query + ' design template')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-4 py-2.5 bg-white/[0.03] border border-white/[0.06] hover:border-purple-500/30 hover:bg-purple-500/5 rounded-xl text-xs text-white/70 hover:text-white transition-all font-semibold"
                    >
                      Search Google <ExternalLink size={12} className="text-white/40" />
                    </a>
                    <a
                      href={`https://unsplash.com/s/photos/${encodeURIComponent(query)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-4 py-2.5 bg-white/[0.03] border border-white/[0.06] hover:border-purple-500/30 hover:bg-purple-500/5 rounded-xl text-xs text-white/70 hover:text-white transition-all font-semibold"
                    >
                      Search Unsplash <ExternalLink size={12} className="text-white/40" />
                    </a>
                    <a
                      href={`https://fonts.google.com/?query=${encodeURIComponent(query)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-4 py-2.5 bg-white/[0.03] border border-white/[0.06] hover:border-purple-500/30 hover:bg-purple-500/5 rounded-xl text-xs text-white/70 hover:text-white transition-all font-semibold"
                    >
                      Search Fonts <ExternalLink size={12} className="text-white/40" />
                    </a>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </FadeIn>
    </div>
  );
}

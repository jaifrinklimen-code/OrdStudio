import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Search, ArrowRight, Heart, Sparkles, Plus, ChevronLeft, ChevronRight,
  Eye, FileText, Presentation, FileCheck, Mail, Megaphone,
  BarChart3, Globe, Folder, Play, Check, Crown, Flame,
  Layers, Compass, ExternalLink, Clock, User
} from "lucide-react";
import { TemplateMiniRenderer } from "./TemplateMiniRenderer";
import { TemplatePreviewModal } from "./TemplatePreviewModal";
import { supabase } from "../../lib/supabase";
import {
  normalizeCanonicalTemplate,
  curateDiverseRail,
  CanonicalTemplate,
  loadAllCanonicalTemplates
} from "../lib/templateRegistry";
import { fetchCachedTemplates, fetchCachedProjects } from "../lib/templateApiClient";
import { normalizeCanonicalDesign } from "../lib/coordinateNormalizer";

interface DashboardProps {
  onNavigate: (tab: string) => void;
  onOpenTemplate?: (design: any) => void;
}

// Dynamically resolve authenticated display name or email username with Creator fallback
const getResolvedDisplayName = (user: any): string => {
  if (user) {
    const meta = user.user_metadata || {};
    const fullName = meta.full_name || meta.name || meta.display_name || meta.user_name;
    if (typeof fullName === 'string' && fullName.trim() && fullName.trim() !== 'User' && fullName.trim() !== 'ORD Creator') {
      return fullName.trim();
    }
    if (typeof user.email === 'string' && user.email.includes('@')) {
      const emailPrefix = user.email.split('@')[0].trim();
      if (emailPrefix && emailPrefix.toLowerCase() !== 'creator') {
        return emailPrefix.charAt(0).toUpperCase() + emailPrefix.slice(1);
      }
    }
  }

  const storedName = localStorage.getItem('ord_name');
  if (storedName && storedName.trim() && storedName.trim() !== 'User' && storedName.trim() !== 'ORD Creator') {
    return storedName.trim();
  }

  const storedEmail = localStorage.getItem('ord_email');
  if (storedEmail && storedEmail.includes('@')) {
    const emailPrefix = storedEmail.split('@')[0].trim();
    if (emailPrefix && emailPrefix.toLowerCase() !== 'creator') {
      return emailPrefix.charAt(0).toUpperCase() + emailPrefix.slice(1);
    }
  }

  return 'Creator';
};

// Quick design categories with canonical dimensions and curated icons
const CATEGORY_SHORTCUTS = [
  { id: 'Presentation', label: 'Presentation', icon: Presentation, dims: '1920×1080', desc: '16:9 widescreen slides', color: '#6366f1', count: '10 slides' },
  { id: 'Resume', label: 'Resume', icon: FileCheck, dims: '1200×1697', desc: 'A4 high-res document', color: '#10b981', count: 'A4 format' },
  { id: 'Posters', label: 'Poster', icon: Megaphone, dims: '1080×1528', desc: 'Portrait visual design', color: '#f43f5e', count: 'High-res' },
  { id: 'Flyers', label: 'Flyer', icon: FileText, dims: '1200×1697', desc: 'Marketing & Event flyer', color: '#06b6d4', count: 'Full-bleed' },
  { id: 'Invitation', label: 'Invitation', icon: Mail, dims: '1400×2000', desc: 'Wedding & Event card', color: '#f59e0b', count: 'Card format' },
  { id: 'Reports', label: 'Report', icon: BarChart3, dims: '1200×1697', desc: 'Executive business report', color: '#3b82f6', count: 'Multi-page' },
  { id: 'Social', label: 'Social Post', icon: Globe, dims: '1080×1080', desc: 'Square & Story format', color: '#ec4899', count: 'Feed ready' },
  { id: 'Business', label: 'Proposal', icon: Folder, dims: '1200×1697', desc: 'Strategic corporate deck', color: '#8b5cf6', count: 'Corporate' }
];

export function Dashboard({ onNavigate, onOpenTemplate }: DashboardProps) {
  const [userName, setUserName] = useState<string>(() => getResolvedDisplayName(null));
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string>("All");
  const [favorites, setFavorites] = useState<Set<string | number>>(() => {
    try {
      const stored = localStorage.getItem('ord_template_favorites');
      return stored ? new Set(JSON.parse(stored)) : new Set<string | number>();
    } catch {
      return new Set<string | number>();
    }
  });
  const [previewTemplate, setPreviewTemplate] = useState<any | null>(null);
  const [savedProjects, setSavedProjects] = useState<any[]>([]);
  const [apiTemplates, setApiTemplates] = useState<any[]>([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Carousel refs for smooth scroll control
  const forYouRef = useRef<HTMLDivElement>(null);
  const inspiredRef = useRef<HTMLDivElement>(null);
  const trendingRef = useRef<HTMLDivElement>(null);
  const discoverRef = useRef<HTMLDivElement>(null);
  const recentsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Listen to authenticated user state changes dynamically
  useEffect(() => {
    let mounted = true;

    const loadUserDataAndProjects = (user: any) => {
      setUserName(getResolvedDisplayName(user));
      if (!user) {
        setSavedProjects([]);
        return;
      }
      try {
        const storageKey = `ds_recent_projects_${user.id}`;
        const stored = localStorage.getItem(storageKey);
        if (stored) {
          const parsed = JSON.parse(stored);
          if (Array.isArray(parsed)) {
            let hasMigration = false;
            const valid = parsed
              .filter((p: any) => p && p.name !== 'Brand Kit v2' && p.name !== 'Product Launch' && p.name !== 'Q4 Presentation')
              .map((p: any) => {
                const norm = normalizeCanonicalDesign(p);
                if (norm.needsScale) {
                  hasMigration = true;
                  return {
                    ...p,
                    canvasWidth: norm.canvasWidth,
                    canvasHeight: norm.canvasHeight,
                    size: `${norm.canvasWidth}×${norm.canvasHeight}`,
                    elements: norm.elements,
                    slides: norm.slides,
                    category: p.category || (norm.isLandscape ? 'Presentation' : 'Document'),
                    type: p.type || (norm.isLandscape ? 'Presentation' : 'Document')
                  };
                }
                return p;
              })
              .sort((a: any, b: any) => new Date(b.updatedAt || 0).getTime() - new Date(a.updatedAt || 0).getTime());

            if (hasMigration) {
              try {
                localStorage.setItem(storageKey, JSON.stringify(valid));
              } catch (e) {}
            }

            setSavedProjects(valid);
            return;
          }
        }
      } catch {}
      setSavedProjects([]);
    };

    // Check active Supabase session
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!mounted) return;
      loadUserDataAndProjects(session?.user || null);
    }).catch(() => {});

    // Listen for auth state changes (login, logout, switch user)
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!mounted) return;
      loadUserDataAndProjects(session?.user || null);
    });

    // Listen for profile changes from settings or other tabs
    const handleProfileUpdate = () => {
      if (!mounted) return;
      supabase.auth.getUser().then(({ data: { user } }) => {
        if (!mounted) return;
        loadUserDataAndProjects(user);
      }).catch(() => {
        if (!mounted) return;
        loadUserDataAndProjects(null);
      });
    };

    window.addEventListener('storage', handleProfileUpdate);
    window.addEventListener('ord_user_updated', handleProfileUpdate);
    window.addEventListener('ds_projects_updated', handleProfileUpdate);

    return () => {
      mounted = false;
      subscription?.unsubscribe();
      window.removeEventListener('storage', handleProfileUpdate);
      window.removeEventListener('ord_user_updated', handleProfileUpdate);
      window.removeEventListener('ds_projects_updated', handleProfileUpdate);
    };
  }, []);

  const [canonicalTemplates, setCanonicalTemplates] = useState<CanonicalTemplate[]>([]);

  // Fetch templates & saved projects with caching
  useEffect(() => {
    let mounted = true;

    loadAllCanonicalTemplates().then(templates => {
      if (mounted && Array.isArray(templates) && templates.length > 0) {
        setCanonicalTemplates(templates);
      }
    }).catch(() => {});

    fetchCachedTemplates()
      .then(data => {
        if (mounted && Array.isArray(data) && data.length > 0) {
          setApiTemplates(data);
        }
      })
      .catch(() => {});

    // Refresh saved projects from API if user is authenticated
    supabase.auth.getSession().then(({ data: { session } }) => {
      const user = session?.user;
      if (!mounted || !user) return;
      fetchCachedProjects(user.id)
        .then(userProjects => {
          if (mounted && Array.isArray(userProjects) && userProjects.length > 0) {
            setSavedProjects(prev => {
              const normalizedBack = userProjects.map(p => {
                const norm = normalizeCanonicalDesign({
                  ...p,
                  slides: p.slides || p.pages || (p.elements ? [p.elements] : []),
                  elements: p.elements || (Array.isArray(p.slides?.[0]) ? p.slides[0] : (p.pages?.[0] || [])),
                  canvasWidth: p.canvasWidth || p.dimensions?.width,
                  canvasHeight: p.canvasHeight || p.dimensions?.height,
                  size: p.size
                });
                return {
                  ...p,
                  slides: norm.slides,
                  elements: norm.elements,
                  canvasWidth: norm.canvasWidth,
                  canvasHeight: norm.canvasHeight,
                  size: `${norm.canvasWidth}×${norm.canvasHeight}`,
                  category: p.category || (norm.isLandscape ? 'Presentation' : 'Document'),
                  type: p.type || (norm.isLandscape ? 'Presentation' : 'Document'),
                  thumbnailUrl: p.thumbnailUrl || p.thumbnail,
                  updatedAt: p.updatedAt || new Date().toISOString(),
                  isSavedProject: true
                };
              });

              const map = new Map<string, any>();
              for (const item of [...prev, ...normalizedBack]) {
                const key = String(item.id || item.name);
                if (!map.has(key)) {
                  map.set(key, item);
                } else {
                  const existing = map.get(key);
                  const itemTime = new Date(item.updatedAt || 0).getTime();
                  const existingTime = new Date(existing.updatedAt || 0).getTime();
                  if (itemTime >= existingTime) {
                    map.set(key, item);
                  }
                }
              }
              const mergedList = Array.from(map.values())
                .filter((p: any) => p && p.name !== 'Brand Kit v2' && p.name !== 'Product Launch' && p.name !== 'Q4 Presentation')
                .sort((a: any, b: any) => new Date(b.updatedAt || 0).getTime() - new Date(a.updatedAt || 0).getTime())
                .slice(0, 10);

              try {
                const storageKey = `ds_recent_projects_${user.id}`;
                localStorage.setItem(storageKey, JSON.stringify(mergedList));
              } catch {}

              return mergedList;
            });
          }
        })
        .catch(() => {});
    });

    return () => { mounted = false; };
  }, []);

  // All combined templates normalized through Canonical Single Source of Truth
  const allTemplates = useMemo(() => {
    const combined = apiTemplates.length > 0
      ? [...apiTemplates, ...canonicalTemplates]
      : canonicalTemplates;
    const seen = new Set();
    const result: CanonicalTemplate[] = [];
    for (const raw of combined) {
      if (!raw) continue;
      const idKey = raw.id || raw.name;
      if (seen.has(idKey)) continue;
      seen.add(idKey);
      try {
        result.push(normalizeCanonicalTemplate(raw));
      } catch {}
    }
    return result;
  }, [apiTemplates, canonicalTemplates]);

  // Toggle favorite
  const toggleFavorite = (id: string | number) => {
    setFavorites(prev => {
      const next = new Set(prev);
      const numId = Number(id) || id as any;
      if (next.has(numId)) next.delete(numId);
      else next.add(numId);
      try {
        localStorage.setItem('ord_template_favorites', JSON.stringify(Array.from(next)));
      } catch {}
      return next;
    });
  };

  // Launch template into editor - creates an independent copy
  const handleLaunchTemplate = (t: any) => {
    if (!t) return;
    const canonical = normalizeCanonicalTemplate(t);
    const cloneId = 'design_' + Date.now();

    const designPayload = {
      ...canonical,
      id: cloneId,
      originalTemplateId: canonical.id,
      sourceTemplateId: canonical.id,
      name: canonical.name ? (canonical.name.startsWith('My ') ? `${canonical.name} (Copy)` : `My ${canonical.name}`) : 'Untitled Design',
      category: canonical.category || 'Presentation',
      type: canonical.category || 'Presentation',
      size: canonical.size || `${canonical.canvasWidth}×${canonical.canvasHeight}`,
      canvasWidth: canonical.canvasWidth,
      canvasHeight: canonical.canvasHeight,
      gradient: canonical.gradient,
      // SINGLE SOURCE OF TRUTH: deep clone elements and slides
      elements: JSON.parse(JSON.stringify(canonical.elements)),
      slides: JSON.parse(JSON.stringify(canonical.slides)),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      isSavedProject: false
    };

    setSavedProjects(prev => {
      const next = [designPayload, ...prev.filter(p => String(p.id) !== String(cloneId))].slice(0, 10);
      try {
        localStorage.setItem('ds_recent_projects', JSON.stringify(next));
        window.dispatchEvent(new Event('ds_projects_updated'));
      } catch {}
      return next;
    });

    if (onOpenTemplate) {
      onOpenTemplate(designPayload);
    } else {
      onNavigate('design');
    }
  };

  // Open saved design - 100% fidelity from user's saved data with canonical coordinates
  const handleOpenSavedProject = (proj: any) => {
    if (onOpenTemplate) {
      const projSlides = Array.isArray(proj.slides) && proj.slides.length > 0
        ? JSON.parse(JSON.stringify(proj.slides))
        : (Array.isArray(proj.pages) && proj.pages.length > 0 ? JSON.parse(JSON.stringify(proj.pages)) : (Array.isArray(proj.elements) ? [JSON.parse(JSON.stringify(proj.elements))] : []));
      const projElements = Array.isArray(proj.elements) && proj.elements.length > 0
        ? JSON.parse(JSON.stringify(proj.elements))
        : (projSlides[0] ? JSON.parse(JSON.stringify(projSlides[0])) : []);

      const norm = normalizeCanonicalDesign({
        ...proj,
        elements: projElements,
        slides: projSlides,
        canvasWidth: proj.canvasWidth,
        canvasHeight: proj.canvasHeight,
        size: proj.size
      });

      onOpenTemplate({
        id: proj.id,
        originalTemplateId: proj.originalTemplateId || proj.templateId || proj.sourceTemplateId,
        sourceTemplateId: proj.sourceTemplateId || proj.originalTemplateId || proj.templateId,
        name: proj.name || 'My Design',
        category: proj.type || proj.category || (norm.isLandscape ? 'Presentation' : 'Document'),
        type: proj.type || proj.category || (norm.isLandscape ? 'Presentation' : 'Document'),
        gradient: proj.gradient || '#0b131e',
        size: `${norm.canvasWidth}×${norm.canvasHeight}`,
        canvasWidth: norm.canvasWidth,
        canvasHeight: norm.canvasHeight,
        elements: norm.elements,
        slides: norm.slides,
        thumbnailUrl: proj.thumbnailUrl,
        createdAt: proj.createdAt || proj.updatedAt,
        updatedAt: proj.updatedAt || new Date().toISOString(),
        isSavedProject: true
      });
    } else {
      onNavigate('design');
    }
  };

  // Carousel scroll helpers
  const scrollCarousel = (ref: React.RefObject<HTMLDivElement | null>, direction: 'left' | 'right') => {
    if (!ref.current) return;
    const distance = ref.current.clientWidth * 0.75;
    ref.current.scrollBy({
      left: direction === 'left' ? -distance : distance,
      behavior: 'smooth'
    });
  };

  // Curated template collections with Diversity & Quality Filtering
  // 1. Templates for You (diverse mix of real templates across categories)
  const templatesForYou = useMemo(() => {
    const list = allTemplates.filter(t => t.name && (t.elements?.length || t.slides?.length));
    return curateDiverseRail(list, 10);
  }, [allTemplates]);

  // 2. Inspired by Your Designs (personalized or recommended editorial layouts)
  const inspiredTemplates = useMemo(() => {
    const recentCategories = new Set(savedProjects.map(p => p.type || p.category).filter(Boolean));
    let matches: CanonicalTemplate[] = [];
    if (recentCategories.size > 0) {
      matches = allTemplates.filter(t => recentCategories.has(t.category));
    }
    if (matches.length < 6) {
      matches = allTemplates.filter(t => t.category === 'Presentation' || t.category === 'Business' || t.category === 'Reports');
    }
    return curateDiverseRail(matches.length > 0 ? matches : allTemplates, 10);
  }, [allTemplates, savedProjects]);

  // 3. Trending Templates (high likes / views)
  const trendingTemplates = useMemo(() => {
    const sorted = [...allTemplates].sort((a, b) => ((b.likes || 0) + (b.views || 0)) - ((a.likes || 0) + (a.views || 0)));
    return curateDiverseRail(sorted, 10);
  }, [allTemplates]);

  // 4. Discover ORD Studio (Curated editorial masterpieces)
  const discoverTemplates = useMemo(() => {
    const editorial = allTemplates.filter(t =>
      t.premium ||
      (t.tags && t.tags.some(tag => ['Editorial', 'Keynote', 'Luxury', 'Executive', 'Featured', 'Portfolio'].includes(tag)))
    );
    return curateDiverseRail(editorial.length >= 6 ? editorial : allTemplates, 10);
  }, [allTemplates]);

  // Filtered search view if user is searching in the hero bar
  const searchedTemplates = useMemo(() => {
    if (!searchQuery.trim()) return null;
    const q = searchQuery.toLowerCase().trim();
    return allTemplates.filter(t => {
      const matchText = `${t.name || ''} ${t.title || ''} ${t.category || ''} ${t.subcategory || ''} ${(t.tags || []).join(' ')}`.toLowerCase();
      return matchText.includes(q);
    });
  }, [searchQuery, allTemplates]);

  return (
    <div className="flex flex-col gap-8 pb-16 w-full max-w-[1720px] mx-auto text-white">

      {/* ================================================== */}
      {/* 1. HERO / TOP DISCOVERY AREA                       */}
      {/* ================================================== */}
      <div className="relative w-full overflow-hidden rounded-2xl bg-gradient-to-b from-[#18152e]/70 via-[#110f1e]/40 to-transparent pt-5 pb-2 px-4 sm:pt-7 sm:pb-3 sm:px-8">
        {/* Ambient atmospheric glows */}
        <div className="absolute -top-24 -left-20 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-10 right-0 w-[500px] h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/25 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-3 shadow-[0_0_15px_rgba(168,85,247,0.15)]">
            <Sparkles size={13} className="text-purple-400 animate-pulse" />
            ORD Studio Creative Discovery
          </div>

          {/* Large Hero Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-2 font-sans leading-tight">
            What will you <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">design today</span>, {userName}?
          </h1>
          <p className="text-xs sm:text-sm text-white/55 max-w-2xl mb-5 leading-relaxed">
            Discover thousands of high-density, professional editorial templates. Real multi-page decks, A4 documents, posters, and invitations rendered with 100% fidelity.
          </p>

          {/* Prominent Search Bar */}
          <div className="w-full max-w-2xl relative mb-5 group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 rounded-2xl blur-md opacity-60 group-focus-within:opacity-100 transition-opacity" />
            <div className="relative flex items-center bg-[#141420]/95 border border-white/15 rounded-2xl px-5 py-3 shadow-2xl transition-all group-focus-within:border-purple-500/50">
              <Search size={18} className="text-white/40 mr-3.5 shrink-0 group-focus-within:text-purple-400 transition-colors" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search templates (e.g., Executive Keynote, Modern A4 Resume, Neon Poster, Minimal Wedding)..."
                className="w-full bg-transparent border-none outline-none text-sm text-white placeholder-white/40 font-medium"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="text-xs text-white/40 hover:text-white/80 px-2 py-1 rounded-md bg-white/5 hover:bg-white/10 ml-2"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Quick Creation Shortcuts Rail */}
          <div className="w-full flex items-center justify-center gap-2 sm:gap-2.5 flex-wrap">
            {CATEGORY_SHORTCUTS.map(cat => {
              const Icon = cat.icon;
              const isActive = activeCategoryFilter === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    if (activeCategoryFilter === cat.id) {
                      setActiveCategoryFilter("All");
                    } else {
                      setActiveCategoryFilter(cat.id);
                    }
                  }}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-purple-600 text-white shadow-[0_0_16px_rgba(147,51,234,0.35)] scale-105 border border-purple-400/40'
                      : 'bg-white/[0.04] text-white/70 border border-white/[0.08] hover:bg-white/[0.08] hover:text-white hover:border-white/20'
                  }`}
                  title={`${cat.desc} (${cat.dims})`}
                >
                  <div
                    className="w-5 h-5 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: `${cat.color}25`, color: cat.color }}
                  >
                    <Icon size={13} />
                  </div>
                  <span>{cat.label}</span>
                  <span className="text-[10px] text-white/35 font-mono hidden md:inline">
                    {cat.dims.split('×')[0]}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ================================================== */}
      {/* SEARCH RESULTS VIEW (When search active)          */}
      {/* ================================================== */}
      {searchedTemplates && (
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Search size={18} className="text-purple-400" />
              Search results for "{searchQuery}" ({searchedTemplates.length})
            </h2>
            <button
              onClick={() => setSearchQuery("")}
              className="text-xs text-purple-400 hover:text-purple-300 font-semibold"
            >
              Back to discovery
            </button>
          </div>

          {searchedTemplates.length === 0 ? (
            <div className="p-12 text-center bg-white/[0.02] border border-white/[0.06] rounded-2xl">
              <p className="text-white/60 mb-2 font-medium">No templates matched your query.</p>
              <p className="text-xs text-white/40">Try searching for "Keynote", "Resume", "Wedding", "Poster", or "Report".</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5">
              {searchedTemplates.map(t => (
                <TemplateCard
                  key={t.id || t.name}
                  template={t}
                  isFavorite={favorites.has(t.id)}
                  onToggleFavorite={() => toggleFavorite(t.id)}
                  onOpen={() => handleLaunchTemplate(t)}
                  onPreview={() => setPreviewTemplate(t)}
                />
              ))}
            </div>
          )}
        </div>
      )}

      {/* ================================================== */}
      {/* RECENT DESIGNS / CONTINUE WORKING                 */}
      {/* ================================================== */}
      {savedProjects.length > 0 && !searchedTemplates && (
        <div className="flex flex-col gap-2.5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
              <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                Continue Working
              </h2>
              <span className="text-xs text-white/40 font-mono bg-white/[0.04] px-2 py-0.5 rounded-md border border-white/[0.06]">
                {savedProjects.length} designs
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => scrollCarousel(recentsRef, 'left')}
                className="w-8 h-8 rounded-lg bg-white/[0.05] hover:bg-white/[0.12] border border-white/10 flex items-center justify-center text-white/70 hover:text-white transition-colors"
                aria-label="Previous recents"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={() => scrollCarousel(recentsRef, 'right')}
                className="w-8 h-8 rounded-lg bg-white/[0.05] hover:bg-white/[0.12] border border-white/10 flex items-center justify-center text-white/70 hover:text-white transition-colors"
                aria-label="Next recents"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          <div
            ref={recentsRef}
            className="flex gap-4 overflow-x-auto pb-1.5 pt-1 items-stretch no-scrollbar scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {savedProjects.map((proj, idx) => {
              const projSlides = Array.isArray(proj.slides) && proj.slides.length > 0
                ? proj.slides
                : (Array.isArray(proj.pages) && proj.pages.length > 0 ? proj.pages : (Array.isArray(proj.elements) ? [proj.elements] : []));
              const projElements = Array.isArray(proj.elements) && proj.elements.length > 0
                ? proj.elements
                : (projSlides[0] || []);

              const norm = normalizeCanonicalDesign({
                ...proj,
                elements: projElements,
                slides: projSlides,
                canvasWidth: proj.canvasWidth,
                canvasHeight: proj.canvasHeight,
                size: proj.size
              });

              const savedDesignPayload = {
                ...proj,
                id: proj.id,
                name: proj.name || 'Untitled Design',
                category: proj.type || proj.category || (norm.isLandscape ? 'Presentation' : 'Document'),
                type: proj.type || proj.category || (norm.isLandscape ? 'Presentation' : 'Document'),
                gradient: proj.gradient || '#0b131e',
                size: `${norm.canvasWidth}×${norm.canvasHeight}`,
                canvasWidth: norm.canvasWidth,
                canvasHeight: norm.canvasHeight,
                elements: norm.elements,
                slides: norm.slides,
                thumbnailUrl: proj.thumbnailUrl,
                isSavedProject: true
              };

              return (
                <div
                  key={proj.id || idx}
                  onClick={() => handleOpenSavedProject(savedDesignPayload)}
                  className="group relative flex-shrink-0 flex flex-col bg-[#111118] border border-white/[0.08] hover:border-purple-500/50 rounded-xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-200"
                  style={{ width: '260px', height: '340px' }}
                >
                  {/* Real First Page Rendered Preview (Fixed 255px Frame) */}
                  <div
                    className="w-full relative overflow-hidden flex items-center justify-center p-3 bg-[#08090d] border-b border-white/[0.06]"
                    style={{ height: '255px' }}
                  >
                    <TemplateMiniRenderer template={savedDesignPayload} className="w-full h-full" />
                    {/* Hover Overlay */}
                    <div 
                      className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 backdrop-blur-[2px] cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleOpenSavedProject(savedDesignPayload);
                      }}
                    >
                      <span className="px-3.5 py-2 rounded-lg bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold shadow-lg flex items-center gap-1.5">
                        <Play size={12} fill="white" /> Open Editor
                      </span>
                    </div>
                  </div>

                  {/* Metadata (Fixed 85px Frame) */}
                  <div
                    className="w-full p-3 flex flex-col justify-between bg-[#12121c]"
                    style={{ height: '85px' }}
                  >
                    <span
                      className="text-xs font-bold text-white line-clamp-2 leading-snug group-hover:text-purple-300 transition-colors"
                      title={proj.name}
                    >
                      {proj.name || 'Untitled Design'}
                    </span>
                    <div className="flex items-center justify-between text-[11px] text-white/40 mt-auto pt-1">
                      <span className="text-emerald-400/90 font-medium">
                        {proj.type || proj.category || 'Design'}
                      </span>
                      <span className="flex items-center gap-1 text-[10px] text-white/35">
                        <Clock size={11} /> {proj.time || 'Recently'}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ================================================== */}
      {/* B. "TEMPLATES FOR YOU" HORIZONTAL CAROUSEL         */}
      {/* ================================================== */}
      {!searchedTemplates && (
        <TemplateSection
          title="Templates for you"
          subtitle="Curated designs matching your creative canvas with real aspect ratios"
          templates={activeCategoryFilter === 'All' ? templatesForYou : allTemplates.filter(t => t.category === activeCategoryFilter)}
          carouselRef={forYouRef}
          favorites={favorites}
          onToggleFavorite={toggleFavorite}
          onOpen={handleLaunchTemplate}
          onPreview={(t) => setPreviewTemplate(t)}
          onSeeAll={() => onNavigate('design')}
        />
      )}

      {/* ================================================== */}
      {/* C. "INSPIRED BY YOUR DESIGNS" HORIZONTAL CAROUSEL */}
      {/* ================================================== */}
      {!searchedTemplates && (
        <TemplateSection
          title="Inspired by your designs"
          subtitle="Hand-selected editorial layouts tailored to your creative workflow"
          templates={inspiredTemplates}
          carouselRef={inspiredRef}
          favorites={favorites}
          onToggleFavorite={toggleFavorite}
          onOpen={handleLaunchTemplate}
          onPreview={(t) => setPreviewTemplate(t)}
          onSeeAll={() => onNavigate('design')}
        />
      )}

      {/* ================================================== */}
      {/* D. "BROWSE TEMPLATE CATEGORIES" TILES              */}
      {/* ================================================== */}
      {!searchedTemplates && (
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                Browse template categories
              </h2>
              <p className="text-xs sm:text-sm text-white/50 mt-0.5">
                Explore curated formats with standardized physical dimensions
              </p>
            </div>
            <button
              onClick={() => onNavigate('design')}
              className="text-xs font-semibold text-purple-400 hover:text-purple-300 flex items-center gap-1 group"
            >
              See full library <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4">
            {CATEGORY_SHORTCUTS.map(cat => {
              const Icon = cat.icon;
              const sampleTemplate = allTemplates.find(t => t.category === cat.id) || allTemplates[0];
              return (
                <div
                  key={cat.id}
                  onClick={() => {
                    setActiveCategoryFilter(cat.id);
                    // scroll into view or navigate
                    if (forYouRef.current) {
                      forYouRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                    }
                  }}
                  className="group relative bg-[#12131e] border border-white/[0.08] hover:border-purple-500/40 rounded-2xl p-3.5 flex flex-col items-center text-center cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-xl overflow-hidden"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-3 transition-transform group-hover:scale-110"
                    style={{ background: `${cat.color}20`, color: cat.color }}
                  >
                    <Icon size={22} />
                  </div>
                  <span className="text-xs font-bold text-white group-hover:text-purple-300 transition-colors">
                    {cat.label}
                  </span>
                  <span className="text-[10px] text-white/40 font-mono mt-0.5">
                    {cat.dims}
                  </span>
                  <span className="text-[9.5px] text-white/30 mt-1">
                    {cat.count}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ================================================== */}
      {/* E. "DISCOVER ORD STUDIO" FEATURED EDITORIAL RAILS  */}
      {/* ================================================== */}
      {!searchedTemplates && (
        <TemplateSection
          title="Discover ORD Studio"
          subtitle="Top-tier editorial decks, luxury brand stationery, and Swiss typography layouts"
          badge="Featured Editorial"
          templates={discoverTemplates}
          carouselRef={discoverRef}
          favorites={favorites}
          onToggleFavorite={toggleFavorite}
          onOpen={handleLaunchTemplate}
          onPreview={(t) => setPreviewTemplate(t)}
          onSeeAll={() => onNavigate('design')}
        />
      )}

      {/* ================================================== */}
      {/* F. "TRENDING" CAROUSEL                             */}
      {/* ================================================== */}
      {!searchedTemplates && (
        <TemplateSection
          title="Trending this week"
          subtitle="The most copied, saved, and customized layouts across the creative community"
          badge="Community Top"
          templates={trendingTemplates}
          carouselRef={trendingRef}
          favorites={favorites}
          onToggleFavorite={toggleFavorite}
          onOpen={handleLaunchTemplate}
          onPreview={(t) => setPreviewTemplate(t)}
          onSeeAll={() => onNavigate('design')}
        />
      )}

      {/* ================================================== */}
      {/* TEMPLATE PREVIEW MODAL                             */}
      {/* ================================================== */}
      {previewTemplate && (
        <TemplatePreviewModal
          template={previewTemplate}
          isFavorite={favorites.has(previewTemplate.id)}
          onClose={() => setPreviewTemplate(null)}
          onUseTemplate={(t) => {
            setPreviewTemplate(null);
            handleLaunchTemplate(t);
          }}
          onToggleFavorite={(id) => toggleFavorite(id)}
        />
      )}
    </div>
  );
}

// ── Horizontal Rail Component with Real Carousel Controls ──────────────────
interface TemplateSectionProps {
  title: string;
  subtitle?: string;
  badge?: string;
  templates: any[];
  carouselRef: React.RefObject<HTMLDivElement | null>;
  favorites: Set<string | number>;
  onToggleFavorite: (id: string | number) => void;
  onOpen: (template: any) => void;
  onPreview: (template: any) => void;
  onSeeAll?: () => void;
}

function TemplateSection({
  title,
  subtitle,
  badge,
  templates,
  carouselRef,
  favorites,
  onToggleFavorite,
  onOpen,
  onPreview,
  onSeeAll
}: TemplateSectionProps) {
  const scroll = (direction: 'left' | 'right') => {
    if (!carouselRef.current) return;
    const distance = carouselRef.current.clientWidth * 0.75;
    carouselRef.current.scrollBy({
      left: direction === 'left' ? -distance : distance,
      behavior: 'smooth'
    });
  };

  if (!templates || templates.length === 0) return null;

  return (
    <div className="flex flex-col gap-2.5">
      {/* Header Bar */}
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2">
            {badge && (
              <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-purple-500/15 text-purple-300 border border-purple-500/30">
                ✦ {badge}
              </span>
            )}
            <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
              {title}
            </h2>
          </div>
          {subtitle && (
            <p className="text-xs sm:text-sm text-white/50 mt-0.5">
              {subtitle}
            </p>
          )}
        </div>

        {/* Carousel arrows and See all */}
        <div className="flex items-center gap-3">
          {onSeeAll && (
            <button
              onClick={onSeeAll}
              className="text-xs font-semibold text-white/50 hover:text-white transition-colors"
            >
              See all
            </button>
          )}
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => scroll('left')}
              className="w-8 h-8 rounded-lg bg-white/[0.04] hover:bg-white/[0.12] border border-white/[0.08] flex items-center justify-center text-white/70 hover:text-white transition-colors cursor-pointer"
              aria-label={`Scroll ${title} left`}
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-8 h-8 rounded-lg bg-white/[0.04] hover:bg-white/[0.12] border border-white/[0.08] flex items-center justify-center text-white/70 hover:text-white transition-colors cursor-pointer"
              aria-label={`Scroll ${title} right`}
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Scroll Rail - Aligned bottoms and identical heights */}
      <div
        ref={carouselRef}
        className="flex gap-4 sm:gap-5 overflow-x-auto pb-1.5 pt-1 items-stretch no-scrollbar scroll-smooth"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {templates.map(t => (
          <TemplateCard
            key={t.id || t.name}
            template={t}
            isFavorite={favorites.has(t.id)}
            onToggleFavorite={() => onToggleFavorite(t.id)}
            onOpen={() => onOpen(t)}
            onPreview={() => onPreview(t)}
          />
        ))}
      </div>
    </div>
  );
}

// ── Standardized Template Card Frame (260px × 340px) ────────────────────────
interface TemplateCardProps {
  template: any;
  isFavorite: boolean;
  onToggleFavorite: () => void;
  onOpen: () => void;
  onPreview: () => void;
}

const TemplateCard = React.memo(function TemplateCard({
  template,
  isFavorite,
  onToggleFavorite,
  onOpen,
  onPreview
}: TemplateCardProps) {
  const cW = template.canvasWidth || 1920;
  const cH = template.canvasHeight || 1080;

  const pageCount = Array.isArray(template.slides) && template.slides.length > 0
    ? template.slides.length
    : (Array.isArray(template.pages) && template.pages.length > 0 ? template.pages.length : 1);

  return (
    <div
      className="group relative flex-shrink-0 flex flex-col bg-[#12121b] border border-white/[0.08] hover:border-purple-500/50 rounded-xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-200"
      style={{ width: '260px', height: '340px' }}
      onClick={onOpen}
    >
      {/* Aspect Ratio Preserved Preview Container (Fixed 255px Frame) */}
      <div
        className="w-full relative overflow-hidden flex items-center justify-center p-3 bg-[#08090d] border-b border-white/[0.06]"
        style={{ height: '255px' }}
      >
        <TemplateMiniRenderer template={template} className="w-full h-full" />

        {/* Hover Overlay Actions (Inside preview frame, never alters card size) */}
        <div
          className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2 p-3 backdrop-blur-[2px] cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            onOpen();
          }}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              onOpen();
            }}
            className="w-full py-2 px-3 rounded-lg bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold shadow-lg flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
          >
            <Play size={12} fill="white" /> Use Template
          </button>
          <div className="flex items-center gap-2 w-full justify-center">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onPreview();
              }}
              className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white/90 text-xs font-semibold flex items-center gap-1 transition-colors cursor-pointer"
              title="Preview all slides"
            >
              <Eye size={13} /> Preview
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onToggleFavorite();
              }}
              className={`p-1.5 rounded-lg border transition-colors cursor-pointer ${
                isFavorite
                  ? 'bg-rose-500/20 border-rose-500/40 text-rose-400'
                  : 'bg-white/10 border-white/10 text-white/70 hover:text-white'
              }`}
              title="Favorite template"
            >
              <Heart size={14} fill={isFavorite ? '#f43f5e' : 'transparent'} />
            </button>
          </div>
        </div>

        {/* Badge: Page count / Premium tag */}
        <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5 pointer-events-none z-10">
          {pageCount > 1 && (
            <span className="bg-black/80 backdrop-blur-sm text-white/90 text-[10px] font-bold px-2 py-0.5 rounded border border-white/10 shadow">
              {pageCount} {template.category === 'Presentation' ? 'slides' : 'pages'}
            </span>
          )}
          {template.premium && (
            <span className="bg-amber-500/90 text-black text-[9.5px] font-extrabold px-1.5 py-0.5 rounded shadow flex items-center gap-0.5">
              <Crown size={10} /> PRO
            </span>
          )}
        </div>
      </div>

      {/* Card Metadata (Fixed 85px Frame) */}
      <div
        className="w-full p-3 flex flex-col justify-between bg-[#12121c]"
        style={{ height: '85px' }}
      >
        <span
          className="text-xs font-bold text-white line-clamp-2 leading-snug group-hover:text-purple-300 transition-colors"
          title={template.name || template.title}
        >
          {template.name || template.title}
        </span>

        <div className="flex items-center justify-between text-[11px] text-white/40 mt-auto pt-1">
          <span className="text-purple-400/90 font-medium truncate max-w-[120px]">
            {template.category}
          </span>
          <div className="flex items-center gap-2 shrink-0">
            <span className="font-mono text-[10px] text-white/35">
              {cW}×{cH}
            </span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onToggleFavorite();
              }}
              className="text-white/30 hover:text-rose-400 transition-colors p-0.5"
              title="Favorite"
            >
              <Heart size={13} fill={isFavorite ? '#f43f5e' : 'transparent'} className={isFavorite ? 'text-rose-400' : ''} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
});


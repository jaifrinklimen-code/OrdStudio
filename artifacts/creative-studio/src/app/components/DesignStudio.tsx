import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { secureFetch } from '../../lib/secureFetch';
import { supabase } from '../../lib/supabase';
import {
  Download, Share2, Image, Type, Sparkles, ArrowLeft, ArrowRight,
  Heart, Eye, Star, Crown, Zap, TrendingUp, Clock, Folder,
  ChevronLeft, ChevronRight, Play, Search, Filter, Grid3X3,
  BarChart3, HardDrive, FileImage, Layers, Plus, Pencil, Trash2,
  Copy, SlidersHorizontal, ArrowUpDown, Check
} from 'lucide-react';
import { FadeIn } from './FadeIn';
import { TiltCard } from './TiltCard';
import { CanvasEditor } from './CanvasEditor';
import { TemplateMiniRenderer } from './TemplateMiniRenderer';
import { TemplatePreviewModal } from './TemplatePreviewModal';
import { toast } from 'sonner';

import { createProfessionalSlides } from "./presentationBuilder";
import { loadAllCanonicalTemplates } from '../lib/templateRegistry';
import { fetchCachedTemplates, fetchCachedProjects } from '../lib/templateApiClient';

const CUSTOM_TEMPLATES_STORAGE_KEY = 'ds_custom_templates';

const getStoredCustomTemplates = () => {
  try {
    const stored = localStorage.getItem(CUSTOM_TEMPLATES_STORAGE_KEY);
    if (!stored) return [];
    const parsed = JSON.parse(stored);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    console.warn('Unable to load saved custom templates:', error);
    return [];
  }
};

const persistCustomTemplates = (templates: any[]) => {
  try {
    localStorage.setItem(CUSTOM_TEMPLATES_STORAGE_KEY, JSON.stringify(templates));
  } catch (error) {
    console.warn('Unable to save custom templates:', error);
  }
};

const getAllowedExtensionsForCategory = (category: string) => {
  switch (category) {
    case 'Presentation':
      return ['.pdf', '.ppt', '.pptx'];
    case 'Posters':
    case 'Resume':
    case 'Business':
    case 'Invitation':
      return ['.pdf'];
    default:
      return [];
  }
};

const normalizeCustomTemplate = (template: any) => {
  if (!template || !template.fileUrl) return template;

  return {
    ...template,
    elements: Array.isArray(template.elements) ? template.elements : [],
    slides: Array.isArray(template.slides) ? template.slides : [],
  };
};

const isAllowedTemplateFile = (file: File, category: string) => {
  const fileType = (file.type || '').toLowerCase();

  if (category === 'All' || category === 'Social') return true;

  if (category === 'Presentation') {
    return fileType.includes('pdf') || fileType.includes('powerpoint') || fileType.includes('presentationml');
  }

  if (['Posters', 'Resume', 'Business', 'Invitation'].includes(category)) {
    return fileType.includes('pdf');
  }

  return true;
};

const openTemplateFile = (template: any) => {
  if (!template?.fileUrl) return;

  try {
    window.open(template.fileUrl, '_blank', 'noopener,noreferrer');
  } catch (error) {
    console.warn('Unable to open uploaded template file:', error);
  }
};

const getTemplateFileKind = (template: any): 'image' | 'pdf' | 'document' => {
  const fileType = String(template?.fileType || template?.fileName || template?.fileExtension || '').toLowerCase();
  const fileName = String(template?.fileName || template?.name || '').toLowerCase();

  if (template?.fileType?.startsWith('image/')) return 'image';
  if (fileType.includes('pdf') || fileName.endsWith('.pdf')) return 'pdf';
  if (fileType.includes('powerpoint') || fileType.includes('presentationml') || fileType.includes('msword') || fileType.includes('officedocument') || fileName.endsWith('.ppt') || fileName.endsWith('.pptx') || fileName.endsWith('.doc') || fileName.endsWith('.docx')) {
    return 'document';
  }
  return 'document';
};

const getSafeTemplateRating = (template: any) => {
  const idValue = Number(String(template?.id ?? '').replace(/\D+/g, '') || (template?.name || '').length || 0);
  const base = Number.isFinite(idValue) ? idValue % 9 : 4;
  return Number((3.8 + (base % 6) * 0.18).toFixed(1));
};

function TemplateSkeleton() {
  return (
    <div className="ds-card ds-skeleton-card animate-pulse rounded-2xl bg-white/5 border border-white/10 p-4 h-[280px]">
      <div className="w-full h-40 bg-white/10 rounded-xl mb-3" />
      <div className="h-4 bg-white/10 rounded w-3/4 mb-2" />
      <div className="h-3 bg-white/5 rounded w-1/2" />
    </div>
  );
}

export let templates: any[] = [];
export let templatesWithSlides: any[] = [];

/* ── Main component ────────────────────────────────────────── */
export function DesignStudio({ onOpenTemplate }: { onOpenTemplate?: (design: any) => void } = {}) {
  const [selected, setSelected] = useState<number | null>(null);
  const [filter, setFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [favorites, setFavorites] = useState<Set<number>>(new Set());
  const [loading, setLoading] = useState(true);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [trendingScroll, setTrendingScroll] = useState(0);
  const trendingRef = useRef<HTMLDivElement>(null);
  const [apiTemplates, setApiTemplates] = useState<any[]>([]);
  const [apiProjects, setApiProjects] = useState<any[]>([]);

  const [selectedStyle, setSelectedStyle] = useState<string>('All Styles');
  const [selectedOrientation, setSelectedOrientation] = useState<string>('All');
  const [sortOrder, setSortOrder] = useState<string>('popular');
  const [showFavoritesOnly, setShowFavoritesOnly] = useState<boolean>(false);
  const [previewModalTemplate, setPreviewModalTemplate] = useState<any | null>(null);

  // Progressive rendering for the 300-template library
  const [visibleCount, setVisibleCount] = useState(24);
  const sentinelRef = useRef<HTMLDivElement>(null);

  // Listen for saved project updates from editor across tabs or components
  useEffect(() => {
    let mounted = true;

    const reloadUserProjects = (user: any) => {
      if (!user) {
        setApiProjects([]);
        return;
      }
      try {
        const storageKey = `ds_recent_projects_${user.id}`;
        const stored = localStorage.getItem(storageKey);
        if (stored) {
          const parsed = JSON.parse(stored);
          if (Array.isArray(parsed)) {
            const valid = parsed
              .filter((p: any) => p && p.name !== 'Brand Kit v2' && p.name !== 'Product Launch' && p.name !== 'Q4 Presentation')
              .sort((a: any, b: any) => new Date(b.updatedAt || 0).getTime() - new Date(a.updatedAt || 0).getTime());
            setApiProjects(valid);
            return;
          }
        }
      } catch {}
      setApiProjects([]);
    };

    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!mounted) return;
      reloadUserProjects(session?.user || null);
    }).catch(() => {});

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!mounted) return;
      reloadUserProjects(session?.user || null);
    });

    const handleProfileUpdate = () => {
      if (!mounted) return;
      supabase.auth.getUser().then(({ data: { user } }) => {
        if (!mounted) return;
        reloadUserProjects(user);
      }).catch(() => {
        if (!mounted) return;
        reloadUserProjects(null);
      });
    };

    window.addEventListener('storage', handleProfileUpdate);
    window.addEventListener('ds_projects_updated', handleProfileUpdate);

    return () => {
      mounted = false;
      subscription?.unsubscribe();
      window.removeEventListener('storage', handleProfileUpdate);
      window.removeEventListener('ds_projects_updated', handleProfileUpdate);
    };
  }, []);

  const handleUseTemplate = async (t: any) => {
    if (!t) return;
    const { data: { session } } = await supabase.auth.getSession();
    const cloneId = 'design_' + Date.now();
    
    // Normalize slides and elements
    let normalizedElements: any[] = [];
    let normalizedSlides: any[] = [];

    if (Array.isArray(t.slides) && t.slides.length > 0) {
      normalizedSlides = t.slides.map((s: any) => {
        if (Array.isArray(s)) return s;
        if (Array.isArray(s?.elements)) return s.elements;
        return [];
      });
      normalizedElements = normalizedSlides[0] || [];
    } else if (Array.isArray(t.pages) && t.pages.length > 0) {
      normalizedSlides = t.pages.map((p: any) => {
        if (Array.isArray(p)) return p;
        if (Array.isArray(p?.elements)) return p.elements;
        return [];
      });
      normalizedElements = normalizedSlides[0] || [];
    } else if (Array.isArray(t.elements) && t.elements.length > 0) {
      normalizedElements = t.elements;
      normalizedSlides = [t.elements];
    }

    const clonedDesign = {
      ...t,
      id: cloneId,
      user_id: session?.user?.id,
      originalTemplateId: t.id,
      sourceTemplateId: t.id,
      name: t.name.startsWith('My ') ? `${t.name} (Copy)` : `My ${t.name}`,
      category: t.category || 'Presentation',
      type: t.category || 'Presentation',
      size: t.size || `${t.canvasWidth || 1920}×${t.canvasHeight || 1080}`,
      canvasWidth: t.canvasWidth || (t.category === 'Presentation' ? 1920 : 1200),
      canvasHeight: t.canvasHeight || (t.category === 'Presentation' ? 1080 : 1697),
      gradient: t.gradient || '#0b131e',
      isUserDesign: true,
      time: 'Just now',
      progress: 25,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      elements: JSON.parse(JSON.stringify(normalizedElements)),
      slides: JSON.parse(JSON.stringify(normalizedSlides))
    };

    setApiTemplates(prev => [clonedDesign, ...prev]);
    if (session?.user?.id) {
      setApiProjects(prev => {
        const updated = [clonedDesign, ...prev.filter(p => String(p.id) !== String(cloneId))].slice(0, 10);
        try {
          const storageKey = `ds_recent_projects_${session.user.id}`;
          localStorage.setItem(storageKey, JSON.stringify(updated));
          window.dispatchEvent(new Event('ds_projects_updated'));
        } catch {}
        return updated;
      });
    }

    setPreviewModalTemplate(null);
    if (onOpenTemplate) {
      onOpenTemplate(clonedDesign);
    } else {
      setSelected(cloneId as any);
      toast.success(`Design "${clonedDesign.name}" created! Ready to customize.`);
    }
  };

  const saveTemplate = async (template: any, method: 'POST' | 'PUT' = 'POST') => {
    const response = await secureFetch(method === 'POST' ? '/api/templates' : `/api/templates/${template.id}`, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(template)
    });
    if (!response.ok) throw new Error('Template save failed');
    return response.json();
  };

  const handleAIDesignGenerator = async () => {
    const topic = prompt("Enter a topic for your AI Design (e.g. 'Coffee Shop Marketing', 'Mobile App Pitch', 'Creative Studio Resume'):");
    if (!topic || !topic.trim()) return;

    const id = Date.now();
    const newTemplate = {
      id,
      name: topic.trim(),
      category: 'Presentation',
      size: '1920×1080',
      premium: false,
      likes: 1,
      views: 1,
      gradient: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)',
      elements: createProfessionalSlides(topic.trim(), '1920×1080')[0],
      slides: createProfessionalSlides(topic.trim(), '1920×1080')
    };

    try {
      const savedTemplate = await saveTemplate(newTemplate);
      setApiTemplates(prev => [...prev, savedTemplate]);
    } catch (error) {
      console.error(error);
      toast.error('Unable to save generated template.');
      return;
    }

    const newProject = {
      id,
      name: newTemplate.name,
      type: newTemplate.category,
      time: 'Just now',
      progress: 30,
      gradient: newTemplate.gradient,
      size: newTemplate.size,
      elements: newTemplate.elements,
      slides: newTemplate.slides,
      canvasWidth: 1920,
      canvasHeight: 1080
    };
    
    setApiProjects(prev => {
      const filtered = prev.filter(p => p.name !== newTemplate.name);
      const updated = [newProject, ...filtered].slice(0, 4);
      try {
        localStorage.setItem('ds_recent_projects', JSON.stringify(updated));
      } catch(e) {}
      return updated;
    });

    if (onOpenTemplate) {
      onOpenTemplate(newProject);
    } else {
      setSelected(id);
    }
  };

  const handleEditTemplate = async (event: React.MouseEvent, template: any) => {
    event.stopPropagation();

    if (template?.fileUrl || template?.isCustomTemplate) {
      const name = prompt('Template name:', template.name);
      if (!name?.trim()) return;

      const updatedTemplate = { ...template, name: name.trim() };
      const storedCustomTemplates = getStoredCustomTemplates().map(item =>
        String(item.id) === String(template.id) ? updatedTemplate : item
      );
      persistCustomTemplates(storedCustomTemplates);
      setApiTemplates(prev => prev.map(item => String(item.id) === String(template.id) ? updatedTemplate : item));
      toast.success('Saved template name update.');
      return;
    }

    const name = prompt('Template name:', template.name);
    if (!name?.trim()) return;
    const category = prompt('Category:', template.category);
    const size = prompt('Size:', template.size);
    const gradient = prompt('Background color or gradient:', template.gradient);
    if (!category?.trim() || !size?.trim() || !gradient?.trim()) return;
    try {
      const updated = await saveTemplate({
        ...template, name: name.trim(), category: category.trim(),
        size: size.trim(), gradient: gradient.trim()
      }, 'PUT');
      setApiTemplates(prev => prev.map(item => String(item.id) === String(updated.id) ? updated : item));
      toast.success('Template updated and saved.');
    } catch (error) {
      console.error(error);
      toast.error('Unable to update template.');
    }
  };

  const handleDeleteTemplate = async (event: React.MouseEvent, template: any) => {
    event.stopPropagation();
    if (!window.confirm(`Delete “${template.name}”? This cannot be undone.`)) return;

    const isCustom = Boolean(template?.fileUrl || template?.isCustomTemplate);

    if (isCustom) {
      const nextCustomTemplates = getStoredCustomTemplates().filter(item => String(item.id) !== String(template.id));
      persistCustomTemplates(nextCustomTemplates);
      setApiTemplates(prev => prev.filter(item => String(item.id) !== String(template.id)));
      setSelected(null);
      toast.success('Template deleted.');
      return;
    }

    try {
      const response = await secureFetch(`/api/templates/${template.id}`, { method: 'DELETE' });
      if (!response.ok) throw new Error('Template delete failed');
      setApiTemplates(prev => prev.filter(item => String(item.id) !== String(template.id)));
      setSelected(null);
      toast.success('Template deleted.');
    } catch (error) {
      console.error(error);
      toast.error('Unable to delete template.');
    }
  };

  const handleSelectTemplate = (t: any) => {
    handleUseTemplate(t);
  };


  useEffect(() => {
    let mounted = true;

    Promise.all([
      fetchCachedTemplates(),
      loadAllCanonicalTemplates(),
      supabase.auth.getSession()
    ]).then(async ([templatesData, canonicalTmpls, sessionData]) => {
      if (!mounted) return;
      templatesWithSlides = canonicalTmpls;
      templates = canonicalTmpls;
      const currentUser = sessionData?.data?.session?.user;
      const storedCustomTemplates = getStoredCustomTemplates().map(normalizeCustomTemplate);
      const mapped = Array.isArray(templatesData) && templatesData.length > 0
        ? templatesData.map((t: any) => {
            const pages = Array.isArray(t.pages) ? t.pages : [];
            const rawSlides = Array.isArray(t.slides) && t.slides.length > 0
              ? t.slides
              : pages.length > 0
                ? pages
                : (Array.isArray(t.elements) ? [t.elements] : []);
            const normalizedSlides = rawSlides.map((s: any) => {
              if (Array.isArray(s)) return s;
              if (Array.isArray(s?.elements)) return s.elements;
              return [];
            }).filter((s: any) => s.length > 0);
            const firstSlideElements = normalizedSlides.length > 0 && normalizedSlides[0].length > 0
              ? normalizedSlides[0]
              : Array.isArray(t.elements) && t.elements.length > 0
              ? t.elements
              : [];
            const elements = Array.isArray(t.elements) && t.elements.length > 0
              ? t.elements
              : firstSlideElements;
            const finalSlides = normalizedSlides.length > 0
              ? normalizedSlides
              : (elements.length > 0 ? [elements] : []);
            return {
              ...t,
              pages: pages.length > 0 ? pages : finalSlides.map((s: any, idx: number) => ({ page: idx + 1, elements: s })),
              elements,
              slides: finalSlides,
            };
          })
        : [];

      const allCombined = mapped.length > 0
        ? [...storedCustomTemplates, ...mapped]
        : [...storedCustomTemplates, ...canonicalTmpls];
      const seen = new Set();
      const mergedTemplates = [];
      for (const item of allCombined) {
        const key = String(item.id || item.name).toLowerCase();
        if (!seen.has(key)) {
          seen.add(key);
          mergedTemplates.push(item);
        }
      }
      setApiTemplates(mergedTemplates);

      if (currentUser) {
        fetchCachedProjects(currentUser.id).then(userProjects => {
          if (!mounted || !userProjects || userProjects.length === 0) return;
          const filteredProjects = userProjects.filter((p: any) => 
            p && 
            p.name !== 'Brand Kit v2' && 
            p.name !== 'Product Launch' && 
            p.name !== 'Q4 Presentation'
          );
          if (filteredProjects.length > 0) {
            setApiProjects(prev => {
              const normalizedBack = filteredProjects.map((p: any) => ({
                ...p,
                slides: p.slides || p.pages || (p.elements ? [p.elements] : []),
                elements: p.elements || (Array.isArray(p.slides?.[0]) ? p.slides[0] : (p.pages?.[0] || [])),
                canvasWidth: p.canvasWidth || p.dimensions?.width,
                canvasHeight: p.canvasHeight || p.dimensions?.height,
                thumbnailUrl: p.thumbnailUrl || p.thumbnail,
                updatedAt: p.updatedAt || new Date().toISOString(),
                isSavedProject: true
              }));

              const map = new Map<string, any>();
              for (const item of prev) {
                map.set(String(item.id || item.name), item);
              }
              for (const item of normalizedBack) {
                const key = String(item.id || item.name);
                if (!map.has(key)) {
                  map.set(key, item);
                } else {
                  const existing = map.get(key);
                  const itemTime = new Date(item.updatedAt || 0).getTime();
                  const existingTime = new Date(existing.updatedAt || 0).getTime();
                  if (itemTime > existingTime) {
                    map.set(key, item);
                  }
                }
              }
              const mergedList = Array.from(map.values())
                .filter((p: any) => p && p.name !== 'Brand Kit v2' && p.name !== 'Product Launch' && p.name !== 'Q4 Presentation')
                .sort((a: any, b: any) => new Date(b.updatedAt || 0).getTime() - new Date(a.updatedAt || 0).getTime())
                .slice(0, 10);

              try {
                const storageKey = `ds_recent_projects_${currentUser.id}`;
                localStorage.setItem(storageKey, JSON.stringify(mergedList));
              } catch(e) {}

              return mergedList;
            });
          }
        });
      }
      setLoading(false);
    }).catch(err => {
      console.warn("Using fallback static datasets due to fetch error:", err);
      loadAllCanonicalTemplates().then(canonicalTmpls => {
        if (!mounted) return;
        const storedCustomTemplates = getStoredCustomTemplates().map(normalizeCustomTemplate);
        const allCombined = [...storedCustomTemplates, ...canonicalTmpls];
        const seen = new Set();
        const mergedTemplates = [];
        for (const item of allCombined) {
          const key = String(item.id || item.name).toLowerCase();
          if (!seen.has(key)) {
            seen.add(key);
            mergedTemplates.push(item);
          }
        }
        setApiTemplates(mergedTemplates);
        setLoading(false);
      });
    });

    return () => { mounted = false; };
  }, []);

  const toggleFavorite = useCallback((e: React.MouseEvent, id: number) => {
    e.stopPropagation();
    setFavorites(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }, []);

  const filtered = useMemo(() => {
    let list = apiTemplates.filter(t => {
      const cat = (t.category || '').toLowerCase().trim();
      const f = filter.toLowerCase().trim();
      const name = (t.name || '').toLowerCase();
      const desc = (t.description || '').toLowerCase();
      const tags = Array.isArray(t.tags) ? t.tags.join(' ').toLowerCase() : '';
      const style = (t.style || '').toLowerCase();

      // Category filter
      let matchesCategory = false;
      if (filter === 'All') {
        matchesCategory = true;
      } else if (f.includes('card') && (cat.includes('card') || name.includes('card') || tags.includes('card'))) {
        matchesCategory = true;
      } else if (f === 'business' && !cat.includes('card') && !name.includes('card') && (cat.includes('biz') || cat.includes('business') || name.includes('proposal') || name.includes('invoice') || name.includes('profile'))) {
        matchesCategory = true;
      } else if (cat === f || (cat + 's') === f || cat === (f + 's')) {
        matchesCategory = true;
      } else if (f === 'flyers' && (cat.includes('flyer') || name.includes('flyer'))) {
        matchesCategory = true;
      } else if (f === 'reports' && (cat.includes('report') || name.includes('report'))) {
        matchesCategory = true;
      } else if (f === 'posters' && (cat.includes('poster') || name.includes('poster'))) {
        matchesCategory = true;
      } else if (f === 'presentation' && (cat.includes('present') || cat.includes('deck') || cat.includes('pitch') || cat.includes('keynote'))) {
        matchesCategory = true;
      } else if (f === 'resume' && (cat.includes('resume') || cat.includes('cv'))) {
        matchesCategory = true;
      } else if (f === 'invitation' && (cat.includes('invite') || cat.includes('invitation'))) {
        matchesCategory = true;
      }

      // Search filter (name, category, description, tags)
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = !q || 
        name.includes(q) || 
        cat.includes(q) || 
        desc.includes(q) || 
        tags.includes(q);

      // Style filter
      let matchesStyle = true;
      if (selectedStyle !== 'All Styles') {
        const s = selectedStyle.toLowerCase();
        matchesStyle = style === s || tags.includes(s) || name.includes(s) || desc.includes(s);
      }

      // Orientation filter
      let matchesOrientation = true;
      if (selectedOrientation !== 'All') {
        let orient = (t.orientation || '').toLowerCase();
        if (!orient && t.size) {
          const parts = t.size.split(/×|x/).map(Number);
          if (parts.length === 2 && !isNaN(parts[0]) && !isNaN(parts[1])) {
            orient = parts[0] > parts[1] * 1.15 ? 'landscape' : parts[1] > parts[0] * 1.15 ? 'portrait' : 'square';
          }
        }
        matchesOrientation = orient === selectedOrientation.toLowerCase();
      }

      // Favorites filter
      let matchesFavorites = true;
      if (showFavoritesOnly) {
        matchesFavorites = favorites.has(t.id);
      }

      return matchesCategory && matchesSearch && matchesStyle && matchesOrientation && matchesFavorites;
    });

    if (sortOrder === 'popular') {
      list.sort((a, b) => ((b.views || 0) + (b.likes || 0) * 2) - ((a.views || 0) + (a.likes || 0) * 2));
    } else if (sortOrder === 'newest') {
      list.sort((a, b) => Number(b.id || 0) - Number(a.id || 0));
    } else if (sortOrder === 'name') {
      list.sort((a, b) => (a.name || '').localeCompare(b.name || ''));
    } else if (sortOrder === 'slides') {
      list.sort((a, b) => ((b.slides?.length || (b.elements?.length ? 1 : 0)) - (a.slides?.length || (a.elements?.length ? 1 : 0))));
    }

    return list;
  }, [apiTemplates, filter, searchQuery, selectedStyle, selectedOrientation, showFavoritesOnly, sortOrder, favorites]);

  // Reset pagination when search or filters change
  useEffect(() => {
    setVisibleCount(24);
  }, [filter, searchQuery, selectedStyle, selectedOrientation, showFavoritesOnly, sortOrder]);

  // Progressive template windowing: only render visible batch
  const visibleTemplates = useMemo(() => {
    return filtered.slice(0, visibleCount);
  }, [filtered, visibleCount]);

  // Infinite scroll sentinel observer for seamless discovery
  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setVisibleCount(prev => Math.min(prev + 24, filtered.length));
        }
      },
      { rootMargin: '400px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [filtered.length, visibleCount]);

  const cats = ['All', 'Presentation', 'Business Cards', 'Resume', 'Business', 'Invitation', 'Posters', 'Flyers', 'Reports'];
  const catCounts = cats.map(c => {
    if (c === 'All') return { name: c, count: apiTemplates.length };
    const f = c.toLowerCase().trim();
    const count = apiTemplates.filter(t => {
      const cat = (t.category || '').toLowerCase().trim();
      const name = (t.name || '').toLowerCase();
      const tags = Array.isArray(t.tags) ? t.tags.join(' ').toLowerCase() : '';
      if (f.includes('card') && (cat.includes('card') || name.includes('card') || tags.includes('card'))) return true;
      if (f === 'business' && (cat.includes('card') || name.includes('card'))) return false;
      if (cat === f || (cat + 's') === f || cat === (f + 's')) return true;
      if (f === 'flyers' && (cat.includes('flyer') || name.includes('flyer'))) return true;
      if (f === 'reports' && (cat.includes('report') || name.includes('report'))) return true;
      if (f === 'posters' && (cat.includes('poster') || name.includes('poster'))) return true;
      if (f === 'business' && (cat.includes('biz') || cat.includes('business') || name.includes('proposal') || name.includes('invoice') || name.includes('profile'))) return true;
      if (f === 'presentation' && (cat.includes('present') || cat.includes('deck') || cat.includes('pitch') || cat.includes('keynote'))) return true;
      if (f === 'resume' && (cat.includes('resume') || cat.includes('cv'))) return true;
      if (f === 'invitation' && (cat.includes('invite') || cat.includes('invitation'))) return true;
      return false;
    }).length;
    return { name: c, count };
  });

  const scrollTrending = (dir: number) => {
    if (trendingRef.current) {
      const amount = 280;
      trendingRef.current.scrollBy({ left: dir * amount, behavior: 'smooth' });
      setTrendingScroll(prev => prev + dir);
    }
  };

  /* ── Editor view ───────────────────────────────────────── */
  if (selected) {
    let tmpl: any = null;
    const proj = apiProjects.find(p => String(p.id) === String(selected));
    if (proj) {
      // User's saved design from Continue Working or recent edits
      tmpl = {
        ...proj,
        id: proj.id,
        name: proj.name || 'My Design',
        category: proj.type || proj.category || 'Presentation',
        size: proj.size || (proj.canvasWidth && proj.canvasHeight ? `${proj.canvasWidth}×${proj.canvasHeight}` : '1920×1080'),
        canvasWidth: proj.canvasWidth || (proj.type === 'Presentation' || proj.category === 'Presentation' ? 1920 : 1200),
        canvasHeight: proj.canvasHeight || (proj.type === 'Presentation' || proj.category === 'Presentation' ? 1080 : 1697),
        gradient: proj.gradient || '#0f172a',
        elements: Array.isArray(proj.elements) && proj.elements.length > 0 ? proj.elements : (Array.isArray(proj.slides?.[0]) ? proj.slides[0] : []),
        slides: Array.isArray(proj.slides) && proj.slides.length > 0 ? proj.slides : (Array.isArray(proj.elements) ? [proj.elements] : []),
        thumbnailUrl: proj.thumbnailUrl,
        isUserDesign: true
      };
    } else {
      // Original template from library
      tmpl = apiTemplates.find(t => String(t.id) === String(selected));
      if (!tmpl) {
        tmpl = templatesWithSlides.find(t => String(t.id) === String(selected)) || templates.find(t => String(t.id) === String(selected));
      }
    }

    if (!tmpl) {
      console.warn('Selected template or project not found:', selected);
      setSelected(null);
      return null;
    }

    const editorElements = tmpl?.fileUrl && (tmpl.fileType || '').toLowerCase().startsWith('image/')
      ? [{
          id: `uploaded-${tmpl.id}`,
          type: 'image',
          x: 0,
          y: 0,
          width: 800,
          height: 450,
          src: tmpl.fileUrl,
          fill: 'transparent',
          stroke: 'transparent',
          strokeWidth: 0,
          opacity: 1,
          visible: true,
          locked: false,
        }]
      : undefined;

    const rawEditorSlides = Array.isArray(tmpl?.slides) && tmpl.slides.length > 0
      ? tmpl.slides
      : Array.isArray(tmpl?.pages) && tmpl.pages.length > 0
      ? tmpl.pages
      : undefined;

    const editorSlides: any[][] | undefined = rawEditorSlides
      ? rawEditorSlides.map((s: any) => {
          if (Array.isArray(s)) return s;
          if (Array.isArray(s?.elements)) return s.elements;
          return [];
        }).filter((s: any) => s.length > 0)
      : undefined;

    const resolvedElements = editorElements || (Array.isArray(tmpl?.elements) && tmpl.elements.length > 0
      ? tmpl.elements
      : editorSlides && editorSlides[0]
      ? editorSlides[0]
      : undefined);

    const filePreviewUrl = tmpl?.fileUrl || undefined;
    const filePreviewType = tmpl?.fileType || undefined;
    const filePreviewName = tmpl?.fileName || tmpl?.name || undefined;

    return (
      <CanvasEditor
        key={String(selected)}
        templateName={tmpl?.name}
        templateCategory={tmpl?.category || tmpl?.type || 'Presentation'}
        templateGradient={tmpl?.gradient}
        templateSize={tmpl?.size}
        templateCanvasWidth={tmpl?.canvasWidth}
        templateCanvasHeight={tmpl?.canvasHeight}
        templateElements={resolvedElements}
        templateSlides={editorSlides}
        templateFileUrl={filePreviewUrl}
        templateFileType={filePreviewType}
        templateFileName={filePreviewName}
        onBack={() => setSelected(null)}
        onSave={async (elements, slides, thumbnailUrl, designTitle) => {
          const finalName = designTitle || tmpl?.name || 'My Design';
          const updatedProj = {
            ...tmpl,
            id: selected,
            originalTemplateId: tmpl?.originalTemplateId || tmpl?.sourceTemplateId || tmpl?.templateId,
            sourceTemplateId: tmpl?.sourceTemplateId || tmpl?.originalTemplateId || tmpl?.templateId,
            name: finalName,
            type: tmpl?.category || tmpl?.type || 'Presentation',
            category: tmpl?.category || tmpl?.type || 'Presentation',
            gradient: tmpl?.gradient || '#0b131e',
            size: tmpl?.size || (tmpl?.canvasWidth && tmpl?.canvasHeight ? `${tmpl?.canvasWidth}×${tmpl?.canvasHeight}` : '1920×1080'),
            canvasWidth: tmpl?.canvasWidth || 1920,
            canvasHeight: tmpl?.canvasHeight || 1080,
            coordinateVersion: 2,
            canonicalCoordinateVersion: 2,
            thumbnailUrl: thumbnailUrl || tmpl?.thumbnailUrl,
            elements: JSON.parse(JSON.stringify(elements)),
            slides: JSON.parse(JSON.stringify(slides)),
            progress: 100,
            time: 'Just now',
            createdAt: tmpl?.createdAt || tmpl?.updatedAt || new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            isSavedProject: true,
            isUserDesign: true
          };

          // 1. Update apiProjects in state and localStorage
          setApiProjects(prev => {
            const filtered = prev.filter(p => String(p.id) !== String(selected));
            const updated = [updatedProj, ...filtered].slice(0, 10);
            try {
              localStorage.setItem('ds_recent_projects', JSON.stringify(updated));
              window.dispatchEvent(new Event('ds_projects_updated'));
            } catch(e) {}
            return updated;
          });

          // 2. If it's in apiTemplates as a user design, update it
          if (tmpl?.isUserDesign) {
            setApiTemplates(prev => prev.map(t => String(t.id) === String(selected) ? { ...t, ...updatedProj } : t));
          }

          // 3. POST to /api/projects to persist in database/backend
          secureFetch('/api/projects', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedProj)
          }).catch(err => {
            console.error("Backend project save error:", err);
          });

          toast.success('Design saved successfully!');
        }}
      />
    );
  }

  /* ── Main gallery view ─────────────────────────────────── */
  return (
    <div className="ds-studio">
      {/* ─── Hero Section ─────────────────────────────────── */}
      <FadeIn delay={60} duration={500}>
        <div className="ds-hero">
          <div className="ds-hero-content">
            <div className="ds-hero-badge">
              <Sparkles size={12} />Design Studio
            </div>
            <h1 className="ds-hero-title">Create stunning<br />designs instantly</h1>
            <p className="ds-hero-subtitle">Professional templates for every format. Start from scratch or let AI design for you.</p>
            <div className="ds-hero-actions">
              <button 
                className="ds-hero-cta-primary" 
                aria-label="AI Design Generator"
                onClick={handleAIDesignGenerator}
              >
                <Zap size={16} />AI Design Generator
              </button>
              <button 
                className="ds-hero-cta-secondary" 
                aria-label="Browse Templates"
                onClick={() => {
                  const el = document.getElementById('all-templates');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                  else toast.info('Browse Templates: Coming soon!');
                }}
              >
                <Grid3X3 size={16} />Browse Templates
              </button>
            </div>
          </div>
          <div className="ds-hero-visual">
            <div className="ds-hero-orb ds-hero-orb-1" />
            <div className="ds-hero-orb ds-hero-orb-2" />
            <div className="ds-hero-preview-stack">
              {(apiProjects.length > 0 ? apiProjects : apiTemplates.slice(0, 3)).slice(0, 3).map((p, i) => {
                const matchedTmpl = apiTemplates.find(t => String(t.id) === String(p.id) || t.name.toLowerCase() === p.name.toLowerCase());
                const t = matchedTmpl || p;
                return (
                  <div key={i} className="ds-hero-preview-card" style={{ transform: `rotate(${(i - 1) * 6}deg) translateY(${i * 4}px)`, zIndex: 3 - i }}>
                    <div style={{ height: '100%', borderRadius: '10px', overflow: 'hidden', position: 'relative' }}>
                      {p.thumbnailUrl ? (
                        <img src={p.thumbnailUrl} alt={p.name} className="w-full h-full object-cover" />
                      ) : (
                        <TemplateMiniRenderer template={t} />
                      )}
                      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '8px 12px', background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%)', display: 'flex', alignItems: 'flex-end' }}>
                        <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.95)', fontWeight: 600 }}>{p.name}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </FadeIn>

      {/* Statistics removed per user request */}
      {/* ─── Continue Recent Projects ─────────────────────── */}
      {apiProjects.length > 0 && (
        <FadeIn delay={160} duration={500}>
          <div className="ds-section">
            <div className="ds-section-header">
              <div>
                <h3 className="ds-section-title"><Clock size={15} />Continue Working</h3>
                <p className="text-sm text-gray-400 mt-1">You were previously working on this</p>
              </div>
              <button className="ds-section-link">View all <ArrowRight size={12} /></button>
            </div>
            <div className="ds-recent-grid">
              {apiProjects.map((p, i) => {
                const projSlides = Array.isArray(p.slides) && p.slides.length > 0
                  ? p.slides
                  : (Array.isArray(p.pages) && p.pages.length > 0 ? p.pages : (Array.isArray(p.elements) ? [p.elements] : []));
                const projElements = Array.isArray(p.elements) && p.elements.length > 0
                  ? p.elements
                  : (projSlides[0] || []);

                const savedDesignPayload = {
                  ...p,
                  id: p.id,
                  name: p.name || 'Untitled Design',
                  category: p.type || p.category || 'Presentation',
                  type: p.type || p.category || 'Presentation',
                  gradient: p.gradient || '#0b131e',
                  size: p.size || (p.canvasWidth && p.canvasHeight ? `${p.canvasWidth}×${p.canvasHeight}` : '1920×1080'),
                  canvasWidth: p.canvasWidth || (p.type === 'Presentation' || p.category === 'Presentation' ? 1920 : 1200),
                  canvasHeight: p.canvasHeight || (p.type === 'Presentation' || p.category === 'Presentation' ? 1080 : 1697),
                  elements: projElements,
                  slides: projSlides,
                  thumbnailUrl: p.thumbnailUrl,
                  isSavedProject: true
                };

                return (
                  <div key={p.id || i} className="ds-recent-card" tabIndex={0} role="button" aria-label={`Continue ${p.name}`} onClick={() => {
                    if (onOpenTemplate) {
                      onOpenTemplate(savedDesignPayload);
                    } else {
                      setSelected(p.id);
                    }
                  }}>
                    <div className="ds-recent-thumb relative overflow-hidden bg-slate-950 flex items-center justify-center p-2">
                      <TemplateMiniRenderer template={savedDesignPayload} className="w-full h-full" />
                      <div className="ds-recent-play"><Play size={16} fill="white" /></div>
                    </div>
                    <div className="ds-recent-info">
                      <div className="ds-recent-name">{p.name || 'Untitled Design'}</div>
                      <div className="ds-recent-meta">
                        <span className="ds-recent-type">{p.type || p.category || 'Design'}</span>
                        <span>·</span>
                        <span>{p.time || 'Recently'}</span>
                      </div>
                      <div className="ds-progress-bar">
                        <div className="ds-progress-fill" style={{ width: `${p.progress || 100}%`, background: p.gradient || 'linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)' }} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </FadeIn>
      )}



      {/* ─── Template Gallery ─────────────────────────────── */}
      <FadeIn delay={240} duration={500}>
        <div className="ds-section" id="all-templates">
          <div className="ds-section-header flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h3 className="ds-section-title"><Layers size={15} />Professional Template Library</h3>
              <p className="text-sm text-gray-400 mt-1">
                Browse {apiTemplates.length}+ production-ready editable designs. Showing {filtered.length} matching templates.
              </p>
            </div>
            
            {/* Search & Filter Controls */}
            <div className="flex flex-wrap items-center gap-2.5">
              {/* Search */}
              <div className="ds-search-mini">
                <Search size={13} />
                <input
                  type="text"
                  placeholder="Search templates, tags, styles…"
                  aria-label="Search templates"
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                />
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery('')}
                    className="text-white/40 hover:text-white text-xs px-1"
                    aria-label="Clear search"
                  >
                    ✕
                  </button>
                )}
              </div>

              {/* Style Dropdown */}
              <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-lg px-2.5 py-1.5 text-xs text-white/80 hover:border-purple-500/40 transition-colors">
                <SlidersHorizontal size={13} className="text-purple-400" />
                <select
                  value={selectedStyle}
                  onChange={e => setSelectedStyle(e.target.value)}
                  className="bg-transparent border-none outline-none text-xs text-white/90 cursor-pointer pr-1"
                  aria-label="Filter by style"
                >
                  {['All Styles', 'Modern', 'Minimal', 'Bold', 'Corporate', 'Creative', 'Elegant', 'Tech', 'Vibrant'].map(s => (
                    <option key={s} value={s} className="bg-[#121420] text-white">{s}</option>
                  ))}
                </select>
              </div>

              {/* Orientation Pills */}
              <div className="hidden sm:flex items-center bg-white/5 border border-white/10 rounded-lg p-0.5 text-xs">
                {['All', 'Landscape', 'Portrait', 'Square'].map(o => (
                  <button
                    key={o}
                    onClick={() => setSelectedOrientation(o)}
                    className={`px-2 py-1 rounded-md text-[11px] font-medium transition-all ${selectedOrientation === o ? 'bg-purple-600 text-white shadow-sm' : 'text-white/60 hover:text-white'}`}
                  >
                    {o}
                  </button>
                ))}
              </div>

              {/* Sort Dropdown */}
              <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-lg px-2.5 py-1.5 text-xs text-white/80 hover:border-purple-500/40 transition-colors">
                <ArrowUpDown size={13} className="text-purple-400" />
                <select
                  value={sortOrder}
                  onChange={e => setSortOrder(e.target.value)}
                  className="bg-transparent border-none outline-none text-xs text-white/90 cursor-pointer pr-1"
                  aria-label="Sort templates"
                >
                  <option value="popular" className="bg-[#121420] text-white">Most Popular</option>
                  <option value="newest" className="bg-[#121420] text-white">Newest First</option>
                  <option value="name" className="bg-[#121420] text-white">Name (A-Z)</option>
                  <option value="slides" className="bg-[#121420] text-white">Most Slides</option>
                </select>
              </div>

              {/* Favorites Toggle */}
              <button
                onClick={() => setShowFavoritesOnly(prev => !prev)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-medium transition-all ${showFavoritesOnly ? 'bg-rose-500/20 border-rose-500/50 text-rose-300' : 'bg-white/5 border-white/10 text-white/70 hover:text-white'}`}
                aria-label="Show favorites only"
              >
                <Heart size={13} fill={showFavoritesOnly ? '#f43f5e' : 'none'} color={showFavoritesOnly ? '#f43f5e' : 'currentColor'} />
                <span>Favorites</span>
                {favorites.size > 0 && <span className="text-[10px] opacity-80">({favorites.size})</span>}
              </button>
            </div>
          </div>

          {/* Category pills */}
          <div className="ds-cat-pills" role="tablist" aria-label="Filter templates by category">
            {catCounts.map(c => (
              <button
                key={c.name}
                role="tab"
                aria-selected={filter === c.name}
                onClick={() => setFilter(c.name)}
                className={`ds-cat-pill ${filter === c.name ? 'active' : ''}`}
              >
                {c.name}
                <span className="ds-cat-count">{c.count}</span>
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="ds-template-grid">
            {loading ? (
              Array.from({ length: 8 }).map((_, i) => <TemplateSkeleton key={i} />)
            ) : filtered.length === 0 ? (
              <div className="col-span-full py-16 text-center text-white/50 flex flex-col items-center gap-3">
                <Search size={32} className="opacity-40" />
                <p className="text-base font-medium text-white/70">No templates found matching your criteria.</p>
                <button
                  onClick={() => {
                    setFilter('All');
                    setSearchQuery('');
                    setSelectedStyle('All Styles');
                    setSelectedOrientation('All');
                    setShowFavoritesOnly(false);
                  }}
                  className="px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-500 text-white text-xs font-medium transition-colors"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              visibleTemplates.map((t, i) => {
                const numSlides = Array.isArray(t.slides) && t.slides.length > 0 ? t.slides.length : 1;
                const canvasW = t.canvasWidth || (t.size ? parseInt(t.size.split(/×|x/)[0], 10) : 0) || (t.category === 'Presentation' ? 1920 : t.category === 'Resume' || t.category === 'Reports' ? 1200 : t.category === 'Posters' ? 1080 : 1080);
                const canvasH = t.canvasHeight || (t.size ? parseInt(t.size.split(/×|x/)[1], 10) : 0) || (t.category === 'Presentation' ? 1080 : t.category === 'Resume' || t.category === 'Reports' ? 1697 : t.category === 'Posters' ? 1528 : 1080);

                return (
                  <div
                    key={t.id}
                    className="ds-template-card group relative"
                    style={{ animationDelay: `${i * 15}ms` }}
                    tabIndex={0}
                    role="button"
                    aria-label={`Template: ${t.name}`}
                    onMouseEnter={() => setHoveredCard(t.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                    onClick={() => setPreviewModalTemplate(t)}
                    onKeyDown={e => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setPreviewModalTemplate(t);
                      }
                    }}
                  >
                    {/* Live Scaled Preview with Dynamic Aspect Ratio */}
                    <div 
                      className="ds-tmpl-preview relative w-full overflow-hidden rounded-t-xl bg-slate-950/90 shadow-inner"
                      style={{ aspectRatio: `${canvasW} / ${canvasH}` }}
                    >
                      <TemplateMiniRenderer template={t} />

                      {/* Badges */}
                      <div className="absolute top-2 left-2 flex items-center gap-1.5 z-10 pointer-events-none">
                        {t.premium && (
                          <span className="flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-400 text-black shadow-md">
                            <Crown size={10} /> PRO
                          </span>
                        )}
                        {numSlides > 1 && (
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-black/75 text-white/90 border border-white/15 backdrop-blur-sm shadow-sm">
                            {numSlides} {t.category === 'Presentation' ? 'slides' : 'pages'}
                          </span>
                        )}
                      </div>

                      {/* Subtle hover overlay */}
                      <div className={`ds-tmpl-overlay ${hoveredCard === t.id ? 'visible' : ''}`}>
                        <div className="flex items-center gap-2 w-full max-w-[220px]">
                          <button
                            className="ds-tmpl-action flex-1 justify-center py-1.5 text-xs font-medium bg-white/15 hover:bg-white/25 backdrop-blur-md rounded-lg text-white border border-white/20 transition-all"
                            aria-label="Preview"
                            onClick={(e) => {
                              e.stopPropagation();
                              setPreviewModalTemplate(t);
                            }}
                          >
                            <Eye size={13} /> Preview
                          </button>
                          <button
                            className="ds-tmpl-action primary flex-1 justify-center py-1.5 text-xs font-semibold bg-purple-600 hover:bg-purple-500 rounded-lg text-white shadow-lg shadow-purple-600/30 transition-all"
                            aria-label="Use template"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleUseTemplate(t);
                            }}
                          >
                            <Play size={13} /> Use
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Card Info - Clean Professional Marketplace Style */}
                    <div className="ds-tmpl-info p-3 bg-white/[0.02]">
                      <div className="ds-tmpl-top-row flex items-center justify-between gap-2">
                        <p className="ds-tmpl-name font-semibold text-sm text-white/95 truncate" title={t.name}>{t.name}</p>
                        <div className="flex items-center gap-1 flex-shrink-0">
                          <button
                            className={`ds-fav-btn p-1 rounded-md hover:bg-white/10 transition-colors ${favorites.has(t.id) ? 'active' : ''}`}
                            onClick={(e) => toggleFavorite(e, t.id)}
                            aria-label={favorites.has(t.id) ? 'Remove from favorites' : 'Add to favorites'}
                            title="Favorite"
                          >
                            <Heart size={13} fill={favorites.has(t.id) ? '#f43f5e' : 'none'} color={favorites.has(t.id) ? '#f43f5e' : 'rgba(255,255,255,0.6)'} />
                          </button>
                          <button
                            className="ds-fav-btn p-1 rounded-md hover:bg-white/10 text-white/60 hover:text-white transition-colors"
                            aria-label={`Duplicate ${t.name}`}
                            title="Duplicate & Edit"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleUseTemplate(t);
                            }}
                          >
                            <Copy size={13} />
                          </button>
                          {t.isUserDesign && (
                            <button
                              className="ds-fav-btn p-1 rounded-md text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-colors"
                              aria-label={`Delete ${t.name}`}
                              title="Delete Design"
                              onClick={(e) => handleDeleteTemplate(e, t)}
                            >
                              <Trash2 size={13} />
                            </button>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-xs text-white/50 mt-1">
                        <span className="truncate">{t.category} {t.style ? `· ${t.style}` : ''}</span>
                        <span className="text-[11px] text-purple-300/80 font-mono ml-2 flex-shrink-0">
                          {numSlides > 1 ? `${numSlides}p` : t.size || 'A4'}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
            {visibleCount < filtered.length && (
              <div ref={sentinelRef} className="col-span-full py-8 flex flex-col items-center justify-center gap-3">
                <button
                  onClick={() => setVisibleCount(prev => Math.min(prev + 24, filtered.length))}
                  className="px-6 py-2.5 rounded-xl bg-purple-600/20 hover:bg-purple-600/30 text-purple-300 border border-purple-500/35 text-xs font-semibold cursor-pointer transition-all duration-200 shadow-lg hover:shadow-purple-500/10"
                >
                  Load More Templates ({filtered.length - visibleCount} remaining)
                </button>
                <span className="text-[11px] text-white/40">
                  Showing {Math.min(visibleCount, filtered.length)} of {filtered.length} templates
                </span>
              </div>
            )}
          </div>
        </div>
      </FadeIn>

      {/* Template Preview Modal */}
      {previewModalTemplate && (
        <TemplatePreviewModal
          template={previewModalTemplate}
          isFavorite={favorites.has(previewModalTemplate.id)}
          onClose={() => setPreviewModalTemplate(null)}
          onUseTemplate={handleUseTemplate}
          onToggleFavorite={(id) => {
            setFavorites(prev => {
              const next = new Set(prev);
              next.has(id) ? next.delete(id) : next.add(id);
              return next;
            });
          }}
          onDuplicateTemplate={handleUseTemplate}
        />
      )}
    </div>
  );
}

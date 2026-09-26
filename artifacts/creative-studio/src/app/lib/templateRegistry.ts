// Canonical Template Registry, Fingerprinting & Asset Pipeline for ORD Studio
// Single Source of Truth: template.slides[0] === template.elements
// Zero Duplicates Architecture: Structural fingerprint comparison & similarity scoring

export interface CanvasElement {
  id: string;
  type: 'text' | 'rect' | 'circle' | 'line' | 'arrow' | 'star' | 'triangle' | 'image' | 'heart' | 'hexagon' | 'messageSquare';
  x: number;
  y: number;
  width: number;
  height: number;
  rotation?: number;
  fill?: string;
  stroke?: string;
  strokeWidth?: number;
  text?: string;
  fontSize?: number;
  fontFamily?: string;
  fontWeight?: string | number;
  fontStyle?: string;
  textDecoration?: string;
  src?: string;
  shape?: 'circle' | 'rect';
  opacity?: number;
  locked?: boolean;
  visible?: boolean;
  textAlign?: 'left' | 'center' | 'right';
  verticalAlign?: 'top' | 'middle' | 'bottom';
  borderRadius?: number;
  lineHeight?: number;
}

export interface TemplateFingerprint {
  layoutFamily: 
    | 'split-editorial' 
    | 'full-bleed' 
    | 'centered-minimal' 
    | 'asymmetric-grid' 
    | 'modular-cards' 
    | 'large-stat' 
    | 'collage' 
    | 'typography-only' 
    | 'timeline' 
    | 'two-column';
  palette: 'dark' | 'light' | 'vibrant' | 'warm-neutral' | 'luxury-gold' | 'monochrome';
  hasHeroImage: boolean;
  heroPosition: 'left' | 'right' | 'center' | 'full' | 'none';
  imageCount: number;
  elementCount: number;
  aspectRatioTag: '16:9' | 'A4' | '9:16' | '1:1' | 'banner';
  primaryFont: string;
  secondaryFont: string;
  structureHash: string;
}

export interface CanonicalTemplate {
  id: string | number;
  name: string;
  title: string;
  description?: string;
  category: string;
  subcategory?: string;
  size: string;
  canvasWidth: number;
  canvasHeight: number;
  orientation: 'landscape' | 'portrait' | 'square';
  gradient: string;
  slides: CanvasElement[][];
  elements: CanvasElement[]; // Strictly identical to slides[0]
  tags: string[];
  premium?: boolean;
  likes?: number;
  views?: number;
  version: string;
  contentHash: string;
  fingerprint: TemplateFingerprint;
}

// Compute stable hash from slide content
export function computeTemplateHash(template: any): string {
  try {
    const raw = `${template.id || ''}:${template.name || ''}:${template.size || ''}:${(template.slides?.[0] || template.elements || []).length}`;
    let hash = 0;
    for (let i = 0; i < raw.length; i++) {
      hash = ((hash << 5) - hash) + raw.charCodeAt(i);
      hash |= 0;
    }
    return `v2-${Math.abs(hash).toString(36)}`;
  } catch {
    return 'v2-def';
  }
}

/**
 * Computes deep structural design fingerprint for duplicate detection & diversity curation
 */
export function computeTemplateFingerprint(
  canvasW: number,
  canvasH: number,
  elements: CanvasElement[],
  gradient: string = ''
): TemplateFingerprint {
  const ratio = canvasW / canvasH;

  let aspectRatioTag: TemplateFingerprint['aspectRatioTag'] = '16:9';
  if (ratio > 2.0) aspectRatioTag = 'banner';
  else if (Math.abs(ratio - 16 / 9) < 0.1) aspectRatioTag = '16:9';
  else if (Math.abs(ratio - 1) < 0.1) aspectRatioTag = '1:1';
  else if (canvasH > canvasW * 1.6) aspectRatioTag = '9:16';
  else if (canvasH > canvasW) aspectRatioTag = 'A4';

  const images = elements.filter(e => e.type === 'image' && e.src);
  const imageCount = images.length;
  const heroImage = images.find(img => img.width >= canvasW * 0.35 && img.height >= canvasH * 0.35);
  const hasHeroImage = Boolean(heroImage);

  let heroPosition: TemplateFingerprint['heroPosition'] = 'none';
  if (heroImage) {
    if (heroImage.width >= canvasW * 0.8 && heroImage.height >= canvasH * 0.8) {
      heroPosition = 'full';
    } else if (heroImage.x <= canvasW * 0.2) {
      heroPosition = 'left';
    } else if (heroImage.x >= canvasW * 0.45) {
      heroPosition = 'right';
    } else {
      heroPosition = 'center';
    }
  }

  // Extract Typography System
  const textEls = elements.filter(e => e.type === 'text');
  const fonts = textEls.map(e => e.fontFamily || 'Inter');
  const primaryFont = fonts[0] || 'Inter';
  const secondaryFont = fonts.find(f => f !== primaryFont) || primaryFont;

  // Determine Palette
  const bgStr = (gradient || '').toLowerCase();
  const fills = elements.map(e => (e.fill || '').toLowerCase()).join(' ');
  let palette: TemplateFingerprint['palette'] = 'dark';
  if (bgStr.includes('#fff') || bgStr.includes('white') || (fills.includes('#ffffff') && !bgStr.includes('#0'))) {
    palette = 'light';
  } else if (bgStr.includes('#ec4899') || bgStr.includes('#f43f5e') || bgStr.includes('pink') || bgStr.includes('cyan')) {
    palette = 'vibrant';
  } else if (bgStr.includes('#d97706') || bgStr.includes('#eab308') || bgStr.includes('gold')) {
    palette = 'luxury-gold';
  } else if (bgStr.includes('#1c1917') || bgStr.includes('#292524')) {
    palette = 'warm-neutral';
  } else if (bgStr === '#000000' || bgStr === '#ffffff') {
    palette = 'monochrome';
  }

  // Determine Structural Layout Family
  let layoutFamily: TemplateFingerprint['layoutFamily'] = 'split-editorial';
  const rectCards = elements.filter(e => e.type === 'rect' && e.width < canvasW * 0.7 && e.height > 80);

  if (heroPosition === 'full' || (hasHeroImage && images.some(img => img.width >= canvasW * 0.75))) {
    layoutFamily = 'full-bleed';
  } else if (imageCount === 0 && textEls.length > 0) {
    layoutFamily = 'typography-only';
  } else if (rectCards.length >= 3) {
    layoutFamily = 'modular-cards';
  } else if (elements.some(e => e.type === 'text' && (e.fontSize || 0) >= 64 && /^\d+/.test(e.text || ''))) {
    layoutFamily = 'large-stat';
  } else if (imageCount >= 3) {
    layoutFamily = 'collage';
  } else if (elements.some(e => e.type === 'line' || /phase|step|timeline/i.test(e.text || ''))) {
    layoutFamily = 'timeline';
  } else if (elements.length < 7 && !hasHeroImage) {
    layoutFamily = 'centered-minimal';
  } else if (hasHeroImage && (heroPosition === 'left' || heroPosition === 'right')) {
    layoutFamily = 'two-column';
  } else if (elements.length >= 14) {
    layoutFamily = 'asymmetric-grid';
  }

  const structureHash = `${layoutFamily}:${heroPosition}:${aspectRatioTag}:${elements.length}`;

  return {
    layoutFamily,
    palette,
    hasHeroImage,
    heroPosition,
    imageCount,
    elementCount: elements.length,
    aspectRatioTag,
    primaryFont,
    secondaryFont,
    structureHash
  };
}

/**
 * Structural Similarity Scoring between two templates
 * Returns a score between 0.0 (completely distinct) and 1.0 (exact structural duplicate)
 */
export function calculateStructuralSimilarity(a: CanonicalTemplate, b: CanonicalTemplate): number {
  if (!a || !b) return 0;
  if (a.id === b.id) return 1.0;

  const fpA = a.fingerprint;
  const fpB = b.fingerprint;

  let score = 0;

  // 1. Layout Family (30% weight)
  if (fpA.layoutFamily === fpB.layoutFamily) {
    score += 0.30;
  }

  // 2. Hero Image Position & Treatment (20% weight)
  if (fpA.hasHeroImage === fpB.hasHeroImage) {
    if (fpA.heroPosition === fpB.heroPosition && fpA.heroPosition !== 'none') {
      score += 0.20;
    } else {
      score += 0.08;
    }
  }

  // 3. Aspect Ratio & Dimensions (15% weight)
  if (fpA.aspectRatioTag === fpB.aspectRatioTag) {
    score += 0.15;
  }

  // 4. Element Counts & Complexity (15% weight)
  const countDiff = Math.abs(fpA.elementCount - fpB.elementCount);
  if (countDiff <= 1) {
    score += 0.15;
  } else if (countDiff <= 3) {
    score += 0.08;
  }

  // 5. Typography System Pairing (10% weight)
  if (fpA.primaryFont === fpB.primaryFont && fpA.secondaryFont === fpB.secondaryFont) {
    score += 0.10;
  } else if (fpA.primaryFont === fpB.primaryFont) {
    score += 0.05;
  }

  // 6. Dominant Color Palette (10% weight)
  if (fpA.palette === fpB.palette) {
    score += 0.10;
  }

  return Math.min(1.0, score);
}

/**
 * Detects duplicate / near-duplicate groups in template library
 */
export function detectDuplicatesInLibrary(templates: CanonicalTemplate[], threshold: number = 0.75): CanonicalTemplate[][] {
  const groups: CanonicalTemplate[][] = [];
  const visited = new Set<string | number>();

  for (let i = 0; i < templates.length; i++) {
    const tA = templates[i];
    if (visited.has(tA.id)) continue;

    const currentGroup: CanonicalTemplate[] = [tA];
    visited.add(tA.id);

    for (let j = i + 1; j < templates.length; j++) {
      const tB = templates[j];
      if (visited.has(tB.id)) continue;

      const similarity = calculateStructuralSimilarity(tA, tB);
      if (similarity >= threshold) {
        currentGroup.push(tB);
        visited.add(tB.id);
      }
    }

    if (currentGroup.length > 1) {
      groups.push(currentGroup);
    }
  }

  return groups;
}

// In-memory cache for normalized canonical templates to prevent redundant fingerprint and cloning operations
const normalizedTemplateCache = new Map<string | number, CanonicalTemplate>();

let cachedCanonicalTemplates: CanonicalTemplate[] | null = null;
let canonicalTemplatesPromise: Promise<CanonicalTemplate[]> | null = null;

/**
 * Asynchronously loads the 300-template canonical library on demand.
 * Prevents bundling the entire 10.6MB canonicalTemplates dataset into the initial bundle.
 */
export async function loadAllCanonicalTemplates(): Promise<CanonicalTemplate[]> {
  if (cachedCanonicalTemplates) return cachedCanonicalTemplates;
  if (!canonicalTemplatesPromise) {
    canonicalTemplatesPromise = import('./canonicalTemplates').then((mod) => {
      const raw = (mod as any).CANONICAL_FALLBACK_TEMPLATES || (mod as any).CANONICAL_TEMPLATES || [];
      const normalized = raw.map((t: any) => normalizeCanonicalTemplate(t));
      cachedCanonicalTemplates = normalized;
      return normalized;
    });
  }
  return canonicalTemplatesPromise;
}

// Single Source of Truth Normalizer
export function normalizeCanonicalTemplate(t: any): CanonicalTemplate {
  if (!t) throw new Error('Cannot normalize null template');

  const cacheKey = t.id !== undefined ? t.id : (t.name || null);
  if (cacheKey && normalizedTemplateCache.has(cacheKey)) {
    return normalizedTemplateCache.get(cacheKey)!;
  }

  // 1. Resolve canonical dimensions
  let cW = t.canvasWidth || t.dimensions?.width;
  let cH = t.canvasHeight || t.dimensions?.height;

  // Auto-detect coordinate space from elements if background element is explicit
  const rawElements = Array.isArray(t.elements)
    ? t.elements
    : (Array.isArray(t.slides?.[0]) ? t.slides[0] : (Array.isArray(t.slides?.[0]?.elements) ? t.slides[0].elements : []));

  if (rawElements.length > 0) {
    const bg = rawElements.find((e: any) => (e.id && String(e.id).includes('bg')) || (e.type === 'rect' && e.x === 0 && e.y === 0 && e.width >= 300));
    if (bg && bg.width && bg.height) {
      cW = bg.width;
      cH = bg.height;
    }
  }

  if (!cW || !cH) {
    if (t.size) {
      const parts = String(t.size).replace(/x/gi, '×').split('×').map(Number);
      if (parts.length === 2 && !isNaN(parts[0]) && !isNaN(parts[1]) && parts[0] > 0 && parts[1] > 0) {
        cW = parts[0];
        cH = parts[1];
      }
    }
  }

  if (!cW || !cH) {
    const cat = (t.category || t.type || '').toLowerCase();
    if (cat.includes('card')) {
      cW = 1050; cH = 600;
    } else if (cat.includes('present') || cat.includes('pitch') || cat.includes('deck')) {
      cW = 1920; cH = 1080;
    } else if (cat.includes('resume') || cat.includes('report') || cat.includes('flyer') || cat.includes('business')) {
      cW = 1200; cH = 1697;
    } else if (cat.includes('poster')) {
      cW = 1080; cH = 1528;
    } else if (cat.includes('invite')) {
      cW = 1400; cH = 2000;
    } else if (cat.includes('cover')) {
      cW = 820; cH = 312;
    } else if (cat.includes('banner')) {
      cW = 2560; cH = 1440;
    } else {
      cW = 1080; cH = 1080;
    }
  }

  // 2. Resolve slides array
  let normalizedSlides: CanvasElement[][] = [];

  if (Array.isArray(t.slides) && t.slides.length > 0) {
    normalizedSlides = t.slides.map((s: any) => {
      const els = Array.isArray(s) ? s : (Array.isArray(s?.elements) ? s.elements : []);
      return els.map((el: any) => ({ ...el }));
    });
  } else if (Array.isArray(t.pages) && t.pages.length > 0) {
    normalizedSlides = t.pages.map((p: any) => {
      const els = Array.isArray(p) ? p : (Array.isArray(p?.elements) ? p.elements : []);
      return els.map((el: any) => ({ ...el }));
    });
  } else if (Array.isArray(t.elements) && t.elements.length > 0) {
    normalizedSlides = [t.elements.map((el: any) => ({ ...el }))];
  } else {
    normalizedSlides = [[]];
  }

  // 3. SINGLE SOURCE OF TRUTH: Page 1 is strictly slides[0]
  const page1Elements = normalizedSlides[0] || [];

  const orientation: 'landscape' | 'portrait' | 'square' =
    cW > cH ? 'landscape' : (cH > cW ? 'portrait' : 'square');

  const gradient = t.gradient || (orientation === 'landscape' ? '#0b0f19' : '#0f172a');
  const fingerprint = computeTemplateFingerprint(cW, cH, page1Elements, gradient);
  const contentHash = computeTemplateHash({ ...t, slides: normalizedSlides });

  const result: CanonicalTemplate = {
    id: t.id,
    name: t.name || t.title || 'Untitled Template',
    title: t.title || t.name || 'Untitled Template',
    description: t.description || '',
    category: t.category || 'Presentation',
    subcategory: t.subcategory || '',
    size: `${cW}×${cH}`,
    canvasWidth: cW,
    canvasHeight: cH,
    orientation,
    gradient,
    slides: normalizedSlides,
    elements: page1Elements, // Strictly identical to slides[0]
    tags: Array.isArray(t.tags) ? t.tags : [],
    premium: Boolean(t.premium),
    likes: t.likes || 0,
    views: t.views || 0,
    version: '2.0.0',
    contentHash,
    fingerprint
  };

  if (cacheKey) {
    normalizedTemplateCache.set(cacheKey, result);
  }

  return result;
}

/**
 * Diversity curation algorithm for homepage rails:
 * Hard rule: Adjacent templates in any rail must NOT have the same layoutFamily or the same palette.
 */
export function curateDiverseRail(templates: CanonicalTemplate[], targetCount: number = 8): CanonicalTemplate[] {
  if (templates.length <= targetCount) return templates;

  const selected: CanonicalTemplate[] = [];
  const pool = [...templates];

  // Helper to calculate diversity penalty
  const getPenalty = (candidate: CanonicalTemplate, current: CanonicalTemplate[]): number => {
    let penalty = 0;
    const prev = current[current.length - 1];

    if (prev) {
      // Direct adjacency penalty is highest
      if (candidate.fingerprint.layoutFamily === prev.fingerprint.layoutFamily) penalty += 10;
      if (candidate.fingerprint.palette === prev.fingerprint.palette) penalty += 8;
      if (candidate.category === prev.category) penalty += 3;
      if (candidate.fingerprint.heroPosition === prev.fingerprint.heroPosition && candidate.fingerprint.heroPosition !== 'none') penalty += 5;
    }

    // Overall rail variety penalty
    for (const s of current) {
      if (candidate.fingerprint.layoutFamily === s.fingerprint.layoutFamily) penalty += 2;
      if (candidate.fingerprint.palette === s.fingerprint.palette) penalty += 1.5;
      if (candidate.fingerprint.structureHash === s.fingerprint.structureHash) penalty += 6;
    }

    return penalty;
  };

  while (selected.length < targetCount && pool.length > 0) {
    if (selected.length === 0) {
      pool.sort((a, b) => ((b.likes || 0) + (b.views || 0)) - ((a.likes || 0) + (a.views || 0)));
      selected.push(pool.shift()!);
    } else {
      let bestIdx = 0;
      let lowestPenalty = Infinity;

      for (let i = 0; i < pool.length; i++) {
        const p = getPenalty(pool[i], selected);
        if (p < lowestPenalty) {
          lowestPenalty = p;
          bestIdx = i;
        }
      }

      selected.push(pool.splice(bestIdx, 1)[0]);
    }
  }

  return selected;
}

// Global Image Preloading and Cache for High-Fidelity Rendering
export const globalImageCache = new Map<string, HTMLImageElement>();
const failedImages = new Set<string>();
const loadingImagePromises = new Map<string, Promise<HTMLImageElement | null>>();

export function resolveElementImageSrc(el: any): string {
  if (!el) return '';
  const raw = el.src || el.url || el.imageUrl || el.assetUrl || el.href || el.image || el.previewUrl || el.path || el.data || (el.asset && (typeof el.asset === 'string' ? el.asset : el.asset.url || el.asset.src));
  if (typeof raw === 'string' && raw.trim()) return raw.trim();
  return '';
}

export function getPreloadedImage(src: string): HTMLImageElement | null {
  if (!src || failedImages.has(src)) return null;
  const cached = globalImageCache.get(src);
  if (cached && cached.naturalWidth > 0) return cached;
  return null;
}

export function isImageFailed(src: string): boolean {
  return failedImages.has(src);
}

export function markFailedImage(src: string): void {
  if (src) failedImages.add(src);
}

export function preloadTemplateImage(src: string, context?: { templateId?: string | number; pageId?: string | number; elementId?: string }): Promise<HTMLImageElement | null> {
  if (!src || failedImages.has(src)) return Promise.resolve(null);
  const cached = globalImageCache.get(src);
  if (cached && cached.naturalWidth > 0) return Promise.resolve(cached);

  const existing = loadingImagePromises.get(src);
  if (existing) return existing;

  const promise = new Promise<HTMLImageElement | null>((resolve) => {
    const img = new window.Image();
    img.crossOrigin = 'anonymous';

    img.onload = () => {
      if (img.naturalWidth > 0) {
        globalImageCache.set(src, img);
        resolve(img);
      } else {
        resolve(null);
      }
    };

    img.onerror = () => {
      console.error(`[ImageLoadError] Failed to load image asset | Template: ${context?.templateId || 'N/A'}, Page: ${context?.pageId || 'N/A'}, Element: ${context?.elementId || 'N/A'}, URL: ${src}`);
      failedImages.add(src);
      resolve(null);
    };

    img.src = src;
    if (img.complete && img.naturalWidth > 0) {
      globalImageCache.set(src, img);
      resolve(img);
    }
  }).finally(() => {
    loadingImagePromises.delete(src);
  });

  loadingImagePromises.set(src, promise);
  return promise;
}

export function preloadTemplateAssets(template: any, context?: { templateId?: string | number; pageId?: string | number }): Promise<any> {
  const elements = template?.elements || (template?.slides && template.slides[0]) || [];
  const images = elements.filter((el: any) => el && (el.type === 'image' || Boolean(resolveElementImageSrc(el))));
  return Promise.all(images.map((img: any) => {
    const src = resolveElementImageSrc(img);
    return src ? preloadTemplateImage(src, { ...context, elementId: img.id }) : Promise.resolve(null);
  }));
}



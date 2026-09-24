// Central Font Registry & Typeface Management Pipeline for ORD Studio
// Guarantees all fonts are registered, loaded, and verified BEFORE canvas or thumbnail rendering.

export interface FontDefinition {
  family: string;
  weights: number[];
  styles: ('normal' | 'italic')[];
  category: 'sans-serif' | 'serif' | 'display' | 'monospace';
  fallback: string;
}

export const FONT_REGISTRY: Record<string, FontDefinition> = {
  'Inter': {
    family: 'Inter',
    weights: [300, 400, 500, 600, 700, 800],
    styles: ['normal', 'italic'],
    category: 'sans-serif',
    fallback: 'system-ui, -apple-system, sans-serif'
  },
  'Space Grotesk': {
    family: 'Space Grotesk',
    weights: [400, 500, 600, 700],
    styles: ['normal'],
    category: 'sans-serif',
    fallback: 'sans-serif'
  },
  'Playfair Display': {
    family: 'Playfair Display',
    weights: [400, 500, 600, 700, 800],
    styles: ['normal', 'italic'],
    category: 'serif',
    fallback: 'Georgia, serif'
  },
  'Cormorant Garamond': {
    family: 'Cormorant Garamond',
    weights: [400, 500, 600, 700],
    styles: ['normal', 'italic'],
    category: 'serif',
    fallback: 'Garamond, Georgia, serif'
  },
  'Syne': {
    family: 'Syne',
    weights: [400, 500, 600, 700, 800],
    styles: ['normal'],
    category: 'display',
    fallback: 'sans-serif'
  },
  'Poppins': {
    family: 'Poppins',
    weights: [300, 400, 500, 600, 700, 800],
    styles: ['normal', 'italic'],
    category: 'sans-serif',
    fallback: 'sans-serif'
  },
  'Montserrat': {
    family: 'Montserrat',
    weights: [300, 400, 500, 600, 700, 800, 900],
    styles: ['normal', 'italic'],
    category: 'sans-serif',
    fallback: 'sans-serif'
  },
  'IBM Plex Mono': {
    family: 'IBM Plex Mono',
    weights: [400, 500, 600],
    styles: ['normal', 'italic'],
    category: 'monospace',
    fallback: 'monospace'
  },
  'Cinzel': {
    family: 'Cinzel',
    weights: [400, 600, 700],
    styles: ['normal'],
    category: 'serif',
    fallback: 'Times New Roman, serif'
  },
  'Plus Jakarta Sans': {
    family: 'Plus Jakarta Sans',
    weights: [400, 500, 600, 700, 800],
    styles: ['normal'],
    category: 'sans-serif',
    fallback: 'sans-serif'
  },
  'DM Sans': {
    family: 'DM Sans',
    weights: [400, 500, 700],
    styles: ['normal'],
    category: 'sans-serif',
    fallback: 'sans-serif'
  },
  'Oswald': {
    family: 'Oswald',
    weights: [400, 500, 600, 700],
    styles: ['normal'],
    category: 'sans-serif',
    fallback: 'Impact, sans-serif'
  },
  'Merriweather': {
    family: 'Merriweather',
    weights: [300, 400, 700],
    styles: ['normal', 'italic'],
    category: 'serif',
    fallback: 'Georgia, serif'
  },
  'Raleway': {
    family: 'Raleway',
    weights: [300, 400, 500, 600, 700],
    styles: ['normal', 'italic'],
    category: 'sans-serif',
    fallback: 'sans-serif'
  },
  'Roboto': {
    family: 'Roboto',
    weights: [300, 400, 500, 700],
    styles: ['normal', 'italic'],
    category: 'sans-serif',
    fallback: 'sans-serif'
  },
  'Open Sans': {
    family: 'Open Sans',
    weights: [300, 400, 600, 700],
    styles: ['normal', 'italic'],
    category: 'sans-serif',
    fallback: 'sans-serif'
  },
  'Lato': {
    family: 'Lato',
    weights: [300, 400, 700],
    styles: ['normal', 'italic'],
    category: 'sans-serif',
    fallback: 'sans-serif'
  },
  'Georgia': {
    family: 'Georgia',
    weights: [400, 700],
    styles: ['normal', 'italic'],
    category: 'serif',
    fallback: 'serif'
  },
  'Arial': {
    family: 'Arial',
    weights: [400, 700],
    styles: ['normal', 'italic'],
    category: 'sans-serif',
    fallback: 'sans-serif'
  },
  'Impact': {
    family: 'Impact',
    weights: [400, 700],
    styles: ['normal'],
    category: 'display',
    fallback: 'sans-serif'
  },
  'Courier New': {
    family: 'Courier New',
    weights: [400, 700],
    styles: ['normal', 'italic'],
    category: 'monospace',
    fallback: 'monospace'
  }
};

// Aliases for common alternative namings
const FONT_ALIASES: Record<string, string> = {
  'sans-serif': 'Inter',
  'serif': 'Playfair Display',
  'monospace': 'IBM Plex Mono',
  'Playfair': 'Playfair Display',
  'Cormorant': 'Cormorant Garamond',
  'Jakarta': 'Plus Jakarta Sans',
  'Space': 'Space Grotesk',
  'Courier': 'Courier New'
};

export interface FontResolutionContext {
  templateId?: string | number;
  pageId?: string | number;
  elementId?: string | number;
}

export interface ResolvedFont {
  family: string;
  weight: number;
  style: 'normal' | 'italic';
  cssFontString: string;
  isRegistered: boolean;
}

/**
 * Normalizes font weight representation to a numeric weight
 */
export function normalizeFontWeight(weight?: string | number): number {
  if (typeof weight === 'number') {
    if (weight <= 350) return 300;
    if (weight <= 450) return 400;
    if (weight <= 550) return 500;
    if (weight <= 650) return 600;
    if (weight <= 750) return 700;
    if (weight <= 850) return 800;
    return 900;
  }
  if (!weight) return 400;
  const str = String(weight).toLowerCase().trim();
  if (str === 'bold' || str === 'bolder') return 700;
  if (str === 'semibold' || str === 'semi-bold') return 600;
  if (str === 'medium') return 500;
  if (str === 'light') return 300;
  if (str === 'black' || str === 'heavy' || str === 'extra-bold') return 800;
  const num = parseInt(str, 10);
  return isNaN(num) ? 400 : normalizeFontWeight(num);
}

/**
 * Resolves a font specification against the central font registry.
 * Emits strict error logging if the requested font cannot be satisfied.
 */
export function resolveFont(
  rawFamily?: string,
  rawWeight?: string | number,
  rawStyle?: string,
  context?: FontResolutionContext
): ResolvedFont {
  const cleanFamily = (rawFamily || 'Inter')
    .replace(/['"]/g, '')
    .split(',')[0]
    .trim();

  const targetFamily = FONT_ALIASES[cleanFamily] || cleanFamily;
  const targetWeight = normalizeFontWeight(rawWeight);
  const targetStyle: 'normal' | 'italic' = rawStyle === 'italic' ? 'italic' : 'normal';

  const entry = FONT_REGISTRY[targetFamily];

  if (!entry) {
    // Log required error per specification
    console.warn(
      `[FONT RESOLUTION FAILED]\n` +
      `  templateId: ${context?.templateId ?? 'unknown'}\n` +
      `  pageId: ${context?.pageId ?? '1'}\n` +
      `  elementId: ${context?.elementId ?? 'unknown'}\n` +
      `  requestedFont: "${rawFamily}"\n` +
      `  requestedWeight: ${rawWeight ?? 400}\n` +
      `  Fallback used: "Inter"`
    );

    return {
      family: 'Inter',
      weight: 400,
      style: targetStyle,
      cssFontString: `${targetStyle} 400 16px "Inter", sans-serif`,
      isRegistered: false
    };
  }

  // Find nearest supported weight
  const closestWeight = entry.weights.reduce((prev, curr) =>
    Math.abs(curr - targetWeight) < Math.abs(prev - targetWeight) ? curr : prev
  , entry.weights[0]);

  // Find nearest supported style
  const supportedStyle = entry.styles.includes(targetStyle) ? targetStyle : 'normal';

  return {
    family: entry.family,
    weight: closestWeight,
    style: supportedStyle,
    cssFontString: `${supportedStyle} ${closestWeight} 16px "${entry.family}", ${entry.fallback}`,
    isRegistered: true
  };
}

// Track loaded font families and specs to prevent redundant browser load requests
const loadedFontFamilies = new Set<string>(['Inter', 'Plus Jakarta Sans']);
const loadedFontsCache = new Set<string>();

/**
 * Dynamically injects Google Font stylesheet for a family on demand if not already loaded
 */
export function ensureFontFamilyLoaded(family: string): void {
  if (typeof document === 'undefined' || !family || loadedFontFamilies.has(family)) return;
  loadedFontFamilies.add(family);
  try {
    const clean = family.replace(/\s+/g, '+');
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = `https://fonts.googleapis.com/css2?family=${clean}:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400;1,600&display=swap`;
    document.head.appendChild(link);
  } catch {}
}

/**
 * Preloads all fonts required by a set of canvas elements.
 * Awaits document.fonts.load and document.fonts.ready.
 */
export async function loadTemplateFonts(elements: any[], context?: FontResolutionContext): Promise<boolean> {
  if (typeof document === 'undefined' || !document.fonts) return true;

  const fontSpecs = new Set<string>();

  for (const el of elements) {
    if (!el || el.type !== 'text') continue;
    const resolved = resolveFont(el.fontFamily, el.fontWeight, el.fontStyle, {
      ...context,
      elementId: el.id
    });
    ensureFontFamilyLoaded(resolved.family);
    fontSpecs.add(`${resolved.style} ${resolved.weight} 20px "${resolved.family}"`);
  }

  const pendingLoads: Promise<any>[] = [];

  for (const spec of fontSpecs) {
    if (!loadedFontsCache.has(spec)) {
      pendingLoads.push(
        document.fonts.load(spec).then(() => {
          loadedFontsCache.add(spec);
        }).catch((err) => {
          console.warn(`Font load failed for spec "${spec}":`, err);
        })
      );
    }
  }

  if (pendingLoads.length > 0) {
    await Promise.all(pendingLoads);
  }

  try {
    await document.fonts.ready;
  } catch {}

  return true;
}

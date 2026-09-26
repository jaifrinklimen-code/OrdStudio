/**
 * Canonical Design & Coordinate Normalizer for ORD Studio
 * 
 * Ensures saved designs, AI Redesigns, and template payloads use consistent,
 * canonical canvas coordinates across the entire lifecycle:
 * saved design → thumbnail renderer → Continue Working card → Canvas Editor
 * 
 * Specifically addresses legacy preview-scaled coordinates (e.g. 780x439, 397x560, 600x848)
 * that were saved inside declared 1920x1080 or 1200x1697 canvases.
 * 
 * CRITICAL FIX:
 * 1. Background elements are EXCLUDED from foreground bounding box calculations.
 * 2. Physical foreground coordinates (maxX, maxY) are the ground truth for legacy detection.
 *    A premature coordinateVersion flag must NEVER block scaling if the foreground elements
 *    are still physically confined to the legacy 780x439 preview coordinate frame!
 */

export interface NormalizedDesignResult {
  canvasWidth: number;
  canvasHeight: number;
  isLandscape: boolean;
  elements: any[];
  slides: any[][];
  needsScale: boolean;
  scaleX: number;
  scaleY: number;
  coordinateVersion: number;
  foregroundBounds: {
    minX: number;
    minY: number;
    maxX: number;
    maxY: number;
    width: number;
    height: number;
  };
}

/**
 * Identify if an element is a canvas background or backdrop layer.
 * Background elements must NOT be used to measure foreground content scale.
 */
export function isBackgroundElement(el: any, canvasW: number, canvasH: number): boolean {
  if (!el) return false;
  if (el.isBackground === true || el.background === true) return true;
  
  const idStr = String(el.id || '').toLowerCase();
  if (
    idStr === 'bg' ||
    idStr === 'bg-0' ||
    idStr.startsWith('bg-') ||
    idStr.includes('-bg') ||
    idStr.includes('background') ||
    idStr === 'slide-bg' ||
    idStr === 'page-bg' ||
    idStr === 'canvas-bg'
  ) {
    return true;
  }

  // Full-bleed rectangle starting at (0,0) and spanning at least 85% of canvas dimensions
  const ex = Number(el.x) || 0;
  const ey = Number(el.y) || 0;
  const ew = Number(el.width) || 0;
  const eh = Number(el.height) || 0;

  if (
    el.type === 'rect' &&
    ex <= 2 &&
    ey <= 2 &&
    ew >= canvasW * 0.85 &&
    eh >= canvasH * 0.85
  ) {
    return true;
  }

  // Locked full-width backdrop
  if (
    el.locked === true &&
    ex === 0 &&
    ey === 0 &&
    ew >= canvasW * 0.9 &&
    eh >= canvasH * 0.9
  ) {
    return true;
  }

  return false;
}

/**
 * Calculate the bounding box of foreground content only (excluding background layers).
 */
export function calculateForegroundBounds(elements: any[], canvasW: number, canvasH: number) {
  let minX = Infinity;
  let minY = Infinity;
  let maxX = -Infinity;
  let maxY = -Infinity;
  let count = 0;

  for (const el of elements) {
    if (!el || el.visible === false) continue;
    if (isBackgroundElement(el, canvasW, canvasH)) continue;

    const ex = Number(el.x) || 0;
    const ey = Number(el.y) || 0;
    const ew = Number(el.width) || 0;
    const eh = Number(el.height) || 0;

    if (ex < minX) minX = ex;
    if (ey < minY) minY = ey;
    if (ex + ew > maxX) maxX = ex + ew;
    if (ey + eh > maxY) maxY = ey + eh;
    count++;
  }

  if (count === 0 || minX === Infinity) {
    return {
      hasForeground: false,
      count: 0,
      minX: 0,
      minY: 0,
      maxX: 0,
      maxY: 0,
      width: 0,
      height: 0
    };
  }

  return {
    hasForeground: true,
    count,
    minX,
    minY,
    maxX,
    maxY,
    width: maxX - minX,
    height: maxY - minY
  };
}

/**
 * Dedicated detector: Identifies legacy AI Redesign records whose foreground
 * elements were authored in the legacy 780x439 (or 397x560) preview coordinate frame.
 */
export function isLegacyAIRedesign(project: any): boolean {
  if (!project) return false;
  const norm = normalizeCanonicalDesign(project);
  return norm.needsScale;
}

export function normalizeCanonicalDesign(design: any): NormalizedDesignResult {
  if (!design) {
    return {
      canvasWidth: 1920,
      canvasHeight: 1080,
      isLandscape: true,
      elements: [],
      slides: [[]],
      needsScale: false,
      scaleX: 1,
      scaleY: 1,
      coordinateVersion: 2,
      foregroundBounds: { minX: 0, minY: 0, maxX: 0, maxY: 0, width: 0, height: 0 }
    };
  }

  // 1. Resolve slides and raw elements
  let slides: any[][] = [];
  if (Array.isArray(design.slides) && design.slides.length > 0) {
    slides = design.slides.map((s: any) => Array.isArray(s) ? s : (Array.isArray(s?.elements) ? s.elements : []));
  } else if (Array.isArray(design.pages) && design.pages.length > 0) {
    slides = design.pages.map((p: any) => Array.isArray(p) ? p : (Array.isArray(p?.elements) ? p.elements : []));
  } else if (Array.isArray(design.elements) && design.elements.length > 0) {
    slides = [design.elements];
  }

  const rawEls: any[] = Array.isArray(design.elements) && design.elements.length > 0
    ? design.elements
    : (slides[0] || []);

  // 2. Resolve canonical target dimensions
  let declaredW = Number(design.canvasWidth) || (design.size ? parseInt(String(design.size).split(/×|x/)[0], 10) : 0);
  let declaredH = Number(design.canvasHeight) || (design.size ? parseInt(String(design.size).split(/×|x/)[1], 10) : 0);

  let targetW = 1920;
  let targetH = 1080;
  let isLandscape = true;

  if (declaredW > 0 && declaredH > 0) {
    if (declaredW >= declaredH) {
      targetW = declaredW >= 1200 ? 1920 : (declaredW === 1050 ? 1050 : declaredW);
      targetH = declaredW >= 1200 ? 1080 : (declaredH === 600 ? 600 : declaredH);
      isLandscape = true;
    } else {
      targetW = declaredW === 1080 ? 1080 : 1200;
      targetH = declaredH === 1528 ? 1528 : 1697;
      isLandscape = false;
    }
  } else {
    const designName = String(design.name || '').toLowerCase();
    const designCat = String(design.category || design.type || '').toLowerCase();
    const isPortrait = designCat.includes('letter') || designCat.includes('resume') || designCat.includes('poster') || designCat.includes('flyer') || designName.includes('poster');
    if (isPortrait) {
      targetW = 1200;
      targetH = 1697;
      isLandscape = false;
    } else if (designCat.includes('card') || designName.includes('card')) {
      targetW = 1050;
      targetH = 600;
      isLandscape = true;
    } else {
      targetW = 1920;
      targetH = 1080;
      isLandscape = true;
    }
  }

  // 3. Calculate FOREGROUND BOUNDS (excluding background)
  const fg = calculateForegroundBounds(rawEls, targetW, targetH);

  // If there are no foreground elements, return canvas as-is
  if (!fg.hasForeground) {
    return {
      canvasWidth: targetW,
      canvasHeight: targetH,
      isLandscape: targetW >= targetH,
      elements: rawEls,
      slides: slides.length > 0 ? slides : [rawEls],
      needsScale: false,
      scaleX: 1,
      scaleY: 1,
      coordinateVersion: 2,
      foregroundBounds: { minX: 0, minY: 0, maxX: 0, maxY: 0, width: 0, height: 0 }
    };
  }

  // 4. Detect legacy preview coordinate system
  // Known legacy preview systems:
  // - Landscape 16:9: 780 × 439 space (authored in AssetUploader or templates_pres_poster with maxW=780, maxH=560)
  //   Foreground maxX is <= 820 and maxY is <= 480 while target canvas is 1920×1080.
  // - Portrait A4: 397 × 560 or 600 × 848 space inside 1200×1697.
  // - Portrait A3: 540 × 764 space inside 1080×1528.
  // - Business card: 525 × 300 space inside 1050×600.

  let isLegacySubScale = false;
  let sourceW = targetW;
  let sourceH = targetH;

  if (targetW >= 1200 && targetW > targetH) {
    // Landscape 1920x1080: If all foreground elements are confined to <= 820x480,
    // they are physically in the legacy 780x439 preview coordinate system!
    if (fg.maxX <= 820 && fg.maxY <= 480) {
      isLegacySubScale = true;
      sourceW = 780;
      sourceH = 439;
    }
  } else if (targetH > targetW) {
    // Portrait (1200x1697 or 1080x1528)
    if (fg.maxX <= 450 && fg.maxY <= 620) {
      // 397x560 space
      isLegacySubScale = true;
      sourceW = 397;
      sourceH = 560;
    } else if (fg.maxX <= 650 && fg.maxY <= 920 && targetW >= 1000) {
      // 600x848 space (or half-scale 540x764)
      isLegacySubScale = true;
      sourceW = targetW === 1080 ? 540 : 600;
      sourceH = targetH === 1528 ? 764 : 848.5;
    }
  } else if (targetW === 1050 && targetH === 600) {
    // Business card
    if (fg.maxX <= 550 && fg.maxY <= 320) {
      isLegacySubScale = true;
      sourceW = 525;
      sourceH = 300;
    }
  }

  // If not sub-scale, elements are already canonical.
  if (!isLegacySubScale) {
    return {
      canvasWidth: targetW,
      canvasHeight: targetH,
      isLandscape: targetW >= targetH,
      elements: rawEls.map((el: any) => ({ ...el, coordinateVersion: 2 })),
      slides: slides.map((s: any[]) => s.map((el: any) => ({ ...el, coordinateVersion: 2 }))),
      needsScale: false,
      scaleX: 1,
      scaleY: 1,
      coordinateVersion: 2,
      foregroundBounds: {
        minX: fg.minX,
        minY: fg.minY,
        maxX: fg.maxX,
        maxY: fg.maxY,
        width: fg.width,
        height: fg.height
      }
    };
  }

  // 5. Calculate exact coordinate scale mapping
  const scaleX = targetW / sourceW;
  const scaleY = targetH / sourceH;
  const fontScale = Math.min(scaleX, scaleY);

  const scaleElement = (el: any) => {
    if (!el) return el;
    const scaled = { ...el, coordinateVersion: 2 };

    if (isBackgroundElement(el, targetW, targetH)) {
      // Canonical background: Keep at full canvas dimensions
      scaled.x = 0;
      scaled.y = 0;
      scaled.width = targetW;
      scaled.height = targetH;
      return scaled;
    }

    scaled.x = Math.round((Number(el.x) || 0) * scaleX);
    scaled.y = Math.round((Number(el.y) || 0) * scaleY);
    scaled.width = Math.round((Number(el.width) || 0) * scaleX);
    scaled.height = Math.round((Number(el.height) || 0) * scaleY);

    if (typeof el.fontSize === 'number') {
      scaled.fontSize = Math.round(el.fontSize * fontScale);
    }
    if (typeof el.strokeWidth === 'number' && el.strokeWidth > 0) {
      scaled.strokeWidth = Math.max(1, Math.round(el.strokeWidth * fontScale));
    }
    if (typeof el.borderRadius === 'number' && el.borderRadius > 0) {
      scaled.borderRadius = Math.round(el.borderRadius * fontScale);
    }

    return scaled;
  };

  const normalizedElements = rawEls.map(scaleElement);
  const normalizedSlides = slides.map((slide: any[]) =>
    Array.isArray(slide) ? slide.map(scaleElement) : [scaleElement(slide)]
  );

  const scaledFg = calculateForegroundBounds(normalizedElements, targetW, targetH);

  return {
    canvasWidth: targetW,
    canvasHeight: targetH,
    isLandscape: targetW >= targetH,
    elements: normalizedElements,
    slides: normalizedSlides,
    needsScale: true,
    scaleX,
    scaleY,
    coordinateVersion: 2,
    foregroundBounds: {
      minX: scaledFg.minX,
      minY: scaledFg.minY,
      maxX: scaledFg.maxX,
      maxY: scaledFg.maxY,
      width: scaledFg.width,
      height: scaledFg.height
    }
  };
}

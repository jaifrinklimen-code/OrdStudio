/**
 * Canonical Design & Coordinate Normalizer for ORD Studio
 * 
 * Ensures saved designs, AI Redesigns, and template payloads use consistent,
 * canonical canvas coordinates across the entire lifecycle:
 * saved design → thumbnail renderer → Continue Working card → Canvas Editor
 * 
 * Specifically addresses legacy preview-scaled coordinates (e.g. 780x439, 440x440, 397x560)
 * that were saved inside declared 1920x1080 or 1200x1697 canvases, causing thumbnails to
 * appear as tiny blocks huddled in the top-left with large empty dark margins.
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
}

export function normalizeCanonicalDesign(design: any): NormalizedDesignResult {
  if (!design) {
    return {
      canvasWidth: 1920,
      canvasHeight: 1080,
      isLandscape: true,
      elements: [],
      slides: [],
      needsScale: false,
      scaleX: 1,
      scaleY: 1
    };
  }

  // 1. Resolve slides and elements
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

  if (!rawEls || rawEls.length === 0) {
    const declaredW = design.canvasWidth || (design.size ? parseInt(String(design.size).split(/×|x/)[0], 10) : 1920) || 1920;
    const declaredH = design.canvasHeight || (design.size ? parseInt(String(design.size).split(/×|x/)[1], 10) : 1080) || 1080;
    return {
      canvasWidth: declaredW,
      canvasHeight: declaredH,
      isLandscape: declaredW >= declaredH,
      elements: [],
      slides: slides.length > 0 ? slides : [[]],
      needsScale: false,
      scaleX: 1,
      scaleY: 1
    };
  }

  // 2. Detect background element and element extents
  const bgEl = rawEls.find((e: any) => 
    (e.id && String(e.id).includes('bg')) || 
    (e.type === 'rect' && e.x === 0 && e.y === 0 && e.width >= 200)
  );
  const bgW = bgEl && typeof bgEl.width === 'number' && bgEl.width > 0 ? bgEl.width : 0;
  const bgH = bgEl && typeof bgEl.height === 'number' && bgEl.height > 0 ? bgEl.height : 0;

  let maxElX = 0;
  let maxElY = 0;
  for (const el of rawEls) {
    if (!el || el.visible === false) continue;
    const ex = (Number(el.x) || 0) + (Number(el.width) || 0);
    const ey = (Number(el.y) || 0) + (Number(el.height) || 0);
    if (ex > maxElX) maxElX = ex;
    if (ey > maxElY) maxElY = ey;
  }

  const contentW = Math.max(bgW, maxElX);
  const contentH = Math.max(bgH, maxElY);

  // 3. Detect aspect ratio and orientation of the actual design content
  const isContentPortrait = contentH > contentW * 1.1;

  // 4. Resolve canonical target dimensions
  let declaredW = design.canvasWidth || (design.size ? parseInt(String(design.size).split(/×|x/)[0], 10) : 0);
  let declaredH = design.canvasHeight || (design.size ? parseInt(String(design.size).split(/×|x/)[1], 10) : 0);

  const designName = String(design.name || '').toLowerCase();
  const designCat = String(design.category || design.type || '').toLowerCase();

  let targetW = declaredW;
  let targetH = declaredH;

  if (isContentPortrait) {
    // If the actual content is portrait, the canvas MUST be portrait
    if (!targetW || !targetH || targetW >= targetH) {
      if (designCat.includes('poster') || designName.includes('poster')) {
        targetW = 1080;
        targetH = 1528;
      } else {
        // Consent letter, resume, flyer, report, document
        targetW = 1200;
        targetH = 1697;
      }
    }
  } else {
    // Landscape content
    if (!targetW || !targetH || targetH > targetW) {
      if (designCat.includes('card') || designName.includes('card')) {
        targetW = 1050;
        targetH = 600;
      } else {
        // Presentation, certificate, landscape deck
        targetW = 1920;
        targetH = 1080;
      }
    }
  }

  if (!targetW) targetW = 1920;
  if (!targetH) targetH = 1080;

  // 5. Determine if elements were created in a preview/sub-scale coordinate frame
  // Examples of legacy preview coordinates:
  // - 780x439 inside 1920x1080 (content occupies only ~40% width and height)
  // - 440x440 inside 1080x1080
  // - 397x560 inside 1080x1528 or 1200x1697
  // - 600x340 inside 1050x600
  const isLegacySubScale = (
    contentW > 0 && contentH > 0 &&
    (
      (contentW <= targetW * 0.72 && contentH <= targetH * 0.72) ||
      (contentW <= 820 && targetW >= 1000)
    )
  );

  if (!isLegacySubScale) {
    return {
      canvasWidth: targetW,
      canvasHeight: targetH,
      isLandscape: targetW >= targetH,
      elements: rawEls,
      slides: slides.length > 0 ? slides : [rawEls],
      needsScale: false,
      scaleX: 1,
      scaleY: 1
    };
  }

  // 6. Calculate exact coordinate scale mapping
  // Map preview coordinates to canonical canvas coordinates:
  // xCanvas = xPreview * (targetWidth / sourceWidth)
  // yCanvas = yPreview * (targetHeight / sourceHeight)
  const sourceW = bgW >= 200 ? bgW : contentW;
  const sourceH = bgH >= 200 ? bgH : contentH;

  const scaleX = targetW / sourceW;
  const scaleY = targetH / sourceH;

  const scaleElement = (el: any) => {
    if (!el) return el;
    const scaled = { ...el };

    scaled.x = Math.round((Number(el.x) || 0) * scaleX);
    scaled.y = Math.round((Number(el.y) || 0) * scaleY);
    scaled.width = Math.round((Number(el.width) || 0) * scaleX);
    scaled.height = Math.round((Number(el.height) || 0) * scaleY);

    if (typeof el.fontSize === 'number') {
      scaled.fontSize = Math.round(el.fontSize * Math.min(scaleX, scaleY));
    }
    if (typeof el.strokeWidth === 'number' && el.strokeWidth > 0) {
      scaled.strokeWidth = Math.max(1, Math.round(el.strokeWidth * Math.min(scaleX, scaleY)));
    }
    if (typeof el.borderRadius === 'number' && el.borderRadius > 0) {
      scaled.borderRadius = Math.round(el.borderRadius * Math.min(scaleX, scaleY));
    }

    return scaled;
  };

  const normalizedElements = rawEls.map(scaleElement);
  const normalizedSlides = slides.map((slide: any[]) =>
    Array.isArray(slide) ? slide.map(scaleElement) : [scaleElement(slide)]
  );

  return {
    canvasWidth: targetW,
    canvasHeight: targetH,
    isLandscape: targetW >= targetH,
    elements: normalizedElements,
    slides: normalizedSlides,
    needsScale: true,
    scaleX,
    scaleY
  };
}

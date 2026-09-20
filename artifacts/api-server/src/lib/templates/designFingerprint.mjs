// ORD Studio Design DNA Fingerprinting & Duplicate Detection Engine
// Mathematically calculates layout fingerprints and detects structural clones.

export function extractDesignFingerprint(template) {
  const width = template.canvasWidth || 1200;
  const height = template.canvasHeight || 1697;
  const elements = Array.isArray(template.elements) && template.elements.length > 0
    ? template.elements
    : (Array.isArray(template.slides?.[0]) ? template.slides[0] : (template.slides?.[0]?.elements || []));

  // Foreground elements (ignoring full-canvas background rects)
  const foregroundElements = elements.filter(el => {
    if (el.type === 'rect' && el.x <= 10 && el.y <= 10 && el.width >= width - 20 && el.height >= height - 20) {
      return false;
    }
    return true;
  });

  const normalizedBoxes = foregroundElements.map(el => ({
    id: el.id,
    type: el.type || 'rect',
    nx: Math.round((el.x / width) * 1000) / 1000,
    ny: Math.round((el.y / height) * 1000) / 1000,
    nw: Math.round((el.width / width) * 1000) / 1000,
    nh: Math.round((el.height / height) * 1000) / 1000,
    area: Math.round(((el.width * el.height) / (width * height)) * 1000) / 1000,
    align: el.textAlign || el.alignment || 'left',
    font: el.fontFamily || 'sans-serif',
    hasImage: Boolean(el.src),
    imgSrc: el.src || null
  }));

  // Images
  const imageElements = foregroundElements.filter(el => el.type === 'image' || Boolean(el.src));
  const images = imageElements.map(img => ({
    nx: Math.round((img.x / width) * 1000) / 1000,
    ny: Math.round((img.y / height) * 1000) / 1000,
    nw: Math.round((img.width / width) * 1000) / 1000,
    nh: Math.round((img.height / height) * 1000) / 1000,
    area: (img.width * img.height) / (width * height),
    aspectRatio: img.width / Math.max(img.height, 1),
    borderRadius: img.borderRadius || 0,
    src: img.src
  }));

  // Title / Headline element
  const textElements = foregroundElements.filter(el => el.type === 'text');
  const sortedByFontSize = [...textElements].sort((a, b) => (b.fontSize || 0) - (a.fontSize || 0));
  const mainTitle = sortedByFontSize[0] || null;

  const titleFingerprint = mainTitle ? {
    nx: Math.round((mainTitle.x / width) * 1000) / 1000,
    ny: Math.round((mainTitle.y / height) * 1000) / 1000,
    nw: Math.round((mainTitle.width / width) * 1000) / 1000,
    nh: Math.round((mainTitle.height / height) * 1000) / 1000,
    fontSizeRatio: Math.round(((mainTitle.fontSize || 32) / height) * 1000) / 1000,
    fontFamily: mainTitle.fontFamily || 'Inter',
    align: mainTitle.textAlign || mainTitle.alignment || 'left',
    vPos: mainTitle.y < height * 0.33 ? 'top' : mainTitle.y < height * 0.66 ? 'middle' : 'bottom',
    hPos: mainTitle.x < width * 0.25 ? 'left' : mainTitle.x > width * 0.45 ? 'right' : 'center'
  } : null;

  // Spatial Archetype Classifier
  let archetype = 'custom-layout';
  if (images.length === 0) {
    archetype = 'pure-typography-monograph';
  } else if (images.some(img => img.area > 0.75)) {
    archetype = 'full-bleed-photograph-hero';
  } else if (images.length >= 3) {
    archetype = 'asymmetric-photo-collage';
  } else if (images.length === 2) {
    archetype = 'dual-image-split';
  } else if (images.length === 1) {
    const img = images[0];
    if (img.ny < 0.20 && img.nh > 0.30 && img.nw > 0.7) {
      archetype = 'top-hero-banner';
    } else if (img.nx < 0.20 && img.nw > 0.35 && img.nh > 0.65) {
      archetype = 'left-vertical-split';
    } else if (img.nx > 0.40 && img.nw > 0.35 && img.nh > 0.65) {
      archetype = 'right-vertical-split';
    } else if (img.borderRadius > 50 || img.nw === img.nh) {
      archetype = 'circular-badge-or-arch';
    } else if (img.ny > 0.45 && img.nh > 0.35) {
      archetype = 'bottom-hero-photo';
    } else {
      archetype = 'staggered-card-photo';
    }
  }

  return {
    templateId: template.id,
    name: template.name,
    category: template.category,
    width,
    height,
    elementCount: foregroundElements.length,
    archetype,
    normalizedBoxes,
    images,
    titleFingerprint,
    primaryFont: titleFingerprint?.fontFamily || 'Inter',
    tags: template.tags || []
  };
}

// Calculate Intersection over Union (IoU) of two normalized boxes
function boxIoU(b1, b2) {
  const xA = Math.max(b1.nx, b2.nx);
  const yA = Math.max(b1.ny, b2.ny);
  const xB = Math.min(b1.nx + b1.nw, b2.nx + b2.nw);
  const yB = Math.min(b1.ny + b1.nh, b2.ny + b2.nh);
  const interArea = Math.max(0, xB - xA) * Math.max(0, yB - yA);
  const box1Area = b1.nw * b1.nh;
  const box2Area = b2.nw * b2.nh;
  const unionArea = box1Area + box2Area - interArea;
  if (unionArea <= 0) return 0;
  return interArea / unionArea;
}

// Structural Similarity Score (0.0 = completely different, 1.0 = identical coordinate clone)
export function calculateStructuralSimilarity(fp1, fp2) {
  if (fp1.category !== fp2.category) return 0.0;

  // 1. Image count & position matching
  let imageMatch = 0.0;
  if (fp1.images.length === 0 && fp2.images.length === 0) {
    imageMatch = 0.5; // both text-only
  } else if (fp1.images.length === fp2.images.length && fp1.images.length > 0) {
    let iouSum = 0;
    for (let i = 0; i < fp1.images.length; i++) {
      iouSum += boxIoU(fp1.images[i], fp2.images[i]);
    }
    imageMatch = iouSum / fp1.images.length;
  } else {
    imageMatch = 0.0;
  }

  // 2. Title layout matching (IoU + alignment)
  let titleMatch = 0.0;
  if (fp1.titleFingerprint && fp2.titleFingerprint) {
    const t1 = fp1.titleFingerprint;
    const t2 = fp2.titleFingerprint;
    const iou = boxIoU(t1, t2);
    const alignMatch = t1.align === t2.align ? 0.3 : 0.0;
    const posMatch = (t1.vPos === t2.vPos ? 0.3 : 0.0) + (t1.hPos === t2.hPos ? 0.4 : 0.0);
    titleMatch = iou * 0.5 + posMatch * 0.5;
  }

  // 3. Best-match IoU across all foreground boxes
  const boxes1 = fp1.normalizedBoxes;
  const boxes2 = fp2.normalizedBoxes;
  if (boxes1.length === 0 || boxes2.length === 0) return 0.0;

  let totalBestIoU = 0;
  for (const b1 of boxes1) {
    let best = 0;
    for (const b2 of boxes2) {
      if (b1.type === b2.type) {
        const iou = boxIoU(b1, b2);
        if (iou > best) best = iou;
      }
    }
    totalBestIoU += best;
  }
  const avgBoxIoU = totalBestIoU / Math.max(boxes1.length, boxes2.length);

  // Overall structural similarity is dominated by bounding box overlap
  const compositeScore = (imageMatch * 0.35) + (titleMatch * 0.25) + (avgBoxIoU * 0.40);
  return Math.min(1.0, Math.max(0.0, compositeScore));
}

// Audit an entire template array for structural duplicates
export function auditTemplateLibraryDiversity(templates, maxAllowedSimilarity = 0.78) {
  const fingerprints = templates.map(extractDesignFingerprint);
  const duplicates = [];
  const imageUsageMap = new Map();

  // Check image uniqueness & asset validity
  for (const t of templates) {
    const elements = Array.isArray(t.elements) ? t.elements : (t.slides?.[0] || []);
    for (const el of elements) {
      if (el.type === 'image' && el.src) {
        const src = el.src.trim();
        const count = imageUsageMap.get(src) || 0;
        imageUsageMap.set(src, count + 1);
      }
    }
  }

  // Check pairwise structural similarity
  for (let i = 0; i < fingerprints.length; i++) {
    for (let j = i + 1; j < fingerprints.length; j++) {
      const fp1 = fingerprints[i];
      const fp2 = fingerprints[j];
      if (fp1.category === fp2.category) {
        const sim = calculateStructuralSimilarity(fp1, fp2);
        if (sim >= maxAllowedSimilarity) {
          duplicates.push({
            template1: { id: fp1.templateId, name: fp1.name, category: fp1.category, archetype: fp1.archetype },
            template2: { id: fp2.templateId, name: fp2.name, category: fp2.category, archetype: fp2.archetype },
            similarity: Math.round(sim * 1000) / 1000
          });
        }
      }
    }
  }

  // Image reuse violations
  const duplicateImages = [];
  for (const [src, count] of imageUsageMap.entries()) {
    if (count > 1) {
      duplicateImages.push({ src, usageCount: count });
    }
  }

  return {
    totalTemplates: templates.length,
    duplicateCount: duplicates.length,
    duplicatePairs: duplicates,
    duplicateImages,
    imageHealthPass: duplicateImages.length === 0,
    diversityPass: duplicates.length === 0
  };
}

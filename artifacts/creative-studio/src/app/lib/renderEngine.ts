// Unified Canvas Render Engine for ORD Studio
// Single Source of Truth for both Thumbnail Previews and Canvas Editor
// Guarantees: WHAT YOU SEE IN THE THUMBNAIL === WHAT YOU OPEN IN THE EDITOR

import { resolveFont, loadTemplateFonts, FontResolutionContext } from './fontRegistry';
import {
  preloadTemplateAssets,
  preloadTemplateImage,
  getPreloadedImage,
  isImageFailed,
  markFailedImage,
  resolveElementImageSrc
} from './templateRegistry';


export interface RenderOptions {
  scale?: number;
  highlightSelectedId?: string | null;
  interactive?: boolean;
  onImageLoaded?: () => void;
  context?: FontResolutionContext;
}

export const getCachedOrPreloadedImage = getPreloadedImage;
export const preloadImageElement = preloadTemplateImage;

/**
 * Parses CSS linear-gradient string to a CanvasGradient
 */
function createLinearGradientFromCss(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  gradientStr: string
): CanvasGradient {
  const grad = ctx.createLinearGradient(0, 0, w, h);
  const colors = gradientStr.match(/#[0-9a-fA-F]{6}|#[0-9a-fA-F]{3}|rgba?\([^)]+\)/g);
  if (colors && colors.length >= 2) {
    colors.forEach((c, idx) => {
      const stop = idx / (colors.length - 1);
      try {
        grad.addColorStop(stop, c);
      } catch {}
    });
  } else {
    grad.addColorStop(0, '#0f172a');
    grad.addColorStop(1, '#1e293b');
  }
  return grad;
}

/**
 * Draws rounded rectangle path
 */
function pathRoundRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number
) {
  ctx.beginPath();
  const radius = Math.min(Math.max(0, r), Math.abs(w) / 2, Math.abs(h) / 2);
  if (typeof (ctx as any).roundRect === 'function') {
    (ctx as any).roundRect(x, y, w, h, radius);
  } else {
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + w - radius, y);
    ctx.arcTo(x + w, y, x + w, y + radius, radius);
    ctx.lineTo(x + w, y + h - radius);
    ctx.arcTo(x + w, y + h, x + w - radius, y + h, radius);
    ctx.lineTo(x + radius, y + h);
    ctx.arcTo(x, y + h, x, y + h - radius, radius);
    ctx.lineTo(x, y + radius);
    ctx.arcTo(x, y, x + radius, y, radius);
    ctx.closePath();
  }
}


/**
 * Draws 5-point star
 */
function drawStarPath(
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  r: number,
  points: number = 5
) {
  ctx.beginPath();
  for (let i = 0; i < points * 2; i++) {
    const radius = i % 2 === 0 ? r : r * 0.45;
    const angle = (Math.PI / points) * i - Math.PI / 2;
    const px = cx + Math.cos(angle) * radius;
    const py = cy + Math.sin(angle) * radius;
    if (i === 0) ctx.moveTo(px, py);
    else ctx.lineTo(px, py);
  }
  ctx.closePath();
}

/**
 * Draws arrow with arrowhead
 */
function drawArrowPath(
  ctx: CanvasRenderingContext2D,
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  headSize: number = 14
) {
  const angle = Math.atan2(y2 - y1, x2 - x1);
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(x2, y2);
  ctx.lineTo(x2 - headSize * Math.cos(angle - Math.PI / 6), y2 - headSize * Math.sin(angle - Math.PI / 6));
  ctx.lineTo(x2 - headSize * Math.cos(angle + Math.PI / 6), y2 - headSize * Math.sin(angle + Math.PI / 6));
  ctx.closePath();
  ctx.fill();
}

/**
 * Core Text Layout Helper
 * Computes exact word wrapping, font auto-scaling, and line positioning
 */
function computeTextLines(
  ctx: CanvasRenderingContext2D,
  text: string,
  maxWidth: number
): string[] {
  const paragraphs = String(text || '').split('\n');
  const computedLines: string[] = [];

  for (const para of paragraphs) {
    if (para.trim() === '') {
      computedLines.push('');
      continue;
    }
    const words = para.split(' ');
    let currentLine = '';

    for (const word of words) {
      const testLine = currentLine ? `${currentLine} ${word}` : word;
      const metrics = ctx.measureText(testLine);
      if (metrics.width > maxWidth && currentLine) {
        computedLines.push(currentLine);
        currentLine = word;
      } else {
        currentLine = testLine;
      }
    }
    if (currentLine) {
      computedLines.push(currentLine);
    }
  }

  return computedLines;
}

/**
 * The Single Source of Truth Canonical Slide Drawing Engine
 * Renders all elements strictly onto a 2D Canvas context.
 */
export function renderCanonicalSlideToContext(
  ctx: CanvasRenderingContext2D,
  elements: any[],
  canvasW: number,
  canvasH: number,
  backgroundGradientOrColor: string = '#0f172a',
  options: RenderOptions = {}
): void {
  ctx.save();

  // 1. Draw Canvas Background
  if (backgroundGradientOrColor && backgroundGradientOrColor.includes('gradient')) {
    const grad = createLinearGradientFromCss(ctx, canvasW, canvasH, backgroundGradientOrColor);
    ctx.fillStyle = grad;
  } else {
    ctx.fillStyle = backgroundGradientOrColor || '#0f172a';
  }
  ctx.fillRect(0, 0, canvasW, canvasH);

  // 2. Iterate Elements
  for (const el of elements) {
    if (!el || el.visible === false) continue;

    ctx.save();
    ctx.globalAlpha = el.opacity !== undefined ? el.opacity : 1;

    // Rotation around element center
    if (el.rotation) {
      const cx = el.x + el.width / 2;
      const cy = el.y + el.height / 2;
      ctx.translate(cx, cy);
      ctx.rotate((el.rotation * Math.PI) / 180);
      ctx.translate(-cx, -cy);
    }

    const fill = el.fill || el.color || 'transparent';
    const stroke = el.stroke || 'transparent';
    const strokeWidth = el.strokeWidth || 0;
    const rx = el.borderRadius || 0;

    switch (el.type) {
      case 'rect': {
        if (fill.includes('gradient')) {
          const grad = createLinearGradientFromCss(ctx, el.x + el.width, el.y + el.height, fill);
          ctx.fillStyle = grad;
        } else {
          ctx.fillStyle = fill;
        }

        if (rx > 0) {
          pathRoundRect(ctx, el.x, el.y, el.width, el.height, rx);
          ctx.fill();
          if (stroke && stroke !== 'transparent' && strokeWidth > 0) {
            ctx.strokeStyle = stroke;
            ctx.lineWidth = strokeWidth;
            ctx.stroke();
          }
        } else {
          ctx.fillRect(el.x, el.y, el.width, el.height);
          if (stroke && stroke !== 'transparent' && strokeWidth > 0) {
            ctx.strokeStyle = stroke;
            ctx.lineWidth = strokeWidth;
            ctx.strokeRect(el.x, el.y, el.width, el.height);
          }
        }
        break;
      }

      case 'circle': {
        const radX = Math.abs(el.width / 2);
        const radY = Math.abs(el.height / 2);
        ctx.beginPath();
        ctx.ellipse(el.x + radX, el.y + radY, radX, radY, 0, 0, Math.PI * 2);
        ctx.fillStyle = fill;
        ctx.fill();
        if (stroke && stroke !== 'transparent' && strokeWidth > 0) {
          ctx.strokeStyle = stroke;
          ctx.lineWidth = strokeWidth;
          ctx.stroke();
        }
        break;
      }

      case 'line': {
        ctx.beginPath();
        ctx.moveTo(el.x, el.y + el.height / 2);
        ctx.lineTo(el.x + el.width, el.y + el.height / 2);
        ctx.strokeStyle = stroke && stroke !== 'transparent' ? stroke : (fill !== 'transparent' ? fill : '#ffffff');
        ctx.lineWidth = Math.max(strokeWidth || el.height || 2, 1);
        ctx.stroke();
        break;
      }

      case 'arrow': {
        ctx.strokeStyle = fill !== 'transparent' ? fill : (stroke || '#ffffff');
        ctx.fillStyle = fill !== 'transparent' ? fill : (stroke || '#ffffff');
        ctx.lineWidth = Math.max(strokeWidth || 2, 2);
        drawArrowPath(ctx, el.x, el.y + el.height / 2, el.x + el.width, el.y + el.height / 2, 14);
        break;
      }

      case 'star': {
        const cx = el.x + el.width / 2;
        const cy = el.y + el.height / 2;
        const r = Math.min(el.width, el.height) / 2;
        drawStarPath(ctx, cx, cy, r, 5);
        ctx.fillStyle = fill;
        ctx.fill();
        if (stroke && stroke !== 'transparent' && strokeWidth > 0) {
          ctx.strokeStyle = stroke;
          ctx.lineWidth = strokeWidth;
          ctx.stroke();
        }
        break;
      }

      case 'triangle': {
        ctx.beginPath();
        ctx.moveTo(el.x + el.width / 2, el.y);
        ctx.lineTo(el.x + el.width, el.y + el.height);
        ctx.lineTo(el.x, el.y + el.height);
        ctx.closePath();
        ctx.fillStyle = fill;
        ctx.fill();
        if (stroke && stroke !== 'transparent' && strokeWidth > 0) {
          ctx.strokeStyle = stroke;
          ctx.lineWidth = strokeWidth;
          ctx.stroke();
        }
        break;
      }

      case 'image': {
        const imageSrc = resolveElementImageSrc(el);
        if (!imageSrc) {
          console.error(`[ImageLoadError] Image element has no resolvable source | Template: ${options.context?.templateId || 'N/A'}, Page: ${options.context?.pageId || 'N/A'}, Element: ${el.id || 'N/A'}`);
          break;
        }

        const cachedImg = getCachedOrPreloadedImage(imageSrc);
        if (cachedImg && cachedImg.naturalWidth > 0) {
          ctx.save();
          if (rx > 0) {
            pathRoundRect(ctx, el.x, el.y, el.width, el.height, rx);
            ctx.clip();
          } else if (el.shape === 'circle') {
            const radX = Math.abs(el.width / 2);
            const radY = Math.abs(el.height / 2);
            ctx.beginPath();
            ctx.ellipse(el.x + radX, el.y + radY, radX, radY, 0, 0, Math.PI * 2);
            ctx.clip();
          }

          // Compute aspect ratio crop (object-fit: cover)
          const imgW = cachedImg.naturalWidth;
          const imgH = cachedImg.naturalHeight;
          const targetAspect = el.width / el.height;
          const imgAspect = imgW / imgH;

          let sx = 0, sy = 0, sw = imgW, sh = imgH;
          if (imgAspect > targetAspect) {
            sw = Math.round(imgH * targetAspect);
            sx = Math.round((imgW - sw) / 2);
          } else {
            sh = Math.round(imgW / targetAspect);
            sy = Math.round((imgH - sh) / 2);
          }

          ctx.drawImage(cachedImg, sx, sy, sw, sh, el.x, el.y, el.width, el.height);
          ctx.restore();

          if (stroke && stroke !== 'transparent' && strokeWidth > 0) {
            ctx.save();
            ctx.strokeStyle = stroke;
            ctx.lineWidth = strokeWidth;
            if (rx > 0) {
              pathRoundRect(ctx, el.x, el.y, el.width, el.height, rx);
              ctx.stroke();
            } else if (el.shape === 'circle') {
              const radX = Math.abs(el.width / 2);
              const radY = Math.abs(el.height / 2);
              ctx.beginPath();
              ctx.ellipse(el.x + radX, el.y + radY, radX, radY, 0, 0, Math.PI * 2);
              ctx.stroke();
            } else {
              ctx.strokeRect(el.x, el.y, el.width, el.height);
            }
            ctx.restore();
          }
        } else {
          // Trigger async preload with element context logging if not yet ready
          if (typeof window !== 'undefined' && !isImageFailed(imageSrc)) {
            preloadImageElement(imageSrc, {
              templateId: options.context?.templateId,
              pageId: options.context?.pageId,
              elementId: el.id
            }).then((loadedImg) => {
              if (loadedImg && loadedImg.naturalWidth > 0) {
                options.onImageLoaded?.();
              }
            });
          }
        }
        break;
      }


      case 'text': {
        const resolved = resolveFont(el.fontFamily, el.fontWeight, el.fontStyle, {
          ...options.context,
          elementId: el.id
        });

        let fsz = el.fontSize || 20;
        const maxWidth = Math.max(el.width - 4, 30);
        const maxHeight = Math.max(el.height - 4, 20);

        ctx.font = `${resolved.style} ${resolved.weight} ${fsz}px "${resolved.family}"`;
        ctx.fillStyle = fill !== 'transparent' ? fill : '#ffffff';
        ctx.textBaseline = 'top';

        let lines = computeTextLines(ctx, el.text || el.content || '', maxWidth);
        let lineH = fsz * (el.lineHeight || 1.25);
        let totalH = lines.length * lineH;
        const minFsz = Math.max(10, Math.min(14, Math.floor(fsz * 0.6)));

        // Proportional step-down to fit container bounds
        while (totalH > maxHeight && fsz > minFsz) {
          fsz = Math.max(minFsz, Math.floor(fsz * 0.9));
          ctx.font = `${resolved.style} ${resolved.weight} ${fsz}px "${resolved.family}"`;
          lineH = fsz * (el.lineHeight || 1.25);
          lines = computeTextLines(ctx, el.text || el.content || '', maxWidth);
          totalH = lines.length * lineH;
        }

        // Clip strictly within text element bounding box
        ctx.save();
        ctx.beginPath();
        ctx.rect(el.x, el.y, el.width, el.height);
        ctx.clip();

        let yOffset = 2;
        if (el.verticalAlign === 'middle') {
          yOffset = Math.max(2, (el.height - totalH) / 2);
        } else if (el.verticalAlign === 'bottom') {
          yOffset = Math.max(2, el.height - totalH - 2);
        }

        const isCenter = el.textAlign === 'center' || el.alignment === 'center';
        const isRight = el.textAlign === 'right' || el.alignment === 'right';

        lines.forEach((line, i) => {
          const lineW = ctx.measureText(line).width;
          let xOffset = 2;
          if (isCenter) {
            xOffset = (el.width - lineW) / 2;
          } else if (isRight) {
            xOffset = el.width - lineW - 2;
          }
          const posX = el.x + xOffset;
          const posY = el.y + yOffset + i * lineH;
          ctx.fillText(line, posX, posY);

          if (el.textDecoration === 'underline') {
            ctx.save();
            ctx.strokeStyle = fill !== 'transparent' ? fill : '#ffffff';
            ctx.lineWidth = Math.max(1, fsz * 0.06);
            ctx.beginPath();
            ctx.moveTo(posX, posY + fsz + 2);
            ctx.lineTo(posX + lineW, posY + fsz + 2);
            ctx.stroke();
            ctx.restore();
          }
        });

        ctx.restore();
        break;
      }

      default:
        break;
    }

    ctx.restore();
  }

  ctx.restore();
}

// ─── Versioned Thumbnail Generation & Cache Pipeline ───────────────────────
const thumbnailMemoryCache = new Map<string, string>();

/**
 * Builds standard cache key: {templateId}-v{version}-r{rendererVersion}-f{fontVersion}-p{pageIndex}
 */
export function buildThumbnailCacheKey(
  templateId: string | number,
  templateVersion: string = '2.0.0',
  pageIndex: number = 1
): string {
  const rendererVersion = 'r2';
  const fontVersion = 'f2';
  return `${templateId}-v${templateVersion}-${rendererVersion}-${fontVersion}-p${pageIndex}`;
}

/**
 * Generates high-fidelity thumbnail dataURL using the unified renderer
 */
export async function generateCanonicalThumbnail(
  template: any,
  pageIndex: number = 0,
  targetWidth: number = 640
): Promise<string> {
  if (!template) return '';

  const cacheKey = buildThumbnailCacheKey(template.id, template.version || '2.0.0', pageIndex + 1);

  // 1. Check in-memory cache
  if (thumbnailMemoryCache.has(cacheKey)) {
    return thumbnailMemoryCache.get(cacheKey)!;
  }

  // 2. Check sessionStorage
  if (typeof window !== 'undefined' && window.sessionStorage) {
    try {
      const stored = sessionStorage.getItem(`ord_thumb_${cacheKey}`);
      if (stored) {
        thumbnailMemoryCache.set(cacheKey, stored);
        return stored;
      }
    } catch {}
  }

  // 3. Resolve slide elements & dimensions
  const slides = Array.isArray(template.slides) && template.slides.length > 0
    ? template.slides
    : [template.elements || []];
  
  const rawSlide = slides[pageIndex] || slides[0] || [];
  const slideElements = Array.isArray(rawSlide)
    ? rawSlide
    : (Array.isArray(rawSlide?.elements) ? rawSlide.elements : []);

  const cW = template.canvasWidth || 1920;
  const cH = template.canvasHeight || 1080;

  // 4. Preload Fonts & Images before drawing
  await Promise.all([
    loadTemplateFonts(slideElements, { templateId: template.id, pageId: pageIndex + 1 }),
    preloadTemplateAssets(template)
  ]);

  // 5. Draw onto offscreen canvas
  const canvas = document.createElement('canvas');
  const targetH = Math.round(targetWidth * (cH / cW));
  canvas.width = targetWidth;
  canvas.height = targetH;

  const ctx = canvas.getContext('2d');
  if (!ctx) return '';

  const scale = targetWidth / cW;
  ctx.scale(scale, scale);

  const bg = template.gradient || '#0f172a';
  renderCanonicalSlideToContext(ctx, slideElements, cW, cH, bg, {
    scale,
    context: { templateId: template.id, pageId: pageIndex + 1 }
  });

  try {
    const dataUrl = canvas.toDataURL('image/png', 0.92);
    thumbnailMemoryCache.set(cacheKey, dataUrl);
    if (typeof window !== 'undefined' && window.sessionStorage) {
      try {
        sessionStorage.setItem(`ord_thumb_${cacheKey}`, dataUrl);
      } catch {}
    }
    return dataUrl;
  } catch (err) {
    console.warn('Canvas export failed:', err);
    return '';
  }
}

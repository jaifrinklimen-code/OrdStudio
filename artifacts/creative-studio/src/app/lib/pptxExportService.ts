import pptxgen from 'pptxgenjs';
import { resolveElementImageSrc, getPreloadedImage } from './templateRegistry';

export interface PptxExportOptions {
  slides?: any;
  elements?: any[];
  pages?: any;
  template?: any;
  templateName?: string;
  canvasWidth?: number;
  canvasHeight?: number;
  backgroundColor?: string;
  backgroundGradient?: string;
  onProgress?: (progress: number, message: string) => void;
}

// Convert any CSS color (hex, rgb, rgba, named) to PPTX hex + transparency
export function parsePptxColor(colorStr?: string, defaultColor = 'FFFFFF'): { color: string; transparency: number } {
  if (!colorStr) return { color: defaultColor, transparency: 0 };
  const trimmed = colorStr.trim();
  if (trimmed === 'transparent' || trimmed === 'none') {
    return { color: 'FFFFFF', transparency: 100 };
  }

  // Hex color
  if (trimmed.startsWith('#')) {
    let hex = trimmed.replace('#', '').trim();
    if (hex.length === 3) {
      hex = hex.split('').map(c => c + c).join('');
    }
    if (hex.length === 8) { // #RRGGBBAA
      const alpha = parseInt(hex.slice(6, 8), 16) / 255;
      return {
        color: hex.slice(0, 6).toUpperCase(),
        transparency: Math.round((1 - alpha) * 100)
      };
    }
    if (hex.length === 6) {
      return { color: hex.toUpperCase(), transparency: 0 };
    }
  }

  // rgb(...) or rgba(...)
  const rgbMatch = trimmed.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);
  if (rgbMatch) {
    const r = Math.min(255, parseInt(rgbMatch[1], 10)).toString(16).padStart(2, '0');
    const g = Math.min(255, parseInt(rgbMatch[2], 10)).toString(16).padStart(2, '0');
    const b = Math.min(255, parseInt(rgbMatch[3], 10)).toString(16).padStart(2, '0');
    const a = rgbMatch[4] !== undefined ? parseFloat(rgbMatch[4]) : 1;
    return {
      color: `${r}${g}${b}`.toUpperCase(),
      transparency: Math.round((1 - Math.max(0, Math.min(1, a))) * 100)
    };
  }

  // CSS gradient string - extract first hex color
  const hexMatch = trimmed.match(/#[a-fA-F0-9]{6}|#[a-fA-F0-9]{3}/);
  if (hexMatch) {
    return parsePptxColor(hexMatch[0], defaultColor);
  }

  return { color: defaultColor, transparency: 0 };
}

// Convert an image URL / source to a base64 Data URI with image binary
export async function convertImageSourceToBase64(src: string): Promise<string | null> {
  if (!src || typeof src !== 'string') return null;
  const trimmed = src.trim();
  if (!trimmed) return null;

  // Already a base64 data URI
  if (trimmed.startsWith('data:image/')) {
    if (trimmed.startsWith('data:image/png') || trimmed.startsWith('data:image/jpeg') || trimmed.startsWith('data:image/jpg')) {
      return trimmed;
    }
  }

  // If in browser environment
  if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    // 1. Check preloaded image cache
    const preloaded = getPreloadedImage(trimmed);
    if (preloaded && preloaded.naturalWidth > 0) {
      try {
        const canvas = document.createElement('canvas');
        canvas.width = preloaded.naturalWidth;
        canvas.height = preloaded.naturalHeight;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.drawImage(preloaded, 0, 0);
          const dataUri = canvas.toDataURL('image/png');
          if (dataUri && dataUri.startsWith('data:image/')) return dataUri;
        }
      } catch (_e) {}
    }

    // 2. Try loading via Image element with crossOrigin
    try {
      const imgPromise = new Promise<string | null>((resolve) => {
        const img = new window.Image();
        img.crossOrigin = 'anonymous';
        const timer = setTimeout(() => resolve(null), 8000);

        img.onload = () => {
          clearTimeout(timer);
          try {
            if (img.naturalWidth > 0 && img.naturalHeight > 0) {
              const canvas = document.createElement('canvas');
              canvas.width = img.naturalWidth;
              canvas.height = img.naturalHeight;
              const ctx = canvas.getContext('2d');
              if (ctx) {
                ctx.drawImage(img, 0, 0);
                resolve(canvas.toDataURL('image/png'));
                return;
              }
            }
            resolve(null);
          } catch (_err) {
            resolve(null);
          }
        };

        img.onerror = () => {
          clearTimeout(timer);
          resolve(null);
        };

        img.src = trimmed;
        if (img.complete && img.naturalWidth > 0) {
          clearTimeout(timer);
          try {
            const canvas = document.createElement('canvas');
            canvas.width = img.naturalWidth;
            canvas.height = img.naturalHeight;
            const ctx = canvas.getContext('2d');
            if (ctx) {
              ctx.drawImage(img, 0, 0);
              resolve(canvas.toDataURL('image/png'));
              return;
            }
          } catch (_err) {}
          resolve(null);
        }
      });

      const result = await imgPromise;
      if (result) return result;
    } catch (_err) {}

    // 3. Fallback: Fetch directly -> blob -> FileReader
    try {
      const fetchUrl = trimmed.startsWith('/') ? `${window.location.origin}${trimmed}` : trimmed;
      const res = await fetch(fetchUrl, { mode: 'cors' });
      if (res.ok) {
        const blob = await res.blob();
        const readerPromise = new Promise<string | null>((resolve) => {
          const reader = new FileReader();
          reader.onloadend = () => {
            if (typeof reader.result === 'string' && reader.result.startsWith('data:image/')) {
              resolve(reader.result);
            } else {
              resolve(null);
            }
          };
          reader.onerror = () => resolve(null);
          reader.readAsDataURL(blob);
        });
        const blobResult = await readerPromise;
        if (blobResult) return blobResult;
      }
    } catch (_fetchErr) {}
  } else {
    // Node.js environment
    try {
      const res = await fetch(trimmed, { headers: { 'User-Agent': 'Mozilla/5.0' } });
      if (res.ok) {
        const contentType = res.headers.get('content-type') || 'image/png';
        const buffer = await res.arrayBuffer();
        const b64 = Buffer.from(buffer).toString('base64');
        return `data:${contentType};base64,${b64}`;
      }
    } catch (_err) {}
  }

  return null;
}

// Normalize any slide/page/element input into a uniform array of slides: any[][]
export function normalizeSlidesData(input: any): any[][] {
  if (!input) return [[]];

  if (Array.isArray(input)) {
    if (input.length === 0) return [[]];
    const first = input[0];
    if (Array.isArray(first)) {
      return input as any[][];
    }
    if (first && typeof first === 'object') {
      if (Array.isArray(first.elements)) {
        return input.map((item: any) => (Array.isArray(item?.elements) ? item.elements : []));
      }
      if (first.type || first.id) {
        return [input];
      }
    }
    return [input];
  }

  if (typeof input === 'object') {
    if (Array.isArray(input.slides) && input.slides.length > 0) {
      return normalizeSlidesData(input.slides);
    }
    if (Array.isArray(input.pages) && input.pages.length > 0) {
      return normalizeSlidesData(input.pages);
    }
    if (Array.isArray(input.elements) && input.elements.length > 0) {
      return [input.elements];
    }
  }

  return [[]];
}

// Main PPTX Export Function
export async function exportToPptx({
  slides,
  elements,
  pages,
  template,
  templateName = 'Presentation',
  canvasWidth = 1920,
  canvasHeight = 1080,
  backgroundColor = '#ffffff',
  backgroundGradient = '',
  onProgress
}: PptxExportOptions): Promise<void> {
  const pptx = new pptxgen();

  const cW = canvasWidth || 1920;
  const cH = canvasHeight || 1080;
  const ratio = cW / cH;

  let slideW = 10;
  let slideH = 5.625;

  if (Math.abs(ratio - 16 / 9) < 0.05) {
    pptx.layout = 'LAYOUT_16x9';
    slideW = 10;
    slideH = 5.625;
  } else if (Math.abs(ratio - 4 / 3) < 0.05) {
    pptx.layout = 'LAYOUT_4x3';
    slideW = 10;
    slideH = 7.5;
  } else {
    if (cH > cW) { // Portrait (e.g. A4, Poster, Resume)
      slideW = 7.5;
      slideH = Number((7.5 * (cH / cW)).toFixed(3));
    } else { // Landscape other or square
      slideW = 10;
      slideH = Number((10 * (cH / cW)).toFixed(3));
    }
    pptx.defineLayout({ name: 'CUSTOM_CANVAS', width: slideW, height: slideH });
    pptx.layout = 'CUSTOM_CANVAS';
  }

  // Normalize slidesList
  const rawInput = slides || pages || elements || template;
  const slidesList = normalizeSlidesData(rawInput);

  // 1. Resolve and pre-fetch all unique image assets across all slides
  onProgress?.(10, 'Resolving and preparing image assets...');
  const imageSourceMap = new Map<string, string | null>();
  const uniqueUrls: string[] = [];

  slidesList.forEach(slideEls => {
    if (!Array.isArray(slideEls)) return;
    slideEls.forEach(el => {
      const rawSrc = resolveElementImageSrc(el);
      if (rawSrc && !imageSourceMap.has(rawSrc)) {
        imageSourceMap.set(rawSrc, null);
        uniqueUrls.push(rawSrc);
      }
    });
  });

  if (uniqueUrls.length > 0) {
    onProgress?.(25, `Embedding ${uniqueUrls.length} image assets...`);
    await Promise.all(
      uniqueUrls.map(async (src) => {
        try {
          const b64 = await convertImageSourceToBase64(src);
          if (b64) {
            imageSourceMap.set(src, b64);
          }
        } catch (_err) {}
      })
    );
  }

  onProgress?.(60, 'Building PowerPoint slides...');

  // 2. Build slides
  slidesList.forEach((slideEls) => {
    if (!Array.isArray(slideEls)) return;
    const slide = pptx.addSlide();

    // Slide background
    const bgParsed = parsePptxColor(backgroundGradient || backgroundColor || '#FFFFFF', 'FFFFFF');
    slide.background = { color: bgParsed.color };

    slideEls.forEach((el) => {
      if (el.visible === false) return;
      if (el.id === 'bg' || el.id?.endsWith('-bg')) return;

      // Skip redundant full-canvas background rect
      if (el.type === 'rect' && el.x === 0 && el.y === 0 && el.width >= cW && el.height >= cH && !el.stroke) {
        return;
      }

      const rx = (el.x / cW) * slideW;
      const ry = (el.y / cH) * slideH;
      const rw = (el.width / cW) * slideW;
      const rh = (el.height / cH) * slideH;

      const rot = el.rotation || 0;
      const opacity = el.opacity !== undefined ? el.opacity : 1;
      const fillParsed = parsePptxColor(el.fill || '#000000');
      const transparency = Math.max(fillParsed.transparency, Math.round((1 - opacity) * 100));

      const imageSrc = resolveElementImageSrc(el);

      // Handle Image Elements
      if (el.type === 'image' || imageSrc) {
        const base64Data = imageSrc ? imageSourceMap.get(imageSrc) : null;
        if (base64Data) {
          slide.addImage({
            data: base64Data,
            x: rx,
            y: ry,
            w: rw,
            h: rh,
            rotate: rot,
            transparency: Math.round((1 - opacity) * 100),
            rounding: el.borderRadius ? true : false
          });
        }
        return;
      }

      // Handle Vector Shapes
      switch (el.type) {
        case 'rect':
          slide.addShape(pptx.ShapeType.rect, {
            x: rx,
            y: ry,
            w: rw,
            h: rh,
            fill: { color: fillParsed.color, transparency },
            line: el.stroke ? {
              color: parsePptxColor(el.stroke).color,
              width: (el.strokeWidth || 1) * (slideH / cH) * 72 / 96
            } : undefined,
            rotate: rot,
            rectRadius: el.borderRadius ? Math.min(el.borderRadius / cW * slideW, 0.5) : undefined
          });
          break;

        case 'circle':
          slide.addShape(pptx.ShapeType.ellipse, {
            x: rx,
            y: ry,
            w: rw,
            h: rh,
            fill: { color: fillParsed.color, transparency },
            line: el.stroke ? {
              color: parsePptxColor(el.stroke).color,
              width: (el.strokeWidth || 1) * (slideH / cH) * 72 / 96
            } : undefined,
            rotate: rot
          });
          break;

        case 'triangle':
          slide.addShape(pptx.ShapeType.triangle, {
            x: rx,
            y: ry,
            w: rw,
            h: rh,
            fill: { color: fillParsed.color, transparency },
            line: el.stroke ? {
              color: parsePptxColor(el.stroke).color,
              width: (el.strokeWidth || 1) * (slideH / cH) * 72 / 96
            } : undefined,
            rotate: rot
          });
          break;

        case 'star':
          slide.addShape(pptx.ShapeType.star5, {
            x: rx,
            y: ry,
            w: rw,
            h: rh,
            fill: { color: fillParsed.color, transparency },
            rotate: rot
          });
          break;

        case 'hexagon':
          slide.addShape(pptx.ShapeType.hexagon, {
            x: rx,
            y: ry,
            w: rw,
            h: rh,
            fill: { color: fillParsed.color, transparency },
            rotate: rot
          });
          break;

        case 'heart':
          slide.addShape(pptx.ShapeType.heart, {
            x: rx,
            y: ry,
            w: rw,
            h: rh,
            fill: { color: fillParsed.color, transparency },
            rotate: rot
          });
          break;

        case 'line':
          slide.addShape(pptx.ShapeType.line, {
            x: rx,
            y: ry,
            w: rw,
            h: rh,
            line: {
              color: fillParsed.color,
              width: (el.strokeWidth || 2) * (slideH / cH) * 72 / 96
            },
            rotate: rot
          });
          break;

        case 'arrow':
          slide.addShape(pptx.ShapeType.rightArrow, {
            x: rx,
            y: ry,
            w: rw,
            h: rh,
            fill: { color: fillParsed.color, transparency },
            rotate: rot
          });
          break;

        case 'text':
          const fontSizeInPt = Math.max((el.fontSize || 16) * (slideH / cH) * 72, 7);
          slide.addText(el.text || '', {
            x: rx,
            y: ry,
            w: rw,
            h: rh,
            fontSize: Number(fontSizeInPt.toFixed(1)),
            fontFace: el.fontFamily || 'Arial',
            color: fillParsed.color,
            bold: el.fontWeight === 'bold' || el.fontWeight === '700' || el.fontWeight === '800' || el.fontWeight === '900',
            italic: el.fontStyle === 'italic',
            underline: el.textDecoration === 'underline' ? { style: 'sng' } : undefined,
            align: el.textAlign || 'left',
            valign: el.verticalAlign === 'middle' ? 'middle' : el.verticalAlign === 'bottom' ? 'bottom' : 'top',
            rotate: rot,
            transparency,
            margin: 0
          });
          break;
      }
    });
  });

  onProgress?.(90, 'Writing PPTX file...');
  const fileName = `${(templateName || 'Presentation').trim().replace(/[/\\?%*:|"<>]/g, '_').replace(/\s+/g, '_')}.pptx`;
  await pptx.writeFile({ fileName });
  onProgress?.(100, 'PPTX export complete!');
}

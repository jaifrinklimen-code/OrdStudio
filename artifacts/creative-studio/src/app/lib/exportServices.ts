import { renderCanonicalSlideToContext } from './renderEngine';
import { loadTemplateFonts, resolveFont } from './fontRegistry';
import { preloadTemplateAssets, resolveElementImageSrc, getPreloadedImage } from './templateRegistry';
import { exportToPptx, parsePptxColor, convertImageSourceToBase64 } from './pptxExportService';

export { exportToPptx };

// ── XML / SVG Escaping ────────────────────────────────────────────────────────
export function xmlEscape(str: any): string {
  if (str === null || str === undefined) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

// ── Normalize Slide Data ──────────────────────────────────────────────────────
export function normalizeSlidesList(slides?: any, elements?: any): any[][] {
  if (slides && Array.isArray(slides) && slides.length > 0) {
    if (Array.isArray(slides[0])) return slides;
    if (slides[0] && typeof slides[0] === 'object' && Array.isArray(slides[0].elements)) {
      return slides.map((s: any) => s.elements);
    }
  }
  if (elements && Array.isArray(elements) && elements.length > 0) {
    return [elements];
  }
  return [[]];
}

// ── Multi-Page PDF Builder (Standard PDF-1.4, zero-dependency) ───────────────
export function generatePdfBlob(pages: Array<{ width: number; height: number; jpegBytes: Uint8Array }>): Blob {
  const numPages = pages.length;
  const pageObjIds: Array<{ pageId: number; imgId: number; contentsId: number }> = [];
  let currentObjId = 2; // 1: Catalog, 2: Pages

  for (let i = 0; i < numPages; i++) {
    const pageId = ++currentObjId;
    const imgId = ++currentObjId;
    const contentsId = ++currentObjId;
    pageObjIds.push({ pageId, imgId, contentsId });
  }

  const parts: Uint8Array[] = [];
  let currentOffset = 0;

  const encoder = new TextEncoder();
  function writeChunk(chunk: string | Uint8Array) {
    const buf = typeof chunk === 'string' ? encoder.encode(chunk) : chunk;
    parts.push(buf);
    currentOffset += buf.length;
  }

  writeChunk('%PDF-1.4\n%\xFF\xFF\xFF\xFF\n');
  const xrefOffsets: number[] = [0];

  function startObj(id: number) {
    xrefOffsets[id] = currentOffset;
    writeChunk(`${id} 0 obj\n`);
  }

  function endObj() {
    writeChunk('endobj\n\n');
  }

  // 1: Catalog
  startObj(1);
  writeChunk('<< /Type /Catalog /Pages 2 0 R >>\n');
  endObj();

  // 2: Pages
  startObj(2);
  const kidsStr = pageObjIds.map(p => `${p.pageId} 0 R`).join(' ');
  writeChunk(`<< /Type /Pages /Kids [ ${kidsStr} ] /Count ${numPages} >>\n`);
  endObj();

  // Pages
  for (let i = 0; i < numPages; i++) {
    const { pageId, imgId, contentsId } = pageObjIds[i];
    const { width, height, jpegBytes } = pages[i];

    // Page Object
    startObj(pageId);
    writeChunk(`<< /Type /Page /Parent 2 0 R /MediaBox [ 0 0 ${width} ${height} ] `);
    writeChunk(`/Resources << /XObject << /Img${i + 1} ${imgId} 0 R >> /ProcSet [ /PDF /ImageC ] >> `);
    writeChunk(`/Contents ${contentsId} 0 R >>\n`);
    endObj();

    // Image XObject
    startObj(imgId);
    writeChunk(`<< /Type /XObject /Subtype /Image /Width ${width} /Height ${height} `);
    writeChunk(`/ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode `);
    writeChunk(`/Length ${jpegBytes.length} >>\nstream\n`);
    writeChunk(jpegBytes);
    writeChunk('\nendstream\n');
    endObj();

    // Contents stream
    const contentStream = `q\n${width} 0 0 ${height} 0 0 cm\n/Img${i + 1} Do\nQ\n`;
    startObj(contentsId);
    writeChunk(`<< /Length ${encoder.encode(contentStream).length} >>\nstream\n`);
    writeChunk(contentStream);
    writeChunk('endstream\n');
    endObj();
  }

  // XREF
  const startXrefOffset = currentOffset;
  const totalObjs = currentObjId + 1;
  writeChunk(`xref\n0 ${totalObjs}\n`);
  writeChunk('0000000000 65535 f \n');
  for (let id = 1; id < totalObjs; id++) {
    const offsetStr = String(xrefOffsets[id]).padStart(10, '0');
    writeChunk(`${offsetStr} 00000 n \n`);
  }

  // Trailer
  writeChunk(`trailer\n<< /Size ${totalObjs} /Root 1 0 R >>\n`);
  writeChunk(`startxref\n${startXrefOffset}\n%%EOF\n`);

  return new Blob(parts as any[], { type: 'application/pdf' });
}

// Convert data URL to binary Uint8Array
function dataUrlToUint8Array(dataUrl: string): Uint8Array {
  const base64Index = dataUrl.indexOf(';base64,');
  if (base64Index === -1) {
    throw new Error('Invalid data URL');
  }
  const base64Str = dataUrl.substring(base64Index + 8);
  const binaryStr = atob(base64Str);
  const len = binaryStr.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryStr.charCodeAt(i);
  }
  return bytes;
}

// ── Export to PDF ─────────────────────────────────────────────────────────────
export interface ExportPdfOptions {
  slides?: any;
  elements?: any[];
  templateName?: string;
  canvasWidth?: number;
  canvasHeight?: number;
  backgroundColor?: string;
  backgroundGradient?: string;
  onProgress?: (progress: number, message: string) => void;
}

export async function exportToPdf({
  slides,
  elements,
  templateName = 'Document',
  canvasWidth = 1920,
  canvasHeight = 1080,
  backgroundColor = '#ffffff',
  backgroundGradient = '',
  onProgress
}: ExportPdfOptions): Promise<void> {
  const slidesList = normalizeSlidesList(slides, elements);
  const totalPages = slidesList.length;
  const cW = canvasWidth || 1920;
  const cH = canvasHeight || 1080;

  onProgress?.(5, 'Awaiting fonts and assets...');

  // Wait for fonts
  if (typeof document !== 'undefined' && (document as any).fonts) {
    try {
      await (document as any).fonts.ready;
    } catch (_e) {}
  }

  // Preload all fonts and assets across all slides
  await Promise.all(
    slidesList.map(async (slideEls, idx) => {
      try {
        await loadTemplateFonts(slideEls, { templateId: templateName, pageId: idx + 1 });
        await preloadTemplateAssets({ elements: slideEls }, { templateId: templateName, pageId: idx + 1 });
      } catch (_e) {}
    })
  );

  const renderedPages: Array<{ width: number; height: number; jpegBytes: Uint8Array }> = [];
  const offscreenCanvas = document.createElement('canvas');
  offscreenCanvas.width = cW;
  offscreenCanvas.height = cH;
  const ctx = offscreenCanvas.getContext('2d', { alpha: false });

  if (!ctx) {
    throw new Error('Could not create off-screen 2D canvas for PDF rendering.');
  }

  const effectiveBg = backgroundGradient && backgroundGradient.includes('gradient')
    ? backgroundGradient
    : (backgroundColor || '#ffffff');

  for (let i = 0; i < totalPages; i++) {
    const slideEls = slidesList[i];
    onProgress?.(
      Math.round(15 + (i / totalPages) * 70),
      `Rendering page ${i + 1} of ${totalPages}...`
    );

    ctx.clearRect(0, 0, cW, cH);
    renderCanonicalSlideToContext(ctx, slideEls, cW, cH, effectiveBg, {
      context: { templateId: templateName, pageId: i + 1 }
    });

    const jpegDataUrl = offscreenCanvas.toDataURL('image/jpeg', 0.95);
    const jpegBytes = dataUrlToUint8Array(jpegDataUrl);

    renderedPages.push({
      width: cW,
      height: cH,
      jpegBytes
    });
  }

  onProgress?.(90, 'Assembling multi-page PDF document...');
  const pdfBlob = generatePdfBlob(renderedPages);

  const url = URL.createObjectURL(pdfBlob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${templateName.trim().replace(/[/\\?%*:|"<>]/g, '_').replace(/\s+/g, '_')}.pdf`;
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 10000);

  onProgress?.(100, 'PDF export complete!');
}

// ── Safe File Name Sanitizer ──────────────────────────────────────────────────
export function sanitizeSvgFilename(name?: string): string {
  if (!name || typeof name !== 'string') return 'Design';
  const clean = name
    .trim()
    .replace(/[<>:"/\\|?*#%&'@+=\^\`~;!$,\[\]{}()]/g, '_')
    .replace(/\s+/g, '_')
    .replace(/_+/g, '_')
    .replace(/^_+|_+$/g, '');
  return clean || 'Design';
}

// ── Export to SVG ─────────────────────────────────────────────────────────────
export interface ExportSvgOptions {
  slides?: any;
  elements?: any[];
  templateName?: string;
  activeSlideIdx?: number;
  canvasWidth?: number;
  canvasHeight?: number;
  backgroundColor?: string;
  backgroundGradient?: string;
  onProgress?: (progress: number, message: string) => void;
}

// Core Text Line Computation Helper matching renderEngine
function computeSvgTextLines(
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

// Helper to generate a single page SVG XML string
async function generatePageSvgString(
  elements: any[],
  pageIdx: number,
  templateName: string,
  cW: number,
  cH: number,
  backgroundColor: string,
  backgroundGradient: string
): Promise<string> {
  // Preload and convert all images on this slide to base64 Data URIs
  const imageMap = new Map<string, string | null>();
  const imageUrls: string[] = [];

  elements.forEach(el => {
    const src = resolveElementImageSrc(el);
    if (src && !imageMap.has(src)) {
      imageMap.set(src, null);
      imageUrls.push(src);
    }
  });

  if (imageUrls.length > 0) {
    await Promise.all(
      imageUrls.map(async (src) => {
        try {
          const b64 = await convertImageSourceToBase64(src);
          if (b64) imageMap.set(src, b64);
        } catch (_e) {}
      })
    );
  }

  // Offscreen 2D canvas for exact font measurement and wrapping matching the editor
  const measureCanvas = document.createElement('canvas');
  measureCanvas.width = cW;
  measureCanvas.height = cH;
  const measureCtx = measureCanvas.getContext('2d');

  let defs = '';
  const GOOGLE_FONTS_URL = "https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=DM+Sans:wght@400;500;700&family=IBM+Plex+Mono:ital,wght@0,400;0,500;0,600;1,400&family=Inter:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400;1,600&family=Lato:ital,wght@0,300;0,400;0,700;1,400&family=Merriweather:ital,wght@0,300;0,400;0,700;1,400&family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400&family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;1,400&family=Oswald:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&family=Raleway:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,400&family=Space+Grotesk:wght@400;500;600;700&family=Syne:wght@400;500;600;700;800&display=swap";
  defs += `  <style><![CDATA[\n    @import url('${GOOGLE_FONTS_URL}');\n    text { font-feature-settings: 'cv02', 'cv03', 'cv04', 'cv11'; }\n  ]]></style>\n`;

  let bgFill = xmlEscape(backgroundColor || '#0a0d14');

  if (backgroundGradient && backgroundGradient.includes('gradient')) {
    const colors = backgroundGradient.match(/#[0-9a-fA-F]{6}|#[0-9a-fA-F]{3}|rgba?\([^)]+\)/g);
    if (colors && colors.length >= 2) {
      defs += `  <linearGradient id="bg-grad" x1="0%" y1="0%" x2="100%" y2="100%">\n`;
      colors.forEach((col, idx) => {
        const offset = Math.round((idx / (colors.length - 1)) * 100);
        defs += `    <stop offset="${offset}%" stop-color="${xmlEscape(col)}" />\n`;
      });
      defs += `  </linearGradient>\n`;
      bgFill = 'url(#bg-grad)';
    }
  }

  // Clip paths for rounded images & text elements
  elements.forEach((el, idx) => {
    if (el.type === 'image' && el.borderRadius) {
      defs += `  <clipPath id="clip-img-${idx}">\n`;
      defs += `    <rect x="${el.x}" y="${el.y}" width="${el.width}" height="${el.height}" rx="${el.borderRadius}" ry="${el.borderRadius}" />\n`;
      defs += `  </clipPath>\n`;
    }
    if (el.type === 'text') {
      defs += `  <clipPath id="clip-text-${idx}">\n`;
      defs += `    <rect x="${el.x}" y="${el.y}" width="${el.width}" height="${el.height}" />\n`;
      defs += `  </clipPath>\n`;
    }
  });

  let svg = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  svg += `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 ${cW} ${cH}" width="${cW}" height="${cH}">\n`;
  if (defs) {
    svg += `<defs>\n${defs}</defs>\n`;
  }
  svg += `<rect width="${cW}" height="${cH}" fill="${bgFill}" />\n`;

  elements.forEach((el, idx) => {
    if (el.visible === false || el.id === 'bg' || el.id?.endsWith('-bg')) return;
    if (el.type === 'rect' && el.x === 0 && el.y === 0 && el.width >= cW && el.height >= cH && !el.stroke) return;

    const opacity = el.opacity !== undefined && el.opacity < 1 ? ` opacity="${el.opacity}"` : '';
    const transform = el.rotation ? ` transform="rotate(${el.rotation} ${el.x + el.width / 2} ${el.y + el.height / 2})"` : '';
    const strokeAttr = el.stroke && el.stroke !== 'transparent' && (el.strokeWidth || 0) > 0
      ? ` stroke="${xmlEscape(el.stroke)}" stroke-width="${el.strokeWidth || 1}"`
      : '';
    const rxAttr = el.borderRadius ? ` rx="${el.borderRadius}" ry="${el.borderRadius}"` : '';

    const imageSrc = resolveElementImageSrc(el);

    if (el.type === 'image' || imageSrc) {
      const b64 = imageSrc ? imageMap.get(imageSrc) : null;
      if (b64) {
        const clipAttr = el.borderRadius ? ` clip-path="url(#clip-img-${idx})"` : '';
        svg += `<image href="${xmlEscape(b64)}" x="${el.x}" y="${el.y}" width="${el.width}" height="${el.height}" preserveAspectRatio="xMidYMid slice"${clipAttr}${opacity}${transform} />\n`;
        if (strokeAttr) {
          svg += `<rect x="${el.x}" y="${el.y}" width="${el.width}" height="${el.height}" fill="none"${rxAttr}${strokeAttr}${opacity}${transform} />\n`;
        }
      }
      return;
    }

    switch (el.type) {
      case 'rect':
        svg += `<rect x="${el.x}" y="${el.y}" width="${el.width}" height="${el.height}" fill="${xmlEscape(el.fill || '#ffffff')}"${rxAttr}${strokeAttr}${opacity}${transform} />\n`;
        break;

      case 'circle':
        svg += `<ellipse cx="${el.x + el.width / 2}" cy="${el.y + el.height / 2}" rx="${el.width / 2}" ry="${el.height / 2}" fill="${xmlEscape(el.fill || '#ffffff')}"${strokeAttr}${opacity}${transform} />\n`;
        break;

      case 'triangle':
        svg += `<polygon points="${el.x + el.width / 2},${el.y} ${el.x + el.width},${el.y + el.height} ${el.x},${el.y + el.height}" fill="${xmlEscape(el.fill || '#ffffff')}"${strokeAttr}${opacity}${transform} />\n`;
        break;

      case 'star': {
        const cx = el.x + el.width / 2;
        const cy = el.y + el.height / 2;
        const r = Math.min(el.width, el.height) / 2;
        const pts: string[] = [];
        for (let i = 0; i < 10; i++) {
          const rad = i % 2 === 0 ? r : r * 0.45;
          const ang = (Math.PI / 5) * i - Math.PI / 2;
          pts.push(`${(cx + Math.cos(ang) * rad).toFixed(1)},${(cy + Math.sin(ang) * rad).toFixed(1)}`);
        }
        svg += `<polygon points="${pts.join(' ')}" fill="${xmlEscape(el.fill || '#ffffff')}"${strokeAttr}${opacity}${transform} />\n`;
        break;
      }

      case 'line':
        svg += `<line x1="${el.x}" y1="${el.y + el.height / 2}" x2="${el.x + el.width}" y2="${el.y + el.height / 2}" stroke="${xmlEscape(el.stroke || el.fill || '#ffffff')}" stroke-width="${el.strokeWidth || 2}"${opacity}${transform} />\n`;
        break;

      case 'arrow': {
        const yCenter = el.y + el.height / 2;
        const headSize = 14;
        const x2 = el.x + el.width;
        svg += `<line x1="${el.x}" y1="${yCenter}" x2="${x2}" y2="${yCenter}" stroke="${xmlEscape(el.stroke || el.fill || '#ffffff')}" stroke-width="${el.strokeWidth || 2}"${opacity}${transform} />\n`;
        svg += `<polygon points="${x2},${yCenter} ${x2 - headSize},${yCenter - headSize * 0.5} ${x2 - headSize},${yCenter + headSize * 0.5}" fill="${xmlEscape(el.fill || el.stroke || '#ffffff')}"${opacity}${transform} />\n`;
        break;
      }

      case 'text': {
        const resolved = resolveFont(el.fontFamily, el.fontWeight, el.fontStyle, {
          templateId: templateName,
          pageId: pageIdx + 1,
          elementId: el.id
        });

        let fsz = el.fontSize || 20;
        const maxWidth = Math.max(el.width - 4, 30);
        const maxHeight = Math.max(el.height - 4, 20);

        const letterSpacingAttr = el.letterSpacing !== undefined ? ` letter-spacing="${el.letterSpacing}px"` : '';

        if (measureCtx) {
          try {
            (measureCtx as any).letterSpacing = el.letterSpacing !== undefined ? `${el.letterSpacing}px` : '0px';
          } catch (_e) {}
          measureCtx.font = `${resolved.style} ${resolved.weight} ${fsz}px "${resolved.family}"`;
        }

        let lines = measureCtx
          ? computeSvgTextLines(measureCtx, el.text || el.content || '', maxWidth)
          : String(el.text || el.content || '').split('\n');
        let lineH = fsz * (el.lineHeight || 1.25);
        let totalH = lines.length * lineH;
        const minFsz = Math.max(10, Math.min(14, Math.floor(fsz * 0.6)));

        if (measureCtx) {
          while (totalH > maxHeight && fsz > minFsz) {
            fsz = Math.max(minFsz, Math.floor(fsz * 0.9));
            measureCtx.font = `${resolved.style} ${resolved.weight} ${fsz}px "${resolved.family}"`;
            lineH = fsz * (el.lineHeight || 1.25);
            lines = computeSvgTextLines(measureCtx, el.text || el.content || '', maxWidth);
            totalH = lines.length * lineH;
          }
        }

        let yOffset = 2;
        if (el.verticalAlign === 'middle') {
          yOffset = Math.max(2, (el.height - totalH) / 2);
        } else if (el.verticalAlign === 'bottom') {
          yOffset = Math.max(2, el.height - totalH - 2);
        }

        const isCenter = el.textAlign === 'center' || el.alignment === 'center';
        const isRight = el.textAlign === 'right' || el.alignment === 'right';

        const fw = resolved.weight >= 700 || el.fontWeight === 'bold'
          ? ` font-weight="${resolved.weight}"`
          : (resolved.weight !== 400 ? ` font-weight="${resolved.weight}"` : '');
        const fst = resolved.style === 'italic' ? ' font-style="italic"' : '';
        const fillCol = xmlEscape(el.fill || '#ffffff');
        const fontFamily = xmlEscape(resolved.family);

        svg += `<g clip-path="url(#clip-text-${idx})"${opacity}${transform}>\n`;
        lines.forEach((line, i) => {
          if (!line) return;
          const lineW = measureCtx ? measureCtx.measureText(line).width : 0;
          let xOffset = 2;
          let textAnchor = '';
          let anchorX = el.x + xOffset;
          if (isCenter) {
            textAnchor = ' text-anchor="middle"';
            anchorX = el.x + el.width / 2;
          } else if (isRight) {
            textAnchor = ' text-anchor="end"';
            anchorX = el.x + el.width - 2;
          }

          const posY = el.y + yOffset + i * lineH;
          const baselineY = posY + Math.round(fsz * 0.84);

          svg += `  <text x="${anchorX}" y="${baselineY}" fill="${fillCol}" font-family="${fontFamily}, ${xmlEscape(resolved.family)}, sans-serif" font-size="${fsz}"${fw}${fst}${textAnchor}${letterSpacingAttr}>${xmlEscape(line)}</text>\n`;

          if (el.textDecoration === 'underline') {
            const underlineX = isCenter ? el.x + (el.width - lineW) / 2 : (isRight ? el.x + el.width - lineW - 2 : el.x + 2);
            const underlineY = posY + fsz + 2;
            svg += `  <line x1="${underlineX}" y1="${underlineY}" x2="${underlineX + lineW}" y2="${underlineY}" stroke="${fillCol}" stroke-width="${Math.max(1, fsz * 0.06)}" />\n`;
          }
        });
        svg += `</g>\n`;
        break;
      }
    }
  });

  svg += `</svg>\n`;

  // Validate XML well-formedness
  if (typeof DOMParser !== 'undefined') {
    const parser = new DOMParser();
    const doc = parser.parseFromString(svg, 'image/svg+xml');
    const parserError = doc.querySelector('parsererror');
    if (parserError) {
      console.error('[SVG EXPORT ERROR] XML Validation Failed:', parserError.textContent);
      throw new Error(`Invalid SVG XML: ${parserError.textContent}`);
    }
  }

  return svg;
}

export async function exportToSvg({
  slides,
  elements,
  templateName = 'Design',
  activeSlideIdx = 0,
  canvasWidth = 1920,
  canvasHeight = 1080,
  backgroundColor = '#ffffff',
  backgroundGradient = '',
  onProgress
}: ExportSvgOptions): Promise<void> {
  console.log('[SVG EXPORT] handler started');
  const cW = canvasWidth || 1920;
  const cH = canvasHeight || 1080;
  const safeTemplateName = sanitizeSvgFilename(templateName);

  // Normalize slides
  const slidesList = normalizeSlidesList(slides, elements);
  const totalPages = slidesList.length;
  console.log(`[SVG EXPORT] pages found: ${totalPages}`);

  onProgress?.(5, 'Loading and awaiting all typography and fonts...');

  // 1. Await font definitions and load all required typefaces for accurate measurement
  if (typeof document !== 'undefined' && (document as any).fonts) {
    try {
      await (document as any).fonts.ready;
    } catch (_e) {}
  }
  try {
    for (let i = 0; i < totalPages; i++) {
      await loadTemplateFonts(slidesList[i], { templateId: templateName, pageId: i + 1 });
    }
    if (typeof document !== 'undefined' && (document as any).fonts) {
      await (document as any).fonts.ready;
    }
  } catch (_e) {}

  // 2. Generate and download each page
  for (let i = 0; i < totalPages; i++) {
    const pageNum = i + 1;
    console.log(`[SVG EXPORT] generating page: ${pageNum}`);
    onProgress?.(
      Math.round(20 + (i / totalPages) * 70),
      `Rendering vector SVG page ${pageNum} of ${totalPages}...`
    );

    const slideEls = slidesList[i];
    const svgString = await generatePageSvgString(
      slideEls,
      i,
      templateName,
      cW,
      cH,
      backgroundColor,
      backgroundGradient
    );
    console.log('[SVG EXPORT] SVG generated');

    const blob = new Blob([svgString], {
      type: 'image/svg+xml;charset=utf-8'
    });
    console.log('[SVG EXPORT] blob created');

    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = `${safeTemplateName}_page_${pageNum}.svg`;
    document.body.appendChild(a);
    console.log('[SVG EXPORT] download started');
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);

    // If multiple pages, add a small stagger so browser does not drop parallel downloads
    if (totalPages > 1 && i < totalPages - 1) {
      await new Promise(r => setTimeout(r, 250));
    }
  }

  onProgress?.(100, 'SVG export complete!');
}

// ── Export to JSON ────────────────────────────────────────────────────────────
export function exportToJson({
  elements,
  slides,
  templateName = 'Design',
  canvasWidth = 1920,
  canvasHeight = 1080,
  backgroundColor = '#ffffff',
  backgroundGradient = ''
}: {
  elements: any[];
  slides?: any[][];
  templateName?: string;
  canvasWidth?: number;
  canvasHeight?: number;
  backgroundColor?: string;
  backgroundGradient?: string;
}) {
  const payload = {
    name: templateName,
    canvasWidth,
    canvasHeight,
    backgroundColor,
    backgroundGradient,
    elements,
    slides: slides || [elements],
    exportedAt: new Date().toISOString()
  };

  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${templateName.trim().replace(/[/\\?%*:|"<>]/g, '_').replace(/\s+/g, '_')}.json`;
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 10000);
}

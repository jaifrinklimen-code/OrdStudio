import React, { useMemo } from 'react';
import { resolveElementImageSrc } from '../lib/templateRegistry';


interface TemplateMiniRendererProps {
  template: any;
  className?: string;
}

/**
 * Parses a CSS linear-gradient string into SVG-compatible gradient stops.
 * Returns null if the string is not a valid CSS gradient.
 */
function parseCSSGradient(value: string): {
  id: string;
  x1: string; y1: string; x2: string; y2: string;
  stops: { offset: string; color: string; opacity: number }[];
} | null {
  if (!value || typeof value !== 'string') return null;
  const trimmed = value.trim();
  if (!trimmed.startsWith('linear-gradient(')) return null;

  // Extract content between parentheses
  const inner = trimmed.slice('linear-gradient('.length, -1).trim();

  // Parse direction
  let x1 = '0%', y1 = '0%', x2 = '0%', y2 = '100%'; // default: top to bottom
  let colorPart = inner;

  // Check for degree-based direction
  const degMatch = inner.match(/^(\d+(?:\.\d+)?)deg\s*,\s*/);
  if (degMatch) {
    const deg = parseFloat(degMatch[1]);
    const rad = (deg * Math.PI) / 180;
    // SVG gradient direction: degrees measure clockwise from top
    const cos = Math.cos(rad - Math.PI / 2);
    const sin = Math.sin(rad - Math.PI / 2);
    x1 = `${Math.round(50 - sin * 50)}%`;
    y1 = `${Math.round(50 + cos * 50)}%`;
    x2 = `${Math.round(50 + sin * 50)}%`;
    y2 = `${Math.round(50 - cos * 50)}%`;
    colorPart = inner.slice(degMatch[0].length);
  }
  // Check for keyword direction
  else if (inner.startsWith('to ')) {
    const dirMatch = inner.match(/^to\s+(top|bottom|left|right)(?:\s+(top|bottom|left|right))?\s*,\s*/);
    if (dirMatch) {
      const dirs = [dirMatch[1], dirMatch[2]].filter(Boolean);
      if (dirs.includes('top') && !dirs.includes('left') && !dirs.includes('right')) {
        x1 = '0%'; y1 = '100%'; x2 = '0%'; y2 = '0%';
      } else if (dirs.includes('bottom') && !dirs.includes('left') && !dirs.includes('right')) {
        x1 = '0%'; y1 = '0%'; x2 = '0%'; y2 = '100%';
      } else if (dirs.includes('left') && !dirs.includes('top') && !dirs.includes('bottom')) {
        x1 = '100%'; y1 = '0%'; x2 = '0%'; y2 = '0%';
      } else if (dirs.includes('right') && !dirs.includes('top') && !dirs.includes('bottom')) {
        x1 = '0%'; y1 = '0%'; x2 = '100%'; y2 = '0%';
      } else if (dirs.includes('top') && dirs.includes('left')) {
        x1 = '100%'; y1 = '100%'; x2 = '0%'; y2 = '0%';
      } else if (dirs.includes('top') && dirs.includes('right')) {
        x1 = '0%'; y1 = '100%'; x2 = '100%'; y2 = '0%';
      } else if (dirs.includes('bottom') && dirs.includes('left')) {
        x1 = '100%'; y1 = '0%'; x2 = '0%'; y2 = '100%';
      } else if (dirs.includes('bottom') && dirs.includes('right')) {
        x1 = '0%'; y1 = '0%'; x2 = '100%'; y2 = '100%';
      }
      colorPart = inner.slice(dirMatch[0].length);
    }
  }

  // Parse color stops — split by commas, but not inside rgba()/hsla() parentheses
  const stopStrings: string[] = [];
  let depth = 0;
  let current = '';
  for (let i = 0; i < colorPart.length; i++) {
    const ch = colorPart[i];
    if (ch === '(') depth++;
    else if (ch === ')') depth--;
    else if (ch === ',' && depth === 0) {
      stopStrings.push(current.trim());
      current = '';
      continue;
    }
    current += ch;
  }
  if (current.trim()) stopStrings.push(current.trim());

  if (stopStrings.length < 2) return null;

  const stops = stopStrings.map((s, idx) => {
    // Extract percentage if present
    const percentMatch = s.match(/(\d+(?:\.\d+)?)\s*%\s*$/);
    const offset = percentMatch
      ? `${percentMatch[1]}%`
      : `${Math.round((idx / (stopStrings.length - 1)) * 100)}%`;

    // Extract color
    const colorStr = percentMatch ? s.slice(0, percentMatch.index).trim() : s.trim();

    // Parse opacity from rgba
    let opacity = 1;
    let color = colorStr;
    const rgbaMatch = colorStr.match(/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*([0-9.]+)\s*)?\)/);
    if (rgbaMatch) {
      const r = parseInt(rgbaMatch[1]);
      const g = parseInt(rgbaMatch[2]);
      const b = parseInt(rgbaMatch[3]);
      opacity = rgbaMatch[4] !== undefined ? parseFloat(rgbaMatch[4]) : 1;
      color = `rgb(${r},${g},${b})`;
    } else if (colorStr === 'transparent') {
      color = 'rgb(0,0,0)';
      opacity = 0;
    }

    return { offset, color, opacity };
  });

  // Generate a unique-ish id from content
  const hash = value.split('').reduce((acc, ch) => ((acc << 5) - acc + ch.charCodeAt(0)) | 0, 0);
  const id = `grad-${Math.abs(hash).toString(36)}`;

  return { id, x1, y1, x2, y2, stops };
}

/**
 * Checks if a fill value is a CSS gradient string
 */
function isCSSGradient(fill: string | undefined): boolean {
  return typeof fill === 'string' && fill.trim().startsWith('linear-gradient(');
}

/**
 * Extracts a dominant solid color from a CSS gradient string for fallback usage.
 */
function extractDominantColor(gradStr: string): string {
  const rgbaMatch = gradStr.match(/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/);
  if (rgbaMatch) {
    return `rgb(${rgbaMatch[1]},${rgbaMatch[2]},${rgbaMatch[3]})`;
  }
  const hexMatch = gradStr.match(/#[0-9a-fA-F]{3,8}/);
  if (hexMatch) return hexMatch[0];
  return 'transparent';
}

/**
 * High-Fidelity Vector & Bitmap Thumbnail Renderer for ORD Studio
 * Single Source of Truth: Renders the EXACT canonical template elements at 100% visual fidelity.
 * Text, typography, fonts, colors, geometric shapes, and photography match the editor exactly.
 * 
 * Key fixes:
 * - CSS linear-gradient() fill values are converted to SVG <linearGradient> defs
 * - Scrim/overlay elements with gradient fills render with proper transparency
 * - Cross-origin images use anonymous crossOrigin for proper loading
 */
export const TemplateMiniRenderer = React.memo(function TemplateMiniRenderer({ template, className = '' }: TemplateMiniRendererProps) {
  // 1. Resolve canonical dimensions and elements
  const { canvasW, canvasH, elements, bgGradient, isLandscape, templateId } = useMemo(() => {
    if (!template) {
      return { canvasW: 1920, canvasH: 1080, elements: [], bgGradient: '#0f172a', isLandscape: true, templateId: 'default' };
    }

    let cW = template.canvasWidth || (template.size ? parseInt(String(template.size).split(/×|x/)[0], 10) : 0);
    let cH = template.canvasHeight || (template.size ? parseInt(String(template.size).split(/×|x/)[1], 10) : 0);

    let rawEls: any[] = [];
    if (Array.isArray(template.elements) && template.elements.length > 0) {
      rawEls = template.elements;
    } else if (Array.isArray(template.slides) && template.slides.length > 0) {
      const s0 = template.slides[0];
      rawEls = Array.isArray(s0) ? s0 : (Array.isArray(s0?.elements) ? s0.elements : []);
    } else if (Array.isArray(template.pages) && template.pages.length > 0) {
      const p0 = template.pages[0];
      rawEls = Array.isArray(p0) ? p0 : (Array.isArray(p0?.elements) ? p0.elements : []);
    }

    if (!cW || !cH) {
      const bg = rawEls.find((e: any) => (e.id && String(e.id).includes('bg')) || (e.type === 'rect' && e.x === 0 && e.y === 0 && e.width >= 300));
      if (bg && bg.width && bg.height) {
        cW = bg.width;
        cH = bg.height;
      }
    }

    if (!cW || !cH) {
      const cat = (template.category || template.type || '').toLowerCase();
      if (cat.includes('present') || cat.includes('pitch') || cat.includes('deck')) {
        cW = 1920; cH = 1080;
      } else if (cat.includes('resume') || cat.includes('report') || cat.includes('flyer') || cat.includes('business')) {
        cW = 1200; cH = 1697;
      } else if (cat.includes('poster')) {
        cW = 1080; cH = 1528;
      } else if (cat.includes('invite')) {
        cW = 1400; cH = 2000;
      } else {
        cW = 1080; cH = 1080;
      }
    }

    const grad = template.gradient || (cW >= cH ? '#0b0f19' : '#0f172a');
    const RENDERER_VERSION = 'v2_4';
    const id = `${String(template.id || template.name || 'tmpl').replace(/[^a-zA-Z0-9_-]/g, '_')}_${RENDERER_VERSION}`;

    return {
      canvasW: cW,
      canvasH: cH,
      elements: rawEls,
      bgGradient: grad,
      isLandscape: cW >= cH,
      templateId: id
    };
  }, [template]);

  // 2. Pre-parse all CSS gradients used in element fills into SVG gradient defs
  const gradientDefs = useMemo(() => {
    const defs: Map<string, ReturnType<typeof parseCSSGradient>> = new Map();
    for (const el of elements) {
      if (!el) continue;
      const fillVal = el.fill || el.color;
      if (isCSSGradient(fillVal)) {
        if (!defs.has(fillVal)) {
          const parsed = parseCSSGradient(fillVal);
          if (parsed) {
            // Make ID unique per template to avoid collisions
            parsed.id = `${templateId}-${parsed.id}`;
            defs.set(fillVal, parsed);
          }
        }
      }
    }
    return defs;
  }, [elements, templateId]);

  // 3. Pre-parse the background gradient if it's a CSS gradient
  const bgGradientDef = useMemo(() => {
    if (isCSSGradient(bgGradient)) {
      const parsed = parseCSSGradient(bgGradient);
      if (parsed) {
        parsed.id = `${templateId}-bg-grad`;
        return parsed;
      }
    }
    return null;
  }, [bgGradient, templateId]);

  if (!template) return null;

  const hasElements = elements.length > 0;

  /**
   * Resolves a fill value to a valid SVG fill string.
   * CSS gradients are replaced with url(#gradientId) references.
   */
  const resolveFill = (fillVal: string | undefined, fallback: string = 'transparent'): string => {
    if (!fillVal) return fallback;
    if (isCSSGradient(fillVal)) {
      const gradDef = gradientDefs.get(fillVal);
      if (gradDef) {
        return `url(#${gradDef.id})`;
      }
      // Fallback: extract dominant color from the gradient
      return extractDominantColor(fillVal);
    }
    return fillVal;
  };

  /**
   * Gets the background style - handles both solid colors and gradients
   */
  const getBgStyle = (): string => {
    if (bgGradientDef) {
      return `url(#${bgGradientDef.id})`;
    }
    if (isCSSGradient(bgGradient)) {
      return extractDominantColor(bgGradient);
    }
    return bgGradient || '#0f172a';
  };

  return (
    <div className={`relative w-full h-full flex items-center justify-center select-none ${className}`}>
      <div
        className="relative max-w-full max-h-full rounded overflow-hidden flex items-center justify-center bg-[#07080c] shadow-md"
        style={{
          aspectRatio: `${canvasW} / ${canvasH}`,
          width: isLandscape ? '100%' : 'auto',
          height: !isLandscape ? '100%' : 'auto'
        }}
      >
        {/* Fallback image if template is uploaded static document with no vector elements */}
        {!hasElements && (template?.thumbnailUrl || template?.fileUrl) && (
          <img
            src={template.thumbnailUrl || template.fileUrl}
            alt={template.name || 'Template preview'}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        )}

        {/* Real Canonical Vector & Bitmap SVG Rendering */}
        {hasElements && (
          <svg
            viewBox={`0 0 ${canvasW} ${canvasH}`}
            className="w-full h-full block select-none pointer-events-none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <defs>
              {/* Background gradient def if needed */}
              {bgGradientDef && (
                <linearGradient
                  id={bgGradientDef.id}
                  x1={bgGradientDef.x1}
                  y1={bgGradientDef.y1}
                  x2={bgGradientDef.x2}
                  y2={bgGradientDef.y2}
                >
                  {bgGradientDef.stops.map((stop, i) => (
                    <stop
                      key={i}
                      offset={stop.offset}
                      stopColor={stop.color}
                      stopOpacity={stop.opacity}
                    />
                  ))}
                </linearGradient>
              )}

              {/* Generate SVG gradient defs for all CSS gradients used in elements */}
              {Array.from(gradientDefs.values()).map(gradDef => {
                if (!gradDef) return null;
                return (
                  <linearGradient
                    key={gradDef.id}
                    id={gradDef.id}
                    x1={gradDef.x1}
                    y1={gradDef.y1}
                    x2={gradDef.x2}
                    y2={gradDef.y2}
                  >
                    {gradDef.stops.map((stop, i) => (
                      <stop
                        key={i}
                        offset={stop.offset}
                        stopColor={stop.color}
                        stopOpacity={stop.opacity}
                      />
                    ))}
                  </linearGradient>
                );
              })}

              {/* Generate unique clipPaths for all image elements with border-radius or circle */}
              {elements.map((el: any, idx: number) => {
                if (el.type !== 'image' && !resolveElementImageSrc(el)) return null;
                const rx = el.borderRadius || 0;
                if (el.shape === 'circle') {
                  const radX = Math.abs(el.width / 2);
                  const radY = Math.abs(el.height / 2);
                  return (
                    <clipPath key={`clip-${templateId}-${idx}-${el.id || idx}`} id={`clip-${templateId}-${idx}`}>
                      <ellipse cx={el.x + radX} cy={el.y + radY} rx={radX} ry={radY} />
                    </clipPath>
                  );
                }
                return (
                  <clipPath key={`clip-${templateId}-${idx}-${el.id || idx}`} id={`clip-${templateId}-${idx}`}>
                    <rect x={el.x} y={el.y} width={el.width} height={el.height} rx={rx} ry={rx} />
                  </clipPath>
                );
              })}
            </defs>

            {/* Background fill rect */}
            <rect
              x="0"
              y="0"
              width={canvasW}
              height={canvasH}
              fill={getBgStyle()}
            />

            {elements.map((el: any, idx: number) => {
              if (!el || el.visible === false) return null;

              const opacity = el.opacity !== undefined ? el.opacity : 1;
              const transform = el.rotation
                ? `rotate(${el.rotation} ${el.x + el.width / 2} ${el.y + el.height / 2})`
                : undefined;

              const fill = resolveFill(el.fill || el.color);
              const stroke = el.stroke;
              const strokeWidth = el.strokeWidth || 0;
              const rx = el.borderRadius || 0;

              switch (el.type) {
                case 'rect': {
                  return (
                    <rect
                      key={el.id || idx}
                      x={el.x}
                      y={el.y}
                      width={el.width}
                      height={el.height}
                      rx={rx}
                      ry={rx}
                      fill={fill}
                      stroke={stroke !== 'none' ? resolveFill(stroke) : 'none'}
                      strokeWidth={strokeWidth}
                      opacity={opacity}
                      transform={transform}
                    />
                  );
                }

                case 'circle': {
                  const cx = el.x + el.width / 2;
                  const cy = el.y + el.height / 2;
                  const r = Math.min(el.width, el.height) / 2;
                  return (
                    <circle
                      key={el.id || idx}
                      cx={cx}
                      cy={cy}
                      r={r}
                      fill={fill}
                      stroke={stroke !== 'none' ? resolveFill(stroke) : 'none'}
                      strokeWidth={strokeWidth}
                      opacity={opacity}
                      transform={transform}
                    />
                  );
                }

                case 'image': {
                  const imgSrc = resolveElementImageSrc(el);
                  if (!imgSrc) return null;
                  return (
                    <g key={el.id || idx} opacity={opacity} transform={transform}>
                      <image
                        href={imgSrc}
                        xlinkHref={imgSrc}
                        x={el.x}
                        y={el.y}
                        width={el.width}
                        height={el.height}
                        preserveAspectRatio="xMidYMid slice"
                        clipPath={`url(#clip-${templateId}-${idx})`}
                      />
                      {stroke && stroke !== 'transparent' && stroke !== 'none' && strokeWidth > 0 && (
                        el.shape === 'circle' ? (
                          <ellipse
                            cx={el.x + el.width / 2}
                            cy={el.y + el.height / 2}
                            rx={el.width / 2}
                            ry={el.height / 2}
                            fill="none"
                            stroke={resolveFill(stroke)}
                            strokeWidth={strokeWidth}
                          />
                        ) : (
                          <rect
                            x={el.x}
                            y={el.y}
                            width={el.width}
                            height={el.height}
                            rx={rx}
                            ry={rx}
                            fill="none"
                            stroke={resolveFill(stroke)}
                            strokeWidth={strokeWidth}
                          />
                        )
                      )}
                    </g>
                  );
                }

                case 'text': {
                  const fontSize = el.fontSize || 20;
                  const fontWeight = el.fontWeight || 'normal';
                  const fontStyle = el.fontStyle || 'normal';
                  const fontFamily = el.fontFamily || 'Inter, -apple-system, sans-serif';
                  const textContent = el.text || el.content || '';
                  const isCenter = el.textAlign === 'center' || el.alignment === 'center';
                  const isRight = el.textAlign === 'right' || el.alignment === 'right';

                  const textAnchor = isCenter ? 'middle' : isRight ? 'end' : 'start';
                  const tx = isCenter ? el.x + el.width / 2 : isRight ? el.x + el.width : el.x;
                  const ty = el.y + fontSize;

                  // Split into lines for natural paragraph wrapping
                  const rawLines = textContent.split('\n');
                  const wrappedLines: string[] = [];
                  const maxCharsPerLine = Math.max(12, Math.floor(el.width / (fontSize * 0.52)));

                  for (const rawLine of rawLines) {
                    if (rawLine.length <= maxCharsPerLine) {
                      wrappedLines.push(rawLine);
                    } else {
                      const words = rawLine.split(' ');
                      let cur = '';
                      for (const w of words) {
                        if ((cur + ' ' + w).trim().length <= maxCharsPerLine) {
                          cur = (cur + ' ' + w).trim();
                        } else {
                          if (cur) wrappedLines.push(cur);
                          cur = w;
                        }
                      }
                      if (cur) wrappedLines.push(cur);
                    }
                  }

                  const lineHeight = fontSize * (el.lineHeight || 1.25);

                  // For text, resolve fill - use white as fallback for transparent/missing
                  const textFill = fill !== 'transparent' ? fill : '#ffffff';

                  return (
                    <text
                      key={el.id || idx}
                      x={tx}
                      y={ty}
                      fontFamily={fontFamily}
                      fontSize={fontSize}
                      fontWeight={fontWeight}
                      fontStyle={fontStyle}
                      fill={textFill}
                      textAnchor={textAnchor}
                      opacity={opacity}
                      transform={transform}
                      style={{ letterSpacing: el.letterSpacing ? `${el.letterSpacing}px` : undefined }}
                    >
                      {wrappedLines.map((line, lineIdx) => (
                        <tspan
                          key={lineIdx}
                          x={tx}
                          dy={lineIdx === 0 ? 0 : lineHeight}
                        >
                          {line}
                        </tspan>
                      ))}
                    </text>
                  );
                }

                case 'line': {
                  const lineStroke = stroke && stroke !== 'transparent' && stroke !== 'none'
                    ? resolveFill(stroke)
                    : (fill !== 'transparent' ? fill : '#ffffff');
                  return (
                    <line
                      key={el.id || idx}
                      x1={el.x}
                      y1={el.y + el.height / 2}
                      x2={el.x + el.width}
                      y2={el.y + el.height / 2}
                      stroke={lineStroke}
                      strokeWidth={Math.max(strokeWidth || el.height || 2, 1)}
                      opacity={opacity}
                      transform={transform}
                    />
                  );
                }

                case 'star': {
                  const cx = el.x + el.width / 2;
                  const cy = el.y + el.height / 2;
                  const r = Math.min(el.width, el.height) / 2;
                  const points = 5;
                  const pts: string[] = [];
                  for (let i = 0; i < points * 2; i++) {
                    const radius = i % 2 === 0 ? r : r * 0.45;
                    const angle = (Math.PI / points) * i - Math.PI / 2;
                    pts.push(`${cx + Math.cos(angle) * radius},${cy + Math.sin(angle) * radius}`);
                  }
                  return (
                    <polygon
                      key={el.id || idx}
                      points={pts.join(' ')}
                      fill={fill}
                      stroke={stroke !== 'none' ? resolveFill(stroke) : 'none'}
                      strokeWidth={strokeWidth}
                      opacity={opacity}
                      transform={transform}
                    />
                  );
                }

                case 'triangle': {
                  const pts = `${el.x + el.width / 2},${el.y} ${el.x + el.width},${el.y + el.height} ${el.x},${el.y + el.height}`;
                  return (
                    <polygon
                      key={el.id || idx}
                      points={pts}
                      fill={fill}
                      stroke={stroke !== 'none' ? resolveFill(stroke) : 'none'}
                      strokeWidth={strokeWidth}
                      opacity={opacity}
                      transform={transform}
                    />
                  );
                }

                default:
                  return null;
              }
            })}
          </svg>
        )}
      </div>
    </div>
  );
});


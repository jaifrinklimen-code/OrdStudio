import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import {
  MousePointer2, Type, Square, Circle, Minus, ArrowUpRight, Star, Triangle,
  Image, Trash2, Eye, EyeOff, Lock, Unlock, Undo2, Redo2, Download,
  ChevronDown, ChevronUp, ArrowLeft, Bold, Italic, Underline, Upload,
  ChevronLeft, ChevronRight, Plus, Copy, FileImage, FileCode, FileText,
  Presentation, Save, AlignLeft, AlignCenter, AlignRight, Heart, Hexagon, MessageSquare
} from 'lucide-react';
import Templates from "./templates";
import { TemplateMiniRenderer } from './TemplateMiniRenderer';
import { toast } from 'sonner';
import { createProfessionalSlides } from './presentationBuilder';
import { renderCanonicalSlideToContext } from '../lib/renderEngine';
import { loadTemplateFonts, FONT_REGISTRY } from '../lib/fontRegistry';
import { preloadTemplateAssets } from '../lib/templateRegistry';
import { VerticalCanvasNavigator } from './VerticalCanvasNavigator';
import { exportToPptx, exportToPdf, exportToJson } from '../lib/exportServices';

/* ── Types ──────────────────────────────────────────────────── */
type ElementType = 'text' | 'rect' | 'circle' | 'line' | 'arrow' | 'star' | 'triangle' | 'image' | 'heart' | 'hexagon' | 'messageSquare';
type ToolType = 'select' | ElementType;

interface CanvasElement {
  id: string;
  type: ElementType;
  x: number; y: number;
  width: number; height: number;
  rotation?: number;
  fill: string;
  stroke?: string;
  strokeWidth?: number;
  text?: string;
  fontSize?: number;
  fontFamily?: string;
  fontWeight?: string;
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

interface CanvasEditorProps {
  templateName?: string;
  templateCategory?: string;
  templateGradient?: string;
  templateSize?: string;
  templateCanvasWidth?: number;
  templateCanvasHeight?: number;
  templateElements?: any[];
  templateSlides?: any[][];
  templateFileUrl?: string;
  templateFileType?: string;
  templateFileName?: string;
  onBack: () => void;
  onSave?: (elements: CanvasElement[], slides: CanvasElement[][], thumbnailUrl?: string, name?: string) => void;
}

/* ── Constants ──────────────────────────────────────────────── */
const PRESET_COLORS = [
  '#000000','#333333','#666666','#999999','#ffffff',
  '#ef4444','#f97316','#eab308','#22c55e','#14b8a6',
  '#3b82f6','#6366f1','#8b5cf6','#a855f7','#ec4899',
  '#f43f5e','#78716c','#0ea5e9','#84cc16','#d946ef',
];
const FONTS = Object.keys(FONT_REGISTRY);
const HANDLE_SIZE = 12;
const uid = () => Math.random().toString(36).slice(2, 10);

function formatCanvasFontFamily(family: string): string {
  if (!family) return 'Inter';
  return /[\s,]/.test(family) ? `"${family}"` : family;
}

interface SlideThumbnailItemProps {
  slide: CanvasElement[];
  index: number;
  isActive: boolean;
  cW: number;
  cH: number;
  bgColor: string;
  onSelect: (index: number) => void;
  onDuplicate: () => void;
  onDelete: () => void;
  canDelete: boolean;
}

const SlideThumbnailItem = React.memo(function SlideThumbnailItem({
  slide,
  index,
  isActive,
  cW,
  cH,
  bgColor,
  onSelect,
  onDuplicate,
  onDelete,
  canDelete,
}: SlideThumbnailItemProps) {
  const isLandscape169 = (cW === 1920 && cH === 1080) || (cW / cH > 1.4);
  const thumbW = isLandscape169 ? 156 : 194;
  const thumbH = Math.round(thumbW * (cH / cW));
  const displayThumbH = Math.min(130, thumbH);

  const templateData = useMemo(() => ({
    canvasWidth: cW,
    canvasHeight: cH,
    elements: slide,
    gradient: bgColor || "#0b131e",
  }), [cW, cH, slide, bgColor]);


  return (
    <div
      style={{
        marginBottom: 12,
        position: "relative",
      }}
    >
      <div
        onClick={() => onSelect(index)}
        style={{
          width: thumbW,
          height: displayThumbH,
          border: isActive
            ? "2px solid #8b5cf6"
            : "1px solid rgba(255,255,255,0.1)",
          borderRadius: 8,
          cursor: "pointer",
          background: bgColor || "#0b131e",
          overflow: "hidden",
          position: "relative",
          boxShadow: isActive ? "0 0 12px rgba(139,92,246,0.3)" : "none",
          transition: "all 0.15s ease",
        }}
      >
        <TemplateMiniRenderer template={templateData} />

        <div
          style={{
            position: "absolute",
            bottom: 6,
            left: 6,
            fontSize: 10,
            fontWeight: 700,
            color: "#ffffff",
            background: "rgba(0,0,0,0.65)",
            backdropFilter: "blur(4px)",
            padding: "2px 6px",
            borderRadius: 4,
            border: "1px solid rgba(255,255,255,0.15)",
          }}
        >
          {index + 1}
        </div>
      </div>

      {isActive && (
        <div style={{ display: 'flex', gap: 6, marginTop: 4, justifyContent: 'flex-end' }}>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onDuplicate();
            }}
            title="Duplicate Slide"
            style={{
              padding: '2px 8px',
              fontSize: 11,
              background: 'rgba(255,255,255,0.06)',
              color: 'rgba(255,255,255,0.75)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: 4,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: 4,
            }}
          >
            <Copy size={11} /> Copy
          </button>
          {canDelete && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onDelete();
              }}
              title="Delete Slide"
              style={{
                padding: '2px 8px',
                fontSize: 11,
                background: 'rgba(239,68,68,0.12)',
                color: '#ef4444',
                border: '1px solid rgba(239,68,68,0.25)',
                borderRadius: 4,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: 4,
              }}
            >
              <Trash2 size={11} /> Delete
            </button>
          )}
        </div>
      )}
    </div>
  );
});


const toolDefs: { tool: ToolType; icon: any; label: string }[] = [
  { tool: 'select', icon: MousePointer2, label: 'Select' },
  { tool: 'text', icon: Type, label: 'Text' },
  { tool: 'rect', icon: Square, label: 'Rectangle' },
  { tool: 'circle', icon: Circle, label: 'Circle' },
  { tool: 'line', icon: Minus, label: 'Line' },
  { tool: 'arrow', icon: ArrowUpRight, label: 'Arrow' },
  { tool: 'star', icon: Star, label: 'Star' },
  { tool: 'triangle', icon: Triangle, label: 'Triangle' },
  { tool: 'image', icon: Image, label: 'Image' },
];

/* ── Helpers ────────────────────────────────────────────────── */
function hitTest(el: CanvasElement, mx: number, my: number): boolean {
  if (!el.visible) return false;
  const pad = 6; // 6px generous click tolerance
  return mx >= el.x - pad && mx <= el.x + el.width + pad && my >= el.y - pad && my <= el.y + el.height + pad;
}

function getHandles(el: CanvasElement) {
  const { x, y, width: w, height: h } = el;
  const hs = HANDLE_SIZE;
  return [
    { cx: x, cy: y, cursor: 'nwse-resize', pos: 'tl' },
    { cx: x + w / 2, cy: y, cursor: 'ns-resize', pos: 'tc' },
    { cx: x + w, cy: y, cursor: 'nesw-resize', pos: 'tr' },
    { cx: x + w, cy: y + h / 2, cursor: 'ew-resize', pos: 'mr' },
    { cx: x + w, cy: y + h, cursor: 'nwse-resize', pos: 'br' },
    { cx: x + w / 2, cy: y + h, cursor: 'ns-resize', pos: 'bc' },
    { cx: x, cy: y + h, cursor: 'nesw-resize', pos: 'bl' },
    { cx: x, cy: y + h / 2, cursor: 'ew-resize', pos: 'ml' },
  ].map(h2 => ({ ...h2, x: h2.cx - hs / 2, y: h2.cy - hs / 2, size: hs }));
}

function hitHandle(el: CanvasElement, mx: number, my: number) {
  const handles = getHandles(el);
  for (const h of handles) {
    if (mx >= h.x - 8 && mx <= h.x + h.size + 8 && my >= h.y - 8 && my <= h.y + h.size + 8) return h.pos;
  }
  return null;
}

function drawStar(ctx: CanvasRenderingContext2D, cx: number, cy: number, r: number, points: number) {
  ctx.beginPath();
  for (let i = 0; i < points * 2; i++) {
    const radius = i % 2 === 0 ? r : r * 0.45;
    const angle = (Math.PI / points) * i - Math.PI / 2;
    const px = cx + Math.cos(angle) * radius;
    const py = cy + Math.sin(angle) * radius;
    i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
  }
  ctx.closePath();
}

function drawArrowhead(ctx: CanvasRenderingContext2D, x1: number, y1: number, x2: number, y2: number, size: number) {
  const angle = Math.atan2(y2 - y1, x2 - x1);
  ctx.beginPath();
  ctx.moveTo(x2, y2);
  ctx.lineTo(x2 - size * Math.cos(angle - Math.PI / 6), y2 - size * Math.sin(angle - Math.PI / 6));
  ctx.lineTo(x2 - size * Math.cos(angle + Math.PI / 6), y2 - size * Math.sin(angle + Math.PI / 6));
  ctx.closePath();
  ctx.fill();
}

function autoName(type: ElementType, elements: CanvasElement[]): string {
  const label = type.charAt(0).toUpperCase() + type.slice(1);
  const count = elements.filter(e => e.type === type).length + 1;
  return `${label} ${count}`;
}

/* ── Styles ─────────────────────────────────────────────────── */
const S = {
  wrap: { display: 'flex', flexDirection: 'column' as const, height: '100vh', background: '#0d0d14', color: '#fff', fontFamily: 'Inter, system-ui, sans-serif', overflow: 'hidden' },
  topBar: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 16px', height: 48, background: '#111118', borderBottom: '1px solid rgba(255,255,255,0.06)', flexShrink: 0, position: 'relative' as const, zIndex: 50 },
  topLeft: { display: 'flex', alignItems: 'center', gap: 12 },
  topRight: { display: 'flex', alignItems: 'center', gap: 8 },
  backBtn: { display: 'flex', alignItems: 'center', gap: 6, background: 'none', border: 'none', color: 'rgba(255,255,255,0.7)', cursor: 'pointer', fontSize: 13, padding: '6px 10px', borderRadius: 8, transition: 'all .15s' },
  tmplName: { fontSize: 14, fontWeight: 600, color: '#fff', letterSpacing: '-0.01em' },
  iconBtn: (active?: boolean) => ({ width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center', background: active ? 'rgba(139,92,246,0.15)' : 'rgba(255,255,255,0.04)', border: active ? '1px solid rgba(139,92,246,0.5)' : '1px solid rgba(255,255,255,0.06)', borderRadius: 8, color: active ? '#a78bfa' : 'rgba(255,255,255,0.65)', cursor: 'pointer', transition: 'all .15s', flexShrink: 0 }),
  midRow: { display: 'flex', flex: 1, minHeight: 0, overflow: 'hidden' },
  toolBar: { width: 52, background: '#111118', borderRight: '1px solid rgba(255,255,255,0.06)', display: 'flex', flexDirection: 'column' as const, alignItems: 'center', padding: '10px 0', gap: 4, flexShrink: 0, overflowY: 'auto' as const },
  toolBtn: (active: boolean) => ({ width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', background: active ? 'rgba(139,92,246,0.18)' : 'transparent', border: active ? '1.5px solid rgba(139,92,246,0.55)' : '1.5px solid transparent', borderRadius: 10, color: active ? '#c4b5fd' : 'rgba(255,255,255,0.5)', cursor: 'pointer', transition: 'all .15s', boxShadow: active ? '0 0 12px rgba(139,92,246,0.2)' : 'none' }),
  canvasWrap: { flex: 1, minWidth: 0, minHeight: 0, height: '100%', display: 'flex', flexDirection: 'column' as const, alignItems: 'center', justifyContent: 'flex-start', background: '#0d0d14', backgroundImage: 'radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '20px 20px', overflowY: 'auto' as const, overflowX: 'auto' as const, position: 'relative' as const, gap: 24, padding: '24px 0', scrollbarWidth: 'none' as const, msOverflowStyle: 'none' as const },
  layersPanel: { width: 210, background: '#111118', borderLeft: '1px solid rgba(255,255,255,0.06)', display: 'flex', flexDirection: 'column' as const, flexShrink: 0 },
  layerHeader: { padding: '12px 14px', fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase' as const, letterSpacing: '0.08em', borderBottom: '1px solid rgba(255,255,255,0.06)' },
  layerItem: (sel: boolean) => ({ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 12px', cursor: 'pointer', background: sel ? 'rgba(139,92,246,0.12)' : 'transparent', borderLeft: sel ? '2px solid #8b5cf6' : '2px solid transparent', transition: 'all .12s' }),
  layerName: { flex: 1, fontSize: 12, color: 'rgba(255,255,255,0.8)', whiteSpace: 'nowrap' as const, overflow: 'hidden', textOverflow: 'ellipsis' },
  layerBtn: { background: 'none', border: 'none', color: 'rgba(255,255,255,0.35)', cursor: 'pointer', padding: 2, display: 'flex', alignItems: 'center' },
  propsBar: { minHeight: 52, background: '#111118', borderTop: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', flexWrap: 'wrap' as const, padding: '12px 16px', gap: 12, flexShrink: 0, overflow: 'visible' as const },
  propGroup: { display: 'flex', flexDirection: 'column' as const, gap: 8, minWidth: 180, maxWidth: 320 },
  propLabel: { fontSize: 11, color: 'rgba(255,255,255,0.65)', marginBottom: 2, whiteSpace: 'nowrap' as const },
  propInput: { background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 8, color: '#fff', padding: '8px 10px', fontSize: 12, width: 140, outline: 'none' },
  propTextArea: { background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.16)', borderRadius: 10, color: '#fff', padding: 10, width: 260, minHeight: 80, resize: 'vertical' as const, fontSize: 12, outline: 'none' },
  select: { background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.18)', borderRadius: 8, color: '#fff', padding: '6px 8px', fontSize: 12, outline: 'none', minWidth: 120, appearance: 'none' as const, WebkitAppearance: 'none' as const, MozAppearance: 'none' as const, lineHeight: 1.5 },
  colorSwatch: (c: string, active?: boolean) => ({ width: 24, height: 24, borderRadius: 6, background: c, border: active ? '2px solid #8b5cf6' : '2px solid rgba(255,255,255,0.15)', cursor: 'pointer', flexShrink: 0 }),
  dlDropdown: {
    position: 'absolute' as const,
    top: 42,
    right: 0,
    background: 'rgba(26, 26, 38, 0.98)',
    backdropFilter: 'blur(12px)',
    border: '1px solid rgba(255,255,255,0.12)',
    borderRadius: 12,
    padding: 8,
    zIndex: 9999,
    minWidth: 190,
    boxShadow: '0 10px 40px -10px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.08)',
    display: 'flex',
    flexDirection: 'column' as const,
    gap: 4,
    pointerEvents: 'auto' as const
  },
  dlItem: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    width: '100%',
    padding: '10px 14px',
    background: 'none',
    border: 'none',
    color: 'rgba(255,255,255,0.85)',
    fontSize: 12.5,
    fontWeight: 500,
    cursor: 'pointer',
    borderRadius: 8,
    textAlign: 'left' as const,
    transition: 'all 0.15s ease'
  },
  colorPopup: { position: 'absolute' as const, bottom: 32, left: 0, background: '#1a1a26', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12, padding: 12, zIndex: 200, boxShadow: '0 8px 32px rgba(0,0,0,0.6)' },
  colorGrid: { display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 4, marginBottom: 8 },
  toggleBtn: (on: boolean) => ({ width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', background: on ? 'rgba(139,92,246,0.2)' : 'rgba(255,255,255,0.04)', border: on ? '1px solid rgba(139,92,246,0.4)' : '1px solid rgba(255,255,255,0.06)', borderRadius: 6, color: on ? '#c4b5fd' : 'rgba(255,255,255,0.5)', cursor: 'pointer' }),
};

/* ── Color Picker Popup ─────────────────────────────────────── */
function ColorPicker({ value, onChange, onClose }: { value: string; onChange: (c: string) => void; onClose: () => void }) {
  const [hex, setHex] = useState(value);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handler = (e: MouseEvent) => { if (ref.current && !ref.current.contains(e.target as Node)) onClose(); };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [onClose]);
  return (
    <div ref={ref} style={S.colorPopup as any} className="ce-color-popup">
      <div style={S.colorGrid}>
        {PRESET_COLORS.map(c => (
          <div key={c} style={S.colorSwatch(c, c === value)} onClick={() => { onChange(c); setHex(c); }} />
        ))}
      </div>
      <div style={{ display: 'flex', gap: 4 }}>
        <input style={{ ...S.propInput, flex: 1 }} value={hex} onChange={e => setHex(e.target.value)}
          onKeyDown={e => { if (e.key === 'Enter') { onChange(hex); } }} placeholder="#hex" />
        <button style={{ ...S.iconBtn(), width: 30, height: 30, fontSize: 11 }} onClick={() => onChange(hex)}>OK</button>
      </div>
    </div>
  );
}

/* ── Image cache ────────────────────────────────────────────── */
const imgCache = new Map<string, HTMLImageElement>();
const brokenImages = new Set<string>();

function normalizeImageSrc(src: string, targetWidth?: number): string {
  try {
    const url = new URL(src);
    if (url.hostname.includes('images.unsplash.com')) {
      const params = url.searchParams;
      const currentWidth = Number(params.get('w') || 0);
      const requestedWidth = targetWidth ? Math.min(targetWidth, 2400) : currentWidth || 1200;
      const finalWidth = Math.max(currentWidth, requestedWidth);

      params.set('w', String(finalWidth));
      params.set('auto', 'format');
      params.set('fit', 'crop');
      params.set('q', '90');

      const dpr = typeof window !== 'undefined' ? Math.min(Math.max(Math.round(window.devicePixelRatio || 1), 1), 2) : 1;
      if (dpr > 1) {
        params.set('dpr', String(dpr));
      }

      return url.toString();
    }
  } catch (_err) {
    // ignore invalid URL and keep original src
  }
  return src;
}

function getCachedImage(src: string, targetWidth?: number): HTMLImageElement | null {
  const effectiveSrc = normalizeImageSrc(src, targetWidth);
  if (brokenImages.has(effectiveSrc)) return null;

  const cached = imgCache.get(effectiveSrc);
  if (cached) return cached;

  const img = new window.Image();
  img.crossOrigin = 'anonymous';
  img.onload = () => {
    if (img.naturalWidth > 0 && img.naturalHeight > 0) {
      imgCache.set(effectiveSrc, img);
    }
  };
  img.onerror = () => {
    brokenImages.add(effectiveSrc);
    imgCache.delete(effectiveSrc);
  };
  img.src = effectiveSrc;

  if (img.complete && img.naturalWidth > 0) {
    imgCache.set(effectiveSrc, img);
    return img;
  }

  return null;
}

/* ── Main Component ─────────────────────────────────────────── */
export function CanvasEditor({
  templateName,
  templateCategory,
  templateGradient,
  templateSize,
  templateCanvasWidth,
  templateCanvasHeight,
  templateElements,
  templateSlides,
  templateFileUrl,
  templateFileType,
  templateFileName,
  onBack,
  onSave
}: CanvasEditorProps) {
  const isPresentation = templateCategory === 'Presentation' ||
    (templateSize && templateSize.includes('1920×1080')) ||
    (templateCanvasWidth === 1920 && templateCanvasHeight === 1080);

  const resolvedName = templateName && templateName !== 'Untitled'
    ? templateName
    : (isPresentation ? 'Executive Presentation' : 'Creative Studio Design');

  const resolvedSize = templateSize || (isPresentation ? '1920×1080' : '1080×1080');

  const hasCanvasContent = Boolean((templateElements && templateElements.length > 0) || (templateSlides && templateSlides.length > 0));

  /* Canonical template dimensions */
  const [cW, cH] = useMemo(() => {
    if (templateCanvasWidth && templateCanvasHeight && templateCanvasWidth > 0 && templateCanvasHeight > 0) {
      return [templateCanvasWidth, templateCanvasHeight];
    }

    // Check elements for background bounds or maximum element extents
    const allEls = templateElements || (templateSlides && templateSlides[0]) || [];
    if (allEls.length > 0) {
      const bgEl = allEls.find((e: any) => (e.id && e.id.includes('bg')) || (e.type === 'rect' && e.x === 0 && e.y === 0 && e.width >= 300));
      if (bgEl && bgEl.width && bgEl.height) {
        return [bgEl.width, bgEl.height];
      }
    }

    const parts = resolvedSize.replace(/x/gi, '×').split('×').map(Number);
    let w = parts[0] || (isPresentation ? 1920 : 1080), h = parts[1] || (isPresentation ? 1080 : 1080);
    return [w, h];
  }, [templateCanvasWidth, templateCanvasHeight, resolvedSize, templateElements, templateSlides, isPresentation]);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvasWrapRef = useRef<HTMLDivElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  /* Calculate responsive fit-to-view zoom scale to prevent any clipping */
  const calcFitZoom = useCallback(() => {
    let availW = 0;
    let availH = 0;
    if (canvasWrapRef.current) {
      const rect = canvasWrapRef.current.getBoundingClientRect();
      availW = rect.width;
      availH = rect.height;
    }
    if (availW <= 0 || availH <= 0) {
      const isSmallScreen = typeof window !== 'undefined' && window.innerWidth < 768;
      const leftSidebarWidth = isSmallScreen ? 0 : (isPresentation ? 180 + 52 : 220 + 52);
      const rightSidebarWidth = isSmallScreen ? 0 : 210;
      availW = typeof window !== 'undefined' ? Math.max(window.innerWidth - leftSidebarWidth - rightSidebarWidth - 48, 320) : 800;
      availH = typeof window !== 'undefined' ? Math.max(window.innerHeight - 48 - 60 - 64 - 40, 320) : 500;
    } else {
      availW = Math.max(availW - 48, 280);
      availH = Math.max(availH - (isPresentation ? 80 : 48), 280);
    }
    const scale = Math.min(availW / cW, availH / cH) * (isPresentation ? 0.96 : 0.94);
    return Math.max(0.12, Math.min(Number(scale.toFixed(3)), 3.0));
  }, [cW, cH, isPresentation]);

  /* Core state */
  const [designTitle, setDesignTitle] = useState(resolvedName);
  const [isEditingTitle, setIsEditingTitle] = useState(false);

  useEffect(() => {
    if (templateName && templateName !== 'Untitled') {
      setDesignTitle(templateName);
    }
  }, [templateName]);

  const [slides, setSlides] = useState<CanvasElement[][]>([]);
  const [activeSlideIdx, setActiveSlideIdx] = useState(0);
  const [elements, setElements] = useState<CanvasElement[]>([]);

  // Synchronous references to eliminate stale React closures during interactions & auto-save
  const elementsRef = useRef<CanvasElement[]>(elements);
  elementsRef.current = elements;
  const slidesRef = useRef<CanvasElement[][]>(slides);
  slidesRef.current = slides;
  const activeSlideIdxRef = useRef<number>(activeSlideIdx);
  activeSlideIdxRef.current = activeSlideIdx;

  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [tool, setTool] = useState<ToolType>('select');
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [zoom, setZoom] = useState(() => calcFitZoom());
  const [isSpacePressed, setIsSpacePressed] = useState(false);
  const isPanningRef = useRef(false);
  const panStartRef = useRef({ x: 0, y: 0, scrollLeft: 0, scrollTop: 0 });

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      setZoom(calcFitZoom());
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [calcFitZoom]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space' && (e.target as HTMLElement)?.tagName !== 'INPUT' && (e.target as HTMLElement)?.tagName !== 'TEXTAREA') {
        setIsSpacePressed(true);
      }
    };
    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.code === 'Space') {
        setIsSpacePressed(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  // Update zoom when template dimensions change to ensure complete view
  useEffect(() => {
    setZoom(calcFitZoom());
  }, [calcFitZoom]);

  const handleZoomIn = useCallback(() => setZoom(z => Math.min(Number((z + 0.1).toFixed(2)), 3.0)), []);
  const handleZoomOut = useCallback(() => setZoom(z => Math.max(Number((z - 0.1).toFixed(2)), 0.15)), []);
  const handleZoomReset = useCallback(() => setZoom(calcFitZoom()), [calcFitZoom]);

  const handleWorkspaceMouseDown = useCallback((e: React.MouseEvent) => {
    if (isSpacePressed || e.button === 1 || (e.target === canvasWrapRef.current)) {
      isPanningRef.current = true;
      panStartRef.current = {
        x: e.clientX,
        y: e.clientY,
        scrollLeft: canvasWrapRef.current?.scrollLeft || 0,
        scrollTop: canvasWrapRef.current?.scrollTop || 0
      };
    }
  }, [isSpacePressed]);

  const handleWorkspaceMouseMove = useCallback((e: React.MouseEvent) => {
    if (isPanningRef.current && canvasWrapRef.current) {
      const dx = e.clientX - panStartRef.current.x;
      const dy = e.clientY - panStartRef.current.y;
      canvasWrapRef.current.scrollLeft = panStartRef.current.scrollLeft - dx;
      canvasWrapRef.current.scrollTop = panStartRef.current.scrollTop - dy;
    }
  }, []);

  const handleWorkspaceMouseUp = useCallback(() => {
    isPanningRef.current = false;
  }, []);

  const [isDirty, setIsDirty] = useState(false);
  const [bgColor, setBgColor] = useState<string>(() => {
    if (!templateGradient) return '#ffffff';
    return templateGradient.includes('gradient') ? '#ffffff' : templateGradient;
  });
  const [bgGradient] = useState(templateGradient || '');

  const getThumbnailDataUrl = useCallback((firstSlideElements?: CanvasElement[]) => {
    try {
      const thumbCanvas = document.createElement('canvas');
      const thumbW = 640;
      const thumbH = Math.max(10, Math.round(thumbW * (cH / cW)));
      thumbCanvas.width = thumbW;
      thumbCanvas.height = thumbH;
      const tCtx = thumbCanvas.getContext('2d');
      if (!tCtx) return '';

      const scale = thumbW / cW;
      const firstSlide = firstSlideElements || (activeSlideIdxRef.current === 0 ? elementsRef.current : (slidesRef.current?.[0] || elementsRef.current));
      tCtx.save();
      tCtx.scale(scale, scale);
      renderCanonicalSlideToContext(
        tCtx,
        firstSlide,
        cW,
        cH,
        bgGradient && bgGradient.includes('gradient') ? bgGradient : (bgColor || '#0f172a'),
        { scale }
      );
      tCtx.restore();

      return thumbCanvas.toDataURL('image/png', 0.88);
    } catch (e) {
      return '';
    }
  }, [cW, cH, bgColor, bgGradient]);

  /* Undo / redo */
  interface HistoryStep {
    slides: CanvasElement[][];
    activeSlideIdx: number;
  }
  const [history, setHistory] = useState<HistoryStep[]>([]);
  const [historyIdx, setHistoryIdx] = useState(-1);

  const pushHistory = useCallback((nextSlides: CanvasElement[][], customActiveIdx?: number) => {
    const activeIdx = customActiveIdx !== undefined ? customActiveIdx : activeSlideIdxRef.current;
    setHistory(prev => {
      const step: HistoryStep = {
        slides: JSON.parse(JSON.stringify(nextSlides)),
        activeSlideIdx: activeIdx
      };
      const next = [...prev.slice(0, historyIdx + 1), step];
      if (next.length > 50) next.shift();
      return next;
    });
    setHistoryIdx(prev => Math.min(prev + 1, 49));
  }, [historyIdx]);

  const commitChange = useCallback((newEls: CanvasElement[]) => {
    elementsRef.current = newEls;
    setElements(newEls);
    setSlides(prev => {
      const next = [...prev];
      next[activeSlideIdxRef.current] = newEls;
      slidesRef.current = next;
      pushHistory(next);
      return next;
    });
    setIsDirty(true);
  }, [pushHistory]);

  const performSave = useCallback((notifySuccess = false) => {
    if (!onSave) return;
    const currentSlideEls = elementsRef.current;
    const updatedSlides = slidesRef.current.length > 0
      ? slidesRef.current.map((s, idx) => idx === activeSlideIdxRef.current ? currentSlideEls : s)
      : [currentSlideEls];
    slidesRef.current = updatedSlides;
    setSlides(updatedSlides);
    const latestSlides = updatedSlides;
    const latestElements = updatedSlides[0] || currentSlideEls;
    const thumb = getThumbnailDataUrl(latestSlides[0]);
    onSave(latestElements, latestSlides, thumb, designTitle);
    setIsDirty(false);
    if (notifySuccess) {
      toast.success("Design saved successfully!");
    }
  }, [onSave, getThumbnailDataUrl, designTitle]);

  // Debounced auto-save so custom work is never lost
  const saveTimeoutRef = useRef<any>(null);
  useEffect(() => {
    if (!isDirty || !onSave) return;
    if (saveTimeoutRef.current) clearTimeout(saveTimeoutRef.current);
    saveTimeoutRef.current = setTimeout(() => {
      performSave(false);
    }, 1500);
    return () => {
      if (saveTimeoutRef.current) clearTimeout(saveTimeoutRef.current);
    };
  }, [isDirty, onSave, performSave]);

  const handleBack = useCallback(() => {
    if (onSave) {
      const currentSlideEls = elementsRef.current;
      const updatedSlides = slidesRef.current.length > 0
        ? slidesRef.current.map((s, idx) => idx === activeSlideIdxRef.current ? currentSlideEls : s)
        : [currentSlideEls];
      const latestSlides = updatedSlides;
      const latestElements = updatedSlides[0] || currentSlideEls;
      const thumb = getThumbnailDataUrl(latestSlides[0]);
      onSave(latestElements, latestSlides, thumb, designTitle);
    }
    onBack();
  }, [onSave, onBack, getThumbnailDataUrl, designTitle]);

  const undo = useCallback(() => {
    if (historyIdx <= 0) return;
    const newIdx = historyIdx - 1;
    setHistoryIdx(newIdx);
    const step = history[newIdx];
    const prevSlides = JSON.parse(JSON.stringify(step.slides));
    setSlides(prevSlides);
    setActiveSlideIdx(step.activeSlideIdx);
    setElements(prevSlides[step.activeSlideIdx] || []);
    setSelectedId(null);
    setEditingText(null);
    setIsDirty(true);
  }, [historyIdx, history]);

  const redo = useCallback(() => {
    if (historyIdx >= history.length - 1) return;
    const newIdx = historyIdx + 1;
    setHistoryIdx(newIdx);
    const step = history[newIdx];
    const nextSlides = JSON.parse(JSON.stringify(step.slides));
    setSlides(nextSlides);
    setActiveSlideIdx(step.activeSlideIdx);
    setElements(nextSlides[step.activeSlideIdx] || []);
    setSelectedId(null);
    setEditingText(null);
    setIsDirty(true);
  }, [historyIdx, history]);

  /* Slide handlers */
  const handleSelectSlide = (newIdx: number) => {
    if (newIdx < 0 || newIdx >= slides.length) return;
    setActiveSlideIdx(newIdx);
    setElements(slides[newIdx] || []);
    setSelectedId(null);
    setEditingText(null);
    setTool('select');
  };

  const addSlide = () => {
    if (templateFileUrl) {
      setSlides(prev => {
        const currentCopy = JSON.parse(JSON.stringify(prev[activeSlideIdx] || []));
        const next = [...prev.slice(0, activeSlideIdx + 1), currentCopy, ...prev.slice(activeSlideIdx + 1)];
        const nextIndex = activeSlideIdx + 1;
        pushHistory(next, nextIndex);
        setActiveSlideIdx(nextIndex);
        setElements(currentCopy);
        return next;
      });
      setIsDirty(true);
      setSelectedId(null);
      setEditingText(null);
      setTool('select');
      return;
    }

    const isPresentationDeck = templateCategory === 'Presentation' || (cW === 1920 && cH === 1080) || (templateSize && templateSize.includes('1920×1080'));
    if (isPresentationDeck && slides.length >= 10) {
      toast.error('Presentation decks are limited to a maximum of 10 slides.');
      return;
    }

    const bgFill = templateGradient ? '#ffffff' : (bgColor || '#0b0f19');
    const isDarkBg = bgFill === '#05070e' || bgFill === '#0a0d14' || bgFill === '#0a0f1d' || bgFill === '#0f172a' || bgFill === '#000000' || bgFill === '#0b101f' || bgFill === '#0b131e';
    const textColor = isDarkBg ? '#ffffff' : '#0f172a';
    const subColor = isDarkBg ? '#94a3b8' : '#64748b';
    const cardBg = isDarkBg ? '#131926' : '#f1f5f9';
    const accent = '#38bdf8';

    setSlides(prev => {
      const slideNum = prev.length + 1;
      let newSlide: CanvasElement[] = [
        { id: `s${slideNum}-bg`, type: 'rect', x: 0, y: 0, width: cW, height: cH, fill: bgFill, stroke: 'transparent', strokeWidth: 0, opacity: 1, visible: true, locked: true },
      ];

      if (isPresentationDeck) {
        const layoutType = slideNum % 4;
        if (layoutType === 1) {
          // Layout 1: 3-Pillar Operational Focus
          newSlide.push(
            { id: `s${slideNum}-tag`, type: 'text', x: 120, y: 100, width: 800, height: 30, text: `SECTION 0${slideNum} · ${resolvedName.toUpperCase()}`, fontSize: 16, fontFamily: 'Space Grotesk', fontWeight: '800', fill: accent, visible: true },
            { id: `s${slideNum}-title`, type: 'text', x: 120, y: 150, width: 1200, height: 70, text: `Key Strategic Pillars & Core Directives`, fontSize: 46, fontFamily: 'Space Grotesk', fontWeight: '800', fill: textColor, visible: true },
            { id: `s${slideNum}-c1`, type: 'rect', x: 120, y: 270, width: 510, height: 480, fill: cardBg, borderRadius: 16, visible: true },
            { id: `s${slideNum}-t1`, type: 'text', x: 160, y: 320, width: 430, height: 50, text: '01  /  Operational Focus', fontSize: 26, fontFamily: 'Space Grotesk', fontWeight: '700', fill: textColor, visible: true },
            { id: `s${slideNum}-d1`, type: 'text', x: 160, y: 390, width: 430, height: 260, text: 'Streamlining cross-functional pipelines, reducing time-to-delivery, and maintaining architectural rigor across critical workflows.', fontSize: 18, fontFamily: 'Inter', fill: subColor, lineHeight: 1.6, visible: true },
            { id: `s${slideNum}-c2`, type: 'rect', x: 670, y: 270, width: 510, height: 480, fill: cardBg, borderRadius: 16, visible: true },
            { id: `s${slideNum}-t2`, type: 'text', x: 710, y: 320, width: 430, height: 50, text: '02  /  Capital & Velocity', fontSize: 26, fontFamily: 'Space Grotesk', fontWeight: '700', fill: textColor, visible: true },
            { id: `s${slideNum}-d2`, type: 'text', x: 710, y: 390, width: 430, height: 260, text: 'Optimizing resource allocation targets to maximize impact and sustain superior growth trajectories throughout the next quarter.', fontSize: 18, fontFamily: 'Inter', fill: subColor, lineHeight: 1.6, visible: true },
            { id: `s${slideNum}-c3`, type: 'rect', x: 1220, y: 270, width: 510, height: 480, fill: cardBg, borderRadius: 16, visible: true },
            { id: `s${slideNum}-t3`, type: 'text', x: 1260, y: 320, width: 430, height: 50, text: '03  /  Market Expansion', fontSize: 26, fontFamily: 'Space Grotesk', fontWeight: '700', fill: textColor, visible: true },
            { id: `s${slideNum}-d3`, type: 'text', x: 1260, y: 390, width: 430, height: 260, text: 'Penetrating tier-one accounts with custom tailored enterprise integrations and dedicated onboarding roadmaps.', fontSize: 18, fontFamily: 'Inter', fill: subColor, lineHeight: 1.6, visible: true }
          );
        } else if (layoutType === 2) {
          // Layout 2: High-impact Metric Highlights
          newSlide.push(
            { id: `s${slideNum}-tag`, type: 'text', x: 120, y: 100, width: 800, height: 30, text: `SECTION 0${slideNum} · PERFORMANCE BENCHMARK`, fontSize: 16, fontFamily: 'Space Grotesk', fontWeight: '800', fill: accent, visible: true },
            { id: `s${slideNum}-title`, type: 'text', x: 120, y: 150, width: 1200, height: 70, text: `Validated Metrics & Quantifiable Growth`, fontSize: 46, fontFamily: 'Space Grotesk', fontWeight: '800', fill: textColor, visible: true },
            { id: `s${slideNum}-stat1-bg`, type: 'rect', x: 120, y: 280, width: 520, height: 380, fill: cardBg, borderRadius: 16, visible: true },
            { id: `s${slideNum}-stat1-num`, type: 'text', x: 160, y: 340, width: 440, height: 100, text: '99.4%', fontSize: 72, fontFamily: 'Space Grotesk', fontWeight: '900', fill: accent, visible: true },
            { id: `s${slideNum}-stat1-lbl`, type: 'text', x: 160, y: 460, width: 440, height: 40, text: 'SYSTEM RELIABILITY & UPTIME', fontSize: 20, fontFamily: 'Space Grotesk', fontWeight: '700', fill: textColor, visible: true },
            { id: `s${slideNum}-stat1-desc`, type: 'text', x: 160, y: 510, width: 440, height: 100, text: 'Zero unplanned downtime across multi-region high-concurrency clusters during 2026.', fontSize: 16, fontFamily: 'Inter', fill: subColor, lineHeight: 1.5, visible: true },
            { id: `s${slideNum}-stat2-bg`, type: 'rect', x: 680, y: 280, width: 520, height: 380, fill: cardBg, borderRadius: 16, visible: true },
            { id: `s${slideNum}-stat2-num`, type: 'text', x: 720, y: 340, width: 440, height: 100, text: '3.8x', fontSize: 72, fontFamily: 'Space Grotesk', fontWeight: '900', fill: '#34d399', visible: true },
            { id: `s${slideNum}-stat2-lbl`, type: 'text', x: 720, y: 460, width: 440, height: 40, text: 'VELOCITY ACCELERATION', fontSize: 20, fontFamily: 'Space Grotesk', fontWeight: '700', fill: textColor, visible: true },
            { id: `s${slideNum}-stat2-desc`, type: 'text', x: 720, y: 510, width: 440, height: 100, text: 'Faster release cycles compared to standard enterprise industry benchmarks.', fontSize: 16, fontFamily: 'Inter', fill: subColor, lineHeight: 1.5, visible: true },
            { id: `s${slideNum}-stat3-bg`, type: 'rect', x: 1240, y: 280, width: 520, height: 380, fill: cardBg, borderRadius: 16, visible: true },
            { id: `s${slideNum}-stat3-num`, type: 'text', x: 1280, y: 340, width: 440, height: 100, text: '$42M', fontSize: 72, fontFamily: 'Space Grotesk', fontWeight: '900', fill: '#fbbf24', visible: true },
            { id: `s${slideNum}-stat3-lbl`, type: 'text', x: 1280, y: 460, width: 440, height: 40, text: 'ANNUAL RUN RATE', fontSize: 20, fontFamily: 'Space Grotesk', fontWeight: '700', fill: textColor, visible: true },
            { id: `s${slideNum}-stat3-desc`, type: 'text', x: 1280, y: 510, width: 440, height: 100, text: 'Consistent ARR acceleration backed by high client retention and multi-year renewals.', fontSize: 16, fontFamily: 'Inter', fill: subColor, lineHeight: 1.5, visible: true }
          );
        } else if (layoutType === 3) {
          // Layout 3: 2-Column Deep Dive Analysis
          newSlide.push(
            { id: `s${slideNum}-tag`, type: 'text', x: 120, y: 100, width: 800, height: 30, text: `SECTION 0${slideNum} · DETAILED ANALYSIS`, fontSize: 16, fontFamily: 'Space Grotesk', fontWeight: '800', fill: accent, visible: true },
            { id: `s${slideNum}-title`, type: 'text', x: 120, y: 150, width: 1200, height: 70, text: `Strategic Execution & Architecture`, fontSize: 46, fontFamily: 'Space Grotesk', fontWeight: '800', fill: textColor, visible: true },
            { id: `s${slideNum}-left-card`, type: 'rect', x: 120, y: 270, width: 800, height: 600, fill: cardBg, borderRadius: 16, visible: true },
            { id: `s${slideNum}-left-h`, type: 'text', x: 160, y: 320, width: 720, height: 50, text: 'Architectural Blueprint & Governance', fontSize: 28, fontFamily: 'Space Grotesk', fontWeight: '700', fill: textColor, visible: true },
            { id: `s${slideNum}-left-p1`, type: 'text', x: 160, y: 390, width: 720, height: 100, text: '• Modular Foundation: Decoupled service layers ensure resilience under extreme load and seamless updates.', fontSize: 18, fontFamily: 'Inter', fill: subColor, lineHeight: 1.6, visible: true },
            { id: `s${slideNum}-left-p2`, type: 'text', x: 160, y: 510, width: 720, height: 100, text: '• End-to-End Auditing: Real-time telemetry monitoring every transaction with cryptographic verification.', fontSize: 18, fontFamily: 'Inter', fill: subColor, lineHeight: 1.6, visible: true },
            { id: `s${slideNum}-left-p3`, type: 'text', x: 160, y: 630, width: 720, height: 100, text: '• Automated Compliance: Continuous regression checks ensuring zero drift from international standards.', fontSize: 18, fontFamily: 'Inter', fill: subColor, lineHeight: 1.6, visible: true },
            { id: `s${slideNum}-right-card`, type: 'rect', x: 960, y: 270, width: 840, height: 600, fill: cardBg, borderRadius: 16, visible: true },
            { id: `s${slideNum}-right-h`, type: 'text', x: 1000, y: 320, width: 760, height: 50, text: 'Expected Operational Outcomes', fontSize: 28, fontFamily: 'Space Grotesk', fontWeight: '700', fill: textColor, visible: true },
            { id: `s${slideNum}-right-b1`, type: 'text', x: 1000, y: 390, width: 760, height: 100, text: '✦ Latency Reduction: 40% decrease in critical query execution times across production clusters.', fontSize: 18, fontFamily: 'Inter', fill: '#34d399', lineHeight: 1.6, visible: true },
            { id: `s${slideNum}-right-b2`, type: 'text', x: 1000, y: 510, width: 760, height: 100, text: '✦ Efficiency Gains: 2.5x increase in operational throughput per engineer within 90 days.', fontSize: 18, fontFamily: 'Inter', fill: '#60a5fa', lineHeight: 1.6, visible: true },
            { id: `s${slideNum}-right-b3`, type: 'text', x: 1000, y: 630, width: 760, height: 100, text: '✦ Risk Mitigation: Comprehensive fault isolation preventing single-point failure propagation.', fontSize: 18, fontFamily: 'Inter', fill: '#f43f5e', lineHeight: 1.6, visible: true }
          );
        } else {
          // Layout 0: Timeline Roadmap
          newSlide.push(
            { id: `s${slideNum}-tag`, type: 'text', x: 120, y: 100, width: 800, height: 30, text: `SECTION 0${slideNum} · ROADMAP & MILESTONES`, fontSize: 16, fontFamily: 'Space Grotesk', fontWeight: '800', fill: accent, visible: true },
            { id: `s${slideNum}-title`, type: 'text', x: 120, y: 150, width: 1200, height: 70, text: `Deployment Schedule & Rollout Milestones`, fontSize: 46, fontFamily: 'Space Grotesk', fontWeight: '800', fill: textColor, visible: true },
            { id: `s${slideNum}-c1`, type: 'rect', x: 120, y: 280, width: 380, height: 460, fill: cardBg, borderRadius: 16, visible: true },
            { id: `s${slideNum}-p1-num`, type: 'text', x: 150, y: 320, width: 320, height: 40, text: 'PHASE 01', fontSize: 18, fontFamily: 'Space Grotesk', fontWeight: '800', fill: accent, visible: true },
            { id: `s${slideNum}-p1-t`, type: 'text', x: 150, y: 370, width: 320, height: 50, text: 'Architecture Audit', fontSize: 24, fontFamily: 'Space Grotesk', fontWeight: '700', fill: textColor, visible: true },
            { id: `s${slideNum}-p1-d`, type: 'text', x: 150, y: 440, width: 320, height: 240, text: 'Comprehensive assessment of current codebases, infrastructure dependencies, and security compliance protocols.', fontSize: 16, fontFamily: 'Inter', fill: subColor, lineHeight: 1.6, visible: true },
            { id: `s${slideNum}-c2`, type: 'rect', x: 540, y: 280, width: 380, height: 460, fill: cardBg, borderRadius: 16, visible: true },
            { id: `s${slideNum}-p2-num`, type: 'text', x: 570, y: 320, width: 320, height: 40, text: 'PHASE 02', fontSize: 18, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#34d399', visible: true },
            { id: `s${slideNum}-p2-t`, type: 'text', x: 570, y: 370, width: 320, height: 50, text: 'Core Rollout', fontSize: 24, fontFamily: 'Space Grotesk', fontWeight: '700', fill: textColor, visible: true },
            { id: `s${slideNum}-p2-d`, type: 'text', x: 570, y: 440, width: 320, height: 240, text: 'Staged deployment across pilot accounts with continuous latency telemetry and user feedback loops.', fontSize: 16, fontFamily: 'Inter', fill: subColor, lineHeight: 1.6, visible: true },
            { id: `s${slideNum}-c3`, type: 'rect', x: 960, y: 280, width: 380, height: 460, fill: cardBg, borderRadius: 16, visible: true },
            { id: `s${slideNum}-p3-num`, type: 'text', x: 990, y: 320, width: 320, height: 40, text: 'PHASE 03', fontSize: 18, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#60a5fa', visible: true },
            { id: `s${slideNum}-p3-t`, type: 'text', x: 990, y: 370, width: 320, height: 50, text: 'Full Integration', fontSize: 24, fontFamily: 'Space Grotesk', fontWeight: '700', fill: textColor, visible: true },
            { id: `s${slideNum}-p3-d`, type: 'text', x: 990, y: 440, width: 320, height: 240, text: 'Global rollout to all customer segments backed by 24/7 dedicated support and automated failure recovery.', fontSize: 16, fontFamily: 'Inter', fill: subColor, lineHeight: 1.6, visible: true },
            { id: `s${slideNum}-c4`, type: 'rect', x: 1380, y: 280, width: 380, height: 460, fill: cardBg, borderRadius: 16, visible: true },
            { id: `s${slideNum}-p4-num`, type: 'text', x: 1410, y: 320, width: 320, height: 40, text: 'PHASE 04', fontSize: 18, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#f59e0b', visible: true },
            { id: `s${slideNum}-p4-t`, type: 'text', x: 1410, y: 370, width: 320, height: 50, text: 'Scale & Growth', fontSize: 24, fontFamily: 'Space Grotesk', fontWeight: '700', fill: textColor, visible: true },
            { id: `s${slideNum}-p4-d`, type: 'text', x: 1410, y: 440, width: 320, height: 240, text: 'Long-term optimization, ecosystem partnership integrations, and continuous performance enhancement.', fontSize: 16, fontFamily: 'Inter', fill: subColor, lineHeight: 1.6, visible: true }
          );
        }
      } else {
        // Non-presentation fallback: beautiful structured page
        newSlide.push(
          { id: `s${slideNum}-tag`, type: 'text', x: Math.round(cW * 0.08), y: Math.round(cH * 0.12), width: 300, height: 30, text: `PAGE ${slideNum} · ${resolvedName.toUpperCase()}`, fontSize: 14, fontFamily: 'Space Grotesk', fontWeight: '800', fill: accent, visible: true },
          { id: `s${slideNum}-title`, type: 'text', x: Math.round(cW * 0.08), y: Math.round(cH * 0.18), width: Math.round(cW * 0.84), height: 60, text: `Page ${slideNum} Content Overview`, fontSize: 36, fontFamily: 'Space Grotesk', fontWeight: '800', fill: textColor, visible: true },
          { id: `s${slideNum}-bar`, type: 'rect', x: Math.round(cW * 0.08), y: Math.round(cH * 0.28), width: 100, height: 4, fill: accent, visible: true },
          { id: `s${slideNum}-desc`, type: 'text', x: Math.round(cW * 0.08), y: Math.round(cH * 0.32), width: Math.round(cW * 0.84), height: 80, text: 'Customize this page with text, shapes, diagrams, and vector assets from the left toolbar.', fontSize: 18, fontFamily: 'Inter', fill: subColor, lineHeight: 1.6, visible: true }
        );
      }

      const next = [...prev, newSlide];
      pushHistory(next, prev.length);
      
      setTimeout(() => {
        setActiveSlideIdx(prev.length);
        setElements(newSlide);
      }, 0);
      
      return next;
    });
    setIsDirty(true);
    setSelectedId(null);
    setEditingText(null);
    setTool('select');
  };

  const duplicateSlide = () => {
    const isPresentationDeck = templateCategory === 'Presentation' || (cW === 1920 && cH === 1080) || (templateSize && templateSize.includes('1920×1080'));
    if (isPresentationDeck && slides.length >= 10) {
      toast.error('Presentation decks are limited to a maximum of 10 slides.');
      return;
    }
    setSlides(prev => {
      const currentCopy = JSON.parse(JSON.stringify(elements)).map((el: any) => ({
        ...el,
        id: uid()
      }));
      const next = [...prev.slice(0, activeSlideIdx + 1), currentCopy, ...prev.slice(activeSlideIdx + 1)];
      pushHistory(next, activeSlideIdx + 1);
      
      setTimeout(() => {
        setActiveSlideIdx(activeSlideIdx + 1);
        setElements(currentCopy);
      }, 0);
      
      return next;
    });
    setIsDirty(true);
    setSelectedId(null);
    setEditingText(null);
  };

const deleteSlide = () => {
  if (slides.length <= 1) return;

  setSlides(prev => {
    const next = prev.filter((_, idx) => idx !== activeSlideIdx);
    const newIdx = Math.max(0, activeSlideIdx - 1);
    pushHistory(next, newIdx);

    const nextEls = next[newIdx] || [];

    setTimeout(() => {
      setActiveSlideIdx(newIdx);
      setElements(nextEls);
    }, 0);

    return next;
  });

  setIsDirty(true);
  setSelectedId(null);
  setEditingText(null);
};
/* Interaction state */
  const [dragging, setDragging] = useState(false);
  const [resizing, setResizing] = useState<string | null>(null);
  const [drawStart, setDrawStart] = useState<{ x: number; y: number } | null>(null);
  const dragOffset = useRef({ x: 0, y: 0 });
  const resizeStart = useRef({ x: 0, y: 0, ex: 0, ey: 0, ew: 0, eh: 0 });
  const [showTemplates, setShowTemplates] = useState(false);
  /* UI state */
  const [showDlMenu, setShowDlMenu] = useState(false);
  const dlMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dlMenuRef.current && !dlMenuRef.current.contains(e.target as Node)) {
        setShowDlMenu(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const [colorTarget, setColorTarget] = useState<string | null>(null); // 'fill' | 'stroke' | 'bg' | 'text'
  const [editingText, setEditingText] = useState<string | null>(null);
  const textInputRef = useRef<HTMLTextAreaElement>(null);
  const elemCountRef = useRef<Record<string, number>>({});

  const selected = elements.find(e => e.id === selectedId) || null;
  const fileExtension = String(templateFileName || templateName || '').split('.').pop()?.toLowerCase() || '';
  const isPdf = Boolean(templateFileType && templateFileType.toLowerCase().includes('pdf')) || fileExtension === 'pdf';
  const isOfficeDocument = ['doc', 'docx', 'ppt', 'pptx'].includes(fileExtension) || Boolean(templateFileType && /powerpoint|msword|officedocument/.test(templateFileType.toLowerCase()));
  const isUploadedDocument = Boolean(
    templateFileUrl && templateFileType && !templateFileType.toLowerCase().startsWith('image/') && !hasCanvasContent
  );

  useEffect(() => {
    let initialSlides: CanvasElement[][] = [];
    const isUploadedFileTemplate = Boolean(templateFileUrl && templateFileType);

    if (templateSlides && templateSlides.length > 0) {
      initialSlides = templateSlides.map((slide: any) => {
        const els = Array.isArray(slide)
          ? slide
          : Array.isArray(slide?.elements)
          ? slide.elements
          : [];
        return els.map((el: any) => ({ ...el, id: el.id || uid() }));
      }).filter((s: CanvasElement[]) => s.length > 0);
    } 
    
    if (initialSlides.length === 0 && templateElements && templateElements.length > 0) {
      const flatEls = Array.isArray(templateElements)
        ? templateElements
        : Array.isArray((templateElements as any)?.elements)
        ? (templateElements as any).elements
        : [];
      if (flatEls.length > 0) {
        initialSlides = [
          flatEls.map((el: any) => ({ ...el, id: el.id || uid() }))
        ];
      }
    }

    if (initialSlides.length === 0 && isUploadedFileTemplate) {
      const uploadedFileKind = (templateFileType || '').toLowerCase();

      if (uploadedFileKind.startsWith('image/')) {
        initialSlides = [[{
          id: `uploaded-${templateFileName || resolvedName || 'template'}`,
          type: 'image',
          x: 0,
          y: 0,
          width: cW,
          height: cH,
          src: templateFileUrl,
          fill: 'transparent',
          stroke: 'transparent',
          strokeWidth: 0,
          opacity: 1,
          visible: true,
          locked: true,
        }]];
      } else {
        initialSlides = [[{
          id: `uploaded-${templateFileName || resolvedName || 'template'}`,
          type: 'rect',
          x: 0,
          y: 0,
          width: cW,
          height: cH,
          fill: '#0f172a',
          stroke: 'transparent',
          strokeWidth: 0,
          opacity: 1,
          visible: true,
          locked: true,
        }]];
      }
    }

    // Professional Fallback: If still empty, generate rich multi-element slides
    if (initialSlides.length === 0) {
      if (isPresentation) {
        const generated = createProfessionalSlides(resolvedName, '1920×1080');
        if (generated && generated.length > 0) {
          initialSlides = generated.slice(0, 8).map(s => s.map((el: any) => ({ ...el, id: el.id || uid() })));
        }
      }

      if (initialSlides.length === 0) {
        const bgFill = templateGradient || (isPresentation ? '#0b0f19' : '#0f172a');
        const accent = '#38bdf8';
        initialSlides = [[
          { id: uid(), type: 'rect', x: 0, y: 0, width: cW, height: cH, fill: bgFill, stroke: 'transparent', strokeWidth: 0, opacity: 1, locked: true, visible: true },
          { id: uid(), type: 'rect', x: Math.round(cW * 0.08), y: Math.round(cH * 0.12), width: 180, height: 32, fill: 'rgba(56,189,248,0.15)', stroke: accent, strokeWidth: 1, borderRadius: 16, opacity: 1, locked: false, visible: true },
          { id: uid(), type: 'text', x: Math.round(cW * 0.08) + 16, y: Math.round(cH * 0.12) + 6, width: 150, height: 20, fill: accent, text: 'FEATURED DESIGN', fontSize: 12, fontFamily: 'Space Grotesk', fontWeight: 'bold', opacity: 1, locked: false, visible: true },
          { id: uid(), type: 'text', x: Math.round(cW * 0.08), y: Math.round(cH * 0.22), width: Math.round(cW * 0.84), height: 90, fill: '#ffffff', text: resolvedName, fontSize: Math.min(56, Math.round(cW * 0.045)), fontFamily: 'Space Grotesk', fontWeight: 'bold', opacity: 1, locked: false, visible: true },
          { id: uid(), type: 'rect', x: Math.round(cW * 0.08), y: Math.round(cH * 0.36), width: 120, height: 4, fill: accent, stroke: 'transparent', strokeWidth: 0, opacity: 1, locked: false, visible: true },
          { id: uid(), type: 'text', x: Math.round(cW * 0.08), y: Math.round(cH * 0.40), width: Math.round(cW * 0.75), height: 70, fill: '#94a3b8', text: 'Professional high-impact visual design crafted for modern creative workflows.', fontSize: Math.min(22, Math.round(cW * 0.018)), fontFamily: 'Inter', fontWeight: 'normal', opacity: 1, locked: false, visible: true }
        ]];
      }
    }
    setSlides(initialSlides);
    setElements(initialSlides[0] || []);
    
    const initialStep: HistoryStep = {
      slides: initialSlides,
      activeSlideIdx: 0
    };
    setHistory([initialStep]);
    setHistoryIdx(0);
    
    const counts: Record<string, number> = {};
    (initialSlides[0] || []).forEach(el => {
      counts[el.type] = (counts[el.type] || 0) + 1;
    });
    elemCountRef.current = counts;
    
    // Set background color from template elements if defined
    const bgEl = (initialSlides[0] || []).find(e => e.id?.endsWith('-bg'));
    if (bgEl && bgEl.fill) {
      setBgColor(bgEl.fill);/* Init template */
    }
  }, [cW, cH, templateElements, templateSlides, templateFileUrl, templateFileType, templateFileName, resolvedName, isPresentation]);

  /* Preload image assets so Unsplash photography renders immediately */
  useEffect(() => {
    preloadTemplateAssets({ elements });
  }, [elements]);

  /* Keyboard shortcuts & smooth canvas navigation */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === 'z' && !e.shiftKey) { e.preventDefault(); undo(); }
      if (e.ctrlKey && e.key === 'Z') { e.preventDefault(); redo(); }
      if (e.ctrlKey && e.shiftKey && e.key === 'z') { e.preventDefault(); redo(); }
      if (e.key === 'Delete' && selectedId && !editingText) {
        const next = elements.filter(el => el.id !== selectedId);
        setSelectedId(null); commitChange(next);
      }
      if (e.key === 'Escape') { setSelectedId(null); setEditingText(null); setTool('select'); }

      // Smooth vertical keyboard navigation for canvas viewport
      const isInputFocused = ['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName || '') || Boolean(editingText);
      if (!isInputFocused && canvasWrapRef.current) {
        const el = canvasWrapRef.current;
        const canScroll = el.scrollHeight > el.clientHeight + 4;
        if (canScroll) {
          if (e.key === 'Home') {
            e.preventDefault();
            el.scrollTo({ top: 0, behavior: 'smooth' });
          } else if (e.key === 'End') {
            e.preventDefault();
            el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' });
          } else if (e.key === 'PageUp') {
            e.preventDefault();
            el.scrollBy({ top: -el.clientHeight * 0.8, behavior: 'smooth' });
          } else if (e.key === 'PageDown') {
            e.preventDefault();
            el.scrollBy({ top: el.clientHeight * 0.8, behavior: 'smooth' });
          }
        }
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [undo, redo, selectedId, elements, commitChange, editingText]);

  /* Wheel event propagation control for smooth canvas scrolling */
  useEffect(() => {
    const el = canvasWrapRef.current;
    if (!el) return;
    const handleWheel = (e: WheelEvent) => {
      if (el.scrollHeight > el.clientHeight) {
        e.stopPropagation();
      }
    };
    el.addEventListener('wheel', handleWheel, { passive: true });
    return () => el.removeEventListener('wheel', handleWheel);
  }, []);

  /* ── Canvas Render ────────────────────────────────────────── */
  const renderCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = Math.max(1, Math.round(cW * dpr));
    canvas.height = Math.max(1, Math.round(cH * dpr));
    canvas.style.width = `${cW * zoom}px`;
    canvas.style.height = `${cH * zoom}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';
    ctx.clearRect(0, 0, cW, cH);

    // 1. Shared Engine: Draw background, gradients, shapes, images, and text
    renderCanonicalSlideToContext(
      ctx,
      elements,
      cW,
      cH,
      bgGradient && bgGradient.includes('gradient') ? bgGradient : (bgColor || '#ffffff'),
      {
        context: { templateId: templateName, pageId: activeSlideIdx + 1 },
        onImageLoaded: () => {
          renderCanvas();
        }
      }
    );

    // 2. Selection UI
    if (selected && selected.visible) {
      ctx.save();
      ctx.strokeStyle = '#8b5cf6'; ctx.lineWidth = 1.5;
      ctx.setLineDash([5, 3]);
      ctx.strokeRect(selected.x - 1, selected.y - 1, selected.width + 2, selected.height + 2);
      ctx.setLineDash([]);

      // Handles
      const handles = getHandles(selected);
      for (const h of handles) {
        ctx.fillStyle = '#ffffff';
        ctx.strokeStyle = '#8b5cf6'; ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.rect(h.x, h.y, h.size, h.size);
        ctx.fill(); ctx.stroke();
      }
      ctx.restore();
    }
  }, [elements, selected, cW, cH, bgColor, bgGradient, zoom, templateName, activeSlideIdx]);

  // Preload fonts & assets and re-render canvas only when font families, weights or image assets change
  const fontAndAssetKey = useMemo(() => {
    if (!elements || elements.length === 0) return '';
    return elements.map(el => `${el.id}:${el.fontFamily || ''}:${el.fontWeight || ''}:${el.src || ''}`).join('|');
  }, [elements]);

  useEffect(() => {
    let active = true;
    if (elements && elements.length > 0) {
      Promise.all([
        loadTemplateFonts(elements, { templateId: templateName, pageId: activeSlideIdx + 1 }),
        preloadTemplateAssets({ elements }, { templateId: templateName, pageId: activeSlideIdx + 1 })
      ]).then(() => {
        if (active) renderCanvas();
      });
    }
    return () => { active = false; };
  }, [fontAndAssetKey, activeSlideIdx, templateName, renderCanvas]);

  useEffect(() => { renderCanvas(); }, [renderCanvas]);

  /* ── Mouse events ─────────────────────────────────────────── */
  const getCanvasPos = useCallback((e: React.MouseEvent) => {
    const rect = canvasRef.current!.getBoundingClientRect();
    return { x: (e.clientX - rect.left) / zoom, y: (e.clientY - rect.top) / zoom };
  }, [zoom]);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    const pos = getCanvasPos(e);

if (editingText && selectedId !== editingText) {
  setEditingText(null);
}

    if (tool === 'select') {
      // Check resize handle on selected
      if (selected && !selected.locked) {
        const handlePos = hitHandle(selected, pos.x, pos.y);
        if (handlePos) {
          setResizing(handlePos);
          resizeStart.current = { x: pos.x, y: pos.y, ex: selected.x, ey: selected.y, ew: selected.width, eh: selected.height };
          return;
        }
      }
      // Check click on element (top-first)
      for (let i = elements.length - 1; i >= 0; i--) {
        if (hitTest(elements[i], pos.x, pos.y) && !elements[i].locked) {
          setSelectedId(elements[i].id);
          setDragging(true);
          dragOffset.current = { x: pos.x - elements[i].x, y: pos.y - elements[i].y };
          return;
        }
      }
      setSelectedId(null);
      return;
    }

    if (tool === 'text') {
      const el: CanvasElement = {
        id: uid(), type: 'text', x: pos.x - 60, y: pos.y - 14,
        width: 200, height: 40, rotation: 0,
       fill: '#ffffff', stroke: 'transparent', strokeWidth: 0,
        text: 'Text', fontSize: 20, fontFamily: 'Inter', fontWeight: 'normal',
        fontStyle: 'normal', textDecoration: 'none',
        opacity: 1, locked: false, visible: true,
      };
      const next = [...elements, el];
      setSelectedId(el.id); setEditingText(el.id);
      commitChange(next);
      setTool('select');
      return;
    }

    if (tool === 'image') {
      fileRef.current?.click();
      return;
    }

    if (tool === 'star') {
      const size = 60;
      const el: CanvasElement = {
        id: uid(), type: 'star', x: pos.x - size / 2, y: pos.y - size / 2,
        width: size, height: size, rotation: 0,
        fill: '#eab308', stroke: '#000000', strokeWidth: 0,
        opacity: 1, locked: false, visible: true,
      };
      const next = [...elements, el];
      setSelectedId(el.id); commitChange(next);
      setTool('select');
      return;
    }

    // Shapes: rect, circle, line, arrow, triangle
    setDrawStart(pos);
  }, [tool, elements, selected, getCanvasPos, commitChange, editingText]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const pos = getCanvasPos(e);

    if (dragging && selectedId) {
      setElements(prev => {
        const next = prev.map(el => el.id === selectedId
          ? { ...el, x: pos.x - dragOffset.current.x, y: pos.y - dragOffset.current.y } : el);
        elementsRef.current = next;
        return next;
      });
      return;
    }

    if (resizing && selectedId) {
      const rs = resizeStart.current;
      const dx = pos.x - rs.x, dy = pos.y - rs.y;
      setElements(prev => {
        const next = prev.map(el => {
          if (el.id !== selectedId) return el;
          let { x, y, width, height } = { x: rs.ex, y: rs.ey, width: rs.ew, height: rs.eh };
          switch (resizing) {
            case 'br': width += dx; height += dy; break;
            case 'bl': x += dx; width -= dx; height += dy; break;
            case 'tr': width += dx; y += dy; height -= dy; break;
            case 'tl': x += dx; y += dy; width -= dx; height -= dy; break;
            case 'mr': width += dx; break;
            case 'ml': x += dx; width -= dx; break;
            case 'tc': y += dy; height -= dy; break;
            case 'bc': height += dy; break;
          }
          return { ...el, x, y, width: Math.max(width, 10), height: Math.max(height, 10) };
        });
        elementsRef.current = next;
        return next;
      });
      return;
    }

    if (drawStart && tool !== 'select') {
      // Live preview: create temporary element
      const sx = Math.min(drawStart.x, pos.x), sy = Math.min(drawStart.y, pos.y);
      const w = Math.abs(pos.x - drawStart.x), h = Math.abs(pos.y - drawStart.y);
      // We handle the creation on mouseUp
    }
  }, [dragging, resizing, selectedId, getCanvasPos, drawStart, tool]);

  const handleMouseUp = useCallback((e: React.MouseEvent) => {
    const pos = getCanvasPos(e);

    if (dragging) {
      setDragging(false);
      commitChange(elementsRef.current);
      return;
    }

    if (resizing) {
      setResizing(null);
      commitChange(elementsRef.current);
      return;
    }

    if (drawStart) {
      const sx = Math.min(drawStart.x, pos.x), sy = Math.min(drawStart.y, pos.y);
      const w = Math.max(Math.abs(pos.x - drawStart.x), 20);
      const h = Math.max(Math.abs(pos.y - drawStart.y), 20);

      const defaults: Partial<CanvasElement> = {
        rotation: 0, stroke: '#000000', strokeWidth: 0,
        opacity: 1, locked: false, visible: true,
      };

      let el: CanvasElement | null = null;
      switch (tool) {
        case 'rect':
          el = { ...defaults, id: uid(), type: 'rect', x: sx, y: sy, width: w, height: h, fill: '#8b5cf6' } as CanvasElement;
          break;
        case 'circle':
          el = { ...defaults, id: uid(), type: 'circle', x: sx, y: sy, width: w, height: h, fill: '#3b82f6' } as CanvasElement;
          break;
        case 'line':
          el = { ...defaults, id: uid(), type: 'line', x: drawStart.x, y: drawStart.y, width: pos.x - drawStart.x || 80, height: 4, fill: '#333333', strokeWidth: 2 } as CanvasElement;
          break;
        case 'arrow':
          el = { ...defaults, id: uid(), type: 'arrow', x: drawStart.x, y: drawStart.y, width: pos.x - drawStart.x || 80, height: 4, fill: '#333333', strokeWidth: 2 } as CanvasElement;
          break;
        case 'triangle':
          el = { ...defaults, id: uid(), type: 'triangle', x: sx, y: sy, width: w, height: h, fill: '#22c55e' } as CanvasElement;
          break;
      }
      if (el) {
        const next = [...elements, el];
        commitChange(next);
        setSelectedId(el.id);
      }
      setDrawStart(null);
      setTool('select');
    }
  }, [drawStart, elements, getCanvasPos, commitChange, tool, dragging, resizing]);

  /* Double-click text to edit */
  const handleDblClick = useCallback((e: React.MouseEvent) => {
    const pos = getCanvasPos(e);
    for (let i = elements.length - 1; i >= 0; i--) {
      if (elements[i].type === 'text' && hitTest(elements[i], pos.x, pos.y)) {
        console.log("double click editing text:", elements[i].id);
        setSelectedId(elements[i].id);
        setEditingText(elements[i].id);
        return;
      }
    }
  }, [elements, getCanvasPos]);

  /* Image upload handler */
  const handleImageUpload = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      const src = ev.target?.result as string;
      const img = new window.Image();
      img.crossOrigin = 'anonymous';
      img.onload = () => {
        let iw = img.width, ih = img.height;
        const maxDim = Math.min(cW * 0.6, cH * 0.6);
        const scale = Math.min(maxDim / iw, maxDim / ih, 1);
        iw = Math.round(iw * scale); ih = Math.round(ih * scale);
        const el: CanvasElement = {
          id: uid(), type: 'image', x: (cW - iw) / 2, y: (cH - ih) / 2,
          width: iw, height: ih, rotation: 0,
          fill: 'transparent', stroke: 'transparent', strokeWidth: 0,
          src, opacity: 1, locked: false, visible: true,
        };
        imgCache.set(src, img);
        const next = [...elements, el];
        commitChange(next);
        setSelectedId(el.id);
        setTool('select');
      };
      img.src = src;
    };
    reader.readAsDataURL(file);
    e.target.value = '';
  }, [elements, cW, cH, commitChange]);

  /* Download */
  const handleDownload = useCallback((format: 'png' | 'jpg') => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const prevSel = selectedId;
    setSelectedId(null);
    setTimeout(() => {
      const mime = format === 'png' ? 'image/png' : 'image/jpeg';
      const quality = format === 'jpg' ? 0.9 : undefined;
      const url = canvas.toDataURL(mime, quality);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${resolvedName.replace(/\s+/g, '_')}_page_${activeSlideIdx + 1}.${format}`;
      a.click();
      setSelectedId(prevSel);
      setShowDlMenu(false);
    }, 50);
  }, [selectedId, resolvedName, activeSlideIdx]);

  const downloadDesignJson = useCallback(() => {
    const payload = {
      name: resolvedName,
      size: templateSize,
      gradient: bgGradient || bgColor,
      elements,
      slides,
      exportedAt: new Date().toISOString(),
    };

    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${resolvedName.replace(/\s+/g, '_')}.json`;
    a.click();
    URL.revokeObjectURL(url);
    setShowDlMenu(false);
  }, [resolvedName, templateSize, bgGradient, bgColor, elements, slides]);

  const handleExportPdf = useCallback(async () => {
    setShowDlMenu(false);
    const toastId = toast.loading('Preparing multi-page PDF document...');
    try {
      const slidesToExport = (slides && slides.length > 0) ? slides : [elements];
      await exportToPdf({
        slides: slidesToExport,
        templateName: resolvedName,
        canvasWidth: cW,
        canvasHeight: cH,
        backgroundColor: bgColor,
        backgroundGradient: bgGradient,
        onProgress: (_prog, msg) => {
          toast.loading(msg, { id: toastId });
        }
      });
      toast.success('PDF document downloaded successfully!', { id: toastId });
    } catch (err: any) {
      console.error('Failed to export PDF:', err);
      toast.error('Failed to export PDF: ' + (err?.message || 'Unknown error'), { id: toastId });
    }
  }, [slides, elements, resolvedName, cW, cH, bgColor, bgGradient]);

  const handleExportPptx = useCallback(async () => {
    setShowDlMenu(false);
    const toastId = toast.loading('Preparing PPTX export with embedded images...');
    try {
      const slidesToExport = (slides && slides.length > 0) ? slides : [elements];
      await exportToPptx({
        slides: slidesToExport,
        templateName: resolvedName,
        canvasWidth: cW,
        canvasHeight: cH,
        backgroundColor: bgColor,
        backgroundGradient: bgGradient,
        onProgress: (_prog, msg) => {
          toast.loading(msg, { id: toastId });
        }
      });
      toast.success('PowerPoint presentation (.pptx) downloaded with embedded images!', { id: toastId });
    } catch (err: any) {
      console.error('Failed to export PPTX:', err);
      toast.error('Failed to export PPTX: ' + (err?.message || 'Unknown error'), { id: toastId });
    }
  }, [slides, elements, resolvedName, cW, cH, bgColor, bgGradient]);


  /* Update element property */
  const updateEl = useCallback((id: string, patch: Partial<CanvasElement>) => {
    const next = elements.map(el => el.id === id ? { ...el, ...patch } : el);
    commitChange(next);
  }, [elements, commitChange]);

  /* Layer controls */
  const moveLayer = useCallback((id: string, dir: -1 | 1) => {
    const idx = elements.findIndex(e => e.id === id);
    if (idx < 0) return;
    const ni = idx + dir;
    if (ni < 0 || ni >= elements.length) return;
    const next = [...elements];
    [next[idx], next[ni]] = [next[ni], next[idx]];
    commitChange(next);
  }, [elements, commitChange]);

  const deleteEl = useCallback((id: string) => {
    const next = elements.filter(e => e.id !== id);
    if (selectedId === id) setSelectedId(null);
    commitChange(next);
  }, [elements, selectedId, commitChange]);

  /* Layer type icons */
  const layerIcon = (type: ElementType) => {
    const s = 13;
    switch (type) {
      case 'text': return <Type size={s} />;
      case 'rect': return <Square size={s} />;
      case 'circle': return <Circle size={s} />;
      case 'line': return <Minus size={s} />;
      case 'arrow': return <ArrowUpRight size={s} />;
      case 'star': return <Star size={s} />;
      case 'triangle': return <Triangle size={s} />;
      case 'image': return <Image size={s} />;
      default: return null;
    }
  };

  /* Auto-name for layers */
  const nameMap = useMemo(() => {
    const counts: Record<string, number> = {};
    const map: Record<string, string> = {};
    for (const el of elements) {
      counts[el.type] = (counts[el.type] || 0) + 1;
      const label = el.type.charAt(0).toUpperCase() + el.type.slice(1);
      map[el.id] = el.type === 'text' ? (el.text?.slice(0, 16) || `${label} ${counts[el.type]}`) : `${label} ${counts[el.type]}`;
    }
    return map;
  }, [elements]);

  /* ── Render ───────────────────────────────────────────────── */
  return (
    <div style={S.wrap} className="ce-wrap">
      {/* Hidden file input */}
      <input ref={fileRef} type="file" accept=".jpg,.jpeg,.png,.gif,.svg,.webp" style={{ display: 'none' }}
        onChange={handleImageUpload} />

      {/* ─── Top Bar ───────────────────────────────────────── */}
      <div style={S.topBar} className="ce-topbar">
        <div style={S.topLeft}>
          <button style={S.backBtn} onClick={handleBack} className="ce-back-btn"
            onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.06)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'none')}>
            <ArrowLeft size={15} /> {!isMobile && "Back"}
          </button>
          <div style={{ width: 1, height: 16, background: 'rgba(255,255,255,0.08)' }} />
          {isEditingTitle ? (
            <input
              type="text"
              value={designTitle}
              onChange={e => {
                setDesignTitle(e.target.value);
                setIsDirty(true);
              }}
              onBlur={() => setIsEditingTitle(false)}
              onKeyDown={e => { if (e.key === 'Enter') setIsEditingTitle(false); }}
              autoFocus
              style={{
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(139,92,246,0.5)',
                borderRadius: 6,
                color: '#fff',
                fontSize: 13,
                fontWeight: 600,
                padding: '4px 8px',
                outline: 'none',
                minWidth: 160
              }}
            />
          ) : (
            <span
              style={{ ...S.tmplName, cursor: 'pointer', padding: '4px 6px', borderRadius: 4, transition: 'background 0.15s' }}
              onClick={() => setIsEditingTitle(true)}
              title="Click to rename design"
              onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.06)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
            >
              {isMobile && designTitle.length > 12 ? designTitle.substring(0, 12) + '..' : designTitle}
            </span>
          )}
        </div>
        <div style={S.topRight}>
          <button style={S.iconBtn(false)} title="Undo (Ctrl+Z)" onClick={undo}
            onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.08)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.04)')}>
            <Undo2 size={16} />
          </button>
          <button style={S.iconBtn(false)} title="Redo (Ctrl+Shift+Z)" onClick={redo}
            onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.08)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.04)')}>
            <Redo2 size={16} />
          </button>
          {!isMobile && <div style={{ width: 1, height: 16, background: 'rgba(255,255,255,0.08)' }} />}
          
          {/* Zoom controls with Fit View and Presets */}
          {!isMobile && (
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <button style={S.iconBtn(false)} title="Zoom Out" onClick={handleZoomOut}
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.08)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.04)')}>
                <Minus size={14} />
              </button>
              <button
                onClick={handleZoomReset}
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  borderRadius: 8,
                  color: 'rgba(255,255,255,0.9)',
                  fontSize: 11,
                  fontWeight: 600,
                  padding: '5px 12px',
                  cursor: 'pointer',
                  outline: 'none',
                  whiteSpace: 'nowrap',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6
                }}
                title="Reset to Fit View"
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.12)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.06)')}
              >
                Fit View <span style={{ opacity: 0.5, fontSize: 10 }}>({Math.round(zoom * 100)}%)</span>
              </button>
              <button style={S.iconBtn(false)} title="Zoom In" onClick={handleZoomIn}
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.08)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.04)')}>
                <Plus size={14} />
              </button>
            </div>
          )}

          {!isMobile && <div style={{ width: 1, height: 16, background: 'rgba(255,255,255,0.08)' }} />}
          {onSave && (
            <>
              <button 
                title="Save Design"
                style={{ 
                  ...S.iconBtn(false), 
                  width: 'auto', 
                  padding: isMobile ? '0 8px' : '0 12px', 
                  gap: 6, 
                  display: 'flex', 
                  alignItems: 'center', 
                  fontSize: 12, 
                  fontWeight: 500,
                  background: isDirty ? '#8b5cf6' : 'rgba(255,255,255,0.04)',
                  color: isDirty ? '#ffffff' : 'rgba(255,255,255,0.65)',
                  border: isDirty ? '1px solid #8b5cf6' : '1px solid rgba(255,255,255,0.06)',
                  boxShadow: isDirty ? '0 0 12px rgba(139, 92, 246, 0.4)' : 'none',
                }}
                onClick={() => performSave(true)}
                onMouseEnter={e => {
                  if (isDirty) {
                    e.currentTarget.style.background = '#7c3aed';
                    e.currentTarget.style.boxShadow = '0 0 16px rgba(139, 92, 246, 0.6)';
                  } else {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                  }
                }}
                onMouseLeave={e => {
                  if (isDirty) {
                    e.currentTarget.style.background = '#8b5cf6';
                    e.currentTarget.style.boxShadow = '0 0 12px rgba(139, 92, 246, 0.4)';
                  } else {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                  }
                }}
              >
                <Save size={14} /> {!isMobile && "Save Design"}
              </button>
              {!isMobile && <div style={{ width: 1, height: 16, background: 'rgba(255,255,255,0.08)' }} />}
            </>
          )}
          <div style={{ position: 'relative' }} ref={dlMenuRef}>
            <button style={{ ...S.iconBtn(false), width: 'auto', padding: isMobile ? '0 8px' : '0 12px', gap: 6, display: 'flex', fontSize: 12, fontWeight: 500 }}
              onClick={() => setShowDlMenu(!showDlMenu)}
              onMouseEnter={e => (e.currentTarget.style.background = 'rgba(139,92,246,0.15)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.04)')}>
              <Download size={14} /> {!isMobile && "Export"} {!isMobile && <ChevronDown size={12} />}
            </button>
            {showDlMenu && (
              <div style={S.dlDropdown as any}>
                <button style={S.dlItem} onClick={() => handleDownload('png')}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
                    e.currentTarget.style.color = '#fff';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'none';
                    e.currentTarget.style.color = 'rgba(255,255,255,0.85)';
                  }}>
                  <FileImage size={14} style={{ color: '#3b82f6' }} />
                  Download PNG
                </button>
                <button style={S.dlItem} onClick={() => handleDownload('jpg')}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
                    e.currentTarget.style.color = '#fff';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'none';
                    e.currentTarget.style.color = 'rgba(255,255,255,0.85)';
                  }}>
                  <FileImage size={14} style={{ color: '#10b981' }} />
                  Download JPG
                </button>
                <button style={S.dlItem} onClick={handleExportPdf}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
                    e.currentTarget.style.color = '#fff';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'none';
                    e.currentTarget.style.color = 'rgba(255,255,255,0.85)';
                  }}>
                  <FileText size={14} style={{ color: '#ef4444' }} />
                  Download PDF
                </button>
                <button style={S.dlItem} onClick={handleExportPptx}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
                    e.currentTarget.style.color = '#fff';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'none';
                    e.currentTarget.style.color = 'rgba(255,255,255,0.85)';
                  }}>
                  <Presentation size={14} style={{ color: '#ec4899' }} />
                  Download PPTX
                </button>

                <button style={S.dlItem} onClick={downloadDesignJson}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
                    e.currentTarget.style.color = '#fff';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'none';
                    e.currentTarget.style.color = 'rgba(255,255,255,0.85)';
                  }}>
                  <FileCode size={14} style={{ color: '#a855f7' }} />
                  Download JSON
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ─── Middle: Toolbar + Canvas + Layers ─────────────── */}
<div style={S.midRow}>

  {/* Slide Panel */}
  {!isMobile && (
    <div
      style={{
        width: isPresentation ? 180 : 220,
        background: "#111118",
        borderRight: "1px solid rgba(255,255,255,0.06)",
        overflowY: "auto",
        padding: isPresentation ? "12px 10px" : 12,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10, padding: "0 2px" }}>
        <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", color: "rgba(255,255,255,0.5)" }}>
          SLIDES
        </span>
        <span style={{ fontSize: 11, fontWeight: 600, color: "#a78bfa", background: "rgba(167,139,250,0.12)", padding: "2px 8px", borderRadius: 12 }}>
          Slide {activeSlideIdx + 1} of {slides.length}
        </span>
      </div>

      <button
        onClick={addSlide}
        style={{
          width: "100%",
          padding: 12,
          marginBottom: 12,
          background: "#8b5cf6",
          border: "none",
          borderRadius: 8,
          color: "white",
          cursor: "pointer",
        }}
      >
        + Add Slide
      </button>

      {slides.map((slide, index) => (
        <SlideThumbnailItem
          key={index}
          slide={slide}
          index={index}
          isActive={activeSlideIdx === index}
          cW={cW}
          cH={cH}
          bgColor={bgColor}
          onSelect={handleSelectSlide}
          onDuplicate={duplicateSlide}
          onDelete={deleteSlide}
          canDelete={slides.length > 1}
        />
      ))}
    </div>
  )}

  {/* Tool Bar */}
  <div style={S.toolBar} className="ce-toolbar">
          {toolDefs.map(t => (
            <button key={t.tool} style={S.toolBtn(tool === t.tool)} title={t.label}
              onClick={() => {
                setTool(t.tool);
                if (t.tool === 'image') fileRef.current?.click();
              }}
              onMouseEnter={e => { if (tool !== t.tool) e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; }}
              onMouseLeave={e => { if (tool !== t.tool) e.currentTarget.style.background = 'transparent'; }}>
              <t.icon size={18} />
            </button>
          ))}
        </div>

        {/* Canvas Area */}
        <div
          ref={canvasWrapRef}
          style={{
            ...S.canvasWrap,
            justifyContent: isPresentation ? 'center' : 'flex-start',
            padding: isPresentation ? '16px 24px' : '24px 0',
            cursor: isSpacePressed ? (isPanningRef.current ? 'grabbing' : 'grab') : 'default',
          }}
          className="ce-canvas-wrap"
          onClick={() => setShowDlMenu(false)}
          onMouseDown={handleWorkspaceMouseDown}
          onMouseMove={handleWorkspaceMouseMove}
          onMouseUp={handleWorkspaceMouseUp}
          onMouseLeave={handleWorkspaceMouseUp}
        >
          <div style={{ 
            position: 'relative', 
            boxShadow: '0 4px 40px rgba(0,0,0,0.5)', 
            borderRadius: 4, 
            overflow: 'hidden',
            width: cW * zoom,
            height: cH * zoom,
            flexShrink: 0,
            transition: 'width 0.15s ease-out, height 0.15s ease-out',
            margin: 'auto'
          }}>
            {isUploadedDocument ? (
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                width: cW * zoom,
                height: cH * zoom,
                background: '#ffffff',
                padding: 0,
                boxSizing: 'border-box',
                overflow: 'hidden',
              }}>
                {templateFileUrl && (
                  <>
                    {isPdf ? (
                      <iframe
                        src={templateFileUrl}
                        title={templateFileName || templateName || 'Template File'}
                        style={{
                          width: '100%',
                          height: '100%',
                          border: 'none',
                          background: '#ffffff',
                          display: 'block',
                          flex: 1,
                        }}
                      />
                    ) : (
                      <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100%',
                        height: '100%',
                        padding: 24,
                        background: 'linear-gradient(180deg, #f8fafc 0%, #eef2ff 100%)',
                        color: '#334155',
                        textAlign: 'center',
                        fontFamily: 'Inter',
                      }}>
                        <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: 96,
                          height: 96,
                          borderRadius: 24,
                          background: 'rgba(124, 58, 237, 0.12)',
                          color: '#6d28d9',
                          fontSize: 28,
                          fontWeight: 700,
                          marginBottom: 18,
                        }}>
                          {fileExtension ? fileExtension.toUpperCase() : 'FILE'}
                        </div>
                        <div style={{ fontSize: 18, fontWeight: 700, marginBottom: 8, maxWidth: 340 }}>
                          {templateFileName || templateName || 'Document'}
                        </div>
                        <div style={{ fontSize: 13, color: '#64748b', marginBottom: 20 }}>
                          {isOfficeDocument ? 'Office document preview' : 'File preview'}
                        </div>
                        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
                          <a
                            href={templateFileUrl}
                            target="_blank"
                            rel="noreferrer"
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              padding: '10px 16px',
                              background: '#8b5cf6',
                              color: '#ffffff',
                              borderRadius: 8,
                              textDecoration: 'none',
                              fontWeight: 600,
                              fontSize: 12,
                              cursor: 'pointer',
                            }}
                          >
                            Open Full File
                          </a>
                          <a
                            href={templateFileUrl}
                            download={templateFileName || templateName || 'template-file'}
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              padding: '10px 16px',
                              background: '#ffffff',
                              color: '#1f2937',
                              border: '1px solid rgba(148, 163, 184, 0.6)',
                              borderRadius: 8,
                              textDecoration: 'none',
                              fontWeight: 600,
                              fontSize: 12,
                              cursor: 'pointer',
                            }}
                          >
                            Download
                          </a>
                        </div>
                      </div>
                    )}

                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      gap: 12,
                      width: '100%',
                      padding: `${10 * zoom}px ${14 * zoom}px`,
                      borderTop: '1px solid rgba(148,163,184,0.2)',
                      background: 'rgba(248,250,252,0.96)',
                      color: '#334155',
                      fontSize: 12 * zoom,
                      fontFamily: 'Inter',
                    }}>
                      <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', fontWeight: 600 }}>
                        {templateFileName || templateName}
                      </span>

                      <a
                        href={templateFileUrl}
                        target="_blank"
                        rel="noreferrer"
                        download={templateFileName || templateName}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          padding: `${8 * zoom}px ${12 * zoom}px`,
                          background: '#8b5cf6',
                          color: '#ffffff',
                          borderRadius: 6 * zoom,
                          textDecoration: 'none',
                          fontWeight: 500,
                          cursor: 'pointer',
                          whiteSpace: 'nowrap',
                        }}
                        onMouseEnter={e => (e.currentTarget.style.background = '#7c3aed')}
                        onMouseLeave={e => (e.currentTarget.style.background = '#8b5cf6')}
                      >
                        Open Full File
                      </a>
                    </div>
                  </>
                )}
              </div>
            ) : (
              <canvas
                ref={canvasRef}
                width={cW}
                height={cH}
                style={{ 
                  display: 'block', 
                  width: cW * zoom, 
                  height: cH * zoom,
                  transition: 'width 0.15s ease-out, height 0.15s ease-out',
                  cursor: tool === 'select' ? (dragging ? 'grabbing' : 'default') : 'crosshair' 
                }}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={() => { setDragging(false); setResizing(null); setDrawStart(null); }}
                onDoubleClick={handleDblClick}
              />
            )}
            {/* Inline text editor overlay */}
            {editingText && (() => {
              const el = elements.find(e => e.id === editingText);
              console.log("editingText =", editingText);
console.log("found element =", el);
              if (!el || el.type !== 'text') return null;
              const canvasRect = canvasRef.current?.getBoundingClientRect();
              if (!canvasRect) return null;
              return (
                <textarea
                  ref={textInputRef}
                  autoFocus
                  style={{
                    position: 'absolute',
                    left: el.x * zoom,
                    top: el.y * zoom,
                    width: Math.max(el.width * zoom, 100 * zoom),
                    minHeight: el.height * zoom,
                    padding: `${8 * zoom}px`,
                    background: '#ffffff',
                    border: `${2 * zoom}px solid #8b5cf6`,
                    borderRadius: 6 * zoom,
                    color: '#000000',
                    fontSize: (el.fontSize || 20) * zoom,
                    fontFamily: el.fontFamily || 'Inter',
                    fontWeight: el.fontWeight || 'normal',
                    fontStyle: el.fontStyle || 'normal',
                    textDecoration: el.textDecoration || 'none',
                    outline: 'none',
                    resize: 'both',
                    zIndex: 50,
                    lineHeight: 1.3,
                    minWidth: 120,
                  }}
                  value={el.text || ''}
                  onChange={e => {
                    const txt = e.target.value;
                    setElements(prev => {
                      const next = prev.map(p => p.id === editingText ? { ...p, text: txt } : p);
                      elementsRef.current = next;
                      return next;
                    });
                    setIsDirty(true);
                  }}
                  onBlur={() => {
                    setEditingText(null);
                    commitChange(elementsRef.current);
                  }}
                  onKeyDown={e => {
                    if (e.key === 'Escape') { 
                      setEditingText(null); 
                      commitChange(elementsRef.current); 
                    }
                    e.stopPropagation();
                  }}
                />
              );
            })()}
          </div>

          {/* Slide Navigator Toolbar */}
          <div className="ce-slide-navigator" style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            background: 'rgba(24, 24, 37, 0.75)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: 12,
            padding: '8px 16px',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
            zIndex: 10
          }}>
            {/* Prev Slide Button */}
            <button
              style={{
                background: 'none',
                border: 'none',
                color: activeSlideIdx === 0 ? 'rgba(255,255,255,0.15)' : '#ffffff',
                cursor: activeSlideIdx === 0 ? 'default' : 'pointer',
                display: 'flex',
                alignItems: 'center',
                padding: 6,
                borderRadius: 6,
                transition: 'background 0.15s'
              }}
              disabled={activeSlideIdx === 0}
              onClick={() => handleSelectSlide(activeSlideIdx - 1)}
              onMouseEnter={e => { if (activeSlideIdx > 0) e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'none'; }}
            >
              <ChevronLeft size={16} />
            </button>

            {/* Slide Indicator Text */}
            <span style={{ fontSize: 12, fontWeight: 500, color: 'rgba(255,255,255,0.8)', minWidth: 80, textAlign: 'center' }}>
              Slide {activeSlideIdx + 1} of {slides.length}
            </span>

            {/* Next Slide Button */}
            <button
              style={{
                background: 'none',
                border: 'none',
                color: activeSlideIdx === slides.length - 1 ? 'rgba(255,255,255,0.15)' : '#ffffff',
                cursor: activeSlideIdx === slides.length - 1 ? 'default' : 'pointer',
                display: 'flex',
                alignItems: 'center',
                padding: 6,
                borderRadius: 6,
                transition: 'background 0.15s'
              }}
              disabled={activeSlideIdx === slides.length - 1}
              onClick={() => handleSelectSlide(activeSlideIdx + 1)}
              onMouseEnter={e => { if (activeSlideIdx < slides.length - 1) e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'none'; }}
            >
              <ChevronRight size={16} />
            </button>

            <div style={{ width: 1, height: 16, background: 'rgba(255,255,255,0.08)' }} />

            {/* Add Slide Button */}
            <button
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                background: 'none',
                border: 'none',
                color: '#a78bfa',
                cursor: 'pointer',
                fontSize: 12,
                fontWeight: 600,
                padding: '6px 10px',
                borderRadius: 6,
                transition: 'background 0.15s'
              }}
              onClick={addSlide}
              onMouseEnter={e => (e.currentTarget.style.background = 'rgba(139,92,246,0.15)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'none')}
            >
              <Plus size={14} /> Add Page
            </button>

            {/* Duplicate Slide Button */}
            <button
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                background: 'none',
                border: 'none',
                color: '#fbbf24',
                cursor: 'pointer',
                fontSize: 12,
                fontWeight: 600,
                padding: '6px 10px',
                borderRadius: 6,
                transition: 'background 0.15s'
              }}
              onClick={duplicateSlide}
              onMouseEnter={e => (e.currentTarget.style.background = 'rgba(251,191,36,0.15)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'none')}
            >
              <Copy size={14} /> Duplicate
            </button>

            {/* Delete Slide Button */}
            <button
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                background: 'none',
                border: 'none',
                color: slides.length <= 1 ? 'rgba(255,255,255,0.15)' : '#ef4444',
                cursor: slides.length <= 1 ? 'default' : 'pointer',
                fontSize: 12,
                fontWeight: 600,
                padding: '6px 10px',
                borderRadius: 6,
                transition: 'background 0.15s'
              }}
              disabled={slides.length <= 1}
              onClick={deleteSlide}
              onMouseEnter={e => { if (slides.length > 1) e.currentTarget.style.background = 'rgba(239,68,68,0.15)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'none'; }}
            >
              <Trash2 size={14} /> Delete
            </button>
          </div>

          {/* Floating Zoom Controls for Mobile */}
          {isMobile && (
            <div style={{
              position: 'absolute',
              bottom: 84,
              right: 16,
              display: 'flex',
              flexDirection: 'column',
              gap: 8,
              zIndex: 100,
              background: 'rgba(17, 17, 24, 0.9)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: 12,
              padding: '6px',
              backdropFilter: 'blur(10px)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
            }}>
              <button
                style={{
                  width: 32,
                  height: 32,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: 8,
                  color: '#fff',
                  cursor: 'pointer',
                }}
                onClick={handleZoomIn}
                title="Zoom In"
              >
                <Plus size={14} />
              </button>
              <span 
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  color: 'rgba(255,255,255,0.85)',
                  height: 24,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  userSelect: 'none',
                }}
                onClick={handleZoomReset}
                title="Reset Zoom"
              >
                {Math.round(zoom * 100)}%
              </span>
              <button
                style={{
                  width: 32,
                  height: 32,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: 8,
                  color: '#fff',
                  cursor: 'pointer',
                }}
                onClick={handleZoomOut}
                title="Zoom Out"
              >
                <Minus size={14} />
              </button>
            </div>
          )}
        </div>

        {/* Vertical Canvas Drag Navigator for Tall Templates only (not for landscape presentations) */}
        {!isPresentation && (
          <VerticalCanvasNavigator
            canvasWrapRef={canvasWrapRef}
            zoom={zoom}
            cH={cH}
            cW={cW}
          />
        )}

        {/* Layers Panel */}
        {!isMobile && (
          <div style={S.layersPanel} className="ce-layers">
            <div style={S.layerHeader}>Layers ({elements.length})</div>
            <div style={{ flex: 1, overflowY: 'auto' }}>
              {[...elements].reverse().map(el => (
                <div key={el.id} style={S.layerItem(el.id === selectedId)}
                  onClick={() => { setSelectedId(el.id); setTool('select'); }}>
                  <span style={{ color: 'rgba(255,255,255,0.4)', display: 'flex' }}>{layerIcon(el.type)}</span>
                  <span style={S.layerName}>{nameMap[el.id] || el.type}</span>
                  <button style={S.layerBtn} title="Move up" onClick={e => { e.stopPropagation(); moveLayer(el.id, 1); }}>
                    <ChevronUp size={12} />
                  </button>
                  <button style={S.layerBtn} title="Move down" onClick={e => { e.stopPropagation(); moveLayer(el.id, -1); }}>
                    <ChevronDown size={12} />
                  </button>
                  <button style={S.layerBtn} title={el.visible ? 'Hide' : 'Show'}
                    onClick={e => { e.stopPropagation(); updateEl(el.id, { visible: !el.visible }); }}>
                    {el.visible ? <Eye size={12} /> : <EyeOff size={12} />}
                  </button>
                  <button style={S.layerBtn} title={el.locked ? 'Unlock' : 'Lock'}
                    onClick={e => { e.stopPropagation(); updateEl(el.id, { locked: !el.locked }); }}>
                    {el.locked ? <Lock size={12} /> : <Unlock size={12} />}
                  </button>
                  <button style={{ ...S.layerBtn, color: 'rgba(239,68,68,0.6)' }} title="Delete"
                    onClick={e => { e.stopPropagation(); deleteEl(el.id); }}>
                    <Trash2 size={12} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* ─── Properties Bar ────────────────────────────────── */}
      <div style={{ ...S.propsBar, position: 'relative' }} className="ce-propsbar">
        {selected ? (
          <>
            {/* Common: opacity */}
            <span style={S.propLabel}>Opacity</span>
            <input type="range" min={0} max={1} step={0.05} value={selected.opacity ?? 1}
              style={{ width: 80, accentColor: '#8b5cf6' }}
              onChange={e => updateEl(selected.id, { opacity: parseFloat(e.target.value) })} />
            <span style={{ ...S.propLabel, minWidth: 28 }}>{Math.round((selected.opacity ?? 1) * 100)}%</span>
            <div style={{ width: 1, height: 24, background: 'rgba(255,255,255,0.06)' }} />

            {selected.type === 'text' ? (
              /* ── Text properties ─── */
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'center' }}>
                {/* Group 1: Text Content */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                  <span style={S.propLabel}>Text Content</span>
                  <textarea
                    style={{
                      ...S.propTextArea,
                      fontFamily: selected.fontFamily || 'Inter',
                      color: selected.fill,
                      background: 'rgba(17, 20, 31, 0.92)',
                      width: 200,
                      minHeight: 38,
                      height: 38,
                      padding: '8px 10px',
                    }}
                    value={selected.text || ''}
                    onChange={e => updateEl(selected.id, { text: e.target.value })}
                  />
                </div>

                <div style={{ width: 1, height: 24, background: 'rgba(255,255,255,0.06)' }} />

                {/* Group 2: Typography */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                  <span style={S.propLabel}>Font & Size</span>
                  <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                    <select style={{ ...S.select, fontFamily: selected.fontFamily || 'Inter', height: 28, padding: '2px 8px', minWidth: 100 }} value={selected.fontFamily || 'Inter'}
                      onChange={e => updateEl(selected.id, { fontFamily: e.target.value })}>
                      {FONTS.map(f => <option key={f} value={f} style={{ fontFamily: f, color: '#111', background: '#fff' }}>{f}</option>)}
                    </select>
                    
                    <input type="number" min={8} max={120} style={{ ...S.propInput, width: 48, height: 28, padding: '2px 6px' }}
                      value={selected.fontSize || 20}
                      onChange={e => updateEl(selected.id, { fontSize: parseInt(e.target.value) || 20 })} />
                      
                    <div style={{ position: 'relative', display: 'inline-block' }}>
                      <div style={{ ...S.colorSwatch(selected.fill), width: 24, height: 24 }} onClick={() => setColorTarget(colorTarget === 'text' ? null : 'text')} />
                      {colorTarget === 'text' && (
                        <ColorPicker value={selected.fill} onClose={() => setColorTarget(null)}
                          onChange={c => updateEl(selected.id, { fill: c })} />
                      )}
                    </div>
                  </div>
                </div>

                <div style={{ width: 1, height: 24, background: 'rgba(255,255,255,0.06)' }} />

                {/* Group 3: Text Formatting */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                  <span style={S.propLabel}>Style & Align</span>
                  <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
                    <button style={S.toggleBtn(selected.fontWeight === 'bold')}
                      onClick={() => updateEl(selected.id, { fontWeight: selected.fontWeight === 'bold' ? 'normal' : 'bold' })}>
                      <Bold size={13} />
                    </button>
                    <button style={S.toggleBtn(selected.fontStyle === 'italic')}
                      onClick={() => updateEl(selected.id, { fontStyle: selected.fontStyle === 'italic' ? 'normal' : 'italic' })}>
                      <Italic size={13} />
                    </button>
                    <button style={S.toggleBtn(selected.textDecoration === 'underline')}
                      onClick={() => updateEl(selected.id, { textDecoration: selected.textDecoration === 'underline' ? 'none' : 'underline' })}>
                      <Underline size={13} />
                    </button>

                    <div style={{ width: 1, height: 16, background: 'rgba(255,255,255,0.06)', margin: '0 2px' }} />

                    <button style={S.toggleBtn((selected.textAlign || 'left') === 'left')}
                      title="Align Left"
                      onClick={() => updateEl(selected.id, { textAlign: 'left' })}>
                      <AlignLeft size={13} />
                    </button>
                    <button style={S.toggleBtn(selected.textAlign === 'center')}
                      title="Align Center"
                      onClick={() => updateEl(selected.id, { textAlign: 'center' })}>
                      <AlignCenter size={13} />
                    </button>
                    <button style={S.toggleBtn(selected.textAlign === 'right')}
                      title="Align Right"
                      onClick={() => updateEl(selected.id, { textAlign: 'right' })}>
                      <AlignRight size={13} />
                    </button>
                    
                    <div style={{ width: 1, height: 16, background: 'rgba(255,255,255,0.06)', margin: '0 2px' }} />

                    <button style={{ ...S.toggleBtn((selected.verticalAlign || 'top') === 'top'), width: 'auto', padding: '0 6px', fontSize: 10, height: 28 }}
                      title="Align Top"
                      onClick={() => updateEl(selected.id, { verticalAlign: 'top' })}>
                      Top
                    </button>
                    <button style={{ ...S.toggleBtn(selected.verticalAlign === 'middle'), width: 'auto', padding: '0 6px', fontSize: 10, height: 28 }}
                      title="Align Middle"
                      onClick={() => updateEl(selected.id, { verticalAlign: 'middle' })}>
                      Middle
                    </button>
                    <button style={{ ...S.toggleBtn(selected.verticalAlign === 'bottom'), width: 'auto', padding: '0 6px', fontSize: 10, height: 28 }}
                      title="Align Bottom"
                      onClick={() => updateEl(selected.id, { verticalAlign: 'bottom' })}>
                      Bottom
                    </button>
                  </div>
                </div>

                <div style={{ width: 1, height: 24, background: 'rgba(255,255,255,0.06)' }} />

                {/* Group 4: Position Adjustments */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                  <span style={S.propLabel}>Position & Size</span>
                  <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
                    <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.4)' }}>X</span>
                    <input type="number" style={{ ...S.propInput, width: 44, height: 28, padding: '2px 4px', fontSize: 11 }} value={Math.round(selected.x)}
                      onChange={e => updateEl(selected.id, { x: parseInt(e.target.value) || 0 })} />
                      
                    <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.4)' }}>Y</span>
                    <input type="number" style={{ ...S.propInput, width: 44, height: 28, padding: '2px 4px', fontSize: 11 }} value={Math.round(selected.y)}
                      onChange={e => updateEl(selected.id, { y: parseInt(e.target.value) || 0 })} />
                      
                    <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.4)' }}>W</span>
                    <input type="number" style={{ ...S.propInput, width: 44, height: 28, padding: '2px 4px', fontSize: 11 }} value={Math.round(selected.width)}
                      onChange={e => updateEl(selected.id, { width: Math.max(1, parseInt(e.target.value) || 1) })} />
                      
                    <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.4)' }}>H</span>
                    <input type="number" style={{ ...S.propInput, width: 44, height: 28, padding: '2px 4px', fontSize: 11 }} value={Math.round(selected.height)}
                      onChange={e => updateEl(selected.id, { height: Math.max(1, parseInt(e.target.value) || 1) })} />
                  </div>
                </div>

              </div>
            ) : (
              /* ── Shape properties ─── */
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'center' }}>
                <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                  <span style={S.propLabel}>Fill</span>
                  <div style={{ position: 'relative', display: 'inline-block' }}>
                    <div style={S.colorSwatch(selected.fill)} onClick={() => setColorTarget(colorTarget === 'fill' ? null : 'fill')} />
                    {colorTarget === 'fill' && (
                      <ColorPicker value={selected.fill} onClose={() => setColorTarget(null)}
                        onChange={c => updateEl(selected.id, { fill: c })} />
                    )}
                  </div>

                  <span style={S.propLabel}>Stroke</span>
                  <div style={{ position: 'relative', display: 'inline-block' }}>
                    <div style={S.colorSwatch(selected.stroke || '#000000')}
                      onClick={() => setColorTarget(colorTarget === 'stroke' ? null : 'stroke')} />
                    {colorTarget === 'stroke' && (
                      <ColorPicker value={selected.stroke || '#000000'} onClose={() => setColorTarget(null)}
                        onChange={c => updateEl(selected.id, { stroke: c })} />
                    )}
                  </div>

                  <span style={S.propLabel}>Width</span>
                  <input type="number" min={0} max={20} style={{ ...S.propInput, width: 44, height: 28, padding: '2px 6px' }}
                    value={selected.strokeWidth}
                    onChange={e => updateEl(selected.id, { strokeWidth: parseInt(e.target.value) || 0 })} />
                </div>

                <div style={{ width: 1, height: 24, background: 'rgba(255,255,255,0.06)' }} />

                {/* Group 2: Position & Sizing for shapes */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                  <span style={S.propLabel}>Position & Size</span>
                  <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
                    <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.4)' }}>X</span>
                    <input type="number" style={{ ...S.propInput, width: 48, height: 28, padding: '2px 4px', fontSize: 11 }} value={Math.round(selected.x)}
                      onChange={e => updateEl(selected.id, { x: parseInt(e.target.value) || 0 })} />
                      
                    <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.4)' }}>Y</span>
                    <input type="number" style={{ ...S.propInput, width: 48, height: 28, padding: '2px 4px', fontSize: 11 }} value={Math.round(selected.y)}
                      onChange={e => updateEl(selected.id, { y: parseInt(e.target.value) || 0 })} />
                      
                    <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.4)' }}>W</span>
                    <input type="number" style={{ ...S.propInput, width: 48, height: 28, padding: '2px 4px', fontSize: 11 }} value={Math.round(selected.width)}
                      onChange={e => updateEl(selected.id, { width: Math.max(1, parseInt(e.target.value) || 1) })} />
                      
                    <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.4)' }}>H</span>
                    <input type="number" style={{ ...S.propInput, width: 48, height: 28, padding: '2px 4px', fontSize: 11 }} value={Math.round(selected.height)}
                      onChange={e => updateEl(selected.id, { height: Math.max(1, parseInt(e.target.value) || 1) })} />
                  </div>
                </div>
              </div>
            )}
          </>
        ) : (
          /* ── No selection: background controls ─── */
          <>
            <span style={S.propLabel}>Canvas Background</span>
            <div style={{ position: 'relative', display: 'inline-block' }}>
              <div style={S.colorSwatch(bgColor)} onClick={() => setColorTarget(colorTarget === 'bg' ? null : 'bg')} />
              {colorTarget === 'bg' && (
                <ColorPicker value={bgColor} onClose={() => setColorTarget(null)}
                  onChange={c => { setBgColor(c); setIsDirty(true); }} />
              )}
            </div>
            <span style={{ ...S.propLabel, marginLeft: 4 }}>{bgColor}</span>
            <div style={{ width: 1, height: 24, background: 'rgba(255,255,255,0.06)' }} />
            <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)' }}>
              {cW} × {cH}px · {elements.length} element{elements.length !== 1 ? 's' : ''}
            </span>
          </>
        )}
      </div>

      {/* ── Embedded styles for scrollbar and hover ────────── */}
      <style>{`
        .ce-wrap { user-select: none; }
        .ce-layers::-webkit-scrollbar, .ce-propsbar::-webkit-scrollbar { height: 4px; width: 4px; }
        .ce-layers::-webkit-scrollbar-thumb, .ce-propsbar::-webkit-scrollbar-thumb {
          background: rgba(255,255,255,0.1); border-radius: 4px;
        }
        .ce-layers > div::-webkit-scrollbar { width: 4px; }
        .ce-layers > div::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 4px; }
        .ce-back-btn:hover { background: rgba(255,255,255,0.06) !important; }
        .ce-color-popup { animation: ce-pop .15s ease-out; }
        @keyframes ce-pop { from { opacity:0; transform:translateY(6px); } to { opacity:1; transform:translateY(0); } }
      `}</style>
    </div>
  );
}

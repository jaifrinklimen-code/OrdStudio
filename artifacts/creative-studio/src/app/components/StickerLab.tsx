import { useState, useEffect, useRef, useCallback } from 'react';
import { secureFetch } from '../../lib/secureFetch';
import {
  Sparkles, Download, Copy, RefreshCw, Eye, Heart, Layers,
  Compass, ShieldCheck, HelpCircle, ArrowUpRight, Search,
  Grid3X3, List, Paintbrush, Type, Square, Circle, Star,
  Trash2, Undo2, Palette, MousePointer2, Plus, Triangle,
  Sliders, ChevronUp, ChevronDown
} from 'lucide-react';
import { FadeIn } from './FadeIn';

/* ── Prompt presets ──────────────────────────────────────────── */
const promptPresets = [
  'Holographic cyberpunk skull icon',
  '3D glossy lavender donut shape',
  'Kawaii cat drinking bubble tea',
  'Retro futuristic arcade cabinet',
  'Golden metallic wings insignia',
  'Pixel art treasure chest',
  'Watercolor rose bouquet',
  'Neon gaming controller',
];

/* ── Style presets (6 total) ─────────────────────────────────── */
const styles = [
  { id: 'Cyberpunk', name: 'Cyberpunk', desc: 'Neon glows & synthwave details', emoji: '👾', gradient: 'linear-gradient(135deg, #ec4899, #8b5cf6)' },
  { id: 'Holo3D',    name: 'Holo 3D',    desc: 'Metallic gloss & glass textures', emoji: '💿', gradient: 'linear-gradient(135deg, #a5b4fc, #818cf8)' },
  { id: 'Vector',    name: 'Flat Vector', desc: 'Clean paths, bold outlines', emoji: '✏️', gradient: 'linear-gradient(135deg, #10b981, #059669)' },
  { id: 'Comic',     name: 'Retro Comic', desc: 'Halftone dot shadings & pop art', emoji: '💥', gradient: 'linear-gradient(135deg, #f59e0b, #d97706)' },
  { id: 'Watercolor', name: 'Watercolor', desc: 'Soft brush strokes & blended edges', emoji: '🎨', gradient: 'linear-gradient(135deg, #f9a8d4, #a78bfa)' },
  { id: 'PixelArt',  name: 'Pixel Art',  desc: '8-bit retro pixel graphics', emoji: '🕹️', gradient: 'linear-gradient(135deg, #4ade80, #22d3ee)' },
];

/* ── Extended default stickers (12) ──────────────────────────── */
const initialStickers = [
  { id: 1,  name: 'Cyberpunk Skull',    style: 'Cyberpunk',   gradient: 'linear-gradient(135deg, #f43f5e 0%, #a855f7 100%)', symbol: '💀' },
  { id: 2,  name: 'Holo Saturn',        style: 'Holo 3D',     gradient: 'linear-gradient(135deg, #38bdf8 0%, #818cf8 100%)', symbol: '🪐' },
  { id: 3,  name: 'Emerald Sparkle',    style: 'Vector',      gradient: 'linear-gradient(135deg, #34d399 0%, #059669 100%)', symbol: '✦' },
  { id: 4,  name: 'Retro Boom',         style: 'Comic',       gradient: 'linear-gradient(135deg, #f59e0b 0%, #e11d48 100%)', symbol: '💥' },
  { id: 5,  name: 'Neon Heart',         style: 'Cyberpunk',   gradient: 'linear-gradient(135deg, #f472b6 0%, #db2777 100%)', symbol: '💖' },
  { id: 6,  name: 'Metallic Sphere',    style: 'Holo 3D',     gradient: 'linear-gradient(135deg, #e2e8f0 0%, #94a3b8 100%)', symbol: '🔮' },
  { id: 7,  name: 'Rose Garden',        style: 'Watercolor',  gradient: 'linear-gradient(135deg, #fda4af 0%, #c084fc 100%)', symbol: '🌹' },
  { id: 8,  name: 'Pixel Sword',        style: 'Pixel Art',   gradient: 'linear-gradient(135deg, #4ade80 0%, #2dd4bf 100%)', symbol: '⚔️' },
  { id: 9,  name: 'Neon Lightning',     style: 'Cyberpunk',   gradient: 'linear-gradient(135deg, #facc15 0%, #f97316 100%)', symbol: '⚡' },
  { id: 10, name: 'Ocean Wave',         style: 'Watercolor',  gradient: 'linear-gradient(135deg, #67e8f9 0%, #3b82f6 100%)', symbol: '🌊' },
  { id: 11, name: 'Game Coin',          style: 'Pixel Art',   gradient: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)', symbol: '🪙' },
  { id: 12, name: 'Comic Star',         style: 'Comic',       gradient: 'linear-gradient(135deg, #fb923c 0%, #ef4444 100%)', symbol: '⭐' },
];

/* ── Generation progress steps ───────────────────────────────── */
const genSteps = [
  { label: 'Analyzing prompt...', duration: 400 },
  { label: 'Generating base shape...', duration: 500 },
  { label: 'Applying style matrix...', duration: 600 },
  { label: 'Rendering details...', duration: 400 },
  { label: 'Polishing & exporting...', duration: 300 },
];

/* ── Symbols pool for generated stickers ─────────────────────── */
const symbolPool = ['⚡', '🔥', '🌟', '🎯', '🎲', '🧩', '🎭', '🦋', '🌸', '💎', '🚀', '🎪', '🌈', '🍭', '🎸', '🏆'];

/* ── Advanced Mini Canvas Vector Graphics Editor ─────────────────── */
interface MiniElement {
  id: string;
  type: 'text' | 'rect' | 'circle' | 'star' | 'triangle' | 'heart' | 'arrow' | 'draw';
  x: number; y: number;
  width: number; height: number;
  fill: string;
  stroke?: string;
  strokeWidth?: number;
  opacity?: number;
  rotation?: number; // degrees
  text?: string;
  fontSize?: number;
  fontFamily?: string;
  fontWeight?: 'normal' | 'bold';
  fontStyle?: 'normal' | 'italic';
  emoji?: string;
  points?: { x: number; y: number }[]; // freehand points
}

function MiniCanvas({ onSave }: { onSave: (name: string, gradient: string, symbol: string) => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [elements, setElements] = useState<MiniElement[]>([]);
  const [activeTool, setActiveTool] = useState<'select' | 'text' | 'rect' | 'circle' | 'star' | 'triangle' | 'heart' | 'arrow' | 'draw'>('select');
  const [activeTab, setActiveTab] = useState<'tools' | 'properties' | 'layers'>('tools');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [bgColor, setBgColor] = useState('#101018');
  const [fillColor, setFillColor] = useState('#8b5cf6');
  const [strokeColor, setStrokeColor] = useState('#ffffff');
  const [strokeWidth, setStrokeWidth] = useState(0);
  const [brushWidth, setBrushWidth] = useState(4);
  const [elementOpacity, setElementOpacity] = useState(1);
  const [elementRotation, setElementRotation] = useState(0);
  
  const [fontFamily, setFontFamily] = useState('Inter');
  const [fontWeight, setFontWeight] = useState<'normal' | 'bold'>('normal');
  const [fontStyle, setFontStyle] = useState<'normal' | 'italic'>('normal');

  const [stickerName, setStickerName] = useState('My Sticker');
  const [showColorPicker, setShowColorPicker] = useState<'bg' | 'fill' | 'stroke' | null>(null);
  const [dragging, setDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  const colors = [
    '#ef4444', '#f97316', '#f59e0b', '#eab308', '#84cc16',
    '#22c55e', '#10b981', '#14b8a6', '#06b6d4', '#0ea5e9',
    '#3b82f6', '#6366f1', '#8b5cf6', '#a855f7', '#d946ef',
    '#ec4899', '#f43f5e', '#ffffff', '#94a3b8', '#101018',
  ];

  const emojiCategories = [
    { label: 'Smileys', items: ['😀', '😂', '😍', '😎', '🤔', '🥳', '😭', '😡', '😱', '👽', '🤖', '💩'] },
    { label: 'Magic & Vibe', items: ['⚡', '🔥', '🌟', '🎯', '💎', '🚀', '🌈', '🍭', '🔮', '💥', '✨', '🍀'] },
    { label: 'Animals & Food', items: ['🐱', '🐶', '🦄', '🐼', '🦊', '🍕', '🍩', '🥤', '🍦', '🥑', '🌮', '🍿'] },
    { label: 'Vibe & Heart', items: ['❤️', '💖', '💀', '🎉', '👑', '💸', '🎨', '🎸', '🎮', '🪐', '🌊', '🌈'] }
  ];

  // Helper shape drawing functions
  const drawTriangle = (ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, fill: string, stroke?: string, strokeW?: number) => {
    ctx.beginPath();
    ctx.moveTo(x + w / 2, y);
    ctx.lineTo(x, y + h);
    ctx.lineTo(x + w, y + h);
    ctx.closePath();
    ctx.fillStyle = fill;
    ctx.fill();
    if (stroke && strokeW) {
      ctx.strokeStyle = stroke;
      ctx.lineWidth = strokeW;
      ctx.stroke();
    }
  };

  const drawHeart = (ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, fill: string, stroke?: string, strokeW?: number) => {
    ctx.beginPath();
    ctx.moveTo(x + w / 2, y + h * 0.25);
    ctx.bezierCurveTo(x + w * 0.1, y - h * 0.05, x - w * 0.1, y + h * 0.6, x + w / 2, y + h * 0.95);
    ctx.bezierCurveTo(x + w * 1.1, y + h * 0.6, x + w * 0.9, y - h * 0.05, x + w / 2, y + h * 0.25);
    ctx.closePath();
    ctx.fillStyle = fill;
    ctx.fill();
    if (stroke && strokeW) {
      ctx.strokeStyle = stroke;
      ctx.lineWidth = strokeW;
      ctx.stroke();
    }
  };

  const drawArrow = (ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, fill: string, stroke?: string, strokeW?: number) => {
    ctx.beginPath();
    ctx.moveTo(x, y + h * 0.35);
    ctx.lineTo(x + w * 0.65, y + h * 0.35);
    ctx.lineTo(x + w * 0.65, y + h * 0.15);
    ctx.lineTo(x + w, y + h * 0.5);
    ctx.lineTo(x + w * 0.65, y + h * 0.85);
    ctx.lineTo(x + w * 0.65, y + h * 0.65);
    ctx.lineTo(x, y + h * 0.65);
    ctx.closePath();
    ctx.fillStyle = fill;
    ctx.fill();
    if (stroke && strokeW) {
      ctx.strokeStyle = stroke;
      ctx.lineWidth = strokeW;
      ctx.stroke();
    }
  };

  const drawFreehand = (ctx: CanvasRenderingContext2D, points: { x: number; y: number }[], fill: string, stroke?: string, strokeW?: number) => {
    if (points.length < 2) return;
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    for (let i = 1; i < points.length; i++) {
      ctx.lineTo(points[i].x, points[i].y);
    }
    ctx.strokeStyle = stroke || fill;
    ctx.lineWidth = strokeW || 4;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.stroke();
  };

  const drawStar = (ctx: CanvasRenderingContext2D, cx: number, cy: number, spikes: number, outerR: number, innerR: number, fill: string, stroke?: string, strokeW?: number) => {
    let rot = (Math.PI / 2) * 3;
    const step = Math.PI / spikes;
    ctx.beginPath();
    ctx.moveTo(cx, cy - outerR);
    for (let i = 0; i < spikes; i++) {
      ctx.lineTo(cx + Math.cos(rot) * outerR, cy + Math.sin(rot) * outerR);
      rot += step;
      ctx.lineTo(cx + Math.cos(rot) * innerR, cy + Math.sin(rot) * innerR);
      rot += step;
    }
    ctx.lineTo(cx, cy - outerR);
    ctx.closePath();
    ctx.fillStyle = fill;
    ctx.fill();
    if (stroke && strokeW) {
      ctx.strokeStyle = stroke;
      ctx.lineWidth = strokeW;
      ctx.stroke();
    }
  };

  const render = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Background fill
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, 300, 300);

    // Checkerboard texture background
    ctx.globalAlpha = 0.03;
    for (let i = 0; i < 300; i += 15) {
      for (let j = 0; j < 300; j += 15) {
        if ((i + j) % 30 === 0) {
          ctx.fillStyle = '#fff';
          ctx.fillRect(i, j, 15, 15);
        }
      }
    }
    ctx.globalAlpha = 1;

    // Draw elements
    elements.forEach(el => {
      ctx.save();
      ctx.globalAlpha = el.opacity !== undefined ? el.opacity : 1.0;

      // Transform rotation
      const cx = el.x + el.width / 2;
      const cy = el.y + el.height / 2;
      ctx.translate(cx, cy);
      if (el.rotation) {
        ctx.rotate((el.rotation * Math.PI) / 180);
      }
      ctx.translate(-cx, -cy);

      if (el.type === 'rect') {
        ctx.fillStyle = el.fill;
        ctx.fillRect(el.x, el.y, el.width, el.height);
        if (el.stroke && el.strokeWidth) {
          ctx.strokeStyle = el.stroke;
          ctx.lineWidth = el.strokeWidth;
          ctx.strokeRect(el.x, el.y, el.width, el.height);
        }
      } else if (el.type === 'circle') {
        ctx.beginPath();
        ctx.arc(el.x + el.width / 2, el.y + el.height / 2, Math.min(el.width, el.height) / 2, 0, Math.PI * 2);
        ctx.fillStyle = el.fill;
        ctx.fill();
        if (el.stroke && el.strokeWidth) {
          ctx.strokeStyle = el.stroke;
          ctx.lineWidth = el.strokeWidth;
          ctx.stroke();
        }
      } else if (el.type === 'star') {
        drawStar(ctx, el.x + el.width / 2, el.y + el.height / 2, 5, el.width / 2, el.width / 4, el.fill, el.stroke, el.strokeWidth);
      } else if (el.type === 'triangle') {
        drawTriangle(ctx, el.x, el.y, el.width, el.height, el.fill, el.stroke, el.strokeWidth);
      } else if (el.type === 'heart') {
        drawHeart(ctx, el.x, el.y, el.width, el.height, el.fill, el.stroke, el.strokeWidth);
      } else if (el.type === 'arrow') {
        drawArrow(ctx, el.x, el.y, el.width, el.height, el.fill, el.stroke, el.strokeWidth);
      } else if (el.type === 'draw' && el.points) {
        drawFreehand(ctx, el.points, el.fill, el.stroke, el.strokeWidth);
      } else if (el.type === 'text') {
        const fontName = el.fontFamily || 'Inter';
        const weight = el.fontWeight || 'normal';
        const style = el.fontStyle || 'normal';
        ctx.font = `${style} ${weight} ${el.fontSize || 24}px ${fontName}, sans-serif`;
        ctx.fillStyle = el.fill;
        ctx.fillText(el.text || el.emoji || '', el.x, el.y + (el.fontSize || 24));
        if (el.stroke && el.strokeWidth) {
          ctx.strokeStyle = el.stroke;
          ctx.lineWidth = el.strokeWidth;
          ctx.strokeText(el.text || el.emoji || '', el.x, el.y + (el.fontSize || 24));
        }
      }

      // Selection indicator outline
      if (selectedId === el.id) {
        ctx.strokeStyle = '#a78bfa';
        ctx.lineWidth = 1.5;
        ctx.setLineDash([3, 3]);
        ctx.strokeRect(el.x - 3, el.y - 3, el.width + 6, el.height + 6);
        ctx.setLineDash([]);
      }

      ctx.restore();
    });
  }, [elements, bgColor, selectedId]);

  useEffect(() => {
    render();
  }, [render]);

  const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (activeTool === 'draw') return;
    const rect = canvasRef.current!.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = `el_${Date.now()}`;

    const common = {
      id,
      fill: fillColor,
      stroke: strokeColor,
      strokeWidth: strokeWidth,
      opacity: elementOpacity,
      rotation: elementRotation
    };

    if (activeTool === 'rect') {
      setElements(prev => [...prev, { ...common, type: 'rect', x: x - 30, y: y - 30, width: 60, height: 60 }]);
      setSelectedId(id);
      setActiveTool('select');
      setActiveTab('properties');
    } else if (activeTool === 'circle') {
      setElements(prev => [...prev, { ...common, type: 'circle', x: x - 30, y: y - 30, width: 60, height: 60 }]);
      setSelectedId(id);
      setActiveTool('select');
      setActiveTab('properties');
    } else if (activeTool === 'star') {
      setElements(prev => [...prev, { ...common, type: 'star', x: x - 30, y: y - 30, width: 60, height: 60 }]);
      setSelectedId(id);
      setActiveTool('select');
      setActiveTab('properties');
    } else if (activeTool === 'triangle') {
      setElements(prev => [...prev, { ...common, type: 'triangle', x: x - 30, y: y - 30, width: 60, height: 60 }]);
      setSelectedId(id);
      setActiveTool('select');
      setActiveTab('properties');
    } else if (activeTool === 'heart') {
      setElements(prev => [...prev, { ...common, type: 'heart', x: x - 30, y: y - 30, width: 60, height: 60 }]);
      setSelectedId(id);
      setActiveTool('select');
      setActiveTab('properties');
    } else if (activeTool === 'arrow') {
      setElements(prev => [...prev, { ...common, type: 'arrow', x: x - 35, y: y - 15, width: 70, height: 30 }]);
      setSelectedId(id);
      setActiveTool('select');
      setActiveTab('properties');
    } else if (activeTool === 'text') {
      const textVal = prompt('Enter custom text:') || 'Text';
      setElements(prev => [...prev, {
        ...common,
        type: 'text',
        x: x - 30, y: y - 15,
        width: textVal.length * 13, height: 30,
        text: textVal,
        fontSize: 22,
        fontFamily,
        fontWeight,
        fontStyle
      }]);
      setSelectedId(id);
      setActiveTool('select');
      setActiveTab('properties');
    } else if (activeTool === 'select') {
      const hit = [...elements].reverse().find(el => x >= el.x && x <= el.x + el.width && y >= el.y && y <= el.y + el.height);
      setSelectedId(hit ? hit.id : null);
      if (hit) {
        setActiveTab('properties');
      }
    }
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const rect = canvasRef.current!.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;

    if (activeTool === 'draw') {
      const id = `el_${Date.now()}`;
      setElements(prev => [...prev, {
        id,
        type: 'draw',
        x: mx, y: my,
        width: 1, height: 1,
        fill: fillColor,
        stroke: fillColor,
        strokeWidth: brushWidth,
        opacity: elementOpacity,
        rotation: 0,
        points: [{ x: mx, y: my }]
      }]);
      setSelectedId(id);
      setDragging(true);
      return;
    }

    if (activeTool !== 'select' || !selectedId) return;
    const el = elements.find(el => el.id === selectedId);
    if (el && mx >= el.x && mx <= el.x + el.width && my >= el.y && my <= el.y + el.height) {
      setDragging(true);
      setDragOffset({ x: mx - el.x, y: my - el.y });
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!dragging || !selectedId) return;
    const rect = canvasRef.current!.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;

    if (activeTool === 'draw') {
      setElements(prev => prev.map(el => {
        if (el.id === selectedId && el.type === 'draw' && el.points) {
          const points = [...el.points, { x: mx, y: my }];
          const xs = points.map(p => p.x);
          const ys = points.map(p => p.y);
          const minX = Math.min(...xs);
          const maxX = Math.max(...xs);
          const minY = Math.min(...ys);
          const maxY = Math.max(...ys);
          return {
            ...el,
            points,
            x: minX,
            y: minY,
            width: Math.max(1, maxX - minX),
            height: Math.max(1, maxY - minY)
          };
        }
        return el;
      }));
      return;
    }

    setElements(prev => prev.map(el => el.id === selectedId ? { ...el, x: mx - dragOffset.x, y: my - dragOffset.y } : el));
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLCanvasElement>) => {
    const rect = canvasRef.current!.getBoundingClientRect();
    const touch = e.touches[0];
    const mx = touch.clientX - rect.left;
    const my = touch.clientY - rect.top;

    if (activeTool === 'draw') {
      const id = `el_${Date.now()}`;
      setElements(prev => [...prev, {
        id,
        type: 'draw',
        x: mx, y: my,
        width: 1, height: 1,
        fill: fillColor,
        stroke: fillColor,
        strokeWidth: brushWidth,
        opacity: elementOpacity,
        rotation: 0,
        points: [{ x: mx, y: my }]
      }]);
      setSelectedId(id);
      setDragging(true);
      return;
    }

    if (activeTool !== 'select' || !selectedId) return;
    const el = elements.find(el => el.id === selectedId);
    if (el && mx >= el.x && mx <= el.x + el.width && my >= el.y && my <= el.y + el.height) {
      setDragging(true);
      setDragOffset({ x: mx - el.x, y: my - el.y });
    }
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLCanvasElement>) => {
    if (!dragging || !selectedId) return;
    const rect = canvasRef.current!.getBoundingClientRect();
    const touch = e.touches[0];
    const mx = touch.clientX - rect.left;
    const my = touch.clientY - rect.top;

    if (activeTool === 'draw') {
      setElements(prev => prev.map(el => {
        if (el.id === selectedId && el.type === 'draw' && el.points) {
          const points = [...el.points, { x: mx, y: my }];
          const xs = points.map(p => p.x);
          const ys = points.map(p => p.y);
          const minX = Math.min(...xs);
          const maxX = Math.max(...xs);
          const minY = Math.min(...ys);
          const maxY = Math.max(...ys);
          return {
            ...el,
            points,
            x: minX,
            y: minY,
            width: Math.max(1, maxX - minX),
            height: Math.max(1, maxY - minY)
          };
        }
        return el;
      }));
      return;
    }

    setElements(prev => prev.map(el => el.id === selectedId ? { ...el, x: mx - dragOffset.x, y: my - dragOffset.y } : el));
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  const deleteSelected = () => {
    if (!selectedId) return;
    setElements(prev => prev.filter(el => el.id !== selectedId));
    setSelectedId(null);
  };

  const updateSelectedElement = (updates: Partial<MiniElement>) => {
    if (!selectedId) return;
    setElements(prev => prev.map(el => el.id === selectedId ? { ...el, ...updates } : el));
  };

  const moveLayer = (index: number, direction: 'up' | 'down') => {
    const nextIndex = direction === 'up' ? index + 1 : index - 1;
    if (nextIndex < 0 || nextIndex >= elements.length) return;
    const newElements = [...elements];
    const temp = newElements[index];
    newElements[index] = newElements[nextIndex];
    newElements[nextIndex] = temp;
    setElements(newElements);
  };

  const handleSave = () => {
    const emojiElement = [...elements].reverse().find(el => el.type === 'text' && el.emoji);
    const textElement = [...elements].reverse().find(el => el.type === 'text' && el.text);

    let symbol = '🎨';
    if (emojiElement && emojiElement.emoji) {
      symbol = emojiElement.emoji;
    } else if (textElement && textElement.text) {
      symbol = textElement.text.trim().substring(0, 2);
    } else {
      const star = elements.find(el => el.type === 'star');
      const circle = elements.find(el => el.type === 'circle');
      const rect = elements.find(el => el.type === 'rect');
      if (star) symbol = '⭐';
      else if (circle) symbol = '⚪';
      else if (rect) symbol = '⬜';
      else symbol = symbolPool[Math.floor(Math.random() * symbolPool.length)];
    }

    onSave(stickerName, `linear-gradient(135deg, ${bgColor}, ${fillColor})`, symbol);
  };

  const activeElement = elements.find(el => el.id === selectedId);

  return (
    <div className="flex flex-col gap-4">
      {/* Upper Tab Control */}
      <div className="flex bg-white/[0.03] border border-white/[0.06] rounded-xl p-1 gap-1">
        <button
          type="button"
          onClick={() => setActiveTab('tools')}
          className={`flex-1 py-1.5 rounded-lg text-[10px] font-semibold transition-all ${
            activeTab === 'tools'
              ? 'bg-purple-500/15 border-purple-500/30 text-purple-300 shadow-md'
              : 'text-white/40 hover:text-white/70'
          }`}
        >
          Tools
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('properties')}
          className={`flex-1 py-1.5 rounded-lg text-[10px] font-semibold transition-all ${
            activeTab === 'properties'
              ? 'bg-purple-500/15 border-purple-500/30 text-purple-300 shadow-md'
              : 'text-white/40 hover:text-white/70'
          }`}
        >
          Properties
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('layers')}
          className={`flex-1 py-1.5 rounded-lg text-[10px] font-semibold transition-all ${
            activeTab === 'layers'
              ? 'bg-purple-500/15 border-purple-500/30 text-purple-300 shadow-md'
              : 'text-white/40 hover:text-white/70'
          }`}
        >
          Layers ({elements.length})
        </button>
      </div>

      {/* Tab: Tools */}
      {activeTab === 'tools' && (
        <div className="flex flex-col gap-3">
          <div className="grid grid-cols-5 gap-1.5">
            <button
              type="button"
              onClick={() => setActiveTool('select')}
              className={`p-2 rounded-lg border transition-all flex flex-col items-center justify-center gap-1 text-[9px] font-medium ${
                activeTool === 'select'
                  ? 'bg-purple-500/15 border-purple-500/40 text-purple-300'
                  : 'bg-white/[0.03] border-white/[0.06] text-white/40 hover:text-white/70 hover:bg-white/[0.06]'
              }`}
              title="Select / Move"
            >
              <MousePointer2 size={13} />
              <span>Select</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTool('draw')}
              className={`p-2 rounded-lg border transition-all flex flex-col items-center justify-center gap-1 text-[9px] font-medium ${
                activeTool === 'draw'
                  ? 'bg-purple-500/15 border-purple-500/40 text-purple-300'
                  : 'bg-white/[0.03] border-white/[0.06] text-white/40 hover:text-white/70 hover:bg-white/[0.06]'
              }`}
              title="Pencil Brush"
            >
              <Paintbrush size={13} />
              <span>Draw</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTool('text')}
              className={`p-2 rounded-lg border transition-all flex flex-col items-center justify-center gap-1 text-[9px] font-medium ${
                activeTool === 'text'
                  ? 'bg-purple-500/15 border-purple-500/40 text-purple-300'
                  : 'bg-white/[0.03] border-white/[0.06] text-white/40 hover:text-white/70 hover:bg-white/[0.06]'
              }`}
              title="Add Text"
            >
              <Type size={13} />
              <span>Text</span>
            </button>

            {/* Emoji popover */}
            <div className="relative col-span-2">
              <button
                type="button"
                onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                className={`w-full h-full p-2 rounded-lg border transition-all flex flex-col items-center justify-center gap-1 text-[9px] font-medium ${
                  showEmojiPicker
                    ? 'bg-purple-500/15 border-purple-500/40 text-purple-300'
                    : 'bg-white/[0.03] border-white/[0.06] text-white/40 hover:text-white/70 hover:bg-white/[0.06]'
                }`}
              >
                <Sparkles size={13} />
                <span>Add Emoji</span>
              </button>
              {showEmojiPicker && (
                <div className="absolute top-11 right-0 z-50 bg-[#12121a] border border-white/10 rounded-xl p-3 w-[250px] shadow-2xl flex flex-col gap-2">
                  <span className="text-[9px] font-bold text-white/50 tracking-wider uppercase block">Select Emoji</span>
                  <div className="flex flex-col gap-2 max-h-[160px] overflow-y-auto pr-1">
                    {emojiCategories.map(cat => (
                      <div key={cat.label} className="flex flex-col gap-1">
                        <span className="text-[8px] text-white/30 font-semibold">{cat.label}</span>
                        <div className="grid grid-cols-6 gap-1">
                          {cat.items.map(emoji => (
                            <button
                              key={emoji}
                              type="button"
                              onClick={() => {
                                const id = `el_${Date.now()}`;
                                setElements(prev => [...prev, { id, type: 'text', x: 120, y: 120, width: 45, height: 45, fill: '#ffffff', emoji, fontSize: 32 }]);
                                setSelectedId(id);
                                setShowEmojiPicker(false);
                                setActiveTool('select');
                                setActiveTab('properties');
                              }}
                              className="w-7 h-7 flex items-center justify-center text-lg hover:bg-white/[0.08] rounded-lg transition-colors cursor-pointer"
                            >
                              {emoji}
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Shapes Palette */}
          <div className="flex flex-col gap-1">
            <span className="text-[9px] text-white/40 uppercase tracking-widest font-mono">Shapes</span>
            <div className="grid grid-cols-6 gap-1.5">
              {[
                { id: 'rect' as const, icon: Square, label: 'Square' },
                { id: 'circle' as const, icon: Circle, label: 'Circle' },
                { id: 'star' as const, icon: Star, label: 'Star' },
                { id: 'triangle' as const, icon: Triangle, label: 'Triangle' },
                { id: 'heart' as const, icon: Heart, label: 'Heart' },
                { id: 'arrow' as const, icon: ArrowUpRight, label: 'Arrow' },
              ].map(shape => (
                <button
                  key={shape.id}
                  type="button"
                  onClick={() => setActiveTool(shape.id)}
                  className={`p-2 rounded-lg border transition-all flex flex-col items-center justify-center gap-1 ${
                    activeTool === shape.id
                      ? 'bg-purple-500/15 border-purple-500/40 text-purple-300'
                      : 'bg-white/[0.02] border-white/[0.05] text-white/45 hover:text-white/80 hover:bg-white/[0.05]'
                  }`}
                  title={shape.label}
                >
                  <shape.icon size={13} />
                </button>
              ))}
            </div>
          </div>

          {/* Brush width for Freehand tool */}
          {activeTool === 'draw' && (
            <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-2.5 space-y-2">
              <div className="flex justify-between items-center text-[10px]">
                <span className="text-white/60">Brush Thickness</span>
                <span className="text-[#a78bfa] font-mono">{brushWidth}px</span>
              </div>
              <input
                type="range"
                min="1"
                max="20"
                value={brushWidth}
                onChange={e => setBrushWidth(parseInt(e.target.value))}
                className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-purple-500"
              />
            </div>
          )}
        </div>
      )}

      {/* Tab: Properties Inspector */}
      {activeTab === 'properties' && (
        <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-3 flex flex-col gap-3.5">
          {!activeElement ? (
            <div className="text-center py-6 text-[10px] text-white/30 font-mono">
              Select an element on canvas to customize its properties.
            </div>
          ) : (
            <div className="space-y-3.5 text-[10px]">
              {/* Element Header Badge */}
              <div className="flex justify-between items-center border-b border-white/[0.06] pb-2">
                <span className="text-xs font-bold text-white/80 uppercase font-mono">
                  {activeElement.type} element
                </span>
                <button
                  onClick={deleteSelected}
                  className="p-1 rounded bg-red-500/10 border border-red-500/25 text-red-400 hover:bg-red-500/20 transition-all flex items-center gap-1"
                >
                  <Trash2 size={11} /> Delete
                </button>
              </div>

              {/* Text specific inspector */}
              {activeElement.type === 'text' && activeElement.text !== undefined && (
                <div className="space-y-2.5 border-b border-white/[0.06] pb-3">
                  <div>
                    <label className="block text-white/50 mb-1">Text Value</label>
                    <input
                      value={activeElement.text}
                      onChange={e => updateSelectedElement({ text: e.target.value, width: e.target.value.length * 13 })}
                      className="w-full bg-white/[0.04] border border-white/10 rounded-lg px-2.5 py-1 text-xs text-white outline-none focus:border-purple-500/50"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-white/50 mb-1">Font Family</label>
                      <select
                        value={activeElement.fontFamily || 'Inter'}
                        onChange={e => {
                          setFontFamily(e.target.value);
                          updateSelectedElement({ fontFamily: e.target.value });
                        }}
                        className="w-full bg-[#101018] border border-white/10 rounded-lg px-2 py-1 text-[10px] text-white outline-none"
                      >
                        <option value="Inter">Inter</option>
                        <option value="Syne">Syne</option>
                        <option value="Courier New">Monospace</option>
                        <option value="Georgia">Serif</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-white/50 mb-1">Text Styling</label>
                      <div className="flex gap-1">
                        <button
                          onClick={() => {
                            const val = activeElement.fontWeight === 'bold' ? 'normal' : 'bold';
                            setFontWeight(val);
                            updateSelectedElement({ fontWeight: val });
                          }}
                          className={`flex-1 py-1 rounded border text-[9px] font-bold ${
                            activeElement.fontWeight === 'bold' ? 'bg-purple-500/20 border-purple-500/40 text-purple-300' : 'bg-white/[0.03] border-white/10 text-white/50'
                          }`}
                        >
                          B
                        </button>
                        <button
                          onClick={() => {
                            const val = activeElement.fontStyle === 'italic' ? 'normal' : 'italic';
                            setFontStyle(val);
                            updateSelectedElement({ fontStyle: val });
                          }}
                          className={`flex-1 py-1 rounded border text-[9px] italic ${
                            activeElement.fontStyle === 'italic' ? 'bg-purple-500/20 border-purple-500/40 text-purple-300' : 'bg-white/[0.03] border-white/10 text-white/50'
                          }`}
                        >
                          I
                        </button>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-white/50">Font Size</span>
                      <span className="text-[#a78bfa] font-mono">{activeElement.fontSize || 24}px</span>
                    </div>
                    <input
                      type="range"
                      min="8"
                      max="72"
                      value={activeElement.fontSize || 24}
                      onChange={e => {
                        const sz = parseInt(e.target.value);
                        updateSelectedElement({ fontSize: sz, height: sz + 6 });
                      }}
                      className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-purple-500"
                    />
                  </div>
                </div>
              )}

              {/* Geometry Properties: Width & Height */}
              {activeElement.type !== 'text' && (
                <div className="grid grid-cols-2 gap-3.5">
                  <div className="space-y-1">
                    <div className="flex justify-between items-center">
                      <span className="text-white/50">Width</span>
                      <span className="text-[#a78bfa] font-mono">{activeElement.width}px</span>
                    </div>
                    <input
                      type="range"
                      min="10"
                      max="300"
                      value={activeElement.width}
                      onChange={e => updateSelectedElement({ width: parseInt(e.target.value) })}
                      className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-purple-500"
                    />
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between items-center">
                      <span className="text-white/50">Height</span>
                      <span className="text-[#a78bfa] font-mono">{activeElement.height}px</span>
                    </div>
                    <input
                      type="range"
                      min="10"
                      max="300"
                      value={activeElement.height}
                      onChange={e => updateSelectedElement({ height: parseInt(e.target.value) })}
                      className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-purple-500"
                    />
                  </div>
                </div>
              )}

              {/* Transfrom attributes: Opacity & Rotation */}
              <div className="space-y-3">
                <div className="space-y-1">
                  <div className="flex justify-between items-center">
                    <span className="text-white/50">Opacity / Transparency</span>
                    <span className="text-[#a78bfa] font-mono">
                      {Math.round((activeElement.opacity !== undefined ? activeElement.opacity : 1) * 100)}%
                    </span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={Math.round((activeElement.opacity !== undefined ? activeElement.opacity : 1) * 100)}
                    onChange={e => {
                      const op = parseFloat(e.target.value) / 100;
                      setElementOpacity(op);
                      updateSelectedElement({ opacity: op });
                    }}
                    className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-purple-500"
                  />
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between items-center">
                    <span className="text-white/50">Rotation Angle</span>
                    <span className="text-[#a78bfa] font-mono">{activeElement.rotation || 0}°</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="360"
                    value={activeElement.rotation || 0}
                    onChange={e => {
                      const rot = parseInt(e.target.value);
                      setElementRotation(rot);
                      updateSelectedElement({ rotation: rot });
                    }}
                    className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-purple-500"
                  />
                </div>
              </div>

              {/* Color Fills & Borders */}
              <div className="grid grid-cols-2 gap-3 pb-1 border-t border-white/[0.04] pt-3">
                <div className="flex items-center gap-2 relative">
                  <span className="text-white/50 font-mono">Fill</span>
                  <button
                    onClick={() => setShowColorPicker(showColorPicker === 'fill' ? null : 'fill')}
                    className="w-5 h-5 rounded border border-white/20 cursor-pointer shadow-md"
                    style={{ background: activeElement.fill }}
                  />
                  {showColorPicker === 'fill' && (
                    <div className="absolute bottom-6 left-0 z-50 bg-[#161622] border border-white/10 rounded-lg p-1.5 grid grid-cols-5 gap-1 shadow-2xl">
                      {colors.map(c => (
                        <button
                          key={c}
                          onClick={() => {
                            setFillColor(c);
                            updateSelectedElement({ fill: c });
                            setShowColorPicker(null);
                          }}
                          className="w-5 h-5 rounded border border-white/15 hover:scale-110 transition-transform"
                          style={{ background: c }}
                        />
                      ))}
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-2 relative">
                  <span className="text-white/50 font-mono">Border</span>
                  <button
                    onClick={() => setShowColorPicker(showColorPicker === 'stroke' ? null : 'stroke')}
                    className="w-5 h-5 rounded border border-white/20 cursor-pointer shadow-md"
                    style={{ background: activeElement.stroke || 'transparent' }}
                  />
                  {showColorPicker === 'stroke' && (
                    <div className="absolute bottom-6 left-0 z-50 bg-[#161622] border border-white/10 rounded-lg p-1.5 grid grid-cols-5 gap-1 shadow-2xl">
                      {colors.map(c => (
                        <button
                          key={c}
                          onClick={() => {
                            setStrokeColor(c);
                            updateSelectedElement({ stroke: c });
                            setShowColorPicker(null);
                          }}
                          className="w-5 h-5 rounded border border-white/15 hover:scale-110 transition-transform"
                          style={{ background: c }}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Stroke Border thickness */}
              <div className="space-y-1 border-t border-white/[0.04] pt-3">
                <div className="flex justify-between items-center">
                  <span className="text-white/50">Border Thickness</span>
                  <span className="text-[#a78bfa] font-mono">{activeElement.strokeWidth || 0}px</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="12"
                  value={activeElement.strokeWidth || 0}
                  onChange={e => {
                    const sw = parseInt(e.target.value);
                    setStrokeWidth(sw);
                    updateSelectedElement({ strokeWidth: sw, stroke: activeElement.stroke || strokeColor });
                  }}
                  className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-purple-500"
                />
              </div>
            </div>
          )}
        </div>
      )}

      {/* Tab: Layers list manager */}
      {activeTab === 'layers' && (
        <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-2.5 flex flex-col gap-2 max-h-[220px] overflow-y-auto">
          {elements.length === 0 ? (
            <div className="text-center py-6 text-[10px] text-white/30 font-mono">
              No vector layers active.
            </div>
          ) : (
            [...elements].reverse().map((el, indexInReversed) => {
              const actualIndex = elements.length - 1 - indexInReversed;
              const isSelected = selectedId === el.id;

              return (
                <div
                  key={el.id}
                  onClick={() => setSelectedId(el.id)}
                  className={`flex items-center justify-between px-2.5 py-1.5 rounded-lg border transition-all cursor-pointer text-[10px] ${
                    isSelected
                      ? 'bg-purple-500/10 border-purple-500/35 text-purple-200'
                      : 'bg-white/[0.02] border-white/[0.05] text-white/60 hover:bg-white/[0.04]'
                  }`}
                >
                  <div className="flex items-center gap-2 truncate">
                    <span className="font-mono text-white/30 text-[9px]">#{actualIndex + 1}</span>
                    <span className="capitalize font-medium truncate">
                      {el.type === 'text' ? (el.emoji ? `Emoji ${el.emoji}` : `Text "${el.text}"`) : el.type}
                    </span>
                  </div>

                  <div className="flex items-center gap-1" onClick={e => e.stopPropagation()}>
                    <button
                      onClick={() => moveLayer(actualIndex, 'up')}
                      disabled={actualIndex === elements.length - 1}
                      className="p-1 rounded bg-white/[0.04] text-white/40 hover:text-white/80 disabled:opacity-20 disabled:cursor-not-allowed"
                      title="Move Up"
                    >
                      <ChevronUp size={11} />
                    </button>
                    <button
                      onClick={() => moveLayer(actualIndex, 'down')}
                      disabled={actualIndex === 0}
                      className="p-1 rounded bg-white/[0.04] text-white/40 hover:text-white/80 disabled:opacity-20 disabled:cursor-not-allowed"
                      title="Move Down"
                    >
                      <ChevronDown size={11} />
                    </button>
                    <button
                      onClick={() => {
                        setElements(prev => prev.filter(item => item.id !== el.id));
                        if (selectedId === el.id) setSelectedId(null);
                      }}
                      className="p-1 rounded bg-red-500/10 text-red-400 hover:bg-red-500/20"
                      title="Delete Layer"
                    >
                      <Trash2 size={11} />
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>
      )}

      {/* Color controls for canvas and general presets */}
      <div className="flex items-center gap-3 border-t border-white/[0.04] pt-3 flex-wrap">
        <div className="flex items-center gap-2 relative">
          <span className="text-[10px] text-white/40">Canvas BG</span>
          <button
            onClick={() => setShowColorPicker(showColorPicker === 'bg' ? null : 'bg')}
            className="w-5 h-5 rounded border border-white/20 cursor-pointer shadow"
            style={{ background: bgColor }}
          />
          {showColorPicker === 'bg' && (
            <div className="absolute bottom-6 left-0 z-50 bg-[#161622] border border-white/10 rounded-lg p-1.5 grid grid-cols-5 gap-1 shadow-2xl">
              {colors.map(c => (
                <button
                  key={c}
                  onClick={() => {
                    setBgColor(c);
                    setShowColorPicker(null);
                  }}
                  className="w-5 h-5 rounded border border-white/15 hover:scale-110 transition-transform"
                  style={{ background: c }}
                />
              ))}
            </div>
          )}
        </div>
        <button
          onClick={() => {
            setElements([]);
            setSelectedId(null);
          }}
          className="ml-auto text-[10px] text-white/30 hover:text-white/60 flex items-center gap-1 transition-colors"
        >
          <Undo2 size={12} /> Clear All
        </button>
      </div>

      {/* Canvas Box */}
      <div className="flex justify-center my-1 relative">
        <canvas
          ref={canvasRef}
          width={300}
          height={300}
          className="rounded-2xl border border-white/10 cursor-crosshair bg-[#0d0d12]"
          style={{ boxShadow: '0 12px 40px rgba(0,0,0,0.5)' }}
          onClick={handleCanvasClick}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleMouseUp}
        />
      </div>

      {/* Name Input & Save Button */}
      <div className="flex items-center gap-2 border-t border-white/[0.04] pt-3">
        <input
          value={stickerName}
          onChange={e => setStickerName(e.target.value)}
          placeholder="Sticker name..."
          className="input-field text-xs flex-1 py-2 outline-none"
        />
        <button
          onClick={handleSave}
          disabled={elements.length === 0}
          className={`px-4 py-2 rounded-xl font-semibold text-xs flex items-center gap-1.5 transition-all ${
            elements.length > 0
              ? 'bg-gradient-to-r from-pink-600 to-purple-600 text-white hover:from-pink-500 hover:to-purple-500 cursor-pointer shadow-lg shadow-pink-500/10'
              : 'bg-white/[0.05] text-white/30 cursor-not-allowed'
          }`}
        >
          <Download size={13} /> Save Sticker
        </button>
      </div>
    </div>
  );
}

/* ── Main StickerLab Component ───────────────────────────────── */
export function StickerLab() {
  const [activeTab, setActiveTab] = useState<'generate' | 'create'>('generate');
  const [prompt, setPrompt] = useState('');
  const [selectedStyle, setSelectedStyle] = useState('Cyberpunk');
  const [dimensions, setDimensions] = useState('1:1');
  const [format, setFormat] = useState('PNG');
  const [generating, setGenerating] = useState(false);
  const [genProgress, setGenProgress] = useState(0);
  const [genStep, setGenStep] = useState('');
  const [stickers, setStickers] = useState<any[]>(() => {
    try {
      const saved = localStorage.getItem("stickers");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch (e) {
      console.error("Failed to parse saved stickers");
    }
    return initialStickers;
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStyle, setFilterStyle] = useState('All');
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  const [favorites, setFavorites] = useState<Set<number>>(new Set());
  const [brokenImages, setBrokenImages] = useState<Set<number>>(new Set());
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [apiKeyError, setApiKeyError] = useState<string | null>(null);

  // Fetch existing stickers from backend
  useEffect(() => {
    secureFetch('/api/stickers')
      .then(r => r.ok ? r.json() : null)
      .then(data => {
        if (data && Array.isArray(data) && data.length > 0) {
          setStickers(prev => {
            const seen = new Set(data.map((d: any) => d.id || d.name));
            const combined = [...data, ...prev.filter(p => !seen.has(p.id || p.name))];
            try { localStorage.setItem("stickers", JSON.stringify(combined)); } catch {}
            return combined;
          });
        }
      })
      .catch(err => {
        console.warn("Sticker API fetch used offline presets:", err);
      });
  }, []);

  const handleGenerate = () => {
    if (!prompt.trim()) return;
    setGenerating(true);
    setGenProgress(0);
    setGenStep(genSteps[0].label);
    setApiKeyError(null);

    // Animate through generation steps
    let totalDelay = 0;
    genSteps.forEach((step, idx) => {
      totalDelay += step.duration;
      setTimeout(() => {
        setGenProgress(((idx + 1) / genSteps.length) * 100);
        setGenStep(step.label);
      }, totalDelay - step.duration);
    });

    // Complete after all steps
    setTimeout(() => {
      secureFetch('/api/stickers/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: prompt.trim(),
          style: selectedStyle
        })
      })
        .then(async r => {
          if (!r.ok) {
            throw new Error("AI API unavailable, using instant synthesis engine");
          }
          return r.json();
        })
        .then(savedSticker => {
          if (!savedSticker || !savedSticker.name) throw new Error("Empty sticker returned");
          setStickers(prev => {
            const updated = [savedSticker, ...prev];
            try { localStorage.setItem("stickers", JSON.stringify(updated)); } catch {}
            return updated;
          });
          setGenerating(false);
          setGenProgress(0);
          setApiKeyError(null);
        })
        .catch(() => {
          // Instant high-quality client-side generation fallback
          const styleObj = styles.find(s => s.id === selectedStyle);
          const styleGradient = styleObj?.gradient || 'linear-gradient(135deg, #ec4899, #8b5cf6)';
          const randomSymbol = symbolPool[Math.floor(Math.random() * symbolPool.length)];
          const fallbackSticker = {
            id: Date.now(),
            name: prompt.trim().slice(0, 24),
            style: selectedStyle,
            gradient: styleGradient,
            symbol: randomSymbol,
            imageUrl: `https://image.pollinations.ai/prompt/${encodeURIComponent(`${prompt.trim()}, 3d glossy vector sticker, die-cut white contour border, transparent background, clean vector, 4k`)}?width=512&height=512&nologo=true`
          };

          setStickers(prev => {
            const updated = [fallbackSticker, ...prev];
            try { localStorage.setItem("stickers", JSON.stringify(updated)); } catch {}
            return updated;
          });
          setGenerating(false);
          setGenProgress(0);
        });
    }, totalDelay + 100);
  };

  const handleManualSave = (name: string, gradient: string, symbol: string) => {
    const stickerPayload = { name, style: 'Custom', gradient, symbol };

    secureFetch('/api/stickers', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(stickerPayload)
    })
      .then(r => r.ok ? r.json() : null)
      .then(saved => {
        if (saved) {
          setStickers(prev => [saved, ...prev]);
        } else {
          throw new Error('API failed');
        }
      })
      .catch(() => {
        const localSticker = { id: Date.now(), ...stickerPayload };
        setStickers(prev => [localSticker, ...prev]);
      });
  };

  const downloadStickerAsset = async (sticker: any) => {
    const safeName = (sticker.name || 'sticker')
      .toString()
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '') || 'sticker';

    const filename = `${safeName}.png`;

    const createDownloadLink = (href: string, name: string) => {
      const link = document.createElement('a');
      link.href = href;
      link.setAttribute('download', name);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };

    if (sticker.imageUrl) {
      try {
        if (sticker.imageUrl.startsWith('data:')) {
          createDownloadLink(sticker.imageUrl, filename);
          return;
        }

        const response = await fetch(sticker.imageUrl);
        const contentType = response.headers.get('content-type') || 'image/png';
        const blob = await response.blob();
        const url = URL.createObjectURL(new Blob([blob], { type: contentType }));
        createDownloadLink(url, filename);
        URL.revokeObjectURL(url);
        return;
      } catch (error) {
        console.error('Sticker download failed for image URL:', error);
      }
    }

    const gradientColors = sticker.gradient?.match(/#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})/g) || [];
    const startColor = gradientColors[0] || '#10b981';
    const endColor = gradientColors[1] || '#3b82f6';

    const svgContent = `<?xml version="1.0" encoding="UTF-8"?>\n` +
      `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">` +
      `<defs><linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">` +
      `<stop offset="0%" stop-color="${startColor}"/>` +
      `<stop offset="100%" stop-color="${endColor}"/>` +
      `</linearGradient></defs>` +
      `<rect width="512" height="512" fill="url(#grad)" rx="72" ry="72"/>` +
      `<text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" font-family="Inter, sans-serif" font-size="220" fill="#ffffff" opacity="0.95">${sticker.symbol || '★'}</text>` +
      `</svg>`;

    const blob = new Blob([svgContent], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    createDownloadLink(url, `${safeName}.svg`);
    URL.revokeObjectURL(url);
  };

  const toggleFavorite = (id: number) => {
    setFavorites(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  // Filtered stickers
const allStyleNames = ['All', ...new Set(stickers.map(s => s.style))];
 const filteredStickers = stickers.filter(s => {
  const matchesSearch =
    !searchQuery ||
    s.name.toLowerCase().includes(searchQuery.toLowerCase());

  const matchesFilter =
    filterStyle === 'All' || s.style === filterStyle;

  const matchesFavorite =
     !showFavoritesOnly || favorites.has(s.id);

  return matchesSearch && matchesFilter && matchesFavorite;
});


const regularStickers = filteredStickers.filter(s =>
  !favorites.has(s.id)
);
  return (
    <div className="flex flex-col gap-6">
      {/* Hero Header */}
      <FadeIn delay={60} duration={500}>
        <div className="ds-hero">
          <div className="ds-hero-content">
            <div className="ds-hero-badge">
              <Sparkles size={12} />Sticker Lab
            </div>
            <h1 className="ds-hero-title">Generate custom<br />AI stickers & assets</h1>
            <p className="ds-hero-subtitle">Create unique stickers with AI prompts or design them manually on canvas.</p>
          </div>
          <div className="ds-hero-visual" style={{ width: '160px', height: '140px' }}>
            <div className="ds-hero-orb ds-hero-orb-1" style={{ background: '#ec4899' }} />
            <div className="ds-hero-orb ds-hero-orb-2" style={{ background: '#8b5cf6' }} />
            <div className="flex items-center justify-center h-full">
              <div className="text-[3rem] animate-bounce">🪐</div>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* Tab Switcher */}
      <FadeIn delay={90} duration={400}>
        <div className="flex gap-1 bg-white/[0.03] border border-white/[0.06] rounded-xl p-1 w-fit">
          <button
            onClick={() => setActiveTab('generate')}
            className={`px-4 py-2 rounded-lg text-xs font-semibold flex items-center gap-2 transition-all ${
              activeTab === 'generate' ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30' : 'text-white/40 hover:text-white/60 border border-transparent'
            }`}
          >
            <Sparkles size={14} /> AI Generate
          </button>
          <button
            onClick={() => setActiveTab('create')}
            className={`px-4 py-2 rounded-lg text-xs font-semibold flex items-center gap-2 transition-all ${
              activeTab === 'create' ? 'bg-pink-500/20 text-pink-300 border border-pink-500/30' : 'text-white/40 hover:text-white/60 border border-transparent'
            }`}
          >
            <Paintbrush size={14} /> Create Manually
          </button>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-start">
        {/* Left Panel: Controls */}
        <FadeIn delay={120} duration={500} className="flex flex-col gap-4">
          <div className="glass p-5 flex flex-col gap-4">
            {activeTab === 'generate' ? (
              <>
                <span className="section-title">AI Generation</span>

                {/* Prompt */}
                <div className="flex flex-col gap-1.5">
                 <label className="text-sm font-semibold text-white/80">
  Prompt Description
</label>
              <textarea
  value={prompt}
  onChange={e => setPrompt(e.target.value)}
  placeholder="Describe your sticker in detail..."
  className="input-field min-h-[180px] resize-none text-base p-4"
/>
                  <div className="flex flex-wrap gap-1 mt-1.5">
                    {promptPresets.map((pr, idx) => (
                      <button
                        key={idx}
                        onClick={() => setPrompt(pr)}
                       className="text-sm bg-white/[0.06] border border-white/[0.08] hover:bg-purple-500/15 hover:border-purple-500/35 px-3 py-2 rounded-lg text-white/70 hover:text-white transition-all text-left max-w-full"
                      >
                        + {pr}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Styles */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-medium text-white/50">Visual Style Profile</label>
                  <div className="grid grid-cols-1 gap-1.5">
                    {styles.map(s => (
                      <button
                        key={s.id}
                        onClick={() => setSelectedStyle(s.id)}
                        className={`flex items-center gap-3 p-2.5 rounded-lg border text-left transition-all ${
                          selectedStyle === s.id
                            ? 'bg-purple-500/10 border-purple-500/40 shadow-[0_0_10px_rgba(139,92,246,0.06)]'
                            : 'bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04]'
                        }`}
                      >
                        <span className="text-lg p-1 bg-white/[0.03] rounded-md">{s.emoji}</span>
                        <div className="min-w-0">
                          <span className="text-xs font-semibold text-white block leading-none">{s.name}</span>
                          <span className="text-[9px] text-white/30 truncate block mt-1">{s.desc}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Extra Settings */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-medium text-white/50">Dimensions</label>
                    <select
                      value={dimensions}
                      onChange={e => setDimensions(e.target.value)}
                      className="input-field text-xs py-2 bg-neutral-900 border border-white/10"
                    >
                      <option value="1:1" className="bg-neutral-900">1:1 Square</option>
                      <option value="4:3" className="bg-neutral-900">4:3 Standard</option>
                      <option value="16:9" className="bg-neutral-900">16:9 Wide</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-medium text-white/50">File Format</label>
                    <select
                      value={format}
                      onChange={e => setFormat(e.target.value)}
                      className="input-field text-xs py-2 bg-neutral-900 border border-white/10"
                    >
                      <option value="PNG">PNG (Transparent)</option>
                      <option value="SVG">SVG (Vector Paths)</option>
                    </select>
                  </div>
                </div>

                {/* Generate Button + Progress */}
                {apiKeyError && (
                  <div className="p-3 bg-red-500/10 border border-red-500/25 rounded-xl text-[11px] text-red-300 flex flex-col gap-1 leading-normal">
                    <span className="font-bold flex items-center gap-1">⚠️ Configuration Required</span>
                    <span>{apiKeyError}</span>
                  </div>
                )}

                {generating ? (
                  <div className="flex flex-col gap-2">
                    <div className="w-full h-2 bg-white/[0.05] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-pink-500 to-purple-500 rounded-full transition-all duration-300"
                        style={{ width: `${genProgress}%` }}
                      />
                    </div>
                    <div className="flex items-center gap-2 text-[11px] text-purple-300">
                      <span className="w-3 h-3 border-2 border-purple-300/30 border-t-purple-300 rounded-full animate-spin" />
                      {genStep}
                    </div>
                  </div>
                ) : (
                  <button
                    onClick={handleGenerate}
                    disabled={!prompt.trim()}
                    className={`w-full py-3 rounded-xl font-semibold text-xs flex items-center justify-center gap-2 transition-all ${
                      prompt.trim()
                        ? 'bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white shadow-[0_4px_16px_rgba(236,72,153,0.3)] cursor-pointer'
                        : 'bg-white/[0.05] border border-white/[0.08] text-white/30 cursor-not-allowed'
                    }`}
                  >
                    <Sparkles size={14} /> Render Sticker
                  </button>
                )}
              </>
            ) : (
              <>
                <span className="section-title">Manual Creator</span>
                <p className="text-[11px] text-white/35 -mt-2">Draw shapes, add text & emojis to create a custom sticker.</p>
                <MiniCanvas onSave={handleManualSave} />
              </>
            )}
          </div>
        </FadeIn>

        {/* Right Gallery: Sticker Showcase */}
        <FadeIn delay={180} duration={500} className="lg:col-span-2 flex flex-col gap-4">
          <div className="glass p-5">
            {/* Gallery Header */}
            <div className="flex items-center justify-between border-b border-white/[0.05] pb-4 mb-4 flex-wrap gap-3">
              <div className="flex items-center gap-2">
                <span className="section-title">Rendered Assets</span>
                <span className="text-[10px] bg-white/[0.05] border border-white/[0.08] px-2 py-0.5 rounded text-white/40">
                  {filteredStickers.length} Items
                </span>
              </div>
              <div className="flex items-center gap-2">
                {/* Search */}
                <div className="relative">
                  <Search size={12} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-white/30" />
                  <input
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    placeholder="Search stickers..."
                    className="bg-white/[0.04] border border-white/[0.08] rounded-lg pl-7 pr-3 py-1.5 text-[11px] text-white/80 w-[140px] outline-none focus:border-purple-500/40 transition-colors"
                  />
                </div>
                {/* View toggle */}
                <div className="flex bg-white/[0.03] border border-white/[0.06] rounded-lg p-0.5">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-1.5 rounded transition-all ${viewMode === 'grid' ? 'bg-purple-500/15 text-purple-300' : 'text-white/30'}`}
                  >
                    <Grid3X3 size={13} />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-1.5 rounded transition-all ${viewMode === 'list' ? 'bg-purple-500/15 text-purple-300' : 'text-white/30'}`}
                  >
                    <List size={13} />
                  </button>
                </div>
              </div>
            </div>

            {/* Style filter tabs */}
            <div className="flex gap-1 mb-4 flex-wrap">
              {allStyleNames.map(s => (
                <button
                  key={s}
                  onClick={() => setFilterStyle(s)}
                 className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all border ${
                    filterStyle === s
                      ? 'bg-purple-500/15 border-purple-500/30 text-purple-300'
                      : 'bg-white/[0.02] border-white/[0.06] text-white/35 hover:text-white/60 hover:bg-white/[0.04]'
                  }`}
                >
                  {s}
                </button>
              ))}
              <button
  onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}
  className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all border ${
    showFavoritesOnly
      ? 'bg-pink-500/15 border-pink-500/30 text-pink-300'
      : 'bg-white/[0.02] border-white/[0.06] text-white/35 hover:text-white/60'
  }`}
>
  ⭐ Favorites ({favorites.size})
</button>
            </div>

            {/* Gallery Grid or List */}
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {filteredStickers.map((s) => (
                  <div
                    key={s.id}
                    className="group relative bg-white/[0.02] border border-white/[0.06] hover:border-purple-500/30 rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_24px_rgba(0,0,0,0.35)]"
                  >
                    <div className="aspect-square relative flex items-center justify-center bg-[#07070b] overflow-hidden">
                      <div className="absolute inset-4 rounded-full filter blur-xl opacity-20 scale-125" style={{ background: s.gradient }} />
                      <div className="absolute inset-6 rounded-full filter blur-md opacity-10" style={{ background: s.gradient }} />
                  {s.imageUrl && !brokenImages.has(s.id) ? (
  <img
    src={s.imageUrl}
    alt={s.name}
    className="w-24 h-24 object-contain rounded-2xl border-4 border-white/90 shadow-2xl relative z-10 transition-transform duration-300 group-hover:scale-110"
    onError={() => setBrokenImages(prev => new Set(prev).add(s.id))}
  />
) : (
  <div
    className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl shadow-2xl relative z-10 transition-transform duration-300 group-hover:scale-110"
    style={{
      background: s.gradient,
      border: '4px solid rgba(255,255,255,0.9)',
      boxShadow: '0 8px 30px rgba(0,0,0,0.5), inset 0 2px 8px rgba(255,255,255,0.2)'
    }}
  >
{s.symbol}
  </div>
)}
                      <div className="absolute inset-0 bg-black/60 backdrop-filter backdrop-blur-[3px] flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-20">
                        <button
                          onClick={() => toggleFavorite(s.id)}
                          className={`p-2 bg-white/[0.08] border border-white/[0.12] rounded-lg hover:bg-white/[0.16] hover:scale-105 transition-all ${
                            favorites.has(s.id) ? 'text-pink-400 border-pink-500/40 bg-pink-500/10' : 'text-white'
                          }`}
                          title="Favorite"
                        >
                          <Heart size={14} fill={favorites.has(s.id) ? 'currentColor' : 'none'} />
                        </button>
                        <button
                          onClick={() => downloadStickerAsset(s)}
                          className="p-2 bg-white text-black rounded-lg hover:bg-neutral-200 hover:scale-105 transition-all flex items-center gap-1.5 text-xs font-bold"
                          title="Download Asset"
                        >
                          <Download size={14} />
                        </button>
                      </div>
                    </div>
                    <div className="p-3 border-t border-white/[0.05] bg-white/[0.01]">
                      <span className="text-xs font-semibold text-white truncate block">{s.name}</span>
                      <span className="text-[10px] text-white/35 block mt-1">{s.style} Style</span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col gap-2">
                {filteredStickers.map((s) => (
                  <div
                    key={s.id}
                    className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-purple-500/20 transition-all group"
                  >
              {s.imageUrl && !brokenImages.has(s.id) ? (
  <img
    src={s.imageUrl}
    alt={s.name}
    className="w-12 h-12 object-contain rounded-lg border-2 border-white/90 shadow-md flex-shrink-0"
    onError={() => setBrokenImages(prev => new Set(prev).add(s.id))}
  />
) : (
  <div
    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
    style={{
      background: s.gradient,
      border: '2px solid rgba(255,255,255,0.5)'
    }}
  >
{s.symbol}
  </div>
)}
                    <div className="flex-1 min-w-0">
                      <span className="text-xs font-semibold text-white block truncate">{s.name}</span>
                      <span className="text-[10px] text-white/30">{s.style} Style</span>
                    </div>
                    <div className="flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        onClick={() => toggleFavorite(s.id)}
                        className={`p-1.5 rounded-lg transition-all ${favorites.has(s.id) ? 'text-pink-400' : 'text-white/30 hover:text-white/60'}`}
                      >
                        <Heart size={13} fill={favorites.has(s.id) ? 'currentColor' : 'none'} />
                      </button>
                      <button
                        onClick={() => downloadStickerAsset(s)}
                        className="p-1.5 rounded-lg text-white/30 hover:text-white/60 transition-all"
                        title="Download Asset"
                      >
                        <Download size={13} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {filteredStickers.length === 0 && (
              <div className="text-center py-12 text-white/20 text-sm">
                No stickers found. Try a different search or filter.
              </div>
            )}
          </div>
        </FadeIn>
      </div>
    </div>
  );
}

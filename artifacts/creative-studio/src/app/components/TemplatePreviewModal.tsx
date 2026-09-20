import React, { useState } from 'react';
import { X, Play, Heart, Copy, ChevronLeft, ChevronRight, Sparkles, Layers, Type, Palette, Maximize2 } from 'lucide-react';
import { TemplateMiniRenderer } from './TemplateMiniRenderer';

interface TemplatePreviewModalProps {
  template: any;
  isFavorite: boolean;
  onClose: () => void;
  onUseTemplate: (template: any) => void;
  onToggleFavorite: (id: number) => void;
  onDuplicateTemplate?: (template: any) => void;
}

export function TemplatePreviewModal({
  template,
  isFavorite,
  onClose,
  onUseTemplate,
  onToggleFavorite,
  onDuplicateTemplate
}: TemplatePreviewModalProps) {
  if (!template) return null;

  const slides = Array.isArray(template.slides) && template.slides.length > 0
    ? template.slides
    : [{ id: 'p1', name: 'Page 1', elements: template.elements || [] }];

  const [currentSlideIdx, setCurrentSlideIdx] = useState(0);
  const activeSlide = slides[currentSlideIdx] || slides[0];

  const activeSlideElements = Array.isArray(activeSlide)
    ? activeSlide
    : Array.isArray(activeSlide?.elements)
    ? activeSlide.elements
    : Array.isArray(template?.elements)
    ? template.elements
    : [];

  const currentTemplateView = {
    ...template,
    elements: activeSlideElements
  };

  const fonts = Array.isArray(template.fonts) && template.fonts.length > 0
    ? template.fonts
    : ['Inter', 'Montserrat'];

  const colors = Array.isArray(template.colors) && template.colors.length > 0
    ? template.colors
    : ['#0f172a', '#38bdf8', '#818cf8', '#ffffff'];

  const tags = Array.isArray(template.tags) ? template.tags : [];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-5xl bg-[#0f111a] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors"
          aria-label="Close preview"
        >
          <X size={20} />
        </button>

        {/* Left Side: Scaled Preview Canvas */}
        <div className="flex-1 bg-[#090b10] p-6 flex flex-col items-center justify-center relative min-h-[350px] md:min-h-[500px]">
          <div className="w-full h-full max-w-[680px] max-h-[480px] rounded-xl overflow-hidden shadow-2xl border border-white/10 flex items-center justify-center">
            <TemplateMiniRenderer template={currentTemplateView} className="w-full h-full" />
          </div>

          {/* Multi-slide Pagination Controls */}
          {slides.length > 1 && (
            <div className="flex items-center gap-3 mt-4 z-10 bg-white/5 border border-white/10 px-4 py-2 rounded-full">
              <button
                disabled={currentSlideIdx === 0}
                onClick={() => setCurrentSlideIdx(prev => Math.max(0, prev - 1))}
                className="p-1 rounded-full text-white/70 hover:text-white disabled:opacity-30 disabled:pointer-events-none"
              >
                <ChevronLeft size={18} />
              </button>
              <span className="text-xs font-semibold text-white/90">
                {activeSlide?.name || `Slide ${currentSlideIdx + 1}`} ({currentSlideIdx + 1} of {slides.length})
              </span>
              <button
                disabled={currentSlideIdx === slides.length - 1}
                onClick={() => setCurrentSlideIdx(prev => Math.min(slides.length - 1, prev + 1))}
                className="p-1 rounded-full text-white/70 hover:text-white disabled:opacity-30 disabled:pointer-events-none"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          )}
        </div>

        {/* Right Side: Template Details & Actions */}
        <div className="w-full md:w-[380px] p-6 flex flex-col justify-between border-t md:border-t-0 md:border-l border-white/10 overflow-y-auto">
          <div>
            {/* Category & Badge */}
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-purple-500/20 text-purple-300 border border-purple-500/30">
                {template.category}
              </span>
              {template.subcategory && (
                <span className="text-xs text-white/50">· {template.subcategory}</span>
              )}
              {template.premium && (
                <span className="ml-auto px-2 py-0.5 rounded text-[10px] font-extrabold uppercase tracking-wide bg-amber-400 text-black">
                  PRO
                </span>
              )}
            </div>

            {/* Title */}
            <h2 className="text-2xl font-bold text-white tracking-tight leading-snug mb-2">
              {template.title || template.name}
            </h2>

            {/* Description */}
            <p className="text-xs text-gray-400 leading-relaxed mb-5">
              {template.description || 'Professional production-grade template structured with fully editable elements, scalable typography, and modular sections.'}
            </p>

            {/* Specifications Grid */}
            <div className="grid grid-cols-2 gap-3 mb-5 p-3 rounded-xl bg-white/[0.03] border border-white/5">
              <div>
                <span className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold block">Dimensions</span>
                <span className="text-xs text-gray-200 font-medium">{template.size || '1920×1080'}</span>
              </div>
              <div>
                <span className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold block">Total Pages</span>
                <span className="text-xs text-gray-200 font-medium">{slides.length} {slides.length === 1 ? 'Page' : 'Pages'}</span>
              </div>
              <div>
                <span className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold block">Orientation</span>
                <span className="text-xs text-gray-200 font-medium capitalize">{template.orientation || 'Landscape'}</span>
              </div>
              <div>
                <span className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold block">Author</span>
                <span className="text-xs text-gray-200 font-medium">{template.author || 'ORD Studio'}</span>
              </div>
            </div>

            {/* Typography Pairing */}
            <div className="mb-4">
              <div className="flex items-center gap-1.5 text-xs text-gray-400 font-semibold mb-2">
                <Type size={13} />
                <span>Fonts & Typography</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {fonts.map((f: string, i: number) => (
                  <span key={i} className="px-2.5 py-1 rounded-md bg-white/5 text-[11px] text-gray-300 font-medium border border-white/5">
                    {f}
                  </span>
                ))}
              </div>
            </div>

            {/* Color Palette */}
            <div className="mb-5">
              <div className="flex items-center gap-1.5 text-xs text-gray-400 font-semibold mb-2">
                <Palette size={13} />
                <span>Color Palette</span>
              </div>
              <div className="flex items-center gap-2">
                {colors.map((c: string, i: number) => (
                  <div 
                    key={i} 
                    className="w-7 h-7 rounded-full border-2 border-white/20 shadow-sm"
                    style={{ backgroundColor: c }}
                    title={c}
                  />
                ))}
              </div>
            </div>

            {/* Tags */}
            {tags.length > 0 && (
              <div className="mb-6">
                <div className="flex flex-wrap gap-1">
                  {tags.map((tag: string, i: number) => (
                    <span key={i} className="text-[10px] text-gray-500 hover:text-gray-400">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-2 pt-4 border-t border-white/10">
            <button
              onClick={() => onUseTemplate(template)}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-sm shadow-lg shadow-purple-900/30 transition-all hover:scale-[1.02]"
            >
              <Play size={16} fill="white" />
              Use This Template
            </button>

            <div className="flex gap-2">
              <button
                onClick={() => onToggleFavorite(template.id)}
                className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg border text-xs font-semibold transition-colors ${
                  isFavorite 
                    ? 'bg-rose-500/10 border-rose-500/30 text-rose-400 hover:bg-rose-500/20' 
                    : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10 hover:text-white'
                }`}
              >
                <Heart size={14} fill={isFavorite ? '#f43f5e' : 'none'} />
                {isFavorite ? 'Favorited' : 'Favorite'}
              </button>

              {onDuplicateTemplate && (
                <button
                  onClick={() => onDuplicateTemplate(template)}
                  className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-white/5 border border-white/10 text-xs font-semibold text-white/70 hover:bg-white/10 hover:text-white transition-colors"
                >
                  <Copy size={14} />
                  Duplicate
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

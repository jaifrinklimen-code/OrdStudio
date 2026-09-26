import React, { memo } from "react";
import { Heart, Play } from "lucide-react";
import { TemplateMiniRenderer } from "./TemplateMiniRenderer";
import {
  normalizeCanonicalDesign,
  fitAIRedesignToCanonicalCanvas,
  isAIRedesignProject,
} from "../lib/coordinateNormalizer";

interface SavedDesignCardProps {
  project: any;
  isFavorite?: boolean;
  onOpen: () => void;
  onToggleFavorite?: () => void;
}

export function buildSavedDesignPayload(project: any): any {
  if (!project) return project;

  const projSlides =
    Array.isArray(project.slides) && project.slides.length > 0
      ? project.slides
      : Array.isArray(project.pages) && project.pages.length > 0
      ? project.pages
      : Array.isArray(project.elements) && project.elements.length > 0
      ? [project.elements]
      : [];
  const projElements =
    Array.isArray(project.elements) && project.elements.length > 0
      ? project.elements
      : projSlides[0] || [];

  if (isAIRedesignProject(project) && project.aiRedesignCanvasFit !== true) {
    const fitted = fitAIRedesignToCanonicalCanvas({
      ...project,
      elements: projElements,
      slides: projSlides,
      canvasWidth: project.canvasWidth,
      canvasHeight: project.canvasHeight,
      size: project.size,
    });
    return {
      ...fitted,
      id: project.id,
      name: project.name || "Untitled Design",
      category:
        project.category ||
        project.type ||
        (fitted.canvasWidth >= fitted.canvasHeight ? "Presentation" : "Document"),
      type:
        project.type ||
        project.category ||
        (fitted.canvasWidth >= fitted.canvasHeight ? "Presentation" : "Document"),
      gradient: project.gradient || "#0b131e",
      thumbnailUrl: project.thumbnailUrl,
      isSavedProject: true,
    };
  }

  const norm = normalizeCanonicalDesign({
    ...project,
    elements: projElements,
    slides: projSlides,
    canvasWidth: project.canvasWidth,
    canvasHeight: project.canvasHeight,
    size: project.size,
  });

  return {
    ...project,
    id: project.id,
    name: project.name || "Untitled Design",
    category:
      project.type ||
      project.category ||
      (norm.isLandscape ? "Presentation" : "Document"),
    type:
      project.type ||
      project.category ||
      (norm.isLandscape ? "Presentation" : "Document"),
    gradient: project.gradient || "#0b131e",
    size: `${norm.canvasWidth}x${norm.canvasHeight}`,
    canvasWidth: norm.canvasWidth,
    canvasHeight: norm.canvasHeight,
    elements: norm.elements,
    slides: norm.slides,
    thumbnailUrl: project.thumbnailUrl,
    isSavedProject: true,
  };
}

export const SavedDesignCard = memo(function SavedDesignCard({
  project,
  isFavorite = false,
  onOpen,
  onToggleFavorite,
}: SavedDesignCardProps) {
  const payload = buildSavedDesignPayload(project);
  const cW = payload.canvasWidth || 1920;
  const cH = payload.canvasHeight || 1080;
  const displayName = payload.name || "Untitled Design";
  const category = payload.type || payload.category || "Design";
  const sizeLabel = `${cW}x${cH}`;

  return (
    <div
      className="group relative flex-shrink-0 flex flex-col bg-[#12121b] border border-white/[0.08] hover:border-purple-500/50 rounded-xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-200"
      style={{ width: "260px", height: "340px" }}
      onClick={onOpen}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === "Enter") onOpen(); }}
      aria-label={`Open design: ${displayName}`}
    >
      <div
        className="w-full relative overflow-hidden flex items-center justify-center p-3 bg-[#08090d] border-b border-white/[0.06]"
        style={{ height: "255px" }}
      >
        <TemplateMiniRenderer template={payload} className="w-full h-full" />

        <div
          className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2 p-3 backdrop-blur-[2px]"
          onClick={(e) => { e.stopPropagation(); onOpen(); }}
        >
          <button
            onClick={(e) => { e.stopPropagation(); onOpen(); }}
            className="w-full py-2 px-3 rounded-lg bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold shadow-lg flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
          >
            <Play size={12} fill="white" /> Open Editor
          </button>

          {onToggleFavorite && (
            <div className="flex items-center gap-2 w-full justify-center">
              <button
                onClick={(e) => { e.stopPropagation(); onToggleFavorite?.(); }}
                className={`p-1.5 rounded-lg border transition-colors cursor-pointer ${
                  isFavorite
                    ? "bg-rose-500/20 border-rose-500/40 text-rose-400"
                    : "bg-white/10 border-white/10 text-white/70 hover:text-white"
                }`}
                title="Favorite design"
              >
                <Heart size={14} fill={isFavorite ? "#f43f5e" : "transparent"} />
              </button>
            </div>
          )}
        </div>

        <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5 pointer-events-none z-10">
          <span className="bg-emerald-500/90 text-black text-[9.5px] font-extrabold px-1.5 py-0.5 rounded shadow">
            Saved
          </span>
        </div>
      </div>

      <div
        className="w-full p-3 flex flex-col justify-between bg-[#12121c]"
        style={{ height: "85px" }}
      >
        <span
          className="text-xs font-bold text-white line-clamp-2 leading-snug group-hover:text-purple-300 transition-colors"
          title={displayName}
        >
          {displayName}
        </span>

        <div className="flex items-center justify-between text-[11px] text-white/40 mt-auto pt-1">
          <span className="text-purple-400/90 font-medium truncate max-w-[120px]">
            {category}
          </span>
          <div className="flex items-center gap-2 shrink-0">
            <span className="font-mono text-[10px] text-white/35">
              {sizeLabel}
            </span>
            {onToggleFavorite && (
              <button
                onClick={(e) => { e.stopPropagation(); onToggleFavorite?.(); }}
                className="text-white/30 hover:text-rose-400 transition-colors p-0.5"
                title="Favorite"
              >
                <Heart
                  size={13}
                  fill={isFavorite ? "#f43f5e" : "transparent"}
                  className={isFavorite ? "text-rose-400" : ""}
                />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
});

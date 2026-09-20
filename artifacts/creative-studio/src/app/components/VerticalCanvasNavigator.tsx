import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

interface VerticalCanvasNavigatorProps {
  canvasWrapRef: React.RefObject<HTMLDivElement | null>;
  zoom: number;
  cH: number;
  cW: number;
}

export const VerticalCanvasNavigator: React.FC<VerticalCanvasNavigatorProps> = ({
  canvasWrapRef,
  zoom,
  cH,
  cW,
}) => {
  const [canScroll, setCanScroll] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0); // 0.0 to 1.0
  const [isDragging, setIsDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [thumbHeight, setThumbHeight] = useState(40);

  const trackRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);
  const dragStartYRef = useRef(0);
  const dragStartScrollTopRef = useRef(0);

  // Sync scroll position & visibility from existing canvas container
  const updateScroll = useCallback(() => {
    const el = canvasWrapRef.current;
    if (!el) {
      setCanScroll(false);
      return;
    }

    const maxScroll = el.scrollHeight - el.clientHeight;
    // Show only when canvas content is taller than the viewport
    const isTaller = maxScroll > 16;

    setCanScroll(isTaller);
    if (!isTaller || maxScroll <= 0) {
      setScrollProgress(0);
      return;
    }

    const progress = Math.max(0, Math.min(1, el.scrollTop / maxScroll));
    setScrollProgress(progress);

    if (trackRef.current) {
      const trackH = trackRef.current.clientHeight;
      if (trackH > 0) {
        const ratio = el.clientHeight / el.scrollHeight;
        const calculatedThumbH = Math.max(28, Math.min(90, Math.round(trackH * ratio)));
        setThumbHeight(calculatedThumbH);
      }
    }
  }, [canvasWrapRef]);

  // Robust attachment to canvas container
  useEffect(() => {
    let el = canvasWrapRef.current;
    let ro: ResizeObserver | null = null;
    let intervalId: any = null;

    const attach = () => {
      el = canvasWrapRef.current;
      if (!el) return false;

      updateScroll();
      el.addEventListener('scroll', updateScroll, { passive: true });

      ro = new ResizeObserver(() => {
        updateScroll();
      });
      ro.observe(el);
      return true;
    };

    if (!attach()) {
      intervalId = setInterval(() => {
        if (attach()) {
          clearInterval(intervalId);
        }
      }, 50);
    }

    const t1 = setTimeout(updateScroll, 100);
    const t2 = setTimeout(updateScroll, 300);

    return () => {
      if (intervalId) clearInterval(intervalId);
      clearTimeout(t1);
      clearTimeout(t2);
      if (el) el.removeEventListener('scroll', updateScroll);
      if (ro) ro.disconnect();
    };
  }, [canvasWrapRef, updateScroll, zoom, cH, cW]);

  // Quick navigation: TOP
  const scrollToTop = () => {
    const el = canvasWrapRef.current;
    if (el) {
      el.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Quick navigation: BOTTOM
  const scrollToBottom = () => {
    const el = canvasWrapRef.current;
    if (el) {
      el.scrollTo({ top: el.scrollHeight - el.clientHeight, behavior: 'smooth' });
    }
  };

  // Dragging thumb
  const handleThumbMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const el = canvasWrapRef.current;
    if (!el) return;

    isDraggingRef.current = true;
    setIsDragging(true);
    dragStartYRef.current = e.clientY;
    dragStartScrollTopRef.current = el.scrollTop;

    const handleMouseMove = (moveEvent: MouseEvent) => {
      if (!isDraggingRef.current) return;
      const scrollEl = canvasWrapRef.current;
      const trackEl = trackRef.current;
      if (!scrollEl || !trackEl) return;

      const trackH = trackEl.clientHeight;
      const curThumbH = thumbRef.current?.clientHeight || thumbHeight;
      const availableTrackTravel = trackH - curThumbH;
      const maxScroll = scrollEl.scrollHeight - scrollEl.clientHeight;

      if (availableTrackTravel <= 0 || maxScroll <= 0) return;

      const deltaY = moveEvent.clientY - dragStartYRef.current;
      const scrollDelta = (deltaY / availableTrackTravel) * maxScroll;
      const targetScroll = Math.max(0, Math.min(maxScroll, dragStartScrollTopRef.current + scrollDelta));

      scrollEl.scrollTop = targetScroll;
    };

    const handleMouseUp = () => {
      isDraggingRef.current = false;
      setIsDragging(false);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  };

  // Track click to jump
  const handleTrackClick = (e: React.MouseEvent) => {
    if (e.target === thumbRef.current || thumbRef.current?.contains(e.target as Node)) {
      return;
    }
    const scrollEl = canvasWrapRef.current;
    const trackEl = trackRef.current;
    if (!scrollEl || !trackEl) return;

    const trackRect = trackEl.getBoundingClientRect();
    const clickY = e.clientY - trackRect.top;
    const trackH = trackEl.clientHeight;
    const curThumbH = thumbRef.current?.clientHeight || thumbHeight;
    const availableTrackTravel = trackH - curThumbH;
    const maxScroll = scrollEl.scrollHeight - scrollEl.clientHeight;

    if (availableTrackTravel <= 0 || maxScroll <= 0) return;

    const targetY = clickY - curThumbH / 2;
    const fraction = Math.max(0, Math.min(1, targetY / availableTrackTravel));
    scrollEl.scrollTo({ top: fraction * maxScroll, behavior: 'smooth' });
  };

  const trackH = trackRef.current?.clientHeight || 200;
  const availableTrackTravel = Math.max(0, trackH - thumbHeight);
  const thumbTop = Math.round(scrollProgress * availableTrackTravel);

  return (
    <div
      className="ce-vertical-nav"
      style={{
        width: 20,
        background: '#111118',
        borderLeft: '1px solid rgba(255,255,255,0.06)',
        borderRight: '1px solid rgba(255,255,255,0.06)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '6px 0',
        zIndex: 30,
        userSelect: 'none',
        flexShrink: 0,
        height: '100%',
        boxSizing: 'border-box',
        opacity: canScroll ? 1 : 0,
        pointerEvents: canScroll ? 'auto' : 'none',
        transition: 'opacity 0.2s ease',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => { if (!isDragging) setIsHovered(false); }}
      role="scrollbar"
      aria-orientation="vertical"
      aria-hidden={!canScroll}
    >
      {/* Top button */}
      <button
        onClick={scrollToTop}
        title="Scroll to Top"
        style={{
          width: 18,
          height: 18,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'transparent',
          border: 'none',
          borderRadius: 3,
          color: scrollProgress <= 0.02 ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.65)',
          cursor: scrollProgress <= 0.02 ? 'default' : 'pointer',
          padding: 0,
        }}
      >
        <ChevronUp size={13} />
      </button>

      {/* Track */}
      <div
        ref={trackRef}
        onClick={handleTrackClick}
        style={{
          flex: 1,
          width: '100%',
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          margin: '4px 0',
          cursor: 'pointer',
        }}
        title="Drag or click to scroll"
      >
        {/* Track groove */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            width: 3,
            background: 'rgba(255,255,255,0.08)',
            borderRadius: 2,
          }}
        />

        {/* Draggable thumb */}
        <div
          ref={thumbRef}
          onMouseDown={handleThumbMouseDown}
          style={{
            position: 'absolute',
            top: 0,
            transform: `translateY(${thumbTop}px)`,
            width: isHovered || isDragging ? 12 : 8,
            height: thumbHeight,
            background: isDragging ? '#a78bfa' : isHovered ? '#9061f9' : '#7c3aed',
            borderRadius: 4,
            cursor: isDragging ? 'grabbing' : 'grab',
            boxShadow: '0 1px 4px rgba(0,0,0,0.5)',
            transition: isDragging ? 'none' : 'width 0.15s ease, background 0.15s ease',
          }}
        />
      </div>

      {/* Bottom button */}
      <button
        onClick={scrollToBottom}
        title="Scroll to Bottom"
        style={{
          width: 18,
          height: 18,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'transparent',
          border: 'none',
          borderRadius: 3,
          color: scrollProgress >= 0.98 ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.65)',
          cursor: scrollProgress >= 0.98 ? 'default' : 'pointer',
          padding: 0,
        }}
      >
        <ChevronDown size={13} />
      </button>
    </div>
  );
};

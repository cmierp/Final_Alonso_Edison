import { useRef, useState, useCallback, useEffect } from "react";

interface BeforeAfterSliderProps {
  beforeSrc?: string;
  afterSrc?: string;
  beforeLabel?: string;
  afterLabel?: string;
  aspectRatio?: string;
  maxHeight?: string;
}

export default function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeLabel = "Antes",
  afterLabel = "Después",
  aspectRatio = "16/9",
  maxHeight,
}: BeforeAfterSliderProps) {
  const [pos, setPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updatePos = useCallback((clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const raw = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(Math.max(raw, 2), 98));
  }, []);

  const onMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    dragging.current = true;
    updatePos(e.clientX);
  };
  const onMouseMove = useCallback((e: MouseEvent) => {
    if (!dragging.current) return;
    updatePos(e.clientX);
  }, [updatePos]);
  const onMouseUp = useCallback(() => { dragging.current = false; }, []);

  const onTouchStart = (e: React.TouchEvent) => {
    dragging.current = true;
    updatePos(e.touches[0].clientX);
  };
  const onTouchMove = useCallback((e: TouchEvent) => {
    if (!dragging.current) return;
    e.preventDefault();
    updatePos(e.touches[0].clientX);
  }, [updatePos]);
  const onTouchEnd = useCallback(() => { dragging.current = false; }, []);

  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    window.addEventListener("touchend", onTouchEnd);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [onMouseMove, onMouseUp, onTouchMove, onTouchEnd]);

  const onContainerClick = (e: React.MouseEvent) => {
    if (dragging.current) return;
    updatePos(e.clientX);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full select-none overflow-hidden cursor-col-resize"
      style={{ aspectRatio, maxHeight }}
      onClick={onContainerClick}
    >
      {/* BEFORE — full width */}
      <div className="absolute inset-0 flex items-end justify-start p-3">
        {beforeSrc ? (
          <img
            src={beforeSrc}
            alt={beforeLabel}
            className="absolute inset-0 w-full h-full object-contain"
            draggable={false}
          />
        ) : (
          <div className="absolute inset-0" style={{ background: "hsl(30 10% 8%)" }} />
        )}
        <span
          className="relative z-10 font-sans text-[9px] tracking-[0.28em] uppercase px-2.5 py-1 border"
          style={{
            color: "rgba(255,255,255,0.55)",
            borderColor: "rgba(255,255,255,0.18)",
            background: "rgba(0,0,0,0.45)",
            backdropFilter: "blur(4px)",
            pointerEvents: "none",
          }}
        >
          {beforeLabel}
        </span>
      </div>

      {/* AFTER — clipped from the left */}
      <div
        className="absolute inset-0 flex items-end justify-end p-3"
        style={{ clipPath: `inset(0 0 0 ${pos}%)` }}
      >
        {afterSrc ? (
          <img
            src={afterSrc}
            alt={afterLabel}
            className="absolute inset-0 w-full h-full object-contain"
            draggable={false}
          />
        ) : (
          <div className="absolute inset-0" style={{ background: "hsl(39 20% 11%)" }} />
        )}
        <span
          className="relative z-10 font-sans text-[9px] tracking-[0.28em] uppercase px-2.5 py-1 border"
          style={{
            color: "hsl(39 46% 61% / 0.9)",
            borderColor: "hsl(39 46% 61% / 0.35)",
            background: "rgba(0,0,0,0.45)",
            backdropFilter: "blur(4px)",
            pointerEvents: "none",
          }}
        >
          {afterLabel}
        </span>
      </div>

      {/* Divider line */}
      <div
        className="absolute top-0 bottom-0 w-px pointer-events-none"
        style={{
          left: `${pos}%`,
          background: "hsl(39 46% 61% / 0.8)",
          boxShadow: "0 0 8px hsl(39 46% 61% / 0.4)",
        }}
      />

      {/* Handle */}
      <div
        className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 z-20 flex items-center justify-center"
        style={{ left: `${pos}%` }}
        onMouseDown={onMouseDown}
        onTouchStart={onTouchStart}
      >
        <div
          className="absolute w-12 h-12 rounded-full"
          style={{ background: "hsl(39 46% 61% / 0.15)", filter: "blur(8px)" }}
        />
        <div
          className="relative w-9 h-9 rounded-full border border-primary flex items-center justify-center cursor-col-resize"
          style={{
            background: "hsl(30 15% 5% / 0.92)",
            backdropFilter: "blur(6px)",
            boxShadow: "0 0 0 1px hsl(39 46% 61% / 0.2), 0 4px 16px rgba(0,0,0,0.5)",
          }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M5 4L2 7L5 10" stroke="hsl(39 46% 61%)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9 4L12 7L9 10" stroke="hsl(39 46% 61%)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      {/* Hint */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 pointer-events-none" style={{ opacity: 0.5 }}>
        <p className="font-sans text-[8px] tracking-[0.3em] uppercase text-primary whitespace-nowrap">
          Arrastrar
        </p>
      </div>
    </div>
  );
}

import { useRef } from 'react';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  intensity?: number;
  glare?: boolean;
}

export function TiltCard({ children, className, style, onClick, intensity = 10, glare = true }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const rotY = (x - 0.5) * intensity;
    const rotX = -(y - 0.5) * intensity;
    card.style.transform = `perspective(700px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(12px) scale(1.03)`;

    if (glare && glareRef.current) {
      const angle = Math.atan2(y - 0.5, x - 0.5) * (180 / Math.PI) + 90;
      const dist = Math.sqrt(Math.pow((x - 0.5) * 2, 2) + Math.pow((y - 0.5) * 2, 2));
      glareRef.current.style.opacity = String(dist * 0.35);
      glareRef.current.style.background = `linear-gradient(${angle}deg, rgba(255,255,255,0.28) 0%, transparent 60%)`;
    }
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = 'perspective(700px) rotateX(0deg) rotateY(0deg) translateZ(0px) scale(1)';
    if (glare && glareRef.current) {
      glareRef.current.style.opacity = '0';
    }
  };

  return (
    <div
      ref={cardRef}
      className={className}
      style={{
        transition: 'transform 0.18s ease, box-shadow 0.18s ease',
        transformStyle: 'preserve-3d',
        position: 'relative',
        willChange: 'transform',
        cursor: onClick ? 'pointer' : 'default',
        ...style,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      {children}
      {glare && (
        <div
          ref={glareRef}
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: 'inherit',
            opacity: 0,
            pointerEvents: 'none',
            transition: 'opacity 0.2s ease',
            zIndex: 10,
          }}
        />
      )}
    </div>
  );
}

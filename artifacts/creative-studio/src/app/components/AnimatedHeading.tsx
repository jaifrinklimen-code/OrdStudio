import { useState, useEffect } from 'react';

interface AnimatedHeadingProps {
  text: string;
  className?: string;
  initialDelay?: number;
  charDelay?: number;
}

export function AnimatedHeading({
  text,
  className = '',
  initialDelay = 200,
  charDelay = 30,
}: AnimatedHeadingProps) {
  const [visibleChars, setVisibleChars] = useState<Set<string>>(new Set());
  const lines = text.split('\n');

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    let globalIndex = 0;

    lines.forEach((line, lineIndex) => {
      const lineLength = line.length;
      line.split('').forEach((_, charIndex) => {
        const delay = initialDelay + (lineIndex * lineLength * charDelay) + (charIndex * charDelay);
        const key = `${lineIndex}-${charIndex}`;
        const timer = setTimeout(() => {
          setVisibleChars(prev => new Set(prev).add(key));
        }, delay);
        timers.push(timer);
        globalIndex++;
      });
    });

    return () => timers.forEach(clearTimeout);
  }, [text]);

  return (
    <h1 className={className}>
      {lines.map((line, lineIndex) => (
        <span key={lineIndex} style={{ display: 'block' }}>
          {line.split('').map((char, charIndex) => {
            const key = `${lineIndex}-${charIndex}`;
            const isVisible = visibleChars.has(key);
            return (
              <span
                key={charIndex}
                style={{
                  display: 'inline-block',
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateX(0)' : 'translateX(-18px)',
                  transition: 'opacity 500ms, transform 500ms',
                }}
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            );
          })}
        </span>
      ))}
    </h1>
  );
}

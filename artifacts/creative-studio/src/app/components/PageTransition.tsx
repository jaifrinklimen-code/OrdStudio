import { useEffect, useRef } from 'react';

interface PageTransitionProps {
  children: React.ReactNode;
  tabKey: string;
}

export function PageTransition({ children, tabKey }: PageTransitionProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.animation = 'none';
    void el.offsetHeight;
    el.style.animation = 'pageEnter 0.65s cubic-bezier(0.16, 1, 0.3, 1) forwards';
  }, [tabKey]);

  return (
    <div
      ref={ref}
      style={{
        width: '100%',
        height: '100%',
        transformOrigin: '50% 0%',
        willChange: 'transform, opacity',
      }}
    >
      {children}
    </div>
  );
}

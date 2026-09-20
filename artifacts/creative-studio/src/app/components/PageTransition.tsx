import { useEffect, useState } from 'react';

interface PageTransitionProps {
  children: React.ReactNode;
  tabKey: string;
}

export function PageTransition({ children, tabKey }: PageTransitionProps) {
  const [displayChildren, setDisplayChildren] = useState(children);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => {
      setDisplayChildren(children);
      setIsTransitioning(false);
    }, 200); // Wait for fade out before swapping content
    return () => clearTimeout(timer);
  }, [tabKey, children]);

  return (
    <div 
      style={{ 
        width: '100%', 
        height: '100%',
        opacity: isTransitioning ? 0 : 1,
        transform: isTransitioning ? 'scale(0.98)' : 'scale(1)',
        transition: 'opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1), transform 0.2s cubic-bezier(0.4, 0, 0.2, 1)'
      }}
    >
      {displayChildren}
    </div>
  );
}

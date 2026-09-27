import { useEffect, useState } from 'react';

interface PageTransitionProps {
  children: React.ReactNode;
  tabKey: string;
}

export function PageTransition({ children, tabKey }: PageTransitionProps) {
  const [displayChildren, setDisplayChildren] = useState(children);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [prevTabKey, setPrevTabKey] = useState(tabKey);

  if (tabKey === prevTabKey && displayChildren !== children) {
    setDisplayChildren(children);
  }

  useEffect(() => {
    if (tabKey !== prevTabKey) {
      setIsTransitioning(true);
      const timer = setTimeout(() => {
        setDisplayChildren(children);
        setPrevTabKey(tabKey);
        setIsTransitioning(false);
      }, 150);
      return () => clearTimeout(timer);
    }
    return undefined;
  }, [tabKey, prevTabKey, children]);

  return (
    <div 
      style={{ 
        width: '100%', 
        height: '100%',
        opacity: isTransitioning ? 0 : 1,
        transform: isTransitioning ? 'scale(0.98)' : 'none',
        transition: 'opacity 0.15s cubic-bezier(0.4, 0, 0.2, 1), transform 0.15s cubic-bezier(0.4, 0, 0.2, 1)'
      }}
    >
      {displayChildren}
    </div>
  );
}

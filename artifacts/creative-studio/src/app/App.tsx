import { useState, useCallback, useRef } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { DesignStudio } from './components/DesignStudio';
import { AIAssistant } from './components/AIAssistant';
import { ContentGenerator } from './components/ContentGenerator';
import { SmartSearch } from './components/SmartSearch';
import { StickerLab } from './components/StickerLab';
import { PageTransition } from './components/PageTransition';
import { LoadingBar } from './components/LoadingBar';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [loadingKey, setLoadingKey] = useState(0);
  const [loading, setLoading] = useState(false);
  const pendingTab = useRef<string | null>(null);

  const handleNavigate = useCallback((tab: string) => {
    if (tab === activeTab) return;
    pendingTab.current = tab;
    setLoading(false);
    // tiny defer so the loading state resets before re-triggering
    requestAnimationFrame(() => {
      setLoading(true);
      setLoadingKey(k => k + 1);
      setTimeout(() => {
        if (pendingTab.current) {
          setActiveTab(pendingTab.current);
          pendingTab.current = null;
        }
        setLoading(false);
      }, 380);
    });
  }, [activeTab]);

  const renderSection = () => {
    switch (activeTab) {
      case 'design':    return <DesignStudio />;
      case 'assistant': return <AIAssistant />;
      case 'generator': return <ContentGenerator />;
      case 'search':    return <SmartSearch />;
      case 'stickers':  return <StickerLab />;
      default:          return <Hero onNavigate={handleNavigate} />;
    }
  };

  return (
    <div style={{
      width: '100%',
      height: '100vh',
      backgroundColor: '#07071a',
      color: '#fff',
      fontFamily: "'Inter', sans-serif",
      overflow: activeTab === 'home' ? 'hidden' : 'auto',
      perspective: '1400px',
    }}>
      <LoadingBar loading={loading} key={`lb-${loadingKey}`} />
      <Navbar activeTab={activeTab} onTabChange={handleNavigate} />
      <PageTransition tabKey={activeTab}>
        {renderSection()}
      </PageTransition>
    </div>
  );
}

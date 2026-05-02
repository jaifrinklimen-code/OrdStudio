import { useState, useCallback, useRef } from 'react';
import { Navbar } from './components/Navbar';
import { Dashboard } from './components/Dashboard';
import { DesignStudio } from './components/DesignStudio';
import { AIAssistant } from './components/AIAssistant';
import { ContentGenerator } from './components/ContentGenerator';
import { SmartSearch } from './components/SmartSearch';
import { StickerLab } from './components/StickerLab';
import { PageTransition } from './components/PageTransition';
import { LoadingBar } from './components/LoadingBar';
import { SplashScreen } from './components/SplashScreen';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [activeTab, setActiveTab] = useState('home');
  const [loadingKey, setLoadingKey] = useState(0);
  const [loading, setLoading] = useState(false);
  const pendingTab = useRef<string | null>(null);

  const handleNavigate = useCallback((tab: string) => {
    if (tab === activeTab) return;
    pendingTab.current = tab;
    setLoading(false);
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

  const handleEnterStudio = useCallback(() => {
    setShowSplash(false);
  }, []);

  const renderSection = () => {
    switch (activeTab) {
      case 'design':    return <DesignStudio />;
      case 'assistant': return <AIAssistant />;
      case 'generator': return <ContentGenerator />;
      case 'search':    return <SmartSearch />;
      case 'stickers':  return <StickerLab />;
      default:          return <Dashboard onNavigate={handleNavigate} />;
    }
  };

  return (
    <div style={{
      width: '100%', height: '100vh',
      backgroundColor: '#090909', color: '#fff',
      fontFamily: "'Inter', sans-serif",
      overflow: activeTab === 'home' ? 'hidden' : 'auto',
    }}>
      {/* Cinematic splash intro */}
      {showSplash && <SplashScreen onEnter={handleEnterStudio} />}

      {/* Main app (rendered behind splash, snaps into view after entry) */}
      {!showSplash && (
        <>
          <LoadingBar loading={loading} key={`lb-${loadingKey}`} />
          <Navbar activeTab={activeTab} onTabChange={handleNavigate} />
          <PageTransition tabKey={activeTab}>
            {renderSection()}
          </PageTransition>
        </>
      )}
    </div>
  );
}

import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { DesignStudio } from './components/DesignStudio';
import { AIAssistant } from './components/AIAssistant';
import { ContentGenerator } from './components/ContentGenerator';
import { SmartSearch } from './components/SmartSearch';
import { StickerLab } from './components/StickerLab';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  const renderSection = () => {
    switch (activeTab) {
      case 'design': return <DesignStudio />;
      case 'assistant': return <AIAssistant />;
      case 'generator': return <ContentGenerator />;
      case 'search': return <SmartSearch />;
      case 'stickers': return <StickerLab />;
      default: return <Hero onNavigate={setActiveTab} />;
    }
  };

  return (
    <div style={{
      width: '100%',
      height: '100vh',
      backgroundColor: '#000',
      color: '#fff',
      fontFamily: "'Inter', sans-serif",
      overflow: activeTab === 'home' ? 'hidden' : 'auto',
    }}>
      <Navbar activeTab={activeTab} onTabChange={setActiveTab} />
      {renderSection()}
    </div>
  );
}

import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Dashboard } from './components/Dashboard';
import { DesignStudio } from './components/DesignStudio';
import { AIAssistant } from './components/AIAssistant';
import { ContentGenerator } from './components/ContentGenerator';
import { SmartSearch } from './components/SmartSearch';
import { StickerLab } from './components/StickerLab';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard onNavigate={setActiveTab} />;
      case 'design':
        return <DesignStudio />;
      case 'assistant':
        return <AIAssistant />;
      case 'generator':
        return <ContentGenerator />;
      case 'search':
        return <SmartSearch />;
      case 'stickers':
        return <StickerLab />;
      default:
        return <Dashboard onNavigate={setActiveTab} />;
    }
  };

  return (
    <div className="size-full flex relative overflow-hidden bg-gray-50">
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
      {renderContent()}
    </div>
  );
}

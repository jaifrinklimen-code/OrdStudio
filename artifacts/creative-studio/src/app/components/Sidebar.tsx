import { Home, Palette, MessageSquare, FileText, Search, Sticker, Crown, Settings } from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function Sidebar({ activeTab, onTabChange }: SidebarProps) {
  const menuItems = [
    { id: 'dashboard', icon: Home, label: 'Dashboard' },
    { id: 'design', icon: Palette, label: 'Design Studio' },
    { id: 'assistant', icon: MessageSquare, label: 'AI Assistant' },
    { id: 'generator', icon: FileText, label: 'Content Generator' },
    { id: 'search', icon: Search, label: 'Smart Search' },
    { id: 'stickers', icon: Sticker, label: 'Sticker Lab' },
  ];

  return (
    <div className="w-64 backdrop-blur-xl bg-white/70 border-r border-gray-200/50 flex flex-col h-screen relative z-10 shadow-xl">
      <div className="p-6 border-b border-gray-200/50">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          Ord-SevenEight
        </h1>
        <p className="text-sm text-gray-600 mt-1">AI Creative Hub</p>
      </div>

      <nav className="flex-1 p-4 space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                isActive
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                  : 'text-gray-700 hover:bg-white/50 hover:backdrop-blur-lg border border-transparent'
              }`}
            >
              <Icon size={20} />
              <span className="font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>

      <div className="p-4 border-t border-gray-200/50 space-y-2">
        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 text-white hover:shadow-xl hover:scale-105 transition-all">
          <Crown size={20} />
          <span className="font-medium">Upgrade to Pro</span>
        </button>
        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-gray-700 hover:bg-white/50 hover:backdrop-blur-lg transition-all border border-transparent">
          <Settings size={20} />
          <span className="font-medium">Settings</span>
        </button>
      </div>
    </div>
  );
}

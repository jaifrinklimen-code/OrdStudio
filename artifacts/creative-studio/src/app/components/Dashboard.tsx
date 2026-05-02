import { TrendingUp, Zap, Star, Clock } from 'lucide-react';

interface DashboardProps {
  onNavigate: (tab: string) => void;
}

export function Dashboard({ onNavigate }: DashboardProps) {
  const stats = [
    { label: 'Projects Created', value: '0', icon: Star, color: 'purple' },
    { label: 'AI Generations', value: '0', icon: Zap, color: 'pink' },
    { label: 'Templates Used', value: '0', icon: TrendingUp, color: 'blue' },
    { label: 'Hours Saved', value: '0', icon: Clock, color: 'green' },
  ];

  const quickActions = [
    { id: 'design', title: 'Create Design', desc: 'Start with templates', gradient: 'from-purple-500 to-purple-700' },
    { id: 'generator', title: 'Generate Content', desc: 'Essays, articles & more', gradient: 'from-pink-500 to-pink-700' },
    { id: 'stickers', title: 'Make Stickers', desc: 'AI-powered creation', gradient: 'from-blue-500 to-blue-700' },
    { id: 'assistant', title: 'Ask AI Assistant', desc: 'Get instant help', gradient: 'from-green-500 to-green-700' },
  ];

  return (
    <div className="flex-1 overflow-auto relative z-10">
      <div className="max-w-7xl mx-auto p-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Welcome back!</h2>
          <p className="text-gray-600 mt-2">Your creative workspace is ready. What will you create today?</p>
        </div>

        <div className="grid grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="backdrop-blur-xl bg-white/70 rounded-2xl p-6 border border-gray-200/50 shadow-xl hover:shadow-2xl hover:bg-white/90 transition-all hover:scale-105">
                <div className="flex items-center justify-between mb-2">
                  <Icon className="text-purple-600" size={24} />
                </div>
                <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
              </div>
            );
          })}
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-4">
            {quickActions.map((action) => (
              <button
                key={action.id}
                onClick={() => onNavigate(action.id)}
                className={`backdrop-blur-xl bg-white/70 border border-gray-200/50 text-gray-900 rounded-2xl p-6 text-left hover:shadow-2xl hover:bg-white/90 transition-all transform hover:-translate-y-1 hover:scale-105`}
              >
                <h4 className="text-xl font-bold mb-1">{action.title}</h4>
                <p className="text-gray-600">{action.desc}</p>
              </button>
            ))}
          </div>
        </div>

        <div className="backdrop-blur-xl bg-white/70 rounded-2xl p-8 border border-gray-200/50 shadow-2xl">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Unlock Premium Features</h3>
              <p className="text-gray-700 mb-4">Get exclusive templates, faster AI generation, and ad-free experience</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-gray-700">
                  <div className="w-5 h-5 rounded-full bg-purple-600 flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span>500+ Premium Templates</span>
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <div className="w-5 h-5 rounded-full bg-purple-600 flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span>Unlimited AI Generations</span>
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <div className="w-5 h-5 rounded-full bg-purple-600 flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span>Priority Support</span>
                </li>
              </ul>
              <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-medium hover:shadow-xl hover:scale-105 transition-all">
                Upgrade Now - $9.99/month
              </button>
            </div>
            <div className="text-6xl">✨</div>
          </div>
        </div>
      </div>
    </div>
  );
}

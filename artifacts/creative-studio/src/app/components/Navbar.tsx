import { FadeIn } from './FadeIn';

interface NavbarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'design', label: 'Design' },
  { id: 'generator', label: 'Create' },
  { id: 'search', label: 'Search' },
  { id: 'stickers', label: 'Sticker Lab' },
];

export function Navbar({ activeTab, onTabChange }: NavbarProps) {
  return (
    <FadeIn delay={0} duration={600} className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 lg:px-16 pt-6">
      <div className="liquid-glass rounded-xl px-4 py-2 flex items-center justify-between">
        <button
          onClick={() => onTabChange('home')}
          className="text-2xl font-semibold tracking-tight text-white"
        >
          VEX
        </button>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => onTabChange(link.id)}
              className={`text-sm transition-colors duration-200 ${
                activeTab === link.id ? 'text-white' : 'text-gray-400 hover:text-gray-300'
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <button
          onClick={() => onTabChange('assistant')}
          className="bg-white text-black px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors duration-200"
        >
          Start a Chat
        </button>
      </div>
    </FadeIn>
  );
}

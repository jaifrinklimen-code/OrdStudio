import { FadeIn } from './FadeIn';

interface NavbarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const navLinks = [
  { id: 'home',      label: 'Home'       },
  { id: 'design',    label: 'Design'     },
  { id: 'generator', label: 'Create'     },
  { id: 'search',    label: 'Search'     },
  { id: 'stickers',  label: 'Sticker Lab'},
];

export function Navbar({ activeTab, onTabChange }: NavbarProps) {
  return (
    <FadeIn delay={0} duration={500}>
      <div style={{
        position: 'fixed', top: 0, left: 0, right: 0,
        zIndex: 50,
        padding: '1.25rem 2.5rem',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: 'rgba(9,9,9,0.85)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
      }}>
        {/* Logo */}
        <button
          onClick={() => onTabChange('home')}
          style={{
            fontSize: '1.1rem', fontWeight: 600, letterSpacing: '-0.02em',
            color: '#fff', background: 'none', border: 'none', cursor: 'pointer',
            fontFamily: 'inherit', padding: 0,
          }}
        >
          VEX
        </button>

        {/* Nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => onTabChange(link.id)}
              style={{
                padding: '0.45rem 0.875rem',
                borderRadius: '8px',
                fontSize: '0.8rem',
                fontWeight: activeTab === link.id ? 500 : 400,
                color: activeTab === link.id ? '#fff' : 'rgba(255,255,255,0.4)',
                background: activeTab === link.id ? 'rgba(255,255,255,0.07)' : 'transparent',
                border: 'none', cursor: 'pointer', fontFamily: 'inherit',
                transition: 'all 0.15s',
                letterSpacing: '-0.01em',
              }}
              onMouseEnter={e => { if (activeTab !== link.id) e.currentTarget.style.color = 'rgba(255,255,255,0.65)'; }}
              onMouseLeave={e => { if (activeTab !== link.id) e.currentTarget.style.color = 'rgba(255,255,255,0.4)'; }}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* CTA */}
        <button
          onClick={() => onTabChange('assistant')}
          style={{
            padding: '0.5rem 1.25rem',
            background: '#8b5cf6',
            color: '#fff', border: 'none', borderRadius: '8px',
            fontSize: '0.8rem', fontWeight: 500,
            cursor: 'pointer', fontFamily: 'inherit',
            letterSpacing: '-0.01em',
            transition: 'all 0.15s',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = '#7c3aed'; e.currentTarget.style.boxShadow = '0 0 20px rgba(139,92,246,0.4)'; }}
          onMouseLeave={e => { e.currentTarget.style.background = '#8b5cf6'; e.currentTarget.style.boxShadow = 'none'; }}
        >
          Start a Chat
        </button>
      </div>
    </FadeIn>
  );
}

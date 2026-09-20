import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '/' },
  {
    label: 'Features',
    children: [
      { label: 'AI Presentation Maker', href: '/features/ai-presentation-maker' },
      { label: 'AI Copywriting Assistant', href: '/features/ai-copywriting-assistant' },
      { label: 'AI Sticker Generator', href: '/features/ai-sticker-generator' },
      { label: 'Vector Editor', href: '/features/vector-editor' },
      { label: 'PPTX Export', href: '/features/pptx-export' },
      { label: 'SVG Export', href: '/features/svg-export' },
      { label: 'PDF Export', href: '/features/pdf-export' },
    ],
  },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const location = useLocation();

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="pub-header" role="banner">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[200] focus:bg-purple-600 focus:text-white focus:px-4 focus:py-2 focus:rounded-lg">
        Skip to main content
      </a>
      <div className="pub-header-inner">
        {/* Logo */}
        <Link to="/" className="pub-logo" aria-label="OrdStudio Home">
          <div className="pub-logo-icon">
            <svg width="26" height="26" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="hdr-g1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00f2fe" />
                  <stop offset="100%" stopColor="#4facfe" />
                </linearGradient>
                <linearGradient id="hdr-g2" x1="100%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#f355da" />
                  <stop offset="100%" stopColor="#7000ff" />
                </linearGradient>
                <linearGradient id="hdr-g3" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ff0844" />
                  <stop offset="100%" stopColor="#ffb199" />
                </linearGradient>
              </defs>
              <path d="M 50 20 C 33.4 20, 20 33.4, 20 50 C 20 58.3, 23.4 65.8, 28.8 71.2" stroke="url(#hdr-g1)" strokeWidth="9.5" strokeLinecap="round" />
              <path d="M 28.8 71.2 C 34.2 76.6, 41.7 80, 50 80 C 66.6 80, 80 66.6, 80 50 C 80 46.5, 79.4 43.1, 78.2 40.0" stroke="url(#hdr-g2)" strokeWidth="9.5" strokeLinecap="round" />
              <path d="M 78.2 40.0 C 74.8 31.2, 66.6 24.8, 56.8 21.2" stroke="url(#hdr-g3)" strokeWidth="9.5" strokeLinecap="round" />
              <path d="M 50 40 L 53 47 L 60 50 L 53 53 L 50 60 L 47 53 L 40 50 L 47 47 Z" fill="url(#hdr-g3)" />
            </svg>
          </div>
          <span className="pub-logo-text">OrdStudio</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="pub-nav-desktop" aria-label="Main navigation">
          <ul className="pub-nav-list">
            {navLinks.map((link) =>
              link.children ? (
                <li
                  key={link.label}
                  className="pub-nav-dropdown"
                  onMouseEnter={() => setFeaturesOpen(true)}
                  onMouseLeave={() => setFeaturesOpen(false)}
                >
                  <button
                    className="pub-nav-link"
                    aria-expanded={featuresOpen}
                    aria-haspopup="true"
                    onClick={() => setFeaturesOpen(!featuresOpen)}
                  >
                    {link.label}
                    <ChevronDown size={14} className={`transition-transform duration-200 ${featuresOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {featuresOpen && (
                    <div className="pub-dropdown-menu" role="menu">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          to={child.href}
                          className={`pub-dropdown-item ${isActive(child.href) ? 'active' : ''}`}
                          role="menuitem"
                          onClick={() => setFeaturesOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
              ) : (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className={`pub-nav-link ${isActive(link.href) ? 'active' : ''}`}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            )}
          </ul>
        </nav>

        {/* CTA */}
        <div className="pub-header-actions">
          <Link to="/login" className="pub-header-cta">
            Launch Studio
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="pub-mobile-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <nav className="pub-mobile-menu" aria-label="Mobile navigation">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.label} className="pub-mobile-group">
                <span className="pub-mobile-group-label">{link.label}</span>
                {link.children.map((child) => (
                  <Link
                    key={child.href}
                    to={child.href}
                    className="pub-mobile-link sub"
                    onClick={() => setMobileOpen(false)}
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            ) : (
              <Link
                key={link.label}
                to={link.href}
                className={`pub-mobile-link ${isActive(link.href) ? 'active' : ''}`}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            )
          )}
          <Link
            to="/login"
            className="pub-mobile-cta"
            onClick={() => setMobileOpen(false)}
          >
            Launch Studio
          </Link>
        </nav>
      )}
    </header>
  );
}

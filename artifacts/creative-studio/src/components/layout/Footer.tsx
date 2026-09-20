import { Link } from 'react-router-dom';

const footerLinks = {
  product: [
    { label: 'AI Presentation Maker', href: '/features/ai-presentation-maker' },
    { label: 'AI Copywriting Assistant', href: '/features/ai-copywriting-assistant' },
    { label: 'AI Sticker Generator', href: '/features/ai-sticker-generator' },
    { label: 'Vector Editor', href: '/features/vector-editor' },
    { label: 'PPTX Export', href: '/features/pptx-export' },
    { label: 'PDF Export', href: '/features/pdf-export' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms of Service', href: '/terms-of-service' },
    { label: 'Cookie Policy', href: '/cookie-policy' },
    { label: 'Disclaimer', href: '/disclaimer' },
  ],
};

const socialLinks = [
  {
    label: 'Twitter / X',
    href: 'https://twitter.com/ordstudio',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/company/ordstudio',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: 'https://youtube.com/@ordstudio',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    href: 'https://github.com/ordstudio',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pub-footer" role="contentinfo">
      <div className="pub-footer-inner">
        {/* Top Section */}
        <div className="pub-footer-grid">
          {/* Brand Column */}
          <div className="pub-footer-brand">
            <Link to="/" className="pub-logo" aria-label="OrdStudio Home">
              <div className="pub-logo-icon">
                <svg width="24" height="24" viewBox="0 0 100 100" fill="none">
                  <defs>
                    <linearGradient id="ftr-g1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#00f2fe" />
                      <stop offset="100%" stopColor="#4facfe" />
                    </linearGradient>
                    <linearGradient id="ftr-g2" x1="100%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#f355da" />
                      <stop offset="100%" stopColor="#7000ff" />
                    </linearGradient>
                    <linearGradient id="ftr-g3" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#ff0844" />
                      <stop offset="100%" stopColor="#ffb199" />
                    </linearGradient>
                  </defs>
                  <path d="M 50 20 C 33.4 20, 20 33.4, 20 50 C 20 58.3, 23.4 65.8, 28.8 71.2" stroke="url(#ftr-g1)" strokeWidth="9.5" strokeLinecap="round" />
                  <path d="M 28.8 71.2 C 34.2 76.6, 41.7 80, 50 80 C 66.6 80, 80 66.6, 80 50 C 80 46.5, 79.4 43.1, 78.2 40.0" stroke="url(#ftr-g2)" strokeWidth="9.5" strokeLinecap="round" />
                  <path d="M 78.2 40.0 C 74.8 31.2, 66.6 24.8, 56.8 21.2" stroke="url(#ftr-g3)" strokeWidth="9.5" strokeLinecap="round" />
                  <path d="M 50 40 L 53 47 L 60 50 L 53 53 L 50 60 L 47 53 L 40 50 L 47 47 Z" fill="url(#ftr-g3)" />
                </svg>
              </div>
              <span className="pub-logo-text">OrdStudio</span>
            </Link>
            <p className="pub-footer-desc">
              AI-powered graphic design and presentation platform. Create stunning visuals, presentations, and content in minutes with the power of artificial intelligence.
            </p>
            <div className="pub-social-links">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pub-social-link"
                  aria-label={`Follow OrdStudio on ${social.label}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div className="pub-footer-col">
            <h3 className="pub-footer-heading">Product</h3>
            <ul className="pub-footer-links">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="pub-footer-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="pub-footer-col">
            <h3 className="pub-footer-heading">Company</h3>
            <ul className="pub-footer-links">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="pub-footer-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div className="pub-footer-col">
            <h3 className="pub-footer-heading">Legal</h3>
            <ul className="pub-footer-links">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="pub-footer-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pub-footer-bottom">
          <p className="pub-footer-copyright">
            © 2024–{currentYear} OrdStudio. All rights reserved.
          </p>
          <p className="pub-footer-tagline">
            Designed with AI. Built for creators.
          </p>
        </div>
      </div>
    </footer>
  );
}

import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://ordstudio.com/',
      },
      ...items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 2,
        name: item.label,
        ...(item.href ? { item: `https://ordstudio.com${item.href}` } : {}),
      })),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <nav aria-label="Breadcrumb" className="pub-breadcrumb">
        <ol className="flex items-center gap-1.5 text-sm">
          <li>
            <Link
              to="/"
              className="text-white/40 hover:text-white/70 transition-colors flex items-center gap-1"
              aria-label="Home"
            >
              <Home size={14} />
            </Link>
          </li>
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-1.5">
              <ChevronRight size={12} className="text-white/20" />
              {item.href && index < items.length - 1 ? (
                <Link
                  to={item.href}
                  className="text-white/40 hover:text-white/70 transition-colors text-[13px]"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-white/70 text-[13px] font-medium">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}

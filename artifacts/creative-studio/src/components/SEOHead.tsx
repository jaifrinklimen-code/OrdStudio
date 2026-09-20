import { useEffect } from 'react';

interface SEOHeadProps {
  title: string;
  description: string;
  canonicalPath?: string;
  ogImage?: string;
  ogType?: string;
  article?: {
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
    section?: string;
    tags?: string[];
  };
}

const BASE_URL = 'https://ordstudio.com';

function setMeta(name: string, content: string, isProperty = false) {
  const attr = isProperty ? 'property' : 'name';
  let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.content = content;
}

function setCanonical(href: string) {
  let el = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement('link');
    el.rel = 'canonical';
    document.head.appendChild(el);
  }
  el.href = href;
}

export function SEOHead({
  title,
  description,
  canonicalPath = '/',
  ogImage = `${BASE_URL}/assets/og-preview.png`,
  ogType = 'website',
  article,
}: SEOHeadProps) {
  useEffect(() => {
    const fullTitle = title.includes('OrdStudio') ? title : `${title} | OrdStudio`;
    document.title = fullTitle;

    setMeta('description', description);
    setMeta('robots', 'index, follow');

    // Open Graph
    setMeta('og:title', fullTitle, true);
    setMeta('og:description', description, true);
    setMeta('og:type', ogType, true);
    setMeta('og:url', `${BASE_URL}${canonicalPath}`, true);
    setMeta('og:image', ogImage, true);
    setMeta('og:site_name', 'OrdStudio', true);

    // Twitter Card
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', fullTitle);
    setMeta('twitter:description', description);
    setMeta('twitter:image', ogImage);

    // Canonical
    setCanonical(`${BASE_URL}${canonicalPath}`);

    // Article-specific meta
    if (article) {
      if (article.publishedTime) setMeta('article:published_time', article.publishedTime, true);
      if (article.modifiedTime) setMeta('article:modified_time', article.modifiedTime, true);
      if (article.author) setMeta('article:author', article.author, true);
      if (article.section) setMeta('article:section', article.section, true);
      article.tags?.forEach((tag, i) => {
        setMeta(`article:tag:${i}`, tag, true);
      });
    }
  }, [title, description, canonicalPath, ogImage, ogType, article]);

  return null;
}

import { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '@/components/SEOHead';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { blogArticles } from '@/data/blogData';
import { Search } from 'lucide-react';
import { secureFetch } from '@/lib/secureFetch';

const categories = [
  'All',
  'AI Design',
  'Graphic Design',
  'Presentation Design',
  'Branding',
  'Productivity',
  'AI Tools',
  'Marketing Design',
];

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [articles, setArticles] = useState(blogArticles);

  useEffect(() => {
    secureFetch('/api/blog')
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (data && Array.isArray(data)) {
          setArticles(data);
        }
      })
      .catch(() => {});
  }, []);

  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      const matchesCategory =
        activeCategory === 'All' || article.category === activeCategory;
      const matchesSearch =
        searchQuery.trim() === '' ||
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, activeCategory, articles]);

  return (
    <>
      <SEOHead
        title="OrdStudio Blog — AI Design Tips, Tutorials & Insights"
        description="Explore expert articles on AI-powered graphic design, presentation tips, branding strategies, and productivity hacks. Stay ahead with OrdStudio's design blog."
        canonicalPath="/blog"
      />

      <Breadcrumb items={[{ label: 'Blog' }]} />

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-transparent pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            OrdStudio{' '}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Blog
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            Expert insights on AI-powered design, branding strategies,
            presentation tips, and the latest trends shaping the creative
            industry.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-xl mx-auto mb-12">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search articles..."
              className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
            />
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === category
                    ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/25'
                    : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Article Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        {filteredArticles.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">
              No articles found matching your criteria.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('All');
              }}
              className="mt-4 text-purple-400 hover:text-purple-300 underline transition-colors"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <Link
                key={article.slug}
                to={`/blog/${article.slug}`}
                className="group flex flex-col rounded-2xl overflow-hidden bg-white/[0.03] border border-white/[0.06] hover:border-purple-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-purple-500/10"
              >
                {/* Card Thumbnail Image */}
                <div className="h-48 relative overflow-hidden bg-neutral-900">
                  {article.imageUrl ? (
                    <img 
                      src={article.imageUrl} 
                      alt={article.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full" style={{ background: article.heroGradient }} />
                  )}
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />
                  <div className="absolute top-4 left-4 z-10">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-white/20 text-white backdrop-blur-sm">
                      {article.category}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="flex flex-col flex-1 p-6">
                  <h2 className="text-lg font-bold text-white mb-2 line-clamp-2 group-hover:text-purple-300 transition-colors duration-200">
                    {article.title}
                  </h2>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3 flex-1">
                    {article.description}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t border-white/5">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center text-[10px] font-bold text-white">
                        OS
                      </div>
                      <span className="text-gray-400">{article.author}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>
                        {new Date(article.publishedDate).toLocaleDateString(
                          'en-US',
                          {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric',
                          }
                        )}
                      </span>
                      <span className="text-gray-600">•</span>
                      <span>{article.readingTime}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </>
  );
}

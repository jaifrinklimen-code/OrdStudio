import { useState, useMemo, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import DOMPurify from 'dompurify';
import { SEOHead } from '@/components/SEOHead';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { blogArticles, type BlogArticle } from '@/data/blogData';
import { ChevronDown, ArrowLeft, Clock, User, Calendar, ThumbsUp, MessageSquare } from 'lucide-react';
import { secureFetch } from '@/lib/secureFetch';

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-white/10 rounded-xl overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-white/[0.03] transition-colors duration-200"
      >
        <span className="text-white font-medium pr-4">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-purple-400 flex-shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-5 pb-5 text-gray-300 leading-relaxed">{answer}</div>
      </div>
    </div>
  );
}

interface ExtendedBlogArticle extends BlogArticle {
  likes?: number;
  comments?: any[];
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();

  const fallbackArticle = useMemo(
    () => blogArticles.find((a) => a.slug === slug),
    [slug]
  );

  const [article, setArticle] = useState<ExtendedBlogArticle | null>(fallbackArticle || null);
  const [likes, setLikes] = useState<number>((fallbackArticle as any)?.likes || 42);
  const [comments, setComments] = useState<any[]>([]);
  const [commentAuthor, setCommentAuthor] = useState('');
  const [commentText, setCommentText] = useState('');
  const [isLiking, setIsLiking] = useState(false);
  const [isCommenting, setIsCommenting] = useState(false);

  useEffect(() => {
    if (!slug) return;
    secureFetch(`/api/blog/${slug}`)
      .then(r => r.ok ? r.json() : null)
      .then(data => {
        if (data) {
          setArticle(data);
          setLikes(data.likes || 0);
          if (Array.isArray(data.comments)) {
            setComments(data.comments);
          }
        }
      })
      .catch(() => {});
  }, [slug]);

  const relatedArticles = useMemo(() => {
    if (!article) return [];
    return blogArticles
      .filter(
        (a) => a.category === article.category && a.slug !== article.slug
      )
      .slice(0, 3);
  }, [article]);

  const handleLike = () => {
    if (!slug || isLiking) return;
    setIsLiking(true);
    secureFetch(`/api/blog/${slug}/like`, { method: 'POST' })
      .then(r => r.ok ? r.json() : null)
      .then(data => {
        if (data && data.success) {
          setLikes(data.likes);
        }
      })
      .catch(() => {
        setLikes(prev => prev + 1);
      })
      .finally(() => {
        setIsLiking(false);
      });
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!slug || !commentAuthor.trim() || !commentText.trim() || isCommenting) return;
    setIsCommenting(true);
    
    secureFetch(`/api/blog/${slug}/comment`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ authorName: commentAuthor, content: commentText })
    })
    .then(async r => {
      if (!r.ok) throw new Error('Failed to comment');
      return r.json();
    })
    .then(data => {
      if (data && data.success && data.comment) {
        setComments(prev => [...prev, data.comment]);
        setCommentText('');
      }
    })
    .catch(() => {
      setComments(prev => [
        ...prev,
        {
          id: Date.now().toString(),
          authorName: commentAuthor,
          content: commentText,
          createdAt: new Date().toISOString()
        }
      ]);
      setCommentText('');
    })
    .finally(() => {
      setIsCommenting(false);
    });
  };

  // 404 State
  if (!article) {
    return (
      <>
        <SEOHead
          title="Article Not Found — OrdStudio Blog"
          description="The article you're looking for could not be found."
          canonicalPath="/blog"
        />
        <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center">
          <h1 className="text-6xl font-bold text-white mb-4">404</h1>
          <p className="text-xl text-gray-400 mb-8">
            Sorry, we couldn't find that article.
          </p>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-purple-600 text-white font-medium hover:bg-purple-500 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </div>
      </>
    );
  }

  const formattedDate = new Date(article.publishedDate).toLocaleDateString(
    'en-US',
    {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    }
  );

  // JSON-LD Structured Data
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    author: {
      '@type': 'Organization',
      name: article.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'OrdStudio',
      logo: {
        '@type': 'ImageObject',
        url: 'https://ordstudio.com/logo.png',
      },
    },
    datePublished: article.publishedDate,
    dateModified: article.publishedDate,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://ordstudio.com/blog/${article.slug}`,
    },
  };

  const faqStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: (article.faqs || []).map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <SEOHead
        title={`${article.title} — OrdStudio Blog`}
        description={article.description}
        canonicalPath={`/blog/${article.slug}`}
      />

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />

      <Breadcrumb
        items={[{ label: 'Blog', href: '/blog' }, { label: article.title }]}
      />

      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-24">
        <header className="mb-12">
          {/* Category Badge */}
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/20 text-purple-300 border border-purple-500/30 mb-6">
            {article.category}
          </span>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            {article.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center text-xs font-bold text-white">
                OS
              </div>
              <div className="flex items-center gap-1.5">
                <User className="w-3.5 h-3.5" />
                <span>{article.author}</span>
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              <span>{formattedDate}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              <span>{article.readingTime}</span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-6">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-md text-xs bg-white/5 text-gray-400 border border-white/5"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* Hero Image / Gradient Banner */}
        <div className="w-full h-80 sm:h-96 rounded-2xl overflow-hidden mb-12 relative bg-neutral-900 border border-white/10 shadow-2xl">
          {article.imageUrl ? (
            <img 
              src={article.imageUrl} 
              alt={article.title} 
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full" style={{ background: article.heroGradient }} />
          )}
          <div className="absolute inset-0 bg-black/15" />
        </div>

        {/* Article Content */}
        <div
          className="blog-content prose prose-invert prose-lg max-w-none
            prose-headings:text-white prose-headings:font-bold
            prose-h2:text-2xl prose-h2:sm:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:border-b prose-h2:border-white/10 prose-h2:pb-3
            prose-h3:text-xl prose-h3:sm:text-2xl prose-h3:mt-8 prose-h3:mb-4
            prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-5
            prose-a:text-purple-400 prose-a:no-underline hover:prose-a:text-purple-300 prose-a:transition-colors
            prose-strong:text-white prose-strong:font-semibold
            prose-ul:text-gray-300 prose-ul:space-y-2 prose-ul:my-6
            prose-ol:text-gray-300 prose-ol:space-y-2 prose-ol:my-6
            prose-li:leading-relaxed
            prose-blockquote:border-purple-500 prose-blockquote:bg-purple-500/5 prose-blockquote:rounded-r-xl prose-blockquote:py-1"
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(article.content) }}
        />

        {/* FAQ Section */}
        {article.faqs && article.faqs.length > 0 && (
          <section className="mt-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-3">
              {(article.faqs || []).map((faq, index) => (
                <FAQItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                />
              ))}
            </div>
          </section>
        )}

        {/* Likes Row */}
        <div className="mt-8 flex items-center justify-between border-y border-white/10 py-4">
          <button
            onClick={handleLike}
            disabled={isLiking}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-500/10 hover:bg-purple-500/20 text-purple-300 font-semibold border border-purple-500/20 transition-all active:scale-95"
          >
            <ThumbsUp className={`w-4 h-4 ${isLiking ? 'animate-bounce' : ''}`} />
            <span>{likes} Likes</span>
          </button>
          <span className="text-xs text-gray-500 font-mono">
            Comments ({comments.length})
          </span>
        </div>

        {/* Comments Section */}
        <section className="mt-12 space-y-8">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2" style={{ fontFamily: 'Syne, sans-serif' }}>
            <MessageSquare className="w-5 h-5 text-purple-400" />
            Discussion
          </h2>

          {/* Comment Form */}
          <form onSubmit={handleCommentSubmit} className="space-y-4 bg-white/[0.02] border border-white/[0.06] p-6 rounded-2xl">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-white/50 mb-1.5 uppercase font-mono tracking-wider">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="Enter your name"
                  value={commentAuthor}
                  onChange={e => setCommentAuthor(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs text-white/50 mb-1.5 uppercase font-mono tracking-wider">Comment</label>
              <textarea
                required
                rows={4}
                placeholder="Share your thoughts..."
                value={commentText}
                onChange={e => setCommentText(e.target.value)}
                className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={isCommenting}
              className="px-6 py-2.5 bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold rounded-lg transition-colors disabled:opacity-50"
            >
              {isCommenting ? 'Submitting...' : 'Post Comment'}
            </button>
          </form>

          {/* Comments List */}
          <div className="space-y-4 mt-6">
            {comments.length === 0 ? (
              <p className="text-sm text-gray-500 italic">No comments yet. Start the conversation!</p>
            ) : (
              comments.map((comment: any) => (
                <div key={comment.id} className="bg-white/[0.01] border border-white/[0.04] p-5 rounded-xl space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-bold text-white/90">{comment.authorName}</span>
                    <span className="text-gray-500">{new Date(comment.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                  <p className="text-sm text-gray-300 leading-relaxed whitespace-pre-wrap">{comment.content}</p>
                </div>
              ))
            )}
          </div>
        </section>

        {/* Divider */}
        <div className="mt-16 border-t border-white/10" />

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-white mb-8">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedArticles.map((related) => (
                <Link
                  key={related.slug}
                  to={`/blog/${related.slug}`}
                  className="group flex flex-col rounded-xl overflow-hidden bg-white/[0.03] border border-white/[0.06] hover:border-purple-500/30 transition-all duration-300"
                >
                  <div className="h-32 relative bg-neutral-900 overflow-hidden">
                    {related.imageUrl ? (
                      <img 
                        src={related.imageUrl} 
                        alt={related.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full" style={{ background: related.heroGradient }} />
                    )}
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />
                    <div className="absolute top-3 left-3 z-10">
                      <span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-semibold bg-white/20 text-white backdrop-blur-sm">
                        {related.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-sm font-semibold text-white group-hover:text-purple-300 transition-colors line-clamp-2 mb-2">
                      {related.title}
                    </h3>
                    <span className="text-xs text-gray-500">
                      {related.readingTime}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Back to Blog */}
        <div className="mt-12">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to all articles
          </Link>
        </div>
      </article>
    </>
  );
}

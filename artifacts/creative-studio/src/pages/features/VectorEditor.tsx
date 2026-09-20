import { SEOHead } from '@/components/SEOHead';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Sparkles, ArrowRight, ChevronDown, CheckCircle, Lightbulb } from 'lucide-react';

export default function VectorEditor() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const benefits = [
  {
    "title": "Infinite Grid Canvas",
    "description": "Work freely on a high-performance vector canvas that supports panning, zooming, and multiple artboards for complex document layouts."
  },
  {
    "title": "Custom Shape Utilities",
    "description": "Create circles, rectangles, polygons, custom stars, and complex bezier paths. Modify corner radiuses, stroke weights, and fill colors interactively."
  },
  {
    "title": "Robust Layer Stack",
    "description": "Organize your elements with our drag-and-drop layer hierarchy. Lock layers, toggle visibility, rename items, and group vectors for efficient layout management."
  },
  {
    "title": "Real-Time Layout Alignment",
    "description": "Use smart snapping and alignment grids to center items, distribute spaces evenly, and align elements to the canvas borders."
  }
];
  const useCases = [
  {
    "title": "SaaS Pitch Slide Layouts",
    "description": "Draft individual slides from scratch. Position headlines, body copy, and AI-generated sticker assets precisely using our layout coordinates."
  },
  {
    "title": "Logo & Graphic Branding",
    "description": "Design scalable logo marks and vector icons that look clean on favicon sizes and high-resolution billboard print layouts."
  },
  {
    "title": "Social Media Banner Design",
    "description": "Create banners, thumbnail grids, and promotional post templates with exact pixel dimensions matching LinkedIn, YouTube, or Facebook standards."
  },
  {
    "title": "Infographic Drafting",
    "description": "Build flowchart visuals, marketing diagrams, and timelines by combining custom vector connectors, text layers, and layout blocks."
  }
];
  const faqs = [
  {
    "question": "Is the vector editor beginner-friendly?",
    "answer": "Yes. While it provides professional capabilities like layers and custom paths, our interface is clean and intuitive, utilizing standard drag-and-drop interactions."
  },
  {
    "question": "Can I import existing SVG vector files?",
    "answer": "Yes, you can drag and drop external SVG files onto the canvas to parse and edit their individual paths and colors."
  },
  {
    "question": "What keyboard shortcuts are supported?",
    "answer": "We support standard keys: Ctrl+Z/Y (Undo/Redo), Del/Backspace (Delete), Shift+Resize (Proportional Scale), and Arrow keys for pixel nudging."
  },
  {
    "question": "Does it support text styling and fonts?",
    "answer": "Yes, you can choose from a library of Google Web Fonts, adjust sizes, letter-spacing, line-height, text alignment, and colors."
  },
  {
    "question": "Can I export my designs back to SVG?",
    "answer": "Yes. You can export the entire canvas or selected elements as scalable vector SVG files, or download them as high-quality PNGs or PDFs."
  }
];
  const stats = [
  {
    "label": "Rendering Speed",
    "value": "60 FPS Canvas"
  },
  {
    "label": "Snapping Accuracy",
    "value": "1px Alignment Grid"
  },
  {
    "label": "Available Fonts",
    "value": "50+ Google Fonts"
  },
  {
    "label": "Import Formats",
    "value": "SVG, PNG, JPG"
  }
];

  return (
    <div className="bg-[#090909] text-white">
      <SEOHead
        title="Vector Editor — Professional Design Canvas | OrdStudio"
        description="Design professional graphics with OrdStudio Vector Editor. Drag-and-drop canvas, shape tools, text editing, layers, and export to multiple formats."
        canonicalPath="/features/vector-editor"
      />

      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-600/5 to-transparent pointer-events-none" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <Breadcrumb items={[{ label: 'Features', href: '/features' }, { label: 'Vector Editor' }]} />
          <div className="mt-8 max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-purple-500/15 border border-purple-500/25 rounded-full px-4 py-1.5 text-xs font-semibold text-purple-300 uppercase tracking-wider mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              ✦ Design Tools
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Syne, sans-serif' }}>
              Vector Editor — Professional Design Canvas
            </h1>
            <p className="text-lg text-white/50 leading-relaxed mb-8 max-w-2xl">
              Design professional graphics with OrdStudio Vector Editor. Drag-and-drop canvas, shape tools, text editing, layers, and export to multiple formats.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/login"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold px-8 py-3.5 rounded-xl hover:shadow-[0_8px_30px_rgba(124,58,237,0.4)] transition-all"
              >
                Try It Free
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 border border-white/10 text-white/70 font-semibold px-8 py-3.5 rounded-xl hover:bg-white/5 transition-all"
              >
                Read Guide
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 border-t border-white/[0.05]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>
              Core Benefits
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto">
              Discover why creators and businesses prefer OrdStudio's visual creation toolkit.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((b) => (
              <div key={b.title} className="feature-benefit-card">
                <h3 className="text-lg font-bold text-white mb-2">{b.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Description & Stats */}
      <section className="py-16 border-t border-white/[0.05]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6" style={{ fontFamily: 'Syne, sans-serif' }}>
                How It Empowers Your Workflow
              </h2>
              <div className="text-white/50 leading-relaxed space-y-4">
                <p>A great design tool must offer precision. OrdStudio Vector Editor combines absolute coordinate positioning with generative AI. Instead of struggling with pen tools, you can ask the AI to generate layouts or write copy, and then edit the resulting elements vectors manually.</p> <p>Our canvas uses hardware-accelerated rendering, allowing you to manipulate hundreds of vector points, groups, and text blocks smoothly without lag.</p> <p>With clean grid snapping, custom gradient fills, and an organized layer list, you can maintain full creative control over your assets and build layouts that follow professional design specifications.</p>
              </div>
            </div>
            <div className="bg-[#111111] border border-white/[0.07] rounded-2xl p-8">
              <h3 className="text-lg font-bold text-white mb-6" style={{ fontFamily: 'Syne, sans-serif' }}>Performance Statistics</h3>
              <div className="space-y-6">
                {stats.map((s, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center shrink-0">
                      <CheckCircle className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <div className="text-sm text-white/40">{s.label}</div>
                      <div className="text-white font-semibold">{s.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 border-t border-white/[0.05]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>
              Common Use Cases
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto">
              Explore how different industries use our creative platform.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {useCases.map((u, i) => (
              <div key={i} className="feature-usecase-card">
                <h3 className="text-lg font-bold text-white mb-2">{u.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{u.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 border-t border-white/[0.05] max-w-3xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>
            Frequently Asked Questions
          </h2>
          <p className="text-white/50 text-sm">
            Everything you need to know about our features.
          </p>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="faq-question"
                aria-expanded={openFaq === index}
              >
                <span>{faq.question}</span>
                <ChevronDown className={`w-5 h-5 transition-transform \${openFaq === index ? 'rotate-180' : ''}`} />
              </button>
              {openFaq === index && (
                <div className="faq-answer">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 border-t border-white/[0.05]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-purple-600/20 to-purple-800/10 border border-purple-500/20 rounded-3xl p-12 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>
              Start Creating Today
            </h2>
            <p className="text-white/60 mb-8 max-w-xl mx-auto text-sm">
              Save hours of design work. Create presentations, write copywriting, and design vector graphics with OrdStudio.
            </p>
            <Link to="/login" className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold px-8 py-3 rounded-xl hover:shadow-[0_8px_30px_rgba(124,58,237,0.4)] transition-all">
              Get Started Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
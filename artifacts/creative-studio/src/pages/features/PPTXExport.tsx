import { SEOHead } from '@/components/SEOHead';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Sparkles, ArrowRight, ChevronDown, CheckCircle, Lightbulb } from 'lucide-react';

export default function PPTXExport() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const benefits = [
  {
    "title": "Native PowerPoint Formats",
    "description": "Our exporter structures slides using standard PPTX schemas. This ensures your text blocks, shapes, and lists remain fully editable vector elements in PowerPoint."
  },
  {
    "title": "Precise Layout Retention",
    "description": "Say goodbye to displaced text or broken grids. Spacing, padding, alignment, and coordinate points are mapped accurately to match PowerPoint slide ratios."
  },
  {
    "title": "Vector Shape Preservation",
    "description": "Any vector graphics, custom shapes, and icons created on our canvas are exported as PowerPoint shapes rather than raster images, allowing offline color changes."
  },
  {
    "title": "Font Mapping Heuristics",
    "description": "We map system and web fonts to standard equivalents in Microsoft Office, ensuring text renders correctly on other devices without font mismatches."
  }
];
  const useCases = [
  {
    "title": "Offline Client Presentations",
    "description": "Deliver pitches without worrying about internet connectivity. Download your AI-generated presentation and present directly inside Microsoft PowerPoint."
  },
  {
    "title": "Collaborative Corporate Editing",
    "description": "Draft presentation slides in OrdStudio, then export as a PPTX file and share with team members who prefer to finalize edits in PowerPoint or Google Slides."
  },
  {
    "title": "Custom Enterprise Templates",
    "description": "Generate structural presentation layouts using OrdStudio, then export and save them as company-wide .potx templates."
  },
  {
    "title": "Multi-Platform Deliveries",
    "description": "Prepare slides once and export them for compatibility with Apple Keynote, Google Slides, or Microsoft Office suites."
  }
];
  const faqs = [
  {
    "question": "Will my slides look exactly the same in PowerPoint?",
    "answer": "Yes. We map positioning coordinates, color variables, and typography parameters to PPTX specifications, guaranteeing layout fidelity."
  },
  {
    "question": "Can I edit the text inside PowerPoint after exporting?",
    "answer": "Yes. All text remains fully editable. Slides do not get converted to flat images; they remain as standard paragraph text blocks."
  },
  {
    "question": "Are animations and transitions exported?",
    "answer": "Basic slide sequences are supported. Complex css animations are simplified to PowerPoint standard transitions (like Fade or Wipe) for compatibility."
  },
  {
    "question": "Can I export custom sticker graphics?",
    "answer": "Yes, sticker graphics are embedded as transparent PNG images inside the PPTX slide, allowing you to scale and position them."
  },
  {
    "question": "Does the PPTX exporter support widescreen format?",
    "answer": "Yes. Presentations are created and exported in the modern standard 16:9 widescreen format, which fits all projectors and screens."
  }
];
  const stats = [
  {
    "label": "Slide Ratio",
    "value": "16:9 Widescreen"
  },
  {
    "label": "Export Fidelity",
    "value": "99.5% Layout Matching"
  },
  {
    "label": "Export Speed",
    "value": "Under 3 seconds"
  },
  {
    "label": "Editability",
    "value": "100% Vector & Text"
  }
];

  return (
    <div className="bg-[#090909] text-white">
      <SEOHead
        title="PPTX Export — Download Editable PowerPoint Files | OrdStudio"
        description="Export your OrdStudio presentations as fully editable PPTX PowerPoint files. Preserve formatting, animations, and styles for seamless offline editing."
        canonicalPath="/features/pptx-export"
      />

      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-600/5 to-transparent pointer-events-none" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <Breadcrumb items={[{ label: 'Features', href: '/features' }, { label: 'P P T X Export' }]} />
          <div className="mt-8 max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-purple-500/15 border border-purple-500/25 rounded-full px-4 py-1.5 text-xs font-semibold text-purple-300 uppercase tracking-wider mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              ✦ Export
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Syne, sans-serif' }}>
              PPTX Export — Download Editable PowerPoint Files
            </h1>
            <p className="text-lg text-white/50 leading-relaxed mb-8 max-w-2xl">
              Export your OrdStudio presentations as fully editable PPTX PowerPoint files. Preserve formatting, animations, and styles for seamless offline editing.
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
                <p>For business professionals, compatibility is non-negotiable. While OrdStudio web editor is powerful, many corporate environments dictate the use of offline presentation tools like PowerPoint. Our PPTX Export feature bridges this gap.</p> <p>Our exporting system performs structural analysis of your slides. It converts custom HTML/CSS elements into native Office Open XML schemas. This means text blocks, lists, headers, shapes, and background fills are editable vector nodes, not just flat screenshots.</p> <p>This provides you with the convenience of AI presentation generation on the web combined with the safety of offline delivery formats.</p>
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
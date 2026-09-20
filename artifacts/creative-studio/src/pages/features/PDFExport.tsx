import { SEOHead } from '@/components/SEOHead';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Sparkles, ArrowRight, ChevronDown, CheckCircle, Lightbulb } from 'lucide-react';

export default function PDFExport() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const benefits = [
  {
    "title": "Vector Document Structure",
    "description": "Our PDF exporter maintains text layers and vector paths as searchable, selectable elements rather than converting slides to flat images, keeping files clean."
  },
  {
    "title": "High-Resolution CMYK Prep",
    "description": "Download documents with correct color definitions and pixel densities suitable for offset or digital commercial printing (300 DPI support)."
  },
  {
    "title": "Multi-Page Layout Support",
    "description": "Export presentations or documents with correct page sequences, page numbers, page boundaries, and aspect ratios."
  },
  {
    "title": "Optimized File Size compression",
    "description": "We compress embedded images and downsample high-res assets appropriately, delivering a compact file size that is easy to email while keeping text crisp."
  }
];
  const useCases = [
  {
    "title": "Business Reports & Whitepapers",
    "description": "Compile corporate overviews, marketing analyses, and product specifications into neat multi-page documents ready to email to clients."
  },
  {
    "title": "Marketing Flyers & Brochures",
    "description": "Design single or multi-page brochures with high-resolution imagery and clear contact blocks, ready for physical print distribution."
  },
  {
    "title": "Ebooks & Guides Publishing",
    "description": "Publish custom-designed digital books, tutorials, and presentation guides that look consistent across all e-readers and tablets."
  },
  {
    "title": "Invoice & Pricing Templates",
    "description": "Create and export clean billing layouts, price sheets, and corporate spreadsheets in PDF format."
  }
];
  const faqs = [
  {
    "question": "Are the PDFs exported in high resolution?",
    "answer": "Yes. Text and vector shapes are kept at vector resolution (infinite DPI). Images are exported at print-quality 300 DPI for sharp prints."
  },
  {
    "question": "Is the text inside the exported PDF selectable?",
    "answer": "Yes, the text remains selectable and searchable. You can highlight, copy, and search for words within the exported document."
  },
  {
    "question": "Can I add links and interactive elements?",
    "answer": "Basic hyperlinks are supported and clickable in the PDF. Rich interactive media (like videos) are simplified to fallback images."
  },
  {
    "question": "How does multi-page export work?",
    "answer": "Every slide in your presentation becomes a page in the PDF document. They are structured in sequence matching your editor panel."
  },
  {
    "question": "Is there a limit on file size or page count?",
    "answer": "Free plans support exporting up to 10-page documents. Pro and Enterprise accounts enjoy unlimited page counts and high-fidelity print presets."
  }
];
  const stats = [
  {
    "label": "Print Standard",
    "value": "High-Fidelity 300 DPI"
  },
  {
    "label": "Text Selection",
    "value": "100% Searchable & Copiable"
  },
  {
    "label": "Color Space",
    "value": "CMYK Print Presets"
  },
  {
    "label": "Export Duration",
    "value": "Under 4 seconds"
  }
];

  return (
    <div className="bg-[#090909] text-white">
      <SEOHead
        title="PDF Export — Print-Ready Document Export | OrdStudio"
        description="Export high-quality, print-ready PDF documents from OrdStudio. Perfect for presentations, reports, flyers, and professional documents."
        canonicalPath="/features/pdf-export"
      />

      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-600/5 to-transparent pointer-events-none" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <Breadcrumb items={[{ label: 'Features', href: '/features' }, { label: 'P D F Export' }]} />
          <div className="mt-8 max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-purple-500/15 border border-purple-500/25 rounded-full px-4 py-1.5 text-xs font-semibold text-purple-300 uppercase tracking-wider mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              ✦ Export
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Syne, sans-serif' }}>
              PDF Export — Print-Ready Document Export
            </h1>
            <p className="text-lg text-white/50 leading-relaxed mb-8 max-w-2xl">
              Export high-quality, print-ready PDF documents from OrdStudio. Perfect for presentations, reports, flyers, and professional documents.
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
                <p>PDF remains the universal standard for business document sharing. Whether you are sending a pitch deck to a client or printing a brochure for a trade show, you need to know that your layout will render exactly as intended. OrdStudio PDF Export makes this happen.</p> <p>By outputting searchable, vector-based PDF files, we ensure that your text is sharp, your graphics scale cleanly, and your file sizes remain small enough for easy attachment. It guarantees a professional presentation, on screen and in print.</p>
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
import { SEOHead } from '@/components/SEOHead';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Sparkles, ArrowRight, ChevronDown, CheckCircle, Lightbulb } from 'lucide-react';

export default function AICopywritingAssistant() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const benefits = [
  {
    "title": "Multiple Tone Guidelines",
    "description": "Generate content tailored to your brand voice. Select from professional, friendly, persuasive, empathetic, educational, or creative tones to match your specific target audience."
  },
  {
    "title": "Flexible Copy Formats",
    "description": "Create headlines, bulleted outlines, paragraph summaries, blog drafts, product descriptions, or email pitches instantly. Choose the exact format needed for your project."
  },
  {
    "title": "Intelligent Word Length Controls",
    "description": "Control the output length precisely. Request short, punchy 50-word summaries or long-form 1000-word essay drafts. The AI respects word bounds while keeping logic tight."
  },
  {
    "title": "Seamless Editor Integration",
    "description": "Insert generated copy directly into your vector text layers or presentation slides. Modify and refine the copy within your main workspace layout."
  }
];
  const useCases = [
  {
    "title": "Blog Writing & Content Marketing",
    "description": "Break writer block. Input a simple article outline and generate detailed introductory paragraphs, detailed body arguments, and summary conclusions."
  },
  {
    "title": "Email Marketing Campaigns",
    "description": "Write click-worthy subject lines and persuasive email body copy that encourages conversions. Fine-tune templates for newsletters, product launches, or cold outreach."
  },
  {
    "title": "Social Media Captions",
    "description": "Generate short, engaging captions for LinkedIn posts, Instagram stories, or Twitter themes. Incorporate target hashtags and call-to-actions naturally."
  },
  {
    "title": "SaaS Product Descriptions",
    "description": "Explain software features in terms of user benefits. Generate scannable feature-benefit grids that clarify complex technological systems."
  }
];
  const faqs = [
  {
    "question": "What languages does the AI Writer support?",
    "answer": "The AI Copywriting Assistant supports content generation in over 30 languages, including English, Spanish, French, German, Japanese, and Mandarin, ensuring global reach."
  },
  {
    "question": "Is the generated text unique and plagiarism-free?",
    "answer": "Yes, the AI generates content dynamically using probabilistic language models, which means the text is original. However, we always recommend reviewing and adding your unique brand perspective before publishing."
  },
  {
    "question": "Can I write full-length articles with this tool?",
    "answer": "Yes. You can select \"Long Form\" length settings or generate sections (outlines, introductions, body paragraphs) individually and compile them inside your document editor."
  },
  {
    "question": "How do I set the tone of my copy?",
    "answer": "We offer preset tones (Professional, Persuasive, Creative, Empathic, Casual) in the settings, or you can type custom instructions in the prompt box like \"Write in the style of an enthusiastic startup founder.\""
  },
  {
    "question": "Are there usage limits on content generation?",
    "answer": "There are no strict limits on content generation. You can enjoy unlimited copywriting generations, access to advanced language models, and direct integration with our slides editor."
  }
];
  const stats = [
  {
    "label": "Supported Tones",
    "value": "8 Preset Voices"
  },
  {
    "label": "Generation Speed",
    "value": "Under 2 seconds"
  },
  {
    "label": "Average Time Saved",
    "value": "80% faster drafting"
  },
  {
    "label": "Supported Languages",
    "value": "30+ Languages"
  }
];

  return (
    <div className="bg-[#090909] text-white">
      <SEOHead
        title="AI Copywriting Assistant — Generate Professional Content Instantly | OrdStudio"
        description="Write compelling copy, articles, headlines, and more with OrdStudio AI Copywriting Assistant. Choose from multiple tones, formats, and lengths."
        canonicalPath="/features/ai-copywriting-assistant"
      />

      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-600/5 to-transparent pointer-events-none" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <Breadcrumb items={[{ label: 'Features', href: '/features' }, { label: 'A I Copywriting Assistant' }]} />
          <div className="mt-8 max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-purple-500/15 border border-purple-500/25 rounded-full px-4 py-1.5 text-xs font-semibold text-purple-300 uppercase tracking-wider mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              ✦ Smart Writing
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Syne, sans-serif' }}>
              AI Copywriting Assistant — Generate Professional Content Instantly
            </h1>
            <p className="text-lg text-white/50 leading-relaxed mb-8 max-w-2xl">
              Write compelling copy, articles, headlines, and more with OrdStudio AI Copywriting Assistant. Choose from multiple tones, formats, and lengths.
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
                <p>Writing professional copy can take hours of drafting, proofreading, and rewriting. OrdStudio AI Copywriting Assistant collapses this workflow into seconds. Powered by advanced language models, the assistant understands context, layout intent, and industry-specific phrasing to write content that resonates.</p> <p>The writing assistant is fully integrated with our vector editor and presentation dashboards. When you are editing a text layer, you can call the AI to rephrase, expand, summarize, or translate the text on the fly. This eliminates the need to jump between external writing applications and your canvas.</p> <p>By offering customized control over tone and length, OrdStudio ensures your copy fits your design layout perfectly, eliminating awkward spacing issues caused by overly long paragraphs.</p>
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
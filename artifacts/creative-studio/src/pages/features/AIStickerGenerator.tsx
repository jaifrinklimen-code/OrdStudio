import { SEOHead } from '@/components/SEOHead';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Sparkles, ArrowRight, ChevronDown, CheckCircle, Lightbulb } from 'lucide-react';

export default function AIStickerGenerator() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const benefits = [
  {
    "title": "Rich Visual Styles",
    "description": "Generate stickers in kawaii (cute Japanese), flat vector, modern 3D clay, retro pixel art, clean minimalist, or classic cartoon designs to match any branding theme."
  },
  {
    "title": "Isolated White Borders",
    "description": "Our custom model automatically appends a clean white die-cut contour border around generated items, making them ready to print or overlay on backgrounds."
  },
  {
    "title": "Instant Alpha Transparency",
    "description": "Download generated stickers with a transparent background (PNG format), allowing you to drop them into presentations, websites, or messaging clients."
  },
  {
    "title": "Fine-Tuned Prompt Heuristics",
    "description": "Our system optimizes your prompts in the background, appending artistic parameters to ensure the output is a centered, clean sticker graphic."
  }
];
  const useCases = [
  {
    "title": "Social Media Assets & Gifs",
    "description": "Create unique stickers to use on Instagram stories, TikTok videos, or custom Telegram/WhatsApp sticker packs to enhance community engagement."
  },
  {
    "title": "Custom Merchandise Design",
    "description": "Design actual physical merchandise. Print generated stickers on water bottles, laptops, notebooks, or phone cases with high-resolution file exports."
  },
  {
    "title": "UI Gamification Icons",
    "description": "Incorporate playful, cartoonish, or 3D icons into your mobile app or website interface to make the user experience feel friendly and alive."
  },
  {
    "title": "Presentation Visuals",
    "description": "Ditch boring stock images. Generate a custom sticker (like a cute astronaut or a 3D lightbulb) to illustrate points on your slides."
  }
];
  const faqs = [
  {
    "question": "What styles of stickers can I generate?",
    "answer": "You can select from six predefined styles: Kawaii, Flat, 3D Clay, Pixel Art, Minimalist, and Cartoon. You can also write custom styles in the prompt box."
  },
  {
    "question": "Do the stickers have transparent backgrounds?",
    "answer": "Yes! All stickers are generated with a transparent background and a clean white die-cut border, exported in high-quality PNG format."
  },
  {
    "question": "Can I print these stickers?",
    "answer": "Yes, the stickers are generated at high resolution, which makes them suitable for physical printing on sticker paper, laptop skins, or custom merchandise."
  },
  {
    "question": "Is commercial use allowed?",
    "answer": "Yes. Stickers generated on OrdStudio are owned by you, and you are free to use them in commercial client work, products, or marketing campaigns."
  },
  {
    "question": "Can I upload a reference image?",
    "answer": "Currently, the sticker generator creates visuals based on text prompts. Image-to-image styling capabilities will be added in our upcoming version."
  }
];
  const stats = [
  {
    "label": "Preset Styles",
    "value": "6 Artistic Styles"
  },
  {
    "label": "Resolution",
    "value": "1024 x 1024 px"
  },
  {
    "label": "Export Format",
    "value": "Transparent PNG"
  },
  {
    "label": "Generation Duration",
    "value": "4 seconds"
  }
];

  return (
    <div className="bg-[#090909] text-white">
      <SEOHead
        title="AI Sticker Generator — Create Custom Stickers with AI | OrdStudio"
        description="Generate unique, custom stickers in any style with OrdStudio AI Sticker Generator. Choose from kawaii, flat, 3D, pixel art, minimalist, and cartoon styles."
        canonicalPath="/features/ai-sticker-generator"
      />

      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-600/5 to-transparent pointer-events-none" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <Breadcrumb items={[{ label: 'Features', href: '/features' }, { label: 'A I Sticker Generator' }]} />
          <div className="mt-8 max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-purple-500/15 border border-purple-500/25 rounded-full px-4 py-1.5 text-xs font-semibold text-purple-300 uppercase tracking-wider mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              ✦ Creative AI
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Syne, sans-serif' }}>
              AI Sticker Generator — Create Custom Stickers with AI
            </h1>
            <p className="text-lg text-white/50 leading-relaxed mb-8 max-w-2xl">
              Generate unique, custom stickers in any style with OrdStudio AI Sticker Generator. Choose from kawaii, flat, 3D, pixel art, minimalist, and cartoon styles.
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
                <p>Visual storytelling is essential in modern marketing, but stock vector icons often look generic. OrdStudio AI Sticker Generator allows you to create custom, whimsical, or professional sticker graphics that perfectly fit your brand personality.</p> <p>By using fine-tuned generative diffusion models, the generator places your subject (whether a corporate laptop, an organic coffee cup, or an abstract rocket) in a centered composition with solid shapes and clean linework. This makes them versatile design elements.</p> <p>Once generated, you can save stickers directly to your personal library, drag them onto the vector editing canvas, or export them to share with your team.</p>
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
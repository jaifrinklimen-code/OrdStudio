import { SEOHead } from '@/components/SEOHead';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Link } from 'react-router-dom';
import { Sparkles, Layout, Palette, Download, Lightbulb, Users, BarChart3, Monitor, ChevronDown, ArrowRight, Zap, Clock, Target, Layers } from 'lucide-react';
import { useState } from 'react';

const benefits = [
  {
    icon: Sparkles,
    title: 'AI-Generated Slide Content',
    description: 'Simply describe your topic and OrdStudio generates complete slide decks with headlines, body text, speaker notes, and data visualizations — all crafted by advanced language models trained on thousands of award-winning presentations.',
  },
  {
    icon: Layout,
    title: 'Professional Templates',
    description: 'Choose from over 50 professionally designed presentation templates spanning corporate, creative, educational, and startup categories. Every template is fully customizable and built with modern design principles.',
  },
  {
    icon: Palette,
    title: 'Smart Layouts & Design',
    description: 'Our AI automatically selects optimal layouts for your content type — whether it is a comparison slide, a timeline, a data chart, or an image showcase. Consistent typography, spacing, and color palettes are applied across every slide.',
  },
  {
    icon: Download,
    title: 'One-Click PPTX Export',
    description: 'Export your finished presentation as a fully editable PowerPoint file with a single click. Every element, animation, and style is preserved so you can continue editing in Microsoft PowerPoint or Google Slides.',
  },
];

const steps = [
  {
    step: '01',
    title: 'Describe Your Topic',
    description: 'Enter your presentation topic, target audience, and desired tone. You can provide as much or as little detail as you want — a simple sentence like "Q3 sales review for the board" or a detailed outline with specific data points and talking points.',
  },
  {
    step: '02',
    title: 'AI Generates Your Deck',
    description: 'OrdStudio analyzes your input and generates a complete presentation with optimized slide structure, compelling headlines, supporting content, and suggested visuals. The AI considers best practices for slide design, information hierarchy, and audience engagement.',
  },
  {
    step: '03',
    title: 'Customize & Export',
    description: 'Review your generated presentation in the visual editor. Adjust colors, swap templates, edit text, add your brand assets, and rearrange slides. When you are satisfied, export as PPTX, PDF, or share directly via a link.',
  },
];

const useCases = [
  {
    icon: Target,
    title: 'Business Pitches & Investor Decks',
    description: 'Create persuasive pitch decks that communicate your value proposition clearly. OrdStudio structures your narrative with problem-solution frameworks, market opportunity slides, financial projections, and team introductions — all following the formats that top VCs and investors expect to see.',
  },
  {
    icon: Lightbulb,
    title: 'Educational Lectures & Training',
    description: 'Transform complex topics into engaging lecture slides. The AI breaks down information into digestible chunks, adds relevant diagrams, creates quiz slides, and structures content following proven pedagogical frameworks. Perfect for teachers, professors, and corporate trainers.',
  },
  {
    icon: BarChart3,
    title: 'Marketing Reports & Analytics',
    description: 'Turn raw data into compelling visual stories. OrdStudio generates data visualization slides, trend analysis summaries, campaign performance overviews, and actionable insight slides that make your marketing metrics understandable to any stakeholder.',
  },
  {
    icon: Users,
    title: 'Team Meetings & Project Updates',
    description: 'Stop spending hours on weekly update decks. Provide your project status, milestones, blockers, and next steps — OrdStudio formats everything into clean, scannable slides that keep meetings focused and productive.',
  },
];

const faqs = [
  {
    question: 'How does the AI know what content to put on each slide?',
    answer: 'OrdStudio uses advanced language models trained on thousands of professional presentations across industries. When you provide your topic and context, the AI analyzes the subject matter, determines the optimal number of slides, selects appropriate layouts for different content types (data, comparisons, timelines, etc.), and generates relevant text. It follows presentation best practices like the 6x6 rule, visual hierarchy, and storytelling frameworks to ensure each slide communicates effectively.',
  },
  {
    question: 'Can I edit the AI-generated presentation after it is created?',
    answer: 'Absolutely. Every element of your generated presentation is fully editable in the OrdStudio visual editor. You can modify text, change colors and fonts, swap templates, rearrange slides, add or remove content, insert your own images and logos, and adjust layouts. The AI generation is just the starting point — you have complete creative control over the final result.',
  },
  {
    question: 'What export formats are supported?',
    answer: 'OrdStudio supports multiple export formats to fit your workflow. You can export as PPTX (fully editable in PowerPoint and Google Slides), PDF (print-ready with high resolution), PNG (individual slide images), and SVG (vector format for maximum quality). You can also share presentations via a direct link for online viewing.',
  },
  {
    question: 'Is there a limit to how many presentations I can create?',
    answer: 'There are no strict limits on presentation creation. You can enjoy unlimited presentation generation, access to all templates, priority AI processing, and advanced export options.',
  },
  {
    question: 'Can I use my own brand colors, fonts, and logos?',
    answer: 'Yes. OrdStudio allows you to set up a brand kit with your company colors, fonts, and logo. Once configured, every AI-generated presentation will automatically use your brand assets, ensuring consistency across all your materials. You can create multiple brand kits for different products, departments, or clients.',
  },
];

export default function AIPresentationMaker() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div>
      <SEOHead
        title="AI Presentation Maker — Create Stunning Slides in Minutes | OrdStudio"
        description="Create professional presentations in minutes with OrdStudio AI Presentation Maker. Generate beautiful slides, smart layouts, and compelling content automatically."
        canonicalPath="/features/ai-presentation-maker"
      />

      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-600/5 to-transparent pointer-events-none" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <Breadcrumb items={[{ label: 'Features', href: '/features' }, { label: 'AI Presentation Maker' }]} />
          <div className="mt-8 max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-purple-500/15 border border-purple-500/25 rounded-full px-4 py-1.5 text-xs font-semibold text-purple-300 uppercase tracking-wider mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              ✦ AI-Powered
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Syne, sans-serif' }}>
              Create Stunning Presentations in Minutes with AI
            </h1>
            <p className="text-lg text-white/50 leading-relaxed mb-8 max-w-2xl">
              Stop spending hours designing slides. OrdStudio AI Presentation Maker generates complete, professional slide decks from a simple text prompt — beautiful layouts, compelling content, and polished visuals, all ready in minutes.
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
                to="/features"
                className="inline-flex items-center gap-2 border border-white/10 text-white/70 font-semibold px-8 py-3.5 rounded-xl hover:bg-white/5 transition-all"
              >
                View All Features
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>
              Everything You Need for Perfect Presentations
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto text-lg">
              From initial concept to final export, OrdStudio handles every aspect of presentation creation with intelligent automation and professional design standards.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-[#111111] border border-white/[0.07] rounded-2xl p-8 hover:border-purple-500/30 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-5 group-hover:bg-purple-500/20 transition-colors">
                  <benefit.icon className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-white/50 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>
              Three Steps to a Professional Presentation
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto text-lg">
              Creating a polished presentation has never been easier. Follow these three simple steps and go from idea to finished deck in under five minutes.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div key={step.step} className="relative">
                <div className="text-6xl font-bold text-purple-500/10 mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-white/50 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Explanation */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6" style={{ fontFamily: 'Syne, sans-serif' }}>
                AI That Understands Presentation Design
              </h2>
              <p className="text-white/50 leading-relaxed mb-6">
                Most AI tools simply dump text onto slides. OrdStudio is different. Our presentation engine understands the principles of visual communication — information hierarchy, cognitive load management, color theory, and audience engagement patterns. Every slide is designed not just to look good, but to communicate effectively.
              </p>
              <p className="text-white/50 leading-relaxed mb-6">
                The AI analyzes your content and automatically determines the best layout for each slide. Data-heavy content gets clean chart layouts. Comparison points get side-by-side formats. Key takeaways get bold, memorable designs. Transitions between slides follow a logical narrative flow that keeps your audience engaged from start to finish.
              </p>
              <p className="text-white/50 leading-relaxed">
                Whether you are presenting to a boardroom of executives, a classroom of students, or a conference of industry peers, OrdStudio adapts its design approach to match your audience and context, ensuring maximum impact every time.
              </p>
            </div>
            <div className="bg-[#111111] border border-white/[0.07] rounded-2xl p-8">
              <div className="space-y-6">
                {[
                  { icon: Zap, label: 'Average creation time', value: 'Under 3 minutes' },
                  { icon: Layers, label: 'Template library', value: '50+ professional designs' },
                  { icon: Clock, label: 'Time saved per deck', value: '4+ hours' },
                  { icon: Monitor, label: 'Export formats', value: 'PPTX, PDF, PNG, SVG' },
                ].map((stat) => (
                  <div key={stat.label} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center shrink-0">
                      <stat.icon className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <div className="text-sm text-white/40">{stat.label}</div>
                      <div className="text-white font-semibold">{stat.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>
              Built for Every Presentation Scenario
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto text-lg">
              From high-stakes investor meetings to daily team updates, OrdStudio helps you create the right presentation for any occasion.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {useCases.map((useCase) => (
              <div
                key={useCase.title}
                className="bg-[#111111] border border-white/[0.07] rounded-2xl p-8 hover:border-purple-500/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4">
                  <useCase.icon className="w-5 h-5 text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{useCase.title}</h3>
                <p className="text-white/50 leading-relaxed">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>
              Frequently Asked Questions
            </h2>
            <p className="text-white/50 text-lg">
              Everything you need to know about AI presentation generation in OrdStudio.
            </p>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-[#111111] border border-white/[0.07] rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                  aria-expanded={openFaq === index}
                >
                  <span className="text-white font-medium pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-white/40 shrink-0 transition-transform ${openFaq === index ? 'rotate-180' : ''}`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6 pt-0">
                    <p className="text-white/50 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-purple-600/20 to-purple-800/10 border border-purple-500/20 rounded-3xl p-12 sm:p-16 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6" style={{ fontFamily: 'Syne, sans-serif' }}>
              Ready to Create Your Next Presentation?
            </h2>
            <p className="text-white/60 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of professionals who save hours every week with OrdStudio AI Presentation Maker. Start creating beautiful, effective presentations in minutes — no design skills required.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/login"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold px-8 py-3.5 rounded-xl hover:shadow-[0_8px_30px_rgba(124,58,237,0.4)] transition-all"
              >
                Start Creating Free
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 border border-white/10 text-white/70 font-semibold px-8 py-3.5 rounded-xl hover:bg-white/5 transition-all"
              >
                Read Guide
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-white/40">
              <span>✓ No credit card required</span>
              <span>✓ Unlimited presentations</span>
              <span>✓ Export to PPTX, PDF & more</span>
            </div>
          </div>
        </div>
      </section>

      {/* Related Features */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-8" style={{ fontFamily: 'Syne, sans-serif' }}>
            Explore Related Features
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            <Link to="/features/pptx-export" className="bg-[#111111] border border-white/[0.07] rounded-xl p-6 hover:border-purple-500/30 transition-colors group">
              <h3 className="text-white font-semibold mb-2 group-hover:text-purple-400 transition-colors">PPTX Export</h3>
              <p className="text-white/40 text-sm">Export editable PowerPoint files with all formatting preserved.</p>
            </Link>
            <Link to="/features/pdf-export" className="bg-[#111111] border border-white/[0.07] rounded-xl p-6 hover:border-purple-500/30 transition-colors group">
              <h3 className="text-white font-semibold mb-2 group-hover:text-purple-400 transition-colors">PDF Export</h3>
              <p className="text-white/40 text-sm">Generate print-ready PDF documents from your presentations.</p>
            </Link>
            <Link to="/features/ai-copywriting-assistant" className="bg-[#111111] border border-white/[0.07] rounded-xl p-6 hover:border-purple-500/30 transition-colors group">
              <h3 className="text-white font-semibold mb-2 group-hover:text-purple-400 transition-colors">AI Copywriting</h3>
              <p className="text-white/40 text-sm">Generate professional copy for slides and speaker notes.</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

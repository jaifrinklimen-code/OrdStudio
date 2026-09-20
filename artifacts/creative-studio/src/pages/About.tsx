import { useState, useEffect } from 'react';
import { SEOHead } from '@/components/SEOHead';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Link } from 'react-router-dom';
import { secureFetch } from '@/lib/secureFetch';
import {
  Sparkles,
  Eye,
  Shield,
  Accessibility,
  Wand2,
  Image,
  FileText,
  Presentation,
  Sticker,
  Palette,
  ArrowRight,
  Target,
  Lightbulb,
  Globe,
} from 'lucide-react';



const values = [
  {
    icon: Lightbulb,
    title: 'Innovation',
    description:
      "We push the boundaries of what AI can do for creative professionals. Every feature we ship is designed to unlock new possibilities that didn't exist before.",
  },
  {
    icon: Accessibility,
    title: 'Accessibility',
    description:
      "Great design should not be gated by technical skill or expensive software. OrdStudio lowers the barrier so anyone can create professional-quality work.",
  },
  {
    icon: Sparkles,
    title: 'Quality',
    description:
      'We obsess over output quality — from pixel-perfect templates to AI models fine-tuned for visual excellence. Mediocre results are never acceptable.',
  },
  {
    icon: Shield,
    title: 'Privacy',
    description:
      'Your creative work belongs to you. We employ end-to-end encryption, minimal data collection, and transparent policies to keep your projects secure.',
  },
];

const features = [
  { icon: Wand2, label: 'AI Image Generation', path: '/features/ai-image-generation' },
  { icon: Image, label: 'AI Photo Editor', path: '/features/ai-photo-editor' },
  { icon: FileText, label: 'AI Document Writer', path: '/features/ai-document-writer' },
  { icon: Presentation, label: 'AI Presentation Maker', path: '/features/ai-presentation-maker' },
  { icon: Sticker, label: 'AI Sticker Maker', path: '/features/ai-sticker-maker' },
  { icon: Palette, label: 'Template Library', path: '/features/template-library' },
];

export default function About() {
  const [stats, setStats] = useState({ templatesCount: 50, projectsCount: 0, stickersCount: 12 });

  useEffect(() => {
    secureFetch('/api/stats')
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (data && data.success) {
          setStats(data);
        }
      })
      .catch(() => {});
  }, []);

  return (
    <>
      <SEOHead
        title="About OrdStudio — AI Design Platform for Creators"
        description="Learn about OrdStudio, our mission to democratize design with AI, our story, and the team behind the platform."
        canonicalPath="/about"
      />

      <div className="min-h-screen bg-[#090909]">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse,rgba(139,92,246,0.12),transparent_70%)]" />
          </div>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-20">
            <Breadcrumb items={[{ label: 'About Us' }]} />
            <div className="text-center mt-16 max-w-3xl mx-auto relative z-10">
              <div className="inline-flex items-center gap-2 bg-[rgba(139,92,246,0.12)] border border-[rgba(139,92,246,0.25)] rounded-full px-4 py-1.5 text-xs font-semibold text-[#c4b5fd] uppercase tracking-wider mb-6">
                <Sparkles size={14} />
                About OrdStudio
              </div>
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
                style={{ fontFamily: 'Syne, sans-serif' }}
              >
                Empowering Creators with{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8b5cf6] to-[#a78bfa]">
                  Intelligent Design
                </span>
              </h1>
              <p className="text-white/50 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto">
                OrdStudio is an AI-powered creative platform that helps individuals, teams, and
                businesses transform ideas into polished visual content — faster and more
                intuitively than ever before.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 border-t border-[rgba(255,255,255,0.07)]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <h2
                  className="text-3xl sm:text-4xl font-bold text-white mb-6"
                  style={{ fontFamily: 'Syne, sans-serif' }}
                >
                  About OrdStudio
                </h2>
                <div className="space-y-4 text-white/60 leading-relaxed">
                  <p>
                    OrdStudio was created with a simple vision: to make professional design accessible to everyone, regardless of their experience. We noticed that students, developers, startups, educators, content creators, and small businesses often spend hours creating posters, presentations, certificates, social media graphics, and marketing materials—or pay expensive design services to do it. Our goal was to build an intelligent platform where creativity meets artificial intelligence, allowing anyone to transform an idea into a polished design within minutes. Instead of starting from a blank canvas, users can simply describe what they want, customise the result, and create high-quality visuals with ease.
                  </p>
                  <p>
                    At the heart of OrdStudio is a powerful AI-driven workflow that combines smart design assistance with an intuitive editing experience. Users can generate designs, edit layouts, enhance images, manage templates, and collaborate on creative projects—all from a single platform. As part of the Ordinance ecosystem, OrdStudio is continuously evolving with new features based on community feedback and emerging AI technologies. Our mission is not just to build another design tool, but to create a creative workspace that empowers people to bring their ideas to life faster, smarter, and without limits.
                  </p>
                </div>
              </div>
              <div className="relative group">
                {/* Glowing neon background elements */}
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-purple-600 to-cyan-500 opacity-20 blur-xl group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />
                <div className="absolute inset-0 rounded-2xl bg-[#0d0d12] border border-white/[0.08]" />
                
                {/* Main Content Area */}
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-white/[0.03] to-white/[0.01] flex flex-col justify-between p-8 sm:p-10 shadow-2xl">
                  {/* Decorative Neon Ring Backdrops */}
                  <div className="absolute -right-20 -top-20 w-64 h-64 bg-purple-500/10 rounded-full blur-[60px]" />
                  <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-[60px]" />
                  
                  {/* Top: Logo / Brand Badge */}
                  <div className="flex justify-between items-start z-10">
                    <div className="flex flex-col">
                      <span className="text-[10px] font-bold text-cyan-400 tracking-[0.2em] uppercase font-mono mb-1">DESIGN ENGINE</span>
                      <span className="text-white/40 text-xs font-mono">Ver. 2.6.0</span>
                    </div>
                    <div className="px-3 py-1 rounded-full text-[10px] font-bold bg-purple-500/10 text-purple-300 border border-purple-500/20 backdrop-blur-md">
                      EST. 2023
                    </div>
                  </div>

                  {/* Center: Glowing OS Monogram */}
                  <div className="text-center my-auto py-6 z-10 relative">
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-purple-500 to-cyan-400 opacity-20 blur-md animate-pulse" />
                    </div>
                    <h2 
                      className="text-7xl sm:text-8xl font-black tracking-tighter bg-gradient-to-tr from-purple-400 via-violet-300 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_10px_20px_rgba(124,58,237,0.3)] select-none"
                      style={{ fontFamily: 'Syne, sans-serif' }}
                    >
                      O·S
                    </h2>
                    <p className="text-white/50 text-xs font-mono tracking-wider mt-4">CHENNAI, TAMIL NADU</p>
                  </div>

                  {/* Bottom: Stats Panel with Dividers */}
                  <div className="grid grid-cols-3 gap-2 border-t border-white/[0.08] pt-6 z-10 text-center font-mono">
                    <div>
                      <div className="text-lg sm:text-xl font-black text-white leading-none">
                        1
                      </div>
                      <div className="text-[9px] text-white/40 uppercase tracking-widest mt-1.5">CREATORS</div>
                    </div>
                    <div className="border-x border-white/[0.08]">
                      <div className="text-lg sm:text-xl font-black text-white leading-none">
                        1
                      </div>
                      <div className="text-[9px] text-white/40 uppercase tracking-widest mt-1.5">COUNTRIES</div>
                    </div>
                    <div>
                      <div className="text-lg sm:text-xl font-black text-white leading-none">
                        {(stats.projectsCount + stats.stickersCount).toLocaleString()}
                      </div>
                      <div className="text-[9px] text-white/40 uppercase tracking-widest mt-1.5">DESIGNS</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 border-t border-[rgba(255,255,255,0.07)]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2
                className="text-3xl sm:text-4xl font-bold text-white mb-4"
                style={{ fontFamily: 'Syne, sans-serif' }}
              >
                Mission & Vision
              </h2>
              <p className="text-white/50 max-w-2xl mx-auto">
                Every decision we make is guided by two north-star ideas.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[#111111] border border-[rgba(255,255,255,0.07)] rounded-2xl p-8 sm:p-10">
                <div className="w-12 h-12 rounded-xl bg-[rgba(139,92,246,0.15)] flex items-center justify-center mb-6">
                  <Target size={24} className="text-[#8b5cf6]" />
                </div>
                <h3
                  className="text-xl font-bold text-white mb-3"
                  style={{ fontFamily: 'Syne, sans-serif' }}
                >
                  Our Mission
                </h3>
                <p className="text-white/60 leading-relaxed">
                  To democratize design by making AI-powered creative tools intuitive, affordable,
                  and available to everyone — regardless of technical skill, budget, or background.
                  We believe the ability to communicate visually is a fundamental skill, and the
                  tools to do so should be universally accessible.
                </p>
              </div>
              <div className="bg-[#111111] border border-[rgba(255,255,255,0.07)] rounded-2xl p-8 sm:p-10">
                <div className="w-12 h-12 rounded-xl bg-[rgba(139,92,246,0.15)] flex items-center justify-center mb-6">
                  <Eye size={24} className="text-[#a78bfa]" />
                </div>
                <h3
                  className="text-xl font-bold text-white mb-3"
                  style={{ fontFamily: 'Syne, sans-serif' }}
                >
                  Our Vision
                </h3>
                <p className="text-white/60 leading-relaxed">
                  A world where every person and organization can produce stunning visual content as
                  naturally as they write an email. We envision OrdStudio as the creative operating
                  system for the AI age — the single platform where ideas are imagined, designed,
                  refined, and shared.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What We Offer */}
        <section className="py-20 border-t border-[rgba(255,255,255,0.07)]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2
                className="text-3xl sm:text-4xl font-bold text-white mb-4"
                style={{ fontFamily: 'Syne, sans-serif' }}
              >
                What We Offer
              </h2>
              <p className="text-white/50 max-w-2xl mx-auto">
                A complete AI-powered creative suite designed to handle every stage of the design
                process.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {features.map((feature) => (
                <Link
                  key={feature.path}
                  to={feature.path}
                  className="group bg-[#111111] border border-[rgba(255,255,255,0.07)] rounded-xl p-5 flex items-center gap-4 hover:border-[rgba(139,92,246,0.3)] hover:bg-[#181818] transition-all duration-200"
                >
                  <div className="w-10 h-10 rounded-lg bg-[rgba(139,92,246,0.12)] flex items-center justify-center shrink-0">
                    <feature.icon size={20} className="text-[#a78bfa]" />
                  </div>
                  <span className="text-white/80 text-sm font-medium group-hover:text-white transition-colors" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    {feature.label}
                  </span>
                  <ArrowRight size={14} className="text-white/20 group-hover:text-[#8b5cf6] ml-auto transition-colors" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20 border-t border-[rgba(255,255,255,0.07)]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2
                className="text-3xl sm:text-4xl font-bold text-white mb-4"
                style={{ fontFamily: 'Syne, sans-serif' }}
              >
                Our Values
              </h2>
              <p className="text-white/50 max-w-2xl mx-auto">
                The principles that shape how we build, what we prioritize, and who we serve.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="bg-[#111111] border border-[rgba(255,255,255,0.07)] rounded-2xl p-6 text-center"
                >
                  <div className="w-12 h-12 rounded-xl bg-[rgba(139,92,246,0.12)] flex items-center justify-center mx-auto mb-4">
                    <value.icon size={22} className="text-[#8b5cf6]" />
                  </div>
                  <h3
                    className="text-lg font-semibold text-white mb-2"
                    style={{ fontFamily: 'Syne, sans-serif' }}
                  >
                    {value.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>



        {/* CTA Section */}
        <section className="py-20 border-t border-[rgba(255,255,255,0.07)]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-gradient-to-br from-[rgba(139,92,246,0.1)] to-[rgba(139,92,246,0.03)] border border-[rgba(139,92,246,0.15)] rounded-2xl p-10 sm:p-16">
              <h2
                className="text-3xl sm:text-4xl font-bold text-white mb-4"
                style={{ fontFamily: 'Syne, sans-serif' }}
              >
                Ready to Create Something Extraordinary?
              </h2>
              <p className="text-white/50 max-w-lg mx-auto mb-8 leading-relaxed">
                Join hundreds of thousands of creators who use OrdStudio to bring their ideas to
                life. Start for free — no credit card required.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/login"
                  className="inline-flex items-center gap-2 bg-[#8b5cf6] hover:bg-[#7c3aed] text-white font-semibold px-8 py-3 rounded-xl transition-colors"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  Get Started Free
                  <ArrowRight size={16} />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.1)] text-white font-semibold px-8 py-3 rounded-xl transition-colors"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

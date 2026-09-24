import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SEOHead } from '@/components/SEOHead';
import {
  Sparkles, Wand2, Presentation, Sticker, Palette, FileText,
  ArrowRight, ShieldCheck, Zap, Heart, CheckCircle2,
  RotateCw, ChevronRight, Terminal, Layers, Star, Activity
} from 'lucide-react';

interface SlideData {
  title: string;
  desc: string;
}

interface DemoItem {
  id: string;
  label: string;
  icon: React.ComponentType<any>;
  prompt: string;
  statusTexts: string[];
  result: {
    title?: string;
    subtitle?: string;
    slides?: SlideData[];
    imageUrl?: string;
    tags?: string[];
    subject?: string;
    body?: string[];
  };
}

import { secureFetch } from '@/lib/secureFetch';

export default function PublicHome() {
  const [stats, setStats] = useState({ templatesCount: 50, projectsCount: 0, stickersCount: 12, status: 'Operational' });
  const [showToast, setShowToast] = useState<boolean>(false);
  const [toastMsg, setToastMsg] = useState<string>('');

  useEffect(() => {
    secureFetch('/api/stats')
      .then(r => r.ok ? r.json() : null)
      .then(data => {
        if (data && data.success) {
          setStats({
            templatesCount: data.templatesCount,
            projectsCount: data.projectsCount,
            stickersCount: data.stickersCount,
            status: data.status
          });
        }
      })
      .catch(() => {});
  }, []);

  const triggerToast = (msg: string) => {
    setToastMsg(msg);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2500);
  };

  return (
    <>
      <SEOHead
        title="OrdStudio — Free AI Presentation & Vector Design Workspace"
        description="Build pitch decks, kawaii stickers, and persuasive copywriting instantly. Experience a free, 3D AI creative studio with native vector workspace support."
        canonicalPath="/"
      />

      {/* Floating Background Glow Orbs */}
      <div className="depth-orb depth-orb-violet" />
      <div className="depth-orb depth-orb-cyan" />

      <div className="relative overflow-hidden bg-[#09090c] text-white">
        
        {/* HERO SECTION */}
        <section className="relative pt-16 pb-12 sm:pt-20 sm:pb-16 lg:pt-24 lg:pb-16 border-b border-white/[0.03]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              
              {/* Hero Left Column */}
              <div className="lg:col-span-5 text-left space-y-6">
                <div className="text-xs font-mono tracking-widest text-purple-300/80 uppercase flex items-center gap-2">
                  IDEAS <ArrowRight size={10} className="text-purple-400/50" /> VISUALS <ArrowRight size={10} className="text-purple-400/50" /> IMPACT
                </div>
                
                <h1 className="text-5xl sm:text-6xl lg:text-[4.5rem] font-bold tracking-tight leading-[1.05]" style={{ fontFamily: 'Syne, sans-serif' }}>
                  <span className="text-white block">Create</span>
                  <span className="text-white block">Stunning</span>
                  <span className="block mt-1">
                    <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">3D Visuals</span> <span className="text-white">with</span>
                  </span>
                  <span className="bg-gradient-to-r from-cyan-400 to-teal-300 bg-clip-text text-transparent block mt-1">AI</span>
                </h1>
                
                <p className="text-base sm:text-lg text-white/55 leading-relaxed max-w-xl">
                  OrdStudio combines conversational AI models with an infinite vector editing canvas. Instantly build slide decks, design stickers, write copywriting, and export editable files.
                </p>
                
                <div className="flex flex-wrap gap-4 pt-2">
                  <Link
                    to="/signup"
                    className="btn-3d px-8 py-4 rounded-xl text-sm font-bold hover:shadow-[0_8px_30px_rgba(124,58,237,0.4)]"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                  >
                    Start Designing Free
                    <ArrowRight size={16} />
                  </Link>
                  <a
                    href="#features"
                    className="inline-flex items-center justify-center gap-2 border border-white/10 text-white/80 font-semibold px-8 py-4 rounded-xl hover:bg-white/5 hover:text-white transition-all duration-200 text-sm"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                  >
                    Explore Features
                  </a>
                </div>
                
                <div className="flex items-center gap-6 pt-4 text-xs text-white/30">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 size={12} className="text-purple-500" />
                    No credit card required
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 size={12} className="text-purple-500" />
                    Commercial-use rights
                  </div>
                </div>
              </div>
              
              {/* Hero Right Column */}
              <div className="lg:col-span-7 relative mt-12 lg:mt-0 z-20 flex justify-end items-center lg:items-start">
                
                <div className="relative w-[125%] sm:w-[135%] max-w-[850px] right-[-15%] sm:right-[-20%] lg:right-[-25%] xl:right-[-15%] z-10 transform hover:scale-[1.02] transition-transform duration-700 lg:-mt-8 xl:-mt-12">
                  {/* Subtle fade mask so the image's dark purple edges blend perfectly with the #09090c page background */}
                  <picture>
                    <source media="(max-width: 640px)" srcSet="/design-studio-hero-mobile.avif" type="image/avif" />
                    <source media="(max-width: 640px)" srcSet="/design-studio-hero-mobile.webp" type="image/webp" />
                    <source srcSet="/design-studio-hero.avif" type="image/avif" />
                    <source srcSet="/design-studio-hero.webp" type="image/webp" />
                    <img 
                      src="/design-studio-hero.webp" 
                      alt="OrdStudio Design Studio Showcase" 
                      width={1024}
                      height={698}
                      fetchPriority="high"
                      decoding="async"
                      className="w-full h-auto object-contain"
                      style={{ WebkitMaskImage: 'radial-gradient(ellipse 90% 90% at 50% 50%, black 70%, transparent 100%)', maskImage: 'radial-gradient(ellipse 90% 90% at 50% 50%, black 70%, transparent 100%)' }}
                    />
                  </picture>
                </div>

              </div>

            </div>
          </div>
        </section>

          {/* STATS SECTION */}
          <section className="py-8 relative z-30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              
              <div className="bg-[#0f0f16]/90 backdrop-blur-xl border border-purple-500/20 rounded-3xl p-6 lg:p-8 shadow-[0_0_50px_rgba(139,92,246,0.1)]">
                <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-white/[0.08] gap-6 md:gap-0">
                  
                  {/* Stat 1 */}
                  <div className="flex-1 flex items-center gap-4 justify-center md:justify-start md:px-6 first:pl-0">
                    <div className="w-12 h-12 rounded-xl border border-purple-500/30 flex items-center justify-center bg-purple-500/10 shrink-0 shadow-inner">
                      <Layers size={20} className="text-purple-400" />
                    </div>
                    <div className="flex flex-col text-left">
                      <div className="text-3xl font-extrabold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent leading-none" style={{ fontFamily: 'Syne, sans-serif' }}>
                        300
                      </div>
                      <div className="text-[9px] sm:text-[10px] text-white/50 uppercase tracking-widest font-mono mt-1.5">Design Templates Available</div>
                    </div>
                  </div>

                  {/* Stat 2 */}
                  <div className="flex-1 flex items-center gap-4 justify-center md:justify-start md:px-6 pt-6 md:pt-0">
                    <div className="w-12 h-12 rounded-xl border border-purple-500/30 flex items-center justify-center bg-purple-500/10 shrink-0 shadow-inner">
                      <Presentation size={20} className="text-blue-400" />
                    </div>
                    <div className="flex flex-col text-left">
                      <div className="text-3xl font-extrabold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent leading-none" style={{ fontFamily: 'Syne, sans-serif' }}>
                        {stats.templatesCount}
                      </div>
                      <div className="text-[9px] sm:text-[10px] text-white/50 uppercase tracking-widest font-mono mt-1.5">Presentation Templates</div>
                    </div>
                  </div>

                  {/* Stat 3 */}
                  <div className="flex-1 flex items-center gap-4 justify-center md:justify-start md:px-6 pt-6 md:pt-0">
                    <div className="w-12 h-12 rounded-xl border border-purple-500/30 flex items-center justify-center bg-purple-500/10 shrink-0 shadow-inner">
                      <Star size={20} className="text-purple-400" />
                    </div>
                    <div className="flex flex-col text-left">
                      <div className="text-3xl font-extrabold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent leading-none" style={{ fontFamily: 'Syne, sans-serif' }}>
                        {stats.stickersCount}
                      </div>
                      <div className="text-[9px] sm:text-[10px] text-white/50 uppercase tracking-widest font-mono mt-1.5">Stickers Exported</div>
                    </div>
                  </div>

                  {/* Stat 4 */}
                  <div className="flex-1 flex items-center gap-4 justify-center md:justify-start md:px-6 pt-6 md:pt-0 last:pr-0">
                    <div className="w-12 h-12 rounded-xl border border-purple-500/30 flex items-center justify-center bg-purple-500/10 shrink-0 shadow-inner">
                      <Activity size={20} className="text-purple-400" />
                    </div>
                    <div className="flex flex-col text-left">
                      <div className="text-3xl font-extrabold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent leading-none" style={{ fontFamily: 'Syne, sans-serif' }}>
                        {stats.status === 'Operational' ? '100%' : '99.2%'}
                      </div>
                      <div className="text-[9px] sm:text-[10px] text-white/50 uppercase tracking-widest font-mono mt-1.5">System Status (Operational)</div>
                    </div>
                  </div>

                </div>
              </div>
              
            </div>
          </section>

        {/* FEATURES GRID SECTION */}
        <section id="features" className="py-16 relative border-b border-white/[0.03]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
              <div className="text-xs font-extrabold text-purple-400 uppercase tracking-widest font-mono">Feature Workspace</div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>
                All-In-One AI Design Studio
              </h2>
              <p className="text-white/55 text-sm sm:text-base leading-relaxed">
                Unlock advanced generative models tightly integrated with professional, vector-based layout tools.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              <Link to="/features/ai-presentation-maker" className="card-3d p-8 group flex flex-col justify-between min-h-[250px]">
                <div className="space-y-5">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center group-hover:bg-purple-500/20 transition-all border border-purple-500/15">
                    <Presentation size={22} className="text-purple-400" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>
                      AI Presentation Maker
                    </h3>
                    <p className="text-xs text-white/45 leading-relaxed">
                      Generate beautiful structured slides, speakers notes, and outlines automatically from a prompt.
                    </p>
                  </div>
                </div>
                <span className="text-xs text-purple-400 font-bold flex items-center gap-1 group-hover:text-purple-300 mt-6">
                  Learn details <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>

              <Link to="/features/ai-copywriting-assistant" className="card-3d p-8 group flex flex-col justify-between min-h-[250px]">
                <div className="space-y-5">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center group-hover:bg-purple-500/20 transition-all border border-purple-500/15">
                    <FileText size={22} className="text-purple-400" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>
                      AI Copywriter
                    </h3>
                    <p className="text-xs text-white/45 leading-relaxed">
                      Draft landing page copy, marketing emails, or product descriptions that speak to your target audience.
                    </p>
                  </div>
                </div>
                <span className="text-xs text-purple-400 font-bold flex items-center gap-1 group-hover:text-purple-300 mt-6">
                  Learn details <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>

              <Link to="/features/ai-sticker-generator" className="card-3d p-8 group flex flex-col justify-between min-h-[250px]">
                <div className="space-y-5">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center group-hover:bg-purple-500/20 transition-all border border-purple-500/15">
                    <Sticker size={22} className="text-purple-400" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>
                      AI Sticker Generator
                    </h3>
                    <p className="text-xs text-white/45 leading-relaxed">
                      Generate transparent kawaii, retro, 3D clay, or vector-styled stickers with automatic white borders.
                    </p>
                  </div>
                </div>
                <span className="text-xs text-purple-400 font-bold flex items-center gap-1 group-hover:text-purple-300 mt-6">
                  Learn details <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>

              <Link to="/features/vector-editor" className="card-3d p-8 group flex flex-col justify-between min-h-[250px]">
                <div className="space-y-5">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center group-hover:bg-purple-500/20 transition-all border border-purple-500/15">
                    <Palette size={22} className="text-purple-400" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>
                      Vector Canvas Editor
                    </h3>
                    <p className="text-xs text-white/45 leading-relaxed">
                      Refine designs with layers, coordinate parameters, fonts, customized shapes, and coordinates.
                    </p>
                  </div>
                </div>
                <span className="text-xs text-purple-400 font-bold flex items-center gap-1 group-hover:text-purple-300 mt-6">
                  Learn details <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>

              <Link to="/features/pptx-export" className="card-3d p-8 group flex flex-col justify-between min-h-[250px]">
                <div className="space-y-5">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center group-hover:bg-purple-500/20 transition-all border border-purple-500/15">
                    <Wand2 size={22} className="text-purple-400" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>
                      Editable PPTX Exporter
                    </h3>
                    <p className="text-xs text-white/45 leading-relaxed">
                      Convert generated slides into fully editable native PowerPoint files while preserving custom vector shapes.
                    </p>
                  </div>
                </div>
                <span className="text-xs text-purple-400 font-bold flex items-center gap-1 group-hover:text-purple-300 mt-6">
                  Learn details <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>

              <Link to="/features/svg-export" className="card-3d p-8 group flex flex-col justify-between min-h-[250px]">
                <div className="space-y-5">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center group-hover:bg-purple-500/20 transition-all border border-purple-500/15">
                    <Zap size={22} className="text-purple-400" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>
                      Multi-Format Export
                    </h3>
                    <p className="text-xs text-white/45 leading-relaxed">
                      Download graphics as raw vector SVGs, print-ready high-density PDFs, or transparent web PNGs.
                    </p>
                  </div>
                </div>
                <span className="text-xs text-purple-400 font-bold flex items-center gap-1 group-hover:text-purple-300 mt-6">
                  Learn details <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>

            </div>
          </div>
        </section>

        {/* WORKFLOW VALUE PROP */}
        <section className="py-16 relative bg-white/[0.01] border-b border-white/[0.03]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              
              <div className="space-y-6">
                <div className="text-xs font-extrabold text-purple-400 uppercase tracking-widest font-mono">Built for Creators</div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>
                  Professional Design Quality, Zero Learning Curve
                </h2>
                <p className="text-sm sm:text-base text-white/55 leading-relaxed">
                  Most design tools force you to waste hours learning complex keybindings and alignments. OrdStudio automates the formatting so you can focus entirely on the core creative idea.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-lg bg-purple-500/15 flex items-center justify-center shrink-0 border border-purple-500/10 text-purple-400">
                      <Zap size={16} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">Save Hours on Grid Alignment</h4>
                      <p className="text-xs text-white/45 mt-1">Our AI engines automatically compute text wrapping, margins, and contrasting color harmonies.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-lg bg-purple-500/15 flex items-center justify-center shrink-0 border border-purple-500/10 text-purple-400">
                      <ShieldCheck size={16} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">Commercial Rights Protected</h4>
                      <p className="text-xs text-white/45 mt-1">Every design asset you generate remains 100% yours. Sell your stickers, pitch decks, and brand copies legally.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-lg bg-purple-500/15 flex items-center justify-center shrink-0 border border-purple-500/10 text-purple-400">
                      <Heart size={16} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">Cross-Platform File Handoffs</h4>
                      <p className="text-xs text-white/45 mt-1">Download native PowerPoint or SVG vectors, allowing standard integration into Keynote, Figma, or Adobe Illustrator.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Graphic Spec Panel */}
              <div className="glass-3d rounded-2xl p-8 relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-purple-500/5 rounded-full blur-[40px]" />
                <h3 className="text-base font-bold text-purple-300 font-mono uppercase tracking-widest border-b border-white/[0.06] pb-4 mb-6">
                  Engine Capabilities
                </h3>
                <div className="space-y-4 text-xs">
                  <div className="flex justify-between border-b border-white/[0.04] pb-2.5">
                    <span className="text-white/45">AI slide layout templates</span>
                    <span className="text-purple-300 font-bold">✓ 36 Grid Variants</span>
                  </div>
                  <div className="flex justify-between border-b border-white/[0.04] pb-2.5">
                    <span className="text-white/45">Vector sticker style presets</span>
                    <span className="text-purple-300 font-bold">✓ 4 Style Formats</span>
                  </div>
                  <div className="flex justify-between border-b border-white/[0.04] pb-2.5">
                    <span className="text-white/45">Export formats support</span>
                    <span className="text-purple-300 font-bold">PPTX, SVG, PDF, PNG</span>
                  </div>
                  <div className="flex justify-between border-b border-white/[0.04] pb-2.5">
                    <span className="text-white/45">Google Web Fonts index</span>
                    <span className="text-purple-300 font-bold">50+ Google Fonts</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/45">Copywriter tone profiles</span>
                    <span className="text-purple-300 font-bold">Professional, Friendly, Hype</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>



        {/* FINAL CTA SECTION */}
        <section className="py-20 relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>
              Bring Your Ideas to Life Instantly
            </h2>
            <p className="text-white/55 text-sm sm:text-base max-w-md mx-auto leading-relaxed">
              Design pitch decks, cute stickers, and professional copywriting inside a modern, unified design engine.
            </p>
            <Link
              to="/signup"
              className="btn-3d px-10 py-4 rounded-xl text-sm font-bold shadow-xl shadow-purple-500/20"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Sign Up Free
            </Link>
          </div>
        </section>

      </div>

      {/* Custom Toast Alert */}
      {showToast && (
        <div className="fixed bottom-6 right-6 bg-[#0f0f15]/95 border border-purple-500/40 text-purple-200 px-5 py-3 rounded-xl shadow-2xl flex items-center gap-2 text-xs font-semibold z-50 backdrop-blur-xl animate-fade-in">
          <Sparkles size={14} className="text-purple-400 animate-pulse" />
          {toastMsg}
        </div>
      )}
    </>
  );
}

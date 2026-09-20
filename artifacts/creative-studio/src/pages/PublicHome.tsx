import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SEOHead } from '@/components/SEOHead';
import { supabase } from '@/lib/supabase';
import {
  Sparkles, Wand2, Presentation, Sticker, Palette, FileText,
  ArrowRight, ShieldCheck, Zap, Heart, CheckCircle2,
  RotateCw, ChevronRight, Terminal
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
                <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-1.5 text-xs font-semibold text-purple-300 uppercase tracking-wider">
                  <Sparkles size={12} className="text-purple-400 animate-pulse" />
                  visual intelligence workspace
                </div>
                
                <h1 className="text-4xl sm:text-6xl font-bold tracking-tight leading-[1.1] text-white" style={{ fontFamily: 'Syne, sans-serif' }}>
                  Create Stunning<br />
                  <span className="bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-300 bg-clip-text text-transparent filter drop-shadow-[0_2px_20px_rgba(139,92,246,0.3)]">
                    3D Visuals with AI
                  </span>
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
              
              {/* Hero Right Column (Interactive AI Simulator) */}
              <div className="lg:col-span-5 lg:col-start-8 relative mt-12 lg:mt-0 lg:translate-y-12 lg:-translate-x-12 lg:scale-[1.4] lg:origin-right z-20">
                <div className="absolute -top-10 -left-10 w-[240px] h-[240px] bg-purple-500/10 rounded-full blur-[60px] pointer-events-none" />
                <div className="absolute -bottom-10 -right-10 w-[260px] h-[260px] bg-cyan-500/10 rounded-full blur-[70px] pointer-events-none" />
                
                {/* NEW STACKED DESIGN CARD */}
                <div className="relative w-full aspect-[4/3] perspective-1000 mt-8">
                  {/* Background Stack Cards */}
                  <div className="absolute inset-0 bg-[#0f0f15] border border-white/[0.05] rounded-3xl transform -rotate-6 scale-95 translate-y-4 opacity-50 shadow-2xl"></div>
                  <div className="absolute inset-0 bg-[#0f0f15] border border-white/[0.08] rounded-3xl transform -rotate-3 scale-[0.98] translate-y-2 opacity-80 shadow-2xl"></div>
                  
                  {/* Main Front Card */}
                  <div className="absolute inset-0 bg-[#0a0a0f] border border-white/[0.12] rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col p-6 sm:p-8 justify-between z-10 group hover:border-purple-500/50 transition-colors duration-500">
                    
                    {/* Top Badge */}
                    <div className="inline-flex items-center gap-2 border border-purple-500/30 bg-purple-500/10 rounded-full px-4 py-1.5 w-fit shadow-[0_0_15px_rgba(139,92,246,0.2)]">
                      <Sparkles size={14} className="text-purple-400" />
                      <span className="text-xs font-semibold text-purple-200 tracking-wide">Design Studio</span>
                    </div>

                    {/* Main Title & Subtitle */}
                    <div className="space-y-2 mt-6 relative z-20 w-2/3">
                      <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-black leading-[1.1] tracking-tight" style={{ fontFamily: 'Syne, sans-serif' }}>
                        <span className="text-white block">Architectural</span>
                        <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent block">Horizon</span>
                        <span className="text-white block">Monograph</span>
                      </h2>
                      <p className="text-white/50 text-xs sm:text-sm font-medium pt-2">
                        Minimal Spaces. Maximum Stories.
                      </p>
                    </div>

                    {/* Bottom CTA */}
                    <div className="flex items-center gap-3 mt-8 relative z-20">
                      <div className="w-8 h-8 rounded-full border border-purple-500/40 flex items-center justify-center text-purple-400 bg-purple-500/10 group-hover:bg-purple-500/20 transition-colors">
                        <ArrowRight size={14} className="-rotate-45" />
                      </div>
                      <span className="text-sm font-medium text-white/70 group-hover:text-white transition-colors cursor-pointer">
                        Create with AI
                      </span>
                    </div>

                    {/* Architectural Sticker Cutout (Right Side) */}
                    <div className="absolute -right-4 sm:-right-8 top-1/2 -translate-y-1/2 w-[200px] h-[200px] sm:w-[260px] sm:h-[260px] transform rotate-6 group-hover:rotate-3 group-hover:scale-105 transition-all duration-500 z-10">
                      <div className="relative w-full h-full">
                        {/* Glow behind sticker */}
                        <div className="absolute inset-0 bg-indigo-500/30 blur-2xl rounded-full scale-110"></div>
                        
                        {/* Main architectural photo as sticker */}
                        <div className="relative w-full h-full border-[6px] sm:border-[8px] border-white rounded-2xl overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.5)] transform -rotate-3 bg-white">
                          <img 
                            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600&auto=format&fit=crop" 
                            alt="Architecture" 
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* Hand-written style small sticker overlapping */}
                        <div className="absolute -bottom-2 -left-4 sm:-left-6 bg-white px-3 sm:px-4 py-1 sm:py-2 rounded-xl border-[3px] border-white shadow-xl transform -rotate-12">
                          <span className="text-black font-bold text-sm sm:text-lg leading-none block text-center" style={{ fontFamily: 'Caveat, cursive, sans-serif' }}>
                            Design<br/>Studio
                          </span>
                        </div>

                        {/* Accent strokes */}
                        <div className="absolute -top-4 right-0 text-purple-400 transform rotate-12 drop-shadow-md">
                          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                            <path d="M10 20 L15 15 M20 8 L25 12 M30 15 L25 20" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* STATS SECTION */}
        <section className="py-8 border-b border-white/[0.03] bg-white/[0.01]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="space-y-1">
                <div className="text-3xl font-extrabold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>
                  {stats.projectsCount}
                </div>
                <div className="text-xs text-white/40 uppercase tracking-wider font-mono">Presentations Generated</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-extrabold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>
                  {stats.stickersCount}
                </div>
                <div className="text-xs text-white/40 uppercase tracking-wider font-mono">Stickers Exported</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-extrabold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>
                  {stats.status === 'Operational' ? '100%' : '99.2%'}
                </div>
                <div className="text-xs text-white/40 uppercase tracking-wider font-mono">System Status ({stats.status})</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-extrabold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>
                  {stats.templatesCount}
                </div>
                <div className="text-xs text-white/40 uppercase tracking-wider font-mono">Design Templates Available</div>
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

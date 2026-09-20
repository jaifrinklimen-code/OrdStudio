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

const DEMO_PROMPTS: DemoItem[] = [
  {
    id: 'slides',
    label: 'AI Presentation',
    icon: Presentation,
    prompt: 'Space-tourism startup pitch deck for a luxury orbital hotel',
    statusTexts: [
      'Initializing AI layout engine...',
      'Structuring narrative slides...',
      'Applying custom dark-nebula styling...',
      'Ready!'
    ],
    result: {
      title: 'Aura Luxury Orbit',
      subtitle: 'The Future of Hospitality Beyond Earth',
      slides: [
        { title: '01. The Opportunity', desc: 'Space tourism TAM is projected to grow to $120B by 2032, driven by ultra-high-net-worth orbital pioneers.' },
        { title: '02. Orbital Infrastructure', desc: '12 inflatable modules with artificial gravity, panoramic viewport lounges, and space-walk suits.' },
        { title: '03. Financial Outlook', desc: 'Breakeven projected in Year 3 with 240 guests/year capacity at $2.5M per ticket tier.' },
        { title: '04. The Launch Team', desc: 'Led by seasoned aerospace engineers, ex-NASA astronauts, and world-class luxury hotel hoteliers.' }
      ]
    }
  },
  {
    id: 'stickers',
    label: 'AI Sticker Lab',
    icon: Sticker,
    prompt: 'Cute cyber cat wearing glowing purple glasses, kawaii sticker',
    statusTexts: [
      'Computing neural style vectors...',
      'Tracing high-res bezier paths...',
      'Applying white die-cut margins...',
      'Ready!'
    ],
    result: {
      title: 'NeonCyberCat.svg',
      imageUrl: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&auto=format&fit=crop&q=80',
      tags: ['Kawaii', '3D Glossy', 'Transparent SVG', 'White Die-Cut']
    }
  },
  {
    id: 'writer',
    label: 'AI Copywriter',
    icon: FileText,
    prompt: 'Persuasive marketing email sequence for organic matcha tea launch',
    statusTexts: [
      'Analyzing copywriting tone weights...',
      'Drafting engaging subject line...',
      'Polishing body copy structure...',
      'Ready!'
    ],
    result: {
      subject: 'Subject: Elevate Your Mornings with Clean Zen Energy 🍃',
      body: [
        'Hey Wellness Explorer,',
        'Forget the morning jitters and the mid-afternoon crash. Our ceremonial-grade organic matcha provides a clean, jitter-free focus that lasts all day.',
        'Sourced directly from Uji, Japan, and stone-ground to preserve nutrients, it delivers L-Theanine for calm focus and antioxidants for physical vitality.',
        'Claim 20% off your starter pack today with code MATCHA20.'
      ]
    }
  }
];

import { secureFetch } from '@/lib/secureFetch';

export default function PublicHome() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<string>('slides');
  const [demoStage, setDemoStage] = useState<'typing' | 'generating' | 'done'>('typing');
  const [typedPrompt, setTypedPrompt] = useState<string>('');
  const [statusIndex, setStatusIndex] = useState<number>(0);
  const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0);
  const [showToast, setShowToast] = useState<boolean>(false);
  const [toastMsg, setToastMsg] = useState<string>('');
  const [stats, setStats] = useState({ templatesCount: 50, projectsCount: 0, stickersCount: 12, status: 'Operational' });
  const typingTimer = useRef<NodeJS.Timeout | null>(null);

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

  const activeDemo = DEMO_PROMPTS.find(d => d.id === activeTab) || DEMO_PROMPTS[0];

  useEffect(() => {
    if (typingTimer.current) clearTimeout(typingTimer.current);
    
    setDemoStage('typing');
    setTypedPrompt('');
    setStatusIndex(0);
    setActiveSlideIndex(0);

    let charIdx = 0;
    const targetText = activeDemo.prompt;

    function typeChar() {
      if (charIdx < targetText.length) {
        setTypedPrompt(targetText.slice(0, charIdx + 1));
        charIdx++;
        typingTimer.current = setTimeout(typeChar, 30);
      } else {
        setDemoStage('generating');
        let statusIdx = 0;
        
        function cycleStatus() {
          if (statusIdx < activeDemo.statusTexts.length - 1) {
            setStatusIndex(statusIdx + 1);
            statusIdx++;
            typingTimer.current = setTimeout(cycleStatus, 900);
          } else {
            setDemoStage('done');
          }
        }
        typingTimer.current = setTimeout(cycleStatus, 800);
      }
    }

    typingTimer.current = setTimeout(typeChar, 200);

    return () => {
      if (typingTimer.current) clearTimeout(typingTimer.current);
    };
  }, [activeTab]);

  const triggerToast = (msg: string) => {
    setToastMsg(msg);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2500);
  };
  const handleEditInStudio = async () => {
    let targetTab = 'design';
    if (activeTab === 'stickers') {
      targetTab = 'stickers';
    } else if (activeTab === 'writer') {
      targetTab = 'generator';
    }
    localStorage.setItem('activeTab', targetTab);

    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      sessionStorage.setItem('ord_pending_tab', targetTab);
      navigate('/login');
    } else {
      navigate('/dashboard');
    }
  };

  const handleExportFiles = () => {
    let filename = 'presentation-outline.txt';
    let mimeType = 'text/plain';
    let content = 'OrdStudio AI Presentation Outline\n\n' + 
      'Slide 1: The Opportunity\nSpace tourism TAM is projected to grow to $120B by 2032...\n\n' +
      'Slide 2: The Solution\nLuxury orbital lodging with zero-g sports and synthetic gravity suites...';

    if (activeTab === 'stickers') {
      filename = 'sticker-concept.svg';
      mimeType = 'image/svg+xml';
      content = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
        <rect width="100" height="100" rx="20" fill="url(#grad)" stroke="white" stroke-width="4"/>
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#8b5cf6;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#ec4899;stop-opacity:1" />
          </linearGradient>
        </defs>
        <text x="50%" y="65%" font-size="40" text-anchor="middle">👾</text>
      </svg>`;
    } else if (activeTab === 'writer') {
      filename = 'copywriting-draft.md';
      mimeType = 'text/markdown';
      content = `# Cold Email: Craft Matcha Latte Launch\n\nSubject: Upgrade your morning ritual 🍵\n\nHey there,\n\nWe know you love clean energy. That's why we crafted the finest ceremonial matcha latte blend...`;
    }

    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    triggerToast(`Exported ${filename} successfully!`);
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
                
                <div className="glass-3d rounded-2xl overflow-hidden border border-white/[0.08] relative z-10 shadow-2xl">
                  
                  <div className="flex items-center justify-between border-b border-white/[0.06] bg-white/[0.02] px-6 py-4">
                    <div className="flex gap-1">
                      <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                      <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                      <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    </div>
                    <span className="text-[11px] font-bold text-white/30 uppercase tracking-widest font-mono">
                      ai_workspace_simulator
                    </span>
                    <div className="w-8" />
                  </div>
                  
                  <div className="flex border-b border-white/[0.06] bg-white/[0.01]">
                    {DEMO_PROMPTS.map(d => {
                      const Icon = d.icon;
                      const isActive = activeTab === d.id;
                      return (
                        <button
                          key={d.id}
                          onClick={() => setActiveTab(d.id)}
                          className={`flex-1 py-3.5 px-3 flex items-center justify-center gap-2 text-xs font-semibold border-b-2 transition-all ${
                            isActive
                              ? 'border-purple-500 text-purple-300 bg-purple-500/5'
                              : 'border-transparent text-white/45 hover:text-white/70 hover:bg-white/[0.02]'
                          }`}
                        >
                          <Icon size={14} />
                          {d.label}
                        </button>
                      );
                    })}
                  </div>

                  <div className="p-6 min-h-[340px] flex flex-col justify-between relative bg-black/20">
                    
                    <div className="bg-[#0b0b0e] border border-white/[0.07] rounded-xl p-4 flex items-start gap-3 shadow-inner">
                      <Terminal size={16} className="text-purple-400 mt-0.5 shrink-0" />
                      <div className="flex-1 font-mono text-[13px] leading-relaxed">
                        <span className="text-white/30">user@ordstudio:~$ </span>
                        <span className="text-white/80">{typedPrompt}</span>
                        {demoStage === 'typing' && (
                          <span className="inline-block w-1.5 h-4 bg-purple-400 ml-0.5 animate-pulse" />
                        )}
                      </div>
                    </div>

                    {demoStage === 'generating' && (
                      <div className="flex-1 flex flex-col items-center justify-center my-6 space-y-4">
                        <div className="relative">
                          <RotateCw size={36} className="text-purple-400 animate-spin" />
                          <Sparkles size={16} className="text-cyan-400 absolute top-2.5 left-2.5 animate-pulse" />
                        </div>
                        <div className="space-y-1.5 text-center">
                          <p className="text-sm font-semibold text-purple-200">
                            {activeDemo.statusTexts[statusIndex]}
                          </p>
                          <div className="w-32 h-1 bg-white/[0.06] rounded-full mx-auto overflow-hidden">
                            <div 
                              className="h-full bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full transition-all duration-300"
                              style={{ width: `${((statusIndex + 1) / activeDemo.statusTexts.length) * 100}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    {demoStage === 'done' && (
                      <div className="flex-1 flex flex-col justify-center my-4 animate-fade-in">
                        
                        {activeTab === 'slides' && activeDemo.result.slides && (
                          <div className="space-y-4">
                            <div className="border border-white/[0.08] bg-white/[0.03] rounded-xl p-5 shadow-lg relative overflow-hidden">
                              <div className="absolute top-0 right-0 bg-purple-500/10 text-purple-300 border-l border-b border-white/[0.08] px-2.5 py-1 text-[10px] font-bold rounded-bl-lg uppercase tracking-wider font-mono">
                                Slide {activeSlideIndex + 1} of 4
                              </div>
                              <div className="space-y-2 pr-8">
                                <h4 className="text-xs font-semibold text-purple-400 font-mono tracking-wider uppercase">
                                  {activeDemo.result.title}
                                </h4>
                                <h3 className="text-lg font-bold text-white leading-snug">
                                  {activeDemo.result.slides[activeSlideIndex].title}
                                </h3>
                                <p className="text-xs text-white/50 leading-relaxed pt-1">
                                  {activeDemo.result.slides[activeSlideIndex].desc}
                                </p>
                              </div>
                            </div>
                            
                            <div className="flex justify-between items-center px-1">
                              <div className="flex gap-1.5">
                                {activeDemo.result.slides.map((_, idx) => (
                                  <button
                                    key={idx}
                                    onClick={() => setActiveSlideIndex(idx)}
                                    className={`w-2 h-2 rounded-full transition-all ${
                                      activeSlideIndex === idx ? 'bg-purple-500 w-4' : 'bg-white/20'
                                    }`}
                                    aria-label={`Go to slide ${idx + 1}`}
                                  />
                                ))}
                              </div>
                              <button
                                onClick={() => {
                                  setActiveSlideIndex(prev => (prev + 1) % 4);
                                }}
                                className="text-xs text-purple-300 font-bold hover:text-purple-200 flex items-center gap-1"
                              >
                                Next slide <ChevronRight size={12} />
                              </button>
                            </div>
                          </div>
                        )}

                        {activeTab === 'stickers' && activeDemo.result.imageUrl && (
                          <div className="flex flex-col items-center space-y-4">
                            <div className="relative group/sticker">
                              <div className="absolute inset-0 bg-purple-500/15 blur-md rounded-full transform group-hover/sticker:scale-110 transition-transform duration-300" />
                              <div className="relative w-36 h-36 rounded-full bg-white p-2.5 shadow-[0_10px_25px_rgba(0,0,0,0.5)] border-[5px] border-white transform rotate-3 hover:rotate-0 transition-all duration-300">
                                <img
                                  src={activeDemo.result.imageUrl}
                                  alt="Mock generated sticker"
                                  className="w-full h-full object-cover rounded-full"
                                />
                                <Sparkles size={20} className="absolute -top-1 -right-1 text-yellow-400 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]" />
                              </div>
                            </div>
                            <div className="flex flex-wrap justify-center gap-1.5">
                              {activeDemo.result.tags?.map(t => (
                                <span key={t} className="text-[10px] bg-white/[0.06] border border-white/[0.08] text-white/50 px-2 py-0.5 rounded-full">
                                  {t}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {activeTab === 'writer' && activeDemo.result.subject && (
                          <div className="border border-white/[0.08] bg-[#0c0c10] rounded-xl p-4 shadow-inner max-h-[190px] overflow-y-auto space-y-3 font-sans text-xs">
                            <div className="border-b border-white/[0.06] pb-2 text-[11px] font-bold text-purple-400">
                              {activeDemo.result.subject}
                            </div>
                            <div className="space-y-2 text-white/60 leading-relaxed">
                              {activeDemo.result.body?.map((p, i) => (
                                <p key={i}>{p}</p>
                              ))}
                            </div>
                          </div>
                        )}

                      </div>
                    )}

                    <div className="flex gap-3 border-t border-white/[0.06] pt-4 mt-2">
                      <button
                        onClick={handleEditInStudio}
                        className="flex-1 text-center py-2.5 rounded-lg text-xs font-bold transition-all bg-purple-600 hover:bg-purple-500 text-white shadow-md active:scale-95"
                      >
                        Edit in Studio
                      </button>
                      <button
                        onClick={handleExportFiles}
                        className="flex-1 text-center py-2.5 rounded-lg text-xs font-bold transition-all bg-white/5 hover:bg-white/10 text-white border border-white/10 active:scale-95"
                      >
                        Export Files
                      </button>
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

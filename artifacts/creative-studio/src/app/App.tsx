import { useIsMobile } from '@/hooks/use-mobile';
import { Routes, Route, Navigate, useNavigate, useLocation } from "react-router-dom";
import React, { useState, useCallback, useRef, useEffect, Suspense, lazy } from 'react';

// Public Layout
import { PublicLayout } from "../components/layout/Layout";

// Core Public Home (Eagerly loaded for zero-delay first paint)
import PublicHome from "../pages/PublicHome";

// Lazy-loaded Public Pages
const About = lazy(() => import("../pages/About"));
const Contact = lazy(() => import("../pages/Contact"));
const Blog = lazy(() => import("../pages/blog/Blog"));
const BlogPost = lazy(() => import("../pages/blog/BlogPost"));

// Lazy-loaded Features
const AIPresentationMaker = lazy(() => import("../pages/features/AIPresentationMaker"));
const AICopywritingAssistant = lazy(() => import("../pages/features/AICopywritingAssistant"));
const AIStickerGenerator = lazy(() => import("../pages/features/AIStickerGenerator"));
const VectorEditor = lazy(() => import("../pages/features/VectorEditor"));
const PPTXExport = lazy(() => import("../pages/features/PPTXExport"));
const SVGExport = lazy(() => import("../pages/features/SVGExport"));
const PDFExport = lazy(() => import("../pages/features/PDFExport"));

// Lazy-loaded Legal Policies
const PrivacyPolicy = lazy(() => import("../pages/legal/PrivacyPolicy"));
const TermsOfService = lazy(() => import("../pages/legal/TermsOfService"));
const CookiePolicy = lazy(() => import("../pages/legal/CookiePolicy"));
const Disclaimer = lazy(() => import("../pages/legal/Disclaimer"));

// Lazy-loaded Auth Pages
const AuthPage = lazy(() => import("./AuthPage"));
const SignupPage = lazy(() => import("./SignUp page"));
const ForgotPasswordPage = lazy(() => import("./ForgotPasswordPage"));

// Lazy-loaded Studio Views & Tools
const DesignStudio = lazy(() => import('./components/DesignStudio').then(m => ({ default: m.DesignStudio })));
const AIAssistant = lazy(() => import('./components/AIAssistant').then(m => ({ default: m.AIAssistant })));
const ContentGenerator = lazy(() => import('./components/ContentGenerator').then(m => ({ default: m.ContentGenerator })));
const SmartSearch = lazy(() => import('./components/SmartSearch').then(m => ({ default: m.SmartSearch })));
const StickerLab = lazy(() => import('./components/StickerLab').then(m => ({ default: m.StickerLab })));
const CanvasEditor = lazy(() => import('./components/CanvasEditor').then(m => ({ default: m.CanvasEditor })));
const AssetUploader = lazy(() => import('./components/AssetUploader').then(m => ({ default: m.AssetUploader })));
const SettingsPage = lazy(() => import('./components/SettingsPage').then(m => ({ default: m.SettingsPage })));
const TemplateAuditPage = lazy(() => import('./components/TemplateAuditPage').then(m => ({ default: m.TemplateAuditPage })));

import {
  Search as SearchIcon, Home as HomeIcon, Palette, Plus, StickyNote,
  Layout, Image as ImageIcon, Video, Globe, Upload, ChevronDown,
  Bell, User, ArrowRight, Settings, Menu, ChevronLeft, ChevronRight, HelpCircle,
  CreditCard, LogOut
} from "lucide-react";
import { PageTransition } from './components/PageTransition';
import { LoadingBar } from './components/LoadingBar';
const Dashboard = lazy(() => import('./components/Dashboard').then(m => ({ default: m.Dashboard })));

import { getAppUrl } from "../lib/getAppUrl";
import type { Session } from "@supabase/supabase-js";
import { toast } from 'sonner';

const RouteSuspenseFallback = () => (
  <div className="min-h-[60vh] flex items-center justify-center bg-[#0d0d14] text-white">
    <div className="w-7 h-7 border-2 border-violet-500 border-t-transparent rounded-full animate-spin" />
  </div>
);

export default function App() {
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const location = useLocation();
  const isPublicRoute = location.pathname === '/' || location.pathname.startsWith('/blog') || location.pathname.startsWith('/features') || location.pathname === '/about' || location.pathname === '/contact' || location.pathname === '/privacy-policy' || location.pathname === '/terms-of-service' || location.pathname === '/cookie-policy' || location.pathname === '/disclaimer';

  const [activeTab, setActiveTab] = useState(() => {
    return localStorage.getItem('activeTab') || 'home';
  });
  const [loadingKey, setLoadingKey] = useState(0);
  const [loading, setLoading] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [customDesign, setCustomDesign] = useState<any | null>(null);
  const pendingTab = useRef<string | null>(null);
  const [globalSearchQuery, setGlobalSearchQuery] = useState('');
  const topSearchRef = useRef<HTMLInputElement>(null);

  const [showNotif, setShowNotif] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [session, setSession] = useState<Session | null>(null);
  const [authLoading, setAuthLoading] = useState(() => !isPublicRoute);
  const notifRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);

  const handleNavigate = useCallback((tab: string) => {
    setCustomDesign(null);
    localStorage.setItem('activeTab', tab);
    setActiveTab(tab);
    setLoading(true);
    setLoadingKey(k => k + 1);
    setTimeout(() => {
      setLoading(false);
    }, 120);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        handleNavigate('search');
        setTimeout(() => {
          topSearchRef.current?.focus();
        }, 50);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNavigate]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = e.target as Node;
      if (notifRef.current && !notifRef.current.contains(target)) {
        setShowNotif(false);
      }
      if (profileRef.current && !profileRef.current.contains(target)) {
        setShowProfile(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  useEffect(() => {
    let mounted = true;
    let subscription: any = null;

    const initAuth = async () => {
      try {
        const { supabase } = await import('../lib/supabase');
        if (!mounted) return;
        const { data: { session: existingSession }, error } = await supabase.auth.getSession();
        if (!mounted) return;
        if (error) console.error("Unable to restore authentication session:", error);
        setSession(existingSession || null);
        setAuthLoading(false);

        const { data } = supabase.auth.onAuthStateChange((_event, newSession) => {
          if (!mounted) return;
          setSession(newSession || null);
          setAuthLoading(false);
        });
        subscription = data.subscription;
      } catch (err) {
        if (mounted) setAuthLoading(false);
      }
    };

    if (isPublicRoute) {
      if ('requestIdleCallback' in window) {
        (window as any).requestIdleCallback(() => initAuth(), { timeout: 2000 });
      } else {
        setTimeout(initAuth, 500);
      }
    } else {
      initAuth();
    }

    return () => {
      mounted = false;
      if (subscription) subscription.unsubscribe();
    };
  }, [isPublicRoute]);

  // When user signs in, check if there was a pending template/design or tab clicked while unauthenticated
  useEffect(() => {
    if (session) {
      try {
        const pendingTemplate = sessionStorage.getItem('ord_pending_template');
        if (pendingTemplate) {
          sessionStorage.removeItem('ord_pending_template');
          const parsed = JSON.parse(pendingTemplate);
          if (parsed) {
            setCustomDesign(parsed);
            if (window.location.pathname !== '/dashboard') {
              navigate('/dashboard');
            }
            return;
          }
        }
        const pendingTab = sessionStorage.getItem('ord_pending_tab');
        if (pendingTab) {
          sessionStorage.removeItem('ord_pending_tab');
          localStorage.setItem('activeTab', pendingTab);
          setActiveTab(pendingTab);
          if (window.location.pathname !== '/dashboard') {
            navigate('/dashboard');
          }
        }
      } catch (e) {
        console.warn('Unable to restore pending template from session storage:', e);
      }
    }
  }, [session, navigate]);

  const handleOpenTemplateWithAuth = useCallback((designPayload: any) => {
    if (!designPayload) return;

    if (!session) {
      try {
        sessionStorage.setItem('ord_pending_template', JSON.stringify(designPayload));
      } catch (e) {
        console.warn('Unable to save pending template to session storage:', e);
      }
      navigate('/login');
      return;
    }

    setCustomDesign(designPayload);
  }, [session, navigate]);

  const handleGoogleLogin = async () => {
    const { checkSupabaseConnection, supabase } = await import('../lib/supabase');
    const isSupabaseAvailable = await checkSupabaseConnection();
    if (!isSupabaseAvailable) {
      alert("Google sign-in is unavailable because the Supabase project URL is invalid or unreachable. Update VITE_SUPABASE_URL and restart the app.");
      return;
    }

    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${getAppUrl()}/login`,
      },
    });

    if (error) {
      console.error("Google sign-in failed:", error);
      alert("Google sign-in is temporarily unavailable. Please try again.");
    }
  };

  const handleLogout = async () => {
    const { supabase } = await import('../lib/supabase');
    await supabase.auth.signOut();
    setSession(null);
    setCustomDesign(null);
    window.dispatchEvent(new Event('ds_projects_updated'));
    navigate('/');
  };

  const renderSection = () => {
    let content: React.ReactNode = null;
    if (customDesign) {
      if (!session) {
        try {
          sessionStorage.setItem('ord_pending_template', JSON.stringify(customDesign));
        } catch (e) {}
        setCustomDesign(null);
        navigate('/login');
        return null;
      }
      content = (
        <CanvasEditor
          templateName={customDesign.name}
          templateCategory={customDesign.category || customDesign.type}
          templateGradient={customDesign.gradient}
          templateSize={customDesign.size}
          templateCanvasWidth={customDesign.canvasWidth}
          templateCanvasHeight={customDesign.canvasHeight}
          templateElements={customDesign.elements}
          templateSlides={customDesign.slides}
          onBack={() => setCustomDesign(null)}
          onSave={(elements, slides, thumbnailUrl, designTitle) => {
            const finalName = designTitle || customDesign.name || 'My Design';
            const designId = customDesign.id || ('design_' + Date.now());
            const updated = {
              ...customDesign,
              id: designId,
              user_id: session?.user?.id,
              originalTemplateId: customDesign.originalTemplateId || customDesign.sourceTemplateId || customDesign.templateId,
              sourceTemplateId: customDesign.sourceTemplateId || customDesign.originalTemplateId || customDesign.templateId,
              name: finalName,
              category: customDesign.category || customDesign.type || 'Presentation',
              type: customDesign.type || customDesign.category || 'Presentation',
              gradient: customDesign.gradient || '#0b131e',
              size: customDesign.size || (customDesign.canvasWidth && customDesign.canvasHeight ? `${customDesign.canvasWidth}×${customDesign.canvasHeight}` : '1920×1080'),
              canvasWidth: customDesign.canvasWidth || 1920,
              canvasHeight: customDesign.canvasHeight || 1080,
              elements: JSON.parse(JSON.stringify(elements)),
              slides: JSON.parse(JSON.stringify(slides)),
              thumbnailUrl: thumbnailUrl || customDesign.thumbnailUrl,
              time: 'Just now',
              createdAt: customDesign.createdAt || customDesign.updatedAt || new Date().toISOString(),
              updatedAt: new Date().toISOString(),
              isSavedProject: true,
              progress: 100
            };
            setCustomDesign(updated);
            if (session?.user?.id) {
              try {
                const storageKey = `ds_recent_projects_${session.user.id}`;
                const stored = localStorage.getItem(storageKey);
                const prev = stored ? JSON.parse(stored) : [];
                const next = [
                  updated,
                  ...prev.filter((p: any) => String(p.id) !== String(designId))
                ].slice(0, 10);
                localStorage.setItem(storageKey, JSON.stringify(next));
                window.dispatchEvent(new Event('ds_projects_updated'));
              } catch {}
            }

            import('../lib/secureFetch').then(({ secureFetch }) => {
              secureFetch('/api/projects', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updated)
              }).catch(() => {});
            });

            toast.success("Design saved successfully!");
          }}
        />
      );
    } else {
      switch (activeTab) {
        case 'design':    content = <DesignStudio onOpenTemplate={handleOpenTemplateWithAuth} />; break;
        case 'assistant': content = <AIAssistant />; break;
        case 'generator': content = <ContentGenerator />; break;
        case 'search':    content = <SmartSearch query={globalSearchQuery} setQuery={setGlobalSearchQuery} onNavigate={handleNavigate} onOpenTemplate={handleOpenTemplateWithAuth} />; break;
        case 'stickers':  content = <StickerLab />; break;
        case 'upload':    content = <AssetUploader onOpenInEditor={handleOpenTemplateWithAuth} />; break;
        case 'settings':  content = <SettingsPage />; break;
        default:          content = <Dashboard onNavigate={handleNavigate} onOpenTemplate={handleOpenTemplateWithAuth} />; break;
      }
    }

    return (
      <Suspense fallback={<RouteSuspenseFallback />}>
        {content}
      </Suspense>
    );
  };

  const navItems = [
    { id: 'home', label: 'Home', icon: HomeIcon },
    { id: 'design', label: 'Design Studio', icon: Palette },
    { id: 'generator', label: 'AI Writer', icon: Plus },
    { id: 'stickers', label: 'Sticker Lab', icon: StickyNote },
    { id: 'search', label: 'Smart Search', icon: SearchIcon },
  ];

  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0d0d14] text-white">
        Loading...
      </div>
    );
  }

  return (
    <Suspense fallback={<RouteSuspenseFallback />}>
      <Routes>
        {/* Public Pages */}
        <Route path="/" element={<PublicLayout><PublicHome /></PublicLayout>} />
        <Route path="/about" element={<PublicLayout><About /></PublicLayout>} />
        <Route path="/contact" element={<PublicLayout><Contact /></PublicLayout>} />
        <Route path="/blog" element={<PublicLayout><Blog /></PublicLayout>} />
        <Route path="/blog/:slug" element={<PublicLayout><BlogPost /></PublicLayout>} />
        
        {/* Features */}
        <Route path="/features/ai-presentation-maker" element={<PublicLayout><AIPresentationMaker /></PublicLayout>} />
        <Route path="/features/ai-copywriting-assistant" element={<PublicLayout><AICopywritingAssistant /></PublicLayout>} />
        <Route path="/features/ai-sticker-generator" element={<PublicLayout><AIStickerGenerator /></PublicLayout>} />
        <Route path="/features/vector-editor" element={<PublicLayout><VectorEditor /></PublicLayout>} />
        <Route path="/features/pptx-export" element={<PublicLayout><PPTXExport /></PublicLayout>} />
        <Route path="/features/svg-export" element={<PublicLayout><SVGExport /></PublicLayout>} />
        <Route path="/features/pdf-export" element={<PublicLayout><PDFExport /></PublicLayout>} />

        {/* Legal Policies */}
        <Route path="/privacy-policy" element={<PublicLayout><PrivacyPolicy /></PublicLayout>} />
        <Route path="/terms-of-service" element={<PublicLayout><TermsOfService /></PublicLayout>} />
        <Route path="/cookie-policy" element={<PublicLayout><CookiePolicy /></PublicLayout>} />
        <Route path="/disclaimer" element={<PublicLayout><Disclaimer /></PublicLayout>} />

        {/* Authentication */}
        <Route path="/login" element={session ? <Navigate to="/dashboard" replace /> : <AuthPage onGoogleLogin={handleGoogleLogin} />} />
        <Route path="/signup" element={session ? <Navigate to="/dashboard" replace /> : <SignupPage />} />
        <Route path="/forgot-password" element={session ? <Navigate to="/dashboard" replace /> : <ForgotPasswordPage />} />

        {/* Developer / Internal Template Diversity Audit Tool */}
        <Route path="/template-audit" element={<TemplateAuditPage />} />
        <Route path="/admin/template-audit" element={<TemplateAuditPage />} />

        {/* Dashboard Route - Allows Guest Template Library Discovery & Gated Editing */}
        <Route 
          path="/dashboard" 
          element={
            <DashboardLayout
              isMobile={isMobile}
              activeTab={activeTab}
              handleNavigate={handleNavigate}
              isCollapsed={isCollapsed}
              setIsCollapsed={setIsCollapsed}
              customDesign={customDesign}
              setCustomDesign={setCustomDesign}
              globalSearchQuery={globalSearchQuery}
              setGlobalSearchQuery={setGlobalSearchQuery}
              topSearchRef={topSearchRef}
              showNotif={showNotif}
              setShowNotif={setShowNotif}
              showProfile={showProfile}
              setShowProfile={setShowProfile}
              handleGoogleLogin={handleGoogleLogin}
              handleLogout={handleLogout}
              notifRef={notifRef}
              profileRef={profileRef}
              loading={loading}
              loadingKey={loadingKey}
              session={session}
              renderSection={renderSection}
            />
          } 
        />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
}

interface DashboardLayoutProps {
  isMobile: boolean;
  activeTab: string;
  handleNavigate: (tab: string) => void;
  isCollapsed: boolean;
  setIsCollapsed: (collapsed: boolean) => void;
  customDesign: any;
  setCustomDesign: (design: any) => void;
  globalSearchQuery: string;
  setGlobalSearchQuery: (query: string) => void;
  topSearchRef: React.RefObject<HTMLInputElement | null>;
  showNotif: boolean;
  setShowNotif: (show: boolean) => void;
  showProfile: boolean;
  setShowProfile: (show: boolean) => void;
  handleGoogleLogin: () => void;
  handleLogout: () => void;
  notifRef: React.RefObject<HTMLDivElement | null>;
  profileRef: React.RefObject<HTMLDivElement | null>;
  loading: boolean;
  loadingKey: number;
  session: Session | null;
  renderSection: () => React.ReactNode;
}

function DashboardLayout({
  isMobile,
  activeTab,
  handleNavigate,
  isCollapsed,
  setIsCollapsed,
  customDesign,
  setCustomDesign,
  globalSearchQuery,
  setGlobalSearchQuery,
  topSearchRef,
  showNotif,
  setShowNotif,
  showProfile,
  setShowProfile,
  handleGoogleLogin,
  handleLogout,
  notifRef,
  profileRef,
  loading,
  loadingKey,
  session,
  renderSection
}: DashboardLayoutProps) {
  const navItems = [
    { id: 'home', label: 'Home', icon: HomeIcon },
    { id: 'design', label: 'Design Studio', icon: Palette },
    { id: 'generator', label: 'AI Writer', icon: Plus },
    { id: 'stickers', label: 'Sticker Lab', icon: StickyNote },
    { id: 'search', label: 'Smart Search', icon: SearchIcon },
  ];

  return (
    <div
      className={`vex-root flex w-full min-h-screen relative overflow-hidden ${
        isMobile ? "is-mobile" : "is-desktop"
      }`}
    >
      {/* Floating Background Orbs for 3D Depth */}
      <div className="depth-orb depth-orb-violet" />
      <div className="depth-orb depth-orb-cyan" />

      {/* SIDEBAR */}
      {!isMobile && (
        <div
          className={`flex flex-col glass-3d py-[18px] transition-all duration-300 relative select-none flex-shrink-0 ${
            isCollapsed
              ? "w-[72px] items-center"
              : "w-[220px] px-4"
          }`}
        >
            {/* Toggle Collapse Button */}
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="absolute -right-3 top-8 w-6 h-6 rounded-full bg-[#161622] border border-white/[0.08] flex items-center justify-center text-white/50 hover:text-white cursor-pointer hover:bg-[#1f1f2e] transition-all z-50 shadow-md"
            >
              {isCollapsed ? <ChevronRight size={12} /> : <ChevronLeft size={12} />}
            </button>

            {/* Logo */}
            <div className={`vex-logo font-bold text-white tracking-wider flex items-center gap-2 mb-6 ${isCollapsed ? 'justify-center' : 'px-2'}`}>
              <div className="w-8 h-8 rounded-lg bg-gradient-to-b from-white/[0.07] to-white/[0.01] border border-white/[0.08] flex items-center justify-center flex-shrink-0 shadow-[0_4px_12px_rgba(0,0,0,0.3)]">
                <svg className="w-6 h-6" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="o-grad-1-sidebar" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#00f2fe" />
                      <stop offset="100%" stopColor="#4facfe" />
                    </linearGradient>
                    <linearGradient id="o-grad-2-sidebar" x1="100%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#f355da" />
                      <stop offset="100%" stopColor="#7000ff" />
                    </linearGradient>
                    <linearGradient id="o-grad-3-sidebar" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#ff0844" />
                      <stop offset="100%" stopColor="#ffb199" />
                    </linearGradient>
                    <filter id="o-glow-sidebar" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="4" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>
                  <polygon points="50,12 85,32 85,68 50,88 15,68 15,32" stroke="url(#o-grad-1-sidebar)" strokeWidth="1" strokeDasharray="6 6" opacity="0.35" />
                  <g filter="url(#o-glow-sidebar)">
                    <path d="M 50 20 C 33.4 20, 20 33.4, 20 50 C 20 58.3, 23.4 65.8, 28.8 71.2" 
                          stroke="url(#o-grad-1-sidebar)" strokeWidth="9.5" strokeLinecap="round" />
                    <path d="M 28.8 71.2 C 34.2 76.6, 41.7 80, 50 80 C 66.6 80, 80 66.6, 80 50 C 80 46.5, 79.4 43.1, 78.2 40.0" 
                          stroke="url(#o-grad-2-sidebar)" strokeWidth="9.5" strokeLinecap="round" />
                    <path d="M 78.2 40.0 C 74.8 31.2, 66.6 24.8, 56.8 21.2" 
                          stroke="url(#o-grad-3-sidebar)" strokeWidth="9.5" strokeLinecap="round" />
                    <path d="M 50 40 L 53 47 L 60 50 L 53 53 L 50 60 L 47 53 L 40 50 L 47 47 Z" fill="url(#o-grad-3-sidebar)" />
                  </g>
                </svg>
              </div>
              {!isCollapsed && <span className="font-sans font-bold tracking-tight text-white/95 text-base">rdStudio</span>}
            </div>
            
            {/* Navigation list */}
            <div className="flex flex-col gap-1 w-full">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavigate(item.id)}
                    className={`group flex items-center rounded-xl transition-all relative overflow-hidden focus:outline-none w-full ${
                      isCollapsed ? 'h-[44px] w-[44px] justify-center' : 'h-[42px] px-3.5 gap-3.5 justify-start'
                    } ${
                      isActive 
                        ? 'bg-purple-500/20 text-purple-300 border border-purple-500/35 shadow-[0_0_12px_rgba(139,92,246,0.1)]' 
                        : 'text-white/40 border border-transparent hover:bg-white/[0.04] hover:text-white/70'
                    }`}
                    title={isCollapsed ? item.label : undefined}
                  >
                    {/* Active Indicator bar */}
                    {isActive && !isCollapsed && (
                      <div className="absolute left-0 top-3 bottom-3 w-1 bg-purple-500 rounded-r-md" />
                    )}
                    
                    <Icon size={18} className={isActive ? 'text-purple-400' : 'text-current'} />
                    
                    {!isCollapsed && (
                      <span className={`text-[12.5px] font-semibold tracking-wide ${isActive ? 'text-purple-300' : 'text-current'}`}>
                        {item.label}
                      </span>
                    )}
                    
                    {/* Inline Tooltip for collapsed state */}
                    {isCollapsed && (
                      <div className="absolute left-[78px] bg-neutral-900 border border-white/10 px-2 py-1 rounded-md text-[10px] font-bold text-white/90 opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl z-50">
                        {item.label}
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
            
            <div className={`w-[28px] h-[1px] bg-white/[0.07] my-3 ${isCollapsed ? 'mx-auto' : ''}`} />
            
            {/* Upload item */}
            <button
              onClick={() => handleNavigate('upload')}
              className={`group flex items-center rounded-xl transition-all relative overflow-hidden focus:outline-none w-full ${
                isCollapsed ? 'h-[44px] w-[44px] justify-center' : 'h-[42px] px-3.5 gap-3.5 justify-start'
              } ${
                activeTab === 'upload' 
                  ? 'bg-purple-500/20 text-purple-300 border border-purple-500/35 shadow-[0_0_12px_rgba(139,92,246,0.1)]' 
                  : 'text-white/40 border border-transparent hover:bg-white/[0.04] hover:text-white/70'
              }`}
              title={isCollapsed ? "Upload Assets" : undefined}
            >
              {activeTab === 'upload' && !isCollapsed && (
                <div className="absolute left-0 top-3 bottom-3 w-1 bg-purple-500 rounded-r-md" />
              )}
              <Upload size={18} className={activeTab === 'upload' ? 'text-purple-400' : 'text-current'} />
              {!isCollapsed && (
                <span className={`text-[12.5px] font-semibold tracking-wide ${activeTab === 'upload' ? 'text-purple-300' : 'text-current'}`}>
                  Upload Assets
                </span>
              )}
              {isCollapsed && (
                <div className="absolute left-[78px] bg-neutral-900 border border-white/10 px-2 py-1 rounded-md text-[10px] font-bold text-white/90 opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl z-50">
                  Upload Assets
                </div>
              )}
            </button>
            
            {/* Footer actions */}
            <div className={`mt-auto flex flex-col gap-3 w-full ${isCollapsed ? 'items-center' : ''}`}>
              <button
                onClick={() => handleNavigate('settings')}
                className={`group flex items-center rounded-xl transition-all relative focus:outline-none w-full ${
                  isCollapsed ? 'h-[44px] w-[44px] justify-center' : 'h-[42px] px-3.5 gap-3.5'
                } ${
                  activeTab === 'settings'
                    ? 'bg-purple-500/20 text-purple-300 border border-purple-500/35 shadow-[0_0_12px_rgba(139,92,246,0.1)]'
                    : 'text-white/40 border border-transparent hover:bg-white/[0.04] hover:text-white/70'
                }`}
                title={isCollapsed ? "Settings" : undefined}
              >
                {activeTab === 'settings' && !isCollapsed && (
                  <div className="absolute left-0 top-3 bottom-3 w-1 bg-purple-500 rounded-r-md" />
                )}
                <Settings size={18} className={activeTab === 'settings' ? 'text-purple-400' : 'text-current'} />
                {!isCollapsed && <span className="text-[12.5px] font-semibold">Settings</span>}
                {isCollapsed && (
                  <div className="absolute left-[78px] bg-neutral-900 border border-white/10 px-2 py-1 rounded-md text-[10px] font-bold text-white/90 opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl z-50">
                    Settings
                  </div>
                )}
              </button>
              
              <div 
                className={`flex items-center gap-3 w-full ${isCollapsed ? 'justify-center' : 'px-2'} cursor-pointer hover:opacity-80 transition-opacity`}
                onClick={() => {
                  if (!session) {
                    handleGoogleLogin();
                  } else {
                    setShowProfile(!showProfile);
                  }
                }}
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-600 to-indigo-600 flex items-center justify-center text-xs font-bold text-white shadow-md">
                  {session?.user?.email?.charAt(0).toUpperCase() || "G"}
                </div>
                {!isCollapsed && (
                  <div className="flex flex-col min-w-0">
                    <span className="text-[12.5px] font-bold text-white leading-none">
                      {session ? "My Account" : "Sign In"}
                    </span>
                    <span className="text-[10px] text-white/45 truncate mt-1">
                      {session?.user?.email || "Sign In to ORD Studio"}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
      )}
      
      {/* MAIN AREA */}
      <div className="vex-main flex-1 min-w-0">
        {/* TOP BAR */}
        {!isMobile && (
          <div className="vex-topbar glass-3d">
            <div className="tb-tabs">
              <div className={`tb-tab ${activeTab === 'home' ? 'active' : ''}`} onClick={() => handleNavigate('home')}>Home</div>
              <div className={`tb-tab ${activeTab === 'design' ? 'active' : ''}`} onClick={() => handleNavigate('design')}>Design</div>
              <div className={`tb-tab ${activeTab === 'generator' ? 'active' : ''}`} onClick={() => handleNavigate('generator')}>Create</div>
              <div className={`tb-tab ${activeTab === 'search' ? 'active' : ''}`} onClick={() => handleNavigate('search')}>Search</div>
              <div className={`tb-tab ${activeTab === 'stickers' ? 'active' : ''}`} onClick={() => handleNavigate('stickers')}>Sticker Lab</div>
            </div>
            <div className="tb-search">
              <SearchIcon />
              <input 
                ref={topSearchRef}
                type="text" 
                placeholder="Search templates, tools, content…" 
                value={globalSearchQuery}
                onChange={(e) => {
                  setGlobalSearchQuery(e.target.value);
                  if (activeTab !== 'search') {
                    handleNavigate('search');
                  }
                }}
                onFocus={() => {
                  if (activeTab !== 'search') {
                    handleNavigate('search');
                  }
                }}
              />
              <span className="tb-kbd">⌘K</span>
            </div>
            <div className="tb-actions">
              <div className="relative" ref={notifRef}>
                <div 
                  className={`tb-icon-btn notif-dot ${showNotif ? 'text-[#a78bfa] bg-purple-500/10 border-purple-500/30' : ''}`}
                  onClick={() => setShowNotif(!showNotif)}
                >
                  <Bell />
                </div>
                {showNotif && (
                  <div className="absolute right-0 top-11 w-[260px] bg-[#161622]/95 backdrop-blur-md border border-white/[0.08] rounded-xl p-3 z-50 shadow-2xl flex flex-col gap-2.5">
                    <span className="text-[11px] font-bold text-white/50 uppercase tracking-widest pb-1 border-b border-white/[0.05]">Recent Alerts</span>
                    <div className="flex flex-col gap-2">
                      <div className="text-[11.5px] text-white/80 hover:text-white flex flex-col gap-0.5 border-b border-white/[0.03] pb-2">
                        <span className="font-semibold text-purple-400">✨ Export Complete</span>
                        <span className="text-white/50 text-[10.5px]">Canvas layout exported as PDF successfully.</span>
                      </div>
                      <div className="text-[11.5px] text-white/80 hover:text-white flex flex-col gap-0.5 border-b border-white/[0.03] pb-2">
                        <span className="font-semibold text-blue-400">⚡ Sticker Lab Updated</span>
                        <span className="text-white/50 text-[10.5px]">Sticker Studio added 12 new AI generation models.</span>
                      </div>
                      <div className="text-[11.5px] text-white/80 hover:text-white flex flex-col gap-0.5">
                        <span className="font-semibold text-pink-400">🎉 Account Fully Active</span>
                        <span className="text-white/50 text-[10.5px]">All vectors and PowerPoint exports are ready to use.</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="relative" ref={profileRef}>
                <div 
                  className={`tb-icon-btn ${showProfile ? 'text-[#a78bfa] bg-purple-500/10 border-purple-500/30' : ''}`}
                  onClick={() => setShowProfile(!showProfile)}
                >
                  <User />
                </div>
                {showProfile && (
                  <div className="absolute right-0 top-11 w-[250px] bg-[#161622]/95 backdrop-blur-md border border-white/[0.08] rounded-xl p-3 z-50 shadow-2xl flex flex-col gap-2.5">
                    <div className="flex flex-col min-w-0 border-b border-white/[0.05] pb-2">
                      <span className="text-[12.5px] font-bold text-white leading-none">
                        {session ? "My Account" : "Guest User"}
                      </span>
                      <span className="text-[11px] text-white/60 truncate mt-1">
                        {session?.user?.email ?? "Not signed in"}
                      </span>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <button
                        onClick={() => {
                          handleNavigate('settings');
                          setShowProfile(false);
                        }}
                        className="w-full text-left px-2 py-1.5 text-[11.5px] text-white/70 hover:text-white hover:bg-white/[0.04] rounded-lg flex items-center gap-2 cursor-pointer transition-colors"
                      >
                        <Settings size={13} className="text-white/40" />
                        Settings
                      </button>
                      {session ? (
                        <button
                          onClick={async () => {
                            await handleLogout();
                            setShowProfile(false);
                          }}
                          className="w-full text-left px-3 py-2 text-[13px] text-red-400 hover:text-red-300 hover:bg-white/[0.05] rounded-xl flex items-center gap-2.5 cursor-pointer transition-all duration-200 border border-transparent hover:border-red-500/10"
                        >
                          <LogOut size={14} className="text-red-400/70" />
                          Logout
                        </button>
                      ) : (
                        <button
                          onClick={() => {
                            handleGoogleLogin();
                            setShowProfile(false);
                          }}
                          className="w-full text-left px-3 py-2 text-[13px] text-purple-400 hover:text-purple-300 hover:bg-white/[0.05] rounded-xl flex items-center gap-2.5 cursor-pointer transition-all duration-200 border border-transparent"
                        >
                          Sign In / Sign Up
                        </button>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {!session ? (
                <button
                  className="tb-cta"
                  onClick={handleGoogleLogin}
                >
                  Sign in with Google
                </button>
              ) : (
                <button
                  className="tb-cta"
                  onClick={() => handleNavigate('assistant')}
                >
                  + Start a Chat
                </button>
              )}
            </div>
          </div>
        )}
        {isMobile && (
          <div
            className="glass-3d"
            style={{
              padding: "12px 16px",
              position: "sticky",
              top: 0,
              zIndex: 50,
              display: "flex",
              flexDirection: "column",
              gap: "10px"
            }}
          >
            {/* Top Header Row */}
            <div style={{ display: "flex", alignItems: "center", width: "100%", justifyContent: "space-between" }}>
              {/* Logo */}
              <div 
                onClick={() => handleNavigate('home')} 
                style={{ display: "flex", alignItems: "center", gap: "6px", cursor: "pointer" }}
              >
                <div style={{ width: "24px", height: "24px", borderRadius: "6px", background: "gradient-to-b from-white/[0.07] to-white/[0.01]", border: "1px solid rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, boxShadow: "0 2px 8px rgba(0,0,0,0.3)" }}>
                  <svg style={{ width: "18px", height: "18px" }} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="o-grad-1-mobile" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#00f2fe" />
                        <stop offset="100%" stopColor="#4facfe" />
                      </linearGradient>
                      <linearGradient id="o-grad-2-mobile" x1="100%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#f355da" />
                        <stop offset="100%" stopColor="#7000ff" />
                      </linearGradient>
                      <linearGradient id="o-grad-3-mobile" x1="0%" y1="100%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#ff0844" />
                        <stop offset="100%" stopColor="#ffb199" />
                      </linearGradient>
                      <filter id="o-glow-mobile" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="4" result="blur" />
                        <feMerge>
                          <feMergeNode in="blur" />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>
                    </defs>
                    <polygon points="50,12 85,32 85,68 50,88 15,68 15,32" stroke="url(#o-grad-1-mobile)" strokeWidth="1" strokeDasharray="6 6" opacity="0.35" />
                    <g filter="url(#o-glow-mobile)">
                      <path d="M 50 20 C 33.4 20, 20 33.4, 20 50 C 20 58.3, 23.4 65.8, 28.8 71.2" 
                            stroke="url(#o-grad-1-mobile)" strokeWidth="9.5" strokeLinecap="round" />
                      <path d="M 28.8 71.2 C 34.2 76.6, 41.7 80, 50 80 C 66.6 80, 80 66.6, 80 50 C 80 46.5, 79.4 43.1, 78.2 40.0" 
                            stroke="url(#o-grad-2-mobile)" strokeWidth="9.5" strokeLinecap="round" />
                      <path d="M 78.2 40.0 C 74.8 31.2, 66.6 24.8, 56.8 21.2" 
                            stroke="url(#o-grad-3-mobile)" strokeWidth="9.5" strokeLinecap="round" />
                      <path d="M 50 40 L 53 47 L 60 50 L 53 53 L 50 60 L 47 53 L 40 50 L 47 47 Z" fill="url(#o-grad-3-mobile)" />
                    </g>
                  </svg>
                </div>
                <span className="font-sans font-bold tracking-tight text-white/95 text-sm">rdStudio</span>
              </div>
              
              {/* Right Actions */}
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <button
                  onClick={() => handleNavigate('settings')}
                  style={{
                    background: activeTab === 'settings' ? 'rgba(139,92,246,0.15)' : 'rgba(255,255,255,0.04)',
                    border: activeTab === 'settings' ? '1px solid rgba(139,92,246,0.4)' : '1px solid rgba(255,255,255,0.06)',
                    borderRadius: "8px",
                    width: "32px",
                    height: "32px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: activeTab === 'settings' ? '#a78bfa' : 'rgba(255,255,255,0.6)',
                    cursor: "pointer",
                  }}
                  title="Settings"
                >
                  <Settings size={15} />
                </button>
                {session ? (
                  <button
                    onClick={handleLogout}
                    style={{
                      background: "rgba(239,68,68,0.12)",
                      border: "1px solid rgba(239,68,68,0.25)",
                      borderRadius: "8px",
                      height: "32px",
                      padding: "0 10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "5px",
                      color: "#f87171",
                      cursor: "pointer",
                    }}
                    title="Logout"
                  >
                    <LogOut size={13} />
                    <span style={{ fontSize: "11.5px", fontWeight: "bold" }}>Logout</span>
                  </button>
                ) : (
                  <button
                    onClick={handleGoogleLogin}
                    style={{
                      background: "rgba(139,92,246,0.2)",
                      border: "1px solid rgba(139,92,246,0.4)",
                      borderRadius: "8px",
                      height: "32px",
                      padding: "0 10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "5px",
                      color: "#c084fc",
                      cursor: "pointer",
                    }}
                    title="Sign In"
                  >
                    <span style={{ fontSize: "11.5px", fontWeight: "bold" }}>Sign In</span>
                  </button>
                )}
              </div>
            </div>

            {/* Search Input */}
            <input
              placeholder="Search templates, tools, content..."
              className="tb-search"
              value={globalSearchQuery}
              onChange={(e) => {
                setGlobalSearchQuery(e.target.value);
                if (activeTab !== 'search') {
                  handleNavigate('search');
                }
              }}
              onFocus={() => {
                if (activeTab !== 'search') {
                  handleNavigate('search');
                }
              }}
              style={{
                width: "100%",
                padding: "10px 12px",
                borderRadius: "10px",
                background: "#161622",
                border: "1px solid rgba(255,255,255,0.08)",
                color: "white",
                fontSize: "12.5px"
              }}
            />
          </div>
        )}
        <LoadingBar loading={loading} key={`lb-${loadingKey}`} />
        {/* CONTENT */}
        <div
          className="vex-content"
          style={{
            paddingBottom: isMobile ? "100px" : undefined,
          }}
        >
          {isMobile ? (
            <PageTransition tabKey={activeTab}>
              {renderSection()}
            </PageTransition>
          ) : (
            renderSection()
          )}
        </div>
        {/* Floating Chat Button */}
        {isMobile && (
          <button
            onClick={() => handleNavigate('assistant')}
            className="fixed bottom-20 right-4 w-14 h-14 rounded-full bg-purple-600 text-white shadow-xl flex items-center justify-center z-50"
          >
            <Plus size={24} />
          </button>
        )}
        {/* Mobile Bottom Navigation */}
        {isMobile && (() => {
          const mobileNavItems = [
            { id: 'home', label: 'Home', icon: HomeIcon },
            { id: 'design', label: 'Design', icon: Palette },
            { id: 'generator', label: 'Writer', icon: Plus },
            { id: 'stickers', label: 'Stickers', icon: StickyNote },
            { id: 'upload', label: 'Uploads', icon: Upload },
            { id: 'search', label: 'Search', icon: SearchIcon },
          ];
          return (
            <div
              className="fixed bottom-0 left-0 right-0 z-40 flex justify-around items-center glass-3d"
              style={{
                height: "72px",
              }}
            >
              {mobileNavItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;

                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavigate(item.id)}
                    className="flex flex-col items-center justify-center gap-1"
                  >
                    <Icon
                      size={20}
                      color={isActive ? "#a855f7" : "rgba(255,255,255,0.5)"}
                    />
                    <span
                      style={{
                        fontSize: "10px",
                        color: isActive
                          ? "#a855f7"
                          : "rgba(255,255,255,0.5)",
                      }}
                    >
                      {item.label}
                    </span>
                  </button>
                );
              })}
            </div>
          );
        })()}
      </div>
    </div>
  );
}


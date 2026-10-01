import { Routes, Route, Navigate, useNavigate, useLocation } from "react-router-dom";
import React, { useState, useEffect, Suspense, lazy } from 'react';

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

// Lazy-loaded Developer / Template Audit Tool
const TemplateAuditPage = lazy(() => import('./components/TemplateAuditPage').then(m => ({ default: m.TemplateAuditPage })));

// Lazy-loaded Dashboard / Studio View (Keeps initial bundle extremely small for Home page)
const DashboardView = lazy(() => import('./DashboardView'));

import { getAppUrl } from "../lib/getAppUrl";
import type { Session } from "@supabase/supabase-js";

const RouteSuspenseFallback = () => (
  <div className="min-h-[60vh] flex items-center justify-center bg-[#0d0d14] text-white">
    <div className="w-7 h-7 border-2 border-violet-500 border-t-transparent rounded-full animate-spin" />
  </div>
);

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const isPublicRoute = location.pathname === '/' || location.pathname.startsWith('/blog') || location.pathname.startsWith('/features') || location.pathname === '/about' || location.pathname === '/contact' || location.pathname === '/privacy-policy' || location.pathname === '/terms-of-service' || location.pathname === '/cookie-policy' || location.pathname === '/disclaimer';

  const [session, setSession] = useState<Session | null>(null);
  const [authLoading, setAuthLoading] = useState(() => !isPublicRoute);
  const [pendingDesign, setPendingDesign] = useState<any | null>(null);

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
      let triggered = false;
      const triggerAuth = () => {
        if (triggered) return;
        triggered = true;
        cleanupListeners();
        initAuth();
      };

      const events = ['pointerdown', 'keydown', 'scroll', 'touchstart'];
      const cleanupListeners = () => {
        events.forEach(e => window.removeEventListener(e, triggerAuth));
      };
      events.forEach(e => window.addEventListener(e, triggerAuth, { once: true, passive: true }));

      // Fallback timer: only trigger long after initial paint (5 seconds)
      const timer = setTimeout(() => {
        if ('requestIdleCallback' in window) {
          (window as any).requestIdleCallback(triggerAuth, { timeout: 3000 });
        } else {
          triggerAuth();
        }
      }, 5000);

      return () => {
        mounted = false;
        clearTimeout(timer);
        cleanupListeners();
        if (subscription) subscription.unsubscribe();
      };
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
            setPendingDesign(parsed);
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
          if (window.location.pathname !== '/dashboard') {
            navigate('/dashboard');
          }
        }
      } catch (e) {
        console.warn('Unable to restore pending template from session storage:', e);
      }
    }
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
    setPendingDesign(null);
    window.dispatchEvent(new Event('ds_projects_updated'));
    navigate('/');
  };

  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0d0d14] text-white">
        Loading...
      </div>
    );
  }

  const isLoggedIn = !!session;

  return (
    <Suspense fallback={<RouteSuspenseFallback />}>
      <Routes>
        {/* Public Pages */}
        <Route path="/" element={<PublicLayout isLoggedIn={isLoggedIn}><PublicHome /></PublicLayout>} />
        <Route path="/about" element={<PublicLayout isLoggedIn={isLoggedIn}><About /></PublicLayout>} />
        <Route path="/contact" element={<PublicLayout isLoggedIn={isLoggedIn}><Contact /></PublicLayout>} />
        <Route path="/blog" element={<PublicLayout isLoggedIn={isLoggedIn}><Blog /></PublicLayout>} />
        <Route path="/blog/:slug" element={<PublicLayout isLoggedIn={isLoggedIn}><BlogPost /></PublicLayout>} />
        
        {/* Features */}
        <Route path="/features/ai-presentation-maker" element={<PublicLayout isLoggedIn={isLoggedIn}><AIPresentationMaker /></PublicLayout>} />
        <Route path="/features/ai-copywriting-assistant" element={<PublicLayout isLoggedIn={isLoggedIn}><AICopywritingAssistant /></PublicLayout>} />
        <Route path="/features/ai-sticker-generator" element={<PublicLayout isLoggedIn={isLoggedIn}><AIStickerGenerator /></PublicLayout>} />
        <Route path="/features/vector-editor" element={<PublicLayout isLoggedIn={isLoggedIn}><VectorEditor /></PublicLayout>} />
        <Route path="/features/pptx-export" element={<PublicLayout isLoggedIn={isLoggedIn}><PPTXExport /></PublicLayout>} />
        <Route path="/features/svg-export" element={<PublicLayout isLoggedIn={isLoggedIn}><SVGExport /></PublicLayout>} />
        <Route path="/features/pdf-export" element={<PublicLayout isLoggedIn={isLoggedIn}><PDFExport /></PublicLayout>} />

        {/* Legal Policies */}
        <Route path="/privacy-policy" element={<PublicLayout isLoggedIn={isLoggedIn}><PrivacyPolicy /></PublicLayout>} />
        <Route path="/terms-of-service" element={<PublicLayout isLoggedIn={isLoggedIn}><TermsOfService /></PublicLayout>} />
        <Route path="/cookie-policy" element={<PublicLayout isLoggedIn={isLoggedIn}><CookiePolicy /></PublicLayout>} />
        <Route path="/disclaimer" element={<PublicLayout isLoggedIn={isLoggedIn}><Disclaimer /></PublicLayout>} />

        {/* Authentication - login page remains unmodified */}
        <Route path="/login" element={session ? <Navigate to="/dashboard" replace /> : <AuthPage onGoogleLogin={handleGoogleLogin} />} />
        <Route path="/signup" element={session ? <Navigate to="/dashboard" replace /> : <SignupPage />} />
        <Route path="/forgot-password" element={session ? <Navigate to="/dashboard" replace /> : <ForgotPasswordPage />} />

        {/* Developer / Internal Template Diversity Audit Tool */}
        <Route path="/template-audit" element={<TemplateAuditPage />} />
        <Route path="/admin/template-audit" element={<TemplateAuditPage />} />

        {/* Studio & Dashboard Routes - Code Split into dedicated lazy chunk */}
        <Route 
          path="/dashboard" 
          element={
            <DashboardView
              session={session}
              handleGoogleLogin={handleGoogleLogin}
              handleLogout={handleLogout}
              initialCustomDesign={pendingDesign}
              onClearCustomDesign={() => setPendingDesign(null)}
            />
          } 
        />
        <Route 
          path="/design" 
          element={
            <DashboardView
              session={session}
              handleGoogleLogin={handleGoogleLogin}
              handleLogout={handleLogout}
              initialCustomDesign={pendingDesign}
              onClearCustomDesign={() => setPendingDesign(null)}
            />
          } 
        />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
}

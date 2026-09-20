import {
  Search,
  Home as HomeIcon,
  Palette,
  Plus,
  StickyNote,
  Image,
  Video,
  Globe,
  Upload,
  ChevronDown,
  Bell,
  User,
  ArrowRight,
  Settings,
} from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

export default function Home() {
const isMobile = useIsMobile();
console.log("Home isMobile:", isMobile);
 return (
<div className={`vex-root w-full min-h-screen ${isMobile ? "is-mobile" : "is-desktop"}`}>
      {/* SIDEBAR — only on desktop */}
      {!isMobile && (
        <div className="vex-sidebar">
          <div className="vex-logo">O<span>·</span>S</div>
          
          <div className="sb-item active" title="Home">
            <HomeIcon />
          </div>
          <div className="sb-item" title="Design">
            <Palette />
          </div>
          <div className="sb-item" title="Create">
            <Plus />
          </div>
          <div className="sb-item" title="Templates">
           <Search />
          </div>
          <div className="sb-item" title="Sticker Lab">
            <StickyNote />
          </div>
          
          <div className="sb-divider"></div>
          
          <div className="sb-item" title="Search">
            <Search />
          </div>
          <div className="sb-item" title="Upload">
            <Upload />
          </div>
          
          <div className="sb-bottom">
            <div className="sb-item" title="Settings">
              <Settings />
            </div>
            <div className="sb-avatar">CR</div>
          </div>
        </div>
      )}
      
      {/* MAIN AREA */}
      <div className="vex-main">
        {/* TOP BAR */}
        <div className="vex-topbar">
          {isMobile && <div className="vex-mobile-logo-visible">O<span>·</span>S</div>}
          {!isMobile && (
            <div className="tb-tabs">
              <div className="tb-tab active">Home</div>
              <div className="tb-tab">Design</div>
              <div className="tb-tab">Create</div>
              <div className="tb-tab">Search</div>
              <div className="tb-tab">Sticker Lab</div>
            </div>
          )}
          {!isMobile && (
            <div className="tb-search">
             <Search />
              <input type="text" placeholder="Search templates, tools, content…" readOnly />
              <span className="tb-kbd">⌘K</span>
            </div>
          )}
          <div className="tb-actions">
            <div className="tb-icon-btn notif-dot">
              <Bell />
            </div>
            <div className="tb-icon-btn">
              <User />
            </div>
            {isMobile ? (
              <button className="tb-cta tb-cta-round">+</button>
            ) : (
              <button className="tb-cta">+ Start a Chat</button>
            )}
          </div>
        </div>
        
        {/* CONTENT */}
        <div className="vex-content">
          
          {/* WELCOME BANNER */}
          <div style={{
            position: 'relative',
            padding: isMobile ? '16px' : '40px 48px',
            background: 'linear-gradient(135deg, #18132b 0%, #0e0c18 100%)',
            border: '1px solid rgba(139, 92, 246, 0.25)',
            borderRadius: '16px',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
            backdropFilter: 'none',
            WebkitBackdropFilter: 'none',
            minHeight: isMobile ? 'auto' : '160px',
            overflow: 'hidden',
           marginBottom: '28px',
         display: 'flex',
flexDirection: isMobile ? 'column' : 'row',
alignItems: isMobile ? 'flex-start' : 'center',
justifyContent: 'space-between',
gap: isMobile ? '16px' : '32px'
          }}>
            {/* Visual glow element */}
            <div style={{
              position: 'absolute',
              top: '-50px',
              left: '-50px',
              width: '150px',
              height: '150px',
              background: 'radial-gradient(circle, rgba(139, 92, 246, 0.25) 0%, transparent 70%)',
              filter: 'blur(30px)',
              pointerEvents: 'none'
            }} />
            
            <div style={{ position: 'relative', zIndex: 2 }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                background: 'rgba(139, 92, 246, 0.15)',
                border: '1px solid rgba(139, 92, 246, 0.25)',
                borderRadius: '20px',
                padding: '4px 12px',
                fontSize: '11px',
                fontWeight: 600,
                color: '#c4b5fd',
                marginBottom: '10px',
                letterSpacing: '0.5px',
                textTransform: 'uppercase'
              }}>
                ✦ AI Creative Suite
              </div>
              <h1 style={{
                fontFamily: 'Syne, sans-serif',
               fontSize: isMobile ? '16px' : '22px',
lineHeight: 1.3,
wordBreak: 'break-word',
                fontWeight: 700,
                color: '#fff',
                margin: '0 0 6px',
                letterSpacing: '-0.01em'
              }}>
                Welcome back, Creator
              </h1>
              <p style={{
                fontSize: '12.5px',
                color: 'rgba(255, 255, 255, 0.45)',
                margin: 0,
                lineHeight: 1.5,
                maxWidth: '480px'
              }}>
                Transform your ideas into stunning layouts, documents, and stickers. Select a tool below to launch your next project.
              </p>
            </div>
            
            {/* Minimalist status widget */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
              gap: '6px',
              position: 'relative',
              zIndex: 2
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.06)',
                borderRadius: '8px',
                padding: '6px 12px',
                fontSize: '11.5px',
                color: 'rgba(255, 255, 255, 0.65)'
              }}>
                <span style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: '#10b981',
                  boxShadow: '0 0 8px #10b981',
                  display: 'inline-block'
                }} />
                All systems operational
              </div>
              <div style={{
                fontSize: '11px',
                color: 'rgba(255, 255, 255, 0.3)',
                fontWeight: 500
              }}>
                ORDSTUDIO v3.2 • ACTIVE
              </div>
            </div>
          </div>
          
          {/* TOOLS */}
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '14px',
              marginTop: '4px'
            }}>
              <div style={{
                width: '3px',
                height: '14px',
                background: '#8b5cf6',
                borderRadius: '2px',
                boxShadow: '0 0 8px #8b5cf6'
              }} />
              <span style={{
                fontFamily: 'Syne, sans-serif',
                fontSize: '11.5px',
                fontWeight: 700,
                color: 'rgba(255, 255, 255, 0.5)',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}>
                Quick Tools
              </span>
            </div>
     <div
   className="tools-grid"
   style={{
     display: "grid",
    gridTemplateColumns: isMobile
   ? "repeat(2, 1fr)"
   : "repeat(5, 1fr)",
     gap: "12px",
   }}
 >
              <div className="tool-card">
                <div className="tool-icon" style={{background: 'rgba(139,92,246,0.15)'}}>🤖</div>
                <span>AI Chat</span>
              </div>
              <div className="tool-card">
                <div className="tool-icon" style={{background: 'rgba(96,165,250,0.15)'}}>🎨</div>
                <span>Design</span>
              </div>
              <div className="tool-card">
                <div className="tool-icon" style={{background: 'rgba(52,211,153,0.15)'}}>✏️</div>
                <span>Create</span>
              </div>
              <div className="tool-card">
                <div className="tool-icon" style={{background: 'rgba(251,191,36,0.15)'}}>🖼️</div>
                <span>Photo Edit</span>
              </div>
              <div className="tool-card">
                <div className="tool-icon" style={{background: 'rgba(167,139,250,0.15)'}}>📤</div>
                <span>Uploads</span>
              </div>
            </div>
          </div>
          
          {/* WHATS NEW */}
          <div>
            <div className="section-header">
              <div className="section-title">What's New</div>
              <div className="section-link">See all →</div>
            </div>
            <div className="cards-row">
              <div className="new-card c1">
                <div className="nc-decoration"></div>
                <div>
                  <div className="nc-badge">✦ NEW</div>
                  <div className="nc-title">Design with AI</div>
                  <div className="nc-desc">Generate stunning visuals instantly from a prompt</div>
                </div>
                <div className="nc-action">
                  Try it now
                  <ArrowRight />
                </div>
              </div>
              <div className="new-card c2">
                <div className="nc-decoration"></div>
                <div>
                  <div className="nc-badge">✦ NEW</div>
                  <div className="nc-title">Smart Content</div>
                  <div className="nc-desc">Write essays, pitches and articles with AI</div>
                </div>
                <div className="nc-action">
                  Try it now
                  <ArrowRight />
                </div>
              </div>
              <div className="new-card c3">
                <div className="nc-decoration"></div>
                <div>
                  <div className="nc-badge">✦ NEW</div>
                  <div className="nc-title">Template Library</div>
                  <div className="nc-desc">500+ pro-grade design templates to get started</div>
                </div>
                <div className="nc-action">
                  Browse
                  <ArrowRight />
                </div>
              </div>
              <div className="new-card c4">
                <div className="nc-decoration"></div>
                <div>
                  <div className="nc-badge">✦ NEW</div>
                  <div className="nc-title">Sticker Studio</div>
                  <div className="nc-desc">AI-generated stickers in any style you want</div>
                </div>
                <div className="nc-action">
                  Explore
                  <ArrowRight />
                </div>
              </div>
            </div>
          </div>
          
          {/* CREATIVE RESOURCE HUB */}
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '14px',
              marginTop: '10px'
            }}>
              <div style={{
                width: '3px',
                height: '14px',
                background: '#8b5cf6',
                borderRadius: '2px',
                boxShadow: '0 0 8px #8b5cf6'
              }} />
              <span style={{
                fontFamily: 'Syne, sans-serif',
                fontSize: '11.5px',
                fontWeight: 700,
                color: 'rgba(255, 255, 255, 0.5)',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}>
                Creative Resource Hub
              </span>
            </div>
            
            <div style={{
              display: 'grid',
gridTemplateColumns: isMobile
  ? 'repeat(2, 1fr)'
  : 'repeat(3, 1fr)',
              gap: '16px'
            }}>
              {/* Card 1: Canvas Shortcuts */}
              <div style={{
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                borderRadius: '12px',
                padding: '16px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#a78bfa' }}>
                  <span style={{ fontSize: '16px' }}>⌨️</span>
                  <h3 style={{ fontSize: '13px', fontWeight: 600, color: '#fff', margin: 0 }}>Canvas Shortcuts</h3>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '11.5px', color: 'rgba(255,255,255,0.45)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.03)', paddingBottom: '4px' }}>
                    <span>Undo / Redo</span>
                    <span style={{ color: 'rgba(255,255,255,0.7)', fontFamily: 'monospace' }}>Ctrl + Z / Y</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.03)', paddingBottom: '4px' }}>
                    <span>Delete Element</span>
                    <span style={{ color: 'rgba(255,255,255,0.7)', fontFamily: 'monospace' }}>Del / Backspace</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.03)', paddingBottom: '4px' }}>
                    <span>Edit Text Layer</span>
                    <span style={{ color: 'rgba(255,255,255,0.7)' }}>Double-Click Text</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>Proportional Scale</span>
                    <span style={{ color: 'rgba(255,255,255,0.7)' }}>Shift + Resize</span>
                  </div>
                </div>
              </div>

              {/* Card 2: AI Prompting Pro-Tips */}
              <div style={{
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                borderRadius: '12px',
                padding: '16px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#60a5fa' }}>
                  <span style={{ fontSize: '16px' }}>💡</span>
                  <h3 style={{ fontSize: '13px', fontWeight: 600, color: '#fff', margin: 0 }}>AI Prompting Tips</h3>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '11.5px', color: 'rgba(255,255,255,0.45)', lineHeight: 1.4 }}>
                  <div>• Mention style terms like <span style={{ color: '#c4b5fd' }}>"flat design"</span>, <span style={{ color: '#c4b5fd' }}>"neon glow"</span>, or <span style={{ color: '#c4b5fd' }}>"glassmorphism"</span>.</div>
                  <div>• Describe layout composition (e.g. <span style={{ color: 'rgba(255,255,255,0.6)' }}>"centered layout with a bold heading at the top"</span>).</div>
                  <div>• Request harmonious palettes by specifying color tones like <span style={{ color: 'rgba(255,255,255,0.6)' }}>"pastel theme"</span> or <span style={{ color: 'rgba(255,255,255,0.6)' }}>"dark cyber theme"</span>.</div>
                </div>
              </div>

              {/* Card 3: Export Formats Reference */}
              <div style={{
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                borderRadius: '12px',
                padding: '16px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#fbbf24' }}>
                  <span style={{ fontSize: '16px' }}>📁</span>
                  <h3 style={{ fontSize: '13px', fontWeight: 600, color: '#fff', margin: 0 }}>Export Format Guide</h3>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '11.5px', color: 'rgba(255,255,255,0.45)' }}>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <strong style={{ color: '#ef4444', minWidth: '35px' }}>PDF:</strong>
                    <span>Multi-page print-ready docs.</span>
                  </div>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <strong style={{ color: '#ec4899', minWidth: '35px' }}>PPTX:</strong>
                    <span>Fully editable PowerPoint slides.</span>
                  </div>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <strong style={{ color: '#f59e0b', minWidth: '35px' }}>SVG:</strong>
                    <span>High-resolution vectors for editing.</span>
                  </div>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <strong style={{ color: '#3b82f6', minWidth: '35px' }}>PNG:</strong>
                    <span>High-quality web-ready images.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>

      {/* MOBILE BOTTOM NAVIGATION — only on mobile */}
      {isMobile && (
        <div className="vex-bottom-nav vex-bottom-nav-visible">
          <div className="bn-item active" title="Home">
            <HomeIcon />
            <span>Home</span>
          </div>
          <div className="bn-item" title="Design">
            <Palette />
            <span>Design</span>
          </div>
          <div className="bn-item" title="Create">
            <Plus />
            <span>Create</span>
          </div>
          <div className="bn-item" title="Templates">
     <Search />
            <span>Templates</span>
          </div>
          <div className="bn-item" title="Sticker Lab">
            <StickyNote />
            <span>Stickers</span>
          </div>
        </div>
      )}
    </div>
  );
}

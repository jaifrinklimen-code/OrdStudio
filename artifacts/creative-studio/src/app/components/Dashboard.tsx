import { Sparkles, PenTool, FileText, Search, Bot, Upload, Image, Video, Layout, Globe, Star } from 'lucide-react';
import { FadeIn } from './FadeIn';

interface DashboardProps {
  onNavigate: (tab: string) => void;
}

const tools = [
  { id: 'assistant', label: 'AI Chat',    icon: Bot,      bg: 'rgba(139,92,246,0.15)',  color: '#a78bfa' },
  { id: 'design',    label: 'Design',     icon: PenTool,  bg: 'rgba(99,102,241,0.15)',  color: '#818cf8' },
  { id: 'generator', label: 'Create',     icon: FileText, bg: 'rgba(79,70,229,0.15)',   color: '#a5b4fc' },
  { id: 'search',    label: 'Search',     icon: Search,   bg: 'rgba(109,40,217,0.15)',  color: '#c4b5fd' },
  { id: 'stickers',  label: 'Stickers',   icon: Sparkles, bg: 'rgba(124,58,237,0.15)',  color: '#ddd6fe' },
  { id: 'design',    label: 'Templates',  icon: Layout,   bg: 'rgba(67,56,202,0.15)',   color: '#a5b4fc' },
  { id: 'design',    label: 'Photo Edit', icon: Image,    bg: 'rgba(91,33,182,0.15)',   color: '#c4b5fd' },
  { id: 'generator', label: 'Video',      icon: Video,    bg: 'rgba(55,48,163,0.15)',   color: '#818cf8' },
  { id: 'design',    label: 'Web',        icon: Globe,    bg: 'rgba(76,29,149,0.15)',   color: '#a78bfa' },
  { id: 'generator', label: 'Upload',     icon: Upload,   bg: 'rgba(109,40,217,0.15)',  color: '#ddd6fe' },
];

const featured = [
  { title: 'Design with AI',     sub: 'Generate stunning visuals instantly', bg: 'linear-gradient(135deg,#1e1b4b,#4c1d95)',  accent: '#a78bfa', id: 'assistant' },
  { title: 'Smart Content',      sub: 'Write essays, pitches and articles',  bg: 'linear-gradient(135deg,#172554,#2563eb)',  accent: '#818cf8', id: 'generator' },
  { title: 'Template Library',   sub: '500+ pro-grade design templates',    bg: 'linear-gradient(135deg,#14083c,#7c3aed)',  accent: '#c4b5fd', id: 'design'    },
  { title: 'Sticker Studio',     sub: 'AI-generated stickers, any style',   bg: 'linear-gradient(135deg,#1e0a3c,#8b5cf6)',  accent: '#ddd6fe', id: 'stickers'  },
];

const recents = [
  { name: 'Brand Identity Kit',   type: 'Design',  time: '2h ago',   icon: '◈', bg: 'linear-gradient(135deg,#1e1b4b,#4c1d95)' },
  { name: 'Q3 Pitch Deck',        type: 'Pitch',   time: '1d ago',   icon: '◉', bg: 'linear-gradient(135deg,#172554,#1d4ed8)' },
  { name: 'Instagram Campaign',   type: 'Social',  time: '2d ago',   icon: '✦', bg: 'linear-gradient(135deg,#2e1065,#7c3aed)' },
  { name: 'Product Launch',       type: 'Article', time: '3d ago',   icon: '▣', bg: 'linear-gradient(135deg,#1e1b4b,#6d28d9)' },
  { name: 'Summer Sale Banner',   type: 'Design',  time: '5d ago',   icon: '◆', bg: 'linear-gradient(135deg,#312e81,#4338ca)' },
  { name: 'Team Presentation',    type: 'Slides',  time: '1w ago',   icon: '⬡', bg: 'linear-gradient(135deg,#1e0a3c,#7c3aed)' },
];

export function Dashboard({ onNavigate }: DashboardProps) {
  const hour = new Date().getHours();
  const greeting = hour < 12 ? 'Good morning' : hour < 17 ? 'Good afternoon' : 'Good evening';

  return (
    <div style={{ minHeight: '100vh', background: '#090909', paddingTop: '4.5rem', paddingBottom: '4rem', overflowX: 'hidden' }}>

      {/* ── Greeting + Search ── */}
      <FadeIn delay={0} duration={500}>
        <div style={{ padding: '2rem 3rem 1.5rem', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <h1 style={{ fontSize: '1.4rem', fontWeight: 600, letterSpacing: '-0.03em', color: '#fff', margin: 0 }}>
            {greeting}, Creator
          </h1>
          <div style={{ position: 'relative', marginTop: '1.1rem', maxWidth: '540px' }}>
            <Search size={14} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'rgba(255,255,255,0.2)', pointerEvents: 'none' }} />
            <input
              type="text"
              placeholder="Search templates, tools, content…"
              style={{
                width: '100%', background: '#111', border: '1px solid rgba(255,255,255,0.07)',
                color: '#fff', paddingLeft: '2.5rem', paddingRight: '1rem',
                paddingTop: '0.65rem', paddingBottom: '0.65rem',
                borderRadius: '10px', fontSize: '0.85rem', outline: 'none',
                fontFamily: 'inherit', transition: 'border-color 0.15s, box-shadow 0.15s',
              }}
              onFocus={e => { e.currentTarget.style.borderColor = 'rgba(139,92,246,0.45)'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(139,92,246,0.08)'; }}
              onBlur={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'; e.currentTarget.style.boxShadow = 'none'; }}
            />
          </div>
        </div>
      </FadeIn>

      {/* ── Quick Tool Icons ── */}
      <FadeIn delay={100} duration={500}>
        <div style={{ padding: '1.5rem 3rem 0' }}>
          <div style={{ display: 'flex', gap: '0.25rem', overflowX: 'auto', paddingBottom: '0.25rem' }}>
            {tools.map((tool, i) => {
              const Icon = tool.icon;
              return (
                <button key={i} onClick={() => onNavigate(tool.id)} style={{
                  display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.45rem',
                  flexShrink: 0, background: 'none', border: 'none', cursor: 'pointer',
                  fontFamily: 'inherit', padding: '0.5rem 0.875rem',
                  borderRadius: '10px', transition: 'all 0.15s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'none'; e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                  <div style={{
                    width: '52px', height: '52px', borderRadius: '14px',
                    background: tool.bg, border: `1px solid ${tool.color}18`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Icon size={21} color={tool.color} strokeWidth={1.5} />
                  </div>
                  <span style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.4)', whiteSpace: 'nowrap' }}>{tool.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </FadeIn>

      {/* ── What's new ── */}
      <FadeIn delay={200} duration={500}>
        <div style={{ padding: '2rem 3rem 0' }}>
          <p style={{ fontSize: '0.8rem', fontWeight: 600, color: '#fff', margin: '0 0 1rem', letterSpacing: '-0.01em' }}>What's new</p>
          <div style={{ display: 'flex', gap: '0.75rem', overflowX: 'auto', paddingBottom: '0.5rem' }}>
            {featured.map((f, i) => (
              <button key={i} onClick={() => onNavigate(f.id)} style={{
                flexShrink: 0, width: '210px', borderRadius: '12px',
                background: f.bg, border: '1px solid rgba(255,255,255,0.06)',
                padding: '1.1rem', cursor: 'pointer', fontFamily: 'inherit',
                textAlign: 'left', transition: 'all 0.18s',
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = `0 16px 40px rgba(0,0,0,0.5)`; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', marginBottom: '0.5rem' }}>
                  <Star size={9} color={f.accent} fill={f.accent} />
                  <span style={{ fontSize: '0.6rem', color: f.accent, letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 600 }}>New</span>
                </div>
                <p style={{ fontSize: '0.875rem', fontWeight: 600, color: '#fff', margin: '0 0 0.3rem', letterSpacing: '-0.02em', lineHeight: 1.3 }}>{f.title}</p>
                <p style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.42)', margin: 0, lineHeight: 1.45 }}>{f.sub}</p>
                <div style={{ marginTop: '0.875rem', height: '44px', borderRadius: '7px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontSize: '1.2rem', color: `${f.accent}50` }}>◈</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </FadeIn>

      {/* ── Recents ── */}
      <FadeIn delay={300} duration={500}>
        <div style={{ padding: '2rem 3rem 0' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
            <p style={{ fontSize: '0.8rem', fontWeight: 600, color: '#fff', margin: 0 }}>Recents</p>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              {['Owner ↓', 'Any type ↓'].map(label => (
                <button key={label} style={{
                  padding: '0.28rem 0.7rem', fontSize: '0.68rem',
                  color: 'rgba(255,255,255,0.32)', background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.06)', borderRadius: '6px',
                  cursor: 'pointer', fontFamily: 'inherit', transition: 'all 0.15s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; }}
                  onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.32)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; }}
                >{label}</button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
            {/* New project tile */}
            <button onClick={() => onNavigate('design')} style={{
              background: 'rgba(255,255,255,0.025)', border: '1px dashed rgba(255,255,255,0.1)',
              borderRadius: '10px', aspectRatio: '4/3',
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '0.4rem',
              cursor: 'pointer', fontFamily: 'inherit', transition: 'all 0.15s',
            }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(139,92,246,0.06)'; e.currentTarget.style.borderColor = 'rgba(139,92,246,0.3)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.025)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; }}
            >
              <Upload size={16} color="rgba(255,255,255,0.2)" />
              <span style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.2)' }}>New</span>
            </button>

            {recents.map((r, i) => (
              <div key={i} className="card-up" style={{ animationDelay: `${i * 35}ms` }}>
                <div style={{ background: '#111', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '10px', overflow: 'hidden', cursor: 'pointer', transition: 'all 0.18s' }}
                  onClick={() => onNavigate('design')}
                  onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(139,92,246,0.3)'; (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-3px)'; (e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 24px rgba(0,0,0,0.4)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.07)'; (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLDivElement).style.boxShadow = 'none'; }}
                >
                  <div style={{ aspectRatio: '4/3', background: r.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <span style={{ fontSize: '1.75rem', color: 'rgba(255,255,255,0.15)' }}>{r.icon}</span>
                  </div>
                  <div style={{ padding: '0.5rem 0.625rem' }}>
                    <p style={{ fontSize: '0.72rem', fontWeight: 500, color: '#fff', margin: 0, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{r.name}</p>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '0.2rem' }}>
                      <span style={{ fontSize: '0.58rem', color: 'rgba(139,92,246,0.65)', background: 'rgba(139,92,246,0.1)', padding: '0.1rem 0.35rem', borderRadius: '3px' }}>{r.type}</span>
                      <span style={{ fontSize: '0.56rem', color: 'rgba(255,255,255,0.2)' }}>{r.time}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </div>
  );
}

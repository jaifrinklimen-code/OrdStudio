import { useState } from 'react';
import { FileText, Download, Copy, Sparkles, Check } from 'lucide-react';
import { FadeIn } from './FadeIn';

const contentTypes = [
  { id: 'essay',   name: 'Essay',   icon: '✦', desc: 'Academic & long-form', color: 'from-violet-600 to-purple-700' },
  { id: 'article', name: 'Article', icon: '◈', desc: 'Blog & editorial',     color: 'from-blue-600 to-indigo-700'  },
  { id: 'pitch',   name: 'Pitch',   icon: '◉', desc: 'Decks & proposals',    color: 'from-indigo-600 to-violet-700'},
  { id: 'copy',    name: 'Copy',    icon: '◎', desc: 'Marketing & ads',      color: 'from-fuchsia-600 to-pink-700' },
];

const tones = ['Professional', 'Creative', 'Academic', 'Casual', 'Minimal'];

const cardStyle: React.CSSProperties = {
  background: 'rgba(14, 11, 42, 0.85)',
  border: '1px solid rgba(120, 80, 255, 0.18)',
  borderRadius: '0.875rem',
  backdropFilter: 'blur(8px)',
};

const inputStyle: React.CSSProperties = {
  width: '100%',
  background: 'rgba(8, 6, 24, 0.8)',
  border: '1px solid rgba(120,80,255,0.2)',
  color: '#fff',
  padding: '0.625rem 1rem',
  borderRadius: '0.625rem',
  fontSize: '0.875rem',
  outline: 'none',
  fontFamily: 'inherit',
  transition: 'border-color 0.2s',
};

export function ContentGenerator() {
  const [selectedType, setSelectedType] = useState('essay');
  const [topic, setTopic] = useState('');
  const [tone, setTone] = useState('Professional');
  const [wordCount, setWordCount] = useState('500');
  const [generatedContent, setGeneratedContent] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleGenerate = () => {
    if (!topic.trim()) return;
    setIsGenerating(true);
    setTimeout(() => {
      setGeneratedContent(
        `${topic}\n\n${tone} tone · ${contentTypes.find(t => t.id === selectedType)?.name} format · ~${wordCount} words\n\n` +
        `This is your AI-generated content placeholder. In a fully connected implementation, this section would be filled with ${tone.toLowerCase()}-toned, structured ${contentTypes.find(t => t.id === selectedType)?.name.toLowerCase()} content tailored to your topic.\n\n` +
        `Key areas covered:\n\n— Introduction and context\n— Core arguments and supporting evidence\n— Data-backed insights\n— Actionable conclusions\n\nReady to edit and publish across any platform.`
      );
      setIsGenerating(false);
    }, 1800);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #07071a 0%, #0d0a2e 40%, #080e24 100%)', paddingTop: '6rem', paddingBottom: '4rem', position: 'relative' }} className="px-6 md:px-12 lg:px-16">
      {/* Ambient glows */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden', zIndex: 0 }}>
        <div style={{ position: 'absolute', top: '5%', right: '5%', width: '38%', height: '50%', background: 'radial-gradient(ellipse, rgba(124,58,237,0.12) 0%, transparent 70%)', filter: 'blur(50px)' }} />
        <div style={{ position: 'absolute', bottom: '5%', left: '5%', width: '30%', height: '40%', background: 'radial-gradient(ellipse, rgba(60,100,255,0.09) 0%, transparent 70%)', filter: 'blur(50px)' }} />
      </div>

      <div style={{ position: 'relative', zIndex: 1 }}>
        <FadeIn delay={100} duration={600}>
          <div className="mb-10">
            <p style={{ fontSize: '0.7rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(160,130,255,0.7)', marginBottom: '0.5rem' }}>Tools</p>
            <h2 style={{ fontSize: 'clamp(2rem,5vw,3rem)', fontWeight: 300, letterSpacing: '-0.03em', background: 'linear-gradient(135deg, #fff 30%, #c4a8ff 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Content Generator
            </h2>
            <p style={{ color: 'rgba(200,185,255,0.55)', marginTop: '0.75rem', fontSize: '0.95rem' }}>AI-crafted writing in seconds.</p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left panel */}
          <FadeIn delay={200} duration={600} className="space-y-4">
            {/* Format selector */}
            <div style={cardStyle} className="p-5">
              <p style={{ fontSize: '0.68rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(160,130,255,0.6)', marginBottom: '1rem' }}>Format</p>
              <div className="grid grid-cols-2 gap-2">
                {contentTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setSelectedType(type.id)}
                    style={{
                      padding: '0.875rem',
                      borderRadius: '0.75rem',
                      border: selectedType === type.id ? '1px solid rgba(160,120,255,0.5)' : '1px solid rgba(120,80,255,0.15)',
                      background: selectedType === type.id ? 'rgba(120,60,255,0.12)' : 'rgba(10,8,30,0.5)',
                      textAlign: 'left',
                      cursor: 'pointer',
                      fontFamily: 'inherit',
                      transition: 'all 0.2s',
                      boxShadow: selectedType === type.id ? '0 0 20px rgba(120,60,255,0.15)' : 'none',
                    }}
                  >
                    <div style={{ fontSize: '1.2rem', marginBottom: '0.4rem', background: `linear-gradient(135deg, var(--tw-gradient-stops))`, WebkitBackgroundClip: 'text', color: 'rgba(200,180,255,0.9)' }}>{type.icon}</div>
                    <div style={{ fontWeight: 500, color: '#fff', fontSize: '0.82rem' }}>{type.name}</div>
                    <div style={{ fontSize: '0.7rem', color: 'rgba(160,140,220,0.5)', marginTop: '0.2rem' }}>{type.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Parameters */}
            <div style={cardStyle} className="p-5 space-y-4">
              <p style={{ fontSize: '0.68rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(160,130,255,0.6)' }}>Parameters</p>

              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', color: 'rgba(180,165,255,0.6)', marginBottom: '0.4rem' }}>Topic</label>
                <input type="text" value={topic} onChange={(e) => setTopic(e.target.value)} placeholder="What's this about?" style={inputStyle} className="focus:border-purple-400/50 placeholder:text-purple-300/20" />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', color: 'rgba(180,165,255,0.6)', marginBottom: '0.4rem' }}>Tone</label>
                <select value={tone} onChange={(e) => setTone(e.target.value)} style={{ ...inputStyle, appearance: 'none' }} className="focus:border-purple-400/50">
                  {tones.map((t) => <option key={t} value={t} style={{ background: '#0d0a2e' }}>{t}</option>)}
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', color: 'rgba(180,165,255,0.6)', marginBottom: '0.4rem' }}>Word Count</label>
                <input type="number" value={wordCount} onChange={(e) => setWordCount(e.target.value)} style={inputStyle} className="focus:border-purple-400/50" />
              </div>

              <button
                onClick={handleGenerate}
                disabled={isGenerating || !topic.trim()}
                style={{
                  width: '100%', padding: '0.75rem',
                  background: isGenerating || !topic.trim() ? 'rgba(100,70,200,0.25)' : 'linear-gradient(135deg, #7c3aed, #4f46e5)',
                  color: '#fff', border: 'none', borderRadius: '0.625rem',
                  fontSize: '0.875rem', fontWeight: 500, cursor: isGenerating || !topic.trim() ? 'not-allowed' : 'pointer',
                  fontFamily: 'inherit', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                  boxShadow: isGenerating || !topic.trim() ? 'none' : '0 0 24px rgba(124,58,237,0.4)',
                  transition: 'all 0.2s',
                }}
              >
                {isGenerating ? (
                  <><div style={{ width: '0.9rem', height: '0.9rem', border: '2px solid rgba(255,255,255,0.3)', borderTop: '2px solid #fff', borderRadius: '50%' }} className="animate-spin" />Generating...</>
                ) : (
                  <><Sparkles size={14} />Generate</>
                )}
              </button>
            </div>
          </FadeIn>

          {/* Output panel */}
          <FadeIn delay={300} duration={600} className="lg:col-span-2">
            <div style={{ ...cardStyle, minHeight: '520px', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem 1.25rem', borderBottom: '1px solid rgba(120,80,255,0.15)' }}>
                <p style={{ fontSize: '0.68rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(160,130,255,0.6)' }}>Output</p>
                {generatedContent && (
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <button onClick={handleCopy} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', padding: '0.35rem 0.75rem', background: 'rgba(14,11,42,0.8)', border: '1px solid rgba(120,80,255,0.2)', color: 'rgba(180,165,255,0.7)', borderRadius: '0.5rem', fontSize: '0.75rem', cursor: 'pointer', fontFamily: 'inherit', transition: 'all 0.2s' }} className="hover:text-white">
                      {copied ? <Check size={12} /> : <Copy size={12} />}
                      {copied ? 'Copied' : 'Copy'}
                    </button>
                    <button style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', padding: '0.35rem 0.75rem', background: 'linear-gradient(135deg, #7c3aed, #4f46e5)', color: '#fff', border: 'none', borderRadius: '0.5rem', fontSize: '0.75rem', fontWeight: 500, cursor: 'pointer', fontFamily: 'inherit' }}>
                      <Download size={12} />Export
                    </button>
                  </div>
                )}
              </div>
              <div style={{ flex: 1, padding: '1.5rem' }}>
                {generatedContent ? (
                  <div style={{ color: 'rgba(210,200,255,0.85)', fontSize: '0.875rem', lineHeight: 1.75, whiteSpace: 'pre-line', fontWeight: 300 }}>
                    {generatedContent}
                  </div>
                ) : (
                  <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ textAlign: 'center', color: 'rgba(120,90,200,0.35)' }}>
                      <FileText size={38} style={{ margin: '0 auto 0.75rem' }} />
                      <p style={{ fontSize: '0.875rem' }}>Your output will appear here</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}

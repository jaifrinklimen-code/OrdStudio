import { useState } from 'react';
import { FileText, Download, Copy, Sparkles, Check } from 'lucide-react';
import { FadeIn } from './FadeIn';

const contentTypes = [
  { id: 'essay',   name: 'Essay',   icon: '✦', desc: 'Academic & long-form' },
  { id: 'article', name: 'Article', icon: '◈', desc: 'Blog & editorial'     },
  { id: 'pitch',   name: 'Pitch',   icon: '◉', desc: 'Decks & proposals'    },
  { id: 'copy',    name: 'Copy',    icon: '◎', desc: 'Marketing & ads'      },
];
const tones = ['Professional', 'Creative', 'Academic', 'Casual', 'Minimal'];

const card: React.CSSProperties = {
  background: '#111', border: '1px solid rgba(255,255,255,0.07)',
  borderRadius: '12px',
};

export function ContentGenerator() {
  const [selectedType, setSelectedType] = useState('essay');
  const [topic, setTopic] = useState('');
  const [tone, setTone] = useState('Professional');
  const [wordCount, setWordCount] = useState('500');
  const [output, setOutput] = useState('');
  const [generating, setGenerating] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleGenerate = () => {
    if (!topic.trim()) return;
    setGenerating(true);
    setTimeout(() => {
      setOutput(
        `${topic}\n\n${tone} · ${contentTypes.find(t => t.id === selectedType)?.name} · ~${wordCount} words\n\n` +
        `This is your AI-generated content placeholder. In a fully connected build, this section populates with structured, ${tone.toLowerCase()}-toned ${selectedType} content tailored to your topic.\n\n` +
        `Key areas covered:\n\n— Introduction and context\n— Core arguments and evidence\n— Data-backed insights\n— Actionable conclusions\n\nReady to edit and publish across any platform.`
      );
      setGenerating(false);
    }, 1600);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const labelStyle: React.CSSProperties = { display: 'block', fontSize: '0.72rem', color: 'rgba(255,255,255,0.35)', marginBottom: '0.4rem', letterSpacing: '0.03em' };

  return (
    <div style={{ minHeight: '100vh', background: '#090909', paddingTop: '5.5rem', paddingBottom: '4rem' }} className="px-10 lg:px-16">
      <FadeIn delay={80} duration={500}>
        <div style={{ marginBottom: '2.25rem' }}>
          <p style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(139,92,246,0.65)', marginBottom: '0.35rem' }}>Tools</p>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 500, letterSpacing: '-0.035em', color: '#fff', margin: 0 }}>Content Generator</h2>
          <p style={{ color: 'rgba(255,255,255,0.32)', marginTop: '0.5rem', fontSize: '0.875rem' }}>AI-crafted writing in seconds.</p>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Left panel */}
        <FadeIn delay={160} duration={500} className="space-y-4">
          {/* Format */}
          <div style={card} className="p-5">
            <p style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.28)', marginBottom: '0.875rem' }}>Format</p>
            <div className="grid grid-cols-2 gap-2">
              {contentTypes.map((t) => (
                <button key={t.id} onClick={() => setSelectedType(t.id)} style={{
                  padding: '0.75rem', borderRadius: '8px', textAlign: 'left',
                  cursor: 'pointer', fontFamily: 'inherit', transition: 'all 0.15s',
                  background: selectedType === t.id ? 'rgba(139,92,246,0.12)' : 'transparent',
                  border: `1px solid ${selectedType === t.id ? 'rgba(139,92,246,0.35)' : 'rgba(255,255,255,0.06)'}`,
                  boxShadow: selectedType === t.id ? '0 0 16px rgba(139,92,246,0.12)' : 'none',
                }}>
                  <div style={{ fontSize: '1rem', marginBottom: '0.3rem', color: selectedType === t.id ? '#8b5cf6' : 'rgba(255,255,255,0.3)' }}>{t.icon}</div>
                  <div style={{ fontWeight: 500, color: '#fff', fontSize: '0.82rem' }}>{t.name}</div>
                  <div style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.28)', marginTop: '0.15rem' }}>{t.desc}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Parameters */}
          <div style={card} className="p-5 space-y-4">
            <p style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.28)' }}>Parameters</p>

            <div>
              <label style={labelStyle}>Topic</label>
              <input type="text" value={topic} onChange={e => setTopic(e.target.value)}
                placeholder="What's this about?" className="input-field" />
            </div>
            <div>
              <label style={labelStyle}>Tone</label>
              <select value={tone} onChange={e => setTone(e.target.value)}
                className="input-field" style={{ appearance: 'none', cursor: 'pointer' }}>
                {tones.map(t => <option key={t} value={t} style={{ background: '#111' }}>{t}</option>)}
              </select>
            </div>
            <div>
              <label style={labelStyle}>Word Count</label>
              <input type="number" value={wordCount} onChange={e => setWordCount(e.target.value)}
                className="input-field" />
            </div>

            <button onClick={handleGenerate} disabled={generating || !topic.trim()}
              className={!generating && topic.trim() ? 'glow-pulse' : ''}
              style={{
                width: '100%', padding: '0.7rem',
                background: !generating && topic.trim() ? '#8b5cf6' : 'rgba(139,92,246,0.15)',
                color: !generating && topic.trim() ? '#fff' : 'rgba(255,255,255,0.3)',
                border: 'none', borderRadius: '8px', fontSize: '0.875rem', fontWeight: 500,
                cursor: !generating && topic.trim() ? 'pointer' : 'not-allowed',
                fontFamily: 'inherit', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                transition: 'all 0.15s',
              }}>
              {generating
                ? <><div style={{ width: '0.85rem', height: '0.85rem', border: '2px solid rgba(255,255,255,0.25)', borderTop: '2px solid #fff', borderRadius: '50%' }} className="animate-spin" />Generating...</>
                : <><Sparkles size={13} />Generate</>}
            </button>
          </div>
        </FadeIn>

        {/* Output */}
        <FadeIn delay={240} duration={500} className="lg:col-span-2">
          <div style={{ ...card, minHeight: '520px', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.875rem 1.25rem', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
              <p style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.28)' }}>Output</p>
              {output && (
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <button onClick={handleCopy} style={{
                    display: 'flex', alignItems: 'center', gap: '0.35rem',
                    padding: '0.35rem 0.75rem', background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.5)',
                    borderRadius: '6px', fontSize: '0.75rem', cursor: 'pointer', fontFamily: 'inherit', transition: 'all 0.15s',
                  }}
                    onMouseEnter={e => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.16)'; }}
                    onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.5)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; }}
                  >
                    {copied ? <Check size={11} /> : <Copy size={11} />}{copied ? 'Copied' : 'Copy'}
                  </button>
                  <button style={{
                    display: 'flex', alignItems: 'center', gap: '0.35rem',
                    padding: '0.35rem 0.75rem', background: '#8b5cf6',
                    border: 'none', color: '#fff', borderRadius: '6px', fontSize: '0.75rem', fontWeight: 500, cursor: 'pointer', fontFamily: 'inherit',
                  }}>
                    <Download size={11} />Export
                  </button>
                </div>
              )}
            </div>
            <div style={{ flex: 1, padding: '1.5rem' }}>
              {output ? (
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.875rem', lineHeight: 1.8, whiteSpace: 'pre-line', fontWeight: 300 }}>
                  {output}
                </p>
              ) : (
                <div style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '0.75rem' }}>
                  <FileText size={32} color="rgba(139,92,246,0.2)" />
                  <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.2)' }}>Your output will appear here</p>
                </div>
              )}
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}

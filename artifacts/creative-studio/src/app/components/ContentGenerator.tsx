import { useState, useEffect } from 'react';
import { secureFetch } from '../../lib/secureFetch';
import {
  FileText, Download, Copy, Sparkles, Check, Trash2, Wrench,
  Clock, Share2, AlignLeft, Bold, Italic, CornerDownLeft, Eye, MessageSquareCode
} from 'lucide-react';
import { FadeIn } from './FadeIn';

const contentTypes = [
  { id: 'essay',   name: 'Academic Essay',   icon: '🎓', desc: 'In-depth essays & research drafts', premium: false },
  { id: 'article', name: 'Blog Article',     icon: '📰', desc: 'SEO articles & newsletters', premium: false },
];

const tones = [
  { id: 'Professional', label: '💼 Professional', desc: 'Objective, authoritative, precise' },
  { id: 'Creative',     label: '🎨 Creative',     desc: 'Vibrant, engaging, storytelling' },
  { id: 'Academic',     label: '🔬 Academic',     desc: 'Formal, evidence-based' },
  { id: 'Casual',       label: '☕ Casual',       desc: 'Conversational, warm, friendly' },
];


export function ContentGenerator() {
  const [selectedType, setSelectedType] = useState('essay');
  const [topic, setTopic] = useState('');
  const [tone, setTone] = useState('Professional');
  const [wordCount, setWordCount] = useState('500');
  const [output, setOutput] = useState('');
  const [generating, setGenerating] = useState(false);
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'editor' | 'preview'>('editor');
  const [error, setError] = useState<string | null>(null);
  const [showExportMenu, setShowExportMenu] = useState(false);

  useEffect(() => {
    const prefilled = localStorage.getItem('prefilled_search_query');
    if (prefilled) {
      setTopic(prefilled);
      localStorage.removeItem('prefilled_search_query');
    }
  }, []);

  const handleGenerate = () => {
    if (!topic.trim()) return;
    setGenerating(true);
    setError(null);

    const mappedFormat = contentTypes.find(c => c.id === selectedType)?.name || 'Blog Article';

    secureFetch('/api/content/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        topic,
        format: mappedFormat,
        tone,
        minWords: 100,
        maxWords: Number(wordCount)
      })
    })
    .then(async r => {
      if (!r.ok) {
        let errMsg = "AI Content Generation failed";
        try {
          const errData = await r.json();
          errMsg = errData.error || errMsg;
        } catch (e) {}
        throw new Error(errMsg);
      }
      return r.json();
    })
    .then(data => {
      setOutput(data.text);
      setGenerating(false);
    })
    .catch(err => {
      console.error("AI Content Generation failed:", err);
      setError(err.message || "An unexpected error occurred during content generation.");
      setGenerating(false);
    });
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleClear = () => {
    setOutput('');
    setTopic('');
    setError(null);
  };

  const handleExport = () => {
    if (!output) return;
    const blob = new Blob([output], { type: 'text/markdown;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    const filename = topic.toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '') || 'generated-draft';
    link.setAttribute('download', `${filename}.md`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleExportPDF = () => {
    if (!output) return;

    // Create a hidden iframe
    const iframe = document.createElement('iframe');
    iframe.style.position = 'fixed';
    iframe.style.right = '0';
    iframe.style.bottom = '0';
    iframe.style.width = '0';
    iframe.style.height = '0';
    iframe.style.border = '0';
    document.body.appendChild(iframe);

    const iframeDoc = iframe.contentWindow?.document || iframe.contentDocument;
    if (!iframeDoc) return;

    // Basic Markdown parser for styling
    let htmlContent = output;
    htmlContent = htmlContent
      .replace(/^### (.*$)/gim, '<h3 style="font-family: \'Syne\', \'Inter\', sans-serif; font-size: 14pt; font-weight: bold; color: #111827; margin-top: 18px; margin-bottom: 8px;">$1</h3>')
      .replace(/^## (.*$)/gim, '<h2 style="font-family: \'Syne\', \'Inter\', sans-serif; font-size: 18pt; font-weight: bold; color: #111827; margin-top: 24px; margin-bottom: 10px; border-bottom: 1px solid #e5e7eb; padding-bottom: 6px;">$1</h2>')
      .replace(/^# (.*$)/gim, '<h1 style="font-family: \'Syne\', \'Inter\', sans-serif; font-size: 24pt; font-weight: bold; color: #7c3aed; margin-top: 0; margin-bottom: 20px; line-height: 1.2;">$1</h1>')
      .replace(/\*\*(.*?)\*\*/g, '<strong style="font-weight: bold; color: #111827;">$1</strong>')
      .replace(/\*(.*?)\*/g, '<em style="font-style: italic;">$1</em>')
      .split('\n\n')
      .map(p => {
        const trimmed = p.trim();
        if (!trimmed) return '';
        if (trimmed.startsWith('<h') || trimmed.startsWith('<div')) return trimmed;
        return `<p style="font-family: 'Inter', sans-serif; font-size: 11pt; line-height: 1.6; color: #374151; margin-bottom: 14px; text-align: justify;">${trimmed}</p>`;
      })
      .join('\n');

    const titleText = topic || 'AI Generated Document';

    const documentHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>${titleText}</title>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Syne:wght@700&display=swap" rel="stylesheet">
        <style>
          @page {
            size: A4;
            margin: 25mm 20mm 20mm 20mm;
          }
          body {
            margin: 0;
            padding: 0;
            background-color: #ffffff;
            -webkit-print-color-adjust: exact;
          }
          .header-brand {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 2px solid #7c3aed;
            padding-bottom: 8px;
            margin-bottom: 25px;
          }
          .brand-logo {
            font-family: 'Syne', sans-serif;
            font-size: 14px;
            font-weight: bold;
            color: #7c3aed;
          }
          .doc-meta {
            font-family: 'Inter', sans-serif;
            font-size: 9px;
            color: #9ca3af;
          }
          .footer-info {
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-top: 1px solid #e5e7eb;
            padding-top: 6px;
            font-family: 'Inter', sans-serif;
            font-size: 8px;
            color: #9ca3af;
          }
        </style>
      </head>
      <body>
        <div class="header-brand">
          <span class="brand-logo">OrdStudio AI Writer</span>
          <span class="doc-meta">Generated on ${new Date().toLocaleDateString()}</span>
        </div>
        
        <div class="content-body">
          ${htmlContent}
        </div>

        <div class="footer-info">
          <span>Confidential & Proprietary</span>
          <span>Powered by OrdStudio</span>
        </div>
        
        <script>
          window.onload = function() {
            window.print();
            setTimeout(function() {
              window.frameElement.parentNode.removeChild(window.frameElement);
            }, 1000);
          }
        </script>
      </body>
      </html>
    `;

    iframeDoc.open();
    iframeDoc.write(documentHtml);
    iframeDoc.close();
  };

  return (
    <div className="cg-container flex flex-col gap-6">
      {/* Hero section */}
      <FadeIn delay={60} duration={500}>
        <div className="ds-hero">
          <div className="ds-hero-content">
            <div className="ds-hero-badge">
              <Sparkles size={12} />AI Writer
            </div>
            <h1 className="ds-hero-title">Draft high-impact<br />content in seconds</h1>
            <p className="ds-hero-subtitle">Elevate your writing with specialized AI engines tuned for articles, essays, and startup pitches.</p>
          </div>
          <div className="ds-hero-visual" style={{ width: '160px', height: '140px' }}>
            <div className="ds-hero-orb ds-hero-orb-1" style={{ background: '#3b82f6' }} />
            <div className="ds-hero-orb ds-hero-orb-2" style={{ background: '#8b5cf6' }} />
            <div className="flex items-center justify-center h-full">
              <div className="text-[3rem] animate-pulse">✍️</div>
            </div>
          </div>
        </div>
      </FadeIn>


      {/* Workspace Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-start">
        {/* Left Side: Parameters panel */}
        <FadeIn delay={180} duration={500} className="flex flex-col gap-4">
          {/* Format Type */}
          <div className="glass p-5 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <span className="section-title">1. Select Format</span>
              <span className="text-[10px] text-purple-400 font-semibold tracking-wider uppercase">Format Mode</span>
            </div>
            <div className="grid grid-cols-1 gap-2">
              {contentTypes.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setSelectedType(t.id)}
                  className={`flex items-start gap-3 p-3 rounded-xl border text-left transition-all ${
                    selectedType === t.id
                      ? 'bg-purple-500/10 border-purple-500/40 shadow-[0_0_12px_rgba(139,92,246,0.1)]'
                      : 'bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04]'
                  }`}
                >
                  <span className="text-xl p-1 bg-white/[0.04] rounded-lg">{t.icon}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-white">{t.name}</span>
                      {t.premium && (
                        <span className="text-[9px] bg-purple-500 text-white font-bold px-1.5 py-0.5 rounded flex items-center gap-0.5">
                          PRO
                        </span>
                      )}
                    </div>
                    <span className="text-[10px] text-white/40 block mt-0.5">{t.desc}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Configuration Parameters */}
          <div className="glass p-5 flex flex-col gap-4">
            <span className="section-title">2. Configuration</span>

            <div className="flex flex-col gap-1.5">
              <label className="text-[11px] font-medium text-white/50">Describe Your Topic</label>
              <textarea
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder="Enter details, core objectives, or talking points..."
                className="input-field min-h-[90px] resize-none"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[11px] font-medium text-white/50">Target Writing Tone</label>
              <div className="grid grid-cols-2 gap-2">
                {tones.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setTone(t.id)}
                    className={`p-2.5 rounded-lg border text-left transition-all flex flex-col gap-1 ${
                      tone === t.id
                        ? 'bg-purple-500/10 border-purple-500/40'
                        : 'bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04]'
                    }`}
                  >
                    <span className="text-[11px] font-medium text-white">{t.label}</span>
                    <span className="text-[9px] text-white/30 truncate block">{t.desc}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[11px] font-medium text-white/50 flex justify-between">
                <span>Target Length</span>
                <span className="text-purple-400 font-bold">{wordCount} words</span>
              </label>
              <input
                type="range"
                min="100"
                max="2000"
                step="50"
                value={wordCount}
                onChange={(e) => setWordCount(e.target.value)}
                className="w-full accent-purple-500 bg-white/[0.08] h-1.5 rounded-lg cursor-pointer"
              />
            </div>

            {error && (
              <div className="bg-rose-500/10 border border-rose-500/25 p-4 rounded-xl flex flex-col gap-2 my-2">
                <div className="flex items-center gap-2 text-rose-400 text-xs font-semibold">
                  <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
                  AI Generation Error
                </div>
                <p className="text-[11px] text-white/70 font-light leading-relaxed">{error}</p>
                <div className="flex gap-3 mt-1">
                  <button
                    onClick={() => {
                      setError(null);
                      setGenerating(true);
                      setTimeout(() => {
                        setOutput(
                          `# ${topic}\n\n` +
                          `*Generated with OrdStudio AI Content Suite (Fallback) · Tone: ${tone} · Length: ~${wordCount} words*\n\n` +
                          `## Executive Summary\n` +
                          `This generated draft explores the multifaceted dimensions of "${topic}" with a dedicated emphasis on modern structures and dynamic workflows. Built specifically using our high-fidelity ${tone.toLowerCase()} writing profile, this outline serves as a production-ready model for research and editing.\n\n` +
                          `## Core Insights & Discussion\n` +
                          `1. **Structural Integrity:** Aligning target themes with user intent yields a substantial increase in engagement metrics.\n` +
                          `2. **Adaptive Logic:** Employing tone-adjusted models allows organizations to speak natively to distinct demographics.\n` +
                          `3. **Future Outlook:** Integrating premium content with intuitive designs represents the ultimate benchmark for modern digital communications.\n\n` +
                          `## Conclusion & Next Steps\n` +
                          `To successfully implement these strategies, it is recommended to iterate on this draft, enrich it with secondary source material, and align the output with custom brand design templates available in our Design Studio.`
                        );
                        setGenerating(false);
                      }, 800);
                    }}
                    className="text-[10px] text-purple-400 font-semibold hover:text-purple-300 transition-colors cursor-pointer bg-transparent border-none p-0"
                  >
                    Generate Offline Fallback Draft
                  </button>
                  <button
                    onClick={() => setError(null)}
                    className="text-[10px] text-white/40 font-semibold hover:text-white/60 transition-colors cursor-pointer bg-transparent border-none p-0"
                  >
                    Dismiss
                  </button>
                </div>
              </div>
            )}

            <button
              onClick={handleGenerate}
              disabled={generating || !topic.trim()}
              className={`w-full py-3 rounded-xl font-semibold text-xs flex items-center justify-center gap-2 transition-all ${
                !generating && topic.trim()
                  ? 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white shadow-[0_4px_16px_rgba(124,58,237,0.3)] cursor-pointer'
                  : 'bg-white/[0.05] border border-white/[0.08] text-white/30 cursor-not-allowed'
              }`}
            >
              {generating ? (
                <>
                  <span className="w-3.5 h-3.5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                  Generating Content...
                </>
              ) : (
                <>
                  <Sparkles size={14} />
                  Compose Draft
                </>
              )}
            </button>
          </div>
        </FadeIn>

        {/* Right Side: Output display */}
        <FadeIn delay={240} duration={500} className="lg:col-span-2">
          <div className="glass min-h-[580px] flex flex-col">
            {/* Output Toolbar */}
            <div className="flex flex-wrap gap-3 items-center justify-between p-4 border-b border-white/[0.06] bg-white/[0.01]">
              <div className="flex gap-1.5">
                <button
                  onClick={() => setActiveTab('editor')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    activeTab === 'editor'
                      ? 'bg-purple-500/20 text-purple-300'
                      : 'text-white/40 hover:text-white/70'
                  }`}
                >
                  <AlignLeft size={12} className="inline mr-1" /> Rich Editor
                </button>
                <button
                  onClick={() => setActiveTab('preview')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    activeTab === 'preview'
                      ? 'bg-purple-500/20 text-purple-300'
                      : 'text-white/40 hover:text-white/70'
                  }`}
                >
                  <Eye size={12} className="inline mr-1" /> Preview
                </button>
              </div>

              {output && (
                <div className="flex gap-2">
                  <button
                    onClick={handleCopy}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-white/[0.04] border border-white/[0.08] text-white/50 hover:text-white rounded-lg text-xs font-medium transition-all"
                  >
                    {copied ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
                    {copied ? 'Copied' : 'Copy'}
                  </button>
                  <div className="relative">
                    <button
                      onClick={() => setShowExportMenu(!showExportMenu)}
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg text-xs font-semibold transition-all hover:brightness-110"
                    >
                      <Download size={12} /> Export Draft
                    </button>

                    {showExportMenu && (
                      <div className="absolute top-9 right-0 z-50 bg-[#12121a] border border-white/10 rounded-xl p-2 w-[160px] shadow-2xl flex flex-col gap-1">
                        <button
                          onClick={() => {
                            handleExportPDF();
                            setShowExportMenu(false);
                          }}
                          className="w-full text-left px-3 py-1.5 rounded-lg text-[11px] font-medium text-white/70 hover:text-white hover:bg-white/[0.06] transition-colors flex items-center gap-2 cursor-pointer"
                        >
                          <FileText size={12} className="text-purple-400" /> Download PDF
                        </button>
                        <button
                          onClick={() => {
                            handleExport();
                            setShowExportMenu(false);
                          }}
                          className="w-full text-left px-3 py-1.5 rounded-lg text-[11px] font-medium text-white/70 hover:text-white hover:bg-white/[0.06] transition-colors flex items-center gap-2 cursor-pointer"
                        >
                          <FileText size={12} className="text-indigo-400" /> Download MD
                        </button>
                      </div>
                    )}
                  </div>
                  <button
                    onClick={handleClear}
                    className="flex items-center justify-center p-2 bg-rose-500/10 border border-rose-500/20 text-rose-400 hover:bg-rose-500/20 rounded-lg text-xs font-medium transition-all"
                    title="Clear content"
                  >
                    <Trash2 size={12} />
                  </button>
                </div>
              )}
            </div>

            {/* Content Body */}
            <div className="flex-1 p-6 overflow-y-auto">
              {output ? (
                activeTab === 'editor' ? (
                  <div className="flex flex-col gap-4">
                    {/* Rich text helper bar */}
                    <div className="flex gap-2 p-1.5 bg-white/[0.03] border border-white/[0.05] rounded-lg w-max mb-2">
                      <button className="p-1 hover:bg-white/[0.08] rounded text-white/60 hover:text-white" title="Bold"><Bold size={13} /></button>
                      <button className="p-1 hover:bg-white/[0.08] rounded text-white/60 hover:text-white" title="Italic"><Italic size={13} /></button>
                      <button className="p-1 hover:bg-white/[0.08] rounded text-white/60 hover:text-white" title="Format Code"><MessageSquareCode size={13} /></button>
                    </div>
                    <textarea
                      value={output}
                      onChange={(e) => setOutput(e.target.value)}
                      className="w-full bg-transparent text-white/80 text-sm font-sans font-light leading-7 focus:outline-none min-h-[420px] resize-none"
                    />
                  </div>
                ) : (
                  <div className="prose prose-invert max-w-none text-white/70 text-sm leading-8 font-light">
                    {output.split('\n\n').map((para, i) => {
                      if (para.startsWith('# ')) {
                        return <h1 key={i} className="text-xl font-semibold text-white mb-4 mt-2">{para.replace('# ', '')}</h1>;
                      }
                      if (para.startsWith('## ')) {
                        return <h2 key={i} className="text-base font-semibold text-white/90 mb-3 mt-4">{para.replace('## ', '')}</h2>;
                      }
                      if (para.startsWith('*') && para.endsWith('*')) {
                        return <p key={i} className="text-xs text-purple-400/80 italic mb-4">{para.replace(/\*/g, '')}</p>;
                      }
                      return <p key={i} className="mb-4 whitespace-pre-line">{para}</p>;
                    })}
                  </div>
                )
              ) : (
                <div className="h-full min-h-[380px] flex flex-col items-center justify-center gap-3 text-center">
                  <div className="w-14 h-14 rounded-2xl bg-purple-500/5 border border-purple-500/10 flex items-center justify-center text-purple-400">
                    <FileText size={24} />
                  </div>
                  <span className="text-xs font-semibold text-white/50">Your workspace is ready</span>
                  <span className="text-[10px] text-white/30 max-w-[280px]">Fill in the configuration details on the left and click 'Compose Draft' to generate.</span>
                </div>
              )}
            </div>

            {/* Document stats footer */}
            {output && (
              <div className="p-3 border-t border-white/[0.05] bg-white/[0.01] flex items-center justify-between text-[10px] text-white/40 px-6">
                <div className="flex gap-4">
                  <span>Words: <strong>{output.split(/\s+/).length}</strong></span>
                  <span>Characters: <strong>{output.length}</strong></span>
                </div>
                <div className="flex gap-4">
                  <span>Reading Time: <strong>{Math.ceil(output.split(/\s+/).length / 200)} min</strong></span>
                  <span>Generated by OrdStudio v2.6</span>
                </div>
              </div>
            )}
          </div>
        </FadeIn>
      </div>
    </div>
  );
}

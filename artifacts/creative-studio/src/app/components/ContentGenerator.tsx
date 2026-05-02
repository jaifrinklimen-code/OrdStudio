import { useState } from 'react';
import { FileText, Download, Copy, Sparkles, Check } from 'lucide-react';
import { FadeIn } from './FadeIn';

const contentTypes = [
  { id: 'essay', name: 'Essay', icon: '✦', desc: 'Academic & long-form' },
  { id: 'article', name: 'Article', icon: '◈', desc: 'Blog & editorial' },
  { id: 'pitch', name: 'Pitch', icon: '◉', desc: 'Decks & proposals' },
  { id: 'copy', name: 'Copy', icon: '◎', desc: 'Marketing & ads' },
];

const tones = ['Professional', 'Creative', 'Academic', 'Casual', 'Minimal'];

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
    <div className="min-h-screen bg-black pt-24 pb-16 px-6 md:px-12 lg:px-16">
      <FadeIn delay={100} duration={600}>
        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">Tools</p>
          <h2 className="text-4xl md:text-5xl font-light text-white" style={{ letterSpacing: '-0.03em' }}>
            Content Generator
          </h2>
          <p className="text-gray-400 mt-3 text-base">AI-crafted writing in seconds.</p>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <FadeIn delay={200} duration={600} className="space-y-4">
          <div className="border border-white/10 rounded-xl p-5 bg-zinc-950">
            <p className="text-xs uppercase tracking-widest text-gray-500 mb-4">Format</p>
            <div className="grid grid-cols-2 gap-2">
              {contentTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setSelectedType(type.id)}
                  className={`p-4 rounded-xl border text-left transition-all duration-200 ${
                    selectedType === type.id
                      ? 'border-white/40 bg-white/5'
                      : 'border-white/10 hover:border-white/20'
                  }`}
                >
                  <div className="text-white text-lg mb-2 font-light">{type.icon}</div>
                  <div className="font-medium text-white text-sm">{type.name}</div>
                  <div className="text-xs text-gray-500 mt-0.5">{type.desc}</div>
                </button>
              ))}
            </div>
          </div>

          <div className="border border-white/10 rounded-xl p-5 bg-zinc-950 space-y-4">
            <p className="text-xs uppercase tracking-widest text-gray-500">Parameters</p>
            <div>
              <label className="block text-xs text-gray-400 mb-1.5">Topic</label>
              <input
                type="text"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder="What's this about?"
                className="w-full bg-black border border-white/10 text-white placeholder-gray-600 px-4 py-2.5 rounded-lg text-sm focus:outline-none focus:border-white/30 transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-400 mb-1.5">Tone</label>
              <select
                value={tone}
                onChange={(e) => setTone(e.target.value)}
                className="w-full bg-black border border-white/10 text-white px-4 py-2.5 rounded-lg text-sm focus:outline-none focus:border-white/30 transition-colors"
              >
                {tones.map((t) => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-xs text-gray-400 mb-1.5">Word Count</label>
              <input
                type="number"
                value={wordCount}
                onChange={(e) => setWordCount(e.target.value)}
                className="w-full bg-black border border-white/10 text-white px-4 py-2.5 rounded-lg text-sm focus:outline-none focus:border-white/30 transition-colors"
              />
            </div>
            <button
              onClick={handleGenerate}
              disabled={isGenerating || !topic.trim()}
              className="w-full py-3 bg-white text-black rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors disabled:opacity-40 flex items-center justify-center gap-2"
            >
              {isGenerating ? (
                <><div className="w-3.5 h-3.5 border-2 border-black border-t-transparent rounded-full animate-spin" />Generating...</>
              ) : (
                <><Sparkles size={15} />Generate</>
              )}
            </button>
          </div>
        </FadeIn>

        <FadeIn delay={300} duration={600} className="lg:col-span-2">
          <div className="border border-white/10 rounded-xl bg-zinc-950 min-h-[520px] flex flex-col">
            <div className="flex items-center justify-between p-5 border-b border-white/10">
              <p className="text-xs uppercase tracking-widest text-gray-500">Output</p>
              {generatedContent && (
                <div className="flex gap-2">
                  <button
                    onClick={handleCopy}
                    className="flex items-center gap-1.5 px-3 py-1.5 border border-white/10 text-gray-400 hover:text-white rounded-lg text-xs transition-colors"
                  >
                    {copied ? <Check size={13} /> : <Copy size={13} />}
                    {copied ? 'Copied' : 'Copy'}
                  </button>
                  <button className="flex items-center gap-1.5 px-3 py-1.5 bg-white text-black rounded-lg text-xs font-medium hover:bg-gray-100 transition-colors">
                    <Download size={13} />
                    Export
                  </button>
                </div>
              )}
            </div>
            <div className="flex-1 p-6">
              {generatedContent ? (
                <div className="text-gray-300 text-sm leading-relaxed whitespace-pre-line font-light">
                  {generatedContent}
                </div>
              ) : (
                <div className="h-full flex items-center justify-center text-gray-700">
                  <div className="text-center">
                    <FileText size={40} className="mx-auto mb-3 opacity-30" />
                    <p className="text-sm">Your output will appear here</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}

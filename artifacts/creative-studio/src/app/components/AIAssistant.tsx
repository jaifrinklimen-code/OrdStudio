import { useState, useRef, useEffect } from 'react';
import { Bot, User, ArrowUp, Sparkles } from 'lucide-react';
import { FadeIn } from './FadeIn';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const suggestions = [
  'Help me create a brand identity',
  'Generate ideas for a pitch deck',
  'What templates suit a tech startup?',
  'How do I make viral content?',
];

const pageStyle: React.CSSProperties = {
  minHeight: '100vh',
  background: 'linear-gradient(135deg, #07071a 0%, #0d0a2e 40%, #080e24 100%)',
  display: 'flex',
  flexDirection: 'column',
  paddingTop: '6rem',
  position: 'relative',
};

export function AIAssistant() {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: "Hello. I'm your creative AI. Ask me anything about design, content strategy, or your next venture." }
  ]);
  const [input, setInput] = useState('');
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = (text?: string) => {
    const msg = text ?? input;
    if (!msg.trim()) return;
    setMessages(prev => [...prev, { role: 'user', content: msg }]);
    setTimeout(() => {
      const responses = [
        'Great question. For brand identity, start with a clear value proposition and visual language that reflects your core mission.',
        'For a pitch deck, lead with the problem you solve, then your unique solution, market size, traction, and team.',
        'Tech startups typically benefit from minimalist, grid-based layouts — check out our Presentation Slide templates.',
        'Viral content often balances utility with emotion. Short, specific, shareable. Want me to help you draft something?',
      ];
      setMessages(prev => [...prev, { role: 'assistant', content: responses[Math.floor(Math.random() * responses.length)] }]);
    }, 600);
    setInput('');
  };

  return (
    <div style={pageStyle}>
      {/* Ambient glow */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden', zIndex: 0 }}>
        <div style={{ position: 'absolute', top: '5%',  left: '0%',  width: '40%', height: '50%', background: 'radial-gradient(ellipse, rgba(120,60,255,0.10) 0%, transparent 70%)', filter: 'blur(50px)' }} />
        <div style={{ position: 'absolute', bottom: '10%', right: '0%', width: '35%', height: '45%', background: 'radial-gradient(ellipse, rgba(60,100,255,0.09) 0%, transparent 70%)', filter: 'blur(50px)' }} />
      </div>

      <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', flex: 1 }}>
        <FadeIn delay={100} duration={600} className="px-6 md:px-12 lg:px-16 mb-6">
          <p style={{ fontSize: '0.7rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(160,130,255,0.7)', marginBottom: '0.5rem' }}>AI</p>
          <h2 style={{ fontSize: 'clamp(2rem,5vw,3rem)', fontWeight: 300, letterSpacing: '-0.03em', background: 'linear-gradient(135deg, #fff 30%, #c4a8ff 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Creative Assistant
          </h2>
        </FadeIn>

        {/* Suggestion chips */}
        <FadeIn delay={200} duration={600} className="px-6 md:px-12 lg:px-16 mb-6 flex flex-wrap gap-2">
          {suggestions.map((s) => (
            <button
              key={s}
              onClick={() => handleSend(s)}
              style={{
                background: 'rgba(14, 11, 42, 0.8)',
                border: '1px solid rgba(120,80,255,0.22)',
                color: 'rgba(200,185,255,0.65)',
                padding: '0.45rem 1rem',
                borderRadius: '0.5rem',
                fontSize: '0.82rem',
                cursor: 'pointer',
                fontFamily: 'inherit',
                display: 'flex', alignItems: 'center', gap: '0.4rem',
                transition: 'all 0.2s',
              }}
              className="hover:border-purple-400/50 hover:text-white"
            >
              <Sparkles size={11} style={{ color: 'rgba(160,130,255,0.7)' }} />
              {s}
            </button>
          ))}
        </FadeIn>

        {/* Messages */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '0 0 1rem' }} className="px-6 md:px-12 lg:px-16">
          <div className="max-w-3xl space-y-5">
            {messages.map((message, index) => (
              <FadeIn key={index} delay={0} duration={400}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.875rem', flexDirection: message.role === 'user' ? 'row-reverse' : 'row' }}>
                  <div style={{
                    width: '2rem', height: '2rem', borderRadius: '50%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                    background: message.role === 'assistant'
                      ? 'linear-gradient(135deg, #7c3aed, #4f46e5)'
                      : 'rgba(255,255,255,0.12)',
                    border: message.role === 'assistant' ? 'none' : '1px solid rgba(255,255,255,0.2)',
                    boxShadow: message.role === 'assistant' ? '0 0 16px rgba(124,58,237,0.4)' : 'none',
                  }}>
                    {message.role === 'assistant' ? <Bot size={14} color="#fff" /> : <User size={14} color="#fff" />}
                  </div>
                  <div style={{
                    maxWidth: '36rem',
                    padding: '0.875rem 1.25rem',
                    borderRadius: message.role === 'user' ? '1.2rem 0.4rem 1.2rem 1.2rem' : '0.4rem 1.2rem 1.2rem 1.2rem',
                    fontSize: '0.875rem',
                    lineHeight: 1.65,
                    background: message.role === 'assistant'
                      ? 'rgba(14, 11, 42, 0.9)'
                      : 'linear-gradient(135deg, rgba(124,58,237,0.25), rgba(79,70,229,0.2))',
                    border: message.role === 'assistant'
                      ? '1px solid rgba(120,80,255,0.18)'
                      : '1px solid rgba(150,110,255,0.3)',
                    color: message.role === 'assistant' ? 'rgba(220,210,255,0.9)' : '#fff',
                  }}>
                    {message.content}
                  </div>
                </div>
              </FadeIn>
            ))}
            <div ref={bottomRef} />
          </div>
        </div>

        {/* Input bar */}
        <div style={{
          padding: '1.25rem',
          borderTop: '1px solid rgba(120,80,255,0.15)',
          background: 'rgba(7,7,26,0.95)',
          backdropFilter: 'blur(16px)',
        }} className="px-6 md:px-12 lg:px-16">
          <div className="max-w-3xl" style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask me anything..."
              style={{
                flex: 1,
                background: 'rgba(14, 11, 42, 0.9)',
                border: '1px solid rgba(120,80,255,0.2)',
                color: '#fff',
                padding: '0.75rem 1.25rem',
                borderRadius: '0.875rem',
                fontSize: '0.875rem',
                outline: 'none',
                fontFamily: 'inherit',
              }}
              className="focus:border-purple-400/50 placeholder:text-purple-300/20 transition-colors"
            />
            <button
              onClick={() => handleSend()}
              style={{
                width: '2.75rem', height: '2.75rem', flexShrink: 0,
                background: 'linear-gradient(135deg, #7c3aed, #4f46e5)',
                border: 'none', borderRadius: '0.875rem',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 0 20px rgba(124,58,237,0.4)',
                transition: 'opacity 0.2s',
              }}
              className="hover:opacity-85"
            >
              <ArrowUp size={17} color="#fff" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

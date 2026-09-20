import { useState, useRef, useEffect } from 'react';
import { Bot, User, ArrowUp, Sparkles } from 'lucide-react';
import { FadeIn } from './FadeIn';

interface Message { role: 'user' | 'assistant'; content: string; }

const suggestions = [
  'Help me create a brand identity',
  'Generate ideas for a pitch deck',
  'What templates suit a tech startup?',
  'How do I make viral content?',
];

const responses = [
  'For brand identity, start with a clear value proposition and a visual language that reflects your core mission — typography, a restrained color palette, and purposeful spacing.',
  'Lead your pitch deck with the problem you solve, then your unique solution, market size, traction, and team. Keep slides sparse and data-driven.',
  'Tech startups typically benefit from minimalist, grid-based layouts. Explore our Presentation Slide and LinkedIn Banner templates.',
  'Viral content balances utility with emotion — short, specific, shareable. Want me to help you draft a hook?',
];

export function AIAssistant() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: "Hello. I'm your creative AI — ask me anything about design, content strategy, or your next venture." }
  ]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, typing]);

  const handleSend = (text?: string) => {
    const msg = (text ?? input).trim();
    if (!msg) return;
    setMessages(prev => [...prev, { role: 'user', content: msg }]);
    setInput('');
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages(prev => [...prev, { role: 'assistant', content: responses[Math.floor(Math.random() * responses.length)] }]);
    }, 780);
  };

  useEffect(() => {
    const prefilled = localStorage.getItem('prefilled_search_query');
    if (prefilled) {
      localStorage.removeItem('prefilled_search_query');
      handleSend(prefilled);
    }
  }, []);

  return (
    <div style={{
      height: '100%', display: 'flex', flexDirection: 'column',
    }}>
      {/* Header */}
      <div style={{ padding: isMobile ? '1.25rem 1.25rem 0' : '1.5rem 3rem 0', flexShrink: 0 }}>
        <FadeIn delay={80} duration={500}>
          <p style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(139,92,246,0.65)', marginBottom: '0.35rem' }}>AI</p>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 500, letterSpacing: '-0.035em', color: '#fff', margin: 0 }}>Creative Assistant</h2>
        </FadeIn>

        {/* Suggestion chips */}
        <FadeIn delay={180} duration={500}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1rem', paddingBottom: '1.25rem', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
            {suggestions.map((s) => (
              <button key={s} onClick={() => handleSend(s)} style={{
                padding: '0.4rem 0.875rem',
                background: 'rgba(139,92,246,0.08)', border: '1px solid rgba(139,92,246,0.2)',
                color: 'rgba(255,255,255,0.55)', borderRadius: '6px',
                fontSize: '0.78rem', cursor: 'pointer', fontFamily: 'inherit',
                display: 'flex', alignItems: 'center', gap: '0.35rem', transition: 'all 0.15s',
              }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(139,92,246,0.15)'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = 'rgba(139,92,246,0.4)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(139,92,246,0.08)'; e.currentTarget.style.color = 'rgba(255,255,255,0.55)'; e.currentTarget.style.borderColor = 'rgba(139,92,246,0.2)'; }}
              >
                <Sparkles size={10} color="rgba(139,92,246,0.7)" />
                {s}
              </button>
            ))}
          </div>
        </FadeIn>
      </div>

      {/* Messages */}
      <div style={{ flex: 1, overflowY: 'auto', padding: isMobile ? '1rem' : '1.5rem 3rem' }}>
        <div style={{ maxWidth: '680px', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {messages.map((msg, i) => (
            <FadeIn key={i} delay={0} duration={350}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', flexDirection: msg.role === 'user' ? 'row-reverse' : 'row' }}>
                <div style={{
                  width: '1.85rem', height: '1.85rem', borderRadius: '50%', flexShrink: 0,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: msg.role === 'assistant' ? '#8b5cf6' : 'rgba(255,255,255,0.08)',
                  border: msg.role === 'assistant' ? 'none' : '1px solid rgba(255,255,255,0.12)',
                  boxShadow: msg.role === 'assistant' ? '0 0 12px rgba(139,92,246,0.4)' : 'none',
                }}>
                  {msg.role === 'assistant' ? <Bot size={13} color="#fff" /> : <User size={13} color="rgba(255,255,255,0.7)" />}
                </div>
                <div style={{
                  maxWidth: '36rem', padding: '0.8rem 1.1rem',
                  borderRadius: msg.role === 'user' ? '12px 4px 12px 12px' : '4px 12px 12px 12px',
                  fontSize: '0.875rem', lineHeight: 1.65,
                  background: msg.role === 'user' ? 'rgba(139,92,246,0.12)' : 'rgba(255,255,255,0.04)',
                  border: `1px solid ${msg.role === 'user' ? 'rgba(139,92,246,0.22)' : 'rgba(255,255,255,0.06)'}`,
                  color: msg.role === 'user' ? '#fff' : 'rgba(255,255,255,0.8)',
                }}>
                  {msg.content}
                </div>
              </div>
            </FadeIn>
          ))}

          {typing && (
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
              <div style={{ width: '1.85rem', height: '1.85rem', borderRadius: '50%', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#8b5cf6', boxShadow: '0 0 12px rgba(139,92,246,0.4)' }}>
                <Bot size={13} color="#fff" />
              </div>
              <div style={{ padding: '0.85rem 1.1rem', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '4px 12px 12px 12px', display: 'flex', gap: '5px', alignItems: 'center' }}>
                {[0, 1, 2].map(i => (
                  <div key={i} style={{
                    width: '5px', height: '5px', borderRadius: '50%', background: 'rgba(139,92,246,0.7)',
                    animation: 'pulse 1.2s ease-in-out infinite', animationDelay: `${i * 0.18}s`,
                  }} className="animate-pulse" />
                ))}
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>
      </div>

      {/* Input */}
      <div style={{
        padding: isMobile ? '0.75rem 1rem 1rem' : '1rem 3rem 1.5rem', flexShrink: 0,
        borderTop: '1px solid rgba(255,255,255,0.05)',
        background: 'rgba(9,9,9,0.95)', backdropFilter: 'blur(16px)',
      }}>
        <div style={{ maxWidth: '680px', display: 'flex', gap: '0.625rem', alignItems: 'center' }}>
          <input
            type="text" value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleSend()}
            placeholder="Ask me anything…"
            className="input-field"
            style={{ flex: 1, padding: '0.75rem 1.1rem', fontSize: '0.875rem' }}
          />
          <button onClick={() => handleSend()} style={{
            width: '2.625rem', height: '2.625rem', flexShrink: 0,
            background: input.trim() ? '#8b5cf6' : 'rgba(139,92,246,0.2)',
            border: 'none', borderRadius: '8px', cursor: input.trim() ? 'pointer' : 'default',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'all 0.15s',
            boxShadow: input.trim() ? '0 0 16px rgba(139,92,246,0.35)' : 'none',
          }}>
            <ArrowUp size={16} color={input.trim() ? '#fff' : 'rgba(255,255,255,0.3)'} />
          </button>
        </div>
      </div>
    </div>
  );
}

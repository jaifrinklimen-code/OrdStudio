import { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, ArrowUp } from 'lucide-react';
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

export function AIAssistant() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "Hello. I'm your creative AI. Ask me anything about design, content strategy, or your next venture.",
    }
  ]);
  const [input, setInput] = useState('');
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = (text?: string) => {
    const msg = text ?? input;
    if (!msg.trim()) return;
    const userMessage: Message = { role: 'user', content: msg };
    setMessages(prev => [...prev, userMessage]);
    setTimeout(() => {
      const responses = [
        'Great question. For brand identity, start with a clear value proposition and visual language that reflects your core mission.',
        'For a pitch deck, lead with the problem you solve, then your unique solution, market size, traction, and team.',
        'Tech startups typically benefit from minimalist, grid-based layouts — check out our Presentation Slide templates.',
        'Viral content often balances utility with emotion. Short, specific, shareable. Want me to help you draft something?',
      ];
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: responses[Math.floor(Math.random() * responses.length)]
      }]);
    }, 600);
    setInput('');
  };

  return (
    <div className="min-h-screen bg-black flex flex-col pt-24">
      <FadeIn delay={100} duration={600} className="px-6 md:px-12 lg:px-16 mb-8">
        <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">AI</p>
        <h2 className="text-4xl md:text-5xl font-light text-white" style={{ letterSpacing: '-0.03em' }}>
          Creative Assistant
        </h2>
      </FadeIn>

      <FadeIn delay={200} duration={600} className="px-6 md:px-12 lg:px-16 mb-6 flex flex-wrap gap-2">
        {suggestions.map((s) => (
          <button
            key={s}
            onClick={() => handleSend(s)}
            className="liquid-glass border border-white/10 text-gray-400 hover:text-white text-sm px-4 py-2 rounded-lg transition-colors duration-200"
          >
            {s}
          </button>
        ))}
      </FadeIn>

      <div className="flex-1 overflow-auto px-6 md:px-12 lg:px-16 pb-4">
        <div className="max-w-3xl space-y-6">
          {messages.map((message, index) => (
            <FadeIn key={index} delay={0} duration={400}>
              <div className={`flex items-start gap-4 ${message.role === 'user' ? 'flex-row-reverse' : ''}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                  message.role === 'assistant'
                    ? 'bg-white text-black'
                    : 'bg-zinc-800 text-white'
                }`}>
                  {message.role === 'assistant'
                    ? <Bot size={15} />
                    : <User size={15} />
                  }
                </div>
                <div className={`max-w-xl px-5 py-4 rounded-2xl text-sm leading-relaxed ${
                  message.role === 'assistant'
                    ? 'bg-zinc-900 border border-white/10 text-gray-200'
                    : 'bg-white text-black'
                }`}>
                  {message.content}
                </div>
              </div>
            </FadeIn>
          ))}
          <div ref={bottomRef} />
        </div>
      </div>

      <div className="px-6 md:px-12 lg:px-16 py-6 border-t border-white/10 bg-black">
        <div className="max-w-3xl flex gap-3 items-center">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask me anything..."
            className="flex-1 bg-zinc-900 border border-white/10 text-white placeholder-gray-600 px-5 py-3 rounded-xl text-sm focus:outline-none focus:border-white/30 transition-colors"
          />
          <button
            onClick={() => handleSend()}
            className="w-11 h-11 bg-white text-black rounded-xl flex items-center justify-center hover:bg-gray-100 transition-colors flex-shrink-0"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}

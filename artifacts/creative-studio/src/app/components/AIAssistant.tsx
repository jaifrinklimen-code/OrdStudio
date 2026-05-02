import { useState } from 'react';
import { Send, Bot, User } from 'lucide-react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export function AIAssistant() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "Hello! I'm your AI assistant. I can help you navigate the platform, suggest templates, and answer any questions you have. How can I help you today?"
    }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages([...messages, userMessage]);

    setTimeout(() => {
      const responses = [
        'I can help you create amazing designs! Try our Design Studio with over 100+ templates.',
        'Looking for content? Our AI Content Generator can create essays, articles, and more in seconds.',
        'Need custom stickers? Check out our Sticker Lab for AI-powered sticker creation!',
        'You can search for any template or feature using our Smart Search engine.',
      ];
      const assistantMessage: Message = {
        role: 'assistant',
        content: responses[Math.floor(Math.random() * responses.length)]
      };
      setMessages(prev => [...prev, assistantMessage]);
    }, 500);

    setInput('');
  };

  return (
    <div className="flex-1 flex flex-col relative z-10">
      <div className="border-b border-gray-200/50 backdrop-blur-xl bg-white/70 p-6">
        <h2 className="text-3xl font-bold text-gray-900">AI Assistant</h2>
        <p className="text-gray-600 mt-2">Your personal guide to Ord-SevenEight</p>
      </div>

      <div className="flex-1 overflow-auto p-6">
        <div className="max-w-4xl mx-auto space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex items-start gap-3 ${message.role === 'user' ? 'flex-row-reverse' : ''}`}
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                message.role === 'assistant'
                  ? 'bg-gradient-to-br from-purple-600 to-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700'
              }`}>
                {message.role === 'assistant' ? <Bot size={20} /> : <User size={20} />}
              </div>
              <div className={`max-w-2xl px-4 py-3 rounded-2xl ${
                message.role === 'assistant'
                  ? 'backdrop-blur-xl bg-white/70 border border-gray-200/50 shadow-lg text-gray-900'
                  : 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
              }`}>
                {message.content}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-gray-200/50 backdrop-blur-xl bg-white/70 p-6">
        <div className="max-w-4xl mx-auto flex gap-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask me anything..."
            className="flex-1 px-4 py-3 border border-gray-300 backdrop-blur-lg bg-white/70 text-gray-900 placeholder-gray-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          <button
            onClick={handleSend}
            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl hover:shadow-xl hover:scale-105 transition-all flex items-center gap-2"
          >
            <Send size={18} />
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

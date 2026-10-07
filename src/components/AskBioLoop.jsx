import React, { useState, useRef, useEffect } from 'react';
import { 
  CHATBOT_SUGGESTIONS, 
  CHATBOT_KNOWLEDGE_BASE, 
  CHATBOT_FALLBACK, 
  BRAND_CONTENT 
} from '../content';
import { MessageSquareCode, Send, Bot, User, Sparkles, ArrowDown, HelpCircle, PhoneCall, CheckCircle } from 'lucide-react';

export default function AskBioLoop() {
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: `Hello! I'm the ${BRAND_CONTENT.name} Assistant. Ask me anything about how we convert bulk food waste into clean cooking biogas, organic fertiliser, and verified carbon credits.`,
      time: 'Just now',
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatBottomRef = useRef(null);

  useEffect(() => {
    chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  // Normalized fuzzy matching function
  const findAnswer = (query) => {
    const cleanQuery = query.toLowerCase().replace(/[^\w\s]/gi, '').trim();
    if (!cleanQuery) return CHATBOT_FALLBACK;

    let bestMatch = null;
    let highestScore = 0;

    for (const item of CHATBOT_KNOWLEDGE_BASE) {
      let score = 0;
      for (const kw of item.keywords) {
        const cleanKw = kw.toLowerCase();
        if (cleanQuery.includes(cleanKw)) {
          score += 3; // exact substring match
        } else {
          // word-by-word token overlap
          const kwWords = cleanKw.split(' ');
          for (const w of kwWords) {
            if (w.length > 2 && cleanQuery.includes(w)) {
              score += 1;
            }
          }
        }
      }
      if (score > highestScore) {
        highestScore = score;
        bestMatch = item.answer;
      }
    }

    return highestScore > 0 ? bestMatch : CHATBOT_FALLBACK;
  };

  const handleSendMessage = (textToSend) => {
    const query = textToSend || inputText;
    if (!query.trim()) return;

    const userMsg = {
      sender: 'user',
      text: query,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText('');
    setIsTyping(true);

    // Realistic typing delay (600-800ms) for offline instant feel
    setTimeout(() => {
      const botAnswer = findAnswer(query);
      const botMsg = {
        sender: 'bot',
        text: botAnswer,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 700);
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="ask-bioloop" className="py-20 px-4 sm:px-6 lg:px-8 bg-forest-dark text-cream relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-br from-amber/10 via-leaf/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10 space-y-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber/20 text-amber border border-amber/30 text-xs font-bold uppercase tracking-wider mb-3 shadow-md">
            <MessageSquareCode className="w-3.5 h-3.5 fill-amber" />
            <span>Interactive Knowledge Assistant</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white">
            Ask BioLoop
          </h2>

          <p className="mt-2 text-base text-cream/85">
            Questions about food waste, biogas or carbon credits? Ask us anything.
          </p>
          <div className="text-[11px] font-mono text-leaf-light mt-1">
            * 100% Offline Rule-Based Assistant (No External API Latency)
          </div>
        </div>

        {/* Suggestion Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 max-w-3xl mx-auto">
          {CHATBOT_SUGGESTIONS.map((chip, idx) => (
            <button
              key={idx}
              onClick={() => handleSendMessage(chip)}
              className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-forest border border-forest-border text-cream/90 hover:bg-forest-card hover:border-amber/60 hover:text-white transition-all hover:scale-105 active:scale-95"
            >
              {chip}
            </button>
          ))}
        </div>

        {/* Chat UI Window */}
        <div className="rounded-3xl bg-forest-card border border-forest-border shadow-2xl overflow-hidden flex flex-col h-[520px]">
          {/* Chat Window Top Bar */}
          <div className="p-4 sm:px-6 bg-forest-dark border-b border-forest-border flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-leaf to-amber text-forest-dark flex items-center justify-center font-bold shadow-md">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold font-heading text-white">
                    BioLoop Assistant
                  </span>
                  <span className="w-2 h-2 rounded-full bg-leaf animate-pulse" />
                </div>
                <div className="text-[10px] text-cream/60 font-mono">
                  Offline Verified Knowledge Base
                </div>
              </div>
            </div>

            <button
              onClick={scrollToContact}
              className="px-3 py-1.5 rounded-xl text-xs font-bold font-mono bg-forest border border-forest-border hover:border-leaf text-leaf-light hover:text-white transition-colors flex items-center gap-1.5"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Talk to the team</span>
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 sm:p-6 overflow-y-auto space-y-4 bg-forest-card/50">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex gap-3 max-w-[85%] ${
                  msg.sender === 'user' ? 'ml-auto flex-row-reverse' : 'mr-auto'
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 text-xs font-bold ${
                    msg.sender === 'user'
                      ? 'bg-amber text-forest-dark'
                      : 'bg-forest text-leaf-light border border-forest-border'
                  }`}
                >
                  {msg.sender === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                </div>

                <div>
                  <div
                    className={`p-4 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-amber text-forest-dark font-medium shadow-md'
                        : 'bg-forest border border-forest-border text-cream shadow-sm'
                    }`}
                  >
                    {msg.text}
                  </div>
                  <div
                    className={`text-[10px] font-mono text-cream/40 mt-1 px-1 ${
                      msg.sender === 'user' ? 'text-right' : 'text-left'
                    }`}
                  >
                    {msg.time}
                  </div>
                </div>
              </div>
            ))}

            {/* Typing Dots Indicator */}
            {isTyping && (
              <div className="flex items-center gap-3 mr-auto">
                <div className="w-8 h-8 rounded-xl bg-forest text-leaf-light flex items-center justify-center border border-forest-border">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="px-4 py-3 rounded-2xl bg-forest border border-forest-border text-leaf-light flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-leaf animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-2 h-2 rounded-full bg-leaf animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-2 h-2 rounded-full bg-leaf animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            )}

            <div ref={chatBottomRef} />
          </div>

          {/* Chat Input Bar */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage(inputText);
            }}
            className="p-3 sm:p-4 bg-forest-dark border-t border-forest-border flex items-center gap-2"
          >
            <input
              type="text"
              placeholder="Ask a question (e.g. How do carbon credits work?)..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="flex-1 px-4 py-3 rounded-2xl bg-forest border border-forest-border text-sm text-white placeholder:text-cream/40 focus:outline-none focus:border-amber font-medium"
            />
            <button
              type="submit"
              disabled={!inputText.trim()}
              className="p-3.5 rounded-2xl bg-amber hover:bg-amber-glow text-forest-dark font-bold shadow-md transition-all disabled:opacity-40 disabled:cursor-not-allowed hover:scale-105 active:scale-95 flex-shrink-0"
              aria-label="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

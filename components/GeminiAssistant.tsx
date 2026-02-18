import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Sparkles, Loader2 } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';

export const GeminiAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Merhabalar! 👋 Ramazan ayınız mübarek olsun. İftar için ne arzu edersiniz? Size menüden öneriler yapabilirim.' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const responseText = await sendMessageToGemini(input);
    
    setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    setIsLoading(false);
  };

  return (
    <>
      {/* Floating Action Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 bg-emerald-900 text-amber-400 p-4 rounded-full shadow-lg hover:bg-emerald-800 hover:scale-105 transition-all duration-300 flex items-center justify-center group"
        >
          <Sparkles className="absolute -top-1 -right-1 text-amber-300 animate-pulse" size={20} />
          <MessageCircle size={32} />
        </button>
      )}

      {/* Chat Interface Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/40 backdrop-blur-[2px] animate-fade-in">
          <div className="bg-white w-full sm:max-w-md h-[85vh] sm:h-[600px] rounded-t-3xl sm:rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-slide-up">
            {/* Header */}
            <div className="bg-emerald-950 text-white p-4 flex justify-between items-center shrink-0">
              <div className="flex items-center gap-3">
                <div className="bg-amber-100 p-2 rounded-full">
                   <Sparkles className="text-emerald-900" size={20} />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg">İftar Asistanı</h3>
                  <p className="text-emerald-200 text-xs">Yapay Zeka Destekli</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-emerald-200 hover:text-white transition-colors">
                <X size={24} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 bg-gray-50 space-y-4">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div 
                    className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${
                      msg.role === 'user' 
                        ? 'bg-emerald-900 text-white rounded-br-none' 
                        : 'bg-white text-gray-800 border border-gray-200 shadow-sm rounded-bl-none'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white p-3 rounded-2xl rounded-bl-none border border-gray-200 shadow-sm flex items-center gap-2">
                    <Loader2 size={16} className="animate-spin text-emerald-600" />
                    <span className="text-xs text-gray-500">Yazıyor...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-gray-100">
              <div className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2 focus-within:ring-2 focus-within:ring-emerald-500/20 transition-all">
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="İftar için ne önerirsin?"
                  className="flex-1 bg-transparent border-none outline-none text-gray-700 placeholder-gray-400 text-sm"
                />
                <button 
                  onClick={handleSend}
                  disabled={!input.trim() || isLoading}
                  className="p-2 bg-emerald-900 text-white rounded-full hover:bg-emerald-800 disabled:opacity-50 disabled:hover:bg-emerald-900 transition-colors"
                >
                  <Send size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
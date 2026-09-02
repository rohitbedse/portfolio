'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageSquare, X, Send, Paperclip, Image as ImageIcon, FileText, Sparkles } from 'lucide-react'

interface Message {
  id: string
  role: 'user' | 'assistant'
  text: string
  timestamp: string
  hasMedia?: boolean
}

// Knowledge base for the chatbot
const KNOWLEDGE_BASE = {
  profile: {
    keywords: ['who', 'rohit', 'about', 'person', 'profile'],
    response: `I'm Rohit Bedse's AI Assistant. Rohit is an **AI Engineer & Data Scientist** specializing in production-grade ML systems. He bridges the gap between mathematical foundations and scalable AI engineering, with a heavy focus on Generative AI and Agentic workflows.`,
  },
  skills: {
    keywords: ['skill', 'tech', 'stack', 'language', 'knowledge', 'expertise'],
    response: `Rohit's technical arsenal is divided into three core domains:\n\n🛠️ **AI Engineering**: LangChain, LangGraph, RAG Architectures, Multi-Agent Systems, FastAPI, Docker.\n\n📊 **Data Science**: Python, scikit-learn, NumPy, Pandas, SQL, Matplotlib.\n\n🧠 **Foundations**: Linear Algebra, Calculus, Probability, OLS, Gradient Descent Optimization.`,
  },
  projects: {
    keywords: ['project', 'work', 'built', 'portfolio', 'experience'],
    response: `Rohit has built several production-ready AI systems:\n\n🤖 **Multi-Agent Research System**: Autonomous agents collaborating via LangGraph for deep synthesis.\n⚡ **AI Parallel Processing Pipeline**: High-performance orchestration using RunnableParallel for concurrent LLM invocation.\n📄 **Chat with PDF**: A professional RAG system with FAISS for semantic retrieval.\n📊 **YouTube Sentiment Analysis**: End-to-end NLP pipeline for social media insights.\n\nWould you like to know the technical details of a specific project?`,
  },
  experience: {
    keywords: ['experience', 'work', 'intern', 'internship', 'career', 'education'],
    response: `Rohit is an **AI Engineer** with a strong background in Data Science. His experience is characterized by a "Math-First" approach, ensuring that the systems he builds are not just wrappers around APIs, but are grounded in mathematical rigor. He is currently open to AI Engineering and ML Research collaborations.`,
  },
  rag: {
    keywords: ['rag', 'retrieval', 'vector', 'embedding', 'faiss'],
    response: `Rohit specializes in **Retrieval-Augmented Generation (RAG)**. His work focuses on overcoming the "lost-in-the-middle" problem and hallucinations. Key expertise includes:\n\n🔍 **Semantic Search**: Utilizing FAISS and advanced embedding models.\n📦 **Context Optimization**: Implementing recursive character splitting and hybrid retrieval.\n⚡ **Grounding**: Ensuring LLM responses are strictly tied to retrieved evidence.`,
  },
  agents: {
    keywords: ['agent', 'multi-agent', 'langgraph', 'autonomous'],
    response: `Rohit is deeply invested in **Agentic AI**. His Multi-Agent Research System uses LangGraph to orchestrate specialized agents (Researcher, Analyst, Supervisor). This allows for:\n\n🔄 **Reflection Loops**: Agents verify each other's work.\n🕸️ **Dynamic Routing**: Tasks are delegated based on agent capability.\n🧠 **Shared State**: Maintaining a global context across an autonomous workflow.`,
  },
  contact: {
    keywords: ['contact', 'hire', 'reach', 'email', 'linkedin', 'github'],
    response: `You can reach Rohit through the **Contact Form** on this portfolio. He's also active on **GitHub (rohitbedse)** for open-source contributions and technical discussions. He typically responds to professional inquiries within 24-48 hours.`,
  },
  greeting: {
    keywords: ['hi', 'hello', 'hey', 'greetings'],
    response: `Hello! 👋 I'm Rohit's AI Assistant. I can provide detailed information about his **AI Engineering expertise**, **Production Projects**, **Mathematical Foundations**, or **Contact Details**. What can I help you with today?`,
  },
}

const SUGGESTED_QUESTIONS = [
  { label: 'Tech Stack', question: 'What is your tech stack?' },
  { label: 'RAG Work', question: 'Tell me about your RAG projects.' },
  { label: 'Multi-Agent AI', question: 'How do your multi-agent systems work?' },
  { label: 'Contact', question: 'How can I contact you?' },
]

function getAIResponse(input: string): string {
  const q = input.toLowerCase()

  // Exact match or keyword search in knowledge base
  for (const key in KNOWLEDGE_BASE) {
    const entry = KNOWLEDGE_BASE[key] as any
    if (entry.keywords.some((kw: string) => q.includes(kw))) {
      return entry.response
    }
  }

  return `That's an interesting question! While I don't have a specific answer for that in my current knowledge base, I can tell you about Rohit's **AI Engineering skills**, **RAG projects**, or **Multi-Agent systems**. Feel free to try one of those!`
}

function TypingIndicator() {
  return (
    <div className="flex items-center gap-1.5 px-4 py-3">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="w-2 h-2 rounded-full bg-accent-blue/60"
          animate={{ opacity: [0.3, 1, 0.3], y: [0, -4, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, delay: i * 0.2, ease: 'easeInOut' }}
        />
      ))}
    </div>
  )
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '0',
      role: 'assistant',
      text: "Hey! 👋 I'm Rohit's AI assistant. Ask me anything about his skills, projects, or experience!",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  // Listen for open event from hero CTA
  useEffect(() => {
    const handler = () => setIsOpen(true)
    window.addEventListener('open-chatbot', handler)
    return () => window.removeEventListener('open-chatbot', handler)
  }, [])

  // Auto-scroll
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages, isTyping])

  const sendMessage = useCallback((textOverride?: string) => {
    const messageText = textOverride || input
    if (!messageText.trim()) return

    const userMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      text: messageText.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    }

    setMessages((prev) => [...prev, userMsg])
    const q = messageText.trim()
    setInput('')
    setIsTyping(true)

    // Simulate AI thinking delay
    setTimeout(() => {
      const reply: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        text: getAIResponse(q),
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      }
      setIsTyping(false)
      setMessages((prev) => [...prev, reply])
    }, 800 + Math.random() * 800)
  }, [input])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <>
      {/* Floating trigger button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-accent-blue to-accent-violet flex items-center justify-center shadow-lg hover:shadow-[0_0_30px_rgba(0,212,255,0.4)] transition-shadow"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Open AI chatbot"
          >
            <MessageSquare size={24} className="text-white" />
            {/* Pulse ring */}
            <span className="absolute inset-0 rounded-full animate-ping bg-accent-blue/20" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-6 right-6 z-50 w-[380px] max-w-[calc(100vw-3rem)] h-[540px] max-h-[calc(100vh-6rem)] rounded-2xl overflow-hidden flex flex-col"
            style={{
              background: 'rgba(10, 15, 30, 0.95)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,0.08)',
              boxShadow: '0 25px 60px rgba(0,0,0,0.5), 0 0 40px rgba(0,212,255,0.08)',
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/5">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-blue to-accent-violet flex items-center justify-center">
                  <Sparkles size={16} className="text-white" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">Rohit&apos;s AI</h3>
                  <p className="text-[11px] text-accent-green flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-green inline-block" />
                    Online
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-lg hover:bg-white/5 flex items-center justify-center transition-colors"
                aria-label="Close chatbot"
              >
                <X size={18} className="text-gray-500" />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto chat-scrollbar px-4 py-4 space-y-4">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-3 ${
                      msg.role === 'user'
                        ? 'bg-gradient-to-r from-accent-blue/20 to-accent-violet/20 border border-accent-blue/20 text-white'
                        : 'bg-white/[0.03] border border-white/5 text-gray-300'
                    }`}
                  >
                    <p className="text-sm leading-relaxed whitespace-pre-line">{msg.text}</p>

                    {/* Expandable media hint (future RAG multimodal) */}
                    {msg.hasMedia && (
                      <div className="mt-2 p-2 rounded-lg bg-white/[0.03] border border-white/5 flex items-center gap-2 text-[11px] text-gray-600 cursor-pointer hover:bg-white/[0.06] transition-colors">
                        <ImageIcon size={14} aria-label="Retrieved media icon" />
                        <span>Retrieved media available</span>
                      </div>
                    )}

                    <p className={`text-[10px] mt-1.5 ${msg.role === 'user' ? 'text-accent-blue/50' : 'text-gray-600'}`}>
                      {msg.timestamp}
                    </p>
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white/[0.03] border border-white/5 rounded-2xl">
                    <TypingIndicator />
                  </div>
                </div>
              )}

              {/* Suggested Questions - Only show when messages are few or at start */}
              {messages.length < 3 && !isTyping && (
                <div className="grid grid-cols-2 gap-2 mt-4">
                  {SUGGESTED_QUESTIONS.map((sq, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        setInput(sq.question)
                        sendMessage(sq.question)
                      }}
                      className="text-left p-2 rounded-lg border border-white/5 bg-white/[0.02] text-[11px] text-gray-400 hover:text-accent-blue hover:border-accent-blue/30 transition-all"
                    >
                      {sq.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Multimodal hint bar */}
            <div className="px-4 py-2 border-t border-white/5 flex items-center gap-3">
              <button
                className="text-gray-600 hover:text-gray-400 transition-colors"
                aria-label="Attach file (coming soon)"
                title="Multimodal retrieval — coming soon"
              >
                <Paperclip size={16} />
              </button>
              <button
                className="text-gray-600 hover:text-gray-400 transition-colors"
                aria-label="Send image (coming soon)"
                title="Image retrieval — coming soon"
              >
                <ImageIcon size={16} aria-label="Image retrieval icon" />
              </button>
              <button
                className="text-gray-600 hover:text-gray-400 transition-colors"
                aria-label="Document search (coming soon)"
                title="Document RAG — coming soon"
              >
                <FileText size={16} />
              </button>
              <span className="text-[10px] text-gray-700 ml-auto">Multimodal RAG — Soon</span>
            </div>

            {/* Input */}
            <div className="px-4 pb-4 pt-1">
              <div className="flex items-center gap-2 bg-white/[0.04] border border-white/8 rounded-xl px-4 py-2.5 focus-within:border-accent-blue/30 transition-colors">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask about Rohit..."
                  className="flex-1 bg-transparent text-sm text-white placeholder:text-gray-600 outline-none"
                  aria-label="Chat message input"
                />
                <button
                  onClick={sendMessage}
                  disabled={!input.trim()}
                  className={`p-1.5 rounded-lg transition-colors ${
                    input.trim()
                      ? 'text-accent-blue hover:bg-accent-blue/10'
                      : 'text-gray-700 cursor-default'
                  }`}
                  aria-label="Send message"
                >
                  <Send size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

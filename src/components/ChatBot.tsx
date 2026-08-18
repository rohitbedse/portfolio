'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageSquare, X, Send, Paperclip, Image, FileText, Sparkles } from 'lucide-react'

interface Message {
  id: string
  role: 'user' | 'assistant'
  text: string
  timestamp: string
  hasMedia?: boolean
}

// Rohit's resume context for mocked AI responses
const RESUME_CONTEXT = {
  name: 'Rohit Bedse',
  role: 'ML Engineer & GenAI Builder',
  education: 'Final-year Data Science student',
  skills: ['Python', 'LangChain', 'LangGraph', 'FastAPI', 'RAG Systems', 'LLM Orchestration', 'scikit-learn', 'SQL', 'Streamlit', 'Docker', 'Git'],
  projects: [
    'Multi-Agent Research System (LangGraph, Google Gemini)',
    'AI Parallel Processing Pipeline (RunnableParallel, 70% latency reduction)',
    'Chat with PDF — RAG System (FAISS, LangChain)',
    'YouTube Sentiment Analysis (NLP, scikit-learn)',
    'Linear Regression From Scratch (OLS, NumPy)',
  ],
  strengths: ['Mathematical foundations', 'Production-grade ML systems', 'GenAI architecture', 'Engineering discipline'],
  interests: ['Multi-agent systems', 'RAG architectures', 'LLM fine-tuning', 'Multimodal AI'],
  availability: 'Open to ML internships and collaborations',
}

function getAIResponse(input: string): string {
  const q = input.toLowerCase()

  if (q.includes('who') && (q.includes('you') || q.includes('rohit')))
    return `I'm Rohit Bedse's AI assistant! Rohit is a ${RESUME_CONTEXT.education} specializing as an ${RESUME_CONTEXT.role}. He builds production-grade ML systems with strong mathematical foundations. Want to know about his projects or skills?`

  if (q.includes('skill') || q.includes('tech') || q.includes('stack'))
    return `Rohit's core stack includes:\n\n🐍 **Python** (primary language)\n🔗 **LangChain & LangGraph** for LLM orchestration\n⚡ **FastAPI** for APIs\n🔍 **RAG Systems** with vector databases\n📊 **scikit-learn** for classical ML\n🗃️ **SQL** for data\n🖥️ **Streamlit** for demos\n\nHe also works with Docker, Git, and AWS.`

  if (q.includes('project'))
    return `Here are Rohit's featured projects:\n\n🕸️ **Multi-Agent Research System** — Autonomous agents collaborating via LangGraph\n⚡ **AI Parallel Processing Pipeline** — 70% latency reduction with RunnableParallel\n📄 **Chat with PDF** — RAG system with FAISS vector search\n📊 **YouTube Sentiment Analysis** — End-to-end NLP pipeline\n📐 **Linear Regression From Scratch** — OLS math to implementation\n\nWant details on any specific project?`

  if (q.includes('contact') || q.includes('hire') || q.includes('reach') || q.includes('email'))
    return `Rohit is currently ${RESUME_CONTEXT.availability}. You can:\n\n📧 Email via the contact form on this page\n🐙 Check his GitHub: github.com/rohitbedse\n💼 Connect on LinkedIn\n\nHe typically responds within 24-48 hours!`

  if (q.includes('experience') || q.includes('work') || q.includes('intern'))
    return `Rohit is a ${RESUME_CONTEXT.education} actively seeking ML internship opportunities. His experience is project-driven — he's built ${RESUME_CONTEXT.projects.length}+ production-quality ML systems covering GenAI, classical ML, and NLP. He approaches every project with mathematical rigor and engineering discipline.`

  if (q.includes('rag') || q.includes('retrieval'))
    return `Rohit specializes in RAG (Retrieval-Augmented Generation) systems! He's built a **Chat with PDF** system using FAISS vector search + LangChain. His RAG work focuses on:\n\n🔍 Semantic document retrieval\n📦 Vector database integration\n🧠 Context-aware LLM responses\n⚡ Optimized embedding pipelines\n\nThis chatbot itself is designed to support multimodal RAG in the future! 🚀`

  if (q.includes('agent') || q.includes('multi'))
    return `Rohit's **Multi-Agent Research System** is one of his flagship projects! It features:\n\n🤖 Specialized AI agents with distinct roles\n🕸️ Built with LangGraph for agent orchestration\n🔄 Intelligent task delegation & result aggregation\n🧠 Powered by Google Gemini\n\nThe system demonstrates autonomous collaboration between AI agents to research and synthesize information.`

  if (q.includes('hello') || q.includes('hi') || q.includes('hey'))
    return `Hey there! 👋 I'm Rohit's AI assistant. I can tell you about:\n\n• His **skills & tech stack**\n• His **projects**\n• His **experience & availability**\n• **RAG systems** and **multi-agent** work\n\nWhat would you like to know?`

  return `Great question! I'm Rohit's AI assistant and I can help with info about his:\n\n📋 **Skills** — Python, LangChain, ML, GenAI\n🚀 **Projects** — Multi-agent systems, RAG, NLP\n💼 **Availability** — Open for ML internships\n📧 **Contact** — How to reach him\n\nTry asking something specific!`
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

  const sendMessage = useCallback(() => {
    if (!input.trim()) return

    const userMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      text: input.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    }

    setMessages((prev) => [...prev, userMsg])
    const q = input.trim()
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
                        <Image size={14} />
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
                <Image size={16} />
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

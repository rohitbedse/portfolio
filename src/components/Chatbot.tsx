'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, Bot, User } from 'lucide-react'

const qa: Record<string, string> = {
    skills: "Rohit is proficient in Python (90%), SQL (85%), Scikit-learn (85%), Pandas (92%), and XGBoost. He also works with Tableau, Streamlit, and basic AWS/SageMaker.",
    projects: "Rohit has built: Customer Churn Prediction (94.7% accuracy), Sales Forecasting with ARIMA, Customer Segmentation with K-Means RFM, Netflix EDA Dashboard, A/B Testing Framework, and House Price Regression (top 18% Kaggle).",
    experience: "Rohit is an entry-level Data Scientist seeking opportunities. He has hands-on project experience in the full ML lifecycle — from EDA to model deployment.",
    contact: "You can reach Rohit via the Contact page or connect on LinkedIn and GitHub. He is open to internships and entry-level roles.",
    education: "Rohit has completed coursework in Data Science, Statistics, and Machine Learning, with practical experience through real-world projects.",
    ml: "Rohit's ML stack includes Linear/Logistic Regression, Random Forests, XGBoost, K-Means clustering, ARIMA for time series, and basic Neural Networks.",
    python: "Yes! Python is Rohit's primary language (90% proficiency). He uses it daily for data wrangling, ML modeling, and visualization.",
    sql: "Rohit is proficient in SQL (85%) — writing complex queries, window functions, CTEs, and using it for analytical reporting.",
    hire: "Absolutely! Rohit is actively job-seeking. Head to the Contact page to get in touch for internships or entry-level DS roles.",
}

function getReply(msg: string): string {
    const lower = msg.toLowerCase()
    if (lower.includes('skill') || lower.includes('know') || lower.includes('tech')) return qa.skills
    if (lower.includes('project') || lower.includes('work') || lower.includes('built')) return qa.projects
    if (lower.includes('experience') || lower.includes('background') || lower.includes('about')) return qa.experience
    if (lower.includes('contact') || lower.includes('reach') || lower.includes('email')) return qa.contact
    if (lower.includes('education') || lower.includes('degree') || lower.includes('study')) return qa.education
    if (lower.includes('machine learning') || lower.includes('ml') || lower.includes('model')) return qa.ml
    if (lower.includes('python')) return qa.python
    if (lower.includes('sql') || lower.includes('database')) return qa.sql
    if (lower.includes('hire') || lower.includes('job') || lower.includes('available') || lower.includes('internship')) return qa.hire
    return "Great question! I'm Rohit's portfolio assistant. You can ask me about his skills, projects, experience, or how to contact him. 🚀"
}

type Message = { role: 'user' | 'bot'; text: string }

const suggestions = ['What are his skills?', 'Show me his projects', 'Is he available to hire?']

export default function Chatbot() {
    const [open, setOpen] = useState(false)
    const [messages, setMessages] = useState<Message[]>([
        { role: 'bot', text: "👋 Hi! I'm Rohit's AI portfolio guide. Ask me about his skills, projects, or anything else!" }
    ])
    const [input, setInput] = useState('')
    const [typing, setTyping] = useState(false)
    const bottomRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, [messages, typing])

    const send = (text: string) => {
        if (!text.trim()) return
        setMessages(m => [...m, { role: 'user', text }])
        setInput('')
        setTyping(true)
        setTimeout(() => {
            setTyping(false)
            setMessages(m => [...m, { role: 'bot', text: getReply(text) }])
        }, 900)
    }

    return (
        <>
            {/* Floating button */}
            <motion.button
                id="chatbot-toggle"
                onClick={() => setOpen(o => !o)}
                className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center cursor-pointer"
                style={{
                    background: 'linear-gradient(135deg, var(--cyan), var(--purple))',
                    boxShadow: '0 4px 24px rgba(0,212,255,0.4)',
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                animate={open ? {} : { y: [0, -6, 0] }}
                transition={open ? {} : { duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            >
                {open ? <X size={22} color="#000" /> : <MessageCircle size={22} color="#000" />}
            </motion.button>

            {/* Chat window */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        id="chatbot-window"
                        className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 flex flex-col rounded-2xl overflow-hidden"
                        style={{
                            background: 'var(--dark-card)',
                            border: '1px solid rgba(0,212,255,0.2)',
                            boxShadow: '0 20px 60px rgba(0,0,0,0.7), 0 0 0 1px rgba(0,212,255,0.1)',
                            maxHeight: '520px',
                        }}
                        initial={{ opacity: 0, scale: 0.88, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.88, y: 20 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                    >
                        {/* Header */}
                        <div
                            className="flex items-center gap-3 px-4 py-3"
                            style={{ background: 'linear-gradient(135deg, rgba(0,212,255,0.1), rgba(184,41,221,0.1))', borderBottom: '1px solid rgba(255,255,255,0.06)' }}
                        >
                            <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, var(--cyan), var(--purple))' }}>
                                <Bot size={16} color="#000" />
                            </div>
                            <div>
                                <div className="text-sm font-bold text-white">Portfolio Guide</div>
                                <div className="flex items-center gap-1">
                                    <span className="w-2 h-2 rounded-full animate-pulse-dot" style={{ background: 'var(--green)' }} />
                                    <span className="text-xs" style={{ color: 'var(--green)' }}>Online</span>
                                </div>
                            </div>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-3" style={{ maxHeight: '340px' }}>
                            {messages.map((m, i) => (
                                <motion.div
                                    key={i}
                                    className={`flex gap-2 ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                                    initial={{ opacity: 0, y: 8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {m.role === 'bot' && (
                                        <div className="w-6 h-6 rounded-full flex-shrink-0 mt-0.5 flex items-center justify-center" style={{ background: 'rgba(0,212,255,0.15)' }}>
                                            <Bot size={12} style={{ color: 'var(--cyan)' }} />
                                        </div>
                                    )}
                                    <div
                                        className="max-w-[80%] px-3 py-2 rounded-2xl text-sm leading-relaxed"
                                        style={
                                            m.role === 'user'
                                                ? { background: 'linear-gradient(135deg, var(--cyan), var(--purple))', color: '#000', fontWeight: 500 }
                                                : { background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.07)', color: 'var(--text-primary)' }
                                        }
                                    >
                                        {m.text}
                                    </div>
                                    {m.role === 'user' && (
                                        <div className="w-6 h-6 rounded-full flex-shrink-0 mt-0.5 flex items-center justify-center" style={{ background: 'rgba(184,41,221,0.2)' }}>
                                            <User size={12} style={{ color: 'var(--purple)' }} />
                                        </div>
                                    )}
                                </motion.div>
                            ))}
                            {typing && (
                                <div className="flex gap-2 justify-start">
                                    <div className="w-6 h-6 rounded-full flex-shrink-0 mt-0.5 flex items-center justify-center" style={{ background: 'rgba(0,212,255,0.15)' }}>
                                        <Bot size={12} style={{ color: 'var(--cyan)' }} />
                                    </div>
                                    <div className="px-3 py-2 rounded-2xl" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.07)' }}>
                                        <div className="flex gap-1 items-center h-4">
                                            {[0, 1, 2].map(i => (
                                                <motion.div
                                                    key={i}
                                                    className="w-1.5 h-1.5 rounded-full"
                                                    style={{ background: 'var(--cyan)' }}
                                                    animate={{ y: [0, -4, 0] }}
                                                    transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}
                            <div ref={bottomRef} />
                        </div>

                        {/* Suggestions */}
                        {messages.length <= 1 && (
                            <div className="px-4 pb-2 flex flex-wrap gap-1.5">
                                {suggestions.map(s => (
                                    <button
                                        key={s}
                                        onClick={() => send(s)}
                                        className="text-xs px-3 py-1 rounded-full transition-all"
                                        style={{ background: 'rgba(0,212,255,0.08)', border: '1px solid rgba(0,212,255,0.2)', color: 'var(--cyan)' }}
                                    >
                                        {s}
                                    </button>
                                ))}
                            </div>
                        )}

                        {/* Input */}
                        <div className="p-3 flex gap-2" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                            <input
                                className="flex-1 input-field text-sm py-2"
                                style={{ borderRadius: '10px' }}
                                placeholder="Ask about Rohit..."
                                value={input}
                                onChange={e => setInput(e.target.value)}
                                onKeyDown={e => e.key === 'Enter' && send(input)}
                            />
                            <motion.button
                                onClick={() => send(input)}
                                className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                                style={{ background: 'linear-gradient(135deg, var(--cyan), var(--purple))' }}
                                whileHover={{ scale: 1.08 }}
                                whileTap={{ scale: 0.92 }}
                            >
                                <Send size={15} color="#000" />
                            </motion.button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

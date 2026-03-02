'use client'

import React, { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight, Github, Linkedin } from 'lucide-react'
import PageTransition from '@/components/PageTransition'

/* ═══════════════════════════════════════════
   ANIMATED COUNTER
═══════════════════════════════════════════ */
function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 1500
    const step = duration / target
    const timer = setInterval(() => {
      start += 1
      setCount(start)
      if (start >= target) clearInterval(timer)
    }, step)
    return () => clearInterval(timer)
  }, [inView, target])

  return <span ref={ref}>{count}{suffix}</span>
}

/* ═══════════════════════════════════════════
   PROJECT CARD with 3D tilt
═══════════════════════════════════════════ */
function TiltCard({ name, metric, type, href }: { name: string; metric: string; type: string; href: string }) {
  const rotateX = useSpring(0, { stiffness: 200, damping: 20 })
  const rotateY = useSpring(0, { stiffness: 200, damping: 20 })

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    rotateX.set(-(y / rect.height - 0.5) * 16)
    rotateY.set((x / rect.width - 0.5) * 16)
  }

  const handleLeave = () => {
    rotateX.set(0)
    rotateY.set(0)
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="group relative w-full block">
      <motion.div
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d', perspective: 800 }}
        className="relative w-full"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d14] to-[#111118] scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-500 ease-[0.16,1,0.3,1] z-0 rounded-xl" />
        <div className="relative z-10 flex flex-col md:flex-row justify-between sm:items-center p-8 border border-[#1a1a2e] group-hover:border-[#00d4ff20] transition-all duration-500 rounded-xl">
          <h3 className="text-2xl sm:text-4xl font-display font-bold text-white mb-2 md:mb-0 transform transition-transform duration-500 group-hover:translate-x-4">
            {name}
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-12 items-start sm:items-center text-left sm:text-right transform transition-transform duration-500 group-hover:-translate-x-4">
            <span className="font-mono text-xs text-[#555] uppercase tracking-widest group-hover:text-[#b829dd] transition-colors duration-500">
              {type}
            </span>
            <span className="font-mono text-sm text-white bg-[#1a1a2e] group-hover:bg-[#00d4ff] group-hover:text-black px-4 py-1.5 rounded-full transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(0,212,255,0.3)]">
              {metric}
            </span>
          </div>
        </div>
      </motion.div>
    </a>
  )
}

/* ═══════════════════════════════════════════
   MARQUEE TECH ITEMS
═══════════════════════════════════════════ */
const techStack = [
  { emoji: '🐍', name: 'Python' },
  { emoji: '🗄️', name: 'SQL' },
  { emoji: '🐼', name: 'Pandas' },
  { emoji: '🤖', name: 'Scikit-learn' },
  { emoji: '⚡', name: 'XGBoost' },
  { emoji: '🔢', name: 'NumPy' },
  { emoji: '📉', name: 'Plotly' },
  { emoji: '🚀', name: 'Streamlit' },
  { emoji: '🧠', name: 'TensorFlow' },
  { emoji: '🔥', name: 'PyTorch' },
  { emoji: '🔗', name: 'LangChain' },
  { emoji: '📊', name: 'Tableau' },
]

/* ═══════════════════════════════════════════
   HOME PAGE
═══════════════════════════════════════════ */
export default function HomePage() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -200])
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])

  const nameLetters = 'ROHIT BEDSE'.split('')

  return (
    <PageTransition>
      <div className="bg-[#030305] text-[#e0e0e0] min-h-screen font-sans">

        {/* ══════════ AMBIENT VOID LIGHTING ══════════ */}
        <div
          className="fixed top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[80vh] pointer-events-none mix-blend-screen"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(0,212,255,0.04) 0%, rgba(184,41,221,0.02) 40%, transparent 70%)',
            filter: 'blur(100px)',
            zIndex: 0,
          }}
        />

        {/* ══════════ HERO SECTION ══════════ */}
        <section className="relative h-screen flex flex-col justify-center px-4 sm:px-8 lg:px-16 z-10 overflow-hidden">
          <motion.div
            className="absolute top-24 left-4 sm:left-8 lg:left-16 hidden sm:flex items-center gap-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="w-2 h-2 rounded-full bg-[#00ff88] animate-pulse" />
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#666]">Available for Opportunities</span>
          </motion.div>

          <motion.div
            style={{ y, opacity }}
            className="flex flex-col items-start w-full max-w-7xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="w-full flex justify-between items-end border-b border-[#222] pb-8 mb-8 flex-wrap gap-8"
            >
              <div>
                <h1 className="text-[12vw] sm:text-[10vw] font-display font-extrabold leading-[0.85] tracking-tighter overflow-hidden">
                  {nameLetters.map((letter, i) => (
                    <motion.span
                      key={i}
                      className="inline-block text-white"
                      style={{ display: letter === ' ' ? 'inline' : 'inline-block' }}
                      initial={{ opacity: 0, y: 80, rotateX: -90 }}
                      animate={{ opacity: 1, y: 0, rotateX: 0 }}
                      transition={{
                        duration: 0.8,
                        delay: 0.1 + i * 0.05,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    >
                      {letter === ' ' ? '\u00A0' : letter}
                    </motion.span>
                  ))}
                  <motion.span
                    className="liquid-gradient inline-block"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.1 + nameLetters.length * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  >
                    .
                  </motion.span>
                </h1>
              </div>

              <motion.div
                className="max-w-xs text-right"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#555] mb-2">Role</p>
                <h2 className="text-xl sm:text-2xl font-display font-semibold tracking-tight text-[#ccc]">
                  Data Scientist &amp;<br />ML Engineer
                </h2>
              </motion.div>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row justify-between w-full gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <p className="max-w-md text-sm sm:text-base text-[#777] font-light leading-relaxed">
                Transforming raw datasets into predictive insights.
                Building end-to-end ML pipelines, NLP systems, and
                data-driven applications that solve real problems.
              </p>

              <div className="flex gap-6 items-center flex-wrap">
                <Link href="/projects" className="group flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-white hover-line pb-1 transition-all">
                  View Work <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-[#00d4ff]" />
                </Link>
                <a href="https://github.com/rohitbedse" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#888] hover:text-white pb-1 transition-all">
                  <Github size={14} /> GitHub
                </a>
                <a href="https://linkedin.com/in/rohitbedse" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#888] hover:text-white pb-1 transition-all">
                  <Linkedin size={14} /> LinkedIn
                </a>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* ══════════ MARQUEE / TECH TICKER ══════════ */}
        <section className="border-y border-[#1a1a2e] bg-[#050508] py-6 relative z-10 overflow-hidden">
          <div className="marquee-wrapper">
            <div className="marquee">
              {[...techStack, ...techStack].map((item, i) => (
                <span
                  key={i}
                  className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#444] px-4 whitespace-nowrap hover:text-[#00d4ff] transition-colors duration-300"
                >
                  <span className="text-base">{item.emoji}</span>
                  {item.name}
                  <span className="text-[#1a1a2e] ml-2">◆</span>
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════ BENTO GRID ══════════ */}
        <section className="py-24 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
            <div className="bento-grid">

              {/* Stats card */}
              <motion.div
                className="col-span-2 row-span-2 glass rounded-2xl border border-white/[0.06] p-8 flex flex-col justify-between glow-card"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 30 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-[#555] mb-2">GitHub Repositories</p>
                  <div className="text-7xl font-display font-extrabold text-[#00d4ff] tabular-nums">
                    <AnimatedCounter target={30} suffix="+" />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-mono text-[#555]">
                    <span>ML · NLP · Data Viz · LLMs</span>
                    <span>Python / SQL</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-white/[0.04] overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ background: 'linear-gradient(90deg, #00d4ff, #b829dd, #00ff88)' }}
                      initial={{ width: 0 }}
                      whileInView={{ width: '90%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: 'easeOut' }}
                    />
                  </div>
                </div>
              </motion.div>

              {/* Profile card */}
              <motion.div
                className="col-span-2 glass rounded-2xl border border-white/[0.06] p-6 glow-card"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 30 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <p className="font-mono text-[10px] uppercase tracking-widest text-[#555] mb-3">Profile</p>
                <h3 className="text-xl font-display font-bold text-white">Rohit Bedse</h3>
                <p className="text-sm text-[#888] mt-1">Data Scientist · ML Engineer</p>
                <p className="font-mono text-xs text-[#444] mt-2">📍 Pune, India</p>
              </motion.div>

              {/* Featured project card */}
              <motion.div
                className="col-span-2 glass rounded-2xl border border-white/[0.06] p-6 glow-card"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 30 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <p className="font-mono text-[10px] uppercase tracking-widest text-[#555] mb-3">Featured Project</p>
                <h3 className="text-lg font-display font-bold text-white mb-1">YouTube Comment Analysis</h3>
                <p className="text-xs text-[#888] leading-relaxed">NLP sentiment analysis · Transformer models · Multilingual support</p>
                <span className="inline-block mt-3 font-mono text-xs px-3 py-1 rounded-full" style={{ background: 'rgba(0,212,255,0.1)', color: '#00d4ff', border: '1px solid rgba(0,212,255,0.2)' }}>
                  Major Project
                </span>
              </motion.div>

              {/* Availability */}
              <motion.div
                className="col-span-1 glass rounded-2xl border border-white/[0.06] p-5 flex flex-col justify-center items-center text-center glow-card"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 30 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="w-3 h-3 rounded-full bg-[#00ff88] mb-3 animate-pulse" />
                <p className="font-mono text-xs text-[#888]">Open to work</p>
              </motion.div>

              {/* Location */}
              <motion.div
                className="col-span-1 glass rounded-2xl border border-white/[0.06] p-5 flex flex-col justify-center items-center text-center glow-card"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 30 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <span className="text-2xl mb-2">📍</span>
                <p className="font-mono text-xs text-[#888]">Pune, India</p>
              </motion.div>

            </div>
          </div>
        </section>

        {/* ══════════ EXPERTISE SECTION ══════════ */}
        <section className="py-32 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
            <h2 className="text-[5vw] sm:text-[3vw] font-display font-extrabold tracking-tighter mb-16 text-white leading-none">
              EXPERTISE<span className="liquid-gradient">_</span>
            </h2>

            <div className="border-t border-[#1a1a2e]">
              {[
                { num: '01', title: 'Machine Learning', desc: 'End-to-end ML pipelines — from data cleaning and feature engineering to model deployment. Classification, regression, clustering, and time-series.', tools: 'Scikit-learn / XGBoost / TensorFlow' },
                { num: '02', title: 'NLP & LLMs', desc: 'Sentiment analysis, comment analysis systems, and LLM-powered applications using modern transformer architectures and LangChain.', tools: 'LangChain / NLTK / Transformers' },
                { num: '03', title: 'Data Analysis & Visualization', desc: 'Exploratory data analysis, statistical modeling, and interactive dashboards that tell compelling data stories.', tools: 'Pandas / Plotly / Tableau / Streamlit' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="group flex flex-col md:flex-row justify-between py-12 border-b border-[#1a1a2e] hover:border-[#333] transition-all duration-500 cursor-crosshair"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                >
                  <div className="flex gap-8 mb-4 md:mb-0">
                    <span className="font-mono text-sm text-[#333] group-hover:text-[#00d4ff] transition-colors duration-500">{item.num}</span>
                    <h3 className="text-3xl sm:text-4xl font-display font-bold text-[#999] group-hover:text-white transition-colors duration-500">{item.title}</h3>
                  </div>
                  <div className="md:w-1/3 flex flex-col justify-between">
                    <p className="text-sm text-[#666] font-light leading-relaxed mb-4 group-hover:text-[#999] transition-colors duration-500">{item.desc}</p>
                    <p className="font-mono text-[10px] uppercase tracking-widest text-[#333] group-hover:text-[#b829dd] transition-colors duration-500">{item.tools}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════ SELECTED WORKS ══════════ */}
        <section className="py-32 bg-[#020204] relative z-10 pb-48">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
            <div className="flex justify-between items-end mb-16">
              <h2 className="text-[5vw] sm:text-[3vw] font-display font-extrabold tracking-tighter text-white leading-none">
                WORKS<span className="liquid-gradient">_</span>
              </h2>
              <Link href="/projects" className="group flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#666] hover:text-white transition-colors">
                All Projects <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="flex flex-col gap-4">
              {[
                { name: 'YouTube Comment Analysis', metric: 'NLP · MAJOR', type: 'Sentiment / Transformers', href: 'https://github.com/rohitbedse/YouTube-comment-analysis---Major-Project' },
                { name: 'Swiggy Delivery Prediction', metric: 'ML PIPELINE', type: 'Regression / End-to-End', href: 'https://github.com/rohitbedse/Swiggy_delivery_time_prediction' },
                { name: 'Movie Recommendation', metric: 'TF-IDF', type: 'Content-Based / Cosine Sim', href: 'https://github.com/rohitbedse/Movie-Recommendation-using-TF-IDF-Cosine-Similarity-' },
                { name: 'LangChain Projects', metric: 'LLM · AI', type: 'RAG / GenAI', href: 'https://github.com/rohitbedse/Langchain_Projects' },
              ].map((proj, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                >
                  <TiltCard {...proj} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

      </div>
    </PageTransition>
  )
}

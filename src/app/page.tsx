'use client'

import React, { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
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
   PROJECT CARD with tilt
═══════════════════════════════════════════ */
function TiltCard({ name, metric, type }: { name: string; metric: string; type: string }) {
  const rotateX = useSpring(0, { stiffness: 200, damping: 20 })
  const rotateY = useSpring(0, { stiffness: 200, damping: 20 })

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    rotateX.set(-(y / rect.height - 0.5) * 14)
    rotateY.set((x / rect.width - 0.5) * 14)
  }

  const handleLeave = () => {
    rotateX.set(0)
    rotateY.set(0)
  }

  return (
    <Link href="/projects" className="group relative w-full block card">
      <motion.div
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d', perspective: 900 }}
        className="relative w-full"
      >
        <div className="absolute inset-0 bg-[#111] scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-500 ease-[0.16,1,0.3,1] z-0 rounded-sm" />
        <div className="relative z-10 flex flex-col md:flex-row justify-between sm:items-center p-8 border border-[#222] group-hover:border-transparent transition-colors">
          <h3 className="text-2xl sm:text-4xl font-light text-white mb-2 md:mb-0 transform transition-transform duration-500 group-hover:translate-x-4">
            {name}
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-12 items-start sm:items-center text-left sm:text-right transform transition-transform duration-500 group-hover:-translate-x-4">
            <span className="font-mono text-xs text-[#666] uppercase tracking-widest group-hover:text-[#00d4ff] transition-colors">
              {type}
            </span>
            <span className="font-mono text-sm text-white bg-[#222] group-hover:bg-[#00d4ff] group-hover:text-black px-3 py-1 rounded-full transition-colors">
              {metric}
            </span>
          </div>
        </div>
      </motion.div>
    </Link>
  )
}

/* ═══════════════════════════════════════════
   MARQUEE TECH ITEMS (doubled for infinite)
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
  { emoji: '☁️', name: 'AWS' },
  { emoji: '🐳', name: 'Docker' },
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
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#888]">Available for Entry-Level &amp; Internships</span>
          </motion.div>

          <motion.div
            style={{ y, opacity }}
            className="flex flex-col items-start w-full max-w-7xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="w-full flex justify-between items-end border-b border-[#333] pb-8 mb-8 flex-wrap gap-8"
            >
              <div>
                <h1 className="text-[12vw] sm:text-[10vw] font-black leading-[0.8] tracking-tighter overflow-hidden">
                  {/* Staggered letter-by-letter reveal */}
                  {nameLetters.map((letter, i) => (
                    <motion.span
                      key={i}
                      className="inline-block text-white"
                      style={{ display: letter === ' ' ? 'inline' : 'inline-block' }}
                      initial={{ opacity: 0, y: 60 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.6,
                        delay: 0.1 + i * 0.05,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    >
                      {letter === ' ' ? '\u00A0' : letter}
                    </motion.span>
                  ))}
                  <motion.span
                    className="text-[#00d4ff] inline-block"
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 + nameLetters.length * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  >
                    .
                  </motion.span>
                </h1>
              </div>

              <div className="max-w-xs text-right">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#666] mb-2">Role</p>
                <h2 className="text-xl sm:text-2xl font-light tracking-tight text-[#ccc]">
                  Data Scientist &amp;<br />Machine Learning Eng.
                </h2>
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row justify-between w-full gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <p className="max-w-md text-sm sm:text-base text-[#888] font-light leading-relaxed">
                Transforming raw datasets into predictive insights.
                Specializing in full-cycle data engineering, statistical modeling,
                and precise data narrative. Designed for the future of intelligence.
              </p>

              <div className="flex gap-6 items-center">
                <Link href="/projects" className="group flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-white border-b border-transparent hover:border-[#00d4ff] pb-1 transition-all">
                  View Work <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-[#00d4ff]" />
                </Link>
                <Link href="/contact" className="group flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#888] border-b border-transparent hover:border-white pb-1 transition-all">
                  Download Resume <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* ══════════ MARQUEE / TECH TICKER ══════════ */}
        <section className="border-y border-[#1a1a1a] bg-[#050508] py-6 relative z-10 overflow-hidden">
          <div className="marquee-wrapper">
            <div className="marquee">
              {[...techStack, ...techStack].map((item, i) => (
                <span
                  key={i}
                  className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#555] px-4 whitespace-nowrap"
                >
                  <span className="text-base">{item.emoji}</span>
                  {item.name}
                  <span className="text-[#2a2a2a] ml-2">◆</span>
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════ BENTO GRID ══════════ */}
        <section className="py-24 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
            <div className="bento-grid">

              {/* Stats card — lg (2 cols × 2 rows) */}
              <motion.div
                className="col-span-2 row-span-2 glass rounded-2xl border border-white/08 p-8 flex flex-col justify-between"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 30 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-[#555] mb-2">Live Model Accuracy</p>
                  <div className="text-7xl font-black text-[#00ff88] tabular-nums">
                    <AnimatedCounter target={94} suffix="." />
                    <span className="text-4xl">7%</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-mono text-[#555]">
                    <span>Customer Churn Model</span>
                    <span>Random Forest</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-white/05 overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ background: 'linear-gradient(90deg, #00ff88, #00d4ff)' }}
                      initial={{ width: 0 }}
                      whileInView={{ width: '94.7%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: 'easeOut' }}
                    />
                  </div>
                </div>
              </motion.div>

              {/* About mini card */}
              <motion.div
                className="col-span-2 glass rounded-2xl border border-white/08 p-6"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 30 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <p className="font-mono text-[10px] uppercase tracking-widest text-[#555] mb-3">Profile</p>
                <h3 className="text-xl font-bold text-white">Rohit Bedse</h3>
                <p className="text-sm text-[#888] mt-1">Data Scientist · ML Engineer</p>
                <p className="font-mono text-xs text-[#444] mt-2">📍 Pune, India</p>
              </motion.div>

              {/* Featured project card */}
              <motion.div
                className="col-span-2 glass rounded-2xl border border-white/08 p-6"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 30 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <p className="font-mono text-[10px] uppercase tracking-widest text-[#555] mb-3">Featured Project</p>
                <h3 className="text-lg font-bold text-white mb-1">Customer Churn Prediction</h3>
                <p className="text-xs text-[#888] leading-relaxed">Random Forest + SMOTE · FastAPI deployed · SHAP explainability</p>
                <span className="inline-block mt-3 font-mono text-xs px-3 py-1 rounded-full" style={{ background: 'rgba(0,255,136,0.1)', color: '#00ff88', border: '1px solid rgba(0,255,136,0.2)' }}>
                  94.7% Accuracy
                </span>
              </motion.div>

              {/* Availability card */}
              <motion.div
                className="col-span-1 glass rounded-2xl border border-white/08 p-5 flex flex-col justify-center items-center text-center"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 30 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="w-3 h-3 rounded-full bg-[#00ff88] mb-3 animate-pulse" />
                <p className="font-mono text-xs text-[#888]">Open to work</p>
              </motion.div>

              {/* Location card */}
              <motion.div
                className="col-span-1 glass rounded-2xl border border-white/08 p-5 flex flex-col justify-center items-center text-center"
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
            <h2 className="text-[5vw] sm:text-[3vw] font-bold tracking-tighter mb-16 text-white leading-none">
              EXPERTISE<span className="text-[#b829dd]">_</span>
            </h2>

            <div className="border-t border-[#222]">
              {[
                { num: '01', title: 'Exploratory Analysis', desc: 'Deep statistical dives surfacing hidden paradigms and anomalies. Visual narratives built on hard data.', tools: 'Pandas / Seaborn / SQL' },
                { num: '02', title: 'Machine Learning', desc: 'Predictive modeling from baseline inference to extreme gradient boosting. Built to scale.', tools: 'Scikit-learn / XGBoost / SHAP' },
                { num: '03', title: 'Data Architecture', desc: 'Robust pipelines and automated workflows. Ensuring data integrity from source to dashboard.', tools: 'FastAPI / AWS / Streamlit' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="group flex flex-col md:flex-row justify-between py-12 border-b border-[#222] hover:border-[#555] transition-colors cursor-crosshair"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                >
                  <div className="flex gap-8 mb-4 md:mb-0">
                    <span className="font-mono text-sm text-[#444] group-hover:text-[#00d4ff] transition-colors">{item.num}</span>
                    <h3 className="text-3xl sm:text-4xl font-light text-[#ccc] group-hover:text-white transition-colors">{item.title}</h3>
                  </div>
                  <div className="md:w-1/3 flex flex-col justify-between">
                    <p className="text-sm text-[#777] font-light leading-relaxed mb-4 group-hover:text-[#aaa] transition-colors">{item.desc}</p>
                    <p className="font-mono text-[10px] uppercase tracking-widest text-[#444] group-hover:text-[#b829dd] transition-colors">{item.tools}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════ SELECTED WORKS ══════════ */}
        <section className="py-32 bg-[#020202] relative z-10 pb-48">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
            <div className="flex justify-between items-end mb-16">
              <h2 className="text-[5vw] sm:text-[3vw] font-bold tracking-tighter text-white leading-none">
                WORKS<span className="text-[#00d4ff]">_</span>
              </h2>
              <Link href="/projects" className="group flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#888] hover:text-white transition-colors">
                Index <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="flex flex-col gap-4">
              {[
                { name: 'Customer Churn Prediction', metric: '94.7% ACC', type: 'Random Forest / SMOTE' },
                { name: 'Demand Forecasting', metric: '30% COST REDUCTION', type: 'ARIMA / Time Series' },
                { name: 'Sales Segmentation', metric: '25% ROI LIFT', type: 'K-Means / PCA' },
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

'use client'

import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Download, Github, Linkedin, BrainCircuit, TrendingUp, Layers, Database } from 'lucide-react'

/* ═══════════════════════════════════════════
   NEURAL NETWORK PARTICLE CANVAS
═══════════════════════════════════════════ */
function NeuralCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    let animId: number

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    type Node = {
      x: number; y: number
      vx: number; vy: number
      size: number; opacity: number
      color: string; pulse: number
      pulseDir: number
    }

    const nodes: Node[] = Array.from({ length: 80 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      size: Math.random() * 2.2 + 0.8,
      opacity: Math.random() * 0.5 + 0.2,
      color: ['0,212,255', '184,41,221', '0,255,136'][Math.floor(Math.random() * 3)],
      pulse: Math.random() * Math.PI * 2,
      pulseDir: Math.random() > 0.5 ? 1 : -1,
    }))

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      nodes.forEach((n) => {
        n.x += n.vx; n.y += n.vy
        n.pulse += 0.03 * n.pulseDir
        if (n.x < 0 || n.x > canvas.width) n.vx *= -1
        if (n.y < 0 || n.y > canvas.height) n.vy *= -1

        const pulsedOpacity = n.opacity + Math.sin(n.pulse) * 0.15

        // Glowing dot
        const grad = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.size * 3)
        grad.addColorStop(0, `rgba(${n.color},${pulsedOpacity})`)
        grad.addColorStop(1, `rgba(${n.color},0)`)
        ctx.beginPath()
        ctx.arc(n.x, n.y, n.size * 3, 0, Math.PI * 2)
        ctx.fillStyle = grad
        ctx.fill()

        // Core dot
        ctx.beginPath()
        ctx.arc(n.x, n.y, n.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${n.color},${Math.min(1, pulsedOpacity + 0.3)})`
        ctx.fill()

        // Connections
        nodes.forEach((other) => {
          const dx = n.x - other.x, dy = n.y - other.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 140 && dist > 0) {
            const alpha = (1 - dist / 140) * 0.18
            ctx.beginPath()
            const lineGrad = ctx.createLinearGradient(n.x, n.y, other.x, other.y)
            lineGrad.addColorStop(0, `rgba(${n.color},${alpha})`)
            lineGrad.addColorStop(1, `rgba(${other.color},${alpha})`)
            ctx.strokeStyle = lineGrad
            ctx.lineWidth = 0.7
            ctx.moveTo(n.x, n.y)
            ctx.lineTo(other.x, other.y)
            ctx.stroke()
          }
        })
      })

      animId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ opacity: 0.55 }}
    />
  )
}

/* ═══════════════════════════════════════════
   TYPEWRITER
═══════════════════════════════════════════ */
const roles = ['Data Scientist', 'ML Engineer', 'Analytics Engineer', 'Python Developer', 'AI Enthusiast']

function Typewriter() {
  const [idx, setIdx] = useState(0)
  const [text, setText] = useState('')
  const [del, setDel] = useState(false)

  useEffect(() => {
    const word = roles[idx]
    let t: ReturnType<typeof setTimeout>
    if (!del && text.length < word.length) t = setTimeout(() => setText(word.slice(0, text.length + 1)), 75)
    else if (!del && text.length === word.length) t = setTimeout(() => setDel(true), 2000)
    else if (del && text.length > 0) t = setTimeout(() => setText(text.slice(0, -1)), 42)
    else if (del && text.length === 0) { setDel(false); setIdx((i) => (i + 1) % roles.length) }
    return () => clearTimeout(t)
  }, [text, del, idx])

  return (
    <span style={{ color: 'var(--cyan)' }} className="mono">
      {text}
      <span style={{
        display: 'inline-block', width: '2px', height: '0.9em',
        background: 'var(--cyan)', marginLeft: '3px', verticalAlign: 'middle',
        animation: 'blink 1s step-end infinite',
        boxShadow: '0 0 8px var(--cyan)',
      }} />
    </span>
  )
}

/* ═══════════════════════════════════════════
   LIVE MINI SPARKLINE  (pure JS)
═══════════════════════════════════════════ */
function MiniChart() {
  const [vals, setVals] = useState([40, 55, 45, 70, 60, 80, 75, 90, 85, 94])

  useEffect(() => {
    const id = setInterval(() => {
      setVals((v) => {
        const last = v[v.length - 1]
        const next = Math.max(30, Math.min(100, last + (Math.random() - 0.4) * 12))
        return [...v.slice(1), Math.round(next)]
      })
    }, 1200)
    return () => clearInterval(id)
  }, [])

  const max = Math.max(...vals)
  const min = Math.min(0, ...vals)
  const range = max - min || 1
  const w = 140; const h = 50
  const pts = vals.map((v, i) =>
    `${(i / (vals.length - 1)) * w},${h - ((v - min) / range) * h}`
  ).join(' ')

  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{ overflow: 'visible' }}>
      <defs>
        <linearGradient id="sg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(0,212,255,0.3)" />
          <stop offset="100%" stopColor="rgba(0,212,255,0)" />
        </linearGradient>
      </defs>
      <polyline
        points={pts + ` ${w},${h} 0,${h}`}
        fill="url(#sg)"
        stroke="none"
      />
      <polyline
        points={pts}
        fill="none"
        stroke="var(--cyan)"
        strokeWidth="2"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      {/* live dot */}
      {(() => {
        const last = vals[vals.length - 1]
        const cx = w
        const cy = h - ((last - min) / range) * h
        return (
          <>
            <circle cx={cx} cy={cy} r={4} fill="var(--cyan)" />
            <circle cx={cx} cy={cy} r={8} fill="none" stroke="var(--cyan)" strokeWidth={1} opacity={0.4}>
              <animate attributeName="r" values="4;12" dur="1.5s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.6;0" dur="1.5s" repeatCount="indefinite" />
            </circle>
          </>
        )
      })()}
    </svg>
  )
}

/* ═══════════════════════════════════════════
   FLOATING DATA CARD
═══════════════════════════════════════════ */
function FloatCard({ children, delay = 0, className = '', style = {} }: {
  children: React.ReactNode; delay?: number; className?: string; style?: React.CSSProperties
}) {
  return (
    <motion.div
      className={`absolute glass rounded-2xl border border-white/10 p-4 hidden lg:block ${className}`}
      style={style}
      initial={{ opacity: 0, scale: 0.75, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: [0, -14, 0] }}
      transition={{
        opacity: { delay, duration: 0.5 },
        scale: { delay, duration: 0.5, type: 'spring', stiffness: 200 },
        y: { delay: delay + 0.5, duration: 3.5 + delay, repeat: Infinity, ease: 'easeInOut' },
      }}
    >
      {children}
    </motion.div>
  )
}

/* ═══════════════════════════════════════════
   PAGE STATS
═══════════════════════════════════════════ */
const stats = [
  { label: 'Projects', value: '12+', icon: <Layers size={20} />, color: 'var(--cyan)' },
  { label: 'DS Algorithms', value: '30+', icon: <BrainCircuit size={20} />, color: 'var(--purple)' },
  { label: 'Datasets Analyzed', value: '50+', icon: <Database size={20} />, color: 'var(--pink)' },
  { label: 'Avg Model Accuracy', value: '91%', icon: <TrendingUp size={20} />, color: 'var(--green)' },
]

/* ═══════════════════════════════════════════
   HOME PAGE
═══════════════════════════════════════════ */
export default function HomePage() {
  const { scrollY } = useScroll()
  const heroY = useTransform(scrollY, [0, 500], [0, -80])
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0])

  const containerV = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
  }
  const itemV = {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] } },
  }

  return (
    <div style={{ background: 'var(--dark)' }}>

      {/* ══════════ HERO ══════════ */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(0,212,255,0.07) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 80% 100%, rgba(184,41,221,0.07) 0%, transparent 55%), var(--dark)' }}
      >
        <NeuralCanvas />

        {/* Ambient glows — clean & subtle */}
        <div
          className="absolute pointer-events-none"
          style={{
            width: 600, height: 600,
            top: '50%', left: '50%',
            transform: 'translate(-50%, -60%)',
            background: 'radial-gradient(circle, rgba(0,212,255,0.06) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
        />
        <div
          className="absolute pointer-events-none"
          style={{
            width: 400, height: 400,
            bottom: '10%', right: '10%',
            background: 'radial-gradient(circle, rgba(184,41,221,0.07) 0%, transparent 70%)',
            filter: 'blur(50px)',
          }}
        />

        {/* ── Floating Cards ── */}
        {/* Accuracy card */}
        <FloatCard delay={1.0} style={{ top: '18%', right: '6%', minWidth: 200 }}>
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold text-gray-400">Live Model Accuracy</span>
            <span className="w-2 h-2 rounded-full animate-pulse-dot" style={{ background: 'var(--green)' }} />
          </div>
          <MiniChart />
          <div className="mt-2 flex items-end gap-2">
            <span className="text-2xl font-bold mono glow-cyan" style={{ color: 'var(--cyan)' }}>94.7%</span>
            <span className="text-xs text-gray-500 mb-0.5">Random Forest</span>
          </div>
        </FloatCard>

        {/* Code snippet card */}
        <FloatCard delay={1.3} style={{ bottom: '26%', right: '9%', minWidth: 190 }}>
          <div className="text-xs mb-2 text-gray-500 mono"># feature_engineering.py</div>
          <div className="mono text-xs space-y-1">
            <div><span style={{ color: 'var(--purple)' }}>df</span><span style={{ color: '#8892b0' }}>[</span><span style={{ color: 'var(--green)' }}>&apos;tenure&apos;</span><span style={{ color: '#8892b0' }}>]</span></div>
            <div style={{ color: 'var(--cyan)' }}>&nbsp;&nbsp;.apply(encode)</div>
            <div style={{ color: 'var(--golden)' }}>&nbsp;&nbsp;✓ 94.7% acc</div>
          </div>
        </FloatCard>

        {/* Stats chip top-left */}
        <FloatCard delay={0.8} style={{ top: '28%', left: '4%', minWidth: 160 }}>
          <div className="space-y-2">
            {[
              { label: 'Precision', val: '0.943', color: 'var(--cyan)' },
              { label: 'Recall', val: '0.918', color: 'var(--purple)' },
              { label: 'F1-Score', val: '0.930', color: 'var(--green)' },
            ].map((m) => (
              <div key={m.label} className="flex justify-between items-center">
                <span className="text-xs text-gray-500 mono">{m.label}</span>
                <span className="text-xs font-bold mono" style={{ color: m.color }}>{m.val}</span>
              </div>
            ))}
          </div>
        </FloatCard>

        {/* ── Hero Content ── */}
        <motion.div
          className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 w-full text-center"
          style={{ opacity: heroOpacity, y: heroY }}
        >
          <motion.div
            variants={containerV}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center"
          >
            {/* Available badge */}
            <motion.div variants={itemV} className="mb-8">
              <span className="section-badge">
                <span className="w-2 h-2 rounded-full animate-pulse-dot" style={{ background: 'var(--green)' }} />
                Open to Entry-Level Roles & Internships
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1 variants={itemV} className="hero-title text-5xl sm:text-6xl md:text-7xl mb-4">
              <span className="text-white">Hi, I&apos;m{' '}</span>
              <span className="gradient-text-animated">Rohit Bedse</span>
            </motion.h1>

            {/* Role typewriter */}
            <motion.div variants={itemV} className="text-xl md:text-2xl font-semibold mb-6 flex items-center justify-center gap-3 flex-wrap">
              <span style={{ color: 'var(--text-secondary)' }}>I&apos;m a</span>
              <Typewriter />
            </motion.div>

            {/* Description */}
            <motion.p variants={itemV} className="text-base md:text-lg leading-relaxed mb-10 max-w-xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Entry-level Data Scientist turning messy datasets into
              <span style={{ color: 'var(--cyan)' }}> predictive insights</span>.
              I build{' '}
              <span style={{ color: 'var(--purple)' }}>ML pipelines</span>,{' '}
              <span style={{ color: 'var(--pink)' }}>visualize stories</span>, and{' '}
              ship data products that actually work in the real world.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemV} className="flex flex-wrap gap-4 mb-12 justify-center">
              <Link href="/projects" id="hero-cta-projects">
                <motion.button
                  className="btn-primary flex items-center gap-2"
                  whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}
                >
                  View My Projects <ArrowRight size={16} />
                </motion.button>
              </Link>
              <Link href="/contact" id="hero-cta-cv">
                <motion.button
                  className="btn-outline flex items-center gap-2"
                  whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}
                >
                  <Download size={16} /> Download Resume
                </motion.button>
              </Link>
              <div className="flex items-center gap-2 self-center">
                {[
                  { href: 'https://github.com', icon: <Github size={17} />, id: 'hero-github' },
                  { href: 'https://linkedin.com', icon: <Linkedin size={17} />, id: 'hero-linkedin' },
                ].map((s) => (
                  <a key={s.id} href={s.href} target="_blank" rel="noopener noreferrer" id={s.id}>
                    <motion.div
                      className="w-10 h-10 glass rounded-xl flex items-center justify-center text-gray-400 border border-white/10 hover:border-white/30 hover:text-white transition-all cursor-pointer"
                      style={{ display: 'flex' }}
                      whileHover={{ scale: 1.12, y: -3 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {s.icon}
                    </motion.div>
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Skill chips */}
            <motion.div variants={itemV} className="flex flex-wrap gap-2 justify-center">
              {[
                { icon: '🐍', text: 'Python' },
                { icon: '🤖', text: 'Scikit-learn' },
                { icon: '📊', text: 'Data Viz' },
                { icon: '🗄️', text: 'SQL' },
                { icon: '📈', text: 'Statistics' },
                { icon: '🧠', text: 'ML Models' },
              ].map((chip) => (
                <motion.div
                  key={chip.text}
                  className="glass rounded-lg px-3 py-1.5 flex items-center gap-1.5 text-xs font-semibold border border-white/08 cursor-default"
                  style={{ color: 'var(--text-secondary)' }}
                  whileHover={{ y: -3, scale: 1.05, borderColor: 'rgba(0,212,255,0.3)', color: 'var(--cyan)' }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  <span>{chip.icon}</span>
                  <span>{chip.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2 }}
        >
          <span className="text-xs mono tracking-widest" style={{ color: 'var(--text-muted)' }}>SCROLL</span>
          <motion.div
            className="w-5 h-8 glass rounded-full border border-white/12 flex justify-center pt-1.5"
          >
            <motion.div
              className="w-1.5 h-2 rounded-full"
              style={{ background: 'var(--cyan)', boxShadow: '0 0 6px var(--cyan)' }}
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* ══════════ STATS STRIP ══════════ */}
      <section className="py-16 relative" id="stats-strip">
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, transparent, rgba(0,212,255,0.03) 50%, transparent)' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          >
            {stats.map((s) => (
              <motion.div
                key={s.label}
                className="glass-card rounded-2xl p-6 text-center tilt-card"
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
              >
                <div
                  className="w-12 h-12 rounded-xl mx-auto mb-4 flex items-center justify-center"
                  style={{ background: `${s.color}14`, border: `1px solid ${s.color}28`, color: s.color }}
                >
                  {s.icon}
                </div>
                <div className="stat-number mb-1 animate-counter-glow" style={{ color: s.color }}>{s.value}</div>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{s.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════ WHAT I DO ══════════ */}
      <section className="py-24 relative" id="what-i-do">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="section-badge mx-auto mb-5">⚡ What I Do</div>
            <h2 className="section-heading text-4xl md:text-5xl text-white mb-4">
              Data Into <span className="gradient-text">Decisions</span>
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              From raw CSV to deployed model — full-cycle data science with measurable impact.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
          >
            {[
              {
                icon: '🔍', color: 'var(--cyan)',
                title: 'Exploratory Analysis',
                desc: 'Deep statistical dives into complex datasets using visual and numerical methods to surface actionable patterns and anomalies.',
                tags: ['Pandas', 'Seaborn', 'Statistics'],
                glow: 'rgba(0,212,255,0.12)',
              },
              {
                icon: '🤖', color: 'var(--purple)',
                title: 'Machine Learning',
                desc: 'Building, tuning, and deploying predictive models — from interpretable baselines to gradient-boosted ensembles with full evaluation.',
                tags: ['Scikit-learn', 'XGBoost', 'SHAP'],
                glow: 'rgba(139,92,246,0.12)',
              },
              {
                icon: '📈', color: 'var(--pink)',
                title: 'Data Visualization',
                desc: 'Crafting dashboards and visual narratives that communicate complex insights clearly for both technical and business stakeholders.',
                tags: ['Plotly', 'Tableau', 'Streamlit'],
                glow: 'rgba(255,45,120,0.12)',
              },
            ].map((card) => (
              <motion.div
                key={card.title}
                className="glass-card rounded-2xl p-8 card-lift group holo-card featured-accent"
                style={{ borderColor: `${card.color}20` }}
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
              >
                {/* Glow on hover */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none"
                  style={{ background: `radial-gradient(ellipse at 30% 30%, ${card.glow}, transparent 70%)` }}
                />
                <div className="relative z-10">
                  <span className="text-5xl mb-6 block">{card.icon}</span>
                  <h3 className="text-xl font-bold mb-3" style={{ color: card.color }}>{card.title}</h3>
                  <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>{card.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {card.tags.map((t) => (
                      <span
                        key={t}
                        className="mono text-xs px-3 py-1 rounded-lg border"
                        style={{ borderColor: `${card.color}28`, color: card.color, background: `${card.color}0c` }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════ MINI PROJECT SHOWCASE ══════════ */}
      <section
        className="py-24 relative"
        id="featured-projects"
        style={{ background: 'linear-gradient(180deg, transparent, rgba(139,92,246,0.03) 50%, transparent)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="section-badge mx-auto mb-5">🚀 Portfolio</div>
            <h2 className="section-heading text-4xl md:text-5xl text-white mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-5 mb-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.09 } } }}
          >
            {[
              {
                title: 'Customer Churn Prediction',
                desc: 'Random Forest classifier with SMOTE, SHAP explainability, and FastAPI deployment. 94.7% accuracy on telecom data.',
                tags: ['Python', 'RF', 'SMOTE', 'SHAP'],
                metric: '94.7%', metricLabel: 'Accuracy', color: 'var(--green)', emoji: '📉',
              },
              {
                title: 'Sales Demand Forecasting',
                desc: 'ARIMA + seasonal decomposition model for retail inventory optimization. Reduced planning errors by 30%.',
                tags: ['ARIMA', 'Statsmodels', 'Prophet'],
                metric: '30%', metricLabel: 'Cost Saved', color: 'var(--cyan)', emoji: '📈',
              },
              {
                title: 'Customer Segmentation',
                desc: 'K-Means RFM clustering on 100K+ records with Streamlit dashboard. Drove 25% higher marketing ROI.',
                tags: ['K-Means', 'PCA', 'Streamlit'],
                metric: '25%', metricLabel: 'ROI Lift', color: 'var(--purple)', emoji: '🎯',
              },
              {
                title: 'Netflix EDA Dashboard',
                desc: 'End-to-end EDA of 10,000+ Netflix titles: genre trends, country analysis, and release strategy insights.',
                tags: ['Pandas', 'Plotly', 'EDA'],
                metric: '10K+', metricLabel: 'Records', color: 'var(--pink)', emoji: '🎬',
              },
            ].map((p) => (
              <motion.div
                key={p.title}
                className="glass-card rounded-2xl p-6 group tilt-card scanline-overlay"
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-3xl">{p.emoji}</span>
                  <div className="text-right">
                    <div className="mono text-lg font-bold" style={{ color: p.color }}>{p.metric}</div>
                    <div className="text-xs" style={{ color: 'var(--text-muted)' }}>{p.metricLabel}</div>
                  </div>
                </div>
                <h3 className="text-base font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {p.title}
                </h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>{p.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map((t) => <span key={t} className="tag-cyan">{t}</span>)}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center">
            <Link href="/projects" id="home-see-all">
              <motion.button
                className="btn-outline inline-flex items-center gap-2"
                whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
              >
                See All Projects <ArrowRight size={15} />
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════ DS PROCESS SECTION ══════════ */}
      <section className="py-20" id="ds-process">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="section-badge mx-auto mb-5">🔬 My Process</div>
            <h2 className="section-heading text-3xl md:text-4xl text-white">
              How I Approach <span className="gradient-text">Data Problems</span>
            </h2>
          </motion.div>

          <motion.div
            className="flex flex-col md:flex-row gap-0 relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          >
            {[
              { step: '01', icon: '🗄️', label: 'Data Collection', desc: 'SQL queries, APIs, web scraping, and database extraction' },
              { step: '02', icon: '🔍', label: 'EDA & Cleaning', desc: 'Missing values, outliers, distributions, correlations' },
              { step: '03', icon: '⚙️', label: 'Feature Engineering', desc: 'Domain transforms, encoding, scaling, selection' },
              { step: '04', icon: '🤖', label: 'Modeling', desc: 'Baseline → CV → Tuning → Ensemble stacking' },
              { step: '05', icon: '📊', label: 'Communicate', desc: 'Charts, dashboards, and business-ready reports' },
            ].map((step, i) => (
              <motion.div
                key={step.step}
                className="flex-1 relative"
                variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
              >
                {/* Connector line */}
                {i < 4 && (
                  <div
                    className="hidden md:block absolute top-8 right-0 w-full h-px z-0"
                    style={{
                      background: 'linear-gradient(90deg, rgba(0,212,255,0.3), rgba(139,92,246,0.3))',
                      left: '50%', width: '100%',
                    }}
                  />
                )}
                <div className="glass-card rounded-2xl p-5 m-2 text-center group hover:border-white/20 transition-all card-lift relative z-10">
                  <div className="mono text-xs mb-3" style={{ color: 'var(--text-muted)' }}>STEP {step.step}</div>
                  <div className="text-3xl mb-3">{step.icon}</div>
                  <h4 className="font-bold text-white text-sm mb-2">{step.label}</h4>
                  <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════ CTA BANNER ══════════ */}
      <section className="py-24" id="cta">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="rotating-border p-[1px] rounded-3xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div
              className="rounded-3xl p-12 md:p-16 text-center relative overflow-hidden"
              style={{ background: 'var(--dark-3)' }}
            >
              <div
                className="absolute inset-0 opacity-40 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse at center, rgba(139,92,246,0.15) 0%, transparent 70%)' }}
              />
              <div className="relative z-10">
                <div className="section-badge mx-auto mb-6">💼 Hire Me</div>
                <h2 className="hero-title text-4xl md:text-5xl mb-4">
                  <span className="text-white">Ready to Turn Your</span>
                  <br />
                  <span className="gradient-text-animated">Data Into Decisions?</span>
                </h2>
                <p className="text-lg mb-10 max-w-lg mx-auto" style={{ color: 'var(--text-secondary)' }}>
                  I&apos;m actively looking for entry-level DS roles and internships.
                  Let&#39;s build something that matters.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Link href="/contact" id="cta-contact-main">
                    <motion.button
                      className="btn-primary flex items-center gap-2"
                      whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.96 }}
                    >
                      Let&apos;s Connect <ArrowRight size={16} />
                    </motion.button>
                  </Link>
                  <Link href="/about" id="cta-about-link">
                    <motion.button
                      className="btn-outline"
                      whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
                    >
                      My Story
                    </motion.button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  )
}
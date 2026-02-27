'use client'

import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'

/* ═══════════════════════════════════════════
   2030 AESTHETIC — ULTRA MINIMAL, EXTREME CONTRAST
═══════════════════════════════════════════ */

export default function HomePage() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -200])
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])

  return (
    <div className="bg-[#030305] text-[#e0e0e0] min-h-screen selection:bg-[#fff] selection:text-[#000] font-sans selection:bg-cyan-500/30">

      {/* ══════════ AMBIENT VOID LIGHTING ══════════ */}
      <div
        className="fixed top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[80vh] pointer-events-none mix-blend-screen"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(0,212,255,0.04) 0%, rgba(184,41,221,0.02) 40%, transparent 70%)',
          filter: 'blur(100px)',
          zIndex: 0
        }}
      />

      {/* ══════════ HERO SECTION ══════════ */}
      <section className="relative h-screen flex flex-col justify-center px-4 sm:px-8 lg:px-16 z-10 overflow-hidden">

        {/* Top minimal header info */}
        <motion.div
          className="absolute top-24 left-4 sm:left-8 lg:left-16 flex items-center gap-4 hidden sm:flex"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="w-2 h-2 rounded-full bg-[#00ff88] animate-pulse" />
          <span className="font-mono text-[10px] uppercase tracking-widest text-[#888]">Available for Entry-Level & Internships</span>
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
              <h1 className="text-[12vw] sm:text-[10vw] font-black leading-[0.8] tracking-tighter text-white">
                ROHIT
                <br />
                BEDSE<span className="text-[#00d4ff]">.</span>
              </h1>
            </div>

            <div className="max-w-xs text-right">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#666] mb-2">Role</p>
              <h2 className="text-xl sm:text-2xl font-light tracking-tight text-[#ccc]">
                Data Scientist &<br />Machine Learning Eng.
              </h2>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row justify-between w-full gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
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

      {/* ══════════ METRICS TAPE (2030 stark numbers) ══════════ */}
      <section className="border-y border-[#1a1a1a] bg-[#050508] relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x divide-[#1a1a1a]">
            {[
              { label: 'Live Model Accuracy', val: '94.7%', accent: 'text-[#00ff88]' },
              { label: 'Analyzed Datasets', val: '50+', accent: 'text-white' },
              { label: 'Deployed Projects', val: '12+', accent: 'text-white' },
              { label: 'ML Algorithms', val: '30+', accent: 'text-white' },
            ].map((stat, i) => (
              <div key={i} className={`pl-8 ${i === 0 ? 'pl-0' : ''}`}>
                <p className="font-mono text-[10px] uppercase tracking-widest text-[#555] mb-2">{stat.label}</p>
                <h3 className={`text-4xl sm:text-5xl font-light tracking-tighter ${stat.accent}`}>{stat.val}</h3>
              </div>
            ))}
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
              <div key={i} className="group flex flex-col md:flex-row justify-between py-12 border-b border-[#222] hover:border-[#555] transition-colors cursor-crosshair">
                <div className="flex gap-8 mb-4 md:mb-0">
                  <span className="font-mono text-sm text-[#444] group-hover:text-[#00d4ff] transition-colors">{item.num}</span>
                  <h3 className="text-3xl sm:text-4xl font-light text-[#ccc] group-hover:text-white transition-colors">{item.title}</h3>
                </div>
                <div className="md:w-1/3 flex flex-col justify-between">
                  <p className="text-sm text-[#777] font-light leading-relaxed mb-4 group-hover:text-[#aaa] transition-colors">{item.desc}</p>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-[#444] group-hover:text-[#b829dd] transition-colors">{item.tools}</p>
                </div>
              </div>
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
              <Link href="/projects" key={i} className="group relative w-full block">
                <div className="absolute inset-0 bg-[#111] scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-500 ease-[0.16,1,0.3,1] z-0" />
                <div className="relative z-10 flex flex-col md:flex-row justify-between sm:items-center p-8 border border-[#222] group-hover:border-transparent transition-colors">
                  <h3 className="text-2xl sm:text-4xl font-light text-white mb-2 md:mb-0 transform transition-transform duration-500 group-hover:translate-x-4">
                    {proj.name}
                  </h3>
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-12 items-start sm:items-center text-left sm:text-right transform transition-transform duration-500 group-hover:-translate-x-4">
                    <span className="font-mono text-xs text-[#666] uppercase tracking-widest group-hover:text-[#00d4ff] transition-colors">
                      {proj.type}
                    </span>
                    <span className="font-mono text-sm text-white bg-[#222] group-hover:bg-[#00d4ff] group-hover:text-black px-3 py-1 rounded-full transition-colors">
                      {proj.metric}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
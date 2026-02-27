'use client'

import { motion } from 'framer-motion'
import { Calendar, Clock, Tag, ArrowRight, TrendingUp, Bookmark } from 'lucide-react'

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const articles = [
  {
    id: 1,
    title: 'EDA is 80% of the Work — Here\'s How to Do It Right',
    excerpt: 'Exploratory Data Analysis is not just about pretty charts. Learn a systematic framework to uncover patterns, detect anomalies, and generate hypotheses that drive model performance.',
    category: 'EDA',
    readTime: '8 min',
    date: 'Feb 2026',
    tags: ['Pandas', 'Matplotlib', 'Statistics'],
    featured: true,
    color: 'var(--cyan)',
    emoji: '🔍',
  },
  {
    id: 2,
    title: 'Feature Engineering: The Hidden Superpower of ML',
    excerpt: 'Raw data is rarely model-ready. Discover advanced feature engineering techniques — polynomial features, interaction terms, target encoding, and domain-specific transformations.',
    category: 'Machine Learning',
    readTime: '10 min',
    date: 'Jan 2026',
    tags: ['Scikit-learn', 'Feature Eng', 'Python'],
    featured: true,
    color: 'var(--purple)',
    emoji: '⚙️',
  },
  {
    id: 3,
    title: 'A/B Testing: From Hypothesis to Statistical Significance',
    excerpt: 'A practical guide to designing, running, and interpreting A/B experiments. Covers sample size calculation, p-values, and avoiding common pitfalls like p-hacking.',
    category: 'Statistics',
    readTime: '12 min',
    date: 'Jan 2026',
    tags: ['Hypothesis Testing', 'SciPy', 'Statistics'],
    featured: false,
    color: 'var(--gold)',
    emoji: '⚖️',
  },
  {
    id: 4,
    title: 'Time Series Analysis: ARIMA to Prophet',
    excerpt: 'Walk through forecasting approaches from classical ARIMA to Meta\'s Prophet. Includes hands-on code for decomposition, stationarity tests, and model selection.',
    category: 'Time Series',
    readTime: '15 min',
    date: 'Dec 2025',
    tags: ['ARIMA', 'Prophet', 'Forecasting'],
    featured: false,
    color: 'var(--pink)',
    emoji: '📅',
  },
  {
    id: 5,
    title: 'How to Evaluate a Machine Learning Model (Beyond Accuracy)',
    excerpt: 'Accuracy is just the beginning. Deep dive into confusion matrices, ROC-AUC, Precision-Recall tradeoffs, and choosing the right metric for your business problem.',
    category: 'Machine Learning',
    readTime: '9 min',
    date: 'Dec 2025',
    tags: ['Model Eval', 'Metrics', 'Scikit-learn'],
    featured: false,
    color: 'var(--green)',
    emoji: '📐',
  },
  {
    id: 6,
    title: 'SQL for Data Scientists — Patterns That Actually Matter',
    excerpt: 'Skip the basics. This guide covers window functions, CTEs, self-joins, and advanced analytical SQL patterns you\'ll use daily as a data scientist.',
    category: 'SQL',
    readTime: '11 min',
    date: 'Nov 2025',
    tags: ['SQL', 'Window Functions', 'Analytics'],
    featured: false,
    color: 'var(--cyan)',
    emoji: '🗄️',
  },
  {
    id: 7,
    title: 'Clustering Demystified: K-Means, DBSCAN, and When to Use Each',
    excerpt: 'Unsupervised learning can be tricky. Learn when to use K-Means vs DBSCAN, how to determine optimal cluster count, and how to validate clustering results.',
    category: 'Clustering',
    readTime: '10 min',
    date: 'Nov 2025',
    tags: ['K-Means', 'DBSCAN', 'Unsupervised'],
    featured: false,
    color: 'var(--purple)',
    emoji: '🎯',
  },
  {
    id: 8,
    title: 'Data Visualization: Principles Every DS Must Know',
    excerpt: 'Choose the right chart every time. Covers the grammar of graphics, perceptual principles, color theory for data, and building dashboards that tell a story.',
    category: 'Visualization',
    readTime: '7 min',
    date: 'Oct 2025',
    tags: ['Plotly', 'Seaborn', 'Storytelling'],
    featured: false,
    color: 'var(--pink)',
    emoji: '📊',
  },
]


export default function BlogPage() {
  const featured = articles.filter(a => a.featured)
  const rest = articles.filter(a => !a.featured)

  return (
    <div className="min-h-screen pt-20" style={{ background: 'var(--dark)' }}>

      {/* ══════════ HEADER ══════════ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-badge mx-auto mb-6">
            <span>✍️</span> Data Science Blog
          </span>
          <h1 className="hero-title text-5xl md:text-6xl mb-5">
            <span className="text-white">Insights & </span>
            <span className="gradient-text">Learnings</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            I write about applied data science, ML techniques, and lessons learned from
            real projects. Clear explanations with code examples.
          </p>
        </motion.div>
      </section>

      {/* ══════════ FEATURED POSTS ══════════ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <motion.div
          className="flex items-center gap-3 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <TrendingUp size={20} style={{ color: 'var(--cyan)' }} />
          <h2 className="text-xl font-bold text-white">Featured Articles</h2>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-6 mb-16"
          initial="hidden"
          animate="visible"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
        >
          {featured.map((article) => (
            <motion.article
              key={article.id}
              variants={itemVariants}
              className="glass rounded-2xl border border-white/08 overflow-hidden group hover:border-white/20 transition-all duration-300 tilt-card cursor-pointer"
              style={{ borderColor: `${article.color}20` }}
            >
              {/* Top band */}
              <div
                className="h-1 w-full"
                style={{ background: `linear-gradient(90deg, ${article.color}, ${article.color}50)` }}
              />

              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-4xl">{article.emoji}</span>
                  <span className="tag-cyan text-xs">Featured</span>
                </div>

                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="mono text-xs px-3 py-1 rounded-lg border font-bold"
                    style={{
                      borderColor: `${article.color}30`,
                      color: article.color,
                      background: `${article.color}0d`,
                    }}
                  >
                    {article.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-gray-500">
                    <Clock size={11} /> {article.readTime} read
                  </span>
                  <span className="flex items-center gap-1 text-xs text-gray-500">
                    <Calendar size={11} /> {article.date}
                  </span>
                </div>

                <h2 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors leading-tight">
                  {article.title}
                </h2>

                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {article.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {article.tags.map((tag) => (
                      <span key={tag} className="tag-purple">{tag}</span>
                    ))}
                  </div>
                  <motion.div
                    className="flex items-center gap-1 text-sm font-semibold"
                    style={{ color: article.color }}
                    whileHover={{ x: 4 }}
                  >
                    Read <ArrowRight size={14} />
                  </motion.div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* ══════════ ALL ARTICLES ══════════ */}
        <motion.div
          className="flex items-center gap-3 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Bookmark size={20} style={{ color: 'var(--purple)' }} />
          <h2 className="text-xl font-bold text-white">All Articles</h2>
        </motion.div>

        <motion.div
          className="space-y-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
        >
          {rest.map((article) => (
            <motion.article
              key={article.id}
              variants={itemVariants}
              className="glass rounded-xl border border-white/08 p-6 group hover:border-white/18 transition-all duration-300 cursor-pointer flex items-start gap-6"
            >
              <span className="text-3xl flex-shrink-0 mt-1">{article.emoji}</span>

              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span
                    className="mono text-xs px-2 py-0.5 rounded border"
                    style={{
                      borderColor: `${article.color}30`,
                      color: article.color,
                      background: `${article.color}0d`,
                    }}
                  >
                    {article.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-gray-500">
                    <Clock size={11} /> {article.readTime}
                  </span>
                  <span className="text-xs text-gray-600">{article.date}</span>
                </div>

                <h2 className="text-base font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                  {article.title}
                </h2>

                <p className="text-gray-500 text-sm line-clamp-2 mb-3">{article.excerpt}</p>

                <div className="flex flex-wrap gap-1.5">
                  {article.tags.map((tag) => (
                    <span key={tag} className="flex items-center gap-1 text-xs text-gray-600">
                      <Tag size={9} /> {tag}
                    </span>
                  ))}
                </div>
              </div>

              <motion.div
                className="flex-shrink-0 text-gray-600 group-hover:text-cyan-400 transition-colors mt-1"
                whileHover={{ x: 3 }}
              >
                <ArrowRight size={16} />
              </motion.div>
            </motion.article>
          ))}
        </motion.div>
      </section>

      {/* ══════════ COMING SOON ══════════ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          className="glass rounded-2xl border border-white/08 p-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ background: 'linear-gradient(135deg, rgba(0,212,255,0.03), rgba(139,92,246,0.03))' }}
        >
          <h3 className="text-2xl font-bold text-white mb-3">
            More Coming <span className="gradient-text">Soon</span>
          </h3>
          <p className="text-gray-400 mb-6">
            I publish 2-3 articles per month on applied data science, ML case studies, and career advice for aspiring data scientists.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            {['📊 Deep Learning for Tabular Data', '🧠 Transformer Explained Simply', '🚀 ML in Production — A Starter Guide'].map((upcoming) => (
              <div
                key={upcoming}
                className="glass px-4 py-2 rounded-lg border border-white/10 text-sm text-gray-400"
              >
                {upcoming}
              </div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  )
}

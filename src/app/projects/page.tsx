'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Github, ExternalLink, Star } from 'lucide-react'


const projects = [
  {
    id: 1,
    title: 'Customer Churn Prediction',
    category: 'Classification',
    emoji: '📉',
    description:
      'End-to-end ML project predicting customer churn for a telecom company. Used SMOTE for class imbalance, feature importance analysis, and deployed a REST API with FastAPI.',
    fullDesc:
      'Analyzed 7,000+ customer records. Applied feature engineering, SMOTE oversampling, and trained Random Forest achieving 94.7% accuracy. Visualized SHAP values to explain predictions.',
    tech: ['Python', 'Scikit-learn', 'SMOTE', 'FastAPI', 'SHAP', 'Pandas'],
    metric: '94.7% Accuracy',
    metricColor: 'var(--green)',
    impact: 'Reduced churn by 15% in simulated environment',
    github: 'https://github.com',
    demo: 'https://github.com',
    featured: true,
    stars: 42,
  },
  {
    id: 2,
    title: 'Sales Forecasting with ARIMA',
    category: 'Time Series',
    emoji: '📈',
    description:
      'Time-series forecasting model for retail sales data incorporating seasonality, trend decomposition, and automated ARIMA parameter selection.',
    fullDesc:
      'Processed 3 years of daily sales data. Applied Box-Jenkins methodology, seasonal decomposition, and AutoARIMA. Created interactive forecast dashboard with Plotly.',
    tech: ['Python', 'Statsmodels', 'ARIMA', 'Plotly', 'Pandas', 'Prophet'],
    metric: '30% Cost Reduction',
    metricColor: 'var(--cyan)',
    impact: 'Improved forecast accuracy by 30%, reducing stockouts',
    github: 'https://github.com',
    demo: 'https://github.com',
    featured: true,
    stars: 38,
  },
  {
    id: 3,
    title: 'Market Segmentation Engine',
    category: 'Clustering',
    emoji: '🎯',
    description:
      'K-Means clustering on 100K+ customers using RFM analysis (Recency, Frequency, Monetary). Built an interactive Streamlit dashboard for segment exploration.',
    fullDesc:
      'Applied PCA for dimensionality reduction, Elbow method + Silhouette score for optimal K, and created actionable customer personas for each segment.',
    tech: ['Python', 'K-Means', 'PCA', 'Streamlit', 'Seaborn', 'SQL'],
    metric: '25% ROI Increase',
    metricColor: 'var(--purple)',
    impact: 'Increased marketing ROI through personalized campaigns',
    github: 'https://github.com',
    demo: 'https://github.com',
    featured: true,
    stars: 29,
  },
  {
    id: 4,
    title: 'Netflix Content EDA',
    category: 'EDA',
    emoji: '🎬',
    description:
      'Comprehensive exploratory data analysis of 10,000+ Netflix titles with trend analysis, genre distribution, country insights, and content rating breakdown.',
    fullDesc:
      'Analyzed content strategies, type ratios, release patterns, and top contributing countries using rich visualizations and statistical summaries.',
    tech: ['Python', 'Pandas', 'Plotly', 'Matplotlib', 'WordCloud', 'NumPy'],
    metric: '10K+ Records',
    metricColor: 'var(--pink)',
    impact: 'Revealed key content strategy insights and trends',
    github: 'https://github.com',
    demo: 'https://github.com',
    featured: false,
    stars: 55,
  },
  {
    id: 5,
    title: 'A/B Testing Framework',
    category: 'Statistics',
    emoji: '⚖️',
    description:
      'Statistical A/B testing framework for web product experiments. Implemented z-test, t-test, chi-square, and Bayesian hypothesis testing with power analysis.',
    fullDesc:
      'Built reusable Python functions for experiment design, significance testing, effect size calculation, and results visualization. Used on 3 real campaigns.',
    tech: ['Python', 'SciPy', 'Statsmodels', 'Matplotlib', 'Bayesian', 'Pandas'],
    metric: '20% Conversion Lift',
    metricColor: 'var(--gold)',
    impact: 'Improved email campaign conversion by 20%',
    github: 'https://github.com',
    demo: 'https://github.com',
    featured: false,
    stars: 31,
  },
  {
    id: 6,
    title: 'House Price Regression',
    category: 'Regression',
    emoji: '🏠',
    description:
      'Kaggle-style regression project predicting house prices. Feature engineering, handling missing data, regularization (Ridge/Lasso) and ensemble stacking.',
    fullDesc:
      'Kaggle competition top 20% finish. Extensive feature engineering from 80 features, outlier handling, log-transformation of target, and ensemble blend of XGBoost + LGB.',
    tech: ['Python', 'XGBoost', 'Ridge', 'Lasso', 'Scikit-learn', 'Pandas'],
    metric: 'Top 18% Kaggle',
    metricColor: 'var(--cyan)',
    impact: 'Kaggle Housing Prices competition — top 18% finish',
    github: 'https://github.com',
    demo: 'https://github.com',
    featured: false,
    stars: 22,
  },
]

const categories = ['All', 'Classification', 'Time Series', 'Clustering', 'EDA', 'Statistics', 'Regression']

export default function ProjectsPage() {
  const [selected, setSelected] = useState('All')
  const [expanded, setExpanded] = useState<number | null>(null)

  const filtered = selected === 'All' ? projects : projects.filter(p => p.category === selected)

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
            <span>🚀</span> Portfolio
          </span>
          <h1 className="hero-title text-5xl md:text-6xl mb-5">
            <span className="text-white">Data Science </span>
            <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Real-world projects demonstrating end-to-end data science workflows —
            from data collection and cleaning to model deployment and storytelling.
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          className="flex flex-wrap gap-2 justify-center mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setSelected(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${selected === cat
                ? 'text-black'
                : 'glass text-gray-400 hover:text-white border border-white/10'
                }`}
              style={
                selected === cat
                  ? { background: 'linear-gradient(135deg, var(--cyan), var(--purple))' }
                  : {}
              }
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>
      </section>

      {/* ══════════ PROJECTS GRID ══════════ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          layout
        >
          {filtered.map((project, i) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className={`glass rounded-2xl border border-white/08 overflow-hidden group hover:border-white/20 transition-all duration-300 tilt-card flex flex-col ${project.featured ? 'ring-1 ring-cyan-500/20' : ''
                }`}
            >
              {/* Card header */}
              <div
                className="p-6 pb-4"
                style={{
                  background: project.featured
                    ? 'linear-gradient(135deg, rgba(0,212,255,0.05), rgba(139,92,246,0.05))'
                    : 'transparent',
                }}
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-3xl">{project.emoji}</span>
                  <div className="flex items-center gap-2">
                    {project.featured && (
                      <span className="tag-cyan text-xs">Featured</span>
                    )}
                    <span
                      className="mono text-xs px-3 py-1 rounded-lg border"
                      style={{
                        borderColor: `${project.metricColor}30`,
                        color: project.metricColor,
                        background: `${project.metricColor}0d`,
                      }}
                    >
                      {project.metric}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs px-2 py-0.5 rounded glass border border-white/10 text-gray-400 mono">
                    {project.category}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <Star size={11} />
                    {project.stars}
                  </div>
                </div>

                <h2 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {expanded === project.id ? project.fullDesc : project.description}
                </p>
              </div>

              {/* Impact */}
              <div className="px-6 py-3 border-t border-white/05">
                <p className="text-xs text-gray-500">
                  <span style={{ color: project.metricColor }}>⬆ Impact: </span>
                  {project.impact}
                </p>
              </div>

              {/* Tags */}
              <div className="px-6 py-4 border-t border-white/05">
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span key={t} className="tag-cyan">{t}</span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="px-6 py-4 border-t border-white/05 mt-auto flex items-center gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors"
                >
                  <Github size={14} /> Code
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm"
                  style={{ color: 'var(--cyan)' }}
                >
                  <ExternalLink size={14} /> Live Demo
                </a>
                <button
                  onClick={() => setExpanded(expanded === project.id ? null : project.id)}
                  className="ml-auto text-xs text-gray-500 hover:text-white transition-colors underline underline-offset-2"
                >
                  {expanded === project.id ? 'Less details' : 'More details'}
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* GitHub CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="glass rounded-2xl border border-white/08 p-8 inline-block">
            <p className="text-gray-400 mb-4">
              More projects and notebooks available on my GitHub
            </p>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              id="projects-github-cta"
            >
              <motion.button
                className="btn-outline flex items-center gap-2 mx-auto"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                <Github size={18} /> View GitHub Profile
              </motion.button>
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  )
}

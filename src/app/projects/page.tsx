'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Github } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'YouTube Comment Analysis',
    category: 'NLP',
    emoji: '📺',
    description:
      'Developed a comment analysis system using NLP to extract sentiment, summaries, and key themes from user comments with multilingual support.',
    fullDesc:
      'Built a full NLP pipeline supporting multilingual input through automatic translation. Uses transformer-based models for sentiment classification and summarization, along with keyword extraction and visualization for insights.',
    tech: ['Python', 'NLP', 'Transformers', 'NLTK', 'Streamlit', 'JavaScript'],
    metric: 'Major Project',
    metricColor: 'var(--cyan)',
    impact: 'End-to-end NLP analysis system with multi-language support',
    github: 'https://github.com/rohitbedse/YouTube-comment-analysis---Major-Project',
    featured: true,
  },
  {
    id: 2,
    title: 'Swiggy Delivery Time Prediction',
    category: 'Regression',
    emoji: '🛵',
    description:
      'End-to-end ML pipeline for predicting food delivery times using regression models with feature engineering on real-world Swiggy data.',
    fullDesc:
      'Built a complete ML pipeline from data preprocessing to model deployment. Applied feature engineering, model selection, and evaluation to predict delivery times accurately.',
    tech: ['Python', 'Scikit-learn', 'Pandas', 'Flask', 'Makefile', 'ML Pipeline'],
    metric: 'ML Pipeline',
    metricColor: 'var(--green)',
    impact: 'Production-ready prediction pipeline with automated setup',
    github: 'https://github.com/rohitbedse/Swiggy_delivery_time_prediction',
    featured: true,
  },
  {
    id: 3,
    title: 'LangChain Projects',
    category: 'GenAI',
    emoji: '🔗',
    description:
      'Collection of projects built with LangChain framework exploring RAG pipelines, LLM applications, and generative AI capabilities.',
    fullDesc:
      'Exploring modern AI capabilities using LangChain — including Retrieval-Augmented Generation, prompt engineering, and building LLM-powered data tools.',
    tech: ['Python', 'LangChain', 'LLMs', 'RAG', 'Vector DBs', 'OpenAI'],
    metric: 'GenAI / LLM',
    metricColor: 'var(--purple)',
    impact: 'Hands-on exploration of cutting-edge AI technologies',
    github: 'https://github.com/rohitbedse/Langchain_Projects',
    featured: true,
  },
  {
    id: 4,
    title: 'Movie Recommendation System',
    category: 'ML',
    emoji: '🎬',
    description:
      'Content-based movie recommendation system using TF-IDF vectorization and cosine similarity for finding similar movies.',
    fullDesc:
      'Built a content-based recommendation engine that processes movie metadata using TF-IDF and computes cosine similarity scores to suggest similar movies to users.',
    tech: ['Python', 'TF-IDF', 'Cosine Similarity', 'Pandas', 'Scikit-learn'],
    metric: 'Recommendation',
    metricColor: 'var(--pink)',
    impact: 'Content-based filtering with TF-IDF vectorization',
    github: 'https://github.com/rohitbedse/Movie-Recommendation-using-TF-IDF-Cosine-Similarity-',
    featured: false,
  },
  {
    id: 5,
    title: 'Chat with PDF (Mini Project)',
    category: 'GenAI',
    emoji: '📄',
    description:
      'Python-based project enabling interactive chat with PDF documents to extract and analyze content using AI.',
    fullDesc:
      'Interactive tool that allows users to upload PDF documents and query their content through natural language, leveraging AI models for document understanding.',
    tech: ['Python', 'LangChain', 'PDF Parsing', 'LLM', 'Streamlit'],
    metric: 'AI Chat',
    metricColor: 'var(--cyan)',
    impact: 'Interactive document Q&A powered by AI',
    github: 'https://github.com/rohitbedse/Mini-Project',
    featured: false,
  },
  {
    id: 6,
    title: 'Flights Dashboard',
    category: 'Visualization',
    emoji: '✈️',
    description:
      'Interactive flights data dashboard built with Python and SQL for analyzing flight patterns, pricing, and routes.',
    fullDesc:
      'Data visualization dashboard combining SQL queries and Python to analyze flight data, routes, pricing trends, and travel patterns with interactive charts.',
    tech: ['Python', 'SQL', 'Plotly', 'HTML', 'Pandas', 'Dashboard'],
    metric: 'Dashboard',
    metricColor: 'var(--gold)',
    impact: 'Interactive data visualization for flight analytics',
    github: 'https://github.com/rohitbedse/Flights-Dashboard-using-Python-and-SQL',
    featured: false,
  },
  {
    id: 7,
    title: 'Customer Churn Prediction',
    category: 'Classification',
    emoji: '📉',
    description:
      'ML classification model to predict customer churn using ensemble methods and feature engineering.',
    fullDesc:
      'Built predictive models for customer churn using Random Forest and gradient boosting with comprehensive feature engineering and model evaluation.',
    tech: ['Python', 'Scikit-learn', 'Random Forest', 'Pandas', 'EDA'],
    metric: 'Classification',
    metricColor: 'var(--green)',
    impact: 'Predictive modeling for business retention',
    github: 'https://github.com/rohitbedse/Customer-Churn-Prediction',
    featured: false,
  },
  {
    id: 8,
    title: 'House Price Prediction',
    category: 'Regression',
    emoji: '🏠',
    description:
      'Regression model for predicting house prices with feature engineering, regularization, and ensemble methods.',
    fullDesc:
      'Applied regression techniques including Ridge, Lasso, and ensemble stacking to predict house prices with extensive feature engineering.',
    tech: ['Python', 'XGBoost', 'Ridge', 'Lasso', 'Scikit-learn', 'Pandas'],
    metric: 'Regression',
    metricColor: 'var(--cyan)',
    impact: 'Advanced regression with ensemble methods',
    github: 'https://github.com/rohitbedse/House-Price-Prediction',
    featured: false,
  },
  {
    id: 9,
    title: 'EDA on Insurance Dataset',
    category: 'EDA',
    emoji: '🏥',
    description:
      'Exploratory data analysis on health insurance dataset analyzing impact of age, BMI, smoking status on medical costs.',
    fullDesc:
      'Conducted comprehensive EDA on a health insurance dataset to analyze the impact of age, BMI, smoking status, and other factors on medical costs using Python.',
    tech: ['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'Statistics'],
    metric: 'EDA',
    metricColor: 'var(--purple)',
    impact: 'Statistical analysis of healthcare cost factors',
    github: 'https://github.com/rohitbedse/EDA-On---Insurance-Dataset',
    featured: false,
  },
  {
    id: 10,
    title: 'Placement Prediction',
    category: 'Classification',
    emoji: '🎓',
    description:
      'Web application predicting student placement based on CGPA and IQ using ML model with Flask backend.',
    fullDesc:
      'A simple web application that predicts student placement based on CGPA and IQ using a machine learning model. Built with Flask, HTML, CSS, and JavaScript with real-time dynamic result display.',
    tech: ['Python', 'Flask', 'ML', 'HTML/CSS', 'JavaScript'],
    metric: 'Web App',
    metricColor: 'var(--green)',
    impact: 'Full-stack ML web application',
    github: 'https://github.com/rohitbedse/Placement-Prediction',
    featured: false,
  },
]

const categories = ['All', 'NLP', 'GenAI', 'ML', 'Regression', 'Classification', 'EDA', 'Visualization']

function getCategoryCount(cat: string) {
  if (cat === 'All') return projects.length
  return projects.filter(p => p.category === cat).length
}

export default function ProjectsPage() {
  const [selected, setSelected] = useState('All')
  const [expanded, setExpanded] = useState<number | null>(null)

  const filtered = selected === 'All' ? projects : projects.filter(p => p.category === selected)
  const featuredProject = projects.find(p => p.featured && p.id === 1) ?? projects[0]

  return (
    <div className="min-h-screen pt-20" style={{ background: 'var(--dark)' }}>

      {/* ══════════ FEATURED HERO ══════════ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        <motion.div
          className="relative rounded-3xl overflow-hidden border border-white/10 p-8 sm:p-12"
          style={{
            background: 'linear-gradient(135deg, rgba(0,212,255,0.08) 0%, rgba(184,41,221,0.08) 50%, rgba(0,255,136,0.05) 100%)',
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Mesh gradient background */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse 60% 50% at 20% 30%, rgba(0,212,255,0.12) 0%, transparent 60%), radial-gradient(ellipse 50% 60% at 80% 70%, rgba(184,41,221,0.12) 0%, transparent 60%)',
            }}
          />
          <div className="relative z-10">
            <div className="flex items-start justify-between flex-wrap gap-4 mb-6">
              <div>
                <span className="section-badge mb-4">⭐ Featured Project</span>
                <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mt-3">
                  {featuredProject.title}
                </h2>
              </div>
              <span className="font-mono text-lg font-bold px-4 py-2 rounded-xl" style={{ background: 'rgba(0,255,136,0.1)', color: '#00ff88', border: '1px solid rgba(0,255,136,0.3)' }}>
                {featuredProject.metric}
              </span>
            </div>
            <p className="text-gray-300 text-lg max-w-2xl leading-relaxed mb-6">{featuredProject.fullDesc}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {featuredProject.tech.map(t => <span key={t} className="tag-cyan">{t}</span>)}
            </div>
            <div className="flex gap-4">
              <a href={featuredProject.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
                <Github size={16} /> View Code
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ══════════ HEADER ══════════ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center">
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

        {/* Category Filters with count badges */}
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
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all flex items-center gap-2 ${selected === cat
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
              <span
                className="text-xs px-1.5 py-0.5 rounded-full"
                style={selected === cat
                  ? { background: 'rgba(0,0,0,0.2)', color: '#000' }
                  : { background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.4)' }
                }
              >
                {getCategoryCount(cat)}
              </span>
            </motion.button>
          ))}
        </motion.div>
      </section>

      {/* ══════════ PROJECTS GRID ══════════ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          layout
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
        >
          {filtered.map((project) => (
            <motion.div
              key={project.id}
              layout
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
              exit={{ opacity: 0, y: -20 }}
              className={`glass rounded-2xl border border-white/08 overflow-hidden group hover:border-white/20 transition-all duration-300 tilt-card flex flex-col ${project.featured ? 'ring-1 ring-cyan-500/20' : ''
                }`}
            >
              {/* Card header with gradient mesh */}
              <div
                className="p-6 pb-4"
                style={{
                  background: project.featured
                    ? 'linear-gradient(135deg, rgba(0,212,255,0.07) 0%, rgba(139,92,246,0.07) 50%, rgba(0,255,136,0.04) 100%)'
                    : `linear-gradient(135deg, ${project.metricColor}08 0%, transparent 60%)`,
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
                  <Github size={14} /> View Code
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
              href="https://github.com/rohitbedse"
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

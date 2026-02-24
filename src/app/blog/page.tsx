'use client'

import { motion } from 'framer-motion'
import { Calendar, ArrowRight, BookOpen } from 'lucide-react'

interface BlogPost {
  title: string
  excerpt: string
  date: string
  readTime: string
  category: string
  slug: string
}

const blogPosts: BlogPost[] = [
  {
    title: 'Why Understanding the Math Behind Linear Regression Matters in Production',
    excerpt:
      'Exploring how mathematical foundations prevent model failures. Why closed-form solutions differ from gradient descent and when each matters.',
    date: 'January 15, 2025',
    readTime: '8 min read',
    category: 'ML Fundamentals',
    slug: 'linear-regression-production',
  },
  {
    title: 'The Bias-Variance Tradeoff: Not Just Theory',
    excerpt:
      'Deep dive into how bias-variance tradeoff affects real model performance. Practical strategies to navigate this fundamental tension in ML.',
    date: 'January 22, 2025',
    readTime: '12 min read',
    category: 'Model Selection',
    slug: 'bias-variance-tradeoff',
  },
  {
    title: 'EDA Beyond Missing Values: What Real Data Engineers Do',
    excerpt:
      'Exploratory Data Analysis is more than handling nulls. Statistical testing, outlier analysis, and feature interactions that matter.',
    date: 'February 1, 2025',
    readTime: '10 min read',
    category: 'Data Engineering',
    slug: 'eda-deep-dive',
  },
  {
    title: 'Building Reproducible ML Systems: From Notebooks to Production',
    excerpt:
      'How to structure your ML projects for reproducibility. Versioning, logging, and CI/CD practices that make your models reliable.',
    date: 'February 8, 2025',
    readTime: '9 min read',
    category: 'Engineering',
    slug: 'reproducible-ml',
  },
  {
    title: 'LangChain RunnableParallel: Orchestrating LLMs Like a Boss',
    excerpt:
      'Reduce latency by 70% using parallel LLM invocations. Real-world patterns for orchestrating multiple language models simultaneously.',
    date: 'February 12, 2025',
    readTime: '11 min read',
    category: 'GenAI',
    slug: 'langchain-parallel',
  },
  {
    title: 'RAG Systems: Grounding LLMs in Real Data',
    excerpt:
      'How Retrieval Augmented Generation works. Building context-aware LLM systems that don\'t hallucinate because they have real data.',
    date: 'February 18, 2025',
    readTime: '13 min read',
    category: 'GenAI',
    slug: 'rag-systems',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

export default function Blog() {
  return (
    <div className="min-h-screen bg-dark-bg pt-20">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center"
        >
          <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Insights</span> & Articles
          </motion.h1>
          <motion.p variants={itemVariants} className="text-xl text-gray-300 max-w-3xl mx-auto">
            Deep explorations of ML concepts, engineering practices, and AI system design. Written for those who want to understand the &quot;why&quot; behind the code.
          </motion.p>
        </motion.div>
      </section>

      {/* Blog Posts Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {blogPosts.map((post, index) => (
            <motion.article
              key={index}
              variants={itemVariants}
              className="group"
              whileHover={{ y: -5 }}
            >
              <a href={`/blog/${post.slug}`}>
                <div className="glass rounded-lg border border-gray-700 hover:border-neon-cyan transition-all duration-300 p-6 h-full flex flex-col">
                  {/* Category Badge */}
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 rounded-full bg-neon-cyan/10 text-neon-cyan text-xs font-semibold">
                      {post.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-neon-cyan transition-colors flex-grow">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-400 mb-6 flex-grow">{post.excerpt}</p>

                  {/* Meta */}
                  <div className="flex items-center justify-between pt-6 border-t border-gray-700">
                    <div className="flex gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        {post.date}
                      </div>
                      <div>{post.readTime}</div>
                    </div>
                    <ArrowRight
                      size={20}
                      className="text-neon-cyan group-hover:translate-x-2 transition-transform"
                    />
                  </div>
                </div>
              </a>
            </motion.article>
          ))}
        </motion.div>
      </section>

      {/* Coming Soon Message */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-gray-700">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <BookOpen size={48} className="mx-auto mb-4 text-neon-cyan opacity-50" />
          <h3 className="text-2xl font-bold mb-4">More Articles Coming Soon</h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I&apos;m writing detailed technical articles on ML fundamentals, GenAI systems, and production engineering.
            Subscribe to stay updated with new insights.
          </p>
        </motion.div>
      </section>
    </div>
  )
}

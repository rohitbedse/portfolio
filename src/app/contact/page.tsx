'use client'

import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Twitter, Send, CheckCircle, MapPin, Clock, Zap } from 'lucide-react'
import { useState } from 'react'

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const socials = [
  {
    icon: <Mail size={22} />,
    label: 'Email',
    value: 'rohit.bedse@gmail.com',
    href: 'mailto:rohit.bedse@gmail.com',
    color: 'var(--cyan)',
    desc: 'Best for project inquiries',
  },
  {
    icon: <Github size={22} />,
    label: 'GitHub',
    value: '@rohitbedse',
    href: 'https://github.com',
    color: 'var(--purple)',
    desc: 'See my code & projects',
  },
  {
    icon: <Linkedin size={22} />,
    label: 'LinkedIn',
    value: 'Rohit Bedse',
    href: 'https://linkedin.com',
    color: 'var(--blue)',
    desc: 'Professional networking',
  },
  {
    icon: <Twitter size={22} />,
    label: 'Twitter/X',
    value: '@rohitbedse',
    href: 'https://twitter.com',
    color: 'var(--pink)',
    desc: 'Data science thoughts',
  },
]

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise(r => setTimeout(r, 1200))
    setLoading(false)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
    setForm({ name: '', email: '', subject: '', message: '' })
  }

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
            <span>💬</span> Get in Touch
          </span>
          <h1 className="hero-title text-5xl md:text-6xl mb-5">
            <span className="text-white">Let&apos;s </span>
            <span className="gradient-text">Connect</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Whether you have a project in mind, a question about my work, or just want to
            talk data science — I&apos;d love to hear from you.
          </p>
        </motion.div>
      </section>

      {/* ══════════ MAIN CONTENT ══════════ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid lg:grid-cols-5 gap-10">

          {/* ── Left Sidebar ── */}
          <motion.div
            className="lg:col-span-2 space-y-6"
            initial="hidden"
            animate="visible"
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          >

            {/* Status card */}
            <motion.div
              className="glass rounded-2xl border border-white/08 p-6"
              variants={itemVariants}
            >
              <h3 className="font-bold text-white mb-4">Current Status</h3>
              <div className="flex items-center gap-2 mb-3">
                <div
                  className="w-3 h-3 rounded-full animate-pulse"
                  style={{ background: 'var(--green)' }}
                />
                <span className="text-sm text-gray-300">Open to Opportunities</span>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                Actively looking for entry-level Data Science roles, internships, and freelance analytics projects.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-gray-400">
                  <MapPin size={13} style={{ color: 'var(--cyan)' }} />
                  Pune, India (Remote OK)
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Clock size={13} style={{ color: 'var(--purple)' }} />
                  Response in 24–48 hours
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Zap size={13} style={{ color: 'var(--gold)' }} />
                  Available for freelance immediately
                </div>
              </div>
            </motion.div>

            {/* Social links */}
            {socials.map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                className="glass rounded-xl border border-white/08 p-5 flex items-center gap-4 group hover:border-white/20 transition-all block"
                whileHover={{ x: 4, scale: 1.02 }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: `${s.color}15`,
                    border: `1px solid ${s.color}30`,
                    color: s.color,
                  }}
                >
                  {s.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-white text-sm">{s.label}</div>
                  <div className="mono text-xs truncate" style={{ color: s.color }}>
                    {s.value}
                  </div>
                  <div className="text-xs text-gray-500 mt-0.5">{s.desc}</div>
                </div>
                <div className="text-gray-500 group-hover:text-white transition-colors text-lg">→</div>
              </motion.a>
            ))}
          </motion.div>

          {/* ── Contact Form ── */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="glass rounded-2xl border border-white/08 p-8">
              <h2 className="text-2xl font-bold text-white mb-2">Send a Message</h2>
              <p className="text-gray-400 text-sm mb-8">
                Fill out the form and I&apos;ll get back to you as soon as possible.
              </p>

              {submitted ? (
                <motion.div
                  className="flex flex-col items-center justify-center py-16 gap-4"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{ background: 'rgba(0,255,136,0.15)', border: '2px solid var(--green)' }}
                  >
                    <CheckCircle size={32} style={{ color: 'var(--green)' }} />
                  </div>
                  <h3 className="text-xl font-bold text-white">Message Sent!</h3>
                  <p className="text-gray-400 text-center">
                    Thanks for reaching out! I&apos;ll respond within 24–48 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" id="contact-form">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">
                        Full Name <span style={{ color: 'var(--pink)' }}>*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="contact-name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        className="input-field"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">
                        Email <span style={{ color: 'var(--pink)' }}>*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="contact-email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="input-field"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Subject
                    </label>
                    <select
                      name="subject"
                      id="contact-subject"
                      value={form.subject}
                      onChange={handleChange}
                      className="input-field"
                    >
                      <option value="">Select a topic…</option>
                      <option value="job">💼 Job / Internship Opportunity</option>
                      <option value="freelance">🔧 Freelance Analytics Project</option>
                      <option value="collab">🤝 Collaboration / Research</option>
                      <option value="question">❓ Technical Question</option>
                      <option value="other">💬 Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Message <span style={{ color: 'var(--pink)' }}>*</span>
                    </label>
                    <textarea
                      name="message"
                      id="contact-message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="input-field resize-none"
                      placeholder="Tell me about your project, question, or opportunity…"
                    />
                  </div>

                  <motion.button
                    id="contact-submit"
                    type="submit"
                    className="btn-primary w-full flex items-center justify-center gap-2"
                    disabled={loading}
                    whileHover={{ scale: loading ? 1 : 1.02 }}
                    whileTap={{ scale: loading ? 1 : 0.98 }}
                  >
                    {loading ? (
                      <>
                        <div
                          className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full"
                          style={{ animation: 'spin-slow 0.7s linear infinite' }}
                        />
                        Sending…
                      </>
                    ) : (
                      <>
                        <Send size={16} /> Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════ OPEN TO ══════════ */}
      <section
        className="py-20"
        style={{ background: 'linear-gradient(180deg, transparent, rgba(0,212,255,0.03) 50%, transparent)' }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-2">
              Open to <span className="gradient-text">These Opportunities</span>
            </h2>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 md:grid-cols-3 gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
          >
            {[
              { emoji: '🎯', title: 'Entry-Level DS Role', desc: 'Full-time positions in data science, analytics, or ML engineering.' },
              { emoji: '📊', title: 'Internship', desc: 'Paid data science or ML internships (remote or Pune-based).' },
              { emoji: '🔧', title: 'Freelance Analytics', desc: 'Short-term data analysis, dashboards, and ML model projects.' },
              { emoji: '🤝', title: 'Research Collaboration', desc: 'Academic or applied ML research collaborations and publications.' },
              { emoji: '✍️', title: 'Technical Writing', desc: 'Data science content creation, tutorials, and documentation.' },
              { emoji: '🏆', title: 'Kaggle / Hackathons', desc: 'Team up for Kaggle competitions or data hackathons.' },
            ].map((item) => (
              <motion.div
                key={item.title}
                className="glass rounded-xl border border-white/08 p-5 hover:border-white/20 transition-all tilt-card"
                variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
              >
                <div className="text-2xl mb-3">{item.emoji}</div>
                <h3 className="font-bold text-white text-sm mb-1">{item.title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}

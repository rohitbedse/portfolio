'use client'

import { motion } from 'framer-motion'
import { Mail, MessageSquare, Github, Linkedin } from 'lucide-react'
import { useState } from 'react'

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

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'rohit@example.com',
      href: 'mailto:rohit@example.com',
      color: 'neon-cyan',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: '@rohitbedse',
      href: 'https://github.com',
      color: 'neon-pink',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Rohit Bedse',
      href: 'https://linkedin.com',
      color: 'neon-green',
    },
    {
      icon: MessageSquare,
      label: 'Twitter',
      value: '@rohitbedse',
      href: 'https://twitter.com',
      color: 'neon-cyan',
    },
  ]

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
            Get in <span className="gradient-text">Touch</span>
          </motion.h1>
          <motion.p variants={itemVariants} className="text-xl text-gray-300 max-w-3xl mx-auto">
            Interested in collaborating? Have questions about my work? Let&apos;s connect. I&apos;m always open
            to discussing ML, GenAI, and building cool systems.
          </motion.p>
        </motion.div>
      </section>

      {/* Main Contact Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8">Send me a message</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg glass border border-gray-700 text-white focus:border-neon-cyan focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg glass border border-gray-700 text-white focus:border-neon-cyan focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg glass border border-gray-700 text-white focus:border-neon-cyan focus:outline-none transition-colors resize-none"
                  placeholder="Tell me about your project or question..."
                />
              </div>

              <motion.button
                type="submit"
                className={`w-full px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  submitted
                    ? 'bg-neon-green/20 text-neon-green border border-neon-green'
                    : 'glass border border-neon-cyan text-neon-cyan hover:neon-glow'
                }`}
                whileHover={{ scale: submitted ? 1 : 1.02 }}
                whileTap={{ scale: submitted ? 1 : 0.98 }}
              >
                {submitted ? '✓ Message sent!' : 'Send message'}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Methods */}
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8">Other ways to reach me</h2>

            {contactMethods.map((method, index) => {
              const Icon = method.icon
              return (
                <motion.a
                  key={index}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={itemVariants}
                  className="group"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className={`glass rounded-lg border border-gray-700 hover:border-${method.color} transition-all p-6 flex items-center gap-4 group-hover:neon-glow`}>
                    <div className={`p-4 rounded-lg bg-dark-card text-${method.color}`}>
                      <Icon size={32} />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1">{method.label}</h4>
                      <p className="text-gray-400 group-hover:text-white transition-colors">
                        {method.value}
                      </p>
                    </div>
                    <div className="ml-auto text-gray-600 group-hover:text-neon-cyan transition-colors">
                      →
                    </div>
                  </div>
                </motion.a>
              )
            })}

            <div className="glass rounded-lg border border-gray-700 p-6 mt-8">
              <h4 className="font-semibold text-neon-cyan mb-2">💡 Pro tip</h4>
              <p className="text-gray-400 text-sm">
                Email me directly for the fastest response. I check my inbox regularly and love
                discussing ML, AI, and engineering challenges.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Availability */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-gray-700">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants} className="glass rounded-lg border border-gray-700 p-8">
            <h3 className="text-2xl font-bold mb-4 text-neon-cyan">Current Status</h3>
            <p className="text-gray-400 mb-4">
              Currently available for ML internship opportunities. Strong focus on GenAI and production ML systems.
            </p>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-neon-green animate-pulse"></div>
              <span className="text-sm text-gray-300">Available to discuss opportunities</span>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="glass rounded-lg border border-gray-700 p-8">
            <h3 className="text-2xl font-bold mb-4 text-neon-pink">Response Time</h3>
            <p className="text-gray-400 mb-4">
              I typically respond within 24-48 hours. For urgent matters, reach out on LinkedIn.
            </p>
            <div className="text-sm text-gray-400">
              Best reach: <span className="text-neon-cyan font-semibold">Email</span>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  )
}

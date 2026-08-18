'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

interface FieldErrors {
  name?: string
  email?: string
  subject?: string
  message?: string
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [errors, setErrors] = useState<FieldErrors>({})
  const [touched, setTouched] = useState<Record<string, boolean>>({})
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const validate = (data: FormData): FieldErrors => {
    const errs: FieldErrors = {}
    if (!data.name.trim()) errs.name = 'Name is required'
    if (!data.email.trim()) errs.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errs.email = 'Invalid email address'
    if (!data.subject.trim()) errs.subject = 'Subject is required'
    if (!data.message.trim()) errs.message = 'Message is required'
    else if (data.message.trim().length < 10) errs.message = 'At least 10 characters'
    return errs
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    const next = { ...formData, [name]: value }
    setFormData(next)
    if (touched[name]) {
      setErrors(validate(next))
    }
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name } = e.target
    setTouched((prev) => ({ ...prev, [name]: true }))
    setErrors(validate(formData))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const allTouched = { name: true, email: true, subject: true, message: true }
    setTouched(allTouched)
    const errs = validate(formData)
    setErrors(errs)

    if (Object.keys(errs).length > 0) return

    setStatus('sending')

    // Simulate send (replace with Formspree/EmailJS)
    await new Promise((r) => setTimeout(r, 1500))

    setStatus('success')
    setFormData({ name: '', email: '', subject: '', message: '' })
    setTouched({})

    setTimeout(() => setStatus('idle'), 4000)
  }

  const getFieldClass = (field: keyof FormData) => {
    if (touched[field] && errors[field]) return 'input-field error'
    if (touched[field] && !errors[field] && formData[field].trim()) return 'input-field success'
    return 'input-field'
  }

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.p variants={itemVariants} className="text-accent-blue text-sm font-semibold uppercase tracking-widest mb-3">
            Let&apos;s Connect
          </motion.p>
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-6">
            Get in <span className="gradient-text">Touch</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-gray-400 max-w-2xl mx-auto text-lg">
            Interested in collaborating or have questions? I&apos;m always open to discussing ML, GenAI, and building cool systems.
          </motion.p>
        </motion.div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="gradient-border"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="p-8 md:p-10 relative z-10 space-y-6">
            {/* Name + Email row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="contact-name" className="block text-sm font-medium text-gray-400 mb-2">
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={getFieldClass('name')}
                  placeholder="Your name"
                  aria-label="Your name"
                  aria-invalid={!!errors.name}
                />
                <AnimatePresence>
                  {touched.name && errors.name && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      className="flex items-center gap-1 mt-1.5 text-xs text-red-400"
                    >
                      <AlertCircle size={12} />
                      {errors.name}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              <div>
                <label htmlFor="contact-email" className="block text-sm font-medium text-gray-400 mb-2">
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={getFieldClass('email')}
                  placeholder="your@email.com"
                  aria-label="Your email"
                  aria-invalid={!!errors.email}
                />
                <AnimatePresence>
                  {touched.email && errors.email && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      className="flex items-center gap-1 mt-1.5 text-xs text-red-400"
                    >
                      <AlertCircle size={12} />
                      {errors.email}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Subject */}
            <div>
              <label htmlFor="contact-subject" className="block text-sm font-medium text-gray-400 mb-2">
                Subject
              </label>
              <input
                id="contact-subject"
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                onBlur={handleBlur}
                className={getFieldClass('subject')}
                placeholder="What's this about?"
                aria-label="Subject"
                aria-invalid={!!errors.subject}
              />
              <AnimatePresence>
                {touched.subject && errors.subject && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    className="flex items-center gap-1 mt-1.5 text-xs text-red-400"
                  >
                    <AlertCircle size={12} />
                    {errors.subject}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="contact-message" className="block text-sm font-medium text-gray-400 mb-2">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                onBlur={handleBlur}
                rows={5}
                className={`${getFieldClass('message')} resize-none`}
                placeholder="Tell me about your project or question..."
                aria-label="Your message"
                aria-invalid={!!errors.message}
              />
              <AnimatePresence>
                {touched.message && errors.message && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    className="flex items-center gap-1 mt-1.5 text-xs text-red-400"
                  >
                    <AlertCircle size={12} />
                    {errors.message}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            {/* Submit button */}
            <motion.button
              type="submit"
              disabled={status === 'sending' || status === 'success'}
              className={`w-full py-3.5 rounded-xl font-semibold text-base transition-all duration-300 flex items-center justify-center gap-2 ${
                status === 'success'
                  ? 'bg-accent-green/15 text-accent-green border border-accent-green/30'
                  : status === 'sending'
                    ? 'bg-white/5 text-gray-500 border border-white/10 cursor-wait'
                    : 'bg-gradient-to-r from-accent-blue to-accent-violet text-bg-deep hover:shadow-[0_0_30px_rgba(0,212,255,0.3)]'
              }`}
              whileHover={status === 'idle' ? { scale: 1.01 } : {}}
              whileTap={status === 'idle' ? { scale: 0.99 } : {}}
            >
              {status === 'sending' && (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Sending...
                </>
              )}
              {status === 'success' && (
                <>
                  <CheckCircle2 size={18} />
                  Message Sent!
                </>
              )}
              {status === 'idle' && (
                <>
                  <Send size={18} />
                  Send Message
                </>
              )}
              {status === 'error' && 'Try Again'}
            </motion.button>
          </div>
        </motion.form>
      </div>
    </section>
  )
}

'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface PreloaderProps {
  onComplete: () => void
}

const NAME_LETTERS = 'ROHIT BEDSE'.split('')

export default function Preloader({ onComplete }: PreloaderProps) {
  const [count, setCount] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const duration = 2800
    const interval = 30
    const steps = duration / interval
    let current = 0

    const timer = setInterval(() => {
      current += 1
      const progress = current / steps
      // ease out curve
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.min(Math.round(eased * 100), 100))

      if (current >= steps) {
        clearInterval(timer)
        setTimeout(() => {
          setVisible(false)
          setTimeout(onComplete, 600)
        }, 200)
      }
    }, interval)

    return () => clearInterval(timer)
  }, [onComplete])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{ background: '#030305' }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Name reveal */}
          <div className="flex mb-8 overflow-hidden">
            {NAME_LETTERS.map((letter, i) => (
              <motion.span
                key={i}
            className="font-black text-4xl sm:text-6xl tracking-tighter text-white inline-block"
                style={{ width: letter === ' ' ? '0.4em' : 'auto' }}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.06,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
              >
                {letter !== ' ' ? letter : '\u00A0'}
              </motion.span>
            ))}
          </div>

          {/* Counter */}
          <motion.div
            className="font-mono text-7xl font-bold tabular-nums"
            style={{ color: '#00d4ff' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.4 }}
          >
            {count}
            <span className="text-3xl text-white/40">%</span>
          </motion.div>

          {/* Progress bar */}
          <div className="mt-8 w-64 h-px bg-white/10 overflow-hidden rounded-full">
            <motion.div
              className="h-full rounded-full"
              style={{
                background: 'linear-gradient(90deg, #00d4ff, #b829dd)',
                width: `${count}%`,
              }}
              transition={{ ease: 'easeOut' }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

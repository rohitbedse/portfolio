'use client'

import { motion, useScroll, useTransform } from 'framer-motion'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-50 h-[2px] origin-left"
      style={{
        scaleX,
        background: 'linear-gradient(90deg, #00d4ff, #b829dd)',
        transformOrigin: 'left',
      }}
    />
  )
}

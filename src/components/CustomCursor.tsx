'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useSpring } from 'framer-motion'

const INTERACTIVE_SELECTOR = 'a, button, .card'

export default function CustomCursor() {
  const [hasFinePointer, setHasFinePointer] = useState(false)
  const [hovered, setHovered] = useState(false)
  const mouseX = useRef(0)
  const mouseY = useRef(0)

  const dotX = useSpring(0, { stiffness: 1000, damping: 50 })
  const dotY = useSpring(0, { stiffness: 1000, damping: 50 })
  const ringX = useSpring(0, { stiffness: 120, damping: 20 })
  const ringY = useSpring(0, { stiffness: 120, damping: 20 })
  const scale = useSpring(1, { stiffness: 300, damping: 25 })

  useEffect(() => {
    if (typeof window === 'undefined') return
    const query = window.matchMedia('(pointer: fine)')
    setHasFinePointer(query.matches)

    const onMatch = (e: MediaQueryListEvent) => setHasFinePointer(e.matches)
    query.addEventListener('change', onMatch)
    return () => query.removeEventListener('change', onMatch)
  }, [])

  useEffect(() => {
    if (!hasFinePointer) return

    const onMove = (e: MouseEvent) => {
      mouseX.current = e.clientX
      mouseY.current = e.clientY
      dotX.set(e.clientX)
      dotY.set(e.clientY)
      ringX.set(e.clientX)
      ringY.set(e.clientY)
    }

    const onOver = (e: MouseEvent) => {
      const target = e.target as Element
      if (target.closest(INTERACTIVE_SELECTOR)) {
        setHovered(true)
        scale.set(2)
      }
    }

    const onOut = (e: MouseEvent) => {
      const target = e.target as Element
      if (target.closest(INTERACTIVE_SELECTOR)) {
        setHovered(false)
        scale.set(1)
      }
    }

    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseover', onOver)
    document.addEventListener('mouseout', onOut)

    return () => {
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout', onOut)
    }
  }, [hasFinePointer, dotX, dotY, ringX, ringY, scale])

  if (!hasFinePointer) return null

  return (
    <>
      {/* Dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[99999]"
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
          mixBlendMode: 'difference',
        }}
      >
        <div className="w-2 h-2 rounded-full bg-white" />
      </motion.div>

      {/* Ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[99998]"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
          scale,
          mixBlendMode: 'difference',
        }}
      >
        <div
          className="w-8 h-8 rounded-full border border-white"
          style={{ opacity: hovered ? 0.8 : 0.5 }}
        />
      </motion.div>
    </>
  )
}

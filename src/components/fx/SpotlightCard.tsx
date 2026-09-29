'use client'

import { useRef, ReactNode, MouseEvent } from 'react'
import { motion, HTMLMotionProps } from 'framer-motion'

interface Props extends Omit<HTMLMotionProps<'div'>, 'children'> {
  children: ReactNode
  tilt?: number
}

/** Card with a cursor-following spotlight (via CSS vars) and subtle 3D tilt. */
export default function SpotlightCard({ children, className = '', tilt = 5, style, ...rest }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const x = e.clientX - r.left
    const y = e.clientY - r.top
    el.style.setProperty('--mx', `${x}px`)
    el.style.setProperty('--my', `${y}px`)
    if (tilt) {
      const rx = (0.5 - y / r.height) * tilt
      const ry = (x / r.width - 0.5) * tilt
      el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)`
    }
  }
  const onLeave = () => {
    if (ref.current) ref.current.style.transform = ''
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`card ${className}`}
      style={{ transition: 'transform 0.25s ease-out, border-color .3s, box-shadow .3s', ...style }}
      {...rest}
    >
      {children}
    </motion.div>
  )
}

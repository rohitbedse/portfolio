'use client'

import { useEffect, useRef } from 'react'

/** Soft page-wide glow that trails the pointer (fine pointers only). */
export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return
    const el = ref.current
    if (!el) return
    let tx = 0, ty = 0, x = 0, y = 0, raf = 0
    const onMove = (e: PointerEvent) => {
      tx = e.clientX
      ty = e.clientY
      el.style.opacity = '1'
    }
    const tick = () => {
      x += (tx - x) * 0.12
      y += (ty - y) * 0.12
      el.style.transform = `translate(${x - 250}px, ${y - 250}px)`
      raf = requestAnimationFrame(tick)
    }
    window.addEventListener('pointermove', onMove, { passive: true })
    raf = requestAnimationFrame(tick)
    return () => {
      window.removeEventListener('pointermove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-[5] w-[500px] h-[500px] rounded-full opacity-0 transition-opacity duration-500"
      style={{ background: 'radial-gradient(circle, rgba(108,140,255,0.10), transparent 65%)' }}
    />
  )
}

'use client'

import { useEffect, useRef } from 'react'

/**
 * Interactive neural-network backdrop: drifting nodes linked by proximity,
 * pulled toward the cursor with a glowing "activation" halo. Pauses off-screen
 * and honours prefers-reduced-motion.
 */
export default function NeuralField() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    let w = 0
    let h = 0
    let raf = 0
    let visible = true
    const mouse = { x: -9999, y: -9999 }

    type Node = { x: number; y: number; vx: number; vy: number; r: number }
    let nodes: Node[] = []

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      w = rect.width
      h = rect.height
      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const count = Math.min(90, Math.floor((w * h) / 16000))
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 1.4 + 0.8,
      }))
    }

    const LINK = 130
    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      for (const n of nodes) {
        if (!reduce) {
          n.x += n.vx
          n.y += n.vy
          if (n.x < 0 || n.x > w) n.vx *= -1
          if (n.y < 0 || n.y > h) n.vy *= -1
          const dx = mouse.x - n.x
          const dy = mouse.y - n.y
          const d = Math.hypot(dx, dy)
          if (d < 160 && d > 1) {
            n.x += (dx / d) * 0.5
            n.y += (dy / d) * 0.5
          }
        }
      }
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i]
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j]
          const d = Math.hypot(a.x - b.x, a.y - b.y)
          if (d < LINK) {
            const near = Math.hypot((a.x + b.x) / 2 - mouse.x, (a.y + b.y) / 2 - mouse.y) < 170
            ctx.strokeStyle = near
              ? `rgba(167, 139, 250, ${(1 - d / LINK) * 0.75})`
              : `rgba(108, 140, 255, ${(1 - d / LINK) * 0.22})`
            ctx.lineWidth = near ? 1.1 : 0.7
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }
      for (const n of nodes) {
        const d = Math.hypot(mouse.x - n.x, mouse.y - n.y)
        const lit = d < 170
        ctx.fillStyle = lit ? 'rgba(196, 168, 255, 0.95)' : 'rgba(150, 175, 255, 0.55)'
        ctx.beginPath()
        ctx.arc(n.x, n.y, lit ? n.r + 1 : n.r, 0, Math.PI * 2)
        ctx.fill()
      }
      if (visible && !reduce) raf = requestAnimationFrame(draw)
    }

    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
    }
    const onLeave = () => {
      mouse.x = mouse.y = -9999
    }

    resize()
    draw()
    const io = new IntersectionObserver(([entry]) => {
      const was = visible
      visible = entry.isIntersecting
      if (visible && !was && !reduce) raf = requestAnimationFrame(draw)
    })
    io.observe(canvas)
    window.addEventListener('resize', resize)
    window.addEventListener('pointermove', onMove, { passive: true })
    window.addEventListener('pointerleave', onLeave)

    return () => {
      cancelAnimationFrame(raf)
      io.disconnect()
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerleave', onLeave)
    }
  }, [])

  return <canvas ref={ref} className="absolute inset-0 w-full h-full" aria-hidden />
}

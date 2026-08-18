'use client'

import { useEffect, useRef, useCallback } from 'react'

interface Node {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  baseOpacity: number
  opacity: number
  pulsePhase: number
  layer: number
}

export default function NeuralCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const nodesRef = useRef<Node[]>([])
  const mouseRef = useRef({ x: -1000, y: -1000 })
  const animFrameRef = useRef<number>(0)

  const initNodes = useCallback((width: number, height: number) => {
    const count = Math.min(80, Math.floor((width * height) / 15000))
    nodesRef.current = Array.from({ length: count }, () => {
      const layer = Math.random()
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3 * (0.5 + layer * 0.5),
        vy: (Math.random() - 0.5) * 0.3 * (0.5 + layer * 0.5),
        radius: 1.5 + layer * 2,
        baseOpacity: 0.2 + layer * 0.4,
        opacity: 0.2 + layer * 0.4,
        pulsePhase: Math.random() * Math.PI * 2,
        layer,
      }
    })
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      const dpr = window.devicePixelRatio || 1
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
      ctx.scale(dpr, dpr)
      initNodes(window.innerWidth, window.innerHeight)
    }

    resize()
    window.addEventListener('resize', resize)

    const onMouse = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }
    window.addEventListener('mousemove', onMouse)

    let time = 0

    const draw = () => {
      const w = window.innerWidth
      const h = window.innerHeight
      time += 0.005

      ctx.clearRect(0, 0, w, h)

      const nodes = nodesRef.current
      const mx = mouseRef.current.x
      const my = mouseRef.current.y

      // Update nodes
      for (const node of nodes) {
        node.x += node.vx
        node.y += node.vy

        // Soft bounce
        if (node.x < 0 || node.x > w) node.vx *= -1
        if (node.y < 0 || node.y > h) node.vy *= -1
        node.x = Math.max(0, Math.min(w, node.x))
        node.y = Math.max(0, Math.min(h, node.y))

        // Mouse interaction
        const dmx = node.x - mx
        const dmy = node.y - my
        const dMouse = Math.sqrt(dmx * dmx + dmy * dmy)
        if (dMouse < 200) {
          const influence = (1 - dMouse / 200) * 0.4
          node.opacity = node.baseOpacity + influence
        } else {
          node.opacity = node.baseOpacity + Math.sin(time * 2 + node.pulsePhase) * 0.08
        }
      }

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          const maxDist = 140

          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.15 * Math.min(nodes[i].opacity, nodes[j].opacity)
            // Gradient lines: blue to violet
            const gradient = ctx.createLinearGradient(nodes[i].x, nodes[i].y, nodes[j].x, nodes[j].y)
            gradient.addColorStop(0, `rgba(0, 212, 255, ${alpha})`)
            gradient.addColorStop(1, `rgba(139, 92, 246, ${alpha})`)
            ctx.strokeStyle = gradient
            ctx.lineWidth = 0.8
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.stroke()
          }
        }
      }

      // Draw nodes
      for (const node of nodes) {
        // Glow
        const glowGradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, node.radius * 6)
        const blueAmt = 1 - node.layer
        const r = Math.round(0 * blueAmt + 139 * (1 - blueAmt))
        const g = Math.round(212 * blueAmt + 92 * (1 - blueAmt))
        const b = Math.round(255 * blueAmt + 246 * (1 - blueAmt))
        glowGradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${node.opacity * 0.3})`)
        glowGradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`)
        ctx.fillStyle = glowGradient
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.radius * 6, 0, Math.PI * 2)
        ctx.fill()

        // Core dot
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${node.opacity})`
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2)
        ctx.fill()
      }

      animFrameRef.current = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMouse)
      cancelAnimationFrame(animFrameRef.current)
    }
  }, [initNodes])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ mixBlendMode: 'screen' }}
      aria-hidden="true"
    />
  )
}

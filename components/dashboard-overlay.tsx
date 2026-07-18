"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export function DashboardOverlay() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener("resize", resize)

    type Packet = { x: number; y: number; speed: number; alpha: number; length: number }
    const packets: Packet[] = []
    for (let i = 0; i < 8; i++) {
      packets.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        speed: 0.5 + Math.random() * 1.5,
        alpha: 0.1 + Math.random() * 0.2,
        length: 20 + Math.random() * 40,
      })
    }

    let time = 0
    const animate = () => {
      time += 0.003
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Horizontal scan lines
      ctx.strokeStyle = "rgba(249, 115, 22, 0.015)"
      ctx.lineWidth = 1
      for (let y = 0; y < canvas.height; y += 40) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }
      for (let x = 0; x < canvas.width; x += 40) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }

      // Data packets
      for (const p of packets) {
        p.x += p.speed
        if (p.x > canvas.width + p.length) p.x = -p.length

        const grad = ctx.createLinearGradient(p.x, p.y, p.x + p.length, p.y)
        grad.addColorStop(0, `rgba(249, 115, 22, 0)`)
        grad.addColorStop(0.5, `rgba(249, 115, 22, ${p.alpha})`)
        grad.addColorStop(1, `rgba(249, 115, 22, 0)`)
        ctx.beginPath()
        ctx.moveTo(p.x, p.y)
        ctx.lineTo(p.x + p.length, p.y)
        ctx.strokeStyle = grad
        ctx.lineWidth = 1
        ctx.stroke()

        const dotAlpha = Math.sin(time * 3 + p.x) * 0.2 + 0.3
        ctx.beginPath()
        ctx.arc(p.x, p.y, 1.5, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(249, 115, 22, ${dotAlpha})`
        ctx.fill()
      }

      // Corner brackets
      const corner = (x: number, y: number, w: number, h: number) => {
        ctx.strokeStyle = "rgba(249, 115, 22, 0.08)"
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.moveTo(x, y + h)
        ctx.lineTo(x, y)
        ctx.lineTo(x + w, y)
        ctx.stroke()
      }
      corner(30, 30, 30, 30)
      corner(canvas.width - 30, 30, -30, 30)
      corner(30, canvas.height - 30, 30, -30)
      corner(canvas.width - 30, canvas.height - 30, -30, -30)

      animRef.current = requestAnimationFrame(animate)
    }

    animate()
    return () => {
      cancelAnimationFrame(animRef.current)
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <motion.canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-[4]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, delay: 0.8 }}
    />
  )
}

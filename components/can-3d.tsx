"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "./theme-provider"

export function Can3D() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const updateSize = () => {
      const dpr = window.devicePixelRatio || 1
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      ctx.scale(dpr, dpr)
    }
    updateSize()
    window.addEventListener("resize", updateSize)

    // Animation state
    let rotation = 0
    let yOffset = 0
    let scrollProgress = 0

    // Track scroll
    const handleScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      scrollProgress = window.scrollY / maxScroll
    }
    window.addEventListener("scroll", handleScroll)

    // Draw can
    const drawCan = () => {
      const rect = canvas.getBoundingClientRect()
      ctx.clearRect(0, 0, rect.width, rect.height)

      const centerX = rect.width / 2
      const centerY = rect.height / 2
      const canWidth = 120
      const canHeight = 300

      ctx.save()
      ctx.translate(centerX, centerY + yOffset)
      ctx.rotate(rotation + scrollProgress * Math.PI * 0.5)

      // Can body gradient
      const gradient = ctx.createLinearGradient(-canWidth / 2, -canHeight / 2, canWidth / 2, canHeight / 2)
      if (theme === "dark") {
        gradient.addColorStop(0, "#06b6d4")
        gradient.addColorStop(0.5, "#8b5cf6")
        gradient.addColorStop(1, "#ec4899")
      } else if (theme === "light") {
        gradient.addColorStop(0, "#3b82f6")
        gradient.addColorStop(1, "#8b5cf6")
      } else {
        gradient.addColorStop(0, "#f59e0b")
        gradient.addColorStop(0.5, "#ef4444")
        gradient.addColorStop(1, "#dc2626")
      }

      // Can body
      ctx.fillStyle = gradient
      ctx.fillRect(-canWidth / 2, -canHeight / 2, canWidth, canHeight)

      // Top rim
      ctx.fillStyle = theme === "dark" ? "#1e293b" : theme === "light" ? "#e2e8f0" : "#78350f"
      ctx.fillRect(-canWidth / 2 - 5, -canHeight / 2 - 10, canWidth + 10, 15)

      // Glow effect
      ctx.shadowBlur = 30
      ctx.shadowColor = theme === "dark" ? "#06b6d4" : theme === "light" ? "#3b82f6" : "#f59e0b"
      ctx.strokeStyle = ctx.shadowColor
      ctx.lineWidth = 2
      ctx.strokeRect(-canWidth / 2, -canHeight / 2, canWidth, canHeight)

      ctx.restore()
    }

    // Animation loop
    const animate = () => {
      rotation += 0.005
      yOffset = Math.sin(Date.now() * 0.001) * 10
      drawCan()
      requestAnimationFrame(animate)
    }
    animate()

    return () => {
      window.removeEventListener("resize", updateSize)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [theme])

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full"
      style={{ filter: "drop-shadow(0 0 40px rgba(6, 182, 212, 0.3))" }}
    />
  )
}

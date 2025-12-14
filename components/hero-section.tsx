"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return
      const scrollY = window.scrollY
      const elements = sectionRef.current.querySelectorAll(".parallax")

      elements.forEach((el, index) => {
        const speed = (index + 1) * 0.1
        const yPos = -(scrollY * speed)
        ;(el as HTMLElement).style.transform = `translateY(${yPos}px)`
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient layers */}
      <div className="absolute inset-0 bg-theme-bg">
        <div className="parallax absolute inset-0 bg-gradient-to-br from-theme-gradient-1 via-theme-gradient-2 to-theme-gradient-3 opacity-30" />
        <div className="parallax absolute inset-0 bg-theme-noise opacity-5" />
      </div>

      {/* Particle field */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-theme-accent/30 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            transition={{
              duration: 20 + Math.random() * 20,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 2.7 }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-theme-text text-balance leading-tight">
              Pleasure
              <span className="block text-theme-accent">Meets Power</span>
            </h1>
            <p className="text-xl text-theme-text/70 text-pretty max-w-lg">
              Premium energy drink distribution for retailers, cafes, and businesses. Elevate your offerings with clean
              energy, smooth focus, and premium taste.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-theme-accent hover:bg-theme-accent/90 text-white font-semibold px-8 py-6 text-lg rounded-full shadow-glow transition-all hover:scale-105"
              >
                Become a Partner
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-theme-accent text-theme-accent hover:bg-theme-accent/10 font-semibold px-8 py-6 text-lg rounded-full transition-all hover:scale-105 bg-transparent"
              >
                View Catalog
              </Button>
            </div>
          </motion.div>

          {/* Right 3D can */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 2.7 }}
            className="relative h-[500px] md:h-[600px] flex items-center justify-center"
          >
            <motion.img
              src="/hero-energy-can-transparent.jpg"
              alt="Pleasure Drinks Energy Can"
              className="h-full w-auto object-contain drop-shadow-2xl"
              animate={{
                y: [0, -20, 0],
                rotateY: [0, 10, 0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              style={{
                filter: "drop-shadow(0 0 40px rgba(6, 182, 212, 0.4))",
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

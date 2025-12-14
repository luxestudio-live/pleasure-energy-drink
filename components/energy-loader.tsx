"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function EnergyLoader() {
  const [progress, setProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const duration = 2500
    const interval = 30
    const steps = duration / interval
    const increment = 100 / steps

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = Math.min(prev + increment, 100)
        if (next >= 100) {
          clearInterval(timer)
          setTimeout(() => setIsVisible(false), 400)
        }
        return next
      })
    }, interval)

    return () => clearInterval(timer)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-theme-bg"
        >
          <div className="flex flex-col items-center gap-8">
            <div className="text-4xl md:text-6xl font-bold text-theme-text tracking-tight">Pleasure Drinks</div>

            <div className="relative w-40 h-72">
              <img
                src="/classic-original-energy-drink-can.jpg"
                alt="Pleasure Drinks Can"
                className="w-full h-full object-contain"
              />
              {/* Energy fill overlay */}
              <div className="absolute inset-0 overflow-hidden">
                <motion.div
                  className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-theme-glow-start via-theme-glow-mid to-theme-glow-end mix-blend-screen"
                  style={{ height: `${progress}%` }}
                  transition={{ duration: 0.1 }}
                >
                  {/* Spark particles */}
                  <div className="absolute inset-0 overflow-hidden">
                    {[...Array(8)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-white rounded-full"
                        initial={{ bottom: 0, left: `${Math.random() * 100}%`, opacity: 0 }}
                        animate={{
                          bottom: "100%",
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Number.POSITIVE_INFINITY,
                          delay: i * 0.2,
                          ease: "linear",
                        }}
                      />
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>

            <div className="text-2xl font-semibold text-theme-accent">{Math.round(progress)}%</div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

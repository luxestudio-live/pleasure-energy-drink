"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export function BrandStory() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section id="story" ref={ref} className="relative py-32 bg-theme-bg overflow-hidden">
      {/* Background video placeholder */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-theme-gradient-1 via-theme-gradient-2 to-theme-gradient-3 animate-pulse" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="rounded-3xl bg-theme-card/80 backdrop-blur-xl border border-theme-border p-12 md:p-20 shadow-2xl">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold text-theme-text mb-8 text-center text-balance"
            >
              Your Trusted Energy Drink Distributor
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6 text-lg leading-relaxed text-theme-text/80 text-pretty"
            >
              <p>
                Pleasure Drinks is a leading distributor of premium energy beverages, serving retailers, cafes, gyms,
                and businesses across the region.
              </p>
              <p>
                We partner with brands that deliver{" "}
                <strong className="text-theme-accent">clean, sustained energy</strong> without the sugar crashes,
                artificial ingredients, or compromise on quality.
              </p>
              <p>
                Our extensive distribution network ensures your business always has access to the most sought-after
                energy drinks. From bulk orders to specialized flavors, we provide flexible solutions that meet your
                unique needs.
              </p>
              <p className="text-2xl font-bold text-theme-accent text-center pt-8">
                Premium Products. Reliable Service. Your Success.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

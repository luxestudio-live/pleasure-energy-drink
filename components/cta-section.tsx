"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const badges = ["100% Vegan", "Zero Sugar", "Lab Tested", "Eco-Friendly"]

export function CTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  return (
    <section id="buy" ref={ref} className="relative py-32 bg-theme-bg overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-theme-gradient-1 via-theme-gradient-2 to-theme-gradient-3 opacity-20" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-theme-text mb-6 text-balance"
          >
            Charge Your Next Move
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl text-theme-text/70 mb-12 text-pretty"
          >
            Experience the perfect fusion of pleasure and performance. Join thousands who've already made the switch.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <Button
              size="lg"
              className="bg-theme-accent hover:bg-theme-accent/90 text-white font-semibold px-12 py-8 text-xl rounded-full shadow-glow transition-all hover:scale-110"
            >
              Order Pleasure Drinks
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-theme-accent text-theme-accent hover:bg-theme-accent/10 font-semibold px-12 py-8 text-xl rounded-full transition-all hover:scale-110 bg-transparent"
            >
              Find a Store Near You
            </Button>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {badges.map((badge, index) => (
              <motion.div
                key={badge}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-theme-card border border-theme-accent text-theme-text font-medium"
              >
                <Check className="w-4 h-4 text-theme-accent" />
                {badge}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

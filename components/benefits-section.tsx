"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Zap, Brain, Leaf, Award } from "lucide-react"

const benefits = [
  { icon: Zap, label: "Zero Sugar", description: "No sugar crash, just sustained energy" },
  { icon: Brain, label: "Clean Caffeine", description: "160mg of naturally sourced caffeine" },
  { icon: Leaf, label: "Plant-Based", description: "100% vegan & eco-friendly ingredients" },
  { icon: Award, label: "Lab Tested", description: "Verified by third-party laboratories" },
]

const ingredients = [
  { name: "Natural Caffeine", amount: "160mg" },
  { name: "B-Vitamins Complex", amount: "100% DV" },
  { name: "L-Theanine", amount: "200mg" },
  { name: "Taurine", amount: "1000mg" },
]

export function BenefitsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section id="science" ref={ref} className="relative py-32 bg-theme-section">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-theme-text mb-4">Science & Benefits</h2>
          <p className="text-xl text-theme-text/70 max-w-3xl mx-auto">
            Precision-engineered formulation for peak performance and sustained focus.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <motion.div
                  key={benefit.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-4 p-6 rounded-2xl bg-theme-card border border-theme-border hover:scale-105 transition-transform"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-theme-accent/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-theme-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-theme-text mb-1">{benefit.label}</h3>
                    <p className="text-theme-text/70">{benefit.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Ingredients diagram */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-3xl bg-theme-card border border-theme-border p-8 backdrop-blur-xl">
              <h3 className="text-2xl font-bold text-theme-text mb-8 text-center">Premium Ingredients</h3>
              <div className="space-y-6">
                {ingredients.map((ingredient, index) => (
                  <motion.div
                    key={ingredient.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    className="relative"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-theme-text font-semibold">{ingredient.name}</span>
                      <span className="text-theme-accent font-bold">{ingredient.amount}</span>
                    </div>
                    <div className="h-2 bg-theme-bg rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-theme-glow-start to-theme-glow-end"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: "100%" } : {}}
                        transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

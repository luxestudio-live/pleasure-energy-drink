"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const flavors = [
  {
    name: "Midnight Rush",
    description: "Deep berry fusion with a mysterious edge. Perfect for late-night focus and creative flow.",
    color: "from-indigo-500 to-purple-700",
    experience: "Deep Focus",
    image: require("../lib/utils").withBasePath("/dark-purple-energy-drink-can-midnight-rush.jpg"),
  },
  {
    name: "Citrus Surge",
    description: "Vibrant citrus explosion that energizes and uplifts. Morning motivation in a can.",
    color: "from-yellow-400 to-orange-500",
    experience: "Pure Energy",
    image: require("../lib/utils").withBasePath("/orange-yellow-energy-drink-can-citrus-surge.jpg"),
  },
  {
    name: "Arctic Mint",
    description: "Cool, refreshing mint with a clean finish. The perfect reset for body and mind.",
    color: "from-cyan-400 to-teal-500",
    experience: "Mental Clarity",
    image: require("../lib/utils").withBasePath("/cyan-blue-energy-drink-can-arctic-mint.jpg"),
  },
  {
    name: "Crimson Fire",
    description: "Bold tropical heat with a smooth burn. Ignite your inner power and push limits.",
    color: "from-red-500 to-rose-600",
    experience: "Peak Performance",
    image: require("../lib/utils").withBasePath("/red-energy-drink-can-crimson-fire.jpg"),
  },
]

export function FlavorsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="flavors" ref={ref} className="relative py-32 bg-theme-bg">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-theme-text mb-4">Flavors & Experiences</h2>
          <p className="text-xl text-theme-text/70 max-w-3xl mx-auto">
            Each flavor is crafted to unlock a unique state of mind and performance.
          </p>
        </motion.div>

        <div className="space-y-12">
          {flavors.map((flavor, index) => (
            <motion.div
              key={flavor.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-3xl bg-theme-card border border-theme-border p-8 md:p-12 transition-all hover:scale-[1.02] hover:shadow-2xl">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="relative h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-theme-gradient-1/20 to-theme-gradient-2/20 flex items-center justify-center">
                    <img
                      src={flavor.image || require("../lib/utils").withBasePath("/placeholder.svg")}
                      alt={`${flavor.name} energy drink can`}
                      className="h-full w-auto object-contain drop-shadow-2xl group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  {/* Flavor description */}
                  <div className="space-y-4">
                    <h3 className="text-3xl font-bold text-theme-text">{flavor.name}</h3>
                    <p className="text-lg text-theme-text/70 leading-relaxed">{flavor.description}</p>
                    <div className="inline-block px-4 py-2 rounded-full bg-theme-accent/10 border border-theme-accent text-theme-accent font-semibold">
                      {flavor.experience}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

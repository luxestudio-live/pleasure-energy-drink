"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const products = [
  {
    name: "Original",
    color: "from-cyan-500 to-purple-500",
    taste: "Classic Energy",
    image: "/product-can-original-transparent.jpg",
  },
  {
    name: "Citrus Surge",
    color: "from-yellow-500 to-orange-500",
    taste: "Bold & Bright",
    image: "/product-can-citrus-transparent.jpg",
  },
  {
    name: "Midnight Rush",
    color: "from-indigo-500 to-purple-700",
    taste: "Smooth & Intense",
    image: "/product-can-midnight-transparent.jpg",
  },
  {
    name: "Berry Blast",
    color: "from-pink-500 to-red-500",
    taste: "Sweet & Powerful",
    image: "/product-can-berry-transparent.jpg",
  },
]

export function ProductShowcase() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section id="products" ref={ref} className="relative py-32 bg-theme-section">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-theme-text mb-4">Our Collection</h2>
          <p className="text-xl text-theme-text/70 max-w-2xl mx-auto">
            Premium energy drinks available for wholesale and retail distribution.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-3xl bg-theme-card border border-theme-border p-8 transition-all hover:scale-105 hover:shadow-2xl">
                <div className="relative h-64 mb-6 flex items-center justify-center bg-gradient-to-br from-theme-gradient-1/10 to-theme-gradient-2/10 rounded-2xl overflow-hidden">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={`${product.name} energy drink can`}
                    className="h-full w-auto object-contain drop-shadow-2xl group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <h3 className="text-2xl font-bold text-theme-text mb-2">{product.name}</h3>
                <p className="text-theme-text/70">{product.taste}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

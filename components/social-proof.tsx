"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Alex Chen",
    role: "Pro Gamer",
    content: "Keeps me sharp during 12-hour streams. No jitters, no crash. Game changer.",
    rating: 5,
    image: require("../lib/utils").withBasePath("/pro-gamer-portrait.jpg"),
  },
  {
    name: "Sarah Martinez",
    role: "Fitness Athlete",
    content: "Clean ingredients, incredible taste. Perfect pre-workout energy boost.",
    rating: 5,
    image: require("../lib/utils").withBasePath("/fitness-athlete-portrait.jpg"),
  },
  {
    name: "Jordan Lee",
    role: "Content Creator",
    content: "Finally, an energy drink that matches my lifestyle. Premium quality.",
    rating: 5,
    image: require("../lib/utils").withBasePath("/content-creator-portrait.jpg"),
  },
  {
    name: "Maya Patel",
    role: "Entrepreneur",
    content: "Sustained focus without the anxiety. My new secret weapon.",
    rating: 5,
    image: require("../lib/utils").withBasePath("/entrepreneur-portrait.jpg"),
  },
]

export function SocialProof() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="community" ref={ref} className="relative py-32 bg-theme-section">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-theme-text mb-4">Join the Movement</h2>
          <p className="text-xl text-theme-text/70 max-w-3xl mx-auto">
            Trusted by athletes, creators, and high-performers worldwide.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-3xl bg-theme-card border border-theme-border p-6 h-full transition-all hover:scale-105 hover:shadow-2xl">
                {/* Profile image */}
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-theme-accent to-theme-glow-mid mb-4 overflow-hidden">
                  <img
                    src={testimonial.image || require("../lib/utils").withBasePath("/placeholder.svg")}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-theme-accent text-theme-accent" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-theme-text/80 mb-4 text-pretty leading-relaxed">"{testimonial.content}"</p>

                {/* Author */}
                <div>
                  <div className="font-bold text-theme-text">{testimonial.name}</div>
                  <div className="text-sm text-theme-text/60">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Social stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { label: "Active Users", value: "50K+" },
            { label: "Five-Star Reviews", value: "12K+" },
            { label: "Countries", value: "25+" },
            { label: "Cans Sold", value: "1M+" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-theme-accent mb-2">{stat.value}</div>
              <div className="text-theme-text/70">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

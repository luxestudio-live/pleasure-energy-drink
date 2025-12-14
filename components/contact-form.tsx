"use client"

import type React from "react"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"

export function ContactForm() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("[v0] Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" ref={ref} className="relative py-32 bg-theme-bg">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-theme-text mb-4">Get In Touch</h2>
          <p className="text-xl text-theme-text/70 max-w-3xl mx-auto">
            Ready to partner with us? Let's discuss how we can elevate your business.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="rounded-2xl bg-theme-card border border-theme-border p-8 space-y-6">
              <h3 className="text-2xl font-bold text-theme-text mb-6">Contact Information</h3>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-theme-accent/10 border border-theme-accent">
                  <Mail className="h-6 w-6 text-theme-accent" />
                </div>
                <div>
                  <p className="font-semibold text-theme-text">Email</p>
                  <p className="text-theme-text/70">info@pleasuredrinks.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-theme-accent/10 border border-theme-accent">
                  <Phone className="h-6 w-6 text-theme-accent" />
                </div>
                <div>
                  <p className="font-semibold text-theme-text">Phone</p>
                  <p className="text-theme-text/70">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-theme-accent/10 border border-theme-accent">
                  <MapPin className="h-6 w-6 text-theme-accent" />
                </div>
                <div>
                  <p className="font-semibold text-theme-text">Address</p>
                  <p className="text-theme-text/70">
                    123 Distribution Way
                    <br />
                    Business District, CA 90210
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-theme-card border border-theme-border p-8">
              <h3 className="text-xl font-bold text-theme-text mb-4">Business Hours</h3>
              <div className="space-y-2 text-theme-text/70">
                <p>
                  <span className="font-semibold text-theme-text">Monday - Friday:</span> 8:00 AM - 6:00 PM
                </p>
                <p>
                  <span className="font-semibold text-theme-text">Saturday:</span> 9:00 AM - 4:00 PM
                </p>
                <p>
                  <span className="font-semibold text-theme-text">Sunday:</span> Closed
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl bg-theme-card border border-theme-border p-8 space-y-6"
            >
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-theme-text mb-2">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-theme-bg border-theme-border text-theme-text focus:border-theme-accent"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-theme-text mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-theme-bg border-theme-border text-theme-text focus:border-theme-accent"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-theme-text mb-2">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-theme-bg border-theme-border text-theme-text focus:border-theme-accent"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-theme-text mb-2">
                    Company Name
                  </label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    className="bg-theme-bg border-theme-border text-theme-text focus:border-theme-accent"
                    placeholder="Your Business"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-theme-text mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="bg-theme-bg border-theme-border text-theme-text focus:border-theme-accent resize-none"
                    placeholder="Tell us about your distribution needs..."
                  />
                </div>
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-theme-accent hover:bg-theme-accent/90 text-white font-semibold py-6 text-lg rounded-full shadow-glow transition-all hover:scale-105"
              >
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

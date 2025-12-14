"use client"

import { MessageCircle } from "lucide-react"
import { motion } from "framer-motion"

export function WhatsAppFloat() {
  const handleClick = () => {
    // Replace with your actual WhatsApp number
    window.open("https://wa.me/15551234567", "_blank")
  }

  return (
    <motion.button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-white shadow-2xl transition-all hover:scale-110"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3, delay: 3 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
      <motion.div
        className="absolute inset-0 rounded-full bg-[#25D366]"
        initial={{ scale: 1, opacity: 0.5 }}
        animate={{ scale: 1.5, opacity: 0 }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          repeatDelay: 1,
        }}
      />
    </motion.button>
  )
}

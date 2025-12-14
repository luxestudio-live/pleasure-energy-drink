"use client"

import { useState, useEffect } from "react"
import { useTheme } from "./theme-provider"
import { Moon, Sun, Flame } from "lucide-react"

export function Navigation() {
  const { theme, setTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      // Detect active section
      const sections = ["hero", "product", "flavors", "science", "story", "community", "buy"]
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-theme-nav backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="text-xl md:text-2xl font-bold text-theme-text">Pleasure Drinks</div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { id: "product", label: "Product" },
            { id: "flavors", label: "Flavors" },
            { id: "science", label: "Science" },
            { id: "story", label: "Story" },
            { id: "community", label: "Community" },
            { id: "buy", label: "Buy" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative text-sm font-medium transition-colors ${
                activeSection === item.id ? "text-theme-accent" : "text-theme-text/70 hover:text-theme-text"
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-theme-accent" />
              )}
            </button>
          ))}
        </div>

        {/* Theme Switcher */}
        <div className="flex items-center gap-2 p-1 bg-theme-card rounded-full border border-theme-border ml-2">
            {/* Mobile nav placeholder for spacing */}
            <div className="block md:hidden w-8 h-8" />
          <button
            onClick={() => setTheme("dark")}
            className={`p-2 rounded-full transition-all ${
              theme === "dark" ? "bg-theme-accent text-white" : "text-theme-text/50 hover:text-theme-text"
            }`}
            aria-label="Dark theme"
          >
            <Moon className="w-4 h-4" />
          </button>
          <button
            onClick={() => setTheme("light")}
            className={`p-2 rounded-full transition-all ${
              theme === "light" ? "bg-theme-accent text-white" : "text-theme-text/50 hover:text-theme-text"
            }`}
            aria-label="Light theme"
          >
            <Sun className="w-4 h-4" />
          </button>
          <button
            onClick={() => setTheme("warm")}
            className={`p-2 rounded-full transition-all ${
              theme === "warm" ? "bg-theme-accent text-white" : "text-theme-text/50 hover:text-theme-text"
            }`}
            aria-label="Warm theme"
          >
            <Flame className="w-4 h-4" />
          </button>
        </div>
      </div>
    </nav>
  )
}

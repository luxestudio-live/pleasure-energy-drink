"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"

type Theme = "dark" | "light" | "warm"

interface ThemeContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("dark")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Load theme from localStorage on mount
    const savedTheme = localStorage.getItem("pleasure-drinks-theme") as Theme
    if (savedTheme && ["dark", "light", "warm"].includes(savedTheme)) {
      setThemeState(savedTheme)
      document.documentElement.setAttribute("data-theme", savedTheme)
    } else {
      document.documentElement.setAttribute("data-theme", "dark")
    }
    setMounted(true)
  }, [])

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme)
    localStorage.setItem("pleasure-drinks-theme", newTheme)
    document.documentElement.setAttribute("data-theme", newTheme)
  }

  // Prevent flash of unstyled content
  if (!mounted) {
    return null
  }

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}

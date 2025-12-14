import type React from "react"
import type { Metadata } from "next"
import { Geist, Orbitron } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const geist = Geist({ subsets: ["latin"] })
const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-display" })

export const metadata: Metadata = {
  title: "Pleasure Drinks - Premium Energy for Peak Performance",
  description:
    "Ultra-premium energy drinks crafted for high-performers. Clean energy, smooth focus, zero sugar. Experience the fusion of pleasure and power.",
  generator: "v0.app",
  keywords: ["energy drink", "premium energy", "zero sugar", "clean caffeine", "performance drink"],
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geist.className} ${orbitron.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

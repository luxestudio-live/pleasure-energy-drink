"use client"

import { Facebook, Instagram, Twitter, Linkedin, Youtube, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative bg-theme-bg border-t border-theme-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-theme-text">Pleasure Drinks</h3>
            <p className="text-theme-text/70 leading-relaxed">
              Premium energy drink distribution serving businesses nationwide. Quality products, reliable service.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-theme-text mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#hero" className="text-theme-text/70 hover:text-theme-accent transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#products" className="text-theme-text/70 hover:text-theme-accent transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="#flavors" className="text-theme-text/70 hover:text-theme-accent transition-colors">
                  Flavors
                </a>
              </li>
              <li>
                <a href="#story" className="text-theme-text/70 hover:text-theme-accent transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-theme-text/70 hover:text-theme-accent transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold text-theme-text mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="text-theme-text/70">Wholesale Distribution</li>
              <li className="text-theme-text/70">Retail Partnerships</li>
              <li className="text-theme-text/70">Bulk Orders</li>
              <li className="text-theme-text/70">Custom Solutions</li>
              <li className="text-theme-text/70">Logistics Support</li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-lg font-bold text-theme-text mb-4">Connect With Us</h4>
            <div className="flex flex-wrap gap-3 mb-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-theme-card border border-theme-border hover:border-theme-accent hover:bg-theme-accent/10 transition-all group"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5 text-theme-text/70 group-hover:text-theme-accent transition-colors" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-theme-card border border-theme-border hover:border-theme-accent hover:bg-theme-accent/10 transition-all group"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 text-theme-text/70 group-hover:text-theme-accent transition-colors" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-theme-card border border-theme-border hover:border-theme-accent hover:bg-theme-accent/10 transition-all group"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5 text-theme-text/70 group-hover:text-theme-accent transition-colors" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-theme-card border border-theme-border hover:border-theme-accent hover:bg-theme-accent/10 transition-all group"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-theme-text/70 group-hover:text-theme-accent transition-colors" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-theme-card border border-theme-border hover:border-theme-accent hover:bg-theme-accent/10 transition-all group"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5 text-theme-text/70 group-hover:text-theme-accent transition-colors" />
              </a>
              <a
                href="mailto:info@pleasuredrinks.com"
                className="p-3 rounded-full bg-theme-card border border-theme-border hover:border-theme-accent hover:bg-theme-accent/10 transition-all group"
                aria-label="Email"
              >
                <Mail className="h-5 w-5 text-theme-text/70 group-hover:text-theme-accent transition-colors" />
              </a>
            </div>
            <p className="text-sm text-theme-text/70">Subscribe to our newsletter for updates and exclusive offers.</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-theme-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-theme-text/60">© 2025 Pleasure Drinks Distribution. All rights reserved.</p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-theme-text/60 hover:text-theme-accent transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-theme-text/60 hover:text-theme-accent transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-theme-text/60 hover:text-theme-accent transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

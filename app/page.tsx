import { EnergyLoader } from "@/components/energy-loader"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ProductShowcase } from "@/components/product-showcase"
import { FlavorsSection } from "@/components/flavors-section"
import { BenefitsSection } from "@/components/benefits-section"
import { BrandStory } from "@/components/brand-story"
import { SocialProof } from "@/components/social-proof"
import { CTASection } from "@/components/cta-section"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { ThemeProvider } from "@/components/theme-provider"
import { BackToTop } from "@/components/back-to-top"

export default function Page() {
  return (
    <ThemeProvider>
      <EnergyLoader />
      <div className="relative overflow-x-hidden">
        <Navigation />
        <main>
          <HeroSection />
          <ProductShowcase />
          <FlavorsSection />
          <BenefitsSection />
          <BrandStory />
          <SocialProof />
          <CTASection />
          <ContactForm />
        </main>
        <Footer />
        <BackToTop />
        <WhatsAppFloat />
      </div>
    </ThemeProvider>
  )
}

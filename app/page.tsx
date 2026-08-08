import { SiteHeader } from '@/components/site-header'
import { HeroSection } from '@/components/hero-section'
import { AboutSection } from '@/components/about-section'
import { ServicesSection } from '@/components/services-section'
import { CasesSection } from '@/components/cases-section'
import { NewsSection } from '@/components/news-section'
import { SiteFooter } from '@/components/site-footer'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <CasesSection />
        <NewsSection />
      </main>
      <SiteFooter />
    </div>
  )
}

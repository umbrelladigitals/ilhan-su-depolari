import type { Metadata } from 'next'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { getProducts, getHeroSlides, getSiteSettings, getFaqs } from '@/lib/payload'
import { HeroSection } from '@/components/HeroSection'
import { ProductsSection } from '@/components/ProductsSection'
import { AboutSection } from '@/components/AboutSection'
import { CalculatorSection } from '@/components/CalculatorSection'
import { FaqSection } from '@/components/FaqSection'
import { ContactSection } from '@/components/ContactSection'

export const revalidate = 0 // Instant live sync with Payload CMS

export async function generateMetadata(): Promise<Metadata> {
  const payload = await getPayload({ config: configPromise })
  const siteSettings = await payload.findGlobal({ slug: 'site-settings' }).catch(() => null)

  const metaTitle = (siteSettings as any)?.siteMetaTitle || (siteSettings as any)?.metaTitle || (siteSettings as any)?.siteName || 'İlhan Su Depoları — Polietilen & Paslanmaz Modüler Depolar'
  const metaDescription = (siteSettings as any)?.siteMetaDescription || (siteSettings as any)?.metaDescription || 'Ankara su deposu üreticisi İlhan Su Depoları. Yüksek kaliteli polietilen dikey, yatay ve paslanmaz modüler su depoları uygun teklif ve garantiyle.'

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: (siteSettings as any)?.siteMetaKeywords || (siteSettings as any)?.metaKeywords || 'su deposu, ankara su deposu, polietilen su deposu, paslanmaz modüler depo',
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      type: 'website',
      locale: 'tr_TR',
    },
  }
}

export default async function HomePage() {
  const [slides, siteSettings, products, faqs] = await Promise.all([
    getHeroSlides(),
    getSiteSettings(),
    getProducts('all'),
    getFaqs(),
  ])

  return (
    <div>
      {/* 1. Hero Slider / Banner Section */}
      <HeroSection slides={slides} siteSettings={siteSettings} />

      {/* 2. Products Showcase Section */}
      <ProductsSection products={products} />

      {/* 3. About / Corporate Overview */}
      <AboutSection siteSettings={siteSettings} />

      {/* 4. Tank Capacity Calculator Section */}
      <CalculatorSection siteSettings={siteSettings} />

      {/* 5. Frequently Asked Questions Section */}
      <FaqSection faqs={faqs} siteSettings={siteSettings} />

      {/* 6. Contact & Location Section */}
      <ContactSection siteSettings={siteSettings} />
    </div>
  )
}

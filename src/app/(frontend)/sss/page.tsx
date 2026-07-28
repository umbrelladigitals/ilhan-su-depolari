import type { Metadata } from 'next'
import { getFaqs, getSiteSettings } from '@/lib/payload'
import { FaqClient } from './FaqClient'

export const metadata: Metadata = {
  title: 'Sıkça Sorulan Sorular (SSS) | İlhan Su Depoları',
  description: 'Su deposu seçimi, polietilen depo özellikleri, yosun önleme, garanti şartları ve Ankara teslimat süreçleri hakkında tüm merak edilen sorular.',
  openGraph: {
    title: 'Sıkça Sorulan Sorular (SSS) | İlhan Su Depoları',
    description: 'Su deposu seçimi, polietilen depo özellikleri ve garanti şartları hakkında tüm sorular.',
  },
}

export const revalidate = 0

export default async function FaqPage() {
  const [faqs, siteSettings] = await Promise.all([
    getFaqs(),
    getSiteSettings(),
  ])

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f: any) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    })),
  }

  return (
    <div className="page-wrapper bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="container-custom max-w-4xl">
        <FaqClient initialFaqs={faqs} siteSettings={siteSettings} />
      </div>
    </div>
  )
}

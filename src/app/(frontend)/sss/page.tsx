import type { Metadata } from 'next'
import { getFaqs } from '@/lib/payload'
import { FaqClient } from './FaqClient'

export const metadata: Metadata = {
  title: 'Sıkça Sorulan Sorular (SSS) — İlhan Su Depoları',
  description: 'Su deposu seçimi, polietilen depo özellikleri, garanti şartları ve teslimat süreçleri hakkında merak edilenler.',
}

export const revalidate = 0 // Instant Payload CMS sync

export default async function FaqPage() {
  const faqs = await getFaqs()

  return (
    <div className="page-wrapper bg-white">
      <div className="container-custom max-w-4xl">
        <FaqClient initialFaqs={faqs} />
      </div>
    </div>
  )
}

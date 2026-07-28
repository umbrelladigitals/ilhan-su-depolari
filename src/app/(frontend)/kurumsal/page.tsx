import type { Metadata } from 'next'
import { getJobPositions, getSiteSettings } from '@/lib/payload'
import { CorporateClient } from './CorporateClient'

export const metadata: Metadata = {
  title: 'Kurumsal & İnsan Kaynakları — İlhan Su Depoları',
  description:
    'İlhan Su Depoları hakkında bilgi, 25 yıllık sanayi tecrübemiz, vizyon & misyonumuz, açık İK pozisyonları ve kalite sertifikalarımız.',
}

export const revalidate = 0 // Instant Payload CMS sync

export default async function CorporatePage({
  searchParams,
}: {
  searchParams: Promise<{ tab?: string }>
}) {
  const { tab } = await searchParams
  const [initialJobs, siteSettings] = await Promise.all([
    getJobPositions(),
    getSiteSettings(),
  ])

  return (
    <div className="page-wrapper bg-white">
      <div className="container-custom">
        <CorporateClient initialTab={tab || 'about'} initialJobs={initialJobs} siteSettings={siteSettings} />
      </div>
    </div>
  )
}

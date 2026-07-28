import type { Metadata } from 'next'
import { ContactClient } from './ContactClient'
import { getSiteSettings } from '@/lib/payload'

export const metadata: Metadata = {
  title: 'İletişim & Adres — İlhan Su Depoları',
  description:
    'Ankara Etimesgut adresimiz, telefon: 0312 543 1358, WhatsApp sipariş hattı ve hızlı iletişim formu.',
}

export default async function ContactPage() {
  const siteSettings = await getSiteSettings()

  return (
    <div className="page-wrapper bg-slate-50">
      <div className="container-custom">
        <ContactClient siteSettings={siteSettings} />
      </div>
    </div>
  )
}

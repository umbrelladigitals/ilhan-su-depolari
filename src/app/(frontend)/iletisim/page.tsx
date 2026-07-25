import type { Metadata } from 'next'
import { ContactClient } from './ContactClient'

export const metadata: Metadata = {
  title: 'İletişim & Adres — İlhan Su Depoları',
  description:
    'Ankara Etimesgut adresimiz, telefon: 0312 543 1358, WhatsApp sipariş hattı ve hızlı iletişim formu.',
}

export default function ContactPage() {
  return (
    <div className="page-wrapper bg-slate-50">
      <div className="container-custom">
        <ContactClient />
      </div>
    </div>
  )
}

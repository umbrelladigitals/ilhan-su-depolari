import type { Metadata } from 'next'
import '@/index.css'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { MessageSquare, Phone } from 'lucide-react'
import { getSiteSettings } from '@/lib/payload'
import { getWhatsAppUrl } from '@/lib/whatsapp'

export const metadata: Metadata = {
  title: {
    default: 'İlhan Su Depoları — Polietilen & Paslanmaz Modüler Su Depoları',
    template: '%s | İlhan Su Depoları',
  },
  description: 'Ankara Etimesgut fabrikamızdan polietilen dikey, yatay su depoları, 304/316 paslanmaz modüler su depoları ve yüksek irtifa foseptik/hidrofor sistemleri.',
  keywords: [
    'su deposu',
    'ankara su deposu',
    'polietilen su deposu',
    'paslanmaz su deposu',
    'modüler su deposu',
    'etimesgut su deposu',
    'dikey su deposu',
    'yatay su deposu',
  ],
  authors: [{ name: 'İlhan Su Depoları' }],
  creator: 'İlhan Su Depoları',
  publisher: 'İlhan Su Depoları',
  metadataBase: new URL('https://sudeposu.dexsoft.com.tr'),
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://sudeposu.dexsoft.com.tr',
    siteName: 'İlhan Su Depoları',
    title: 'İlhan Su Depoları — Polietilen & Paslanmaz Modüler Su Depoları',
    description: 'Ankara Etimesgut imalatçısından gıda tüzüğüne onaylı su depoları ve hidrofor çözümleri.',
    images: [{ url: '/images/hero_bg.jpg', width: 1200, height: 630, alt: 'İlhan Su Depoları Fabrika' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'İlhan Su Depoları — Polietilen & Paslanmaz Modüler Su Depoları',
    description: 'Ankara Etimesgut imalatçısından gıda tüzüğüne onaylı su depoları ve hidrofor çözümleri.',
    images: ['/images/hero_bg.jpg'],
  },
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const siteSettings = await getSiteSettings()
  const phoneDisplay = (siteSettings as any)?.phone || '0312 543 1358'
  const addressDisplay = (siteSettings as any)?.address || 'Atakent Mahallesi 1471 Sokak no 1/1 Etimesgut Ankara'

  // Organization & LocalBusiness JSON-LD Schema
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'İlhan Su Depoları',
    image: 'https://sudeposu.dexsoft.com.tr/images/light_logo.png',
    '@id': 'https://sudeposu.dexsoft.com.tr',
    url: 'https://sudeposu.dexsoft.com.tr',
    telephone: phoneDisplay,
    priceRange: '₺₺',
    address: {
      '@type': 'PostalAddress',
      streetAddress: addressDisplay,
      addressLocality: 'Etimesgut',
      addressRegion: 'Ankara',
      postalCode: '06790',
      addressCountry: 'TR',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '18:00',
    },
    sameAs: [
      'https://facebook.com/ilhansudepolari',
      'https://instagram.com/ilhansudepolari',
    ],
  }

  return (
    <html lang="tr" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-slate-50 text-slate-900 flex flex-col justify-between selection:bg-sky-500 selection:text-white" suppressHydrationWarning>
        <Navbar siteSettings={siteSettings} />
        <main className="flex-grow">{children}</main>
        <Footer siteSettings={siteSettings} />

        {/* Floating Sticky Action Buttons (Phone + WhatsApp) */}
        <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 items-center">
          <a
            href={`tel:${phoneDisplay.replace(/\s+/g, '')}`}
            className="floating-action-btn w-13 h-13 rounded-full bg-sky-600 hover:bg-sky-500 text-white shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center border border-sky-400/40 group"
            title={`${phoneDisplay} — Telefon ile Ara`}
          >
            <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
          </a>

          <a
            href={getWhatsAppUrl((siteSettings as any)?.whatsapp, 'Merhaba, İlhan Su Depoları ürünleri hakkında bilgi ve fiyat almak istiyorum.')}
            target="_blank"
            rel="noreferrer"
            className="floating-action-btn whatsapp-pulse w-13 h-13 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center border border-emerald-400/40 relative group"
            title="WhatsApp Sipariş & Teklif Hattı"
          >
            <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-white"></span>
            </span>
            <MessageSquare className="w-5 h-5 fill-current group-hover:scale-110 transition-transform" />
          </a>
        </div>
      </body>
    </html>
  )
}

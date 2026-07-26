import type { Metadata } from 'next'
import '@/index.css'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { MessageSquare, Phone } from 'lucide-react'
import { getSiteSettings } from '@/lib/payload'

export const metadata: Metadata = {
  title: 'İlhan Su Depoları — Polietilen & Paslanmaz Modüler Su Depoları',
  description:
    'Ankara merkezli İlhan Su Depoları; dikey/yatay polietilen su depoları, paslanmaz modüler depolar, endüstriyel santrifüj pompalar ve imalat.',
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const siteSettings = await getSiteSettings()
  const whatsappNumber = (siteSettings as any)?.whatsapp || '903125431358'
  const phoneDisplay = (siteSettings as any)?.phone || '0312 543 1358'

  return (
    <html lang="tr" suppressHydrationWarning>
      <body className="min-h-screen bg-slate-50 text-slate-900 flex flex-col justify-between selection:bg-sky-500 selection:text-white" suppressHydrationWarning>
        <Navbar siteSettings={siteSettings} />
        <main className="flex-grow">{children}</main>
        <Footer siteSettings={siteSettings} />

        {/* Floating Sticky Action Buttons (Phone + WhatsApp) */}
        <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 items-center">
          {/* Direct Phone Call Floating Icon Button */}
          <a
            href={`tel:${phoneDisplay.replace(/\s+/g, '')}`}
            className="floating-action-btn w-13 h-13 rounded-full bg-sky-600 hover:bg-sky-500 text-white shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center border border-sky-400/40 group"
            title={`${phoneDisplay} — Telefon ile Ara`}
          >
            <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
          </a>

          {/* WhatsApp Floating Icon Button */}
          <a
            href={`https://wa.me/${whatsappNumber}?text=Merhaba,%20İlhan%20Su%20Depoları%20ürünleri%20hakkında%20bilgi%20ve%20fiyat%20almak%20istiyorum.`}
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

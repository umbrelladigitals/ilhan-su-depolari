'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Logo } from './Logo'
import { MapPin, Phone, MessageSquare, ChevronRight, Clock, ShieldCheck } from 'lucide-react'
import { getWhatsAppUrl } from '../lib/whatsapp'

interface FooterProps {
  siteSettings?: any
}

export const Footer: React.FC<FooterProps> = ({ siteSettings }) => {
  const pathname = usePathname()

  if (pathname?.startsWith('/admin')) {
    return null
  }

  const whatsappNumber = siteSettings?.whatsapp
  const phoneDisplay = siteSettings?.phone || '0312 514 06 19'
  const factoryPhoneDisplay = siteSettings?.factoryPhone || '0312 511 07 19'
  const address = siteSettings?.address || 'Atakent Mahallesi 1471 Sokak no 1/1 Etimesgut Ankara'
  const workingHours = siteSettings?.workingHours || 'Pazartesi - Cumartesi 09:00 - 18:00 Pazar: Kapalı'
  const footerText = siteSettings?.footerText || `© ${new Date().getFullYear()} İlhan Su Depoları. Tüm hakları saklıdır.`

  return (
    <footer className="bg-slate-100 text-slate-700 pt-14 pb-8 border-t border-slate-200/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-slate-200">
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-4 space-y-3">
            <Logo siteSettings={siteSettings} variant="light" imageClassName="h-10 sm:h-12 w-auto object-contain" />

            <p className="text-xs text-slate-600 leading-relaxed">
              {siteSettings?.aboutDescription || 'İlhan Su Depoları; dikey ve yatay polietilen plastik su depoları çözümlerinde güvenin adresidir.'}
            </p>

            <div className="pt-1 flex flex-wrap items-center gap-2 text-xs text-slate-600 font-semibold">
              <span className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-sky-800 shadow-sm">T.C. Sağlık Bakanlığı Onaylı</span>
              <span className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-sky-800 shadow-sm">ISO 9001:2015</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider">Hızlı Sayfa Menüsü</h4>
            <ul className="space-y-2 text-xs font-semibold">
              <li>
                <Link href="/" className="hover:text-sky-600 transition-colors flex items-center gap-1.5 text-slate-700">
                  <ChevronRight className="w-3.5 h-3.5 text-sky-600" />
                  <span>{siteSettings?.navHomeText || 'Ana Sayfa'}</span>
                </Link>
              </li>
              <li>
                <Link href="/urunler" className="hover:text-sky-600 transition-colors flex items-center gap-1.5 text-slate-700">
                  <ChevronRight className="w-3.5 h-3.5 text-sky-600" />
                  <span>{siteSettings?.navProductsText || 'Ürünlerimiz & Çeşitler'}</span>
                </Link>
              </li>
              <li>
                <Link href="/kurumsal?tab=about" className="hover:text-sky-600 transition-colors flex items-center gap-1.5 text-slate-700">
                  <ChevronRight className="w-3.5 h-3.5 text-sky-600" />
                  <span>{siteSettings?.navCorporateText || 'Kurumsal'}</span>
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-sky-600 transition-colors flex items-center gap-1.5 text-slate-700">
                  <ChevronRight className="w-3.5 h-3.5 text-sky-600" />
                  <span>{siteSettings?.navBlogText || 'Blog & Bilgi Rehberi'}</span>
                </Link>
              </li>
              <li>
                <Link href="/sss" className="hover:text-sky-600 transition-colors flex items-center gap-1.5 text-slate-700">
                  <ChevronRight className="w-3.5 h-3.5 text-sky-600" />
                  <span>{siteSettings?.navFaqText || 'Sıkça Sorulan Sorular (SSS)'}</span>
                </Link>
              </li>
              <li>
                <Link href="/iletisim" className="hover:text-sky-600 transition-colors flex items-center gap-1.5 text-slate-700">
                  <ChevronRight className="w-3.5 h-3.5 text-sky-600" />
                  <span>{siteSettings?.navContactText || 'İletişim & Adres'}</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Product Categories */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider">Kategoriler</h4>
            <ul className="space-y-2 text-xs font-semibold">
              <li>
                <Link href="/urunler?category=vertical_tank" className="hover:text-sky-600 transition-colors text-slate-700">
                  Dikey Su Depoları
                </Link>
              </li>
              <li>
                <Link href="/urunler?category=horizontal_tank" className="hover:text-sky-600 transition-colors text-slate-700">
                  Yatay Su Depoları
                </Link>
              </li>
              <li>
                <Link href="/urunler?category=industrial_pump" className="hover:text-sky-600 transition-colors text-slate-700">
                  Endüstriyel Pompalar
                </Link>
              </li>
              <li>
                <Link href="/urunler?category=submersible_pump" className="hover:text-sky-600 transition-colors text-slate-700">
                  Dalgıç Pompalar
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Official Contact & Address */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider">Resmi İletişim</h4>

            <div className="space-y-2.5 text-xs text-slate-700 font-medium">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                <span>{address}</span>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <div>
                    <span className="text-slate-500 font-bold">Ofis: </span>
                    <a href={`tel:${phoneDisplay.replace(/\s+/g, '')}`} className="hover:underline font-extrabold text-sky-700">
                      {phoneDisplay}
                    </a>
                  </div>
                  <div>
                    <span className="text-slate-500 font-bold">Fabrika: </span>
                    <a href={`tel:${factoryPhoneDisplay.replace(/\s+/g, '')}`} className="hover:underline font-extrabold text-sky-700">
                      {factoryPhoneDisplay}
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-slate-800">{workingHours}</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 pt-1">
                <MessageSquare className="w-4 h-4 text-emerald-600 shrink-0 fill-current" />
                <a
                  href={getWhatsAppUrl(whatsappNumber, 'Merhaba, İlhan Su Depoları ürünleri hakkında bilgi ve fiyat almak istiyorum.')}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline font-extrabold text-emerald-600"
                >
                  WhatsApp Sipariş Hattı
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 font-medium">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-sky-600" />
            <span>{footerText}</span>
          </div>
          <div className="text-slate-500 text-[11px]">
            Ankara Polietilen Plastik Su Deposu İmalatı
          </div>
        </div>
      </div>
    </footer>
  )
}

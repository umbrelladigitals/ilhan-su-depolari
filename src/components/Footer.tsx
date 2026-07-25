'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Droplets, MapPin, Phone, MessageSquare, ChevronRight, Clock, ShieldCheck } from 'lucide-react'

interface FooterProps {
  siteSettings?: any
}

export const Footer: React.FC<FooterProps> = ({ siteSettings }) => {
  const pathname = usePathname()

  if (pathname?.startsWith('/admin')) {
    return null
  }

  const whatsappNumber = siteSettings?.whatsapp || '903125431358'
  const phoneDisplay = siteSettings?.phone || '0312 543 1358'
  const address = siteSettings?.address || 'Ostim OSB Mahallesi 100. Yıl Bulvarı No: 45 Yenimahalle / Ankara'
  const siteName = siteSettings?.siteName || 'İlhan Su Depoları'
  const footerText = siteSettings?.footerText || `© ${new Date().getFullYear()} İlhan Su Depoları. Tüm hakları saklıdır.`

  return (
    <footer className="bg-slate-100 text-slate-700 pt-14 pb-8 border-t border-slate-200/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-slate-200">
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-4 space-y-3">
            <Link href="/" className="flex items-center gap-3 group inline-flex">
              <div className="w-10 h-10 rounded-xl bg-sky-600 text-white flex items-center justify-center shadow-md">
                <Droplets className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-extrabold tracking-tight text-slate-900 uppercase">
                  {siteName}
                </span>
                <span className="text-[10px] text-slate-500 font-medium tracking-wider uppercase">
                  Depo & Pompa Sistemleri
                </span>
              </div>
            </Link>

            <p className="text-xs text-slate-600 leading-relaxed">
              İlhan Su Depoları; dikey ve yatay polietilen su depoları, endüstriyel tip santrifüj pompalar ve paslanmaz dalgıç pompa çözümlerinde güvenin adresidir.
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
                  <span>Ana Sayfa</span>
                </Link>
              </li>
              <li>
                <Link href="/urunler" className="hover:text-sky-600 transition-colors flex items-center gap-1.5 text-slate-700">
                  <ChevronRight className="w-3.5 h-3.5 text-sky-600" />
                  <span>Ürünlerimiz & Çeşitler</span>
                </Link>
              </li>
              <li>
                <Link href="/kurumsal?tab=about" className="hover:text-sky-600 transition-colors flex items-center gap-1.5 text-slate-700">
                  <ChevronRight className="w-3.5 h-3.5 text-sky-600" />
                  <span>Hakkımızda</span>
                </Link>
              </li>
              <li>
                <Link href="/kurumsal?tab=hr" className="hover:text-sky-600 transition-colors flex items-center gap-1.5 text-slate-700">
                  <ChevronRight className="w-3.5 h-3.5 text-sky-600" />
                  <span>İnsan Kaynakları (İK)</span>
                </Link>
              </li>
              <li>
                <Link href="/kurumsal?tab=quality" className="hover:text-sky-600 transition-colors flex items-center gap-1.5 text-slate-700">
                  <ChevronRight className="w-3.5 h-3.5 text-sky-600" />
                  <span>Kalite & Sertifikalar</span>
                </Link>
              </li>
              <li>
                <Link href="/sss" className="hover:text-sky-600 transition-colors flex items-center gap-1.5 text-slate-700">
                  <ChevronRight className="w-3.5 h-3.5 text-sky-600" />
                  <span>Sıkça Sorulan Sorular (SSS)</span>
                </Link>
              </li>
              <li>
                <Link href="/iletisim" className="hover:text-sky-600 transition-colors flex items-center gap-1.5 text-slate-700">
                  <ChevronRight className="w-3.5 h-3.5 text-sky-600" />
                  <span>İletişim & Adres</span>
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

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-sky-600 shrink-0" />
                <a href={`tel:${phoneDisplay.replace(/\s+/g, '')}`} className="hover:underline font-extrabold text-sm text-sky-700">
                  {phoneDisplay}
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-slate-800">{siteSettings?.workingHours || 'Pazartesi - Cumartesi: 08:30 - 18:30'}</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 pt-1">
                <MessageSquare className="w-4 h-4 text-emerald-600 shrink-0 fill-current" />
                <a
                  href={`https://wa.me/${whatsappNumber}?text=Merhaba,%20İlhan%20Su%20Depoları%20ürünleri%20hakkında%20bilgi%20ve%20fiyat%20almak%20istiyorum.`}
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
            Ankara Polietilen & Paslanmaz Modüler Depo İmalatı
          </div>
        </div>
      </div>
    </footer>
  )
}

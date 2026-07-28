'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { CategoryType } from '../types'
import { Logo } from './Logo'
import { getWhatsAppUrl } from '../lib/whatsapp'
import {
  Menu,
  X,
  MessageSquare,
  ChevronDown,
  ChevronRight,
  Users,
  ShieldCheck,
  Info,
  ArrowRight,
  Cylinder,
  Layers,
  Settings,
  Zap,
  PhoneCall,
} from 'lucide-react'

interface NavbarProps {
  siteSettings?: any
}

const megaMenuCategories = [
  {
    id: 'vertical_tank' as CategoryType,
    title: 'Dikey Su Depoları',
    desc: 'Polietilen monoblok yüksek hijyen depoları (500L - 20.000L)',
    icon: Cylinder,
    badge: 'En Popüler',
    iconBg: 'bg-sky-100 text-sky-700',
  },
  {
    id: 'horizontal_tank' as CategoryType,
    title: 'Yatay Su Depoları',
    desc: 'Polyester & CTP alçak tavan deposu (1.000L - 100.000L)',
    icon: Layers,
    badge: 'Yüksek Hacim',
    iconBg: 'bg-blue-100 text-blue-700',
  },
  {
    id: 'industrial_pump' as CategoryType,
    title: 'Endüstriyel Tip Pompalar',
    desc: 'Paslanmaz çelik santrifüj & hidrofor pompaları',
    icon: Settings,
    badge: 'Yeni Ürün',
    iconBg: 'bg-indigo-100 text-indigo-700',
  },
  {
    id: 'submersible_pump' as CategoryType,
    title: 'Dalgıç Pompa Sistemleri',
    desc: 'Derin kuyu sondaj & fosseptik drenaj dalgıç pompaları',
    icon: Zap,
    badge: 'Ağır Hizmet',
    iconBg: 'bg-amber-100 text-amber-700',
  },
]

export const Navbar: React.FC<NavbarProps> = ({ siteSettings }) => {
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false)
  const [mobileCorporateOpen, setMobileCorporateOpen] = useState(false)
  const [corporateDropdownOpen, setCorporateDropdownOpen] = useState(false)
  const [productsMegaMenuOpen, setProductsMegaMenuOpen] = useState(false)

  const corporateRef = useRef<HTMLDivElement>(null)
  const productsRef = useRef<HTMLDivElement>(null)

  // Dinamik Admin Panel Ayarları (Payload CMS Globals)
  const whatsappNumber = siteSettings?.whatsapp
  const phoneDisplay = siteSettings?.phone || '0312 543 1358'
  const siteName = siteSettings?.siteName || 'İlhan Su Depoları'
  const announcementText = siteSettings?.announcementBarText || `${siteName} — Etimesgut / Ankara • Türkiye Geneli Sigortalı Teslimat`

  const navHomeText = siteSettings?.navHomeText || 'Ana Sayfa'
  const navProductsText = siteSettings?.navProductsText || 'Ürünlerimiz'
  const navCorporateText = siteSettings?.navCorporateText || 'Kurumsal'
  const navBlogText = siteSettings?.navBlogText || 'Blog'
  const navFaqText = siteSettings?.navFaqText || 'SSS'
  const navContactText = siteSettings?.navContactText || 'İletişim'
  const whatsappBtnText = siteSettings?.whatsappBtnText || 'WHATSAPP TEKLİF AL'

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (corporateRef.current && !corporateRef.current.contains(event.target as Node)) {
        setCorporateDropdownOpen(false)
      }
      if (productsRef.current && !productsRef.current.contains(event.target as Node)) {
        setProductsMegaMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const closeAllMenus = () => {
    setMobileMenuOpen(false)
    setMobileProductsOpen(false)
    setMobileCorporateOpen(false)
    setCorporateDropdownOpen(false)
    setProductsMegaMenuOpen(false)
  }

  const isActive = (href: string, exact?: boolean) => {
    if (exact) return pathname === href
    return pathname?.startsWith(href)
  }

  if (pathname?.startsWith('/admin')) {
    return null
  }

  return (
    <>
      {/* ─── 1. Top Announcement Bar (Üst Duyuru Bandı) ─── */}
      <div suppressHydrationWarning className="bg-slate-900 text-white text-xs py-2 px-4 relative z-50">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-semibold text-slate-200">
              {announcementText}
            </span>
          </div>
          <a
            href={getWhatsAppUrl(whatsappNumber, 'Merhaba, İlhan Su Depoları ürünleri hakkında bilgi ve fiyat almak istiyorum.')}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-emerald-400 font-bold hover:underline"
          >
            <MessageSquare className="w-3.5 h-3.5 fill-current" />
            <span>İletişim & WhatsApp: {phoneDisplay}</span>
          </a>
        </div>
      </div>

      {/* ─── 2. Floating Island Header ─── */}
      <header
        suppressHydrationWarning
        className={`fixed left-0 right-0 z-50 pointer-events-none transition-all duration-300 ${
          mounted && scrolled ? 'top-3' : 'top-10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6">
          <nav suppressHydrationWarning className="glass-header-light pointer-events-auto rounded-2xl px-4 sm:px-6 py-3 flex items-center justify-between shadow-xl border border-slate-200/90 bg-white/95 backdrop-blur-md">
            {/* Logo */}
            <Logo siteSettings={siteSettings} variant="light" onClick={closeAllMenus} imageClassName="h-9 sm:h-11 w-auto object-contain" />

            {/* Desktop & Tablet Navigation Links (md:flex ile ekran genişliğinde her zaman görünür) */}
            <div className="hidden md:flex items-center gap-1 bg-slate-100/90 p-1.5 rounded-xl border border-slate-200">
              {/* Ana Sayfa */}
              <Link
                href="/"
                onClick={closeAllMenus}
                className={`px-3 lg:px-4 py-1.5 rounded-lg text-xs lg:text-sm font-semibold transition-all ${
                  isActive('/', true)
                    ? 'bg-white text-sky-700 shadow-sm font-extrabold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                }`}
              >
                {navHomeText}
              </Link>

              {/* Ürünlerimiz & MegaMenu */}
              <div
                className="relative group/products flex items-center py-1"
                ref={productsRef}
                onMouseEnter={() => setProductsMegaMenuOpen(true)}
                onMouseLeave={() => setProductsMegaMenuOpen(false)}
              >
                <div className="flex items-center">
                  <Link
                    href="/urunler"
                    onClick={closeAllMenus}
                    className={`px-2.5 lg:px-3 py-1.5 rounded-l-lg text-xs lg:text-sm font-semibold transition-all cursor-pointer ${
                      isActive('/urunler') || productsMegaMenuOpen
                        ? 'bg-white text-sky-700 font-extrabold'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                    }`}
                  >
                    {navProductsText}
                  </Link>

                  <button
                    type="button"
                    onClick={() => setProductsMegaMenuOpen(!productsMegaMenuOpen)}
                    className={`px-1.5 lg:px-2 py-1.5 rounded-r-lg text-xs lg:text-sm font-semibold transition-all cursor-pointer ${
                      isActive('/urunler') || productsMegaMenuOpen
                        ? 'bg-white text-sky-700 shadow-sm'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                    }`}
                  >
                    <ChevronDown
                      className={`w-3.5 h-3.5 lg:w-4 lg:h-4 transition-transform duration-200 ${
                        productsMegaMenuOpen ? 'rotate-180 text-sky-600' : 'text-slate-400'
                      }`}
                    />
                  </button>
                </div>

                {/* MEGA MENU CONTAINER */}
                <div
                  className={`absolute top-full -left-12 pt-2 w-[680px] lg:w-[740px] z-50 transition-all duration-200 ${
                    productsMegaMenuOpen
                      ? 'opacity-100 visible translate-y-0'
                      : 'opacity-0 invisible -translate-y-1 group-hover/products:opacity-100 group-hover/products:visible group-hover/products:translate-y-0'
                  }`}
                >
                  <div className="bg-white rounded-3xl p-6 shadow-2xl border border-slate-200 grid grid-cols-12 gap-6">
                    <div className="col-span-8 space-y-3">
                      <div className="flex justify-between items-center pb-2 border-b border-slate-100">
                        <span className="text-[11px] font-bold text-sky-600 uppercase tracking-wider">
                          Ürün Kategorilerimiz
                        </span>
                        <Link
                          href="/urunler"
                          onClick={closeAllMenus}
                          className="text-[11px] font-bold text-slate-500 hover:text-sky-700 flex items-center gap-1"
                        >
                          <span>Tüm Kataloğu Gör</span>
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        {megaMenuCategories.map((cat) => {
                          const IconComponent = cat.icon
                          return (
                            <Link
                              key={cat.id}
                              href={`/urunler?category=${cat.id}`}
                              onClick={closeAllMenus}
                              className="p-3 rounded-2xl bg-slate-50 hover:bg-sky-50 border border-slate-200/80 hover:border-sky-200 cursor-pointer transition-all group/cat flex flex-col justify-between"
                            >
                              <div className="flex items-center justify-between">
                                <div className={`w-7 h-7 rounded-xl ${cat.iconBg} flex items-center justify-center`}>
                                  <IconComponent className="w-4 h-4" />
                                </div>
                                <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-sky-100 text-sky-800">
                                  {cat.badge}
                                </span>
                              </div>
                              <div className="font-bold text-xs text-slate-900 group-hover/cat:text-sky-700 mt-2">
                                {cat.title}
                              </div>
                            </Link>
                          )
                        })}
                      </div>
                    </div>

                    <div className="col-span-4 bg-gradient-to-b from-sky-900 to-slate-900 text-white rounded-2xl p-4 flex flex-col justify-between overflow-hidden relative group/card">
                      <div className="relative z-10 space-y-1">
                        <span className="text-[9px] font-bold text-sky-300 uppercase tracking-widest px-2 py-0.5 rounded-full bg-white/10 backdrop-blur-md">
                          Fabrika Üretimi
                        </span>
                        <h4 className="text-xs font-bold text-white leading-snug">Gıda Sınıfı Polietilen</h4>
                      </div>

                      <div className="relative my-2 rounded-xl overflow-hidden aspect-[4/3] border border-white/20">
                        <img
                          src="/images/hero_bg.jpg"
                          alt="İlhan Su Depoları"
                          className="w-full h-full object-cover group-hover/card:scale-110 transition-transform duration-500"
                        />
                      </div>

                      <Link
                        href="/urunler"
                        onClick={closeAllMenus}
                        className="relative z-10 w-full py-2 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-bold text-xs flex items-center justify-center gap-1 shadow-sm transition-colors"
                      >
                        <span>İncele</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Kurumsal */}
              <div
                className="relative group/corporate flex items-center py-1"
                ref={corporateRef}
                onMouseEnter={() => setCorporateDropdownOpen(true)}
                onMouseLeave={() => setCorporateDropdownOpen(false)}
              >
                <div className="flex items-center">
                  <Link
                    href="/kurumsal"
                    onClick={closeAllMenus}
                    className={`px-2.5 lg:px-3 py-1.5 rounded-l-lg text-xs lg:text-sm font-semibold transition-all cursor-pointer ${
                      isActive('/kurumsal') || corporateDropdownOpen
                        ? 'bg-white text-sky-700 font-extrabold'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                    }`}
                  >
                    {navCorporateText}
                  </Link>

                  <button
                    type="button"
                    onClick={() => setCorporateDropdownOpen(!corporateDropdownOpen)}
                    className={`px-1.5 lg:px-2 py-1.5 rounded-r-lg text-xs lg:text-sm font-semibold transition-all cursor-pointer ${
                      isActive('/kurumsal') || corporateDropdownOpen
                        ? 'bg-white text-sky-700 shadow-sm'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                    }`}
                  >
                    <ChevronDown
                      className={`w-3.5 h-3.5 lg:w-4 lg:h-4 transition-transform duration-200 ${
                        corporateDropdownOpen ? 'rotate-180 text-sky-600' : 'text-slate-400'
                      }`}
                    />
                  </button>
                </div>

                <div
                  className={`absolute top-full left-0 pt-2 w-56 z-50 transition-all duration-200 ${
                    corporateDropdownOpen
                      ? 'opacity-100 visible translate-y-0'
                      : 'opacity-0 invisible -translate-y-1 group-hover/corporate:opacity-100 group-hover/corporate:visible group-hover/corporate:translate-y-0'
                  }`}
                >
                  <div className="bg-white rounded-2xl p-2 shadow-xl border border-slate-200 space-y-1">
                    <Link
                      href="/kurumsal?tab=about"
                      onClick={closeAllMenus}
                      className="w-full p-2 rounded-xl text-xs text-left font-semibold flex items-center gap-2 transition-colors text-slate-700 hover:bg-sky-50 hover:text-sky-700 block"
                    >
                      <Info className="w-4 h-4 text-sky-600 shrink-0" />
                      <div>
                        <div className="font-bold text-slate-900">Hakkımızda</div>
                      </div>
                    </Link>

                    <Link
                      href="/kurumsal?tab=hr"
                      onClick={closeAllMenus}
                      className="w-full p-2 rounded-xl text-xs text-left font-semibold flex items-center gap-2 transition-colors text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 block"
                    >
                      <Users className="w-4 h-4 text-emerald-600 shrink-0" />
                      <div>
                        <div className="font-bold text-slate-900">İnsan Kaynakları</div>
                      </div>
                    </Link>

                    <Link
                      href="/kurumsal?tab=quality"
                      onClick={closeAllMenus}
                      className="w-full p-2 rounded-xl text-xs text-left font-semibold flex items-center gap-2 transition-colors text-slate-700 hover:bg-purple-50 hover:text-purple-700 block"
                    >
                      <ShieldCheck className="w-4 h-4 text-purple-600 shrink-0" />
                      <div>
                        <div className="font-bold text-slate-900">Kalite Belgelerimiz</div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Blog */}
              <Link
                href="/blog"
                onClick={closeAllMenus}
                className={`px-3 lg:px-4 py-1.5 rounded-lg text-xs lg:text-sm font-semibold transition-all ${
                  isActive('/blog')
                    ? 'bg-white text-sky-700 shadow-sm font-extrabold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                }`}
              >
                {navBlogText}
              </Link>

              {/* SSS */}
              <Link
                href="/sss"
                onClick={closeAllMenus}
                className={`px-3 lg:px-4 py-1.5 rounded-lg text-xs lg:text-sm font-semibold transition-all ${
                  isActive('/sss', true)
                    ? 'bg-white text-sky-700 shadow-sm font-extrabold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                }`}
              >
                {navFaqText}
              </Link>

              {/* İletişim */}
              <Link
                href="/iletisim"
                onClick={closeAllMenus}
                className={`px-3 lg:px-4 py-1.5 rounded-lg text-xs lg:text-sm font-semibold transition-all ${
                  isActive('/iletisim', true)
                    ? 'bg-white text-sky-700 shadow-sm font-extrabold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                }`}
              >
                {navContactText}
              </Link>
            </div>

            {/* Right Action Buttons */}
            <div className="hidden sm:flex items-center gap-2">
              <a
                href={`tel:${phoneDisplay.replace(/\s+/g, '')}`}
                className="px-3 py-2 rounded-xl text-xs font-bold text-slate-700 hover:bg-slate-100 border border-slate-200 transition-all flex items-center gap-1.5 shrink-0"
              >
                <PhoneCall className="w-3.5 h-3.5 text-sky-600" />
                <span>{phoneDisplay}</span>
              </a>

              <a
                href={getWhatsAppUrl(whatsappNumber, 'Merhaba, İlhan Su Depoları ürünleri hakkında teklif almak istiyorum.')}
                target="_blank"
                rel="noreferrer"
                className="btn-emerald-whatsapp px-3.5 py-2 rounded-xl text-xs font-extrabold flex items-center gap-1.5 shadow-sm shrink-0"
              >
                <MessageSquare className="w-3.5 h-3.5 fill-current" />
                <span>{whatsappBtnText}</span>
              </a>
            </div>

            {/* Mobile / Small Screen Menu Toggle Button */}
            <div className="flex md:hidden items-center gap-2">
              <a
                href={getWhatsAppUrl(whatsappNumber, 'Merhaba, İlhan Su Depoları hakkında teklif almak istiyorum.')}
                target="_blank"
                rel="noreferrer"
                className="sm:hidden px-2.5 py-1.5 rounded-xl bg-emerald-600 text-white text-xs font-extrabold flex items-center gap-1 shadow-sm"
              >
                <MessageSquare className="w-3.5 h-3.5 fill-current" />
                <span>Teklif</span>
              </a>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Mobil Menü Aç/Kapat"
                className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </nav>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden max-w-7xl mx-auto px-4 mt-2 animate-slideDown pointer-events-auto">
            <div className="bg-white rounded-2xl p-4 shadow-2xl border border-slate-200 space-y-2">
              <Link
                href="/"
                onClick={closeAllMenus}
                className={`w-full p-3 rounded-xl text-sm font-semibold flex justify-between items-center ${
                  isActive('/', true) ? 'bg-sky-50 text-sky-700 font-extrabold' : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <span>{navHomeText}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </Link>

              <div className="border-t border-b border-slate-100 py-2 space-y-1">
                <button
                  type="button"
                  onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                  className="w-full p-2.5 rounded-xl text-sm font-semibold text-slate-800 hover:bg-sky-50 flex items-center justify-between cursor-pointer"
                >
                  <span className="text-sky-700 font-extrabold">{navProductsText} & Kategoriler</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${
                      mobileProductsOpen ? 'rotate-180 text-sky-600' : ''
                    }`}
                  />
                </button>

                {mobileProductsOpen && (
                  <div className="pl-3 space-y-1 border-l-2 border-sky-200 ml-3 my-1 animate-fadeIn">
                    <Link
                      href="/urunler"
                      onClick={closeAllMenus}
                      className="w-full p-2 rounded-lg text-xs font-bold text-sky-600 hover:bg-sky-50 flex items-center justify-between"
                    >
                      <span>— Tüm Ürün Kataloğu</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    {megaMenuCategories.map((cat) => {
                      const IconComp = cat.icon
                      return (
                        <Link
                          key={cat.id}
                          href={`/urunler?category=${cat.id}`}
                          onClick={closeAllMenus}
                          className="w-full p-2 rounded-lg text-xs font-semibold text-slate-700 hover:bg-sky-50 flex items-center justify-between"
                        >
                          <div className="flex items-center gap-2">
                            <IconComp className="w-4 h-4 text-sky-600" />
                            <span>{cat.title}</span>
                          </div>
                          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                        </Link>
                      )
                    })}
                  </div>
                )}
              </div>

              <div className="border-b border-slate-100 pb-2 space-y-1">
                <button
                  type="button"
                  onClick={() => setMobileCorporateOpen(!mobileCorporateOpen)}
                  className="w-full p-2.5 rounded-xl text-sm font-semibold text-slate-800 hover:bg-sky-50 flex items-center justify-between cursor-pointer"
                >
                  <span className="text-slate-800 font-extrabold">{navCorporateText}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${
                      mobileCorporateOpen ? 'rotate-180 text-sky-600' : ''
                    }`}
                  />
                </button>

                {mobileCorporateOpen && (
                  <div className="pl-3 space-y-1 border-l-2 border-slate-200 ml-3 my-1 animate-fadeIn">
                    <Link
                      href="/kurumsal?tab=about"
                      onClick={closeAllMenus}
                      className="w-full p-2 rounded-lg text-xs font-semibold text-slate-700 hover:bg-sky-50 flex items-center justify-between"
                    >
                      <span>— Hakkımızda</span>
                      <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                    </Link>

                    <Link
                      href="/kurumsal?tab=hr"
                      onClick={closeAllMenus}
                      className="w-full p-2 rounded-lg text-xs font-semibold text-slate-700 hover:bg-sky-50 flex items-center justify-between"
                    >
                      <span>— İnsan Kaynakları</span>
                      <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                    </Link>

                    <Link
                      href="/kurumsal?tab=quality"
                      onClick={closeAllMenus}
                      className="w-full p-2 rounded-lg text-xs font-semibold text-slate-700 hover:bg-sky-50 flex items-center justify-between"
                    >
                      <span>— Kalite Belgeleri</span>
                      <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/blog"
                onClick={closeAllMenus}
                className={`w-full p-3 rounded-xl text-sm font-semibold flex justify-between items-center ${
                  isActive('/blog') ? 'bg-sky-50 text-sky-700 font-extrabold' : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <span>{navBlogText} & Rehberler</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </Link>

              <Link
                href="/sss"
                onClick={closeAllMenus}
                className={`w-full p-3 rounded-xl text-sm font-semibold flex justify-between items-center ${
                  isActive('/sss', true) ? 'bg-sky-50 text-sky-700 font-extrabold' : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <span>{navFaqText}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </Link>

              <Link
                href="/iletisim"
                onClick={closeAllMenus}
                className={`w-full p-3 rounded-xl text-sm font-semibold flex justify-between items-center ${
                  isActive('/iletisim', true) ? 'bg-sky-50 text-sky-700 font-extrabold' : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <span>{navContactText}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </Link>

              <a
                href={getWhatsAppUrl(whatsappNumber, 'Merhaba, İlhan Su Depoları hakkında teklif almak istiyorum.')}
                target="_blank"
                rel="noreferrer"
                className="btn-emerald-whatsapp w-full mt-3 py-3 px-4 rounded-xl text-xs font-extrabold flex items-center justify-center gap-2 text-center"
              >
                <MessageSquare className="w-4 h-4 fill-current shrink-0" />
                <span>{whatsappBtnText}</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  )
}

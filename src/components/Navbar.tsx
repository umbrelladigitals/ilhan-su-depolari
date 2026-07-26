'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { CategoryType } from '../types'
import {
  Droplets,
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
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false)
  const [mobileCorporateOpen, setMobileCorporateOpen] = useState(false)
  const [corporateDropdownOpen, setCorporateDropdownOpen] = useState(false)
  const [productsMegaMenuOpen, setProductsMegaMenuOpen] = useState(false)

  const corporateRef = useRef<HTMLDivElement>(null)
  const productsRef = useRef<HTMLDivElement>(null)

  const whatsappNumber = siteSettings?.whatsapp || '903125431358'
  const phoneDisplay = siteSettings?.phone || '0312 543 1358'
  const siteName = siteSettings?.siteName || 'İlhan Su Depoları'

  useEffect(() => {
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
      {/* ─── 1. Top Announcement Bar (Vite Orijinal Üst Bar) ─── */}
      <div className="bg-slate-900 text-white text-xs py-2 px-4 relative z-50">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-semibold text-slate-200">
              {siteName} — Etimesgut / Ankara • Türkiye Geneli Sigortalı Teslimat
            </span>
          </div>
          <a
            href={`https://wa.me/${whatsappNumber}?text=Merhaba,%20İlhan%20Su%20Depoları%20ürünleri%20hakkında%20bilgi%20ve%20fiyat%20almak%20istiyorum.`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-emerald-400 font-bold hover:underline"
          >
            <MessageSquare className="w-3.5 h-3.5 fill-current" />
            <span>İletişim & WhatsApp: {phoneDisplay}</span>
          </a>
        </div>
      </div>

      {/* ─── 2. Floating Island Header (Vite Orijinal Yüzen Ada Header) ─── */}
      <header
        className={`fixed left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? 'top-3' : 'top-10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <nav className="glass-header-light rounded-2xl px-5 py-3.5 flex items-center justify-between shadow-xl border border-slate-200/90">
            {/* Logo */}
            <Link href="/" onClick={closeAllMenus} className="flex items-center gap-3 cursor-pointer group">
              <div className="w-10 h-10 rounded-xl bg-sky-600 text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                <Droplets className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-display font-extrabold tracking-tight text-slate-900">
                  İLHAN <span className="text-sky-600">SU DEPOLARI</span>
                </span>
                <span className="text-[10px] text-slate-500 font-medium tracking-wider uppercase hidden sm:block">
                  Depo & Pompa Sistemleri
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1 bg-slate-100/80 p-1.5 rounded-xl border border-slate-200">
              {/* Ana Sayfa */}
              <Link
                href="/"
                onClick={closeAllMenus}
                className={`px-4 py-1.5 rounded-lg text-sm font-semibold transition-all ${
                  isActive('/', true)
                    ? 'bg-white text-sky-700 shadow-sm font-extrabold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                }`}
              >
                Ana Sayfa
              </Link>

              {/* Ürünlerimiz & Görsel MegaMenu */}
              <div
                className="relative group/products"
                ref={productsRef}
              >
                <button
                  type="button"
                  onClick={() => setProductsMegaMenuOpen(!productsMegaMenuOpen)}
                  onMouseEnter={() => setProductsMegaMenuOpen(true)}
                  className={`px-4 py-1.5 rounded-lg text-sm font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                    isActive('/urunler') || productsMegaMenuOpen
                      ? 'bg-white text-sky-700 shadow-sm font-extrabold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                  }`}
                >
                  <Link href="/urunler" onClick={(e) => e.stopPropagation()}>
                    <span>Ürünlerimiz</span>
                  </Link>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      productsMegaMenuOpen ? 'rotate-180 text-sky-600' : 'text-slate-400'
                    }`}
                  />
                </button>

                {/* VISUAL MEGA MENU CONTAINER (Vite Orijinal 2 Kolonlu Kartlı Yapı) */}
                {productsMegaMenuOpen && (
                  <div
                    onMouseLeave={() => setProductsMegaMenuOpen(false)}
                    className="absolute top-full -left-12 mt-2 w-[740px] bg-white rounded-3xl p-6 shadow-2xl border border-slate-200 animate-fadeIn grid grid-cols-12 gap-6 z-50"
                  >
                    {/* Left Column (8 cols): Category Grid */}
                    <div className="col-span-8 space-y-3">
                      <div className="flex justify-between items-center pb-2 border-b border-slate-100">
                        <span className="text-[11px] font-bold text-sky-600 uppercase tracking-wider">
                          Ürün & Pompa Kategorileri
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
                              className="p-3.5 rounded-2xl bg-slate-50 hover:bg-sky-50 border border-slate-200/80 hover:border-sky-200 cursor-pointer transition-all group/cat flex flex-col justify-between"
                            >
                              <div className="flex items-center justify-between">
                                <div className={`w-8 h-8 rounded-xl ${cat.iconBg} flex items-center justify-center`}>
                                  <IconComponent className="w-4 h-4" />
                                </div>
                                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-sky-100 text-sky-800">
                                  {cat.badge}
                                </span>
                              </div>
                              <div className="font-bold text-xs text-slate-900 group-hover/cat:text-sky-700 mt-2.5">
                                {cat.title}
                              </div>
                              <div className="text-[10px] text-slate-500 line-clamp-1 mt-0.5">
                                {cat.desc}
                              </div>
                            </Link>
                          )
                        })}
                      </div>
                    </div>

                    {/* Right Column (4 cols): Visual Featured Card */}
                    <div className="col-span-4 bg-gradient-to-b from-sky-900 to-slate-900 text-white rounded-2xl p-4 flex flex-col justify-between overflow-hidden relative group/card">
                      <div className="relative z-10 space-y-1.5">
                        <span className="text-[10px] font-bold text-sky-300 uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-white/10 backdrop-blur-md">
                          Görsel Kataloğumuz
                        </span>
                        <h4 className="text-xs font-bold text-white leading-snug">Yüksek Mukavemet & Basınç Gücü</h4>
                        <p className="text-[10px] text-slate-300">Gıda tipi depolar ve ağır hizmet paslanmaz pompalar.</p>
                      </div>

                      <div className="relative my-3 rounded-xl overflow-hidden aspect-[4/3] border border-white/20">
                        <img
                          src="/images/industrial_pump.jpg"
                          alt="Endüstriyel Pompa"
                          onError={(e) => {
                            ;(e.target as HTMLImageElement).src = '/images/hero_bg.jpg'
                          }}
                          className="w-full h-full object-cover group-hover/card:scale-110 transition-transform duration-500"
                        />
                      </div>

                      <Link
                        href="/urunler"
                        onClick={closeAllMenus}
                        className="relative z-10 w-full py-2 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm transition-colors"
                      >
                        <span>Tümünü İncele</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Kurumsal Dropdown */}
              <div className="relative" ref={corporateRef}>
                <button
                  type="button"
                  onClick={() => setCorporateDropdownOpen(!corporateDropdownOpen)}
                  className={`px-4 py-1.5 rounded-lg text-sm font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                    isActive('/kurumsal') || corporateDropdownOpen
                      ? 'bg-white text-sky-700 shadow-sm font-extrabold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                  }`}
                >
                  <Link href="/kurumsal" onClick={(e) => e.stopPropagation()}>
                    <span>Kurumsal</span>
                  </Link>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      corporateDropdownOpen ? 'rotate-180 text-sky-600' : 'text-slate-400'
                    }`}
                  />
                </button>

                {corporateDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-2xl p-2 shadow-xl border border-slate-200 animate-fadeIn space-y-1 z-50">
                    <Link
                      href="/kurumsal?tab=about"
                      onClick={closeAllMenus}
                      className="w-full p-2.5 rounded-xl text-xs text-left font-semibold flex items-center gap-2.5 transition-colors text-slate-700 hover:bg-sky-50 hover:text-sky-700"
                    >
                      <div className="w-7 h-7 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center shrink-0">
                        <Info className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-bold text-slate-900">Hakkımızda</div>
                        <div className="text-[10px] text-slate-400 font-normal">25 Yıllık tecrübemiz & vizyon</div>
                      </div>
                    </Link>

                    <Link
                      href="/kurumsal?tab=hr"
                      onClick={closeAllMenus}
                      className="w-full p-2.5 rounded-xl text-xs text-left font-semibold flex items-center gap-2.5 transition-colors text-slate-700 hover:bg-emerald-50 hover:text-emerald-700"
                    >
                      <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                        <Users className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-bold text-slate-900">İnsan Kaynakları</div>
                        <div className="text-[10px] text-slate-400 font-normal">Açık pozisyonlar & başvuru</div>
                      </div>
                    </Link>

                    <Link
                      href="/kurumsal?tab=quality"
                      onClick={closeAllMenus}
                      className="w-full p-2.5 rounded-xl text-xs text-left font-semibold flex items-center gap-2.5 transition-colors text-slate-700 hover:bg-purple-50 hover:text-purple-700"
                    >
                      <div className="w-7 h-7 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center shrink-0">
                        <ShieldCheck className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-bold text-slate-900">Kalite Belgelerimiz</div>
                        <div className="text-[10px] text-slate-400 font-normal">ISO 9001 & Gıda Onayları</div>
                      </div>
                    </Link>
                  </div>
                )}
              </div>

              {/* SSS */}
              <Link
                href="/sss"
                onClick={closeAllMenus}
                className={`px-4 py-1.5 rounded-lg text-sm font-semibold transition-all ${
                  isActive('/sss', true)
                    ? 'bg-white text-sky-700 shadow-sm font-extrabold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                }`}
              >
                SSS
              </Link>

              {/* İletişim */}
              <Link
                href="/iletisim"
                onClick={closeAllMenus}
                className={`px-4 py-1.5 rounded-lg text-sm font-semibold transition-all ${
                  isActive('/iletisim', true)
                    ? 'bg-white text-sky-700 shadow-sm font-extrabold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                }`}
              >
                İletişim
              </Link>
            </div>

            {/* Right Action Buttons */}
            <div className="hidden sm:flex items-center gap-2">
              <a
                href={`tel:${phoneDisplay.replace(/\s+/g, '')}`}
                className="px-3.5 py-2 rounded-xl text-xs font-bold text-slate-700 hover:bg-slate-100 border border-slate-200 transition-all flex items-center gap-1.5"
              >
                <PhoneCall className="w-3.5 h-3.5 text-sky-600" />
                <span className="hidden md:inline">{phoneDisplay}</span>
              </a>

              <a
                href={`https://wa.me/${whatsappNumber}?text=Merhaba,%20İlhan%20Su%20Depoları%20ürünleri%20hakkında%20teklif%20almak%20istiyorum.`}
                target="_blank"
                rel="noreferrer"
                className="btn-emerald-whatsapp px-4 py-2 rounded-xl text-xs font-extrabold flex items-center gap-1.5 shadow-sm"
              >
                <MessageSquare className="w-3.5 h-3.5 fill-current" />
                <span className="hidden md:inline">WHATSAPP TEKLİF AL</span>
                <span className="md:hidden">Teklif Al</span>
              </a>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="flex lg:hidden items-center gap-2">
              <a
                href={`https://wa.me/${whatsappNumber}?text=Merhaba,%20İlhan%20Su%20Depoları%20hakkında%20teklif%20almak%20istiyorum.`}
                target="_blank"
                rel="noreferrer"
                className="sm:hidden px-3 py-1.5 rounded-xl bg-emerald-600 text-white text-xs font-extrabold flex items-center gap-1 shadow-sm"
              >
                <MessageSquare className="w-3.5 h-3.5 fill-current" />
                <span>Teklif Al</span>
              </a>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Mobil Menü Aç/Kapat"
                className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </nav>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden max-w-7xl mx-auto px-4 mt-2 animate-slideDown">
            <div className="bg-white rounded-2xl p-4 shadow-2xl border border-slate-200 space-y-2">
              <Link
                href="/"
                onClick={closeAllMenus}
                className={`w-full p-3 rounded-xl text-sm font-semibold flex justify-between items-center ${
                  isActive('/', true) ? 'bg-sky-50 text-sky-700 font-extrabold' : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <span>Ana Sayfa</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </Link>

              <div className="border-t border-b border-slate-100 py-2 space-y-1">
                <button
                  type="button"
                  onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                  className="w-full p-2.5 rounded-xl text-sm font-semibold text-slate-800 hover:bg-sky-50 flex items-center justify-between"
                >
                  <span className="text-sky-700 font-extrabold">Ürünlerimiz & Kategoriler</span>
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
                  className="w-full p-2.5 rounded-xl text-sm font-semibold text-slate-800 hover:bg-sky-50 flex items-center justify-between"
                >
                  <span className="text-slate-800 font-extrabold">Kurumsal</span>
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
                href="/sss"
                onClick={closeAllMenus}
                className={`w-full p-3 rounded-xl text-sm font-semibold flex justify-between items-center ${
                  isActive('/sss', true) ? 'bg-sky-50 text-sky-700 font-extrabold' : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <span>Sıkça Sorulan Sorular (SSS)</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </Link>

              <Link
                href="/iletisim"
                onClick={closeAllMenus}
                className={`w-full p-3 rounded-xl text-sm font-semibold flex justify-between items-center ${
                  isActive('/iletisim', true) ? 'bg-sky-50 text-sky-700 font-extrabold' : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <span>İletişim</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </Link>

              <a
                href={`https://wa.me/${whatsappNumber}?text=Merhaba,%20İlhan%20Su%20Depoları%20hakkında%20teklif%20almak%20istiyorum.`}
                target="_blank"
                rel="noreferrer"
                className="btn-emerald-whatsapp w-full mt-3 py-3 px-4 rounded-xl text-xs font-extrabold flex items-center justify-center gap-2 text-center"
              >
                <MessageSquare className="w-4 h-4 fill-current shrink-0" />
                <span>WhatsApp Teklif Al</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  )
}

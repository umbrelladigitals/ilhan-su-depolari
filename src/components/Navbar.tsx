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
    desc: '500L - 20.000L Polietilen Depolar',
    icon: Cylinder,
    badge: 'En Popüler',
    iconBg: 'bg-sky-100 text-sky-700',
  },
  {
    id: 'horizontal_tank' as CategoryType,
    title: 'Yatay Su Depoları',
    desc: '1.000L - 100.000L Polyester Depolar',
    icon: Layers,
    badge: 'Yüksek Hacim',
    iconBg: 'bg-blue-100 text-blue-700',
  },
  {
    id: 'industrial_pump' as CategoryType,
    title: 'Endüstriyel Tip Pompalar',
    desc: 'Santrifüj & Hidrofor Pompaları',
    icon: Settings,
    badge: 'Yeni Ürün',
    iconBg: 'bg-indigo-100 text-indigo-700',
  },
  {
    id: 'submersible_pump' as CategoryType,
    title: 'Dalgıç Pompa Sistemleri',
    desc: 'Sondaj & Drenaj Pompaları',
    icon: Zap,
    badge: 'Ağır Hizmet',
    iconBg: 'bg-amber-100 text-amber-700',
  },
]

const navLinks = [
  { href: '/', label: 'Ana Sayfa', exact: true },
  { href: '/urunler', label: 'Ürünlerimiz', hasDropdown: 'products' as const },
  { href: '/kurumsal', label: 'Kurumsal', hasDropdown: 'corporate' as const },
  { href: '/sss', label: 'SSS', exact: true },
  { href: '/iletisim', label: 'İletişim', exact: true },
]

export const Navbar: React.FC<NavbarProps> = ({ siteSettings }) => {
  const pathname = usePathname()
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
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="py-3 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group" onClick={closeAllMenus}>
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-sky-700 to-sky-500 text-white flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
              <Droplets className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-black tracking-tight text-slate-900 uppercase">
                {siteName}
              </span>
              <span className="text-[9px] sm:text-[10px] text-slate-500 font-semibold tracking-wider uppercase hidden sm:block">
                Depo & Pompa Sistemleri
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              if (link.hasDropdown === 'products') {
                return (
                  <div
                    key={link.href}
                    className="relative group/products py-1"
                    ref={productsRef}
                  >
                    <button
                      type="button"
                      onClick={() => setProductsMegaMenuOpen((prev) => !prev)}
                      className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                        isActive('/urunler') || productsMegaMenuOpen
                          ? 'text-sky-700 bg-sky-50 font-extrabold'
                          : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
                      }`}
                    >
                      <Link href="/urunler" onClick={(e) => e.stopPropagation()}>
                        <span>{link.label}</span>
                      </Link>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          productsMegaMenuOpen ? 'rotate-180 text-sky-600' : 'text-slate-400 group-hover/products:rotate-180'
                        }`}
                      />
                    </button>

                    {/* Mega Menu Dropdown */}
                    <div
                      className={`absolute top-full -left-12 pt-2 w-[680px] z-50 transition-all duration-200 ${
                        productsMegaMenuOpen
                          ? 'opacity-100 visible translate-y-0'
                          : 'opacity-0 invisible -translate-y-1 group-hover/products:opacity-100 group-hover/products:visible group-hover/products:translate-y-0'
                      }`}
                    >
                      <div className="bg-white rounded-2xl p-4 shadow-2xl border border-slate-200 grid grid-cols-12 gap-4 animate-fadeIn">
                        <div className="col-span-8 space-y-2.5">
                          <div className="flex justify-between items-center pb-2 border-b border-slate-100">
                            <span className="text-[11px] font-extrabold text-sky-700 uppercase tracking-wider">
                              Ürün Kategorilerimiz
                            </span>
                            <Link
                              href="/urunler"
                              onClick={closeAllMenus}
                              className="text-[11px] font-bold text-slate-500 hover:text-sky-700 flex items-center gap-1"
                            >
                              <span>Tüm Katalog</span>
                              <ArrowRight className="w-3 h-3" />
                            </Link>
                          </div>

                          <div className="grid grid-cols-2 gap-2">
                            {megaMenuCategories.map((cat) => {
                              const IconComponent = cat.icon
                              return (
                                <Link
                                  key={cat.id}
                                  href={`/urunler?category=${cat.id}`}
                                  onClick={closeAllMenus}
                                  className="p-2.5 rounded-xl bg-slate-50 hover:bg-sky-50 border border-slate-200/80 hover:border-sky-200 cursor-pointer transition-all group/cat flex flex-col justify-between"
                                >
                                  <div className="flex items-center justify-between">
                                    <div className={`w-7 h-7 rounded-lg ${cat.iconBg} flex items-center justify-center`}>
                                      <IconComponent className="w-3.5 h-3.5" />
                                    </div>
                                    <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-sky-100 text-sky-800">
                                      {cat.badge}
                                    </span>
                                  </div>
                                  <div className="font-bold text-xs text-slate-900 group-hover/cat:text-sky-700 mt-2">
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

                        <div className="col-span-4 bg-slate-900 text-white rounded-xl p-4 flex flex-col justify-between overflow-hidden relative">
                          <div className="space-y-1">
                            <span className="text-[9px] font-extrabold text-sky-400 uppercase tracking-widest px-2 py-0.5 rounded-md bg-sky-950">
                              Fabrika Üretimi
                            </span>
                            <h4 className="text-xs font-bold text-white mt-1">İlhan Su Depoları</h4>
                            <p className="text-[10px] text-slate-300">Ankara Ostim imalatı kaliteli depolar.</p>
                          </div>

                          <Link
                            href="/urunler"
                            onClick={closeAllMenus}
                            className="w-full mt-4 py-2 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-extrabold text-xs flex items-center justify-center gap-1 shadow-sm transition-colors"
                          >
                            <span>İncele</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              }

              if (link.hasDropdown === 'corporate') {
                return (
                  <div
                    key={link.href}
                    className="relative group/corporate py-1"
                    ref={corporateRef}
                  >
                    <button
                      type="button"
                      onClick={() => setCorporateDropdownOpen((prev) => !prev)}
                      className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                        isActive('/kurumsal') || corporateDropdownOpen
                          ? 'text-sky-700 bg-sky-50 font-extrabold'
                          : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
                      }`}
                    >
                      <Link href="/kurumsal" onClick={(e) => e.stopPropagation()}>
                        <span>{link.label}</span>
                      </Link>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          corporateDropdownOpen ? 'rotate-180 text-sky-600' : 'text-slate-400 group-hover/corporate:rotate-180'
                        }`}
                      />
                    </button>

                    {/* Corporate Dropdown */}
                    <div
                      className={`absolute top-full left-0 pt-2 w-56 z-50 transition-all duration-200 ${
                        corporateDropdownOpen
                          ? 'opacity-100 visible translate-y-0'
                          : 'opacity-0 invisible -translate-y-1 group-hover/corporate:opacity-100 group-hover/corporate:visible group-hover/corporate:translate-y-0'
                      }`}
                    >
                      <div className="bg-white rounded-2xl p-2 shadow-2xl border border-slate-200 space-y-1 animate-fadeIn">
                        <Link
                          href="/kurumsal?tab=about"
                          onClick={closeAllMenus}
                          className="w-full p-2 rounded-xl text-xs text-left font-bold flex items-center gap-2 transition-colors text-slate-700 hover:bg-sky-50 hover:text-sky-700"
                        >
                          <div className="w-7 h-7 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center shrink-0">
                            <Info className="w-3.5 h-3.5" />
                          </div>
                          <div>
                            <div className="font-extrabold">Hakkımızda</div>
                            <div className="text-[10px] text-slate-400 font-normal">Fabrika & vizyon</div>
                          </div>
                        </Link>

                        <Link
                          href="/kurumsal?tab=hr"
                          onClick={closeAllMenus}
                          className="w-full p-2 rounded-xl text-xs text-left font-bold flex items-center gap-2 transition-colors text-slate-700 hover:bg-emerald-50 hover:text-emerald-700"
                        >
                          <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                            <Users className="w-3.5 h-3.5" />
                          </div>
                          <div>
                            <div className="font-extrabold">İnsan Kaynakları</div>
                            <div className="text-[10px] text-slate-400 font-normal">Açık pozisyonlar</div>
                          </div>
                        </Link>

                        <Link
                          href="/kurumsal?tab=quality"
                          onClick={closeAllMenus}
                          className="w-full p-2 rounded-xl text-xs text-left font-bold flex items-center gap-2 transition-colors text-slate-700 hover:bg-purple-50 hover:text-purple-700"
                        >
                          <div className="w-7 h-7 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center shrink-0">
                            <ShieldCheck className="w-3.5 h-3.5" />
                          </div>
                          <div>
                            <div className="font-extrabold">Kalite Belgelerimiz</div>
                            <div className="text-[10px] text-slate-400 font-normal">ISO 9001 & Belgeler</div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                )
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-all ${
                    isActive(link.href, link.exact)
                      ? 'text-sky-700 bg-sky-50 font-extrabold'
                      : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
          </div>

          {/* Desktop Actions */}
          <div className="hidden sm:flex items-center gap-2">
            <a
              href={`tel:${phoneDisplay.replace(/\s+/g, '')}`}
              className="px-3 py-1.5 rounded-xl text-xs font-bold text-slate-700 hover:bg-slate-100 border border-slate-200 transition-all flex items-center gap-1.5"
            >
              <PhoneCall className="w-3.5 h-3.5 text-sky-600" />
              <span className="hidden md:inline">{phoneDisplay}</span>
            </a>

            <a
              href={`https://wa.me/${whatsappNumber}?text=Merhaba,%20İlhan%20Su%20Depoları%20ürünleri%20hakkında%20teklif%20almak%20istiyorum.`}
              target="_blank"
              rel="noreferrer"
              className="btn-emerald-whatsapp px-3.5 py-2 text-xs font-extrabold flex items-center gap-1.5 shadow-sm"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-current" />
              <span className="hidden md:inline">WHATSAPP TEKLİF AL</span>
              <span className="md:hidden">Teklif Al</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center gap-1.5">
            <a
              href={`https://wa.me/${whatsappNumber}?text=Merhaba,%20İlhan%20Su%20Depoları%20hakkında%20teklif%20almak%20istiyorum.`}
              target="_blank"
              rel="noreferrer"
              className="sm:hidden px-2.5 py-1.5 rounded-lg bg-emerald-600 text-white text-[11px] font-extrabold flex items-center gap-1 shadow-sm"
            >
              <MessageSquare className="w-3 h-3 fill-current" />
              <span>Teklif Al</span>
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label="Mobil Menü Aç/Kapat"
              className="p-1.5 rounded-lg text-slate-800 hover:bg-slate-100 bg-slate-100/80 transition-colors border border-slate-200/80"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-3 pb-3 animate-slideDown">
          <div className="bg-white rounded-xl p-3 shadow-xl border border-slate-200 space-y-1 text-xs">
            <Link
              href="/"
              onClick={closeAllMenus}
              className={`w-full px-3 py-2 rounded-lg text-xs font-bold flex justify-between items-center ${
                pathname === '/' ? 'bg-sky-50 text-sky-700 font-extrabold' : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              <span>Ana Sayfa</span>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            </Link>

            <div className="border-t border-b border-slate-100 py-1 my-1 space-y-1">
              <button
                type="button"
                onClick={() => setMobileProductsOpen((prev) => !prev)}
                className="w-full px-3 py-1.5 rounded-lg text-xs font-bold text-slate-800 hover:bg-sky-50 flex items-center justify-between"
              >
                <span className="text-sky-700 font-extrabold">Ürünlerimiz & Kategoriler</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 text-slate-500 transition-transform duration-200 ${
                    mobileProductsOpen ? 'rotate-180 text-sky-600' : ''
                  }`}
                />
              </button>

              {mobileProductsOpen && (
                <div className="pl-2 space-y-1 border-l-2 border-sky-200 ml-3 my-1 animate-fadeIn">
                  <Link
                    href="/urunler"
                    onClick={closeAllMenus}
                    className="w-full px-3 py-1 rounded-md text-[11px] font-extrabold text-sky-600 hover:bg-sky-50 flex items-center justify-between"
                  >
                    <span>— Tüm Ürün Kataloğu</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>

                  {megaMenuCategories.map((cat) => {
                    const IconComp = cat.icon
                    return (
                      <Link
                        key={cat.id}
                        href={`/urunler?category=${cat.id}`}
                        onClick={closeAllMenus}
                        className="w-full px-3 py-1 rounded-md text-[11px] font-bold text-slate-700 hover:bg-sky-50 flex items-center justify-between"
                      >
                        <div className="flex items-center gap-2">
                          <IconComp className="w-3.5 h-3.5 text-sky-600" />
                          <span>{cat.title}</span>
                        </div>
                        <ChevronRight className="w-3 h-3 text-slate-400" />
                      </Link>
                    )
                  })}
                </div>
              )}
            </div>

            <div className="border-b border-slate-100 py-1 my-1 space-y-1">
              <button
                type="button"
                onClick={() => setMobileCorporateOpen((prev) => !prev)}
                className="w-full px-3 py-1.5 rounded-lg text-xs font-bold text-slate-800 hover:bg-sky-50 flex items-center justify-between"
              >
                <span className="text-slate-800 font-extrabold">Kurumsal</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 text-slate-500 transition-transform duration-200 ${
                    mobileCorporateOpen ? 'rotate-180 text-sky-600' : ''
                  }`}
                />
              </button>

              {mobileCorporateOpen && (
                <div className="pl-2 space-y-1 border-l-2 border-slate-200 ml-3 my-1 animate-fadeIn">
                  <Link
                    href="/kurumsal?tab=about"
                    onClick={closeAllMenus}
                    className="w-full px-3 py-1 rounded-md text-[11px] font-bold text-slate-700 hover:bg-sky-50 flex items-center justify-between"
                  >
                    <span>— Hakkımızda</span>
                    <ChevronRight className="w-3 h-3 text-slate-400" />
                  </Link>

                  <Link
                    href="/kurumsal?tab=hr"
                    onClick={closeAllMenus}
                    className="w-full px-3 py-1 rounded-md text-[11px] font-bold text-slate-700 hover:bg-sky-50 flex items-center justify-between"
                  >
                    <span>— İnsan Kaynakları</span>
                    <ChevronRight className="w-3 h-3 text-slate-400" />
                  </Link>

                  <Link
                    href="/kurumsal?tab=quality"
                    onClick={closeAllMenus}
                    className="w-full px-3 py-1 rounded-md text-[11px] font-bold text-slate-700 hover:bg-sky-50 flex items-center justify-between"
                  >
                    <span>— Kalite Belgeleri</span>
                    <ChevronRight className="w-3 h-3 text-slate-400" />
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/sss"
              onClick={closeAllMenus}
              className={`w-full px-3 py-2 rounded-lg text-xs font-bold flex justify-between items-center ${
                pathname === '/sss' ? 'bg-sky-50 text-sky-700 font-extrabold' : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              <span>Sıkça Sorulan Sorular (SSS)</span>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            </Link>

            <Link
              href="/iletisim"
              onClick={closeAllMenus}
              className={`w-full px-3 py-2 rounded-lg text-xs font-bold flex justify-between items-center ${
                pathname === '/iletisim' ? 'bg-sky-50 text-sky-700 font-extrabold' : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              <span>İletişim</span>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            </Link>

            <a
              href={`https://wa.me/${whatsappNumber}?text=Merhaba,%20İlhan%20Su%20Depoları%20hakkında%20teklif%20almak%20istiyorum.`}
              target="_blank"
              rel="noreferrer"
              className="btn-emerald-whatsapp w-full mt-2 py-2.5 px-3 text-xs font-extrabold flex items-center justify-center gap-2 text-center"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-current shrink-0" />
              <span>WhatsApp Teklif Al</span>
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

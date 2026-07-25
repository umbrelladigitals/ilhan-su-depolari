'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { MessageSquare, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'

export interface HeroSlideItem {
  id?: string
  title: string
  subtitle: string
  badgeText?: string
  bgType?: 'video' | 'image'
  bgMediaUrl?: string
  primaryButtonText?: string
  primaryButtonLink?: string
  whatsappButtonText?: string
  whatsappCustomMessage?: string
}

interface HeroSectionProps {
  slides?: HeroSlideItem[]
  siteSettings?: any
}

export const HeroSection: React.FC<HeroSectionProps> = ({ slides = [], siteSettings }) => {
  const [mounted, setMounted] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (mounted && videoRef.current) {
      videoRef.current.muted = true
      const playPromise = videoRef.current.play()
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          console.log('Autoplay prevented by browser:', err)
        })
      }
    }
  }, [mounted, currentIndex])

  useEffect(() => {
    if (slides.length <= 1) return
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length)
    }, 7000)
    return () => clearInterval(timer)
  }, [slides.length])

  // Sadeleştirilmiş Varsayılan Slayt
  const defaultSlide: HeroSlideItem = {
    title: 'Yüksek Mukavemetli Depo & Pompa Çözümleri',
    subtitle: 'Polietilen, Paslanmaz Modüler ve Polyester Su Depolarında 25 Yıllık Sanayi Tecrübesi.',
    badgeText: 'ANKARA FABRİKA TESLİMİ & ÜCRETSİZ KEŞİF',
    bgType: 'video',
    bgMediaUrl: '/videos/hero_video.mp4',
    primaryButtonText: 'Ürünleri İncele',
    primaryButtonLink: '/urunler',
    whatsappButtonText: 'WhatsApp ile Hızlı Fiyat Al',
    whatsappCustomMessage: 'Merhaba, su depoları hakkında detaylı bilgi ve fiyat teklifi almak istiyorum.',
  }

  const currentSlide = slides.length > 0 ? slides[currentIndex] : defaultSlide
  const whatsappNumber = siteSettings?.whatsapp || '903125431358'

  return (
    <section className="relative min-h-[75dvh] sm:min-h-[85dvh] w-full flex items-center justify-center pt-20 sm:pt-28 pb-10 overflow-hidden bg-slate-950">
      {/* ─── Arka Plan Katmanı (Görsel & Video Şeffaf & Belirgin) ─── */}
      <div className="absolute inset-0 z-0" suppressHydrationWarning>
        {mounted ? (
          currentSlide.bgType === 'image' ? (
            <img
              src={currentSlide.bgMediaUrl || '/images/hero_bg.jpg'}
              alt={currentSlide.title}
              className="w-full h-full object-cover object-center filter brightness-[0.9] contrast-[1.05] transition-all duration-700"
            />
          ) : (
            <video
              ref={videoRef}
              key={currentSlide.bgMediaUrl || '/videos/hero_video.mp4'}
              autoPlay
              loop
              muted
              playsInline
              poster="/images/hero_bg.jpg"
              className="w-full h-full object-cover object-center filter brightness-[0.9] contrast-[1.05]"
            >
              <source src={currentSlide.bgMediaUrl || '/videos/hero_video.mp4'} type="video/mp4" />
            </video>
          )
        ) : (
          <img
            src="/images/hero_bg.jpg"
            alt="Hero Background"
            className="w-full h-full object-cover object-center filter brightness-[0.9]"
          />
        )}
        {/* Şeffaf & Sade Gradyan Overlay (Görselin Çok Daha Fazla Gözükmesi İçin İnce Katman) */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-slate-950/30" />
      </div>

      {/* Slayt Okları */}
      {slides.length > 1 && (
        <>
          <button
            onClick={() => setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length)}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 p-2.5 sm:p-3 rounded-full bg-slate-900/60 text-white hover:bg-sky-600 transition-all backdrop-blur-md border border-white/20"
            aria-label="Önceki"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => setCurrentIndex((prev) => (prev + 1) % slides.length)}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 p-3 sm:p-3.5 rounded-full bg-slate-900/60 text-white hover:bg-sky-600 transition-all backdrop-blur-md border border-white/20"
            aria-label="Sonraki"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </>
      )}

      {/* ─── Hero Sadeleştirilmiş İçerik ─── */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        {/* Üst Rozet */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-950/70 border border-sky-400/40 text-sky-300 text-[10px] sm:text-xs font-extrabold uppercase tracking-wider backdrop-blur-md shadow-md mb-4 sm:mb-6">
          <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping" />
          <span>{currentSlide.badgeText || 'ANKARA FABRİKA TESLİMİ & ÜCRETSİZ KEŞİF'}</span>
        </div>

        {/* Sade Başlık */}
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight drop-shadow-lg max-w-4xl mx-auto mb-3 sm:mb-5">
          {currentSlide.title}
        </h1>

        {/* Kısa ve Net Alt Metin */}
        <p className="text-xs sm:text-base md:text-lg text-slate-200 font-medium leading-relaxed max-w-2xl mx-auto drop-shadow mb-6 sm:mb-8">
          {currentSlide.subtitle}
        </p>

        {/* Butonlar */}
        <div className="flex flex-row items-center justify-center gap-3 sm:gap-4 max-w-md mx-auto">
          <Link
            href={currentSlide.primaryButtonLink || '/urunler'}
            className="btn-primary-sky px-5 py-3 sm:px-7 sm:py-3.5 text-xs sm:text-sm font-extrabold flex items-center justify-center gap-2"
          >
            <span>{currentSlide.primaryButtonText || 'Ürünleri İncele'}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
              currentSlide.whatsappCustomMessage || 'Merhaba, İlhan Su Depoları hakkında bilgi ve fiyat almak istiyorum.'
            )}`}
            target="_blank"
            rel="noreferrer"
            className="btn-emerald-whatsapp whatsapp-pulse px-5 py-3 sm:px-7 sm:py-3.5 text-xs sm:text-sm font-extrabold flex items-center justify-center gap-2"
          >
            <MessageSquare className="w-4 h-4 fill-current" />
            <span>{currentSlide.whatsappButtonText || 'WhatsApp ile Hızlı Fiyat Al'}</span>
          </a>
        </div>
      </div>
    </section>
  )
}

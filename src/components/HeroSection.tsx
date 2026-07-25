'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { MessageSquare, ArrowRight, ShieldCheck, CheckCircle2, Award, Truck, ChevronLeft, ChevronRight } from 'lucide-react'

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

  // Programmatic Autoplay for Browser Compatibility (ngrok & Mobile)
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

  // Slayt sayısı 1'den fazla ise 7 saniyede bir otomatik kaydır
  useEffect(() => {
    if (slides.length <= 1) return
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length)
    }, 7000)
    return () => clearInterval(timer)
  }, [slides.length])

  // Varsayılan slayt
  const defaultSlide: HeroSlideItem = {
    title: 'Suyun Güvenli Adresi: İlhan Su Depoları',
    subtitle: 'Polietilen, Paslanmaz Modüler ve Polyester Su Depoları. Yüksek hijyen standartları, 10 yıl garanti ve WhatsApp üzerinden anında sipariş imkanı.',
    badgeText: 'Türkiye\'nin Güvenilir Depolama Teknolojisi',
    bgType: 'video',
    bgMediaUrl: '/videos/hero_video.mp4',
    primaryButtonText: 'Ürünlerimizi İnceleyin',
    primaryButtonLink: '/urunler',
    whatsappButtonText: 'WhatsApp ile Teklif Al',
    whatsappCustomMessage: 'Merhaba, su depoları hakkında fiyat teklifi ve bilgi almak istiyorum.',
  }

  const currentSlide = slides.length > 0 ? slides[currentIndex] : defaultSlide
  const whatsappNumber = siteSettings?.whatsapp || '903125431358'

  return (
    <section className="relative min-h-[85dvh] sm:min-h-[100dvh] w-full flex items-center justify-center pt-20 sm:pt-32 pb-8 sm:pb-16 overflow-hidden bg-slate-950">
      {/* Arka Plan Katmanı (Video / Görsel) */}
      <div className="absolute inset-0 z-0" suppressHydrationWarning>
        {mounted ? (
          currentSlide.bgType === 'image' ? (
            <img
              src={currentSlide.bgMediaUrl || '/images/hero_bg.jpg'}
              alt={currentSlide.title}
              className="w-full h-full object-cover object-center filter brightness-[0.75] contrast-[1.1] transition-all duration-700"
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
              className="w-full h-full object-cover object-center filter brightness-[0.75] contrast-[1.1]"
            >
              <source src={currentSlide.bgMediaUrl || '/videos/hero_video.mp4'} type="video/mp4" />
            </video>
          )
        ) : (
          <img
            src="/images/hero_bg.jpg"
            alt="Hero Loading"
            className="w-full h-full object-cover object-center filter brightness-[0.75]"
          />
        )}
        {/* Sinematik Koyu Gradyan Katmanı */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/65" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/75 to-slate-950/45" />
      </div>

      {/* Glow Orbs */}
      <div className="absolute top-1/4 left-5 w-48 sm:w-96 h-48 sm:h-96 bg-sky-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-5 right-5 w-48 sm:w-96 h-48 sm:h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Slider Kontrol Butonları */}
      {slides.length > 1 && (
        <>
          <button
            onClick={() => setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length)}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 rounded-full bg-slate-900/80 text-white hover:bg-sky-600 transition-all backdrop-blur-md border border-white/10"
            aria-label="Önceki Slayt"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
          <button
            onClick={() => setCurrentIndex((prev) => (prev + 1) % slides.length)}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 rounded-full bg-slate-900/80 text-white hover:bg-sky-600 transition-all backdrop-blur-md border border-white/10"
            aria-label="Sonraki Slayt"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </>
      )}

      {/* Hero Ana İçerik */}
      <div className="relative z-10 max-w-7xl mx-auto px-3.5 sm:px-6 w-full flex flex-col justify-between h-full min-h-[calc(85dvh-5rem)] sm:min-h-[calc(100dvh-9rem)]">
        {/* Üst Rozet */}
        <div className="flex justify-center md:justify-start pt-2 sm:pt-0">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-sky-950/90 border border-sky-400/40 text-sky-300 text-[10px] sm:text-xs font-extrabold uppercase tracking-wider backdrop-blur-md shadow-lg">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-sky-400 animate-ping" />
            <span className="truncate max-w-[280px] sm:max-w-none">
              {currentSlide.badgeText || 'Türkiye\'nin Güvenilir Depolama Teknolojisi'}
            </span>
          </div>
        </div>

        {/* Orta Başlık & Metin */}
        <div className="my-auto py-3 sm:py-8 max-w-3xl">
          <div className="space-y-3 sm:space-y-6">
            <h1 className="text-2xl sm:text-5xl lg:text-7xl font-black text-white tracking-tight leading-[1.2] sm:leading-[1.1] drop-shadow-md">
              {currentSlide.title}
            </h1>

            {/* Alt Açıklama */}
            <p className="text-xs sm:text-lg lg:text-xl text-slate-200 font-normal leading-relaxed max-w-2xl drop-shadow line-clamp-3 sm:line-clamp-none">
              {currentSlide.subtitle}
            </p>

            {/* Butonlar (Mobilde 2'li Izgara, Masaüstünde Yan Yana) */}
            <div className="pt-1.5 grid grid-cols-2 sm:flex sm:flex-row items-stretch sm:items-center gap-2 sm:gap-4">
              <Link
                href={currentSlide.primaryButtonLink || '/urunler'}
                className="btn-primary-sky px-3.5 py-3 sm:px-7 sm:py-4 text-xs sm:text-sm font-extrabold flex items-center justify-center gap-1.5 text-center"
              >
                <span>İnceleyin</span>
                <ArrowRight className="w-3.5 h-3.5 shrink-0" />
              </Link>

              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                  currentSlide.whatsappCustomMessage || 'Merhaba, İlhan Su Depoları ürünleri hakkında teklif ve bilgi almak istiyorum.'
                )}`}
                target="_blank"
                rel="noreferrer"
                className="btn-emerald-whatsapp whatsapp-pulse px-3.5 py-3 sm:px-7 sm:py-4 text-xs sm:text-sm font-extrabold flex items-center justify-center gap-1.5 text-center"
              >
                <MessageSquare className="w-3.5 h-3.5 fill-current shrink-0" />
                <span>Teklif Al</span>
              </a>
            </div>

            {/* Öne Çıkan Özellikler */}
            <div className="pt-1 flex flex-wrap items-center gap-y-1.5 gap-x-3 sm:gap-x-6 text-[10px] sm:text-xs font-semibold text-slate-300">
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                %100 Gıda Sınıfı
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                U.V. Dayanımı
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                10 Yıl Garanti
              </span>
            </div>
          </div>
        </div>

        {/* İstatistik Rozetleri (Mobilde 2'li Izgara ve Küçük Punto) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 pt-1 sm:pt-4">
          <div className="glass-panel p-2.5 sm:p-4 rounded-xl sm:rounded-2xl border border-white/10 flex items-center gap-2.5 sm:gap-3.5 shadow-xl">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-sky-500/20 text-sky-400 border border-sky-400/30 flex items-center justify-center shrink-0">
              <Award className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="min-w-0">
              <div className="text-xs sm:text-base font-black text-white truncate">{siteSettings?.statExperience || '25+ Yıl'}</div>
              <div className="text-[10px] sm:text-xs text-slate-300 truncate">Sanayi Tecrübesi</div>
            </div>
          </div>

          <div className="glass-panel p-2.5 sm:p-4 rounded-xl sm:rounded-2xl border border-white/10 flex items-center gap-2.5 sm:gap-3.5 shadow-xl">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-sky-500/20 text-sky-400 border border-sky-400/30 flex items-center justify-center shrink-0">
              <Truck className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="min-w-0">
              <div className="text-xs sm:text-base font-black text-white truncate">{siteSettings?.statTanksProduced || '15.000+'}</div>
              <div className="text-[10px] sm:text-xs text-slate-300 truncate">Üretilen Depo</div>
            </div>
          </div>

          <div className="glass-panel p-2.5 sm:p-4 rounded-xl sm:rounded-2xl border border-white/10 flex items-center gap-2.5 sm:gap-3.5 shadow-xl">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-sky-500/20 text-sky-400 border border-sky-400/30 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="min-w-0">
              <div className="text-xs sm:text-base font-black text-white truncate">%100 Hijyenik</div>
              <div className="text-[10px] sm:text-xs text-slate-300 truncate">Sağlık Bakanlığı</div>
            </div>
          </div>

          <div className="glass-panel p-2.5 sm:p-4 rounded-xl sm:rounded-2xl border border-white/10 flex items-center gap-2.5 sm:gap-3.5 shadow-xl">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-400/30 flex items-center justify-center shrink-0">
              <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="min-w-0">
              <div className="text-xs sm:text-base font-black text-white truncate">WhatsApp Hat</div>
              <div className="text-[10px] sm:text-xs text-slate-300 truncate">Anlık Teklif Alın</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

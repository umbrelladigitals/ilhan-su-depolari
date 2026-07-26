'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'

export interface HeroSlideItem {
  id?: string | number | null
  title?: string | null
  subtitle?: string | null
  badgeText?: string | null
  bgType?: 'video' | 'image' | string | null
  bgMediaUrl?: string | null
  primaryButtonText?: string | null
  primaryButtonLink?: string | null
  whatsappButtonText?: string | null
  whatsappCustomMessage?: string | null
}

interface HeroSectionProps {
  slides?: HeroSlideItem[]
  siteSettings?: any
}

export const HeroSection: React.FC<HeroSectionProps> = ({ slides = [] }) => {
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

  // Minimalist Varsayılan Slayt
  const defaultSlide: HeroSlideItem = {
    title: 'Yüksek Kaliteli Su Depoları',
    subtitle: 'Polietilen ve Paslanmaz Depolama Çözümleri',
    badgeText: 'İlhan Su Depoları',
    bgType: 'video',
    bgMediaUrl: '/videos/hero_video.mp4',
    primaryButtonText: 'Ürün Kataloğunu İncele',
    primaryButtonLink: '/urunler',
  }

  const currentSlide = slides.length > 0 ? slides[currentIndex] : defaultSlide

  return (
    <section className="relative min-h-[100dvh] w-full flex items-center justify-center pt-24 sm:pt-28 pb-12 overflow-hidden bg-slate-100 border-b border-slate-200">
      {/* ─── Net Arka Plan (Görsel & Video Tamamen Görünür) ─── */}
      <div className="absolute inset-0 z-0" suppressHydrationWarning>
        {mounted ? (
          currentSlide.bgType === 'image' ? (
            <img
              src={currentSlide.bgMediaUrl || '/images/hero_bg.jpg'}
              alt={currentSlide.title || 'İlhan Su Depoları'}
              className="w-full h-full object-cover object-center filter brightness-[0.95] contrast-[1.05] transition-all duration-700"
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
              className="w-full h-full object-cover object-center filter brightness-[0.92] contrast-[1.05]"
            >
              <source src={currentSlide.bgMediaUrl || '/videos/hero_video.mp4'} type="video/mp4" />
            </video>
          )
        ) : (
          <img
            src="/images/hero_bg.jpg"
            alt="Hero Background"
            className="w-full h-full object-cover object-center filter brightness-[0.92]"
          />
        )}
        {/* İnce Şeffaf Minimalist Karartma */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/30 to-slate-950/20" />
      </div>

      {/* Slayt Okları */}
      {slides.length > 1 && (
        <>
          <button
            onClick={() => setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length)}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-2.5 rounded-full bg-white/80 text-slate-800 hover:bg-sky-600 hover:text-white transition-all backdrop-blur-md border border-slate-200 shadow-sm"
            aria-label="Önceki"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
          <button
            onClick={() => setCurrentIndex((prev) => (prev + 1) % slides.length)}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-2.5 rounded-full bg-white/80 text-slate-800 hover:bg-sky-600 hover:text-white transition-all backdrop-blur-md border border-slate-200 shadow-sm"
            aria-label="Sonraki"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </>
      )}

      {/* ─── Minimalist İçi Boş Sade İçerik ─── */}
      <div className="relative z-10 max-w-3xl mx-auto px-4 text-center my-auto space-y-4">
        {/* Minimalist Tek Satır Başlık */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight drop-shadow-md">
          {currentSlide.title}
        </h1>

        {/* Kısa ve Öz Tek Cümle Alt Metin */}
        {currentSlide.subtitle && (
          <p className="text-sm sm:text-base text-slate-100 font-medium max-w-lg mx-auto drop-shadow-sm">
            {currentSlide.subtitle}
          </p>
        )}

        {/* Tek Minimalist Aksiyon Butonu */}
        <div className="pt-2 flex justify-center">
          <Link
            href={currentSlide.primaryButtonLink || '/urunler'}
            className="btn-primary-sky px-6 py-3 text-xs sm:text-sm font-extrabold flex items-center justify-center gap-2 shadow-lg"
          >
            <span>{currentSlide.primaryButtonText || 'Ürün Kataloğunu İncele'}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

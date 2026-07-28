'use client'

import React from 'react'
import Link from 'next/link'

interface LogoProps {
  variant?: 'light' | 'dark' | 'auto'
  siteSettings?: any
  className?: string
  imageClassName?: string
  showText?: boolean
  onClick?: () => void
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'auto',
  siteSettings,
  className = '',
  imageClassName = 'h-10 sm:h-11 w-auto object-contain',
  showText = false, // Varsayılan olarak sadece kullanıcının görsel logosu gösterilir
  onClick,
}) => {
  const siteName = siteSettings?.siteName || 'İlhan Su Depoları'

  // Admin panelinden ayarlanabilir Logo URL'leri veya fallback görseller
  const customLightLogo = typeof siteSettings?.lightLogo === 'object' 
    ? siteSettings?.lightLogo?.url 
    : siteSettings?.lightLogo

  const customDarkLogo = typeof siteSettings?.darkLogo === 'object'
    ? siteSettings?.darkLogo?.url
    : siteSettings?.darkLogo

  const lightLogoSrc = customLightLogo || '/images/light_logo.png'
  const darkLogoSrc = customDarkLogo || '/images/dark_logo.png'

  const selectedSrc = variant === 'dark' ? darkLogoSrc : lightLogoSrc

  return (
    <Link href="/" onClick={onClick} className={`inline-flex items-center group cursor-pointer ${className}`}>
      <img
        src={selectedSrc}
        alt={siteName}
        onError={(e) => {
          const target = e.target as HTMLImageElement
          if (target.src.includes('dark')) {
            target.src = '/images/dark_logo.png'
          } else {
            target.src = '/images/light_logo.png'
          }
        }}
        className={`transition-transform duration-300 group-hover:scale-105 ${imageClassName}`}
      />

      {showText && (
        <div className="flex flex-col ml-3">
          <span className="text-base sm:text-lg font-display font-extrabold tracking-tight text-slate-900 leading-tight">
            {siteSettings?.headerLogoText || 'İLHAN SU DEPOLARI'}
          </span>
        </div>
      )}
    </Link>
  )
}

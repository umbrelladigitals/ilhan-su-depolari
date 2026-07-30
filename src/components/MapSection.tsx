'use client'

import React from 'react'
import { MapPin, Navigation, ExternalLink } from 'lucide-react'
import { safeGoogleMapsEmbedUrl } from '../lib/safe-url'

interface MapSectionProps {
  siteSettings?: any
  className?: string
  title?: string
  subtitle?: string
}

export const MapSection: React.FC<MapSectionProps> = ({
  siteSettings,
  className = '',
  title = 'Fabrika & Ofis Konumumuz',
  subtitle = 'Ankara Etimesgut adresimizi harita üzerinde inceleyebilir, yol tarifi alabilirsiniz.',
}) => {
  const addressDisplay = siteSettings?.address || 'Atakent Mahallesi 1471 Sokak no 1/1 Etimesgut Ankara'
  const fallbackMapsUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3056.242!2d32.748!3d39.975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDU4JzMwLjAiTiAzMsKwNDQnNTIuOCJF!5e0!3m2!1str!2str!4v1650000000000'
  const mapsEmbedUrl = safeGoogleMapsEmbedUrl(siteSettings?.googleMapsEmbedUrl, fallbackMapsUrl)
  
  // Google Maps Direct Navigation Link
  const googleMapsDirectionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(addressDisplay)}`

  return (
    <div className={`space-y-4 ${className}`}>
      {(title || subtitle) && (
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100/80 border border-sky-200 text-sky-800 text-xs font-bold shadow-sm mb-1.5">
              <MapPin className="w-3.5 h-3.5 text-sky-600" />
              <span>Harita & Navigasyon</span>
            </div>
            <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">{title}</h3>
            <p className="text-slate-600 text-xs mt-0.5">{subtitle}</p>
          </div>

          <a
            href={googleMapsDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white text-xs font-extrabold shadow-sm transition-all hover:shadow hover:-translate-y-0.5 shrink-0"
          >
            <Navigation className="w-4 h-4" />
            <span>Google Maps'te Yol Tarifi Al</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-80" />
          </a>
        </div>
      )}

      <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-white h-[380px] lg:h-[420px] w-full group">
        <iframe
          title="İlhan Su Depoları Konum Haritası"
          src={mapsEmbedUrl}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          sandbox="allow-scripts allow-same-origin allow-popups"
          className="map-iframe-container filter contrast-[1.02] w-full h-full border-0"
        />

        {/* Floating Info Overlay */}
        <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-auto bg-white/95 backdrop-blur-md p-3.5 sm:p-4 rounded-xl border border-slate-200/90 shadow-lg max-w-md hidden sm:flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center shrink-0">
            <MapPin className="w-5 h-5" />
          </div>
          <div className="text-xs">
            <div className="font-extrabold text-slate-900">İlhan Su Depoları Fabrika</div>
            <div className="text-slate-600 text-[11px] leading-tight mt-0.5">{addressDisplay}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

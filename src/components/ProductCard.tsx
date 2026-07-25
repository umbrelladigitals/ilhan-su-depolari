'use client'

import React from 'react'
import Link from 'next/link'
import type { Product } from '../types'
import { Check, Info, MessageSquare, ArrowUpRight, Cylinder, Sparkles } from 'lucide-react'

const WHATSAPP_NUMBER = '903125431358'

interface ProductCardProps {
  product: Product
  onWhatsAppOrder?: (product: Product) => void
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onWhatsAppOrder }) => {
  const handleWhatsApp = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (onWhatsAppOrder) {
      onWhatsAppOrder(product)
    } else {
      const text = `Merhaba İlhan Su Depoları, *${product.name}* hakkında fiyat ve detaylı teklif almak istiyorum.`
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank')
    }
  }

  const features = product.features || [
    'T.C. Sağlık Bakanlığı Onaylı Gıda Hammaddesi',
    'Yüksek UV Dayanımlı Koku Yapmaz Gövde',
  ]

  const fallbackImage = '/images/hero_bg.jpg'
  const displayCapacity = product.capacityRange || product.capacity || '500L - 20.000L'
  const productUrl = `/urunler/${product.id || product.slug}`

  return (
    <div className="group relative bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-2xl hover:border-sky-400 transition-all duration-500 flex flex-col justify-between h-full cursor-pointer">
      {/* Whole Card Clickable Link wrapper for Image & Details */}
      <Link href={productUrl} className="flex-1 flex flex-col justify-between">
        {/* Visual Header / Image Container */}
        <div className="relative w-full aspect-[4/3] bg-slate-50 overflow-hidden flex items-center justify-center p-4 border-b border-slate-100">
          <img
            src={product.image || fallbackImage}
            alt={product.name}
            onError={(e) => {
              ;(e.target as HTMLImageElement).src = fallbackImage
            }}
            className="w-full h-full object-contain group-hover:scale-108 transition-transform duration-500"
          />

          {/* Category Badge Top Left */}
          <div className="absolute top-3 left-3 z-10">
            <span className="px-2.5 py-1 rounded-lg bg-slate-900/90 backdrop-blur-md text-sky-400 font-extrabold text-[10px] uppercase tracking-wider shadow-sm">
              {product.categoryName || 'Su Deposu'}
            </span>
          </div>

          {/* Capacity Tag Top Right */}
          <div className="absolute top-3 right-3 z-10">
            <span className="px-2.5 py-1 rounded-xl bg-white/95 backdrop-blur-md text-slate-900 font-extrabold text-xs border border-slate-200 shadow-sm flex items-center gap-1">
              <Cylinder className="w-3.5 h-3.5 text-sky-600" />
              <span>{displayCapacity}</span>
            </span>
          </div>

          {/* Quote Badge Bottom Right (NO PRICE DISPLAY) */}
          <div className="absolute bottom-3 right-3 z-10">
            <span className="px-3 py-1 rounded-xl bg-sky-600/90 backdrop-blur-md text-white font-extrabold text-xs shadow-md flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-amber-300" />
              <span>Teklif Alınız</span>
            </span>
          </div>
        </div>

        {/* Card Content Body */}
        <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
          <div className="space-y-2">
            <h3 className="text-base sm:text-lg font-extrabold text-slate-900 group-hover:text-sky-600 transition-colors line-clamp-1 leading-snug">
              {product.name}
            </h3>

            <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
              {product.description || 'Gıda tüzüğüne uygun, UV katkılı yüksek mukavemetli su depolama çözümü.'}
            </p>

            {/* Micro Features Bullet Points */}
            <div className="pt-2 space-y-1.5 border-t border-slate-100">
              {features.slice(0, 2).map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                  <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </div>
                  <span className="truncate">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Card Action Buttons */}
          <div className="pt-2 grid grid-cols-2 gap-2">
            <div className="py-2.5 px-3 rounded-xl bg-slate-100 group-hover:bg-sky-50 group-hover:text-sky-700 text-slate-800 font-bold text-xs transition-all flex items-center justify-center gap-1 border border-slate-200/80">
              <Info className="w-3.5 h-3.5 text-slate-600 group-hover:text-sky-600" />
              <span>Detayları İncele</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>

            <button
              onClick={handleWhatsApp}
              className="py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs transition-all flex items-center justify-center gap-1.5 shadow-sm hover:shadow-md z-20"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-current" />
              <span>Teklif Al</span>
            </button>
          </div>
        </div>
      </Link>
    </div>
  )
}

'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import type { Product } from '../types'
import { Check, Info, MessageSquare, ArrowUpRight } from 'lucide-react'

import { getWhatsAppUrl } from '../lib/whatsapp'

interface ProductCardProps {
  product: Product
  onAddToCart?: (product: Product, quantity: number, capacity: string) => void
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const router = useRouter()

  const categoryLabel = product.categoryName
    || (product.category === 'vertical_tank'  ? 'Dikey Su Deposu'
      : product.category === 'horizontal_tank' ? 'Yatay Su Deposu'
      : product.category === 'industrial_pump' ? 'Endüstriyel Pompa'
      : 'Dalgıç Pompa')

  const rawCap = product.capacityRange || ''
  const capacityBadge = rawCap
    ? (rawCap.toLowerCase().includes('litre') || rawCap.toLowerCase().includes('ton') || rawCap.toLowerCase().includes('m³')
        ? rawCap : `${rawCap} Litre`)
    : null

  const handleCardClick = () => {
    router.push(`/urunler/${product.id || (product as any).slug}`)
  }

  const handleCardKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      handleCardClick()
    }
  }

  const handleWhatsAppOrder = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    const text = `Merhaba İlhan Su Depoları, Sipariş Vermek İstiyorum:\n- *Ürün:* ${product.name}\n- *Kategori:* ${categoryLabel}\n- *Fiyat:* ${product.startingPrice || 'Teklif Alın'}\n\nStok ve teslimat hakkında bilgi alabilir miyim?`
    window.open(getWhatsAppUrl(undefined, text), '_blank')
  }

  return (
    <div
      onClick={handleCardClick}
      onKeyDown={handleCardKeyDown}
      role="link"
      tabIndex={0}
      aria-label={`${product.name} ürün detaylarını görüntüle`}
      className="group relative rounded-3xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-2xl transition-all duration-500 aspect-[3/4] bg-slate-900 flex flex-col justify-end cursor-pointer block select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 focus-visible:ring-offset-2"
    >
      {/* ─── Full Card Background Image (Visible on hover as well) ─── */}
      <img
        src={product.image || '/images/products/placeholder.jpg'}
        alt={product.name}
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-[0.95] group-hover:brightness-[0.85]"
      />

      {/* ─── Capacity Badge (Top Right) ─── */}
      {capacityBadge && (
        <div className="absolute top-4 right-4 z-20 pointer-events-none">
          <span className="px-3.5 py-1.5 rounded-xl bg-white/90 backdrop-blur-md text-slate-900 font-extrabold text-xs border border-white/50 shadow-sm">
            {capacityBadge}
          </span>
        </div>
      )}

      {/* ─── DEFAULT BOTTOM TITLE BAR (Visible when not hovered) ─── */}
      <div className="relative z-20 p-6 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-transparent text-white transition-opacity duration-300 group-hover:opacity-0 pointer-events-none space-y-1">
        <span className="text-[10px] font-bold text-sky-400 uppercase tracking-widest block">
          {categoryLabel}
        </span>
        <div className="flex justify-between items-end gap-2">
          <h3 className="text-xl font-display font-bold text-white tracking-tight leading-snug">
            {product.name}
          </h3>
          {product.startingPrice && (
            <span className="text-xs font-extrabold text-white bg-white/20 px-2.5 py-1 rounded-lg backdrop-blur-sm shrink-0">
              {product.startingPrice}
            </span>
          )}
        </div>
      </div>

      {/* ─── HOVER REVEAL OVERLAY (Semi-transparent dark gradient so image stays visible!) ─── */}
      <div className="absolute inset-0 z-30 p-6 bg-gradient-to-t from-slate-950/95 via-slate-950/60 to-slate-950/20 backdrop-blur-[2px] text-white opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end space-y-4">
        
        {/* Title & Info */}
        <div className="space-y-1.5">
          <div className="flex justify-between items-center">
            <span className="text-[10px] font-bold text-sky-300 uppercase tracking-wider">
              {categoryLabel}
            </span>
            {product.startingPrice && (
              <span className="text-xs font-extrabold text-white">
                {product.startingPrice}
              </span>
            )}
          </div>

          <h3 className="text-xl font-display font-extrabold text-white leading-snug">
            {product.name}
          </h3>

          {product.description && (
            <p className="text-xs text-slate-200 line-clamp-2 leading-relaxed font-normal">
              {product.description}
            </p>
          )}
        </div>

        {/* Features Bullets */}
        {product.features && product.features.length > 0 && (
          <div className="space-y-1.5 pt-2 border-t border-white/20">
            {product.features.slice(0, 2).map((feat, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs text-slate-200 font-medium">
                <div className="w-3.5 h-3.5 rounded-full bg-emerald-500/30 text-emerald-400 flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </div>
                <span className="truncate">{feat}</span>
              </div>
            ))}
          </div>
        )}

        {/* Action Buttons */}
        <div className="pt-2 flex items-center gap-2">
          <span className="flex-1 py-2.5 px-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-1.5">
            <Info className="w-4 h-4" />
            <span>Detaylar</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </span>

          <button
            type="button"
            onClick={handleWhatsAppOrder}
            className="py-2.5 px-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-xs transition-all flex items-center justify-center gap-1 shadow-sm shrink-0 cursor-pointer"
            title="WhatsApp Sipariş"
          >
            <MessageSquare className="w-4 h-4 fill-current" />
            <span>Sipariş</span>
          </button>
        </div>

      </div>
    </div>
  )
}

'use client'

import React from 'react'
import Link from 'next/link'
import type { Product } from '../types'
import { ChevronRight } from 'lucide-react'

interface ProductCardProps {
  product: Product
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const categoryLabel = product.categoryName || (product.category === 'vertical_tank'
    ? 'Dikey Su Deposu'
    : product.category === 'horizontal_tank'
    ? 'Yatay Su Deposu'
    : product.category === 'industrial_pump'
    ? 'Endüstriyel Pompa'
    : 'Dalgıç Pompa')

  // Çift "Litre" kelimesini önleyen temiz rozet formatı
  const rawCapacity = product.capacityRange || product.capacity || 'Özel Ölçü'
  const capacityBadge = rawCapacity.toLowerCase().includes('litre') || rawCapacity.toLowerCase().includes('ton')
    ? rawCapacity
    : `${rawCapacity} Litre`

  return (
    <div className="group relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 hover:border-sky-500/50 shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1">
      {/* Üst Kısım: Kapasite Rozeti */}
      <div className="absolute top-3 right-3 z-10">
        <span className="px-2.5 py-1 rounded-md bg-sky-950/90 border border-sky-400/30 text-[10px] font-extrabold text-sky-300 uppercase tracking-wider backdrop-blur-md">
          {capacityBadge}
        </span>
      </div>

      {/* Ürün Görsel Alanı */}
      <Link href={`/urunler/${product.id}`} className="block relative w-full aspect-[4/3] bg-slate-950/60 p-4 flex items-center justify-center overflow-hidden">
        <img
          src={product.image || '/images/products/5000l-yatay-mavi-polietilen-su-deposu.jpg'}
          alt={product.name}
          className="w-full h-full object-contain filter drop-shadow-lg group-hover:scale-105 transition-transform duration-500"
        />
      </Link>

      {/* Kart İçerik Alanı */}
      <div className="p-4 sm:p-5 flex flex-col justify-between flex-grow space-y-3 bg-gradient-to-b from-slate-900 to-slate-950">
        <div>
          <div className="text-[10px] font-extrabold uppercase tracking-wider text-sky-400 mb-1">
            {categoryLabel}
          </div>
          <Link href={`/urunler/${product.id}`} className="block">
            <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-sky-300 transition-colors line-clamp-1">
              {product.name}
            </h3>
          </Link>
        </div>

        {/* Aksiyon Butonu */}
        <Link
          href={`/urunler/${product.id}`}
          className="w-full py-2.5 px-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-extrabold text-xs flex items-center justify-center gap-1.5 transition-all shadow-md group/btn"
        >
          <span>Ürün Detaylarını İncele</span>
          <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </div>
  )
}

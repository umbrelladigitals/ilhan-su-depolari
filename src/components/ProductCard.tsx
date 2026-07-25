'use client'

import React from 'react'
import Link from 'next/link'
import type { Product } from '../types'
import { ArrowUpRight } from 'lucide-react'

interface ProductCardProps {
  product: Product
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const categoryLabel = product.categoryName || (product.category === 'vertical_tank'
    ? 'DİKEY SU DEPOSU'
    : product.category === 'horizontal_tank'
    ? 'YATAY SU DEPOSU'
    : product.category === 'industrial_pump'
    ? 'ENDÜSTRİYEL TİP POMPA'
    : 'DALGIÇ POMPA')

  // Kapasite aralığı rozeti
  const rawCapacity = product.capacityRange || product.capacity || 'Özel Hacim'
  const capacityBadge = rawCapacity.toLowerCase().includes('litre') || rawCapacity.toLowerCase().includes('ton') || rawCapacity.toLowerCase().includes('m³')
    ? rawCapacity
    : `${rawCapacity} Litre`

  return (
    <div className="group relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 hover:border-sky-500/60 shadow-2xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 h-full">
      {/* ─── Görsel Üzerindeki Üst Sağ Kapasite Rozeti ─── */}
      <div className="absolute top-4 right-4 z-20">
        <span className="px-3 py-1.5 rounded-full bg-slate-950/80 border border-white/20 text-[11px] font-extrabold text-slate-200 tracking-wide backdrop-blur-md shadow-lg">
          {capacityBadge}
        </span>
      </div>

      {/* ─── Görsel Odaklı Büyük Sahne Alanı (Öne Çıkan Devasa Ürün Görseli) ─── */}
      <Link
        href={`/urunler/${product.id}`}
        className="block relative w-full h-72 sm:h-80 bg-gradient-to-b from-slate-800/80 via-slate-900/90 to-slate-950 p-6 flex items-center justify-center overflow-hidden"
      >
        <img
          src={product.image || '/images/products/5000l-yatay-mavi-polietilen-su-deposu.jpg'}
          alt={product.name}
          className="w-full h-full object-contain filter drop-shadow-2xl group-hover:scale-108 transition-transform duration-500"
        />
      </Link>

      {/* ─── Kart Alt Bilgi & Aksiyon Katmanı ─── */}
      <div className="p-5 sm:p-6 flex flex-col justify-between flex-grow space-y-4 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border-t border-slate-800/80">
        <div>
          {/* Kategori Etiketi */}
          <div className="text-[10px] font-black uppercase tracking-widest text-sky-400 mb-1.5">
            {categoryLabel}
          </div>

          {/* Başlık ve Sağdaki Teklif Rozeti */}
          <div className="flex items-start justify-between gap-2">
            <Link href={`/urunler/${product.id}`} className="block flex-1">
              <h3 className="text-base sm:text-lg font-black text-white group-hover:text-sky-300 transition-colors line-clamp-1">
                {product.name}
              </h3>
            </Link>
            <span className="px-2.5 py-1 rounded-lg bg-emerald-950/90 border border-emerald-500/40 text-[10px] font-extrabold text-emerald-400 shrink-0">
              Teklif Alın
            </span>
          </div>

          {/* Kısa Özellikler */}
          <p className="text-xs text-slate-400 line-clamp-2 mt-2 font-normal leading-relaxed">
            {product.description || 'Gıda tüzüğüne %100 uygun, yüksek mukavemetli monoblok gövde kalitesi.'}
          </p>
        </div>

        {/* Birebir Orijinal Buton Tasarımı (Ürün Detaylarını İncele ↗) */}
        <Link
          href={`/urunler/${product.id}`}
          className="w-full py-3 px-4 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-extrabold text-xs flex items-center justify-center gap-1.5 transition-all shadow-md group/btn"
        >
          <span>Ürün Detaylarını İncele</span>
          <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
        </Link>
      </div>
    </div>
  )
}

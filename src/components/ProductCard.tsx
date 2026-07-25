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
    <div className="card-light-premium group relative overflow-hidden bg-white border border-slate-200/90 rounded-3xl shadow-sm hover:shadow-2xl hover:border-sky-300 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 h-full">
      {/* ─── Görsel Üzerindeki Üst Sağ Kapasite Rozeti (Aydınlık Lüks Rozet) ─── */}
      <div className="absolute top-4 right-4 z-20">
        <span className="px-3 py-1.5 rounded-full bg-white/95 border border-slate-200 text-[11px] font-black text-slate-800 tracking-wide backdrop-blur-md shadow-sm">
          {capacityBadge}
        </span>
      </div>

      {/* ─── Devasa Görsel Odaklı Açık Sahne Alanı (Aydınlık Ferah Zemin) ─── */}
      <Link
        href={`/urunler/${product.id}`}
        className="block relative w-full h-72 sm:h-80 bg-gradient-to-b from-slate-100/90 via-slate-50 to-sky-50/60 p-6 flex items-center justify-center overflow-hidden border-b border-slate-100"
      >
        <img
          src={product.image || '/images/products/5000l-yatay-mavi-polietilen-su-deposu.jpg'}
          alt={product.name}
          className="w-full h-full object-contain filter drop-shadow-md group-hover:scale-108 transition-transform duration-500"
        />
      </Link>

      {/* ─── Kart Alt Bilgi & Aksiyon Katmanı (Aydınlık Beyaz Lüks Gövde) ─── */}
      <div className="p-5 sm:p-6 flex flex-col justify-between flex-grow space-y-4 bg-white">
        <div>
          {/* Kategori Etiketi */}
          <div className="text-[10px] font-black uppercase tracking-widest text-sky-600 mb-1.5">
            {categoryLabel}
          </div>

          {/* Başlık ve Sağdaki Teklif Rozeti */}
          <div className="flex items-start justify-between gap-2">
            <Link href={`/urunler/${product.id}`} className="block flex-1">
              <h3 className="text-base sm:text-lg font-black text-slate-900 group-hover:text-sky-600 transition-colors line-clamp-1">
                {product.name}
              </h3>
            </Link>
            <span className="px-2.5 py-1 rounded-lg bg-sky-100/80 border border-sky-200 text-[10px] font-extrabold text-sky-800 shrink-0 shadow-sm">
              Teklif Alın
            </span>
          </div>

          {/* Kısa Açıklama */}
          <p className="text-xs text-slate-600 line-clamp-2 mt-2 font-medium leading-relaxed">
            {product.description || 'Gıda tüzüğüne %100 uygun, yüksek mukavemetli monoblok gövde kalitesi.'}
          </p>
        </div>

        {/* Mavi Aksiyon Butonu (Ürün Detaylarını İncele ↗) */}
        <Link
          href={`/urunler/${product.id}`}
          className="btn-primary-sky w-full py-3 px-4 text-xs font-extrabold flex items-center justify-center gap-1.5 transition-all shadow-md group/btn"
        >
          <span>Ürün Detaylarını İncele</span>
          <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
        </Link>
      </div>
    </div>
  )
}

'use client'

import React from 'react'
import Link from 'next/link'
import type { Product } from '../types'
import { ArrowUpRight } from 'lucide-react'

interface ProductCardProps {
  product: Product
}

/* ────────────────────────────────────────────────────────────
   ProductCard — Görsel Odaklı, Minimal Metin, Full Light Tema
   Tüm stiller index.css içindeki .product-card-* token'larından gelir.
   Inline CSS sıfır.
   ──────────────────────────────────────────────────────────── */
export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const categoryLabel = product.categoryName
    || (product.category === 'vertical_tank'  ? 'Dikey Su Deposu'
      : product.category === 'horizontal_tank' ? 'Yatay Su Deposu'
      : product.category === 'industrial_pump' ? 'Endüstriyel Pompa'
      : 'Dalgıç Pompa')

  const rawCap = product.capacityRange || product.capacity || ''
  const capacityBadge = rawCap
    ? (rawCap.toLowerCase().includes('litre') || rawCap.toLowerCase().includes('ton') || rawCap.toLowerCase().includes('m³')
        ? rawCap : `${rawCap} Litre`)
    : null

  return (
    <Link href={`/urunler/${product.id}`} className="product-card group">
      {/* ─── Büyük Görsel Sahnesi ─── */}
      <div className="product-card-image-area">
        {capacityBadge && (
          <span className="product-card-capacity-badge">{capacityBadge}</span>
        )}
        <img
          src={product.image || '/images/products/placeholder.jpg'}
          alt={product.name}
        />
      </div>

      {/* ─── Alt Bilgi: Minimum Metin ─── */}
      <div className="product-card-body">
        <span className="product-card-category">{categoryLabel}</span>
        <h3 className="product-card-title">{product.name}</h3>

        <div className="product-card-action">
          <span className="btn-primary-sky w-full py-2.5 px-4 text-xs font-extrabold flex items-center justify-center gap-1.5">
            Ürün Detaylarını İncele
            <ArrowUpRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>
    </Link>
  )
}

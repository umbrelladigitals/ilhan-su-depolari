'use client'

import React, { useState } from 'react'
import { PRODUCTS } from '../data/products'
import type { CategoryType, Product } from '../types'
import { ProductCard } from './ProductCard'
import { matchesCategory } from '../app/(frontend)/urunler/ProductsClient'
import { Layers } from 'lucide-react'

interface ProductsSectionProps {
  products?: Product[]
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({
  products = PRODUCTS,
}) => {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('all')

  const categories: { id: CategoryType; label: string }[] = [
    { id: 'all', label: 'Tüm Ürünler' },
    { id: 'vertical_tank', label: 'Dikey Su Depoları' },
    { id: 'horizontal_tank', label: 'Yatay Su Depoları' },
    { id: 'industrial_pump', label: 'Endüstriyel Tip Pompalar' },
    { id: 'submersible_pump', label: 'Dalgıç Pompa Sistemleri' },
  ]

  const filteredProducts = products.filter((p) => matchesCategory(p, activeCategory))

  return (
    <section id="products" className="section-padding bg-slate-50 relative border-b border-slate-200/60">
      <div className="container-custom">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100 border border-sky-200 text-sky-800 text-xs font-bold shadow-sm mb-3">
              <Layers className="w-3.5 h-3.5 text-sky-600" />
              <span>ÖNE ÇIKAN ÜRÜNLER</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Yüksek Mukavemetli Depo & Pompa Çözümleri
            </h2>
          </div>

          {/* Kategori Filtre Butonları */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => {
              const count = products.filter((p) => matchesCategory(p, cat.id)).length
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-extrabold transition-all duration-200 cursor-pointer ${
                    activeCategory === cat.id
                      ? 'bg-sky-600 text-white shadow-md shadow-sky-600/25 scale-105 border border-sky-500'
                      : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200/80'
                  }`}
                >
                  {cat.label} <span className="opacity-75">({count})</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* ─── Görsel Odaklı Büyük 3'lü Kart Izgarası ─── */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id || (product as any).slug} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 text-slate-500 text-sm bg-white rounded-2xl border border-slate-200">
            Seçilen kategoride ürün bulunmamaktadır.
          </div>
        )}
      </div>
    </section>
  )
}

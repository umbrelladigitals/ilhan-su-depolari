'use client'

import React, { useState } from 'react'
import { PRODUCTS } from '../data/products'
import type { CategoryType, Product } from '../types'
import { ProductCard } from './ProductCard'
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

  const matchesCategory = (p: Product, cat: CategoryType) => {
    if (cat === 'all') return true
    const pCat = typeof p.category === 'object' ? (p.category as any)?.slug : p.category
    
    if (cat === 'vertical_tank') {
      return pCat === 'vertical_tank' || pCat === 'polietilen-su-depolari' || p.name.toLowerCase().includes('dikey')
    }
    if (cat === 'horizontal_tank') {
      return pCat === 'horizontal_tank' || p.name.toLowerCase().includes('yatay')
    }
    if (cat === 'industrial_pump') {
      return pCat === 'industrial_pump' || p.name.toLowerCase().includes('pompa') || p.name.toLowerCase().includes('santrifüj')
    }
    if (cat === 'submersible_pump') {
      return pCat === 'submersible_pump' || p.name.toLowerCase().includes('dalgıç')
    }
    return pCat === cat
  }

  const filteredProducts = products.filter((p) => matchesCategory(p, activeCategory))

  return (
    <section id="products" className="section-padding bg-slate-950 relative border-b border-slate-800">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2.5 mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-950/80 border border-sky-400/30 text-sky-300 text-xs font-bold shadow-sm">
            <Layers className="w-3.5 h-3.5 text-sky-400" />
            <span>ÖNE ÇIKAN ÜRÜNLER</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Yüksek Mukavemetli Depo & Pompa Çözümleri
          </h2>
        </div>

        {/* Category Pills Filter */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8 sm:mb-12">
          {categories.map((cat) => {
            const count = products.filter((p) => matchesCategory(p, cat.id)).length
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all duration-200 cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-sky-500 text-white shadow-lg shadow-sky-500/25 scale-105 border border-sky-400'
                    : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800 hover:border-slate-700'
                }`}
              >
                {cat.label} <span className="opacity-75">({count})</span>
              </button>
            )
          })}
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id || (product as any).slug} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 text-slate-400 text-sm">
            Seçilen kategoride henüz ürün bulunmamaktadır.
          </div>
        )}
      </div>
    </section>
  )
}

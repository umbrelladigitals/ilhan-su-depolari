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

  const categories: { id: CategoryType; label: string; count: number }[] = [
    { id: 'all', label: 'Tüm Ürünler', count: products.length },
    {
      id: 'vertical_tank',
      label: 'Dikey Su Depoları',
      count: products.filter(
        (p) => p.category === 'vertical_tank' || (p.category as any)?.slug === 'vertical_tank' || (p.category as any)?.slug === 'polietilen-su-depolari'
      ).length,
    },
    {
      id: 'horizontal_tank',
      label: 'Yatay Su Depoları',
      count: products.filter(
        (p) => p.category === 'horizontal_tank' || (p.category as any)?.slug === 'horizontal_tank'
      ).length,
    },
  ]

  const filteredProducts =
    activeCategory === 'all'
      ? products
      : products.filter(
          (p) =>
            p.category === activeCategory ||
            (p.category as any)?.slug === activeCategory ||
            (activeCategory === 'vertical_tank' && ((p.category as any)?.slug === 'polietilen-su-depolari' || p.category === 'vertical_tank'))
        )

  return (
    <section id="products" className="section-padding bg-slate-50 relative border-b border-slate-200/60">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100/80 border border-sky-200 text-sky-800 text-xs font-bold shadow-sm">
            <Layers className="w-3.5 h-3.5 text-sky-600" />
            <span>Ürün Kataloğumuz & Çeşitler</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Gıda Tüzüğüne Uygun Su Depoları
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            %100 Hijyenik LLDPE polietilen hammaddeden üretilen dikey ve yatay su depolarımız.
          </p>
        </div>

        {/* Category Pills Filter */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 sm:mb-14">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-sky-600 text-white shadow-md shadow-sky-600/25 scale-105 border border-sky-500'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200/80 hover:border-slate-300'
              }`}
            >
              {cat.label} <span className="opacity-75">({cat.count})</span>
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id || (product as any).slug} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}

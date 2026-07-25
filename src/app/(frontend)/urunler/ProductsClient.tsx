'use client'

import React, { useState } from 'react'
import type { Product, CategoryType } from '@/types'
import { Search, Layers } from 'lucide-react'
import { ProductCard } from '@/components/ProductCard'

interface ProductsClientProps {
  initialProducts: Product[]
  initialCategory?: string
}

export const ProductsClient: React.FC<ProductsClientProps> = ({
  initialProducts,
  initialCategory = 'all',
}) => {
  const [activeCategory, setActiveCategory] = useState<CategoryType>((initialCategory as CategoryType) || 'all')
  const [searchQuery, setSearchQuery] = useState<string>('')

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

  const filteredProducts = initialProducts.filter((p) => {
    const matchesCat = matchesCategory(p, activeCategory)
    const matchesSearch =
      !searchQuery ||
      p.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.capacityRange?.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCat && matchesSearch
  })

  return (
    <>
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3 mb-8 sm:mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100 border border-sky-200 text-sky-800 text-xs font-bold shadow-sm">
          <Layers className="w-3.5 h-3.5 text-sky-600" />
          <span>ÜRÜN KATALOĞUMUZ</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Depo & Pompa Sistemlerimiz
        </h1>
      </div>

      {/* Search Bar */}
      <div className="max-w-xl mx-auto mb-8 sm:mb-10">
        <div className="relative">
          <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Ürün adı veya depo hacmi ara (Örn: 5000L, Dikey, Beyaz)..."
            className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white border border-slate-200 text-slate-900 placeholder-slate-400 text-sm input-focus shadow-sm"
          />
        </div>
      </div>

      {/* Category Pills Filter */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        {categories.map((cat) => {
          const count = initialProducts.filter((p) => matchesCategory(p, cat.id)).length
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all duration-200 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-sky-600 text-white shadow-md shadow-sky-600/25 scale-105 border border-sky-500'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200/80 hover:border-slate-300'
              }`}
            >
              {cat.label} <span className="opacity-75">({count})</span>
            </button>
          )
        })}
      </div>

      {/* Product Cards Grid (3-Col Visual Cards) */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id || (product as any).slug}
              product={product}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 space-y-3 shadow-sm max-w-xl mx-auto">
          <h3 className="text-lg font-extrabold text-slate-800">Aramanıza uygun ürün bulunamadı.</h3>
          <p className="text-xs text-slate-500">Lütfen farklı bir kategori seçiniz veya arama terimini sıfırlayınız.</p>
          <button
            onClick={() => {
              setActiveCategory('all')
              setSearchQuery('')
            }}
            className="btn-primary-sky px-5 py-2.5 text-xs font-extrabold"
          >
            Tüm Ürünleri Göster
          </button>
        </div>
      )}
    </>
  )
}

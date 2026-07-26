'use client'

import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import type { Product, CategoryType } from '@/types'
import { Search, Layers } from 'lucide-react'
import { ProductCard } from '@/components/ProductCard'

interface ProductsClientProps {
  initialProducts: Product[]
  initialCategory?: string
}

export const matchesCategory = (p: Product, cat: CategoryType | string) => {
  if (!cat || cat === 'all') return true

  const pCatSlug = (typeof p.category === 'object' ? (p.category as any)?.slug : String(p.category || '')).toLowerCase()
  const pCatName = (p.categoryName || (typeof p.category === 'object' ? (p.category as any)?.name : '') || '').toLowerCase()
  const pName = (p.name || '').toLowerCase()
  const targetCat = String(cat).toLowerCase()

  if (
    targetCat === 'vertical_tank' ||
    targetCat === 'polietilen-su-depolari' ||
    targetCat === 'dikey-su-depolari' ||
    targetCat === 'dikey'
  ) {
    return (
      pCatSlug.includes('vertical') ||
      pCatSlug.includes('dikey') ||
      pCatSlug.includes('polietilen') ||
      pCatName.includes('dikey') ||
      pName.includes('dikey') ||
      (pName.includes('polietilen') && !pName.includes('yatay'))
    )
  }

  if (
    targetCat === 'horizontal_tank' ||
    targetCat === 'polyester-su-depolari' ||
    targetCat === 'yatay-su-depolari' ||
    targetCat === 'yatay'
  ) {
    return (
      pCatSlug.includes('horizontal') ||
      pCatSlug.includes('yatay') ||
      pCatSlug.includes('polyester') ||
      pCatName.includes('yatay') ||
      pName.includes('yatay')
    )
  }

  if (
    targetCat === 'industrial_pump' ||
    targetCat === 'paslanmaz-moduler-depolar' ||
    targetCat === 'endustriyel-pompalar' ||
    targetCat === 'endüstriyel'
  ) {
    return (
      pCatSlug.includes('industrial') ||
      pCatSlug.includes('endustriyel') ||
      pCatSlug.includes('paslanmaz') ||
      pCatName.includes('endüstriyel') ||
      pCatName.includes('paslanmaz') ||
      pName.includes('endüstriyel') ||
      pName.includes('santrifüj') ||
      (pName.includes('pompa') && !pName.includes('dalgıç'))
    )
  }

  if (
    targetCat === 'submersible_pump' ||
    targetCat === 'dalgic-pompalar' ||
    targetCat === 'dalgic'
  ) {
    return (
      pCatSlug.includes('submersible') ||
      pCatSlug.includes('dalgic') ||
      pCatName.includes('dalgıç') ||
      pName.includes('dalgıç')
    )
  }

  return pCatSlug === targetCat || pCatSlug.includes(targetCat) || targetCat.includes(pCatSlug)
}

export const ProductsClient: React.FC<ProductsClientProps> = ({
  initialProducts,
  initialCategory = 'all',
}) => {
  const searchParams = useSearchParams()
  const urlCat = searchParams?.get('category')

  const [activeCategory, setActiveCategory] = useState<CategoryType>(
    (urlCat as CategoryType) || (initialCategory as CategoryType) || 'all'
  )
  const [searchQuery, setSearchQuery] = useState<string>('')

  // URL ?category= parametresi değişirse aktif kategoriyi senkronize et
  useEffect(() => {
    if (urlCat) {
      setActiveCategory(urlCat as CategoryType)
    }
  }, [urlCat])

  const categories: { id: CategoryType; label: string }[] = [
    { id: 'all', label: 'Tüm Ürünler' },
    { id: 'vertical_tank', label: 'Dikey Su Depoları' },
    { id: 'horizontal_tank', label: 'Yatay Su Depoları' },
    { id: 'industrial_pump', label: 'Endüstriyel Tip Pompalar' },
    { id: 'submersible_pump', label: 'Dalgıç Pompa Sistemleri' },
  ]

  const handleCategoryClick = (catId: CategoryType) => {
    setActiveCategory(catId)
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href)
      if (catId === 'all') {
        url.searchParams.delete('category')
      } else {
        url.searchParams.set('category', catId)
      }
      window.history.replaceState({}, '', url.toString())
    }
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

      {/* Category Pills Filter (Kategori Butonları) */}
      <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10 relative z-20">
        {categories.map((cat) => {
          const count = initialProducts.filter((p) => matchesCategory(p, cat.id)).length
          const isSelected = activeCategory === cat.id
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => handleCategoryClick(cat.id)}
              className={`px-4 py-2.5 rounded-xl text-xs font-extrabold transition-all duration-200 cursor-pointer select-none relative z-20 ${
                isSelected
                  ? 'bg-sky-600 text-white shadow-md shadow-sky-600/30 scale-105 border border-sky-500 ring-2 ring-sky-400/30'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200/80 hover:border-slate-300'
              }`}
            >
              {cat.label} <span className="opacity-80">({count})</span>
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
            type="button"
            onClick={() => {
              handleCategoryClick('all')
              setSearchQuery('')
            }}
            className="btn-primary-sky px-5 py-2.5 text-xs font-extrabold cursor-pointer"
          >
            Tüm Ürünleri Göster
          </button>
        </div>
      )}
    </>
  )
}

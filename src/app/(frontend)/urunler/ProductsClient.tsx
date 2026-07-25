'use client'

import React, { useState } from 'react'
import type { Product, CategoryType } from '@/types'
import { Search, Layers } from 'lucide-react'
import { ProductCard } from '@/components/ProductCard'

const WHATSAPP_NUMBER = '903125431358'

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

  const categories: { id: CategoryType; label: string; count: number }[] = [
    { id: 'all', label: 'Tüm Ürünler', count: initialProducts.length },
    {
      id: 'vertical_tank',
      label: 'Dikey Su Depoları',
      count: initialProducts.filter(
        (p) => p.category === 'vertical_tank' || (p.category as any)?.slug === 'vertical_tank' || (p.category as any)?.slug === 'polietilen-su-depolari'
      ).length,
    },
    {
      id: 'horizontal_tank',
      label: 'Yatay Su Depoları',
      count: initialProducts.filter(
        (p) => p.category === 'horizontal_tank' || (p.category as any)?.slug === 'horizontal_tank'
      ).length,
    },
    {
      id: 'industrial_pump',
      label: 'Endüstriyel Pompalar',
      count: initialProducts.filter(
        (p) => p.category === 'industrial_pump' || (p.category as any)?.slug === 'industrial_pump'
      ).length,
    },
    {
      id: 'submersible_pump',
      label: 'Dalgıç Pompalar',
      count: initialProducts.filter(
        (p) => p.category === 'submersible_pump' || (p.category as any)?.slug === 'submersible_pump'
      ).length,
    },
  ]

  const filteredProducts = initialProducts.filter((p) => {
    const pCat = p.category || (p as any)?.category?.slug
    const matchesCat =
      activeCategory === 'all' ||
      pCat === activeCategory ||
      (activeCategory === 'vertical_tank' && (pCat === 'polietilen-su-depolari' || pCat === 'vertical_tank'))

    const matchesSearch =
      p.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.capacityRange?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.capacity?.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCat && matchesSearch
  })

  const handleDirectWhatsAppOrder = (product: Product) => {
    const text = `Merhaba İlhan Su Depoları, *${product.name}* hakkında detaylı fiyat teklifi ve teknik bilgi almak istiyorum:\n- *Kategori:* ${product.categoryName || 'Su Deposu'}\n- *Kapasite:* ${product.capacityRange || product.capacity}\n- *Hammadde / Malzeme:* ${product.material}\n\nStok durumu ve teslimat süresi nedir?`
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank')
  }

  return (
    <>
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100/80 border border-sky-200 text-sky-800 text-xs font-bold shadow-sm">
          <Layers className="w-3.5 h-3.5 text-sky-600" />
          <span>Tüm Ürün Kataloğumuz</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Depo & Pompa Sistemlerimiz
        </h1>

        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          Gıda tüzüğüne uygun dikey/yatay su depoları ve paslanmaz ağır hizmet pompaları.
        </p>
      </div>

      {/* Search Bar */}
      <div className="max-w-2xl mx-auto mb-10">
        <div className="relative">
          <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Ürün adı, depo tipi veya hacmi ara (Örn: Dikey 5000L, Paslanmaz Modüler)..."
            className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white border border-slate-200 text-slate-900 placeholder-slate-400 text-sm input-focus shadow-sm"
          />
        </div>
      </div>

      {/* Category Pills Filter */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
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
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id || (product as any).slug}
              product={product}
              onWhatsAppOrder={handleDirectWhatsAppOrder}
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

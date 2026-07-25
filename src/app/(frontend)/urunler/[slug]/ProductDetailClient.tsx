'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Check, MessageSquare, PhoneCall, ChevronRight, Sparkles } from 'lucide-react'

const WHATSAPP_NUMBER = '903125431358'
const PHONE_DISPLAY = '0312 543 1358'

interface ProductDetailClientProps {
  product: any
}

export const ProductDetailClient: React.FC<ProductDetailClientProps> = ({ product }) => {
  const capacityOptionsMap: Record<string, string[]> = {
    vertical_tank: ['500 Litre', '1.000 Litre', '2.000 Litre', '5.000 Litre', '10.000 Litre', '20.000 Litre'],
    horizontal_tank: ['1.000 Litre', '3.000 Litre', '5.000 Litre', '10.000 Litre', '20.000 Litre', '50.000 Litre'],
    industrial_pump: ['5 m³/h (1.5 kW)', '15 m³/h (3.0 kW)', '30 m³/h (5.5 kW)', '75 m³/h (11 kW)', '150 m³/h (22 kW)'],
    submersible_pump: ['4 inç (1.1 kW)', '4 inç (2.2 kW)', '6 inç (5.5 kW)', '6 inç (7.5 kW)', '8 inç (15 kW)'],
  }

  const categoryKey = product?.category?.slug || product?.category || 'vertical_tank'
  const options = capacityOptionsMap[categoryKey] || ['500 Litre', '1.000 Litre', '5.000 Litre', '10.000 Litre']
  const [selectedCapacityOption, setSelectedCapacityOption] = useState<string>(options[0])
  const [quantity, setQuantity] = useState<number>(1)

  const productName = product?.name || 'Su Deposu'
  const categoryName = product?.categoryName || product?.category?.name || 'Polietilen Su Deposu'
  const description = product?.description || 'Gıda tüzüğüne uygun, yüksek UV katkılı LLDPE polietilen hammaddeden üretilmiş su depolama çözümü.'
  const capacityRange = product?.capacityRange || product?.capacity || '500L - 20.000L'
  const image = product?.image || '/images/hero_bg.jpg'
  const material = product?.material || 'Gıda Sınıfı Polietilen'
  const features = product?.features || [
    'T.C. Sağlık Bakanlığı Onaylı Gıda Hammaddesi',
    'Yüksek UV Dayanımı & Yosun Tutmaz Gövde',
    'Kokusuz ve Bakteri Üretmeyen İç Yüzey',
    '10 Yıla Varan Gövde Garantisi',
  ]

  const specs = product?.specs || {
    dimensions: product?.dimensions || 'Standart Ebatlar',
    thickness: '6 - 12 mm (Hacme Göre)',
    outletSize: '1/2 inç - 2 inç Pirinç Rekor',
    warranty: '2 Yıl İmalat Garantili',
  }

  const handleDirectWhatsAppOrder = () => {
    const text = `Merhaba İlhan Su Depoları, *${productName}* ürününden fiyat teklifi almak istiyorum:\n\n📌 *TEKLİF DETAYLARI:*\n- *Ürün:* ${productName}\n- *Kategori:* ${categoryName}\n- *Seçilen Kapasite / Ölçü:* ${selectedCapacityOption}\n- *Adet:* ${quantity} Adet\n- *Hammadde / Malzeme:* ${material}\n\nLütfen özel fiyat, stok ve teslimat bilgisi iletir misiniz?`
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank')
  }

  const handleWhatsAppQuote = () => {
    const text = `Merhaba İlhan Su Depoları, *${productName}* hakkında özel fiyat teklifi almak istiyorum:\n- *Seçilen Kapasite:* ${selectedCapacityOption}\n- *Adet:* ${quantity}`
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank')
  }

  return (
    <div className="pt-24 sm:pt-28 pb-16 sm:pb-24 bg-white min-h-screen">
      <div className="container-custom">
        {/* Breadcrumb Navigation */}
        <div className="flex flex-wrap items-center justify-between gap-3 sm:gap-4 mb-4 sm:mb-6">
          <div className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-semibold text-slate-500">
            <Link href="/" className="hover:text-sky-600">
              Ana Sayfa
            </Link>
            <ChevronRight className="w-3 h-3 text-slate-300" />
            <Link href="/urunler" className="hover:text-sky-600">
              Ürünlerimiz
            </Link>
            <ChevronRight className="w-3 h-3 text-slate-300" />
            <span className="text-slate-900 font-bold truncate max-w-[150px] sm:max-w-none">{productName}</span>
          </div>

          <Link
            href="/urunler"
            className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-bold text-slate-600 hover:text-sky-700 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Tüm Ürünlere Dön</span>
          </Link>
        </div>

        {/* FULL-BLEED LEFT IMAGE LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-start mb-12 sm:mb-16">
          {/* LEFT COLUMN (7 cols): STICKY PRODUCT PHOTO */}
          <div className="lg:col-span-7 lg:sticky lg:top-28 self-start">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200 shadow-lg bg-slate-50 aspect-[4/3] lg:aspect-[4/5] min-h-[280px] sm:min-h-[480px] lg:min-h-[560px] w-full flex items-center justify-center p-6">
              <img
                src={image}
                alt={productName}
                onError={(e) => {
                  ;(e.target as HTMLImageElement).src = '/images/hero_bg.jpg'
                }}
                className="w-full h-full object-contain filter drop-shadow-md hover:scale-105 transition-transform duration-500"
              />

              {/* Minimal Capacity Overlay Tag */}
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 z-10 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl sm:rounded-2xl bg-slate-900/90 backdrop-blur-md text-white font-extrabold text-[11px] sm:text-xs border border-slate-700 shadow-md">
                Kapasite: {capacityRange}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN (5 cols): SCROLLABLE DETAILS */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8">
            {/* Header & Quote Info Tag */}
            <div className="space-y-2.5 sm:space-y-3 pb-4 sm:pb-6 border-b border-slate-100">
              <span className="px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-sky-100 text-sky-800 text-[10px] sm:text-xs font-extrabold uppercase tracking-wider inline-block">
                {categoryName}
              </span>
              <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug sm:leading-tight">
                {productName}
              </h1>
              <div className="pt-1 sm:pt-2 flex items-center justify-between bg-sky-50/70 p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-sky-200">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-sky-600" />
                  <span className="text-[11px] sm:text-xs font-extrabold text-sky-900 uppercase tracking-wider">Satış Durumu:</span>
                </div>
                <span className="text-xs sm:text-sm font-extrabold text-sky-700 bg-white px-3 py-1 rounded-lg shadow-sm border border-sky-100">
                  Özel Fiyat Teklifi Alınız
                </span>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-1.5 sm:space-y-2">
              <h3 className="text-[11px] sm:text-xs font-extrabold text-slate-400 uppercase tracking-widest">Ürün Açıklaması</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">{description}</p>
            </div>

            {/* Capacity Option Selection */}
            <div className="space-y-2.5 sm:space-y-3 pt-1">
              <div className="flex justify-between items-center">
                <label className="text-[11px] sm:text-xs font-extrabold text-slate-900 uppercase tracking-wider">
                  Kapasite / Ölçü Seçiniz:
                </label>
                <span className="text-[11px] sm:text-xs font-bold text-sky-600">{selectedCapacityOption}</span>
              </div>
              <div className="grid grid-cols-2 gap-2 sm:gap-2.5">
                {options.map((opt: string) => (
                  <button
                    key={opt}
                    onClick={() => setSelectedCapacityOption(opt)}
                    className={`py-2.5 sm:py-3 px-2.5 sm:px-3 rounded-lg sm:rounded-xl text-[11px] sm:text-xs font-bold border transition-all text-center ${
                      selectedCapacityOption === opt
                        ? 'bg-sky-600 text-white border-sky-600 shadow-sm scale-[1.02]'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center justify-between p-3 sm:p-4 bg-slate-50 rounded-xl sm:rounded-2xl border border-slate-200">
              <label className="text-[11px] sm:text-xs font-extrabold text-slate-900 uppercase tracking-wider">Talep Edilen Adet:</label>
              <div className="inline-flex items-center bg-white border border-slate-200 rounded-lg sm:rounded-xl p-1 shadow-sm">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-md sm:rounded-lg bg-slate-100 text-slate-800 font-bold text-xs flex items-center justify-center hover:bg-slate-200"
                >
                  -
                </button>
                <span className="w-8 sm:w-10 text-center font-extrabold text-xs sm:text-sm text-slate-900">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-md sm:rounded-lg bg-slate-100 text-slate-800 font-bold text-xs flex items-center justify-center hover:bg-slate-200"
                >
                  +
                </button>
              </div>
            </div>

            {/* ─── PRIMARY ACTION: WHATSAPP SİPARİŞ & TEKLİF AL ─── */}
            <div className="space-y-2.5 sm:space-y-3 pt-1">
              <button
                onClick={handleDirectWhatsAppOrder}
                className="whatsapp-pulse w-full py-3.5 sm:py-5 px-5 sm:px-6 rounded-xl sm:rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs sm:text-base shadow-lg shadow-emerald-500/25 hover:scale-[1.01] transition-all flex items-center justify-center gap-2 sm:gap-3"
              >
                <MessageSquare className="w-4 h-4 sm:w-6 sm:h-6 fill-current" />
                <span>WHATSAPP İLE TEKLİF AL</span>
              </button>

              <button
                onClick={handleWhatsAppQuote}
                className="w-full py-3 sm:py-3.5 px-5 sm:px-6 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs shadow-sm transition-all flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span>ANINDA BİLGİ & TEKLİF AL</span>
              </button>

              <a
                href={`tel:${PHONE_DISPLAY.replace(/\s+/g, '')}`}
                className="w-full py-3 sm:py-3.5 px-5 sm:px-6 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs border border-slate-200 transition-all flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-sky-600" />
                <span>TELEFONDAN İLETİŞİME GEÇ ({PHONE_DISPLAY})</span>
              </a>
            </div>

            {/* Highlights Bullets */}
            <div className="pt-3 sm:pt-4 border-t border-slate-100 space-y-2">
              <h4 className="text-[10px] sm:text-xs font-extrabold text-slate-400 uppercase tracking-widest mb-2 sm:mb-3">
                Öne Çıkan Standart Özellikler
              </h4>
              {features.map((feat: string, idx: number) => (
                <div key={idx} className="flex items-center gap-2 text-[11px] sm:text-xs text-slate-700 font-semibold">
                  <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 stroke-[3]" />
                  </div>
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            {/* Full Specifications Table */}
            <div className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl space-y-3 sm:space-y-4 bg-slate-50 border border-slate-200">
              <h3 className="text-xs sm:text-sm font-extrabold text-slate-900 uppercase tracking-wider border-b border-slate-200 pb-2 sm:pb-3">
                Teknik Özellikler Tablosu
              </h3>

              <div className="space-y-2 text-[11px] sm:text-xs">
                <div className="flex justify-between py-1 border-b border-slate-200/60">
                  <span className="text-slate-500 font-semibold">Hammadde / Gövde:</span>
                  <span className="font-bold text-slate-900 text-right">{material}</span>
                </div>

                <div className="flex justify-between py-1 border-b border-slate-200/60">
                  <span className="text-slate-500 font-semibold">Ölçüler & Ebat:</span>
                  <span className="font-bold text-slate-900 text-right">{specs.dimensions}</span>
                </div>

                <div className="flex justify-between py-1 border-b border-slate-200/60">
                  <span className="text-slate-500 font-semibold">Et Kalınlığı:</span>
                  <span className="font-bold text-slate-900 text-right">{specs.thickness}</span>
                </div>

                <div className="flex justify-between py-1 border-b border-slate-200/60">
                  <span className="text-slate-500 font-semibold">Çıkış / Rekor Çapı:</span>
                  <span className="font-bold text-slate-900 text-right">{specs.outletSize}</span>
                </div>

                <div className="flex justify-between py-1 border-b border-slate-200/60">
                  <span className="text-slate-500 font-semibold">Garanti Süresi:</span>
                  <span className="font-extrabold text-emerald-700 text-right">{specs.warranty}</span>
                </div>

                <div className="flex justify-between py-1">
                  <span className="text-slate-500 font-semibold">Sağlık Sertifikası:</span>
                  <span className="font-bold text-sky-700 text-right">%100 Gıda Onaylı & BPA Free</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

'use client'

import React, { useState } from 'react'
import { Calculator, ArrowRight, Droplets } from 'lucide-react'
import { getWhatsAppUrl } from '../lib/whatsapp'

interface CalculatorSectionProps {
  onOrderCapacity?: (capacityStr: string) => void
  siteSettings?: any
}

export const CalculatorSection: React.FC<CalculatorSectionProps> = ({ onOrderCapacity, siteSettings }) => {
  const [people, setPeople] = useState<number>(12)
  const [usageType, setUsageType] = useState<string>('residential')
  const [reserveDays, setReserveDays] = useState<number>(2)

  const title = siteSettings?.calculatorTitle || 'İhtiyacınıza Uygun Depo Hacmini Hesaplayın'
  const subtitle = siteSettings?.calculatorSubtitle || 'Kişi sayısı, kullanım amacı ve istediğiniz yedekleme süresine göre ideal su deposu kapasitenizi otomatik belirleyin.'
  const whatsappNumber = siteSettings?.whatsapp

  const consumptionMap: Record<string, number> = {
    residential: 150,
    apartment: 120,
    commercial: 80,
    industrial: 60,
  }

  const calculateCapacity = () => {
    const perPerson = consumptionMap[usageType] || 150
    const total = people * perPerson * reserveDays
    return Math.ceil(total / 100) * 100
  }

  const calculatedLiters = calculateCapacity()

  const getRecommendedTank = (liters: number) => {
    if (liters <= 1000) return 'Polietilen Dikey Su Deposu 1.000 L'
    if (liters <= 3000) return 'Polietilen Dikey Su Deposu 3.000 L'
    if (liters <= 5000) return 'Polietilen Dikey Su Deposu 5.000 L'
    if (liters <= 10000) return 'Polyester Yatay Su Deposu 10.000 L'
    return 'Paslanmaz Modüler Su Deposu (Özel Hacim)'
  }

  const handleOrderClick = () => {
    const capacityStr = `${calculatedLiters.toLocaleString('tr-TR')} Litre`
    if (onOrderCapacity) {
      onOrderCapacity(capacityStr)
    } else {
      const text = `Merhaba İlhan Su Depoları, Depo Kapasite Hesaplama Aracı üzerinden teklif almak istiyorum:\n- *Hesaplanan İhtiyaç:* ${capacityStr}\n- *Tavsiye Edilen Depo:* ${getRecommendedTank(calculatedLiters)}\n- *Kullanım Alanı:* ${usageType}\n- *Kişi Sayısı:* ${people} Kişi\n- *Yedekleme:* ${reserveDays} Gün`
      window.open(getWhatsAppUrl(whatsappNumber, text), '_blank')
    }
  }

  return (
    <section id="calculator" className="section-padding bg-slate-50 relative overflow-hidden border-b border-slate-200/80">
      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100/80 border border-sky-200 text-sky-800 text-xs font-bold uppercase tracking-widest shadow-sm">
            <Calculator className="w-3.5 h-3.5 text-sky-600" />
            <span>İHTİYAÇ ANALİZİ & DEPO HACMİ HESAPLAYICI</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug sm:leading-tight">
            {title}
          </h2>
          <p className="text-slate-600 text-xs sm:text-base leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Calculator Grid Card (Full Light Theme) */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-5 sm:p-8 lg:p-10 border border-slate-200 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
            {/* Form Inputs */}
            <div className="lg:col-span-7 space-y-5">
              {/* Usage Type Select */}
              <div>
                <label className="text-xs font-extrabold text-slate-700 uppercase tracking-wider block mb-2">
                  Kullanım Alanı Tipi
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { id: 'residential', label: 'Müstakil Ev / Villa' },
                    { id: 'apartment', label: 'Apartman / Site' },
                    { id: 'commercial', label: 'Ofis / Restoran' },
                    { id: 'industrial', label: 'Fabrika / Şantiye' },
                  ].map(type => (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => setUsageType(type.id)}
                      className={`p-3 rounded-xl border text-xs font-bold text-left transition-all cursor-pointer ${
                        usageType === type.id
                          ? 'bg-sky-600 text-white border-sky-600 shadow-sm'
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      {type.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* People Count Range Slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-extrabold text-slate-700 uppercase tracking-wider">
                    Faydalanacak Kişi Sayısı
                  </label>
                  <span className="text-xs font-mono font-extrabold text-sky-800 bg-sky-100 px-3 py-1 rounded-lg border border-sky-200">
                    {people} Kişi
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="100"
                  value={people}
                  onChange={e => setPeople(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-sky-600"
                />
                <div className="flex justify-between text-[10px] text-slate-500 mt-1 font-mono">
                  <span>1 Kişi</span>
                  <span>50 Kişi</span>
                  <span>100+ Kişi</span>
                </div>
              </div>

              {/* Reserve Days */}
              <div>
                <label className="text-xs font-extrabold text-slate-700 uppercase tracking-wider block mb-2">
                  Kaç Günlük Kesintisiz Yedek Su İstiyorsunuz?
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {[1, 2, 3, 5].map(days => (
                    <button
                      key={days}
                      type="button"
                      onClick={() => setReserveDays(days)}
                      className={`p-3 rounded-xl border text-xs font-extrabold transition-all cursor-pointer ${
                        reserveDays === days
                          ? 'bg-sky-600 text-white border-sky-600 shadow-sm'
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      {days} Gün
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Live Output Card (Full Light Theme Output) */}
            <div className="lg:col-span-5 p-6 rounded-2xl border border-sky-200 bg-sky-50/80 text-center space-y-4 shadow-md">
              <div className="w-12 h-12 rounded-2xl bg-sky-100 text-sky-700 border border-sky-200 flex items-center justify-center mx-auto shadow-sm">
                <Droplets className="w-6 h-6" />
              </div>

              <div>
                <div className="text-[11px] font-extrabold text-slate-600 uppercase tracking-widest">ÖNERİLEN MİNİMUM KAPASİTE</div>
                <div className="text-3xl sm:text-4xl font-black text-sky-900 mt-1">
                  {calculatedLiters.toLocaleString('tr-TR')} <span className="text-xl text-sky-600 font-sans">Litre</span>
                </div>
              </div>

              <div className="pt-2 border-t border-sky-200/80 text-xs text-slate-700 space-y-1">
                <div className="text-slate-500 text-[11px]">Tavsiye Edilen Depo Modeli:</div>
                <div className="font-extrabold text-sky-900 text-xs sm:text-sm">{getRecommendedTank(calculatedLiters)}</div>
              </div>

              <button
                type="button"
                onClick={handleOrderClick}
                className="btn-emerald-whatsapp w-full py-3 px-4 text-xs font-extrabold flex items-center justify-center gap-2 shadow-sm"
              >
                <span>WHATSAPP İLE HIZLI TEKLİF AL</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

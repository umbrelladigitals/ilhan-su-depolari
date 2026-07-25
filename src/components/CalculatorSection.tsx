'use client'

import React, { useState } from 'react'
import { Calculator, ArrowRight, Droplets } from 'lucide-react'

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
  const whatsappNumber = siteSettings?.whatsapp || '903125431358'

  // Daily consumption per person (liters)
  const consumptionMap: Record<string, number> = {
    residential: 150, // Konut / Müstakil Ev (150L/gün)
    apartment: 120, // Apartman Tipi (120L/gün)
    commercial: 80, // Ofis / Restoran (80L/gün)
    industrial: 60, // Fabrika / Şantiye (60L/gün)
  }

  const calculateCapacity = () => {
    const perPerson = consumptionMap[usageType] || 150
    const total = people * perPerson * reserveDays
    return Math.ceil(total / 100) * 100 // round up to nearest 100L
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
      window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank')
    }
  }

  return (
    <section id="calculator" className="section-padding bg-slate-950 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-sky-500/10 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-bold uppercase tracking-widest">
            <Calculator className="w-3.5 h-3.5" />
            İhtiyaç Analizi & Depo Hacmi Hesaplayıcı
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-snug sm:leading-tight">
            {title}
          </h2>
          <p className="text-slate-300 text-xs sm:text-base leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Calculator Grid Card */}
        <div className="max-w-4xl mx-auto">
          <div className="double-bezel shadow-2xl">
            <div className="double-bezel-inner p-5 sm:p-8 lg:p-10 bg-slate-900 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
              {/* Form Inputs */}
              <div className="lg:col-span-7 space-y-5">
                {/* Usage Type Select */}
                <div>
                  <label className="text-xs font-extrabold text-slate-300 uppercase tracking-wider block mb-2">
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
                        onClick={() => setUsageType(type.id)}
                        className={`p-3 rounded-xl border text-xs font-bold text-left transition-all ${
                          usageType === type.id
                            ? 'bg-cyan-950/80 border-cyan-400 text-white shadow-glow-sm'
                            : 'bg-slate-950/80 border-slate-800 text-slate-400 hover:text-white'
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
                    <label className="text-xs font-extrabold text-slate-300 uppercase tracking-wider">
                      Faydalanacak Kişi Sayısı
                    </label>
                    <span className="text-xs font-mono font-extrabold text-cyan-400 bg-cyan-950 px-3 py-1 rounded-lg border border-cyan-500/30">
                      {people} Kişi
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="100"
                    value={people}
                    onChange={e => setPeople(parseInt(e.target.value))}
                    className="w-full h-2 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 mt-1 font-mono">
                    <span>1 Kişi</span>
                    <span>50 Kişi</span>
                    <span>100+ Kişi</span>
                  </div>
                </div>

                {/* Reserve Days */}
                <div>
                  <label className="text-xs font-extrabold text-slate-300 uppercase tracking-wider block mb-2">
                    Kaç Günlük Kesintisiz Yedek Su İstiyorsunuz?
                  </label>
                  <div className="grid grid-cols-4 gap-2">
                    {[1, 2, 3, 5].map(days => (
                      <button
                        key={days}
                        onClick={() => setReserveDays(days)}
                        className={`p-3 rounded-xl border text-xs font-extrabold transition-all ${
                          reserveDays === days
                            ? 'bg-gradient-to-r from-sky-600 to-cyan-600 text-white border-cyan-400 shadow-glow-sm'
                            : 'bg-slate-950/80 border-slate-800 text-slate-400 hover:text-white'
                        }`}
                      >
                        {days} Gün
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Live Output Card */}
              <div className="lg:col-span-5 p-6 rounded-2xl border border-cyan-500/30 bg-gradient-to-b from-slate-900/90 to-slate-950 text-center space-y-4 shadow-xl">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 text-cyan-400 border border-cyan-400/40 flex items-center justify-center mx-auto shadow-glow-sm">
                  <Droplets className="w-6 h-6" />
                </div>

                <div>
                  <div className="text-xs font-extrabold text-slate-400 uppercase tracking-widest">ÖNERİLEN MİNİMUM KAPASİTE</div>
                  <div className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-300 to-white mt-1">
                    {calculatedLiters.toLocaleString('tr-TR')} <span className="text-xl text-cyan-400 font-sans">Litre</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-800 text-xs text-slate-300 space-y-1">
                  <div className="text-slate-400 text-[11px]">Tavsiye Edilen Depo Modeli:</div>
                  <div className="font-extrabold text-cyan-300 text-xs sm:text-sm">{getRecommendedTank(calculatedLiters)}</div>
                </div>

                <button
                  onClick={handleOrderClick}
                  className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs shadow-md transition-all flex items-center justify-center gap-2 hover:scale-[1.02]"
                >
                  <span>WHATSAPP İLE HIZLI TEKLİF AL</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

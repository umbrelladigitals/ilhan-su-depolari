'use client'

import React, { useState } from 'react'
import { Plus, Minus, HelpCircle, MessageSquare } from 'lucide-react'

interface FaqSectionProps {
  faqs?: any[]
  siteSettings?: any
}

export const FaqSection: React.FC<FaqSectionProps> = ({ faqs = [], siteSettings }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const defaultFaqs = [
    {
      question: 'Su depoları hangi hammaddeden üretilmektedir ve gıda tüzüğüne uygun mudur?',
      answer: 'Polietilen su depolarımız 1. kalite Lineer Alçak Yoğunluklu Polietilen (LLDPE) hammaddeden üretilmekte olup T.C. Sağlık Bakanlığı İçme Suyu Kodeksine %100 uygundur. Yosun tutmaz, koku yapmaz ve BPA içermez.',
    },
    {
      question: 'Türkiye geneline teslimatınız var mı? Vinçli araç hizmeti sağlanıyor mu?',
      answer: 'Evet, 81 il ve ilçeye kendi özmal lojistik filomuz ile teslimat yapıyoruz. Büyük tonajlı veya ağır depolar için vinçli araçlarımızla doğrudan adresinizde istenilen noktaya indirme sağlıyoruz.',
    },
    {
      question: 'Paslanmaz modüler su depoları dar alanlara ve bodrum katlara kurulabilir mi?',
      answer: 'Paslanmaz modüler depolarımız standart paneller halinde imal edildiğinden dar bina girişlerinden ve kazan dairelerinden kolayca geçer. Uzman ekibimiz yerinde montajını gerçekleştirir.',
    },
  ]

  const items = faqs.length > 0 ? faqs : defaultFaqs
  const whatsappNumber = siteSettings?.whatsapp || '903125431358'

  return (
    <section id="faq" className="section-padding bg-slate-50 border-b border-slate-200/60 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center space-y-3 mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100/80 border border-sky-200 text-sky-800 text-xs font-bold shadow-sm">
            <HelpCircle className="w-3.5 h-3.5 text-sky-600" />
            <span>Sıkça Sorulan Sorular (SSS)</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Aklınıza Takılan Tüm Sorular
          </h2>
          <p className="text-slate-600 text-xs sm:text-base leading-relaxed">
            Depo seçimi, kurulum, lojistik ve garanti süreçlerimiz hakkında merak edilenler.
          </p>
        </div>

        {/* FAQ Accordions List */}
        <div className="space-y-3 sm:space-y-4">
          {items.map((faq, idx) => {
            const isOpen = openIndex === idx
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden transition-all duration-300 hover:border-sky-300"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-4 sm:p-6 text-left flex justify-between items-center gap-4 bg-white hover:bg-slate-50 transition-colors"
                >
                  <span className="text-sm sm:text-base font-extrabold text-slate-900 leading-snug">
                    {faq.question || faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    isOpen ? 'bg-sky-600 text-white rotate-180 shadow-md' : 'bg-slate-100 text-slate-600'
                  }`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 pb-5 sm:px-6 sm:pb-6 pt-2 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                    {faq.answer || faq.a}
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* WhatsApp Help CTA Box */}
        <div className="mt-10 sm:mt-14 p-6 rounded-2xl bg-emerald-50 border border-emerald-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-sm">
          <div>
            <h4 className="text-sm font-extrabold text-slate-900">Farklı Bir Sorunuz Mu Var?</h4>
            <p className="text-xs text-slate-600 mt-0.5">Teknik ekibimiz WhatsApp üzerinden sorularınızı anında yanıtlar.</p>
          </div>
          <a
            href={`https://wa.me/${whatsappNumber}?text=Merhaba,%20İlhan%20Su%20Depoları%20hakkında%20sorum%20var.`}
            target="_blank"
            rel="noreferrer"
            className="btn-emerald-whatsapp px-5 py-3 text-xs flex items-center justify-center gap-2 shrink-0"
          >
            <MessageSquare className="w-4 h-4 fill-current" />
            <span>WhatsApp Canlı Destek</span>
          </a>
        </div>

      </div>
    </section>
  )
}

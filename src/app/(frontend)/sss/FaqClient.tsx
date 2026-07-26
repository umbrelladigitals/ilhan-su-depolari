'use client'

import React, { useState } from 'react'
import { Plus, Minus, HelpCircle, MessageSquare } from 'lucide-react'

interface FaqClientProps {
  initialFaqs: { id: string | number; question: string; answer: string; category?: string }[]
}

export const FaqClient: React.FC<FaqClientProps> = ({ initialFaqs }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <>
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3 mb-10 sm:mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100/80 border border-sky-200 text-sky-800 text-xs font-bold shadow-sm">
          <HelpCircle className="w-3.5 h-3.5 text-sky-600" />
          <span>Sıkça Sorulan Sorular (SSS)</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Merak Edilen Tüm Sorular
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          Depo seçimi, pompa debi hesabı, lojistik ve garanti süreçlerimiz hakkında tüm cevaplar.
        </p>
      </div>

      {/* FAQ List */}
      <div className="space-y-4">
        {initialFaqs.map((faq, idx) => {
          const isOpen = openIndex === idx
          return (
            <div key={faq.id || idx} className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden transition-all duration-300 hover:border-sky-300">
              <button
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="w-full p-5 sm:p-6 text-left flex justify-between items-center gap-4 bg-white hover:bg-slate-50 transition-colors"
              >
                <span className="text-sm sm:text-base font-extrabold text-slate-900 leading-snug">{faq.question}</span>
                <div
                  className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    isOpen ? 'bg-sky-600 text-white rotate-180 shadow-md' : 'bg-slate-100 text-slate-600'
                  }`}
                >
                  {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </div>
              </button>

              {isOpen && (
                <div className="px-5 pb-6 sm:px-6 sm:pb-6 pt-2 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                  {faq.answer}
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* WhatsApp Box */}
      <div className="mt-12 p-6 rounded-2xl bg-emerald-50 border border-emerald-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-sm">
        <div>
          <h4 className="text-sm font-extrabold text-slate-900">Farklı Bir Sorunuz Var mı?</h4>
          <p className="text-xs text-slate-600 mt-0.5">Müşteri temsilcimiz WhatsApp üzerinden sorularınızı anında yanıtlar.</p>
        </div>
        <a
          href="https://wa.me/903125431358?text=Merhaba,%20su%20depoları%20ve%20pompalar%20hakkında%20sorum%20var."
          target="_blank"
          rel="noreferrer"
          className="btn-emerald-whatsapp px-5 py-3 text-xs flex items-center justify-center gap-2 shrink-0"
        >
          <MessageSquare className="w-4 h-4 fill-current" />
          <span>WhatsApp Canlı Destek</span>
        </a>
      </div>
    </>
  )
}

'use client'

import React, { useState } from 'react'
import { MapPin, Phone, MessageSquare, Send, CheckCircle2, Clock } from 'lucide-react'
import { getWhatsAppUrl, formatWhatsAppDisplay } from '@/lib/whatsapp'
import { MapSection } from '@/components/MapSection'

interface ContactClientProps {
  siteSettings?: any
}

export const ContactClient: React.FC<ContactClientProps> = ({ siteSettings }) => {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    subject: 'Fiyat Teklifi ve Bilgi',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const phoneDisplay = siteSettings?.phone || '0312 514 06 19'
  const factoryPhoneDisplay = siteSettings?.factoryPhone || '0312 511 07 19'
  const addressDisplay = siteSettings?.address || 'Atakent Mahallesi 1471 Sokak no 1/1 Etimesgut Ankara'
  const workingHoursDisplay = siteSettings?.workingHours || 'Pazartesi - Cumartesi 09:00 - 18:00 Pazar: Kapalı'

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formState.name || !formState.phone) {
      alert('Lütfen Ad Soyad ve Telefon numaranızı giriniz.')
      return
    }
    setSubmitted(true)
  }

  const openWhatsAppContact = () => {
    const text = `Merhaba İlhan Su Depoları, İletişim sayfasından yazıyorum:\n- *İsim:* ${formState.name}\n- *Telefon:* ${formState.phone}\n- *Konu:* ${formState.subject}\n- *Mesaj:* ${formState.message}`
    window.open(getWhatsAppUrl(siteSettings?.whatsapp, text), '_blank')
  }

  return (
    <div className="space-y-10 sm:space-y-14">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100/80 border border-sky-200 text-sky-800 text-xs font-bold shadow-sm">
          <MapPin className="w-3.5 h-3.5 text-sky-600" />
          <span>İletişim & Adres Bilgilerimiz</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Bizimle İletişime Geçin
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          Ofis ve depolarımızı ziyaret edebilir veya hatlarımız üzerinden anında teklif alabilirsiniz.
        </p>
      </div>

      {/* Main Grid: Cards + Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
        {/* Info Cards (5 cols) */}
        <div className="lg:col-span-5 space-y-4 flex flex-col justify-between">
          {/* Address */}
          <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/90 shadow-sm flex items-start gap-4 hover:border-sky-300 transition-colors">
            <div className="w-11 h-11 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">Adresimiz</h4>
              <p className="text-xs text-slate-700 font-medium mt-1 leading-relaxed">
                {addressDisplay}
              </p>
            </div>
          </div>

          {/* Phone & Fax */}
          <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/90 shadow-sm flex items-start gap-4 hover:border-sky-300 transition-colors">
            <div className="w-11 h-11 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">Telefon Numaralarımız</h4>
              <div className="mt-1 space-y-1">
                <a href={`tel:${phoneDisplay.replace(/\s+/g, '')}`} className="text-xs text-sky-700 font-extrabold block hover:underline">
                  Ofis: {phoneDisplay}
                </a>
                <a href={`tel:${factoryPhoneDisplay.replace(/\s+/g, '')}`} className="text-xs text-sky-700 font-extrabold block hover:underline">
                  Fabrika: {factoryPhoneDisplay}
                </a>
              </div>
              <p className="text-[11px] text-slate-500 mt-1">Sipariş, bilgi ve teklif hattı</p>
            </div>
          </div>

          {/* Working Hours */}
          <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/90 shadow-sm flex items-start gap-4 hover:border-amber-300 transition-colors">
            <div className="w-11 h-11 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">Çalışma Saatleri</h4>
              <p className="text-xs text-slate-800 font-semibold mt-1">{workingHoursDisplay}</p>
            </div>
          </div>

          {/* WhatsApp */}
          <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/90 shadow-sm flex items-start gap-4 hover:border-emerald-300 transition-colors">
            <div className="w-11 h-11 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
              <MessageSquare className="w-5 h-5 fill-current" />
            </div>
            <div>
              <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">WhatsApp Canlı Destek</h4>
              <a
                href={getWhatsAppUrl(siteSettings?.whatsapp, 'Merhaba, su depoları ve pompaları hakkında bilgi almak istiyorum.')}
                target="_blank"
                rel="noreferrer"
                className="text-xs text-emerald-700 font-extrabold mt-1 block hover:underline"
              >
                {formatWhatsAppDisplay(siteSettings?.whatsapp)} (Anında Yanıt)
              </a>
            </div>
          </div>
        </div>

        {/* Form (7 cols) */}
        <div className="lg:col-span-7">
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/90 shadow-sm h-full flex flex-col justify-between">
            <div>
              <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-1">Hızlı İletişim Formu</h3>
              <p className="text-xs text-slate-500 mb-6">Formu doldurarak anında temsilcimizle iletişim kurabilirsiniz.</p>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-slate-700 block mb-1">Adınız Soyadınız *</label>
                      <input
                        type="text"
                        value={formState.name}
                        onChange={e => setFormState({ ...formState, name: e.target.value })}
                        placeholder="Ahmet Yılmaz"
                        className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:ring-2 focus:ring-sky-500 focus:outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-slate-700 block mb-1">Telefon Numarası *</label>
                      <input
                        type="text"
                        value={formState.phone}
                        onChange={e => setFormState({ ...formState, phone: e.target.value })}
                        placeholder={phoneDisplay}
                        className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:ring-2 focus:ring-sky-500 focus:outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1">Konu</label>
                    <select
                      value={formState.subject}
                      onChange={e => setFormState({ ...formState, subject: e.target.value })}
                      className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:ring-2 focus:ring-sky-500 focus:outline-none transition-all"
                    >
                      <option value="Fiyat Teklifi ve Bilgi">Fiyat Teklifi ve Ürün Bilgisi</option>
                      <option value="Pompa ve Depo Seçimi">Pompa ve Depo Seçimi</option>
                      <option value="Bayilik & Toptan Alım">Bayilik & Toptan Alım</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1">Mesajınız</label>
                    <textarea
                      rows={4}
                      value={formState.message}
                      onChange={e => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Hangi depo tipi hakkında bilgi almak istiyorsunuz?"
                      className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:ring-2 focus:ring-sky-500 focus:outline-none transition-all"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      className="btn-primary-sky flex-1 py-3 px-6 text-xs font-extrabold flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>GÖNDER & KAYDET</span>
                    </button>

                    <button
                      type="button"
                      onClick={openWhatsAppContact}
                      className="btn-emerald-whatsapp flex-1 py-3 px-6 text-xs font-extrabold flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <MessageSquare className="w-4 h-4 fill-current" />
                      <span>WHATSAPP İLE GÖNDER</span>
                    </button>
                  </div>
                </form>
              ) : (
                <div className="text-center py-10 space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-extrabold text-slate-900">Mesajınız Alındı!</h4>
                  <p className="text-xs text-slate-600">Temsilcimiz en kısa sürede dönüş yapacaktır.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Google Map Embed Section */}
      <MapSection siteSettings={siteSettings} />
    </div>
  )
}

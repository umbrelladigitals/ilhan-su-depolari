'use client'

import React, { useState } from 'react'
import { MapPin, Phone, Mail, MessageSquare, Send, CheckCircle2, Clock } from 'lucide-react'

interface ContactSectionProps {
  siteSettings?: any
}

export const ContactSection: React.FC<ContactSectionProps> = ({ siteSettings }) => {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    subject: 'Fiyat Teklifi ve Bilgi',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const whatsappNumber = siteSettings?.whatsapp || '903125431358'
  const phoneDisplay = siteSettings?.phone || '0312 543 1358'
  const address = siteSettings?.address || 'Ostim OSB Mahallesi 100. Yıl Bulvarı No: 45 Yenimahalle / Ankara'
  const email = siteSettings?.email || 'info@ilhansudepolari.com'
  const workingHours = siteSettings?.workingHours || 'Pazartesi - Cumartesi: 08:30 - 18:30'

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formState.name || !formState.phone) {
      alert('Lütfen Ad Soyad ve Telefon numaranızı giriniz.')
      return
    }
    setSubmitted(true)
  }

  const openWhatsAppContact = () => {
    const text = `Merhaba İlhan Su Depoları, İletişim formu üzerinden yazıyorum:\n- *İsim:* ${formState.name}\n- *Telefon:* ${formState.phone}\n- *Konu:* ${formState.subject}\n- *Mesaj:* ${formState.message}`
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank')
  }

  return (
    <section id="contact" className="section-padding bg-slate-50 relative border-b border-slate-200/60">
      <div className="container-custom">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100/80 border border-sky-200 text-sky-800 text-xs font-bold shadow-sm">
            <MapPin className="w-3.5 h-3.5 text-sky-600" />
            <span>İletişim & Fabrika Adresimiz</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Bizimle İletişime Geçin
          </h2>

          <p className="text-slate-600 text-xs sm:text-base leading-relaxed">
            Ankara Ostim fabrikamıza uğrayabilir veya doğrudan WhatsApp teklif hattımızdan bilgi alabilirsiniz.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">

          {/* Contact Cards */}
          <div className="lg:col-span-5 space-y-4">

            <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-sm flex items-start gap-4 hover:border-sky-300 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">Fabrika & Genel Merkez</h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  {address}
                </p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-sm flex items-start gap-4 hover:border-emerald-300 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                <MessageSquare className="w-5 h-5 fill-current" />
              </div>
              <div>
                <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">WhatsApp Canlı Hat</h4>
                <a
                  href={`https://wa.me/${whatsappNumber}?text=Merhaba,%20İlhan%20Su%20Depoları%20ürünleri%20hakkında%20bilgi%20almak%20istiyorum.`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-emerald-700 font-extrabold mt-1 block hover:underline"
                >
                  {phoneDisplay} (7/24 Aktif)
                </a>
                <p className="text-[11px] text-slate-500 mt-0.5">Anlık teknik bilgi ve fiyat teklif hattı</p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-sm flex items-start gap-4 hover:border-sky-300 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">Müşteri Hizmetleri</h4>
                <a href={`tel:${phoneDisplay.replace(/\s+/g, '')}`} className="text-xs text-slate-800 font-extrabold mt-1 block hover:text-sky-700">
                  {phoneDisplay}
                </a>
                <p className="text-[11px] text-slate-500 mt-0.5">{workingHours}</p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-sm flex items-start gap-4 hover:border-purple-300 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">Kurumsal E-Posta</h4>
                <p className="text-xs text-sky-700 font-bold mt-1">
                  {email}
                </p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-sm flex items-start gap-4 hover:border-amber-300 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">Çalışma Saatleri</h4>
                <p className="text-xs text-slate-700 font-semibold mt-1">{workingHours}</p>
              </div>
            </div>

          </div>

          {/* Form Card */}
          <div className="lg:col-span-7">
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/90 shadow-sm h-full flex flex-col justify-between">

              <div>
                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-1">Hızlı İletişim & Teklif Formu</h3>
                <p className="text-xs text-slate-500 mb-6">Formu doldurarak anında WhatsApp mesajı olarak gönderebilirsiniz.</p>

                {!submitted ? (
                  <form onSubmit={handleSubmit} className="space-y-4">

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-semibold text-slate-700 block mb-1">Adınız Soyadınız *</label>
                        <input
                          type="text"
                          value={formState.name}
                          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                          placeholder="Ahmet Yılmaz"
                          className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs input-focus"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-semibold text-slate-700 block mb-1">Telefon Numarası *</label>
                        <input
                          type="text"
                          value={formState.phone}
                          onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                          placeholder="0532 000 00 00"
                          className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs input-focus"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-slate-700 block mb-1">Konu</label>
                      <select
                        value={formState.subject}
                        onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                        className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs input-focus"
                      >
                        <option value="Fiyat Teklifi ve Bilgi">Fiyat Teklifi ve Ürün Bilgisi</option>
                        <option value="Modüler Depo Projelendirme">Modüler Depo Projelendirme</option>
                        <option value="Bayilik & Toptan Alım">Bayilik & Toptan Alım</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-slate-700 block mb-1">Mesajınız</label>
                      <textarea
                        rows={3}
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        placeholder="Hangi depo tipi veya kapasitesi hakkında bilgi almak istiyorsunuz?"
                        className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs input-focus"
                      />
                    </div>

                    <div className="pt-2 flex flex-col sm:flex-row gap-3">
                      <button
                        type="submit"
                        className="btn-primary-sky flex-1 py-3 px-5 text-xs font-extrabold flex items-center justify-center gap-2"
                      >
                        <Send className="w-4 h-4" />
                        <span>GÖNDER & KAYDET</span>
                      </button>

                      <button
                        type="button"
                        onClick={openWhatsAppContact}
                        className="btn-emerald-whatsapp flex-1 py-3 px-5 text-xs font-extrabold flex items-center justify-center gap-2"
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

      </div>
    </section>
  )
}

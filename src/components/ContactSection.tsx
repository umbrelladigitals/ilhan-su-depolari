'use client'

import React from 'react'
import { MapPin, Phone, Clock, MessageSquare } from 'lucide-react'
import { getWhatsAppUrl, formatWhatsAppDisplay } from '../lib/whatsapp'

interface ContactSectionProps {
  siteSettings?: any
}

export const ContactSection: React.FC<ContactSectionProps> = ({ siteSettings }) => {
  const whatsappNumber = siteSettings?.whatsapp
  const phoneDisplay = siteSettings?.phone || '0312 543 1358'
  const addressDisplay = siteSettings?.address || 'Atakent Mahallesi 1471 Sokak no 1/1 Etimesgut Ankara'
  const workingHoursDisplay = siteSettings?.workingHours || 'Pazartesi - Cumartesi 09:00 - 18:00 Pazar: Kapalı'

  return (
    <section id="contact" className="section-padding bg-white text-slate-900 relative border-t border-slate-200/80">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* İletişim Bilgileri */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100/80 border border-sky-200 text-sky-800 text-xs font-bold mb-4 shadow-sm">
                <MapPin className="w-3.5 h-3.5 text-sky-600" />
                <span>FABRİKA & İLETİŞİM</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
                Bize Ulaşın & Teklif Alın
              </h2>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                Ankara Etimesgut adresimizden doğrudan teslimat ve yerinde keşif hizmeti vermekteyiz.
              </p>
            </div>

            <div className="space-y-3.5">
              <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                <div className="w-9 h-9 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-500">Fabrika & Merkez Adres</div>
                  <div className="text-xs font-bold text-slate-900 mt-0.5 leading-snug">{addressDisplay}</div>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                <div className="w-9 h-9 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-500">Telefon / Fax</div>
                  <a href={`tel:${phoneDisplay.replace(/\s+/g, '')}`} className="text-xs font-extrabold text-sky-700 hover:underline mt-0.5 block">
                    {phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                <div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-500">WhatsApp Canlı Hat</div>
                  <a
                    href={getWhatsAppUrl(whatsappNumber, 'Merhaba, İlhan Su Depoları ürünleri hakkında teklif almak istiyorum.')}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-extrabold text-emerald-600 hover:underline mt-0.5 block"
                  >
                    {formatWhatsAppDisplay(whatsappNumber)} (Tıkla & Teklif Al)
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                <div className="w-9 h-9 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-500">Çalışma Saatleri</div>
                  <div className="text-xs font-bold text-slate-800 mt-0.5">{workingHoursDisplay}</div>
                </div>
              </div>
            </div>

            <a
              href={getWhatsAppUrl(whatsappNumber, 'Merhaba, İlhan Su Depoları hakkında teklif ve fiyat almak istiyorum.')}
              target="_blank"
              rel="noreferrer"
              className="btn-emerald-whatsapp w-full py-3.5 px-4 text-xs font-extrabold flex items-center justify-center gap-2 text-center shadow-md mt-2"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>WhatsApp İle Anında Fiyat Teklifi Al</span>
            </a>
          </div>

          {/* Google Harita Embed */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-slate-200 shadow-lg h-[350px] lg:h-auto min-h-[350px]">
            <iframe
              title="İlhan Su Depoları Konum Haritası"
              src={siteSettings?.googleMapsEmbedUrl || "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3056.242!2d32.748!3d39.975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDU4JzMwLjAiTiAzMsKwNDQnNTIuOCJF!5e0!3m2!1str!2str!4v1650000000000"}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="map-iframe-container filter contrast-[1.02]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

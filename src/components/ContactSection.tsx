'use client'

import React from 'react'
import { MapPin, Phone, Mail, Clock, MessageSquare } from 'lucide-react'

interface ContactSectionProps {
  siteSettings?: any
}

export const ContactSection: React.FC<ContactSectionProps> = ({ siteSettings }) => {
  const whatsappNumber = siteSettings?.whatsapp || '903125431358'
  const phoneDisplay = siteSettings?.phone || '0312 543 1358'
  const emailDisplay = siteSettings?.email || 'info@ilhansudepolari.com'
  const addressDisplay = siteSettings?.address || 'Ostim OSB Mahallesi 100. Yıl Bulvarı No: 45 Yenimahalle / Ankara'
  const workingHoursDisplay = siteSettings?.workingHours || 'Pazartesi - Cumartesi: 08:30 - 18:30'

  return (
    <section id="contact" className="section-padding bg-slate-900 text-white relative">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* İletişim Bilgileri */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-950/80 border border-sky-400/30 text-sky-300 text-xs font-bold mb-4">
                <MapPin className="w-3.5 h-3.5 text-sky-400" />
                <span>FABRİKA & İLETİŞİM</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
                Bize Ulaşın & Teklif Alın
              </h2>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                Ankara Ostim fabrikamızdan doğrudan teslimat ve yerinde keşif hizmeti vermekteyiz.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-950/60 border border-slate-800">
                <div className="w-9 h-9 rounded-lg bg-sky-500/20 text-sky-400 border border-sky-400/30 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-300">Fabrika & Merkez Adres</div>
                  <div className="text-xs text-white mt-0.5 leading-snug">{addressDisplay}</div>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-950/60 border border-slate-800">
                <div className="w-9 h-9 rounded-lg bg-sky-500/20 text-sky-400 border border-sky-400/30 flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-300">Telefon Hatlarımız</div>
                  <a href={`tel:${phoneDisplay.replace(/\s+/g, '')}`} className="text-xs text-white hover:text-sky-400 transition-colors mt-0.5 block font-extrabold">
                    {phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-950/60 border border-slate-800">
                <div className="w-9 h-9 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-400/30 flex items-center justify-center shrink-0 mt-0.5">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-300">WhatsApp Canlı Hat</div>
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=Merhaba,%20İlhan%20Su%20Depoları%20ürünleri%20hakkında%20teklif%20almak%20istiyorum.`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs text-emerald-400 hover:underline mt-0.5 block font-extrabold"
                  >
                    +90 312 543 1358 (Tıkla & Teklif Al)
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-950/60 border border-slate-800">
                <div className="w-9 h-9 rounded-lg bg-sky-500/20 text-sky-400 border border-sky-400/30 flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-300">Çalışma Saatleri</div>
                  <div className="text-xs text-white mt-0.5">{workingHoursDisplay}</div>
                </div>
              </div>
            </div>

            <a
              href={`https://wa.me/${whatsappNumber}?text=Merhaba,%20İlhan%20Su%20Depoları%20hakkında%20teklif%20ve%20fiyat%20almak%20istiyorum.`}
              target="_blank"
              rel="noreferrer"
              className="btn-emerald-whatsapp w-full py-3.5 px-4 text-xs font-extrabold flex items-center justify-center gap-2 text-center shadow-lg mt-2"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>WhatsApp İle Anında Fiyat Teklifi Al</span>
            </a>
          </div>

          {/* Google Harita Embed */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl h-[350px] lg:h-auto min-h-[350px]">
            <iframe
              title="İlhan Su Depoları Konum Haritası"
              src={siteSettings?.googleMapsEmbedUrl || "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3056.242!2d32.748!3d39.975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDU4JzMwLjAiTiAzMsKwNDQnNTIuOCJF!5e0!3m2!1str!2str!4v1650000000000"}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full filter contrast-[1.05] brightness-[0.95]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

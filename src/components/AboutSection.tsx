'use client'

import React from 'react'
import Link from 'next/link'
import { Award, ShieldCheck, CheckCircle2, Building2, Factory, Users, ArrowRight } from 'lucide-react'

interface AboutSectionProps {
  siteSettings?: any
}

export const AboutSection: React.FC<AboutSectionProps> = ({ siteSettings }) => {
  const title = siteSettings?.aboutTitle || '25 Yıllık Sanayi Tecrübesiyle Güvenli Su Depolama'
  const description = siteSettings?.aboutDescription || 'İlhan Su Depoları olarak 2001 yılından bu yana Ankara Ostim sanayisinde gıda sınıfı polietilen, 304/316 paslanmaz çelik ve mukavemetli polyester su depoları imalatı gerçekleştiriyoruz.'
  const statExperience = siteSettings?.statExperience || '25+'
  const statTanks = siteSettings?.statTanksProduced || '15.000+'
  const statSatisfaction = siteSettings?.statSatisfaction || '%99.8'

  return (
    <section className="section-padding bg-white text-slate-900 relative overflow-hidden border-b border-slate-200/80">
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* Left Text Column */}
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100/80 border border-sky-200 text-sky-800 text-xs font-extrabold uppercase tracking-wider shadow-sm">
              <Building2 className="w-3.5 h-3.5 text-sky-600" />
              <span>KURUMSAL & ÜRETİM GÜCÜ</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
              {title}
            </h2>

            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              {description}
            </p>

            {/* Quality List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs sm:text-sm text-slate-700 font-bold">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Sağlık Bakanlığı Onaylı Gıda Uygunluğu</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>304 / 316 Paslanmaz Çelik Seçeneği</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Monoblok Dikişsiz Tek Parça Gövde</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Dar Alanda Yerinde Montaj İmkanı</span>
              </div>
            </div>

            <div className="pt-3">
              <Link
                href="/kurumsal"
                className="btn-primary-sky inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-extrabold"
              >
                <span>Kurumsal Detaylar ve Sertifikalar</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Stats & Highlights Grid (Full Light Theme) */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-slate-50 p-5 sm:p-6 rounded-2xl border border-slate-200/90 text-center space-y-2 hover:border-sky-300 hover:shadow-lg transition-all">
              <div className="w-12 h-12 mx-auto rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center border border-sky-200">
                <Factory className="w-6 h-6" />
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-slate-900">{statExperience}</div>
              <div className="text-xs sm:text-sm text-slate-600 font-bold">Yıllık Üretim Tecrübesi</div>
            </div>

            <div className="bg-slate-50 p-5 sm:p-6 rounded-2xl border border-slate-200/90 text-center space-y-2 hover:border-emerald-300 hover:shadow-lg transition-all">
              <div className="w-12 h-12 mx-auto rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center border border-emerald-200">
                <Award className="w-6 h-6" />
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-slate-900">{statTanks}</div>
              <div className="text-xs sm:text-sm text-slate-600 font-bold">Teslim Edilen Su Deposu</div>
            </div>

            <div className="bg-slate-50 p-5 sm:p-6 rounded-2xl border border-slate-200/90 text-center space-y-2 hover:border-sky-300 hover:shadow-lg transition-all">
              <div className="w-12 h-12 mx-auto rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center border border-sky-200">
                <Users className="w-6 h-6" />
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-slate-900">{statSatisfaction}</div>
              <div className="text-xs sm:text-sm text-slate-600 font-bold">Müşteri Memnuniyeti</div>
            </div>

            <div className="bg-slate-50 p-5 sm:p-6 rounded-2xl border border-slate-200/90 text-center space-y-2 hover:border-emerald-300 hover:shadow-lg transition-all">
              <div className="w-12 h-12 mx-auto rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center border border-emerald-200">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-slate-900">10 Yıl</div>
              <div className="text-xs sm:text-sm text-slate-600 font-bold">Gövde & Sızdırmazlık Garantisi</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

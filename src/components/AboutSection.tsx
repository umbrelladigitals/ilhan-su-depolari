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
    <section className="section-padding bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white relative overflow-hidden">
      {/* Background Glow Lights */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Text Column */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-950/80 border border-sky-500/30 text-sky-300 text-xs font-extrabold uppercase tracking-wider">
              <Building2 className="w-3.5 h-3.5" />
              <span>Kurumsal & Üretim Gücü</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
              {title}
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {description}
            </p>

            {/* Quality List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-sm text-slate-200 font-semibold">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Sağlık Bakanlığı Onaylı Gıda Uygunluğu</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>304 / 316 Paslanmaz Çelik Seçeneği</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Monoblok Dikişsiz Tek Parça Gövde</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Dar Alanda Yerinde Montaj İmkanı</span>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/kurumsal"
                className="btn-primary-sky inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-extrabold"
              >
                <span>Kurumsal Detaylar ve Sertifikalar</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Stats & Highlights Grid */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-slate-800/60 backdrop-blur-md p-6 rounded-2xl border border-white/10 text-center space-y-2 hover:border-sky-500/40 transition-colors">
              <div className="w-12 h-12 mx-auto rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center border border-sky-400/30">
                <Factory className="w-6 h-6" />
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-white">{statExperience}</div>
              <div className="text-xs sm:text-sm text-slate-300 font-medium">Yıllık Üretim Tecrübesi</div>
            </div>

            <div className="bg-slate-800/60 backdrop-blur-md p-6 rounded-2xl border border-white/10 text-center space-y-2 hover:border-emerald-500/40 transition-colors">
              <div className="w-12 h-12 mx-auto rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-400/30">
                <Award className="w-6 h-6" />
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-white">{statTanks}</div>
              <div className="text-xs sm:text-sm text-slate-300 font-medium">Teslim Edilen Su Deposu</div>
            </div>

            <div className="bg-slate-800/60 backdrop-blur-md p-6 rounded-2xl border border-white/10 text-center space-y-2 hover:border-sky-500/40 transition-colors">
              <div className="w-12 h-12 mx-auto rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center border border-sky-400/30">
                <Users className="w-6 h-6" />
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-white">{statSatisfaction}</div>
              <div className="text-xs sm:text-sm text-slate-300 font-medium">Müşteri Memnuniyet Oranı</div>
            </div>

            <div className="bg-slate-800/60 backdrop-blur-md p-6 rounded-2xl border border-white/10 text-center space-y-2 hover:border-emerald-500/40 transition-colors">
              <div className="w-12 h-12 mx-auto rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-400/30">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-white">10 Yıl</div>
              <div className="text-xs sm:text-sm text-slate-300 font-medium">Gövde & Sızdırmazlık Garantisi</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

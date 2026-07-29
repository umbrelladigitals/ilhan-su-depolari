import React from 'react'
import { ShieldCheck, Factory, Truck, CheckCircle2, Building, FileCheck } from 'lucide-react'

export const CorporateSection: React.FC = () => {
  return (
    <section id="corporate" className="section-padding bg-slate-950 relative overflow-hidden">

      {/* Glow Orbs */}
      <div className="absolute top-10 right-10 w-72 sm:w-96 h-72 sm:h-96 bg-brand-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-72 sm:w-96 h-72 sm:h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2 sm:space-y-4 mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-3.5 sm:py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-[11px] sm:text-xs font-bold uppercase tracking-widest">
            <Building className="w-3.5 h-3.5" />
            İlhan Su Depoları Kurumsal
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-snug sm:leading-tight">
            25 Yıllık Sanayi Tecrübesi ve <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-brand-400">
              Yüksek Teknolojik Üretim Gücü
            </span>
          </h2>
          <p className="text-slate-300 text-xs sm:text-base">
            Gıda kodeksine %100 uygun LLDPE polietilen hammaddeleri ile Türkiye'nin plastik su depolama teknolojisi lideri.
          </p>
        </div>

        {/* Corporate Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mb-10 sm:mb-16">

          <div className="double-bezel">
            <div className="double-bezel-inner p-5 sm:p-8 bg-[#09172c] space-y-3 sm:space-y-4 h-full">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-cyan-500/20 text-cyan-400 border border-cyan-400/30 flex items-center justify-center">
                <Factory className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white">Modern Üretim Parkuru</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Tam otomatik rotasyon kalıplama fırınları ile pürüzsüz, monoblok ve mukavemeti artırılmış plastik su depoları imal ediyoruz.
              </p>
              <ul className="space-y-1.5 pt-2 border-t border-slate-800 text-[11px] sm:text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 shrink-0" />
                  <span>Monoblok Ek Yersiz Dikey Depolar</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 shrink-0" />
                  <span>UV Katkılı Sağlık Onaylı Plastik Gövde</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="double-bezel">
            <div className="double-bezel-inner p-5 sm:p-8 bg-[#09172c] space-y-3 sm:space-y-4 h-full">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-400/30 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white">Uluslararası Sertifikasyon</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Tüm ürünlerimiz T.C. Sağlık Bakanlığı içme suyuna uygunluk belgesi, ISO 9001:2015 kalite yönetim sertifikası ve CE normlarına sahiptir.
              </p>
              <ul className="space-y-1.5 pt-2 border-t border-slate-800 text-[11px] sm:text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 shrink-0" />
                  <span>BPA Free & %100 Gıda Kodeksli</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 shrink-0" />
                  <span>ISO 9001 & CE Kalite Sertifikalı</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="double-bezel">
            <div className="double-bezel-inner p-5 sm:p-8 bg-[#09172c] space-y-3 sm:space-y-4 h-full">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-brand-500/20 text-brand-400 border border-brand-400/30 flex items-center justify-center">
                <Truck className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white">Özmal Lojistik Filosu</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Kendi özmal vinçli ve hiyap dorse nakliye filomuz ile sipariş verdiğiniz gün üretime alıyor, adresinize doğrudan indirerek teslim ediyoruz.
              </p>
              <ul className="space-y-1.5 pt-2 border-t border-slate-800 text-[11px] sm:text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 shrink-0" />
                  <span>81 İl İlçe ve Şantiyeye Teslimat</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 shrink-0" />
                  <span>Vinçli İndirme & Saha Destek Ekibi</span>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Certificates Showcase Banner */}
        <div className="glass-panel p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-sky-500/20 bg-slate-900/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center text-cyan-400 shrink-0">
              <FileCheck className="w-5 h-5 sm:w-7 sm:h-7" />
            </div>
            <div>
              <h4 className="text-sm sm:text-lg font-bold text-white">Kalite Güvence ve Garanti Taahhüdümüz</h4>
              <p className="text-[11px] sm:text-xs text-slate-400">Üretim hatalarına karşı tüm depolarımız 5 ila 10 yıl birebir değişim ve yetkili servis garantisindedir.</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 text-[10px] sm:text-xs font-bold text-cyan-300">
            <span className="px-2.5 py-1 sm:px-4 sm:py-2 rounded-lg sm:rounded-xl bg-slate-950 border border-cyan-500/30">ISO 9001:2015</span>
            <span className="px-2.5 py-1 sm:px-4 sm:py-2 rounded-lg sm:rounded-xl bg-slate-950 border border-cyan-500/30">TSE ONAYLI</span>
            <span className="px-2.5 py-1 sm:px-4 sm:py-2 rounded-lg sm:rounded-xl bg-slate-950 border border-cyan-500/30">CE CERTIFIED</span>
          </div>
        </div>

      </div>
    </section>
  )
}

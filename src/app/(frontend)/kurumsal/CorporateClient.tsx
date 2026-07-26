'use client'

import React, { useState } from 'react'
import type { CorporateSubTab, JobPosition } from '@/types'
import {
  Info,
  Users,
  ShieldCheck,
  Factory,
  Truck,
  CheckCircle2,
  FileCheck,
  MessageSquare,
  Target,
  Compass,
  Award,
} from 'lucide-react'

interface CorporateClientProps {
  initialTab?: string
  initialJobs?: JobPosition[]
}

export const CorporateClient: React.FC<CorporateClientProps> = ({
  initialTab = 'about',
  initialJobs = [],
}) => {
  const [activeSubTab, setActiveSubTab] = useState<CorporateSubTab>((initialTab as CorporateSubTab) || 'about')

  // Job Application Form State
  const [applicantName, setApplicantName] = useState('')
  const [applicantPhone, setApplicantPhone] = useState('')
  const [applicantPosition, setApplicantPosition] = useState(initialJobs[0]?.title || 'Rotasyon İmalat Ustası')
  const [applicantNote, setApplicantNote] = useState('')
  const [appliedSuccess, setAppliedSuccess] = useState(false)

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault()
    if (!applicantName || !applicantPhone) {
      alert('Lütfen İsim ve Telefon alanlarını doldurunuz.')
      return
    }
    setAppliedSuccess(true)
  }

  const openWhatsAppHR = () => {
    const text = `Merhaba İlhan Su Depoları İK Departmanı, İş başvurusu yapmak istiyorum:\n- *Pozisyon:* ${applicantPosition}\n- *İsim:* ${applicantName}\n- *Telefon:* ${applicantPhone}\n- *Özgeçmiş/Not:* ${applicantNote}`
    window.open(`https://wa.me/903125431358?text=${encodeURIComponent(text)}`, '_blank')
  }

  return (
    <>
      {/* Page Main Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100/80 border border-sky-200 text-sky-800 text-xs font-bold shadow-sm">
          <Info className="w-3.5 h-3.5 text-sky-600" />
          <span>Kurumsal & Şirket Bilgileri</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          İlhan Su Depoları
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">Su Depolama Çözümlerinde Güven ve Kalitenin Adresi</p>
      </div>

      {/* Sub Navigation Bar */}
      <div className="flex justify-center mb-12">
        <div className="inline-flex p-1.5 rounded-2xl bg-white border border-slate-200 shadow-sm gap-1">
          <button
            onClick={() => setActiveSubTab('about')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all duration-300 flex items-center gap-2 ${
              activeSubTab === 'about'
                ? 'bg-sky-600 text-white shadow-md shadow-sky-600/25'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            <Info className="w-4 h-4" />
            <span>Hakkımızda</span>
          </button>

          <button
            onClick={() => setActiveSubTab('hr')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all duration-300 flex items-center gap-2 ${
              activeSubTab === 'hr'
                ? 'bg-sky-600 text-white shadow-md shadow-sky-600/25'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            <Users className="w-4 h-4" />
            <span>İnsan Kaynakları (İK)</span>
          </button>

          <button
            onClick={() => setActiveSubTab('quality')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all duration-300 flex items-center gap-2 ${
              activeSubTab === 'quality'
                ? 'bg-sky-600 text-white shadow-md shadow-sky-600/25'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            <span>Kalite & Sertifikalar</span>
          </button>
        </div>
      </div>

      {/* SUB-TAB 1: HAKKIMIZDA */}
      {activeSubTab === 'about' && (
        <div className="space-y-12 animate-fadeIn">
          {/* Intro Hero Box */}
          <div className="p-8 sm:p-12 rounded-3xl bg-slate-50 border border-slate-200/90 space-y-6 shadow-sm">
            <div className="space-y-2">
              <span className="text-xs font-bold text-sky-600 uppercase tracking-widest">Sektörün Öncü Kuruluşu</span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 leading-snug">
                İlhan Su Depoları: Su Depolama Çözümlerinde Güven ve Kalitenin Adresi
              </h2>
            </div>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              İlhan Su Depoları, kurulduğu günden bu yana su depolama teknolojileri alanında yenilikçi, dayanıklı ve hijyenik çözümler sunan sektörün öncü kuruluşlarından biridir. Yaşamın kaynağı olan suyun en sağlıklı koşullarda korunması misyonuyla yola çıkan firmamız; evsel kullanımdan endüstriyel tesislere kadar geniş bir yelpazede hizmet vermektedir.
            </p>

            <div className="p-4 rounded-2xl bg-sky-600 text-white font-extrabold text-center text-sm shadow-md">
              "Geleceği biriktiriyor, suyunuzu güvenle koruyoruz."
            </div>
          </div>

          {/* Neden İlhan Su Depoları? */}
          <div className="space-y-6">
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="text-2xl font-extrabold text-slate-900">Neden İlhan Su Depoları?</h3>
              <p className="text-xs text-slate-500 mt-1">
                Müşteri memnuniyetini ve kaliteyi merkezine alan hizmet anlayışımızla her ihtiyaca uygun su deposu modelleri geliştiriyoruz. Üretim süreçlerimizde kullandığımız son teknoloji yöntemler sayesinde uzun ömürlü ve güvenilir kullanım garantisi sunuyoruz.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="text-base font-extrabold text-slate-900">Hijyenik ve Güvenli Tasarım</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Ürünlerimiz, suyun tadını ve kokusunu bozmayan, yosun tutmayan ve UV ışınlarına karşı dayanıklı materyallerden üretilmektedir. Gıda sınıfı polietilen ham madde kullanımıyla içme suyu depolamada tam güven sağlıyoruz.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                  <Factory className="w-5 h-5" />
                </div>
                <h4 className="text-base font-extrabold text-slate-900">Geniş Ürün Yelpazesi</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Projenize en uygun; dikey su depoları, yatay su depoları, endüstriyel tip pompalar ve dalgıç pompa çözümleri ile her alana hitap ediyoruz.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center">
                  <Award className="w-5 h-5" />
                </div>
                <h4 className="text-base font-extrabold text-slate-900">Dayanıklılık ve Uzun Ömür</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Sert iklim koşullarına, darbelere ve korozyona karşı dirençli yapıya sahip olan depolarımız, yıllar boyu sorunsuz performans sergiler.
                </p>
              </div>
            </div>
          </div>

          {/* Vizyon & Misyon */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-sky-50/60 p-8 rounded-3xl space-y-3 border border-sky-100">
              <div className="w-11 h-11 rounded-xl bg-sky-600 text-white flex items-center justify-center">
                <Compass className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-extrabold text-slate-900">Vizyonumuz</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                İlhan Su Depoları olarak vizyonumuz; su depolama sistemlerinde Türkiye’nin en çok tercih edilen markası konumumuzu pekiştirerek, global standartlarda üretim yapmaktır.
              </p>
            </div>

            <div className="bg-emerald-50/60 p-8 rounded-3xl space-y-3 border border-emerald-100">
              <div className="w-11 h-11 rounded-xl bg-emerald-600 text-white flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-extrabold text-slate-900">Misyonumuz</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Sürdürülebilir çevre politikalarıyla, su tasarrufunu destekleyen ve doğa dostu polietilen su tankı çözümlerini herkes için ulaşılabilir kılmaktır.
              </p>
            </div>
          </div>

          {/* Profesyonel Çözüm Ortaklığımız */}
          <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200/90 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold">
                <Truck className="w-4 h-4" />
                Profesyonel Çözüm Ortaklığımız
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900">Projenizin Her Aşamasında Yanınızdayız</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Sadece bir ürün satıcısı değil, projenizin çözüm ortağıyız. İhtiyacınız olan kapasiteyi belirleme, yerinde inceleme ve satış sonrası destek süreçlerinde uzman ekibimizle yanınızdayız.
              </p>
            </div>

            <div className="lg:col-span-4 text-center lg:text-right">
              <a
                href="https://wa.me/903125431358?text=Merhaba,%20projemiz%20için%20su%20deposu%20ve%20pompa%20danışmanlığı%20almak%20istiyoruz."
                target="_blank"
                rel="noreferrer"
                className="btn-emerald-whatsapp py-3.5 px-6 text-xs inline-flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Teknik Danışmanlık Al</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* SUB-TAB 2: İNSAN KAYNAKLARI (İK) */}
      {activeSubTab === 'hr' && (
        <div className="space-y-12 animate-fadeIn">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Aramıza Katılın & Geleceği Birlikte İnşa Edelim
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              İlhan Su Depoları ailesine katılarak üretim, lojistik veya mühendislik kadromuzda yer alabilirsiniz.
            </p>
          </div>

          {/* Open Job Listings */}
          <div className="space-y-6">
            <h3 className="text-base font-extrabold text-slate-900 uppercase tracking-wider">Açık Pozisyonlar</h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {initialJobs.map(job => (
                <div key={job.id} className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm flex flex-col justify-between space-y-4 hover:border-sky-300 transition-colors">
                  <div className="space-y-2">
                    <div className="flex justify-between items-start">
                      <span className="text-[10px] font-extrabold text-sky-700 bg-sky-100 px-2.5 py-1 rounded-md">
                        {job.department}
                      </span>
                      <span className="text-[10px] text-slate-400 font-mono">{job.type}</span>
                    </div>
                    <h4 className="text-lg font-extrabold text-slate-900">{job.title}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">{job.description}</p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 space-y-2">
                    <div className="text-[11px] font-bold text-slate-700">Gereksinimler:</div>
                    <ul className="space-y-1 text-[11px] text-slate-500">
                      {Array.isArray(job.requirements) && job.requirements.map((req: any, i: number) => (
                        <li key={i} className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{typeof req === 'string' ? req : req?.requirement || String(req)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => setApplicantPosition(job.title)}
                    className="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-all text-center"
                  >
                    Bu Pozisyona Başvur
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Quick HR Application Form */}
          <div className="max-w-2xl mx-auto bg-slate-50 p-8 rounded-3xl border border-slate-200/90 shadow-sm">
            <h3 className="text-lg font-extrabold text-slate-900 mb-2">Hızlı İş Başvuru Formu</h3>
            <p className="text-xs text-slate-500 mb-6">
              Bilgilerinizi doldurarak doğrudan İK birimimize WhatsApp veya telefon ile başvuru iletebilirsiniz.
            </p>

            {!appliedSuccess ? (
              <form onSubmit={handleApply} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-slate-600 block mb-1">Ad Soyad *</label>
                    <input
                      type="text"
                      value={applicantName}
                      onChange={e => setApplicantName(e.target.value)}
                      placeholder="Ahmet Yılmaz"
                      className="w-full p-3 rounded-xl bg-white border border-slate-200 text-slate-900 text-xs input-focus"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-600 block mb-1">Telefon *</label>
                    <input
                      type="text"
                      value={applicantPhone}
                      onChange={e => setApplicantPhone(e.target.value)}
                      placeholder="0312 543 1358"
                      className="w-full p-3 rounded-xl bg-white border border-slate-200 text-slate-900 text-xs input-focus"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-600 block mb-1">Başvurulan Pozisyon</label>
                  <select
                    value={applicantPosition}
                    onChange={e => setApplicantPosition(e.target.value)}
                    className="w-full p-3 rounded-xl bg-white border border-slate-200 text-slate-900 text-xs input-focus"
                  >
                    {initialJobs.map(j => (
                      <option key={j.id} value={j.title}>
                        {j.title}
                      </option>
                    ))}
                    <option value="Genel Başvuru">Genel Başvuru</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-600 block mb-1">Kısa Kendinizden Bahsedin / Not</label>
                  <textarea
                    rows={3}
                    value={applicantNote}
                    onChange={e => setApplicantNote(e.target.value)}
                    placeholder="Tecrübeleriniz ve ikametgah bilginiz..."
                    className="w-full p-3 rounded-xl bg-white border border-slate-200 text-slate-900 text-xs input-focus"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button type="submit" className="btn-primary-sky flex-1 py-3 px-5 text-xs font-extrabold">
                    BAŞVURUYU GÖNDER
                  </button>
                  <button
                    type="button"
                    onClick={openWhatsAppHR}
                    className="btn-emerald-whatsapp flex-1 py-3 px-5 text-xs font-extrabold flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4 fill-current" />
                    <span>WhatsApp İK Hattı</span>
                  </button>
                </div>
              </form>
            ) : (
              <div className="text-center py-8 space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-slate-900">Başvurunuz Alındı!</h4>
                <p className="text-xs text-slate-600">İnsan kaynakları temsilcimiz en kısa sürede değerlendirecektir.</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* SUB-TAB 3: KALİTE & SERTİFİKALAR */}
      {activeSubTab === 'quality' && (
        <div className="space-y-12 animate-fadeIn">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Uluslararası Kalite Standartları & Belgelerimiz
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Tüm imalat proseslerimizde gıda sağlığı, basınç testi ve sızdırmazlık standartlarına harfiyen uyulmaktadır.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-slate-200/90 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center">
                <FileCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-extrabold text-slate-900">T.C. Sağlık Bakanlığı İçme Suyu Belgesi</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Polietilen dikey ve yatay depolarımız T.C. Sağlık Bakanlığı Temel Sağlık Hizmetleri Genel Müdürlüğü tarafından içme suyu ve gıda depolamaya uygunluk sertifikasına sahiptir.
              </p>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700">
                ✓ BPA Free • Kanserojen Madde İçermez • Yosun Tutmaz
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200/90 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-extrabold text-slate-900">ISO 9001:2015 & CE Kalite Yönetimi</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Fabrika üretim hattımız ISO 9001 standartlarında denetlenmekte, paslanmaz endüstriyel tip ve dalgıç pompalarımız Avrupa CE direktiflerine tam uyum sağlamaktadır.
              </p>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700">
                ✓ ISO 9001:2015 Sertifikalı • CE Normlarında İmalat
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

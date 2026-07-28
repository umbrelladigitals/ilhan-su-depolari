import { getPayload } from 'payload'
import config from '../payload.config'

async function updateSettings() {
  console.log('Updating Site Settings in Payload DB...')
  const payload = await getPayload({ config })

  await payload.updateGlobal({
    slug: 'site-settings',
    data: {
      siteName: 'İlhan Su Depoları',
      phone: '0312 543 1358',
      whatsapp: '+905412401119',
      email: 'info@ilhansudepolari.com',
      address: 'Atakent Mahallesi 1471 Sokak no 1/1 Etimesgut Ankara',
      workingHours: 'Pazartesi - Cumartesi 09:00 - 18:00 Pazar: Kapalı',
      announcementBarText: 'İlhan Su Depoları — Etimesgut / Ankara • Türkiye Geneli Sigortalı Teslimat',
      footerText: '© 2026 İlhan Su Depoları. Tüm hakları saklıdır. Ankara polietilen ve paslanmaz modüler su deposu imalatçısı.',
      headerLogoText: 'İLHAN SU DEPOLARI',
      headerLogoSubtext: 'Depo & Pompa Sistemleri',
      navHomeText: 'Ana Sayfa',
      navProductsText: 'Ürünlerimiz',
      navCorporateText: 'Kurumsal',
      navBlogText: 'Blog',
      navFaqText: 'SSS',
      navContactText: 'İletişim',
      whatsappBtnText: 'WHATSAPP TEKLİF AL',
      aboutTitle: '25 Yıllık Sanayi Tecrübesiyle Güvenli Su Depolama',
      aboutDescription: 'İlhan Su Depoları olarak 2001 yılından bu yana Ankara Etimesgut adresimizde gıda sınıfı polietilen, 304/316 paslanmaz çelik ve mukavemetli polyester su depoları imalatı gerçekleştiriyoruz.',
      statExperience: '25+',
      statTanksProduced: '15.000+',
      statSatisfaction: '%99.8',
      calculatorTitle: 'İhtiyacınıza Uygun Depo Hacmini Hesaplayın',
      calculatorSubtitle: 'Kullanım amacınıza ve bina/kullanıcı sayınıza göre ideal su deposu kapasitesini saniyeler içinde hesaplayın.',
      siteMetaTitle: 'İlhan Su Depoları — Polietilen & Paslanmaz Modüler Su Depoları',
      siteMetaDescription: 'Ankara su deposu imalatçısı İlhan Su Depoları. Yüksek kaliteli polietilen dikey, yatay ve paslanmaz modüler su depoları uygun fiyat ve fabrika garantisiyle.',
      siteMetaKeywords: 'su deposu, ankara su deposu, polietilen su deposu, paslanmaz su deposu, su deposu fiyatları',
    } as any,
  })

  console.log('Site Settings successfully updated in DB!')
  process.exit(0)
}

updateSettings().catch(err => {
  console.error('Update Site Settings error:', err)
  process.exit(1)
})

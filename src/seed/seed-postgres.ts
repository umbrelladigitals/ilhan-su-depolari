import { getPayload } from 'payload'
import configPromise from '../payload.config'

async function seedPostgres() {
  console.log('🌱 PostgreSQL Veritabanı Seed İşlemi Başlatılıyor...')
  const payload = await getPayload({ config: configPromise })

  // 1. Admin Kullanıcısı
  const existingUsers = await payload.find({ collection: 'users', where: { email: { equals: 'admin@ilhansudepolari.com' } } })
  if (existingUsers.docs.length === 0) {
    await payload.create({
      collection: 'users',
      data: {
        email: 'admin@ilhansudepolari.com',
        password: 'Admin123456!',
      },
    })
    console.log('✅ Admin kullanıcısı oluşturuldu.')
  }

  // 2. SSS (FAQs)
  const faqsData = [
    {
      question: 'Polietilen su depoları kokma veya insan sağlığına zarar verme riski taşır mı?',
      answer: 'Hayır. Depolarımız T.C. Sağlık Bakanlığı onaylı, %100 gıda sınıfı LLDPE hammaddeden imal edilmektedir. Bakteri üretmez, kokusuzdur ve su kalitesini etkilemez.',
      order: 1,
      isPublished: true,
    },
    {
      question: 'Polietilen su depoları dar kapılardan nasıl taşınır?',
      answer: 'İnce dikey modellerimiz standart bina kapılarından ve geçitlerden kolayca geçebilecek kompakt ebatlarda imal edilmektedir.',
      order: 2,
      isPublished: true,
    },
    {
      question: 'Teslimat ve montaj süreci nasıl işlemektedir?',
      answer: 'Ankara içi fabrika teslimlerimizde aynı gün stok teslimatı yapılmaktadır. Özel üretim ve şehir dışı nakliye hizmetimiz mevcuttur.',
      order: 3,
      isPublished: true,
    },
    {
      question: 'Garanti süresi ne kadardır?',
      answer: 'Polietilen su depolarımız imalat hatalarına karşı 5 yıl resmi fabrika garantilidir.',
      order: 4,
      isPublished: true,
    },
  ]

  for (const faq of faqsData) {
    const existing = await payload.find({ collection: 'faqs', where: { question: { equals: faq.question } } })
    if (existing.docs.length === 0) {
      await payload.create({ collection: 'faqs', data: faq as any })
    }
  }
  console.log('✅ SSS (FAQs) eklendi.')

  // 4. Kategoriler
  const categoriesData = [
    { name: 'Polietilen Su Depoları', slug: 'polietilen-su-depolari', description: 'Gıda sınıfı UV katkılı LLDPE polietilen dikey ve yatay su depoları.', icon: 'Cylinder' },
    { name: 'Dikey Su Depoları', slug: 'vertical_tank', description: 'Polietilen dikey monoblok yüksek hijyen depoları.', icon: 'Cylinder' },
    { name: 'Yatay Su Depoları', slug: 'horizontal_tank', description: 'Alçak tavan uyumlu yatay polietilen su depoları.', icon: 'Waves' },
    { name: 'Yeraltı Depoları', slug: 'yeralti-depolari', description: 'Toprak altı kullanımına uygun takviyeli özel tasarım su depoları.', icon: 'Shield' },
  ]

  const createdCategories: Record<string, any> = {}
  for (const cat of categoriesData) {
    const existing = await payload.find({ collection: 'categories', where: { slug: { equals: cat.slug } } })
    if (existing.docs.length === 0) {
      const doc: any = await payload.create({ collection: 'categories', data: cat as any })
      createdCategories[cat.slug] = doc.id
    } else {
      createdCategories[cat.slug] = existing.docs[0].id
    }
  }
  console.log('✅ Kategoriler eklendi/doğrulandı.')

  // 5. Ürünler
  const productsData = [
    {
      name: '500 Lt Dikey Polietilen Su Deposu',
      slug: '500-lt-dikey-polietilen-su-deposu',
      category: createdCategories['polietilen-su-depolari'],
      capacity: '500 Lt',
      dimensions: '80 x 80 x 115 cm',
      material: 'Gıda Sınıfı Polietilen',
      price: 3800,
      description: 'Dar alanlar ve evsel kullanım için ideal gıda sınıfı polietilen dikey su deposu.',
      inStock: true,
      image: '/images/products/polietilen_dikey_500lt.jpg',
    },
    {
      name: '1.000 Lt Yatay Polietilen Su Deposu',
      slug: '1000-lt-yatay-polietilen-su-deposu',
      category: createdCategories['polietilen-su-depolari'],
      capacity: '1.000 Lt',
      dimensions: '95 x 180 x 110 cm',
      material: 'Gıda Sınıfı Polietilen',
      price: 6400,
      description: 'Düşük tavanlı alanlar ve çatı katları için uygun yatay tasarım.',
      inStock: true,
      image: '/images/products/polietilen_yatay_1000lt.jpg',
    },
    {
      name: '5.000 Lt Dikey Polietilen Su Deposu',
      slug: '5000-lt-dikey-polietilen-su-deposu',
      category: createdCategories['polietilen-su-depolari'],
      capacity: '5.000 Lt',
      dimensions: '185 x 185 x 210 cm',
      material: 'Gıda Sınıfı Polietilen',
      price: 24500,
      description: 'Apartman ve site kullanımı için yüksek hacimli UV korumalı su deposu.',
      inStock: true,
      image: '/images/products/polietilen_dikey_5000lt.jpg',
    },
    {
      name: '10 Ton Dikey Polietilen Su Deposu',
      slug: '10-ton-dikey-polietilen-su-deposu',
      category: createdCategories['polietilen-su-depolari'],
      capacity: '10.000 Lt (10 Ton)',
      dimensions: '230 x 230 x 270 cm',
      material: 'Gıda Sınıfı LLDPE Polietilen',
      price: 48000,
      description: 'Geniş hacimli su yedekleme için yüksek mukavemetli polietilen su deposu.',
      inStock: true,
      image: '/images/products/2000l-dikey-mavi-ilhan.jpg',
    },
  ]

  for (const prod of productsData) {
    const existing = await payload.find({ collection: 'products', where: { slug: { equals: prod.slug } } })
    if (existing.docs.length === 0) {
      await payload.create({ collection: 'products', data: prod as any })
    }
  }
  console.log('✅ Ürünler eklendi/doğrulandı.')

  // 6. Site Settings & SEO
  await payload.updateGlobal({
    slug: 'site-settings',
    data: {
      siteName: 'İlhan Su Depoları',
      phone: '0312 514 06 19',
      factoryPhone: '0312 511 07 19',
      whatsapp: '+905412401119',
      email: 'info@ilhansudepolari.com',
      address: 'Atakent Mahallesi 1471 Sokak no 1/1 Etimesgut Ankara',
      workingHours: 'Pazartesi - Cumartesi: 08:30 - 18:30',
      aboutTitle: '25 Yıllık Sanayi Tecrübesiyle Güvenli Su Depolama',
      aboutDescription: 'İlhan Su Depoları olarak 2001 yılından bu yana Ankara Etimesgut adresimizde gıda sınıfı polietilen plastik su depoları imalatı gerçekleştiriyoruz.',
      statExperience: '25+',
      statTanksProduced: '15.000+',
      statSatisfaction: '%99.8',
      calculatorTitle: 'İhtiyacınıza Uygun Depo Hacmini Hesaplayın',
      calculatorSubtitle: 'Kullanım amacınıza ve bina/kullanıcı sayınıza göre ideal su deposu kapasitesini saniyeler içinde hesaplayın.',
      footerText: '© 2026 İlhan Su Depoları. Tüm hakları saklıdır.',
      siteMetaTitle: 'İlhan Su Depoları — Polietilen Plastik Su Depoları',
      siteMetaDescription: 'Ankara su deposu üreticisi İlhan Su Depoları. Polietilen dikey ve yatay plastik su depoları uygun fiyat ve garantiyle.',
      siteMetaKeywords: 'su deposu, ankara su deposu, polietilen su deposu, plastik su deposu',
    } as any,
  })
  console.log('✅ Site Settings ve SEO verileri güncellendi.')

  console.log('🎉 PostgreSQL Seed Başarıyla Tamamlandı!')
  process.exit(0)
}

seedPostgres().catch((err) => {
  console.error('❌ Seed Hatalı:', err)
  process.exit(1)
})

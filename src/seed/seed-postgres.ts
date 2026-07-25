import { getPayload } from 'payload'
import configPromise from '../payload.config'

async function seedPostgres() {
  console.log('🌱 PostgreSQL Veritabanı Seed Ediliyor...')
  const payload = await getPayload({ config: configPromise })

  // 1. Admin Kullanıcısı
  const existingUsers = await payload.find({ collection: 'users', where: { email: { equals: 'admin@ilhansudepolari.com' } } })
  if (existingUsers.docs.length === 0) {
    await payload.create({
      collection: 'users',
      data: {
        email: 'admin@ilhansudepolari.com',
        password: 'Admin123456!',
        name: 'İlhan Su Depoları Yönetici',
        role: 'admin',
      },
    })
    console.log('✅ Admin kullanıcısı oluşturuldu: admin@ilhansudepolari.com')
  }

  // 2. Hero Slaytları
  const heroSlidesData = [
    {
      title: 'Yüksek Kaliteli Su Depolama Çözümleri',
      subtitle: 'Polietilen Dikey, Yatay ve Paslanmaz Modüler Su Depolarında 25 Yıllık Sanayi Tecrübesi',
      badgeText: 'Ankara Fabrika Teslimi & Ücretsiz Keşif',
      bgType: 'video',
      bgMediaUrl: '/videos/hero_video.mp4',
      primaryButtonText: 'Ürünlerimizi İnceleyin',
      primaryButtonLink: '/urunler',
      whatsappButtonText: 'WhatsApp ile Hızlı Fiyat Al',
      whatsappCustomMessage: 'Merhaba, su depoları fiyatları ve özellikleri hakkında detaylı bilgi almak istiyorum.',
      order: 1,
      isActive: true,
    },
    {
      title: 'Paslanmaz Modüler Depo Teknolojisi',
      subtitle: 'Bina içi dar alanlar ve şantiyeler için yerinde montaj yapılabilen 304/316 kalite hijyenik su depoları.',
      badgeText: 'Gıda Sınıfı & 10 Yıl Garanti',
      bgType: 'image',
      bgMediaUrl: '/images/hero_bg.jpg',
      primaryButtonText: 'Modüler Depoları Görün',
      primaryButtonLink: '/urunler?category=paslanmaz-moduler-depolar',
      whatsappButtonText: 'Teklif Alın',
      whatsappCustomMessage: 'Merhaba, paslanmaz modüler su deposu teklifi almak istiyorum.',
      order: 2,
      isActive: true,
    },
  ]

  for (const slide of heroSlidesData) {
    const existing = await payload.find({ collection: 'hero-slides', where: { title: { equals: slide.title } } })
    if (existing.docs.length === 0) {
      await payload.create({ collection: 'hero-slides', data: slide as any })
    }
  }
  console.log('✅ Hero Slaytları eklendi.')

  // 3. SSS (FAQs)
  const faqsData = [
    {
      question: 'Polietilen su depoları koku veya su lezzeti bozması yapar mı?',
      answer: 'Hayır. Depolarımız T.C. Sağlık Bakanlığı onaylı, %100 gıda sınıfı LLDPE hammaddeden imal edilmektedir. Bakteri üretmez, kokusuzdur ve su kalitesini etkilemez.',
      order: 1,
      isPublished: true,
    },
    {
      question: 'Paslanmaz modüler su depoları dar kapılardan nasıl taşınır?',
      answer: 'Modüler su depolarımız standart kapı ve merdiven boşluklarından geçebilecek ebatta modüler paneller halinde demonte taşınır. Kurulum yerinde sertifikalı kaynakçı/montaj ekibimizce yapılır.',
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
      answer: 'Polietilen depolarımız imalat hatalarına karşı 2 yıl, paslanmaz modüler su depolarımız ise 10 yıl resmi fabrika garantilidir.',
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
    { name: 'Paslanmaz Modüler Depolar', slug: 'paslanmaz-moduler-depolar', description: '304/316 kalite paslanmaz çelik modüler su depoları.', icon: 'Boxes' },
    { name: 'Polyester Su Depoları', slug: 'polyester-su-depolari', description: 'Cam elyaf takviyeli yüksek mukavemetli polyester depolar.', icon: 'Layers' },
    { name: 'Yeraltı Depoları', slug: 'yeralti-depolari', description: 'Toprak altı kullanımına uygun takviyeli özel tasarım su depoları.', icon: 'Shield' },
  ]

  const createdCategories: Record<string, string> = {}
  for (const cat of categoriesData) {
    const existing = await payload.find({ collection: 'categories', where: { slug: { equals: cat.slug } } })
    if (existing.docs.length === 0) {
      const doc = await payload.create({ collection: 'categories', data: cat })
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
      name: '10 Ton Paslanmaz Çelik Modüler Depo',
      slug: '10-ton-paslanmaz-celik-moduler-depo',
      category: createdCategories['paslanmaz-moduler-depolar'],
      capacity: '10.000 Lt (10 Ton)',
      dimensions: '200 x 250 x 200 cm',
      material: '304 Kalite Paslanmaz Çelik',
      price: 89000,
      description: 'Yerinde montaj imkanı sunan yüksek hijyen standartlı modüler paslanmaz su deposu.',
      inStock: true,
      image: '/images/products/paslanmaz_moduler_10ton.jpg',
    },
  ]

  for (const prod of productsData) {
    const existing = await payload.find({ collection: 'products', where: { slug: { equals: prod.slug } } })
    if (existing.docs.length === 0) {
      await payload.create({ collection: 'products', data: prod })
    }
  }
  console.log('✅ Ürünler eklendi/doğrulandı.')

  // 6. Site Settings & SEO
  await payload.updateGlobal({
    slug: 'site-settings',
    data: {
      siteName: 'İlhan Su Depoları',
      phone: '0312 543 1358',
      whatsapp: '903125431358',
      email: 'info@ilhansudepolari.com',
      address: 'Ostim OSB Mahallesi 100. Yıl Bulvarı No: 45 Yenimahalle / Ankara',
      workingHours: 'Pazartesi - Cumartesi: 08:30 - 18:30',
      aboutTitle: '25 Yıllık Sanayi Tecrübesiyle Güvenli Su Depolama',
      aboutDescription: 'İlhan Su Depoları olarak 2001 yılından bu yana Ankara Ostim sanayisinde gıda sınıfı polietilen, 304/316 paslanmaz çelik ve mukavemetli polyester su depoları imalatı gerçekleştiriyoruz.',
      statExperience: '25+',
      statTanksProduced: '15.000+',
      statSatisfaction: '%99.8',
      calculatorTitle: 'İhtiyacınıza Uygun Depo Hacmini Hesaplayın',
      calculatorSubtitle: 'Kullanım amacınıza ve bina/kullanıcı sayınıza göre ideal su deposu kapasitesini saniyeler içinde hesaplayın.',
      footerText: '© 2026 İlhan Su Depoları. Tüm hakları saklıdır.',
      siteMetaTitle: 'İlhan Su Depoları — Polietilen & Paslanmaz Modüler Depolar',
      siteMetaDescription: 'Ankara su deposu üreticisi İlhan Su Depoları. Polietilen dikey, yatay ve paslanmaz modüler su depoları uygun fiyat ve garantiyle.',
      siteMetaKeywords: 'su deposu, ankara su deposu, polietilen su deposu, paslanmaz modüler depo',
    },
  })
  console.log('✅ Site Settings ve SEO verileri güncellendi.')

  console.log('🎉 PostgreSQL Seed Başarıyla Tamamlandı!')
  process.exit(0)
}

seedPostgres().catch((err) => {
  console.error('❌ Seed Hatalı:', err)
  process.exit(1)
})

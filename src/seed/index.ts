import { getPayload } from 'payload'
import config from '../payload.config'
import { PRODUCTS } from '../data/products'
import { MOCK_ORDERS } from '../data/orders'

export async function seedPayload() {
  try {
    const payload = await getPayload({ config })

    // 1. Seed Admin User
    const usersCount = await payload.count({ collection: 'users' })
    if (usersCount.totalDocs === 0) {
      console.log('Seeding Admin User...')
      await payload.create({
        collection: 'users',
        data: {
          email: 'admin@ilhansudepolari.com',
          password: 'Admin123456!',
        },
      })
      console.log('Admin user created: admin@ilhansudepolari.com / Admin123456!')
    }

    // 2. Seed Site Settings Global
    try {
      console.log('Updating Site Settings global...')
      await payload.updateGlobal({
        slug: 'site-settings',
        data: {
          siteName: 'İlhan Su Depoları',
          phone: '0312 543 1358',
          email: 'info@ilhansudepolari.com',
          address: 'Atakent Mahallesi 1471 Sokak No:1/1 Etimesgut / Ankara',
          workingHours: 'PZT - CUM: 09:00 - 18:00',
          announcementBarText: 'İlhan Su Depoları — Etimesgut / Ankara • Türkiye Geneli Teslimat',
          footerText: 'İlhan Su Depoları; dikey ve yatay polietilen su depoları, endüstriyel tip santrifüj pompalar ve paslanmaz dalgıç pompa çözümlerinde güvenin adresidir.',
          socialMedia: {
            instagram: 'https://instagram.com/ilhansudepolari',
            facebook: 'https://facebook.com/ilhansudepolari',
            youtube: 'https://youtube.com/ilhansudepolari',
          },
        } as any,
      })
    } catch (e) {
      console.warn('Site Settings update warn:', e)
    }

    // 3. Seed Categories
    const categoriesCount = await payload.count({ collection: 'categories' })
    if (categoriesCount.totalDocs === 0) {
      console.log('Seeding categories...')
      const categoryItems = [
        { title: 'Dikey Su Deposu', slug: 'vertical_tank', description: 'Polietilen ve polyester monoblok dikey depolar', icon: 'ShieldCheck' },
        { title: 'Yatay Su Depoları', slug: 'horizontal_tank', description: 'Alçak tavan uyumlu yatay su depoları', icon: 'Waves' },
        { title: 'Endüstriyel Tip Pompalar', slug: 'industrial_pump', description: 'Paslanmaz çelik ağır hizmet santrifüj pompalar', icon: 'Zap' },
        { title: 'Dalgıç Pompa', slug: 'submersible_pump', description: 'Derin kuyu ve drenaj dalgıç pompaları', icon: 'ShieldCheck' },
      ]
      for (const cat of categoryItems) {
        await payload.create({
          collection: 'categories',
          data: cat,
        })
      }
    }

    // 4. Seed Products
    const productsCount = await payload.count({ collection: 'products' })
    if (productsCount.totalDocs === 0) {
      console.log('Seeding products...')
      for (const p of PRODUCTS) {
        await payload.create({
          collection: 'products',
          data: {
            name: p.name,
            slug: p.id,
            categorySlug: p.category as any,
            categoryName: p.categoryName,
            image: p.image,
            capacityRange: p.capacityRange,
            material: p.material,
            description: p.description,
            startingPrice: p.startingPrice,
            badge: p.badge || '',
            features: p.features.map(f => ({ feature: f })),
            specs: {
              dimensions: p.specs.dimensions,
              thickness: p.specs.thickness,
              outletSize: p.specs.outletSize,
              warranty: p.specs.warranty,
              foodGrade: p.specs.foodGrade,
            },
          },
        })
      }
    }

    // 5. Seed Orders
    const ordersCount = await payload.count({ collection: 'orders' })
    if (ordersCount.totalDocs === 0) {
      console.log('Seeding orders...')
      for (const code of Object.keys(MOCK_ORDERS)) {
        const order = MOCK_ORDERS[code]
        await payload.create({
          collection: 'orders',
          data: {
            orderCode: order.orderCode,
            customerName: order.customerName,
            customerPhone: order.customerPhone,
            productName: order.productName,
            capacity: order.capacity,
            orderDate: order.orderDate,
            estimatedDelivery: order.estimatedDelivery,
            currentStep: order.currentStep,
            city: order.city,
            notes: order.notes,
            history: order.history.map(h => ({
              title: h.title,
              date: h.date,
              description: h.description,
              completed: h.completed,
            })),
          },
        })
      }
    }

    // 6. Seed Job Positions
    const jobsCount = await payload.count({ collection: 'job-positions' })
    if (jobsCount.totalDocs === 0) {
      console.log('Seeding job positions...')
      const jobs = [
        {
          title: 'Rotasyon İmalat & Plastik Enjeksiyon Ustası',
          department: 'Üretim & İmalat',
          location: 'Ankara / Kahramankazan Fabrika',
          type: 'Tam Zamanlı',
          description: 'Polietilen dikey ve yatay su deposu imalat hattımızda fırınlama, kalıplama ve soğutma süreçlerini yönetecek deneyimli usta ve usta yardımcıları.',
          requirements: [
            'Plastik rotasyon veya enjeksiyon alanında en az 3 yıl tecrübe',
            'Vardiyalı çalışma sistemine uyumlu',
            'Kalıp değişimi ve bakım süreçlerine hakim',
            'Askerlik görevini tamamlamış',
          ],
        },
        {
          title: 'Saha Satış & Proje Sorumlusu',
          department: 'Satış & Pazarlama',
          location: 'İstanbul & Marmara Bölgesi',
          type: 'Tam Zamanlı',
          description: 'İnşaat şantiyeleri, müteahhitler ve endüstriyel tesislere su deposu ve hidrofor sistemleri ürünlerimizin satış ve pazarlamasını yürütecek.',
          requirements: [
            'B2B teknik satış tecrübesi (Mekanik / Yapı Malzemeleri tercih sebebidir)',
            'B sınıfı sürücü belgesine sahip ve aktif araç kullanabilen',
            'İletişim ve ikna kabiliyeti yüksek',
            'Müşteri portföyü takipi yapabilecek',
          ],
        },
        {
          title: 'Argon & Gazaltı Kaynak Ustası (CTP / Metal)',
          department: 'Atölye & Kalite',
          location: 'Ankara / Şaşmaz',
          type: 'Tam Zamanlı',
          description: 'Paslanmaz modüler su deposu şasileri ve flanş bağlantılarının kaynak işlerini yapacak sertifikalı kaynak ustası.',
          requirements: [
            'TIG / MIG Argon ve gazaltı kaynak sertifikasına sahip',
            'Teknik resim okuma becerisine sahip',
            'Hassas imalat ölçülerine özen gösteren',
          ],
        },
      ]
      for (const j of jobs) {
        await payload.create({
          collection: 'job-positions',
          data: {
            title: j.title,
            department: j.department,
            location: j.location,
            type: j.type,
            description: j.description,
            requirements: j.requirements.map(r => ({ req: r })),
          },
        })
      }
    }

    // 7. Seed FAQs
    const faqsCount = await payload.count({ collection: 'faqs' })
    if (faqsCount.totalDocs === 0) {
      console.log('Seeding FAQs...')
      const faqs = [
        {
          question: 'Polietilen su depoları kokma veya tat değişimi yapar mı?',
          answer: 'Hayır, İlhan Su Depoları ürünleri %100 orijinal food-grade (gıda tüzüğüne uygun) LLDPE polietilenden imal edilmektedir. İçerisindeki su kokmaz, tat değiştirmez ve yosun tutmaz.',
          category: 'genel' as const,
        },
        {
          question: 'Depo teslimatları nasıl yapılıyor?',
          answer: 'Ankara, İstanbul ve çevre illere kendi lojistik vinçli araçlarımızla teslimat yapıyoruz. Diğer illere ise anlaşmalı ambar ve nakliye firmalarıyla sigortalı gönderim sağlıyoruz.',
          category: 'teslimat' as const,
        },
        {
          question: 'Garanti süresi ve kapsamı nedir?',
          answer: 'Polietilen dikey depolarımız 5 Yıl birebir değişim garantilidir. Polyester yatay depolarımız 7 Yıl, endüstriyel pompa sistemlerimiz ise 3 Yıl garantilidir.',
          category: 'garanti' as const,
        },
        {
          question: 'Özel ölçü veya tonajda depo üretiyor musunuz?',
          answer: 'Evet! Polyester (CTP) ve modüler paslanmaz depolarımızda mekanınızın kapı ve yükseklik ölçülerine göre yerinde imalat seçeneğimiz mevcuttur.',
          category: 'genel' as const,
        },
      ]
      for (const f of faqs) {
        await payload.create({
          collection: 'faqs',
          data: f as any,
        })
      }
    }
  } catch (err) {
    console.error('Payload seed error:', err)
  }
}

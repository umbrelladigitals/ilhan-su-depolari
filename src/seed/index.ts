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
          lightLogo: '/images/light_logo.png',
          darkLogo: '/images/dark_logo.png',
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
        { name: 'Dikey Su Deposu', slug: 'vertical_tank', description: 'Polietilen ve polyester monoblok dikey depolar', icon: 'ShieldCheck' },
        { name: 'Yatay Su Depoları', slug: 'horizontal_tank', description: 'Alçak tavan uyumlu yatay su depoları', icon: 'Waves' },
        { name: 'Endüstriyel Tip Pompalar', slug: 'industrial_pump', description: 'Paslanmaz çelik ağır hizmet santrifüj pompalar', icon: 'Zap' },
        { name: 'Dalgıç Pompa', slug: 'submersible_pump', description: 'Derin kuyu ve drenaj dalgıç pompaları', icon: 'ShieldCheck' },
      ]
      for (const cat of categoryItems) {
        await payload.create({
          collection: 'categories',
          data: cat as any,
        })
      }
    }

    // 4. Seed Products
    const productsCount = await payload.count({ collection: 'products' })
    if (productsCount.totalDocs === 0) {
      console.log('Seeding products...')
      const allCategories = await payload.find({ collection: 'categories', limit: 100 })
      const catMap: Record<string, string | number> = {}
      for (const catDoc of allCategories.docs) {
        catMap[(catDoc as any).slug] = catDoc.id
      }

      for (const p of PRODUCTS) {
        const catId = catMap[p.category] || allCategories.docs[0]?.id
        if (!catId) continue

        await payload.create({
          collection: 'products',
          data: {
            name: p.name,
            slug: p.id,
            category: catId,
            capacity: p.capacityRange || '500 Lt - 20.000 Lt',
            dimensions: p.specs?.dimensions || '',
            material: p.material || '',
            description: p.description || '',
            inStock: true,
            image: p.image,
            features: p.features,
            specs: p.specs,
          } as any,
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
          } as any,
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
          } as any,
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

    // 8. Seed Blogs
    const blogsCount = await payload.count({ collection: 'blogs' })
    if (blogsCount.totalDocs === 0) {
      console.log('Seeding blogs...')
      const sampleBlogs = [
        {
          title: 'Polietilen Su Deposu Seçerken Dikkat Edilmesi Gereken 5 Önemli Nokta',
          slug: 'polietilen-su-deposu-secerken-dikkat-edilmesi-gerekenler',
          summary: 'Doğru su deposu seçimi hem sağlık hem de uzun ömürlü kullanım açısından kritiktir. İşte hammadde kalitesinden et kalınlığına dikkat etmeniz gereken 5 temel kural.',
          image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80',
          category: 'Rehber & Tavsiyeler',
          readTime: '4 dk',
          publishedAt: new Date().toISOString(),
          isActive: true,
          content: {
            root: {
              type: 'root',
              children: [
                {
                  type: 'paragraph',
                  children: [{ type: 'text', text: 'Su deposu alırken yalnızca fiyat odaklı düşünmek ileride ciddi sızıntı, koku ve bakteri sorunlarına yol açabilir. İlhan Su Depoları olarak %100 orijinal food-grade polietilen hammadde kullanarak imal ettiğimiz depolarımızda en yüksek kalite standartlarını sağlıyoruz.' }],
                },
                {
                  type: 'paragraph',
                  children: [{ type: 'text', text: '1. Hammadde Kalitesi: Gıdaya uygun UV katkılı LLDPE polietilen tercih edilmelidir.' }],
                },
                {
                  type: 'paragraph',
                  children: [{ type: 'text', text: '2. Et Kalınlığı ve Monoblok Yapı: Kaynaksız ve birleşimsiz tek parça döküm depolar uzun ömürlüdür.' }],
                },
              ],
            },
          },
        },
        {
          title: 'Paslanmaz Modüler Su Depolarının Avantajları ve Kullanım Alanları',
          slug: 'paslanmaz-modular-su-depolari-avantajlari',
          summary: 'Bina altları, dar kapılı alanlar ve büyük tonajlı tesisler için en ideal çözüm olan AISI 304 / 316 paslanmaz modüler su depolarını yakından inceleyin.',
          image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&w=1200&q=80',
          category: 'Endüstriyel Çözümler',
          readTime: '6 dk',
          publishedAt: new Date().toISOString(),
          isActive: true,
          content: {
            root: {
              type: 'root',
              children: [
                {
                  type: 'paragraph',
                  children: [{ type: 'text', text: 'Modüler paslanmaz su depoları, parçalar halinde nakledilerek kurulum alanında cıvatalı veya kaynaklı olarak birleştirilen yüksek teknolojili depolama çözümleridir.' }],
                },
                {
                  type: 'paragraph',
                  children: [{ type: 'text', text: 'Dar bodrum kapılarından ve kazan dairelerinden kolayca geçirilerek yüksek kapasiteli depolama olanağı sunar.' }],
                },
              ],
            },
          },
        },
        {
          title: 'Su Deposu Temizliği ve Bakımı Nasıl Yapılır? Adım Adım Rehber',
          slug: 'su-deposu-temizligi-ve-bakimi-nasil-yapilir',
          summary: 'Deponuzda bakteri, yosun ve tortu oluşumunu önlemek için periyodik bakım şarttır. Sağlığınız için su deposu hijyen rehberimize göz atın.',
          image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
          category: 'Hijyen & Bakım',
          readTime: '5 dk',
          publishedAt: new Date().toISOString(),
          isActive: true,
          content: {
            root: {
              type: 'root',
              children: [
                {
                  type: 'paragraph',
                  children: [{ type: 'text', text: 'Periyodik olarak en az yılda bir kez su depolarının dezenfekte edilmesi ve dip tortularının arındırılması gerekmektedir.' }],
                },
              ],
            },
          },
        },
      ]

      for (const b of sampleBlogs) {
        await payload.create({
          collection: 'blogs',
          data: b as any,
        })
      }
    }
  } catch (err) {
    console.error('Payload seed error:', err)
  }
}

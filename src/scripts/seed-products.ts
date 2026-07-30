import { getPayload } from 'payload'
import configPromise from '../payload.config'
import { PRODUCTS } from '../data/products'

async function seedProducts() {
  console.log('Veritabanına yeni ürünler işleniyor...')
  try {
    const payload = await getPayload({ config: configPromise })

    // 1. Kategorileri al veya oluştur
    let categoriesRes = await payload.find({ collection: 'categories' })
    let catMap: Record<string, any> = {}

    for (const cat of categoriesRes.docs) {
      catMap[cat.slug] = cat.id
    }

    if (!catMap['vertical_tank']) {
      const createdCat = await payload.create({
        collection: 'categories',
        data: { name: 'Dikey Su Deposu', slug: 'vertical_tank' },
      })
      catMap['vertical_tank'] = createdCat.id
    }

    if (!catMap['horizontal_tank']) {
      const createdCat = await payload.create({
        collection: 'categories',
        data: { name: 'Yatay Su Depoları', slug: 'horizontal_tank' },
      })
      catMap['horizontal_tank'] = createdCat.id
    }

    // 2. Ürünleri ekle veya güncelle
    for (const p of PRODUCTS) {
      const categoryId = catMap[p.category] || catMap['vertical_tank']

      const existing = await payload.find({
        collection: 'products',
        where: { slug: { equals: p.id } },
      })

      const productData = {
        name: p.name,
        slug: p.id,
        category: categoryId,
        capacity: p.capacityRange,
        image: p.image,
        capacityRange: p.capacityRange,
        material: p.material,
        description: p.description,
        startingPrice: p.startingPrice,
        price: parseFloat(p.startingPrice.replace(/[^0-9]/g, '')) || 5000,
        badge: p.badge,
        features: p.features,
        specs: p.specs,
      }

      if (existing.docs.length > 0) {
        await payload.update({
          collection: 'products',
          id: existing.docs[0].id,
          data: productData as any,
        })
        console.log(`Güncellendi: ${p.name}`)
      } else {
        await payload.create({
          collection: 'products',
          data: productData as any,
        })
        console.log(`Eklendi: ${p.name}`)
      }
    }

    console.log('Tüm gerçek ürünler veritabanına başarıyla işlendi!')
    process.exit(0)
  } catch (err) {
    console.error('Seed hatası:', err)
    process.exit(1)
  }
}

seedProducts()

import { getPayload } from 'payload'
import configPromise from '../payload.config'
import { PRODUCTS } from '../data/products'

async function cleanDemoProducts() {
  console.log('Veritabanındaki demo ürünler temizleniyor...')
  try {
    const payload = await getPayload({ config: configPromise })

    const validSlugs = new Set(PRODUCTS.map((p) => p.id))

    // 1. Veritabanındaki tüm ürünleri getir
    const existing = await payload.find({
      collection: 'products',
      limit: 200,
    })

    console.log(`Veritabanında toplam ${existing.docs.length} ürün bulundu.`)

    // 2. 6 Gerçek Ürün dışında kalan tüm demo ürünleri sil
    for (const doc of existing.docs) {
      if (!validSlugs.has(doc.slug)) {
        await payload.delete({
          collection: 'products',
          id: doc.id,
        })
        console.log(`Silindi (Demo Ürün): ${doc.name} (ID: ${doc.id})`)
      }
    }

    console.log('Demo ürünler veritabanından başarıyla temizlendi!')
    process.exit(0)
  } catch (err) {
    console.error('Temizlik hatası:', err)
    process.exit(1)
  }
}

cleanDemoProducts()

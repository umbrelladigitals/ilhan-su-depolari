import { getPayload } from 'payload'
import config from '../payload.config'
import { PRODUCTS } from '../data/products'

async function updateProducts() {
  try {
    const payload = await getPayload({ config })

    const allCategories = await payload.find({ collection: 'categories', limit: 100 })
    const catMap: Record<string, string | number> = {}
    for (const catDoc of allCategories.docs) {
      catMap[(catDoc as any).slug] = catDoc.id
    }

    console.log('Upserting products into Payload DB...')
    for (const p of PRODUCTS) {
      const catId = catMap[p.category] || allCategories.docs[0]?.id
      if (!catId) continue

      // Var olan ürünü kontrol et
      const existing = await payload.find({
        collection: 'products',
        where: { slug: { equals: p.id } },
      })

      if (existing.docs.length > 0) {
        console.log(`Updating existing product: ${p.name}`)
        await payload.update({
          collection: 'products',
          id: existing.docs[0].id,
          data: {
            name: p.name,
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
      } else {
        console.log(`Creating new product: ${p.name}`)
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
    console.log('All products updated successfully!')
  } catch (err) {
    console.error('Error updating products:', err)
  }
}

updateProducts()

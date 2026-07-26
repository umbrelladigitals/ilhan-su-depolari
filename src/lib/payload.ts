import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { PRODUCTS } from '@/data/products'

// 1. Site Ayarlarını Getir (Header, Footer, İletişim vs.)
export async function getSiteSettings() {
  try {
    const payload = await getPayload({ config: configPromise })
    const settings = await payload.findGlobal({
      slug: 'site-settings',
    })
    return settings
  } catch (error) {
    console.error('getSiteSettings hatası:', error)
    return null
  }
}

// 2. Hero Slaytlarını Getir
export async function getHeroSlides() {
  try {
    const payload = await getPayload({ config: configPromise })
    const result = await payload.find({
      collection: 'hero-slides',
      where: { isActive: { equals: true } },
      sort: 'order',
    })
    return result.docs || []
  } catch (error) {
    console.error('getHeroSlides hatası:', error)
    return []
  }
}

// 3. Ürünleri Getir (Kategoriye göre filtrelenebilir, Fallback ile tam uyumlu)
export async function getProducts(categorySlug?: string) {
  try {
    const payload = await getPayload({ config: configPromise })
    let query: any = { collection: 'products', limit: 100 }

    if (categorySlug && categorySlug !== 'all') {
      query.where = {
        'category.slug': { equals: categorySlug },
      }
    }

    const result = await payload.find(query)
    
    // Veritabanındaki ve static listedeki tüm benzersiz ürünleri birleştir
    const dbProducts = (result.docs || []).map((doc: any) => ({
      ...doc,
      id: doc.slug || doc.id,
      category: typeof doc.category === 'object' ? doc.category?.slug : doc.category,
      categoryName: typeof doc.category === 'object' ? doc.category?.name : (doc.categoryName || 'Su Deposu'),
      startingPrice: doc.startingPrice || (doc.price ? `${doc.price.toLocaleString('tr-TR')} ₺` : 'Fiyat Alınız'),
    }))

    const dbSlugs = new Set(dbProducts.map((p: any) => p.id || (p as any).slug))
    const missingStaticProducts = PRODUCTS.filter((p) => !dbSlugs.has(p.id) && !dbSlugs.has((p as any).slug))

    const allCombined = [...dbProducts, ...missingStaticProducts]

    if (categorySlug && categorySlug !== 'all') {
      return allCombined.filter((p) => p.category === categorySlug)
    }

    return allCombined
  } catch (error) {
    console.error('getProducts hatası:', error)
    return PRODUCTS
  }
}

// 4. Tek bir Ürünü Slug veya ID'ye Göre Getir (404 Önleyici Esnek Eşleştirme)
export async function getProductBySlug(slugOrId: string) {
  try {
    const payload = await getPayload({ config: configPromise })

    // 1. Slug ile sorgula
    const resultBySlug = await payload.find({
      collection: 'products',
      where: { slug: { equals: slugOrId } },
    }).catch(() => ({ docs: [] }))

    if (resultBySlug.docs && resultBySlug.docs.length > 0) {
      const doc: any = resultBySlug.docs[0]
      return {
        ...doc,
        id: doc.slug || doc.id,
        category: typeof doc.category === 'object' ? doc.category?.slug : doc.category,
        categoryName: typeof doc.category === 'object' ? doc.category?.name : (doc.categoryName || 'Su Deposu'),
        startingPrice: doc.startingPrice || (doc.price ? `${doc.price.toLocaleString('tr-TR')} ₺` : 'Fiyat Alınız'),
      }
    }

    // 2. ID ile sorgula
    const resultById = await payload.find({
      collection: 'products',
      where: { id: { equals: slugOrId } },
    }).catch(() => ({ docs: [] }))

    if (resultById.docs && resultById.docs.length > 0) {
      const doc: any = resultById.docs[0]
      return {
        ...doc,
        id: doc.slug || doc.id,
        category: typeof doc.category === 'object' ? doc.category?.slug : doc.category,
        categoryName: typeof doc.category === 'object' ? doc.category?.name : (doc.categoryName || 'Su Deposu'),
        startingPrice: doc.startingPrice || (doc.price ? `${doc.price.toLocaleString('tr-TR')} ₺` : 'Fiyat Alınız'),
      }
    }

    // 3. Fallback: Static PRODUCTS listesinde id veya slug eşleştir
    const fallback = PRODUCTS.find(
      (p) => String(p.id) === String(slugOrId) || (p as any).slug === slugOrId
    )
    return fallback || null
  } catch (error) {
    console.error('getProductBySlug hatası:', error)
    const fallback = PRODUCTS.find(
      (p) => String(p.id) === String(slugOrId) || (p as any).slug === slugOrId
    )
    return fallback || null
  }
}

// 5. Kategorileri Getir
export async function getCategories() {
  try {
    const payload = await getPayload({ config: configPromise })
    const result = await payload.find({
      collection: 'categories',
      limit: 50,
    })
    return result.docs || []
  } catch (error) {
    console.error('getCategories hatası:', error)
    return []
  }
}

// 6. SSS Verilerini Getir
export async function getFaqs() {
  try {
    const payload = await getPayload({ config: configPromise })
    const result = await payload.find({
      collection: 'faqs',
      sort: 'order',
    })
    return result.docs || []
  } catch (error) {
    console.error('getFaqs hatası:', error)
    return []
  }
}

// 7. İK İş İlanlarını Getir
export async function getJobPositions() {
  try {
    const payload = await getPayload({ config: configPromise })
    const result = await payload.find({
      collection: 'job-positions',
      where: { isActive: { equals: true } },
    })
    return result.docs || []
  } catch (error) {
    console.error('getJobPositions hatası:', error)
    return []
  }
}

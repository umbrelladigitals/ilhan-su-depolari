import type { MetadataRoute } from 'next'
import { getProducts, getBlogs } from '@/lib/payload'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://sudeposu.dexsoft.com.tr'

  // Statik Sayfalar
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/urunler`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/kurumsal`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/sss`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/iletisim`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
  ]

  // Ürün Sayfaları
  try {
    const products = await getProducts()
    const productRoutes: MetadataRoute.Sitemap = products.map((p: any) => ({
      url: `${baseUrl}/urunler/${p.slug || p.id}`,
      lastModified: p.updatedAt ? new Date(p.updatedAt) : new Date(),
      changeFrequency: 'weekly',
      priority: 0.85,
    }))

    // Blog Sayfaları
    const blogs = await getBlogs()
    const blogRoutes: MetadataRoute.Sitemap = blogs.map((b: any) => ({
      url: `${baseUrl}/blog/${b.slug}`,
      lastModified: b.updatedAt ? new Date(b.updatedAt) : new Date(),
      changeFrequency: 'monthly',
      priority: 0.75,
    }))

    return [...staticRoutes, ...productRoutes, ...blogRoutes]
  } catch {
    return staticRoutes
  }
}

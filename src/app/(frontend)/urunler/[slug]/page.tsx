import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getProductBySlug, getSiteSettings } from '@/lib/payload'
import { ProductDetailClient } from './ProductDetailClient'

export const revalidate = 60

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const product = await getProductBySlug(slug)

  if (!product) {
    return {
      title: 'Ürün Bulunamadı — İlhan Su Depoları',
    }
  }

  const title = `${product.name} | İlhan Su Depoları`
  const description = `${product.name} — ${product.description || 'Ankara Etimesgut fabrikamızdan %100 gıda uygunluk garantili ve 5 yıl garantili su deposu imalatı.'}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [{ url: product.image, alt: product.name }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [product.image],
    },
  }
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const [product, siteSettings] = await Promise.all([
    getProductBySlug(slug),
    getSiteSettings(),
  ])

  if (!product) {
    notFound()
  }

  // Google Product JSON-LD Schema
  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    image: [product.image.startsWith('http') ? product.image : `https://sudeposu.dexsoft.com.tr${product.image}`],
    description: product.description,
    sku: product.slug || product.id,
    brand: {
      '@type': 'Brand',
      name: 'İlhan Su Depoları',
    },
    offers: {
      '@type': 'Offer',
      url: `https://sudeposu.dexsoft.com.tr/urunler/${product.slug || product.id}`,
      priceCurrency: 'TRY',
      price: product.startingPrice ? product.startingPrice.replace(/[^0-9]/g, '') : '5000',
      itemCondition: 'https://schema.org/NewCondition',
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: 'İlhan Su Depoları',
      },
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <ProductDetailClient product={product} siteSettings={siteSettings} />
    </>
  )
}

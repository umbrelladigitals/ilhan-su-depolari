import type { Metadata } from 'next'
import { getProducts } from '@/lib/payload'
import { ProductsClient } from './ProductsClient'

export const revalidate = 0 // Instant live Payload CMS sync

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>
}): Promise<Metadata> {
  const { category } = await searchParams
  const categoryTitle = category && category !== 'all' ? `${category.toUpperCase()} Su Depoları` : 'Tüm Su Depoları'

  return {
    title: `${categoryTitle} — İlhan Su Depoları Katalog & Teklif`,
    description: `Polietilen dikey ve yatay su depoları modellerimizi inceleyin. Ankara fabrika teslimi cazip teklif ve garanti imkanları.`,
    keywords: `su depoları, polietilen su deposu, dikey su deposu, yatay su deposu, ankara su deposu modelleri`,
  }
}

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>
}) {
  const { category } = await searchParams
  const products = await getProducts('all')

  return (
    <div className="page-wrapper bg-white">
      <div className="container-custom">
        <ProductsClient initialProducts={products} initialCategory={category || 'all'} />
      </div>
    </div>
  )
}

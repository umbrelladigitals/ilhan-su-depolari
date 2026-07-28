import { getPayload } from 'payload'
import config from '../payload.config'

const DEMO_SLUGS = [
  '10000l-yatay-polyester-su-deposu',
  'toprak-alti-takviyeli-su-deposu',
  'paslanmaz-agir-hizmet-santrifuj-pompa',
  'paslanmaz-moduler-celik-su-deposu',
  'derin-kuyu-paslanmaz-dalgic-pompa-4-inc',
  'agir-hizmet-fosseptik-drenaj-dalgic-pompasi',
]

async function cleanup() {
  console.log('Cleaning up demo products from database...')
  const payload = await getPayload({ config })

  for (const slug of DEMO_SLUGS) {
    try {
      const existing = await payload.find({
        collection: 'products',
        where: { slug: { equals: slug } },
      })

      for (const doc of existing.docs) {
        await payload.delete({
          collection: 'products',
          id: doc.id,
        })
        console.log(`Deleted demo product ID ${doc.id} (slug: ${slug})`)
      }
    } catch (e) {
      console.error(`Error deleting product ${slug}:`, e)
    }
  }

  console.log('Cleanup completed successfully!')
  process.exit(0)
}

cleanup().catch(err => {
  console.error('Cleanup script error:', err)
  process.exit(1)
})

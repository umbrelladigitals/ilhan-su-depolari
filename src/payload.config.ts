import { buildConfig } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { sqliteAdapter } from '@payloadcms/db-sqlite'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { tr } from '@payloadcms/translations/languages/tr'
import { en } from '@payloadcms/translations/languages/en'
import { seoPlugin } from '@payloadcms/plugin-seo'
import sharp from 'sharp'
import path from 'path'
import { fileURLToPath } from 'url'

import { Users } from './payload/collections/Users'
import { Media } from './payload/collections/Media'
import { Categories } from './payload/collections/Categories'
import { Products } from './payload/collections/Products'
import { Orders } from './payload/collections/Orders'
import { JobPositions } from './payload/collections/JobPositions'
import { Faqs } from './payload/collections/Faqs'
import { HeroSlides } from './payload/collections/HeroSlides'
import { Blogs } from './payload/collections/Blogs'

import { SiteSettings } from './payload/globals/SiteSettings'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)
const databaseURI = process.env.DATABASE_URI
const siteURL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

if (process.env.NODE_ENV === 'production' && !process.env.PAYLOAD_SECRET) {
  throw new Error('PAYLOAD_SECRET üretim ortamında zorunludur.')
}

const db = databaseURI
  ? postgresAdapter({
      pool: {
        connectionString: databaseURI,
      },
      push: true,
    })
  : sqliteAdapter({
      client: {
        url: `file:${path.resolve(dirname, '../sudeposu.db')}`,
      },
      push: true,
      wal: true,
    })

export default buildConfig({
  sharp,
  serverURL: siteURL,
  cors: [siteURL],
  csrf: [siteURL],
  i18n: {
    supportedLanguages: { tr, en },
    fallbackLanguage: 'tr',
  },
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    meta: {
      titleSuffix: '— İlhan Su Depoları Admin',
    },
  },
  collections: [
    HeroSlides,
    Products,
    Categories,
    Orders,
    JobPositions,
    Faqs,
    Users,
    Media,
    Blogs,
  ],
  globals: [
    SiteSettings,
  ],
  plugins: [
    seoPlugin({
      collections: ['products', 'blogs'],
      globals: ['site-settings'],
      uploadsCollection: 'media',
      generateTitle: ({ doc }: any) => `${doc?.name || doc?.siteName || 'İlhan Su Depoları'} — Su Depolama Teknolojileri`,
      generateDescription: ({ doc }: any) =>
        doc?.description || doc?.footerText || 'İlhan Su Depoları — Polietilen Plastik Su Depoları.',
    }),
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || 'development-only-payload-secret-change-before-production',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db,
})

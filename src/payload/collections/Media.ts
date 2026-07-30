import type { CollectionConfig } from 'payload'
import { publicReadAuthenticatedWrite } from '../access'

export const Media: CollectionConfig = {
  slug: 'media',
  access: publicReadAuthenticatedWrite,
  labels: {
    singular: 'Medya',
    plural: 'Medya Kütüphanesi',
  },
  admin: {
    group: 'Sistem & Medya',
  },
  upload: {
    staticDir: 'public/uploads',
    imageSizes: [
      {
        name: 'thumbnail',
        width: 400,
        height: 300,
        position: 'centre',
      },
      {
        name: 'card',
        width: 768,
        height: 1024,
        position: 'centre',
      },
      {
        name: 'hero',
        width: 1920,
        height: 1080,
        position: 'centre',
      },
    ],
    adminThumbnail: 'thumbnail',
    mimeTypes: ['image/*'],
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
      label: 'Görsel Alternatif Metni (Alt Text)',
    },
  ],
}

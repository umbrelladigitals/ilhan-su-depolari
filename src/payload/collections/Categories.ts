import type { CollectionConfig } from 'payload'

export const Categories: CollectionConfig = {
  slug: 'categories',
  labels: {
    singular: 'Kategori',
    plural: 'Kategoriler',
  },
  admin: {
    useAsTitle: 'name',
    group: 'İçerik Yönetimi',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Kategori Adı',
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      label: 'URL Adresi (Slug)',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Açıklama',
    },
    {
      name: 'icon',
      type: 'text',
      label: 'Lucide İkon Adı',
    },
  ],
}

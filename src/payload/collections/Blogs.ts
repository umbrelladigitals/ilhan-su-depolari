import type { CollectionConfig } from 'payload'

export const Blogs: CollectionConfig = {
  slug: 'blogs',
  labels: {
    singular: 'Blog Yazısı',
    plural: 'Blog Yazıları',
  },
  admin: {
    useAsTitle: 'title',
    group: 'İçerik Yönetimi',
    defaultColumns: ['title', 'publishedAt', 'isActive'],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Blog Başlığı',
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      label: 'URL Adresi (Slug)',
    },
    {
      name: 'summary',
      type: 'textarea',
      required: true,
      label: 'Özet (Kartlarda Görünecek Kısa Metin)',
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
      label: 'İçerik',
    },
    {
      name: 'image',
      type: 'text',
      label: 'Görsel URL veya Yolu',
    },
    {
      name: 'author',
      type: 'relationship',
      relationTo: 'users',
      label: 'Yazar',
    },
    {
      name: 'publishedAt',
      type: 'date',
      label: 'Yayınlanma Tarihi',
      admin: {
        date: {
          pickerAppearance: 'dayAndTime',
        },
      },
    },
    {
      name: 'isActive',
      type: 'checkbox',
      defaultValue: true,
      label: 'Aktif mi?',
    },
    {
      name: 'readTime',
      type: 'text',
      label: 'Okuma Süresi (Örn: 4 dk)',
      defaultValue: '5 dk',
    },
    {
      name: 'category',
      type: 'text',
      label: 'Kategori (Örn: Rehber, Ürün İncelemesi, Sektörel)',
      defaultValue: 'Su Depolama Rehberi',
    },
  ],
}

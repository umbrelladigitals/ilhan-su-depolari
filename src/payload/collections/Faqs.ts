import type { CollectionConfig } from 'payload'

export const Faqs: CollectionConfig = {
  slug: 'faqs',
  labels: {
    singular: 'SSS Sorusu',
    plural: 'Sıkça Sorulan Sorular',
  },
  admin: {
    useAsTitle: 'question',
    group: 'Kurumsal & Sayfalar',
  },
  fields: [
    {
      name: 'question',
      type: 'text',
      required: true,
      label: 'Soru',
    },
    {
      name: 'answer',
      type: 'textarea',
      required: true,
      label: 'Cevap',
    },
    {
      name: 'category',
      type: 'select',
      options: [
        { label: 'Genel', value: 'genel' },
        { label: 'Ürünler', value: 'urunler' },
        { label: 'Teslimat & Montaj', value: 'teslimat' },
        { label: 'Garanti & Bakım', value: 'garanti' },
      ],
      defaultValue: 'genel',
      label: 'Kategori',
    },
    {
      name: 'order',
      type: 'number',
      defaultValue: 0,
      label: 'Sıralama',
    },
  ],
}

import type { CollectionConfig } from 'payload'

export const JobPositions: CollectionConfig = {
  slug: 'job-positions',
  labels: {
    singular: 'İş İlanı',
    plural: 'İş İlanları (İK)',
  },
  admin: {
    useAsTitle: 'title',
    group: 'Kurumsal & Sayfalar',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Pozisyon Unvanı',
    },
    {
      name: 'department',
      type: 'text',
      required: true,
      label: 'Departman',
    },
    {
      name: 'location',
      type: 'text',
      required: true,
      label: 'Lokasyon / Çalışma Şekli',
    },
    {
      name: 'type',
      type: 'select',
      options: [
        { label: 'Tam Zamanlı', value: 'Tam Zamanlı' },
        { label: 'Yarı Zamanlı', value: 'Yarı Zamanlı' },
        { label: 'Stajyer', value: 'Stajyer' },
      ],
      defaultValue: 'Tam Zamanlı',
      label: 'İstihdam Türü',
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      label: 'Pozisyon Tanımı',
    },
    {
      name: 'requirements',
      type: 'json',
      label: 'Nitelikler & Aranan Özellikler (JSON)',
    },
    {
      name: 'isActive',
      type: 'checkbox',
      defaultValue: true,
      label: 'İlan Yayında mı?',
    },
  ],
}

import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  labels: {
    singular: 'Kullanıcı',
    plural: 'Yöneticiler',
  },
  admin: {
    useAsTitle: 'email',
    group: 'Sistem & Medya',
  },
  auth: true,
  fields: [
    {
      name: 'name',
      type: 'text',
      label: 'Ad Soyad',
    },
    {
      name: 'role',
      type: 'select',
      defaultValue: 'admin',
      options: [
        { label: 'Yönetici (Admin)', value: 'admin' },
        { label: 'Editör', value: 'editor' },
      ],
      label: 'Yetki Rolü',
    },
  ],
}

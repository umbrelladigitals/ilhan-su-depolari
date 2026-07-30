import type { CollectionConfig } from 'payload'
import { adminOnly, isAdminField } from '../access'

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
  access: adminOnly,
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
      required: true,
      access: {
        create: isAdminField,
        update: isAdminField,
      },
      options: [
        { label: 'Yönetici (Admin)', value: 'admin' },
        { label: 'Editör', value: 'editor' },
      ],
      label: 'Yetki Rolü',
    },
  ],
}

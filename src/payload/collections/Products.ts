import type { CollectionConfig } from 'payload'
import { publicReadAuthenticatedWrite } from '../access'
import { validateSafePathOrHttpsUrl, validateSlug } from '../validation'

export const Products: CollectionConfig = {
  slug: 'products',
  access: publicReadAuthenticatedWrite,
  labels: {
    singular: 'Ürün',
    plural: 'Ürünler',
  },
  admin: {
    useAsTitle: 'name',
    group: 'İçerik Yönetimi',
    defaultColumns: ['name', 'category', 'capacity', 'price', 'inStock'],
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Ürün Adı',
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      validate: validateSlug,
      label: 'URL Adresi (Slug)',
    },
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'categories',
      required: true,
      label: 'Kategori',
    },
    {
      name: 'capacity',
      type: 'text',
      required: true,
      label: 'Kapasite (Örn: 500 Lt, 5 Ton, 10.000 Lt)',
    },
    {
      name: 'dimensions',
      type: 'text',
      label: 'Boyutlar (G x Y x U)',
    },
    {
      name: 'material',
      type: 'text',
      label: 'Malzeme Tipi (Polietilen, Plastik)',
    },
    {
      name: 'price',
      type: 'number',
      label: 'Liste Fiyatı (TL)',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Kısa Açıklama',
    },
    {
      name: 'detailedDescription',
      type: 'textarea',
      label: 'Detaylı SEO Açıklaması (Alt Bölüm İçin)',
    },
    {
      name: 'inStock',
      type: 'checkbox',
      defaultValue: true,
      label: 'Stokta Var mı?',
    },
    {
      name: 'image',
      type: 'text',
      validate: validateSafePathOrHttpsUrl,
      label: 'Görsel URL veya Yolu',
    },
    {
      name: 'specs',
      type: 'json',
      label: 'Teknik Özellikler (JSON)',
    },
    {
      name: 'features',
      type: 'json',
      label: 'Öne Çıkan Özellikler (JSON Listesi)',
    },
  ],
}

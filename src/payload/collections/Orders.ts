import type { CollectionConfig } from 'payload'

export const Orders: CollectionConfig = {
  slug: 'orders',
  admin: {
    useAsTitle: 'orderCode',
  },
  fields: [
    {
      name: 'orderCode',
      type: 'text',
      required: true,
      unique: true,
      index: true,
    },
    {
      name: 'customerName',
      type: 'text',
      required: true,
    },
    {
      name: 'customerPhone',
      type: 'text',
      required: true,
    },
    {
      name: 'productName',
      type: 'text',
      required: true,
    },
    {
      name: 'capacity',
      type: 'text',
      required: true,
    },
    {
      name: 'orderDate',
      type: 'text',
      required: true,
    },
    {
      name: 'estimatedDelivery',
      type: 'text',
      required: true,
    },
    {
      name: 'currentStep',
      type: 'select',
      options: [
        { label: 'Sipariş Alındı', value: 'placed' },
        { label: 'İmalat Aşamasında', value: 'production' },
        { label: 'Kalite Kontrol', value: 'quality' },
        { label: 'Sevkiyat Yolunda', value: 'shipping' },
        { label: 'Teslim Edildi', value: 'delivered' },
      ],
      defaultValue: 'placed',
      required: true,
    },
    {
      name: 'city',
      type: 'text',
      required: true,
    },
    {
      name: 'notes',
      type: 'textarea',
    },
    {
      name: 'history',
      type: 'array',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'date',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'text',
          required: true,
        },
        {
          name: 'completed',
          type: 'checkbox',
          defaultValue: false,
        },
      ],
    },
  ],
}

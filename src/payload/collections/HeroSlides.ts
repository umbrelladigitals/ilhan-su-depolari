import type { CollectionConfig } from 'payload'

export const HeroSlides: CollectionConfig = {
  slug: 'hero-slides',
  labels: {
    singular: 'Hero Banner Slaydı',
    plural: 'Hero Slider Bannerları',
  },
  admin: {
    useAsTitle: 'title',
    group: 'Anasayfa & Tasarım',
    defaultColumns: ['title', 'order', 'isActive'],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Ana Başlık (Örn: Yüksek Kaliteli Su Depolama Çözümleri)',
    },
    {
      name: 'subtitle',
      type: 'textarea',
      required: true,
      label: 'Alt Açıklama Metni',
    },
    {
      name: 'badgeText',
      type: 'text',
      label: 'Rozet / Üst Etiket (Örn: Ankara Fabrika Teslimi & Ücretsiz Keşif)',
    },
    {
      name: 'bgType',
      type: 'select',
      defaultValue: 'video',
      options: [
        { label: 'Video Arka Planı', value: 'video' },
        { label: 'Görsel Arka Planı', value: 'image' },
      ],
      label: 'Arka Plan Türü',
    },
    {
      name: 'bgMediaUrl',
      type: 'text',
      defaultValue: '/videos/hero_video.mp4',
      label: 'Video veya Görsel URL / Yolu',
    },
    {
      name: 'primaryButtonText',
      type: 'text',
      defaultValue: 'Ürünlerimizi İnceleyin',
      label: 'Birincil Buton Yazısı',
    },
    {
      name: 'primaryButtonLink',
      type: 'text',
      defaultValue: '/urunler',
      label: 'Birincil Buton Linki',
    },
    {
      name: 'whatsappButtonText',
      type: 'text',
      defaultValue: 'WhatsApp ile Hızlı Fiyat Al',
      label: 'WhatsApp Buton Yazısı',
    },
    {
      name: 'whatsappCustomMessage',
      type: 'text',
      defaultValue: 'Merhaba, su deposu modelleri ve fiyatları hakkında bilgi almak istiyorum.',
      label: 'WhatsApp Özel Mesaj Şablonu',
    },
    {
      name: 'order',
      type: 'number',
      defaultValue: 1,
      label: 'Görüntülenme Sırası',
    },
    {
      name: 'isActive',
      type: 'checkbox',
      defaultValue: true,
      label: 'Slayt Yayında mı?',
    },
  ],
}

import type { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  label: 'Genel Site & SEO Ayarları',
  admin: {
    group: 'Site Ayarları & SEO',
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Genel & İletişim',
          fields: [
            {
              name: 'siteName',
              type: 'text',
              defaultValue: 'İlhan Su Depoları',
              label: 'Firma / Site Adı',
            },
            {
              name: 'phone',
              type: 'text',
              defaultValue: '0312 543 1358',
              label: 'Telefon Numarası',
            },
            {
              name: 'whatsapp',
              type: 'text',
              defaultValue: '903125431358',
              label: 'WhatsApp Numarası (Uluslararası format, örn: 903125431358)',
            },
            {
              name: 'email',
              type: 'text',
              defaultValue: 'info@ilhansudepolari.com',
              label: 'E-Posta Adresi',
            },
            {
              name: 'address',
              type: 'textarea',
              defaultValue: 'Ostim OSB Mahallesi 100. Yıl Bulvarı No: 45 Yenimahalle / Ankara',
              label: 'Fabrika & Adres Bilgisi',
            },
            {
              name: 'workingHours',
              type: 'text',
              defaultValue: 'Pazartesi - Cumartesi: 08:30 - 18:30',
              label: 'Çalışma Saatleri',
            },
            {
              name: 'googleMapsEmbedUrl',
              type: 'textarea',
              defaultValue: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3056.242!2d32.748!3d39.975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDU4JzMwLjAiTiAzMsKwNDQnNTIuOCJF!5e0!3m2!1str!2str!4v1650000000000',
              label: 'Google Haritalar Embed Iframe URL',
            },
            {
              name: 'footerText',
              type: 'textarea',
              defaultValue: '© 2026 İlhan Su Depoları. Tüm hakları saklıdır. Ankara polietilen ve paslanmaz modüler su deposu imalatçısı.',
              label: 'Alt Bilgi (Footer) Telif Metni',
            },
          ],
        },
        {
          label: 'Hakkımızda & Kurumsal',
          fields: [
            {
              name: 'aboutTitle',
              type: 'text',
              defaultValue: '25 Yıllık Sanayi Tecrübesiyle Güvenli Su Depolama',
              label: 'Hakkımızda Bölüm Başlığı',
            },
            {
              name: 'aboutDescription',
              type: 'textarea',
              defaultValue: 'İlhan Su Depoları olarak 2001 yılından bu yana Ankara Ostim sanayisinde gıda sınıfı polietilen, 304/316 paslanmaz çelik ve mukavemetli polyester su depoları imalatı gerçekleştiriyoruz.',
              label: 'Hakkımızda Detay Metni',
            },
            {
              name: 'statExperience',
              type: 'text',
              defaultValue: '25+',
              label: 'İstatistik 1 (Yıllık Deneyim)',
            },
            {
              name: 'statTanksProduced',
              type: 'text',
              defaultValue: '15.000+',
              label: 'İstatistik 2 (Üretilen Depo Sayısı)',
            },
            {
              name: 'statSatisfaction',
              type: 'text',
              defaultValue: '%99.8',
              label: 'İstatistik 3 (Müşteri Memnuniyeti)',
            },
          ],
        },
        {
          label: 'Hesaplayıcı & SSS Metinleri',
          fields: [
            {
              name: 'calculatorTitle',
              type: 'text',
              defaultValue: 'İhtiyacınıza Uygun Depo Hacmini Hesaplayın',
              label: 'Hesaplayıcı Modül Başlığı',
            },
            {
              name: 'calculatorSubtitle',
              type: 'textarea',
              defaultValue: 'Kullanım amacınıza ve bina/kullanıcı sayınıza göre ideal su deposu kapasitesini saniyeler içinde hesaplayın.',
              label: 'Hesaplayıcı Modül Açıklaması',
            },
          ],
        },
        {
          label: 'SEO Ayarları',
          fields: [
            {
              name: 'siteMetaTitle',
              type: 'text',
              defaultValue: 'İlhan Su Depoları — Polietilen & Paslanmaz Modüler Su Depoları',
              label: 'Varsayılan Meta Başlığı (Title)',
            },
            {
              name: 'siteMetaDescription',
              type: 'textarea',
              defaultValue: 'Ankara su deposu imalatçısı İlhan Su Depoları. Yüksek kaliteli polietilen dikey, yatay ve paslanmaz modüler su depoları uygun fiyat ve fabrika garantisiyle.',
              label: 'Varsayılan Meta Açıklaması (Description)',
            },
            {
              name: 'siteMetaKeywords',
              type: 'text',
              defaultValue: 'su deposu, ankara su deposu, polietilen su deposu, paslanmaz su deposu, su deposu fiyatları',
              label: 'Meta Anahtar Kelimeler (Keywords)',
            },
          ],
        },
      ],
    },
  ],
}

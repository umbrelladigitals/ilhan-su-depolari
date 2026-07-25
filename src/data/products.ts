import type { Product } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: '5000l-yatay-mavi-polietilen-su-deposu',
    name: '5 Ton Yatay Mavi Polietilen Su Deposu',
    category: 'horizontal_tank',
    categoryName: 'Yatay Su Depoları',
    image: '/images/products/5000l-yatay-mavi-polietilen-su-deposu.jpg',
    capacityRange: '5.000 Litre (5 Ton)',
    material: '1. Sınıf Mavi Polietilen (LLDPE - UV Koruma)',
    features: [
      '5 Ton (5000 Litre) Yüksek Hacim Kapasitesi',
      'Güneş Işıklarını Engelleleyen Mavi Katman (Yosun Tutmaz)',
      'Gıda Tüzüğüne %100 Uygun Hammadde (BPA İçermez)',
      'Düşük Tavanlı ve Dar Alanlara Mükemmel Yatay Uyum'
    ],
    description: 'Bina altları, bahçeler ve sanayi tesisleri için özel olarak üretilmiş yosun tutmaz, güneş ışığı geçirmez 5 tonluk mavi yatay depo.',
    startingPrice: '26.500 ₺',
    badge: 'Mavi UV Katmanlı',
    specs: {
      dimensions: 'Uzunluk: 240 cm | Çap: 165 cm',
      thickness: '10 mm - 14 mm Güçlendirilmiş Gövde',
      outletSize: '2 inç Pirinç Rekor Çıkış',
      warranty: '5 Yıl Birebir Değişim Garantisi',
      foodGrade: true
    }
  },
  {
    id: '5000l-yatay-beyaz-polietilen-su-deposu',
    name: '5 Ton Yatay Beyaz Polietilen Su Deposu',
    category: 'horizontal_tank',
    categoryName: 'Yatay Su Depoları',
    image: '/images/products/5000l-yatay-beyaz-polietilen-su-deposu.jpg',
    capacityRange: '5.000 Litre (5 Ton)',
    material: '1. Sınıf Şeffaf / Beyaz Polietilen (LLDPE)',
    features: [
      '5 Ton (5000 Litre) Geniş Hacim',
      'İç Seviyenin Dışarıdan Görülmesini Sağlayan Doğal Beyaz Gövde',
      'T.C. Sağlık Bakanlığı Onaylı İçme Suyu Deposu',
      'Darbelere Karşı Esnek Monoblok Gövde Yapısı'
    ],
    description: 'İçme suyu depolamadan ziraat ve kimyasal sıvı alanlarına kadar geniş kullanım alanına sahip 5000 litrelik doğal beyaz yatay su deposu.',
    startingPrice: '24.500 ₺',
    badge: 'Doğal Gıda Sınıfı',
    specs: {
      dimensions: 'Uzunluk: 240 cm | Çap: 165 cm',
      thickness: '10 mm - 14 mm Güçlendirilmiş Gövde',
      outletSize: '2 inç Pirinç Rekor Çıkış',
      warranty: '5 Yıl Birebir Değişim Garantisi',
      foodGrade: true
    }
  },
  {
    id: '1000l-dikey-mavi-polietilen-su-deposu',
    name: '1 Ton Dikey Mavi Polietilen Su Deposu',
    category: 'vertical_tank',
    categoryName: 'Dikey Su Deposu',
    image: '/images/products/1000l-dikey-mavi-polietilen-su-deposu.jpg',
    capacityRange: '1.000 Litre (1 Ton)',
    material: 'Güneş Işığına Dayanıklı Mavi Polietilen',
    features: [
      '1 Ton (1000 Litre) Standart Kapasite',
      'İnce Tasarım ile Dar Kapı ve Geçitlerden Rahatça Geçer',
      'Dış Mekan İklim Şartlarına En Dayanıklı Gövde',
      'Gıda Onaylı %100 Bakteri Üretmeyen İç Yüzey'
    ],
    description: 'Apartman daireleri, bahçeler ve küçük işletmeler için ideal boyutlarda tasarlanmış 1000L mavi dikey su deposu.',
    startingPrice: '6.800 ₺',
    badge: 'Mavi Yosun Önleyici',
    specs: {
      dimensions: 'Çap: 82 cm | Yükseklik: 205 cm',
      thickness: '7 mm - 9 mm',
      outletSize: '1 inç Pirinç Vana Çıkışı',
      warranty: '5 Yıl Garantili',
      foodGrade: true
    }
  },
  {
    id: '1000l-dikey-beyaz-polietilen-su-deposu',
    name: '1 Ton Dikey Beyaz Polietilen Su Deposu',
    category: 'vertical_tank',
    categoryName: 'Dikey Su Deposu',
    image: '/images/products/1000l-dikey-beyaz-polietilen-su-deposu.jpg',
    capacityRange: '1.000 Litre (1 Ton)',
    material: '1. Sınıf Şeffaf Doğal Polietilen',
    features: [
      '1 Ton (1000 Litre) Standart Kapasite',
      'Ev ve İşyeri Hidrofor Bağlantısına Hazır Altyapı',
      'T.C. Sağlık Bakanlığı Onaylı BPA Free İç Yüzey',
      'Kolay Temizlenen Vidalı Üst Kapak'
    ],
    description: 'Yüksek hijyen standartlarında üretilmiş, içme suyu için %100 güvenli 1 tonluk dikey polietilen depo.',
    startingPrice: '6.400 ₺',
    badge: 'Çok Satan Ürün',
    specs: {
      dimensions: 'Çap: 82 cm | Yükseklik: 205 cm',
      thickness: '7 mm - 9 mm',
      outletSize: '1 inç Pirinç Vana Çıkışı',
      warranty: '5 Yıl Garantili',
      foodGrade: true
    }
  },
  {
    id: '500l-dikey-mavi-polietilen-su-deposu',
    name: '500 Litre Dikey Mavi Polietilen Su Deposu',
    category: 'vertical_tank',
    categoryName: 'Dikey Su Deposu',
    image: '/images/products/500l-dikey-mavi-polietilen-su-deposu.jpg',
    capacityRange: '500 Litre',
    material: 'Mavi Polietilen (LLDPE)',
    features: [
      '500 Litre Kompakt Hacim',
      'Balkon, Teras ve Küçük Bahçelere Tam Uyum',
      'Dış Mekanda Yosun Tutmayan Özel Mavi Katman',
      'Hafif ve Kolay Taşınabilir Gövde'
    ],
    description: 'Küçük hacimli su ihtiyaçları, bağ-bahçe sulaması ve balkon kullanımına uygun 500 litrelik mavi dikey depo.',
    startingPrice: '4.100 ₺',
    badge: 'Kompakt Hacim',
    specs: {
      dimensions: 'Çap: 68 cm | Yükseklik: 142 cm',
      thickness: '6 mm - 8 mm',
      outletSize: '3/4 inç Pirinç Çıkış',
      warranty: '5 Yıl Garantili',
      foodGrade: true
    }
  },
  {
    id: '500l-dikey-beyaz-polietilen-su-deposu',
    name: '500 Litre Dikey Beyaz Polietilen Su Deposu',
    category: 'vertical_tank',
    categoryName: 'Dikey Su Deposu',
    image: '/images/products/500l-dikey-beyaz-polietilen-su-deposu.jpg',
    capacityRange: '500 Litre',
    material: 'Gıda Sınıfı Şeffaf Beyaz Polietilen',
    features: [
      '500 Litre Kompakt Kapasite',
      'İçme Suyu Şebekesine Direkt Bağlanabilir',
      'Kokusuz ve Tat Bozmayan Polietilen Malzeme',
      'Sızdırmaz Kilitli Kapak'
    ],
    description: 'Evsel yedek su depolama için ideal boyutlarda 500 litrelik hijyenik dikey polietilen su deposu.',
    startingPrice: '3.800 ₺',
    badge: 'Pratik Kullanım',
    specs: {
      dimensions: 'Çap: 68 cm | Yükseklik: 142 cm',
      thickness: '6 mm - 8 mm',
      outletSize: '3/4 inç Pirinç Çıkış',
      warranty: '5 Yıl Garantili',
      foodGrade: true
    }
  }
];

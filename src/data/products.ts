import type { Product } from '../types';

export const PRODUCTS: Product[] = [
  // ─── DİKEY SU DEPOLARI (vertical_tank) ───
  {
    id: '1000l-dikey-mavi-polietilen-su-deposu',
    name: '1 Ton Dikey Mavi Polietilen Su Deposu',
    category: 'vertical_tank',
    categoryName: 'Dikey Su Depoları',
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
    categoryName: 'Dikey Su Depoları',
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
    id: '5000l-dikey-polietilen-su-deposu',
    name: '5 Ton Dikey Polietilen Su Deposu',
    category: 'vertical_tank',
    categoryName: 'Dikey Su Depoları',
    image: '/images/vertical_poly_tank.jpg',
    capacityRange: '5.000 Litre (5 Ton)',
    material: '1. Sınıf UV Katkılı LLDPE Polietilen',
    features: [
      '5.000 Litre (5 Ton) Yüksek Hacim',
      'Apartman, Site ve Şantiye Kullanımına Uygun',
      'Yosun Tutmaz Güçlendirilmiş Monoblok Gövde',
      'Donmaya ve İklim Koşullarına Dayanıklı'
    ],
    description: 'Bina yedek su depoları ve tarımsal sulama tesisleri için üretilmiş 5 ton dikey polietilen su deposu.',
    startingPrice: '24.500 ₺',
    badge: 'Yüksek Kapasite',
    specs: {
      dimensions: 'Çap: 185 cm | Yükseklik: 210 cm',
      thickness: '10 mm - 14 mm',
      outletSize: '2 inç Pirinç Rekor Çıkış',
      warranty: '5 Yıl Birebir Değişim Garantili',
      foodGrade: true
    }
  },
  {
    id: '500l-dikey-mavi-polietilen-su-deposu',
    name: '500 Litre Dikey Mavi Polietilen Su Deposu',
    category: 'vertical_tank',
    categoryName: 'Dikey Su Depoları',
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
    categoryName: 'Dikey Su Depoları',
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
  },

  // ─── YATAY SU DEPOLARI (horizontal_tank) ───
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
    id: '10000l-yatay-polyester-su-deposu',
    name: '10 Ton Yatay Polyester Su Deposu',
    category: 'horizontal_tank',
    categoryName: 'Yatay Su Depoları',
    image: '/images/horizontal_poly_tank.jpg',
    capacityRange: '10.000 Litre (10 Ton)',
    material: 'Cam Elyaf Takviyeli Polyester (CTP)',
    features: [
      '10.000 Litre (10 Ton) Ağır Hizmet Kapasitesi',
      'Cam Elyaf Ve Reçine Takviyeli Üstün Gövde Direnci',
      'Yerinde İmalat & Montaj Seçeneği',
      'Asit, Kimyasal ve Yüksek Sıcaklığa Dayanıklı'
    ],
    description: 'Endüstriyel tesisler, fabrikalar ve büyük siteler için tasarlanmış yüksek mukavemetli CTP polyester yatay deposu.',
    startingPrice: '48.000 ₺',
    badge: 'Endüstriyel CTP',
    specs: {
      dimensions: 'Uzunluk: 350 cm | Çap: 200 cm',
      thickness: '12 mm - 16 mm CTP Gövde',
      outletSize: '2.5 inç Flanş Çıkışı',
      warranty: '7 Yıl Garantili',
      foodGrade: true
    }
  },
  {
    id: 'toprak-alti-takviyeli-su-deposu',
    name: 'Toprak Altı Mukavemetli Yatay Su Deposu',
    category: 'horizontal_tank',
    categoryName: 'Yatay Su Depoları',
    image: '/images/underground_tank.jpg',
    capacityRange: '5.000L - 50.000L',
    material: 'Çelik Kaburga Takviyeli Polyester / Polietilen',
    features: [
      'Toprak Yüküne ve Basıncına Dayanıklı Özel Kaburga Şasi',
      'Bahçe Çim Altı ve Otopark Altına Gömülebilir',
      'Yağmur Suyu Hasadı ve Sarnıç Kullanımı İçin İdeal',
      'Yüzeyde Yer Kaplamayan Gizli Yer Altı Çözümü'
    ],
    description: 'Peyzaj alanları ve otopark altlarında yer tasarrufu sağlayan, toprak basıncına ekstra mukavemetli yer altı yatay su deposu.',
    startingPrice: '55.000 ₺',
    badge: 'Yer Altı Sarnıç',
    specs: {
      dimensions: 'Projelendirilen Hacme Göre Değişir',
      thickness: '18 mm Ekstra Takviyeli Çelik Şasi',
      outletSize: '3 inç Rekor Çıkış',
      warranty: '10 Yıl Garantili',
      foodGrade: true
    }
  },

  // ─── ENDÜSTRİYEL TİP POMPALAR (industrial_pump) ───
  {
    id: 'paslanmaz-agir-hizmet-santrifuj-pompa',
    name: 'Paslanmaz Ağır Hizmet Santrifüj Pompa',
    category: 'industrial_pump',
    categoryName: 'Endüstriyel Tip Pompalar',
    image: '/images/industrial_pump.jpg',
    capacityRange: '15 m³/h - 75 m³/h (5.5 kW)',
    material: '304 / 316 Kalite Paslanmaz Çelik',
    features: [
      'Ağır Hizmet Tipi Kesintisiz Çalışma Motoru',
      'Korozyona ve Kimyasallara Üstün Dirençli Çark',
      'Yüksek Debi ve Basınç Performansı (50 Metre Basma)',
      'Sessiz ve Titreşimsiz Endüstriyel Çalışma'
    ],
    description: 'Fabrikalar, arıtma tesisleri ve bina hidrofor grupları için tasarlanmış yüksek verimli 304 paslanmaz santrifüj pompa.',
    startingPrice: '18.500 ₺',
    badge: '304 Paslanmaz',
    specs: {
      dimensions: '45 x 25 x 30 cm',
      thickness: 'IP55 Motor Koruma Sınıfı',
      outletSize: '2 inç Giriş / 1.5 inç Çıkış',
      warranty: '3 Yıl Fabrika Garantili',
      foodGrade: true
    }
  },
  {
    id: 'paslanmaz-moduler-celik-su-deposu',
    name: '304 Paslanmaz Modüler Çelik Su Deposu & Pompa Grubu',
    category: 'industrial_pump',
    categoryName: 'Endüstriyel Tip Pompalar',
    image: '/images/modular_steel_tank.jpg',
    capacityRange: '10 Ton - 500 Ton',
    material: 'AISI 304 / 316 Kalite Paslanmaz Çelik Paneller',
    features: [
      'Yerinde Demonte Montaj İmkanı (Dar Kapılardan Kolay Geçiş)',
      'Yüksek Basınç Dayanımlı Cıvatalı / Kaynaklı Modüler Gövde',
      'T.C. Sağlık Bakanlığı Onaylı %100 Hijyenik İçme Suyu Deposu',
      'Yangın Hidrantı ve Hidrofor Pompa Entegrasyonlu'
    ],
    description: 'Büyük oteller, hastaneler ve endüstriyel tesisler için dar kapılardan geçirilerek kurulum yerinde monte edilen modüler paslanmaz su deposu.',
    startingPrice: '95.000 ₺',
    badge: 'Modüler Paslanmaz',
    specs: {
      dimensions: 'Modüler Panel Ölçüleri: 100 x 100 cm',
      thickness: '2 mm - 5 mm Paslanmaz Çelik Panel',
      outletSize: '4 inç Flanşlı Çıkış',
      warranty: '10 Yıl Garantili',
      foodGrade: true
    }
  },

  // ─── DALGIÇ POMPA SİSTEMLERİ (submersible_pump) ───
  {
    id: 'derin-kuyu-paslanmaz-dalgic-pompa-4-inc',
    name: 'Derin Kuyu Paslanmaz Dalgıç Pompa (4 Inç)',
    category: 'submersible_pump',
    categoryName: 'Dalgıç Pompa Sistemleri',
    image: '/images/submersible_pump.jpg',
    capacityRange: '4 inç (2.2 kW - 120m Basma)',
    material: 'Komple 304 Paslanmaz Çelik Gövde & Fan',
    features: [
      '120 Metre Derinliğe Kadar Kesintisiz Su Çekme Gücü',
      'Kum ve Partiküle Dayanıklı Noryl / Paslanmaz Çarklar',
      'Dahili Termik Korumalı Kontrol Panosu Dahil',
      'Düşük Elektrik Tüketimli Yüksek Verimli Motor'
    ],
    description: 'Sondaj kuyuları, ziraat sulaması ve bahçe kuyularından temiz su temini için tasarlanmış derin kuyu paslanmaz dalgıç pompa.',
    startingPrice: '14.200 ₺',
    badge: 'Derin Kuyu Sondaj',
    specs: {
      dimensions: 'Çap: 98 mm | Boy: 110 cm',
      thickness: 'NEMA Standartlarında Motor',
      outletSize: '1.5 inç Çıkış Rekor',
      warranty: '3 Yıl Garantili',
      foodGrade: true
    }
  },
  {
    id: 'agir-hizmet-fosseptik-drenaj-dalgic-pompasi',
    name: 'Ağır Hizmet Fosseptik Drenaj Dalgıç Pompası',
    category: 'submersible_pump',
    categoryName: 'Dalgıç Pompa Sistemleri',
    image: '/images/submersible_pump.jpg',
    capacityRange: '20 m³/h (1.5 kW Parçalayıcı Bıçaklı)',
    material: 'Pik Döküm Gövde & Paslanmaz Çelik Bıçak',
    features: [
      'Sert Partikülleri ve Lifli Atıkları Öğüten Parçalayıcı Bıçak',
      'Şamandıralı Otomatik Çalışma / Durma Sistemi',
      'Fosseptik Çukurları ve Yağmur Suyu Drenajına Uyumlu',
      'Döküm Gövde İle Ekstra Dayanıklılık'
    ],
    description: 'Bina bodrum katları, fosseptik çukurları ve biriken çamurlu suların tahliyesi için parçalayıcı bıçaklı drenaj dalgıç pompası.',
    startingPrice: '11.800 ₺',
    badge: 'Parçalayıcı Bıçaklı',
    specs: {
      dimensions: 'Çap: 25 cm | Yükseklik: 48 cm',
      thickness: 'Çift Mekanik Salmastralı',
      outletSize: '2 inç Hortum Çıkışı',
      warranty: '2 Yıl Garantili',
      foodGrade: false
    }
  }
];

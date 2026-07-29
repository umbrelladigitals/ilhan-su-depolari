import type { OrderTrackItem } from '../types';

export const MOCK_ORDERS: Record<string, OrderTrackItem> = {
  'ILH-98421': {
    orderCode: 'ILH-98421',
    customerName: 'Ahmet Yılmaz',
    customerPhone: '+90 532 *** 44 12',
    productName: 'Polietilen Dikey Su Deposu 5.000 L',
    capacity: '5.000 Litre (Mavi - Gıda Tipi)',
    orderDate: '21 Temmuz 2026',
    estimatedDelivery: '24 Temmuz 2026',
    currentStep: 'shipping',
    city: 'Bursa / Nilüfer',
    notes: 'Vinçli kamyon ile şantiye teslimatı yapılacak. Sürücü teslimattan 1 saat önce arayacak.',
    history: [
      {
        title: 'Sipariş ve WhatsApp Onayı Alındı',
        date: '21 Temmuz - 10:15',
        description: 'Sipariş detayları ve ödeme dekontu doğrulandı. Üretim emri açıldı.',
        completed: true
      },
      {
        title: 'Rotasyon Kalıplama ve Gövde Üretimi',
        date: '22 Temmuz - 09:30',
        description: '5.000L monoblok gövde fırınlama işlemi tamamlandı, soğutma aşamasına geçildi.',
        completed: true
      },
      {
        title: 'Basınç & Sızdırmazlık Kalite Kontrolü',
        date: '22 Temmuz - 16:00',
        description: '%100 su basınç testi ve rekor basma testinden başarıyla geçti. ISO 9001 sertifikalandı.',
        completed: true
      },
      {
        title: 'Sevkiyat Aracına Yüklendi ve Yola Çıktı',
        date: '23 Temmuz - 08:30',
        description: 'Lojistik aracı araç plakası: 16 BC 784. Sürücü: Mehmet K. Teslimata doğru seyir halinde.',
        completed: true
      },
      {
        title: 'Müşteri Adresine Teslimat',
        date: '24 Temmuz (Planlanan)',
        description: 'Saha montaj ve teslim tutanağı imzalatılacak.',
        completed: false
      }
    ]
  },
  'ILH-88210': {
    orderCode: 'ILH-88210',
    customerName: 'Astra Kimya A.Ş.',
    customerPhone: '+90 533 *** 90 88',
    productName: 'Polietilen Dikey Su Deposu 10 Ton',
    capacity: '10.000 Litre',
    orderDate: '19 Temmuz 2026',
    estimatedDelivery: '27 Temmuz 2026',
    currentStep: 'production',
    city: 'Kocaeli / Gebze OSB',
    notes: 'Rotasyon kalıplaması tamamlandı. Rekor montajı 26 Temmuz tarihinde yapılacaktır.',
    history: [
      {
        title: 'Sipariş ve Proje Onaylandı',
        date: '19 Temmuz - 14:00',
        description: 'Polietilen dikey depo teknik detayları onaylandı.',
        completed: true
      },
      {
        title: 'Rotasyon Kalıplama Üretimi',
        date: '21 Temmuz - 11:00',
        description: 'LLDPE hammadde fırınlanması ve soğutma prosesi tamamlandı.',
        completed: true
      },
      {
        title: 'Sertifikasyon ve Sızdırmazlık Testi',
        date: '24 Temmuz (Planlanan)',
        description: 'EPDM conta takımı ve modüler panel basınç mukavemet testi yapılacaktır.',
        completed: false
      },
      {
        title: 'Lojistik ve Yerinde Saha Montajı',
        date: '26 Temmuz (Planlanan)',
        description: 'Uzman montaj ekibimiz sahaya intikal edecektir.',
        completed: false
      },
      {
        title: 'Test Çalıştırması & Teslimat',
        date: '27 Temmuz (Planlanan)',
        description: 'Depo su ile doldurularak teslim edilecektir.',
        completed: false
      }
    ]
  },
  'ILH-76329': {
    orderCode: 'ILH-76329',
    customerName: 'Mustafa Demir',
    customerPhone: '+90 505 *** 12 34',
    productName: 'Polyester Yatay Su Deposu 2.000 L',
    capacity: '2.000 Litre (Beyaz - İçme Suyu)',
    orderDate: '15 Temmuz 2026',
    estimatedDelivery: '18 Temmuz 2026',
    currentStep: 'delivered',
    city: 'İzmir / Urla',
    notes: 'Sipariş başarıyla teslim edilmiş ve müşteri memnuniyeti teyit edilmiştir.',
    history: [
      {
        title: 'Sipariş Alındı',
        date: '15 Temmuz - 11:00',
        description: 'Sipariş kaydedildi.',
        completed: true
      },
      {
        title: 'Üretim Tamamlandı',
        date: '16 Temmuz - 15:00',
        description: 'Polyester kalıplama bitti.',
        completed: true
      },
      {
        title: 'Kalite Kontrol',
        date: '17 Temmuz - 10:00',
        description: 'Testler tamamlandı.',
        completed: true
      },
      {
        title: 'Sevkiyat Yolda',
        date: '17 Temmuz - 16:00',
        description: 'İzmir aracına yüklendi.',
        completed: true
      },
      {
        title: 'Teslim Edildi',
        date: '18 Temmuz - 14:20',
        description: 'Müşteriye sorunsuz teslim edildi.',
        completed: true
      }
    ]
  }
};

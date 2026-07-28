/**
 * WhatsApp yardımcı ve dinamik yönlendirme modülü
 */

export const DEFAULT_WHATSAPP_NUMBER = '+905412401119'

/**
 * Telefon numarasındaki sayısal olmayan tüm karakterleri (+, boşluk, parantez vs.) temizler.
 * wa.me formatına uygun temiz string döndürür (ör: '905412401119').
 */
export function cleanPhoneNumber(phone?: string | null): string {
  const target = phone && phone.trim() ? phone : DEFAULT_WHATSAPP_NUMBER
  const cleaned = target.replace(/[^0-9]/g, '')
  return cleaned.length > 0 ? cleaned : '905412401119'
}

/**
 * Admin panelinden/veritabanından alınan telefon numarası ve isteğe bağlı mesaj ile
 * dinamik wa.me URL'i oluşturur.
 */
export function getWhatsAppUrl(rawPhone?: string | null, message?: string): string {
  const cleaned = cleanPhoneNumber(rawPhone)
  if (!message) {
    return `https://wa.me/${cleaned}`
  }
  return `https://wa.me/${cleaned}?text=${encodeURIComponent(message)}`
}

/**
 * Telefon numarasını ekranda güzel bir biçimde görüntülemek için döndürür.
 */
export function formatWhatsAppDisplay(rawPhone?: string | null): string {
  if (rawPhone && rawPhone.trim()) {
    return rawPhone.trim()
  }
  return DEFAULT_WHATSAPP_NUMBER
}

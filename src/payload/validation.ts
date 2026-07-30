const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/

export const validateSlug = (value: unknown): true | string => {
  if (typeof value !== 'string' || !SLUG_PATTERN.test(value)) {
    return 'Yalnızca küçük harf, rakam ve tek tire kullanın.'
  }
  return true
}

export const validateSafePathOrHttpsUrl = (value: unknown): true | string => {
  if (value == null || value === '') return true
  if (typeof value !== 'string' || value.length > 2048) return 'Geçerli bir bağlantı girin.'
  if (value.startsWith('/') && !value.startsWith('//')) return true

  try {
    const url = new URL(value)
    return url.protocol === 'https:' ? true : 'Yalnızca site içi yollar veya HTTPS bağlantıları kullanılabilir.'
  } catch {
    return 'Geçerli bir bağlantı girin.'
  }
}

export const validateGoogleMapsEmbedUrl = (value: unknown): true | string => {
  if (typeof value !== 'string') return 'Geçerli bir Google Haritalar bağlantısı girin.'

  try {
    const url = new URL(value)
    const validHost = url.hostname === 'www.google.com' || url.hostname === 'google.com'
    return url.protocol === 'https:' && validHost && url.pathname.startsWith('/maps/embed')
      ? true
      : 'Yalnızca Google Haritalar HTTPS embed bağlantıları kullanılabilir.'
  } catch {
    return 'Geçerli bir Google Haritalar bağlantısı girin.'
  }
}

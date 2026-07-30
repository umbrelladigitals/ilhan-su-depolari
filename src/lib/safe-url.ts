export function safeAssetUrl(value: unknown, fallback: string): string {
  if (typeof value !== 'string' || value.length > 2048) return fallback
  if (value.startsWith('/') && !value.startsWith('//')) return value

  try {
    const url = new URL(value)
    return url.protocol === 'https:' ? url.toString() : fallback
  } catch {
    return fallback
  }
}

export function safeInternalPath(value: unknown, fallback: string): string {
  return typeof value === 'string' && value.startsWith('/') && !value.startsWith('//')
    ? value
    : fallback
}

export function safeGoogleMapsEmbedUrl(value: unknown, fallback: string): string {
  if (typeof value !== 'string') return fallback

  try {
    const url = new URL(value)
    const validHost = url.hostname === 'www.google.com' || url.hostname === 'google.com'
    return url.protocol === 'https:' && validHost && url.pathname.startsWith('/maps/embed')
      ? url.toString()
      : fallback
  } catch {
    return fallback
  }
}

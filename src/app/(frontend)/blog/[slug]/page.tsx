import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Calendar, Clock, ArrowLeft, MessageSquare, Phone, ShieldCheck } from 'lucide-react'
import { getBlogBySlug, getBlogs, getSiteSettings } from '@/lib/payload'
import { getWhatsAppUrl } from '@/lib/whatsapp'
import { safeAssetUrl } from '@/lib/safe-url'

export const revalidate = 0

interface BlogDetailPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params
  const blog = await getBlogBySlug(slug)
  if (!blog) return { title: 'Blog Bulunamadı' }

  return {
    title: `${blog.title} — İlhan Su Depoları`,
    description: blog.summary,
    openGraph: {
      title: blog.title,
      description: blog.summary,
      images: blog.image ? [{ url: safeAssetUrl(blog.image, '/images/hero_bg.jpg') }] : [],
    },
  }
}

// Lexical Rich Text simple renderer helper
function renderRichText(content: any) {
  if (!content) return null

  // If content is string
  if (typeof content === 'string') {
    return <p className="text-slate-700 leading-relaxed my-4">{content}</p>
  }

  // Lexical standard root object format
  const children = content?.root?.children || content?.children || []
  if (Array.isArray(children) && children.length > 0) {
    return children.map((node: any, idx: number) => {
      if (node.type === 'heading') {
        const text = node.children?.map((c: any) => c.text).join('') || ''
        const Tag = node.tag || 'h2'
        return (
          <Tag key={idx} className="text-2xl font-bold text-slate-900 mt-8 mb-4">
            {text}
          </Tag>
        )
      }
      if (node.type === 'quote') {
        const text = node.children?.map((c: any) => c.text).join('') || ''
        return (
          <blockquote key={idx} className="border-l-4 border-sky-500 pl-4 italic text-slate-700 my-6 bg-sky-50/50 py-3 rounded-r-lg">
            {text}
          </blockquote>
        )
      }

      // Paragraph
      const text = node.children?.map((c: any) => c.text).join('') || ''
      return (
        <p key={idx} className="text-slate-700 leading-relaxed text-base sm:text-lg my-4">
          {text}
        </p>
      )
    })
  }

  return <p className="text-slate-700 leading-relaxed my-4">{JSON.stringify(content)}</p>
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params
  const [blog, siteSettings, recentBlogs] = await Promise.all([
    getBlogBySlug(slug),
    getSiteSettings(),
    getBlogs(4),
  ])

  if (!blog) {
    notFound()
  }

  const phoneDisplay = (siteSettings as any)?.phone || '0312 514 06 19'
  const whatsappNumber = (siteSettings as any)?.whatsapp

  const formattedDate = blog.publishedAt
    ? new Date(blog.publishedAt).toLocaleDateString('tr-TR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      })
    : 'Güncel'

  const otherBlogs = (recentBlogs || []).filter((b: any) => b.slug !== slug).slice(0, 3)

  return (
    <article className="page-wrapper bg-slate-50">
      {/* Top Navigation Bar */}
      <div className="container-custom mb-6">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-slate-600 hover:text-sky-600 font-semibold text-sm transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Tüm Blog Yazılarına Dön</span>
        </Link>
      </div>

      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main Article Content */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-sm">
              {/* Category & Meta */}
              <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-slate-500 mb-4">
                {blog.category && (
                  <span className="bg-sky-100 text-sky-800 px-3 py-1 rounded-full font-bold">
                    {blog.category}
                  </span>
                )}
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  {formattedDate}
                </span>
                {blog.readTime && (
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    {blog.readTime} okuma süresi
                  </span>
                )}
              </div>

              {/* Main Title */}
              <h1 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight mb-6">
                {blog.title}
              </h1>

              {/* Summary Lead Box */}
              <div className="p-4 sm:p-6 bg-slate-50 rounded-2xl border-l-4 border-sky-500 text-slate-700 font-medium text-base sm:text-lg mb-8 leading-relaxed">
                {blog.summary}
              </div>

              {/* Main Hero Image */}
              {blog.image && (
                <div className="rounded-2xl overflow-hidden mb-8 border border-slate-200/60 shadow-sm max-h-[450px]">
                  <img
                    src={safeAssetUrl(blog.image, '/images/hero_bg.jpg')}
                    alt={blog.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              {/* Body Text / Rich Text */}
              <div className="prose prose-slate max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-p:text-slate-700 prose-a:text-sky-600">
                {renderRichText(blog.content)}
              </div>

              {/* Article Footer & Guarantee Note */}
              <div className="mt-12 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50 px-4 py-2 rounded-xl border border-emerald-200">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>İlhan Su Depoları — Orijinal Gıdaya Uygun İmalat Garantisi</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <aside className="lg:col-span-4 space-y-8">
            {/* Quick Contact & Quote Card */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-700">
              <h3 className="text-xl font-extrabold mb-2">Su Deposu Mu Lazım?</h3>
              <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                İhtiyacınıza uygun tonaj ve ölçülerde dikey ve yatay polietilen plastik depolarda en uygun fiyat teklifini alın.
              </p>
              <div className="space-y-3">
                <a
                  href={`tel:${phoneDisplay.replace(/\s+/g, '')}`}
                  className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-sky-600 hover:bg-sky-500 font-bold text-sm transition-all shadow-md"
                >
                  <Phone className="w-4 h-4" />
                  <span>{phoneDisplay} — Müşteri Temsilcisi</span>
                </a>
                <a
                  href={getWhatsAppUrl(whatsappNumber, 'Merhaba, blog yazınız üzerinden ulaşıyorum. Ürünler hakkında bilgi alabilir miyim?')}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 font-bold text-sm transition-all shadow-md"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Hızlı Fiyat Al</span>
                </a>
              </div>
            </div>

            {/* Other Blogs */}
            {otherBlogs.length > 0 && (
              <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 mb-4 pb-3 border-b border-slate-100">
                  Diğer Blog Yazıları
                </h3>
                <div className="space-y-4">
                  {otherBlogs.map((b: any) => (
                    <Link
                      key={b.id || b.slug}
                      href={`/blog/${b.slug}`}
                      className="block group"
                    >
                      <span className="text-xs font-semibold text-sky-600 block mb-1">
                        {b.category || 'Blog'}
                      </span>
                      <h4 className="text-sm font-bold text-slate-800 group-hover:text-sky-600 transition-colors line-clamp-2 leading-snug">
                        {b.title}
                      </h4>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </div>
    </article>
  )
}

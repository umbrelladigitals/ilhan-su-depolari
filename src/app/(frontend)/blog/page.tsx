import type { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react'
import { getBlogs, getSiteSettings } from '@/lib/payload'
import { safeAssetUrl } from '@/lib/safe-url'

export const revalidate = 0

export async function generateMetadata(): Promise<Metadata> {
  const siteSettings = await getSiteSettings()
  const siteName = (siteSettings as any)?.siteName || 'İlhan Su Depoları'

  return {
    title: `Blog & Bilgi Rehberi — ${siteName}`,
    description:
      'Polietilen plastik su depoları, hijyen bakımı ve su depolama teknolojileri hakkında uzman makaleleri ve rehberler.',
    openGraph: {
      title: `Blog & Bilgi Rehberi — ${siteName}`,
      description:
        'Polietilen plastik su depoları ve su depolama rehberleri.',
    },
  }
}

export default async function BlogListPage() {
  const blogs = await getBlogs(50)

  return (
    <div className="page-wrapper bg-slate-50">
      {/* Header / Hero Banner */}
      <div className="bg-slate-900 text-white py-10 md:py-14 border-b border-slate-800 rounded-3xl overflow-hidden container-custom mb-10">
        <div className="px-4 sm:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 text-xs font-bold uppercase tracking-wider mb-4 border border-sky-400/30">
              <BookOpen className="w-3.5 h-3.5" />
              <span>İlhan Su Depoları Blog</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              Blog & Teknik Rehberler
            </h1>
            <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
              Su depolama sistemleri, hijyenik tank bakımı, polietilen çözümler ve mühendislik tavsiyeleri hakkında merak ettiğiniz her şey.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-custom">
        {blogs.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 shadow-sm">
            <BookOpen className="w-12 h-12 text-slate-400 mx-auto mb-3" />
            <h3 className="text-xl font-bold text-slate-800">Henüz yayınlanmış bir blog bulunmuyor.</h3>
            <p className="text-slate-500 text-sm mt-1">Lütfen daha sonra tekrar kontrol edin.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog: any) => {
              const formattedDate = blog.publishedAt
                ? new Date(blog.publishedAt).toLocaleDateString('tr-TR', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })
                : 'Güncel'

              return (
                <article
                  key={blog.id || blog.slug}
                  className="flex flex-col bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 overflow-hidden group"
                >
                  {/* Image */}
                  <div className="relative aspect-[16/9] bg-slate-100 overflow-hidden">
                    <img
                      src={safeAssetUrl(blog.image, '/images/hero_bg.jpg')}
                      alt={blog.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {blog.category && (
                      <span className="absolute top-4 left-4 bg-sky-900/90 text-white text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm">
                        {blog.category}
                      </span>
                    )}
                  </div>

                  {/* Body */}
                  <div className="p-6 flex flex-col flex-grow justify-between">
                    <div>
                      {/* Meta */}
                      <div className="flex items-center gap-4 text-xs text-slate-500 font-medium mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-slate-400" />
                          {formattedDate}
                        </span>
                        {blog.readTime && (
                          <span className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5 text-slate-400" />
                            {blog.readTime}
                          </span>
                        )}
                      </div>

                      {/* Title */}
                      <h2 className="text-xl font-bold text-slate-900 group-hover:text-sky-600 transition-colors line-clamp-2 mb-3 leading-snug">
                        <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
                      </h2>

                      {/* Summary */}
                      <p className="text-slate-600 text-sm line-clamp-3 mb-6 leading-relaxed">
                        {blog.summary}
                      </p>
                    </div>

                    {/* Footer / Link */}
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                      <Link
                        href={`/blog/${blog.slug}`}
                        className="text-xs font-bold text-sky-600 hover:text-sky-700 flex items-center gap-1 group/btn"
                      >
                        <span>Yazıyı Oku</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}

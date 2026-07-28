'use client'

import React from 'react'
import Link from 'next/link'
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react'

interface BlogSectionProps {
  blogs?: any[]
}

export const BlogSection: React.FC<BlogSectionProps> = ({ blogs = [] }) => {
  if (!blogs || blogs.length === 0) {
    return null
  }

  return (
    <section className="py-16 md:py-24 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider mb-3">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Blog & Bilgi Rehberi</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Su Depolama & Sektörel Makaleler
            </h2>
            <p className="mt-2 text-slate-600 text-sm sm:text-base max-w-2xl">
              Su deposu seçimi, hijyen bakımı, paslanmaz çözümler ve mühendislik rehberlerimizle ilgili güncel yazılarımızı okuyun.
            </p>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sky-600 hover:text-sky-700 font-bold text-sm group transition-colors self-start md:self-auto"
          >
            <span>Tüm Makaleleri İncele</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.slice(0, 3).map((blog: any) => {
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
                {/* Image Container */}
                <div className="relative aspect-[16/9] bg-slate-100 overflow-hidden">
                  <img
                    src={blog.image || 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80'}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {blog.category && (
                    <span className="absolute top-4 left-4 bg-sky-900/90 text-white text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm">
                      {blog.category}
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    {/* Meta info */}
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
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-sky-600 transition-colors line-clamp-2 mb-2 leading-snug">
                      <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
                    </h3>

                    {/* Summary */}
                    <p className="text-slate-600 text-sm line-clamp-3 mb-6 leading-relaxed">
                      {blog.summary}
                    </p>
                  </div>

                  {/* Read More Link */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      href={`/blog/${blog.slug}`}
                      className="text-xs font-bold text-sky-600 hover:text-sky-700 flex items-center gap-1 group/btn"
                    >
                      <span>Devamını Oku</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

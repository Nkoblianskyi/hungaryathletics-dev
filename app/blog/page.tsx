import type { Metadata } from 'next'
import Link from 'next/link'
import { blogPosts } from '@/lib/blog-data'

export const metadata: Metadata = {
  title: 'Atlétikai Cikkek és Hírek | Hungary Athletics',
  description: 'A könnyűatlétika legfrissebb cikkei, technikai elemzések, edzéstippek és sport-tudományos írások a magyar atletika világából.',
}

const categories = ['Összes', 'Technika', 'Futás', 'Ugrás', 'Dobás']

export default function BlogPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 border-b border-hu-line">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-2 h-2 bg-hu-red" aria-hidden="true" />
            <p className="font-display font-600 text-xs tracking-[0.3em] uppercase text-muted-foreground">Atlétikai tartalmak</p>
          </div>
          <h1 className="font-display font-900 text-[clamp(3.5rem,10vw,9rem)] leading-[0.9] tracking-tight uppercase text-foreground mb-8">
            CIKKEK<br />
            <span className="text-hu-red">TUDÁSBÁZIS</span>
          </h1>
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6">
            <p className="font-sans text-lg text-muted-foreground leading-relaxed max-w-xl">
              Technikai elemzések, edzéstippek, biomechanikai magyarázatok és a könnyűatlétika minden aspektusát lefedő cikkgyűjtemény.
            </p>
            <p className="font-display font-700 text-xs tracking-widest uppercase text-muted-foreground shrink-0">
              {blogPosts.length} cikk
            </p>
          </div>
        </div>
      </section>

      {/* Articles grid - editorial layout */}
      <section className="py-20 lg:py-32" aria-label="Cikkek listája">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

          {/* Featured article - first post, large */}
          <Link
            href={`/blog/${blogPosts[0].slug}`}
            className="group block mb-0 border-b border-hu-line pb-0"
            aria-label={`Olvasd el: ${blogPosts[0].title}`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-hu-line hover:border-hu-red/40 transition-colors duration-500">
              <div className="relative overflow-hidden aspect-[4/3] lg:aspect-auto">
                <img
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                <div className="absolute top-6 left-6">
                  <span className="font-display font-700 text-xs tracking-widest uppercase px-3 py-1.5 bg-hu-red text-foreground">
                    {blogPosts[0].category}
                  </span>
                </div>
              </div>
              <div className="p-10 lg:p-14 flex flex-col justify-between">
                <div>
                  <p className="font-display font-600 text-xs tracking-widest uppercase text-hu-red mb-6">Kiemelt cikk</p>
                  <h2 className="font-display font-900 text-[clamp(2rem,4vw,3.5rem)] leading-[0.95] tracking-tight uppercase text-foreground mb-6 group-hover:text-hu-red transition-colors duration-300">
                    {blogPosts[0].title}
                  </h2>
                  <p className="font-sans text-base text-muted-foreground leading-relaxed">
                    {blogPosts[0].excerpt}
                  </p>
                </div>
                <div className="flex items-center gap-4 pt-8 border-t border-hu-line mt-10">
                  <span className="font-display font-700 text-xs tracking-widest uppercase text-foreground">Olvasd el</span>
                  <div className="flex-1 h-px bg-hu-line group-hover:bg-hu-red transition-colors duration-300" aria-hidden="true" />
                  <span className="w-3 h-3 border-t border-r border-foreground rotate-45 group-hover:border-hu-red transition-colors duration-300" aria-hidden="true" />
                </div>
              </div>
            </div>
          </Link>

          {/* Remaining articles - editorial list */}
          <div className="mt-0">
            {blogPosts.slice(1).map((post, idx) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group grid grid-cols-1 sm:grid-cols-[140px_1fr] lg:grid-cols-[200px_1fr_auto] gap-0 border-b border-hu-line py-0 hover:bg-card/50 transition-colors duration-200"
                aria-label={`Olvasd el: ${post.title}`}
              >
                {/* Image */}
                <div className="relative overflow-hidden h-32 sm:h-auto">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6 lg:p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-display font-700 text-xs tracking-widest uppercase text-hu-red">{post.category}</span>
                  </div>
                  <h3 className="font-display font-800 text-xl lg:text-2xl uppercase tracking-tight text-foreground mb-3 group-hover:text-hu-red transition-colors duration-200">
                    {post.title}
                  </h3>
                  <p className="font-sans text-sm text-muted-foreground leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>
                </div>

                {/* Arrow */}
                <div className="hidden lg:flex items-center justify-center px-8 border-l border-hu-line">
                  <span
                    className="w-4 h-4 border-t-2 border-r-2 border-muted-foreground rotate-45 group-hover:border-hu-red transition-colors duration-200"
                    aria-hidden="true"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

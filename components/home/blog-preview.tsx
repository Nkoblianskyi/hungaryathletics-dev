import Link from 'next/link'
import { blogPosts } from '@/lib/blog-data'

export function BlogPreview() {
  const featured = blogPosts.slice(0, 4)

  return (
    <section className="py-24 lg:py-36 bg-background border-t border-hu-line" aria-labelledby="blog-heading">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 mb-16 border-b border-hu-line pb-8">
          <div>
            <p className="font-display font-600 text-xs tracking-[0.3em] uppercase text-hu-red mb-3">Cikkek</p>
            <h2
              id="blog-heading"
              className="font-display font-900 text-[clamp(2.5rem,6vw,5rem)] leading-[0.9] tracking-tight uppercase text-foreground"
            >
              BLOG<br />
              <span className="text-foreground/30">ATLÉTIKA</span>
            </h2>
          </div>
          <Link
            href="/blog"
            className="font-display font-700 text-xs tracking-widest uppercase px-6 py-3 border border-hu-line text-muted-foreground hover:text-foreground hover:border-foreground transition-colors group flex items-center gap-3"
          >
            Összes cikk
            <span className="w-6 h-px bg-current inline-block transition-all group-hover:w-10" aria-hidden="true" />
          </Link>
        </div>

        {/* Featured layout: 1 big + 3 small */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-hu-line">
          {/* Big feature */}
          <Link
            href={`/blog/${featured[0].slug}`}
            className="relative group overflow-hidden border-b lg:border-b-0 border-r-0 lg:border-r border-hu-line block"
          >
            <div className="h-80 lg:h-full min-h-[400px] relative">
              <img
                src={featured[0].image}
                alt={featured[0].title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="font-display font-700 text-xs tracking-widest uppercase px-2 py-1 bg-hu-red text-foreground mb-4 inline-block">
                  {featured[0].category}
                </span>
                <h3 className="font-display font-800 text-2xl lg:text-3xl uppercase tracking-tight text-foreground leading-tight mt-3 group-hover:text-hu-red transition-colors">
                  {featured[0].title}
                </h3>
                <p className="font-sans text-sm text-muted-foreground mt-2 leading-relaxed line-clamp-2">
                  {featured[0].excerpt}
                </p>
              </div>
            </div>
          </Link>

          {/* Three smaller posts */}
          <div className="flex flex-col">
            {featured.slice(1, 4).map((post, idx) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className={`flex gap-5 p-6 group hover:bg-card transition-colors ${idx < 2 ? 'border-b border-hu-line' : ''}`}
              >
                <div className="w-28 h-20 shrink-0 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="font-display font-600 text-xs tracking-widest uppercase text-hu-red">
                    {post.category}
                  </span>
                  <h3 className="font-display font-700 text-base uppercase tracking-wide text-foreground mt-1.5 leading-tight group-hover:text-hu-red transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="font-sans text-xs text-muted-foreground mt-1 line-clamp-2 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

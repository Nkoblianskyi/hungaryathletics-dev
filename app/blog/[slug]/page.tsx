import type { Metadata } from 'next'
import { notFound, redirect } from 'next/navigation'
import Link from 'next/link'
import { blogPosts } from '@/lib/blog-data'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

function normalizeSlug(input: unknown) {
  // Normalize typical “looks the same but isn't” and strip accents for robust routing.
  if (typeof input !== 'string') return ''
  return input
    .replace(/[\u0430]/g, 'a') // Cyrillic 'а'
    .replace(/[\u0441]/g, 'c') // Cyrillic 'с'
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '') // diacritics
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug) ??
    blogPosts.find((p) => normalizeSlug(p.slug) === normalizeSlug(slug))
  if (!post) return {}
  return {
    title: `${post.title} | Hungary Athletics`,
    description: post.excerpt,
  }
}

function renderContent(content: string) {
  const paragraphs = content.split('\n\n')
  return paragraphs.map((para, i) => {
    if (para.startsWith('**') && para.endsWith('**')) {
      return (
        <h3
          key={i}
          className="font-display font-800 text-2xl uppercase tracking-tight text-foreground mt-12 mb-4"
        >
          {para.replace(/\*\*/g, '')}
        </h3>
      )
    }
    // Handle bold headings inside a paragraph
    if (para.startsWith('**')) {
      const parts = para.split('**')
      return (
        <div key={i}>
          {parts.map((part, j) => {
            if (j % 2 === 1) {
              // This is inside ** **
              return (
                <h3
                  key={j}
                  className="font-display font-800 text-2xl uppercase tracking-tight text-foreground mt-12 mb-4"
                >
                  {part}
                </h3>
              )
            }
            if (!part.trim()) return null
            return (
              <p key={j} className="font-sans text-base text-muted-foreground leading-relaxed mb-4">
                {part}
              </p>
            )
          })}
        </div>
      )
    }
    return (
      <p key={i} className="font-sans text-base text-muted-foreground leading-relaxed mb-6">
        {para}
      </p>
    )
  })
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params
  const post =
    blogPosts.find((p) => p.slug === slug) ??
    blogPosts.find((p) => normalizeSlug(p.slug) === normalizeSlug(slug))

  if (!post) notFound()

  // If user hits an old/non-canonical slug, redirect to the canonical one.
  if (post.slug !== slug) {
    redirect(`/blog/${post.slug}`)
  }

  const currentIndex = blogPosts.findIndex((p) => p.slug === post.slug)
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null

  return (
    <div className="bg-background min-h-screen">
      {/* Article hero */}
      <section className="relative pt-28 lg:pt-36 border-b border-hu-line overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-3 mb-10 pt-6" aria-label="Navigációs útvonal">
            <Link
              href="/blog"
              className="font-display font-600 text-xs tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors"
            >
              Cikkek
            </Link>
            <span className="w-4 h-px bg-hu-line" aria-hidden="true" />
            <span className="font-display font-600 text-xs tracking-widest uppercase text-hu-red">
              {post.category}
            </span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-0 items-end">
            <div className="pb-12 lg:pr-16">
              <span className="inline-block font-display font-700 text-xs tracking-widest uppercase px-3 py-1.5 bg-hu-red text-foreground mb-8">
                {post.category}
              </span>
              <h1 className="font-display font-900 text-[clamp(2.5rem,7vw,6rem)] leading-[0.9] tracking-tight uppercase text-foreground mb-8">
                {post.title}
              </h1>
              <p className="font-sans text-lg text-muted-foreground leading-relaxed max-w-2xl">
                {post.excerpt}
              </p>
            </div>

            {/* Hero image */}
            <div className="relative h-72 lg:h-auto lg:self-stretch overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent lg:bg-gradient-to-l" />
            </div>
          </div>
        </div>
      </section>

      {/* Article body */}
      <section className="py-16 lg:py-24" aria-label="Cikk tartalma">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-16 lg:gap-24">
            {/* Main content */}
            <article>
              <div className="prose-custom">
                {renderContent(post.content)}
              </div>

              {/* Navigation between articles */}
              <div className="mt-16 pt-10 border-t border-hu-line grid grid-cols-1 sm:grid-cols-2 gap-0">
                {prevPost ? (
                  <Link
                    href={`/blog/${prevPost.slug}`}
                    className="group p-6 border border-hu-line hover:border-hu-red/40 transition-colors duration-300"
                  >
                    <p className="font-display font-600 text-xs tracking-widest uppercase text-muted-foreground mb-3">
                      Előző cikk
                    </p>
                    <h4 className="font-display font-800 text-base uppercase tracking-tight text-foreground group-hover:text-hu-red transition-colors">
                      {prevPost.title}
                    </h4>
                  </Link>
                ) : <div />}
                {nextPost ? (
                  <Link
                    href={`/blog/${nextPost.slug}`}
                    className="group p-6 border border-hu-line hover:border-hu-red/40 transition-colors duration-300 sm:border-l-0"
                  >
                    <p className="font-display font-600 text-xs tracking-widest uppercase text-muted-foreground mb-3 sm:text-right">
                      Következő cikk
                    </p>
                    <h4 className="font-display font-800 text-base uppercase tracking-tight text-foreground group-hover:text-hu-red transition-colors sm:text-right">
                      {nextPost.title}
                    </h4>
                  </Link>
                ) : <div />}
              </div>
            </article>

            {/* Sidebar: related */}
            <aside aria-label="Kapcsolódó cikkek">
              <div className="sticky top-24">
                <p className="font-display font-700 text-xs tracking-widest uppercase text-muted-foreground mb-6 border-b border-hu-line pb-4">
                  További cikkek
                </p>
                <div className="space-y-0">
                  {blogPosts
                    .filter((p) => p.slug !== post.slug)
                    .slice(0, 5)
                    .map((related) => (
                      <Link
                        key={related.slug}
                        href={`/blog/${related.slug}`}
                        className="group flex gap-4 py-5 border-b border-hu-line last:border-b-0 hover:opacity-80 transition-opacity"
                      >
                        <div className="relative w-20 h-16 overflow-hidden shrink-0">
                          <img
                            src={related.image}
                            alt={related.title}
                            className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        <div className="flex-1">
                          <span className="font-display font-700 text-xs tracking-wide uppercase text-hu-red block mb-1">
                            {related.category}
                          </span>
                          <h4 className="font-sans font-600 text-sm text-foreground leading-snug group-hover:text-hu-red transition-colors">
                            {related.title}
                          </h4>
                        </div>
                      </Link>
                    ))}
                </div>
                <Link
                  href="/blog"
                  className="mt-8 flex items-center gap-3 font-display font-700 text-xs tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors group"
                >
                  Minden cikk
                  <span className="w-6 h-px bg-current group-hover:w-10 transition-all" aria-hidden="true" />
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  )
}

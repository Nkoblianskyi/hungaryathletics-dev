import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

function normalizeSlug(input: string) {
  return input
    .replace(/[\u0430]/g, 'a') // Cyrillic 'а'
    .replace(/[\u0441]/g, 'c') // Cyrillic 'с'
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '') // diacritics
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  if (!pathname.startsWith('/blog/')) return NextResponse.next()

  const slug = pathname.slice('/blog/'.length).split('/')[0]
  if (!slug) return NextResponse.next()

  const normalized = normalizeSlug(slug)
  if (normalized !== slug) {
    const url = req.nextUrl.clone()
    url.pathname = `/blog/${normalized}`
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/blog/:path*'],
}


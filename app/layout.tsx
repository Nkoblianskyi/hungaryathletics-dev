import type { Metadata } from 'next'
import { Barlow, Barlow_Condensed } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { CookieBanner } from '@/components/cookie-banner'

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-barlow',
})

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-barlow-condensed',
})

export const metadata: Metadata = {
  title: 'Hungary Athletics | Magyar Atlétika',
  description: 'Magyarország vezető atlétikai forrása. Technika, edzéstervek, történelem, szabályok és legfrissebb hírek a könnyűatlétika világából.',
  keywords: 'atlétika, könnyűatlétika, Magyarország, futás, ugrás, dobás, edzés',
  openGraph: {
    title: 'Hungary Athletics | Magyar Atlétika',
    description: 'Magyarország vezető atlétikai forrása.',
    url: 'https://hungaryathletics.com',
    siteName: 'Hungary Athletics',
    locale: 'hu_HU',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://hungaryathletics.com',
  },
}

export const viewport = {
  themeColor: '#0e0e0e',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="hu" className={`${barlow.variable} ${barlowCondensed.variable} bg-background`}>
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  )
}

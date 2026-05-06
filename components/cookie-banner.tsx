'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('ha-cookie-consent')
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1200)
      return () => clearTimeout(timer)
    }
  }, [])

  const accept = () => {
    localStorage.setItem('ha-cookie-consent', 'accepted')
    setVisible(false)
  }

  const decline = () => {
    localStorage.setItem('ha-cookie-consent', 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-label="Süti hozzájárulás"
      className="fixed bottom-0 left-0 right-0 z-50 bg-card border-t border-hu-line"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="font-sans text-sm text-muted-foreground leading-relaxed max-w-2xl">
          Ez a weboldal sütiket használ a felhasználói élmény javítása érdekében. A weboldal böngészésével elfogadja a{' '}
          <Link href="/suti-szabalyzat" className="text-foreground underline underline-offset-2 hover:text-hu-red transition-colors">
            süti szabályzatot
          </Link>{' '}
          és az{' '}
          <Link href="/adatvedelmi-szabalyzat" className="text-foreground underline underline-offset-2 hover:text-hu-red transition-colors">
            adatvédelmi szabályzatot
          </Link>
          .
        </p>
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={decline}
            className="font-display font-600 text-xs tracking-widest uppercase px-5 py-2.5 border border-hu-line text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
          >
            Elutasít
          </button>
          <button
            onClick={accept}
            className="font-display font-600 text-xs tracking-widest uppercase px-5 py-2.5 bg-hu-red text-foreground hover:bg-foreground hover:text-background transition-colors"
          >
            Elfogad
          </button>
        </div>
      </div>
    </div>
  )
}

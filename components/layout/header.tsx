'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

const navLinks = [
  { href: '/technika', label: 'Technika' },
  { href: '/tortenet', label: 'Történelem' },
  { href: '/szabalyok', label: 'Szabályok' },
  { href: '/blog', label: 'Cikkek' },
  { href: '/rolunk', label: 'Rólunk' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-background/95 backdrop-blur-sm border-b border-hu-line' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
        {/* Wordmark */}
        <Link href="/" className="flex items-center gap-3 group" aria-label="Hungary Athletics főoldal">
          <div className="flex items-center gap-0">
            <span className="font-display font-900 text-xl tracking-tighter text-foreground uppercase leading-none">
              HUNGARY
            </span>
            <span className="w-px h-5 bg-hu-red mx-2" aria-hidden="true" />
            <span className="font-display font-900 text-xl tracking-tighter text-hu-red uppercase leading-none">
              ATHLETICS
            </span>
          </div>
          <div className="flex flex-col gap-[3px] ml-1" aria-hidden="true">
            <div className="w-4 h-[3px] bg-hu-red" />
            <div className="w-4 h-[3px] bg-foreground" />
            <div className="w-4 h-[3px] bg-hu-green" />
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8" aria-label="Főnavigáció">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-sans text-sm font-500 tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors duration-200 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-hu-red group-hover:w-full transition-all duration-300" aria-hidden="true" />
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden flex flex-col gap-[5px] p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Menü bezárása' : 'Menü megnyitása'}
          aria-expanded={menuOpen}
        >
          <span className={`block w-6 h-[2px] bg-foreground transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <span className={`block w-6 h-[2px] bg-foreground transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-[2px] bg-foreground transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-background border-t border-hu-line">
          <nav className="max-w-[1400px] mx-auto px-6 py-8 flex flex-col gap-6" aria-label="Mobil navigáció">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-display text-3xl font-700 tracking-tight uppercase text-foreground hover:text-hu-red transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}

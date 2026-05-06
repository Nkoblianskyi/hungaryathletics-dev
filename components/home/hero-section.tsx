'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'

export function HeroSection() {
  const headingRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const el = headingRef.current
    if (!el) return
    el.style.opacity = '0'
    el.style.transform = 'translateY(32px)'
    requestAnimationFrame(() => {
      el.style.transition = 'opacity 0.9s ease, transform 0.9s ease'
      el.style.opacity = '1'
      el.style.transform = 'translateY(0)'
    })
  }, [])

  return (
    <section className="relative overflow-hidden" style={{ minHeight: '80vh' }} aria-label="Főoldal hős szekció">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-athletics.jpg"
          alt="Magyar atlétika - futó versenyző"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/75 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
      </div>

      {/* Track lines decoration */}
      <div className="absolute bottom-0 left-0 right-0 z-10 overflow-hidden" aria-hidden="true">
        {[0, 1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="h-px bg-foreground/10"
            style={{ marginBottom: i === 4 ? 0 : '28px' }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col justify-end pb-14 pt-32 min-h-[80vh]">
        <div className="max-w-4xl">
          {/* Kicker */}
          <div className="flex items-center gap-4 mb-8">
            <div className="flex gap-[2px]" aria-hidden="true">
              <div className="w-3 h-3 bg-hu-red" />
              <div className="w-3 h-3 bg-foreground" />
              <div className="w-3 h-3 bg-hu-green" />
            </div>
            <p className="font-display font-600 text-xs tracking-[0.3em] uppercase text-muted-foreground">
              Magyar Atlétikai Portál
            </p>
          </div>

          {/* Main heading */}
          <h1
            ref={headingRef}
            className="font-display font-900 text-[clamp(3rem,8vw,8rem)] leading-[0.9] tracking-tight uppercase text-foreground mb-6"
          >
            <span className="block">KÖNNYŰ</span>
            <span className="block text-hu-red">ATLÉTIKA</span>
            <span className="block text-foreground/40">HUNGÁRIA</span>
          </h1>

          {/* Subtext */}
          <div className="flex flex-col sm:flex-row items-start sm:items-end gap-8 mt-6">
            <p className="font-sans text-base font-400 text-muted-foreground leading-relaxed max-w-sm">
              Magyarország átfogó atlétikai információs portálja. Technika, edzéstervek, történelem és az összes atlétikai diszciplína részletes bemutatása.
            </p>
            <div className="flex gap-4">
              <Link
                href="/technika"
                className="font-display font-700 text-xs tracking-widest uppercase px-7 py-3.5 bg-hu-red text-foreground hover:bg-foreground hover:text-background transition-colors duration-300"
              >
                Technika
              </Link>
              <Link
                href="/blog"
                className="font-display font-700 text-xs tracking-widest uppercase px-7 py-3.5 border border-foreground/30 text-foreground hover:border-foreground transition-colors duration-300"
              >
                Cikkek
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom stat strip */}
        <div className="mt-10 pt-6 border-t border-hu-line grid grid-cols-2 sm:grid-cols-4 gap-6">
          {[
            { num: '47', label: 'Atlétikai diszciplína' },
            { num: '1896', label: 'Olimpiai kezdetek' },
            { num: '100+', label: 'Év magyar atlétika' },
            { num: '12', label: 'Alap technika' },
          ].map((stat) => (
            <div key={stat.num}>
              <p className="font-display font-900 text-4xl text-hu-red leading-none">{stat.num}</p>
              <p className="font-sans text-xs text-muted-foreground mt-1 tracking-wide uppercase">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

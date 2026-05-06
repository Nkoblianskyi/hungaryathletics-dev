import Link from 'next/link'

const footerLinks = {
  atlétika: [
    { href: '/technika', label: 'Technika és edzés' },
    { href: '/tortenet', label: 'Történelem' },
    { href: '/szabalyok', label: 'Szabályok' },
    { href: '/blog', label: 'Cikkek' },
  ],
  információ: [
    { href: '/rolunk', label: 'Rólunk' },
    { href: '/adatvedelmi-szabalyzat', label: 'Adatvédelmi szabályzat' },
    { href: '/suti-szabalyzat', label: 'Süti szabályzat' },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-hu-line bg-background">
      {/* Top marquee strip */}
      <div className="overflow-hidden border-b border-hu-line py-3 bg-hu-red">
        <div className="flex animate-marquee whitespace-nowrap">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="font-display font-700 text-sm tracking-widest uppercase text-foreground mx-8">
              HUNGARY ATHLETICS · KÖNNYŰATLÉTIKA · SPRINT · UGRÁS · DOBÁS · FUTÁS ·
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 pt-16 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr_1fr] gap-12 mb-16">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-6" aria-label="Hungary Athletics">
              <span className="font-display font-900 text-4xl tracking-tighter text-foreground uppercase leading-none">HUNGARY</span>
              <span className="w-px h-8 bg-hu-red" aria-hidden="true" />
              <span className="font-display font-900 text-4xl tracking-tighter text-hu-red uppercase leading-none">ATHLETICS</span>
            </Link>
            <p className="font-sans text-sm text-muted-foreground leading-relaxed max-w-xs">
              Magyarország átfogó atlétikai információs portálja. Technika, történelem, szabályok és edzéstervek könnyűatlétika iránt érdeklődőknek.
            </p>
            <div className="mt-6">
              <a
                href="mailto:info@hungaryathletics.com"
                className="font-sans text-sm text-hu-red hover:text-foreground transition-colors tracking-wide"
              >
                info@hungaryathletics.com
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <p className="font-display font-700 text-xs tracking-widest uppercase text-muted-foreground mb-4">
                {category}
              </p>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="font-sans text-sm text-foreground/70 hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-hu-line pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="font-sans text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Hungary Athletics. Minden jog fenntartva.
          </p>
          <div className="flex items-center gap-2" aria-hidden="true">
            <div className="w-8 h-[3px] bg-hu-red" />
            <div className="w-8 h-[3px] bg-foreground" />
            <div className="w-8 h-[3px] bg-hu-green" />
          </div>
        </div>
      </div>
    </footer>
  )
}

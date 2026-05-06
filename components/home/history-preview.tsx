import Link from 'next/link'

export function HistoryPreview() {
  return (
    <section className="bg-card border-t border-hu-line overflow-hidden" aria-labelledby="history-heading">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
          {/* Image side */}
          <div className="relative h-80 lg:h-auto order-last lg:order-first">
            <img
              src="/images/history.jpg"
              alt="A magyar atlétika történelme"
              className="w-full h-full object-cover object-center grayscale"
            />
            <div className="absolute inset-0 bg-background/30" />
            <div className="absolute top-6 left-6">
              <div className="bg-hu-red px-3 py-1.5">
                <p className="font-display font-700 text-xs tracking-widest uppercase text-foreground">
                  Archív
                </p>
              </div>
            </div>
          </div>

          {/* Text side */}
          <div className="flex flex-col justify-center px-0 lg:px-16 py-16 lg:py-24">
            <p className="font-display font-600 text-xs tracking-[0.3em] uppercase text-hu-red mb-4">Múlt</p>
            <h2
              id="history-heading"
              className="font-display font-900 text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.95] tracking-tight uppercase text-foreground mb-6"
            >
              TÖRTÉNELEM<br />
              <span className="text-foreground/30">ÖRÖKSÉGE</span>
            </h2>

            <div className="w-16 h-px bg-hu-red mb-8" aria-hidden="true" />

            <p className="font-sans text-base text-muted-foreground leading-relaxed mb-6">
              Magyarország atlétikai öröksége több mint egy évszázadra nyúlik vissza. Az 1896-os athéni olimpia óta a magyar atléták a könnyűatlétika terén kiemelkedő eredményeket értek el, megalapozva egy erős nemzeti tradíciót.
            </p>
            <p className="font-sans text-base text-muted-foreground leading-relaxed mb-10">
              A két világháború között és azt követően a magyar atlétikai mozgalom folyamatosan fejlődött, számos kiemelkedő eredménnyel gazdagítva a sport történetét.
            </p>

            {/* Timeline preview */}
            <div className="flex gap-8 mb-10 border-l-2 border-hu-red pl-6">
              {[
                { year: '1896', text: 'Első olimpiai részvétel' },
                { year: '1952', text: 'Kiemelkedő olimpiai eredmények' },
                { year: '1976', text: 'Újabb aranyérmek' },
              ].map((item) => (
                <div key={item.year} className="flex-1">
                  <p className="font-display font-700 text-lg text-hu-red">{item.year}</p>
                  <p className="font-sans text-xs text-muted-foreground mt-1 leading-snug">{item.text}</p>
                </div>
              ))}
            </div>

            <Link
              href="/tortenet"
              className="font-display font-700 text-xs tracking-widest uppercase px-7 py-3.5 bg-foreground text-background hover:bg-hu-red hover:text-foreground transition-colors self-start"
            >
              Teljes történelem
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

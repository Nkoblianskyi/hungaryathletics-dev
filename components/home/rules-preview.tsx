import Link from 'next/link'

const rules = [
  { num: '01', title: 'Rajtszabályok', desc: 'Hamis rajtok, rajtpozíció és a rajtblokk helyes használata.' },
  { num: '02', title: 'Pályaszabályok', desc: 'Sávok, kihúzás, átlépés és az egyéb pályán érvényes előírások.' },
  { num: '03', title: 'Dobószabályok', desc: 'A dobókör, az érvényes dobások és a mérés szabályai.' },
  { num: '04', title: 'Ugrószabályok', desc: 'Érvényes és érvénytelen ugrások, a deszka és a lécmagasság.' },
]

export function RulesPreview() {
  return (
    <section className="py-24 lg:py-36 bg-card border-t border-hu-line" aria-labelledby="rules-heading">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header bar */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 mb-16">
          <div>
            <p className="font-display font-600 text-xs tracking-[0.3em] uppercase text-hu-red mb-3">Versenyszabályok</p>
            <h2
              id="rules-heading"
              className="font-display font-900 text-[clamp(2.5rem,6vw,5rem)] leading-[0.9] tracking-tight uppercase text-foreground"
            >
              SZABÁLYOK<br />
              <span className="text-foreground/30">DISZCIPLÍNÁK</span>
            </h2>
          </div>
          <Link
            href="/szabalyok"
            className="font-display font-700 text-xs tracking-widest uppercase px-7 py-3.5 bg-hu-red text-foreground hover:bg-foreground hover:text-background transition-colors"
          >
            Teljes szabályzat
          </Link>
        </div>

        {/* Horizontal scroll rules */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-hu-line">
          {rules.map((rule, idx) => (
            <div
              key={rule.num}
              className={`p-8 ${idx < rules.length - 1 ? 'border-b lg:border-b-0 sm:border-b border-r-0 sm:border-r lg:border-r border-hu-line' : ''}`}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-8 h-8 flex items-center justify-center border border-hu-red">
                  <span className="font-display font-700 text-xs text-hu-red">{rule.num}</span>
                </div>
              </div>
              <h3 className="font-display font-700 text-lg uppercase tracking-wide text-foreground mb-3">
                {rule.title}
              </h3>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                {rule.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom callout */}
        <div className="mt-8 p-8 lg:p-12 border border-hu-line flex flex-col lg:flex-row items-start lg:items-center gap-8 justify-between">
          <div>
            <p className="font-display font-700 text-2xl uppercase tracking-tight text-foreground mb-2">
              Teljes szabályzat és diszciplínák részletesen
            </p>
            <p className="font-sans text-sm text-muted-foreground">
              Az összes versenyszám részletes szabályai, a bírói döntések és a versenyrendtartás.
            </p>
          </div>
          <Link
            href="/szabalyok"
            className="shrink-0 font-display font-700 text-xs tracking-widest uppercase px-7 py-3.5 border border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors"
          >
            Részletek
          </Link>
        </div>
      </div>
    </section>
  )
}

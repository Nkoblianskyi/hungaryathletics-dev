const facts = [
  {
    fact: 'A 100 méteres sprint rekordideje kevesebb mint 1 másodperccel csökkent az elmúlt 100 évben, mégis óriási technikai fejlődést tükröz.',
    label: 'Sprint',
  },
  {
    fact: 'A gerelyhajítás szabályait 1986-ban megváltoztatták, mert a gerely veszélyesen közel landolt a pályán futókhoz - a változás 10 métert vett le az átlagos dobástávolságból.',
    label: 'Dobás',
  },
  {
    fact: 'A magas ugrásban a "Fosbury-flop" technikát az 1968-as olimpián mutatták be először, és azóta mindenki ezt az ugrástechnikát alkalmazza.',
    label: 'Ugrás',
  },
  {
    fact: 'A gyaloglásban mindkét láb nem lehet egyszerre a levegőben - ezt elektronikus érzékelőkkel ellenőrzik a versenyek során.',
    label: 'Gyaloglás',
  },
  {
    fact: 'A rúdugrásban az atléták testtömegük háromszoros-négyszeresének megfelelő erőt fejtenek ki a rúdra az ugrás csúcspontján.',
    label: 'Rúdugrás',
  },
  {
    fact: 'Egy tízpróba versenyző három nap alatt tíz különböző versenyszámot teljesít, az összes atlétika tudást egyetlen komplex versenyré sűrítve.',
    label: 'Többpróba',
  },
]

export function FactsSection() {
  return (
    <section className="py-24 lg:py-36 bg-card border-t border-hu-line" aria-labelledby="facts-heading">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-start gap-16">
          {/* Left */}
          <div className="lg:w-80 shrink-0 lg:sticky lg:top-24">
            <p className="font-display font-600 text-xs tracking-[0.3em] uppercase text-hu-red mb-3">Érdekességek</p>
            <h2
              id="facts-heading"
              className="font-display font-900 text-[clamp(2.5rem,5vw,4rem)] leading-[0.9] tracking-tight uppercase text-foreground"
            >
              TUDTAD<br />
              <span className="text-foreground/30">HOGY?</span>
            </h2>
            <div className="w-16 h-px bg-hu-red mt-8" aria-hidden="true" />
            <p className="font-sans text-sm text-muted-foreground mt-4 leading-relaxed">
              A könnyűatlétika világa tele van meglepő tényekkel és kevéssé ismert érdekességekkel.
            </p>
          </div>

          {/* Facts list */}
          <div className="flex-1">
            {facts.map((item, idx) => (
              <div
                key={idx}
                className="flex gap-6 py-8 border-b border-hu-line last:border-b-0 group"
              >
                <div className="shrink-0 pt-1">
                  <span className="font-display font-700 text-xs tracking-widest uppercase px-2 py-1 border border-hu-red/30 text-hu-red group-hover:bg-hu-red group-hover:text-foreground transition-colors">
                    {item.label}
                  </span>
                </div>
                <p className="font-sans text-base text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                  {item.fact}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

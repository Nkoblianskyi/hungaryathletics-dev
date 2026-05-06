const disciplines = [
  {
    category: 'FUTÁS',
    items: ['Sprint (100m, 200m)', 'Középtávfutás (400m-1500m)', 'Hosszútávfutás (3000m+)', 'Gátfutás', 'Váltófutás', 'Akadályfutás'],
    color: 'hu-red',
  },
  {
    category: 'UGRÁS',
    items: ['Magasugrás', 'Rúdugrás', 'Hosszúugrás', 'Hármasugrás'],
    color: 'foreground',
  },
  {
    category: 'DOBÁS',
    items: ['Súlylökés', 'Diszkoszvetés', 'Gerelyhajítás', 'Kalapácsvetés'],
    color: 'hu-green',
  },
  {
    category: 'TÖBBPRÓBA',
    items: ['Tízpróba (férfi)', 'Hétpróba (nő)', 'Ötpróba (terem)'],
    color: 'hu-red',
  },
  {
    category: 'GYALOGLÁS',
    items: ['10 km séta', '20 km gyaloglás', '35 km gyaloglás', '50 km gyaloglás'],
    color: 'foreground',
  },
  {
    category: 'TEREM',
    items: ['60m sprint', 'Terem magasugrás', 'Terem rúdugrás', 'Terem hármasugrás'],
    color: 'hu-green',
  },
]

export function DisciplinesSection() {
  return (
    <section className="py-24 lg:py-36 bg-background border-t border-hu-line" aria-labelledby="disciplines-heading">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Heading */}
        <div className="mb-16">
          <p className="font-display font-600 text-xs tracking-[0.3em] uppercase text-hu-red mb-3">Diszciplínák</p>
          <h2
            id="disciplines-heading"
            className="font-display font-900 text-[clamp(2.5rem,7vw,6rem)] leading-[0.9] tracking-tight uppercase"
          >
            <span className="text-foreground">ATLÉTIKAI</span>
            <br />
            <span className="text-foreground/20">VERSENYSZÁMOK</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {disciplines.map((disc, idx) => (
            <div
              key={disc.category}
              className={`p-8 lg:p-10 border-hu-line ${
                idx % 3 !== 2 ? 'lg:border-r' : ''
              } ${idx < 3 ? 'border-b' : ''} ${
                idx % 2 === 0 && idx % 3 !== 2 ? 'sm:border-r lg:border-r-0' : ''
              } ${idx % 2 === 0 && idx < disciplines.length - 1 ? 'sm:border-r' : ''} border-b`}
            >
              <div className="flex items-start justify-between mb-6">
                <h3 className={`font-display font-900 text-3xl tracking-tight uppercase text-${disc.color}`}>
                  {disc.category}
                </h3>
                <span className="font-display font-700 text-4xl text-foreground/10 leading-none">
                  {String(idx + 1).padStart(2, '0')}
                </span>
              </div>
              <ul className="space-y-2">
                {disc.items.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className={`w-1 h-1 bg-${disc.color} shrink-0`} aria-hidden="true" />
                    <span className="font-sans text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Wide image */}
        <div className="mt-0 relative h-56 overflow-hidden border-t border-hu-line">
          <img
            src="/images/disciplines.jpg"
            alt="Különböző atlétikai diszciplínák"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-background/60" />
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="font-display font-900 text-[clamp(1.5rem,4vw,3rem)] tracking-[0.2em] uppercase text-foreground/40">
              47 HIVATALOS VERSENYSZÁM
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

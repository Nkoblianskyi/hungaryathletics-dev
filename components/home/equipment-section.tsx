const equipment = [
  {
    name: 'Futócipő',
    desc: 'A sprinttüskék, a középtávfutók cipői és a maratoni lábbelik mind eltérő szerkezettel segítik a teljesítményt.',
    category: 'Lábbelik',
  },
  {
    name: 'Dobóeszközök',
    desc: 'A súlygolyó, a diszkosz, a gerely és a kalapács pontos súlyát és méretét szabvány határozza meg. A felnőtt férfi kalapács tömege 7,26 kg.',
    category: 'Dobás',
  },
  {
    name: 'Ugrórúd',
    desc: 'A modern ugrórúdak üveg- vagy szénszálból készülnek. Rugalmassága és hossza az atléta testtömegéhez és technikai szintjéhez igazodik.',
    category: 'Ugrás',
  },
  {
    name: 'Rajtblokkja',
    desc: 'A rajtblokk minden futóhoz egyénileg beállítható. A pedálok szöge és pozíciója alapvetően meghatározza a rajtgyorsulást.',
    category: 'Sprint',
  },
  {
    name: 'Gát',
    desc: 'A gátak magassága és távolsága a versenyszám és a korcsoport alapján változik. A felső résszel való érintkezés nem diszkvalifikál, de lelassítja a futót.',
    category: 'Gátfutás',
  },
  {
    name: 'Mérőberendezések',
    desc: 'A modern atlétikai versenyeken milliméteres és ezredmásodperces pontosságú elektromos mérőrendszereket alkalmaznak.',
    category: 'Technika',
  },
]

export function EquipmentSection() {
  return (
    <section className="py-24 lg:py-36 bg-background border-t border-hu-line" aria-labelledby="equipment-heading">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <p className="font-display font-600 text-xs tracking-[0.3em] uppercase text-hu-red mb-3">Felszerelés</p>
            <h2
              id="equipment-heading"
              className="font-display font-900 text-[clamp(2.5rem,6vw,5rem)] leading-[0.9] tracking-tight uppercase text-foreground"
            >
              ESZKÖZÖK<br />
              <span className="text-foreground/30">FELSZERELÉS</span>
            </h2>
          </div>
          <div className="flex flex-col justify-end">
            <p className="font-sans text-base text-muted-foreground leading-relaxed">
              Az atlétikai felszerelések szigorú szabványoknak felelnek meg. A megfelelő eszközök helyes megválasztása elengedhetetlen az optimális teljesítményhez és a biztonságos edzéshez.
            </p>
          </div>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-0">
          {/* Equipment list */}
          <div className="border border-hu-line border-r-0 lg:border-r">
            {equipment.map((item, idx) => (
              <div
                key={item.name}
                className={`flex gap-8 p-8 ${idx < equipment.length - 1 ? 'border-b border-hu-line' : ''} group hover:bg-card transition-colors`}
              >
                <div className="shrink-0 w-24">
                  <p className="font-display font-700 text-xs tracking-widest uppercase text-hu-red">{item.category}</p>
                </div>
                <div>
                  <h3 className="font-display font-700 text-xl uppercase tracking-wide text-foreground mb-2 group-hover:text-hu-red transition-colors">
                    {item.name}
                  </h3>
                  <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Image */}
          <div className="relative h-96 lg:h-auto">
            <img
              src="/images/equipment.jpg"
              alt="Atlétikai felszerelések"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="font-display font-900 text-2xl tracking-tight uppercase text-foreground leading-tight">
                PRECÍZ<br />FELSZERELÉS
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

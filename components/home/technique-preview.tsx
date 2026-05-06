import Link from 'next/link'

const techniques = [
  {
    num: '01',
    title: 'Rajttechnika',
    desc: 'A helyes rajtpozíció és az első lépések optimalizálása meghatározza az egész verseny kimenetelét.',
  },
  {
    num: '02',
    title: 'Futólépés mechanikája',
    desc: 'A lábfejlehelyezés, a csípőmozgás és a karlendítés összehangolása a hatékony futáshoz.',
  },
  {
    num: '03',
    title: 'Légzéstechnika',
    desc: 'A ritmikus légzés különböző távokon eltérő stratégiát követel, ami meghatározza a teljesítményt.',
  },
  {
    num: '04',
    title: 'Ugrástechnikák',
    desc: 'A magasugrás, a hosszúugrás és a hármasugrás különböző nekirugaszkodási és levegőbeli technikái.',
  },
]

export function TechniquePreview() {
  return (
    <section className="py-24 lg:py-36 bg-background" aria-labelledby="technique-heading">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 mb-16 border-b border-hu-line pb-8">
          <div>
            <p className="font-display font-600 text-xs tracking-[0.3em] uppercase text-hu-red mb-3">Tudás</p>
            <h2
              id="technique-heading"
              className="font-display font-900 text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] tracking-tight uppercase text-foreground"
            >
              TECHNIKA<br />
              <span className="text-foreground/30">EDZÉS</span>
            </h2>
          </div>
          <Link
            href="/technika"
            className="font-display font-700 text-xs tracking-widest uppercase px-6 py-3 border border-hu-line text-muted-foreground hover:text-foreground hover:border-foreground transition-colors group flex items-center gap-3"
          >
            Teljes oldal
            <span className="w-6 h-px bg-current inline-block transition-all group-hover:w-10" aria-hidden="true" />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {techniques.map((item, idx) => (
            <Link
              key={item.num}
              href="/technika"
              className={`group flex gap-6 p-8 border-hu-line hover:bg-card transition-colors duration-300 ${
                idx % 2 === 0 ? 'border-r' : ''
              } ${idx < 2 ? 'border-b' : ''}`}
            >
              <span className="font-display font-700 text-5xl text-foreground/10 leading-none group-hover:text-hu-red/30 transition-colors shrink-0">
                {item.num}
              </span>
              <div>
                <h3 className="font-display font-700 text-xl uppercase tracking-wide text-foreground mb-3 group-hover:text-hu-red transition-colors">
                  {item.title}
                </h3>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Image strip */}
        <div className="mt-0 relative overflow-hidden h-64 lg:h-80">
          <img
            src="/images/technique.jpg"
            alt="Atlétikai technika bemutatása"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent" />
          <div className="absolute inset-0 flex items-center px-8 lg:px-16">
            <p className="font-display font-900 text-[clamp(2rem,5vw,4rem)] tracking-tight uppercase text-foreground leading-none">
              MOZGÁS<br />
              <span className="text-hu-red">TÖKÉLETESÍTÉSE</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

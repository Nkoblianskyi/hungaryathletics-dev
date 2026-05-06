import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Atlétikai Technika és Edzéstervek | Hungary Athletics',
  description: 'Részletes atlétikai technika útmutatók, edzési tervek és taktikai tanácsok minden könnyűatlétikai diszciplínához.',
}

const techniques = [
  {
    category: 'SPRINT',
    num: '01',
    title: 'Sprinttechnika és rajtmódszertan',
    desc: 'A 100 és 200 méteres sprint technikai elemei, a rajtblokk használata, a gyorsulási fázis és a csúcssebességi fázis részletes elemzése.',
    details: [
      'Rajtpozíció és blokk beállítás',
      'Gyorsulási fázis 0-30m',
      'Csúcssebességi fázis 30-70m',
      'Fenntartási fázis 70-100m',
      'Karlendítés és törzsstabilitás',
    ],
    plan: 'Heti 4-5 edzés: 2 technikai, 2 erő, 1 regenerációs',
  },
  {
    category: 'UGRÁS',
    num: '02',
    title: 'Ugrótechnikák részletes bemutatása',
    desc: 'A magasugrás Fosbury-flop technikája, a hosszúugrás nekirugaszkodási metodikája, a rúdugrás komplex mozgáslánca és a hármasugrás ritmusos fázisai.',
    details: [
      'Fosbury-flop: nekirugaszkodás és levegőbeli technika',
      'Hosszúugrás: hang módszer és vashitch módszer',
      'Rúdugrás: rúdtartás és kilökési technika',
      'Hármasugrás: ugrás-lépés-ugrás ritmus',
    ],
    plan: 'Heti 3-4 edzés: technikai elemek, erejfejlesztés, nekirugaszkodási edzések',
  },
  {
    category: 'DOBÁS',
    num: '03',
    title: 'Dobótechnikák: erő és precizitás',
    desc: 'A súlylökés glide és forgástechnikája, a diszkoszvetés aerodinamikája, a gerelyhajítás nekirugaszkodással kombinált technikája és a kalapácsvetés centrifugális elvei.',
    details: [
      'Súlylökés: O\'Brien (glide) és forgástechnika',
      'Diszkoszvetés: 1¾ fordulaттal',
      'Gerelyhajítás: futás és átadás',
      'Kalapácsvetés: 3-4 fordulattal',
    ],
    plan: 'Heti 4 edzés: általános erő, sport-specifikus erő, technikai munka',
  },
  {
    category: 'FUTÁS',
    num: '04',
    title: 'Közép- és hosszútávfutás módszertana',
    desc: 'Az 800 métertől a maratonig minden távolságra vonatkozó specifikus edzésmódszerek, tempóstratégiák és az aerob alapépítés elvei.',
    details: [
      'Aerob alap és alapfutás módszer',
      'Tempo futás: laktátküszöb edzés',
      'Intervall edzés: rövidebb és hosszabb intervallumok',
      'Fartlek: szabad iramváltásos futás',
      'Versenyspecifikus iramstratégiák',
    ],
    plan: 'Heti 5-7 futás: alap, tempo, intervall és regeneráció kombinációja',
  },
  {
    category: 'GÁTFUTÁS',
    num: '05',
    title: 'Gátfutás: ritmus és koordináció',
    desc: 'A 100/110 méteres gátfutás és a 400 méteres gátfutás technikájának részletes leírása, a lépésszám meghatározása és a gáton való átkelés technikájának finomítása.',
    details: [
      '110m gátak: 3 lépés gátak között',
      '100m gátak (nők): technika és ritmus',
      '400m gátak: iramfenntartás és lépésszám',
      'Vezérláb és hátulsó láb technikája',
      'Kar koordináció gáton való átkelésnél',
    ],
    plan: 'Heti 4 edzés: technikai, sebességi és állóképességi elemek kombinálása',
  },
  {
    category: 'GYALOGLÁS',
    num: '06',
    title: 'Atlétikai gyaloglás szabályos technikája',
    desc: 'Az atlétikai gyaloglás szabályos végrehajtása, a csípőmozgás optimalizálása, és a versenybírók által ellenőrzött technikai elemek pontosítása.',
    details: [
      'Talajérintés és lábfejlehelyezés',
      'Csípőmozgás amplitúdója',
      'Kar és törzs koordináció',
      'Versenybírói szempontok',
      '20 és 35 km versenyspecifikus taktika',
    ],
    plan: 'Heti 5-6 edzés: hosszú gyaloglás, tempo gyaloglás és technikai munka',
  },
]

const trainingPlans = [
  {
    title: 'Kezdő atlétikai program',
    duration: '12 hét',
    desc: 'Az atlétika alapjait megalapozó program, amely minden alap-versenyszámmal megismerteti a kezdő atlétet.',
    weeks: [
      { week: '1-4', focus: 'Alapkondicionálás', detail: 'Általános állóképesség, mozgékonyság, alapvető futástechnika' },
      { week: '5-8', focus: 'Technikai bevezető', detail: 'Versenyszámspecifikus technikai elemek megismerése' },
      { week: '9-12', focus: 'Integrálás', detail: 'Technikai elemek kombinálása, első versenyfelkészülés' },
    ],
  },
  {
    title: 'Haladó sprint program',
    duration: '16 hét',
    desc: 'Specifikus program sprint versenyszámokra (100, 200, 400m), amellyel a meglévő technikát és sebességet lehet fokozni.',
    weeks: [
      { week: '1-4', focus: 'Alap és erő', detail: 'Általános erőfejlesztés, alaptechnika, alacsony intenzitású sprint munka' },
      { week: '5-8', focus: 'Intenzifikálás', detail: 'Sebességi munka, technika finomítás, versenyspecifikus edzések' },
      { week: '9-12', focus: 'Csúcsformázás', detail: 'Maximális sebességi munka, versenyek, formaoptimalizálás' },
      { week: '13-16', focus: 'Versenyidőszak', detail: 'Csökkentett terhelés, a versenyek körüli regeneráció, csúcsforma fenntartása' },
    ],
  },
]

export default function TechnikaPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Page hero */}
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 border-b border-hu-line overflow-hidden">
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="absolute left-0 right-0 h-px bg-foreground/5"
              style={{ top: `${20 + i * 15}%` }}
            />
          ))}
        </div>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-2 h-2 bg-hu-red" aria-hidden="true" />
            <p className="font-display font-600 text-xs tracking-[0.3em] uppercase text-muted-foreground">Atlétikai tudásbázis</p>
          </div>
          <h1 className="font-display font-900 text-[clamp(3.5rem,10vw,9rem)] leading-[0.9] tracking-tight uppercase text-foreground mb-8">
            TECHNIKA<br />
            <span className="text-hu-red">EDZÉS</span>
          </h1>
          <p className="font-sans text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Az atlétikai technikák részletes bemutatása minden versenyszámhoz, edzéstervekkel és taktikai tanácsokkal. Kezdőknek és haladóknak egyaránt.
          </p>
        </div>
      </section>

      {/* Techniques grid */}
      <section className="py-20 lg:py-32" aria-labelledby="techniques-heading">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <h2 id="techniques-heading" className="font-display font-900 text-3xl uppercase tracking-tight text-foreground mb-12 border-b border-hu-line pb-6">
            Versenyszám-specifikus technikák
          </h2>
          <div className="space-y-0">
            {techniques.map((tech, idx) => (
              <div
                key={tech.num}
                className={`grid grid-cols-1 lg:grid-cols-[80px_1fr_300px] gap-0 ${idx < techniques.length - 1 ? 'border-b border-hu-line' : ''}`}
              >
                {/* Number */}
                <div className="flex items-start justify-center py-8 lg:py-12 border-b lg:border-b-0 lg:border-r border-hu-line">
                  <span className="font-display font-900 text-4xl text-foreground/10">{tech.num}</span>
                </div>

                {/* Main content */}
                <div className="p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-hu-line">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-display font-700 text-xs tracking-widest uppercase px-2 py-1 bg-hu-red/10 text-hu-red border border-hu-red/20">
                      {tech.category}
                    </span>
                  </div>
                  <h3 className="font-display font-800 text-2xl uppercase tracking-tight text-foreground mb-4">
                    {tech.title}
                  </h3>
                  <p className="font-sans text-base text-muted-foreground leading-relaxed mb-6">
                    {tech.desc}
                  </p>
                  <ul className="space-y-2">
                    {tech.details.map((detail) => (
                      <li key={detail} className="flex items-center gap-3 font-sans text-sm text-muted-foreground">
                        <div className="w-1 h-1 bg-hu-red shrink-0" aria-hidden="true" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Training plan */}
                <div className="p-8 lg:p-12 bg-card">
                  <p className="font-display font-700 text-xs tracking-widest uppercase text-muted-foreground mb-3">Edzésterv</p>
                  <p className="font-sans text-sm text-foreground leading-relaxed">{tech.plan}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training plans */}
      <section className="py-20 lg:py-32 bg-card border-t border-hu-line" aria-labelledby="plans-heading">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <h2 id="plans-heading" className="font-display font-900 text-[clamp(2rem,5vw,4rem)] uppercase tracking-tight text-foreground mb-16">
            KOMPLEX<br />
            <span className="text-foreground/30">EDZÉSTERVEK</span>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-hu-line">
            {trainingPlans.map((plan, idx) => (
              <div key={plan.title} className={`p-8 lg:p-12 ${idx === 0 ? 'border-b lg:border-b-0 lg:border-r border-hu-line' : ''}`}>
                <div className="flex items-start justify-between mb-6">
                  <h3 className="font-display font-800 text-2xl uppercase tracking-tight text-foreground">
                    {plan.title}
                  </h3>
                  <span className="font-display font-700 text-xs tracking-widest uppercase px-3 py-1.5 bg-hu-red text-foreground shrink-0 ml-4">
                    {plan.duration}
                  </span>
                </div>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-8">
                  {plan.desc}
                </p>
                <div className="space-y-4">
                  {plan.weeks.map((week) => (
                    <div key={week.week} className="flex gap-6 py-4 border-b border-hu-line last:border-b-0">
                      <div className="shrink-0 w-20">
                        <p className="font-display font-700 text-sm text-hu-red">{week.week}. hét</p>
                      </div>
                      <div>
                        <p className="font-display font-700 text-sm uppercase text-foreground mb-1">{week.focus}</p>
                        <p className="font-sans text-xs text-muted-foreground leading-relaxed">{week.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

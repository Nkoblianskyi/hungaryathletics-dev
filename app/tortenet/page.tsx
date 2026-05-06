import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'A Magyar Atlétika Története | Hungary Athletics',
  description: 'A magyarországi könnyűatlétika részletes történelme az olimpiai kezdetektől napjainkig. Kiemelkedő korszakok, eredmények és mérföldkövek.',
}

const timeline = [
  {
    period: '1896-1918',
    title: 'Az első olimpiai lépések',
    content: `Az 1896-os athéni olimpia volt az első alkalom, amikor Magyarország képviselte magát a modern olimpiai játékokon. Az atlétika ettől kezdve meghatározó szerepet töltött be a magyar sport történetében. A korai versenyeken a futószámok domináltak, de hamarosan a dobó- és ugrószámokban is megjelentek a magyar versenyzők.

A 20. század elején sorra alakultak az atlétikai egyesületek Magyarország nagyobb városaiban. A rendszeres edzés és a szakszerű felkészítés alapjait lerakva, a magyar atléták egyre jelentősebb eredményeket értek el a nemzetközi porondon is.

Az első világháború megszakította a fejlődést, de az atlétikai mozgalom szelleme fennmaradt, és a háború után gyorsan újjáéledt.`,
  },
  {
    period: '1919-1944',
    title: 'A két háború között: aranykor születése',
    content: `A két háború közötti időszak a magyar atlétika egyik legfontosabb fejlődési korszaka volt. Az atlétikai szövetség megerősödött, rendszeres versenyeket szervezett, és a versenyzők szakszerű felkészítése egyre szervezett keretek között zajlott.

Az 1920-as és 1930-as évek olimpiáin a magyar atléták kiemelkedő eredményeket értek el, különösen a dobószámokban és a középtávfutásban. Ezek az eredmények bizonyították, hogy a rendszeres edzés és a megfelelő szervezeti háttér milyen jelentős teljesítményre képes.

A fizikai nevelés iskolai bevezetése ebben az időszakban nagymértékben hozzájárult az atlétika népszerűsítéséhez. Az iskolai versenyek sok tehetséges fiatalt vezettek az atlétika felé.`,
  },
  {
    period: '1945-1960',
    title: 'Az újjáépítés és az olimpiai sikerek kora',
    content: `A második világháború utáni újjáépítés időszakában az atlétika különösen fontos szerepet kapott. Az 1948-as londoni olimpia a háború utáni első nagy megmérettetés volt, ahol Magyarország újra megmutatta atlétikai erejét.

Az 1952-es helsinki olimpia kiemelkedő sikert hozott a magyar atlétikának. A különböző versenyszámokban elért eredmények megmutatták, hogy az intenzív felkészítési módszerek és az állami sportpolitika a csúcsteljesítményt is elérhetővé teszi.

Az 1956-os melbourne-i olimpia különleges körülmények között zajlott a magyarok számára, de az atléták kiálltak és méltóan képviselték az országot.`,
  },
  {
    period: '1961-1980',
    title: 'Rendszeres csúcsteljesítmény és technikai fejlesztés',
    content: `A hatvanas és hetvenes évek a magyar atlétika rendszeres csúcsteljesítményének kora volt. Az edzésmódszerek tudományosabb alapokra kerültek, és a biomechanikai kutatások egyre inkább beszivárogtak a napi edzésmunkába.

Az 1964-es tokiói és az 1968-as mexikóvárosi olimpián a magyar atléták továbbra is jelentős eredményeket értek el. A dobószámokban kiemelkedő technikai fejlődés volt megfigyelhető, ami az eredmények folyamatos javulásában is tükröződött.

A hetvenes évek a hosszútávfutás és a gyaloglás területén hoztak különösen szép sikereket. Az 1976-os montreal-i olimpia és az azt megelőző versenyévad a magyar atlétika egyik csúcsidőszakának számít.`,
  },
  {
    period: '1981-2000',
    title: 'Rendszerváltás és alkalmazkodás',
    content: `A nyolcvanas évek összetett korszak volt a magyar sport számára. Az 1984-es Los Angeles-i olimpia bojkottja, amelyen Magyarország nem vett részt, megszakította a fejlődési ívét. Az 1988-as szöuli olimpia újra lehetőséget adott a megmérettetésre.

A rendszerváltás 1989-90-ben alapvető változásokat hozott a sport szervezetébe. Az állami finanszírozás csökkent, és az atlétikának alkalmazkodni kellett az új körülményekhez. A kilencvenes évek kihívásai ellenére a magyar atléták megőrizték versenyképességüket.

Az ezredfordulóra Magyarország atlétikája modern szervezeti keretek között működött, és a tehetséges fiatalok felkutatása és nevelése prioritás lett.`,
  },
  {
    period: '2001-napjainkig',
    title: 'A 21. századi magyar atlétika',
    content: `A 21. század a magyar atlétika megújulásának kora. Az infrastruktúra fejlesztése, az edzésmódszerek korszerűsítése és a fiatal tehetségek felfedezése alapját teremtette meg egy új virágzásnak.

A 2000-es évek olimpiáin a magyar atléták a dobó- és ugrószámokban értek el kiemelkedő eredményeket. A tudományos alapú edzéstervezés, a sportpszichológia integrálása és a modern technológia alkalmazása folyamatosan javítja a teljesítményszintet.

Az atlétikai infrastruktúra fejlesztése, fedett atlétikai csarnokok építése és a vidéki tehetséggondozás erősítése mind hozzájárul ahhoz, hogy a magyar atlétika tartósan jelen legyen a világ élvonalában.`,
  },
]

export default function TortenetPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 border-b border-hu-line overflow-hidden">
        <div className="absolute inset-0" aria-hidden="true">
          <img
            src="/images/history.jpg"
            alt=""
            className="w-full h-full object-cover object-center grayscale opacity-15"
          />
          <div className="absolute inset-0 bg-background/80" />
        </div>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-2 h-2 bg-hu-red" aria-hidden="true" />
            <p className="font-display font-600 text-xs tracking-[0.3em] uppercase text-muted-foreground">Atlétikai örökség</p>
          </div>
          <h1 className="font-display font-900 text-[clamp(3.5rem,10vw,9rem)] leading-[0.9] tracking-tight uppercase text-foreground mb-8">
            TÖRTÉNELEM<br />
            <span className="text-hu-red">ÖRÖKSÉGE</span>
          </h1>
          <p className="font-sans text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Magyarország könnyűatlétikájának több mint 100 éves történelme, az első olimpiai lépésektől a mai napig. Kiemelkedő korszakok, eredmények és mérföldkövek.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 lg:py-32" aria-labelledby="timeline-heading">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <h2 id="timeline-heading" className="sr-only">Kronológiai áttekintés</h2>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 lg:left-[120px] top-0 bottom-0 w-px bg-hu-line" aria-hidden="true" />

            <div className="space-y-0">
              {timeline.map((item, idx) => (
                <div key={item.period} className="relative flex gap-6 lg:gap-16 pb-16 last:pb-0">
                  {/* Period */}
                  <div className="shrink-0 w-12 lg:w-[120px] relative">
                    <div className="absolute right-0 lg:right-auto lg:left-0 top-0 flex items-center gap-3">
                      <div className="w-3 h-3 bg-hu-red border-2 border-background relative z-10" aria-hidden="true" />
                    </div>
                    <div className="hidden lg:block pt-0">
                      <p className="font-display font-700 text-xs text-hu-red tracking-wide leading-snug">
                        {item.period.split('-').join('\n')}
                      </p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pl-4 lg:pl-0">
                    <p className="font-display font-700 text-xs text-hu-red tracking-wide mb-3 lg:hidden">{item.period}</p>
                    <h3 className="font-display font-800 text-2xl lg:text-3xl uppercase tracking-tight text-foreground mb-6">
                      {item.title}
                    </h3>
                    <div className="space-y-4">
                      {item.content.split('\n\n').map((para, i) => (
                        <p key={i} className="font-sans text-base text-muted-foreground leading-relaxed">
                          {para}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Closing banner */}
      <section className="bg-card border-t border-hu-line py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-start lg:items-center gap-12 justify-between">
          <div>
            <p className="font-display font-700 text-xs tracking-widest uppercase text-hu-red mb-4">Örökség</p>
            <p className="font-display font-900 text-[clamp(2rem,5vw,4rem)] leading-[0.9] tracking-tight uppercase text-foreground">
              TÖBB MINT<br />100 ÉV<br />
              <span className="text-foreground/30">ATLÉTIKA</span>
            </p>
          </div>
          <div className="lg:max-w-sm">
            <p className="font-sans text-base text-muted-foreground leading-relaxed">
              A magyar atlétika gazdag múltja és hagyományai biztos alapot nyújtanak a jövő generációinak. Az eredmények és a tudás folyamatosan tovább öröklődnek.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

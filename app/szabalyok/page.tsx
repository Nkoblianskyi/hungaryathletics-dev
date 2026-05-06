import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Atlétikai Szabályok és Diszciplínák | Hungary Athletics',
  description: 'A könnyűatlétika versenyszámainak hivatalos szabályai, diszciplínák részletes bemutatása, versenytechnikák és bírói szempontok.',
}

const disciplines = [
  {
    code: 'SP',
    category: 'PÁLYA',
    title: 'Sprintfutások',
    items: ['100 méter', '200 méter', '400 méter'],
    rules: [
      'A rajthoz a rajtblokkot kell használni',
      'Hamis rajtnál az atléta kizárásra kerül (egy hamis rajtot sem engedélyeznek)',
      'A futónak a kijelölt sávjában kell maradnia a célvonalig',
      'A célba érkezés a törzs síkjának áthaladásával történik',
    ],
  },
  {
    code: 'MH',
    category: 'PÁLYA',
    title: 'Közép- és Hosszútávfutás',
    items: ['800 méter', '1500 méter', '5000 méter', '10 000 méter'],
    rules: [
      'Az első kanyar után a futók elhagyhatják sávjukat',
      'Szándékos zavarás vagy akadályozás diszkvalifikációhoz vezet',
      'Pályán kívül futás érvénytelen szakaszt eredményez',
      'Segédanyag (pl. étel/ital) csak a kijelölt pontokon fogadható el',
    ],
  },
  {
    code: 'GT',
    category: 'PÁLYA',
    title: 'Gátfutások',
    items: ['100 méter gát (nők)', '110 méter gát (férfiak)', '400 méter gát'],
    rules: [
      'A futónak a kijelölt sávban kell gátakat átugrani',
      'A gát felborítása nem eredményez kizárást, de szándékos leütés igen',
      'A futó lába nem kerülhet a gát mellé a gát vonala mögé',
      'Az összes gátat érintetlen kell hagyni vagy felborítani (le nem gázolni)',
    ],
  },
  {
    code: 'AK',
    category: 'PÁLYA',
    title: 'Akadályfutás',
    items: ['3000 méter akadályfutás'],
    rules: [
      'A vízesárokba lépés megengedett (az akadály tetején való állás is)',
      'Az akadályt lehet oldalon megkerülni (érvénytelen)',
      'Összesen 35 akadályt kell leküzdeni, ebből 7 a vízesárok',
      'Az akadályfutás pályára lépési sor meghatározott',
    ],
  },
  {
    code: 'RV',
    category: 'PÁLYA',
    title: 'Váltófutások',
    items: ['4 x 100 méter', '4 x 400 méter'],
    rules: [
      'A botot a váltózónán belül kell átadni (20 méteres zóna)',
      'Ha a bot leesik, az azt elejtő futó felveheti',
      'A következő futó átadás előtt elhagyja a váltózónát: kizárás',
      '4x100-ban a rajtfutó is rajtblokkot használ',
    ],
  },
  {
    code: 'GY',
    category: 'PÁLYA',
    title: 'Atlétikai Gyaloglás',
    items: ['20 kilométer gyaloglás', '35 kilométer gyaloglás'],
    rules: [
      'Egyik lábnak mindig érintkeznie kell a talajjal (látható kétlábú kontakt)',
      'A térdnek ki kell egyenesedni a talajérintéstől a vertikális helyzetig',
      'Három bírói figyelmeztetés után vörös lap: kizárás',
      'Versenyen belüli segítség (kivéve orvosi) kizárást von maga után',
    ],
  },
  {
    code: 'HU',
    category: 'MEZŐ',
    title: 'Ugrószámok',
    items: ['Magasugrás', 'Rúdugrás', 'Hosszúugrás', 'Hármasugrás'],
    rules: [
      'Magasugrásban és rúdugrásban 3 kísérlet áll rendelkezésre minden magassághoz',
      'Hosszú- és hármasugrásban 3+3 (vagy 6) kísérlet alapján döntenek',
      'Az elugródeszkáról hátratolódás érvénytelen kísérlet',
      'Rúdugrásban a rúd elmozdítása, a lécre támaszkodás kizárja a kísérletet',
    ],
  },
  {
    code: 'DO',
    category: 'MEZŐ',
    title: 'Dobószámok',
    items: ['Súlylökés', 'Diszkoszvetés', 'Gerelyhajítás', 'Kalapácsvetés'],
    rules: [
      'A kör hatásvonalát (karimát) nem szabad átlépni vagy megérinteni',
      'Az eszköznek a szektoron belül kell landolnia (érvényes szög)',
      'Gerelynek hegyével kell landolnia, diszkosznak lapos helyzetnél is mérhetők',
      'A dobókörből csak hátul szabad kilépni az eszköz landolása után',
    ],
  },
]

const officials = [
  { role: 'Főbíró', responsibility: 'Az egész verseny levezetéséért felelős, végső döntések meghozatala' },
  { role: 'Rajt bíró', responsibility: 'A helyes rajtot ellenőrzi, hamis rajt esetén visszahívó jelet ad' },
  { role: 'Vonal bíró', responsibility: 'A sávszabályok betartását ellenőrzi, a célba érkezés sorrendjét megállapítja' },
  { role: 'Mező bíró', responsibility: 'A dobó- és ugrószámokban ellenőrzi az érvényes kísérleteket és méri a teljesítményt' },
  { role: 'Gyaloglás bíró', responsibility: 'A gyaloglási technika szabályszerűségét figyelemmel kíséri, piros lapot adhat' },
  { role: 'Csapat bíró', responsibility: 'A váltóátadásokat ellenőrzi a kijelölt váltózónákban' },
]

const competitionTypes = [
  {
    num: '01',
    title: 'Szabadtéri verseny',
    desc: 'A standard atlétikai verseny 400 méteres pályán. A legtöbb pályaverseny és mező versenyszám ezen rendszeren belül zajlik. A világ- és Európa-bajnokságok, olimpiai játékok mind szabadtéri formátumban szerepelnek.',
  },
  {
    num: '02',
    title: 'Fedett pályás verseny',
    desc: 'Téli szezon versenyei 200 méteres fedett pályán. Egyes versenyszámok módosulnak: nincs 400m gátrfutás, 3000m akadály és váltófutások más távokon zajlanak. A Fedett Pályás VB és EB fontos a téli szezonban.',
  },
  {
    num: '03',
    title: 'Úti versenyek',
    desc: 'Félmaraton, maraton és gyaloglás közúton. A mért távolságok és az elfogadott útvonalak szigorú szabályoknak felelnek meg. Az IAAF minősítési rendszerben a pálya emelkedési aránya is szabályozott.',
  },
  {
    num: '04',
    title: 'Terepfutás és hegyfutás',
    desc: 'Természetes terepen zajló versenyek, ahol a szabályok rugalmasabbak. A terepfutó VB az egyik legrégebbi atlétikai világverseny. A hegyfutásban speciális kapaszkodó és lejtős szakaszok is szerepelnek.',
  },
]

export default function SzabalyokPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 border-b border-hu-line overflow-hidden">
        <div className="absolute inset-0" aria-hidden="true">
          <img
            src="/images/disciplines.jpg"
            alt=""
            className="w-full h-full object-cover object-center opacity-10"
          />
          <div className="absolute inset-0 bg-background/85" />
        </div>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-2 h-2 bg-hu-red" aria-hidden="true" />
            <p className="font-display font-600 text-xs tracking-[0.3em] uppercase text-muted-foreground">Versenyszabályok</p>
          </div>
          <h1 className="font-display font-900 text-[clamp(3.5rem,10vw,9rem)] leading-[0.9] tracking-tight uppercase text-foreground mb-8">
            SZABÁLYOK<br />
            <span className="text-hu-red">DISZCIPLÍNÁK</span>
          </h1>
          <p className="font-sans text-lg text-muted-foreground leading-relaxed max-w-2xl">
            A könnyűatlétika összes versenyszámának szabályai és a diszciplínák részletes bemutatása. A versenyrendszer, a bírók szerepe és a helyes végrehajtás követelményei.
          </p>
        </div>
      </section>

      {/* Discipline rules grid */}
      <section className="py-20 lg:py-32" aria-labelledby="disciplines-heading">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex items-end justify-between mb-16 border-b border-hu-line pb-8">
            <div>
              <p className="font-display font-700 text-xs tracking-widest uppercase text-hu-red mb-3">Szabályrendszer</p>
              <h2 id="disciplines-heading" className="font-display font-900 text-[clamp(2rem,5vw,4rem)] leading-[0.9] tracking-tight uppercase text-foreground">
                VERSENYSZÁMOK<br />
                <span className="text-foreground/30">ÉS SZABÁLYOK</span>
              </h2>
            </div>
          </div>

          <div className="space-y-0">
            {disciplines.map((disc, idx) => (
              <div
                key={disc.code}
                className={`grid grid-cols-1 lg:grid-cols-[100px_1fr_1fr] gap-0 border-hu-line ${idx < disciplines.length - 1 ? 'border-b' : ''}`}
              >
                {/* Code + category */}
                <div className="flex flex-col items-start lg:items-center justify-start lg:justify-center py-8 px-6 lg:border-r border-hu-line border-b lg:border-b-0">
                  <span className="font-display font-900 text-3xl text-foreground/10 leading-none mb-2">{disc.code}</span>
                  <span className="font-display font-700 text-xs tracking-widest text-hu-red uppercase">{disc.category}</span>
                </div>

                {/* Title + items */}
                <div className="p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-hu-line">
                  <h3 className="font-display font-800 text-xl uppercase tracking-tight text-foreground mb-5">{disc.title}</h3>
                  <ul className="space-y-2">
                    {disc.items.map((item) => (
                      <li key={item} className="flex items-center gap-3 font-sans text-sm text-foreground">
                        <div className="w-4 h-px bg-hu-red shrink-0" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Rules */}
                <div className="p-8 lg:p-10 bg-card">
                  <p className="font-display font-700 text-xs tracking-widest uppercase text-muted-foreground mb-5">Főbb szabályok</p>
                  <ul className="space-y-3">
                    {disc.rules.map((rule, i) => (
                      <li key={i} className="flex items-start gap-3 font-sans text-sm text-muted-foreground leading-relaxed">
                        <span className="font-display font-700 text-xs text-hu-red/60 shrink-0 mt-0.5">{String(i + 1).padStart(2, '0')}</span>
                        {rule}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Competition types */}
      <section className="py-20 lg:py-28 bg-card border-t border-hu-line" aria-labelledby="competition-types-heading">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <h2 id="competition-types-heading" className="font-display font-900 text-[clamp(2rem,5vw,4rem)] uppercase tracking-tight text-foreground mb-16">
            VERSENY<br />
            <span className="text-foreground/30">FORMÁTUMOK</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-hu-line">
            {competitionTypes.map((type, idx) => (
              <div
                key={type.num}
                className={`p-8 lg:p-10 ${idx % 2 === 0 ? 'border-b md:border-b-0 md:border-r border-hu-line' : ''} ${idx < 2 ? 'border-b border-hu-line' : ''}`}
              >
                <span className="font-display font-900 text-5xl text-foreground/8 leading-none block mb-5">{type.num}</span>
                <h3 className="font-display font-800 text-xl uppercase tracking-tight text-foreground mb-4">{type.title}</h3>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">{type.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Officials */}
      <section className="py-20 lg:py-28 border-t border-hu-line" aria-labelledby="officials-heading">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <h2 id="officials-heading" className="font-display font-900 text-[clamp(2rem,4vw,3.5rem)] uppercase tracking-tight text-foreground mb-12">
            VERSENYBÍRÓK<br />
            <span className="text-foreground/30">SZEREPEI</span>
          </h2>
          <div className="space-y-0 border border-hu-line">
            {officials.map((official, idx) => (
              <div
                key={official.role}
                className={`flex flex-col sm:flex-row gap-4 sm:gap-0 p-6 lg:p-8 ${idx < officials.length - 1 ? 'border-b border-hu-line' : ''}`}
              >
                <div className="shrink-0 sm:w-56">
                  <p className="font-display font-700 text-sm uppercase tracking-wide text-foreground">{official.role}</p>
                </div>
                <div className="flex-1 sm:border-l sm:border-hu-line sm:pl-8">
                  <p className="font-sans text-sm text-muted-foreground leading-relaxed">{official.responsibility}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Süti Szabályzat | Hungary Athletics',
  description: 'A Hungary Athletics weboldal süti szabályzata. Tájékoztató az oldalon alkalmazott sütikről és azok kezeléséről.',
}

function getUpdateDate() {
  const now = new Date()
  return now.toLocaleDateString('hu-HU', { year: 'numeric', month: 'long', day: 'numeric' })
}

const cookieTypes = [
  {
    type: 'Szükséges sütik',
    purpose: 'Az oldal alapvető működéséhez elengedhetetlenül szükségesek. Ezek nélkül az oldal nem működik megfelelően.',
    duration: 'Munkamenet / max. 1 év',
    canDisable: false,
  },
  {
    type: 'Funkcionális sütik',
    purpose: 'Megjegyzik a felhasználói beállításokat (pl. sütik elfogadása), hogy ne kelljen azokat újra megadni.',
    duration: 'Max. 1 év',
    canDisable: true,
  },
  {
    type: 'Analitikai sütik',
    purpose: 'Az oldal látogatottságának mérésére és a felhasználói viselkedés elemzésére szolgálnak, hogy az oldal fejleszthető legyen.',
    duration: 'Max. 2 év',
    canDisable: true,
  },
]

export default function SutiSzabalyzatPage() {
  const updateDate = getUpdateDate()

  return (
    <div className="bg-background min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-44 lg:pb-24 border-b border-hu-line">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-2 h-2 bg-hu-red" aria-hidden="true" />
            <p className="font-display font-600 text-xs tracking-[0.3em] uppercase text-muted-foreground">Jogi információk</p>
          </div>
          <h1 className="font-display font-900 text-[clamp(3rem,8vw,7rem)] leading-[0.9] tracking-tight uppercase text-foreground mb-6">
            SÜTI<br />
            <span className="text-hu-red">SZABÁLYZAT</span>
          </h1>
          <p className="font-sans text-sm text-muted-foreground">
            Utoljára frissítve: <time dateTime={new Date().toISOString().split('T')[0]}>{updateDate}</time>
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[900px] mx-auto px-6 lg:px-12">

          <div className="space-y-12">

            <div>
              <h2 className="font-display font-800 text-2xl uppercase tracking-tight text-foreground mb-4">Mi az a süti?</h2>
              <p className="font-sans text-base text-muted-foreground leading-relaxed">
                A sütik (cookies) kis szöveges fájlok, amelyeket a weboldalak az Ön böngészőjében tárolnak. Segítségükkel a weboldal megjegyezheti az Ön beállításait, és javíthatja a felhasználói élményt. A sütik nem tartalmaznak személyes azonosításra alkalmas adatokat, és nem férnek hozzá az Ön eszközén tárolt fájlokhoz.
              </p>
            </div>

            <div>
              <h2 className="font-display font-800 text-2xl uppercase tracking-tight text-foreground mb-6">Milyen sütiket használunk?</h2>
              <div className="border border-hu-line">
                {cookieTypes.map((cookie, idx) => (
                  <div
                    key={cookie.type}
                    className={`grid grid-cols-1 md:grid-cols-[1fr_1fr_120px] gap-0 ${idx < cookieTypes.length - 1 ? 'border-b border-hu-line' : ''}`}
                  >
                    <div className="p-6 md:border-r border-hu-line border-b md:border-b-0">
                      <p className="font-display font-700 text-sm uppercase tracking-wide text-foreground mb-1">{cookie.type}</p>
                      <p className="font-sans text-xs text-muted-foreground">{cookie.duration}</p>
                    </div>
                    <div className="p-6 md:border-r border-hu-line border-b md:border-b-0">
                      <p className="font-sans text-sm text-muted-foreground leading-relaxed">{cookie.purpose}</p>
                    </div>
                    <div className="p-6 flex items-center">
                      <span className={`font-display font-700 text-xs tracking-widest uppercase px-3 py-1.5 ${cookie.canDisable ? 'bg-hu-grey text-foreground' : 'bg-hu-red text-foreground'}`}>
                        {cookie.canDisable ? 'Opcionális' : 'Kötelező'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-display font-800 text-2xl uppercase tracking-tight text-foreground mb-4">Hogyan kezelheti a sütiket?</h2>
              <p className="font-sans text-base text-muted-foreground leading-relaxed mb-4">
                Az oldal első látogatásakor egy tájékoztató sávban kérjük Önt a sütik elfogadására vagy elutasítására. Ha elutasítja a nem kötelező sütiket, azokat nem helyezzük el az eszközén.
              </p>
              <p className="font-sans text-base text-muted-foreground leading-relaxed mb-4">
                Böngészőjének beállításaiban is kezelheti, törölheti vagy letilthatja a sütiket. Ehhez látogassa meg a böngészője súgó oldalát:
              </p>
              <ul className="space-y-2 ml-4">
                {['Google Chrome', 'Mozilla Firefox', 'Safari', 'Microsoft Edge'].map((browser) => (
                  <li key={browser} className="flex items-center gap-3 font-sans text-sm text-muted-foreground">
                    <div className="w-1 h-1 bg-hu-red shrink-0" aria-hidden="true" />
                    {browser}
                  </li>
                ))}
              </ul>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed mt-4">
                Kérjük, vegye figyelembe, hogy ha letiltja a szükséges sütiket, az oldal egyes funkciói nem fognak megfelelően működni.
              </p>
            </div>

            <div>
              <h2 className="font-display font-800 text-2xl uppercase tracking-tight text-foreground mb-4">Kapcsolat</h2>
              <p className="font-sans text-base text-muted-foreground leading-relaxed">
                Ha kérdése van a sütik kezelésével kapcsolatban, kérjük, keressen minket az{' '}
                <a href="mailto:info@hungaryathletics.com" className="text-foreground underline underline-offset-2 hover:text-hu-red transition-colors">
                  info@hungaryathletics.com
                </a>
                {' '}e-mail címen.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

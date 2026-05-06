import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Adatvédelmi Szabályzat | Hungary Athletics',
  description: 'A Hungary Athletics adatvédelmi szabályzata. Tájékoztató a személyes adatok kezeléséről és védelméről.',
}

function getUpdateDate() {
  const now = new Date()
  return now.toLocaleDateString('hu-HU', { year: 'numeric', month: 'long', day: 'numeric' })
}

const sections = [
  {
    title: 'Az adatkezelő',
    content: `Az adatkezelő a Hungary Athletics weboldal üzemeltetője, amely a hungaryathletics.com domain alatt elérhető atlétikai információs portált üzemelteti.

Az adatkezelővel az info@hungaryathletics.com e-mail címen lehet kapcsolatba lépni.`,
  },
  {
    title: 'Milyen adatokat gyűjtünk?',
    content: `A weboldal böngészésekor automatikusan gyűjthetünk bizonyos technikai adatokat, úgymint az Ön által használt böngésző típusa, az operációs rendszer, a meglátogatott oldalak és az oldalakon töltött idő. Ezek az adatok nem kapcsolódnak személyazonosságához.

A kapcsolatfelvételi űrlap kitöltésekor az Ön által megadott adatokat (név, e-mail cím, üzenet szövege) tároljuk a megkeresés megválaszolásához szükséges ideig.`,
  },
  {
    title: 'Adatkezelés jogalapja és célja',
    content: `A kapcsolatfelvételi adatokat az Ön hozzájárulása alapján kezeljük (GDPR 6. cikk (1) bekezdés a) pont), kizárólag a megkeresés megválaszolásának céljából.

Technikai adatokat jogos érdek alapján gyűjtünk (GDPR 6. cikk (1) bekezdés f) pont) az oldal működésének biztosítása és fejlesztése érdekében.`,
  },
  {
    title: 'Adatmegőrzés időtartama',
    content: `A kapcsolatfelvételi üzenetek adatait a megkeresés megválaszolásától számított 6 hónapig őrizzük meg, ezt követően töröljük.

Technikai adatokat (naplóbejegyzések) legfeljebb 12 hónapig őrizzük meg, majd töröljük.`,
  },
  {
    title: 'Adatátadás harmadik félnek',
    content: `Az Ön személyes adatait harmadik félnek nem adjuk át, nem értékesítjük, és nem tesszük hozzáférhetővé, kivéve, ha erre jogszabály kötelez minket.

A weboldal üzemeltetéséhez igénybe vett infrastrukturális szolgáltatók (szerverszolgáltató) hozzáférhetnek az adatokhoz, de kizárólag a szerződésben rögzített feltételek szerint, saját célra nem használhatják fel azokat.`,
  },
  {
    title: 'Az Ön jogai',
    content: `A GDPR alapján az alábbi jogok illetik meg:

Hozzáférési jog: Kérheti, hogy tájékoztassuk, milyen adatait kezeljük.

Helyesbítési jog: Kérheti a pontatlan adatok kijavítását.

Törlési jog: Kérheti adatai törlését, amennyiben az adatkezelés célja megszűnt.

Az adatkezelés korlátozásához való jog: Bizonyos esetekben kérheti az adatkezelés korlátozását.

Hozzájárulás visszavonásának joga: A hozzájáruláson alapuló adatkezelés esetén bármikor visszavonhatja hozzájárulását.

Panasztétel joga: Panaszt tehet a Nemzeti Adatvédelmi és Információszabadság Hatóságnál (NAIH) a www.naih.hu weboldalon.`,
  },
  {
    title: 'Adatbiztonság',
    content: `Megfelelő technikai és szervezési intézkedéseket alkalmazunk annak érdekében, hogy az adatokat illetéktelen hozzáférés, módosítás, nyilvánosságra hozatal és törlés ellen megvédjük. A kapcsolatfelvételi adatokat titkosított csatornán keresztül továbbítjuk.`,
  },
  {
    title: 'A szabályzat módosítása',
    content: `Fenntartjuk a jogot, hogy ezt az adatvédelmi szabályzatot időről időre módosítsuk. A módosítás esetén az oldal tetején szereplő "Utoljára frissítve" dátum megváltozik. Javasoljuk, hogy rendszeresen tekintse meg ezt az oldalt.`,
  },
]

export default function AdatvedelmiSzabalyzatPage() {
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
            ADATVÉDELMI<br />
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
            {sections.map((section, idx) => (
              <div key={section.title} className={`${idx < sections.length - 1 ? 'pb-12 border-b border-hu-line' : ''}`}>
                <h2 className="font-display font-800 text-2xl uppercase tracking-tight text-foreground mb-4">
                  {section.title}
                </h2>
                <div className="space-y-4">
                  {section.content.split('\n\n').map((para, i) => {
                    // Check if it's a sub-heading (short, bold-like paragraph ending with colon pattern)
                    const isSubHeading = para.endsWith(':') && para.length < 60
                    if (isSubHeading) {
                      return (
                        <p key={i} className="font-display font-700 text-sm uppercase tracking-wide text-foreground mt-6">
                          {para}
                        </p>
                      )
                    }
                    return (
                      <p key={i} className="font-sans text-base text-muted-foreground leading-relaxed">
                        {para.includes('info@hungaryathletics.com') ? (
                          <>
                            {para.split('info@hungaryathletics.com')[0]}
                            <a
                              href="mailto:info@hungaryathletics.com"
                              className="text-foreground underline underline-offset-2 hover:text-hu-red transition-colors"
                            >
                              info@hungaryathletics.com
                            </a>
                            {para.split('info@hungaryathletics.com')[1]}
                          </>
                        ) : para.includes('www.naih.hu') ? (
                          <>
                            {para.split('www.naih.hu')[0]}
                            <a
                              href="https://www.naih.hu"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-foreground underline underline-offset-2 hover:text-hu-red transition-colors"
                            >
                              www.naih.hu
                            </a>
                            {para.split('www.naih.hu')[1]}
                          </>
                        ) : (
                          para
                        )}
                      </p>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

'use client'

import { useState } from 'react'

const values = [
  {
    num: '01',
    title: 'Hitelességi elvek',
    desc: 'Minden tartalmunk tudományos alapokon nyugszik. Kizárólag általánosan elfogadott atlétikai szakirodalmat és bevett edzésmódszereket ismertetünk.',
  },
  {
    num: '02',
    title: 'Elérhetőség mindenkinek',
    desc: 'Az atlétika információinak mindenki számára elérhetőnek kell lennie. Oldalunkon nincs fizetős tartalom, minden szabad olvasóinknak.',
  },
  {
    num: '03',
    title: 'Magyar atlétika értékei',
    desc: 'Magyarország gazdag atlétikai hagyományait ápolni és megőrizni fontos feladat. Büszkék vagyunk a magyar könnyűatlétika örökségére.',
  },
  {
    num: '04',
    title: 'Folyamatos fejlesztés',
    desc: 'Az atlétikai tudás és módszertan folyamatosan fejlődik. Tartalmainkat rendszeresen frissítjük a legújabb szakmai eredmények alapján.',
  },
]

export default function RolunkPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
    consent: false,
  })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validate = () => {
    const newErrors: Record<string, string> = {}
    if (!formState.name.trim()) newErrors.name = 'A név megadása kötelező.'
    if (!formState.email.trim()) {
      newErrors.email = 'Az e-mail cím megadása kötelező.'
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      newErrors.email = 'Érvényes e-mail címet adjon meg.'
    }
    if (!formState.message.trim()) newErrors.message = 'Az üzenet megadása kötelező.'
    if (!formState.consent) newErrors.consent = 'Az adatkezelési hozzájárulás szükséges.'
    return newErrors
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newErrors = validate()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    setErrors({})
    setSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState((prev) => ({ ...prev, consent: e.target.checked }))
    setErrors((prev) => ({ ...prev, consent: '' }))
  }

  return (
    <div className="bg-background min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 border-b border-hu-line overflow-hidden">
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="absolute left-0 right-0 h-px bg-foreground/5"
              style={{ top: `${15 + i * 18}%` }}
            />
          ))}
        </div>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-2 h-2 bg-hu-red" aria-hidden="true" />
            <p className="font-display font-600 text-xs tracking-[0.3em] uppercase text-muted-foreground">Ismerjen meg minket</p>
          </div>
          <h1 className="font-display font-900 text-[clamp(3.5rem,10vw,9rem)] leading-[0.9] tracking-tight uppercase text-foreground mb-8">
            RÓLUNK<br />
            <span className="text-hu-red">KÜLDETÉS</span>
          </h1>
          <p className="font-sans text-lg text-muted-foreground leading-relaxed max-w-2xl">
            A Hungary Athletics Magyarország átfogó könnyűatlétikai információs portálja. Célunk, hogy a legjobb és legmegbízhatóbb atlétikai tudásbázist nyújtsuk magyar nyelven.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 lg:py-32" aria-labelledby="mission-heading">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-hu-line">
            <div className="p-10 lg:p-16 border-b lg:border-b-0 lg:border-r border-hu-line">
              <h2 id="mission-heading" className="font-display font-900 text-[clamp(2rem,5vw,4rem)] leading-[0.9] tracking-tight uppercase text-foreground mb-8">
                MI A<br />
                <span className="text-hu-red">CÉLUNK</span>
              </h2>
              <div className="space-y-5">
                <p className="font-sans text-base text-muted-foreground leading-relaxed">
                  A Hungary Athletics portál célja, hogy minden Magyarországon könnyűatlétika iránt érdeklődő ember számára hiteles, átfogó és hozzáférhető információforrást biztosítson. Legyen szó technikáról, történelemről, szabályokról vagy edzéstippekről.
                </p>
                <p className="font-sans text-base text-muted-foreground leading-relaxed">
                  Oldalunkon kizárólag általános és tudományosan megalapozott információkat közlünk. Nem képviselünk semmilyen konkrét szervezetet, klubot vagy kereskedelmi érdekeltséget. Célunk a tiszta, tárgyilagos atlétikai tudás közvetítése.
                </p>
                <p className="font-sans text-base text-muted-foreground leading-relaxed">
                  Hiszünk abban, hogy a könnyűatlétika nemcsak sport, hanem életforma. A rendszeres mozgás, a technika elsajátítása és a sportági hagyományok megismerése gazdagítja az emberek életét.
                </p>
              </div>
            </div>

            <div className="p-10 lg:p-16">
              <h2 className="font-display font-900 text-[clamp(2rem,5vw,4rem)] leading-[0.9] tracking-tight uppercase text-foreground mb-8">
                MIT<br />
                <span className="text-hu-red">KÍNÁLUNK</span>
              </h2>
              <ul className="space-y-5">
                {[
                  'Versenyszám-specifikus technikai útmutatók',
                  'Részletes edzéstervek kezdőktől haladókig',
                  'A magyar atlétika teljes történelmi áttekintése',
                  'Versenyszabályok és diszciplínák bemutatása',
                  'Atlétikai felszerelések és eszközök ismertetése',
                  'Rendszeresen frissített cikkek és elemzések',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-4 font-sans text-sm text-muted-foreground leading-relaxed">
                    <div className="w-5 h-px bg-hu-red mt-2.5 shrink-0" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28 bg-card border-t border-hu-line" aria-labelledby="values-heading">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <h2 id="values-heading" className="font-display font-900 text-[clamp(2rem,5vw,4rem)] uppercase tracking-tight text-foreground mb-16">
            ÉRTÉKEINK<br />
            <span className="text-foreground/30">ALAPELVEINK</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 border border-hu-line">
            {values.map((val, idx) => (
              <div
                key={val.num}
                className={`p-8 lg:p-10 ${idx % 2 === 0 ? 'border-b sm:border-b-0 sm:border-r border-hu-line' : ''} ${idx < 2 ? 'border-b border-hu-line' : ''}`}
              >
                <span className="font-display font-900 text-5xl text-foreground/8 block mb-4">{val.num}</span>
                <h3 className="font-display font-800 text-xl uppercase tracking-tight text-foreground mb-4">{val.title}</h3>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section className="py-20 lg:py-32 border-t border-hu-line" aria-labelledby="contact-heading">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_600px] gap-16 lg:gap-24">
            {/* Left */}
            <div>
              <p className="font-display font-700 text-xs tracking-widest uppercase text-hu-red mb-4">Kapcsolat</p>
              <h2 id="contact-heading" className="font-display font-900 text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.9] tracking-tight uppercase text-foreground mb-8">
                ÍRJON<br />
                <span className="text-foreground/30">NEKÜNK</span>
              </h2>
              <p className="font-sans text-base text-muted-foreground leading-relaxed mb-8">
                Kérdése van az atlétikával kapcsolatban? Javítani szeretne egy információn? Szívesen vesszük megkereséseit.
              </p>
              <div className="flex items-center gap-3">
                <a
                  href="mailto:info@hungaryathletics.com"
                  className="font-sans text-sm text-hu-red hover:text-foreground transition-colors tracking-wide"
                >
                  info@hungaryathletics.com
                </a>
              </div>
            </div>

            {/* Form */}
            <div>
              <form onSubmit={handleSubmit} noValidate aria-label="Kapcsolatfelvételi űrlap">
                <div className="space-y-0 border border-hu-line">
                  {/* Name */}
                  <div className="border-b border-hu-line">
                    <label htmlFor="name" className="block font-display font-600 text-xs tracking-widest uppercase text-muted-foreground px-6 pt-5 pb-2">
                      Neve <span className="text-hu-red" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      value={formState.name}
                      onChange={handleChange}
                      aria-required="true"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                      className="w-full bg-transparent px-6 pb-5 font-sans text-base text-foreground placeholder:text-muted-foreground/40 outline-none"
                      placeholder="Teljes neve"
                    />
                    {errors.name && (
                      <p id="name-error" role="alert" className="px-6 pb-4 font-sans text-xs text-hu-red">{errors.name}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="border-b border-hu-line">
                    <label htmlFor="email" className="block font-display font-600 text-xs tracking-widest uppercase text-muted-foreground px-6 pt-5 pb-2">
                      E-mail <span className="text-hu-red" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={formState.email}
                      onChange={handleChange}
                      aria-required="true"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                      className="w-full bg-transparent px-6 pb-5 font-sans text-base text-foreground placeholder:text-muted-foreground/40 outline-none"
                      placeholder="pelda@email.com"
                    />
                    {errors.email && (
                      <p id="email-error" role="alert" className="px-6 pb-4 font-sans text-xs text-hu-red">{errors.email}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div className="border-b border-hu-line">
                    <label htmlFor="message" className="block font-display font-600 text-xs tracking-widest uppercase text-muted-foreground px-6 pt-5 pb-2">
                      Üzenet <span className="text-hu-red" aria-hidden="true">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formState.message}
                      onChange={handleChange}
                      aria-required="true"
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                      className="w-full bg-transparent px-6 pb-5 font-sans text-base text-foreground placeholder:text-muted-foreground/40 outline-none resize-none"
                      placeholder="Az üzenete..."
                    />
                    {errors.message && (
                      <p id="message-error" role="alert" className="px-6 pb-4 font-sans text-xs text-hu-red">{errors.message}</p>
                    )}
                  </div>

                  {/* Consent checkbox */}
                  <div className="p-6">
                    <label className="flex items-start gap-4 cursor-pointer group">
                      <div className="relative mt-0.5 shrink-0">
                        <input
                          type="checkbox"
                          name="consent"
                          id="consent"
                          checked={formState.consent}
                          onChange={handleCheckbox}
                          className="sr-only peer"
                          aria-required="true"
                          aria-invalid={!!errors.consent}
                          aria-describedby={errors.consent ? 'consent-error' : undefined}
                        />
                        <div className="w-5 h-5 border border-hu-line peer-checked:bg-hu-red peer-checked:border-hu-red transition-colors" aria-hidden="true" />
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 peer-checked:opacity-100" aria-hidden="true">
                          <svg width="10" height="8" viewBox="0 0 10 8" fill="none" aria-hidden="true">
                            <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                      </div>
                      <span className="font-sans text-sm text-muted-foreground leading-relaxed">
                        Elfogadom, hogy az adataimat a megkeresés megválaszolása céljából kezeljék az{' '}
                        <a href="/adatvedelmi-szabalyzat" className="text-foreground underline underline-offset-2 hover:text-hu-red transition-colors">
                          adatvédelmi szabályzat
                        </a>
                        {' '}szerint.
                      </span>
                    </label>
                    {errors.consent && (
                      <p id="consent-error" role="alert" className="mt-2 font-sans text-xs text-hu-red">{errors.consent}</p>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full mt-0 font-display font-700 text-sm tracking-widest uppercase py-4 bg-hu-red text-foreground hover:bg-foreground hover:text-background transition-colors duration-300"
                >
                  Üzenet küldése
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Success popup */}
      {submitted && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="popup-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm px-6"
        >
          <div className="bg-card border border-hu-line max-w-md w-full p-10 relative">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex gap-[2px]" aria-hidden="true">
                <div className="w-3 h-3 bg-hu-red" />
                <div className="w-3 h-3 bg-foreground" />
                <div className="w-3 h-3 bg-hu-green" />
              </div>
            </div>
            <h2 id="popup-title" className="font-display font-900 text-3xl uppercase tracking-tight text-foreground mb-4">
              ÜZENET<br />
              <span className="text-hu-red">ELKÜLDVE</span>
            </h2>
            <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-8">
              Köszönjük megkeresését. Hamarosan válaszolunk az info@hungaryathletics.com címről.
            </p>
            <button
              onClick={() => {
                setSubmitted(false)
                setFormState({ name: '', email: '', message: '', consent: false })
              }}
              className="font-display font-700 text-xs tracking-widest uppercase px-6 py-3 bg-hu-red text-foreground hover:bg-foreground hover:text-background transition-colors"
            >
              Bezárás
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

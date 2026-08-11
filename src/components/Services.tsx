import {
  Home as HomeIcon,
  Building2,
  Factory,
  HardHat,
  Boxes,
  Sprout,
  Building,
  Cog,
  type LucideIcon,
} from 'lucide-react'

type Service = {
  icon: LucideIcon
  title: string
  desc: string
}

const services: Service[] = [
  {
    icon: HomeIcon,
    title: 'Sprzątanie domów',
    desc: 'Regularne porządki i sprzątanie generalne mieszkań oraz domów jednorodzinnych.',
  },
  {
    icon: Building2,
    title: 'Sprzątanie biur',
    desc: 'Utrzymanie czystości w biurach i przestrzeniach coworkingowych, poza godzinami pracy.',
  },
  {
    icon: Factory,
    title: 'Sprzątanie fabryk i hal',
    desc: 'Powierzchnie przemysłowe i magazynowe — także w cyklu ciągłym.',
  },
  {
    icon: HardHat,
    title: 'Sprzątanie po budowie',
    desc: 'Usuwanie pyłu budowlanego, gruzu i pozostałości po remoncie — pod klucz.',
  },
  {
    icon: Boxes,
    title: 'Piwnice i strychy',
    desc: 'Porządkowanie i czyszczenie zaniedbanych, trudno dostępnych pomieszczeń.',
  },
  {
    icon: Sprout,
    title: 'Tereny zielone',
    desc: 'Pielęgnacja zieleni wokół budynków — koszenie, przycinanie, porządki sezonowe.',
  },
  {
    icon: Building,
    title: 'Wspólnoty mieszkaniowe',
    desc: 'Stała obsługa klatek schodowych, korytarzy i części wspólnych budynku.',
  },
  {
    icon: Cog,
    title: 'Czyszczenie maszyn',
    desc: 'Odtłuszczanie i czyszczenie maszyn oraz urządzeń produkcyjnych.',
  },
]

export default function Services() {
  return (
    <section id="oferta" className="bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
          Oferta
        </p>
        <h2 className="mt-3 max-w-xl font-display text-3xl font-semibold tracking-tight text-teal-950 sm:text-4xl">
          Jedna ekipa, osiem rodzajów porządku
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-2xl border border-teal-950/8 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-950 text-cyan-300 transition-colors group-hover:bg-mustard-400 group-hover:text-teal-950">
                <Icon className="h-5 w-5" strokeWidth={2} />
              </div>
              <h3 className="mt-4 font-display text-base font-semibold text-teal-950">
                {title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink/65">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

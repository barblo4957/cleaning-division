import { Clock3, Layers, ShieldCheck, Zap } from 'lucide-react'

const points = [
  {
    icon: Clock3,
    title: 'Dostępni 24/7',
    desc: 'Nagła awaria, zalanie albo zmiana terminu — odbieramy telefon o każdej porze, także w weekendy.',
  },
  {
    icon: Layers,
    title: 'Pełen zakres w jednym miejscu',
    desc: 'Dom, biuro, hala produkcyjna czy klatka wspólnoty — nie musisz szukać osobnej ekipy do każdego miejsca.',
  },
  {
    icon: ShieldCheck,
    title: 'Sprawdzona ekipa',
    desc: 'Stali, przeszkoleni pracownicy i stałe standardy sprzątania — niezależnie od tego, kto danego dnia przyjeżdża.',
  },
  {
    icon: Zap,
    title: 'Szybka reakcja',
    desc: 'Wycena i termin ustalane od ręki, telefonicznie — bez tygodni oczekiwania na odpowiedź.',
  },
]

export default function WhyUs() {
  return (
    <section id="dlaczego-nas" className="bg-teal-950 py-20 text-paper sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
          Dlaczego my
        </p>
        <h2 className="mt-3 max-w-xl font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          Firma, do której dzwoni się bez wahania
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2">
          {points.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex gap-4 border-t border-paper/10 pt-6">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-paper/8 text-mustard-400">
                <Icon className="h-5 w-5" strokeWidth={2} />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold">{title}</h3>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-cyan-100/70">
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

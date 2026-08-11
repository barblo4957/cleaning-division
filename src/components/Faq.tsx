import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'Jak szybko możecie przyjechać?',
    a: 'W większości przypadków ustalamy termin telefonicznie tego samego dnia. Przy awariach i nagłych zleceniach staramy się dotrzeć jak najszybciej — jesteśmy dostępni całą dobę.',
  },
  {
    q: 'Jak wygląda wycena?',
    a: 'Wycenę ustalamy telefonicznie na podstawie metrażu, zakresu prac i stanu obiektu. W razie potrzeby umawiamy się na oględziny przed podaniem ostatecznej ceny.',
  },
  {
    q: 'Czy przyjeżdżacie z własnym sprzętem i środkami czystości?',
    a: 'Tak, ekipa przyjeżdża w pełni wyposażona — profesjonalny sprzęt i środki czyszczące dobrane do rodzaju powierzchni wliczone są w usługę.',
  },
  {
    q: 'Jaki obszar obsługujecie?',
    a: 'Działamy w Rybniku i okolicach. Przy większych zleceniach (hale, obiekty firmowe) pytaj o dojazd do innych lokalizacji na Śląsku.',
  },
  {
    q: 'Czy podpisujecie stałe umowy dla firm i wspólnot?',
    a: 'Tak, oferujemy stałą, cykliczną obsługę biur, hal produkcyjnych i wspólnot mieszkaniowych na podstawie umowy dopasowanej do częstotliwości sprzątania.',
  },
]

export default function Faq() {
  return (
    <section id="faq" className="bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
          FAQ
        </p>
        <h2 className="mt-3 max-w-xl font-display text-3xl font-semibold tracking-tight text-teal-950 sm:text-4xl">
          Najczęstsze pytania
        </h2>

        <div className="mt-10 space-y-3">
          {faqs.map(({ q, a }) => (
            <details
              key={q}
              className="group rounded-2xl border border-teal-950/8 bg-white px-5 py-4 open:shadow-sm sm:px-6"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-base font-semibold text-teal-950 marker:content-none">
                {q}
                <ChevronDown
                  className="h-5 w-5 shrink-0 text-teal-700 transition-transform group-open:rotate-180"
                  strokeWidth={2}
                />
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-ink/65">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

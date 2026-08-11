import { Phone, Mail, MapPin, Clock3 } from 'lucide-react'

export default function Contact() {
  return (
    <section id="kontakt" className="bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
          Kontakt
        </p>
        <h2 className="mt-3 max-w-xl font-display text-3xl font-semibold tracking-tight text-teal-950 sm:text-4xl">
          Umówmy sprzątanie
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-5">
          {/* Karta kontaktowa */}
          <div className="rounded-3xl bg-teal-950 p-8 text-paper sm:p-10 lg:col-span-2">
            <ul className="space-y-6">
              <li className="flex items-start gap-3.5">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-mustard-400" strokeWidth={2} />
                <div>
                  <p className="text-xs uppercase tracking-wide text-cyan-200/70">Telefon</p>
                  <a href="tel:505794661" className="text-lg font-semibold hover:text-cyan-200">
                    505 794 661
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3.5">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-mustard-400" strokeWidth={2} />
                <div>
                  <p className="text-xs uppercase tracking-wide text-cyan-200/70">E-mail</p>
                  <a
                    href="mailto:cleaning.division.info@gmail.com"
                    className="break-all text-base font-medium hover:text-cyan-200 sm:text-lg"
                  >
                    cleaning.division.info@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3.5">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-mustard-400" strokeWidth={2} />
                <div>
                  <p className="text-xs uppercase tracking-wide text-cyan-200/70">Adres</p>
                  <a
                    href="https://maps.app.goo.gl/72j31APGPSZcnwff6"
                    target="_blank"
                    rel="noreferrer"
                    className="text-lg font-medium hover:text-cyan-200"
                  >
                    ul. Strzelecka 40, Rybnik
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3.5">
                <Clock3 className="mt-0.5 h-5 w-5 shrink-0 text-mustard-400" strokeWidth={2} />
                <div>
                  <p className="text-xs uppercase tracking-wide text-cyan-200/70">Godziny</p>
                  <p className="text-lg font-medium">Czynne całą dobę, 7 dni w tygodniu</p>
                </div>
              </li>
            </ul>

            <a
              href="tel:505794661"
              className="mt-9 flex w-full items-center justify-center gap-2 rounded-full bg-mustard-400 px-6 py-4 text-base font-semibold text-teal-950 transition-transform active:scale-[0.98] sm:hover:-translate-y-0.5"
            >
              <Phone className="h-5 w-5" strokeWidth={2.5} />
              Zadzwoń teraz
            </a>
          </div>

          <div className="group relative min-h-[280px] overflow-hidden rounded-3xl border border-teal-950/10 lg:col-span-3">
            <iframe
              title="Cleaning Division na mapie Google — ul. Strzelecka 40, Rybnik"
              src="https://www.google.com/maps?q=ul.+Strzelecka+40,+Rybnik&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full min-h-[280px] w-full grayscale-[15%]"
            />
            <a
              href="https://maps.app.goo.gl/72j31APGPSZcnwff6"
              target="_blank"
              rel="noreferrer"
              className="absolute bottom-4 right-4 inline-flex items-center gap-1.5 rounded-full bg-teal-950 px-4 py-2 text-xs font-semibold text-paper shadow-lg transition-transform hover:-translate-y-0.5"
            >
              <MapPin className="h-3.5 w-3.5 text-mustard-400" strokeWidth={2} />
              Otwórz w Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

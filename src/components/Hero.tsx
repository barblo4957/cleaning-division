import { Phone, MessageCircle, Clock3 } from 'lucide-react'
import WaveDivider from './WaveDivider'
import heroPhoto from '../assets/cleaning - hero.jpg'

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-teal-950 pt-28 pb-0 text-paper sm:pt-36"
    >
      {/* Ambient swirl echoing the logo's "C" shape, kept subtle */}
      <div
        aria-hidden="true"
        className="drift-slow pointer-events-none absolute -right-24 -top-24 h-[26rem] w-[26rem] rounded-full opacity-20 blur-3xl sm:h-[34rem] sm:w-[34rem]"
        style={{
          background:
            'conic-gradient(from 200deg, var(--color-lime-500), var(--color-cyan-400), var(--color-teal-700), transparent 70%)',
        }}
      />

      <div className="relative mx-auto grid max-w-6xl gap-10 px-5 pb-20 sm:px-8 sm:pb-28 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-12">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200/25 bg-paper/5 px-3.5 py-1.5 text-xs font-medium tracking-wide text-cyan-200 sm:text-sm">
            <Clock3 className="h-3.5 w-3.5" />
            Dostępni 24 godziny na dobę · Rybnik i okolice
          </div>

          <h1 className="relative mt-6 max-w-3xl font-display text-4xl font-semibold leading-[1.08] tracking-tight sm:text-6xl">
            <span className="relative inline-block overflow-hidden">
              <span
                className="wipe-blade absolute inset-0 bg-gradient-to-r from-mustard-400 via-cyan-400 to-teal-700"
                style={{ transformOrigin: 'right center' }}
              />
              Sprzątamy tak,
            </span>
            <br />
            żeby było{' '}
            <span className="text-mustard-400">naprawdę czysto.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-cyan-100/80 sm:text-lg">
            Cleaning Division to kompleksowe sprzątanie domów, biur, hal
            produkcyjnych i wspólnot mieszkaniowych — jedna ekipa, jeden numer
            telefonu, zero kombinowania.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="tel:505794661"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-mustard-400 px-6 py-4 text-base font-semibold text-teal-950 shadow-lg shadow-mustard-500/20 transition-transform active:scale-[0.98] sm:hover:-translate-y-0.5"
            >
              <Phone className="h-5 w-5" strokeWidth={2.5} />
              Zadzwoń: 505 794 661
            </a>
            <a
              href="https://wa.me/48505794661"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-paper/25 bg-paper/5 px-6 py-4 text-base font-semibold text-paper transition-colors hover:bg-paper/10"
            >
              <MessageCircle className="h-5 w-5" strokeWidth={2.5} />
              Napisz na WhatsApp
            </a>
          </div>
        </div>

        <div className="relative mx-auto mt-10 aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl lg:mx-0 lg:mt-0 lg:max-w-none">
          <img
            src={heroPhoto}
            alt="Ekipa Cleaning Division przy pracy w Rybniku"
            className="h-full w-full object-cover"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                'linear-gradient(to top, var(--color-teal-950) 0%, transparent 35%), linear-gradient(to right, var(--color-teal-950) 0%, transparent 30%)',
            }}
          />
        </div>
      </div>

      <WaveDivider />
    </section>
  )
}

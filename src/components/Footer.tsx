import logo from '../assets/logo.jpg'

const navLinks = [
  { href: '#oferta', label: 'Oferta' },
  { href: '#realizacje', label: 'Realizacje' },
  { href: '#dlaczego-nas', label: 'Dlaczego my' },
  { href: '#faq', label: 'FAQ' },
  { href: '#kontakt', label: 'Kontakt' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-teal-950/10 bg-paper py-10">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col items-center gap-6 border-b border-teal-950/10 pb-8 sm:flex-row sm:justify-between">
          <div className="flex items-center gap-2.5">
            <img
              src={logo}
              alt="Cleaning Division"
              loading="lazy"
              className="h-8 w-8 rounded-full object-cover"
            />
            <span className="font-display text-sm font-semibold text-teal-950">
              Cleaning Division
            </span>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="text-sm font-medium text-ink/60 transition-colors hover:text-teal-950"
              >
                {label}
              </a>
            ))}
          </nav>

          <a
            href="https://www.facebook.com/CleaningDivision"
            target="_blank"
            rel="noreferrer"
            aria-label="Cleaning Division na Facebooku"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-teal-950 text-paper transition-colors hover:bg-teal-700"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M22 12.06C22 6.51 17.52 2 12 2S2 6.51 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.89h2.78l-.44 2.91h-2.34V22c4.78-.76 8.44-4.92 8.44-9.94Z" />
            </svg>
          </a>
        </div>

        <div className="mt-6 flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="text-xs text-ink/70">
            <a
              href="https://maps.app.goo.gl/72j31APGPSZcnwff6"
              target="_blank"
              rel="noreferrer"
              className="hover:text-ink/80"
            >
              ul. Strzelecka 40, Rybnik
            </a>{' '}
            · 505 794 661 · cleaning.division.info@gmail.com
          </p>

          <p className="text-xs text-ink/70">© {year} Cleaning Division</p>
        </div>
      </div>
    </footer>
  )
}

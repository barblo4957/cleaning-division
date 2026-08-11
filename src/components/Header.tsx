import { useState } from 'react'
import { Menu, Phone, X } from 'lucide-react'
import logo from '../assets/logo.jpg'

const navLinks = [
  { href: '#oferta', label: 'Oferta' },
  { href: '#realizacje', label: 'Realizacje' },
  { href: '#dlaczego-nas', label: 'Dlaczego my' },
  { href: '#faq', label: 'FAQ' },
  { href: '#kontakt', label: 'Kontakt' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-teal-950/10 bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:px-8">
        <a href="#top" className="flex items-center gap-2.5">
          <img
            src={logo}
            alt="Cleaning Division"
            className="h-11 w-11 rounded-full object-cover ring-1 ring-teal-900/10 sm:h-12 sm:w-12"
          />
          <span className="font-display text-[15px] font-semibold tracking-tight text-teal-950 sm:text-lg">
            Cleaning Division
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="text-sm font-medium text-ink/70 transition-colors hover:text-teal-950"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="tel:505794661"
            className="hidden items-center gap-2 rounded-full bg-teal-950 px-4 py-2.5 text-sm font-semibold text-paper transition-colors hover:bg-teal-700 lg:inline-flex"
          >
            <Phone className="h-4 w-4" strokeWidth={2.5} />
            <span>505 794 661</span>
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Zamknij menu' : 'Otwórz menu'}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-teal-950 transition-colors hover:bg-teal-950/8 lg:hidden"
          >
            {menuOpen ? (
              <X className="h-5 w-5" strokeWidth={2.25} />
            ) : (
              <Menu className="h-5 w-5" strokeWidth={2.25} />
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="border-t border-teal-950/10 bg-paper px-5 py-3 sm:px-8 lg:hidden">
          <ul className="flex flex-col divide-y divide-teal-950/8">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-3 text-base font-medium text-teal-950"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="tel:505794661"
            onClick={() => setMenuOpen(false)}
            className="mt-4 flex items-center justify-center gap-2 rounded-full bg-teal-950 px-5 py-3 text-sm font-semibold text-paper transition-colors hover:bg-teal-700"
          >
            <Phone className="h-4 w-4" strokeWidth={2.5} />
            Zadzwoń: 505 794 661
          </a>
        </nav>
      )}
    </header>
  )
}

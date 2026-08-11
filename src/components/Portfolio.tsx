import { Camera } from 'lucide-react'
import realizacja1 from '../assets/realizacja-1.jpg'
import realizacja2 from '../assets/realizacja-2.jpg'

const photos = [
  {
    src: realizacja1,
    alt: 'Oznakowany samochód serwisowy Cleaning Division na osiedlu w Rybniku',
  },
  {
    src: realizacja2,
    alt: 'Logo i dane kontaktowe Cleaning Division na samochodzie firmowym',
  },
]
const placeholderCount = 4

export default function Portfolio() {
  return (
    <section id="realizacje" className="bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
          Realizacje
        </p>
        <h2 className="mt-3 max-w-xl font-display text-3xl font-semibold tracking-tight text-teal-950 sm:text-4xl">
          Zobacz nas w akcji
        </h2>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {photos.map(({ src, alt }, i) => (
            <div
              key={i}
              className="aspect-square overflow-hidden rounded-2xl border border-teal-950/8 bg-white shadow-sm"
            >
              <img
                src={src}
                alt={alt}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          ))}

          {Array.from({ length: placeholderCount }).map((_, i) => (
            <div
              key={`placeholder-${i}`}
              className="flex aspect-square flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-teal-950/20 bg-teal-950/[0.03] text-center"
            >
              <Camera className="h-6 w-6 text-teal-950/30" strokeWidth={1.75} />
              <p className="max-w-[8rem] text-xs text-ink/40">
                Wkrótce więcej zdjęć
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

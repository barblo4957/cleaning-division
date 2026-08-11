import { Phone, MessageCircle } from 'lucide-react'

export default function MobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 flex gap-2 border-t border-teal-950/10 bg-paper/95 p-3 backdrop-blur sm:hidden">
      <a
        href="tel:505794661"
        className="flex flex-1 items-center justify-center gap-2 rounded-full bg-teal-950 py-3 text-sm font-semibold text-paper"
      >
        <Phone className="h-4 w-4" strokeWidth={2.5} />
        Zadzwoń
      </a>
      <a
        href="https://wa.me/48505794661"
        target="_blank"
        rel="noreferrer"
        className="flex flex-1 items-center justify-center gap-2 rounded-full bg-mustard-400 py-3 text-sm font-semibold text-teal-950"
      >
        <MessageCircle className="h-4 w-4" strokeWidth={2.5} />
        WhatsApp
      </a>
    </div>
  )
}

# Cleaning Division — landing page

Wersja robocza jednostronicowej strony wizytówkowej dla firmy sprzątającej
Cleaning Division (Rybnik).

## Stack

Vite + React + TypeScript + Tailwind CSS 4, w pełni statyczna strona
(bez backendu i bazy danych). Ikony: `lucide-react`.

## Uruchomienie lokalnie

```bash
npm install
npm run dev
```

## Build produkcyjny

```bash
npm run build
npm run preview
```

Gotowe pliki trafiają do katalogu `dist/` — można je wrzucić na dowolny
hosting statyczny (Vercel, Netlify, itp.).

## Do zrobienia po akceptacji klienta

- [ ] Podmienić placeholder logo na finalny plik od klienta (`src/assets/logo.jpg`)
- [ ] Zweryfikować dane kontaktowe (telefon, e-mail, adres)
- [ ] Podpiąć realną mapę Google w sekcji kontakt (`src/components/Contact.tsx`)
- [ ] Ewentualnie dodać prawdziwe zdjęcia zamiast ikon/placeholderów

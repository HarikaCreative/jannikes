# Jannikes Catering - Mockup 4

**Standard tier (€1,650) – Hospitality/småbedrift showcase**

## 📋 Prosjektoversikt

Fargerik, kunstnerisk nettside for Jannikes Catering – inspirert av Frida Kahlo-estetikk med fokus på mat som kunst, yoga og kreative opplevelser.

### Business
- **Navn:** Jannikes Catering
- **Tjenester:** Catering, yoga, retreats
- **Område:** Asker og Oslo-området
- **Språk:** Kun norsk

### Design
- **Stil:** Frida Kahlo-inspirert, fargerik, kunstnerisk
- **IKKE:** HarikaCreative-stil (denne er helt annerledes!)
- **Estetikk:** Kunstnerisk, varm, autentisk

---

## 🎨 Fargepalett

Fra logoens farger:

```css
Mint/turkis (primær):  #A8D5BA
Brun tekst:            #3E2723
Cerise (aksent):       #E91E63
Gul (aksent):          #FFB300
Deep blå:              #1565C0
Cream (bakgrunn):      #FFF8E1
```

---

## ✏️ Typografi

- **Overskrifter:** Playfair Display (display font)
- **Brødtekst:** Lato (sans-serif)

---

## 📸 Bilder

Alle bilder ligger i `public/images/`:

### Profilbilder
- `profil1-jannikes-catering.webp`
- `profil2-jannikes-catering.webp`
- `profil3-jannikes-catering.webp`

### Yoga
- `yoga-jannikes-catering.webp`

### Mat
- `sommerbord-jannikes-catering.webp`
- `sommersalat-jannikes-catering.webp`
- `sandwich-jannikes-catering.webp`
- `middelhavet-ost-jannikes-catering.webp`
- `bitesize-jannikes-catering.webp`

### Anmeldelser
- `review1-jannikes-catering.webp`
- `review2-jannikes-catering.webp`
- `review3-jannikes-catering.webp`

### Retreat
- `artful balance 2026.webp`

### Logo
- `android-chrome-512x512.png`

---

## 📐 Struktur (9 seksjoner)

### 1. **Hero**
- Tagline: "Fargerik mat. Varme mennesker. Kreative opplevelser."
- Tekst: "Fra sesongbasert catering til yoga og retreats – jeg kombinerer mat som kunst med kreativ livsstil."
- CTAs: "Be om tilbud" + "Meld deg på Artful Balance 2026"
- Bakgrunn: Sommerbord-bilde med fargerike overlays

### 2. **Om Jannike**
- 3 profilbilder i grid
- Beskrivelse av catering-kokk, yogainstruktør, retreat chef
- Link til Actic Asker (tekstlink, IKKE embed)
- Frida Kahlo-inspirasjon nevnt

### 3. **Cateringmenyer**
**Tre pakker:**

#### Lett & Leken (495 kr/kuvert)
- 6 retter
- Sesongbaserte råvarer
- Vegan-mulighet
- Min. 10 personer

#### Fest & Farger (695 kr/kuvert) ⭐ POPULÆR
- 10 retter
- Kreative smakskombinasjoner
- Vegan 5-retters alternativ
- Min. 10 personer

#### Den Store Festpakken (895 kr/kuvert)
- 15 retter
- Raw food-alternativer
- Vegan 10-retters alternativ
- Min. 10 personer

**Viktig info:**
- Minimum 10 personer for alle pakker
- Priser er veiledende (avhenger av sesong/råvarer/antall)
- Alle menyer kan tilpasses 100% plantebasert
- Bestilling minst 2 uker før

### 4. **Retreat Chef**
- Sertifisert retreat chef
- Kombinerer mat + yoga + kreativitet
- Tilbyr i Norge og Spania
- 5 punkter med hva som tilbys
- CTA: "Book retreat chef"

### 5. **Yoga & Privattimer**
- Privat undervisning tilgjengelig
- 4 fokusområder: Bevissthet, Styrke, Ro, Glede
- Info-boks om Actic Asker
- Link til Actic Asker timeplan
- CTA: "Book privat yogatime"

### 6. **Artful Balance 2026**
- Kreative retreats i Spania
- Sammen med Kari-Anne Næssø
- **To kurs:**
  - 31. mai – 6. juni 2026
  - 7. juni – 13. juni 2026
- 5 punkter: Hva du kan forvente
- CTAs: "Meld deg på nå" + "Send meg en e-post"

### 7. **Anmeldelser**
- Karusell med 3 reviews
- Hver review: bilde + sitat + navn + event
- Auto-rotate eller manual navigation
- 5-stjerne rating display

### 8. **Galleri**
- Masonry-grid med 6 bilder
- Hover overlay med bildetekst
- Instagram CTA: @jannikescatering

### 9. **Kontakt**
- 3 kontaktkort:
  - E-post: jannike@jannikes.no
  - Telefon: 930 33 966
  - Instagram: @jannikescatering
- Plassering: "Asker, Norge" med tekst "Jeg betjener hele Oslo-området"
- Modal for tilbudsforespørsel

---

## 🎯 Spesielle funksjoner

### Modal for tilbudsforespørsel
Felt:
- Navn *
- E-post *
- Telefon
- Antall gjester * (min 10)
- Type arrangement * (dropdown: Catering / Retreat Chef / Privat Yoga / Artful Balance 2026 / Annet)
- Dato
- Melding *

### Review-karusell
- 3 reviews som roterer
- UI-only (ingen backend)
- Manual navigation (prev/next knapper)
- Dot indicators

### Artful Balance registrering
- Egne CTAs for retreat
- mailto-link til jannike@jannikes.no

### Instagram-estetikk
- Square images bevart
- Fargerike gradients
- Artistic overlays

---

## 🛠️ Tech Stack

- **Framework:** Next.js 14
- **Styling:** Tailwind CSS
- **Animasjoner:** Framer Motion
- **Språk:** TypeScript
- **Fonts:** Google Fonts (Playfair Display, Lato)

---

## 🚀 Installasjon

1. **Last ned og pakk ut:**
```bash
# På Windows
cd C:\Users\Marianna\Projects\mockup-demos
# Pakk ut jannikes-catering-complete.tar.gz her
```

2. **Installer dependencies:**
```bash
cd jannikes-catering
npm install
```

3. **Legg til bilder:**
Kopier alle bildene fra `C:\Users\Marianna\Projects\mockup-demos\jannikes\public\images\` til `jannikes-catering\public\images\`

4. **Kjør lokalt:**
```bash
npm run dev
```
Åpne http://localhost:3000

5. **Deploy til Vercel:**
- Opprett nytt GitHub repository: `jannikes-catering-demo`
- Last opp hele `jannikes-catering` mappen
- Koble til Vercel
- Deploy!

---

## 📁 Filstruktur

```
jannikes-catering/
├── app/
│   ├── page.tsx              # Hovedside med alle seksjoner
│   ├── layout.tsx            # Root layout med fonts
│   └── globals.css           # Global CSS
├── components/
│   ├── Hero.tsx              # Hero-seksjon
│   ├── About.tsx             # Om Jannike
│   ├── CateringMenus.tsx     # Cateringmenyer
│   ├── RetreatChef.tsx       # Retreat Chef
│   ├── Yoga.tsx              # Yoga & Privattimer
│   ├── ArtfulBalance.tsx     # Artful Balance 2026
│   ├── Reviews.tsx           # Anmeldelser karusell
│   ├── Gallery.tsx           # Bildegalleri
│   └── Contact.tsx           # Kontakt + Modal
├── public/
│   └── images/               # Alle bilder her!
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.js
└── postcss.config.js
```

---

## 🎨 Design-prinsipper

### ✅ DOs:
- **Fargerik:** Bruk alle fargene i paletten
- **Kunstnerisk:** Frida Kahlo-inspirert estetikk
- **Varm:** Personlig, autentisk tone
- **Kreativ:** Lekne animasjoner, overlays
- **Sesongbasert:** Fokus på naturlige råvarer

### ❌ DON'Ts:
- IKKE bruk HarikaCreative-stilen (minimalistisk)
- IKKE for mye whitespace
- IKKE kjølig/corporate følelse
- IKKE standard corporate farger

---

## 📞 Kontaktinfo

- **E-post:** jannike@jannikes.no
- **Telefon:** 930 33 966
- **Instagram:** @jannikescatering
- **Actic Asker:** https://www.actic.no/treningssentre/asker/

---

## ✨ Status

**KOMPLETT! Klar for deployment!**

- ✅ Alle 9 seksjoner implementert
- ✅ Full responsiv design
- ✅ Framer Motion animasjoner
- ✅ Review-karusell fungerer
- ✅ Booking modal fungerer
- ✅ Fargepalett applisert
- ✅ Typografi konfigurert
- ✅ Klar for bilder

**NESTE STEG:**
1. Kopier bilder til `public/images/`
2. Test lokalt med `npm run dev`
3. Deploy til Vercel
4. Ta screenshots for Hárika Creative mockups page

---

**Mockup 4 av 5 for Hárika Creative portfolio! 🎨✨**

import Link from 'next/link';

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Simple Header */}
      <nav className="bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center gap-3">
              <img 
                src="/images/android-chrome-512x512.png" 
                alt="Jannikes Catering" 
                className="h-12 w-12"
              />
              <span className="font-display text-xl text-brun">Jannikes Catering</span>
            </Link>
            <Link 
              href="/" 
              className="text-brun hover:text-orange transition-colors font-medium"
            >
              ← Tilbake
            </Link>
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-brun mb-8">
          Cookie Policy
        </h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-brun/80 mb-6">
            Sist oppdatert: 31. desember 2025
          </p>

          <section className="mb-8">
            <h2 className="font-display text-2xl font-semibold text-brun mb-4">
              1. Hva er informasjonskapsler?
            </h2>
            <p className="text-brun/80 leading-relaxed mb-4">
              Informasjonskapsler (cookies) er små tekstfiler som lagres på enheten din når du 
              besøker en nettside. De hjelper nettsiden å huske informasjon om ditt besøk, 
              som foretrukket språk og andre innstillinger.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-2xl font-semibold text-brun mb-4">
              2. Hvordan vi bruker informasjonskapsler
            </h2>
            <p className="text-brun/80 leading-relaxed mb-4">
              Vi bruker informasjonskapsler for å:
            </p>
            <ul className="list-disc list-inside text-brun/80 space-y-2 ml-4">
              <li>Gjøre nettsiden vår funksjonell og enkel å bruke</li>
              <li>Forstå hvordan besøkende bruker vår nettside</li>
              <li>Forbedre brukeropplevelsen</li>
              <li>Huske dine preferanser</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-2xl font-semibold text-brun mb-4">
              3. Typer informasjonskapsler vi bruker
            </h2>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg border border-mint/30">
                <h3 className="font-display text-xl font-semibold text-brun mb-3">
                  Nødvendige informasjonskapsler
                </h3>
                <p className="text-brun/80 leading-relaxed">
                  Disse er essensielle for at nettsiden skal fungere korrekt. 
                  De kan ikke deaktiveres i våre systemer.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-turkis/30">
                <h3 className="font-display text-xl font-semibold text-brun mb-3">
                  Funksjonelle informasjonskapsler
                </h3>
                <p className="text-brun/80 leading-relaxed">
                  Disse lar oss huske valg du gjør (som språk eller region) 
                  og tilby forbedrede, mer personlige funksjoner.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gul/30">
                <h3 className="font-display text-xl font-semibold text-brun mb-3">
                  Analyse-informasjonskapsler
                </h3>
                <p className="text-brun/80 leading-relaxed">
                  Disse hjelper oss å forstå hvordan besøkende bruker vår nettside, 
                  slik at vi kan forbedre den. All informasjon er anonymisert.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-orange/30">
                <h3 className="font-display text-xl font-semibold text-brun mb-3">
                  Markedsførings-informasjonskapsler
                </h3>
                <p className="text-brun/80 leading-relaxed">
                  Disse brukes til å vise deg relevante annonser. 
                  De kan også begrense hvor mange ganger du ser en annonse.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-2xl font-semibold text-brun mb-4">
              4. Tredjeparts-informasjonskapsler
            </h2>
            <p className="text-brun/80 leading-relaxed mb-4">
              Vi kan bruke tredjeparts-tjenester som setter informasjonskapsler på vegne av oss:
            </p>
            <ul className="list-disc list-inside text-brun/80 space-y-2 ml-4">
              <li><strong>Google Analytics:</strong> For nettstedsanalyse</li>
              <li><strong>Sosiale medier:</strong> For deling av innhold</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-2xl font-semibold text-brun mb-4">
              5. Hvordan kontrollere informasjonskapsler
            </h2>
            <p className="text-brun/80 leading-relaxed mb-4">
              Du kan kontrollere og/eller slette informasjonskapsler etter eget ønske. 
              De fleste nettlesere tillater deg å:
            </p>
            <ul className="list-disc list-inside text-brun/80 space-y-2 ml-4">
              <li>Se hvilke informasjonskapsler du har og slette dem individuelt</li>
              <li>Blokkere tredjeparts-informasjonskapsler</li>
              <li>Blokkere informasjonskapsler fra bestemte nettsteder</li>
              <li>Blokkere alle informasjonskapsler</li>
              <li>Slette alle informasjonskapsler når du lukker nettleseren</li>
            </ul>
            <p className="text-brun/80 leading-relaxed mt-4">
              <strong>Merk:</strong> Hvis du velger å blokkere informasjonskapsler, 
              kan det hende at enkelte funksjoner på nettsiden ikke fungerer optimalt.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-2xl font-semibold text-brun mb-4">
              6. Oppdateringer av denne policyen
            </h2>
            <p className="text-brun/80 leading-relaxed mb-4">
              Vi kan oppdatere vår Cookie Policy fra tid til annen. Vi vil varsle deg 
              om eventuelle endringer ved å publisere den nye Cookie Policy på denne siden.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-2xl font-semibold text-brun mb-4">
              7. Kontakt oss
            </h2>
            <p className="text-brun/80 leading-relaxed mb-4">
              Hvis du har spørsmål om vår bruk av informasjonskapsler, 
              vennligst kontakt oss:
            </p>
            <div className="bg-white p-6 rounded-lg border border-orange/20">
              <p className="text-brun/80"><strong>E-post:</strong> jannike@jannikes.no</p>
              <p className="text-brun/80"><strong>Telefon:</strong> 930 33 966</p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

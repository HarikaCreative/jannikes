export default function CookiePolicy() {
  return (
    <main className="bg-cream min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-display text-4xl font-bold text-brun mb-8">
          Informasjonskapsler (Cookies)
        </h1>
        
        <div className="prose prose-lg text-brun/80 space-y-6">
          <p className="text-sm text-brun/60">
            Sist oppdatert: Januar 2026
          </p>

          <section>
            <h2 className="font-display text-2xl font-bold text-brun mt-8 mb-4">
              Hva er informasjonskapsler?
            </h2>
            <p>
              Informasjonskapsler (cookies) er små tekstfiler som lagres på din enhet 
              når du besøker en nettside. De brukes for å huske dine preferanser og 
              forbedre brukeropplevelsen.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-brun mt-8 mb-4">
              Hvilke informasjonskapsler bruker vi?
            </h2>
            <p>
              Denne nettsiden bruker kun <strong>teknisk nødvendige informasjonskapsler</strong> 
              som er essensielle for at nettsiden skal fungere korrekt. Vi bruker ikke:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Sporingscookies</li>
              <li>Markedsføringscookies</li>
              <li>Tredjeparts analyseverktøy</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-brun mt-8 mb-4">
              Administrere informasjonskapsler
            </h2>
            <p>
              Du kan når som helst slette eller blokkere informasjonskapsler gjennom 
              innstillingene i din nettleser. Merk at dette kan påvirke funksjonaliteten 
              på enkelte nettsider.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-brun mt-8 mb-4">
              Kontakt
            </h2>
            <p>
              Har du spørsmål om vår bruk av informasjonskapsler, kan du kontakte oss på{' '}
              <a href="mailto:jannike@jannikes.no" className="text-turkis hover:underline">
                jannike@jannikes.no
              </a>
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-brun/10">
          <a 
            href="/"
            className="inline-flex items-center text-turkis hover:text-mint transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Tilbake til forsiden
          </a>
        </div>
      </div>
    </main>
  );
}

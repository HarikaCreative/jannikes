export default function PrivacyPolicy() {
  return (
    <main className="bg-cream min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-display text-4xl font-bold text-brun mb-8">
          Personvernerklæring
        </h1>
        
        <div className="prose prose-lg text-brun/80 space-y-6">
          <p className="text-sm text-brun/60">
            Sist oppdatert: Januar 2026
          </p>

          <section>
            <h2 className="font-display text-2xl font-bold text-brun mt-8 mb-4">
              1. Behandlingsansvarlig
            </h2>
            <p>
              Jannikes Catering, ved Jannike, er behandlingsansvarlig for personopplysninger 
              som samles inn via denne nettsiden. Vi er forpliktet til å beskytte ditt personvern 
              og behandle dine opplysninger i samsvar med gjeldende personvernlovgivning (GDPR).
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-brun mt-8 mb-4">
              2. Hvilke opplysninger samler vi inn?
            </h2>
            <p>Vi samler kun inn opplysninger du frivillig oppgir gjennom vårt kontaktskjema:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Navn</li>
              <li>E-postadresse</li>
              <li>Telefonnummer (valgfritt)</li>
              <li>Type forespørsel</li>
              <li>Innholdet i din melding</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-brun mt-8 mb-4">
              3. Hvorfor samler vi inn opplysninger?
            </h2>
            <p>Vi bruker dine opplysninger til følgende formål:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Besvare din henvendelse</li>
              <li>Sende deg tilbud på forespurte tjenester</li>
              <li>Administrere bookinger og avtaler</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-brun mt-8 mb-4">
              4. Rettslig grunnlag
            </h2>
            <p>
              Behandlingen av dine personopplysninger er basert på ditt samtykke, 
              som du gir når du sender inn kontaktskjemaet. Du kan når som helst 
              trekke tilbake ditt samtykke ved å kontakte oss.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-brun mt-8 mb-4">
              5. Lagring og sletting
            </h2>
            <p>
              Vi lagrer dine opplysninger så lenge det er nødvendig for å behandle 
              din henvendelse og oppfylle eventuelle avtaler. Opplysninger slettes 
              når de ikke lenger er nødvendige, med mindre vi er pålagt å oppbevare 
              dem av juridiske årsaker.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-brun mt-8 mb-4">
              6. Deling av opplysninger
            </h2>
            <p>
              Vi deler ikke dine personopplysninger med tredjeparter, med mindre det 
              er nødvendig for å levere våre tjenester eller vi er pålagt det ved lov.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-brun mt-8 mb-4">
              7. Dine rettigheter
            </h2>
            <p>Du har rett til å:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Be om innsyn i hvilke opplysninger vi har om deg</li>
              <li>Be om retting av uriktige opplysninger</li>
              <li>Be om sletting av dine opplysninger</li>
              <li>Trekke tilbake ditt samtykke</li>
              <li>Klage til Datatilsynet</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-brun mt-8 mb-4">
              8. Informasjonskapsler (cookies)
            </h2>
            <p>
              Denne nettsiden bruker kun teknisk nødvendige informasjonskapsler 
              for å sikre at nettsiden fungerer som den skal. Vi bruker ikke 
              sporings- eller markedsføringscookies.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-brun mt-8 mb-4">
              9. Kontakt
            </h2>
            <p>
              Har du spørsmål om vår behandling av personopplysninger, kan du kontakte oss på:
            </p>
            <p className="mt-2">
              <strong>E-post:</strong>{' '}
              <a href="mailto:jannike@jannikes.no" className="text-turkis hover:underline">
                jannike@jannikes.no
              </a>
              <br />
              <strong>Telefon:</strong>{' '}
              <a href="tel:+4793033966" className="text-turkis hover:underline">
                930 33 966
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

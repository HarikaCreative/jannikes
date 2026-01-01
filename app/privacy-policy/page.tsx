import Link from 'next/link';

export default function PrivacyPolicy() {
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
          Privacy Policy
        </h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-brun/80 mb-6">
            Sist oppdatert: 31. desember 2025
          </p>

          <section className="mb-8">
            <h2 className="font-display text-2xl font-semibold text-brun mb-4">
              1. Introduksjon
            </h2>
            <p className="text-brun/80 leading-relaxed mb-4">
              Jannikes Catering ("vi", "oss" eller "vår") er forpliktet til å beskytte personvernet ditt. 
              Denne personvernerklæringen forklarer hvordan vi samler inn, bruker og beskytter dine personopplysninger 
              når du besøker vår nettside eller bruker våre tjenester.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-2xl font-semibold text-brun mb-4">
              2. Informasjon vi samler inn
            </h2>
            <p className="text-brun/80 leading-relaxed mb-4">
              Vi kan samle inn følgende typer personopplysninger:
            </p>
            <ul className="list-disc list-inside text-brun/80 space-y-2 ml-4">
              <li>Navn og kontaktinformasjon (e-post, telefonnummer)</li>
              <li>Informasjon om din forespørsel eller bestilling</li>
              <li>Teknisk informasjon (IP-adresse, nettlesertype, enhet)</li>
              <li>Informasjonskapsler og tilsvarende teknologier</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-2xl font-semibold text-brun mb-4">
              3. Hvordan vi bruker din informasjon
            </h2>
            <p className="text-brun/80 leading-relaxed mb-4">
              Vi bruker dine personopplysninger til:
            </p>
            <ul className="list-disc list-inside text-brun/80 space-y-2 ml-4">
              <li>Å svare på dine henvendelser og forespørsler</li>
              <li>Å levere våre cateringtjenester</li>
              <li>Å forbedre vår nettside og tjenester</li>
              <li>Å sende deg relevant informasjon (med ditt samtykke)</li>
              <li>Å oppfylle juridiske forpliktelser</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-2xl font-semibold text-brun mb-4">
              4. Deling av informasjon
            </h2>
            <p className="text-brun/80 leading-relaxed mb-4">
              Vi selger ikke dine personopplysninger. Vi kan dele informasjon med:
            </p>
            <ul className="list-disc list-inside text-brun/80 space-y-2 ml-4">
              <li>Tjenesteleverandører som hjelper oss med å drive vår virksomhet</li>
              <li>Juridiske myndigheter når det kreves av loven</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-2xl font-semibold text-brun mb-4">
              5. Dine rettigheter (GDPR)
            </h2>
            <p className="text-brun/80 leading-relaxed mb-4">
              I henhold til GDPR har du rett til:
            </p>
            <ul className="list-disc list-inside text-brun/80 space-y-2 ml-4">
              <li>Tilgang til dine personopplysninger</li>
              <li>Retting av unøyaktige opplysninger</li>
              <li>Sletting av dine opplysninger</li>
              <li>Begrensning av behandling</li>
              <li>Dataportabilitet</li>
              <li>Å motsette deg behandling</li>
              <li>Å trekke tilbake samtykke</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-2xl font-semibold text-brun mb-4">
              6. Datasikkerhet
            </h2>
            <p className="text-brun/80 leading-relaxed mb-4">
              Vi implementerer passende tekniske og organisatoriske tiltak for å beskytte 
              dine personopplysninger mot uautorisert tilgang, endring, avsløring eller ødeleggelse.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-2xl font-semibold text-brun mb-4">
              7. Oppbevaring av data
            </h2>
            <p className="text-brun/80 leading-relaxed mb-4">
              Vi beholder dine personopplysninger bare så lenge det er nødvendig for 
              formålene beskrevet i denne personvernerklæringen, eller som påkrevd av lov.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-2xl font-semibold text-brun mb-4">
              8. Kontakt oss
            </h2>
            <p className="text-brun/80 leading-relaxed mb-4">
              For spørsmål om denne personvernerklæringen eller for å utøve dine rettigheter, 
              vennligst kontakt oss:
            </p>
            <div className="bg-white p-6 rounded-lg border border-orange/20">
              <p className="text-brun/80"><strong>E-post:</strong> jannike@jannikes.no</p>
              <p className="text-brun/80"><strong>Telefon:</strong> 930 33 966</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-2xl font-semibold text-brun mb-4">
              9. Endringer i personvernerklæringen
            </h2>
            <p className="text-brun/80 leading-relaxed mb-4">
              Vi kan oppdatere denne personvernerklæringen fra tid til annen. 
              Vi vil varsle deg om eventuelle endringer ved å publisere den nye 
              personvernerklæringen på denne siden.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}

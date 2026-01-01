'use client';

import { motion } from 'framer-motion';

export default function ArtfulBalance() {
  return (
    <section id="artful-balance" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cerise/10 via-rosa/10 to-gul/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-brun mb-4">
              Artful Balance<br />
              <span className="text-cerise">2026</span>
            </h2>
            
            <p className="text-2xl text-brun/80 mb-8">
              Kreative retreats i Spania
            </p>

            <div className="space-y-4 text-lg text-brun/80 mb-8">
              <p>
                Bli med på en unik reise hvor <strong className="text-cerise">mat, yoga og kunst</strong> møtes 
                i det vakre spanske landskapet!
              </p>
              
              <p>
                Artful Balance er en serie kreative retreats jeg arrangerer sammen med kunstner og kunstterapeut 
                <strong className="text-cerise"> Kari-Anne Næssø</strong>. Her kombinerer vi våre lidenskaper 
                for å skape opplevelser som nærer både kropp, sinn og kreativitet.
              </p>

              <div className="bg-white rounded-2xl p-6 my-6 shadow-lg">
                <h3 className="font-display text-2xl font-bold text-brun mb-4">
                  To kurs i 2026:
                </h3>
                
                <div className="space-y-6">
                  {/* Kurs 1 */}
                  <div className="border-l-4 border-mint pl-4">
                    <div className="flex items-center mb-2">
                      <svg className="w-5 h-5 mr-2 text-mint" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                      </svg>
                      <span className="font-semibold text-brun">31. mai – 6. juni 2026</span>
                    </div>
                    <p className="text-brun/70">
                      En uke med fargerike opplevelser, yoga og kreative workshops
                    </p>
                  </div>

                  {/* Kurs 2 */}
                  <div className="border-l-4 border-cerise pl-4">
                    <div className="flex items-center mb-2">
                      <svg className="w-5 h-5 mr-2 text-cerise" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                      </svg>
                      <span className="font-semibold text-brun">7. juni – 13. juni 2026</span>
                    </div>
                    <p className="text-brun/70">
                      Fortsett reisen med nye perspektiver og dypere kreativ utforskning
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-mint/10 rounded-2xl p-6">
                <h4 className="font-semibold text-brun mb-3">Hva du kan forvente:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-2 text-cerise flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span>Daglige yogaøkter tilpasset alle nivåer</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-2 text-cerise flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span>Sesongbaserte, fargerike måltider laget med kjærlighet</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-2 text-cerise flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span>Kunstworkshops med Kari-Anne Næssø</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-2 text-cerise flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span>Tid til å bare være – i vakre omgivelser</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-2 text-cerise flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span>Et inkluderende og varmt fellesskap</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#kontakt"
                className="px-8 py-4 bg-gradient-to-r from-cerise to-rosa text-white text-center font-semibold rounded-full hover:shadow-xl transition-all"
              >
                Meld deg på nå
              </a>
              <a
                href="mailto:jannike@jannikes.no?subject=Artful Balance 2026"
                className="px-8 py-4 border-2 border-cerise text-cerise text-center font-semibold rounded-full hover:bg-cerise hover:text-white transition-all"
              >
                Send meg en e-post
              </a>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img
              src="/images/artful balance 2026.webp"
              alt="Artful Balance 2026"
              className="rounded-3xl shadow-2xl"
            />
            
            {/* Decorative elements */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-gul to-orange opacity-40 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-gradient-to-br from-cerise to-rosa opacity-40 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';

export default function RetreatChef() {
  return (
    <section id="retreat" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-brun/5 to-mint/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-brun mb-6">
              Sertifisert<br />
              <span className="text-cerise">Retreat Chef</span>
            </h2>
            
            <div className="space-y-4 text-lg text-brun/80 mb-8">
              <p>
                Som sertifisert retreat chef kombinerer jeg mat, yoga og kreativitet 
                til helhetlige opplevelser som nærer både kropp og sjel.
              </p>
              
              <p>
                Mine retreats handler om mer enn bare mat – det handler om å skape 
                rom for  kreativitet, bevegelse og indre ro. Jeg tilbyr skreddersydde 
                retreat-opplevelser både i Norge og Spania.
              </p>
              
              <p className="font-semibold text-brun">
                Hva jeg tilbyr som retreat chef:
              </p>
              
              <ul className="space-y-2 ml-6">
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-2 text-mint flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span>Sesongbaserte menyer tilpasset retreat-settingen</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-2 text-mint flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span>Vegan og plantebaserte alternativer</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-2 text-mint flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span>Yoga og bevegelsesøkter inkludert</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-2 text-mint flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span>Kreative workshops og skaperglede</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-2 text-mint flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span>Samarbeid med kunstnere og instruktører</span>
                </li>
              </ul>
            </div>

            <a
              href="#kontakt"
              className="inline-block px-8 py-4 bg-gradient-to-r from-cerise to-rosa text-white font-semibold rounded-full hover:shadow-xl transition-all"
            >
              Book retreat chef
            </a>
          </motion.div>

          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/images/yoga-jannikes-catering.webp"
                alt="Yoga"
                className="rounded-2xl shadow-xl"
              />
              <img
                src="/images/sommersalat-jannikes-catering.webp"
                alt="Mat"
                className="rounded-2xl shadow-xl mt-8"
              />
            </div>
            <img
              src="/images/middelhavet-ost-jannikes-catering.webp"
              alt="Catering"
              className="rounded-2xl shadow-xl mt-4 w-2/3 mx-auto"
            />

            {/* Decorative elements */}
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-cerise/20 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-mint/30 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

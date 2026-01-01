'use client';

import { motion } from 'framer-motion';

export default function Yoga() {
  return (
    <section id="yoga" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img
              src="/images/yoga-jannikes-catering.webp"
              alt="Yoga med Jannike"
              className="rounded-3xl shadow-2xl"
            />
            
            {/* Decorative circle */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-br from-mint to-turkis rounded-full opacity-30 -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-brun mb-6">
              Yoga &<br />
              <span className="text-mint">Privattimer</span>
            </h2>
            
            <div className="space-y-4 text-lg text-brun/80 mb-8">
              <p>
                Jeg tilbyr <strong className="text-cerise">privat yogaundervisning</strong> tilpasset 
                dine behov – enten du er nybegynner eller erfaren utøver.
              </p>
              
              <p>
                Mine timer fokuserer på:
              </p>
              
              <ul className="space-y-3 ml-6">
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-2 text-mint flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                  <span><strong>Bevissthet</strong> – Tilstedeværelse i kropp og pust</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-2 text-mint flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                  <span><strong>Styrke</strong> – Bygge en sterk og smidig kropp</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-2 text-mint flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                  <span><strong>Ro</strong> – Finne balanse og indre fred</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-2 text-mint flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                  <span><strong>Glede</strong> – Yoga skal være inspirerende!</span>
                </li>
              </ul>
            </div>

            <div className="bg-mint/10 rounded-2xl p-6 mb-8">
              <h3 className="font-semibold text-brun mb-3">Instrukør hos Actic Asker</h3>
              <p className="text-brun/70 mb-4">
                I tillegg til private timer underviser jeg gruppetimer hos Actic Asker. 
                Sjekk timeplanen og meld deg på!
              </p>
              <a
                href="https://www.actic.no/treningssentre/asker/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-cerise hover:text-rosa font-semibold transition-colors"
              >
                Se timeplan hos Actic Asker
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                </svg>
              </a>
            </div>

            <a
              href="#kontakt"
              className="inline-block px-8 py-4 bg-gradient-to-r from-mint to-turkis text-brun font-semibold rounded-full hover:shadow-xl transition-all"
            >
              Book privat yogatime
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

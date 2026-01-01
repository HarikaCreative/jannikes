'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <motion.img
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                src="/images/profil1-jannikes-catering.webp"
                alt="Jannike"
                className="rounded-2xl shadow-xl"
              />
              <motion.img
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                src="/images/profil2-jannikes-catering.webp"
                alt="Jannike"
                className="rounded-2xl shadow-xl mt-8"
              />
            </div>
            <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              src="/images/profil3-jannikes-catering.webp"
              alt="Jannike"
              className="rounded-2xl shadow-xl mt-4 w-2/3 mx-auto"
            />
            
            {/* Decorative blob */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-mint/30 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gul/30 rounded-full blur-3xl -z-10" />
          </div>

          {/* Content */}
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-brun mb-6">
              Om Jannike
            </h2>
            
            <div className="space-y-4 text-lg text-brun/80">
              <p>
                Mat er min lidenskap, og jeg elsker å skape opplevelser som både smaker fantastisk 
                og ser ut som kunstverk.
              </p>
              
              <p>
                Som <strong className="text-cerise">catering-kokk</strong> spesialiserer jeg meg på 
                sesongbasert mat med fokus på fargerike, kreative retter. Jeg tilbyr både tradisjonelle 
                og veganske menyer – alltid tilpasset dine ønsker.
              </p>
              
              <p>
                Som <strong className="text-cerise">yogainstruktør</strong> underviser jeg privat og 
                hos Actic Asker. Jeg brenner for å kombinere bevegelse med kreativitet.
              </p>
              
              <p>
                Som <strong className="text-cerise">sertifisert retreat chef</strong> kombinerer jeg 
                mat, yoga og skaperglede til helhetlige opplevelser – både i Norge og Spania.
              </p>
              
              <p className="text-brun font-semibold">
                Min inspirasjon kommer fra farger, kulturer og kunstnere som Frida Kahlo – 
                livet skal være fargerikt, varmt og autentisk!
              </p>
            </div>

            <div className="mt-8">
              <a 
                href="https://www.actic.no/treningssentre/asker/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-cerise hover:text-rosa font-semibold transition-colors"
              >
                Se mine yogatimer hos Actic Asker
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

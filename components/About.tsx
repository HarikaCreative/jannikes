'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export default function About() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const images = [
    {
      src: '/images/profil2-jannikes-catering.webp',
      alt: 'Jannike som retreat chef i kjøkkenet',
      caption: 'Retreat chef i Spania'
    },
    {
      src: '/images/frida-bord-jannikes-catering.webp',
      alt: 'Fargerikt Frida Kahlo-inspirert borddekning',
      caption: 'Frida-inspirert styling'
    },
    {
      src: '/images/energi-påfyll-jannikes-catering.webp',
      alt: 'Kunstnerisk antipasti-fat med spekemat og frukt',
      caption: 'Energi-påfyll med stil'
    }
  ];

  return (
    <>
      <section id="om" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-cream">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start"
          >
            {/* Images - Mosaic Layout: 2 small left, 1 large right */}
            <motion.div variants={fadeInUp} className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-3 h-full">
                {/* Left column - 2 small stacked images */}
                <div className="flex flex-col gap-3">
                  <div>
                    <button
                      onClick={() => setLightboxImage(images[1].src)}
                      className="w-full focus:outline-none focus:ring-2 focus:ring-turkis focus:ring-offset-2 rounded-xl"
                      aria-label={`Forstørr bilde: ${images[1].alt}`}
                    >
                      <img
                        src={images[1].src}
                        alt={images[1].alt}
                        className="w-full h-40 md:h-52 object-cover rounded-xl shadow-md hover:shadow-lg transition-shadow"
                        loading="lazy"
                      />
                    </button>
                    <p className="text-sm text-brun/60 mt-2 text-center">{images[1].caption}</p>
                  </div>
                  
                  <div>
                    <button
                      onClick={() => setLightboxImage(images[2].src)}
                      className="w-full focus:outline-none focus:ring-2 focus:ring-turkis focus:ring-offset-2 rounded-xl"
                      aria-label={`Forstørr bilde: ${images[2].alt}`}
                    >
                      <img
                        src={images[2].src}
                        alt={images[2].alt}
                        className="w-full h-40 md:h-52 object-cover rounded-xl shadow-md hover:shadow-lg transition-shadow"
                        loading="lazy"
                      />
                    </button>
                    <p className="text-sm text-brun/60 mt-2 text-center">{images[2].caption}</p>
                  </div>
                </div>
                
                {/* Right column - Large profile image */}
                <div className="flex flex-col">
                  <button
                    onClick={() => setLightboxImage(images[0].src)}
                    className="w-full h-full focus:outline-none focus:ring-2 focus:ring-turkis focus:ring-offset-2 rounded-xl"
                    aria-label={`Forstørr bilde: ${images[0].alt}`}
                  >
                    <img
                      src={images[0].src}
                      alt={images[0].alt}
                      className="w-full h-full min-h-[340px] md:min-h-[450px] object-cover rounded-xl shadow-md hover:shadow-lg transition-shadow"
                      loading="lazy"
                    />
                  </button>
                  <p className="text-sm text-brun/60 mt-2 text-center">{images[0].caption}</p>
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div variants={fadeInUp} className="order-1 lg:order-2">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-brun mb-6">
                Om Jannike
              </h2>
              
              <div className="space-y-4 text-brun/80">
                <p>
                  Mat er min lidenskap, og jeg elsker å skape opplevelser som både smaker fantastisk 
                  og ser ut som kunstverk.
                </p>
                
                <p>
                  Som <strong className="text-turkis">catering-kokk</strong> spesialiserer jeg meg på 
                  sesongbasert mat med fokus på fargerike, kreative retter. Jeg tilbyr både tradisjonelle 
                  og veganske menyer – alltid tilpasset dine ønsker.
                </p>
                
                <p>
                  Som <strong className="text-turkis">yogainstruktør</strong> underviser jeg privat og 
                  hos{' '}
                  <a 
                    href="https://www.actic.no/treningssentre/asker/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-turkis hover:text-mint underline underline-offset-2 transition-colors"
                  >
                    Actic Asker
                  </a>
                  . Jeg brenner for å kombinere bevegelse med kreativitet.
                </p>
                
                <p>
                  Som <strong className="text-turkis">sertifisert retreat chef</strong> kombinerer jeg 
                  mat, yoga og skaperglede til helhetlige opplevelser – både i Norge og Spania.
                </p>
                
                <p className="text-brun font-medium pt-2">
                  Min inspirasjon kommer fra farger, kulturer og kunstnere som Frida Kahlo – 
                  livet skal være fargerikt, varmt og autentisk!
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-brun/10">
                <p className="text-sm text-brun/60">
                  Følg meg på{' '}
                  <a 
                    href="https://www.instagram.com/jannikescatering"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-turkis hover:text-mint underline underline-offset-2 transition-colors"
                  >
                    @jannikescatering
                  </a>
                  {' '}for daglig inspirasjon.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 bg-brun/90 z-50 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Forstørret bilde"
        >
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute top-4 right-4 text-white hover:text-mint transition-colors p-2"
            aria-label="Lukk"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <img
            src={lightboxImage}
            alt="Forstørret bilde"
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}

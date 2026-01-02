'use client';

import { motion } from 'framer-motion';

interface HeroProps {
  onBooking: () => void;
}

export default function Hero({ onBooking }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-mint/20 via-cream to-orange/15">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: 'url(/images/sommerbord-jannikes-catering.webp)',
        }}
      />

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-cerise/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-orange/25 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gul/30 rounded-full blur-2xl" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-brun mb-6 leading-tight">
            <span className="text-orange">Fargerik mat.</span><br />
            Varme mennesker.<br />
            <span className="text-cerise">Kreative opplevelser.</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-brun/80 mb-12 max-w-3xl mx-auto"
        >
          Mat laget med omtanke, opplevelser som samler og en livsstil med plass til ro
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={onBooking}
            className="px-8 py-4 bg-cerise hover:bg-cerise/90 text-white text-lg font-semibold rounded-full hover:shadow-2xl hover:scale-105 transition-all"
          >
            Be om tilbud
          </button>
          <a
            href="#retreats"
            className="px-8 py-4 bg-orange text-white text-lg font-semibold rounded-full hover:bg-orange/90 hover:shadow-2xl hover:scale-105 transition-all"
          >
            Meld deg på kurs og workshops i 2026
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <svg className="w-6 h-6 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

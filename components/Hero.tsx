'use client';

import { motion } from 'framer-motion';

interface HeroProps {
  onBooking: () => void;
}

export default function Hero({ onBooking }: HeroProps) {
  return (
    <section className="relative h-[85vh] grid grid-cols-1 lg:grid-cols-5 overflow-hidden bg-[#d4dcc9]">
      {/* Left - Image (60%) - fullstørrelse, ikke klippet */}
      <motion.div 
        className="relative lg:col-span-3 h-64 lg:h-full flex items-center justify-center"
        initial={{ x: '-100%', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        <img 
          src="/images/profil7-jannikes-catering.webp"
          alt="Jannike med fargerik mat"
          className="h-full w-auto max-w-full object-contain"
        />
        {/* Soft fade til høyre - lys salvie */}
        <div 
          className="hidden lg:block absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(to right, transparent 50%, rgba(212,220,201,0.5) 75%, #d4dcc9 100%)'
          }}
        />
      </motion.div>

      {/* Right - Content (40%) - lys salvie */}
      <div className="relative lg:col-span-2 bg-[#d4dcc9] flex items-center px-8 lg:px-12 py-12 lg:py-0">
        {/* Decorative accent line */}
        <motion.div 
          className="hidden lg:block absolute top-[15%] right-0 w-1.5 h-44 bg-gradient-to-b from-[#ff8b5f] via-cerise to-[#9caf88] rounded-l"
          initial={{ opacity: 0, scaleY: 0 }}
          animate={{ opacity: 1, scaleY: 1 }}
          transition={{ duration: 0.8, delay: 1.5, ease: 'easeOut' }}
          style={{ originY: 0 }}
        />
        
        <div className="max-w-md">
          {/* H1 - Jannikes i Cerise */}
          <motion.h1 
            className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-cerise leading-tight mb-6 tracking-wide"
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.6, ease: 'easeOut' }}
          >
            Jannikes
          </motion.h1>
          
          {/* H2 - Usymmetrisk layout med tre farger */}
          <motion.div 
            className="mb-10 space-y-1"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.9, ease: 'easeOut' }}
          >
            {/* fargerik mat - brun */}
            <p className="font-display text-xl md:text-2xl font-medium text-brun tracking-wide">
              fargerik mat
            </p>
            {/* kreative opplevelser - oransje, indent */}
            <p className="font-display text-xl md:text-2xl font-medium text-[#ff8b5f] tracking-wide pl-8">
              kreative opplevelser
            </p>
            {/* varme mennesker - brun, litt indent */}
            <p className="font-display text-xl md:text-2xl font-medium text-brun tracking-wide pl-4">
              varme mennesker
            </p>
          </motion.div>

          {/* Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 1.2, ease: 'easeOut' }}
          >
            <button
              onClick={onBooking}
              className="px-8 py-4 bg-cerise hover:bg-cerise/90 text-white text-lg font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all"
            >
              Be om tilbud
            </button>
            <a
              href="#retreats"
              className="px-8 py-4 bg-transparent border-2 border-cerise text-cerise text-lg font-medium rounded-full hover:bg-cerise/10 transition-all text-center"
            >
              Opplevelser 2026
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

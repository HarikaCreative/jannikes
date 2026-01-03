'use client';

import { motion } from 'framer-motion';

interface HeroProps {
  onBooking: () => void;
}

export default function Hero({ onBooking }: HeroProps) {
  return (
    <section className="relative h-[85vh] grid grid-cols-1 lg:grid-cols-5 overflow-hidden">
      {/* Left - Image (60%) - slides in from left */}
      <motion.div 
        className="relative lg:col-span-3 h-64 lg:h-full"
        initial={{ x: '-100%', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/artful-balance1-2025.webp)',
          }}
        />
        {/* Soft fade - bred myk overgang */}
        <div 
          className="hidden lg:block absolute inset-0"
          style={{
            background: 'linear-gradient(to right, transparent 40%, rgba(255,248,225,0.3) 55%, rgba(255,248,225,0.6) 70%, rgba(255,248,225,0.85) 85%, #FFF8E1 100%)'
          }}
        />
      </motion.div>

      {/* Right - Content (40%) */}
      <div className="relative lg:col-span-2 bg-cream flex items-center px-8 lg:px-12 py-12 lg:py-0">
        {/* Decorative accent line - fades in */}
        <motion.div 
          className="hidden lg:block absolute top-[15%] right-0 w-1.5 h-44 bg-gradient-to-b from-gul via-cerise to-mint rounded-l"
          initial={{ opacity: 0, scaleY: 0 }}
          animate={{ opacity: 1, scaleY: 1 }}
          transition={{ duration: 0.8, delay: 1.5, ease: 'easeOut' }}
          style={{ originY: 0 }}
        />
        
        <div className="max-w-md">
          {/* Title - Raleway SEMIBOLD - CERISE */}
          <motion.h1 
            className="font-display text-4xl md:text-5xl lg:text-5xl font-semibold text-cerise leading-tight mb-2 tracking-wide"
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.6, ease: 'easeOut' }}
          >
            Jannikes verden
          </motion.h1>
          
          {/* Tagline - Raleway LIGHT - CERISE */}
          <motion.h2 
            className="font-display text-xl md:text-2xl font-light text-cerise mb-8 tracking-wide"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.9, ease: 'easeOut' }}
          >
            – der sansene får farge
          </motion.h2>

          {/* Buttons - TURKIS - rise from bottom last */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 1.2, ease: 'easeOut' }}
          >
            <button
              onClick={onBooking}
              className="px-8 py-4 bg-turkis hover:bg-turkis/90 text-white text-lg font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all"
            >
              Be om tilbud
            </button>
            <a
              href="#retreats"
              className="px-8 py-4 bg-transparent border-2 border-turkis text-turkis text-lg font-medium rounded-full hover:bg-turkis/10 transition-all text-center"
            >
              Opplevelser 2026
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const reviews = [
  {
    id: 1,
    image: '/images/review1-jannikes-catering.webp',
    name: 'Anne-Marie',
    event: 'Bryllupsfest',
    quote: 'Jannike skapte magien vi drømte om! Maten var ikke bare fantastisk – den var et kunstverk.'
  },
  {
    id: 2,
    image: '/images/review2-jannikes-catering.webp',
    name: 'Thomas',
    event: 'Firmafest',
    quote: 'Fargerik, smakfull og kreativ. Jannikes catering gjorde festen uforglemmelig!'
  },
  {
    id: 3,
    image: '/images/review3-jannikes-catering.webp',
    name: 'Lise',
    event: 'Bursdagsselskap',
    quote: 'Vegansk mat som får alle til å smile. Jannike overgår alltid forventningene!'
  }
];

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-brun mb-4">
            Hva sier kundene?
          </h2>
          <p className="text-xl text-brun/70">
            Gleden deres er min største inspirasjon
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-mint/10 to-cerise/10 rounded-3xl overflow-hidden shadow-xl"
            >
              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Image */}
                <div className="h-64 md:h-auto">
                  <img
                    src={reviews[currentIndex].image}
                    alt={reviews[currentIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <svg className="w-12 h-12 text-cerise/30 mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>

                  <p className="text-xl md:text-2xl text-brun font-medium mb-6 leading-relaxed">
                    {reviews[currentIndex].quote}
                  </p>

                  <div>
                    <p className="font-semibold text-brun text-lg">
                      {reviews[currentIndex].name}
                    </p>
                    <p className="text-cerise">
                      {reviews[currentIndex].event}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={prevReview}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all"
            aria-label="Forrige anmeldelse"
          >
            <svg className="w-6 h-6 text-brun" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/>
            </svg>
          </button>

          <button
            onClick={nextReview}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all"
            aria-label="Neste anmeldelse"
          >
            <svg className="w-6 h-6 text-brun" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
            </svg>
          </button>

          {/* Dots */}
          <div className="flex justify-center mt-8 gap-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-cerise w-8'
                    : 'bg-brun/30 hover:bg-brun/50'
                }`}
                aria-label={`Gå til anmeldelse ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Star Rating Display */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <div className="flex justify-center gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-8 h-8 text-gul" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
            ))}
          </div>
          <p className="text-brun/70">
            Basert på tilbakemeldinger fra fornøyde kunder
          </p>
        </motion.div>
      </div>
    </section>
  );
}

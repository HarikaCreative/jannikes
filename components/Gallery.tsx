'use client';

import { motion } from 'framer-motion';

const galleryImages = [
  { src: '/images/sommerbord-jannikes-catering.webp', alt: 'Sommerbord' },
  { src: '/images/sommersalat-jannikes-catering.webp', alt: 'Sommersalat' },
  { src: '/images/sandwich-jannikes-catering.webp', alt: 'Sandwich' },
  { src: '/images/middelhavet-ost-jannikes-catering.webp', alt: 'Middelhavsmat' },
  { src: '/images/bitesize-jannikes-catering.webp', alt: 'Bitesize retter' },
  { src: '/images/yoga-jannikes-catering.webp', alt: 'Yoga' },
];

export default function Gallery() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gul/10 via-cream to-mint/10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-brun mb-4">
            Galleri
          </h2>
          <p className="text-xl text-brun/70 max-w-2xl mx-auto">
            Mat som kunst – en visuell reise gjennom farger, smaker og kreativitet
          </p>
        </motion.div>

        {/* Gallery Grid - Masonry Style */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className={`relative overflow-hidden rounded-2xl shadow-lg cursor-pointer ${
                index === 0 ? 'md:col-span-2 md:row-span-2' : ''
              } ${
                index === 4 ? 'md:row-span-2' : ''
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brun/80 via-brun/0 to-brun/0 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-semibold text-lg">
                  {image.alt}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Instagram CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-brun/70 mb-4">
            Følg meg for mer inspirasjon og bak-kulissene glimt
          </p>
          <a
            href="https://www.instagram.com/jannikescatering"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cerise to-rosa text-white font-semibold rounded-full hover:shadow-xl transition-all"
          >
            <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            @jannikescatering
          </a>
        </motion.div>
      </div>
    </section>
  );
}

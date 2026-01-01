'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface RetreatChefProps {
  onBooking: () => void;
}

const retreatReviews = [
  {
    id: 1,
    name: 'Ane (Yoga med Ane)',
    quote: 'Vi er så takknemlig og glad for at Jannike vil være sammen med oss på våre yogaferier i Spania. Hun har vært vår faste kokk siden 2022, og vi har også engasjert henne for våre fire yogaferier i 2026. Jannike er en utrolig dyktig kokk som byr på smakfull, næringsrik og fargerik mat som er en fryd for alle sansene. Hun har en helt spesiell evne til å bruke gode råvarer og kombinere spennende smaker. I tillegg til å være en dyktig kokk er Jannike en glede å være sammen med. Hun bidrar ikke bare med nydelig mat, men også med sitt sprudlende humør og sin tilstedeværelse for alle som er med på våre yogaferier. Hun tar seg tid til å bli kjent med våre gjester noe som både vi og gjestene våre setter stor pris på. Hun er inkluderende og inspirerende å være sammen med, og alltid til å stole på. Så vi kommer til å fortsette å engasjere Jannike i årene som kommer.',
    short: 'Hun bidrar ikke bare med nydelig mat, men også med sitt sprudlende humør og sin tilstedeværelse.'
  },
  {
    id: 2,
    name: 'Thea',
    quote: 'Som en helsebevisst person er jeg opptatt av både kvalitet og smak når det kommer til mat. Jannikes mat får høyeste skår i begge kategorier.🪷 Laget fra bunnen med gode, naturlige råvarer. Helsefremmende og ikke minst fantastisk godt.',
    short: 'Helsefremmende og ikke minst fantastisk godt – høyeste skår i kvalitet og smak!'
  },
  {
    id: 3,
    name: 'Anna Veronica',
    quote: 'I had the pleasure of Jannike\'s food on a three day retreat in Spain. It was amazing to say the least. The presentation, colour and choice was so impressive and the food tasted unbelievable. Such a variety of flavours and options for everyone. I ate way too much as it was just so good. Each day there was a great choice on offer and all made with so much love and passion. We all were very excited for meal times knowing how wonderful it would be. I would highly recommend Jannike\'s catering and can\'t wait to try it again.',
    short: 'Such a variety of flavours and options for everyone – all made with so much love and passion!'
  },
  {
    id: 4,
    name: 'Tina L. Pedersen',
    quote: 'Etter å ha deltatt på en yogaretreat, der Jannike lagde all maten, har jeg tenkt på maten hennes i snart ett år! Det er sjelden å få servert så smakfulle kunstverk som hun lager. Anbefales på det sterkeste ☀️',
    short: 'Det er sjelden å få servert så smakfulle kunstverk – jeg har tenkt på maten i snart ett år!'
  }
];

const specialties = [
  { icon: '🌿', text: 'Plantebasert & Vegan' },
  { icon: '🌍', text: 'Middelhavsmat & Sesong' },
  { icon: '🧘', text: 'Ayurveda & Makrobiotikk' }
];

export default function RetreatChef({ onBooking }: RetreatChefProps) {
  const [currentReview, setCurrentReview] = useState(0);
  const [reviewDirection, setReviewDirection] = useState(0);
  const [selectedReview, setSelectedReview] = useState<number | null>(null);
  const [currentSpecialty, setCurrentSpecialty] = useState(0);

  // Auto-rotate specialties
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSpecialty((prev) => (prev + 1) % specialties.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const nextReview = () => {
    setReviewDirection(1);
    setCurrentReview((prev) => (prev + 1) % retreatReviews.length);
  };

  const prevReview = () => {
    setReviewDirection(-1);
    setCurrentReview((prev) => (prev - 1 + retreatReviews.length) % retreatReviews.length);
  };

  return (
    <>
      <section id="retreat" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cream via-turkis/10 to-mint/20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-display text-4xl md:text-5xl font-bold text-brun mb-4"
            >
              Sertifisert <span className="text-cerise">Retreat Chef</span>
            </motion.h2>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
            
            {/* Left: Profile Image + Badge */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center lg:items-start"
            >
{/* Profile Image */}
<div className="relative mb-8">
  <div className="rounded-2xl overflow-hidden shadow-2xl">
    <img
      src="/images/profil1-jannikes-catering.webp"
      alt="Jannike - Sertifisert Retreat Chef"
      className="w-72 md:w-80 h-auto"
    />
  </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-cerise/20 rounded-full blur-2xl -z-10" />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-mint/30 rounded-full blur-2xl -z-10" />
              </div>

              {/* Bettina's Kitchen Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-2xl shadow-lg p-6 max-w-sm"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-mint to-turkis rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-brun/60 uppercase tracking-wide">Sertifisert av</p>
                    <p className="font-display text-lg font-bold text-brun">Bettina's Kitchen</p>
                  </div>
                </div>
                <p className="text-sm text-brun/70">
                  Retreat Chef Academy – London
                </p>
              </motion.div>

              {/* Auto-rotating Specialties */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-6 w-full max-w-sm"
              >
                <p className="text-sm text-brun/60 uppercase tracking-wide mb-3">Spesialiteter</p>
                <div className="relative h-12 overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentSpecialty}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.4 }}
                      className="flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-full px-5 py-3 shadow-md"
                    >
                      <span className="text-2xl">{specialties[currentSpecialty].icon}</span>
                      <span className="font-medium text-brun">{specialties[currentSpecialty].text}</span>
                    </motion.div>
                  </AnimatePresence>
                </div>
                
                {/* Specialty dots */}
                <div className="flex justify-center gap-2 mt-3">
                  {specialties.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSpecialty(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentSpecialty ? 'bg-cerise w-6' : 'bg-brun/30'
                      }`}
                      aria-label={`Spesialitet ${index + 1}`}
                    />
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Right: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="space-y-4 text-lg text-brun/80 leading-relaxed">
                <p>
                  <strong className="text-brun">Som en av svært få i Norden</strong> er jeg sertifisert Retreat Chef 
                  gjennom <span className="text-cerise font-medium">Bettina's Kitchen Retreat Chef Academy</span> – 
                  et program ledet av den anerkjente plantebaserte kokken Bettina Campolucci Bordi i London.
                </p>
                
                <p>
                  Sertifiseringen har gitt meg spesialkompetanse innen plantebasert og næringsrik mat som nærer 
                  både kropp og sjel – perfekt tilpasset retreat-settingen. Jeg fokuserer på sesongbaserte råvarer, 
                  bærekraftig matlaging og å la grønnsakene være helten på tallerkenen.
                </p>
                
                <p>
                  Jeg blir med på retreats både i <strong className="text-brun">Norge, Spania, Bali</strong> og 
                  andre deler av verden, og tilbyr alt fra yoga-retreats til wellness-opplevelser. Maten min er 
                  alltid plantebasert, fargerik og laget med kjærlighet.
                </p>
              </div>

              {/* Link to Bettina's Kitchen */}
              <a
                href="https://www.bettinaskitchen.com/chef-directory/jannike-heitun-kjuus"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-cerise hover:text-orange transition-colors font-medium group"
              >
                Les mer om meg på Bettina's Kitchen
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>

              {/* CTA Button */}
              <div className="pt-4">
                <button
                  onClick={onBooking}
                  className="px-10 py-4 bg-cerise hover:bg-cerise/90 text-white text-lg font-bold rounded-full hover:shadow-2xl hover:scale-105 transition-all"
                >
                  Send forespørsel
                </button>
              </div>
            </motion.div>
          </div>

          {/* Reviews Section - Kompakt versjon som Yoga */}
          <motion.div
            className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 md:p-6 shadow-lg border border-cerise/10 max-w-4xl mx-auto mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-4">
              <h3 className="font-display font-bold text-xl md:text-2xl text-brun">
                Hva andre sier
              </h3>
            </div>

            {/* Review Carousel */}
            <div className="relative overflow-hidden">
              <AnimatePresence mode="wait" custom={reviewDirection}>
                <motion.div
                  key={currentReview}
                  custom={reviewDirection}
                  initial={{ opacity: 0, x: reviewDirection > 0 ? 100 : -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: reviewDirection > 0 ? -100 : 100 }}
                  transition={{ duration: 0.4 }}
                  className="text-center px-4 md:px-8"
                >
                  <blockquote className="font-sans text-base md:text-lg text-brun/80 italic mb-4 max-w-2xl mx-auto leading-relaxed">
                    "{retreatReviews[currentReview].short}"
                  </blockquote>
                  <div className="flex items-center justify-center gap-3">
                    <span className="font-sans font-semibold text-brun text-sm">
                      – {retreatReviews[currentReview].name}
                    </span>
                    <button
                      onClick={() => setSelectedReview(currentReview)}
                      className="font-sans text-cerise hover:text-cerise/80 underline text-xs focus:outline-none focus:ring-2 focus:ring-cerise/30 rounded"
                      aria-label={`Les hele anmeldelsen fra ${retreatReviews[currentReview].name}`}
                    >
                      Les mer
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation - Kompakt med dots */}
              <div className="flex items-center justify-center gap-3 mt-4">
                <button
                  onClick={prevReview}
                  className="w-8 h-8 rounded-full bg-cerise/10 hover:bg-cerise/20 flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-cerise/30"
                  aria-label="Forrige anmeldelse"
                >
                  <svg className="w-4 h-4 text-cerise" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                {/* Dots */}
                <div className="flex gap-1.5" role="tablist" aria-label="Velg anmeldelse">
                  {retreatReviews.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setReviewDirection(index > currentReview ? 1 : -1);
                        setCurrentReview(index);
                      }}
                      className={`w-2 h-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cerise/30 ${
                        index === currentReview
                          ? 'bg-cerise w-4'
                          : 'bg-cerise/30 hover:bg-cerise/50'
                      }`}
                      aria-label={`Anmeldelse ${index + 1}`}
                      aria-selected={index === currentReview}
                      role="tab"
                    />
                  ))}
                </div>

                <button
                  onClick={nextReview}
                  className="w-8 h-8 rounded-full bg-cerise/10 hover:bg-cerise/20 flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-cerise/30"
                  aria-label="Neste anmeldelse"
                >
                  <svg className="w-4 h-4 text-cerise" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mt-16"
          >
            <p className="text-lg text-brun/70 mb-6">
              Planlegger du en retreat og trenger en kokk som forstår wellness?
            </p>
            <button
              onClick={onBooking}
              className="px-12 py-5 bg-cerise hover:bg-cerise/90 text-white text-xl font-bold rounded-full hover:shadow-2xl hover:scale-105 transition-all"
            >
              Send forespørsel
            </button>
          </motion.div>
        </div>
      </section>

      {/* Review Modal - Som Yoga */}
      <AnimatePresence>
        {selectedReview !== null && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedReview(null)}
          >
            <motion.div
              className="bg-cream rounded-2xl p-6 md:p-8 max-w-lg w-full shadow-2xl relative"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-4">
                <span className="inline-block px-3 py-1 bg-cerise/15 text-cerise font-sans text-sm font-medium rounded-full">
                  🧘 Retreat opplevelse
                </span>
                <button
                  onClick={() => setSelectedReview(null)}
                  className="w-8 h-8 rounded-full bg-brun/10 hover:bg-brun/20 flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-cerise/30"
                  aria-label="Lukk"
                >
                  <svg className="w-5 h-5 text-brun" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <blockquote className="font-sans text-brun/80 leading-relaxed mb-6 italic">
                "{retreatReviews[selectedReview].quote}"
              </blockquote>

              <p className="font-sans font-semibold text-brun text-xl">
                – {retreatReviews[selectedReview].name}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

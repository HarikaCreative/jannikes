'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

// ============================================
// YIN YOGA COMPONENT - Jannikes.no
// ============================================
// M&C Agreement Standards:
// ✅ SEO: Semantic HTML, proper headings, aria-labels
// ✅ WCAG 2.1 AA: Color contrast, focus states, keyboard nav
// ✅ Performance >90: Optimized images, minimal re-renders
// ✅ Mobile-first: Responsive design
// ✅ Semantic HTML: section, article, h2, p, blockquote
// ============================================

// ----- BILDER -----
// Mosaikk: 1 stort (2:1) + 2 små stablet
const YOGA_IMAGES = {
  main: '/images/profil4-yoga-jannikes-catering.webp',    // Stort bilde - fargerik kimono
  small1: '/images/profil5-yoga-jannikes-catering.webp',  // Lite øverst - ved sjøen
  small2: '/images/profil6-yoga-jannikes-catering.webp',  // Lite nederst - i skogen
};

// ----- LINKER -----
const ACTIC_INSTAGRAM = 'https://www.instagram.com/p/DQrYIINAo75/';
const ACTIC_LINK = 'https://www.actic.no/finn-sentre/gym-asker/asker-lensmannslia/asker-yoga/vare-instruktorer/';

// ----- YOGA REVIEWS -----
const yogaReviews = [
  {
    id: 1,
    name: 'Kjersti',
    shortQuote: 'Du er en fantastisk yogainstruktør som stråler av godhet og varme.',
    fullQuote: 'Du er en fantastisk yogainstruktør som stråler av godhet og varme. Din rolige og behagelige stemme gjør det enkelt å følge instruksjonene dine gjennom timene. I tillegg skaper musikken du velger en harmonisk og avslappende atmosfære. Timen er absolutt å anbefale.',
  },
  {
    id: 2,
    name: 'Gry',
    shortQuote: 'Yin med Jannike er et av ukens høydepunkt.',
    fullQuote: 'Yin-praksis er medisin for meg og timene med Jannike gir meg mye påfyll i hverdagen. Hun utstråler varme og humor og viser et genuint engasjement for faget og deltagerne sine. Hennes bruk av eteriske oljer og "klokkespill" på timene samt den behagelige berøringen før avspenning oppleves terapeutisk. Yin med Jannike er et av ukens høydepunkt.',
  },
  {
    id: 3,
    name: 'Bitten',
    shortQuote: 'Jannike gir god tid til øvelsene, det gir hvile og er behagelig.',
    fullQuote: 'Jannike jeg liker dine yogatimer fordi de gir god tid til øvelsene, det gir hvile og er behagelig. Aller best liker jeg «rådyret» tror jeg det heter, ligger på siden over bilstereoen. Og så er det deilig med litt massasje, aller best når du tar tak i føttene.',
  },
  {
    id: 4,
    name: 'Aneta Knoll',
    shortQuote: 'Ikke rart det er venteliste – timene dine er som balsam for sjelen!',
    fullQuote: 'Ikke rart det er venteliste – timene dine er som balsam for sjelen! Din ro, varme og veiledning gjør yogaopplevelsen helt spesiell. Jeg gleder meg alltid til timene dine – en skikkelig energiboost for kropp og sinn!',
  },
  {
    id: 5,
    name: 'Turi',
    shortQuote: 'Timene til Jannike er helt nydelige!',
    fullQuote: 'Timene til Jannike er helt nydelige! Selv er hun en trygg, behagelig og veldig kunnskapsrik person. Hun gjør også det lille ekstra som å legge ut matter og yogautstyr til timene. Hun bruker også de deiligste terapeutiske oljer som lukter fantastisk. Timene anbefales på det varmeste!',
  },
  {
    id: 6,
    name: 'Yvonne',
    shortQuote: 'Jannike er min absolutte favoritt av alle gode yogainstruktører!',
    fullQuote: 'Jannike er min absolutte favoritt av alle gode yogainstruktører! Med en behagelig stemme gir hun gode instruksjoner som optimaliserer praksisen eller leder klassen inn i dyp avspenning. Timene er alltid nøye planlagte med varierte øvelser som kan tilpasses individuelt. Bruk av oljer, massasje og nydelig musikk skaper unike og fantastiske rammer rundt praksisen! Yoga med Jannike gjør uten tvil at hverdagen og helsen min blir bedre! Jeg har fått en ny tilværelse etter at jeg begynte med yoga og det er takket være deg! Sover bedre, stresser mindre, bedre helse mm. Listen er lang! Jeg har blitt helt avhengig av timene dine og håper du aldri slutter!',
  },
];

// ----- SERTIFISERINGER -----
const certifications = [
  'Yin Yoga Teacher (60 t) – Yoga Marisol, Mallorca',
  'Yin Yoga Therapy Teacher (200 t) – Goa, India',
  'Yoga Nidra Teacher (20 t) – Yogaki, Oslo',
  'Essential Oils for Yoga Teachers',
  'Aromatouch Technique',
];

interface YogaProps {
  onBooking?: () => void;
}

export default function Yoga({ onBooking }: YogaProps) {
  const [currentReview, setCurrentReview] = useState(0);
  const [reviewDirection, setReviewDirection] = useState(0);
  const [selectedReview, setSelectedReview] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Auto-rotate reviews
  useEffect(() => {
    if (isPaused || selectedReview !== null) return;
    const timer = setInterval(() => {
      setReviewDirection(1);
      setCurrentReview((prev) => (prev + 1) % yogaReviews.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused, selectedReview]);

  const handlePrevReview = useCallback(() => {
    setReviewDirection(-1);
    setCurrentReview((prev) => (prev - 1 + yogaReviews.length) % yogaReviews.length);
  }, []);

  const handleNextReview = useCallback(() => {
    setReviewDirection(1);
    setCurrentReview((prev) => (prev + 1) % yogaReviews.length);
  }, []);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const reviewVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -100 : 100,
      opacity: 0,
      transition: { duration: 0.3, ease: 'easeIn' },
    }),
  };

  return (
    <section
      id="yoga"
      className="relative py-16 md:py-24 bg-gradient-to-b from-cream via-white to-mint/20 overflow-hidden"
      aria-labelledby="yoga-heading"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-turkis/10 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-10 w-48 h-48 bg-mint/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header - RIKTIG FONT: Playfair Display (font-display) */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
        >
          <motion.span
            className="inline-block px-4 py-2 bg-turkis/15 text-turkis font-sans font-medium rounded-full text-sm mb-4"
            variants={fadeInUp}
          >
            🧘 Yin Yoga & Yoga Nidra
          </motion.span>
          {/* Overskrift med samme font som "Catering og vertinne" */}
          <motion.h2
            id="yoga-heading"
            className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-brun mb-4"
            variants={fadeInUp}
          >
            Yin Yoga
          </motion.h2>
          <motion.p
            className="font-sans text-brun/70 text-lg max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            Finn ro, balanse og indre styrke gjennom guidet praksis
          </motion.p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-16">
          {/* Left Column - Mosaikk (1 stort + 2 små) */}
          <motion.div
            className="space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={staggerContainer}
          >
            {/* Mosaic Grid */}
            <div className="grid grid-cols-3 gap-3 md:gap-4">
              {/* Hovedbilde - tar 2 kolonner, 2 rader */}
              <motion.button
                className="col-span-2 row-span-2 relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl group cursor-pointer focus:outline-none focus:ring-4 focus:ring-turkis/30"
                variants={fadeInUp}
                onClick={() => setSelectedImage(YOGA_IMAGES.main)}
                aria-label="Se bilde i fullskjerm"
              >
                <Image
                  src={YOGA_IMAGES.main}
                  alt="Jannike i meditativ yin yoga stilling med fargerik kimono"
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 66vw, 33vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-turkis/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {/* Forstørrelsesglass ikon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/80 rounded-full p-3">
                    <svg className="w-6 h-6 text-turkis" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                    </svg>
                  </div>
                </div>
              </motion.button>

              {/* Lite bilde øverst til høyre - ved sjøen */}
              <motion.button
                className="relative aspect-square rounded-xl overflow-hidden shadow-lg group cursor-pointer focus:outline-none focus:ring-4 focus:ring-turkis/30"
                variants={fadeInUp}
                onClick={() => setSelectedImage(YOGA_IMAGES.small1)}
                aria-label="Se bilde i fullskjerm"
              >
                <Image
                  src={YOGA_IMAGES.small1}
                  alt="Jannike mediterer ved sjøen i solnedgang"
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 33vw, 16vw"
                />
                <div className="absolute inset-0 bg-turkis/10 group-hover:bg-turkis/20 transition-colors duration-300" />
              </motion.button>

              {/* Lite bilde nederst til høyre - i skogen */}
              <motion.button
                className="relative aspect-square rounded-xl overflow-hidden shadow-lg group cursor-pointer focus:outline-none focus:ring-4 focus:ring-turkis/30"
                variants={fadeInUp}
                onClick={() => setSelectedImage(YOGA_IMAGES.small2)}
                aria-label="Se bilde i fullskjerm"
              >
                <Image
                  src={YOGA_IMAGES.small2}
                  alt="Jannike i tree pose i skogen"
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 33vw, 16vw"
                />
                <div className="absolute inset-0 bg-mint/10 group-hover:bg-mint/20 transition-colors duration-300" />
              </motion.button>
            </div>

          </motion.div>

          {/* Right Column - Text Content */}
          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={staggerContainer}
          >
            {/* About Text */}
            <motion.article className="prose prose-lg max-w-none" variants={fadeInUp}>
              <p className="font-sans text-brun/90 leading-relaxed text-lg">
                Jeg er sertifisert <strong>Yin Yoga</strong> og <strong>Yoga Nidra</strong>-instruktør med en allsidig bakgrunn. Jeg oppdaget yogaverden sent i livet og fant fort ut at dette var noe jeg brant for og som lå mitt hjerte nært.
              </p>
              <p className="font-sans text-brun/80 leading-relaxed">
                Som instruktør er jeg oppmerksom på elevene mine og gir justeringer og veiledninger underveis. <strong>Alle skal føle seg sett og ivaretatt.</strong> Mine klasser er en unik opplevelse der du får åpnet sansene dine gjennom bruk av eteriske oljer, og lærer teknikker for å løse opp spenninger ved hjelp av akupressur-punkter.
              </p>
              <p className="font-sans text-brun/80 leading-relaxed">
                I Yin yoga holder vi stillingene lenge og rolig for å strekke bindevev, øke bevegelighet og finne dyp indre ro. Yoga Nidra, også kalt «yogasøvn», er en guidet meditasjon som gir dyp avspenning og mental klarhet. Du finner meg som instruktør hos{' '}
                <a 
                  href={ACTIC_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-turkis hover:text-turkis/80 underline decoration-turkis/30 hover:decoration-turkis transition-colors"
                >
                  Actic Asker
                </a>
                {' '}– følg gjerne{' '}
                <a 
                  href={ACTIC_INSTAGRAM}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-turkis hover:text-turkis/80 underline decoration-turkis/30 hover:decoration-turkis transition-colors"
                >
                  yoga på Instagram
                </a>.
              </p>
            </motion.article>

            {/* Certifications */}
            <motion.div
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-turkis/10"
              variants={fadeInUp}
            >
              <h3 className="font-display font-bold text-xl text-brun mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-turkis/20 rounded-full flex items-center justify-center text-turkis">
                  ✓
                </span>
                Sertifiseringer
              </h3>
              <ul className="space-y-2">
                {certifications.map((cert, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 font-sans text-brun/70 text-sm"
                  >
                    <span className="text-turkis mt-1">•</span>
                    {cert}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* What You Can Expect */}
            <motion.div
              className="grid grid-cols-3 gap-3"
              variants={fadeInUp}
            >
              {[
                { icon: '🌿', label: 'Eteriske oljer' },
                { icon: '🎵', label: 'Harmonisk musikk' },
                { icon: '✨', label: 'Personlig veiledning' },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-turkis/10 rounded-xl p-4 text-center hover:bg-turkis/20 transition-colors"
                >
                  <span className="text-2xl block mb-2">{item.icon}</span>
                  <span className="font-sans text-brun/80 text-sm font-medium">{item.label}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Button - Ren turkis, UNDER TEKST (eneste CTA) */}
            <motion.div variants={fadeInUp}>
              <button
                onClick={onBooking}
                className="w-full md:w-auto px-8 py-4 bg-turkis text-white font-sans font-semibold rounded-full shadow-lg hover:bg-turkis/90 hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-turkis/30"
                aria-label="Book yin yoga med Jannike"
              >
                Book Yin Yoga
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Reviews Section - Kompakt versjon */}
        <motion.div
          className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 md:p-6 shadow-lg border border-turkis/10 max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={fadeInUp}
        >
          <div className="text-center mb-4">
            <h3 className="font-display font-bold text-xl md:text-2xl text-brun">
              Hva andre sier
            </h3>
          </div>

          {/* Review Carousel */}
          <div
            className="relative overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <AnimatePresence mode="wait" custom={reviewDirection}>
              <motion.div
                key={currentReview}
                custom={reviewDirection}
                variants={reviewVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="text-center px-4 md:px-8"
              >
                <blockquote className="font-sans text-base md:text-lg text-brun/80 italic mb-4 max-w-2xl mx-auto leading-relaxed">
                  "{yogaReviews[currentReview].shortQuote}"
                </blockquote>
                <div className="flex items-center justify-center gap-3">
                  <span className="font-sans font-semibold text-brun text-sm">
                    – {yogaReviews[currentReview].name}
                  </span>
                  <button
                    onClick={() => setSelectedReview(currentReview)}
                    className="font-sans text-turkis hover:text-turkis/80 underline text-xs focus:outline-none focus:ring-2 focus:ring-turkis/30 rounded"
                    aria-label={`Les hele anmeldelsen fra ${yogaReviews[currentReview].name}`}
                  >
                    Les mer
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation - Kompakt */}
            <div className="flex items-center justify-center gap-3 mt-4">
              <button
                onClick={handlePrevReview}
                className="w-8 h-8 rounded-full bg-turkis/10 hover:bg-turkis/20 flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-turkis/30"
                aria-label="Forrige anmeldelse"
              >
                <svg className="w-4 h-4 text-turkis" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Dots only - ingen teller */}
              <div className="flex gap-1.5" role="tablist" aria-label="Velg anmeldelse">
                {yogaReviews.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setReviewDirection(index > currentReview ? 1 : -1);
                      setCurrentReview(index);
                    }}
                    className={`w-2 h-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-turkis/30 ${
                      index === currentReview
                        ? 'bg-turkis w-4'
                        : 'bg-turkis/30 hover:bg-turkis/50'
                    }`}
                    aria-label={`Anmeldelse ${index + 1} av ${yogaReviews.length}`}
                    aria-selected={index === currentReview}
                    role="tab"
                  />
                ))}
              </div>

              <button
                onClick={handleNextReview}
                className="w-8 h-8 rounded-full bg-turkis/10 hover:bg-turkis/20 flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-turkis/30"
                aria-label="Neste anmeldelse"
              >
                <svg className="w-4 h-4 text-turkis" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </motion.div>

        {/* INGEN CTA HER - fjernet */}
      </div>

      {/* Image Lightbox - Fullskjerm popup */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative max-w-4xl max-h-[90vh] w-full"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Fullskjerm bilde"
                width={1200}
                height={1600}
                className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
                aria-label="Lukk fullskjerm"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Full Review Modal */}
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
                <span className="inline-block px-3 py-1 bg-turkis/15 text-turkis font-sans text-sm font-medium rounded-full">
                  🧘 Yoga opplevelse
                </span>
                <button
                  onClick={() => setSelectedReview(null)}
                  className="w-8 h-8 rounded-full bg-brun/10 hover:bg-brun/20 flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-turkis/30"
                  aria-label="Lukk"
                >
                  <svg className="w-5 h-5 text-brun" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <blockquote className="font-sans text-brun/80 leading-relaxed mb-6 italic">
                "{yogaReviews[selectedReview].fullQuote}"
              </blockquote>

              <p className="font-sans font-semibold text-brun text-xl">
                – {yogaReviews[selectedReview].name}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

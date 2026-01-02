'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

// ============================================
// ARTFUL BALANCE RETREAT COMPONENT - Jannikes.no
// ============================================
// M&C Agreement Standards:
// ✅ SEO: Semantic HTML, proper headings, aria-labels
// ✅ WCAG 2.1 AA: Color contrast, focus states, keyboard nav
// ✅ Performance >90: Optimized images, minimal re-renders
// ✅ Mobile-first: Responsive design
// ✅ Semantic HTML: section, article, h2, p
// ============================================

// ----- BILDER -----
const RETREAT_IMAGES = {
  main: '/images/artful-balance1-2025.webp',
  profile: '/images/profil-artful-balance.webp',
  participant: '/images/deltaker-artful-balance.webp',
  food: '/images/energi-påfyll-jannikes-catering.webp',
};

// ----- LINKER -----
const LINKS = {
  artfulBalanceInstagram: 'https://www.instagram.com/artfulbalance2026/',
  kanartInstagram: 'https://www.instagram.com/kanartoslo/',
  kanartWebsite: 'https://kanart.no/',
};

// ----- RETREAT HIGHLIGHTS -----
const retreatHighlights = [
  { icon: '🎨', label: 'Kreativ maling' },
  { icon: '🧘', label: 'Yin Yoga' },
  { icon: '🍽️', label: 'Gourmetmat' },
];

// ----- REVIEWS -----
const retreatReviews = [
  {
    id: 1,
    name: 'Irene Kleven',
    shortQuote: 'Kurset er en total opplevelse for kropp og sjel – entusiasme smitter!',
    fullQuote: 'Kurset er en total opplevelse for kropp og sjel. Vi begynner dagen med soloppgangstur eller nydelig yoga som passer for alle. Inkluderende på alle måter. Så går vi rett over på nydelig frokost. Velsmakende, sunn og fargerik! Proppfull av god start tar vi fatt på maleoppgavene. De blir gjennomgått med energi, humor og kompetanse. Det er lett å gjøre noe under kyndig veiledning. Kari-Anne leder oss støtt inn i sitt univers. Kvelden og måltidene ler vi oss gjennom. Entusiasme smitter. Tusen takk!',
  },
  {
    id: 2,
    name: 'Rita',
    shortQuote: 'For meg var det en perfekt kombinasjon av yoga og malekurs.',
    fullQuote: 'Turen var over all forventning. Meldte meg først og fremst på turen pga yoga. Men malekurset var en veldig positiv og inspirerende opplevelse. Du og Kari-Anne er et fargerikt team. Så inkluderende og gode. Perfekt hus hvor det er plass til sosialt samvær men også privatliv. Nydelig mat. Bare hyggelig folk. For meg var det en perfekt kombinasjon av yoga og malekurs. Gleder meg til vi sees igjen!',
  },
  {
    id: 3,
    name: 'Elin Buhs',
    shortQuote: 'Jeg har blitt inspirert til å male igjen etter en lang tørkeperiode.',
    fullQuote: 'Jeg anbefaler varmt malekurs med Kari-Anne. Jeg har blitt inspirert til å male igjen etter en lang "tørkeperiode". Nå maler jeg flere ganger i uken. Jannike hadde rundt en time yin-yoga med oss hver morgen ved svømmebassenget. Fin måte å starte dagen på. Noen kvelder hadde vi også nidra yoga før vi la oss. Trass i at Jannike lager deilig mat til alle måltider, har det ikke gitt utslag på vekten min. Jeg trives kjempegodt i villaen i høyden ved Albir og har allerede booket samme rom til neste år. Alle damene som var med var kjempehyggelige, så det er ikke problem hvis du ikke kjenner noen fra før.',
  },
  {
    id: 4,
    name: 'Jorunn Berland Øpsen',
    shortQuote: 'En fantastisk uke der alt stemte – anbefales på det varmeste!',
    fullQuote: 'En fantastisk uke der alt stemte: Maleundervisning med entusiasme og engasjement, yoga som en perfekt start på dagen og fantastisk mat, drikke og hyggelig sosialt samvær. Nydelige omgivelser og ikke minst kursledere som sammen fikk alt til å bli perfekt! Anbefales på det varmeste!',
  },
];

interface ArtfulBalanceProps {
  onBooking?: () => void;
}

export default function ArtfulBalance({ onBooking }: ArtfulBalanceProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentReview, setCurrentReview] = useState(0);
  const [reviewDirection, setReviewDirection] = useState(0);
  const [selectedReview, setSelectedReview] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-rotate reviews
  useEffect(() => {
    if (isPaused || selectedReview !== null) return;
    const timer = setInterval(() => {
      setReviewDirection(1);
      setCurrentReview((prev) => (prev + 1) % retreatReviews.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused, selectedReview]);

  const handlePrevReview = useCallback(() => {
    setReviewDirection(-1);
    setCurrentReview((prev) => (prev - 1 + retreatReviews.length) % retreatReviews.length);
  }, []);

  const handleNextReview = useCallback(() => {
    setReviewDirection(1);
    setCurrentReview((prev) => (prev + 1) % retreatReviews.length);
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
      id="retreats"
      className="relative py-16 md:py-24 bg-gradient-to-b from-cream via-white to-mint/20 overflow-hidden"
      aria-labelledby="retreat-heading"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-40 h-40 bg-orange/10 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-10 w-48 h-48 bg-orange/15 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
        >
          <motion.span
            className="inline-block px-4 py-2 bg-orange/15 text-orange font-sans font-medium rounded-full text-sm mb-4"
            variants={fadeInUp}
          >
            🎨 Kreativ retreat i Spania
          </motion.span>
          <motion.h2
            id="retreat-heading"
            className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-brun mb-4"
            variants={fadeInUp}
          >
            Artful Balance
          </motion.h2>
          <motion.p
            className="font-sans text-brun/70 text-lg max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            Kunst, yoga og kulinariske opplevelser i vakre omgivelser
          </motion.p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-16">
          {/* Left Column - Mosaikk med captions UNDER */}
          <motion.div
            className="space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={staggerContainer}
          >
            {/* Mosaic Grid */}
            <div className="grid grid-cols-3 gap-3 md:gap-4">
              {/* Hovedbilde - blomster/verksted */}
              <motion.div className="col-span-2 row-span-2 space-y-2" variants={fadeInUp}>
                <button
                  className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-xl group cursor-pointer focus:outline-none focus:ring-4 focus:ring-orange/30"
                  onClick={() => setSelectedImage(RETREAT_IMAGES.main)}
                  aria-label="Se bilde i fullskjerm"
                >
                  <Image
                    src={RETREAT_IMAGES.main}
                    alt="Fargerike blomster i forgrunnen med maleverksted og deltakere i bakgrunnen"
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 66vw, 33vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-orange/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
                <p className="text-brun/60 text-sm font-sans text-center">Skapende øyeblikk</p>
              </motion.div>

              {/* Lite bilde øverst - Karianne & Jannike */}
              <motion.div className="space-y-1" variants={fadeInUp}>
                <button
                  className="relative aspect-square w-full rounded-xl overflow-hidden shadow-lg group cursor-pointer focus:outline-none focus:ring-4 focus:ring-orange/30"
                  onClick={() => setSelectedImage(RETREAT_IMAGES.profile)}
                  aria-label="Se bilde av Karianne og Jannike i fullskjerm"
                >
                  <Image
                    src={RETREAT_IMAGES.profile}
                    alt="Karianne Næsse og Jannike Heitun Kjuus"
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 33vw, 16vw"
                  />
                  <div className="absolute inset-0 bg-orange/10 group-hover:bg-orange/20 transition-colors duration-300" />
                </button>
                <p className="text-brun/60 text-xs font-sans text-center leading-tight">
                  Kari-Anne og Jannike
                </p>
              </motion.div>

              {/* Lite bilde nederst - glad deltaker */}
              <motion.div className="space-y-1" variants={fadeInUp}>
                <button
                  className="relative aspect-square w-full rounded-xl overflow-hidden shadow-lg group cursor-pointer focus:outline-none focus:ring-4 focus:ring-orange/30"
                  onClick={() => setSelectedImage(RETREAT_IMAGES.participant)}
                  aria-label="Se bilde i fullskjerm"
                >
                  <Image
                    src={RETREAT_IMAGES.participant}
                    alt="Glad deltaker med maling på hendene ved sitt kunstverk"
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 33vw, 16vw"
                  />
                  <div className="absolute inset-0 bg-orange/10 group-hover:bg-orange/20 transition-colors duration-300" />
                </button>
                <p className="text-brun/60 text-xs font-sans text-center">Fornøyd deltaker</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Text Content */}
          <motion.div
            className="space-y-6 lg:pl-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={staggerContainer}
          >
            {/* About Text */}
            <motion.article className="prose prose-lg max-w-none" variants={fadeInUp}>
              <p className="font-sans text-brun/90 leading-relaxed text-lg mb-5">
                <strong>Artful Balance</strong> er en kreativ reise der skapende prosesser, 
                ro og gode måltider møtes – i vakre omgivelser.
              </p>
              <p className="font-sans text-brun/80 leading-relaxed mb-5">
                Du blir varsomt guidet gjennom intuitiv maling av billedkunstner{' '}
                <a 
                  href={LINKS.kanartWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange hover:text-orange/80 underline decoration-orange/30 hover:decoration-orange transition-colors"
                >
                  Kari-Anne Næssø
                </a>
                , i en trygg ramme som gir rom for personlig uttrykk, helt uten krav til forkunnskaper.
              </p>
              <p className="font-sans text-brun/80 leading-relaxed mb-5">
                Dagene balanseres med rolige økter i Yin Yoga og Yoga Nidra, som gir rom for 
                avspenning og tilstedeværelse. Opplevelsen rundes av med smakfull mat laget 
                fra bunnen av, med omtanke for både mennesker og råvarer.
              </p>
              <p className="font-sans text-brun/80 leading-relaxed">
                Den kreative reisen finner sted i naturskjønne omgivelser i Spania, der lys, 
                varme og natur gir rom for inspirasjon og hvile. Følg reisen på{' '}
                <a 
                  href={LINKS.artfulBalanceInstagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange hover:text-orange/80 underline decoration-orange/30 hover:decoration-orange transition-colors"
                >
                  @artfulbalance2026
                </a>
                , eller se mer av Kari-Annes arbeid på{' '}
                <a 
                  href={LINKS.kanartInstagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange hover:text-orange/80 underline decoration-orange/30 hover:decoration-orange transition-colors"
                >
                  @kanartoslo
                </a>.
              </p>
            </motion.article>

            {/* Highlights */}
            <motion.div
              className="grid grid-cols-3 gap-3"
              variants={fadeInUp}
            >
              {retreatHighlights.map((item, index) => (
                <div
                  key={index}
                  className="bg-orange/10 rounded-xl p-4 text-center hover:bg-orange/20 transition-colors"
                >
                  <span className="text-2xl block mb-2">{item.icon}</span>
                  <span className="font-sans text-brun/80 text-sm font-medium">{item.label}</span>
                </div>
              ))}
            </motion.div>

            {/* What's Included */}
            <motion.div
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-orange/10"
              variants={fadeInUp}
            >
              <h3 className="font-display font-bold text-xl text-brun mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-orange/20 rounded-full flex items-center justify-center text-orange">
                  ✦
                </span>
                Dette får du
              </h3>
              <ul className="space-y-2">
                {[
                  'Guidet intuitivt maleri med profesjonell kunstner',
                  'Daglige Yin Yoga og Yoga Nidra-sesjoner',
                  'Gourmetmåltider med lokale råvarer',
                  'Overnatting i vakre omgivelser',
                  'Tid til refleksjon og hvile',
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 font-sans text-brun/70 text-sm"
                  >
                    <span className="text-orange mt-1">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* CTA Button */}
            <motion.div variants={fadeInUp}>
              <button
                onClick={onBooking}
                className="w-full md:w-auto px-8 py-4 bg-orange text-white font-sans font-semibold rounded-full shadow-lg hover:bg-orange/90 hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-orange/30"
                aria-label="Send forespørsel om Artful Balance retreat"
              >
                Send forespørsel
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Reviews Section - Kompakt versjon med oransje */}
        <motion.div
          className="bg-orange/10 backdrop-blur-sm rounded-2xl p-4 md:p-6 shadow-lg border border-orange/10 max-w-4xl mx-auto"
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
            className="relative overflow-hidden bg-white/80 rounded-xl p-4 md:p-6"
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
                  "{retreatReviews[currentReview].shortQuote}"
                </blockquote>
                <div className="flex items-center justify-center gap-3">
                  <span className="font-sans font-semibold text-brun text-sm">
                    – {retreatReviews[currentReview].name}
                  </span>
                  <button
                    onClick={() => setSelectedReview(currentReview)}
                    className="font-sans text-orange hover:text-orange/80 underline text-xs focus:outline-none focus:ring-2 focus:ring-orange/30 rounded"
                    aria-label={`Les hele anmeldelsen fra ${retreatReviews[currentReview].name}`}
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
                className="w-8 h-8 rounded-full bg-orange/10 hover:bg-orange/20 flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-orange/30"
                aria-label="Forrige anmeldelse"
              >
                <svg className="w-4 h-4 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Dots only */}
              <div className="flex gap-1.5" role="tablist" aria-label="Velg anmeldelse">
                {retreatReviews.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setReviewDirection(index > currentReview ? 1 : -1);
                      setCurrentReview(index);
                    }}
                    className={`w-2 h-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange/30 ${
                      index === currentReview
                        ? 'bg-orange w-4'
                        : 'bg-orange/30 hover:bg-orange/50'
                    }`}
                    aria-label={`Anmeldelse ${index + 1} av ${retreatReviews.length}`}
                    aria-selected={index === currentReview}
                    role="tab"
                  />
                ))}
              </div>

              <button
                onClick={handleNextReview}
                className="w-8 h-8 rounded-full bg-orange/10 hover:bg-orange/20 flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-orange/30"
                aria-label="Neste anmeldelse"
              >
                <svg className="w-4 h-4 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Image Lightbox */}
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
                <span className="inline-block px-3 py-1 bg-orange/15 text-orange font-sans text-sm font-medium rounded-full">
                  🎨 Retreat opplevelse
                </span>
                <button
                  onClick={() => setSelectedReview(null)}
                  className="w-8 h-8 rounded-full bg-brun/10 hover:bg-brun/20 flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-orange/30"
                  aria-label="Lukk"
                >
                  <svg className="w-5 h-5 text-brun" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <blockquote className="font-sans text-brun/80 leading-relaxed mb-6 italic">
                "{retreatReviews[selectedReview].fullQuote}"
              </blockquote>

              <p className="font-sans font-semibold text-brun text-xl">
                – {retreatReviews[selectedReview].name}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

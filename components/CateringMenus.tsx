'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface CateringMenusProps {
  onBooking: () => void;
}

const cateringPackages = [
  {
    id: 1,
    name: 'Lett & Leken',
    dishes: 6,
    price: '495',
    color: 'orange',
    description: 'Perfekt for småselskaper og hyggestunder',
    features: [
      'Sesongbaserte råvarer',
      'Fargerik presentasjon',
      'Vegan eller vegetar alternativ',
      'Minimum 20 personer'
    ]
  },
  {
    id: 2,
    name: 'Fest & Farger',
    dishes: 10,
    price: '695',
    color: 'turkis',
    description: 'For bursdager, jubileer og feiring',
    features: [
      'Kreative smakskombinasjoner',
      'Kunstnerisk anretning',
      'Vegan eller vegetar 5-retters alternativ',
      'Minimum 20 personer'
    ],
    popular: true
  },
  {
    id: 3,
    name: 'Den Store Festpakken',
    dishes: 15,
    price: '895',
    color: 'cerise',
    description: 'Alt du trenger for den store festen',
    features: [
      'Komplett meny',
      'Raw food-alternativer',
      'Vegan eller vegetar 10-retters alternativ',
      'Minimum 20 personer'
    ]
  },
  {
    id: 4,
    type: 'vertinne',
    name: 'Vertinnepakke – Enkel',
    price: 'På forespørsel',
    color: 'orange',
    description: 'Perfekt for små sammenkomster',
    features: [
      'Borddekking med pynt og servise',
      'Klargjøring før gjestene kommer',
      'Stilfull presentasjon tilpasset ditt arrangement',
      'Minimum 20 personer'
    ]
  },
  {
    id: 5,
    type: 'vertinne',
    name: 'Vertinnepakke – Luksus',
    price: 'På forespørsel',
    color: 'turkis',
    description: 'Alt fra start til slutt',
    features: [
      'Komplett borddekking og dekorasjon',
      'Servering under arrangementet',
      'Profesjonelt serveringspersonale',
      'Fullstendig rydding og oppvask',
      'Minimum 20 personer'
    ]
  }
];

// ALLE 20 catering reviews...
const cateringReviews = [
  {
    id: 1,
    name: 'Olga og Lars',
    quote: 'Jannikes Catering anbefales på det varmeste! Vi bestilte mat til 80+ personer, og både kvalitet og service var helt enestående. Maten var elegant presentert, laget med omsorg og kreativitet, og smakte fantastisk. Det var tydelig at alt var hjemmelaget, med gode råvarer og gjennomtenkte smaker❤️. Vi fikk utelukkende skryt fra gjestene! Tusen takk for en fantastisk opplevelse! Vi kommer garantert tilbake 😃',
    short: 'Maten var elegant presentert, laget med omsorg og kreativitet – vi fikk utelukkende skryt fra gjestene!'
  },
  {
    id: 2,
    name: 'Ingeborg Karine og Per Reidar',
    quote: 'Tusen takk, Jannike💃🏻💛 Du laget festen til et minne som ble veldig spennende med de mest fortryllende retter til vårt gullbryllup nylig. Du vet alt om å sette sammen forskjellige smaker så rettene hver for seg blir velkjente pikante, spennende og svært velsmakende. Jannike sin catering fortjener faktisk godt en plass blant Michelin-folket. Så hvis du vil sikre deg et selskap ingen skal glemme – så flott at mange (over 100 personer) fikk kose seg med deilige retter i varianter vi liker.',
    short: 'Jannike sin catering fortjener faktisk godt en plass blant Michelin-folket!'
  },
  {
    id: 3,
    name: 'Elin og Gaute',
    quote: 'I anledning vår doble 50 års feiring hadde vi leid inn Jannike og crewet hennes til borddekking, matlaging, servering og rydding. Det har vært fin og god kommunikasjon hele veien i forkant. Jannike er ryddig og gir rask respons. Bordene var nydelig dekket og pyntet til fest, maten var av topp kvalitet, tilrettelagt for allergier også. Servitørene var hyggelige, raske og flinke med oppgavene sine. Vi har tidligere brukt Jannike i anledning 80 års feiring og har samme erfaring med henne herfra. Vil absolutt anbefale Jannike m crew til slike feiringer! 🥰🥰',
    short: 'Bordene var nydelig dekket og pyntet til fest, maten var av topp kvalitet!'
  },
  {
    id: 4,
    name: 'Tina L. Pedersen',
    quote: 'Etter å ha deltatt på en yogaretreat, der Jannike lagde all maten, har jeg tenkt på maten hennes i snart ett år! Det er sjelden å få servert så smakfulle kunstverk som hun lager. Anbefales på det sterkeste ☀️',
    short: 'Det er sjelden å få servert så smakfulle kunstverk – jeg har tenkt på maten i snart ett år!'
  },
  {
    id: 5,
    name: 'Thea',
    quote: 'Som en helsebevisst person er jeg opptatt av både kvalitet og smak når det kommer til mat. Jannikes mat får høyeste skår i begge kategorier.🪷 Laget fra bunnen med gode, naturlige råvarer. Helsefremmende og ikke minst fantastisk godt.',
    short: 'Jannikes mat får høyeste skår i kvalitet og smak – helsefremmende og fantastisk godt!'
  },
  {
    id: 6,
    name: 'Niklas (Se & Hør)',
    quote: 'Jannike har ved mange anledninger jobbet for både Aller og Se og Hør både til catering og større vertinne-oppdrag. De siste 20 årene som vertinne på Se og Hør sine julebord. Det har utelukkende vært meget gode leveringer, og alltid til riktig tid og med kvalitet. Jannike leverer alltid førsteklasses service og ingen jobb er for stor eller for liten. Jeg kan anbefale Jannikes Catering til alle som vil slippe å tenke på noe selv😊',
    short: 'Jannike leverer alltid førsteklasses service – 20 år som vertinne på Se og Hør sine julebord!'
  },
  {
    id: 7,
    name: 'Ane (Yoga med Ane)',
    quote: 'Vi er så takknemlig og glad for at Jannike vil være sammen med oss på våre yogaferier i Spania. Hun har vært vår faste kokk siden 2022, og vi har også engasjert henne for våre fire yogaferier i 2026. Jannike er en utrolig dyktig kokk som byr på smakfull, næringsrik og fargerik mat som er en fryd for alle sansene. Hun har en helt spesiell evne til å bruke gode råvarer og kombinere spennende smaker.',
    short: 'Hun bidrar ikke bare med nydelig mat, men også med sitt sprudlende humør og sin tilstedeværelse.'
  },
  {
    id: 8,
    name: 'Benedicte og Øystein',
    quote: 'Jannike var hovmester og festleder i vårt bryllup. Mange gjester i et vakkert, men ikke tilpasset lokale krevde sitt. Det ble utrolig vakkert. Vi var strålende fornøyd med hennes servitører, nydelig, stemningsskapende pynting og selve gjennomføringen. Det ble en stor dag. Vi kunne lene oss tilbake og nyte alt sammen. Stor takk til Jannike!',
    short: 'Vi kunne lene oss tilbake og nyte alt sammen – en stor dag!'
  },
  {
    id: 9,
    name: 'Per Arne og Anne Kirsti',
    quote: 'Vi brukte Jannike da mannen min skulle feire 60-års dag. Jannike lager nydelig tapas! Det vi falt for var smakskombinasjonene og fargene på tapasbordet. Jannike lager spennende mat, også retter vi ikke får på de fleste andre tapasbord. Det er spennende og veldig, veldig godt! Hun er imøtekommende, hyggelig, fleksibel og ryddig.',
    short: 'Jannike lager nydelig tapas – smakskombinasjonene og fargene er fantastiske!'
  },
  {
    id: 10,
    name: 'Christine Sunde',
    quote: 'Vi bestilte tapas fra Jannike til et avdelingstreff tidlig i januar. Vi ønsket noe lett mat etter julen og Jannike leverte med en variert og fargerik tapasbuffet med noe for enhver smak. Verdens beste foccacia og parmesanpoteter kom ved siden av kjøttboller, couscous, reker i yoghurt og nydelig fylt spekeskinke og annet godt. Jannike hadde laget rause porsjoner og leverte upåklagelig service. Helt topp!',
    short: 'Verdens beste foccacia – rause porsjoner og upåklagelig service!'
  },
  {
    id: 11,
    name: 'Myrgana',
    quote: 'Jannikes levering på vårt koselige juleselskap var en veldig hyggelig opplevelse med deilige små tapas retter med litt julevri på. Jannike er en skjønn dame som er så behagelig vesen og effektiv dame både med levering og tilbereding av maten. Rawfood kaken var kjempegod. Den falt i smak hos alle. Og ikke glemme den gode julegløggen som alle digget😇',
    short: 'Gode smaker for alle som spiser store og små – rawfood kaken var kjempegod!'
  },
  {
    id: 12,
    name: 'Anne (Det gode Vinliv)',
    quote: 'Jannike tryller frem de lekreste retter. Hun leverte en meny som var over all forventning. Kreativt, innbydende og velsmakende. Anbefales virkelig!',
    short: 'Jannike tryller frem de lekreste retter – over all forventning!'
  },
  {
    id: 13,
    name: 'Kristine',
    quote: 'Wow 🤩👏🏼 For en nydelig kveld med så mye gode smaker i mat til vin. Du er helt rå!!! Og jeg må si at sausen til ribben var helt utsøkt i smak og passet perfekt til maten. Og så tryllet du med kanel og anis i riskremen - assa jeg ga meg helt over av smakene og hva du får til! Jeg bøyer meg i støvet og er evig takknemlig for din mat 👏🏼🥰♥️',
    short: 'Jeg bøyer meg i støvet og er evig takknemlig for din mat!'
  },
  {
    id: 14,
    name: 'Hildegunn Opstad',
    quote: 'Vi har hatt gleden av å nyte mat fra Jannikes catering flere ganger i løpet av det siste året. Hver gang presenterer Jannike smakfulle retter, enten det er tapas, kaker, fingermat eller andre typer buffeter. Maten er alltid smakfullt og vakkert anrettet, og service og smil får du med på kjøpet. Det er tydelig at rettene er tilberedt med gode råvarer, og sans for kreativitet og kvalitet.',
    short: 'Maten er alltid smakfullt og vakkert anrettet – service og smil får du med på kjøpet!'
  },
  {
    id: 15,
    name: 'Annemor Sunde',
    quote: 'Har hatt Jannike til å lage mat til min manns bursdag. Nydelig mat og rause porsjoner. Hun er en fryd å ha på kjøkkenet, ryddig og en super estetiker. Fargesprakende og velsmakende. Ekstra hyggelig at hun selv introduserte rettene for gjestene. Har bare gode erfaringer med den nydelige maten hennes og hennes blide åsyn😘',
    short: 'Fargesprakende og velsmakende – en fryd å ha på kjøkkenet!'
  },
  {
    id: 16,
    name: 'Anna Veronica',
    quote: 'I had the pleasure of Jannike\'s food on a three day retreat in Spain. It was amazing to say the least. The presentation, colour and choice was so impressive and the food tasted unbelievable. Such a variety of flavours and options for everyone. I ate way too much as it was just so good. Each day there was a great choice on offer and all made with so much love and passion.',
    short: 'Such a variety of flavours and options for everyone – all made with love and passion!'
  },
  {
    id: 17,
    name: 'Trine Haugaard',
    quote: 'Jannike leverte meget god mat. Vi var svært fornøyd med kvaliteten, presentasjonen av rettene og oppfølgingen underveis. Kan anbefales på det varmeste!',
    short: 'Svært fornøyd med kvaliteten og presentasjonen – anbefales på det varmeste!'
  },
  {
    id: 18,
    name: 'Marit Nordheim',
    quote: 'Tidenes overraskelse fest ble arrangert av Jannike for min datter sin konfirmasjon ❤️ Alt stemte. Farger, mat og stemning. Jeg gav Jannike frie tøyler til å ordne hennes fine dag. Min datter elsker Frida Kahlo og resultatet ble helt fantastisk! Anbefaler Jannike på det sterkeste❤️❤️❤️',
    short: 'Alt stemte – farger, mat og stemning. Min datter elsker Frida Kahlo!'
  },
  {
    id: 19,
    name: 'Marit',
    quote: 'Jannike tok seg av all mat i forbindelse med et jubileum vi hadde. Maten var helt vidunderlig og var samtidig lekkert dandert. Jannike er behagelig å jobbe med, punktlig og alltid blid. Med sitt herlige vesen, kastet hun glans over selskapet. Vi ruller terningen og den stopper på 6🙏',
    short: 'Vi ruller terningen og den stopper på 6 – kastet glans over selskapet!'
  },
  {
    id: 20,
    name: 'Arn og Kine',
    quote: 'Vi er veldig fornøyde med den flotte jobben Jannike gjorde i vårt bryllup med i overkant av 100 gjester. En fantastisk «alt-i-ett pakke», med hjelp til planlegging, oppdekning, pynting og sist, men ikke minst nydelig mat. Resultatet ble en fantastisk atmosfære og vellykket fest. Kan varmt anbefale Jannikes catering!',
    short: 'Resultatet ble en fantastisk atmosfære og vellykket fest – over 100 gjester!'
  }
];

const galleryImages = [
  // Rad 1
  { src: '/images/bitesize-jannikes-catering.webp', alt: 'Småretter - fargerike appetittvekkere', span: 'col-span-1 row-span-1' },
  { src: '/images/sommersalat-jannikes-catering.webp', alt: 'Fargerik sommersalat med bær', span: 'col-span-1 row-span-1' },
  { src: '/images/sandwich-jannikes-catering.webp', alt: 'Hjemmelagde smørbrød på rekke', span: 'col-span-1 row-span-1' },
  // Rad 2 - Jannike i midten
  { src: '/images/mediterranean-flavour-jannikes-catering.webp', alt: 'Couscous med granateple og fetaost', span: 'col-span-1 row-span-1' },
  { src: '/images/profil3-jannikes-catering.webp', alt: 'Jannike - vertinne og kokk', span: 'col-span-1 row-span-1 ring-4 ring-cerise/30' },
  { src: '/images/middelhavet-ost-jannikes-catering.webp', alt: 'Vannmelon med fetaost og kirsebær', span: 'col-span-1 row-span-1' },
];

export default function CateringMenus({ onBooking }: CateringMenusProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentReview, setCurrentReview] = useState(0);
  const [reviewDirection, setReviewDirection] = useState(0); // -1 = left, 1 = right
  const [selectedReview, setSelectedReview] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const nextSlide = () => {
  if (isMobile) {
    setCurrentSlide((prev) => (prev + 1) % cateringPackages.length);
  } else {
    const maxSlide = Math.max(0, cateringPackages.length - 3);
    setCurrentSlide((prev) => (prev + 1) > maxSlide ? 0 : prev + 1);
  }
  };

  const prevSlide = () => {
    if (isMobile) {
    setCurrentSlide((prev) => (prev - 1 + cateringPackages.length) % cateringPackages.length);
  } else {
    const maxSlide = Math.max(0, cateringPackages.length - 3);
    setCurrentSlide((prev) => (prev - 1 < 0 ? maxSlide : prev - 1));
  }
  };

  const nextReview = () => {
    setReviewDirection(1);
    setCurrentReview((prev) => (prev + 1) % cateringReviews.length);
  };

  const prevReview = () => {
    setReviewDirection(-1);
    setCurrentReview((prev) => (prev - 1 + cateringReviews.length) % cateringReviews.length);
  };

  // Calculate slide transform for menu carousel
  const getMenuTransform = () => {
    if (isMobile) {
      return `translateX(-${currentSlide * 100}%)`;
    } else {
      // Desktop: show 3 at a time
      const slideWidth = 100 / 3; // Each card is 33.33% of container
      return `translateX(-${currentSlide * slideWidth}%)`;
    }
  };

  // Calculate max slides
  const maxSlide = isMobile ? cateringPackages.length - 1 : Math.max(0, cateringPackages.length - 3);

  return (
    <>
      <section id="catering" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cream via-mint/10 to-gul/10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-display text-4xl md:text-5xl font-bold text-brun mb-4"
            >
              Catering og vertinne
            </motion.h2>
          </div>

          {/* Images Mosaic - 3x2 Grid with Jannike in center */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-3 gap-3 md:gap-4 mb-12 max-w-4xl mx-auto"
          >
            {galleryImages.map((img, index) => (
              <motion.div
                key={img.src}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative aspect-square rounded-2xl overflow-hidden shadow-lg cursor-pointer group ${img.span}`}
                onClick={() => setSelectedImage(img.src)}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                  <svg className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Catering Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <p className="text-lg md:text-xl text-brun/80 leading-relaxed mb-4">
              Som kokk elsker jeg å bruke gode råvarer til å skape matopplevelser som både smaker 
nydelig og ser innbydende ut. Maten lages fra bunnen av og tilpasses anledningen – 
enten du ønsker full catering eller trenger hjelp til deler av måltidet.
            </p>
            <p className="text-lg md:text-xl text-brun/80 leading-relaxed">
       Jeg tilbyr både komplett catering og vertinnetjenester. Enten du har egen kokk og trenger 
ekstra hender, eller ønsker at jeg tar ansvar for hele opplevelsen – fra planlegging til 
servering – sørger jeg for at alt flyter sømløst.
            </p>
                        <p className="text-lg md:text-xl text-brun/80 leading-relaxed">
  Med meg som vertinne blir gjestene godt ivaretatt, og stemningen lett og avslappet. Bordene 
dekkes med omtanke, enten du ønsker et fargerikt og lekent uttrykk eller et mer enkelt og 
elegant preg.
            </p>
                       <p className="text-lg md:text-xl text-brun/80 leading-relaxed">
Jeg gir gjerne råd underveis og tilpasser meny, stil og detaljer etter dine ønsker og 
anledninger.
            </p>
          </motion.div>

          {/* Menu Carousel - 3 slides on desktop, 1 on mobile */}
          <div className="mb-16">
            <h3 className="font-display text-3xl font-bold text-brun text-center mb-8">
              Menyer & Vertinnepakker
            </h3>
            
            <div className="relative max-w-7xl mx-auto">
              {/* Carousel Container */}
              <div className="overflow-hidden">
                <div 
                  className="flex transition-transform duration-500 ease-out"
                  style={{ transform: getMenuTransform() }}
                >
                  {cateringPackages.map((pkg) => (
                    <div
                      key={pkg.id}
                      className={`flex-shrink-0 px-2 ${isMobile ? 'w-full' : 'w-1/3'}`}
                    >
                      <div className={`bg-white rounded-3xl shadow-xl overflow-hidden h-full ${
                        pkg.popular ? 'ring-4 ring-cerise' : ''
                      }`}>
                        {pkg.popular && (
                          <div className="absolute top-4 right-4 bg-cerise text-white px-4 py-1 rounded-full text-sm font-semibold z-10">
                            Mest populær
                          </div>
                        )}

                        <div className={`h-3 bg-${pkg.color}`} />

                        <div className="p-6">
                          <h4 className="font-display text-2xl font-bold text-brun mb-2">
                            {pkg.name}
                          </h4>
                          <p className="text-brun/70 mb-4 text-sm">{pkg.description}</p>

                          <div className="flex items-baseline mb-4">
                            {pkg.type === 'vertinne' ? (
                              <span className="text-2xl font-bold text-brun">{pkg.price}</span>
                            ) : (
                              <>
                                <span className="text-4xl font-bold text-brun">{pkg.price}</span>
                                <span className="text-lg text-brun/70 ml-2">kr / kuvert</span>
                              </>
                            )}
                          </div>

                          <div className="mb-4">
                            {pkg.dishes && (
                              <div className="flex items-center text-brun/80 mb-2">
                                <svg className="w-4 h-4 mr-2 text-orange" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                                  <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"/>
                                </svg>
                                <span className="font-semibold text-sm">{pkg.dishes} retter</span>
                              </div>
                            )}

                            <ul className="space-y-1">
                              {pkg.features.map((feature, idx) => (
                                <li key={idx} className="flex items-start text-sm">
                                  <svg className="w-4 h-4 mr-2 text-mint flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                                  </svg>
                                  <span className="text-brun/70">{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <button
                            onClick={onBooking}
                            className={`w-full py-2 bg-${pkg.color} text-white font-semibold rounded-full hover:opacity-90 hover:shadow-lg transition-all text-sm`}
                          >
                            Be om tilbud
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                disabled={currentSlide === 0}
                className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all z-10 ${
                  currentSlide === 0 ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                aria-label="Previous"
              >
                <svg className="w-6 h-6 text-brun" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                disabled={currentSlide === maxSlide}
                className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all z-10 ${
                  currentSlide === maxSlide ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                aria-label="Next"
              >
                <svg className="w-6 h-6 text-brun" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Dots Indicator */}
              <div className="flex justify-center gap-2 mt-6">
                <div className="w-2 h-2 rounded-full bg-brun/30" />
                <div className={`w-2 h-2 rounded-full transition-all ${currentSlide === 0 ? 'bg-cerise w-8' : 'bg-brun/30'}`} />
                <div className={`w-2 h-2 rounded-full transition-all ${currentSlide > 0 ? 'bg-cerise w-8' : 'bg-brun/30'}`} />
              </div>
            </div>
          </div>

          {/* Reviews Section - Kompakt versjon som Yoga */}
          <motion.div
            className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 md:p-6 shadow-lg border border-orange/10 max-w-4xl mx-auto mb-12"
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
                    "{cateringReviews[currentReview].short}"
                  </blockquote>
                  <div className="flex items-center justify-center gap-3">
                    <span className="font-sans font-semibold text-brun text-sm">
                      – {cateringReviews[currentReview].name}
                    </span>
                    <button
                      onClick={() => setSelectedReview(currentReview)}
                      className="font-sans text-orange hover:text-orange/80 underline text-xs focus:outline-none focus:ring-2 focus:ring-orange/30 rounded"
                      aria-label={`Les hele anmeldelsen fra ${cateringReviews[currentReview].name}`}
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
                  className="w-8 h-8 rounded-full bg-orange/10 hover:bg-orange/20 flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-orange/30"
                  aria-label="Forrige anmeldelse"
                >
                  <svg className="w-4 h-4 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                {/* Dots */}
                <div className="flex gap-1.5" role="tablist" aria-label="Velg anmeldelse">
                  {cateringReviews.slice(0, 10).map((_, index) => (
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
                      aria-label={`Anmeldelse ${index + 1}`}
                      aria-selected={index === currentReview}
                      role="tab"
                    />
                  ))}
                </div>

                <button
                  onClick={nextReview}
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

          {/* Info Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-lg p-8 max-w-3xl mx-auto mb-12"
          >
            <h3 className="font-display text-2xl font-bold text-brun mb-4">
              Viktig informasjon
            </h3>
            <ul className="space-y-3 text-brun/80">
              <li className="flex items-start">
                <svg className="w-6 h-6 mr-3 text-orange flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span><strong>Minimum:</strong> 20 personer for alle pakker</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 mr-3 text-orange flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span><strong>Priser:</strong> Er veiledende og avhenger av sesong, råvarer og antall gjester</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 mr-3 text-orange flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span><strong>Vegan eller vegetar:</strong> Alle menyer kan tilpasses til 100% plantebasert</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 mr-3 text-orange flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
                <span><strong>Bestilling:</strong> Kontakt meg minst 2 uker før arrangementet</span>
              </li>
            </ul>
          </motion.div>

          {/* Large CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <button
              onClick={onBooking}
              className="px-12 py-5 bg-orange text-white text-xl font-bold rounded-full hover:opacity-90 hover:shadow-2xl hover:scale-105 transition-all"
            >
              Be om tilbud nå!
            </button>
          </motion.div>
        </div>
      </section>

      {/* Image Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4 cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-6xl max-h-[90vh] w-full"
            >
              <Image
                src={selectedImage}
                alt="Fullsize image"
                width={1200}
                height={800}
                className="w-full h-auto rounded-lg"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
                aria-label="Close"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
                <span className="inline-block px-3 py-1 bg-orange/15 text-orange font-sans text-sm font-medium rounded-full">
                  🍽️ Catering opplevelse
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
                "{cateringReviews[selectedReview].quote}"
              </blockquote>

              <p className="font-sans font-semibold text-brun text-xl">
                – {cateringReviews[selectedReview].name}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sticky CTA Button - MOBILE ONLY */}
      {isMobile && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 z-40"
        >
          <button
            onClick={onBooking}
            className="px-8 py-4 bg-orange text-white font-bold rounded-full shadow-2xl hover:opacity-90 hover:scale-105 transition-all flex items-center gap-2"
          >
            Be om tilbud nå!
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </motion.div>
      )}
    </>
  );
}

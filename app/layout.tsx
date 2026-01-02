import type { Metadata } from 'next'
import { Josefin_Sans, Nunito } from 'next/font/google'
import './globals.css'

const josefin = Josefin_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-josefin',
  weight: ['300', '400', '500', '600', '700'],
})

const nunito = Nunito({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-nunito',
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
  // Basic Meta
  title: 'Jannikes Catering | Catering, Vertinne & Retreat Chef i Oslo & Asker',
  description: 'Profesjonell catering og vertinnetjenester i Oslo, Asker og Bærum. Sertifisert Retreat Chef med fokus på plantebasert, fargerik mat. Perfekt til selskaper, bryllup, jubileer og retreats.',
  keywords: 'catering Oslo, catering Asker, catering Bærum, vertinne, retreat chef Norge, plantebasert catering, vegansk catering, selskap catering, bryllup catering, tapas catering, yoga retreat mat',
  authors: [{ name: 'Jannike Heitun Kjuus' }],
  creator: 'Hárika Creative',
  publisher: 'Jannikes Catering',
  
  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Canonical
  alternates: {
    canonical: 'https://jannikes.no',
  },

  // Open Graph (Facebook, LinkedIn, etc.)
  openGraph: {
    type: 'website',
    locale: 'nb_NO',
    url: 'https://jannikes.no',
    siteName: 'Jannikes Catering',
    title: 'Jannikes Catering | Catering, Vertinne & Retreat Chef',
    description: 'Profesjonell catering og vertinnetjenester i Oslo, Asker og Bærum. Fargerik mat, varme mennesker, kreative opplevelser.',
    images: [
      {
        url: 'https://jannikes.no/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Jannikes Catering - Fargerik mat og kreative opplevelser',
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'Jannikes Catering | Catering, Vertinne & Retreat Chef',
    description: 'Profesjonell catering og vertinnetjenester i Oslo, Asker og Bærum. Fargerik mat, varme mennesker, kreative opplevelser.',
    images: ['https://jannikes.no/images/og-image.jpg'],
  },

  // Icons
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },

  // Manifest
  manifest: '/site.webmanifest',

  // Other
  category: 'food & drink',
}

// Schema.org JSON-LD for LocalBusiness
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FoodService',
  '@id': 'https://jannikes.no/#business',
  name: 'Jannikes Catering',
  alternateName: 'Jannikes Catering og Vertinne',
  description: 'Profesjonell catering og vertinnetjenester i Oslo, Asker og Bærum. Sertifisert Retreat Chef med fokus på plantebasert, fargerik mat.',
  url: 'https://jannikes.no',
  logo: 'https://jannikes.no/images/android-chrome-512x512.png',
  image: 'https://jannikes.no/images/sommersalat-jannikes-catering.webp',
  telephone: '+47 930 33 966',
  email: 'jannike@jannikes.no',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Asker',
    addressRegion: 'Viken',
    addressCountry: 'NO',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 59.8333,
    longitude: 10.4333,
  },
  areaServed: [
    {
      '@type': 'City',
      name: 'Oslo',
    },
    {
      '@type': 'City', 
      name: 'Asker',
    },
    {
      '@type': 'City',
      name: 'Bærum',
    },
  ],
  priceRange: '$$',
  servesCuisine: ['Mediterranean', 'Plant-based', 'Vegan', 'Nordic'],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Catering Menyer',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'FoodService',
          name: 'Lett & Leken',
          description: '6 retter, perfekt for småselskaper',
        },
        price: '495',
        priceCurrency: 'NOK',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: '495',
          priceCurrency: 'NOK',
          unitText: 'per kuvert',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'FoodService',
          name: 'Fest & Farger',
          description: '10 retter, for bursdager og jubileer',
        },
        price: '695',
        priceCurrency: 'NOK',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: '695',
          priceCurrency: 'NOK',
          unitText: 'per kuvert',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'FoodService',
          name: 'Den Store Festpakken',
          description: '15 retter, komplett meny for den store festen',
        },
        price: '895',
        priceCurrency: 'NOK',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: '895',
          priceCurrency: 'NOK',
          unitText: 'per kuvert',
        },
      },
    ],
  },
  sameAs: [
    'https://www.instagram.com/jannikescatering/',
    'https://www.facebook.com/people/Vertinne-catering-og-god-stemning/100063769113430/',
    'https://www.bettinaskitchen.com/chef-directory/jannike-heitun-kjuus',
  ],
  founder: {
    '@type': 'Person',
    name: 'Jannike Heitun Kjuus',
    jobTitle: 'Sertifisert Retreat Chef',
    sameAs: 'https://www.bettinaskitchen.com/chef-directory/jannike-heitun-kjuus',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="no" className={`${josefin.variable} ${nunito.variable}`}>
      <head>
        {/* Geo Tags for Local SEO */}
        <meta name="geo.region" content="NO-30" />
        <meta name="geo.placename" content="Asker, Viken, Norway" />
        <meta name="geo.position" content="59.8333;10.4333" />
        <meta name="ICBM" content="59.8333, 10.4333" />
        
        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={nunito.className}>{children}</body>
    </html>
  )
}

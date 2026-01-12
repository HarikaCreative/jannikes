import type { Metadata } from 'next'
import { Domine, Archivo } from 'next/font/google'
import './globals.css'

const domine = Domine({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-domine',
  weight: ['400', '500', '600', '700'],
})

const archivo = Archivo({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-archivo',
  weight: ['300', '400', '500', '600'],
})

export const metadata: Metadata = {
  title: 'Jannikes Catering | Catering, Vertinne & Retreat Chef i Oslo & Asker',
  description: 'Profesjonell catering og vertinnetjenester i Oslo, Asker og Bærum. Sertifisert Retreat Chef med fokus på plantebasert, fargerik mat. Perfekt til selskaper, bryllup, jubileer og retreats.',
  keywords: 'catering Oslo, catering Asker, catering Bærum, vertinne, retreat chef Norge, plantebasert catering, vegansk catering, selskap catering, bryllup catering, tapas catering, yoga retreat mat',
  authors: [{ name: 'Jannike Heitun Kjuus' }],
  creator: 'Hárika Creative',
  publisher: 'Jannikes Catering',
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
  alternates: {
    canonical: 'https://jannikes.no',
  },
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
  twitter: {
    card: 'summary_large_image',
    title: 'Jannikes Catering | Catering, Vertinne & Retreat Chef',
    description: 'Profesjonell catering og vertinnetjenester i Oslo, Asker og Bærum. Fargerik mat, varme mennesker, kreative opplevelser.',
    images: ['https://jannikes.no/images/og-image.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  category: 'food & drink',
}

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
    { '@type': 'City', name: 'Oslo' },
    { '@type': 'City', name: 'Asker' },
    { '@type': 'City', name: 'Bærum' },
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
    <html lang="no" className={`${domine.variable} ${archivo.variable}`}>
      <head>
        <meta name="geo.region" content="NO-30" />
        <meta name="geo.placename" content="Asker, Viken, Norway" />
        <meta name="geo.position" content="59.8333;10.4333" />
        <meta name="ICBM" content="59.8333, 10.4333" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={archivo.className}>{children}</body>
    </html>
  )
}

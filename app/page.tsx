'use client';

import { useState } from 'react';
import Link from 'next/link';
import Hero from '@/components/Hero';
import CateringMenus from '@/components/CateringMenus';
import RetreatChef from '@/components/RetreatChef';
import Yoga from '@/components/Yoga';
import ArtfulBalance from '@/components/ArtfulBalance';
import About from '@/components/About';
import Contact from '@/components/Contact';

export default function HomePage() {
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-cream">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-turkis shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <a href="#" className="flex-shrink-0" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
              <img 
                src="/images/android-chrome-512x512.png" 
                alt="Jannikes Catering" 
                className="h-16 w-16 cursor-pointer"
              />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#catering" className="text-white hover:text-cream transition-colors font-semibold">
                Catering
              </a>
              <a href="#retreat" className="text-white hover:text-cream transition-colors font-semibold">
                Retreat Chef
              </a>
              <a href="#yoga" className="text-white hover:text-cream transition-colors font-semibold">
                Yoga
              </a>
              <a href="#retreats" className="text-white hover:text-cream transition-colors font-semibold">
                Opplevelser
              </a>
              <a href="#kontakt" className="text-white hover:text-cream transition-colors font-semibold">
                Om Jannike / Kontakt
              </a>
              <button
                onClick={() => setShowBookingModal(true)}
                className="px-6 py-3 bg-cerise text-white font-semibold rounded-full hover:bg-cerise/90 hover:shadow-lg transition-all"
              >
                Be om tilbud
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-white p-2"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Slide-out */}
        <div 
          className={`md:hidden fixed inset-y-0 right-0 w-64 bg-turkis shadow-2xl transform transition-transform duration-300 ease-in-out z-50 ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full pt-20 px-6 space-y-6">
            <a 
              href="#catering" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-white hover:text-cream transition-colors font-semibold text-lg"
            >
              Catering
            </a>
            <a 
              href="#retreat" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-white hover:text-cream transition-colors font-semibold text-lg"
            >
              Retreat Chef
            </a>
            <a 
              href="#yoga" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-white hover:text-cream transition-colors font-semibold text-lg"
            >
              Yoga
            </a>
            <a 
              href="#retreats" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-white hover:text-cream transition-colors font-semibold text-lg"
            >
              Opplevelser
            </a>
            <a 
              href="#kontakt" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-white hover:text-cream transition-colors font-semibold text-lg"
            >
              Om Jannike / Kontakt
            </a>
            <button
              onClick={() => {
                setShowBookingModal(true);
                setMobileMenuOpen(false);
              }}
              className="px-6 py-3 bg-orange hover:bg-orange/90 text-white font-semibold rounded-full hover:shadow-lg transition-all text-center"
            >
              Be om tilbud
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div 
            className="md:hidden fixed inset-0 bg-black/30 z-40"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
      </nav>

      {/* Main Content */}
      <main className="pt-20">
        <Hero onBooking={() => setShowBookingModal(true)} />
        <CateringMenus onBooking={() => setShowBookingModal(true)} />
        <RetreatChef onBooking={() => setShowBookingModal(true)} />
        <Yoga />
        <ArtfulBalance onBooking={() => setShowBookingModal(true)} />
        <About />
        <Contact showModal={showBookingModal} onClose={() => setShowBookingModal(false)} />
      </main>

      {/* Footer - Kompakt layout */}
      <footer className="bg-brun text-cream py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Desktop Layout */}
          <div className="hidden md:grid md:grid-cols-3 gap-8 items-start">
            {/* Left - Logo & Tagline */}
            <div className="flex items-start gap-4">
              <img 
                src="/images/android-chrome-512x512.png" 
                alt="Jannikes Catering" 
                className="h-16 w-auto"
              />
              <div className="text-cream/80 text-sm leading-relaxed">
                <p>Fargerik mat.</p>
                <p>Varme mennesker.</p>
                <p>Kreative opplevelser.</p>
              </div>
            </div>

            {/* Center - Contact & Social */}
            <div className="text-right">
              <h4 className="font-display font-semibold text-lg mb-3">Kontakt</h4>
              <div className="space-y-2 text-cream/80 text-sm">
                <a href="mailto:jannike@jannikes.no" className="flex items-center justify-end gap-2 hover:text-mint transition-colors">
                  jannike@jannikes.no
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </a>
                <a href="tel:+4793033966" className="flex items-center justify-end gap-2 hover:text-mint transition-colors">
                  930 33 966
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                </a>
              </div>
              <a 
                href="https://www.instagram.com/jannikescatering"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-end gap-2 mt-3 text-cream/80 hover:text-mint transition-colors text-sm"
              >
                Følg meg på Instagram
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>

            {/* Right - Legal */}
            <div className="text-right text-sm">
              <div className="space-y-1">
                <Link href="/cookie-policy" className="block text-cream/80 hover:text-mint transition-colors">
                  Cookie Policy
                </Link>
                <Link href="/privacy-policy" className="block text-cream/80 hover:text-mint transition-colors">
                  Personvern
                </Link>
              </div>
              <p className="mt-4 text-cream/60 text-xs">
                © 2026{' '}
                <a 
                  href="https://harika.no" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-mint transition-colors"
                >
                  HárikaCreative
                </a>
              </p>
            </div>
          </div>

          {/* Mobile Layout - Stacked */}
          <div className="md:hidden space-y-8">
            {/* Logo & Tagline */}
            <div className="flex flex-col items-center text-center">
              <img 
                src="/images/android-chrome-512x512.png" 
                alt="Jannikes Catering" 
                className="h-14 w-auto mb-3"
              />
              <div className="text-cream/80 text-sm">
                <p>Fargerik mat. Varme mennesker. Kreative opplevelser.</p>
              </div>
            </div>

            {/* Contact & Social */}
            <div className="text-center">
              <h4 className="font-display font-semibold mb-2">Kontakt</h4>
              <div className="space-y-1 text-cream/80 text-sm">
                <p>
                  <a href="mailto:jannike@jannikes.no" className="hover:text-mint transition-colors">
                    jannike@jannikes.no
                  </a>
                </p>
                <p>
                  <a href="tel:+4793033966" className="hover:text-mint transition-colors">
                    930 33 966
                  </a>
                </p>
              </div>
              <a 
                href="https://www.instagram.com/jannikescatering"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-3 text-cream/80 hover:text-mint transition-colors text-sm"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                Følg meg på Instagram
              </a>
            </div>

            {/* Legal */}
            <div className="text-center text-sm border-t border-cream/20 pt-6">
              <div className="flex justify-center gap-4 mb-3">
                <Link href="/cookie-policy" className="text-cream/80 hover:text-mint transition-colors">
                  Cookie Policy
                </Link>
                <Link href="/privacy-policy" className="text-cream/80 hover:text-mint transition-colors">
                  Personvern
                </Link>
              </div>
              <p className="text-cream/60 text-xs">
                © 2026{' '}
                <a 
                  href="https://harika.no" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-mint transition-colors"
                >
                  HárikaCreative
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

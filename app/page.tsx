'use client';

import { useState } from 'react';
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
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-turkis to-mint shadow-sm">
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
              <a href="#artful-balance" className="text-white hover:text-cream transition-colors font-semibold">
                Retreat
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
          className={`md:hidden fixed inset-y-0 right-0 w-64 bg-gradient-to-b from-turkis via-turkis to-mint shadow-2xl transform transition-transform duration-300 ease-in-out z-50 ${
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
              href="#artful-balance" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-white hover:text-cream transition-colors font-semibold text-lg"
            >
              Kurs og retreat
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
        <ArtfulBalance />
        <About />
        <Contact showModal={showBookingModal} onClose={() => setShowBookingModal(false)} />
      </main>

      {/* Footer */}
      <footer className="bg-brun text-cream py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo & Tagline */}
            <div className="md:col-span-2">
              <img 
                src="/images/android-chrome-512x512.png" 
                alt="Jannikes Catering" 
                className="h-20 w-20 mb-4"
              />
              <p className="text-sm text-cream/80 font-display italic">
                Fargerik mat. Varme mennesker. Kreative opplevelser.
              </p>
            </div>
            
            {/* Kontakt */}
            <div>
              <h4 className="font-semibold mb-4 font-display">Kontakt</h4>
              <ul className="space-y-3 text-sm text-cream/80">
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href="tel:+4793033966" className="hover:text-orange transition-colors">930 33 966</a>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:jannike@jannikes.no" className="hover:text-orange transition-colors">jannike@jannikes.no</a>
                </li>
              </ul>
            </div>

            {/* Sosiale medier */}
            <div>
              <h4 className="font-semibold mb-4 font-display">Følg oss</h4>
              <div className="flex gap-4">
                <a 
                  href="https://www.instagram.com/jannikescatering/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-cream hover:text-orange transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.facebook.com/people/Vertinne-catering-og-god-stemning/100063769113430/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-cream hover:text-orange transition-colors"
                  aria-label="Facebook"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-8 pt-8 border-t border-cream/20">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-cream/60">
              <div className="flex gap-4">
                <a href="/privacy-policy" className="hover:text-orange transition-colors">
                  Privacy Policy
                </a>
                <span>•</span>
                <a href="/cookie-policy" className="hover:text-orange transition-colors">
                  Cookie Policy
                </a>
              </div>
              <p>© HarikaCreative 2026</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, FormEvent } from 'react';

interface ContactProps {
  showModal?: boolean;
  onClose?: () => void;
  onSubmit?: (data: ContactFormData) => void;
}

export interface ContactFormData {
  navn: string;
  epost: string;
  telefon: string;
  type: string;
  melding: string;
  samtykke: boolean;
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export default function Contact({ showModal, onClose, onSubmit }: ContactProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    navn: '',
    epost: '',
    telefon: '',
    type: '',
    melding: '',
    samtykke: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      if (onSubmit) {
        await onSubmit(formData);
      }
      setSubmitStatus('success');
      setFormData({
        navn: '',
        epost: '',
        telefon: '',
        type: '',
        melding: '',
        samtykke: false
      });
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Contact Section */}
      <section id="kontakt" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-mint/10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14"
          >
            {/* Left - Contact Info */}
            <motion.div variants={fadeInUp}>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-brun mb-4">
                La oss skape noe vakkert sammen!
              </h2>
              
              <p className="text-brun/80 mb-8">
                Enten det er catering, yoga eller en retreat — jeg ser frem til å høre fra deg!
              </p>

              {/* Contact Cards */}
              <div className="space-y-3">
                {/* Email */}
                <a
                  href="mailto:jannike@jannikes.no"
                  className="flex items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow group"
                >
                  <div className="bg-turkis p-3 rounded-full mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-brun/60 uppercase tracking-wide">E-post</p>
                    <p className="font-medium text-brun group-hover:text-turkis transition-colors">
                      jannike@jannikes.no
                    </p>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href="tel:+4793033966"
                  className="flex items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow group"
                >
                  <div className="bg-turkis p-3 rounded-full mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-brun/60 uppercase tracking-wide">Telefon</p>
                    <p className="font-medium text-brun group-hover:text-turkis transition-colors">
                      930 33 966
                    </p>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center p-4 bg-white rounded-xl shadow-sm">
                  <div className="bg-turkis p-3 rounded-full mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-brun/60 uppercase tracking-wide">Område</p>
                    <p className="font-medium text-brun">Asker & Oslo-regionen</p>
                    <p className="text-sm text-brun/60">Retreats også i Spania</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-6 pt-4 border-t border-brun/10">
                <p className="text-sm text-brun/70">
                  Følg meg på{' '}
                  <a 
                    href="https://www.instagram.com/jannikescatering"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-turkis hover:text-mint underline underline-offset-2 transition-colors"
                  >
                    @jannikescatering
                  </a>
                  {' '}og{' '}
                  <a 
                    href="https://www.facebook.com/vertinnecateringoggodstemning"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-turkis hover:text-mint underline underline-offset-2 transition-colors"
                  >
                    Facebook
                  </a>
                </p>
              </div>
            </motion.div>

            {/* Right - Contact Form */}
            <motion.div variants={fadeInUp}>
              <div className="bg-white rounded-2xl shadow-md p-6 md:p-8">
                <h3 className="font-display text-xl font-bold text-brun mb-4">
                  Send en forespørsel
                </h3>

                {submitStatus === 'success' ? (
                  <div className="text-center py-8">
                    <div className="bg-mint/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-turkis" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-brun font-medium mb-2">Takk for din henvendelse!</p>
                    <p className="text-brun/70 text-sm">Jeg svarer så snart jeg kan.</p>
                    <button
                      onClick={() => setSubmitStatus('idle')}
                      className="mt-4 text-turkis hover:text-mint underline underline-offset-2 text-sm transition-colors"
                    >
                      Send ny forespørsel
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="navn" className="block text-sm font-medium text-brun mb-1">
                          Navn <span className="text-cerise">*</span>
                        </label>
                        <input
                          type="text"
                          id="navn"
                          name="navn"
                          required
                          value={formData.navn}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 rounded-lg border border-brun/20 focus:border-turkis focus:ring-2 focus:ring-turkis/20 focus:outline-none transition-colors"
                          placeholder="Ditt navn"
                        />
                      </div>
                      <div>
                        <label htmlFor="epost" className="block text-sm font-medium text-brun mb-1">
                          E-post <span className="text-cerise">*</span>
                        </label>
                        <input
                          type="email"
                          id="epost"
                          name="epost"
                          required
                          value={formData.epost}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 rounded-lg border border-brun/20 focus:border-turkis focus:ring-2 focus:ring-turkis/20 focus:outline-none transition-colors"
                          placeholder="din@epost.no"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="telefon" className="block text-sm font-medium text-brun mb-1">
                          Telefon
                        </label>
                        <input
                          type="tel"
                          id="telefon"
                          name="telefon"
                          value={formData.telefon}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 rounded-lg border border-brun/20 focus:border-turkis focus:ring-2 focus:ring-turkis/20 focus:outline-none transition-colors"
                          placeholder="123 45 678"
                        />
                      </div>
                      <div>
                        <label htmlFor="type" className="block text-sm font-medium text-brun mb-1">
                          Type forespørsel <span className="text-cerise">*</span>
                        </label>
                        <select
                          id="type"
                          name="type"
                          required
                          value={formData.type}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 rounded-lg border border-brun/20 focus:border-turkis focus:ring-2 focus:ring-turkis/20 focus:outline-none transition-colors bg-white"
                        >
                          <option value="">Velg type</option>
                          <option value="catering">Catering</option>
                          <option value="retreat-chef">Retreat Chef</option>
                          <option value="yoga">Privat Yoga</option>
                          <option value="artful-balance">Artful Balance 2026</option>
                          <option value="annet">Annet</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="melding" className="block text-sm font-medium text-brun mb-1">
                        Melding <span className="text-cerise">*</span>
                      </label>
                      <textarea
                        id="melding"
                        name="melding"
                        required
                        rows={4}
                        value={formData.melding}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-lg border border-brun/20 focus:border-turkis focus:ring-2 focus:ring-turkis/20 focus:outline-none transition-colors resize-none"
                        placeholder="Fortell meg om ditt arrangement..."
                      />
                    </div>

                    {/* GDPR Consent */}
                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="samtykke"
                        name="samtykke"
                        required
                        checked={formData.samtykke}
                        onChange={handleChange}
                        className="mt-1 w-4 h-4 rounded border-brun/30 text-turkis focus:ring-turkis focus:ring-2"
                      />
                      <label htmlFor="samtykke" className="text-sm text-brun/70">
                        Jeg samtykker til at mine opplysninger lagres for å behandle denne henvendelsen.{' '}
                        <a 
                          href="/personvern" 
                          className="text-turkis hover:text-mint underline underline-offset-2 transition-colors"
                        >
                          Les personvernerklæring
                        </a>
                        <span className="text-cerise"> *</span>
                      </label>
                    </div>

                    {submitStatus === 'error' && (
                      <p className="text-cerise text-sm">
                        Noe gikk galt. Vennligst prøv igjen eller kontakt meg direkte.
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full px-6 py-3 bg-turkis text-white font-semibold rounded-full hover:bg-turkis/90 focus:outline-none focus:ring-2 focus:ring-turkis focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Sender...' : 'Send forespørsel'}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Booking Modal (kept for backwards compatibility) */}
      <AnimatePresence>
        {showModal && onClose && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-brun/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: 'spring', duration: 0.4 }}
              className="bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 md:p-8">
                {/* Header */}
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 id="modal-title" className="font-display text-2xl font-bold text-brun mb-1">
                      Be om tilbud
                    </h3>
                    <p className="text-sm text-brun/70">
                      Jeg svarer innen 24 timer
                    </p>
                  </div>
                  <button
                    onClick={onClose}
                    className="text-brun/50 hover:text-brun transition-colors p-1"
                    aria-label="Lukk"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                  </button>
                </div>

                {/* Quick contact info */}
                <div className="bg-mint/10 rounded-xl p-4 mb-6">
                  <p className="text-sm text-brun/80">
                    Foretrekker du å ta kontakt direkte? Ring{' '}
                    <a href="tel:+4793033966" className="text-turkis font-medium hover:underline">
                      930 33 966
                    </a>
                    {' '}eller send e-post til{' '}
                    <a href="mailto:jannike@jannikes.no" className="text-turkis font-medium hover:underline">
                      jannike@jannikes.no
                    </a>
                  </p>
                </div>

                {/* CTA to scroll to contact section */}
                <div className="text-center">
                  <button
                    onClick={() => {
                      onClose();
                      document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="px-6 py-3 bg-turkis text-white font-semibold rounded-full hover:bg-turkis/90 transition-colors"
                  >
                    Gå til kontaktskjema
                  </button>
                  <button
                    onClick={onClose}
                    className="block w-full mt-3 text-brun/60 hover:text-brun text-sm transition-colors"
                  >
                    Lukk
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

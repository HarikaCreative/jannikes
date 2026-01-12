import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // === DESIGNMANUALEN ===
        turkis: '#85edea',
        rosa: '#ff96ba',
        oransje: '#ff8b5f',
        brun: '#41281e',
        
        // === NY BAKGRUNN (Jannikes ønske) ===
        sage: '#9caf88',
        
        // === HJELPEFARGER ===
        mint: '#aaf9f5',
        cream: '#FFF8E1',
        cerise: '#E91E63',
        gul: '#FFB300',
        orange: '#FF8F00',
      },
      fontFamily: {
        // Domine - fra designmanualen, for titler
        display: ['var(--font-domine)', 'Georgia', 'serif'],
        // Archivo - fra designmanualen, for brødtekst
        sans: ['var(--font-archivo)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config

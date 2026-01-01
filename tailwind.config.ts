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
        mint: '#A8D5BA',
        turkis: '#5EAAA8', // Sterkere, mer intense turkis
        brun: '#3E2723',
        cerise: '#E91E63',
        rosa: '#F06292',
        gul: '#FFB300',
        orange: '#FF8F00',
        cream: '#FFF8E1',
        blaa: '#1565C0',
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        sans: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config

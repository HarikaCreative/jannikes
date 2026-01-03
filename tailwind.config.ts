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
        turkis: '#5EAAA8',
        brun: '#73554b',
        cerise: '#E91E63',
        rosa: '#F06292',
        gul: '#FFB300',
        orange: '#FF8F00',
        cream: '#FFF8E1',
        blaa: '#1565C0',
      },
      fontFamily: {
        // Playfair - elegant, tynn for headings
        display: ['var(--font-playfair)', 'system-ui', 'Georgia', 'serif'],
        // Lato - ren, lesbar for body
        sans: ['var(--font-lato)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config

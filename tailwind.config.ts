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
        brun: '#3E2723',
        cerise: '#E91E63',
        rosa: '#F06292',
        gul: '#FFB300',
        orange: '#FF8F00',
        cream: '#FFF8E1',
        blaa: '#1565C0',
      },
      fontFamily: {
        // Josefin Sans - elegant, art deco-vibe for headings
        display: ['var(--font-josefin)', 'system-ui', 'sans-serif'],
        // Nunito - myk, vennlig sans-serif for body
        sans: ['var(--font-nunito)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0284c7',
          600: '#0369a1',
          700: '#075985',
          800: '#0c4a6e',
          900: '#0ea5e9',
          950: '#032a45',
        },
        hydro: {
          lightBg: '#f8fafc',
          card: '#ffffff',
          cardHover: '#f1f5f9',
          border: '#e2e8f0',
          text: '#0f172a',
          textMuted: '#64748b',
          whatsapp: '#25D366',
          whatsappHover: '#1da851'
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
        'card-hover': '0 20px 40px -15px rgba(2, 132, 199, 0.12)',
        'whatsapp': '0 8px 25px -5px rgba(37, 211, 102, 0.35)',
      }
    },
  },
  plugins: [],
}

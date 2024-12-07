/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'vinted': {
          primary: '#09B1BA',    // Couleur principale de Vinted
          hover: '#07989f',      // Version plus foncée pour les hovers
          light: '#e8f8f9',      // Version claire pour les backgrounds
          dark: '#1a1d1d',       // Couleur sombre pour le texte
          gray: '#999999',       // Gris pour les textes secondaires
        }
      },
      fontFamily: {
        'sans': ['Maison Neue', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '2rem',
      },
      boxShadow: {
        'card': '0 2px 8px rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [],
}

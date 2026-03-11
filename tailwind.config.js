/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        // M3 Dark Theme — Vegas stage lighting palette
        gold: {
          DEFAULT: '#C9A84C',
          light: '#E8D5A0',
          dark: '#A07D2E',
          50: '#2A2418',
          100: '#33291A',
          200: '#4A3C22',
          500: '#C9A84C',
          700: '#D4B85C',
          900: '#E8D5A0',
        },
        surface: {
          DEFAULT: '#121110',
          dim: '#0E0D0C',
          container: '#1E1C18',
          'container-high': '#282520',
          'container-highest': '#333028',
        },
        on: {
          surface: '#ECE5D8',
          'surface-variant': '#9E9688',
        },
        outline: {
          DEFAULT: '#5C5548',
          variant: '#3A352C',
        },
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      boxShadow: {
        'elevation-1': '0 1px 3px 1px rgba(0,0,0,0.3), 0 1px 2px 0 rgba(0,0,0,0.4)',
        'elevation-2': '0 2px 6px 2px rgba(0,0,0,0.3), 0 1px 2px 0 rgba(0,0,0,0.4)',
        'elevation-3': '0 4px 8px 3px rgba(0,0,0,0.3), 0 1px 3px 0 rgba(0,0,0,0.4)',
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // « La Cour » — Mediterranean editorial palette
        bone: {
          DEFAULT: '#F4EFE6', // paper background
          100: '#FBF8F2',
          200: '#F4EFE6',
          300: '#E8E0D2',
        },
        ink: {
          DEFAULT: '#16233F', // crest navy, deepened
          700: '#1E3052',
          500: '#3A4A68',
          300: '#8A93A6',
        },
        terracotta: {
          DEFAULT: '#C0654A',
          600: '#A8503A',
          300: '#D99A85',
        },
        sky: {
          DEFAULT: '#5B8AA6', // muted Casablanca sky
          300: '#A9C3D2',
        },
      },
      fontFamily: {
        serif: ['Fraunces', 'ui-serif', 'Georgia', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      letterspacing: {},
      transitionTimingFunction: {
        cour: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
};

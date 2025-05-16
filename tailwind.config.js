/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          300: '#93c5fd',
          600: '#1e40af',
          700: '#1e3a8a',
          800: '#1e3a76',
          900: '#0f2557'
        }
      },
      animation: {
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        pulse: {
          '0%, 100%': {
            opacity: 1,
            textShadow: '0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #1e40af, 0 0 82px #1e40af, 0 0 92px #1e40af, 0 0 102px #1e40af, 0 0 151px #1e40af',
          },
          '50%': {
            opacity: .9,
            textShadow: '0 0 4px #fff, 0 0 7px #fff, 0 0 13px #fff, 0 0 26px #1e40af, 0 0 42px #1e40af, 0 0 52px #1e40af, 0 0 62px #1e40af, 0 0 91px #1e40af',
          },
        },
      },
    },
  },
  plugins: [],
};
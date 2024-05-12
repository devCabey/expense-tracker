/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],

  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fdfaed',
          100: '#f8f0cd',
          200: '#f1df96',
          300: '#eaca61',
          400: '#e5b53a',
          500: '#dd9823',
          600: '#c3751c',
          700: '#a2551b',
          800: '#84431c',
          900: '#6d381a',
          950: '#3e1c0a'
        }
      }
    }
  },
  plugins: []
}

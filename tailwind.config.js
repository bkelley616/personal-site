const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: [
    './static/**/*.html',
    './partials/**/*.html',
    './templates/**/*.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        100: '25rem',
        104: '26rem',
        108: '27rem',
        124: '31rem',
      },
      fontFamily: {
        sans: ['Inter-Var','Inter', ...defaultTheme.fontFamily.sans],
      },
      transitionDuration: {
        '400': '400ms',
       },
      colors: {
        'primary-background-color': 'var(--primary-background-color)',
        'secondary-background-color': 'var(--secondary-background-color)',
        'tertiary-background-color': 'var(--tertiary-background-color)',
        'popup-background-color': 'var(--popup-background-color)',
        'popup-button-background-color': 'var(--popup-button-background-color)',
        
        'primary-text-color': 'var(--primary-text-color)',
        'secondary-text-color': 'var(--secondary-text-color)',
        'tertiary-text-color': 'var(--tertiary-text-color)',
        'faded-text-color': 'var(--faded-text-color)',

        'accent-blue-color': 'var(--accent-blue-color)',
        'accent-purple-color': 'var(--accent-purple-color)',
        'accent-purple-color-variant': 'var(--accent-purple-color-variant)',
        'accent-purple-color-variant-dark': 'var(--accent-purple-color-variant-dark)',
      },
      boxShadow: {
        blue: '0 4px 14px 0 rgba(129, 212, 250, 0.39)',
      },
      scale: {
        '-1': '-1'
      }
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
  ],
}

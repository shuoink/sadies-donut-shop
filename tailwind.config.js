module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        cursive: ['Pacifico', 'cursive'],
      },
      colors: {
        'brand-blue-100': 'hsl(187, 33%, 90%)',
        'brand-blue-200': 'hsl(187, 33%, 80%)',
        'brand-blue-300': 'hsl(195, 26%, 70%)',
        'brand-blue-400': 'hsl(195, 26%, 60%)',
        'brand-blue-500': 'hsl(195, 26%, 50%)',
        'brand-blue-600': 'hsl(195, 26%, 40%)',
        'brand-blue-700': 'hsl(195, 26%, 30%)',
        'brand-blue-800': 'hsl(195, 26%, 20%)',
        'brand-blue-900': 'hsl(195, 26%, 10%)',
        'brand-pink-100': 'hsl(7, 68%, 90%)',
        'brand-pink-200': 'hsl(7, 68%, 80%)',
        'brand-pink-300': 'hsl(7, 68%, 70%)',
        'brand-pink-400': 'hsl(7, 68%, 60%)',
        'brand-yellow-100': 'hsl(34, 93%, 90%)',
        'brand-yellow-200': 'hsl(34, 93%, 80%)',
        'brand-yellow-300': 'hsl(34, 93%, 70%)',
        'brand-yellow-400': 'hsl(34, 93%, 60%)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

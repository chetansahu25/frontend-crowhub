/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', '-apple-system', 'Roboto', 'Helvetica', 'sans-serif'],
        'inter-tight': ['Inter Tight', '-apple-system', 'Roboto', 'Helvetica', 'sans-serif'],
        cabin: ['Cabin', '-apple-system', 'Roboto', 'Helvetica', 'sans-serif'],
        cookie: ['Cookie', '-apple-system', 'Roboto', 'Helvetica', 'sans-serif'],
        jakarta: ['Plus Jakarta Sans', '-apple-system', 'Roboto', 'Helvetica', 'sans-serif'],
      },
      colors: {
        'brand-dark': '#06000E',
        'brand-purple': '#C28CFF',
        'brand-blue': '#4845FE',
      },
    },
  },
  plugins: [],
}

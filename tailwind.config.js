module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'custom-hero':
          "url('https://res.cloudinary.com/dfreocjfu/image/upload/v1712065939/main/js8jxgtovi7gmddxaucg.png')",
      },
    },
  },
  plugins: [],
}

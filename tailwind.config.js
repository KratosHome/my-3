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
      fontFamily: {
        jetbrains: ['"JetBrains Mono"', 'monospace'],
        сonsolas: ['Consolas', 'sans-serif'],
      },
      colors: {
        primary: {
          light: '#6D24C9',
          dark: '#6D24C9',
        },
      },
      backgroundImage: {
        'custom-hero':
          "url('https://res.cloudinary.com/dfreocjfu/image/upload/v1712065939/main/js8jxgtovi7gmddxaucg.png')",
      },
    },
  },
  plugins: [require('tailwind-hamburgers')],
}

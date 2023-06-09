/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'mobile': '475px',
      'md':	'640px',
      'tablet':	'768px',
      'laptop':	'1024px',
      'monitor':	'1280px',
      'tv': '1536px',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'banner': '#dcdcdc',
        'pri': '#F5EFE7',
        'sec': '#D8C4B6',
        'tri': '#4F709C',
        'quad': '#213555',
      }
    },
  },
  plugins: [],
}

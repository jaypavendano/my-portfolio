import type { Config } from 'tailwindcss';

const config = {
  darkMode: ['class'],
  mode: 'jit',
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '20px',
      screens: {
        lg: '1240px',
      },
    },
    extend: {
      screens: {
        '1350': '1350px',
      },
      backgroundImage: {
        ellipse: "url('/ellipse.png')",
        'gradient-linear-right':
          'linear-gradient(227deg, rgba(17,16,16,1) 35%, rgba(36,36,36,1) 100%);',
        'gradient-linear-left':
          'linear-gradient(135deg, rgba(17,16,16,1) 35%, rgba(36,36,36,1) 100%);',
      },
      colors: {
        primary: '#00D8FF',
        neutral_white: '#D4D4D4',
        bg: '#111010',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      fontFamily: {
        space_Grotesk: ['var(--font-space_Grotesk)'],
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;

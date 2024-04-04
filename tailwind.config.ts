import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '20px',
      screens: {
        lg: '1440px',
      },
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        ellipse: "url('/ellipse.png')",
      },
      colors: {
        primary: '#00D8FF',
        neutral_white: '#D4D4D4',
        bg: '#111010',
      },
      fontFamily: {
        // corsiva: ['MtCorsiva'],
        space_Grotesk: ['var(--font-space_Grotesk)'],
      },
    },
  },
  plugins: [],
};
export default config;

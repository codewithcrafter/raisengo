import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#5A2D7E',
          magenta: '#E0679D',
          red: '#E53E3E',
          green: '#10B981',
          purple: '#7958C8',
          darkNavy: '#1E1229',
        },
        warm: {
          50: '#FFF8F5',
          100: '#FFF1EC',
          200: '#FFE2D7',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'card': '1.5rem',
      },
    },
  },
  plugins: [],
};

export default config;

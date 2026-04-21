import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Vercel's achromatic neutral scale
        neutral: {
          50:  '#fafafa',
          100: '#ebebeb',
          200: '#e1e1e1',
          300: '#d4d4d4',
          400: '#808080',
          500: '#666666',
          600: '#4d4d4d',
          700: '#333333',
          800: '#222222',
          900: '#171717',
          950: '#0d0d0d',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Roboto Mono', 'Menlo', 'Monaco', 'Liberation Mono', 'DejaVu Sans Mono', 'Courier New', 'monospace'],
      },
      boxShadow: {
        'card':         'rgba(0,0,0,0.06) 0px 0px 0px 1px, rgba(0,0,0,0.07) 0px 4px 16px -4px, rgba(0,0,0,0.03) 0px 1px 3px',
        'card-hover':   'rgba(0,0,0,0.09) 0px 0px 0px 1px, rgba(0,0,0,0.12) 0px 8px 24px -6px, rgba(0,0,0,0.04) 0px 2px 6px',
        'card-raised':  'rgba(0,0,0,0.08) 0px 0px 0px 1px, rgba(0,0,0,0.14) 0px 12px 32px -8px, rgba(0,0,0,0.05) 0px 3px 8px',
        'ring':         'rgb(235,235,235) 0px 0px 0px 1px',
        'panel':        'rgba(0,0,0,0.08) 0px 0px 0px 1px, rgba(0,0,0,0.06) 0px 8px 28px -4px, rgba(0,0,0,0.03) 0px 2px 6px',
      },
      animation: {
        'live-blink': 'live-blink 1.8s ease-in-out infinite',
      },
      keyframes: {
        'live-blink': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.2' },
        },
      },
    },
  },
  plugins: [],
};

export default config;

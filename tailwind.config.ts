import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        surface: '#0d1018',
        panel: '#111520',
        primary: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99ece8',
          300: '#7fd8d3',
          400: '#5ecfca',
          500: '#3db8b3',
          600: '#2a9e99',
          700: '#26b8b1',
          800: '#1f9a93',
          900: '#1f7d77',
        },
        warning: {
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
        },
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0a0a0a',
        },
        dark: {
          800: '#111520',
          900: '#0d1018',
          950: '#07090e',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        panel: '0 1px 3px rgba(0,0,0,0.4), 0 8px 32px rgba(0,0,0,0.25)',
        card: '0 1px 2px rgba(0,0,0,0.3)',
        'glow-teal': '0 0 28px rgba(94,207,202,0.12)',
        'glow-amber': '0 0 28px rgba(232,169,74,0.15)',
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

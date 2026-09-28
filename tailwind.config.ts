import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#08090d',
        surface: '#0f1116',
        'surface-2': '#151822',
        border: 'rgba(255, 255, 255, 0.08)',
        accent: '#6c8cff',
        'accent-dim': 'rgba(108, 140, 255, 0.12)',
        ink: {
          primary: '#f2f4f8',
          secondary: '#9aa1b2',
          tertiary: '#5c6270',
        },
      },
      fontFamily: {
        sans: ['var(--font-space-grotesk)', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'float-slow': 'floatSlow 7s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
export default config

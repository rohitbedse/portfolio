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
        // Primary palette — mapped to CSS vars
        'ds-cyan': '#00d4ff',
        'ds-pink': '#ff2d78',
        'ds-purple': '#8b5cf6',
        'ds-green': '#00ff88',
        'ds-gold': '#ffd700',
        'ds-golden': '#f5a623',
        'dark': '#04060f',
        'dark-2': '#080c1a',
        'dark-3': '#0e1330',
        'dark-card': '#111827',
        // Kept for backward compat
        'neon-cyan': '#00d4ff',
        'neon-pink': '#ff2d78',
        'neon-green': '#00ff88',
        'dark-bg': '#04060f',
      },
      fontFamily: {
        sans: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Monaco', 'Consolas', 'monospace'],
      },
      animation: {
        'float': 'float-y 4s ease-in-out infinite',
        'float-sm': 'float-y-sm 3s ease-in-out infinite',
        'spin-slow': 'spin-slow 10s linear infinite',
        'spin-ccw': 'spin-ccw 12s linear infinite',
        'pulse-dot': 'pulse-dot 1.5s ease-in-out infinite',
        'counter-glow': 'counter-glow 2s ease-in-out infinite',
        'border-dance': 'border-dance 4s ease-in-out infinite',
        'gradient-flow': 'gradient-flow 5s ease infinite',
        'aurora-drift': 'aurora-drift 20s ease-in-out infinite alternate',
        'badge-shimmer': 'badge-shimmer 3s ease-in-out infinite',
        'shimmer-slide': 'shimmer-slide 2.5s ease-in-out infinite',
        'bar-grow': 'bar-grow 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) both',
        'scan-line': 'scan-line 4s linear infinite',
        'blink': 'blink 1s step-end infinite',
      },
      keyframes: {
        'float-y': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        'float-y-sm': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'spin-slow': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        'spin-ccw': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(-360deg)' },
        },
        'pulse-dot': {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.4)', opacity: '0.7' },
        },
        'counter-glow': {
          '0%, 100%': { textShadow: '0 0 8px rgba(0,212,255,0.4)' },
          '50%': { textShadow: '0 0 24px rgba(0,212,255,0.8), 0 0 48px rgba(0,212,255,0.4)' },
        },
        'border-dance': {
          '0%': { borderColor: 'rgba(0,212,255,0.3)' },
          '33%': { borderColor: 'rgba(139,92,246,0.3)' },
          '66%': { borderColor: 'rgba(255,45,120,0.3)' },
          '100%': { borderColor: 'rgba(0,212,255,0.3)' },
        },
        'gradient-flow': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'aurora-drift': {
          '0%': { backgroundPosition: '0% 0%', opacity: '1' },
          '50%': { backgroundPosition: '30px 20px', opacity: '0.8' },
          '100%': { backgroundPosition: '-20px 10px', opacity: '1' },
        },
        'badge-shimmer': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'shimmer-slide': {
          '0%': { left: '-60%' },
          '100%': { left: '160%' },
        },
        'bar-grow': {
          from: { transform: 'scaleY(0)', opacity: '0' },
          to: { transform: 'scaleY(1)', opacity: '1' },
        },
        'scan-line': {
          '0%': { top: '-5%' },
          '100%': { top: '105%' },
        },
        'blink': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-ds': 'linear-gradient(135deg, var(--cyan) 0%, var(--purple) 50%, var(--pink) 100%)',
        'gradient-ds-alt': 'linear-gradient(135deg, var(--green) 0%, var(--cyan) 60%, var(--purple) 100%)',
      },
      boxShadow: {
        'neon-cyan': '0 0 15px rgba(0,212,255,0.4), 0 0 40px rgba(0,212,255,0.2)',
        'neon-purple': '0 0 15px rgba(139,92,246,0.4), 0 0 40px rgba(139,92,246,0.2)',
        'neon-pink': '0 0 15px rgba(255,45,120,0.4), 0 0 40px rgba(255,45,120,0.2)',
        'neon-green': '0 0 15px rgba(0,255,136,0.4), 0 0 40px rgba(0,255,136,0.2)',
        'card-3d': '12px 16px 40px rgba(0,0,0,0.6), -4px -4px 0px rgba(0,212,255,0.15)',
        'glass': '0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08)',
      },
      screens: {
        'xs': '480px',
      },
    },
  },
  plugins: [],
}

export default config

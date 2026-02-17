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
        neon: {
          blue: '#00D9FF',
          cyan: '#00FFFF',
          purple: '#A020F0',
          green: '#39FF14',
        },
        dark: {
          bg: '#0A0E27',
          secondary: '#1a1f3a',
          tertiary: '#2d3561',
        },
      },
      boxShadow: {
        glow: '0 0 20px rgba(0, 217, 255, 0.5)',
        'glow-lg': '0 0 40px rgba(0, 217, 255, 0.6)',
        'glow-cyan': '0 0 20px rgba(0, 255, 255, 0.4)',
      },
      fontFamily: {
        mono: ['Courier New', 'monospace'],
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s infinite',
        'float': 'float 3s ease-in-out infinite',
        'typing': 'typing 2s steps(40, end)',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': {
            boxShadow: '0 0 20px rgba(0, 217, 255, 0.5)',
          },
          '50%': {
            boxShadow: '0 0 40px rgba(0, 217, 255, 0.8)',
          },
        },
        'float': {
          '0%, 100%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(-20px)',
          },
        },
        'typing': {
          'from': {
            width: '0',
          },
          'to': {
            width: '100%',
          },
        },
      },
    },
  },
  plugins: [],
}
export default config

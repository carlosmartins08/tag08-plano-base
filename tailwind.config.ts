import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-lime': '#D4FF00',
        'brand-black': '#000000',
        'brand-accent': '#DDF81D',
        'brand-dark': '#050505',
      },
      fontFamily: {
        sans: ['var(--font-manrope)', 'Manrope', 'ui-sans-serif', 'system-ui'],
        display: ['var(--font-darker-grotesque)', 'Darker Grotesque', 'ui-sans-serif', 'system-ui'],
      },
      keyframes: {
        'soft-bounce': {
          '0%, 100%': { transform: 'translateY(0) scale(1.1) rotate(3deg)' },
          '50%': { transform: 'translateY(-8px) scale(1.15) rotate(5deg)' },
        },
        'radar-spin': {
          'from': { transform: 'translate(-50%, -50%) rotate(0deg)' },
          'to': { transform: 'translate(-50%, -50%) rotate(360deg)' },
        }
      },
      animation: {
        'slow-pulse': 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'soft-bounce': 'soft-bounce 1.5s ease-in-out infinite',
        'radar-spin': 'radar-spin 8s linear infinite',
      }
    },
  },
  plugins: [],
};
export default config;

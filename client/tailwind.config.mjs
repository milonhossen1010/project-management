// tailwind.config.js
import { heroui } from '@heroui/react';

/** @type {import('tailwindcss').Config} */

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        accent: {
          DEFAULT: '#CA0E9F',
          hover: '#F3D8ED',
        },
        secondary: '#80D617',
      },
      boxShadow: {
        custom: '0px 14px 54px rgba(0,0,0,0.1)',
      },
    },
  },
  darkMode: 'class',
  plugins: [heroui()],
};

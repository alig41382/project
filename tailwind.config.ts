import type { Config } from 'tailwindcss';
import rtlPlugin from 'tailwindcss-rtl';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'], // Correct path for React + Vite
  theme: {
    extend: {},
  },
  plugins: [rtlPlugin()],
};

export default config;

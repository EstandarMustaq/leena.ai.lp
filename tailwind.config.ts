import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./www/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
  colors: {
    forest: '#2E6B2F', // Verde floresta
    leaf: '#72C94E',   // Verde folha
    strawberry: '#E53935', // Vermelho morango
    fruit: '#FFC83D',  // Amarelo fruta
    paper: '#FAFAF7',  // Branco suave
    warmgray: '#F2F4EF', // Cinza quente
    graphite: '#1F2933', // Grafite
    graymid: '#6B7280',  // Cinza médio
  },
},
  },
  plugins: [],
};

export default config;

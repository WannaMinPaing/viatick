import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#13B3E6',
          '50': '#f0faff',
          '100': '#e1f4fd',
          '200': '#bbeafc',
          '300': '#80daf9',
          '400': '#3cc8f4',
          '500': '#13b3e6',
          '600': '#0690c3',
          '700': '#06729e',
          '800': '#0a6082',
          '900': '#0e4f6c',
          '950': '#093348',
        },
        secondary: {
          DEFAULT: '#ffffff',
          '50': '#ffffff',
          '100': '#efefef',
          '200': '#dcdcdc',
          '300': '#bdbdbd',
          '400': '#989898',
          '500': '#7c7c7c',
          '600': '#656565',
          '700': '#525252',
          '800': '#464646',
          '900': '#3d3d3d',
          '950': '#292929',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;

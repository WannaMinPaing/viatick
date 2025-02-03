import type { Config } from "tailwindcss";

export default {
  darkMode: "class", 
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
        dark:{
          DEFAULT: '#000000',
          '50': '#f6f6f6',
          '100': '#e7e7e7',
          '200': '#d1d1d1',
          '300': '#b0b0b0',
          '400': '#888888',
          '500': '#6d6d6d',
          '600': '#5d5d5d',
          '700': '#4f4f4f',
          '800': '#454545',
          '900': '#454545',
          '950': '#000000',
        }
      },
      backgroundImage : {
        'slide-tab-background-color':
          'linear-gradient(94deg, #2a93d5 10.66%, #30c3a6 53.03%, #85fab0 96.34%, rgba(0, 247, 255, .307) 191.41%, rgba(59, 193, 255, 0) 191.43%)', 
      },
    },
  },
  plugins: [],
} satisfies Config;

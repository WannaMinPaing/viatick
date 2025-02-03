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
        },
        blue : {
          DEFAULT: '#283344',
          '50': '#f5f7fa',
          '100': '#eaeef4',
          '200': '#d1dae6',
          '300': '#a8bad1',
          '400': '#7995b7',
          '500': '#58789f',
          '600': '#456084',
          '700': '#394d6b',
          '800': '#32425a',
          '900': '#283344',
          '950': '#1e2633',
        },
        white : { 
          DEFAULT: '#DCDCDC',
          '50': '#f5f7fa',
          '100': '#eaeef4',
          '200': '#d1dae6',
          '300': '#a8bad1',
          '400': '#7995b7',
          '500': '#58789f',
          '600': '#456084',
          '700': '#394d6b',
          '800': '#32425a',
          '900': '#283344',
          '950': '#1e2633',
        }
      },
      fontFamily: {
        SofiaSans: ['Sofia Sans', 'serif'],
       },
   
      backgroundImage : {
        'slide-tab-background-color':
          'linear-gradient(90deg, #12b5de -30%, #08bade 30%, #033d3f 90%)'
      },
    },
  },
  plugins: [],
} satisfies Config;

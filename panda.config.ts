import { defineConfig } from "@pandacss/dev"

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: [ "./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}" ],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      breakpoints: {
        xs: '300px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '2400px'
      },
    },
    keyframes: {
      SkeletonLoading: {
        '0%': { backgroundColor: '#F6F6F6' },
        '100%': { backgroundColor: '#E6E6E6' },
      }
    }
  },

  // The output directory for your css system
  outdir: "styled-system",
  jsxFramework: 'react',

})
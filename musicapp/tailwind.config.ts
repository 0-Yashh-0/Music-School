import plugin from 'tailwindcss/plugin';

const {
  default: flattenColorPalette,}
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  = require("tailwindcss/lib/util/flattenColorPalette");

import { Config } from 'tailwindcss';

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        typing: "typing 5s steps(35) 1 alternate, blink .7s infinite",
        spotlight: "spotlight 2s ease .75s 1 forwards",
      },
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "100%": {
            width: "100%"
          }  
        },
        blink: {
          "50%": {
            borderColor: "transparent"
          },
          "100%": {
            borderColor: "white"
          }  
        },
        spotlight: {
          "0%": {
            opacity: '0',
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: '1',
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
    addVariablesForColors,
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          /* Hide scrollbar for Chrome, Safari, and Edge */
          '-ms-overflow-style': 'none', /* IE and Edge */
          'scrollbar-width': 'none',   /* Firefox */
          '&::-webkit-scrollbar': {
            display: 'none',          /* Chrome, Safari */
          },
        },
      });
    }),

  ],
  
} satisfies Config;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function addVariablesForColors({ addBase, theme }: any) {
  const allColors = flattenColorPalette(theme("colors"));
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}
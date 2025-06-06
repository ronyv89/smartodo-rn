import type { Config } from "tailwindcss";
import gluestackPlugin from "@gluestack-ui/nativewind-utils/tailwind-plugin";

// If nativewind/preset doesn't offer a clean ES module import,
// require might still be the way to go, or you can try importing it.
// For safety, we'll keep require here as it was in your .js file.
const nativewindPreset = require("nativewind/preset");

const config: Config = {
  darkMode: "class", // 'media' or 'class'
  content: ["app/**/*.{tsx,jsx,ts,js}", "components/**/*.{tsx,jsx,ts,js}"],
  presets: [nativewindPreset],
  safelist: [
    {
      pattern:
        /(bg|border|text|stroke|fill)-(primary|secondary|tertiary|error|success|warning|info|typography|outline|background|indicator)-(0|50|100|200|300|400|500|600|700|800|900|950|white|gray|black|error|warning|muted|success|info|light|dark|primary)/,
    },
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          0: "rgb(var(--color-primary-0)/<alpha-value>)",
          50: "rgb(var(--color-primary-50)/<alpha-value>)",
          100: "rgb(var(--color-primary-100)/<alpha-value>)",
          200: "rgb(var(--color-primary-200)/<alpha-value>)",
          300: "rgb(var(--color-primary-300)/<alpha-value>)",
          400: "rgb(var(--color-primary-400)/<alpha-value>)",
          500: "rgb(var(--color-primary-500)/<alpha-value>)",
          600: "rgb(var(--color-primary-600)/<alpha-value>)",
          700: "rgb(var(--color-primary-700)/<alpha-value>)",
          800: "rgb(var(--color-primary-800)/<alpha-value>)",
          900: "rgb(var(--color-primary-900)/<alpha-value>)",
          950: "rgb(var(--color-primary-950)/<alpha-value>)",
        },
        secondary: {
          0: "rgb(var(--color-secondary-0)/<alpha-value>)",
          50: "rgb(var(--color-secondary-50)/<alpha-value>)",
          100: "rgb(var(--color-secondary-100)/<alpha-value>)",
          200: "rgb(var(--color-secondary-200)/<alpha-value>)",
          300: "rgb(var(--color-secondary-300)/<alpha-value>)",
          400: "rgb(var(--color-secondary-400)/<alpha-value>)",
          500: "rgb(var(--color-secondary-500)/<alpha-value>)",
          600: "rgb(var(--color-secondary-600)/<alpha-value>)",
          700: "rgb(var(--color-secondary-700)/<alpha-value>)",
          800: "rgb(var(--color-secondary-800)/<alpha-value>)",
          900: "rgb(var(--color-secondary-900)/<alpha-value>)",
          950: "rgb(var(--color-secondary-950)/<alpha-value>)",
        },
        tertiary: {
          50: "rgb(var(--color-tertiary-50)/<alpha-value>)",
          100: "rgb(var(--color-tertiary-100)/<alpha-value>)",
          200: "rgb(var(--color-tertiary-200)/<alpha-value>)",
          300: "rgb(var(--color-tertiary-300)/<alpha-value>)",
          400: "rgb(var(--color-tertiary-400)/<alpha-value>)",
          500: "rgb(var(--color-tertiary-500)/<alpha-value>)",
          // ... ensure all your colors are here
        },
        // ... any other color groups or extended theme properties
      },
    },
  },
  plugins: [gluestackPlugin], // Assuming gluestackPlugin is used
};

export default config;

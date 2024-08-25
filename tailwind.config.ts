import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}", // Include all relevant file types
    "./pages/**/*.{html,js,ts,jsx,tsx}", // Include files in the 'pages' directory
    "./components/**/*.{html,js,ts,jsx,tsx}", // Include files in the 'components' directory
  ],
  theme: {
    colors: {
      white: "#ffffff",
      "primary-light": "#e6e9ec",
      "primary-light-sec": "#b1bad3",
      "primary-normal": "#0f212e",
      "primary-normal-hover": "#0a1822",
      "primary-nav-bar": "#1a2c38",
      "primary-button": "#1475e1",
    },
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        xs: "480px",
      },
    },
  },
  plugins: [],
};
export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        main: "#FFDC58",
        mainAccent: "#ffc800",
        overlay: "rgba(0,0,0,0.8)",
        bg: "#FEF2E8",
        text: "#000",
        border: "#000",
        darkBg: "#374151",
        darkText: "#eeefe9",
        darkBorder: "#000",
        secondaryBlack: "#212121",
      },
      borderRadius: {
        base: "8px",
      },
      boxShadow: {
        light: "6px 4px 0px 0px #000",
        dark: "6px 4px 0px 0px #000",
      },
      translate: {
        boxShadowX: "6px",
        boxShadowY: "4px",
        reverseBoxShadowX: "-6px",
        reverseBoxShadowY: "-4px",
      },
      fontWeight: {
        base: "500",
        heading: "700",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        fillGradient:
          "linear-gradient(107deg, rgba(52, 243, 255, 0.7) 11.56%, rgba(87, 154, 255, 0.7) 37.22%, rgba(134, 106, 255, 0.7) 56.38%, rgba(216, 97, 255, 0.7) 82.5%)",
        faqGradient:
          "radial-gradient(100.76% 120.8% at 70.83% 20.66%, #131313 47.04%, #824DB8 100%)",
      },
      colors: {
        fluorescentBlue: "var(--fluorescent-blue)",
        cornflower: "var(--cornflower)",
        violet: "var(--violet)",
        heliotrope: "var(--heliotrope)",
        chineseBlack: "var(--chinese-black)",
        lightSilver: "var(--light-silver)",
        palatinateBlue: "var(--palatinate-blue)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

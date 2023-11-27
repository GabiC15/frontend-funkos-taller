/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      fluorescentBlue: "var(--fluorescent-blue)",
      cornflower: "var(--cornflower)",
      violet: "var(--violet)",
      heliotrope: "var(--heliotrope)",
      chineseBlack: "var(--chinese-black)",
      lightSilver: "var(--light-silver)",
      palatinateBlue: "var(--palatinate-blue)",
    },
    extend: {
      backgroundImage: {
        fillGradient:
          "linear-gradient(107deg, #34F3FF 11.56%, #579AFF 37.22%, #866AFF 56.38%, #D861FF 82.5%)",
      },
    },
  },
  plugins: [],
};

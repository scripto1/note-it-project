import type { Config } from "tailwindcss";
import withMT from "@material-tailwind/react/utils/withMT";

const config: Config = {
  content: [
    "./utils/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      mobile: { max: "767.9px" }, // Mobile: 360px ~ 767px
      tablet: { min: "768px", max: "1279.9px" }, // Tablet: 768px ~ 1279px
      desktop: { min: "1280px" }, // Desktop: 1280px ~ 1920px
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default withMT(config);

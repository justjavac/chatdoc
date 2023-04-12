import type { Config } from "tailwindcss";

export default {
  content: [
    "./{app,components,hooks,utils}/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
  ],
} satisfies Config;

import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        serif: ['var(--font-gambarino)', ...fontFamily.serif],
      },
    },
  },
  plugins: [],
} satisfies Config;

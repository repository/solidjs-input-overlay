import defaultTheme from "windicss/defaultTheme";
import { defineConfig } from "windicss/helpers";

export default defineConfig({
  theme: {
    extend: {
      fontFamily: {
        sans: ["'IBM Plex Sans'", ...defaultTheme.fontFamily.sans],
      },
    },
  },
});

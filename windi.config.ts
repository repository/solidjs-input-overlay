import defaultTheme from "windicss/defaultTheme";
import { defineConfig } from "windicss/helpers";

export default defineConfig({
  theme: {
    extend: {
      fontFamily: {
        sans: ["'IBM Plex Sans'", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "key-inactive-bg": "#FEE3EC",
        "key-inactive-ring": "#F5A3BB",
        "key-inactive-text": "#F5A3BB",
        "key-active-bg": "#F999B7",
        "key-active-ring": "#EE447A",
        "key-active-text": "#EE447A",
      },
    },
  },
});

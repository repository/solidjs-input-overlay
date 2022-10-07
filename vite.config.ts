import { defineConfig } from "vite";
import { viteSingleFile } from "vite-plugin-singlefile";
import solidPlugin from "vite-plugin-solid";
import WindiCSS from "vite-plugin-windicss";

export default defineConfig({
  plugins: [
    solidPlugin(),
    WindiCSS({
      scan: {
        fileExtensions: ["html", "js", "ts", "jsx", "tsx"],
      },
    }),
    viteSingleFile(),
  ],
  server: {
    port: 3000,
  },
  build: {
    target: "esnext",
  },
});

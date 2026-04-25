import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import dts from "vite-plugin-dts";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      include: ["src"],
      outDir: "dist",
      tsconfigPath: "./tsconfig.app.json",
    }),
    cssInjectedByJsPlugin(),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/main.ts"),
      name: "react-ui",
      fileName: "react-ui",
      formats: ["es"],
    },
    rollupOptions: {
      external: ["react", "react/jsx-runtime"],
    },
  },
});

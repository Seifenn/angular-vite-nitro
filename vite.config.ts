import { defineConfig } from "vite";
import angular from "@analogjs/vite-plugin-angular";
import nitro from "@analogjs/vite-plugin-nitro";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  build: {
    target: ["es2020"],
  },
  resolve: {
    mainFields: ["module"],
  },
  plugins: [angular(), nitro()],
}));

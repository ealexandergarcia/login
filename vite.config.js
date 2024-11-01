import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { join } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  root: join(__dirname, "client"),
  server: {
    port: 3000,
  },
});
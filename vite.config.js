import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { join } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base:'https://github.com/ealexandergarcia/login/',
  root: 'client',
  server: {
    port: 3000,
  },
});
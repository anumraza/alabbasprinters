// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite"; // <--- ADD THIS IMPORT
const repoName = "alabbasprinters";
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // <--- ADD THIS LINE
  ],
  base: "/",
});

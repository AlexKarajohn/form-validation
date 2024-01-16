import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [dts(), react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "index.tsx"),
      name: "PasswordForm",
      formats: ["es", "cjs"],
      fileName: (format) => `passwordForm.${format}.js`,
    },
  },
});

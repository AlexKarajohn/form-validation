import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [dts({ rollupTypes: true }), react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "./src/index.tsx"),
      name: "passwordForm",
      fileName: "passwordForm",
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "React-dom",
        },
      },
    },
  },
});

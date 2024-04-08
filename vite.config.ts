import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        //disclaimer: as per the documentaion, it will use babel.config.js not .json
        configFile: true,
      },
    }),
  ],
});

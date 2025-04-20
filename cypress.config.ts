// cypress.config.ts
import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    baseUrl: "http://localhost:5173",
    viewportWidth: 1280,
    viewportHeight: 800,
  },

  component: {
    devServer: {
      framework: "vue",
      bundler: "webpack",
    },
  },
});

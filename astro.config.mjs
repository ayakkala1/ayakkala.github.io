import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://ayakkala.github.io',
  // GitHub Pages uses the root, so no base path needed
  // If deploying to a subfolder, add: base: '/subfolder',
});

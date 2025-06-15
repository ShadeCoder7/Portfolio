// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [
    tailwind()
  ],
  vite: {
    build: {
      minify: 'esbuild',
      cssCodeSplit: true,
    },
    plugins: [
      // Puedes agregar más plugins aquí si los necesitas
    ],
  },
});

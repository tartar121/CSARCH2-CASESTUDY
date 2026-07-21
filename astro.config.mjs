import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import icon from 'astro-icon';

function fixAstroGlob() {
  return {
    name: 'fix-astro-glob-homepage',
    enforce: 'pre',
    transform(code, id) {
      if (id.endsWith('HomepageLayout.astro') && code.includes('Astro.glob')) {
        return code.replace(
          /await Astro\.glob\((['"`].*?['"`])\)/,
          'Object.values(import.meta.glob($1, { eager: true }))'
        );
      }
    },
  };
}

export default defineConfig({
  integrations: [mdx(), react(), icon()],
  site: 'https://tartar121.github.io',
  base: 'KumustaMundo',
  vite: {
    plugins: [fixAstroGlob()],
    assetsInclude: ['**/*.glb'],
  },
});

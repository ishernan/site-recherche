import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// https://astro.build/config
export default defineConfig({
  // TODO: remplacer par ton domaine une fois acheté (et retirer `base` le cas échéant)
  site: 'https://ishernan.github.io',
  base: '/site-recherche',
  integrations: [mdx()],
  // Note: pour ajouter un sitemap, installer @astrojs/sitemap et l'ajouter aux
  // integrations une fois le domaine défini.
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en', 'es'],
    routing: {
      prefixDefaultLocale: false, // FR à la racine, EN sur /en/, ES sur /es/
    },
  },
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
    shikiConfig: {
      theme: 'github-light',
      wrap: true,
    },
  },
});

// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// 部署時由 GitHub Actions 自動帶入；綁定自訂網域後 BASE_PATH 會是空的
const site = process.env.SITE_URL || 'https://example.com';
const base = process.env.BASE_PATH || '/';

export default defineConfig({
  site,
  base,
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  markdown: { shikiConfig: { theme: 'github-light' } },
});

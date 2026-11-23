import rss from '@astrojs/rss';
import { SITE } from '../site.config';
import { getPosts } from '../lib';

export async function GET(context) {
  const posts = await getPosts();
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return rss({
    title: SITE.title,
    description: SITE.description,
    site: context.site,
    items: posts.map((p) => ({
      title: p.data.title,
      pubDate: p.data.date,
      description: p.data.description,
      link: `${base}/posts/${p.id}/`,
    })),
  });
}

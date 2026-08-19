import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { site } from '../config';
import { base } from '../utils/url';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const articles = await getCollection('articles', ({ data }) => !data.draft);
  return rss({
    title: site.name,
    description: site.lede.fr,
    site: context.site!,
    items: articles
      .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())
      .map((article) => ({
        title: article.data.title,
        pubDate: article.data.date,
        description: article.data.description,
        link: `${base}/ecrits/${article.id}`,
      })),
  });
}

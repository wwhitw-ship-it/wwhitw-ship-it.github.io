import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'posts'>;

/** 取得已發佈文章（草稿不會出現在正式網站），依日期新到舊 */
export async function getPosts() {
  const posts = await getCollection('posts', ({ data }) => import.meta.env.DEV || !data.draft);
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export function formatDate(d: Date) {
  return d.toLocaleDateString('zh-TW', { year: 'numeric', month: 'long', day: 'numeric' });
}

/** 估算閱讀時間（中文約每分鐘 400 字） */
export function readingTime(body = '') {
  const cjk = (body.match(/[㐀-鿿]/g) || []).length;
  const words = body.replace(/[㐀-鿿]/g, ' ').split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(cjk / 400 + words / 200));
}

/** 把相對於網站根目錄的圖片路徑加上 base path */
export function asset(src?: string | null) {
  if (!src) return '';
  if (/^https?:\/\//.test(src)) return src;
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${src.replace(/^\//, '')}`;
}

/** 膠囊標籤用的短日期，例如 2026.11.23 */
export function pillDate(d: Date) {
  const p = (n: number) => String(n).padStart(2, '0');
  return `${d.getFullYear()}.${p(d.getMonth() + 1)}.${p(d.getDate())}`;
}

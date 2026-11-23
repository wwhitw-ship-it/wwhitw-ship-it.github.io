// ✏️ 在這裡修改部落格的基本資訊
export const SITE = {
  title: '我的部落格',
  description: '記錄生活、想法與學習筆記。',
  author: '作者名稱',
  lang: 'zh-Hant',
  postsPerPage: 10,
};

/** 產生含 base path 的站內連結 */
export function url(path = '') {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`;
}

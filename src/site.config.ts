// ✏️ 在這裡修改部落格的基本資訊
export const SITE = {
  title: '我的部落格',
  /** 首頁標題第二行（斜體），建議用英文，例如 Journal、Notes、Diary */
  tagline: 'Journal',
  description: '記錄生活、想法與學習筆記。',
  author: '作者名稱',
  lang: 'zh-Hant',
  /** 配色：cream（淺黃）、yellow（亮黃）、gray（灰）、lavender（淡紫） */
  theme: 'cream' as 'cream' | 'yellow' | 'gray' | 'lavender',
  /** 首頁是否顯示「＋」寫文章按鈕（連到後台） */
  showWriteButton: true,
};

/** 產生含 base path 的站內連結 */
export function url(path = '') {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`;
}

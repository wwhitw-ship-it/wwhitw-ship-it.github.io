// ✏️ 在這裡修改部落格的基本資訊
export const SITE = {
  title: 'bettyer',
  /** 首頁標題第二行（斜體），建議用英文，例如 Journal、Notes、Diary */
  tagline: 'Journal',
  description: '記錄生活、想法與學習筆記。',
  author: 'Betty',
  lang: 'zh-Hant',
  /** 配色：cream（米白＋大地色，預設）、butter（奶油黃）、yellow（亮黃）、gray（灰）、lavender（淡紫） */
  theme: 'cream' as 'cream' | 'butter' | 'yellow' | 'gray' | 'lavender',
  /** 首頁是否顯示「＋」寫文章按鈕（連到後台） */
  showWriteButton: true,
};

/**
 * ✏️ 文章分類與顏色（像花朵一樣替文章上色）
 * color 可用：yellow 黃、peach 蜜桃、rose 玫瑰、sage 綠、sky 藍、lilac 紫
 * ⚠️ 新增或改名分類時，也要同步修改 public/admin/config.yml 裡「分類」的 options
 */
export const CATEGORIES = [
  { name: '生活', color: 'yellow' },
  { name: '旅行', color: 'peach' },
  { name: '閱讀', color: 'sage' },
  { name: '學習', color: 'sky' },
  { name: '心情', color: 'lilac' },
] as const;

export function categoryColor(name?: string | null) {
  return CATEGORIES.find((c) => c.name === name)?.color ?? 'none';
}

/** 產生含 base path 的站內連結 */
export function url(path = '') {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`;
}

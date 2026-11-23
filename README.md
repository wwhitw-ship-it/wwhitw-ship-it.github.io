# 我的部落格

用 **Astro** 製作的靜態部落格，內建網頁後台（`/admin`），部署在 **GitHub Pages**（免費），支援自訂網域。

寫文章 → 按儲存 → GitHub 自動重新建置 → 1～2 分鐘後網站更新。

---

## 一、第一次上線（約 10 分鐘）

### 1. 建立 GitHub 儲存庫
1. 註冊／登入 <https://github.com>
2. 右上角「+」→ **New repository**
3. Repository name 填 `my-blog`（或你喜歡的名字），選 **Public**，按 **Create repository**
   （不要勾選新增 README）

### 2. 修改兩個設定檔
- `public/admin/config.yml`：把 `YOUR_GITHUB_NAME/my-blog` 改成你的 `GitHub帳號/儲存庫名稱`
- `src/site.config.ts`：改部落格名稱、簡介、作者

### 3. 上傳程式碼
在這個資料夾裡執行（把網址換成你的儲存庫）：

```bash
git remote add origin https://github.com/你的帳號/my-blog.git
git push -u origin main
```

### 4. 開啟 GitHub Pages
儲存庫頁面 → **Settings** → 左側 **Pages** → Source 選 **GitHub Actions**。

到 **Actions** 分頁看「發佈網站」跑完（綠色勾勾），網站就上線了：
`https://你的帳號.github.io/my-blog/`

---

## 二、寫文章

### 取得登入用的 Token（只需做一次）
1. 打開 <https://github.com/settings/personal-access-tokens/new>
2. Token name 隨便取，Expiration 可選較長時間
3. **Repository access** → Only select repositories → 選你的部落格儲存庫
4. **Permissions** → Repository permissions → **Contents** 設為 **Read and write**
5. 按 Generate，複製 token（只會顯示一次，請自己保存好，不要給別人）

### 開始寫
1. 打開 `https://你的網址/admin/`
2. 選 **Sign In Using Access Token**，貼上 token
3. 點「文章」→「New」，填寫標題、日期、內文、上傳圖片
4. 按 **Save**，1～2 分鐘後網站自動更新

勾選「草稿」的文章不會出現在公開網站上。

> 也可以直接在 `src/content/posts/` 新增 `.md` 檔案寫文章，格式參考裡面的範例。

---

## 三、綁定自訂網域（買好網域後）

1. GitHub 儲存庫 → **Settings** → **Pages** → **Custom domain** 填入你的網域（例如 `blog.example.com` 或 `example.com`），按 Save
2. 到你購買網域的地方（GoDaddy、Namecheap、Cloudflare、Gandi…）設定 DNS：

   **用子網域（例如 `blog.example.com`）** — 新增一筆：

   | 類型 | 名稱 | 值 |
   | --- | --- | --- |
   | CNAME | `blog` | `你的帳號.github.io` |

   **用主網域（例如 `example.com`）** — 新增四筆 A 記錄，再加一筆 `www`：

   | 類型 | 名稱 | 值 |
   | --- | --- | --- |
   | A | `@` | `185.199.108.153` |
   | A | `@` | `185.199.109.153` |
   | A | `@` | `185.199.110.153` |
   | A | `@` | `185.199.111.153` |
   | CNAME | `www` | `你的帳號.github.io` |

3. 等 DNS 生效（幾分鐘～幾小時），回到 Pages 設定勾選 **Enforce HTTPS**
4. 到 **Actions** → 「發佈網站」→ **Run workflow** 重新發佈一次，讓網站網址更新成新網域

---

## 四、在自己電腦上預覽（選用）

需要先安裝 [Node.js](https://nodejs.org)（22 版以上）：

```bash
npm install
```

```bash
npm run dev
```

打開 <http://localhost:4321> 預覽。

## 檔案結構

```
src/content/posts/     文章（Markdown）
src/site.config.ts     部落格名稱、簡介、作者
src/pages/about.astro  「關於」頁面
src/styles/global.css  外觀樣式
public/admin/          網頁後台設定
public/images/uploads/ 後台上傳的圖片
.github/workflows/     自動發佈設定
```

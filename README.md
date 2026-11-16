# LLM 研究 Wiki

以繁體中文累積 LLM 研究知識。參考使用者提供的 Karpathy LLM Wiki 模式，並非官方實作。

## 專案入口
- [Wiki 索引](wiki/index.md)：三篇來源、三篇概念、一篇分析及一篇研究問題。
- [中文協作規則](AGENTS.md)：來源收錄、引用、問答與維護流程。
- [更新紀錄](wiki/log.md)：知識庫演進歷程。

全部研究頁目前為 AI 整理草稿，閱讀範圍見來源摘要，未重現論文實驗。

## 本機預覽
需要 Node.js 24，沒有第三方套件，不需 API 金鑰。依序執行 `npm run build`、`npm run check`、`npm run preview`，再開啟 http://127.0.0.1:4173 。也可直接開啟 site/index.html。

## 上傳 GitHub Pages
1. 建立空的 GitHub Repository，建議名稱 llm-research-wiki，分支使用 main。
2. 將本資料夾內容放在 Repository 根目錄，包含 .github/workflows/pages.yml。不要多包一層資料夾。
3. Git 會依 .gitignore 排除 raw/ 原始資料。若手動拖曳上傳，請排除 raw/ 附件與紀錄，只保留 raw/README.md 和 raw/assets/.gitkeep。
4. 到 Settings → Pages，將 Source 設為 GitHub Actions。
5. 到 Actions 執行 Publish research wiki，或推送 main 分支觸發流程。
6. 工作流程會建置、檢查並僅部署 site/。成功後從 Pages 或 Actions 取得實際網址。

網址通常為 https://你的帳號.github.io/llm-research-wiki/ ，依帳號與 Repository 名稱調整。目前尚未建立遠端 Repository 或執行雲端部署。

流程參考 [GitHub Pages 官方文件](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)。

## 新增研究內容
將來源放入 raw/，請 AI 閱讀 AGENTS.md，依 templates/ 範本建立或更新 wiki/，補齊引用與關聯，更新索引及日誌，再執行建置與檢查。網站自動產生新文章、卡片與搜尋資料，無須手動再寫 HTML。

## 目錄說明
- raw/：原始資料，既有檔案唯讀，預設不提交 Git。
- wiki/：公開的研究 Markdown，為網站主要內容來源。
- templates/：五種內容範本。
- scripts/：建置、檢查、本機預覽。
- site/：可部署網站，視覺與互動放在 site/assets/。
- .github/workflows/pages.yml：GitHub Pages 自動部署。

## 設計與公開範圍
霧白底、深綠色的研究筆記風格，支援手機排版、分類、全文搜尋與鍵盤操作。JavaScript 關閉時仍可閱讀全部文章。網站不包含 raw/、論文全文、私人附件或金鑰。未指定全專案授權，不推定第三方來源可自由轉載。

## 規則的延伸價值
AGENTS.md 規範新增來源、串連概念、保留分歧與更新索引的方式；建置工具讓新增內容使用相同版型呈現。規則與網站具有可重複操作的對應。

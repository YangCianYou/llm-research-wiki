# LLM 研究 Wiki 索引

以原始研究為起點，累積概念、比較與尚待回答的問題。全部研究頁目前為 AI 整理草稿，未標示使用者已審閱。

## 來源摘要
- [Transformer：Attention Is All You Need](sources/2017-vaswani-transformer.md)：以注意力為核心理解序列建模架構。
- [RAG：檢索與生成的結合](sources/2020-lewis-rag.md)：研究外部文件如何成為生成模型的條件。
- [LoRA：低秩參數調適](sources/2021-hu-lora.md)：以低秩更新理解參數高效率調適。

## 概念
- [Transformer 的架構層次](concepts/transformer.md)：注意力（Attention）是聚合資訊的機制；Transformer 是組合注意力、前饋網路與位置資訊的架構。
- [檢索增強生成（RAG）](concepts/retrieval-augmented-generation.md)：檢索增強生成（Retrieval-Augmented Generation）讓生成過程參考外部檢索內容。
- [低秩調適（LoRA）](concepts/low-rank-adaptation.md)：低秩調適（Low-Rank Adaptation）以較小的矩陣表示特定權重更新。

## 實體
目前沒有獨立實體頁。

## 綜合分析
- [RAG 與 LoRA：先問要改變什麼](syntheses/rag-and-lora.md)：區分檢索與參數調適，說明比較限制。

## 研究問題
- [研究方向與首批問題](questions/research-roadmap.md)：整理閱讀缺口與查證計畫。

## 維護
- [操作日誌](log.md)
- [專案說明](../README.md)

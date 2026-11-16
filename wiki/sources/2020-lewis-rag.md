---
title: "RAG：檢索與生成的結合"
type: source
created: 2026-11-16
updated: 2026-11-16
status: draft
tags: [llm]
sources: []
---

# RAG：檢索與生成的結合

## 書目與閱讀範圍
- 原始標題：Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks
- 作者：Patrick Lewis 等十二位作者
- 首次提交：2020-05-22
- 採用版本：2021-04-12，v4
- 來源類型：arXiv 論文版本；本頁不另認證同儕審查狀態
- 原始網址：[arXiv 2005.11401v4](https://arxiv.org/abs/2005.11401v4)
- 原始紀錄：[本地來源紀錄](../../raw/2020-lewis-rag-record.md)
- 取得日期：2026-11-16
- 閱讀範圍：摘要、導論、第 2.1–2.4 節文字；未逐項複核結果表與附錄。

## 研究問題與主要貢獻
來源主張：結合參數記憶與非參數記憶，讓生成參考檢索文件。[原文摘要](https://arxiv.org/html/2005.11401v4#abstract)

## 方法與評估條件
原文使用 DPR 檢索器、Wikipedia 索引與 BART-large 生成器。訓練時更新查詢編碼器與生成器，固定文件編碼器和索引。因此此論文的 RAG 並非「完全不訓練模型」。[原文 §2.2–2.4](https://arxiv.org/html/2005.11401v4#S2)

## 結果與證據位置
RAG-Sequence 與 RAG-Token 對檢索文件的邊際化方式不同。本次不轉錄或重現任務分數。[原文 §2.1](https://arxiv.org/html/2005.11401v4#S2.SS1)

## 限制與分歧
有文件可參考不等於每句輸出均正確，也不能將這個特定架構等同所有現代 RAG 管線。

## AI 綜合推論
研究知識更新時，應同時檢查文件內容、檢索結果與生成內容，避免只評估最終答案。

## 待確認問題
哪些檢索錯誤會改變答案？需要另訂測試集。

## 相關頁面
- [對應概念](../concepts/retrieval-augmented-generation.md)
- [RAG 與 LoRA 比較](../syntheses/rag-and-lora.md)

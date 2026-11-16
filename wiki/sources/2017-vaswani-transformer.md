---
title: "Transformer：Attention Is All You Need"
type: source
created: 2026-11-16
updated: 2026-11-16
status: draft
tags: [llm]
sources: []
---

# Transformer：Attention Is All You Need

## 書目與閱讀範圍
- 原始標題：Attention Is All You Need
- 作者：Ashish Vaswani 等八位作者
- 首次提交：2017-06-12
- 採用版本：2023-08-02，v7
- 來源類型：arXiv 論文版本；本頁不另認證同儕審查狀態
- 原始網址：[arXiv 1706.03762v7](https://arxiv.org/abs/1706.03762v7)
- 原始紀錄：[本地來源紀錄](../../raw/2017-vaswani-transformer-record.md)
- 取得日期：2026-11-16
- 閱讀範圍：摘要、第 3.1–3.5 節文字；未逐項複核圖表、訓練結果或附錄。

## 研究問題與主要貢獻
來源主張：提出 Transformer，以注意力取代序列轉換架構中的循環與卷積。原始設計是編碼器—解碼器，不能直接視為所有現代聊天模型的規格。[原文摘要](https://arxiv.org/html/1706.03762v7#abstract)

## 方法與評估條件
編碼器與解碼器結合多頭注意力、前饋網路與位置編碼；解碼端遮罩限制對未來位置的存取。[原文 §3](https://arxiv.org/html/1706.03762v7#S3)

## 結果與證據位置
本筆記聚焦架構，不轉錄分數。原文以機器翻譯評估；不能從這些任務直接推論聊天品質。請參閱原文 §6，本次未複核該節結果表。

## 限制與分歧
需區分原始編碼器—解碼器架構與後續變體；本次不比較各變體的效能。

## AI 綜合推論
理解元件有助於區分「模型如何處理序列」與「如何取得外部知識」兩種不同問題。

## 待確認問題
後續 decoder-only 模型如何改變訓練目標？需另收錄研究。

## 相關頁面
- [對應概念](../concepts/transformer.md)
- [RAG 與 LoRA 比較](../syntheses/rag-and-lora.md)

---
title: "LoRA：低秩參數調適"
type: source
created: 2026-11-16
updated: 2026-11-16
status: draft
tags: [llm]
sources: []
---

# LoRA：低秩參數調適

## 書目與閱讀範圍
- 原始標題：LoRA: Low-Rank Adaptation of Large Language Models
- 作者：Edward J. Hu 等八位作者
- 首次提交：2021-06-17
- 採用版本：2021-10-16，v2
- 來源類型：arXiv 論文版本；本頁不另認證同儕審查狀態
- 原始網址：[arXiv 2106.09685v2](https://arxiv.org/abs/2106.09685v2)
- 原始紀錄：[本地來源紀錄](../../raw/2021-hu-lora-record.md)
- 取得日期：2026-11-16
- 閱讀範圍：摘要、第 2 節、第 4.1–4.2 節文字；未逐項複核實驗表與附錄。

## 研究問題與主要貢獻
來源主張：凍結預訓練權重，以可訓練的低秩矩陣表示權重更新，減少下游調適需要訓練的參數。[原文摘要](https://arxiv.org/html/2106.09685v2#abstract)

## 方法與評估條件
以 W₀ + BA 表示調適後權重；W₀ 固定，A 與 B 可訓練。低秩限制施加於更新，而非宣稱原始權重本身必須低秩。[原文 §4.1](https://arxiv.org/html/2106.09685v2#S4.SS1)

## 結果與證據位置
低秩更新可合併回原始權重；原文關於無額外推論延遲的說明具有此合併部署前提。本次不重現任何速度或記憶體數值。[原文 §4.1](https://arxiv.org/html/2106.09685v2#S4.SS1)

## 限制與分歧
減少可訓練參數不代表免除訓練，也不代表所有任務都能使用相同秩與設定。

## AI 綜合推論
選擇方法時應區分訓練成本、部署方式與任務品質，不能以單一參數量決定優劣。

## 待確認問題
秩、資料量與目標任務之間的關係，需閱讀實驗章節與後續研究。

## 相關頁面
- [對應概念](../concepts/low-rank-adaptation.md)
- [RAG 與 LoRA 比較](../syntheses/rag-and-lora.md)

---
title: "RAG 與 LoRA：先問要改變什麼"
type: synthesis
created: 2026-11-16
updated: 2026-11-16
status: draft
tags: [llm]
sources: ["../sources/2020-lewis-rag.md","../sources/2021-hu-lora.md"]
---

# RAG 與 LoRA：先問要改變什麼

## 研究問題與範圍
RAG 與 LoRA 是否只能二選一？本分析限於已收錄的兩篇方法論文，沒有共同基準實驗。

## 結論
AI 綜合推論：兩者處理不同層次的設計問題，不能直接以名稱排名。RAG 改變生成可參考的文件條件；LoRA 改變參數調適的表示方式。[RAG 來源 §2](../sources/2020-lewis-rag.md)、[LoRA 來源 §4](../sources/2021-hu-lora.md)

## 證據比較
| 比較面向 | RAG 原始論文 | LoRA 原始論文 |
| --- | --- | --- |
| 主要關注 | 檢索文件與生成結合 | 低秩參數更新 |
| 是否涉及訓練 | 更新查詢編碼器與生成器 | 訓練新增低秩矩陣 |
| 本頁證據 | [方法 §2](../sources/2020-lewis-rag.md) | [方法 §4](../sources/2021-hu-lora.md) |
| 可否直接比較品質 | 沒有共同模型與測試條件 | 沒有共同模型與測試條件 |

## 矛盾與替代解釋
「RAG 完全不用訓練、LoRA 才需要訓練」不符合已收錄 RAG 論文的設定。這不是兩篇論文互相矛盾，而是常見概括忽略方法細節。[RAG 方法摘要](../sources/2020-lewis-rag.md)

## 限制與下一步
目前沒有收錄兩者結合的實證研究，也未執行本地模型實驗。AI 提出的後續計畫：固定基礎模型與題目，分別量測檢索品質、回答可支持性、任務品質與成本，再決定適合的組合。這是研究提案，不是已驗證結論。

## 相關頁面
- [RAG 概念](../concepts/retrieval-augmented-generation.md)
- [LoRA 概念](../concepts/low-rank-adaptation.md)
- [研究方向](../questions/research-roadmap.md)

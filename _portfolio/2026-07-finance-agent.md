---
title: "Cost-Aware Retrieval-Reasoning Agent for Long Financial Documents"
excerpt: "A MinerU + DocumentIR + EvidenceRegistry pipeline for evidence retrieval and reasoning with lower API-token cost."
collection: portfolio
date: 2026-07-01
---

Built a layered Retrieval-Reasoning Agent. MinerU converts PDFs into structured DocumentIR, while a Scope Router organizes documents by type and entity. The lower layer combines financial-document rules, fact decomposition, question- and fact-aware routing, multi-path BM25, table extraction, and deterministic computation for low-cost evidence retrieval and compression.

The upper layer delegates cross-document semantic judgment and complex reasoning to Qwen. EvidenceRegistry and CoverageGate manage fact-level evidence coverage and drive targeted retrieval for missing evidence.

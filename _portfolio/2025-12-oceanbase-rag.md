---
title: "OceanBase Database Kernel Extensions and Multimodal RAG"
excerpt: "seekdb kernel optimization and a multimodal RAG pipeline for mixed text-and-figure financial reports."
collection: portfolio
date: 2025-12-01
---

Analyzed the seekdb SQL optimizer, DAS execution layer, and inverted-index pipeline. For full-text search + scalar filtering + Top-K ranking, redesigned the IndexMerge batch execution flow with RoaringBitmap, dynamic skipping, and batch table lookup, and introduced TokenDF caching for BM25 document-frequency statistics.

Built a multimodal RAG pipeline for financial reports with mixed text, tables, and figures. The pipeline uses VLM extraction, semantic chunking, embeddings, filename and page metadata, HNSW vector indexes, IK full-text indexes, QueryExpansion, hybrid retrieval, RRF fusion, LLM reranking, and context reranking to produce traceable answers with source files and page numbers.

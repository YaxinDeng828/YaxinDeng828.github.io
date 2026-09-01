---
permalink: /
layout: home
title: "Deng Yaxin"
author_profile: false
---

<main class="home-shell">
  <div class="home-layout">
    <aside class="home-sidebar" aria-labelledby="sidebar-name">
      <figure class="home-sidebar__portrait">
        <img src="/images/deng-yaxin.jpg" alt="Photo of Deng Yaxin" data-alt-en="Photo of Deng Yaxin" data-alt-zh="邓雅馨的照片">
      </figure>
      <h1 id="sidebar-name">
        <span class="language-text language-text--en">Yaxin Deng</span>
        <span class="language-text language-text--zh" lang="zh-CN">邓雅馨</span>
      </h1>
      <p>
        <span class="language-text language-text--en">Beijing Institute of Technology<br>Computer Science</span>
        <span class="language-text language-text--zh" lang="zh-CN">北京理工大学<br>计算机科学</span>
      </p>
      <a href="mailto:yaxindeng0828@gmail.com">yaxindeng0828@gmail.com</a>
    </aside>

    <div class="home-content">
      <section id="about" class="home-section" aria-labelledby="about-title">
        <h2 id="about-title">
          <span class="language-text language-text--en">About Me</span>
          <span class="language-text language-text--zh" lang="zh-CN">关于我</span>
        </h2>
        <div class="home-copy">
          <p>
            <span class="language-text language-text--en">I am a Computer Science and Technology undergraduate at Beijing Institute of Technology, expected to graduate in 2027.</span>
            <span class="language-text language-text--zh" lang="zh-CN">我是北京理工大学计算机科学专业本科生，预计于 2027 年毕业。</span>
          </p>
          <p>
            <span class="language-text language-text--en">My work explores how agent systems can behave more reliably in uncertain, long-context, and low-feedback environments. I am particularly interested in long-term memory, GraphRAG, data reasoning, and database systems.</span>
            <span class="language-text language-text--zh" lang="zh-CN">我的研究关注智能体系统如何在不确定、长上下文和低反馈环境中更加可靠地运行，尤其关注长期记忆、GraphRAG、数据推理和数据库系统。</span>
          </p>
        </div>
      </section>

      <section id="research" class="home-section" aria-labelledby="research-title">
        <h2 id="research-title">
          <span class="language-text language-text--en">Research Interest</span>
          <span class="language-text language-text--zh" lang="zh-CN">研究方向</span>
        </h2>
        <ul class="interest-list">
          <li>
            <span class="interest-title language-text language-text--en">Agent Memory</span>
            <span class="interest-description language-text language-text--en">Evidence-admissible, temporal, and provenance-aware memory mechanisms for reliable agents.</span>
            <span class="interest-title language-text language-text--zh" lang="zh-CN">智能体记忆</span>
            <span class="interest-description language-text language-text--zh" lang="zh-CN">面向可靠智能体的证据可采纳、时序化和可追溯长期记忆机制。</span>
          </li>
          <li>
            <span class="interest-title language-text language-text--en">GraphRAG</span>
            <span class="interest-description language-text language-text--en">Graph-structured retrieval and reasoning over evolving entities, relations, and evidence paths.</span>
            <span class="interest-title language-text language-text--zh" lang="zh-CN">GraphRAG</span>
            <span class="interest-description language-text language-text--zh" lang="zh-CN">围绕演化中的实体、关系和证据路径开展图结构检索与推理。</span>
          </li>
          <li>
            <span class="interest-title language-text language-text--en">Database Systems</span>
            <span class="interest-description language-text language-text--en">Efficient query processing, data reasoning, and systems for structured and temporal data.</span>
            <span class="interest-title language-text language-text--zh" lang="zh-CN">数据库系统</span>
            <span class="interest-description language-text language-text--zh" lang="zh-CN">面向结构化数据和时序数据的高效查询处理、数据推理与系统设计。</span>
          </li>
        </ul>
      </section>

      <section id="papers" class="home-section" aria-labelledby="papers-title">
        <h2 id="papers-title">
          <span class="language-text language-text--en">Paper</span>
          <span class="language-text language-text--zh" lang="zh-CN">论文</span>
        </h2>
        <article class="paper-entry" tabindex="0" aria-describedby="memdtg-abstract">
          <h3>
            <span class="language-text language-text--en">MemDTG: Dynamic Temporal Memory Graphs for Evidence-Admissible Agent Memory</span>
            <span class="language-text language-text--zh" lang="zh-CN">MemDTG：面向证据可采纳智能体记忆的动态时序记忆图</span>
          </h3>
          <p class="paper-authors">
            <span class="language-text language-text--en"><strong>Yaxin Deng</strong>, Hongchao Qin, Tianyi Gao, Guang Zeng, and Rong-Hua Li</span>
            <span class="language-text language-text--zh" lang="zh-CN"><strong>邓雅馨</strong>、秦洪超、高天翼、曾广、李荣华</span>
          </p>
          <p class="paper-meta">
            <span class="language-text language-text--en">The 35th ACM International Conference on Information and Knowledge Management (CIKM '26) · CCF-B</span>
            <span class="language-text language-text--zh" lang="zh-CN">第 35 届 ACM 国际知识管理与信息管理会议（CIKM '26）· CCF-B</span>
          </p>
          <div id="memdtg-abstract" class="paper-abstract">
            <p class="paper-abstract__label">
              <span class="language-text language-text--en">Abstract</span>
              <span class="language-text language-text--zh" lang="zh-CN">摘要</span>
            </p>
            <p>Long-term agent memory is an online, non-monotonic retrieval problem: new interactions can reinforce, contradict, supersede, or expire earlier memories. MemDTG treats memory as temporal evidence admission, combining immutable episodes, a mutable entity-state graph, and a memory-evolution graph over assertion versions. It compiles query constraints before ranking and uses QV-CTW to retrieve only evidence paths inside the legal temporal subgraph, while evidence certificates record selected facts, sources, roles, and rejected alternatives. On LongMemEval and LoCoMo, MemDTG achieves the best LLM-judge accuracy and Citation F1, reducing stale-answer errors by 61.7% and future leaks by 80.1%.</p>
          </div>
        </article>
      </section>

      <section id="education" class="home-section" aria-labelledby="education-title">
        <h2 id="education-title">
          <span class="language-text language-text--en">Education</span>
          <span class="language-text language-text--zh" lang="zh-CN">教育经历</span>
        </h2>
        <div class="education-entry">
          <p class="education-period">
            <span class="language-text language-text--en">September 2023 - July 2027</span>
            <span class="language-text language-text--zh" lang="zh-CN">2023 年 9 月 - 2027 年 7 月</span>
          </p>
          <div>
            <p class="education-school">
              <span class="language-text language-text--en">Beijing Institute of Technology</span>
              <span class="language-text language-text--zh" lang="zh-CN">北京理工大学</span>
            </p>
            <p class="education-degree">
              <span class="language-text language-text--en">B.Eng. in Computer Science and Technology</span>
              <span class="language-text language-text--zh" lang="zh-CN">计算机科学与技术专业，本科</span>
            </p>
          </div>
        </div>
      </section>

      <section id="awards" class="home-section" aria-labelledby="awards-title">
        <h2 id="awards-title">
          <span class="language-text language-text--en">Awards</span>
          <span class="language-text language-text--zh" lang="zh-CN">获奖情况</span>
        </h2>
        <ul class="award-list">
          <li><span class="award-name">2026 年“挑战杯”首都大学生创业计划竞赛</span> · <strong>北京赛区一等奖</strong></li>
          <li><span class="award-name">2025 年中国高校计算机大赛-团体程序设计天梯赛</span> · <strong>个人决赛三等奖</strong></li>
          <li><span class="award-name">全国大学生计算机系统能力大赛暨第五届 OceanBase 数据库大赛</span> · <strong>北京赛区第一名</strong></li>
          <li><span class="award-name">第十五届蓝桥杯全国软件和信息技术专业人才大赛</span> · <strong>C/C++ 组国赛三等奖</strong></li>
          <li><span class="award-name">第七届码蹄杯全国大学生程序设计大赛</span> · <strong>本科组银奖</strong></li>
          <li><span class="award-name">2024 年全国大学生数学建模竞赛</span> · <strong>省赛二等奖</strong></li>
          <li>
            <span class="award-name language-text language-text--en" lang="en">2024: The Mathematical Contest in Modeling (MCM) / The Interdisciplinary Contest in Modeling (ICM)</span>
            <span class="award-name language-text language-text--zh" lang="zh-CN">2024 年美国大学生数学建模竞赛</span>
            ·
            <strong><span class="language-text language-text--en" lang="en">Honorable Mention</span><span class="language-text language-text--zh" lang="zh-CN">H奖</span></strong>
          </li>
          <li>
            <span class="award-name language-text language-text--en" lang="en">Beijing Institute of Technology</span>
            <span class="award-name language-text language-text--zh" lang="zh-CN">北京理工大学</span>
            ·
            <strong><span class="language-text language-text--en" lang="en">First-Class Scholarship</span><span class="language-text language-text--zh" lang="zh-CN">一等奖学金</span></strong>
          </li>
        </ul>
      </section>
    </div>
  </div>
</main>
